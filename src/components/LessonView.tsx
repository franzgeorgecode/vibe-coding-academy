import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Award, BookOpen } from 'lucide-react';
import { useUser } from '@clerk/clerk-react';
import { lessonsData } from '../data/lessonsData';
import { supabase } from '../lib/supabase';
import { useUserProgressStore } from '../stores/userProgressStore';
import { lessonsData } from '../data/lessonsData';
import { useTranslation } from '../contexts/LanguageContext';
import Quiz from './Quiz';
import SrCodeChat from './SrCodeChat';
import Confetti from './Confetti';
import LessonCompletionModal from './LessonCompletionModal';
import { motion } from 'framer-motion';

interface UserProgress {
  id?: string;
  user_id: string;
  lesson_id: string;
  completed: boolean;
  score: number;
  attempts: number;
  completed_at: string | null;
  time_spent?: number;
  hints_used?: number;
}

export default function LessonView() {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { user } = useUser();
  const [showQuiz, setShowQuiz] = useState(false);
  const [lessonCompleted, setLessonCompleted] = useState(false);
  const [userProgress, setUserProgress] = useState<UserProgress | null>(null);
  const { completeLesson, incrementStreak, syncWithDatabase, addBadge } = useUserProgressStore();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [completionData, setCompletionData] = useState<{score: number; nextLessonTitle?: string; nextLessonId?: string} | null>(null);

  const currentLesson = lessonId ? lessonsData[lessonId] : null;

  // Translated values
  const [translatedLesson, setTranslatedLesson] = useState<any>(null);

  useEffect(() => {
    if (!lessonId || !currentLesson) {
      console.warn(`LessonView: Lesson with ID "${lessonId}" not found. Redirecting to dashboard.`);
      navigate('/dashboard');
      return;
    }
    checkUserProgress();

    // Get user's name for personalization
    const userName = user?.firstName || user?.emailAddresses[0]?.emailAddress?.split('@')[0] || 'Student';
    
    // Set translated content
    const objectivesArray = [];
    if (currentLesson && typeof currentLesson.numberOfLearningObjectives === 'number') {
      for (let i = 0; i < currentLesson.numberOfLearningObjectives; i++) {
        objectivesArray.push(t(`lessons.${lessonId}.learningObjectives.${i}`, { name: userName }));
      }
    }

    setTranslatedLesson({
      title: t(`lessons.${lessonId}.title`, { name: userName }),
      objective: t(`lessons.${lessonId}.objective`, { name: userName }),
      content: t(`lessons.${lessonId}.content`, { name: userName }),
      learningObjectives: objectivesArray,
      badgeName: t(`lessons.${lessonId}.badgeName`, { name: userName }),
      srcodeCommentary: t(`lessons.${lessonId}.srcodeCommentary`, { name: userName }),
      practiceDescription: currentLesson.practiceDescription
                           ? t(`lessons.${lessonId}.practiceDescription`, { name: userName })
                           : undefined,
    });

  }, [lessonId, navigate, t, currentLesson]);

  const checkUserProgress = async () => {
    if (!lessonId || !currentLesson || !user?.id) {
        console.warn("LessonView: checkUserProgress called without valid lessonId, currentLesson, or user.");
        return;
    }

    try {
      const { data: progress, error } = await supabase
        .from('user_progress')
        .select('id, user_id, lesson_id, completed, completed_at, score, attempts, time_spent, hints_used')
        .eq('user_id', user.id)
        .eq('lesson_id', currentLesson.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error(`[LessonView] checkUserProgress: Error fetching user_progress for lesson ${currentLesson.id}.`, error);
        return;
      }

      if (progress) {
        console.log(`User progress found for lesson ${currentLesson.id}:`, progress);
        setUserProgress(progress as UserProgress);
        setLessonCompleted(progress.completed);
      } else {
        console.log(`No progress found for lesson ${currentLesson.id} by user ${user.id}.`);
        setUserProgress(null);
        setLessonCompleted(false);
      }
    } catch (error) {
      console.error(`Unexpected error in checkUserProgress for lesson ${currentLesson.id}:`, error);
    }
  };

  const markLessonComplete = async (quizScore: number) => {
    if (!user?.id || !currentLesson || !translatedLesson) {
      console.error('Missing user, lesson structure, or translated lesson data for markLessonComplete.');
      alert(t('common.error') + ': ' + 'User or lesson data is missing. Cannot save progress.');
      return;
    }

    try {
      const isCompleted = quizScore >= 85;
      console.log('[LessonView] Saving progress:', { user_id: user.id, lesson_id: currentLesson.id, score: quizScore, completed: isCompleted });

      // Simplified approach: try insert first, if it fails, try update
      const progressData = {
        user_id: user.id,
        lesson_id: currentLesson.id,
        completed: isCompleted,
        score: quizScore,
        attempts: 1,
        completed_at: isCompleted ? new Date().toISOString() : null,
        time_spent: 0,
        hints_used: 0,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      // Try to insert new record
      const { data: insertResult, error: insertError } = await supabase
        .from('user_progress')
        .insert(progressData)
        .select()
        .single();

      if (insertError) {
        console.log('[LessonView] Insert failed, trying upsert:', insertError);
        
        // If insert fails, try upsert
        const { data: upsertResult, error: upsertError } = await supabase
          .from('user_progress')
          .upsert(progressData)
          .select()
          .single();
          
        if (upsertError) {
          console.error('[LessonView] Both insert and upsert failed:', upsertError);
          // Continue without saving to database but mark as completed locally
          console.log('[LessonView] Continuing without database save');
        } else {
          console.log('[LessonView] Upsert successful:', upsertResult);
        }
      } else {
        console.log('[LessonView] Insert successful:', insertResult);
      }

      
      // Mark lesson as completed locally regardless of database save
      setLessonCompleted(isCompleted);

      // If completed, handle post-completion actions
      if (isCompleted) {
        console.log('[LessonView] Quiz passed! Score:', quizScore);
        
        // Update the Zustand store with the completion
        const xpReward = currentLesson.badgeXp || 10;
        completeLesson(currentLesson.id, xpReward);
        incrementStreak();
        
        // Award badge for lesson completion
        await awardLessonBadge(currentLesson.id, user.id);
        
        // Sync with database
        try {
          await syncWithDatabase();
          console.log('[LessonView] Progress synced with database');
        } catch (syncError) {
          console.error('[LessonView] Failed to sync with database:', syncError);
        }
        
        // Show confetti and completion modal
        setShowConfetti(true);
        setShowQuiz(false);
        
        // Prepare completion data
        const nextLessonId = getNextLessonId(currentLesson);
        const nextLessonTitle = nextLessonId ? t(`lessons.${nextLessonId}.title`, { defaultValue: 'the next lesson' }) : undefined;
        
        setCompletionData({
          score: quizScore,
          nextLessonTitle,
          nextLessonId
        });
        
        // Show completion modal after a brief delay for confetti effect
        setTimeout(() => {
          setShowCompletionModal(true);
        }, 1000);
      } else {
        console.log('[LessonView] Quiz not passed. Score:', quizScore, '(needed 85%)');
      }

      // Emit custom event for progress update
      window.dispatchEvent(new CustomEvent('progressUpdated', {
        detail: { lessonId: currentLesson.id, completed: isCompleted, score: quizScore }
      }));
      
      // Force a page refresh for Dashboard to update
      window.dispatchEvent(new CustomEvent('forceProgressRefresh'));

    } catch (error) {
      console.error('Error in markLessonComplete:', error);
      // Don't show error to user, just log it
      console.log('[LessonView] Continuing with local completion despite error');
      setLessonCompleted(quizScore >= 85);
    }
  };
  
  const awardLessonBadge = async (lessonId: string, userId: string) => {
    try {
      // Create badge if it doesn't exist
      const lesson = lessonsData[lessonId];
      if (!lesson) return;
      
      const badgeData = {
        id: lessonId,
        name: translatedLesson.badgeName || `Lesson ${lesson.level}-${lesson.orderInLevel} Badge`,
        description: translatedLesson.objective || 'Lesson completed successfully',
        icon: '🏆',
        xp_reward: lesson.badgeXp || 10,
        rarity: 'common' as const
      };
      
      // Ensure badge exists in badges table
      const { error: badgeUpsertError } = await supabase
        .from('badges')
        .upsert(badgeData, { onConflict: 'id' });
        
      if (badgeUpsertError) {
        console.error('[LessonView] Error creating badge:', badgeUpsertError);
      }
      
      // Award badge to user
      const { error: userBadgeError } = await supabase
        .from('user_badges')
        .upsert({
          user_id: userId,
          badge_id: lessonId,
          earned_at: new Date().toISOString()
        }, { onConflict: 'user_id,badge_id' });
        
      if (userBadgeError) {
        console.error('[LessonView] Error awarding badge to user:', userBadgeError);
      } else {
        console.log('[LessonView] Badge awarded successfully:', lessonId);
        // Add badge to store
        addBadge({
          id: lessonId,
          name: badgeData.name,
          description: badgeData.description,
          icon: badgeData.icon,
          rarity: badgeData.rarity
        });
      }
    } catch (error) {
      console.error('[LessonView] Error in badge awarding process:', error);
    }
  };

  const getNextLessonId = (lesson: { level: number; orderInLevel: number; id: string; }): string | null => {
    if (!lesson || typeof lesson.level !== 'number' || typeof lesson.orderInLevel !== 'number') {
        console.error('Invalid lesson object in getNextLessonId:', lesson);
        return null;
    }
    const lessonsInCurrentLevel = Object.values(lessonsData).filter(l => l.level === lesson.level).length;
    if (lesson.orderInLevel < lessonsInCurrentLevel) {
      const nextLessonInLevel = Object.values(lessonsData).find(l => l.level === lesson.level && l.orderInLevel === lesson.orderInLevel + 1);
      return nextLessonInLevel ? nextLessonInLevel.id : null;
    }

    const maxLevel = Math.max(...Object.values(lessonsData).map(l => l.level));
    if (lesson.level < maxLevel) {
      const firstLessonNextLevel = Object.values(lessonsData).find(l => l.level === lesson.level + 1 && l.orderInLevel === 1);
      return firstLessonNextLevel ? firstLessonNextLevel.id : null;
    }
    return null;
  };

  const handleContinueToNext = () => {
    if (completionData?.nextLessonId) {
      navigate(`/lesson/${completionData.nextLessonId}`);
    }
    handleCloseCompletionModal();
  };

  const handleCloseCompletionModal = () => {
    setShowCompletionModal(false);
    setShowConfetti(false);
    setCompletionData(null);
  };

  const renderContent = (contentStr: string | undefined) => {
    if (!contentStr) return null;
    return contentStr
      .split('\n\n')
      .map((paragraph, index) => {
        const trimmedParagraph = paragraph.trim();
        if (trimmedParagraph.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-semibold text-gray-800 mb-2 mt-4">{trimmedParagraph.slice(4)}</h3>;
        }
        if (trimmedParagraph.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-semibold text-gray-900 mb-3 mt-6">{trimmedParagraph.slice(3)}</h2>;
        }
        if (trimmedParagraph.startsWith('# ')) {
          return <h1 key={index} className="text-3xl font-bold text-gray-900 mb-4 mt-8">{trimmedParagraph.slice(2)}</h1>;
        }
        const lines = trimmedParagraph.split('\n').map((line, lineIndex, arr) => (
          <React.Fragment key={lineIndex}>
            {line}
            {lineIndex < arr.length - 1 && <br />}
          </React.Fragment>
        ));
        return <p key={index} className="text-gray-700 mb-4 leading-relaxed">{lines}</p>;
      });
  };

  if (!currentLesson || !translatedLesson) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{t('lessons.lessonNotFound')}</h1>
          <p className="text-gray-600 mb-6">{t('lessons.lessonNotAvailable')}</p>
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            {t('lessons.backToDashboard')}
          </button>
        </div>
      </div>
    );
  }

  if (showQuiz) {
    return (
      <Quiz
        lessonId={currentLesson.id}
        onComplete={markLessonComplete}
        onBack={() => setShowQuiz(false)}
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-6"
      >
        <button
          onClick={() => navigate('/dashboard')}
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          {t('lessons.backToDashboard')}
        </button>

        {lessonCompleted && (
          <div className="flex items-center text-green-600 bg-green-100 px-3 py-1 rounded-full">
            <Award className="h-5 w-5 mr-2" />
            {t('lessons.status.completed')}
          </div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-lg shadow-lg p-8 mb-6"
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="text-sm text-blue-600 font-medium mb-2">
              {t('lessons.level', { level: currentLesson.level })} • {t('lessons.lesson', { level: currentLesson.level, order: currentLesson.orderInLevel })}
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              {translatedLesson.title}
            </h1>
            <p className="text-lg text-gray-600">
              {translatedLesson.objective}
            </p>
          </div>

          <div className="text-right flex-shrink-0 ml-4">
            {translatedLesson.badgeName && (
              <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                {translatedLesson.badgeName}
              </div>
            )}
            {typeof currentLesson.badgeXp === 'number' && (
              <div className="flex items-center text-sm text-gray-500 mt-2 justify-end">
                  <Award className="h-4 w-4 mr-1 text-yellow-500" />
                  {currentLesson.badgeXp} XP
              </div>
            )}
          </div>
        </div>
         <div className="flex items-center space-x-4 text-sm text-gray-500 border-t pt-4">
              <div className="flex items-center">
                <BookOpen className="h-4 w-4 mr-1" />
                 {t('lessons.readingTime', { minutes: currentLesson.readingTime || '10-15' })}
              </div>
        </div>
      </motion.div>

      {/* Learning Objectives */}
      {Array.isArray(translatedLesson.learningObjectives) && translatedLesson.learningObjectives.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-blue-50 rounded-lg p-6 mb-6 border border-blue-200"
        >
          <h2 className="text-xl font-semibold text-blue-900 mb-3">{t('lessons.learningObjectives')}</h2>
          <ul className="space-y-2">
            {translatedLesson.learningObjectives.map((objective: string, index: number) => (
              <li key={index} className="flex items-start text-blue-800">
                <div className="h-2 w-2 bg-blue-600 rounded-full mt-[0.4rem] mr-3 flex-shrink-0"></div>
                {objective}
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Main Content */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-lg shadow-lg p-8 mb-6 prose max-w-none prose-headings:text-gray-800 prose-p:text-gray-700 prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl"
      >
        {renderContent(translatedLesson.content)}
      </motion.article>

      {/* SrCode Commentary */}
      {translatedLesson.srcodeCommentary && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6 mb-6 border border-purple-200"
        >
          <div className="flex items-start">
            <div className="bg-purple-600 text-white rounded-full w-10 h-10 font-bold flex items-center justify-center mr-4 flex-shrink-0 text-lg">
              SR
            </div>
            <div>
              <h3 className="font-semibold text-purple-900 mb-1">{t('lessons.srCodeSays')}</h3>
              <p className="text-purple-800 italic leading-relaxed">{translatedLesson.srcodeCommentary}</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Practice Exercise */}
      {translatedLesson.practiceDescription && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-green-50 rounded-lg p-6 mb-6 border border-green-200"
        >
          <h2 className="text-xl font-semibold text-green-900 mb-3">{t('lessons.practiceExercise')}</h2>
          <p className="text-green-800 leading-relaxed">{translatedLesson.practiceDescription}</p>
        </motion.div>
      )}

      {/* Quiz Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-lg shadow-lg p-6 flex justify-between items-center"
      >
        <div>
          {userProgress && userProgress.attempts > 0 && (
            <p className="text-sm text-gray-600">
              {t('quiz.bestScore', { score: userProgress.score })}
              {userProgress.score < 85 && !userProgress.completed && ` (${t('lessons.requiredScore', { score: 85 })})`}
            </p>
          )}
        </div>

        <button
          onClick={() => setShowQuiz(true)}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 flex items-center font-semibold text-lg transition-colors"
        >
          {lessonCompleted ? t('quiz.retakeQuiz') : (userProgress?.attempts || 0) > 0 && (userProgress?.score || 0) < 85 ? t('quiz.retakeQuiz') : t('lessons.takeQuiz')}
          <ArrowRight className="h-5 w-5 ml-2" />
        </button>
      </motion.div>

      {/* SrCode Chat */}
      {currentLesson && translatedLesson && (
        <SrCodeChat
          lessonContext={{
            id: currentLesson.id,
            title: translatedLesson.title,
            objective: translatedLesson.objective,
            level: currentLesson.level
          }}
          isOpen={isChatOpen}
          onToggle={() => setIsChatOpen(!isChatOpen)}
        />
      )}

      {/* Confetti Effect */}
      <Confetti
        show={showConfetti}
        onComplete={() => setShowConfetti(false)}
      />

      {/* Lesson Completion Modal */}
      {completionData && (
        <LessonCompletionModal
          show={showCompletionModal}
          userName={user?.firstName || user?.emailAddresses[0]?.emailAddress?.split('@')[0] || 'Estudiante'}
          currentLessonTitle={translatedLesson?.title || 'Lección'}
          nextLessonTitle={completionData.nextLessonTitle}
          score={completionData.score}
          onContinue={handleContinueToNext}
          onClose={handleCloseCompletionModal}
        />
      )}
    </div>
  );
}