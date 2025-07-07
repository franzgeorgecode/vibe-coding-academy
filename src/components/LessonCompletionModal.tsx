import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowRight, X } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

interface LessonCompletionModalProps {
  show: boolean;
  userName: string;
  currentLessonTitle: string;
  nextLessonTitle?: string;
  score: number;
  onContinue: () => void;
  onClose: () => void;
}

export default function LessonCompletionModal({
  show,
  userName,
  currentLessonTitle,
  nextLessonTitle,
  score,
  onContinue,
  onClose
}: LessonCompletionModalProps) {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40 p-4">
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.7, opacity: 0, y: 50 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 overflow-hidden relative"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Header with success icon */}
            <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white p-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 400 }}
                className="inline-block"
              >
                <CheckCircle className="h-16 w-16 mx-auto mb-4" />
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-2xl font-bold mb-2"
              >
🎉 ¡Felicitaciones {userName}! 🎉
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-lg opacity-95"
              >
                <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2 inline-block">
                  <span className="font-semibold text-xl">{score}%</span> de puntuación perfecta
                </div>
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="text-center mb-6"
              >
                <p className="text-gray-700 text-lg leading-relaxed">
                  Has completado exitosamente{' '}
                  <span className="font-semibold text-blue-600">
                    {currentLessonTitle}
                  </span>
                </p>
              </motion.div>

              {nextLessonTitle && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="mb-6"
                >
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                    <p className="text-gray-700 mb-2">
                      ¿Te gustaría continuar con la siguiente lección?
                    </p>
                    <p className="font-semibold text-blue-700">
                      {nextLessonTitle}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="flex gap-3"
              >
                {nextLessonTitle ? (
                  <>
                    <button
                      onClick={onClose}
                      className="flex-1 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Quedarme aquí
                    </button>
                    <button
                      onClick={onContinue}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      Continuar
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </>
                ) : (
                  <button
                    onClick={onClose}
                    className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105"
                  >
                    ¡Excelente trabajo!
                  </button>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}