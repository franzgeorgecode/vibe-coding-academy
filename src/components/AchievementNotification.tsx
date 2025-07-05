import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X, Star, Zap, Trophy, Target } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

interface Achievement {
  id: string;
  type: string;
  title: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  xp: number;
}

interface AchievementNotificationProps {
  achievement: Achievement | null;
  onClose: () => void;
}

const rarityColors = {
  common: 'from-gray-400 to-gray-600',
  rare: 'from-blue-400 to-blue-600', 
  epic: 'from-purple-400 to-purple-600',
  legendary: 'from-yellow-400 to-orange-600'
};

const rarityIcons = {
  common: Star,
  rare: Award,
  epic: Trophy,
  legendary: Zap
};

export default function AchievementNotification({ achievement, onClose }: AchievementNotificationProps) {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (achievement) {
      setIsVisible(true);
      // Auto-close after 5 seconds
      const timer = setTimeout(() => {
        handleClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [achievement]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Wait for animation to complete
  };

  if (!achievement) return null;

  const RarityIcon = rarityIcons[achievement.rarity];
  const gradientClass = rarityColors[achievement.rarity];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          className="fixed top-4 right-4 z-50 max-w-sm"
        >
          <div className={`bg-gradient-to-r ${gradientClass} p-1 rounded-lg shadow-2xl`}>
            <div className="bg-white rounded-md p-4 relative">
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
              
              <div className="flex items-start space-x-3">
                <div className={`bg-gradient-to-r ${gradientClass} p-2 rounded-full`}>
                  <RarityIcon className="h-6 w-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-bold text-gray-900">{achievement.title}</h3>
                    <span className="text-2xl">{achievement.icon}</span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full capitalize ${
                      achievement.rarity === 'common' ? 'bg-gray-100 text-gray-800' :
                      achievement.rarity === 'rare' ? 'bg-blue-100 text-blue-800' :
                      achievement.rarity === 'epic' ? 'bg-purple-100 text-purple-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {achievement.rarity}
                    </span>
                    
                    <div className="flex items-center space-x-1 text-yellow-600">
                      <Award className="h-4 w-4" />
                      <span className="text-sm font-medium">+{achievement.xp} XP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Celebration particles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none"
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  opacity: 1, 
                  scale: 0,
                  x: Math.random() * 200 - 100,
                  y: Math.random() * 200 - 100
                }}
                animate={{ 
                  opacity: 0, 
                  scale: 1,
                  x: (Math.random() - 0.5) * 400,
                  y: (Math.random() - 0.5) * 400
                }}
                transition={{ 
                  duration: 2,
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
                className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-400 rounded-full"
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}