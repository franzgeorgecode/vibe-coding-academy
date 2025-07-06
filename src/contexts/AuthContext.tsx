import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuth as useClerkAuth, useUser } from '@clerk/clerk-react';
import { supabase } from '../lib/supabase';

interface AuthContextType {
  user: any;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signOut: async () => {},
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { isSignedIn, isLoaded, signOut: clerkSignOut } = useClerkAuth();
  const { user: clerkUser } = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const syncUserWithSupabase = async () => {
      if (isLoaded) {
        if (isSignedIn && clerkUser) {
          try {
            // Sync user data with Supabase - use simple upsert
            const { data, error } = await supabase
              .from('users')
              .upsert({
                id: clerkUser.id,
                email: clerkUser.emailAddresses[0]?.emailAddress,
                first_name: clerkUser.firstName,
                last_name: clerkUser.lastName,
                username: clerkUser.username || clerkUser.emailAddresses[0]?.emailAddress.split('@')[0],
                avatar_url: clerkUser.imageUrl,
                last_activity: new Date().toISOString().split('T')[0],
                updated_at: new Date().toISOString()
              }, { 
                onConflict: 'id',
                ignoreDuplicates: false 
              });

            if (error) {
              console.error('Error syncing user with Supabase:', error);
            } else {
              console.log('User synced successfully with Supabase');
            }
          } catch (error) {
            console.error('Error in user sync:', error);
          }
        }
        setLoading(false);
      }
    };

    syncUserWithSupabase();
  }, [isSignedIn, isLoaded, clerkUser]);

  const signOut = async () => {
    await clerkSignOut();
  };

  const value = {
    user: clerkUser,
    loading: loading || !isLoaded,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};