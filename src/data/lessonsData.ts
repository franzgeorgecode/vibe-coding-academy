// Represents the structural information for a quiz question.
// Text content (question, options, explanation) is in translations.ts.
export interface QuizQuestion {
  id: string; // Unique ID for this question, used in translation keys
  correctAnswer: number; // Index of the correct option
  numberOfOptions: number; // How many options this question has
}

// Represents the structural information for a lesson.
// Text content (title, objective, content, etc.) is in translations.ts.
export interface Lesson {
  id: string; // Unique ID for this lesson, used in translation keys
  level: number;
  orderInLevel: number;
  badgeXp: number;
  quizQuestions: QuizQuestion[];
  numberOfLearningObjectives: number;
  // Optional: if readingTime is fixed and not translated, keep it. Otherwise, move to translations.
  readingTime?: string; // Example: "10-15", can also be moved to translations if it varies by language.
}

export const lessonsData: Record<string, Lesson> = {
  // Level 1: Foundations of bolt.new
  "lesson-1-1": {
    id: "lesson-1-1",
    level: 1,
    orderInLevel: 1,
    numberOfLearningObjectives: 5,
    quizQuestions: [
      { id: "q1-1-1", correctAnswer: 1, numberOfOptions: 4 }, // Es un agente de desarrollo web con IA integrada en el navegador
      { id: "q1-1-2", correctAnswer: 2, numberOfOptions: 4 }, // Más de 1 millón de sitios web
      { id: "q1-1-3", correctAnswer: 2, numberOfOptions: 4 }, // Hasta 500 tokens diarios para experimentación
      { id: "q1-1-4", correctAnswer: 0, numberOfOptions: 4 }, // Figma to Code
      { id: "q1-1-5", correctAnswer: 0, numberOfOptions: 4 } // Crear un MVP funcional en minutos
    ],
    badgeXp: 15,
    readingTime: "8-12"
  },
  "lesson-1-2": {
    id: "lesson-1-2",
    level: 1,
    orderInLevel: 2,
    numberOfLearningObjectives: 5,
    quizQuestions: [
      { id: "q1-2-1", correctAnswer: 1, numberOfOptions: 4 }, // El método CLEAR - CORRECTO
      { id: "q1-2-2", correctAnswer: 2, numberOfOptions: 4 }, // Context (Contexto) - CORREGIDO PARA ESPAÑOL
      { id: "q1-2-3", correctAnswer: 2, numberOfOptions: 4 }, // Ser conciso pero completo - CORRECTO
      { id: "q1-2-4", correctAnswer: 1, numberOfOptions: 4 }, // Función principal, props, estado - CORREGIDO PARA ESPAÑOL
      { id: "q1-2-5", correctAnswer: 2, numberOfOptions: 4 }  // Analizar ambigüedades y ajustes iterativos - CORREGIDO PARA ESPAÑOL
    ],
    badgeXp: 20,
    readingTime: "10-15"
  },
  "lesson-1-3": {
    id: "lesson-1-3",
    level: 1,
    orderInLevel: 3,
    numberOfLearningObjectives: 4,
    quizQuestions: [
      { id: "q1-3-1", correctAnswer: 1, numberOfOptions: 4 }, // Ctrl/Cmd + P - CORRECTO
      { id: "q1-3-2", correctAnswer: 3, numberOfOptions: 4 }, // Database NO es panel principal - CORREGIDO PARA ESPAÑOL
      { id: "q1-3-3", correctAnswer: 1, numberOfOptions: 4 }, // Ejecutar con hot reload y debugging - CORREGIDO PARA ESPAÑOL
      { id: "q1-3-4", correctAnswer: 1, numberOfOptions: 4 }  // Mantiene contexto del proyecto - CORRECTO
    ],
    badgeXp: 20,
    readingTime: "8-12"
  },
  "lesson-2-1": {
    id: "lesson-2-1",
    level: 2,
    orderInLevel: 1,
    numberOfLearningObjectives: 4,
    quizQuestions: [
      { id: "q2-1-1", correctAnswer: 2, numberOfOptions: 4 }, // Es open-source y usa PostgreSQL real - CORREGIDO PARA ESPAÑOL
      { id: "q2-1-2", correctAnswer: 1, numberOfOptions: 4 }, // UUID REFERENCES users(id) - CORRECTO
      { id: "q2-1-3", correctAnswer: 1, numberOfOptions: 4 }, // Actualizar UI inmediatamente, luego servidor - CORREGIDO PARA ESPAÑOL
      { id: "q2-1-4", correctAnswer: 1, numberOfOptions: 4 }  // Automatizar acciones como timestamps - CORREGIDO PARA ESPAÑOL
    ],
    badgeXp: 25,
    readingTime: "10-15"
  },
  "lesson-2-2": {
    id: "lesson-2-2",
    level: 2,
    orderInLevel: 2,
    numberOfLearningObjectives: 4,
    quizQuestions: [
      { id: "q2-2-1", correctAnswer: 1, numberOfOptions: 4 }, // Server-side TypeScript functions - CORRECTO
      { id: "q2-2-2", correctAnswer: 2, numberOfOptions: 4 }, // Supabase Storage - CORREGIDO
      { id: "q2-2-3", correctAnswer: 1, numberOfOptions: 4 }, // To monitor user activity - CORRECTO
      { id: "q2-2-4", correctAnswer: 1, numberOfOptions: 4 }  // It automatically resizes - CORRECTO
    ],
    badgeXp: 30,
    readingTime: "10-15"
  },
  "lesson-2-3": {
    id: "lesson-2-3",
    level: 2,
    orderInLevel: 3,
    numberOfLearningObjectives: 4,
    quizQuestions: [
      { id: "q2-3-1", correctAnswer: 1, numberOfOptions: 4 }, // To analyze and understand query execution - CORRECTO
      { id: "q2-3-2", correctAnswer: 2, numberOfOptions: 4 }, // GIN index - CORREGIDO
      { id: "q2-3-3", correctAnswer: 1, numberOfOptions: 4 }, // It performs consistently well - CORRECTO
      { id: "q2-3-4", correctAnswer: 2, numberOfOptions: 4 }  // When you need to index only specific rows - CORRECTO
    ],
    badgeXp: 40,
    readingTime: "12-18"
  },
  "lesson-3-1": {
    id: "lesson-3-1",
    level: 3,
    orderInLevel: 1,
    numberOfLearningObjectives: 4,
    quizQuestions: [
      { id: "q3-1-1", correctAnswer: 1, numberOfOptions: 4 }, // Authentication verifies who you are - CORRECTO
      { id: "q3-1-2", correctAnswer: 2, numberOfOptions: 4 }, // Multi-factor authentication (MFA) - CORREGIDO
      { id: "q3-1-3", correctAnswer: 1, numberOfOptions: 4 }, // It allows users to authenticate using existing accounts - CORREGIDO
      { id: "q3-1-4", correctAnswer: 2, numberOfOptions: 4 }  // Securely transmitting user identity - CORREGIDO
    ],
    badgeXp: 35,
    readingTime: "10-15"
  },
  "lesson-3-2": {
    id: "lesson-3-2",
    level: 3,
    orderInLevel: 2,
    numberOfLearningObjectives: 4,
    quizQuestions: [
      { id: "q3-2-1", correctAnswer: 1, numberOfOptions: 4 }, // It provides granular permissions management - CORRECTO
      { id: "q3-2-2", correctAnswer: 1, numberOfOptions: 4 }, // Before sessions expire to maintain seamless user experience - CORREGIDO
      { id: "q3-2-3", correctAnswer: 0, numberOfOptions: 4 }, // Time-based One-Time Password - CORREGIDO
      { id: "q3-2-4", correctAnswer: 1, numberOfOptions: 4 }  // To prevent brute force attacks and abuse - CORRECTO
    ],
    badgeXp: 45,
    readingTime: "10-15"
  },
  "lesson-3-3": {
    id: "lesson-3-3",
    level: 3,
    orderInLevel: 3,
    numberOfLearningObjectives: 4,
    quizQuestions: [
      { id: "q3-3-1", correctAnswer: 1, numberOfOptions: 4 }, // Implementing multiple layers of security controls - CORRECTO
      { id: "q3-3-2", correctAnswer: 1, numberOfOptions: 4 }, // The right to have personal data deleted - CORREGIDO
      { id: "q3-3-3", correctAnswer: 1, numberOfOptions: 4 }, // It violates PCI DSS compliance - CORRECTO
      { id: "q3-3-4", correctAnswer: 2, numberOfOptions: 4 }  // To provide compliance evidence - CORRECTO
    ],
    badgeXp: 50,
    readingTime: "10-15"
  },
  "lesson-4-1": {
    id: "lesson-4-1",
    level: 4,
    orderInLevel: 1,
    numberOfLearningObjectives: 4,
    quizQuestions: [
      { id: "q4-1-1", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q4-1-2", correctAnswer: 2, numberOfOptions: 4 },
      { id: "q4-1-3", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q4-1-4", correctAnswer: 1, numberOfOptions: 4 }
    ],
    badgeXp: 55,
    readingTime: "10-15"
  },
  "lesson-4-2": {
    id: "lesson-4-2",
    level: 4,
    orderInLevel: 2,
    numberOfLearningObjectives: 4,
    quizQuestions: [
      { id: "q4-2-1", correctAnswer: 1, numberOfOptions: 4 }, // They automatically scale to zero - CORRECTO
      { id: "q4-2-2", correctAnswer: 2, numberOfOptions: 4 }, // Reduced latency by serving content closer - CORREGIDO
      { id: "q4-2-3", correctAnswer: 1, numberOfOptions: 4 }, // To determine when container is ready - CORRECTO
      { id: "q4-2-4", correctAnswer: 1, numberOfOptions: 4 }  // The time to render largest content element - CORRECTO
    ],
    badgeXp: 60,
    readingTime: "8-12"
  },
  "lesson-4-3": {
    id: "lesson-4-3",
    level: 4,
    orderInLevel: 3,
    numberOfLearningObjectives: 4,
    quizQuestions: [
      { id: "q4-3-1", correctAnswer: 1, numberOfOptions: 4 }, // Time to render largest element, under 2.5s - CORRECTO
      { id: "q4-3-2", correctAnswer: 1, numberOfOptions: 4 }, // Reserve space for dynamic content - CORREGIDO
      { id: "q4-3-3", correctAnswer: 2, numberOfOptions: 4 }, // In-memory cache provides fastest access - CORREGIDO
      { id: "q4-3-4", correctAnswer: 1, numberOfOptions: 4 }  // To reduce network overhead - CORRECTO
    ],
    badgeXp: 70,
    readingTime: "10-15"
  },
  "lesson-5-1": {
    id: "lesson-5-1",
    level: 5,
    orderInLevel: 1,
    numberOfLearningObjectives: 4,
    quizQuestions: [
      { id: "q5-1-1", correctAnswer: 2, numberOfOptions: 4 }, // Organizing components with consistent naming - CORREGIDO
      { id: "q5-1-2", correctAnswer: 1, numberOfOptions: 4 }, // Standardized values for design elements - CORRECTO
      { id: "q5-1-3", correctAnswer: 2, numberOfOptions: 4 }, // It improves accessibility and SEO - CORREGIDO
      { id: "q5-1-4", correctAnswer: 2, numberOfOptions: 4 }  // Review and improve Figma organization - CORREGIDO
    ],
    badgeXp: 65,
    readingTime: "10-15"
  },
  "lesson-5-2": {
    id: "lesson-5-2",
    level: 5,
    orderInLevel: 2,
    numberOfLearningObjectives: 4,
    quizQuestions: [
      { id: "q5-2-1", correctAnswer: 1, numberOfOptions: 4 }, // It violates PCI DSS compliance - CORRECTO
      { id: "q5-2-2", correctAnswer: 1, numberOfOptions: 4 }, // To receive real-time notifications - CORREGIDO
      { id: "q5-2-3", correctAnswer: 1, numberOfOptions: 4 }, // A server-side object that represents payment - CORRECTO
      { id: "q5-2-4", correctAnswer: 1, numberOfOptions: 4 }  // Automatically adjusting billing amounts - CORRECTO
    ],
    badgeXp: 75,
    readingTime: "10-15"
  },
  "lesson-5-3": {
    id: "lesson-5-3",
    level: 5,
    orderInLevel: 3,
    numberOfLearningObjectives: 4,
    quizQuestions: [
      { id: "q5-3-1", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q5-3-2", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q5-3-3", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q5-3-4", correctAnswer: 1, numberOfOptions: 4 }
    ],
    badgeXp: 80,
    readingTime: "10-15"
  },
  "lesson-6-1": {
    id: "lesson-6-1",
    level: 6,
    orderInLevel: 1,
    numberOfLearningObjectives: 4,
    quizQuestions: [
      { id: "q6-1-1", correctAnswer: 1, numberOfOptions: 4 }, // It allows independent development - CORRECTO
      { id: "q6-1-2", correctAnswer: 2, numberOfOptions: 4 }, // To enable loose coupling between components - CORREGIDO
      { id: "q6-1-3", correctAnswer: 1, numberOfOptions: 4 }, // Serve cached content quickly while updating - CORRECTO
      { id: "q6-1-4", correctAnswer: 1, numberOfOptions: 4 }  // It automatically detects unintended UI changes - CORRECTO
    ],
    badgeXp: 100,
    readingTime: "15-20"
  },
  "lesson-6-2": {
    id: "lesson-6-2",
    level: 6,
    orderInLevel: 2,
    numberOfLearningObjectives: 4,
    quizQuestions: [
      { id: "q6-2-1", correctAnswer: 1, numberOfOptions: 4 }, // It provides unlimited scaling potential - CORREGIDO
      { id: "q6-2-2", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q6-2-3", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q6-2-4", correctAnswer: 1, numberOfOptions: 4 }
    ],
    badgeXp: 90,
    readingTime: "12-18"
  },
  "lesson-6-3": {
    id: "lesson-6-3",
    level: 6,
    orderInLevel: 3,
    numberOfLearningObjectives: 4,
    quizQuestions: [
      { id: "q6-3-1", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q6-3-2", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q6-3-3", correctAnswer: 1, numberOfOptions: 4 },
      { id: "q6-3-4", correctAnswer: 1, numberOfOptions: 4 }
    ],
    badgeXp: 200,
    readingTime: "10-15"
  }
};
export default lessonsData;
