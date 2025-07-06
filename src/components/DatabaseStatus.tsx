import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useUser } from '@clerk/clerk-react';

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
  const { user } = useUser();

  useEffect(() => {
    checkDatabaseStatus();
  }, [user]);

  const checkDatabaseStatus = async () => {
    try {
      // Test basic connection
      const { data: testData, error: testError } = await supabase
        .from('information_schema.tables')
        .select('table_name')
        .eq('table_schema', 'public')
        .limit(1);

      if (testError) {
        setStatus(prev => ({ ...prev, error: `Connection failed: ${testError.message}` }));
        return;
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
      // This would need to be done via SQL editor in Supabase dashboard
      // or through a migration
      alert('Please run the SQL from fix-database.sql in your Supabase SQL editor');
    } catch (error: any) {
      console.error('Failed to create tables:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-semibold mb-4">Database Status</h3>
      
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <span className={`w-3 h-3 rounded-full ${status.connected ? 'bg-green-500' : 'bg-red-500'}`}></span>
          <span>Database Connection: {status.connected ? 'Connected' : 'Failed'}</span>
        </div>

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
    </div>
  );
}