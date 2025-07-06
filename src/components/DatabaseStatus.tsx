import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useUser } from '@clerk/clerk-react';

interface SetupStep {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  required: boolean;
}

export default function DatabaseStatus() {
  const [status, setStatus] = useState({
    connected: false,
    tables: {
      users: false,
      user_progress: false,
      badges: false,
      user_badges: false
    },
    user_synced: false,
    error: null as string | null
  });
  const [showSetupGuide, setShowSetupGuide] = useState(false);
  const { user } = useUser();

  const setupSteps: SetupStep[] = [
    {
      id: 'env',
      title: 'Environment Variables',
      description: 'Create .env file with Supabase credentials',
      completed: !!(import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY),
      required: true
    },
    {
      id: 'connection',
      title: 'Database Connection',
      description: 'Verify connection to Supabase',
      completed: status.connected,
      required: true
    },
    {
      id: 'tables',
      title: 'Database Tables',
      description: 'Create required tables using SQL script',
      completed: Object.values(status.tables).every(Boolean),
      required: true
    },
    {
      id: 'user_sync',
      title: 'User Synchronization',
      description: 'Sync authenticated user with database',
      completed: status.user_synced,
      required: false
    }
  ];

  useEffect(() => {
    checkDatabaseStatus();
  }, [user]);

  const checkDatabaseStatus = async () => {
    try {
      // Test basic connection by trying to access a system table
      const { data: testData, error: testError } = await supabase
        .rpc('get_schema_version')
        .single();

      // If RPC doesn't exist, try a simpler connection test
      if (testError) {
        // Alternative: Try to select from any table to test connection
        const { error: connectionError } = await supabase
          .from('users')
          .select('id')
          .limit(1);
        
        if (connectionError && !connectionError.message.includes('relation "public.users" does not exist')) {
          setStatus(prev => ({ ...prev, error: `Connection failed: ${connectionError.message}` }));
          return;
        }
      }

      setStatus(prev => ({ ...prev, connected: true }));

      // Check if each table exists
      const tables = ['users', 'user_progress', 'badges', 'user_badges'];
      const tableStatus: any = {};

      for (const table of tables) {
        try {
          const { data, error } = await supabase
            .from(table)
            .select('*')
            .limit(1);
          
          tableStatus[table] = !error;
          if (error) {
            console.log(`Table ${table} check failed:`, error.message);
          }
        } catch (err) {
          tableStatus[table] = false;
        }
      }

      // Check if current user exists in users table
      let userSynced = false;
      if (user && tableStatus.users) {
        try {
          const { data: userData, error: userError } = await supabase
            .from('users')
            .select('id')
            .eq('id', user.id)
            .single();

          userSynced = !userError && userData;
        } catch (err) {
          userSynced = false;
        }
      }

      setStatus(prev => ({
        ...prev,
        tables: tableStatus,
        user_synced: userSynced,
        error: null
      }));

    } catch (error: any) {
      setStatus(prev => ({ ...prev, error: error.message }));
    }
  };

  const createTables = async () => {
    try {
      // Check if we have environment variables first
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
      
      if (!supabaseUrl || !supabaseKey) {
        alert('❌ Environment variables missing!\n\nPlease create a .env file with:\nVITE_SUPABASE_URL=your_supabase_url\nVITE_SUPABASE_ANON_KEY=your_anon_key\n\nThen restart the development server.');
        return;
      }
      
      setShowSetupGuide(true);
    } catch (error: any) {
      console.error('Failed to create tables:', error);
    }
  };

  const SetupGuide = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Database Setup Guide</h3>
          <button 
            onClick={() => setShowSetupGuide(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <div className="space-y-4">
          {setupSteps.map((step, index) => (
            <div key={step.id} className="border rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                  step.completed ? 'bg-green-500' : step.required ? 'bg-red-500' : 'bg-gray-400'
                }`}>
                  {step.completed ? '✓' : index + 1}
                </div>
                <h4 className="font-semibold">{step.title}</h4>
                {step.required && <span className="text-red-500 text-sm">(Required)</span>}
              </div>
              <p className="text-gray-600 mb-3">{step.description}</p>
              
              {step.id === 'env' && !step.completed && (
                <div className="bg-gray-50 p-3 rounded text-sm">
                  <p className="font-medium mb-2">1. Create a .env file in your project root:</p>
                  <pre className="bg-gray-800 text-white p-2 rounded text-xs overflow-x-auto">
{`VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key`}
                  </pre>
                  <p className="mt-2 text-gray-600">2. Restart your development server (npm run dev)</p>
                </div>
              )}
              
              {step.id === 'tables' && !step.completed && (
                <div className="bg-gray-50 p-3 rounded text-sm">
                  <p className="font-medium mb-2">Run this SQL in your Supabase SQL Editor:</p>
                  <div className="bg-gray-800 text-white p-2 rounded text-xs">
                    <p>1. Go to your Supabase Dashboard</p>
                    <p>2. Open SQL Editor</p>
                    <p>3. Copy contents of fix-database.sql</p>
                    <p>4. Paste and run the SQL</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-6 flex justify-end space-x-2">
          <button 
            onClick={() => setShowSetupGuide(false)}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Close
          </button>
          <button 
            onClick={() => {
              checkDatabaseStatus();
              setShowSetupGuide(false);
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Refresh Status
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-semibold mb-4">Database Status</h3>
      
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <span className={`w-3 h-3 rounded-full ${status.connected ? 'bg-green-500' : 'bg-red-500'}`}></span>
          <span>Database Connection: {status.connected ? 'Connected' : 'Failed'}</span>
        </div>
        
        {!import.meta.env.VITE_SUPABASE_URL && (
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative">
            <strong className="font-bold">⚠️ Missing Environment Variables!</strong>
            <span className="block sm:inline"> Please create a .env file with your Supabase credentials.</span>
          </div>
        )}

        <div className="ml-4 space-y-1">
          {Object.entries(status.tables).map(([table, exists]) => (
            <div key={table} className="flex items-center space-x-2">
              <span className={`w-2 h-2 rounded-full ${exists ? 'bg-green-500' : 'bg-red-500'}`}></span>
              <span className="text-sm">Table {table}: {exists ? 'Exists' : 'Missing'}</span>
            </div>
          ))}
        </div>

        {user && (
          <div className="flex items-center space-x-2">
            <span className={`w-3 h-3 rounded-full ${status.user_synced ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
            <span>User Synced: {status.user_synced ? 'Yes' : 'No'}</span>
          </div>
        )}

        {status.error && (
          <div className="text-red-600 text-sm mt-2">
            Error: {status.error}
          </div>
        )}
      </div>

      <div className="mt-4 space-x-2">
        <button 
          onClick={checkDatabaseStatus}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Refresh Status
        </button>
        
        {!Object.values(status.tables).every(Boolean) && (
          <button 
            onClick={createTables}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Setup Tables
          </button>
        )}
      </div>
      
      {showSetupGuide && <SetupGuide />}
    </div>
  );
}