-- Clean database setup - Use this if you get UUID/type errors
-- This script drops and recreates all tables to ensure correct types

-- Drop tables in correct order (foreign keys first)
DROP TABLE IF EXISTS user_badges CASCADE;
DROP TABLE IF EXISTS badges CASCADE;
DROP TABLE IF EXISTS user_progress CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- Create users table
CREATE TABLE users (
  id text PRIMARY KEY,
  email text UNIQUE,
  first_name text,
  last_name text,
  username text,
  avatar_url text,
  total_xp integer DEFAULT 0,
  current_level integer DEFAULT 1,
  streak_days integer DEFAULT 0,
  last_activity date DEFAULT CURRENT_DATE,
  course_completed boolean DEFAULT false,
  course_completed_at timestamptz,
  total_study_time integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create user_progress table
CREATE TABLE user_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text NOT NULL,
  lesson_id text NOT NULL,
  completed boolean DEFAULT false NOT NULL,
  score integer DEFAULT 0,
  attempts integer DEFAULT 1,
  completed_at timestamptz,
  time_spent integer DEFAULT 0,
  hints_used integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id, lesson_id)
);

-- Create badges table (id must be text, not uuid)
CREATE TABLE badges (
  id text PRIMARY KEY,
  name text NOT NULL,
  description text,
  icon text,
  xp_reward integer DEFAULT 0,
  rarity text DEFAULT 'common',
  created_at timestamptz DEFAULT now()
);

-- Create user_badges table
CREATE TABLE user_badges (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text NOT NULL,
  badge_id text NOT NULL REFERENCES badges(id),
  earned_at timestamptz DEFAULT now(),
  UNIQUE(user_id, badge_id)
);

-- Insert badge data (using text IDs like 'lesson-1-1')
INSERT INTO badges (id, name, description, icon, xp_reward, rarity) VALUES
  ('lesson-1-1', 'bolt.new Pioneer', 'First steps into AI-powered development', '🚀', 15, 'common'),
  ('lesson-1-2', 'AI Whisperer', 'Mastered the art of prompt engineering', '🤖', 20, 'common'),
  ('lesson-1-3', 'Tech Detective', 'Explored every corner of the bolt.new interface', '🔍', 25, 'common'),
  ('lesson-2-1', 'Supreme Connector', 'Connected apps to powerful databases', '🔗', 30, 'rare'),
  ('lesson-2-2', 'Data Architect', 'Designed complex database structures', '🏗️', 35, 'rare'),
  ('lesson-2-3', 'Edge Lord', 'Implemented blazing-fast real-time features', '⚡', 40, 'rare'),
  ('lesson-3-1', 'Digital Guardian', 'Secured applications with authentication', '🛡️', 45, 'epic'),
  ('lesson-3-2', 'Night Watchman', 'Implemented fortress-level security', '🌙', 50, 'epic'),
  ('lesson-3-3', 'Social Butterfly', 'Connected users with social authentication', '🦋', 55, 'epic'),
  ('lesson-4-1', 'Space Launcher', 'Successfully deployed to the cloud', '🚀', 60, 'epic'),
  ('lesson-4-2', 'Domain Lord', 'Conquered the realm of custom domains', '👑', 65, 'epic'),
  ('lesson-4-3', 'Automation Master', 'Built self-updating deployment pipelines', '⚙️', 70, 'legendary'),
  ('lesson-5-1', 'Git Guru', 'Mastered the art of version control', '📚', 75, 'legendary'),
  ('lesson-5-2', 'Money Maker', 'Integrated payment systems like a pro', '💰', 80, 'legendary'),
  ('lesson-5-3', 'Design Translator', 'Transformed designs into living code', '🎨', 85, 'legendary'),
  ('lesson-6-1', 'Speed Demon', 'Optimized apps for lightning performance', '💨', 90, 'legendary'),
  ('lesson-6-2', 'Vibe Coding Master', 'Achieved advanced development mastery', '🎯', 95, 'legendary'),
  ('lesson-6-3', 'SrCode Approved', 'Earned the ultimate seal of approval', '✨', 100, 'legendary');

-- Create indexes for performance
CREATE INDEX idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX idx_user_progress_lesson_id ON user_progress(lesson_id);
CREATE INDEX idx_user_progress_completed ON user_progress(user_id, completed);
CREATE INDEX idx_user_badges_user_id ON user_badges(user_id);
CREATE INDEX idx_users_xp ON users(total_xp);

-- Disable RLS for now (development only)
ALTER TABLE users DISABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress DISABLE ROW LEVEL SECURITY;
ALTER TABLE badges DISABLE ROW LEVEL SECURITY;
ALTER TABLE user_badges DISABLE ROW LEVEL SECURITY;