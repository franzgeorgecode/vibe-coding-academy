/*
  # Fix User Progress Table Constraints
  
  This migration fixes the ON CONFLICT issues in the user_progress table
  by ensuring proper unique constraints exist and match what the application expects.
*/

-- First, check if the user_progress table exists and its current structure
DO $$
BEGIN
  -- Drop any existing problematic constraints
  IF EXISTS (
    SELECT 1 FROM information_schema.table_constraints 
    WHERE table_name = 'user_progress' AND constraint_type = 'UNIQUE'
  ) THEN
    -- Drop all existing unique constraints to start fresh
    ALTER TABLE user_progress DROP CONSTRAINT IF EXISTS user_progress_user_id_lesson_id_key;
    ALTER TABLE user_progress DROP CONSTRAINT IF EXISTS user_progress_pkey;
    ALTER TABLE user_progress DROP CONSTRAINT IF EXISTS unique_user_lesson;
  END IF;
END $$;

-- Ensure the table has all required columns with correct types
DO $$
BEGIN
  -- Add id column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'user_progress' AND column_name = 'id'
  ) THEN
    ALTER TABLE user_progress ADD COLUMN id uuid DEFAULT gen_random_uuid();
  END IF;

  -- Ensure user_id exists
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'user_progress' AND column_name = 'user_id'
  ) THEN
    ALTER TABLE user_progress ADD COLUMN user_id uuid NOT NULL;
  END IF;

  -- Ensure lesson_id exists
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'user_progress' AND column_name = 'lesson_id'
  ) THEN
    ALTER TABLE user_progress ADD COLUMN lesson_id text NOT NULL;
  END IF;

  -- Ensure completed exists
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'user_progress' AND column_name = 'completed'
  ) THEN
    ALTER TABLE user_progress ADD COLUMN completed boolean DEFAULT false NOT NULL;
  END IF;

  -- Ensure score exists
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'user_progress' AND column_name = 'score'
  ) THEN
    ALTER TABLE user_progress ADD COLUMN score integer DEFAULT 0;
  END IF;

  -- Ensure attempts exists
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'user_progress' AND column_name = 'attempts'
  ) THEN
    ALTER TABLE user_progress ADD COLUMN attempts integer DEFAULT 1;
  END IF;

  -- Ensure completed_at exists
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'user_progress' AND column_name = 'completed_at'
  ) THEN
    ALTER TABLE user_progress ADD COLUMN completed_at timestamptz;
  END IF;

  -- Ensure time_spent exists
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'user_progress' AND column_name = 'time_spent'
  ) THEN
    ALTER TABLE user_progress ADD COLUMN time_spent integer DEFAULT 0;
  END IF;

  -- Ensure hints_used exists
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'user_progress' AND column_name = 'hints_used'
  ) THEN
    ALTER TABLE user_progress ADD COLUMN hints_used integer DEFAULT 0;
  END IF;

  -- Ensure created_at exists
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'user_progress' AND column_name = 'created_at'
  ) THEN
    ALTER TABLE user_progress ADD COLUMN created_at timestamptz DEFAULT now();
  END IF;

  -- Ensure updated_at exists
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'user_progress' AND column_name = 'updated_at'
  ) THEN
    ALTER TABLE user_progress ADD COLUMN updated_at timestamptz DEFAULT now();
  END IF;
END $$;

-- Set the id column as primary key if it doesn't have one
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.table_constraints 
    WHERE table_name = 'user_progress' AND constraint_type = 'PRIMARY KEY'
  ) THEN
    ALTER TABLE user_progress ADD CONSTRAINT user_progress_pkey PRIMARY KEY (id);
  END IF;
END $$;

-- Create the unique constraint that the application expects
ALTER TABLE user_progress 
ADD CONSTRAINT user_progress_user_id_lesson_id_key 
UNIQUE (user_id, lesson_id);

-- Create helpful indexes for performance
CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_lesson_id ON user_progress(lesson_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_completed ON user_progress(user_id, completed);
CREATE INDEX IF NOT EXISTS idx_user_progress_score ON user_progress(user_id, score);

-- Create function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
DROP TRIGGER IF EXISTS update_user_progress_updated_at ON user_progress;
CREATE TRIGGER update_user_progress_updated_at
    BEFORE UPDATE ON user_progress
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Ensure RLS is enabled
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

-- Create comprehensive RLS policies
DROP POLICY IF EXISTS "Users can read own progress" ON user_progress;
DROP POLICY IF EXISTS "Users can create own progress" ON user_progress;
DROP POLICY IF EXISTS "Users can update own progress" ON user_progress;

CREATE POLICY "Users can read own progress" ON user_progress
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own progress" ON user_progress
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress" ON user_progress
  FOR UPDATE TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);