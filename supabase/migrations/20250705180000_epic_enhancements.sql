/*
  # Epic Enhancements for Vibe Coding Academy
  
  This migration adds comprehensive enhancements to make the app
  ready for the bolt.new 2025 hackathon:
  
  1. Enhanced user profiles with display names
  2. Improved badge and XP tracking
  3. Leaderboard optimizations
  4. Course completion certificates
  5. Enhanced analytics and progress tracking
*/

-- Ensure users table has all required columns
DO $$
BEGIN
  -- Add display_name for certificate customization
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'users' AND column_name = 'display_name'
  ) THEN
    ALTER TABLE users ADD COLUMN display_name text;
  END IF;

  -- Add streak tracking
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'users' AND column_name = 'streak_days'
  ) THEN
    ALTER TABLE users ADD COLUMN streak_days integer DEFAULT 0;
  END IF;

  -- Add last activity tracking
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'users' AND column_name = 'last_activity'
  ) THEN
    ALTER TABLE users ADD COLUMN last_activity timestamptz DEFAULT now();
  END IF;

  -- Add course completion status
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'users' AND column_name = 'course_completed'
  ) THEN
    ALTER TABLE users ADD COLUMN course_completed boolean DEFAULT false;
  END IF;

  -- Add course completion date
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'users' AND column_name = 'course_completed_at'
  ) THEN
    ALTER TABLE users ADD COLUMN course_completed_at timestamptz;
  END IF;

  -- Add total study time tracking
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'users' AND column_name = 'total_study_time'
  ) THEN
    ALTER TABLE users ADD COLUMN total_study_time integer DEFAULT 0; -- in minutes
  END IF;
END $$;

-- Ensure user_progress table has all required columns
DO $$
BEGIN
  -- Ensure completed column exists
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'user_progress' AND column_name = 'completed'
  ) THEN
    ALTER TABLE user_progress ADD COLUMN completed boolean DEFAULT false NOT NULL;
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
    ALTER TABLE user_progress ADD COLUMN time_spent integer DEFAULT 0; -- in minutes
  END IF;

  -- Ensure hints_used exists
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'user_progress' AND column_name = 'hints_used'
  ) THEN
    ALTER TABLE user_progress ADD COLUMN hints_used integer DEFAULT 0;
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
END $$;

-- Create or update leaderboard view for enhanced performance
DROP VIEW IF EXISTS leaderboard_view;
CREATE VIEW leaderboard_view AS
SELECT 
  u.id,
  u.first_name,
  u.last_name,
  u.display_name,
  u.total_xp,
  u.current_level,
  u.streak_days,
  u.course_completed,
  u.course_completed_at,
  COUNT(CASE WHEN up.completed = true THEN 1 END) as completed_lessons,
  COUNT(ub.badge_id) as total_badges,
  AVG(up.score) as average_score,
  SUM(up.time_spent) as total_study_time,
  ROW_NUMBER() OVER (ORDER BY u.total_xp DESC, u.current_level DESC, completed_lessons DESC) as rank
FROM users u
LEFT JOIN user_progress up ON u.id = up.user_id
LEFT JOIN user_badges ub ON u.id = ub.user_id
GROUP BY u.id, u.first_name, u.last_name, u.display_name, u.total_xp, u.current_level, u.streak_days, u.course_completed, u.course_completed_at;

-- Create achievement tracking table
CREATE TABLE IF NOT EXISTS achievements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  achievement_type text NOT NULL, -- 'first_lesson', 'streak_week', 'perfect_score', 'speed_demon', etc.
  achievement_data jsonb DEFAULT '{}',
  earned_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Enable RLS on achievements
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for achievements
CREATE POLICY "Users can read own achievements" ON achievements
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own achievements" ON achievements
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_achievements_user_type ON achievements(user_id, achievement_type);
CREATE INDEX IF NOT EXISTS idx_achievements_earned_at ON achievements(earned_at);

