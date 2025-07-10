export const translations = {
  en: {
    // Common
    common: {
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      edit: 'Edit',
      create: 'Create',
      update: 'Update',
      confirm: 'Confirm',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      finish: 'Finish',
      saving: 'Saving...'
    },

    // Navigation
    navigation: {
      home: 'Home',
      dashboard: 'Dashboard',
      lessons: 'Lessons',
      profile: 'Profile',
      settings: 'Settings',
      logout: 'Logout'
    },

    // Authentication
    auth: {
      login: 'Login',
      signup: 'Sign Up',
      logout: 'Logout',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      firstName: 'First Name',
      lastName: 'Last Name',
      forgotPassword: 'Forgot Password?',
      rememberMe: 'Remember me',
      signInWithGoogle: 'Sign in with Google',
      signInWithGitHub: 'Sign in with GitHub',
      alreadyHaveAccount: 'Already have an account?',
      dontHaveAccount: "Don't have an account?",
      createAccount: 'Create Account',
      welcomeBack: 'Welcome Back',
      joinVibeCoding: 'Join Vibe Coding Academy',
      startAdventure: 'Start your coding adventure today',
      continueJourney: 'Continue your learning journey',
      backToHome: 'Back to Home',
      aiPowered: 'AI-Powered Learning'
    },

    // Dashboard
    dashboard: {
      title: 'Your Learning Dashboard',
      welcomeBack: 'Welcome back, {{name}}!',
      stats: {
        completedLessons: 'Completed Lessons',
        totalXP: 'Total XP',
        badgesEarned: 'Badges Earned',
        progress: 'Progress'
      },
      tabs: {
        lessons: 'Lessons',
        badges: 'Badges',
        certificate: 'Certificate'
      }
    },

    // Certificate
    certificate: {
      certificateOf: 'Certificate of Completion',
      academyName: 'Vibe Coding Academy',
      certifies: 'This certifies that',
      hasCompleted: 'has successfully completed the comprehensive course',
      courseName: 'Mastering bolt.new: AI-Powered Web Development',
      totalXP: 'Total XP Earned: {{xp}}',
      completionDate: 'Completion Date: {{date}}',
      certifiedBy: 'Certified by SrCode',
      seniorMentor: 'Senior AI Mentor',
      congratulations: 'Congratulations!',
      earned: 'You have earned your bolt.new mastery certificate!',
      download: 'Download Certificate',
      keepLearning: 'Keep Learning!',
      progress: 'Complete all lessons to earn your certificate',
      remaining: '{{count}} lessons remaining',
      studentNamePlaceholder: '[Student Name]',
      editName: 'Edit name',
      enterYourName: 'Enter your name',
      saveNameFirst: 'Please save your name first'
    },


    badges: {
      title: 'Your Achievements',
      earned: 'You have earned {{earned}} out of {{total}} badges',
      earnedOn: 'Earned on {{date}}',
      unlockHint: 'Unlock at Level {{level}}'
    },

    // Profile
    profile: {
      title: 'User Profile',
      firstNameLabel: 'First Name',
      lastNameLabel: 'Last Name',
      saveButton: 'Save Changes',
      saveSuccess: 'Profile saved successfully!',
      errorNoUser: 'User not found. Profile cannot be loaded.',
      errorFetching: 'Error fetching profile: ',
      errorNoUserSaving: 'User not found. Cannot save.',
      errorSaving: 'Error saving profile: ',
      errorLogout: 'Logout failed: '
    },

    // Quiz
    quiz: {
      question: 'Question {{current}} of {{total}}',
      backToLesson: 'Back to Lesson',
      explanation: 'Explanation',
      congratulations: 'Congratulations {{name}}!',
      keepTrying: 'Keep Trying {{name}}!',
      passedMessage: 'You passed {{lessonTitle}} and earned the {{badgeName}} badge!',
      failedMessage: 'You scored {{score}}%. You need at least 85% to pass.',
      badgeEarned: 'Badge Earned: {{badgeName}} (+{{xp}} XP)',
      continueLearning: 'Continue Learning',
      reviewLesson: 'Review Lesson',
      retakeQuiz: 'Retake Quiz',
      bestScore: 'Best Score: {{score}}%',
      loadError: 'Quiz questions could not be loaded.'
    },

    // SrCode
    srcode: {
      welcomeMessage: 'Hello {{name}}! I\'m SrCode, your AI mentor. I\'m here to help you master {{lessonTitle}}. What would you like to know?',
      errorMessage: 'Oops! Something went wrong. Can you try again?',
      thinking: 'Thinking...',
      placeholder: 'Type your message to SrCode...'
    },

    // Landing Page
    landing: {
      hero: {
        title: 'Master Web Development with AI',
        subtitle: 'Learn bolt.new with SrCode, your sarcastic but brilliant AI mentor',
        startJourney: 'Start Your Journey',
        watchDemo: 'Watch Demo',
        aiPowered: 'AI-Powered Learning'
      },
      features: {
        title: 'Why Learn with SrCode?',
        subtitle: 'Experience the future of coding education',
        aiLearning: {
          title: 'AI-Powered Learning',
          description: 'Get personalized guidance and instant feedback from your AI mentor'
        },
        realProjects: {
          title: 'Real Projects',
          description: 'Build actual applications while learning, not just toy examples'
        },
        certificates: {
          title: 'Earn Certificates',
          description: 'Get recognized for your achievements with downloadable certificates'
        }
      },
      stats: {
        students: '50K+ Students',
        lessons: '18 Lessons',
        successRate: '95% Success Rate',
        support: '24/7 AI Support'
      },
      testimonials: {
        title: 'What Students Say',
        subtitle: 'Join thousands of successful developers',
        alex: {
          name: 'Alex Chen',
          role: 'Frontend Developer',
          content: 'SrCode made learning bolt.new actually fun. The sarcasm keeps you engaged!'
        },
        maria: {
          name: 'Maria Rodriguez',
          role: 'Full Stack Developer',
          content: 'I built my first app in just 2 weeks. The AI guidance is incredible.'
        },
        david: {
          name: 'David Kim',
          role: 'Startup Founder',
          content: 'This course gave me the skills to build my MVP without hiring developers.'
        }
      },
      cta: {
        title: 'Ready to Start Coding?',
        subtitle: 'Join our community and start building amazing applications',
        startFree: 'Start Free',
        noCreditCard: 'No credit card required'
      },
      footer: {
        tagline: 'Empowering the next generation of developers.'
      }
    }
  },

  es: {
    // Common
    common: {
      loading: 'Cargando...',
      error: 'Error',
      success: 'Éxito',
      save: 'Guardar',
      cancel: 'Cancelar',
      delete: 'Eliminar',
      edit: 'Editar',
      create: 'Crear',
      update: 'Actualizar',
      confirm: 'Confirmar',
      back: 'Atrás',
      next: 'Siguiente',
      previous: 'Anterior',
      finish: 'Finalizar',
      saving: 'Guardando...'
    },

    // Navigation
    navigation: {
      home: 'Inicio',
      dashboard: 'Panel',
      lessons: 'Lecciones',
      profile: 'Perfil',
      settings: 'Configuración',
      logout: 'Cerrar Sesión'
    },

    // Authentication
    auth: {
      login: 'Iniciar Sesión',
      signup: 'Registrarse',
      logout: 'Cerrar Sesión',
      email: 'Correo Electrónico',
      password: 'Contraseña',
      confirmPassword: 'Confirmar Contraseña',
      firstName: 'Nombre',
      lastName: 'Apellido',
      forgotPassword: '¿Olvidaste tu contraseña?',
      rememberMe: 'Recordarme',
      signInWithGoogle: 'Iniciar sesión con Google',
      signInWithGitHub: 'Iniciar sesión con GitHub',
      alreadyHaveAccount: '¿Ya tienes una cuenta?',
      dontHaveAccount: '¿No tienes una cuenta?',
      createAccount: 'Crear Cuenta',
      welcomeBack: 'Bienvenido de Vuelta',
      joinVibeCoding: 'Únete a Vibe Coding Academy',
      startAdventure: 'Comienza tu aventura de programación hoy',
      continueJourney: 'Continúa tu viaje de aprendizaje',
      backToHome: 'Volver al Inicio',
      aiPowered: 'Aprendizaje con IA'
    },

    // Dashboard
    dashboard: {
      title: 'Tu Panel de Aprendizaje',
      welcomeBack: '¡Bienvenido de vuelta, {{name}}!',
      stats: {
        completedLessons: 'Lecciones Completadas',
        totalXP: 'XP Total',
        badgesEarned: 'Insignias Ganadas',
        progress: 'Progreso'
      },
      tabs: {
        lessons: 'Lecciones',
        badges: 'Insignias',
        certificate: 'Certificado'
      }
    },

    // Lessons
    lessons: {
      level: 'Nivel {{level}}',
      lesson: 'Nivel {{level}} - Lección {{order}}',
      lessonNotFound: 'Lección No Encontrada',
      lessonNotAvailable: 'La lección que buscas no está disponible.',
      backToDashboard: 'Volver al Panel',
      takeQuiz: 'Tomar Quiz',
      readingTime: '{{minutes}} min de lectura',
      learningObjectives: 'Objetivos de Aprendizaje',
      srCodeSays: 'SrCode Dice',
      practiceExercise: 'Ejercicio Práctico',
      requiredScore: 'Requerido: {{score}}%',
      continueNext: '¡Felicidades {{name}} por completar {{currentLessonTitle}}! ¿Te gustaría continuar con {{nextLessonTitle}}?',
      status: {
        completed: 'Completado',
        locked: 'Bloqueado',
        score: 'Puntuación: {{score}}%'
      },
      levels: {
        foundations: 'Fundamentos de bolt.new',
        databases: 'Integración de Bases de Datos',
        authentication: 'Sistemas de Autenticación',
        deployment: 'Despliegue y Hosting',
        integrations: 'Integraciones de Terceros',
        mastery: 'Maestría Avanzada'
      },
      descriptions: {
        foundations: 'Domina los fundamentos del desarrollo con IA de bolt.new',
        databases: 'Aprende integración de bases de datos con Supabase y otros proveedores',
        authentication: 'Implementa autenticación y autorización de usuarios segura',
        deployment: 'Despliega tus aplicaciones a entornos de producción',
        integrations: 'Conecta con Figma, GitHub, Stripe y otros servicios',
        mastery: 'Técnicas avanzadas y patrones de desarrollo profesional'
      },

      // Spanish lesson content with personalization
      'lesson-1-1': {
        title: 'Introducción a bolt.new: Tu Compañero de Desarrollo IA',
        objective: 'Domina los fundamentos de bolt.new y comprende cómo el desarrollo impulsado por IA transforma la experiencia de codificación',
        content: '¡Hola {{name}}! Bienvenido a bolt.new, la plataforma revolucionaria de desarrollo impulsada por IA que te permite construir aplicaciones full-stack usando conversaciones en lenguaje natural.',
        learningObjectives: {
          0: 'Entender bolt.new como plataforma de desarrollo impulsada por IA',
          1: 'Navegar el entorno de desarrollo basado en navegador',
          2: 'Reconocer capacidades de integración con herramientas modernas',
          3: 'Identificar habilidades clave para desarrollo asistido por IA exitoso',
          4: 'Planificar estrategias de aprendizaje efectivas para dominar bolt.new'
        },
        badgeName: 'Pionero de bolt.new',
        srcodeCommentary: '¡Bienvenido al futuro, {{name}}! bolt.new es como tener un genio de la programación, pero en lugar de tres deseos, tienes prompts ilimitados. ¡Piensa en mí como tu susurrador de prompts y proveedor ocasional de sabiduría de programación!'
      }
    },

    // Other Spanish translations...
    badges: {
      title: 'Tus Logros',
      earned: 'Has ganado {{earned}} de {{total}} insignias',
      earnedOn: 'Ganada el {{date}}',
      unlockHint: 'Desbloquear en Nivel {{level}}'
    },

    certificate: {
      certificateOf: 'Certificado de Finalización',
      academyName: 'Vibe Coding Academy',
      certifies: 'Esto certifica que',
      hasCompleted: 'ha completado exitosamente el curso integral',
      courseName: 'Dominando bolt.new: Desarrollo Web Impulsado por IA',
      totalXP: 'XP Total Ganado: {{xp}}',
      completionDate: 'Fecha de Finalización: {{date}}',
      certifiedBy: 'Certificado por SrCode',
      seniorMentor: 'Mentor Senior de IA',
      congratulations: '¡Felicidades!',
      earned: '¡Has ganado tu certificado de maestría en bolt.new!',
      download: 'Descargar Certificado',
      keepLearning: '¡Sigue Aprendiendo!',
      progress: 'Completa todas las lecciones para ganar tu certificado',
      remaining: '{{count}} lecciones restantes',
      studentNamePlaceholder: '[Nombre del Estudiante]',
      editName: 'Editar nombre',
      enterYourName: 'Ingresa tu nombre',
      saveNameFirst: 'Por favor guarda tu nombre primero'
    },

    profile: {
      title: 'Perfil de Usuario',
      firstNameLabel: 'Nombre',
      lastNameLabel: 'Apellido',
      saveButton: 'Guardar Cambios',
      saveSuccess: '¡Perfil guardado exitosamente!',
      errorNoUser: 'Usuario no encontrado.',
      errorFetching: 'Error al obtener perfil: ',
      errorNoUserSaving: 'Usuario no encontrado.',
      errorSaving: 'Error al guardar perfil: ',
      errorLogout: 'Error al cerrar sesión: '
    },

    quiz: {
      question: 'Pregunta {{current}} de {{total}}',
      backToLesson: 'Volver a la Lección',
      explanation: 'Explicación',
      congratulations: '¡Felicidades {{name}}!',
      keepTrying: '¡Sigue Intentando {{name}}!',
      passedMessage: '¡Pasaste {{lessonTitle}} y ganaste la insignia {{badgeName}}!',
      failedMessage: 'Obtuviste {{score}}%. Necesitas al menos 85% para pasar.',
      badgeEarned: 'Insignia Ganada: {{badgeName}} (+{{xp}} XP)',
      continueLearning: 'Continuar Aprendiendo',
      reviewLesson: 'Revisar Lección',
      retakeQuiz: 'Repetir Quiz',
      bestScore: 'Mejor Puntuación: {{score}}%',
      loadError: 'No se pudieron cargar las preguntas del quiz.'
    },

    srcode: {
      welcomeMessage: '¡Hola {{name}}! Soy SrCode, tu mentor de IA. Estoy aquí para ayudarte a dominar {{lessonTitle}}. ¿Qué te gustaría saber?',
      errorMessage: '¡Ups! Algo salió mal. ¿Puedes intentarlo de nuevo?',
      thinking: 'Pensando...',
      placeholder: 'Escribe tu mensaje a SrCode...'
    },

    landing: {
      hero: {
        title: 'Domina el Desarrollo Web con IA',
        subtitle: 'Aprende bolt.new con SrCode, tu mentor de IA sarcástico pero brillante',
        startJourney: 'Comienza Tu Viaje',
        watchDemo: 'Ver Demo',
        aiPowered: 'Aprendizaje con IA'
      },
      features: {
        title: '¿Por qué Aprender con SrCode?',
        subtitle: 'Experimenta el futuro de la educación en programación',
        aiLearning: {
          title: 'Aprendizaje con IA',
          description: 'Obtén orientación personalizada y retroalimentación instantánea de tu mentor de IA'
        },
        realProjects: {
          title: 'Proyectos Reales',
          description: 'Construye aplicaciones reales mientras aprendes, no solo ejemplos de juguete'
        },
        certificates: {
          title: 'Gana Certificados',
          description: 'Obtén reconocimiento por tus logros con certificados descargables'
        }
      },
      stats: {
        students: '50K+ Estudiantes',
        lessons: '18 Lecciones',
        successRate: '95% Tasa de Éxito',
        support: 'Soporte IA 24/7'
      },
      testimonials: {
        title: 'Lo que Dicen los Estudiantes',
        subtitle: 'Únete a miles de desarrolladores exitosos',
        alex: {
          name: 'Alex Chen',
          role: 'Desarrollador Frontend',
          content: 'SrCode hizo que aprender bolt.new fuera realmente divertido. ¡El sarcasmo te mantiene comprometido!'
        },
        maria: {
          name: 'María Rodríguez',
          role: 'Desarrolladora Full Stack',
          content: 'Construí mi primera app en solo 2 semanas. La orientación de IA es increíble.'
        },
        david: {
          name: 'David Kim',
          role: 'Fundador de Startup',
          content: 'Este curso me dio las habilidades para construir mi MVP sin contratar desarrolladores.'
        }
      },
      cta: {
        title: '¿Listo para Empezar a Programar?',
        subtitle: 'Únete a nuestra comunidad y comienza a construir aplicaciones increíbles',
        startFree: 'Empezar Gratis',
        noCreditCard: 'No se requiere tarjeta de crédito'
      },
      footer: {
        tagline: 'Empoderando a la próxima generación de desarrolladores.'
      }
    }
  }
};