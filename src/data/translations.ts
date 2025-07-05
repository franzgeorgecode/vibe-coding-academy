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

    // Lessons
    lessons: {
      level: 'Level {{level}}',
      lesson: 'Level {{level}} - Lesson {{order}}',
      lessonNotFound: 'Lesson Not Found',
      lessonNotAvailable: 'The lesson you are looking for is not available.',
      backToDashboard: 'Back to Dashboard',
      takeQuiz: 'Take Quiz',
      readingTime: '{{minutes}} min read',
      learningObjectives: 'Learning Objectives',
      srCodeSays: 'SrCode Says',
      practiceExercise: 'Practice Exercise',
      requiredScore: 'Required: {{score}}%',
      continueNext: 'Congratulations on completing {{currentLessonTitle}}! Would you like to continue to {{nextLessonTitle}}?',
      status: {
        completed: 'Completed',
        locked: 'Locked',
        score: 'Score: {{score}}%'
      },
      levels: {
        foundations: 'Foundations',
        databases: 'Databases & Storage',
        authentication: 'Authentication & Security',
        deployment: 'Deployment & Hosting',
        integrations: 'Integrations & APIs',
        mastery: 'Mastery & Advanced'
      },
      descriptions: {
        foundations: 'Master the fundamentals of bolt.new development',
        databases: 'Learn to work with databases and data storage',
        authentication: 'Implement secure user authentication systems',
        deployment: 'Deploy your applications to the cloud',
        integrations: 'Connect with external APIs and services',
        mastery: 'Advanced techniques and best practices'
      },

      // Lesson 1-1
      'lesson-1-1': {
        title: 'Introduction to bolt.new: Your AI Development Partner',
        objective: 'Master the fundamentals of bolt.new and understand how AI-powered development transforms the coding experience',
        content: 'Welcome to bolt.new: The Future of Web Development\\n\\nbolt.new is a revolutionary AI-powered web development agent that runs directly in your browser, enabling you to build full-stack applications through natural language conversations. Built on StackBlitz WebContainers, it represents the next evolution in development tools.\\n\\nWhat is bolt.new?\\n\\nbolt.new is described as "an in-browser AI web development agent for full stack web application development." But what does this really mean?\\n\\nAI-First Development Philosophy\\n- Natural Language Interface: Instead of writing code line by line, you describe what you want to build\\n- Contextual Understanding: bolt.new understands your project context and maintains state across conversations\\n- Intelligent Code Generation: Produces production-ready code that follows best practices\\n- Real-time Collaboration: Like having a senior developer as your pair programming partner 24/7',
        learningObjectives: {
          0: 'Understand what bolt.new is and its core AI-powered capabilities',
          1: 'Navigate the bolt.new interface and WebContainer environment',
          2: 'Recognize the technical foundation built on StackBlitz',
          3: 'Identify key skills needed for successful AI-assisted development',
          4: 'Appreciate the full-stack development possibilities with bolt.new'
        },
        badgeName: 'bolt.new Pioneer',
        srcodeCommentary: 'Welcome to the future of coding! bolt.new is like having a coding genie, but instead of three wishes, you get unlimited prompts. The secret sauce? It\'s not just about asking for code - it\'s about having a conversation with your AI development partner. Think of me as your prompt whisperer and sarcasm provider!'
      },

      // Lesson 1-2
      'lesson-1-2': {
        title: 'Writing Effective Prompts',
        objective: 'Master the art of prompt engineering for optimal bolt.new results',
        content: 'The Art of Prompt Engineering\\n\\nWriting effective prompts is like learning a new language - the language of AI collaboration. The better you communicate your ideas, the better bolt.new can bring them to life.\\n\\nThe CLEAR Method\\n\\nC - Context: Always provide context about what you\'re building\\nL - List Requirements: Be specific about features and functionality\\nE - Examples: Provide examples when helpful\\nA - Aesthetics: Describe the visual style\\nR - Requirements: Technical specifications',
        learningObjectives: {
          0: 'Apply the CLEAR method to write effective prompts',
          1: 'Identify and avoid common prompt pitfalls',
          2: 'Use progressive prompting for complex projects',
          3: 'Craft specific, actionable requests for bolt.new'
        },
        badgeName: 'AI Whisperer',
        srcodeCommentary: 'Think of prompts like ordering at a restaurant. You wouldn\'t just say "food please" - you\'d specify what you want, how you want it prepared, and any special requirements. Same with bolt.new!'
      },

      // Lesson 1-3
      'lesson-1-3': {
        title: 'Understanding the bolt.new Interface',
        objective: 'Navigate and utilize all features of the bolt.new development environment',
        content: 'Mastering the bolt.new Interface\\n\\nThe bolt.new interface is your command center for AI-powered development. Understanding each component will make you more efficient and help you build better applications.\\n\\nThe Main Components\\n\\n1. The Prompt Input: This is where the magic happens!\\n2. The Preview Window: See your application come to life in real-time\\n3. The File Explorer: Navigate your project structure\\n4. The Code Editor: When you need to make manual adjustments\\n5. The Terminal: Monitor your application',
        learningObjectives: {
          0: 'Navigate all major components of the bolt.new interface',
          1: 'Utilize the preview window for testing and debugging',
          2: 'Understand the file explorer and code editor features',
          3: 'Apply workflow best practices for efficient development'
        },
        badgeName: 'Tech Detective',
        srcodeCommentary: 'The bolt.new interface is like a Swiss Army knife for developers - it has everything you need, and once you know where each tool is, you\'ll wonder how you ever coded without it!'
      },

      // Lesson 2-1
      'lesson-2-1': {
        title: 'Database Fundamentals',
        objective: 'Learn how to work with databases in bolt.new applications',
        content: 'Database Fundamentals in bolt.new\\n\\nDatabases are the backbone of modern applications. In bolt.new, you can create and manage databases using simple natural language prompts.\\n\\nTypes of Databases\\n\\nRelational Databases (SQL):\\n- PostgreSQL: Robust, feature-rich\\n- MySQL: Popular, well-supported\\n- SQLite: Lightweight, file-based\\n\\nNoSQL Databases:\\n- MongoDB: Document-based\\n- Firebase: Real-time capabilities\\n- Supabase: PostgreSQL with real-time features',
        learningObjectives: {
          0: 'Understand different types of databases available in bolt.new',
          1: 'Create database schemas using natural language prompts',
          2: 'Implement CRUD operations for data management',
          3: 'Apply database best practices for performance and integrity'
        },
        badgeName: 'Supreme Connector',
        srcodeCommentary: 'Databases are like digital filing cabinets, except they never get messy and you can find anything instantly. Well, unless you design them poorly - then they become like that junk drawer everyone has!'
      },

      // Lesson 2-2
      'lesson-2-2': {
        title: 'Advanced Database Operations',
        objective: 'Master complex database queries and relationships',
        content: 'Advanced Database Operations\\n\\nNow that you understand the basics, let\'s dive into more sophisticated database operations that will make your applications truly powerful.\\n\\nDatabase Relationships\\n\\nOne-to-One: Each record in one table relates to exactly one record in another\\nOne-to-Many: One record relates to multiple records in another table\\nMany-to-Many: Multiple records in one table relate to multiple records in another',
        learningObjectives: {
          0: 'Implement different types of database relationships',
          1: 'Write complex queries with joins and aggregations',
          2: 'Optimize database performance with proper indexing',
          3: 'Apply security best practices to database design'
        },
        badgeName: 'Data Architect',
        srcodeCommentary: 'Advanced database operations are like learning to cook gourmet meals after mastering scrambled eggs. Sure, you could survive on basic queries, but why settle for fast food when you can create a five-star data experience?'
      },

      // Lesson 2-3
      'lesson-2-3': {
        title: 'Real-time Data with Supabase',
        objective: 'Implement real-time features using Supabase in bolt.new',
        content: 'Real-time Data with Supabase\\n\\nReal-time features make applications feel alive and responsive. With Supabase and bolt.new, you can add real-time capabilities with simple prompts.\\n\\nWhat is Real-time Data?\\n\\nReal-time data updates your application instantly when changes occur in the database, without requiring page refreshes or manual updates.',
        learningObjectives: {
          0: 'Understand real-time data concepts and use cases',
          1: 'Implement real-time subscriptions with Supabase',
          2: 'Add presence tracking and live notifications',
          3: 'Apply real-time best practices for performance and security'
        },
        badgeName: 'Edge Lord',
        srcodeCommentary: 'Real-time data is like having a crystal ball for your app - you can see changes as they happen! It\'s the difference between checking your phone every 5 minutes for messages and getting instant notifications.'
      },

      // Add more lessons as needed with similar structure...
    },

    // Badges
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
      congratulations: 'Congratulations!',
      keepTrying: 'Keep Trying!',
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
      welcomeMessage: 'Hello! I\'m SrCode, your AI mentor. I\'m here to help you master {{lessonTitle}}. What would you like to know?',
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
      continueNext: '¡Felicidades por completar {{currentLessonTitle}}! ¿Te gustaría continuar con {{nextLessonTitle}}?',
      status: {
        completed: 'Completado',
        locked: 'Bloqueado',
        score: 'Puntuación: {{score}}%'
      },
      levels: {
        foundations: 'Fundamentos',
        databases: 'Bases de Datos y Almacenamiento',
        authentication: 'Autenticación y Seguridad',
        deployment: 'Despliegue y Hosting',
        integrations: 'Integraciones y APIs',
        mastery: 'Maestría y Avanzado'
      },
      descriptions: {
        foundations: 'Domina los fundamentos del desarrollo con bolt.new',
        databases: 'Aprende a trabajar con bases de datos y almacenamiento',
        authentication: 'Implementa sistemas seguros de autenticación',
        deployment: 'Despliega tus aplicaciones en la nube',
        integrations: 'Conecta con APIs y servicios externos',
        mastery: 'Técnicas avanzadas y mejores prácticas'
      },

      // Basic Spanish lesson content
      'lesson-1-1': {
        title: 'Introducción a bolt.new',
        objective: 'Aprende los conceptos básicos de bolt.new',
        content: 'Bienvenido a bolt.new, una plataforma revolucionaria de desarrollo impulsada por IA.',
        learningObjectives: {
          0: 'Entender qué es bolt.new',
          1: 'Navegar la interfaz básica',
          2: 'Escribir tu primer prompt',
          3: 'Reconocer el potencial de la IA'
        },
        badgeName: 'Primer Contacto',
        srcodeCommentary: '¡Bienvenido al futuro de la programación!'
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
      hasCompleted: 'ha completado exitosamente',
      courseName: 'Curso de Maestría en bolt.new',
      totalXP: 'XP Total Ganado: {{xp}}',
      completionDate: 'Fecha de Finalización: {{date}}',
      certifiedBy: 'Certificado por SrCode',
      seniorMentor: 'Mentor Senior de IA',
      congratulations: '¡Felicidades!',
      earned: '¡Has ganado tu certificado!',
      download: 'Descargar Certificado',
      keepLearning: '¡Sigue Aprendiendo!',
      progress: 'Completa todas las lecciones para ganar tu certificado.',
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
      congratulations: '¡Felicidades!',
      keepTrying: '¡Sigue Intentando!',
      passedMessage: '¡Pasaste {{lessonTitle}}!',
      failedMessage: 'Obtuviste {{score}}%. Necesitas al menos 85%.',
      badgeEarned: 'Insignia Ganada: {{badgeName}}',
      continueLearning: 'Continuar Aprendiendo',
      reviewLesson: 'Revisar Lección',
      retakeQuiz: 'Repetir Quiz',
      bestScore: 'Mejor Puntuación: {{score}}%',
      loadError: 'No se pudieron cargar las preguntas.'
    },

    srcode: {
      welcomeMessage: '¡Hola! Soy SrCode, tu mentor de IA.',
      errorMessage: '¡Ups! Algo salió mal.',
      thinking: 'Pensando...',
      placeholder: 'Escribe tu mensaje...'
    },

    landing: {
      hero: {
        title: 'Domina el Desarrollo Web con IA',
        subtitle: 'Aprende bolt.new con SrCode',
        startJourney: 'Comienza Tu Viaje',
        watchDemo: 'Ver Demo',
        aiPowered: 'Aprendizaje con IA'
      },
      features: {
        title: '¿Por qué Aprender con SrCode?',
        subtitle: 'Experimenta el futuro de la educación',
        aiLearning: {
          title: 'Aprendizaje con IA',
          description: 'Orientación personalizada y retroalimentación instantánea'
        },
        realProjects: {
          title: 'Proyectos Reales',
          description: 'Construye aplicaciones reales mientras aprendes'
        },
        certificates: {
          title: 'Gana Certificados',
          description: 'Reconocimiento por tus logros'
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
          content: 'SrCode hizo que aprender fuera divertido.'
        },
        maria: {
          name: 'María Rodríguez',
          role: 'Desarrolladora Full Stack',
          content: 'Construí mi primera app en 2 semanas.'
        },
        david: {
          name: 'David Kim',
          role: 'Fundador de Startup',
          content: 'Este curso me dio las habilidades necesarias.'
        }
      },
      cta: {
        title: '¿Listo para Empezar?',
        subtitle: 'Únete a nuestra comunidad',
        startFree: 'Empezar Gratis',
        noCreditCard: 'No se requiere tarjeta'
      },
      footer: {
        tagline: 'Empoderando desarrolladores.'
      }
    }
  }
};