-- Create function to automatically award achievements
CREATE OR REPLACE FUNCTION award_achievement()
RETURNS TRIGGER AS $$
BEGIN
  -- Award "First Lesson" achievement
  IF NEW.completed = true AND OLD.completed = false THEN
    -- Check if this is their first completed lesson
    IF (SELECT COUNT(*) FROM user_progress WHERE user_id = NEW.user_id AND completed = true) = 1 THEN
      INSERT INTO achievements (user_id, achievement_type, achievement_data)
      VALUES (NEW.user_id, 'first_lesson', jsonb_build_object('lesson_id', NEW.lesson_id))
      ON CONFLICT DO NOTHING;
    END IF;

    -- Award "Perfect Score" achievement for 100% score
    IF NEW.score = 100 THEN
      INSERT INTO achievements (user_id, achievement_type, achievement_data)
      VALUES (NEW.user_id, 'perfect_score', jsonb_build_object('lesson_id', NEW.lesson_id, 'score', NEW.score))
      ON CONFLICT DO NOTHING;
    END IF;

    -- Award "Speed Demon" achievement for completing lesson quickly (under 5 minutes)
    IF NEW.time_spent IS NOT NULL AND NEW.time_spent < 5 THEN
      INSERT INTO achievements (user_id, achievement_type, achievement_data)
      VALUES (NEW.user_id, 'speed_demon', jsonb_build_object('lesson_id', NEW.lesson_id, 'time_spent', NEW.time_spent))
      ON CONFLICT DO NOTHING;
    END IF;

    -- Check for course completion (18 lessons)
    IF (SELECT COUNT(*) FROM user_progress WHERE user_id = NEW.user_id AND completed = true) >= 18 THEN
      -- Mark course as completed in users table
      UPDATE users 
      SET course_completed = true, course_completed_at = now()
      WHERE id = NEW.user_id AND course_completed = false;
      
      -- Award course completion achievement
      INSERT INTO achievements (user_id, achievement_type, achievement_data)
      VALUES (NEW.user_id, 'course_master', jsonb_build_object('completion_date', now()))
      ON CONFLICT DO NOTHING;
    END IF;
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for automatic achievement awarding
DROP TRIGGER IF EXISTS trigger_award_achievement ON user_progress;
CREATE TRIGGER trigger_award_achievement
  AFTER UPDATE ON user_progress
  FOR EACH ROW
  EXECUTE FUNCTION award_achievement();

-- Update existing progress records to set completed = true where score >= 85
UPDATE user_progress 
SET completed = true, completed_at = COALESCE(completed_at, now())
WHERE score >= 85 AND completed = false;

-- Insert comprehensive badge data
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
  ('lesson-6-3', 'SrCode Approved', 'Earned the ultimate seal of approval', '✨', 100, 'legendary'),
  
  -- Special achievement badges
  ('achievement-first-lesson', 'First Steps', 'Completed your very first lesson', '👶', 10, 'common'),
  ('achievement-perfect-score', 'Perfectionist', 'Achieved a perfect 100% score', '💯', 25, 'rare'),
  ('achievement-speed-demon', 'Lightning Fast', 'Completed a lesson in under 5 minutes', '⚡', 30, 'rare'),
  ('achievement-streak-week', 'Dedicated Learner', 'Maintained a 7-day learning streak', '🔥', 50, 'epic'),
  ('achievement-course-master', 'Course Conqueror', 'Completed the entire bolt.new course', '🏆', 200, 'legendary')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  xp_reward = EXCLUDED.xp_reward,
  rarity = EXCLUDED.rarity;

-- Create function to update user XP and level
CREATE OR REPLACE FUNCTION update_user_xp()
RETURNS TRIGGER AS $$
BEGIN
  -- Update user's total XP and level when badge is awarded
  UPDATE users 
  SET 
    total_xp = total_xp + (SELECT xp_reward FROM badges WHERE id = NEW.badge_id),
    current_level = FLOOR((total_xp + (SELECT xp_reward FROM badges WHERE id = NEW.badge_id)) / 100) + 1,
    updated_at = now()
  WHERE id = NEW.user_id;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to update XP when badges are awarded
DROP TRIGGER IF EXISTS trigger_update_user_xp ON user_badges;
CREATE TRIGGER trigger_update_user_xp
  AFTER INSERT ON user_badges
  FOR EACH ROW
  EXECUTE FUNCTION update_user_xp();

-- Optimize indexes for better performance
CREATE INDEX IF NOT EXISTS idx_user_progress_user_completed ON user_progress(user_id, completed);
CREATE INDEX IF NOT EXISTS idx_user_progress_lesson_score ON user_progress(lesson_id, score);
CREATE INDEX IF NOT EXISTS idx_user_badges_user_earned ON user_badges(user_id, earned_at);
CREATE INDEX IF NOT EXISTS idx_users_xp_level ON users(total_xp, current_level);
CREATE INDEX IF NOT EXISTS idx_users_streak ON users(streak_days);

-- Create analytics view for course insights
CREATE OR REPLACE VIEW course_analytics AS
SELECT 
  'overview' as metric_type,
  COUNT(DISTINCT u.id) as total_users,
  COUNT(DISTINCT CASE WHEN u.course_completed THEN u.id END) as completed_users,
  AVG(u.total_xp) as average_xp,
  AVG(u.current_level) as average_level,
  AVG(u.streak_days) as average_streak,
  COUNT(DISTINCT up.lesson_id) as total_lesson_attempts,
  AVG(up.score) as average_score,
  SUM(up.time_spent) as total_study_time
FROM users u
LEFT JOIN user_progress up ON u.id = up.user_id;

-- Grant necessary permissions
GRANT SELECT ON leaderboard_view TO authenticated;
GRANT SELECT ON course_analytics TO authenticated;
GRANT ALL ON achievements TO authenticated;

-- Update RLS policies to ensure proper access
DO $$
BEGIN
  -- Ensure users can update their own progress
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'user_progress' AND policyname = 'Users can update own progress'
  ) THEN
    CREATE POLICY "Users can update own progress" ON user_progress
      FOR UPDATE TO authenticated
      USING (auth.uid() = user_id)
      WITH CHECK (auth.uid() = user_id);
  END IF;
END $$;