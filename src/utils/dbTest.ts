// Simple database connection test
import { supabase } from '../lib/supabase';

export async function testDatabaseConnection() {
  console.log('[DB Test] Starting database tests...');
  
  try {
    // Test 1: Basic connection
    const { data: connectionTest, error: connectionError } = await supabase.from('users').select('count');
    
    if (connectionError) {
      console.error('[DB Test] Connection error:', connectionError);
      return false;
    }
    
    console.log('[DB Test] ✅ Basic connection successful');
    
    // Test 2: Check if user_progress table exists
    const { data: progressTest, error: progressError } = await supabase.from('user_progress').select('*').limit(1);
    
    if (progressError) {
      console.error('[DB Test] user_progress table error:', progressError);
      return false;
    }
    
    console.log('[DB Test] ✅ user_progress table exists');
    
    // Test 3: Check table structure
    const { data: tableInfo, error: tableError } = await supabase.rpc('get_table_columns', { table_name: 'user_progress' });
    
    if (tableError) {
      console.log('[DB Test] ⚠️ Could not get table structure, but tables exist');
    } else {
      console.log('[DB Test] ✅ Table structure available:', tableInfo);
    }
    
    return true;
    
  } catch (error) {
    console.error('[DB Test] Unexpected error:', error);
    return false;
  }
}