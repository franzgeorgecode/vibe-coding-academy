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

    // Language Selector
    languageSelector: {
      selectLanguage: 'Select Language'
    },

    // Language Selector
    languageSelector: {
      selectLanguage: 'Select Language'
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
        progress: 'Progress',
        learningStreak: 'Learning Streak',
        days: 'days',
        learningStreak: 'Learning Streak',
        days: 'days'
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
      continueNext: 'Congratulations {{name}} on completing {{currentLessonTitle}}! Would you like to continue to {{nextLessonTitle}}?',
      status: {
        completed: 'Completed',
        locked: 'Locked',
        score: 'Score: {{score}}%'
      },
      levels: {
        foundations: 'bolt.new Foundations',
        databases: 'Database Integration',
        authentication: 'Authentication Systems',
        deployment: 'Deployment & Hosting',
        integrations: 'Third-Party Integrations',
        mastery: 'Advanced Mastery'
      },
      descriptions: {
        foundations: 'Master the fundamentals of bolt.new AI-powered development',
        databases: 'Learn database integration with Supabase and other providers',
        authentication: 'Implement secure user authentication and authorization',
        deployment: 'Deploy your applications to production environments',
        integrations: 'Connect with Figma, GitHub, Stripe, and other services',
        mastery: 'Advanced techniques and professional development patterns'
      },

      // Level 1: Foundations
      'lesson-1-1': {
        title: 'Introduction to bolt.new: Your AI Development Partner',
        objective: 'Master the fundamentals of bolt.new and understand how AI-powered development transforms the coding experience',
        content: `# Welcome to bolt.new: The Future of Web Development

Hello {{name}}! Welcome to your personalized journey into bolt.new mastery. As your dedicated AI mentor, I'm excited to guide you through this revolutionary platform.

## What is bolt.new?

bolt.new is an **in-browser AI web development agent** designed for full-stack web application development. Think of it as having a senior developer as your coding partner, available 24/7, who understands your project context and can generate production-ready code through natural language conversations.

## Core Capabilities

### 🤖 AI-First Development Philosophy
- **Natural Language Interface**: Describe what you want to build instead of writing code line by line
- **Contextual Understanding**: bolt.new maintains state across conversations and understands your project structure
- **Intelligent Code Generation**: Produces clean, production-ready code following industry best practices
- **Real-time Collaboration**: Interactive development environment with instant feedback

### 🚀 Full-Stack Development
bolt.new supports complete application development including:
- **Frontend**: React, Vue, Angular, and modern JavaScript frameworks
- **Backend**: Node.js, Express, API development, and serverless functions
- **Databases**: SQL, NoSQL, and cloud database integrations
- **Styling**: CSS, Tailwind, styled-components, and modern styling solutions

### 🔧 Technical Infrastructure
Built on **StackBlitz WebContainers**, bolt.new provides:
- **Browser-based Environment**: No local setup required
- **Instant Development**: Full development environment in seconds
- **Real-time Preview**: See changes immediately as you build
- **Secure Sandboxing**: Safe execution environment for all code

## Integration Ecosystem

bolt.new seamlessly integrates with industry-leading tools:

### Design & Prototyping
- **Figma**: Convert designs directly to functional code
- Design-to-code workflow automation

### Database & Backend
- **Supabase**: PostgreSQL database with real-time features
- **Authentication**: User management and secure login systems
- **Edge Functions**: Serverless backend functionality

### Version Control & Deployment
- **GitHub**: Automatic repository creation and version control
- **Netlify**: One-click deployment to production
- **Custom Domains**: Professional hosting solutions

### E-commerce & Payments
- **Stripe**: Complete payment processing integration
- **Shopping Carts**: E-commerce functionality out of the box

### Mobile Development
- **Expo**: React Native mobile app development
- Cross-platform mobile applications

## Who Should Use bolt.new?

### Perfect for {{name}} if you're:
- **Experienced Developer**: Accelerate your development workflow
- **Learning to Code**: AI guidance helps you understand best practices
- **Entrepreneur**: Quickly prototype and build your startup ideas
- **Designer**: Bridge the gap between design and development
- **Student**: Learn modern web development with personalized assistance

## Key Success Skills

To maximize your bolt.new experience, focus on:

### 1. Clear Communication
- Define your project goals specifically
- Describe user requirements and use cases
- Explain your target audience and their needs

### 2. Understanding User Experience
- Think about user journeys and workflows
- Consider accessibility and usability principles
- Plan for different devices and screen sizes

### 3. Iterative Development
- Start with a minimum viable product (MVP)
- Add features incrementally
- Test and refine continuously

## Your Learning Journey

{{name}}, throughout this course you'll master:
- **Foundation Skills**: Platform navigation and core concepts
- **Advanced Prompting**: Effective AI communication techniques
- **Database Integration**: Working with modern data solutions
- **Authentication Systems**: Secure user management
- **Deployment Strategies**: Taking applications to production
- **Third-Party Integrations**: Connecting external services
- **Professional Workflows**: Industry-standard development practices

## Token-Based Economy

bolt.new uses a token-based pricing model where costs depend on:
- Complexity of AI interactions
- Amount of code generated
- Project size and scope
- Integration requirements

Understanding token usage helps you develop efficiently and cost-effectively.

Ready to transform how you build applications? Let's begin your bolt.new mastery journey!`,
        learningObjectives: {
          0: 'Understand bolt.new as an AI-powered development platform',
          1: 'Navigate the browser-based development environment',
          2: 'Recognize integration capabilities with modern tools',
          3: 'Identify key skills for successful AI-assisted development',
          4: 'Plan effective learning strategies for bolt.new mastery'
        },
        badgeName: 'bolt.new Pioneer',
        srcodeCommentary: 'Welcome to the future, {{name}}! bolt.new is like having a coding genie, but instead of three wishes, you get unlimited prompts. The secret? It\'s not just about asking for code - it\'s about having intelligent conversations with your AI development partner. Think of me as your prompt whisperer and occasional source of programming wisdom (with a dash of sarcasm)! 🧞‍♂️✨',
        quizQuestions: {
          'q1-1-1': {
            question: 'What is the primary infrastructure technology that powers bolt.new?',
            options: [
              'Docker containers',
              'StackBlitz WebContainers',
              'AWS Lambda',
              'Google Cloud Run'
            ],
            correctAnswer: 1,
            explanation: 'bolt.new is built on StackBlitz WebContainers, which provides a browser-based development environment that can run full-stack applications entirely in the browser without any local setup.'
          },
          'q1-1-2': {
            question: 'Which of the following best describes bolt.new\'s development philosophy?',
            options: [
              'Code-first with manual configuration',
              'AI-first with natural language interface',
              'Template-based with predefined structures',
              'Visual drag-and-drop development'
            ],
            correctAnswer: 1,
            explanation: 'bolt.new follows an AI-first development philosophy where you can describe what you want to build using natural language, and the AI generates production-ready code based on your requirements.'
          },
          'q1-1-3': {
            question: 'What database service does bolt.new integrate with for backend functionality?',
            options: [
              'MongoDB Atlas',
              'Firebase',
              'Supabase',
              'PlanetScale'
            ],
            correctAnswer: 2,
            explanation: 'bolt.new integrates with Supabase, which provides PostgreSQL database with real-time features, authentication, and edge functions for comprehensive backend functionality.'
          },
          'q1-1-4': {
            question: 'Which design tool can bolt.new convert directly to functional code?',
            options: [
              'Adobe XD',
              'Sketch',
              'Figma',
              'InVision'
            ],
            correctAnswer: 2,
            explanation: 'bolt.new has direct integration with Figma, allowing you to convert designs directly to functional code, streamlining the design-to-development workflow.'
          },
          'q1-1-5': {
            question: 'What pricing model does bolt.new use?',
            options: [
              'Fixed monthly subscription',
              'Pay-per-project',
              'Token-based usage',
              'Completely free'
            ],
            correctAnswer: 2,
            explanation: 'bolt.new uses a token-based pricing model where costs depend on the complexity of AI interactions, amount of code generated, project size, and integration requirements.'
          }
        }
      },

      'lesson-1-2': {
        title: 'Mastering Effective Prompts',
        objective: 'Learn the art of prompt engineering for optimal bolt.new results and efficient development',
        content: `# The Art of Prompt Engineering

{{name}}, mastering bolt.new is fundamentally about communication. The quality of your prompts directly determines the quality of your results. Let's dive deep into professional prompt engineering techniques.

## The CLEAR Framework

### C - Context
Always establish the big picture:
- **Project Type**: "I'm building a task management app for remote teams"
- **User Base**: "Target audience is small startups with 5-15 employees"
- **Purpose**: "Helping distributed teams stay organized and productive"
- **Industry**: "SaaS productivity tool for technology companies"

### L - List Requirements
Be specific about functionality:
- **Core Features**: "Users need to create, assign, prioritize, and track tasks"
- **User Roles**: "Team members, project managers, and administrators"
- **Data Requirements**: "Task titles, descriptions, due dates, priority levels, assignment history"
- **Business Rules**: "Only project managers can assign tasks to others"

### E - Examples and References
Provide clear comparisons:
- **Similar Apps**: "Like Trello but with more detailed task tracking"
- **UI Inspiration**: "Clean interface similar to Linear or Notion"
- **Functionality**: "Task creation flow similar to GitHub Issues"
- **User Experience**: "As intuitive as Slack for team communication"

### A - Aesthetics and Design
Describe the visual direction:
- **Design Style**: "Modern, minimalist design with clean typography"
- **Color Scheme**: "Professional blue and white theme with accent colors"
- **Layout**: "Sidebar navigation with main content area and right panel for details"
- **Responsive**: "Mobile-first design that works seamlessly on all devices"

### R - Requirements and Constraints
Technical specifications:
- **Technology Stack**: "React with TypeScript for type safety"
- **Database**: "Supabase for real-time collaboration features"
- **Authentication**: "Social login with Google and GitHub"
- **Deployment**: "Deploy to Netlify with custom domain"
- **Performance**: "Load times under 2 seconds on 3G connections"

## Advanced Prompting Strategies

### Progressive Enhancement
Start simple, then add complexity:

**Step 1**: "Create a basic todo list with add, complete, and delete functionality"
**Step 2**: "Add user authentication so each person has their own todos"
**Step 3**: "Include team collaboration features for shared task lists"
**Step 4**: "Add real-time updates so team members see changes instantly"
**Step 5**: "Implement task assignment and priority management"

### Contextual Refinement
Build on existing work:
- "Modify the task creation form to include priority selection dropdown"
- "Update the task list component to show assignment information"
- "Change the color scheme to use our brand colors: #2563eb for primary"
- "Add a filter sidebar to show tasks by status, priority, or assignee"

### Specific Feature Requests
Focus on one enhancement at a time:
- "Add a search function that filters tasks by title and description with real-time results"
- "Implement drag-and-drop functionality to reorder tasks by priority"
- "Create a dashboard showing task completion statistics for the last 30 days"
- "Add email notifications when tasks are assigned or completed"

## Professional Prompt Patterns

### The Problem-Solution Pattern
{{name}}, when you encounter issues, structure your prompts like this:

**Current State**: "The task list loads slowly when there are more than 100 tasks"
**Desired Outcome**: "Fast loading regardless of task count"
**Specific Request**: "Implement pagination with 20 tasks per page and infinite scroll"
**Success Criteria**: "Page load time under 1 second even with 1000+ tasks"

### The User Story Pattern
Frame requests from the user's perspective:
- "As a project manager, I want to see team productivity metrics so I can identify bottlenecks"
- "As a team member, I want to receive notifications about task updates so I stay informed"
- "As an administrator, I want to manage user permissions so I can control access levels"

### The Technical Specification Pattern
For complex technical requirements:
- "Implement JWT-based authentication with refresh tokens"
- "Set up real-time WebSocket connections for live task updates"
- "Create REST API endpoints following OpenAPI 3.0 specification"
- "Add database migrations for schema versioning"

## Common Prompt Pitfalls to Avoid

### ❌ Too Vague
**Bad**: "Make a website"
**Good**: "Create a portfolio website for a UX designer showcasing 6 projects with case studies, about page, and contact form using a modern, minimal design"

### ❌ Overwhelming Complexity
**Bad**: "Build a complete social media platform with messaging, posts, stories, live streaming, marketplace, AI recommendations, and crypto payments"
**Good**: "Create a simple photo-sharing app where users can post images with captions and follow other users"

### ❌ Unclear Success Criteria
**Bad**: "Make it look better"
**Good**: "Update the design to use a card-based layout with subtle shadows, increase font size to 16px for better readability, and add more whitespace between sections"

### ❌ Missing Context
**Bad**: "Add a login button"
**Good**: "Add a login button in the top-right corner of the navigation bar that opens a modal with email/password fields and social login options"

## Token Optimization Strategies

{{name}}, understanding token usage helps you develop efficiently:

### Efficient Communication
- **Be Specific Early**: Detailed initial prompts prevent back-and-forth iterations
- **Reference Previous Work**: "Update the user profile component we created earlier"
- **Batch Related Changes**: "Make these three styling updates to the header component..."

### Smart Iteration
- **Incremental Updates**: Small, focused changes rather than complete rewrites
- **Reuse Components**: "Use the same card design pattern for the new feature"
- **Build on Success**: "Apply the same responsive design approach to other pages"

## Advanced Techniques for {{name}}

### Conditional Logic Prompts
"If the user is logged in, show the dashboard; otherwise, display the landing page with sign-up call-to-action"

### Multi-Step Workflows
"Create a three-step onboarding process: 1) Account setup, 2) Profile creation, 3) Team invitation"

### Error Handling Specifications
"Add proper error handling for network failures with user-friendly messages and retry options"

### Performance Optimization Requests
"Implement lazy loading for images and code splitting for better performance on slower connections"

Remember {{name}}, great prompts lead to great results. The time you invest in crafting clear, specific prompts will save hours of development time and produce higher-quality applications.`,
        learningObjectives: {
          0: 'Apply the CLEAR framework for structured prompt development',
          1: 'Use progressive enhancement strategies for complex projects',
          2: 'Implement professional prompt patterns for specific use cases',
          3: 'Optimize token usage through efficient communication',
          4: 'Avoid common prompting pitfalls that lead to poor results'
        },
        badgeName: 'AI Whisperer',
        srcodeCommentary: '{{name}}, think of prompts like ordering at a fancy restaurant. You wouldn\'t just grunt "food" at the waiter - you\'d specify the dish, cooking preferences, and dietary restrictions. Same principle with bolt.new! The more specific and thoughtful your "order," the more delicious your code will be. And trust me, nobody wants undercooked spaghetti code! 🍝✨',
        quizQuestions: {
          'q1-2-1': {
            question: 'What does the "C" in the CLEAR framework stand for?',
            options: [
              'Code requirements',
              'Context',
              'Completion criteria',
              'Conditional logic'
            ],
            correctAnswer: 1,
            explanation: 'The "C" in the CLEAR framework stands for "Context" - always establish the big picture including project type, user base, purpose, and industry before making specific requests.'
          },
          'q1-2-2': {
            question: 'Which prompting strategy involves breaking down complex requests into smaller, manageable parts?',
            options: [
              'Contextual prompting',
              'Iterative development',
              'Comparative analysis',
              'Technical specification'
            ],
            correctAnswer: 1,
            explanation: 'Iterative development involves breaking down complex requests into smaller, manageable parts, allowing for better results and easier debugging when issues arise.'
          },
          'q1-2-3': {
            question: 'What is the most effective way to provide design direction in your prompts?',
            options: [
              'Use technical CSS specifications only',
              'Provide vague artistic descriptions',
              'Describe visual direction with specific examples and references',
              'Let the AI choose the design automatically'
            ],
            correctAnswer: 2,
            explanation: 'The most effective approach is to describe the visual direction with specific examples and references, including design style, color scheme, layout preferences, and responsive requirements.'
          },
          'q1-2-4': {
            question: 'Which of these is a common prompting mistake that leads to poor results?',
            options: [
              'Being too specific about requirements',
              'Providing too much context',
              'Asking for vague generic solutions',
              'Including technical constraints'
            ],
            correctAnswer: 2,
            explanation: 'Asking for vague generic solutions is a common mistake. Specific, detailed prompts with clear requirements and constraints produce much better results than generic requests.'
          },
          'q1-2-5': {
            question: 'What is the purpose of the "R" (Requirements and Constraints) in the CLEAR framework?',
            options: [
              'To limit the AI\'s creativity',
              'To specify technical stack, performance needs, and deployment requirements',
              'To reduce development time',
              'To avoid using modern technologies'
            ],
            correctAnswer: 1,
            explanation: 'Requirements and Constraints specify technical specifications like technology stack, database choice, authentication methods, deployment targets, and performance requirements to ensure the solution meets your specific needs.'
          }
        }
      },

      'lesson-1-3': {
        title: 'Navigating the bolt.new Interface',
        objective: 'Master every component of the bolt.new development environment for maximum productivity',
        content: `# Mastering the bolt.new Interface

{{name}}, the bolt.new interface is your command center for AI-powered development. Understanding each component deeply will transform your development efficiency. Let's explore every feature systematically.

## Core Interface Components

### 1. The Chat Interface - Your AI Communication Hub
Located at the bottom of the screen, this is where all the magic happens:

**Features:**
- **Multi-line Input**: Use Shift+Enter for complex, detailed prompts
- **Prompt History**: Access and modify previous instructions
- **Real-time Typing**: See AI responses generate in real-time
- **Message Threading**: Maintain context across long development sessions

**Pro Tips for {{name}}:**
- Keep chat history organized by using clear, descriptive prompts
- Reference previous messages: "Update the component we created in message #15"
- Use the history to learn from successful prompt patterns
- Clear chat when starting new, unrelated features to maintain focus

### 2. Live Preview Window - Real-time Application View
Your application comes alive here:

**Capabilities:**
- **Instant Updates**: See changes immediately as code generates
- **Interactive Testing**: Click, type, and navigate your app in real-time
- **Responsive Preview**: Test different screen sizes and orientations
- **Console Integration**: View runtime errors and debug information
- **Network Monitoring**: Watch API calls and data flow

**Advanced Usage:**
- **Mobile Testing**: Use browser dev tools for device simulation
- **Performance Monitoring**: Check load times and resource usage
- **Accessibility Testing**: Verify keyboard navigation and screen reader compatibility
- **Cross-browser Validation**: Test compatibility across different browsers

### 3. File Explorer - Project Structure Navigation
Understand your project architecture:

**Organization:**
- **Folder Structure**: Logical organization following framework conventions
- **File Types**: Recognize different file extensions and their purposes
- **Quick Access**: Jump directly to any file with one click
- **Search Functionality**: Find files quickly in large projects

**File System Patterns:**
- **src/**: Main application source code
- **public/**: Static assets and index.html
- **components/**: Reusable UI components
- **pages/**: Route-based page components
- **utils/**: Helper functions and utilities
- **styles/**: CSS and styling files
- **api/**: Backend endpoints and server logic

### 4. Integrated Code Editor - Manual Fine-tuning
When you need direct control:

**Editor Features:**
- **Syntax Highlighting**: Color-coded for different languages
- **Auto-completion**: Smart suggestions as you type
- **Error Detection**: Real-time linting and error highlighting
- **Code Formatting**: Automatic indentation and style consistency
- **Search and Replace**: Powerful text manipulation tools

**Best Practices for {{name}}:**
- Use the editor for small tweaks rather than major changes
- Leverage auto-completion to learn framework patterns
- Pay attention to error highlighting for debugging
- Format code regularly for better readability

### 5. Terminal Output - Development Monitoring
Monitor your application's health:

**Information Displayed:**
- **Build Status**: Compilation progress and completion
- **Error Messages**: Detailed debugging information
- **Package Installation**: Dependency management progress
- **Hot Reload Status**: Live update confirmations
- **Performance Metrics**: Build times and optimization details

**Debugging Strategies:**
- **Error Analysis**: Read error messages carefully for specific issues
- **Build Monitoring**: Watch for successful compilation confirmations
- **Dependency Tracking**: Monitor package installation progress
- **Performance Awareness**: Notice build time patterns for optimization

## Advanced Interface Features

### Version Control Integration
bolt.new automatically manages your code history:

**Automatic Versioning:**
- Every significant change creates a checkpoint
- Access previous versions through the history panel
- Rollback to earlier states if needed
- Compare different versions side-by-side

**Collaboration Features:**
- **Project Sharing**: Share your project with a simple link
- **Real-time Collaboration**: Multiple developers can work simultaneously
- **Comment System**: Add notes and feedback directly in the interface
- **Export Options**: Download code or push to GitHub

### Deployment Integration
One-click deployment to production:

**Supported Platforms:**
- **Netlify**: Automatic deployments with custom domains
- **Vercel**: Optimized for React and Next.js applications
- **GitHub Pages**: Free hosting for static sites
- **Custom Servers**: Export and deploy anywhere

**Deployment Process:**
1. **Build Optimization**: Automatic production-ready builds
2. **Asset Optimization**: Image compression and code minification
3. **CDN Integration**: Global content delivery for fast loading
4. **SSL Certificates**: Automatic HTTPS security
5. **Custom Domains**: Professional branding with your domain

## Workflow Optimization for {{name}}

### Efficient Development Patterns

#### 1. Start with Structure
- Begin with overall layout and navigation
- Establish your component hierarchy
- Set up routing and page structure
- Define your data flow patterns

#### 2. Iterative Development
- Build one feature completely before starting the next
- Test thoroughly at each stage
- Refine user experience continuously
- Gather feedback and iterate

#### 3. Use Preview Strategically
- Test every new feature immediately
- Verify responsive design across devices
- Check accessibility and usability
- Validate performance on slower connections

#### 4. Monitor Terminal Output
- Watch for build errors early
- Pay attention to performance warnings
- Monitor dependency installation
- Check for security vulnerabilities

### Keyboard Shortcuts for Power Users

Essential shortcuts for {{name}}:
- **Ctrl/Cmd + Enter**: Submit chat prompt quickly
- **Ctrl/Cmd + /**: Toggle file explorer visibility
- **Ctrl/Cmd + \\**: Show/hide terminal output
- **Ctrl/Cmd + Shift + P**: Access command palette
- **Ctrl/Cmd + F**: Search within current file
- **Ctrl/Cmd + D**: Duplicate current line
- **Ctrl/Cmd + Z**: Undo last action
- **Ctrl/Cmd + Y**: Redo action

### Project Organization Best Practices

#### Folder Structure Strategy
\`\`\`
src/
├── components/          # Reusable UI components
│   ├── common/         # Shared components
│   ├── forms/          # Form-specific components
│   └── layout/         # Layout components
├── pages/              # Route-based pages
├── hooks/              # Custom React hooks
├── utils/              # Helper functions
├── styles/             # CSS and styling
├── types/              # TypeScript definitions
└── api/                # API integration
\`\`\`

#### Component Naming Conventions
- **PascalCase**: Component names (UserProfile, TaskList)
- **camelCase**: Function names (getUserData, handleSubmit)
- **kebab-case**: File names (user-profile.tsx, task-list.css)
- **UPPER_CASE**: Constants (API_BASE_URL, MAX_RETRIES)

### Troubleshooting Common Interface Issues

#### Performance Optimization
- **Large Projects**: Use file search instead of browsing
- **Slow Previews**: Clear browser cache and reload
- **Memory Issues**: Close unused tabs and restart browser
- **Build Errors**: Check terminal for specific error messages

#### Collaboration Solutions
- **Sync Issues**: Refresh the page to get latest changes
- **Permission Problems**: Verify sharing settings
- **Version Conflicts**: Use version history to resolve differences
- **Communication**: Use comment system for team coordination

{{name}}, mastering the bolt.new interface is like learning to drive a high-performance car. Once you understand every control and feature, you'll develop at speeds you never thought possible!`,
        learningObjectives: {
          0: 'Navigate all major interface components with confidence',
          1: 'Utilize the preview window for comprehensive testing',
          2: 'Manage project structure through the file explorer',
          3: 'Apply keyboard shortcuts for efficient development',
          4: 'Implement professional workflow optimization strategies'
        },
        badgeName: 'Interface Master',
        srcodeCommentary: '{{name}}, the bolt.new interface is like a Swiss Army knife designed by developers, for developers. Every tool has its place, and once you know where everything is, you\'ll wonder how you ever coded with anything else. Just remember: with great interface power comes great responsibility... to build amazing things! 🛠️✨',
        quizQuestions: {
          'q1-3-1': {
            question: 'What are the three main panels in the bolt.new interface?',
            options: [
              'Code editor, terminal, and settings',
              'Chat interface, code editor, and preview window',
              'File explorer, chat interface, and terminal',
              'Preview window, settings, and file manager'
            ],
            correctAnswer: 1,
            explanation: 'The three main panels in bolt.new are the Chat interface (where you communicate with the AI), the Code editor (where you can review and edit generated code), and the Preview window (where you see your application running in real-time).'
          },
          'q1-3-2': {
            question: 'What keyboard shortcut opens the command palette in bolt.new?',
            options: [
              'Ctrl+Shift+P',
              'Ctrl+P',
              'Ctrl+K',
              'Ctrl+Shift+K'
            ],
            correctAnswer: 0,
            explanation: 'Ctrl+Shift+P (or Cmd+Shift+P on Mac) opens the command palette, which provides quick access to all available commands and actions within the bolt.new interface.'
          },
          'q1-3-3': {
            question: 'Which panel allows you to see your application running in real-time?',
            options: [
              'Code editor',
              'Chat interface',
              'Preview window',
              'File explorer'
            ],
            correctAnswer: 2,
            explanation: 'The Preview window shows your application running in real-time, allowing you to test functionality, see visual changes, and interact with your application as users would.'
          },
          'q1-3-4': {
            question: 'What is the primary purpose of the chat interface in bolt.new?',
            options: [
              'To view application logs',
              'To communicate with the AI and request changes',
              'To manage project settings',
              'To browse file contents'
            ],
            correctAnswer: 1,
            explanation: 'The chat interface is where you communicate with the AI, make requests for new features, ask for modifications, and engage in natural language conversations about your project development.'
          }
        }
      },

      // Level 2: Database Integration
      'lesson-2-1': {
        title: 'Database Fundamentals with Supabase',
        objective: 'Master database integration, schema design, and CRUD operations using Supabase in bolt.new',
        content: `# Database Fundamentals with Supabase

{{name}}, databases are the foundation of modern web applications. With bolt.new and Supabase, you can create powerful, scalable database solutions using simple prompts. Let's dive deep into professional database development.

## Understanding Supabase in bolt.new

### What is Supabase?
Supabase is a **PostgreSQL-based** backend-as-a-service that provides:
- **Real-time Database**: Instant updates across all connected clients
- **Authentication**: Built-in user management and security
- **Edge Functions**: Serverless backend logic
- **Storage**: File and media management
- **Row Level Security (RLS)**: Granular access control

### Why Supabase with bolt.new?
Perfect integration for {{name}} because:
- **No Backend Setup**: Focus on frontend development
- **Real-time Features**: Live data updates without complex WebSocket management
- **Automatic APIs**: Generated REST and GraphQL endpoints
- **Type Safety**: TypeScript integration for better development experience
- **Scalability**: Handles growth from prototype to production

## Database Types and Use Cases

### Relational Databases (SQL)
**PostgreSQL** (Supabase's foundation):
- **Strengths**: ACID compliance, complex queries, data integrity
- **Best For**: Financial applications, e-commerce, content management
- **When to Use**: When you need strict data consistency and complex relationships

**MySQL**:
- **Strengths**: Wide adoption, excellent performance, large community
- **Best For**: Web applications, content management systems
- **When to Use**: Traditional web applications with proven patterns

**SQLite**:
- **Strengths**: Lightweight, file-based, no server required
- **Best For**: Prototypes, local development, mobile apps
- **When to Use**: Simple applications or development environments

### NoSQL Databases
**MongoDB**:
- **Strengths**: Flexible schema, document-based, horizontal scaling
- **Best For**: Content management, catalogs, real-time analytics
- **When to Use**: Rapidly evolving data structures

**Firebase Firestore**:
- **Strengths**: Real-time updates, offline support, easy setup
- **Best For**: Mobile apps, real-time collaboration
- **When to Use**: Mobile-first applications with real-time requirements

## Creating Your First Database in bolt.new

### Basic Setup Prompt
"{{name}}, let's create a comprehensive task management database with Supabase integration for our team collaboration app"

bolt.new will automatically:
1. **Initialize Supabase Project**: Set up database connection
2. **Create Database Schema**: Design tables and relationships
3. **Generate API Endpoints**: CRUD operations for all tables
4. **Set up Authentication**: User management system
5. **Configure Real-time**: Live data synchronization

### Advanced Schema Design

#### Users Table
\`\`\`sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  full_name VARCHAR(255),
  avatar_url TEXT,
  role VARCHAR(50) DEFAULT 'member',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
\`\`\`

#### Projects Table
\`\`\`sql
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  owner_id UUID REFERENCES users(id) ON DELETE CASCADE,
  status VARCHAR(50) DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
\`\`\`

#### Tasks Table
\`\`\`sql
CREATE TABLE tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  assigned_to UUID REFERENCES users(id) ON DELETE SET NULL,
  status VARCHAR(50) DEFAULT 'todo',
  priority VARCHAR(20) DEFAULT 'medium',
  due_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
\`\`\`

## CRUD Operations Mastery

### Create Operations
**Adding New Records:**

\`\`\`javascript
// Create a new project
const { data: project, error } = await supabase
  .from('projects')
  .insert({
    name: 'Website Redesign',
    description: 'Complete overhaul of company website',
    owner_id: user.id
  })
  .select()
  .single();

// Create multiple tasks at once
const { data: tasks, error } = await supabase
  .from('tasks')
  .insert([
    {
      title: 'Design mockups',
      project_id: project.id,
      priority: 'high'
    },
    {
      title: 'Develop frontend',
      project_id: project.id,
      priority: 'medium'
    }
  ]);
\`\`\`

### Read Operations
**Querying Data:**

\`\`\`javascript
// Get all projects for current user
const { data: projects } = await supabase
  .from('projects')
  .select(\`
    *,
    tasks (
      id,
      title,
      status,
      assigned_to (
        full_name,
        email
      )
    )
  \`)
  .eq('owner_id', user.id)
  .order('created_at', { ascending: false });

// Advanced filtering and pagination
const { data: tasks, count } = await supabase
  .from('tasks')
  .select('*, projects(name), users(full_name)', { count: 'exact' })
  .eq('status', 'in_progress')
  .gte('due_date', new Date().toISOString())
  .order('priority', { ascending: false })
  .range(0, 9); // First 10 results
\`\`\`

### Update Operations
**Modifying Existing Data:**

\`\`\`javascript
// Update task status
const { data, error } = await supabase
  .from('tasks')
  .update({ 
    status: 'completed',
    completed_at: new Date().toISOString()
  })
  .eq('id', taskId)
  .select();

// Bulk update multiple records
const { data, error } = await supabase
  .from('tasks')
  .update({ status: 'archived' })
  .eq('project_id', projectId)
  .eq('status', 'completed');
\`\`\`

### Delete Operations
**Removing Data:**

\`\`\`javascript
// Soft delete (recommended)
const { error } = await supabase
  .from('tasks')
  .update({ deleted_at: new Date().toISOString() })
  .eq('id', taskId);

// Hard delete (permanent)
const { error } = await supabase
  .from('tasks')
  .delete()
  .eq('id', taskId);
\`\`\`

## Database Best Practices for {{name}}

### Schema Design Principles

#### 1. Normalization
- **Avoid Data Duplication**: Store information in one place
- **Use Foreign Keys**: Maintain referential integrity
- **Separate Concerns**: Different types of data in different tables

#### 2. Indexing Strategy
\`\`\`sql
-- Index frequently queried columns
CREATE INDEX idx_tasks_project_id ON tasks(project_id);
CREATE INDEX idx_tasks_status ON tasks(status);
CREATE INDEX idx_tasks_assigned_to ON tasks(assigned_to);

-- Composite indexes for complex queries
CREATE INDEX idx_tasks_project_status ON tasks(project_id, status);
\`\`\`

#### 3. Data Types Optimization
- **Use Appropriate Types**: UUID for IDs, VARCHAR with limits for text
- **Consider Storage**: Use smaller types when possible
- **Plan for Growth**: Design for future scalability

### Security Implementation

#### Row Level Security (RLS)
\`\`\`sql
-- Enable RLS on all tables
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;

-- Users can only see their own projects
CREATE POLICY "Users can view own projects" ON projects
  FOR SELECT USING (owner_id = auth.uid());

-- Users can view tasks from their projects
CREATE POLICY "Users can view project tasks" ON tasks
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM projects 
      WHERE projects.id = tasks.project_id 
      AND projects.owner_id = auth.uid()
    )
  );
\`\`\`

#### Data Validation
\`\`\`sql
-- Add constraints for data integrity
ALTER TABLE tasks ADD CONSTRAINT valid_status 
  CHECK (status IN ('todo', 'in_progress', 'review', 'completed'));

ALTER TABLE tasks ADD CONSTRAINT valid_priority 
  CHECK (priority IN ('low', 'medium', 'high', 'urgent'));
\`\`\`

### Performance Optimization

#### Query Optimization
- **Use Indexes**: Index frequently queried columns
- **Limit Results**: Always use pagination for large datasets
- **Select Specific Columns**: Avoid SELECT * in production
- **Use Joins Wisely**: Understand when to use joins vs separate queries

#### Connection Management
- **Connection Pooling**: Let Supabase handle connections efficiently
- **Query Batching**: Group related operations together
- **Caching Strategy**: Cache frequently accessed, rarely changed data

## Real-time Features

### Live Data Synchronization
\`\`\`javascript
// Subscribe to real-time task updates
const subscription = supabase
  .channel('tasks_channel')
  .on('postgres_changes', {
    event: '*',
    schema: 'public',
    table: 'tasks',
    filter: "project_id=eq." + projectId
  }, (payload) => {
    console.log('Task updated:', payload);
    // Update your UI state here
  })
  .subscribe();

// Cleanup subscription
useEffect(() => {
  return () => {
    subscription.unsubscribe();
  };
}, []);
\`\`\`

### Presence Tracking
\`\`\`javascript
// Track who's online in the project
const presence = supabase.channel("project:" + projectId)
  .on('presence', { event: 'sync' }, () => {
    const state = presence.presenceState();
    console.log('Online users:', state);
  })
  .on('presence', { event: 'join' }, ({ key, newPresences }) => {
    console.log('User joined:', newPresences);
  })
  .on('presence', { event: 'leave' }, ({ key, leftPresences }) => {
    console.log('User left:', leftPresences);
  })
  .subscribe(async (status) => {
    if (status === 'SUBSCRIBED') {
      await presence.track({
        user_id: user.id,
        username: user.full_name,
        online_at: new Date().toISOString()
      });
    }
  });
\`\`\`

## Advanced Database Prompts for {{name}}

### Schema Creation
"Create a comprehensive e-commerce database schema with products, categories, orders, customers, and inventory tracking, including proper relationships and constraints"

### Performance Optimization
"Add appropriate indexes to the tasks table for optimal query performance, focusing on status, project_id, and assigned_to columns"

### Security Implementation
"Implement row-level security policies ensuring users can only access their own data and shared team projects"

### Real-time Features
"Set up real-time subscriptions for the task management app so all team members see updates instantly"

{{name}}, mastering databases is about understanding not just the technical implementation, but also the business logic and user experience implications. Great database design makes everything else easier!`,
        learningObjectives: {
          0: 'Design efficient database schemas using Supabase and PostgreSQL',
          1: 'Implement comprehensive CRUD operations with proper error handling',
          2: 'Apply security best practices including RLS and data validation',
          3: 'Optimize database performance with indexing and query strategies',
          4: 'Integrate real-time features for collaborative applications'
        },
        badgeName: 'Database Architect',
        srcodeCommentary: '{{name}}, databases are like digital filing cabinets, but way cooler! Instead of dusty folders, you get lightning-fast queries and real-time updates. The secret is organization - design your schema like you\'re Marie Kondo for data. Does this table spark joy? Does this relationship make sense? Trust me, future you will thank present you for good database design! 📊✨',
        quizQuestions: {
          'q2-1-1': {
            question: 'What type of database does Supabase provide?',
            options: [
              'MongoDB (NoSQL)',
              'PostgreSQL (SQL)',
              'SQLite (Embedded)',
              'Redis (Key-Value)'
            ],
            correctAnswer: 1,
            explanation: 'Supabase provides PostgreSQL, a powerful open-source SQL database that supports advanced features like JSON operations, full-text search, and complex queries.'
          },
          'q2-1-2': {
            question: 'What is Row Level Security (RLS) in Supabase?',
            options: [
              'A way to encrypt database rows',
              'A security feature that controls access to specific rows based on user permissions',
              'A method to backup database rows',
              'A tool for monitoring database performance'
            ],
            correctAnswer: 1,
            explanation: 'Row Level Security (RLS) is a PostgreSQL feature that allows you to control which rows users can see and modify based on their authentication and authorization rules, providing fine-grained access control.'
          },
          'q2-1-3': {
            question: 'Which Supabase feature enables real-time data synchronization?',
            options: [
              'Edge Functions',
              'Storage',
              'Realtime subscriptions',
              'Database triggers'
            ],
            correctAnswer: 2,
            explanation: 'Supabase Realtime subscriptions allow you to listen to database changes in real-time, enabling features like live chat, collaborative editing, and instant data updates across connected clients.'
          },
          'q2-1-4': {
            question: 'What is the primary advantage of using Supabase with bolt.new?',
            options: [
              'It\'s completely free forever',
              'It requires no SQL knowledge',
              'It provides instant database setup with built-in authentication and real-time features',
              'It only works with React applications'
            ],
            correctAnswer: 2,
            explanation: 'Supabase integrates seamlessly with bolt.new by providing instant database setup, built-in authentication, real-time subscriptions, and Edge Functions, eliminating the need for complex backend configuration.'
          }
        }
      },

      'lesson-2-2': {
        title: 'Advanced Supabase Features',
        objective: 'Master advanced Supabase capabilities including Edge Functions, Storage, and complex queries',
        content: `# Advanced Supabase Features

{{name}}, now that you understand the fundamentals, let's explore Supabase's advanced capabilities that make it a complete backend solution. These features will transform your applications from simple CRUD apps to sophisticated, production-ready systems.

## Edge Functions - Serverless Backend Logic

### What are Edge Functions?
Edge Functions are serverless TypeScript functions that run close to your users for optimal performance:
- **Global Distribution**: Execute at edge locations worldwide
- **TypeScript Support**: Full type safety and modern JavaScript features
- **Supabase Integration**: Direct access to your database and auth
- **Cost Efficient**: Pay only for execution time
- **Auto-scaling**: Handle traffic spikes automatically

### Creating Your First Edge Function

#### Setup in bolt.new
"{{name}}, create a Supabase Edge Function for processing webhook payments from Stripe with proper error handling and database updates"

#### Example Function Structure
\`\`\`typescript
// supabase/functions/process-payment/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    )

    // Parse request body
    const { payment_intent_id, amount, customer_email } = await req.json()

    // Process payment logic
    const { data, error } = await supabase
      .from('payments')
      .insert({
        payment_intent_id,
        amount,
        customer_email,
        status: 'completed',
        processed_at: new Date().toISOString()
      })

    if (error) throw error

    // Return success response
    return new Response(
      JSON.stringify({ success: true, payment: data }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    )
  }
})
\`\`\`

### Advanced Edge Function Patterns

#### Background Job Processing
\`\`\`typescript
// Process large datasets asynchronously
serve(async (req) => {
  const { dataset_id } = await req.json()
  
  // Queue background job
  const { data } = await supabase
    .from('job_queue')
    .insert({
      type: 'process_dataset',
      payload: { dataset_id },
      status: 'pending'
    })
  
  // Return immediately while processing continues
  return new Response(JSON.stringify({ job_id: data.id }))
})
\`\`\`

#### Email Notifications
\`\`\`typescript
// Send transactional emails
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts"

serve(async (req) => {
  const { to, subject, template, data } = await req.json()
  
  const client = new SMTPClient({
    connection: {
      hostname: Deno.env.get('SMTP_HOSTNAME'),
      port: 587,
      tls: true,
      auth: {
        username: Deno.env.get('SMTP_USERNAME'),
        password: Deno.env.get('SMTP_PASSWORD'),
      },
    },
  })

  await client.send({
    from: "noreply@yourapp.com",
    to,
    subject,
    html: renderTemplate(template, data),
  })

  await client.close()
  
  return new Response(JSON.stringify({ sent: true }))
})
\`\`\`

## Storage Management

### File Upload and Management
Supabase Storage provides secure file handling with automatic CDN distribution:

#### Basic File Upload
\`\`\`javascript
// Upload user avatar
const uploadAvatar = async (file, userId) => {
  const fileExt = file.name.split('.').pop()
  const fileName = userId + ".fileExt"
  const filePath = "avatars/fileName"

  const { data, error } = await supabase.storage
    .from('user-content')
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: true
    })

  if (error) throw error

  // Get public URL
  const { data: { publicUrl } } = supabase.storage
    .from('user-content')
    .getPublicUrl(filePath)

  return publicUrl
}
\`\`\`

#### Advanced Storage Patterns
\`\`\`javascript
// Multi-file upload with progress tracking
const uploadProjectFiles = async (files, projectId, onProgress) => {
  const uploads = files.map(async (file, index) => {
    const filePath = "projects/projectId/file.name"
    
    const { data, error } = await supabase.storage
      .from('project-files')
      .upload(filePath, file, {
        cacheControl: '3600',
        onUploadProgress: (progress) => {
          onProgress(index, (progress.loaded / progress.total) * 100)
        }
      })

    if (error) throw error
    return data
  })

  return Promise.all(uploads)
}

// Image processing and optimization
const processImage = async (file, options = {}) => {
  const {
    width = 800,
    height = 600,
    quality = 0.8,
    format = 'webp'
  } = options

  // Create canvas for image processing
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  
  // Load and resize image
  const img = new Image()
  img.src = URL.createObjectURL(file)
  
  await new Promise(resolve => img.onload = resolve)
  
  canvas.width = width
  canvas.height = height
  ctx.drawImage(img, 0, 0, width, height)
  
  // Convert to optimized format
  return new Promise(resolve => {
    canvas.toBlob(resolve, "image/format", quality)
  })
}
\`\`\`

### Storage Security and Policies
\`\`\`sql
-- Create storage bucket with RLS
INSERT INTO storage.buckets (id, name, public) 
VALUES ('user-content', 'user-content', true);

-- Allow authenticated users to upload their own files
CREATE POLICY "Users can upload own files" ON storage.objects
  FOR INSERT TO authenticated 
  WITH CHECK (bucket_id = 'user-content' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Allow public read access
CREATE POLICY "Public read access" ON storage.objects
  FOR SELECT TO public 
  USING (bucket_id = 'user-content');
\`\`\`

## Complex Queries and Data Relationships

### Advanced Query Patterns

#### Nested Relationships
\`\`\`javascript
// Get projects with all related data
const getProjectDetails = async (projectId) => {
  const { data, error } = await supabase
    .from('projects')
    .select(\`
      *,
      owner:users!owner_id (
        id,
        full_name,
        avatar_url
      ),
      tasks (
        *,
        assigned_user:users!assigned_to (
          full_name,
          avatar_url
        ),
        comments (
          *,
          author:users!author_id (
            full_name,
            avatar_url
          )
        )
      ),
      team_members:project_members (
        user:users (
          id,
          full_name,
          email,
          avatar_url
        ),
        role,
        joined_at
      )
    \`)
    .eq('id', projectId)
    .single()

  return { data, error }
}
\`\`\`

#### Aggregations and Analytics
\`\`\`javascript
// Project analytics dashboard
const getProjectAnalytics = async (projectId) => {
  // Task completion statistics
  const { data: taskStats } = await supabase
    .from('tasks')
    .select('status')
    .eq('project_id', projectId)

  // Activity timeline
  const { data: activity } = await supabase
    .from('task_activities')
    .select(\`
      *,
      task:tasks (title),
      user:users (full_name)
    \`)
    .eq('project_id', projectId)
    .order('created_at', { ascending: false })
    .limit(20)

  // Performance metrics
  const { data: metrics } = await supabase
    .rpc('get_project_metrics', { project_id: projectId })

  return {
    taskStats: processTaskStats(taskStats),
    activity,
    metrics
  }
}

// Custom SQL function for complex calculations
CREATE OR REPLACE FUNCTION get_project_metrics(project_id UUID)
RETURNS JSON AS $$
DECLARE
  result JSON;
BEGIN
  SELECT json_build_object(
    'total_tasks', COUNT(*),
    'completed_tasks', COUNT(*) FILTER (WHERE status = 'completed'),
    'avg_completion_time', AVG(
      EXTRACT(EPOCH FROM (completed_at - created_at)) / 3600
    ) FILTER (WHERE status = 'completed'),
    'team_productivity', (
      COUNT(*) FILTER (WHERE status = 'completed')::FLOAT / 
      NULLIF(COUNT(*), 0) * 100
    )
  ) INTO result
  FROM tasks
  WHERE tasks.project_id = get_project_metrics.project_id;
  
  RETURN result;
END;
$$ LANGUAGE plpgsql;
\`\`\`

#### Full-Text Search
\`\`\`sql
-- Add search index
ALTER TABLE tasks ADD COLUMN search_vector tsvector;

-- Create search index
CREATE INDEX tasks_search_idx ON tasks USING GIN(search_vector);

-- Update search vector trigger
CREATE OR REPLACE FUNCTION update_task_search_vector()
RETURNS TRIGGER AS $$
BEGIN
  NEW.search_vector := to_tsvector('english', 
    COALESCE(NEW.title, '') || ' ' || 
    COALESCE(NEW.description, '')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_task_search_trigger
  BEFORE INSERT OR UPDATE ON tasks
  FOR EACH ROW EXECUTE FUNCTION update_task_search_vector();
\`\`\`

\`\`\`javascript
// Implement search functionality
const searchTasks = async (query, projectId, filters = {}) => {
  let queryBuilder = supabase
    .from('tasks')
    .select(\`
      *,
      project:projects (name),
      assigned_user:users (full_name, avatar_url)
    \`)
    .textSearch('search_vector', query)

  if (projectId) {
    queryBuilder = queryBuilder.eq('project_id', projectId)
  }

  if (filters.status) {
    queryBuilder = queryBuilder.eq('status', filters.status)
  }

  if (filters.priority) {
    queryBuilder = queryBuilder.eq('priority', filters.priority)
  }

  const { data, error } = await queryBuilder
    .order('created_at', { ascending: false })

  return { data, error }
}
\`\`\`

## Real-time Collaboration Features

### Advanced Real-time Patterns

#### Collaborative Editing
\`\`\`javascript
// Real-time collaborative document editing
const setupCollaborativeEditor = (documentId, userId) => {
  const channel = supabase.channel("document:documentId")

  // Listen for document changes
  channel
    .on('postgres_changes', {
      event: 'UPDATE',
      schema: 'public',
      table: 'documents',
      filter: "id=eq.documentId"
    }, (payload) => {
      // Update document content
      updateEditorContent(payload.new.content)
    })
    .on('broadcast', { event: 'cursor_move' }, (payload) => {
      // Update other users' cursor positions
      updateCursorPosition(payload.user_id, payload.position)
    })
    .on('broadcast', { event: 'selection_change' }, (payload) => {
      // Show other users' text selections
      updateUserSelection(payload.user_id, payload.selection)
    })
    .subscribe()

  // Broadcast cursor movements
  const broadcastCursorPosition = (position) => {
    channel.send({
      type: 'broadcast',
      event: 'cursor_move',
      payload: { user_id: userId, position }
    })
  }

  return { channel, broadcastCursorPosition }
}
\`\`\`

#### Live Activity Feeds
\`\`\`javascript
// Real-time activity tracking
const setupActivityFeed = (projectId) => {
  const subscription = supabase
    .channel('project_activity')
    .on('postgres_changes', {
      event: '*',
      schema: 'public',
      table: 'activities',
      filter: "project_id=eq." + projectId
    }, (payload) => {
      if (payload.eventType === 'INSERT') {
        addActivityToFeed(payload.new)
      }
    })
    .subscribe()

  return subscription
}

// Track user activities automatically
const trackActivity = async (type, details, projectId) => {
  const { error } = await supabase
    .from('activities')
    .insert({
      type,
      details,
      project_id: projectId,
      user_id: getCurrentUser().id,
      created_at: new Date().toISOString()
    })

  if (error) console.error('Activity tracking failed:', error)
}
\`\`\`

## Production Optimization for {{name}}

### Performance Best Practices

#### Connection Pooling
\`\`\`javascript
// Optimize connection management
const createSupabaseClient = () => {
  return createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY,
    {
      db: {
        schema: 'public',
      },
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true
      },
      global: {
        headers: {
          'X-Client-Info': 'vibe-coding-academy'
        }
      }
    }
  )
}
\`\`\`

#### Query Optimization
\`\`\`javascript
// Efficient data fetching patterns
const optimizedDataFetching = {
  // Use specific selects
  getTaskList: () => supabase
    .from('tasks')
    .select('id, title, status, priority, due_date')
    .order('created_at', { ascending: false }),

  // Implement pagination
  getTasksPaginated: (page = 0, limit = 20) => supabase
    .from('tasks')
    .select('*', { count: 'exact' })
    .range(page * limit, (page + 1) * limit - 1),

  // Use RPC for complex operations
  getProjectSummary: (projectId) => supabase
    .rpc('get_project_summary', { project_id: projectId })
}
\`\`\`

### Error Handling and Resilience
\`\`\`javascript
// Comprehensive error handling
const withErrorHandling = async (operation, retries = 3) => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const result = await operation()
      return { data: result.data, error: null }
    } catch (error) {
      if (attempt === retries) {
        return { data: null, error }
      }
      
      // Exponential backoff
      await new Promise(resolve => 
        setTimeout(resolve, Math.pow(2, attempt) * 1000)
      )
    }
  }
}

// Usage example
const safeCreateTask = async (taskData) => {
  return withErrorHandling(async () => {
    return await supabase
      .from('tasks')
      .insert(taskData)
      .select()
      .single()
  })
}
\`\`\`

{{name}}, these advanced Supabase features transform your applications from simple databases into sophisticated, real-time, collaborative platforms. The key is to start simple and gradually add complexity as your needs grow!`,
        learningObjectives: {
          0: 'Implement serverless Edge Functions for complex backend logic',
          1: 'Master file storage with security policies and optimization',
          2: 'Build complex queries with nested relationships and aggregations',
          3: 'Create real-time collaborative features with presence tracking',
          4: 'Apply production optimization patterns for performance and reliability'
        },
        badgeName: 'Supabase Expert',
        srcodeCommentary: '{{name}}, you\'ve just unlocked the secret levels of Supabase! Edge Functions are like having a personal assistant who works at the speed of light, Storage is your unlimited digital attic (but organized), and real-time features make your app feel like magic. Remember: with great Supabase power comes great responsibility... to build amazing things! 🚀⚡',
        quizQuestions: {
          'q2-2-1': {
            question: 'What are Supabase Edge Functions?',
            options: [
              'Database triggers that run on data changes',
              'Server-side TypeScript functions that run on the edge',
              'Client-side JavaScript functions',
              'Database optimization tools'
            ],
            correctAnswer: 1,
            explanation: 'Supabase Edge Functions are server-side TypeScript functions that run on the edge (close to users) using Deno runtime, providing low-latency serverless compute for custom business logic.'
          },
          'q2-2-2': {
            question: 'Which feature allows you to store and manage files in Supabase?',
            options: [
              'Database Storage',
              'Edge Functions',
              'Supabase Storage',
              'Realtime Storage'
            ],
            correctAnswer: 2,
            explanation: 'Supabase Storage is a S3-compatible object storage solution that allows you to store and manage files with features like automatic image optimization, CDN distribution, and access control.'
          },
          'q2-2-3': {
            question: 'What is the purpose of presence tracking in Supabase Realtime?',
            options: [
              'To track database performance',
              'To monitor user activity and show who is currently online',
              'To backup user data',
              'To optimize database queries'
            ],
            correctAnswer: 1,
            explanation: 'Presence tracking allows you to monitor user activity and show who is currently online in your application, enabling features like "user is typing" indicators, online status, and collaborative cursor tracking.'
          },
          'q2-2-4': {
            question: 'What is the main advantage of using Supabase\'s built-in image optimization?',
            options: [
              'It reduces database storage usage',
              'It automatically resizes and optimizes images for different devices and formats',
              'It encrypts images for security',
              'It converts all images to vector format'
            ],
            correctAnswer: 1,
            explanation: 'Supabase\'s built-in image optimization automatically resizes and optimizes images for different devices and formats, reducing bandwidth usage and improving loading times without requiring manual image processing.'
          }
        }
      },

      // Level 3: Authentication Systems
      'lesson-3-1': {
        title: 'Authentication Fundamentals',
        objective: 'Master user authentication, authorization, and security best practices in bolt.new applications',
        content: `# Authentication Fundamentals

{{name}}, authentication is the cornerstone of secure web applications. In this comprehensive lesson, we'll master user authentication, authorization, and security best practices using modern approaches in bolt.new. Security isn't just a feature—it's a fundamental requirement.

## Understanding Authentication vs Authorization

### Authentication (Who are you?)
**Authentication** verifies the identity of users:
- **Username/Password**: Traditional credential verification
- **Multi-Factor Authentication (MFA)**: Additional security layers
- **Social Login**: OAuth with Google, GitHub, Twitter, etc.
- **Passwordless**: Magic links, SMS codes, or biometric authentication
- **SSO (Single Sign-On)**: Enterprise identity provider integration

### Authorization (What can you do?)
**Authorization** determines what authenticated users can access:
- **Role-Based Access Control (RBAC)**: Predefined roles with specific permissions
- **Attribute-Based Access Control (ABAC)**: Dynamic permissions based on attributes
- **Resource-Based Permissions**: Fine-grained control over specific resources
- **Hierarchical Permissions**: Nested permission structures

## Authentication Methods in bolt.new

### 1. Email/Password Authentication
The foundation of most applications:

#### Secure Implementation
\`\`\`javascript
// User registration with validation
const registerUser = async (email, password, userData) => {
  // Client-side validation
  const validation = validateUserData({ email, password, ...userData })
  if (!validation.isValid) {
    throw new Error(validation.errors.join(', '))
  }

  // Hash password (handled by Supabase)
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: userData.fullName,
        avatar_url: userData.avatarUrl,
        role: 'user'
      }
    }
  })

  if (error) throw error
  return data
}

// Secure login with rate limiting
const loginUser = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) {
    // Log failed attempt for security monitoring
    await logFailedLoginAttempt(email, getClientIP())
    throw error
  }

  // Update last login timestamp
  await updateUserActivity(data.user.id, 'login')
  return data
}
\`\`\`

#### Password Security Best Practices
\`\`\`javascript
// Password strength validation
const validatePassword = (password) => {
  const requirements = {
    minLength: password.length >= 8,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumbers: /\\d/.test(password),
    hasSpecialChars: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    noCommonPatterns: !isCommonPassword(password)
  }

  const passed = Object.values(requirements).every(req => req)
  return { isValid: passed, requirements }
}

// Secure password reset flow
const resetPassword = async (email) => {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: window.location.origin + "/reset-password"
  })

  if (error) throw error
  
  // Log password reset request for security
  await logSecurityEvent('password_reset_requested', { email })
}
\`\`\`

### 2. Social Authentication (OAuth)
Streamlined user experience with trusted providers:

#### Google OAuth Implementation
\`\`\`javascript
// Google Sign-In setup
const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      scopes: 'email profile',
      redirectTo: window.location.origin + "/auth/callback",
      queryParams: {
        access_type: 'offline',
        prompt: 'consent'
      }
    }
  })

  if (error) throw error
  return data
}

// Handle OAuth callback
const handleAuthCallback = async () => {
  const { data, error } = await supabase.auth.getSession()
  
  if (error) throw error
  
  if (data.session) {
    // Create or update user profile
    await upsertUserProfile(data.session.user)
    
    // Redirect to dashboard
    window.location.href = '/dashboard'
  }
}
\`\`\`

#### GitHub OAuth for Developers
\`\`\`javascript
// GitHub authentication for developer-focused apps
const signInWithGitHub = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      scopes: 'user:email',
      redirectTo: window.location.origin + "/auth/callback"
    }
  })

  if (error) throw error
  return data
}

// Sync GitHub profile data
const syncGitHubProfile = async (user) => {
  const githubData = user.user_metadata
  
  await supabase
    .from('user_profiles')
    .upsert({
      id: user.id,
      github_username: githubData.user_name,
      github_avatar: githubData.avatar_url,
      github_bio: githubData.bio,
      github_company: githubData.company,
      github_location: githubData.location,
      updated_at: new Date().toISOString()
    })
}
\`\`\`

### 3. Passwordless Authentication
Modern, user-friendly approach:

#### Magic Link Implementation
\`\`\`javascript
// Send magic link
const sendMagicLink = async (email) => {
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: window.location.origin + "/auth/verify"
    }
  })

  if (error) throw error
  
  // Show success message
  showNotification('Check your email for a sign-in link!')
}

// Verify magic link
const verifyMagicLink = async (token, type) => {
  const { data, error } = await supabase.auth.verifyOtp({
    token,
    type: 'magiclink'
  })

  if (error) throw error
  return data
}
\`\`\`

#### SMS Authentication
\`\`\`javascript
// Send SMS verification
const sendSMSCode = async (phone) => {
  const { error } = await supabase.auth.signInWithOtp({
    phone,
    options: {
      channel: 'sms'
    }
  })

  if (error) throw error
}

// Verify SMS code
const verifySMSCode = async (phone, token) => {
  const { data, error } = await supabase.auth.verifyOtp({
    phone,
    token,
    type: 'sms'
  })

  if (error) throw error
  return data
}
\`\`\`

## User Session Management

### Secure Session Handling
\`\`\`javascript
// Session management utilities
const SessionManager = {
  // Get current session
  getCurrentSession: async () => {
    const { data: { session } } = await supabase.auth.getSession()
    return session
  },

  // Refresh session before expiry
  refreshSession: async () => {
    const { data, error } = await supabase.auth.refreshSession()
    if (error) throw error
    return data
  },

  // Secure logout
  logout: async () => {
    // Clear local storage
    localStorage.removeItem('user_preferences')
    sessionStorage.clear()
    
    // Sign out from Supabase
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    
    // Redirect to login
    window.location.href = '/login'
  },

  // Session validation
  validateSession: async () => {
    const session = await SessionManager.getCurrentSession()
    
    if (!session) {
      throw new Error('No active session')
    }

    // Check if session is expired
    const expiresAt = new Date(session.expires_at * 1000)
    const now = new Date()
    
    if (expiresAt <= now) {
      await SessionManager.refreshSession()
    }

    return session
  }
}
\`\`\`

### Token Security
\`\`\`javascript
// Secure token handling
const TokenManager = {
  // Store tokens securely
  storeTokens: (session) => {
    // Never store in localStorage for sensitive data
    // Use secure HTTP-only cookies in production
    const secureCookie = {
      name: 'auth_token',
      value: session.access_token,
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: session.expires_in
    }
    
    // Set cookie via server-side API
    fetch('/api/auth/set-cookie', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(secureCookie)
    })
  },

  // Validate token integrity
  validateToken: async (token) => {
    try {
      const { data, error } = await supabase.auth.getUser(token)
      if (error) throw error
      return data.user
    } catch (error) {
      // Token is invalid, clear and redirect
      await SessionManager.logout()
      throw new Error('Invalid token')
    }
  }
}
\`\`\`

## Role-Based Access Control (RBAC)

### Permission System Design
\`\`\`sql
-- Users table with role
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  full_name VARCHAR(255),
  role VARCHAR(50) DEFAULT 'user',
  status VARCHAR(20) DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Roles and permissions
CREATE TABLE roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(50) UNIQUE NOT NULL,
  description TEXT,
  permissions JSONB DEFAULT '[]'::jsonb
);

CREATE TABLE user_roles (
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  role_id UUID REFERENCES roles(id) ON DELETE CASCADE,
  granted_by UUID REFERENCES users(id),
  granted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  PRIMARY KEY (user_id, role_id)
);

-- Resource-based permissions
CREATE TABLE resource_permissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  resource_type VARCHAR(50) NOT NULL,
  resource_id UUID NOT NULL,
  permissions JSONB DEFAULT '[]'::jsonb,
  granted_by UUID REFERENCES users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
\`\`\`

### Permission Checking
\`\`\`javascript
// Permission management system
const PermissionManager = {
  // Check if user has specific permission
  hasPermission: async (userId, permission, resourceType = null, resourceId = null) => {
    // Check role-based permissions
    const { data: userRoles } = await supabase
      .from('user_roles')
      .select(\`
        roles (
          name,
          permissions
        )
      \`)
      .eq('user_id', userId)

    // Check role permissions
    for (const userRole of userRoles) {
      const rolePermissions = userRole.roles.permissions || []
      if (rolePermissions.includes(permission)) {
        return true
      }
    }

    // Check resource-specific permissions
    if (resourceType && resourceId) {
      const { data: resourcePerms } = await supabase
        .from('resource_permissions')
        .select('permissions')
        .eq('user_id', userId)
        .eq('resource_type', resourceType)
        .eq('resource_id', resourceId)

      for (const resourcePerm of resourcePerms) {
        const permissions = resourcePerm.permissions || []
        if (permissions.includes(permission)) {
          return true
        }
      }
    }

    return false
  },

  // Grant permission to user
  grantPermission: async (userId, permission, resourceType, resourceId, grantedBy) => {
    const { error } = await supabase
      .from('resource_permissions')
      .upsert({
        user_id: userId,
        resource_type: resourceType,
        resource_id: resourceId,
        permissions: [permission],
        granted_by: grantedBy
      })

    if (error) throw error
  },

  // Revoke permission
  revokePermission: async (userId, permission, resourceType, resourceId) => {
    // Implementation for removing specific permissions
    const { data: existing } = await supabase
      .from('resource_permissions')
      .select('permissions')
      .eq('user_id', userId)
      .eq('resource_type', resourceType)
      .eq('resource_id', resourceId)
      .single()

    if (existing) {
      const updatedPermissions = existing.permissions.filter(p => p !== permission)
      
      if (updatedPermissions.length > 0) {
        await supabase
          .from('resource_permissions')
          .update({ permissions: updatedPermissions })
          .eq('user_id', userId)
          .eq('resource_type', resourceType)
          .eq('resource_id', resourceId)
      } else {
        await supabase
          .from('resource_permissions')
          .delete()
          .eq('user_id', userId)
          .eq('resource_type', resourceType)
          .eq('resource_id', resourceId)
      }
    }
  }
}
\`\`\`

## Security Best Practices for {{name}}

### Input Validation and Sanitization
\`\`\`javascript
// Comprehensive input validation
const ValidationRules = {
  email: (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/
    return emailRegex.test(email) && email.length <= 254
  },

  password: (password) => {
    return password.length >= 8 && 
           password.length <= 128 &&
           /[A-Z]/.test(password) &&
           /[a-z]/.test(password) &&
           /\\d/.test(password) &&
           /[!@#$%^&*(),.?":{}|<>]/.test(password)
  },

  username: (username) => {
    const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/
    return usernameRegex.test(username)
  },

  sanitizeInput: (input) => {
    // Remove potential XSS vectors
    return input
      .replace(/<script[^>]*>.*?<\\/script>/gi, '')
      .replace(/<[^>]+>/g, '')
      .trim()
  }
}

// Secure form handling
const handleSecureForm = async (formData) => {
  // Validate all inputs
  const validatedData = {}
  
  for (const [key, value] of Object.entries(formData)) {
    if (ValidationRules[key]) {
      if (!ValidationRules[key](value)) {
        throw new Error("Invalid key format")
      }
    }
    validatedData[key] = ValidationRules.sanitizeInput(value)
  }

  return validatedData
}
\`\`\`

### Rate Limiting and Brute Force Protection
\`\`\`javascript
// Rate limiting implementation
const RateLimiter = {
  attempts: new Map(),

  checkRateLimit: (identifier, maxAttempts = 5, windowMs = 15 * 60 * 1000) => {
    const now = Date.now()
    const windowStart = now - windowMs
    
    // Get existing attempts
    let attempts = RateLimiter.attempts.get(identifier) || []
    
    // Remove old attempts outside the window
    attempts = attempts.filter(timestamp => timestamp > windowStart)
    
    // Check if limit exceeded
    if (attempts.length >= maxAttempts) {
      const oldestAttempt = Math.min(...attempts)
      const resetTime = oldestAttempt + windowMs
      throw new Error("Rate limit exceeded. Try again at new Date(resetTime).toISOString()")
    }

    // Record this attempt
    attempts.push(now)
    RateLimiter.attempts.set(identifier, attempts)
    
    return true
  },

  clearAttempts: (identifier) => {
    RateLimiter.attempts.delete(identifier)
  }
}

// Protected login with rate limiting
const protectedLogin = async (email, password, clientIP) => {
  const identifier = email + ":clientIP"
  
  try {
    // Check rate limit
    RateLimiter.checkRateLimit(identifier)
    
    // Attempt login
    const result = await loginUser(email, password)
    
    // Clear attempts on successful login
    RateLimiter.clearAttempts(identifier)
    
    return result
  } catch (error) {
    // Log failed attempt
    await logFailedLoginAttempt(email, clientIP, error.message)
    throw error
  }
}
\`\`\`

### Security Headers and HTTPS
\`\`\`javascript
// Security middleware for production
const securityMiddleware = {
  // Content Security Policy
  setCspHeaders: (req, res, next) => {
    res.setHeader('Content-Security-Policy', 
      "default-src 'self'; script-src 'self' 'unsafe-inline' https://accounts.google.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://api.supabase.co; frame-src 'self' https://accounts.google.com;"
    )
    next()
  },

  // Additional security headers
  setSecurityHeaders: (req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff')
    res.setHeader('X-Frame-Options', 'DENY')
    res.setHeader('X-XSS-Protection', '1; mode=block')
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')
    next()
  }
}
\`\`\`

## Advanced Authentication Patterns

### Multi-Factor Authentication (MFA)
\`\`\`javascript
// MFA implementation
const MFAManager = {
  // Enable TOTP (Time-based One-Time Password)
  enableTOTP: async (userId) => {
    const { data, error } = await supabase.auth.mfa.enroll({
      factorType: 'totp'
    })

    if (error) throw error

    // Store recovery codes securely
    await supabase
      .from('user_security')
      .upsert({
        user_id: userId,
        mfa_enabled: true,
        recovery_codes: data.recovery_codes,
        updated_at: new Date().toISOString()
      })

    return data
  },

  // Verify TOTP code
  verifyTOTP: async (code) => {
    const { data, error } = await supabase.auth.mfa.verify({
      factorId: 'factor_id',
      challengeId: 'challenge_id',
      code
    })

    if (error) throw error
    return data
  }
}
\`\`\`

### Single Sign-On (SSO) for Enterprise
\`\`\`javascript
// SAML SSO implementation
const SSOManager = {
  // Initiate SSO login
  initiateSSOLogin: async (domain) => {
    const { data, error } = await supabase.auth.signInWithSSO({
      domain,
      options: {
        redirectTo: window.location.origin + "/auth/sso/callback"
      }
    })

    if (error) throw error
    
    // Redirect to IdP
    window.location.href = data.url
  },

  // Handle SSO callback
  handleSSOCallback: async () => {
    const { data, error } = await supabase.auth.getSession()
    
    if (error) throw error
    
    if (data.session) {
      // Sync enterprise user data
      await syncEnterpriseUserData(data.session.user)
      
      // Apply enterprise policies
      await applyEnterprisePolicies(data.session.user)
      
      return data.session
    }
  }
}
\`\`\`

{{name}}, authentication is the foundation of application security. Build it right from the start, and everything else becomes easier. Remember: security is not a feature you add later—it's a principle you build into every decision!`,
        learningObjectives: {
          0: 'Implement secure authentication with multiple methods (email, OAuth, passwordless)',
          1: 'Design and enforce role-based access control (RBAC) systems',
          2: 'Apply security best practices including input validation and rate limiting',
          3: 'Manage user sessions and tokens securely',
          4: 'Integrate advanced features like MFA and SSO for enterprise applications'
        },
        badgeName: 'Security Guardian',
        srcodeCommentary: '{{name}}, authentication is like being a bouncer for your app, but way cooler! You\'re not just checking IDs at the door - you\'re building an entire security ecosystem. Think of passwords as keys, OAuth as VIP access cards, and MFA as that extra-secure vault lock. Remember: a secure app is a happy app, and happy apps don\'t get hacked! 🔐✨',
        quizQuestions: {
          'q3-1-1': {
            question: 'What is the main difference between authentication and authorization?',
            options: [
              'They are the same thing',
              'Authentication verifies who you are, authorization determines what you can do',
              'Authorization verifies who you are, authentication determines what you can do',
              'Authentication is for passwords, authorization is for OAuth'
            ],
            correctAnswer: 1,
            explanation: 'Authentication verifies the identity of a user (who you are), while authorization determines what actions that authenticated user is allowed to perform (what you can do).'
          },
          'q3-1-2': {
            question: 'Which authentication method provides the highest security?',
            options: [
              'Simple password authentication',
              'OAuth with social providers',
              'Multi-factor authentication (MFA)',
              'Email-based authentication'
            ],
            correctAnswer: 2,
            explanation: 'Multi-factor authentication (MFA) provides the highest security by requiring multiple forms of verification, typically combining something you know (password), something you have (phone/token), and/or something you are (biometrics).'
          },
          'q3-1-3': {
            question: 'What is the primary advantage of using OAuth for authentication?',
            options: [
              'It eliminates the need for passwords completely',
              'It allows users to authenticate using existing accounts from trusted providers',
              'It makes authentication faster',
              'It works only with social media platforms'
            ],
            correctAnswer: 1,
            explanation: 'OAuth allows users to authenticate using existing accounts from trusted providers (like Google, GitHub, Facebook) without sharing their passwords with your application, improving both security and user experience.'
          },
          'q3-1-4': {
            question: 'What is a JWT (JSON Web Token) primarily used for?',
            options: [
              'Storing user passwords',
              'Encrypting database connections',
              'Securely transmitting user identity and claims between parties',
              'Managing file uploads'
            ],
            correctAnswer: 2,
            explanation: 'JWT (JSON Web Token) is used for securely transmitting user identity and claims between parties. It contains encoded user information and can be verified without requiring server-side session storage.'
          }
        }
      },

      // Level 2: Database Integration (Continued)
      'lesson-2-3': {
        title: 'Database Optimization & Performance',
        objective: 'Master database performance optimization, indexing strategies, and query optimization for production applications',
        content: `# Database Optimization & Performance

{{name}}, now that you've mastered the fundamentals of Supabase, it's time to optimize your database for production-level performance. This lesson covers advanced optimization techniques that separate amateur projects from professional applications.

## Query Optimization Fundamentals

### Understanding Query Execution Plans
Every database query goes through an execution plan that determines how the database engine will retrieve your data:

\`\`\`sql
-- Always use EXPLAIN to analyze query performance
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'user@example.com';

-- Look for Sequential Scans (bad) vs Index Scans (good)
-- Monitor execution time and rows examined
\`\`\`

### Indexing Strategies

#### Primary Indexes
- **B-Tree Indexes**: Default for most columns, excellent for equality and range queries
- **Unique Indexes**: Enforce uniqueness while providing fast lookups
- **Composite Indexes**: Cover multiple columns for complex queries

\`\`\`sql
-- Create strategic indexes for common queries
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_posts_user_created ON posts(user_id, created_at DESC);
CREATE INDEX idx_posts_status_category ON posts(status, category) WHERE status = 'published';
\`\`\`

#### Advanced Index Types
- **Partial Indexes**: Index only specific rows that match conditions
- **Expression Indexes**: Index computed values or function results
- **GIN Indexes**: For full-text search and JSON operations

\`\`\`sql
-- Partial index for active users only
CREATE INDEX idx_active_users ON users(last_login) WHERE status = 'active';

-- Expression index for case-insensitive searches
CREATE INDEX idx_users_email_lower ON users(LOWER(email));

-- GIN index for full-text search
CREATE INDEX idx_posts_content_search ON posts USING GIN(to_tsvector('english', title || ' ' || content));
\`\`\`

## Advanced Query Patterns

### Efficient Joins and Relationships
\`\`\`sql
-- Use EXISTS instead of IN for better performance
SELECT * FROM users u 
WHERE EXISTS (SELECT 1 FROM posts p WHERE p.user_id = u.id);

-- Optimize N+1 queries with proper JOINs
SELECT u.*, p.title, p.created_at
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
WHERE u.status = 'active'
ORDER BY u.created_at DESC;
\`\`\`

### Pagination Best Practices
\`\`\`sql
-- Use cursor-based pagination for large datasets
SELECT * FROM posts 
WHERE created_at < '2024-01-01T00:00:00Z'
ORDER BY created_at DESC 
LIMIT 20;

-- Avoid OFFSET for large page numbers
-- BAD: SELECT * FROM posts ORDER BY id LIMIT 20 OFFSET 10000;
-- GOOD: SELECT * FROM posts WHERE id < last_seen_id ORDER BY id DESC LIMIT 20;
\`\`\`

## Performance Monitoring

### Key Metrics to Track
- **Query execution time**: Identify slow queries
- **Index usage**: Ensure indexes are being utilized
- **Connection pool usage**: Monitor concurrent connections
- **Cache hit ratios**: Optimize frequently accessed data

### Supabase Performance Tools
\`\`\`javascript
// Monitor query performance in your application
const { data, error } = await supabase
  .from('posts')
  .select('*')
  .eq('status', 'published')
  .order('created_at', { ascending: false })
  .limit(10);

// Log slow queries for analysis
if (performance.now() - startTime > 1000) {
  console.warn('Slow query detected:', query);
}
\`\`\`

## Real-time Performance Optimization

### Efficient Real-time Subscriptions
\`\`\`javascript
// Optimize real-time subscriptions with filters
const subscription = supabase
  .channel('posts')
  .on('postgres_changes', {
    event: 'INSERT',
    schema: 'public',
    table: 'posts',
    filter: 'status=eq.published'
  }, payload => {
    // Handle new published posts only
    updatePostsList(payload.new);
  })
  .subscribe();

// Use presence for user activity tracking
const presence = supabase.channel('room-1')
  .on('presence', { event: 'sync' }, () => {
    const state = presence.presenceState();
    updateOnlineUsers(state);
  })
  .subscribe();
\`\`\`

### Optimizing Storage Operations
\`\`\`javascript
// Optimize file uploads with compression
const compressedFile = await compressImage(file);
const { data, error } = await supabase.storage
  .from('images')
  .upload("optimized/Date.now()-" + file.name, compressedFile, {
    cacheControl: '3600',
    upsert: false
  });

// Use signed URLs for secure, fast access
const { data: signedUrl } = await supabase.storage
  .from('images')
  .createSignedUrl('image.jpg', 3600);
\`\`\`

## Production Optimization Strategies

### Database Configuration
- **Connection pooling**: Optimize concurrent connections
- **Query timeout settings**: Prevent long-running queries
- **Memory allocation**: Configure shared buffers and work memory
- **Autovacuum settings**: Maintain table statistics and performance

### Application-Level Optimizations
\`\`\`javascript
// Implement intelligent caching
const cache = new Map();

async function getCachedData(key, fetchFunction, ttl = 300000) {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < ttl) {
    return cached.data;
  }
  
  const data = await fetchFunction();
  cache.set(key, { data, timestamp: Date.now() });
  return data;
}

// Use connection pooling
const supabase = createClient(url, key, {
  db: {
    schema: 'public',
  },
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  },
  global: {
    headers: { 'x-my-custom-header': 'optimization' },
  },
});
\`\`\`

## Monitoring and Alerting

### Performance Metrics Dashboard
Create comprehensive monitoring for:
- Query performance trends
- Database connection usage
- Storage usage and costs
- Real-time subscription load
- Error rates and patterns

### Automated Optimization
\`\`\`sql
-- Create functions for automatic maintenance
CREATE OR REPLACE FUNCTION optimize_database()
RETURNS void AS $$
BEGIN
  -- Analyze table statistics
  ANALYZE;
  
  -- Reindex if necessary
  REINDEX DATABASE current_database();
  
  -- Log optimization completion
  INSERT INTO maintenance_log (action, completed_at) 
  VALUES ('optimization', NOW());
END;
$$ LANGUAGE plpgsql;

-- Schedule regular optimization
SELECT cron.schedule('optimize-db', '0 2 * * *', 'SELECT optimize_database();');
\`\`\`

Remember {{name}}, optimization is an ongoing process. Start with measuring current performance, identify bottlenecks, implement targeted improvements, and continuously monitor results. A well-optimized database is the foundation of a scalable application!`,
        learningObjectives: {
          0: 'Analyze and optimize database query performance using execution plans',
          1: 'Implement strategic indexing for improved query speed',
          2: 'Apply advanced query patterns for efficient data retrieval',
          3: 'Monitor and troubleshoot database performance issues',
          4: 'Design scalable database architectures for production applications'
        },
        badgeName: 'Performance Optimizer',
        srcodeCommentary: '{{name}}, database optimization is like tuning a race car - every millisecond counts! You\'ve learned to make your queries purr like a well-oiled engine. Remember: premature optimization is the root of all evil, but timely optimization is the root of all awesome! Now your database will be faster than a developer reaching for coffee on Monday morning! 🏎️⚡',
        quizQuestions: {
          'q2-3-1': {
            question: 'What is the primary purpose of using EXPLAIN ANALYZE in PostgreSQL?',
            options: [
              'To create database backups',
              'To analyze and understand query execution plans and performance',
              'To manage user permissions',
              'To optimize database storage'
            ],
            correctAnswer: 1,
            explanation: 'EXPLAIN ANALYZE shows the actual execution plan of a query, including execution time, rows processed, and index usage, helping identify performance bottlenecks.'
          },
          'q2-3-2': {
            question: 'Which type of index is most effective for full-text search operations?',
            options: [
              'B-Tree index',
              'Unique index',
              'GIN index',
              'Partial index'
            ],
            correctAnswer: 2,
            explanation: 'GIN (Generalized Inverted Index) indexes are specifically designed for full-text search operations and complex data types like JSON, providing efficient text search capabilities.'
          },
          'q2-3-3': {
            question: 'What is the main advantage of cursor-based pagination over offset-based pagination?',
            options: [
              'It\'s easier to implement',
              'It performs consistently well even with large datasets',
              'It requires fewer database connections',
              'It works better with real-time data'
            ],
            correctAnswer: 1,
            explanation: 'Cursor-based pagination maintains consistent performance regardless of dataset size, while offset-based pagination becomes slower with large offsets as the database must skip many rows.'
          },
          'q2-3-4': {
            question: 'When should you use a partial index in PostgreSQL?',
            options: [
              'For all columns in a table',
              'Only for primary key columns',
              'When you need to index only specific rows that match certain conditions',
              'For foreign key relationships only'
            ],
            correctAnswer: 2,
            explanation: 'Partial indexes are useful when you frequently query only a subset of rows (e.g., active users, published posts), reducing index size and improving performance for specific conditions.'
          }
        }
      },

      // Level 3: Authentication Systems (Continued)
      'lesson-3-2': {
        title: 'Advanced Authentication Patterns',
        objective: 'Implement sophisticated authentication strategies including role-based access control, session management, and security best practices',
        content: `# Advanced Authentication Patterns

{{name}}, you've mastered the fundamentals of authentication. Now let's explore advanced patterns that enable enterprise-grade security and sophisticated user management systems.

## Role-Based Access Control (RBAC)

### Designing User Roles and Permissions
\`\`\`sql
-- Create roles table
CREATE TABLE roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(50) UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create permissions table
CREATE TABLE permissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) UNIQUE NOT NULL,
  resource VARCHAR(50) NOT NULL,
  action VARCHAR(50) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create role-permission junction table
CREATE TABLE role_permissions (
  role_id UUID REFERENCES roles(id) ON DELETE CASCADE,
  permission_id UUID REFERENCES permissions(id) ON DELETE CASCADE,
  PRIMARY KEY (role_id, permission_id)
);

-- Create user-role assignments
CREATE TABLE user_roles (
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  role_id UUID REFERENCES roles(id) ON DELETE CASCADE,
  assigned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  PRIMARY KEY (user_id, role_id)
);
\`\`\`

### Implementing RLS Policies
\`\`\`sql
-- Enable RLS on sensitive tables
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Create policies for different roles
CREATE POLICY "Users can view published posts" ON posts
  FOR SELECT USING (status = 'published');

CREATE POLICY "Authors can manage their own posts" ON posts
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage all posts" ON posts
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM user_roles ur
      JOIN roles r ON ur.role_id = r.id
      WHERE ur.user_id = auth.uid() AND r.name = 'admin'
    )
  );

-- Function to check user permissions
CREATE OR REPLACE FUNCTION has_permission(user_id UUID, permission_name TEXT)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 
    FROM user_roles ur
    JOIN role_permissions rp ON ur.role_id = rp.role_id
    JOIN permissions p ON rp.permission_id = p.id
    WHERE ur.user_id = user_id AND p.name = permission_name
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
\`\`\`

## Advanced Session Management

### JWT Token Strategies
\`\`\`javascript
// Custom JWT claims for role-based access
const customClaims = {
  roles: ['user', 'premium'],
  permissions: ['read:posts', 'write:comments'],
  subscription: 'premium',
  tenant: 'organization-123'
};

// Server-side token validation
async function validateTokenWithRoles(token) {
  try {
    const { data: { user }, error } = await supabase.auth.getUser(token);
    
    if (error) throw error;
    
    // Get user roles from database
    const { data: userRoles } = await supabase
      .from('user_roles')
      .select(\`
        roles (
          name,
          role_permissions (
            permissions (name, resource, action)
          )
        )
      \`)
      .eq('user_id', user.id);
    
    return {
      user,
      roles: userRoles.map(ur => ur.roles),
      permissions: userRoles.flatMap(ur => 
        ur.roles.role_permissions.map(rp => rp.permissions)
      )
    };
  } catch (error) {
    console.error('Token validation failed:', error);
    return null;
  }
}
\`\`\`

### Session Security Best Practices
\`\`\`javascript
// Implement session timeout and refresh
class SessionManager {
  constructor(supabase) {
    this.supabase = supabase;
    this.refreshThreshold = 5 * 60 * 1000; // 5 minutes
    this.setupAutoRefresh();
  }
  
  setupAutoRefresh() {
    // Monitor session expiration
    this.supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session) {
        this.scheduleRefresh(session);
      }
    });
  }
  
  scheduleRefresh(session) {
    const expiresAt = new Date(session.expires_at * 1000);
    const refreshTime = expiresAt.getTime() - Date.now() - this.refreshThreshold;
    
    setTimeout(async () => {
      const { data, error } = await this.supabase.auth.refreshSession();
      if (error) {
        console.error('Session refresh failed:', error);
        // Redirect to login
        window.location.href = '/login';
      }
    }, refreshTime);
  }
  
  async validateSession() {
    const { data: { session }, error } = await this.supabase.auth.getSession();
    
    if (!session || error) {
      throw new Error('Invalid session');
    }
    
    // Check if session is about to expire
    const expiresAt = new Date(session.expires_at * 1000);
    if (expiresAt.getTime() - Date.now() < this.refreshThreshold) {
      await this.supabase.auth.refreshSession();
    }
    
    return session;
  }
}
\`\`\`

## Multi-Factor Authentication (MFA)

### Implementing TOTP (Time-based One-Time Password)
\`\`\`javascript
// Enable MFA for user accounts
async function enableMFA(userId) {
  // Generate TOTP secret
  const { data, error } = await supabase.auth.mfa.enroll({
    factorType: 'totp',
    friendlyName: 'Authenticator App'
  });
  
  if (error) throw error;
  
  // Display QR code for user to scan
  const qrCodeData = data.totp.qr_code;
  const secret = data.totp.secret;
  
  return { qrCodeData, secret, id: data.id };
}

// Verify MFA challenge
async function verifyMFA(factorId, code) {
  const { data, error } = await supabase.auth.mfa.verify({
    factorId,
    challengeId: 'current-challenge-id',
    code
  });
  
  if (error) throw error;
  
  return data;
}

// MFA-protected route middleware
async function requireMFA(req, res, next) {
  const session = await validateSession(req.headers.authorization);
  
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  // Check if user has MFA enabled
  const { data: factors } = await supabase.auth.mfa.listFactors();
  const hasMFA = factors.some(factor => factor.status === 'verified');
  
  if (!hasMFA) {
    return res.status(403).json({ error: 'MFA required' });
  }
  
  next();
}
\`\`\`

## Advanced Security Patterns

### API Rate Limiting
\`\`\`javascript
// Implement rate limiting for authentication endpoints
const rateLimit = require('express-rate-limit');

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many authentication attempts, please try again later',
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      error: 'Too many attempts',
      retryAfter: Math.round(req.rateLimit.msBeforeNext / 1000)
    });
  }
});

// Apply to authentication routes
app.use('/auth/login', authLimiter);
app.use('/auth/register', authLimiter);
\`\`\`

### Account Security Monitoring
\`\`\`javascript
// Track suspicious login activities
async function logSecurityEvent(userId, eventType, details) {
  const { error } = await supabase
    .from('security_events')
    .insert({
      user_id: userId,
      event_type: eventType,
      details: details,
      ip_address: req.ip,
      user_agent: req.headers['user-agent'],
      timestamp: new Date().toISOString()
    });
  
  if (error) console.error('Failed to log security event:', error);
}

// Detect unusual login patterns
async function detectSuspiciousActivity(userId, loginDetails) {
  const { data: recentLogins } = await supabase
    .from('security_events')
    .select('*')
    .eq('user_id', userId)
    .eq('event_type', 'login')
    .gte('timestamp', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString())
    .order('timestamp', { ascending: false });
  
  // Check for geographic anomalies
  const currentLocation = loginDetails.location;
  const hasLocationAnomaly = recentLogins.some(login => 
    calculateDistance(login.details.location, currentLocation) > 1000 // km
  );
  
  // Check for unusual timing patterns
  const hasTimingAnomaly = recentLogins.length > 0 && 
    Math.abs(new Date() - new Date(recentLogins[0].timestamp)) < 5 * 60 * 1000; // 5 minutes
  
  if (hasLocationAnomaly || hasTimingAnomaly) {
    await logSecurityEvent(userId, 'suspicious_login', {
      reason: hasLocationAnomaly ? 'geographic_anomaly' : 'timing_anomaly',
      details: loginDetails
    });
    
    // Send security alert email
    await sendSecurityAlert(userId, 'Unusual login detected');
  }
}
\`\`\`

## Enterprise Authentication Integration

### Single Sign-On (SSO) Implementation
\`\`\`javascript
// SAML SSO integration
const saml = require('passport-saml');

const samlStrategy = new saml.Strategy({
  entryPoint: 'https://identity-provider.com/sso',
  issuer: 'your-app-identifier',
  callbackUrl: 'https://your-app.com/auth/saml/callback',
  cert: process.env.SAML_CERT
}, async (profile, done) => {
  try {
    // Create or update user from SAML response
    const { data: user, error } = await supabase.auth.admin.createUser({
      email: profile.email,
      email_confirmed: true,
      user_metadata: {
        name: profile.displayName,
        department: profile.department,
        employee_id: profile.employeeId
      }
    });
    
    if (error && error.message !== 'User already registered') {
      throw error;
    }
    
    return done(null, user);
  } catch (error) {
    return done(error);
  }
});
\`\`\`

Remember {{name}}, advanced authentication is about building trust through multiple layers of security. Each pattern serves a specific purpose in creating a robust, scalable authentication system that protects both users and your application!`,
        learningObjectives: {
          0: 'Design and implement role-based access control systems',
          1: 'Manage complex user sessions with automatic refresh and security monitoring',
          2: 'Integrate multi-factor authentication for enhanced security',
          3: 'Apply advanced security patterns including rate limiting and anomaly detection',
          4: 'Implement enterprise-grade authentication with SSO integration'
        },
        badgeName: 'Security Architect',
        srcodeCommentary: '{{name}}, you\'ve just graduated from security basics to becoming a digital Fort Knox architect! You\'ve mastered the art of keeping the bad guys out while making the good guys feel welcome. Remember: security is like an onion - it has many layers, and sometimes it makes you cry (especially when debugging authentication flows). But hey, better tears of security than tears of regret! 🔒👑',
        quizQuestions: {
          'q3-2-1': {
            question: 'What is the primary benefit of Role-Based Access Control (RBAC)?',
            options: [
              'It eliminates the need for passwords',
              'It provides granular permissions management through role assignments',
              'It makes authentication faster',
              'It reduces database storage requirements'
            ],
            correctAnswer: 1,
            explanation: 'RBAC provides granular permissions management by allowing you to assign specific roles to users and define permissions for each role, making it easier to manage access control at scale.'
          },
          'q3-2-2': {
            question: 'When should you implement automatic session refresh?',
            options: [
              'Only when users request it',
              'Before sessions expire to maintain seamless user experience',
              'After users log out',
              'Only for admin users'
            ],
            correctAnswer: 1,
            explanation: 'Automatic session refresh should be implemented before sessions expire to maintain seamless user experience, preventing users from being logged out unexpectedly during active use.'
          },
          'q3-2-3': {
            question: 'What does TOTP stand for in multi-factor authentication?',
            options: [
              'Time-based One-Time Password',
              'Token-based Online Transfer Protocol',
              'Trusted OAuth Token Provider',
              'Two-factor Online Transaction Protocol'
            ],
            correctAnswer: 0,
            explanation: 'TOTP stands for Time-based One-Time Password, which generates unique codes that change every 30 seconds, commonly used in authenticator apps for multi-factor authentication.'
          },
          'q3-2-4': {
            question: 'What is the purpose of rate limiting in authentication systems?',
            options: [
              'To make authentication faster',
              'To prevent brute force attacks and abuse',
              'To reduce server costs',
              'To improve user experience'
            ],
            correctAnswer: 1,
            explanation: 'Rate limiting prevents brute force attacks and abuse by limiting the number of authentication attempts from a single IP address or user within a specified time window.'
          }
        }
      },

      'lesson-3-3': {
        title: 'Security Best Practices & Compliance',
        objective: 'Master security best practices, compliance requirements, and advanced threat mitigation strategies for production applications',
        content: `# Security Best Practices & Compliance

{{name}}, security isn't just about authentication - it's about creating a comprehensive security posture that protects your application, your users, and your business. Let's explore enterprise-level security practices and compliance requirements.

## Security-First Architecture

### Defense in Depth Strategy
\`\`\`javascript
// Implement multiple security layers
class SecurityLayer {
  constructor() {
    this.layers = [
      new InputValidationLayer(),
      new AuthenticationLayer(),
      new AuthorizationLayer(),
      new DataEncryptionLayer(),
      new AuditLoggingLayer(),
      new MonitoringLayer()
    ];
  }
  
  async processRequest(request) {
    for (const layer of this.layers) {
      const result = await layer.process(request);
      if (!result.allowed) {
        await this.logSecurityEvent(layer.name, result.reason, request);
        throw new SecurityError(result.reason);
      }
      request = result.modifiedRequest || request;
    }
    return request;
  }
}
\`\`\`

### Input Validation and Sanitization
\`\`\`javascript
// Comprehensive input validation
const joi = require('joi');

const userSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(8).pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])')).required(),
  name: joi.string().min(2).max(50).pattern(/^[a-zA-Z\s]+$/).required(),
  phone: joi.string().pattern(/^\+?[1-9]\d{1,14}$/).optional()
});

// SQL injection prevention
async function sanitizeQuery(query, params) {
  // Use parameterized queries
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', params.email) // Parameterized
    .textSearch('name', params.searchTerm, { config: 'english' });
  
  return { data, error };
}

// XSS prevention
function sanitizeOutput(content) {
  const createDOMPurify = require('dompurify');
  const { JSDOM } = require('jsdom');
  
  const window = new JSDOM('').window;
  const DOMPurify = createDOMPurify(window);
  
  return DOMPurify.sanitize(content, {
    ALLOWED_TAGS: ['b', 'i', 'u', 'strong', 'em', 'p', 'br'],
    ALLOWED_ATTR: []
  });
}
\`\`\`

## Data Protection & Privacy

### Encryption at Rest and in Transit
\`\`\`javascript
// Client-side encryption for sensitive data
const crypto = require('crypto');

class DataEncryption {
  constructor(encryptionKey) {
    this.algorithm = 'aes-256-gcm';
    this.key = crypto.scryptSync(encryptionKey, 'salt', 32);
  }
  
  encrypt(data) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipher(this.algorithm, this.key, iv);
    
    let encrypted = cipher.update(JSON.stringify(data), 'utf8', 'hex');
    encrypted += cipher.final('hex');
    
    const authTag = cipher.getAuthTag();
    
    return {
      iv: iv.toString('hex'),
      authTag: authTag.toString('hex'),
      encrypted: encrypted
    };
  }
  
  decrypt(encryptedData) {
    const decipher = crypto.createDecipher(
      this.algorithm, 
      this.key, 
      Buffer.from(encryptedData.iv, 'hex')
    );
    
    decipher.setAuthTag(Buffer.from(encryptedData.authTag, 'hex'));
    
    let decrypted = decipher.update(encryptedData.encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    
    return JSON.parse(decrypted);
  }
}

// PII encryption for database storage
async function storeSensitiveData(userId, sensitiveData) {
  const encryption = new DataEncryption(process.env.ENCRYPTION_KEY);
  const encryptedData = encryption.encrypt(sensitiveData);
  
  const { error } = await supabase
    .from('encrypted_user_data')
    .insert({
      user_id: userId,
      encrypted_data: encryptedData,
      created_at: new Date().toISOString()
    });
  
  if (error) throw error;
}
\`\`\`

### GDPR Compliance Implementation
\`\`\`javascript
// GDPR data management
class GDPRManager {
  constructor(supabase) {
    this.supabase = supabase;
  }
  
  // Right to be forgotten
  async deleteUserData(userId) {
    const deletionLog = {
      user_id: userId,
      deletion_started: new Date().toISOString(),
      status: 'in_progress'
    };
    
    try {
      // Delete from all tables
      const tablesToCleanup = [
        'user_profiles',
        'user_posts',
        'user_comments',
        'user_sessions',
        'user_activities',
        'encrypted_user_data'
      ];
      
      for (const table of tablesToCleanup) {
        await this.supabase.from(table).delete().eq('user_id', userId);
      }
      
      // Anonymize audit logs (keep for compliance)
      await this.supabase
        .from('audit_logs')
        .update({ user_id: null, anonymized: true })
        .eq('user_id', userId);
      
      deletionLog.status = 'completed';
      deletionLog.deletion_completed = new Date().toISOString();
      
    } catch (error) {
      deletionLog.status = 'failed';
      deletionLog.error = error.message;
      throw error;
    } finally {
      await this.supabase.from('deletion_logs').insert(deletionLog);
    }
  }
  
  // Data export for portability
  async exportUserData(userId) {
    const userData = {};
    
    // Collect all user data
    const { data: profile } = await this.supabase
      .from('user_profiles')
      .select('*')
      .eq('user_id', userId)
      .single();
    
    const { data: posts } = await this.supabase
      .from('user_posts')
      .select('*')
      .eq('user_id', userId);
    
    const { data: comments } = await this.supabase
      .from('user_comments')
      .select('*')
      .eq('user_id', userId);
    
    userData.profile = profile;
    userData.posts = posts;
    userData.comments = comments;
    userData.exported_at = new Date().toISOString();
    
    return userData;
  }
  
  // Consent management
  async updateConsent(userId, consentType, granted) {
    const { error } = await this.supabase
      .from('user_consents')
      .upsert({
        user_id: userId,
        consent_type: consentType,
        granted: granted,
        updated_at: new Date().toISOString()
      });
    
    if (error) throw error;
    
    // Log consent change
    await this.supabase
      .from('consent_logs')
      .insert({
        user_id: userId,
        consent_type: consentType,
        action: granted ? 'granted' : 'revoked',
        timestamp: new Date().toISOString()
      });
  }
}
\`\`\`

## Compliance & Auditing

### SOC 2 Compliance
\`\`\`javascript
// Audit logging for compliance
class ComplianceAuditor {
  constructor(supabase) {
    this.supabase = supabase;
  }
  
  async logAccess(userId, resource, action, result) {
    const auditEntry = {
      user_id: userId,
      resource_type: resource.type,
      resource_id: resource.id,
      action: action,
      result: result,
      timestamp: new Date().toISOString(),
      ip_address: this.getClientIP(),
      user_agent: this.getUserAgent(),
      session_id: this.getSessionId()
    };
    
    await this.supabase.from('audit_logs').insert(auditEntry);
  }
  
  async generateComplianceReport(startDate, endDate) {
    const { data: logs } = await this.supabase
      .from('audit_logs')
      .select('*')
      .gte('timestamp', startDate)
      .lte('timestamp', endDate)
      .order('timestamp', { ascending: false });
    
    return {
      total_events: logs.length,
      unique_users: new Set(logs.map(log => log.user_id)).size,
      failed_attempts: logs.filter(log => log.result === 'failed').length,
      privileged_access: logs.filter(log => log.action.includes('admin')).length,
      data_access: logs.filter(log => log.resource_type === 'sensitive_data').length
    };
  }
}
\`\`\`

### PCI DSS Compliance (for payment processing)
\`\`\`javascript
// PCI DSS compliant payment handling
class SecurePaymentProcessor {
  constructor() {
    this.stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
  }
  
  // Never store card details - use tokenization
  async createPaymentIntent(amount, currency, customerId) {
    try {
      const paymentIntent = await this.stripe.paymentIntents.create({
        amount: amount * 100, // Convert to cents
        currency: currency,
        customer: customerId,
        automatic_payment_methods: {
          enabled: true,
        },
        metadata: {
          order_id: this.generateOrderId(),
          timestamp: new Date().toISOString()
        }
      });
      
      // Log payment attempt (no sensitive data)
      await this.logPaymentEvent('payment_intent_created', {
        payment_intent_id: paymentIntent.id,
        amount: amount,
        currency: currency,
        status: paymentIntent.status
      });
      
      return {
        client_secret: paymentIntent.client_secret,
        payment_intent_id: paymentIntent.id
      };
      
    } catch (error) {
      await this.logPaymentEvent('payment_intent_failed', {
        error: error.message,
        amount: amount,
        currency: currency
      });
      throw error;
    }
  }
  
  async logPaymentEvent(eventType, details) {
    await supabase.from('payment_audit_logs').insert({
      event_type: eventType,
      details: details,
      timestamp: new Date().toISOString()
    });
  }
}
\`\`\`

## Threat Detection & Response

### Real-time Security Monitoring
\`\`\`javascript
// Security monitoring and alerting
class SecurityMonitor {
  constructor() {
    this.thresholds = {
      failed_logins: 5,
      api_requests: 1000,
      data_access: 100
    };
    
    this.alertChannels = [
      new SlackAlertChannel(),
      new EmailAlertChannel(),
      new SMSAlertChannel()
    ];
  }
  
  async monitorSecurityEvents() {
    setInterval(async () => {
      await this.checkFailedLogins();
      await this.checkAPIAbuse();
      await this.checkDataAccess();
      await this.checkMaliciousPatterns();
    }, 60000); // Check every minute
  }
  
  async checkFailedLogins() {
    const { data: failedLogins } = await supabase
      .from('audit_logs')
      .select('*')
      .eq('action', 'login')
      .eq('result', 'failed')
      .gte('timestamp', new Date(Date.now() - 5 * 60 * 1000).toISOString());
    
    const ipCounts = {};
    failedLogins.forEach(log => {
      ipCounts[log.ip_address] = (ipCounts[log.ip_address] || 0) + 1;
    });
    
    for (const [ip, count] of Object.entries(ipCounts)) {
      if (count >= this.thresholds.failed_logins) {
        await this.sendAlert('SECURITY_ALERT', {
          type: 'brute_force_attempt',
          ip_address: ip,
          failed_attempts: count,
          action: 'IP temporarily blocked'
        });
        
        // Implement IP blocking logic
        await this.blockIP(ip, 'brute_force_attempt');
      }
    }
  }
  
  async sendAlert(level, details) {
    const alert = {
      level: level,
      details: details,
      timestamp: new Date().toISOString(),
      status: 'sent'
    };
    
    for (const channel of this.alertChannels) {
      await channel.send(alert);
    }
    
    await supabase.from('security_alerts').insert(alert);
  }
}
\`\`\`

## Security Testing & Validation

### Automated Security Testing
\`\`\`javascript
// Security test suite
const securityTests = {
  async testSQLInjection() {
    const maliciousInputs = [
      "'; DROP TABLE users; --",
      "1' OR '1'='1",
      "admin'--",
      "'; SELECT * FROM users WHERE '1'='1"
    ];
    
    for (const input of maliciousInputs) {
      try {
        await supabase.from('users').select('*').eq('email', input);
        // Should not reach here if properly protected
        console.warn('SQL injection vulnerability detected!');
      } catch (error) {
        // Expected to fail due to parameterized queries
        console.log('SQL injection protection working:', error.message);
      }
    }
  },
  
  async testXSS() {
    const xssPayloads = [
      '<script>alert("XSS")</script>',
      '<img src="x" onerror="alert(1)">',
      'javascript:alert("XSS")',
      '<svg onload="alert(1)">'
    ];
    
    for (const payload of xssPayloads) {
      const sanitized = sanitizeOutput(payload);
      if (sanitized.includes('<script>') || sanitized.includes('javascript:')) {
        console.warn('XSS vulnerability detected!');
      } else {
        console.log('XSS protection working');
      }
    }
  }
};
\`\`\`

Remember {{name}}, security is not a destination but a journey. Stay informed about emerging threats, regularly update your security measures, and always assume that someone is trying to break into your system. Paranoia in security is not a bug - it's a feature! 🛡️🔒`,
        learningObjectives: {
          0: 'Implement comprehensive security architecture with defense-in-depth strategies',
          1: 'Apply data protection and privacy compliance requirements (GDPR, SOC 2, PCI DSS)',
          2: 'Design real-time threat detection and response systems',
          3: 'Integrate automated security testing and validation processes',
          4: 'Manage security incidents and maintain compliance documentation'
        },
        badgeName: 'Security Master',
        srcodeCommentary: '{{name}}, congratulations! You\'ve just earned your black belt in digital security! You\'ve learned to think like both a protector and an attacker - the ultimate security mindset. Remember: security is like flossing - nobody wants to do it, but the consequences of not doing it are really, really bad. Now go forth and secure the digital world! 🥋🔐',
        quizQuestions: {
          'q3-3-1': {
            question: 'What does "defense in depth" mean in security architecture?',
            options: [
              'Using only one strong security measure',
              'Implementing multiple layers of security controls',
              'Focusing only on perimeter security',
              'Relying on third-party security services'
            ],
            correctAnswer: 1,
            explanation: 'Defense in depth means implementing multiple layers of security controls so that if one layer fails, other layers continue to provide protection, creating a comprehensive security posture.'
          },
          'q3-3-2': {
            question: 'What is the "Right to be Forgotten" in GDPR compliance?',
            options: [
              'The right to use anonymous accounts',
              'The right to have personal data deleted upon request',
              'The right to forget passwords',
              'The right to hide user activity'
            ],
            correctAnswer: 1,
            explanation: 'The "Right to be Forgotten" is a GDPR provision that allows individuals to request the deletion of their personal data from an organization\'s systems, requiring comprehensive data removal procedures.'
          },
          'q3-3-3': {
            question: 'Why should payment card details never be stored in your application database?',
            options: [
              'It takes too much storage space',
              'It violates PCI DSS compliance requirements',
              'It makes the application slower',
              'It\'s not useful for business purposes'
            ],
            correctAnswer: 1,
            explanation: 'Storing payment card details violates PCI DSS compliance requirements and creates significant security and legal risks. Instead, use tokenization services provided by payment processors.'
          },
          'q3-3-4': {
            question: 'What is the primary purpose of security audit logs?',
            options: [
              'To improve application performance',
              'To track user behavior for marketing',
              'To provide compliance evidence and incident investigation capabilities',
              'To reduce database storage costs'
            ],
            correctAnswer: 2,
            explanation: 'Security audit logs provide evidence of compliance with regulations and enable investigation of security incidents by tracking who accessed what resources, when, and with what result.'
          }
        }
      },

      // Level 4: Deployment & Hosting
      'lesson-4-1': {
        title: 'Production Deployment Strategies',
        objective: 'Master deployment patterns, environment management, and production-ready configurations for bolt.new applications',
        content: `# Production Deployment Strategies

{{name}}, deploying to production is where your application meets the real world. This lesson covers professional deployment strategies that ensure reliability, scalability, and maintainability in production environments.

## Deployment Environment Architecture

### Environment Hierarchy
\`\`\`javascript
// Environment configuration management
const environments = {
  development: {
    database: process.env.DEV_DATABASE_URL,
    api: 'https://dev-api.yourapp.com',
    debug: true,
    logging: 'debug',
    analytics: false
  },
  staging: {
    database: process.env.STAGING_DATABASE_URL,
    api: 'https://staging-api.yourapp.com',
    debug: false,
    logging: 'info',
    analytics: true
  },
  production: {
    database: process.env.PROD_DATABASE_URL,
    api: 'https://api.yourapp.com',
    debug: false,
    logging: 'error',
    analytics: true,
    monitoring: true
  }
};

// Environment-specific configuration
export const config = environments[process.env.NODE_ENV] || environments.development;
\`\`\`

### Infrastructure as Code
\`\`"yaml
# docker-compose.yml for consistent deployments
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=DATABASE_URL
      - SUPABASE_URL=SUPABASE_URL
      - SUPABASE_ANON_KEY=SUPABASE_ANON_KEY
    depends_on:
      - redis
      - postgres
    restart: unless-stopped

  redis:
    image: redis:alpine
    restart: unless-stopped

  postgres:
    image: postgres:15
    environment:
      - POSTGRES_DB=POSTGRES_DB
      - POSTGRES_USER=POSTGRES_USER
      - POSTGRES_PASSWORD=POSTGRES_PASSWORD
    volumes:
      - postgres_data:/var/lib/postgresql/data
    restart: unless-stopped

volumes:
  postgres_data:
"\`\`

## CI/CD Pipeline Implementation

### GitHub Actions Workflow
\`\`"yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run test
      - run: npm run build
      
      - name: Run security audit
        run: npm audit --audit-level moderate

  deploy-staging:
    needs: test
    runs-on: ubuntu-latest
    if: github.event_name == 'pull_request'
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Staging
        run: |
          npm run deploy:staging
        env:
          STAGING_URL: { secrets.STAGING_URL}
          STAGING_TOKEN: { secrets.STAGING_TOKEN}

  deploy-production:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Production
        run: |
          npm run deploy:production
        env:
          PRODUCTION_URL: { secrets.PRODUCTION_URL}
          PRODUCTION_TOKEN: { secrets.PRODUCTION_TOKEN}
"\`\`

### Automated Database Migrations
\`\`\`javascript
// Migration management system
class MigrationManager {
  constructor(supabase) {
    this.supabase = supabase;
  }
  
  async runMigrations() {
    const { data: appliedMigrations } = await this.supabase
      .from('migrations')
      .select('version')
      .order('version', { ascending: true });
    
    const appliedVersions = appliedMigrations.map(m => m.version);
    const availableMigrations = this.getAvailableMigrations();
    
    for (const migration of availableMigrations) {
      if (!appliedVersions.includes(migration.version)) {
        console.log("Running migration migration.version\");
        
        try {
          await this.executeMigration(migration);
          await this.recordMigration(migration.version);
          console.log("Migration migration.version completed\");
        } catch (error) {
          console.error("Migration migration.version failed:", error);
          throw error;
        }
      }
    }
  }
  
  async executeMigration(migration) {
    // Execute SQL migration
    const { error } = await this.supabase.rpc('execute_sql', {
      sql_query: migration.sql
    });
    
    if (error) throw error;
  }
  
  async recordMigration(version) {
    const { error } = await this.supabase
      .from('migrations')
      .insert({
        version: version,
        applied_at: new Date().toISOString()
      });
    
    if (error) throw error;
  }
}
\`\`\`

## Performance Optimization for Production

### Build Optimization
\`\`\`javascript
// vite.config.js - Production optimizations
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'dist/stats.html',
      open: true,
      gzipSize: true
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          auth: ['@supabase/supabase-js'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu']
        }
      }
    },
    minify: 'esbuild',
    sourcemap: true,
    chunkSizeWarningLimit: 1000
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production')
  }
});
\`\`\`

### CDN and Caching Strategy
\`\`\`javascript
// Service Worker for aggressive caching
const CACHE_NAME = 'app-v1';
const STATIC_ASSETS = [
  '/',
  '/static/js/main.js',
  '/static/css/main.css',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) {
            return response;
          }
          
          return fetch(event.request)
            .then((response) => {
              const responseClone = response.clone();
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, responseClone);
                });
              return response;
            });
        })
    );
  }
});
\`\`\`

## Monitoring and Observability

### Application Performance Monitoring
\`\`\`javascript
// Performance monitoring setup
class PerformanceMonitor {
  constructor() {
    this.metrics = {
      pageLoads: new Map(),
      apiCalls: new Map(),
      errors: []
    };
  }
  
  trackPageLoad(pageName) {
    const startTime = performance.now();
    
    return {
      finish: () => {
        const loadTime = performance.now() - startTime;
        this.metrics.pageLoads.set(pageName, loadTime);
        
        // Send to analytics
        this.sendMetric('page_load', {
          page: pageName,
          load_time: loadTime,
          timestamp: new Date().toISOString()
        });
      }
    };
  }
  
  trackAPICall(endpoint) {
    const startTime = performance.now();
    
    return {
      success: () => {
        const duration = performance.now() - startTime;
        this.sendMetric('api_success', {
          endpoint,
          duration,
          timestamp: new Date().toISOString()
        });
      },
      error: (error) => {
        const duration = performance.now() - startTime;
        this.sendMetric('api_error', {
          endpoint,
          duration,
          error: error.message,
          timestamp: new Date().toISOString()
        });
      }
    };
  }
  
  async sendMetric(type, data) {
    try {
      await fetch('/api/metrics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, data })
      });
    } catch (error) {
      console.error('Failed to send metric:', error);
    }
  }
}

// Initialize monitoring
const monitor = new PerformanceMonitor();

// Track page navigation
const pageTracker = monitor.trackPageLoad('dashboard');
// ... page load logic
pageTracker.finish();
\`\`\`

### Health Checks and Uptime Monitoring
\`\`\`javascript
// Health check endpoint
app.get('/health', async (req, res) => {
  const health = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    services: {}
  };
  
  try {
    // Check database connectivity
    const { data, error } = await supabase
      .from('health_check')
      .select('1')
      .limit(1);
    
    health.services.database = error ? 'unhealthy' : 'healthy';
    
    // Check external API dependencies
    try {
      const response = await fetch('https://api.stripe.com/v1/ping', {
        headers: { 'Authorization': "Bearer process.env.STRIPE_SECRET_KEY\" }
      });
      health.services.stripe = response.ok ? 'healthy' : 'unhealthy';
    } catch {
      health.services.stripe = 'unhealthy';
    }
    
    // Overall health status
    const allHealthy = Object.values(health.services).every(status => status === 'healthy');
    health.status = allHealthy ? 'healthy' : 'degraded';
    
    res.status(allHealthy ? 200 : 503).json(health);
    
  } catch (error) {
    res.status(500).json({
      status: 'unhealthy',
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});
\`\`\`

## Scaling and Load Management

### Horizontal Scaling Strategy
\`\`\`javascript
// Load balancer configuration
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log("Master process.pid is running\");
  
  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  
  cluster.on('exit', (worker, code, signal) => {
    console.log("Worker worker.process.pid died\");
    cluster.fork(); // Replace dead worker
  });
} else {
  // Worker process
  const app = require('./app');
  const PORT = process.env.PORT || 3000;
  
  app.listen(PORT, () => {
    console.log("Worker process.pid started on port PORT\");
  });
}
\`\`\`

### Database Connection Pooling
\`\`\`javascript
// Optimized Supabase client for production
const { createClient } = require('@supabase/supabase-js');

const supabaseConfig = {
  auth: {
    autoRefreshToken: true,
    persistSession: false, // Disable for server-side
    detectSessionInUrl: false
  },
  db: {
    schema: 'public'
  },
  global: {
    headers: {
      'x-my-custom-header': 'production-app'
    }
  },
  realtime: {
    params: {
      eventsPerSecond: 10
    }
  }
};

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  supabaseConfig
);

module.exports = supabase;
\`\`\`

Remember {{name}}, successful deployment is not just about getting your code live - it's about creating a reliable, scalable, and maintainable system that serves your users effectively. Plan for success, but prepare for failure!`,
        learningObjectives: {
          0: 'Design and implement robust deployment pipelines with CI/CD automation',
          1: 'Configure production environments with proper security and performance optimizations',
          2: 'Implement comprehensive monitoring and observability for production systems',
          3: 'Apply scaling strategies for handling increased traffic and load',
          4: 'Manage database migrations and environment configurations safely'
        },
        badgeName: 'Deployment Engineer',
        srcodeCommentary: '{{name}}, you\'ve just leveled up from "works on my machine" to "works everywhere, all the time!" Deployment is like launching a rocket - you need multiple backup systems, thorough testing, and the ability to abort mission if things go wrong. Remember: the best deployment is the one your users never notice happened! 🚀🛠️',
        quizQuestions: {
          'q4-1-1': {
            question: 'What is the primary benefit of using Infrastructure as Code (IaC)?',
            options: [
              'It makes deployments faster',
              'It ensures consistent, reproducible infrastructure across environments',
              'It reduces server costs',
              'It eliminates the need for monitoring'
            ],
            correctAnswer: 1,
            explanation: 'Infrastructure as Code ensures consistent, reproducible infrastructure across different environments by defining infrastructure requirements in version-controlled code rather than manual configuration.'
          },
          'q4-1-2': {
            question: 'In a CI/CD pipeline, when should database migrations be executed?',
            options: [
              'Before running tests',
              'After deploying to production',
              'During the deployment process, before starting the new application version',
              'Only when manually triggered'
            ],
            correctAnswer: 2,
            explanation: 'Database migrations should be executed during the deployment process, before starting the new application version, to ensure the database schema is compatible with the new code.'
          },
          'q4-1-3': {
            question: 'What is the purpose of a health check endpoint?',
            options: [
              'To test user authentication',
              'To monitor application and dependency status for load balancers and monitoring systems',
              'To backup the database',
              'To update application configuration'
            ],
            correctAnswer: 1,
            explanation: 'Health check endpoints monitor application and dependency status, allowing load balancers, monitoring systems, and orchestrators to determine if an instance is healthy and ready to serve traffic.'
          },
          'q4-1-4': {
            question: 'Why is horizontal scaling generally preferred over vertical scaling?',
            options: [
              'It\'s always cheaper',
              'It provides better fault tolerance and can handle larger scale increases',
              'It requires less configuration',
              'It uses less memory'
            ],
            correctAnswer: 1,
            explanation: 'Horizontal scaling provides better fault tolerance (if one instance fails, others continue running) and can handle larger scale increases by adding more instances rather than being limited by the maximum capacity of a single machine.'
          }
        }
      },

      'lesson-4-2': {
        title: 'Cloud Platforms & Serverless Architecture',
        objective: 'Master cloud deployment strategies, serverless functions, and modern hosting platforms for scalable applications',
        content: `# Cloud Platforms & Serverless Architecture

{{name}}, the cloud has revolutionized how we deploy and scale applications. This lesson explores modern cloud platforms, serverless architectures, and deployment strategies that enable massive scale with minimal infrastructure management.

## Cloud Platform Comparison

### Platform Overview
\`\`\`javascript
// Platform-specific deployment configurations
const platformConfigs = {
  netlify: {
    buildCommand: 'npm run build',
    publishDirectory: 'dist',
    functions: 'netlify/functions',
    redirects: '_redirects',
    headers: '_headers',
    environmentVariables: {
      NODE_VERSION: '18',
      NPM_VERSION: '8'
    }
  },
  
  vercel: {
    buildCommand: 'npm run build',
    outputDirectory: 'dist',
    serverlessFunctions: 'api',
    framework: 'vite',
    installCommand: 'npm install',
    nodeVersion: '18.x'
  },
  
  cloudflare: {
    compatibilityDate: '2023-05-18',
    nodeCompatibility: true,
    buildCommand: 'npm run build',
    buildOutputDirectory: 'dist',
    functionsDirectory: 'functions'
  }
};
\`\`\`

### Netlify Deployment Configuration
\`\`\`toml
# netlify.toml
[build]
  publish = "dist"
  command = "npm run build"
  functions = "netlify/functions"

[build.environment]
  NODE_VERSION = "18"
  NPM_VERSION = "8"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/static/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
\`\`\`

## Serverless Functions Architecture

### Netlify Functions
\`\`\`javascript
// netlify/functions/api.js
exports.handler = async (event, context) => {
  const { httpMethod, path, queryStringParameters, body } = event;
  
  // CORS headers for all responses
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
  };
  
  // Handle CORS preflight
  if (httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }
  
  try {
    // Route handling
    if (path.startsWith('/api/users')) {
      return await handleUsers(httpMethod, queryStringParameters, body);
    } else if (path.startsWith('/api/posts')) {
      return await handlePosts(httpMethod, queryStringParameters, body);
    }
    
    return {
      statusCode: 404,
      headers,
      body: JSON.stringify({ error: 'Endpoint not found' })
    };
    
  } catch (error) {
    console.error('Function error:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
};

async function handleUsers(method, params, body) {
  switch (method) {
    case 'GET':
      return getUsersHandler(params);
    case 'POST':
      return createUserHandler(JSON.parse(body));
    default:
      return { statusCode: 405, body: 'Method not allowed' };
  }
}
\`\`\`

### Vercel API Routes
\`\`\`javascript
// api/users/[id].js
import { supabase } from '../../lib/supabase';

export default async function handler(req, res) {
  const { method, query: { id } } = req;
  
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  try {
    switch (method) {
      case 'GET':
        return await getUserById(req, res, id);
      case 'PUT':
        return await updateUser(req, res, id);
      case 'DELETE':
        return await deleteUser(req, res, id);
      default:
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
        return res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

async function getUserById(req, res, id) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  return res.status(200).json(data);
}
\`\`\`

### Cloudflare Workers
\`\`\`javascript
// functions/api.js
export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const path = url.pathname;
  
  // CORS handling
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };
  
  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }
  
  try {
    if (path.startsWith('/api/auth')) {
      return handleAuth(request, env);
    } else if (path.startsWith('/api/data')) {
      return handleData(request, env);
    }
    
    return new Response('Not Found', { status: 404 });
    
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders }
    });
  }
}

async function handleAuth(request, env) {
  const { SUPABASE_URL, SUPABASE_ANON_KEY } = env;
  
  // Initialize Supabase client with environment variables
  const { createClient } = await import('@supabase/supabase-js');
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  
  // Handle authentication logic
  const body = await request.json();
  const { data, error } = await supabase.auth.signInWithPassword(body);
  
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' }
  });
}
\`\`\`

## Edge Computing and CDN Optimization

### Global Edge Deployment
\`\`\`javascript
// Edge-optimized application architecture
class EdgeOptimizedApp {
  constructor() {
    this.regions = {
      'us-east-1': 'Virginia',
      'eu-west-1': 'Ireland',
      'ap-southeast-1': 'Singapore',
      'au-southeast-2': 'Sydney'
    };
  }
  
  async deployToEdge(buildAssets) {
    const deployments = [];
    
    for (const [region, location] of Object.entries(this.regions)) {
      const deployment = await this.deployToRegion(region, buildAssets);
      deployments.push({ region, location, ...deployment });
    }
    
    return deployments;
  }
  
  async deployToRegion(region, assets) {
    // Deploy static assets to CDN edge locations
    const assetDeployment = await this.deployCDNAssets(region, assets.static);
    
    // Deploy serverless functions to edge compute
    const functionDeployment = await this.deployEdgeFunctions(region, assets.functions);
    
    return {
      assets: assetDeployment,
      functions: functionDeployment,
      deployed_at: new Date().toISOString()
    };
  }
  
  async deployCDNAssets(region, assets) {
    // Implementation for CDN deployment
    return {
      urls: assets.map(asset => "https://cdn-region.yourapp.com/asset\"),
      cache_policy: 'max-age=31536000, immutable'
    };
  }
}
\`\`\`

### Smart Caching Strategies
\`\`\`javascript
// Advanced caching with Cloudflare Workers
export default {
  async fetch(request, env, ctx) {
    const cache = caches.default;
    const cacheKey = new Request(request.url, request);
    
    // Try to get from cache first
    let response = await cache.match(cacheKey);
    
    if (!response) {
      // Generate response
      response = await generateResponse(request, env);
      
      // Cache based on content type
      const contentType = response.headers.get('Content-Type');
      
      if (contentType?.includes('application/json')) {
        // Cache API responses for 5 minutes
        response.headers.set('Cache-Control', 'public, max-age=300');
      } else if (contentType?.includes('text/html')) {
        // Cache HTML for 1 hour
        response.headers.set('Cache-Control', 'public, max-age=3600');
      } else if (contentType?.includes('image/') || contentType?.includes('font/')) {
        // Cache assets for 1 year
        response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
      }
      
      // Store in cache
      ctx.waitUntil(cache.put(cacheKey, response.clone()));
    }
    
    return response;
  }
};

async function generateResponse(request, env) {
  const url = new URL(request.url);
  
  // Route to appropriate handler
  if (url.pathname.startsWith('/api/')) {
    return handleAPI(request, env);
  } else {
    return handleStatic(request, env);
  }
}
\`\`\`

## Container Orchestration

### Docker Production Setup
\`\`\`dockerfile
# Multi-stage Dockerfile for production
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine AS production

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

WORKDIR /app

# Copy built application
COPY --from=builder --chown=nextjs:nodejs /app/dist ./dist
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json

USER nextjs

EXPOSE 3000

ENV NODE_ENV=production
ENV PORT=3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
  CMD curl -f http://localhost:3000/health || exit 1

CMD ["npm", "start"]
\`\`\`

### Kubernetes Deployment
\`\`\`yaml
# k8s/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: bolt-app
  labels:
    app: bolt-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: bolt-app
  template:
    metadata:
      labels:
        app: bolt-app
    spec:
      containers:
      - name: bolt-app
        image: your-registry/bolt-app:latest
        ports:
        - containerPort: 3000
        env:
        - name: NODE_ENV
          value: "production"
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: app-secrets
              key: database-url
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5
---
apiVersion: v1
kind: Service
metadata:
  name: bolt-app-service
spec:
  selector:
    app: bolt-app
  ports:
  - protocol: TCP
    port: 80
    targetPort: 3000
  type: LoadBalancer
\`\`\`

## Performance Monitoring and Analytics

### Real User Monitoring (RUM)
\`\`\`javascript
// Client-side performance tracking
class PerformanceTracker {
  constructor() {
    this.observer = new PerformanceObserver(this.handlePerformanceEntries.bind(this));
    this.observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
  }
  
  handlePerformanceEntries(list) {
    for (const entry of list.getEntries()) {
      switch (entry.entryType) {
        case 'navigation':
          this.trackNavigation(entry);
          break;
        case 'paint':
          this.trackPaint(entry);
          break;
        case 'largest-contentful-paint':
          this.trackLCP(entry);
          break;
      }
    }
  }
  
  trackNavigation(entry) {
    const metrics = {
      dns_lookup: entry.domainLookupEnd - entry.domainLookupStart,
      tcp_connection: entry.connectEnd - entry.connectStart,
      server_response: entry.responseEnd - entry.requestStart,
      dom_parse: entry.domContentLoadedEventEnd - entry.responseEnd,
      total_load: entry.loadEventEnd - entry.navigationStart
    };
    
    this.sendMetrics('navigation', metrics);
  }
  
  trackPaint(entry) {
    this.sendMetrics('paint', {
      name: entry.name,
      start_time: entry.startTime
    });
  }
  
  trackLCP(entry) {
    this.sendMetrics('lcp', {
      start_time: entry.startTime,
      element: entry.element?.tagName || 'unknown'
    });
  }
  
  async sendMetrics(type, data) {
    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type,
          data,
          timestamp: Date.now(),
          user_agent: navigator.userAgent,
          url: window.location.href
        })
      });
    } catch (error) {
      console.error('Failed to send metrics:', error);
    }
  }
}

// Initialize tracking
new PerformanceTracker();
\`\`\`

Remember {{name}}, serverless and edge computing represent the future of web deployment - globally distributed, automatically scaled, and pay-per-use. Master these patterns and you'll build applications that can handle any scale!`,
        learningObjectives: {
          0: 'Compare and implement deployments across major cloud platforms',
          1: 'Design and build serverless function architectures',
          2: 'Optimize applications for edge computing and global distribution',
          3: 'Implement container orchestration for scalable deployments',
          4: 'Monitor application performance across distributed infrastructure'
        },
        badgeName: 'Cloud Architect',
        srcodeCommentary: '{{name}}, you\'ve just mastered the art of making your application available everywhere at once! Serverless is like having an army of invisible minions who appear exactly when needed and disappear when they\'re not. The cloud is your oyster, and you\'ve learned to shuck it properly! 🌩️⚡',
        quizQuestions: {
          'q4-2-1': {
            question: 'What is the main advantage of serverless functions over traditional server deployment?',
            options: [
              'They are always faster',
              'They automatically scale to zero when not in use and scale up based on demand',
              'They cost less in all scenarios',
              'They support more programming languages'
            ],
            correctAnswer: 1,
            explanation: 'Serverless functions automatically scale to zero when not in use (saving costs) and scale up automatically based on demand without manual intervention or capacity planning.'
          },
          'q4-2-2': {
            question: 'What is the primary benefit of edge computing for web applications?',
            options: [
              'Reduced server costs',
              'Improved security',
              'Reduced latency by serving content from locations closer to users',
              'Easier development process'
            ],
            correctAnswer: 2,
            explanation: 'Edge computing reduces latency by serving content and executing code from locations geographically closer to users, improving performance and user experience globally.'
          },
          'q4-2-3': {
            question: 'In a Kubernetes deployment, what is the purpose of a readiness probe?',
            options: [
              'To restart the container if it fails',
              'To determine when a container is ready to accept traffic',
              'To scale the number of replicas',
              'To monitor resource usage'
            ],
            correctAnswer: 1,
            explanation: 'A readiness probe determines when a container is ready to accept traffic, preventing traffic from being routed to containers that are still starting up or not yet ready to handle requests.'
          },
          'q4-2-4': {
            question: 'What metric does Largest Contentful Paint (LCP) measure?',
            options: [
              'The time until the page is fully interactive',
              'The time to render the largest visible content element',
              'The total page load time',
              'The time to first byte from the server'
            ],
            correctAnswer: 1,
            explanation: 'Largest Contentful Paint (LCP) measures the time it takes to render the largest visible content element in the viewport, which is a key indicator of perceived loading performance.'
          }
        }
      },

      'lesson-4-3': {
        title: 'Performance Optimization & Monitoring',
        objective: 'Master advanced performance optimization techniques, monitoring strategies, and real-time analytics for production applications',
        content: `# Performance Optimization & Monitoring

{{name}}, performance is not just about making things fast - it's about creating exceptional user experiences that scale. This lesson covers advanced optimization techniques and monitoring strategies that ensure your application performs brilliantly under any condition.

## Core Web Vitals Optimization

### Largest Contentful Paint (LCP) Optimization
\`\`\`javascript
// Image optimization strategies
class ImageOptimizer {
  constructor() {
    this.formats = ['webp', 'avif', 'jpeg'];
    this.sizes = [320, 640, 768, 1024, 1280, 1920];
  }
  
  generateResponsiveImageSet(src, alt) {
    const baseName = src.split('.').slice(0, -1).join('.');
    const extension = src.split('.').pop();
    
    // Generate srcset for different sizes and formats
    const webpSrcSet = this.sizes
      .map(size => "baseName-sizew.webp sizew\")
      .join(', ');
    
    const fallbackSrcSet = this.sizes
      .map(size => "baseName-sizew.extension sizew\")
      .join(', ');
    
    return "
      <picture>
        <source 
          type="image/webp" 
          srcset="" + webpSrcSet
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <img 
          src="" + src 
          srcset="" + fallbackSrcSet
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          alt="" + alt
          loading="lazy"
          decoding="async"
        />
      </picture>
    ";
  }
  
  // Preload critical images
  preloadCriticalImages(images) {
    images.forEach(({ src, type = 'image/webp' }) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.type = type;
      link.href = src;
      document.head.appendChild(link);
    });
  }
}

// Usage
const optimizer = new ImageOptimizer();
optimizer.preloadCriticalImages([
  { src: '/hero-image-1280w.webp', type: 'image/webp' },
  { src: '/logo-320w.webp', type: 'image/webp' }
]);
\`\`\`

### First Input Delay (FID) Optimization
\`\`\`javascript
// Code splitting and lazy loading
import { lazy, Suspense } from 'react';

// Lazy load heavy components
const Dashboard = lazy(() => import('./Dashboard'));
const Analytics = lazy(() => import('./Analytics'));
const Reports = lazy(() => import('./Reports'));

// Route-based code splitting
const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

// Optimize heavy computations
class PerformanceOptimizer {
  constructor() {
    this.scheduler = this.createScheduler();
  }
  
  createScheduler() {
    return {
      postTask: (callback, priority = 'user-blocking') => {
        if ('scheduler' in window && 'postTask' in window.scheduler) {
          return window.scheduler.postTask(callback, { priority });
        }
        
        // Fallback for browsers without Scheduler API
        return new Promise(resolve => {
          setTimeout(() => resolve(callback()), 0);
        });
      }
    };
  }
  
  async processLargeDataset(data, processor) {
    const chunkSize = 1000;
    const results = [];
    
    for (let i = 0; i < data.length; i += chunkSize) {
      const chunk = data.slice(i, i + chunkSize);
      
      // Process chunk without blocking the main thread
      const result = await this.scheduler.postTask(() => {
        return processor(chunk);
      }, 'background');
      
      results.push(...result);
      
      // Yield to browser for other tasks
      await new Promise(resolve => setTimeout(resolve, 0));
    }
    
    return results;
  }
}
\`\`\`

### Cumulative Layout Shift (CLS) Prevention
\`\`\`css
/* Prevent layout shifts with CSS */
.image-container {
  /* Reserve space for images */
  aspect-ratio: 16 / 9;
  background-color: #f0f0f0;
  position: relative;
}

.image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Font loading optimization */
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/custom-font.woff2') format('woff2');
  font-display: swap; /* Prevent invisible text during font load */
}

/* Skeleton loading states */
.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
\`\`\`

## Advanced Caching Strategies

### Multi-Layer Caching Architecture
\`\`\`javascript
// Comprehensive caching system
class CacheManager {
  constructor() {
    this.memoryCache = new Map();
    this.browserCache = 'cacheStorage' in window ? caches : null;
    this.serviceWorker = 'serviceWorker' in navigator;
  }
  
  async get(key, options = {}) {
    const { ttl = 300000, strategy = 'cache-first' } = options;
    
    // Try memory cache first (fastest)
    const memoryResult = this.memoryCache.get(key);
    if (memoryResult && Date.now() - memoryResult.timestamp < ttl) {
      return memoryResult.data;
    }
    
    // Try browser cache (medium speed)
    if (this.browserCache) {
      const cache = await this.browserCache.open('app-cache-v1');
      const response = await cache.match(key);
      
      if (response) {
        const data = await response.json();
        this.memoryCache.set(key, { data, timestamp: Date.now() });
        return data;
      }
    }
    
    // Fetch from network (slowest)
    if (strategy === 'cache-first' || strategy === 'network-first') {
      const data = await this.fetchFromNetwork(key);
      await this.set(key, data, ttl);
      return data;
    }
    
    return null;
  }
  
  async set(key, data, ttl = 300000) {
    // Store in memory cache
    this.memoryCache.set(key, { data, timestamp: Date.now() });
    
    // Store in browser cache
    if (this.browserCache) {
      const cache = await this.browserCache.open('app-cache-v1');
      const response = new Response(JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': "max-age=Math.floor(ttl / 1000)\"
        }
      });
      await cache.put(key, response);
    }
    
    // Clean up expired entries
    this.cleanup();
  }
  
  cleanup() {
    const now = Date.now();
    for (const [key, value] of this.memoryCache.entries()) {
      if (now - value.timestamp > 300000) { // 5 minutes default
        this.memoryCache.delete(key);
      }
    }
  }
  
  async fetchFromNetwork(key) {
    const response = await fetch(key);
    if (!response.ok) {
      throw new Error("Failed to fetch key\");
    }
    return response.json();
  }
}

// Usage with React Query integration
import { useQuery } from '@tanstack/react-query';

const cacheManager = new CacheManager();

function useOptimizedQuery(queryKey, fetchFn, options = {}) {
  return useQuery({
    queryKey,
    queryFn: async () => {
      const cacheKey = JSON.stringify(queryKey);
      
      try {
        return await cacheManager.get(cacheKey, options);
      } catch {
        const data = await fetchFn();
        await cacheManager.set(cacheKey, data);
        return data;
      }
    },
    staleTime: options.ttl || 300000,
    gcTime: options.ttl || 300000
  });
}
\`\`\`

## Real-Time Performance Monitoring

### Custom Performance Analytics
\`\`\`javascript
// Advanced performance monitoring
class PerformanceAnalytics {
  constructor(apiEndpoint) {
    this.apiEndpoint = apiEndpoint;
    this.metrics = new Map();
    this.thresholds = {
      lcp: 2500,      // ms
      fid: 100,       // ms
      cls: 0.1,       // score
      ttfb: 800,      // ms
      fcp: 1800       // ms
    };
    
    this.initializeObservers();
  }
  
  initializeObservers() {
    // Largest Contentful Paint
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcp = entries[entries.length - 1];
      this.recordMetric('lcp', lcp.startTime);
    }).observe({ type: 'largest-contentful-paint', buffered: true });
    
    // First Input Delay
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        this.recordMetric('fid', entry.processingStart - entry.startTime);
      }
    }).observe({ type: 'first-input', buffered: true });
    
    // Cumulative Layout Shift
    new PerformanceObserver((list) => {
      let clsScore = 0;
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsScore += entry.value;
        }
      }
      this.recordMetric('cls', clsScore);
    }).observe({ type: 'layout-shift', buffered: true });
    
    // Custom metrics
    this.observeCustomMetrics();
  }
  
  observeCustomMetrics() {
    // Page load time
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0];
      this.recordMetric('page_load', navigation.loadEventEnd - navigation.navigationStart);
    });
    
    // Time to first byte
    const navigation = performance.getEntriesByType('navigation')[0];
    if (navigation) {
      this.recordMetric('ttfb', navigation.responseStart - navigation.navigationStart);
    }
    
    // API response times
    this.monitorAPIPerformance();
  }
  
  monitorAPIPerformance() {
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      const startTime = performance.now();
      const url = args[0];
      
      try {
        const response = await originalFetch(...args);
        const endTime = performance.now();
        
        this.recordMetric('api_response', endTime - startTime, {
          url: url.toString(),
          status: response.status,
          success: response.ok
        });
        
        return response;
      } catch (error) {
        const endTime = performance.now();
        
        this.recordMetric('api_error', endTime - startTime, {
          url: url.toString(),
          error: error.message
        });
        
        throw error;
      }
    };
  }
  
  recordMetric(name, value, metadata = {}) {
    const metric = {
      name,
      value,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      connection: this.getConnectionInfo(),
      ...metadata
    };
    
    this.metrics.set("name_Date.now()\", metric);
    
    // Check if metric exceeds threshold
    if (this.thresholds[name] && value > this.thresholds[name]) {
      this.reportPerformanceIssue(metric);
    }
    
    // Send to analytics (batched)
    this.batchSendMetrics();
  }
  
  getConnectionInfo() {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    return connection ? {
      effectiveType: connection.effectiveType,
      downlink: connection.downlink,
      rtt: connection.rtt
    } : null;
  }
  
  batchSendMetrics() {
    // Batch and send metrics every 10 seconds
    clearTimeout(this.sendTimeout);
    this.sendTimeout = setTimeout(() => {
      const metricsArray = Array.from(this.metrics.values());
      if (metricsArray.length > 0) {
        this.sendToAnalytics(metricsArray);
        this.metrics.clear();
      }
    }, 10000);
  }
  
  async sendToAnalytics(metrics) {
    try {
      await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ metrics })
      });
    } catch (error) {
      console.error('Failed to send analytics:', error);
    }
  }
  
  reportPerformanceIssue(metric) {
    console.warn("Performance threshold exceeded: metric.name = metric.value\");
    
    // Send immediate alert for critical issues
    fetch('/api/alerts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'performance_alert',
        metric: metric.name,
        value: metric.value,
        threshold: this.thresholds[metric.name],
        url: metric.url,
        timestamp: metric.timestamp
      })
    });
  }
}

// Initialize performance monitoring
const analytics = new PerformanceAnalytics('/api/analytics');
\`\`\`

## Error Tracking and Monitoring

### Comprehensive Error Handling
\`\`\`javascript
// Error tracking and reporting system
class ErrorTracker {
  constructor(apiEndpoint, options = {}) {
    this.apiEndpoint = apiEndpoint;
    this.options = {
      maxErrors: 100,
      batchSize: 10,
      flushInterval: 30000,
      ...options
    };
    
    this.errors = [];
    this.setupErrorHandlers();
  }
  
  setupErrorHandlers() {
    // Global error handler
    window.addEventListener('error', (event) => {
      this.captureError({
        type: 'javascript',
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error,
        stack: event.error?.stack
      });
    });
    
    // Unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.captureError({
        type: 'promise_rejection',
        message: event.reason?.message || String(event.reason),
        stack: event.reason?.stack
      });
    });
    
    // Resource loading errors
    window.addEventListener('error', (event) => {
      if (event.target !== window) {
        this.captureError({
          type: 'resource_error',
          resource: event.target.tagName.toLowerCase(),
          source: event.target.src || event.target.href,
          message: 'Resource failed to load'
        });
      }
    }, true);
    
    // Network errors in fetch
    this.monitorNetworkErrors();
  }
  
  monitorNetworkErrors() {
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      try {
        const response = await originalFetch(...args);
        
        if (!response.ok) {
          this.captureError({
            type: 'network_error',
            url: args[0],
            status: response.status,
            statusText: response.statusText
          });
        }
        
        return response;
      } catch (error) {
        this.captureError({
          type: 'network_error',
          url: args[0],
          message: error.message,
          stack: error.stack
        });
        throw error;
      }
    };
  }
  
  captureError(errorData) {
    const error = {
      id: this.generateErrorId(),
      ...errorData,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      userId: this.getCurrentUserId(),
      sessionId: this.getSessionId(),
      breadcrumbs: this.getBreadcrumbs()
    };
    
    this.errors.push(error);
    
    // Flush if we have too many errors
    if (this.errors.length >= this.options.batchSize) {
      this.flush();
    }
    
    console.error('Error captured:', error);
  }
  
  generateErrorId() {
    return "err_Date.now()_Math.random().toString(36).substr(2, 9)\";
  }
  
  getCurrentUserId() {
    // Get user ID from your auth system
    return localStorage.getItem('userId') || 'anonymous';
  }
  
  getSessionId() {
    // Get or create session ID
    let sessionId = sessionStorage.getItem('sessionId');
    if (!sessionId) {
      sessionId = "sess_Date.now()_Math.random().toString(36).substr(2, 9)\";
      sessionStorage.setItem('sessionId', sessionId);
    }
    return sessionId;
  }
  
  getBreadcrumbs() {
    // Return recent user actions for context
    return window.errorBreadcrumbs || [];
  }
  
  async flush() {
    if (this.errors.length === 0) return;
    
    const errorsToSend = this.errors.splice(0, this.options.batchSize);
    
    try {
      await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ errors: errorsToSend })
      });
    } catch (error) {
      console.error('Failed to send error reports:', error);
      // Put errors back in queue
      this.errors.unshift(...errorsToSend);
    }
  }
}

// Initialize error tracking
const errorTracker = new ErrorTracker('/api/errors');

// Set up automatic flushing
setInterval(() => errorTracker.flush(), 30000);
\`\`\`

## A/B Testing and Feature Flags

### Performance-Aware Feature Flags
\`\`\`javascript
// Feature flag system with performance monitoring
class FeatureFlagManager {
  constructor() {
    this.flags = new Map();
    this.analytics = new PerformanceAnalytics('/api/analytics');
    this.loadFlags();
  }
  
  async loadFlags() {
    try {
      const response = await fetch('/api/feature-flags');
      const flags = await response.json();
      
      flags.forEach(flag => {
        this.flags.set(flag.name, flag);
      });
    } catch (error) {
      console.error('Failed to load feature flags:', error);
    }
  }
  
  isEnabled(flagName, userId = null, context = {}) {
    const flag = this.flags.get(flagName);
    if (!flag || !flag.enabled) return false;
    
    // Performance monitoring for flag usage
    const startTime = performance.now();
    
    let isEnabled = false;
    
    // Percentage-based rollout
    if (flag.percentage !== undefined) {
      const hash = this.hashString(userId || 'anonymous');
      isEnabled = (hash % 100) < flag.percentage;
    }
    
    // User-based targeting
    if (flag.users && userId) {
      isEnabled = flag.users.includes(userId);
    }
    
    // Context-based targeting
    if (flag.conditions) {
      isEnabled = this.evaluateConditions(flag.conditions, context);
    }
    
    // Track flag evaluation performance
    const evaluationTime = performance.now() - startTime;
    this.analytics.recordMetric('flag_evaluation', evaluationTime, {
      flagName,
      isEnabled,
      userId
    });
    
    return isEnabled;
  }
  
  hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
  }
  
  evaluateConditions(conditions, context) {
    return conditions.every(condition => {
      const value = context[condition.key];
      
      switch (condition.operator) {
        case 'equals':
          return value === condition.value;
        case 'contains':
          return Array.isArray(value) && value.includes(condition.value);
        case 'greater_than':
          return Number(value) > Number(condition.value);
        default:
          return false;
      }
    });
  }
}

// React hook for feature flags
function useFeatureFlag(flagName, context = {}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const flagManager = useMemo(() => new FeatureFlagManager(), []);
  
  useEffect(() => {
    const enabled = flagManager.isEnabled(flagName, getCurrentUserId(), context);
    setIsEnabled(enabled);
  }, [flagName, context, flagManager]);
  
  return isEnabled;
}

// Usage in components
function Dashboard() {
  const showNewDashboard = useFeatureFlag('new_dashboard', {
    subscription: 'premium',
    region: 'us-east-1'
  });
  
  return showNewDashboard ? <NewDashboard /> : <LegacyDashboard />;
}
\`\`\`

Remember {{name}}, performance optimization is an iterative process of measurement, analysis, and improvement. Monitor everything, optimize strategically, and always prioritize user experience over vanity metrics!`,
        learningObjectives: {
          0: 'Optimize Core Web Vitals (LCP, FID, CLS) for superior user experience',
          1: 'Implement advanced caching strategies across multiple layers',
          2: 'Design comprehensive performance monitoring and analytics systems',
          3: 'Build robust error tracking and reporting mechanisms',
          4: 'Integrate performance-aware feature flags and A/B testing'
        },
        badgeName: 'Performance Master',
        srcodeCommentary: '{{name}}, you\'ve just become a performance ninja! You now know how to make applications so fast that users will wonder if they\'re experiencing time travel. Remember: performance is not just about speed - it\'s about creating experiences so smooth that users forget they\'re using technology. Now go forth and make the web blazingly fast! ⚡🚀',
        quizQuestions: {
          'q4-3-1': {
            question: 'What does Largest Contentful Paint (LCP) measure and what is the recommended threshold?',
            options: [
              'Time to first interaction, should be under 100ms',
              'Time to render the largest visible content element, should be under 2.5 seconds',
              'Total page load time, should be under 3 seconds',
              'Time to first paint, should be under 1 second'
            ],
            correctAnswer: 1,
            explanation: 'Largest Contentful Paint (LCP) measures the time it takes to render the largest visible content element in the viewport. The recommended threshold is under 2.5 seconds for good user experience.'
          },
          'q4-3-2': {
            question: 'What is the most effective strategy to prevent Cumulative Layout Shift (CLS)?',
            options: [
              'Load all content synchronously',
              'Reserve space for dynamic content using CSS dimensions or aspect ratios',
              'Use smaller images',
              'Disable all animations'
            ],
            correctAnswer: 1,
            explanation: 'The most effective strategy to prevent CLS is to reserve space for dynamic content using CSS dimensions, aspect ratios, or skeleton screens, preventing unexpected layout shifts as content loads.'
          },
          'q4-3-3': {
            question: 'Which caching strategy provides the fastest data access?',
            options: [
              'Browser cache (Cache API)',
              'Service Worker cache',
              'In-memory cache (JavaScript variables)',
              'CDN cache'
            ],
            correctAnswer: 2,
            explanation: 'In-memory cache (JavaScript variables) provides the fastest data access as the data is already loaded in memory and doesn\'t require any network requests or storage API calls.'
          },
          'q4-3-4': {
            question: 'Why is it important to batch error reports rather than sending them individually?',
            options: [
              'To save on server costs',
              'To reduce network overhead and prevent performance impact from error reporting',
              'To make debugging easier',
              'To comply with privacy regulations'
            ],
            correctAnswer: 1,
            explanation: 'Batching error reports reduces network overhead and prevents the error reporting system itself from impacting application performance, especially when multiple errors occur in quick succession.'
          }
        }
      },

      // Level 5: Third-Party Integrations
      'lesson-5-1': {
        title: 'Figma to Code Integration',
        objective: 'Master the design-to-development workflow by converting Figma designs directly into functional bolt.new applications',
        content: `# Figma to Code Integration

{{name}}, the design-to-development workflow is often the biggest bottleneck in web development. bolt.new's Figma integration eliminates this friction by converting designs directly into functional code. Let's master this powerful capability.

## Understanding Design-to-Code Workflow

### Traditional Workflow Challenges
- **Design Handoff Friction**: Miscommunication between designers and developers
- **Manual Translation**: Time-consuming process of interpreting designs
- **Inconsistent Implementation**: Variations between design intent and final code
- **Iteration Overhead**: Multiple rounds of feedback and adjustments

### bolt.new's Revolutionary Approach
- **Direct Import**: Figma designs become instant starting points
- **Semantic Understanding**: AI interprets design intent, not just visual appearance
- **Component Recognition**: Identifies reusable patterns and creates components
- **Responsive Translation**: Converts fixed designs into flexible, responsive layouts

## Figma Design Preparation

### Design System Requirements
For optimal results, ensure your Figma designs include:

**Component Organization:**
- **Master Components**: Well-defined, reusable design elements
- **Consistent Naming**: Clear, descriptive layer and component names
- **Proper Constraints**: Auto Layout and constraints for responsive behavior
- **Token System**: Color, typography, and spacing tokens

**Layout Structure:**
- **Frame Organization**: Logical grouping of interface elements
- **Auto Layout**: Figma's layout system for flexible designs
- **Grid Systems**: Consistent column and spacing guidelines
- **Breakpoint Considerations**: Mobile, tablet, and desktop variations

### Annotation Best Practices
Help bolt.new understand your design intent:

**Interactive Elements:**
- Name layers descriptively: "primary-button", "nav-link", "form-input"
- Use consistent naming conventions across similar elements
- Group related elements in properly named frames
- Include hover and active states when possible

**Content Structure:**
- Use real content instead of Lorem Ipsum when possible
- Structure text with proper hierarchy (H1, H2, H3, etc.)
- Include form labels and placeholder text
- Define clear content relationships

**Data Patterns:**
- Show list items and repeating patterns
- Include loading and empty states
- Design error and success feedback
- Plan for dynamic content variations

## Integration Process

### Step 1: Design Import
\`\`\`
Prompt: "Import the dashboard design from Figma URL: [your-figma-url]"
\`\`\`

bolt.new will:
- **Analyze Design Structure**: Understand layout hierarchy and components
- **Extract Assets**: Images, icons, and graphics
- **Identify Patterns**: Recurring elements and design systems
- **Generate Base Code**: Initial HTML/CSS structure

### Step 2: Component Extraction
\`\`\`
Prompt: "Convert the navigation bar from this design into a reusable React component with active state handling"
\`\`\`

The AI will create:
- **Semantic HTML**: Proper element structure and accessibility
- **Component Logic**: Interactive behaviors and state management
- **Styling System**: CSS/styled-components matching design
- **Props Interface**: Configurable properties for reusability

### Step 3: Responsive Enhancement
\`\`\`
Prompt: "Make this design fully responsive with mobile-first approach, maintaining the design system's visual hierarchy"
\`\`\`

Enhancements include:
- **Breakpoint Strategy**: Mobile, tablet, desktop variations
- **Flexible Layouts**: CSS Grid and Flexbox implementations
- **Scalable Typography**: Responsive font sizes and line heights
- **Adaptive Spacing**: Consistent margins and padding across devices

### Step 4: Interactive Features
\`\`\`
Prompt: "Add form validation, loading states, and micro-interactions based on the design patterns shown"
\`\`\`

Implementation covers:
- **User Interactions**: Hover, focus, and click behaviors
- **Form Handling**: Validation, submission, and feedback
- **Loading States**: Skeletons, spinners, and progress indicators
- **Micro-animations**: Smooth transitions and delightful details

## Advanced Integration Techniques

### Design Token Integration
\`\`\`javascript
// Extract design tokens from Figma
const designTokens = {
  colors: {
    primary: '#2563eb',
    secondary: '#64748b',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444'
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
    headings: {
      h1: { size: '2.25rem', weight: '700', lineHeight: '2.5rem' },
      h2: { size: '1.875rem', weight: '600', lineHeight: '2.25rem' },
      h3: { size: '1.5rem', weight: '600', lineHeight: '2rem' }
    }
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '3rem'
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  }
};
\`\`\`

### Component Library Generation
\`\`\`
Prompt: "Generate a complete component library from this design system including Button, Input, Card, Modal, and Navigation components with TypeScript interfaces"
\`\`\`

Results in:
- **Type-safe Components**: Full TypeScript support
- **Storybook Integration**: Documentation and testing
- **Design System Compliance**: Consistent implementation
- **Accessibility Features**: WCAG compliance built-in

### Complex Layout Translation
\`\`\`
Prompt: "Convert this complex dashboard layout with sidebar navigation, main content area, and widget grid into a responsive React application with state management"
\`\`\`

Advanced features:
- **Layout Management**: Collapsible sidebars and flexible grids
- **State Architecture**: Context or Redux for complex interactions
- **Data Integration**: API connections and real-time updates
- **Performance Optimization**: Code splitting and lazy loading

## Quality Assurance and Refinement

### Design Fidelity Verification
Compare generated code with original design:

**Visual Accuracy:**
- **Pixel-perfect Matching**: Colors, fonts, and spacing precision
- **Proportion Consistency**: Element relationships and hierarchy
- **Brand Alignment**: Logo placement and brand element treatment
- **Visual Hierarchy**: Information architecture preservation

**Functional Completeness:**
- **Interactive Elements**: All clickable areas functional
- **Form Behaviors**: Proper validation and submission
- **Navigation Logic**: Correct routing and state management
- **Responsive Behavior**: Consistent across all breakpoints

### Optimization Opportunities
\`\`\`
Prompt: "Optimize this generated code for performance, accessibility, and maintainability while preserving the design integrity"
\`\`\`

Improvements include:
- **Performance**: Image optimization, code splitting, caching
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **SEO**: Semantic HTML, meta tags, structured data
- **Maintainability**: Component organization, documentation, testing

## Integration with Development Workflow

### Version Control Integration
- **Design Sync**: Track design changes and code updates
- **Branch Management**: Feature branches for design iterations
- **Code Reviews**: Collaborative improvement process
- **Deployment Pipeline**: Automated testing and deployment

### Collaboration Patterns
- **Designer-Developer Sync**: Regular check-ins and feedback
- **Stakeholder Reviews**: Client and team approval processes
- **Iteration Cycles**: Rapid design-code-test loops
- **Documentation**: Design decisions and implementation notes

## Troubleshooting Common Issues

### Design Import Problems
**Issue**: "Design elements not importing correctly"
**Solution**: Check Figma layer organization and naming conventions

**Issue**: "Colors and fonts don't match"
**Solution**: Verify design tokens and style guide consistency

**Issue**: "Responsive behavior not working"
**Solution**: Review Auto Layout setup in Figma

### Code Quality Issues
**Issue**: "Generated code is not semantic"
**Solution**: Improve Figma layer naming and structure

**Issue**: "Components are not reusable"
**Solution**: Define clear component boundaries in design

**Issue**: "Performance is poor"
**Solution**: Optimize images and implement code splitting

Remember {{name}}, the key to successful Figma-to-code integration is preparation. Well-organized, properly annotated designs lead to clean, maintainable code that matches your design vision perfectly.`,
        learningObjectives: {
          0: 'Prepare Figma designs for optimal code generation',
          1: 'Execute the complete design-to-code workflow using bolt.new',
          2: 'Extract and implement design tokens and component systems',
          3: 'Ensure design fidelity while maintaining code quality',
          4: 'Integrate design-to-code workflow into development processes'
        },
        badgeName: 'Design Systems Expert',
        srcodeCommentary: '{{name}}, you\'ve just learned to speak the secret language between designers and developers! Figma-to-code is like having a universal translator that turns pretty pictures into functional apps. No more playing telephone between design and development teams. Remember: good design preparation is like good cooking prep - it makes everything else faster and tastier! 🎨➡️💻',
        quizQuestions: {
          'q5-1-1': {
            question: 'What is the most important preparation step for optimal Figma-to-code conversion?',
            options: [
              'Using the latest Figma version',
              'Having high-resolution images',
              'Organizing components with consistent naming and proper Auto Layout',
              'Including Lorem Ipsum text'
            ],
            correctAnswer: 2,
            explanation: 'Organizing components with consistent naming conventions and proper Auto Layout structure helps bolt.new understand design intent and generate semantic, maintainable code.'
          },
          'q5-1-2': {
            question: 'What are design tokens in the context of Figma-to-code workflow?',
            options: [
              'Security credentials for Figma access',
              'Standardized values for colors, typography, spacing, and other design elements',
              'Interactive prototyping features',
              'Version control markers'
            ],
            correctAnswer: 1,
            explanation: 'Design tokens are standardized values for colors, typography, spacing, and other design elements that ensure consistency between design and code implementation.'
          },
          'q5-1-3': {
            question: 'Why is semantic HTML important in design-to-code conversion?',
            options: [
              'It makes the website load faster',
              'It reduces the file size',
              'It improves accessibility and SEO while maintaining proper document structure',
              'It makes the code look prettier'
            ],
            correctAnswer: 2,
            explanation: 'Semantic HTML improves accessibility for screen readers, enhances SEO by providing meaningful document structure, and makes the code more maintainable and standards-compliant.'
          },
          'q5-1-4': {
            question: 'What should you do if the generated code doesn\'t match the design fidelity?',
            options: [
              'Manually rewrite all the code',
              'Ignore the differences',
              'Review and improve Figma layer organization, naming, and provide more specific prompts',
              'Use a different tool'
            ],
            correctAnswer: 2,
            explanation: 'When design fidelity doesn\'t match, the best approach is to review Figma organization, improve layer naming and structure, and provide more specific prompts to guide the AI toward better results.'
          }
        }
      },

      'lesson-5-2': {
        title: 'Payment Integration with Stripe',
        objective: 'Implement secure, production-ready payment processing with Stripe integration in bolt.new applications',
        content: `# Payment Integration with Stripe

{{name}}, e-commerce and payment processing are critical for modern web applications. bolt.new's Stripe integration makes it straightforward to implement secure, PCI-compliant payment systems. Let's build professional payment flows.

## Understanding Payment Architecture

### Payment Flow Components
A complete payment system includes:

**Frontend Elements:**
- **Payment Forms**: Secure card input with validation
- **Checkout Process**: Multi-step user journey
- **Order Management**: Cart, pricing, and confirmation
- **User Experience**: Loading states, error handling, success feedback

**Backend Integration:**
- **Payment Intent Creation**: Server-side payment initialization
- **Webhook Handling**: Real-time payment status updates
- **Order Processing**: Business logic after successful payment
- **Security Implementation**: PCI compliance and fraud prevention

**Third-party Services:**
- **Stripe APIs**: Payment processing and management
- **Bank Networks**: Card authorization and settlement
- **Compliance Systems**: PCI DSS, SCA, and regional requirements

### Security Considerations
Payment processing requires strict security measures:

**PCI Compliance:**
- **Never store card data**: Use Stripe's secure vaults
- **Tokenization**: Replace sensitive data with secure tokens
- **Encryption**: HTTPS for all payment communications
- **Access Control**: Limit who can access payment systems

**Fraud Prevention:**
- **3D Secure**: Additional authentication for high-risk transactions
- **Machine Learning**: Stripe's built-in fraud detection
- **Risk Assessment**: Monitor transaction patterns
- **Manual Review**: Flagged transactions for human verification

## Stripe Integration Setup

### Initial Configuration
\`\`\`
Prompt: "Set up Stripe payment integration with environment variables, API keys, and basic configuration for a subscription-based SaaS application"
\`\`\`

This creates:
- **Environment Setup**: Secure API key management
- **Stripe Client**: Frontend and backend initialization
- **Webhook Configuration**: Real-time payment notifications
- **Error Handling**: Comprehensive error management

### Payment Form Implementation
\`\`\`javascript
// Secure payment form with Stripe Elements
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

function PaymentForm({ amount, currency = 'usd', onSuccess, onError }) {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!stripe || !elements) {
      return; // Stripe.js has not loaded yet
    }
    
    setProcessing(true);
    
    try {
      // Create payment intent on server
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: amount * 100, // Convert to cents
          currency,
          metadata: {
            order_id: generateOrderId(),
            customer_id: getCurrentUserId()
          }
        })
      });
      
      const { client_secret } = await response.json();
      
      // Confirm payment with card
      const { error, paymentIntent } = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: 'Customer Name',
            email: 'customer@example.com'
          }
        }
      });
      
      if (error) {
        onError(error.message);
      } else if (paymentIntent.status === 'succeeded') {
        onSuccess(paymentIntent);
      }
    } catch (err) {
      onError('Payment processing failed. Please try again.');
    } finally {
      setProcessing(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <div className="card-element-container">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
            },
          }}
        />
      </div>
      
      <button 
        type="submit" 
        disabled={!stripe || processing}
        className="pay-button"
      >
        {processing ? 'Processing...' : "Pay $amount\"}
      </button>
    </form>
  );
}

// Usage with Elements provider
function CheckoutPage() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm 
        amount={99.99}
        onSuccess={(paymentIntent) => {
          // Handle successful payment
          redirectToSuccessPage(paymentIntent.id);
        }}
        onError={(error) => {
          // Handle payment error
          showErrorMessage(error);
        }}
      />
    </Elements>
  );
}
\`\`\`

### Server-side Implementation
\`\`\`javascript
// Backend payment intent creation
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { amount, currency, metadata } = req.body;
      
      // Create payment intent
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency,
        metadata,
        automatic_payment_methods: {
          enabled: true,
        },
        // Additional security measures
        capture_method: 'automatic',
        confirmation_method: 'manual',
        confirm: false
      });
      
      res.status(200).json({
        client_secret: paymentIntent.client_secret,
        payment_intent_id: paymentIntent.id
      });
    } catch (error) {
      console.error('Payment intent creation failed:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
\`\`\`

## Advanced Payment Features

### Subscription Management
\`\`\`
Prompt: "Implement a subscription-based billing system with multiple pricing tiers, trial periods, and upgrade/downgrade functionality"
\`\`\`

Features include:
- **Pricing Tiers**: Multiple subscription levels
- **Trial Periods**: Free trial with automatic conversion
- **Proration**: Fair billing for plan changes
- **Invoice Management**: Automatic billing and receipts

### Multi-payment Methods
\`\`\`javascript
// Support various payment methods
const PaymentMethodSelector = () => {
  const [selectedMethod, setSelectedMethod] = useState('card');
  
  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: CardIcon },
    { id: 'apple_pay', name: 'Apple Pay', icon: ApplePayIcon },
    { id: 'google_pay', name: 'Google Pay', icon: GooglePayIcon },
    { id: 'bank_transfer', name: 'Bank Transfer', icon: BankIcon }
  ];
  
  return (
    <div className="payment-methods">
      {paymentMethods.map(method => (
        <button
          key={method.id}
          onClick={() => setSelectedMethod(method.id)}
          className={"method-button selectedMethod === method.id ? 'selected' : ''\"}
        >
          <method.icon />
          {method.name}
        </button>
      ))}
      
      {selectedMethod === 'card' && <CardPaymentForm />}
      {selectedMethod === 'apple_pay' && <ApplePayButton />}
      {selectedMethod === 'google_pay' && <GooglePayButton />}
      {selectedMethod === 'bank_transfer' && <BankTransferForm />}
    </div>
  );
};
\`\`\`

### Webhook Implementation
\`\`\`javascript
// Handle Stripe webhooks for real-time updates
import { buffer } from 'micro';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const buf = await buffer(req);
    const sig = req.headers['stripe-signature'];
    
    try {
      const event = stripe.webhooks.constructEvent(
        buf, 
        sig, 
        process.env.STRIPE_WEBHOOK_SECRET
      );
      
      switch (event.type) {
        case 'payment_intent.succeeded':
          await handleSuccessfulPayment(event.data.object);
          break;
          
        case 'payment_intent.payment_failed':
          await handleFailedPayment(event.data.object);
          break;
          
        case 'customer.subscription.created':
          await handleNewSubscription(event.data.object);
          break;
          
        case 'customer.subscription.updated':
          await handleSubscriptionUpdate(event.data.object);
          break;
          
        case 'invoice.payment_succeeded':
          await handleInvoicePayment(event.data.object);
          break;
          
        default:
          console.log("Unhandled event type: event.type\");
      }
      
      res.status(200).json({ received: true });
    } catch (error) {
      console.error('Webhook error:', error);
      res.status(400).send("Webhook Error: error.message\");
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

async function handleSuccessfulPayment(paymentIntent) {
  // Update order status
  await updateOrderStatus(paymentIntent.metadata.order_id, 'paid');
  
  // Send confirmation email
  await sendOrderConfirmation(paymentIntent.metadata.customer_id);
  
  // Update user account
  await grantAccess(paymentIntent.metadata.customer_id);
  
  // Analytics tracking
  await trackConversion('payment_completed', {
    amount: paymentIntent.amount,
    currency: paymentIntent.currency
  });
}
\`\`\`

## E-commerce Integration Patterns

### Shopping Cart Implementation
\`\`\`
Prompt: "Create a complete shopping cart system with product selection, quantity management, discount codes, tax calculation, and Stripe checkout integration"
\`\`\`

Components include:
- **Product Catalog**: Browsable product listings
- **Cart Management**: Add, remove, update quantities
- **Pricing Logic**: Subtotals, taxes, discounts, shipping
- **Checkout Flow**: Multi-step process with validation

### Order Management System
\`\`\`javascript
// Complete order lifecycle management
class OrderManager {
  async createOrder(cartItems, customerInfo, paymentMethod) {
    // Calculate totals
    const subtotal = this.calculateSubtotal(cartItems);
    const tax = this.calculateTax(subtotal, customerInfo.address);
    const shipping = this.calculateShipping(cartItems, customerInfo.address);
    const total = subtotal + tax + shipping;
    
    // Create order record
    const order = await this.saveOrder({
      items: cartItems,
      customer: customerInfo,
      pricing: { subtotal, tax, shipping, total },
      status: 'pending',
      created_at: new Date()
    });
    
    // Create Stripe payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total * 100,
      currency: 'usd',
      metadata: {
        order_id: order.id,
        customer_id: customerInfo.id
      }
    });
    
    return {
      order,
      client_secret: paymentIntent.client_secret
    };
  }
  
  async processPayment(orderId, paymentIntentId) {
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    
    if (paymentIntent.status === 'succeeded') {
      // Update order status
      await this.updateOrderStatus(orderId, 'paid');
      
      // Process fulfillment
      await this.initiateShipping(orderId);
      
      // Send notifications
      await this.sendOrderConfirmation(orderId);
      
      return { success: true, order: await this.getOrder(orderId) };
    } else {
      throw new Error('Payment not completed');
    }
  }
}
\`\`\`

### International Payment Support
\`\`\`
Prompt: "Implement international payment support with multiple currencies, local payment methods, and regional tax calculations"
\`\`\`

Features:
- **Multi-currency**: Dynamic currency conversion
- **Local Methods**: Region-specific payment options
- **Tax Compliance**: VAT, GST, and local tax rules
- **Regulatory Compliance**: GDPR, PCI DSS, regional requirements

## Testing and Debugging

### Test Environment Setup
\`\`\`javascript
// Test payment scenarios
const testScenarios = {
  successfulPayment: {
    card: '4242424242424242', // Visa test card
    cvc: '123',
    exp_month: 12,
    exp_year: 2025
  },
  declinedPayment: {
    card: '4000000000000002', // Declined card
    cvc: '123',
    exp_month: 12,
    exp_year: 2025
  },
  requiresAuthentication: {
    card: '4000002500003155', // 3D Secure test card
    cvc: '123',
    exp_month: 12,
    exp_year: 2025
  }
};

// Automated testing
describe('Payment Integration', () => {
  test('successful payment flow', async () => {
    const result = await processTestPayment(testScenarios.successfulPayment);
    expect(result.status).toBe('succeeded');
  });
  
  test('declined payment handling', async () => {
    const result = await processTestPayment(testScenarios.declinedPayment);
    expect(result.error).toBeDefined();
  });
});
\`\`\`

### Production Monitoring
\`\`\`javascript
// Payment analytics and monitoring
class PaymentAnalytics {
  trackPaymentAttempt(amount, currency, method) {
    analytics.track('payment_attempted', {
      amount,
      currency,
      payment_method: method,
      timestamp: new Date()
    });
  }
  
  trackPaymentSuccess(paymentIntent) {
    analytics.track('payment_succeeded', {
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
      payment_method: paymentIntent.payment_method.type,
      processing_time: this.calculateProcessingTime(paymentIntent)
    });
  }
  
  trackPaymentFailure(error, context) {
    analytics.track('payment_failed', {
      error_code: error.code,
      error_message: error.message,
      decline_code: error.decline_code,
      context
    });
  }
}
\`\`\`

Remember {{name}}, payment integration is about trust and security. Users trust you with their financial information, so every implementation detail matters. Test thoroughly, monitor continuously, and always prioritize security over convenience.`,
        learningObjectives: {
          0: 'Implement secure Stripe payment integration with proper PCI compliance',
          1: 'Build complete checkout flows with error handling and user feedback',
          2: 'Manage subscriptions, billing, and recurring payments',
          3: 'Handle webhooks for real-time payment status updates',
          4: 'Test payment flows and monitor production payment systems'
        },
        badgeName: 'Payment Systems Expert',
        srcodeCommentary: '{{name}}, you\'ve just mastered the art of digital money handling! Payment integration is like being a bank teller, security guard, and customer service rep all at once. Remember: with great payment power comes great responsibility (and PCI compliance). Never store card details, always validate everything, and treat every transaction like it\'s your own money! 💳🔒',
        quizQuestions: {
          'q5-2-1': {
            question: 'Why should you never store credit card details in your own database?',
            options: [
              'It takes too much storage space',
              'It violates PCI DSS compliance requirements and creates security risks',
              'It makes the application slower',
              'It\'s not useful for business purposes'
            ],
            correctAnswer: 1,
            explanation: 'Storing credit card details violates PCI DSS compliance requirements and creates significant security and legal risks. Instead, use Stripe\'s secure tokenization system to handle sensitive payment data.'
          },
          'q5-2-2': {
            question: 'What is the purpose of Stripe webhooks in payment processing?',
            options: [
              'To speed up payment processing',
              'To receive real-time notifications about payment status changes',
              'To reduce payment fees',
              'To handle payment form styling'
            ],
            correctAnswer: 1,
            explanation: 'Stripe webhooks provide real-time notifications about payment events (success, failure, disputes) allowing your application to update order status and trigger business logic immediately.'
          },
          'q5-2-3': {
            question: 'What is a Payment Intent in Stripe\'s API?',
            options: [
              'A user\'s intention to make a purchase',
              'A server-side object that represents a single payment and tracks its lifecycle',
              'A client-side payment form',
              'A webhook notification'
            ],
            correctAnswer: 1,
            explanation: 'A Payment Intent is a server-side Stripe object that represents a single payment attempt and tracks its entire lifecycle from creation through completion, including handling authentication requirements.'
          },
          'q5-2-4': {
            question: 'When implementing subscription billing, what is proration?',
            options: [
              'The process of collecting payment upfront',
              'Automatically adjusting billing amounts when customers upgrade or downgrade mid-cycle',
              'Sending invoices to customers',
              'Handling failed payments'
            ],
            correctAnswer: 1,
            explanation: 'Proration is the fair billing practice of automatically adjusting charges when customers change subscription plans mid-billing cycle, ensuring they only pay for what they use.'
          }
        }
      },

      'lesson-5-3': {
        title: 'GitHub Integration & Version Control',
        objective: 'Master version control workflows, automated deployments, and collaborative development using GitHub integration with bolt.new',
        content: `# GitHub Integration & Version Control

{{name}}, version control is the backbone of professional software development. bolt.new's GitHub integration transforms how you manage code, collaborate with teams, and deploy applications. Let's master these essential workflows.

## Understanding Version Control in bolt.new

### Automatic Git Management
bolt.new handles Git operations seamlessly:

**Automatic Repository Creation:**
- **Instant Initialization**: Every project starts with a Git repository
- **Meaningful Commits**: AI generates descriptive commit messages
- **Branch Management**: Automatic feature branches for major changes
- **Change Tracking**: Complete history of all modifications

**Intelligent Commit Strategies:**
- **Logical Grouping**: Related changes bundled together
- **Descriptive Messages**: Clear explanations of what changed and why
- **Atomic Commits**: Each commit represents a complete, working feature
- **Rollback Capability**: Easy reversion to any previous state

### GitHub Repository Integration
\`\`\`
Prompt: "Connect this project to GitHub and set up automatic deployments with proper CI/CD pipeline"
\`\`\`

This establishes:
- **Repository Creation**: New GitHub repo with proper configuration
- **Branch Protection**: Main branch protection rules
- **Webhook Setup**: Automatic deployment triggers
- **Access Control**: Team permissions and collaboration settings

## Professional Git Workflows

### Feature Branch Strategy
\`\`\`javascript
// Automated feature branch workflow
class FeatureBranchManager {
  async createFeatureBranch(featureName, description) {
    const branchName = "feature/this.sanitizeBranchName(featureName)\";
    
    // Create new branch from main
    await git.checkout('main');
    await git.pull('origin', 'main');
    await git.checkout('-b', branchName);
    
    // Document feature requirements
    const featureDoc = "
# Feature: featureName

## Description
description

## Requirements
- [ ] Implementation complete
- [ ] Tests added
- [ ] Documentation updated
- [ ] Code reviewed
- [ ] Deployment tested

## Implementation Notes
- Started: new Date().toISOString()
- Branch: branchName
    ";
    
    await this.createFile('FEATURE.md', featureDoc);
    await git.add('FEATURE.md');
    await git.commit("feat: Initialize featureName feature branch\");
    
    return branchName;
  }
  
  async mergeFeature(branchName) {
    // Ensure clean working directory
    await this.validateCleanState();
    
    // Update main branch
    await git.checkout('main');
    await git.pull('origin', 'main');
    
    // Merge feature branch
    await git.merge(branchName, {
      '--no-ff': true, // Always create merge commit
      '-m': "Merge feature branch branchName\"
    });
    
    // Clean up
    await git.branch('-d', branchName);
    await git.push('origin', 'main');
    await git.push('origin', '--delete', branchName);
  }
}
\`\`\`

### Collaborative Development Patterns
\`\`\`
Prompt: "Set up collaborative development workflow with code reviews, automated testing, and deployment pipeline for a team of 5 developers"
\`\`\`

Implementation includes:
- **Pull Request Templates**: Standardized review process
- **Code Review Guidelines**: Quality standards and checklists
- **Automated Testing**: CI pipeline with comprehensive tests
- **Deployment Gates**: Quality checks before production

## Continuous Integration & Deployment

### GitHub Actions Workflow
\`\`"yaml
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        node-version: [16.x, 18.x, 20.x]
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: { matrix.node-version}
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run linting
      run: npm run lint
      
    - name: Run type checking
      run: npm run type-check
      
    - name: Run unit tests
      run: npm run test:unit
      
    - name: Run integration tests
      run: npm run test:integration
      
    - name: Build application
      run: npm run build
      
    - name: Run E2E tests
      run: npm run test:e2e
      
    - name: Upload test results
      uses: actions/upload-artifact@v3
      if: always()
      with:
        name: test-results-{ matrix.node-version}
        path: test-results/

  security:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
      
    - name: Run security audit
      run: npm audit --audit-level moderate
      
    - name: Run dependency check
      uses: securecodewarrior/github-action-add-sarif@v1
      with:
        sarif-file: security-scan-results.sarif

  deploy-staging:
    needs: [test, security]
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/develop'
    
    steps:
    - name: Deploy to staging
      run: |
        echo "Deploying to staging environment"
        # Deployment commands here
        
  deploy-production:
    needs: [test, security]
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    environment: production
    
    steps:
    - name: Deploy to production
      run: |
        echo "Deploying to production environment"
        # Production deployment commands here
"\`\`

### Automated Code Quality
\`\`\`javascript
// Code quality automation
class CodeQualityManager {
  async setupQualityGates() {
    // ESLint configuration
    const eslintConfig = {
      extends: [
        'eslint:recommended',
        '@typescript-eslint/recommended',
        'prettier'
      ],
      rules: {
        'no-console': 'warn',
        'no-debugger': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        'complexity': ['error', 10],
        'max-lines': ['error', 300],
        'max-params': ['error', 4]
      }
    };
    
    // Prettier configuration
    const prettierConfig = {
      semi: true,
      singleQuote: true,
      tabWidth: 2,
      trailingComma: 'es5',
      printWidth: 80
    };
    
    // Husky pre-commit hooks
    const huskyConfig = {
      'pre-commit': 'lint-staged',
      'pre-push': 'npm run test',
      'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS'
    };
    
    return {
      eslint: eslintConfig,
      prettier: prettierConfig,
      husky: huskyConfig
    };
  }
  
  async validateCodeQuality(files) {
    const results = {
      linting: await this.runESLint(files),
      formatting: await this.checkPrettier(files),
      testing: await this.runTests(),
      coverage: await this.checkCoverage(),
      complexity: await this.analyzeComplexity(files)
    };
    
    return this.generateQualityReport(results);
  }
}
\`\`\`

## Advanced GitHub Features

### Issue and Project Management
\`\`\`
Prompt: "Set up GitHub Issues with custom templates, project boards, and automated workflow for bug tracking and feature requests"
\`\`\`

Features include:
- **Issue Templates**: Standardized bug reports and feature requests
- **Project Boards**: Kanban-style project management
- **Automated Workflows**: Issue assignment and status updates
- **Labels and Milestones**: Organization and release planning

### Release Management
\`\`\`javascript
// Automated release process
class ReleaseManager {
  async createRelease(version, changelog) {
    // Validate version format
    if (!this.isValidSemVer(version)) {
      throw new Error('Invalid semantic version format');
    }
    
    // Generate release notes
    const releaseNotes = await this.generateReleaseNotes(changelog);
    
    // Create Git tag
    await git.tag(version, "Release version\");
    await git.push('origin', version);
    
    // Create GitHub release
    const release = await github.repos.createRelease({
      owner: this.owner,
      repo: this.repo,
      tag_name: version,
      name: "Release version\",
      body: releaseNotes,
      draft: false,
      prerelease: this.isPrerelease(version)
    });
    
    // Trigger deployment
    await this.triggerDeployment(version);
    
    return release;
  }
  
  async generateReleaseNotes(changelog) {
    const sections = {
      features: [],
      bugfixes: [],
      breaking: [],
      internal: []
    };
    
    changelog.forEach(commit => {
      const type = this.parseCommitType(commit.message);
      const description = this.parseCommitDescription(commit.message);
      
      switch (type) {
        case 'feat':
          sections.features.push(description);
          break;
        case 'fix':
          sections.bugfixes.push(description);
          break;
        case 'BREAKING CHANGE':
          sections.breaking.push(description);
          break;
        default:
          sections.internal.push(description);
      }
    });
    
    return this.formatReleaseNotes(sections);
  }
}
\`\`\`

### Security and Access Control
\`\`\`
Prompt: "Configure repository security with branch protection rules, required code reviews, and automated security scanning"
\`\`\`

Security measures:
- **Branch Protection**: Prevent direct pushes to main branches
- **Required Reviews**: Mandatory code review before merging
- **Status Checks**: All tests must pass before merge
- **Security Scanning**: Automated vulnerability detection

## Team Collaboration Workflows

### Code Review Process
\`\`\`javascript
// Automated code review assistance
class CodeReviewAssistant {
  generateReviewChecklist(pullRequest) {
    return {
      functionality: [
        'Does the code solve the intended problem?',
        'Are edge cases handled appropriately?',
        'Is error handling comprehensive?',
        'Are performance implications considered?'
      ],
      codeQuality: [
        'Is the code readable and well-documented?',
        'Are naming conventions consistent?',
        'Is the code properly structured?',
        'Are there any code smells or anti-patterns?'
      ],
      testing: [
        'Are there adequate unit tests?',
        'Do integration tests cover the main paths?',
        'Is test coverage maintained or improved?',
        'Are tests clear and maintainable?'
      ],
      security: [
        'Are there any security vulnerabilities?',
        'Is user input properly validated?',
        'Are secrets and credentials handled securely?',
        'Is authentication and authorization correct?'
      ]
    };
  }
  
  async analyzeCodeChanges(diff) {
    const analysis = {
      complexity: await this.measureComplexity(diff),
      security: await this.scanSecurity(diff),
      performance: await this.checkPerformance(diff),
      style: await this.validateStyle(diff)
    };
    
    return this.generateReviewSuggestions(analysis);
  }
}
\`\`\`

### Documentation Integration
\`\`\`
Prompt: "Set up automatic documentation generation with GitHub Pages, including API docs, component library, and developer guides"
\`\`\`

Documentation features:
- **API Documentation**: Auto-generated from code comments
- **Component Library**: Interactive component showcase
- **Developer Guides**: Setup and contribution instructions
- **Change Logs**: Automatic release notes and changelogs

## Deployment Automation

### Multi-environment Strategy
\`\`\`javascript
// Environment-specific deployment
class DeploymentManager {
  environments = {
    development: {
      branch: 'develop',
      url: 'https://dev.yourapp.com',
      database: 'dev_db',
      features: ['debug', 'hot-reload']
    },
    staging: {
      branch: 'staging',
      url: 'https://staging.yourapp.com',
      database: 'staging_db',
      features: ['analytics', 'error-tracking']
    },
    production: {
      branch: 'main',
      url: 'https://yourapp.com',
      database: 'prod_db',
      features: ['analytics', 'error-tracking', 'monitoring']
    }
  };
  
  async deployToEnvironment(environment, version) {
    const config = this.environments[environment];
    
    // Validate deployment prerequisites
    await this.validatePrerequisites(environment, version);
    
    // Run environment-specific tests
    await this.runEnvironmentTests(environment);
    
    // Deploy application
    const deployment = await this.executeDeployment(config, version);
    
    // Verify deployment
    await this.verifyDeployment(deployment);
    
    // Update monitoring
    await this.updateMonitoring(environment, version);
    
    return deployment;
  }
}
\`\`\`

### Rollback Strategies
\`\`\`javascript
// Automated rollback capabilities
class RollbackManager {
  async createDeploymentCheckpoint(environment, version) {
    return {
      environment,
      version,
      timestamp: new Date(),
      database_backup: await this.backupDatabase(environment),
      application_state: await this.captureApplicationState(environment),
      configuration: await this.captureConfiguration(environment)
    };
  }
  
  async rollbackDeployment(checkpointId) {
    const checkpoint = await this.getCheckpoint(checkpointId);
    
    // Rollback application code
    await this.rollbackCode(checkpoint.version);
    
    // Restore database if needed
    if (checkpoint.database_backup) {
      await this.restoreDatabase(checkpoint.database_backup);
    }
    
    // Restore configuration
    await this.restoreConfiguration(checkpoint.configuration);
    
    // Verify rollback
    await this.verifyRollback(checkpoint);
  }
}
\`\`\`

Remember {{name}}, version control is your safety net and collaboration superpower. Good Git hygiene, clear commit messages, and proper branching strategies will save you countless hours and enable seamless team collaboration.`,
        learningObjectives: {
          0: 'Master Git workflows and GitHub integration for professional development',
          1: 'Implement comprehensive CI/CD pipelines with automated testing and deployment',
          2: 'Establish effective code review and collaboration processes',
          3: 'Configure repository security and access control measures',
          4: 'Manage releases, documentation, and deployment automation'
        },
        badgeName: 'DevOps Engineer',
        srcodeCommentary: '{{name}}, you\'ve just become a Git wizard and GitHub ninja! Version control is like having a time machine for your code - you can go back, see what changed, and collaborate without stepping on each other\'s toes. Remember: commit early, commit often, and write commit messages like you\'re explaining to your future self who has amnesia! 🚀📝',
        quizQuestions: {
          'q5-3-1': {
            question: 'What is the main advantage of using feature branches in Git workflow?',
            options: [
              'They make the repository smaller',
              'They allow parallel development of features without affecting the main codebase',
              'They automatically fix merge conflicts',
              'They reduce the need for testing'
            ],
            correctAnswer: 1,
            explanation: 'Feature branches allow developers to work on different features simultaneously without affecting the main codebase, enabling parallel development and reducing conflicts when multiple team members are working on the same project.'
          },
          'q5-3-2': {
            question: 'What is the purpose of a CI/CD pipeline in software development?',
            options: [
              'To write code automatically',
              'To automatically build, test, and deploy code changes',
              'To manage user accounts',
              'To design user interfaces'
            ],
            correctAnswer: 1,
            explanation: 'CI/CD (Continuous Integration/Continuous Deployment) pipelines automatically build, test, and deploy code changes, ensuring code quality and enabling rapid, reliable releases while catching issues early in the development process.'
          },
          'q5-3-3': {
            question: 'Why are branch protection rules important in GitHub?',
            options: [
              'They make branches run faster',
              'They prevent unauthorized changes to important branches and enforce quality standards',
              'They reduce repository size',
              'They automatically merge pull requests'
            ],
            correctAnswer: 1,
            explanation: 'Branch protection rules prevent direct pushes to important branches (like main), require pull requests and code reviews, ensure status checks pass, and maintain code quality standards before changes are merged.'
          },
          'q5-3-4': {
            question: 'What should a good commit message include?',
            options: [
              'Only the date and time',
              'A clear, descriptive summary of what changed and why',
              'The developer\'s name only',
              'Random text'
            ],
            correctAnswer: 1,
            explanation: 'A good commit message should include a clear, descriptive summary of what changed and why, helping team members understand the purpose of the change and making it easier to track project history and debug issues.'
          }
        }
      },

      // Level 6: Advanced Mastery
      'lesson-6-1': {
        title: 'Advanced Development Patterns',
        objective: 'Master sophisticated development patterns, architectural decisions, and advanced techniques for building enterprise-scale applications',
        content: `# Advanced Development Patterns

{{name}}, mastering advanced development patterns is what separates good developers from exceptional ones. These patterns enable you to build scalable, maintainable, and robust applications that can grow with your business needs.

## Architectural Patterns

### Micro-Frontend Architecture
\`\`\`
Prompt: "Design a micro-frontend architecture with independent deployable modules, shared component library, and unified routing system"
\`\`\`

Implementation strategy:
- **Module Federation**: Independent frontend applications that work together
- **Shared Dependencies**: Common libraries and design systems
- **Communication Patterns**: Event-driven inter-module communication
- **Deployment Independence**: Teams can deploy their modules separately

\`\`\`javascript
// Micro-frontend implementation with Module Federation
// webpack.config.js for shell application
const ModuleFederationPlugin = require('@module-federation/webpack');

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        dashboard: 'dashboard@http://localhost:3001/remoteEntry.js',
        profile: 'profile@http://localhost:3002/remoteEntry.js',
        analytics: 'analytics@http://localhost:3003/remoteEntry.js'
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        'react-router-dom': { singleton: true }
      }
    })
  ]
};

// Shell application component
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Dashboard = lazy(() => import('dashboard/Dashboard'));
const Profile = lazy(() => import('profile/Profile'));
const Analytics = lazy(() => import('analytics/Analytics'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/analytics/*" element={<Analytics />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
\`\`\`

### Event-Driven Architecture
\`\`\`javascript
// Advanced event system for loose coupling
class EventBus {
  constructor() {
    this.events = new Map();
    this.middleware = [];
    this.errorHandlers = [];
  }
  
  // Add middleware for cross-cutting concerns
  use(middleware) {
    this.middleware.push(middleware);
  }
  
  // Subscribe to events with priority and filtering
  on(eventType, handler, options = {}) {
    const { priority = 0, filter, once = false } = options;
    
    if (!this.events.has(eventType)) {
      this.events.set(eventType, []);
    }
    
    const subscription = {
      handler,
      priority,
      filter,
      once,
      id: this.generateId()
    };
    
    const handlers = this.events.get(eventType);
    handlers.push(subscription);
    handlers.sort((a, b) => b.priority - a.priority);
    
    return () => this.off(eventType, subscription.id);
  }
  
  // Emit events with middleware processing
  async emit(eventType, payload, metadata = {}) {
    const event = {
      type: eventType,
      payload,
      metadata: {
        ...metadata,
        timestamp: new Date(),
        id: this.generateId()
      }
    };
    
    try {
      // Process through middleware
      const processedEvent = await this.processMiddleware(event);
      
      // Get handlers for this event type
      const handlers = this.events.get(eventType) || [];
      
      // Execute handlers
      for (const subscription of handlers) {
        try {
          // Apply filter if specified
          if (subscription.filter && !subscription.filter(processedEvent)) {
            continue;
          }
          
          await subscription.handler(processedEvent);
          
          // Remove if one-time handler
          if (subscription.once) {
            this.off(eventType, subscription.id);
          }
        } catch (error) {
          this.handleError(error, processedEvent, subscription);
        }
      }
    } catch (error) {
      this.handleError(error, event);
    }
  }
  
  async processMiddleware(event) {
    let processedEvent = event;
    
    for (const middleware of this.middleware) {
      processedEvent = await middleware(processedEvent);
    }
    
    return processedEvent;
  }
}

// Usage example
const eventBus = new EventBus();

// Add logging middleware
eventBus.use(async (event) => {
  console.log("Event: event.type\", event.payload);
  return event;
});

// Add analytics middleware
eventBus.use(async (event) => {
  if (event.type.startsWith('user_')) {
    await analytics.track(event.type, event.payload);
  }
  return event;
});

// High-priority system handler
eventBus.on('user_action', handleUserAction, { priority: 10 });

// Filtered handler for specific user types
eventBus.on('user_action', handlePremiumUserAction, {
  filter: (event) => event.payload.user.type === 'premium'
});
\`\`\`

## Advanced State Management

### Complex State Patterns
\`\`\`javascript
// Advanced state management with reducer composition
class StateManager {
  constructor(initialState = {}) {
    this.state = initialState;
    this.reducers = new Map();
    this.middleware = [];
    this.subscribers = new Set();
    this.actionHistory = [];
    this.undoStack = [];
    this.redoStack = [];
  }
  
  // Register domain-specific reducers
  addReducer(domain, reducer) {
    this.reducers.set(domain, reducer);
  }
  
  // Add middleware for side effects
  addMiddleware(middleware) {
    this.middleware.push(middleware);
  }
  
  // Dispatch actions with full lifecycle
  async dispatch(action) {
    const actionWithMetadata = {
      ...action,
      timestamp: new Date(),
      id: this.generateId()
    };
    
    try {
      // Process through middleware
      const processedAction = await this.processMiddleware(actionWithMetadata);
      
      // Save current state for undo functionality
      this.saveStateSnapshot();
      
      // Apply reducers
      const newState = this.applyReducers(processedAction);
      
      // Update state
      const previousState = this.state;
      this.state = newState;
      
      // Record action
      this.actionHistory.push(processedAction);
      
      // Notify subscribers
      this.notifySubscribers(previousState, newState, processedAction);
      
      return newState;
    } catch (error) {
      console.error('Action dispatch failed:', error);
      throw error;
    }
  }
  
  applyReducers(action) {
    let newState = { ...this.state };
    
    for (const [domain, reducer] of this.reducers) {
      const domainState = newState[domain];
      const newDomainState = reducer(domainState, action);
      
      if (newDomainState !== domainState) {
        newState[domain] = newDomainState;
      }
    }
    
    return newState;
  }
  
  // Time travel debugging
  undo() {
    if (this.undoStack.length > 0) {
      const previousState = this.undoStack.pop();
      this.redoStack.push(this.state);
      this.state = previousState;
      this.notifySubscribers(this.state, previousState, { type: 'UNDO' });
    }
  }
  
  redo() {
    if (this.redoStack.length > 0) {
      const nextState = this.redoStack.pop();
      this.undoStack.push(this.state);
      this.state = nextState;
      this.notifySubscribers(this.state, nextState, { type: 'REDO' });
    }
  }
}

// Domain-specific reducers
const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return { ...state, currentUser: action.payload, isAuthenticated: true };
    case 'USER_LOGOUT':
      return { ...state, currentUser: null, isAuthenticated: false };
    case 'USER_UPDATE_PROFILE':
      return {
        ...state,
        currentUser: { ...state.currentUser, ...action.payload }
      };
    default:
      return state;
  }
};

const uiReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UI_TOGGLE_SIDEBAR':
      return { ...state, sidebarOpen: !state.sidebarOpen };
    case 'UI_SET_LOADING':
      return { ...state, loading: action.payload };
    case 'UI_SHOW_NOTIFICATION':
      return {
        ...state,
        notifications: [...(state.notifications || []), action.payload]
      };
    default:
      return state;
  }
};
\`\`\`

### Real-time Synchronization
\`\`\`javascript
// Advanced real-time state synchronization
class RealtimeStateSync {
  constructor(stateManager, supabase) {
    this.stateManager = stateManager;
    this.supabase = supabase;
    this.subscriptions = new Map();
    this.conflictResolver = new ConflictResolver();
  }
  
  // Subscribe to real-time updates for a data domain
  subscribeToUpdates(table, domain) {
    const subscription = this.supabase
      .channel("table_changes\")
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: table
      }, (payload) => {
        this.handleRealTimeUpdate(domain, payload);
      })
      .subscribe();
    
    this.subscriptions.set("table_domain\", subscription);
  }
  
  async handleRealTimeUpdate(domain, payload) {
    const { eventType, new: newRecord, old: oldRecord } = payload;
    
    try {
      // Check for conflicts
      const conflict = await this.conflictResolver.checkForConflict(
        domain,
        oldRecord,
        newRecord,
        this.stateManager.getState()[domain]
      );
      
      if (conflict) {
        const resolution = await this.conflictResolver.resolve(conflict);
        await this.applyResolution(domain, resolution);
      } else {
        // No conflict, apply update directly
        await this.stateManager.dispatch({
          type: "REALTIME_eventType.toUpperCase()\",
          domain,
          payload: newRecord
        });
      }
    } catch (error) {
      console.error('Real-time update failed:', error);
      this.handleSyncError(domain, error);
    }
  }
}

// Conflict resolution strategies
class ConflictResolver {
  strategies = {
    'last_write_wins': (local, remote) => remote,
    'first_write_wins': (local, remote) => local,
    'merge_changes': (local, remote) => ({ ...local, ...remote }),
    'user_decides': (local, remote) => this.promptUser(local, remote)
  };
  
  async resolve(conflict) {
    const strategy = this.selectStrategy(conflict);
    return this.strategies[strategy](conflict.local, conflict.remote);
  }
  
  selectStrategy(conflict) {
    // Intelligent strategy selection based on data type and context
    if (conflict.field === 'lastModified') {
      return 'last_write_wins';
    } else if (conflict.type === 'user_preference') {
      return 'merge_changes';
    } else {
      return 'user_decides';
    }
  }
}
\`\`\`

## Performance Optimization Patterns

### Advanced Caching Strategies
\`\`\`javascript
// Multi-level intelligent caching
class IntelligentCacheManager {
  constructor() {
    this.layers = [
      new MemoryCache({ maxSize: 100, ttl: 5 * 60 * 1000 }),
      new LocalStorageCache({ maxSize: 500, ttl: 30 * 60 * 1000 }),
      new IndexedDBCache({ maxSize: 1000, ttl: 24 * 60 * 60 * 1000 }),
      new ServiceWorkerCache({ maxSize: 2000, ttl: 7 * 24 * 60 * 60 * 1000 })
    ];
    
    this.strategies = {
      'cache-first': this.cacheFirst.bind(this),
      'network-first': this.networkFirst.bind(this),
      'cache-only': this.cacheOnly.bind(this),
      'network-only': this.networkOnly.bind(this),
      'stale-while-revalidate': this.staleWhileRevalidate.bind(this)
    };
  }
  
  async get(key, options = {}) {
    const { strategy = 'cache-first', fetchFn, priority = 'normal' } = options;
    
    return this.strategies[strategy](key, fetchFn, { priority });
  }
  
  async cacheFirst(key, fetchFn, options) {
    // Try each cache layer in order
    for (const cache of this.layers) {
      const cached = await cache.get(key);
      if (cached && !this.isStale(cached, options)) {
        // Promote to higher priority cache
        await this.promoteToHigherCache(key, cached);
        return cached.data;
      }
    }
    
    // Fetch from network and cache
    const data = await fetchFn();
    await this.setInAllLayers(key, data, options);
    return data;
  }
  
  async staleWhileRevalidate(key, fetchFn, options) {
    let cached = null;
    
    // Get from cache if available
    for (const cache of this.layers) {
      cached = await cache.get(key);
      if (cached) break;
    }
    
    // Start background refresh if stale
    if (cached && this.isStale(cached, options)) {
      this.backgroundRefresh(key, fetchFn, options);
    } else if (!cached) {
      // No cache, fetch immediately
      const data = await fetchFn();
      await this.setInAllLayers(key, data, options);
      return data;
    }
    
    return cached ? cached.data : await fetchFn();
  }
  
  async backgroundRefresh(key, fetchFn, options) {
    try {
      const data = await fetchFn();
      await this.setInAllLayers(key, data, options);
    } catch (error) {
      console.warn('Background refresh failed:', error);
    }
  }
}
\`\`\`

### Advanced Code Splitting
\`\`\`javascript
// Intelligent code splitting with preloading
class CodeSplitManager {
  constructor() {
    this.preloadQueue = new Set();
    this.loadedModules = new Map();
    this.loadingPromises = new Map();
  }
  
  // Smart preloading based on user behavior
  async preloadRoute(routePath, priority = 'low') {
    if (this.loadedModules.has(routePath)) return;
    
    const preloadTask = {
      path: routePath,
      priority,
      timestamp: Date.now()
    };
    
    if (priority === 'high') {
      await this.loadModule(routePath);
    } else {
      this.schedulePreload(preloadTask);
    }
  }
  
  schedulePreload(task) {
    // Use requestIdleCallback for low-priority preloading
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => this.loadModule(task.path), { timeout: 5000 });
    } else {
      setTimeout(() => this.loadModule(task.path), 1000);
    }
  }
  
  async loadModule(path) {
    if (this.loadingPromises.has(path)) {
      return this.loadingPromises.get(path);
    }
    
    const loadPromise = this.dynamicImport(path);
    this.loadingPromises.set(path, loadPromise);
    
    try {
      const module = await loadPromise;
      this.loadedModules.set(path, module);
      this.loadingPromises.delete(path);
      return module;
    } catch (error) {
      this.loadingPromises.delete(path);
      throw error;
    }
  }
  
  async dynamicImport(path) {
    // Route-based dynamic imports with error boundaries
    switch (path) {
      case '/dashboard':
        return import('./routes/Dashboard');
      case '/analytics':
        return import('./routes/Analytics');
      case '/settings':
        return import('./routes/Settings');
      default:
        throw new Error("Unknown route: path\");
    }
  }
}

// React integration with preloading
function useIntelligentRouting() {
  const codeSplitManager = useMemo(() => new CodeSplitManager(), []);
  const location = useLocation();
  
  useEffect(() => {
    // Preload likely next routes based on current location
    const nextRoutes = predictNextRoutes(location.pathname);
    nextRoutes.forEach(route => {
      codeSplitManager.preloadRoute(route, 'low');
    });
  }, [location, codeSplitManager]);
  
  const preloadRoute = useCallback((path, priority = 'low') => {
    codeSplitManager.preloadRoute(path, priority);
  }, [codeSplitManager]);
  
  return { preloadRoute };
}
\`\`\`

## Advanced Testing Patterns

### Comprehensive Testing Strategy
\`\`\`
Prompt: "Set up comprehensive testing with unit tests, integration tests, E2E tests, visual regression tests, and performance benchmarks"
\`\`\`

Testing architecture includes:
- **Unit Testing**: Individual component and function testing
- **Integration Testing**: API and database integration verification
- **E2E Testing**: Complete user workflow validation
- **Visual Regression**: UI consistency across changes
- **Performance Testing**: Load and stress testing

\`\`\`javascript
// Advanced testing utilities
class TestingFramework {
  constructor() {
    this.testSuites = new Map();
    this.fixtures = new Map();
    this.mocks = new Map();
  }
  
  createTestSuite(name, config) {
    const suite = {
      name,
      config,
      tests: [],
      setup: [],
      teardown: [],
      beforeEach: [],
      afterEach: []
    };
    
    this.testSuites.set(name, suite);
    return suite;
  }
  
  async runVisualRegressionTest(component, scenarios) {
    const results = [];
    
    for (const scenario of scenarios) {
      const screenshot = await this.captureScreenshot(component, scenario);
      const baseline = await this.getBaseline(component, scenario.name);
      
      if (baseline) {
        const diff = await this.compareImages(screenshot, baseline);
        results.push({
          scenario: scenario.name,
          passed: diff.percentage < 0.1, // Less than 0.1% difference
          diff
        });
      } else {
        await this.saveBaseline(component, scenario.name, screenshot);
        results.push({
          scenario: scenario.name,
          passed: true,
          message: 'Baseline created'
        });
      }
    }
    
    return results;
  }
  
  async runPerformanceBenchmark(testFunction, iterations = 1000) {
    const times = [];
    
    // Warm up
    for (let i = 0; i < 10; i++) {
      await testFunction();
    }
    
    // Measure
    for (let i = 0; i < iterations; i++) {
      const start = performance.now();
      await testFunction();
      const end = performance.now();
      times.push(end - start);
    }
    
    return {
      min: Math.min(...times),
      max: Math.max(...times),
      avg: times.reduce((a, b) => a + b, 0) / times.length,
      median: times.sort()[Math.floor(times.length / 2)],
      p95: times.sort()[Math.floor(times.length * 0.95)],
      p99: times.sort()[Math.floor(times.length * 0.99)]
    };
  }
}
\`\`\`

Remember {{name}}, advanced patterns are tools for solving complex problems. Use them judiciously - not every application needs micro-frontends or complex state management. Choose patterns that solve real problems and add genuine value to your project.`,
        learningObjectives: {
          0: 'Implement sophisticated architectural patterns for scalable applications',
          1: 'Design advanced state management systems with real-time synchronization',
          2: 'Apply intelligent caching and performance optimization strategies',
          3: 'Build comprehensive testing frameworks with multiple testing types',
          4: 'Make informed architectural decisions based on project requirements'
        },
        badgeName: 'Architecture Master',
        srcodeCommentary: '{{name}}, you\'ve just ascended to the architectural pantheon! These patterns are like having a Swiss Army knife designed by NASA engineers - incredibly powerful, but use them wisely. Remember: the best architecture is the one that solves your actual problems, not the one that looks coolest on your resume. Build for today, design for tomorrow! 🏗️🚀',
        quizQuestions: {
          'q6-1-1': {
            question: 'What is the main benefit of micro-frontend architecture?',
            options: [
              'It makes applications faster',
              'It allows independent development and deployment of frontend modules',
              'It reduces the amount of code needed',
              'It eliminates the need for testing'
            ],
            correctAnswer: 1,
            explanation: 'Micro-frontend architecture allows teams to develop, test, and deploy frontend modules independently, enabling better team autonomy, technology diversity, and reduced deployment risks.'
          },
          'q6-1-2': {
            question: 'What is the primary purpose of an event-driven architecture?',
            options: [
              'To make applications run faster',
              'To reduce memory usage',
              'To enable loose coupling between application components',
              'To simplify the user interface'
            ],
            correctAnswer: 2,
            explanation: 'Event-driven architecture enables loose coupling between components by allowing them to communicate through events rather than direct calls, making the system more flexible, scalable, and maintainable.'
          },
          'q6-1-3': {
            question: 'When should you use the "stale-while-revalidate" caching strategy?',
            options: [
              'When you need the most up-to-date data always',
              'When you want to serve cached content quickly while updating it in the background',
              'When you want to cache everything permanently',
              'When you don\'t want to use caching at all'
            ],
            correctAnswer: 1,
            explanation: 'Stale-while-revalidate serves cached content immediately for fast user experience while updating the cache in the background, providing a balance between performance and data freshness.'
          },
          'q6-1-4': {
            question: 'What is the main advantage of visual regression testing?',
            options: [
              'It tests application logic',
              'It automatically detects unintended UI changes across code modifications',
              'It improves application performance',
              'It reduces the amount of code needed'
            ],
            correctAnswer: 1,
            explanation: 'Visual regression testing automatically detects unintended changes to the user interface by comparing screenshots across different versions, helping maintain visual consistency and catch UI bugs.'
          }
        }
      },

      'lesson-6-2': {
        title: 'Enterprise-Scale Applications',
        objective: 'Build production-ready applications that can scale to millions of users with enterprise-grade reliability, security, and performance',
        content: `# Enterprise-Scale Applications

{{name}}, building applications that can handle millions of users requires a fundamental shift in thinking. Every decision you make - from architecture to algorithms - must consider scale, reliability, and maintainability at an enterprise level.

## Scalability Architecture

### Horizontal vs Vertical Scaling
Understanding when and how to scale your application:

**Vertical Scaling (Scale Up):**
- **Advantages**: Simpler to implement, no application changes needed
- **Disadvantages**: Hardware limits, single point of failure
- **Use Cases**: Monolithic applications, development environments
- **Implementation**: Upgrade CPU, RAM, storage on existing servers

**Horizontal Scaling (Scale Out):**
- **Advantages**: Unlimited scaling potential, fault tolerance
- **Disadvantages**: Complex application architecture, data consistency challenges
- **Use Cases**: High-traffic production systems, distributed applications
- **Implementation**: Add more servers, load balancing, distributed databases

\`\`\`javascript
// Load balancer implementation for horizontal scaling
class LoadBalancer {
  constructor() {
    this.servers = new Map();
    this.healthChecks = new Map();
    this.algorithms = {
      'round-robin': this.roundRobin.bind(this),
      'least-connections': this.leastConnections.bind(this),
      'weighted': this.weightedRoundRobin.bind(this),
      'ip-hash': this.ipHash.bind(this)
    };
    this.currentAlgorithm = 'round-robin';
  }
  
  addServer(id, config) {
    this.servers.set(id, {
      ...config,
      connections: 0,
      healthy: true,
      weight: config.weight || 1,
      lastUsed: 0
    });
    
    // Start health checking
    this.startHealthCheck(id);
  }
  
  async getServer(request) {
    const healthyServers = Array.from(this.servers.entries())
      .filter(([_, server]) => server.healthy);
    
    if (healthyServers.length === 0) {
      throw new Error('No healthy servers available');
    }
    
    return this.algorithms[this.currentAlgorithm](healthyServers, request);
  }
  
  roundRobin(servers, request) {
    // Find server with oldest lastUsed time
    const sortedServers = servers.sort(([_, a], [__, b]) => a.lastUsed - b.lastUsed);
    const [serverId, server] = sortedServers[0];
    
    server.lastUsed = Date.now();
    server.connections++;
    
    return { id: serverId, ...server };
  }
  
  leastConnections(servers, request) {
    // Find server with fewest active connections
    const sortedServers = servers.sort(([_, a], [__, b]) => a.connections - b.connections);
    const [serverId, server] = sortedServers[0];
    
    server.connections++;
    return { id: serverId, ...server };
  }
  
  async startHealthCheck(serverId) {
    const server = this.servers.get(serverId);
    
    const healthCheck = setInterval(async () => {
      try {
        const response = await fetch("server.url/health\", {
          timeout: 5000
        });
        
        server.healthy = response.ok;
      } catch (error) {
        server.healthy = false;
        console.warn("Server serverId health check failed:", error);
      }
    }, 30000); // Check every 30 seconds
    
    this.healthChecks.set(serverId, healthCheck);
  }
}
\`\`\`

### Database Scaling Strategies
\`\`\`
Prompt: "Design a database architecture that can handle 10 million users with read replicas, sharding, and caching layers"
\`\`\`

Implementation includes:
- **Read Replicas**: Distribute read operations across multiple database instances
- **Sharding**: Partition data across multiple databases
- **Caching**: Multi-layer caching to reduce database load
- **Connection Pooling**: Efficient database connection management

\`\`\`javascript
// Database scaling implementation
class DatabaseManager {
  constructor() {
    this.primary = null;
    this.readReplicas = [];
    this.shards = new Map();
    this.cache = new CacheManager();
    this.connectionPools = new Map();
  }
  
  async setupSharding(config) {
    for (const shard of config.shards) {
      const pool = new ConnectionPool({
        host: shard.host,
        database: shard.database,
        poolSize: shard.poolSize || 20
      });
      
      this.connectionPools.set(shard.id, pool);
      this.shards.set(shard.id, {
        ...shard,
        pool,
        keyRange: shard.keyRange
      });
    }
  }
  
  getShardForKey(key) {
    const hash = this.hashFunction(key);
    
    for (const [shardId, shard] of this.shards) {
      const [min, max] = shard.keyRange;
      if (hash >= min && hash <= max) {
        return shard;
      }
    }
    
    throw new Error("No shard found for key: key\");
  }
  
  async read(query, params, options = {}) {
    const { useCache = true, preferReplica = true } = options;
    
    // Try cache first
    if (useCache) {
      const cacheKey = this.generateCacheKey(query, params);
      const cached = await this.cache.get(cacheKey);
      if (cached) return cached;
    }
    
    // Choose database instance
    const db = preferReplica && this.readReplicas.length > 0
      ? this.selectReadReplica()
      : this.primary;
    
    const result = await db.execute(query, params);
    
    // Cache the result
    if (useCache) {
      const cacheKey = this.generateCacheKey(query, params);
      await this.cache.set(cacheKey, result, { ttl: 300000 }); // 5 minutes
    }
    
    return result;
  }
  
  async write(query, params, options = {}) {
    const { shardKey } = options;
    
    let db = this.primary;
    
    // Use sharding if shard key provided
    if (shardKey) {
      const shard = this.getShardForKey(shardKey);
      db = shard.pool;
    }
    
    const result = await db.execute(query, params);
    
    // Invalidate related cache entries
    await this.invalidateCache(query, params);
    
    return result;
  }
  
  selectReadReplica() {
    // Select least loaded replica
    return this.readReplicas.reduce((least, current) => 
      current.activeConnections < least.activeConnections ? current : least
    );
  }
}
\`\`\`

## High Availability & Fault Tolerance

### Circuit Breaker Pattern
\`\`\`javascript
// Circuit breaker for service resilience
class CircuitBreaker {
  constructor(options = {}) {
    this.failureThreshold = options.failureThreshold || 5;
    this.resetTimeout = options.resetTimeout || 60000;
    this.monitoringPeriod = options.monitoringPeriod || 30000;
    
    this.state = 'CLOSED'; // CLOSED, OPEN, HALF_OPEN
    this.failureCount = 0;
    this.lastFailureTime = null;
    this.successCount = 0;
    this.totalRequests = 0;
  }
  
  async execute(operation, fallback) {
    if (this.state === 'OPEN') {
      if (Date.now() - this.lastFailureTime >= this.resetTimeout) {
        this.state = 'HALF_OPEN';
        this.failureCount = 0;
      } else {
        return this.handleFallback(fallback);
      }
    }
    
    try {
      const result = await operation();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      return this.handleFallback(fallback, error);
    }
  }
  
  onSuccess() {
    this.successCount++;
    this.totalRequests++;
    
    if (this.state === 'HALF_OPEN') {
      if (this.successCount >= 3) {
        this.state = 'CLOSED';
        this.failureCount = 0;
      }
    }
  }
  
  onFailure() {
    this.failureCount++;
    this.totalRequests++;
    this.lastFailureTime = Date.now();
    
    if (this.failureCount >= this.failureThreshold) {
      this.state = 'OPEN';
    }
  }
  
  async handleFallback(fallback, error) {
    if (typeof fallback === 'function') {
      return await fallback(error);
    }
    
    if (fallback !== undefined) {
      return fallback;
    }
    
    throw new Error('Service unavailable');
  }
  
  getMetrics() {
    return {
      state: this.state,
      failureCount: this.failureCount,
      successCount: this.successCount,
      totalRequests: this.totalRequests,
      failureRate: this.totalRequests > 0 ? this.failureCount / this.totalRequests : 0
    };
  }
}

// Usage with external services
const paymentServiceBreaker = new CircuitBreaker({
  failureThreshold: 3,
  resetTimeout: 30000
});

async function processPayment(paymentData) {
  return paymentServiceBreaker.execute(
    () => paymentService.charge(paymentData),
    () => ({ success: false, message: 'Payment service unavailable, please try again later' })
  );
}
\`\`\`

### Graceful Degradation
\`\`\`javascript
// Graceful degradation system
class GracefulDegradationManager {
  constructor() {
    this.features = new Map();
    this.fallbacks = new Map();
    this.healthChecks = new Map();
  }
  
  registerFeature(name, config) {
    this.features.set(name, {
      ...config,
      enabled: true,
      healthStatus: 'healthy',
      fallbackLevel: 0
    });
    
    if (config.healthCheck) {
      this.startHealthMonitoring(name);
    }
  }
  
  registerFallback(featureName, level, fallbackFn) {
    if (!this.fallbacks.has(featureName)) {
      this.fallbacks.set(featureName, new Map());
    }
    
    this.fallbacks.get(featureName).set(level, fallbackFn);
  }
  
  async executeFeature(name, operation, context = {}) {
    const feature = this.features.get(name);
    
    if (!feature || !feature.enabled) {
      return this.executeFallback(name, feature?.fallbackLevel || 0, context);
    }
    
    try {
      const result = await operation();
      this.recordSuccess(name);
      return result;
    } catch (error) {
      this.recordFailure(name, error);
      return this.executeFallback(name, feature.fallbackLevel, context, error);
    }
  }
  
  async executeFallback(featureName, level, context, error) {
    const featureFallbacks = this.fallbacks.get(featureName);
    
    if (!featureFallbacks || !featureFallbacks.has(level)) {
      // No fallback available, try next level
      if (level < 3) {
        return this.executeFallback(featureName, level + 1, context, error);
      } else {
        throw new Error("No fallback available for feature: featureName\");
      }
    }
    
    const fallbackFn = featureFallbacks.get(level);
    return await fallbackFn(context, error);
  }
  
  recordFailure(featureName, error) {
    const feature = this.features.get(featureName);
    feature.failureCount = (feature.failureCount || 0) + 1;
    feature.lastError = error;
    
    // Degrade feature if too many failures
    if (feature.failureCount >= 5) {
      feature.fallbackLevel = Math.min(feature.fallbackLevel + 1, 3);
    }
  }
  
  recordSuccess(featureName) {
    const feature = this.features.get(featureName);
    feature.successCount = (feature.successCount || 0) + 1;
    
    // Recover feature if enough successes
    if (feature.successCount >= 10 && feature.fallbackLevel > 0) {
      feature.fallbackLevel = Math.max(feature.fallbackLevel - 1, 0);
      feature.failureCount = 0;
    }
  }
}

// Usage example
const degradationManager = new GracefulDegradationManager();

// Register features with fallbacks
degradationManager.registerFeature('recommendations', {
  healthCheck: () => recommendationService.health()
});

// Level 0: Full AI recommendations
degradationManager.registerFallback('recommendations', 0, async (context) => {
  return await aiRecommendationService.getRecommendations(context.userId);
});

// Level 1: Simple algorithmic recommendations
degradationManager.registerFallback('recommendations', 1, async (context) => {
  return await simpleRecommendationService.getRecommendations(context.userId);
});

// Level 2: Popular items only
degradationManager.registerFallback('recommendations', 2, async (context) => {
  return await getPopularItems();
});

// Level 3: Static recommendations
degradationManager.registerFallback('recommendations', 3, async (context) => {
  return DEFAULT_RECOMMENDATIONS;
});
\`\`\`

## Performance at Scale

### Advanced Caching Strategies
\`\`\`javascript
// Enterprise-grade caching system
class EnterpriseCacheManager {
  constructor() {
    this.layers = {
      l1: new MemoryCache({ maxSize: 1000, ttl: 60000 }),
      l2: new RedisCache({ host: 'redis-cluster', ttl: 300000 }),
      l3: new CDNCache({ provider: 'cloudflare', ttl: 3600000 })
    };
    
    this.strategies = new Map();
    this.analytics = new CacheAnalytics();
  }
  
  async get(key, strategy = 'default') {
    const strategyConfig = this.strategies.get(strategy) || this.getDefaultStrategy();
    
    for (const layerName of strategyConfig.layers) {
      const layer = this.layers[layerName];
      const startTime = performance.now();
      
      try {
        const result = await layer.get(key);
        
        if (result) {
          // Record hit
          this.analytics.recordHit(layerName, performance.now() - startTime);
          
          // Promote to higher layers if configured
          if (strategyConfig.promote) {
            await this.promoteToHigherLayers(key, result, layerName);
          }
          
          return result;
        }
      } catch (error) {
        this.analytics.recordError(layerName, error);
      }
    }
    
    // Cache miss
    this.analytics.recordMiss(key);
    return null;
  }
  
  async set(key, value, options = {}) {
    const strategy = options.strategy || 'default';
    const strategyConfig = this.strategies.get(strategy);
    
    // Set in appropriate layers based on strategy
    const promises = strategyConfig.layers.map(layerName => {
      const layer = this.layers[layerName];
      return layer.set(key, value, {
        ttl: options.ttl || strategyConfig.ttl[layerName]
      });
    });
    
    await Promise.allSettled(promises);
  }
  
  registerStrategy(name, config) {
    this.strategies.set(name, {
      layers: config.layers || ['l1', 'l2'],
      ttl: config.ttl || { l1: 60000, l2: 300000, l3: 3600000 },
      promote: config.promote !== false,
      compress: config.compress || false
    });
  }
  
  async warmup(keys, strategy = 'default') {
    const warmupPromises = keys.map(async (key) => {
      try {
        const value = await this.fetchFromSource(key);
        await this.set(key, value, { strategy });
      } catch (error) {
        console.warn("Warmup failed for key key:", error);
      }
    });
    
    await Promise.allSettled(warmupPromises);
  }
}
\`\`\`

### Database Performance Optimization
\`\`\`
Prompt: "Optimize database performance for millions of users with query optimization, indexing strategies, and connection pooling"
\`\`\`

Optimization techniques:
- **Query Optimization**: Analyze and optimize slow queries
- **Indexing Strategy**: Strategic index creation for common queries
- **Connection Pooling**: Efficient database connection management
- **Read Replicas**: Distribute read load across multiple instances

## Monitoring & Observability

### Comprehensive Monitoring System
\`\`\`javascript
// Enterprise monitoring and alerting
class MonitoringSystem {
  constructor() {
    this.metrics = new MetricsCollector();
    this.alerts = new AlertManager();
    this.dashboards = new DashboardManager();
    this.logging = new StructuredLogger();
  }
  
  async trackMetric(name, value, tags = {}) {
    const metric = {
      name,
      value,
      timestamp: Date.now(),
      tags: {
        ...tags,
        environment: process.env.NODE_ENV,
        service: process.env.SERVICE_NAME,
        version: process.env.APP_VERSION
      }
    };
    
    await this.metrics.record(metric);
    
    // Check for alert conditions
    await this.checkAlerts(metric);
  }
  
  async checkAlerts(metric) {
    const rules = this.alerts.getRulesForMetric(metric.name);
    
    for (const rule of rules) {
      const shouldAlert = await this.evaluateAlertRule(rule, metric);
      
      if (shouldAlert) {
        await this.triggerAlert(rule, metric);
      }
    }
  }
  
  async evaluateAlertRule(rule, metric) {
    const { condition, threshold, timeWindow } = rule;
    
    // Get historical data for the time window
    const historicalData = await this.metrics.getHistoricalData(
      metric.name,
      Date.now() - timeWindow,
      Date.now()
    );
    
    switch (condition) {
      case 'average_above':
        const average = historicalData.reduce((sum, m) => sum + m.value, 0) / historicalData.length;
        return average > threshold;
      
      case 'spike':
        const recentAverage = historicalData.slice(-5).reduce((sum, m) => sum + m.value, 0) / 5;
        const previousAverage = historicalData.slice(-15, -5).reduce((sum, m) => sum + m.value, 0) / 10;
        return recentAverage > previousAverage * threshold;
      
      case 'anomaly':
        return await this.detectAnomaly(historicalData, metric.value);
      
      default:
        return false;
    }
  }
  
  async triggerAlert(rule, metric) {
    const alert = {
      id: this.generateAlertId(),
      rule: rule.name,
      metric: metric.name,
      value: metric.value,
      threshold: rule.threshold,
      severity: rule.severity,
      timestamp: Date.now(),
      tags: metric.tags
    };
    
    // Send to configured channels
    for (const channel of rule.channels) {
      await this.sendAlert(channel, alert);
    }
    
    // Log alert
    this.logging.alert('Alert triggered', alert);
  }
}
\`\`\`

Remember {{name}}, enterprise scale is not just about handling more users - it's about building systems that remain reliable, maintainable, and performant as they grow. Every architectural decision should consider the long-term implications of scale.`,
        learningObjectives: {
          0: 'Design scalable architectures that can handle millions of users',
          1: 'Implement high availability and fault tolerance patterns',
          2: 'Apply advanced performance optimization techniques for enterprise scale',
          3: 'Build comprehensive monitoring and observability systems',
          4: 'Make informed decisions about infrastructure and architecture trade-offs'
        },
        badgeName: 'Enterprise Architect',
        srcodeCommentary: '{{name}}, you\'ve just unlocked the secrets of building applications that can handle Black Friday traffic while your competitors crash and burn! Enterprise scale is like conducting a symphony orchestra - every component must work in perfect harmony, even when millions of users are trying to use your app at once. Remember: hope is not a scaling strategy! 🏢⚡',
        quizQuestions: {
          'q6-2-1': {
            question: 'What is the main advantage of horizontal scaling over vertical scaling?',
            options: [
              'It\'s always cheaper',
              'It provides unlimited scaling potential and fault tolerance',
              'It requires less configuration',
              'It uses less memory'
            ],
            correctAnswer: 1,
            explanation: 'Horizontal scaling provides unlimited scaling potential by adding more servers rather than being limited by single machine capacity, and offers better fault tolerance since failure of one server doesn\'t bring down the entire system.'
          },
          'q6-2-2': {
            question: 'What is the purpose of a circuit breaker pattern in microservices?',
            options: [
              'To reduce electricity usage',
              'To prevent cascading failures by stopping requests to failing services',
              'To improve user interface design',
              'To manage database connections'
            ],
            correctAnswer: 1,
            explanation: 'The circuit breaker pattern prevents cascading failures by monitoring service calls and stopping requests to failing services, allowing them time to recover while providing fallback responses.'
          },
          'q6-2-3': {
            question: 'Why is database sharding used in enterprise applications?',
            options: [
              'To make databases smaller',
              'To distribute data across multiple databases for better performance and scalability',
              'To improve security',
              'To reduce costs'
            ],
            correctAnswer: 1,
            explanation: 'Database sharding distributes data across multiple database instances, allowing the system to handle larger datasets and higher query volumes by parallelizing operations across multiple servers.'
          },
          'q6-2-4': {
            question: 'What is graceful degradation in enterprise systems?',
            options: [
              'Slowly shutting down the system',
              'Reducing functionality to maintain core services when components fail',
              'Making the user interface simpler',
              'Reducing the number of users'
            ],
            correctAnswer: 1,
            explanation: 'Graceful degradation reduces functionality to maintain core services when system components fail, ensuring users can still access essential features even when some advanced features are unavailable.'
          }
        }
      },

      'lesson-6-3': {
        title: 'Future-Proofing & Innovation',
        objective: 'Master emerging technologies, future-proofing strategies, and innovation techniques to stay ahead in the rapidly evolving web development landscape',
        content: `# Future-Proofing & Innovation

{{name}}, the only constant in web development is change. Mastering the art of future-proofing your applications and staying ahead of technological trends is what separates great developers from those who get left behind.

## Emerging Technology Integration

### Web Assembly (WASM) Integration
\`\`\`
Prompt: "Implement WebAssembly module for high-performance image processing with fallback to JavaScript for unsupported browsers"
\`\`\`

WebAssembly brings near-native performance to web applications:

\`\`\`javascript
// WebAssembly integration with fallback
class PerformanceOptimizedProcessor {
  constructor() {
    this.wasmModule = null;
    this.wasmSupported = this.checkWasmSupport();
    this.fallbackProcessor = new JSProcessor();
  }
  
  async initialize() {
    if (this.wasmSupported) {
      try {
        this.wasmModule = await this.loadWasmModule();
        console.log('WebAssembly module loaded successfully');
      } catch (error) {
        console.warn('Failed to load WASM module, falling back to JS:', error);
        this.wasmSupported = false;
      }
    }
  }
  
  async loadWasmModule() {
    const wasmBinary = await fetch('/wasm/processor.wasm');
    const wasmArrayBuffer = await wasmBinary.arrayBuffer();
    
    const wasmModule = await WebAssembly.instantiate(wasmArrayBuffer, {
      env: {
        memory: new WebAssembly.Memory({ initial: 256 }),
        abort: () => { throw new Error('WASM execution aborted'); }
      }
    });
    
    return wasmModule.instance.exports;
  }
  
  async processImage(imageData) {
    const startTime = performance.now();
    
    let result;
    if (this.wasmSupported && this.wasmModule) {
      result = await this.processWithWasm(imageData);
    } else {
      result = await this.fallbackProcessor.process(imageData);
    }
    
    const processingTime = performance.now() - startTime;
    
    // Track performance metrics
    await this.trackPerformance({
      method: this.wasmSupported ? 'wasm' : 'javascript',
      processingTime,
      imageSize: imageData.length
    });
    
    return result;
  }
  
  async processWithWasm(imageData) {
    // Allocate memory in WASM
    const inputPtr = this.wasmModule.malloc(imageData.length);
    const outputPtr = this.wasmModule.malloc(imageData.length);
    
    try {
      // Copy data to WASM memory
      const wasmMemory = new Uint8Array(this.wasmModule.memory.buffer);
      wasmMemory.set(imageData, inputPtr);
      
      // Call WASM function
      const result = this.wasmModule.process_image(
        inputPtr,
        outputPtr,
        imageData.length
      );
      
      if (result !== 0) {
        throw new Error('WASM processing failed');
      }
      
      // Copy result back
      const outputData = wasmMemory.slice(outputPtr, outputPtr + imageData.length);
      return new Uint8Array(outputData);
      
    } finally {
      // Clean up memory
      this.wasmModule.free(inputPtr);
      this.wasmModule.free(outputPtr);
    }
  }
  
  checkWasmSupport() {
    return typeof WebAssembly === 'object' &&
           typeof WebAssembly.instantiate === 'function';
  }
}
\`\`\`

### Progressive Web App (PWA) Advanced Features
\`\`\`javascript
// Advanced PWA capabilities
class AdvancedPWAManager {
  constructor() {
    this.serviceWorker = null;
    this.pushManager = null;
    this.backgroundSync = new BackgroundSyncManager();
    this.offlineManager = new OfflineManager();
  }
  
  async initialize() {
    if ('serviceWorker' in navigator) {
      await this.registerServiceWorker();
      await this.setupPushNotifications();
      await this.setupBackgroundSync();
      await this.setupPeriodicBackgroundSync();
    }
  }
  
  async registerServiceWorker() {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/',
        updateViaCache: 'none'
      });
      
      this.serviceWorker = registration;
      
      // Handle updates
      registration.addEventListener('updatefound', () => {
        this.handleServiceWorkerUpdate(registration.installing);
      });
      
      // Listen for messages from service worker
      navigator.serviceWorker.addEventListener('message', (event) => {
        this.handleServiceWorkerMessage(event);
      });
      
    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  }
  
  async setupPushNotifications() {
    if ('PushManager' in window && 'Notification' in window) {
      const permission = await Notification.requestPermission();
      
      if (permission === 'granted') {
        const subscription = await this.serviceWorker.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: this.urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
        });
        
        // Send subscription to server
        await this.sendSubscriptionToServer(subscription);
      }
    }
  }
  
  async setupBackgroundSync() {
    if ('serviceWorker' in navigator && 'sync' in window.ServiceWorkerRegistration.prototype) {
      // Register background sync for offline actions
      await this.serviceWorker.sync.register('background-sync');
      
      // Queue actions for background sync
      this.backgroundSync.initialize();
    }
  }
  
  async setupPeriodicBackgroundSync() {
    if ('serviceWorker' in navigator && 'periodicSync' in window.ServiceWorkerRegistration.prototype) {
      const status = await navigator.permissions.query({ name: 'periodic-background-sync' });
      
      if (status.state === 'granted') {
        await this.serviceWorker.periodicSync.register('data-sync', {
          minInterval: 24 * 60 * 60 * 1000 // 24 hours
        });
      }
    }
  }
  
  async handleServiceWorkerUpdate(newWorker) {
    // Show update notification to user
    const updateAvailable = new CustomEvent('updateAvailable', {
      detail: { newWorker }
    });
    
    window.dispatchEvent(updateAvailable);
    
    // Skip waiting when user confirms update
    newWorker.addEventListener('statechange', () => {
      if (newWorker.state === 'installed') {
        newWorker.postMessage({ action: 'skipWaiting' });
        window.location.reload();
      }
    });
  }
}

// Service Worker code (sw.js)
class AdvancedServiceWorker {
  constructor() {
    this.cacheName = 'app-v1';
    this.offlinePages = ['/offline', '/'];
    this.strategies = new Map();
    
    this.setupEventListeners();
    this.setupCacheStrategies();
  }
  
  setupCacheStrategies() {
    // Cache first for app shell
    this.strategies.set('/app-shell/', 'cache-first');
    
    // Network first for API calls
    this.strategies.set('/api/', 'network-first');
    
    // Stale while revalidate for images
    this.strategies.set(/\.(png|jpg|jpeg|svg|gif)$/, 'stale-while-revalidate');
    
    // Cache only for static assets
    this.strategies.set(/\.(css|js)$/, 'cache-first');
  }
  
  setupEventListeners() {
    self.addEventListener('install', (event) => {
      event.waitUntil(this.handleInstall());
    });
    
    self.addEventListener('activate', (event) => {
      event.waitUntil(this.handleActivate());
    });
    
    self.addEventListener('fetch', (event) => {
      event.respondWith(this.handleFetch(event.request));
    });
    
    self.addEventListener('sync', (event) => {
      if (event.tag === 'background-sync') {
        event.waitUntil(this.handleBackgroundSync());
      }
    });
    
    self.addEventListener('periodicsync', (event) => {
      if (event.tag === 'data-sync') {
        event.waitUntil(this.handlePeriodicSync());
      }
    });
    
    self.addEventListener('push', (event) => {
      event.waitUntil(this.handlePushNotification(event));
    });
  }
  
  async handleBackgroundSync() {
    // Process queued actions when back online
    const queuedActions = await this.getQueuedActions();
    
    for (const action of queuedActions) {
      try {
        await this.processAction(action);
        await this.removeFromQueue(action.id);
      } catch (error) {
        console.error('Background sync action failed:', error);
      }
    }
  }
  
  async handlePeriodicSync() {
    // Sync critical data in background
    try {
      await fetch('/api/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ timestamp: Date.now() })
      });
    } catch (error) {
      console.error('Periodic sync failed:', error);
    }
  }
}
\`\`\`

## AI and Machine Learning Integration

### Client-side ML with TensorFlow.js
\`\`\`
Prompt: "Implement client-side machine learning for real-time content recommendation and user behavior prediction using TensorFlow.js"
\`\`\`

\`\`\`javascript
// Client-side ML implementation
class ClientSideMLManager {
  constructor() {
    this.models = new Map();
    this.tensorflowReady = false;
    this.modelCache = new ModelCache();
  }
  
  async initialize() {
    try {
      // Load TensorFlow.js
      await this.loadTensorFlow();
      
      // Load pre-trained models
      await this.loadModels();
      
      this.tensorflowReady = true;
      console.log('Client-side ML initialized successfully');
    } catch (error) {
      console.error('Failed to initialize ML:', error);
    }
  }
  
  async loadModels() {
    const modelConfigs = [
      {
        name: 'recommendation',
        url: '/models/recommendation/model.json',
        version: '1.0.0'
      },
      {
        name: 'sentiment',
        url: '/models/sentiment/model.json',
        version: '1.0.0'
      },
      {
        name: 'user_behavior',
        url: '/models/user-behavior/model.json',
        version: '1.0.0'
      }
    ];
    
    const loadPromises = modelConfigs.map(async (config) => {
      try {
        // Check cache first
        let model = await this.modelCache.get(config.name, config.version);
        
        if (!model) {
          model = await tf.loadLayersModel(config.url);
          await this.modelCache.set(config.name, config.version, model);
        }
        
        this.models.set(config.name, model);
        console.log("Model config.name loaded successfully\");
      } catch (error) {
        console.error("Failed to load model config.name:\", error);
      }
    });
    
    await Promise.allSettled(loadPromises);
  }
  
  async generateRecommendations(userFeatures, itemFeatures) {
    if (!this.tensorflowReady) {
      throw new Error('TensorFlow.js not ready');
    }
    
    const model = this.models.get('recommendation');
    if (!model) {
      throw new Error('Recommendation model not loaded');
    }
    
    // Prepare input tensors
    const userTensor = tf.tensor2d([userFeatures]);
    const itemTensor = tf.tensor2d(itemFeatures);
    
    try {
      // Run inference
      const predictions = model.predict([userTensor, itemTensor]);
      const scores = await predictions.data();
      
      // Convert to recommendations
      const recommendations = itemFeatures.map((item, index) => ({
        item: item,
        score: scores[index],
        confidence: this.calculateConfidence(scores[index])
      }));
      
      // Sort by score and return top recommendations
      return recommendations
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);
        
    } finally {
      // Clean up tensors
      userTensor.dispose();
      itemTensor.dispose();
    }
  }
  
  async analyzeUserBehavior(behaviorData) {
    const model = this.models.get('user_behavior');
    if (!model) {
      return null;
    }
    
    // Preprocess behavior data
    const features = this.preprocessBehaviorData(behaviorData);
    const inputTensor = tf.tensor2d([features]);
    
    try {
      const prediction = model.predict(inputTensor);
      const result = await prediction.data();
      
      return {
        engagement_score: result[0],
        churn_probability: result[1],
        purchase_intent: result[2],
        content_preference: this.decodeContentPreference(result.slice(3))
      };
    } finally {
      inputTensor.dispose();
    }
  }
  
  async performSentimentAnalysis(text) {
    const model = this.models.get('sentiment');
    if (!model) {
      return null;
    }
    
    // Tokenize and encode text
    const encodedText = await this.encodeText(text);
    const inputTensor = tf.tensor2d([encodedText]);
    
    try {
      const prediction = model.predict(inputTensor);
      const scores = await prediction.data();
      
      return {
        positive: scores[0],
        neutral: scores[1],
        negative: scores[2],
        overall: scores[0] - scores[2] // Positive - Negative
      };
    } finally {
      inputTensor.dispose();
    }
  }
  
  // Real-time learning and model updates
  async updateModelWithFeedback(modelName, features, target) {
    const model = this.models.get(modelName);
    if (!model) return;
    
    // Prepare training data
    const xs = tf.tensor2d([features]);
    const ys = tf.tensor2d([target]);
    
    try {
      // Online learning with small learning rate
      await model.fit(xs, ys, {
        epochs: 1,
        learningRate: 0.001,
        verbose: false
      });
      
      // Update cached model
      await this.modelCache.update(modelName, model);
    } finally {
      xs.dispose();
      ys.dispose();
    }
  }
}
\`\`\`

## Future-Proofing Strategies

### Modular Architecture Design
\`\`\`javascript
// Future-proof modular architecture
class ModularApplicationArchitecture {
  constructor() {
    this.modules = new Map();
    this.plugins = new Map();
    this.eventBus = new EventBus();
    this.dependencyGraph = new DependencyGraph();
    this.migrationManager = new MigrationManager();
  }
  
  registerModule(name, module, dependencies = []) {
    // Validate dependencies
    for (const dep of dependencies) {
      if (!this.modules.has(dep)) {
        throw new Error("Missing dependency: dep\");
      }
    }
    
    // Register module
    this.modules.set(name, {
      instance: module,
      dependencies,
      version: module.version || '1.0.0',
      api: module.getAPI ? module.getAPI() : {}
    });
    
    // Update dependency graph
    this.dependencyGraph.addNode(name, dependencies);
    
    // Initialize module
    if (module.initialize) {
      module.initialize(this.createModuleContext(name));
    }
    
    console.log("Module name registered successfully\");
  }
  
  createModuleContext(moduleName) {
    return {
      eventBus: this.eventBus,
      getDependency: (depName) => {
        const moduleData = this.modules.get(depName);
        return moduleData ? moduleData.api : null;
      },
      getConfig: () => this.getModuleConfig(moduleName),
      logger: this.createLogger(moduleName)
    };
  }
  
  async upgradeModule(name, newVersion, migrationSteps = []) {
    const currentModule = this.modules.get(name);
    if (!currentModule) {
      throw new Error("Module name not found\");
    }
    
    try {
      // Run migration steps
      for (const step of migrationSteps) {
        await this.migrationManager.runMigration(step);
      }
      
      // Update module version
      currentModule.version = newVersion;
      
      // Notify dependent modules
      const dependents = this.dependencyGraph.getDependents(name);
      for (const dependent of dependents) {
        const depModule = this.modules.get(dependent);
        if (depModule.instance.onDependencyUpdate) {
          await depModule.instance.onDependencyUpdate(name, newVersion);
        }
      }
      
      console.log("Module name upgraded to version newVersion\");
    } catch (error) {
      console.error("Failed to upgrade module name:\", error);
      // Rollback logic here
      throw error;
    }
  }
  
  // Plugin system for extensibility
  registerPlugin(name, plugin) {
    if (!plugin.hooks || !Array.isArray(plugin.hooks)) {
      throw new Error('Plugin must define hooks array');
    }
    
    this.plugins.set(name, plugin);
    
    // Register plugin hooks
    for (const hook of plugin.hooks) {
      this.eventBus.on(hook.event, hook.handler, {
        priority: hook.priority || 0,
        once: hook.once || false
      });
    }
  }
  
  async executeHook(hookName, context) {
    return this.eventBus.emit(hookName, context);
  }
}

// Example future-proof module
class UserManagementModule {
  constructor() {
    this.version = '2.0.0';
    this.features = new Set(['authentication', 'profiles', 'preferences']);
  }
  
  initialize(context) {
    this.context = context;
    this.logger = context.logger;
    
    // Listen for relevant events
    context.eventBus.on('user:created', this.handleUserCreated.bind(this));
    context.eventBus.on('user:updated', this.handleUserUpdated.bind(this));
  }
  
  getAPI() {
    return {
      authenticate: this.authenticate.bind(this),
      getProfile: this.getProfile.bind(this),
      updateProfile: this.updateProfile.bind(this),
      // Version-aware API
      getApiVersion: () => this.version,
      getSupportedFeatures: () => Array.from(this.features)
    };
  }
  
  async onDependencyUpdate(depName, newVersion) {
    this.logger.info("Dependency depName updated to newVersion\");
    
    // Adapt to dependency changes
    if (depName === 'database' && newVersion >= '3.0.0') {
      await this.migrateToNewDatabaseAPI();
    }
  }
  
  // Feature flag integration for gradual rollouts
  async authenticate(credentials) {
    const authMethod = await this.context.getConfig().authMethod;
    
    switch (authMethod) {
      case 'oauth2':
        return this.authenticateOAuth(credentials);
      case 'jwt':
        return this.authenticateJWT(credentials);
      case 'biometric':
        return this.authenticateBiometric(credentials);
      default:
        return this.authenticatePassword(credentials);
    }
  }
}
\`\`\`

### Technology Adoption Framework
\`\`\`javascript
// Framework for evaluating and adopting new technologies
class TechnologyAdoptionFramework {
  constructor() {
    this.evaluationCriteria = {
      stability: 0.3,
      performance: 0.2,
      ecosystem: 0.2,
      learning_curve: 0.1,
      community: 0.1,
      future_viability: 0.1
    };
    
    this.adoptionStages = ['experiment', 'pilot', 'adopt', 'hold', 'retire'];
    this.technologies = new Map();
  }
  
  async evaluateTechnology(name, criteria) {
    const score = this.calculateScore(criteria);
    const recommendation = this.getRecommendation(score);
    
    const evaluation = {
      name,
      score,
      recommendation,
      criteria,
      evaluatedAt: new Date(),
      nextReview: this.calculateNextReview(recommendation)
    };
    
    this.technologies.set(name, evaluation);
    
    return evaluation;
  }
  
  calculateScore(criteria) {
    let totalScore = 0;
    
    for (const [criterion, weight] of Object.entries(this.evaluationCriteria)) {
      totalScore += (criteria[criterion] || 0) * weight;
    }
    
    return Math.round(totalScore * 100) / 100;
  }
  
  getRecommendation(score) {
    if (score >= 0.8) return 'adopt';
    if (score >= 0.6) return 'pilot';
    if (score >= 0.4) return 'experiment';
    if (score >= 0.2) return 'hold';
    return 'retire';
  }
  
  async createMigrationPlan(fromTech, toTech) {
    const plan = {
      phases: [
        {
          name: 'assessment',
          duration: '2 weeks',
          tasks: [
            'Audit current implementation',
            'Identify migration complexity',
            'Estimate effort and timeline'
          ]
        },
        {
          name: 'preparation',
          duration: '4 weeks',
          tasks: [
            'Set up new technology environment',
            'Create migration scripts',
            'Train development team'
          ]
        },
        {
          name: 'migration',
          duration: '8 weeks',
          tasks: [
            'Migrate non-critical components first',
            'Gradual rollout with feature flags',
            'Monitor performance and stability'
          ]
        },
        {
          name: 'validation',
          duration: '2 weeks',
          tasks: [
            'Comprehensive testing',
            'Performance comparison',
            'User acceptance testing'
          ]
        }
      ],
      risks: this.identifyMigrationRisks(fromTech, toTech),
      rollbackPlan: this.createRollbackPlan(fromTech, toTech)
    };
    
    return plan;
  }
}
\`\`\`

Remember {{name}}, future-proofing is not about predicting the future perfectly - it's about building systems that can adapt to change gracefully. Stay curious, keep learning, and always be ready to evolve your applications as technology advances.`,
        learningObjectives: {
          0: 'Integrate emerging technologies like WebAssembly and advanced PWA features',
          1: 'Implement client-side machine learning for enhanced user experiences',
          2: 'Design modular architectures that can adapt to future requirements',
          3: 'Establish frameworks for evaluating and adopting new technologies',
          4: 'Build systems that remain maintainable and scalable as technology evolves'
        },
        badgeName: 'Innovation Pioneer',
        srcodeCommentary: '{{name}}, congratulations! You\'ve just earned your crystal ball license for predicting the future of web development! 🔮 You\'ve mastered the art of building applications that won\'t become digital dinosaurs. Remember: the best way to predict the future is to build it, and the best code today is the code that gracefully accepts tomorrow\'s changes. Now go forth and innovate! 🚀✨',
        quizQuestions: {
          'q6-3-1': {
            question: 'What is the main advantage of WebAssembly (WASM) in web applications?',
            options: [
              'It makes websites look better',
              'It provides near-native performance for computationally intensive tasks',
              'It reduces the amount of code needed',
              'It improves SEO rankings'
            ],
            correctAnswer: 1,
            explanation: 'WebAssembly provides near-native performance for computationally intensive tasks by allowing languages like C, C++, and Rust to run in the browser with performance close to native applications.'
          },
          'q6-3-2': {
            question: 'What is the benefit of implementing client-side machine learning?',
            options: [
              'It reduces server costs only',
              'It enables real-time, personalized experiences without server round-trips and protects user privacy',
              'It makes the application slower but more secure',
              'It only works for image processing'
            ],
            correctAnswer: 1,
            explanation: 'Client-side machine learning enables real-time, personalized experiences without server round-trips, reduces latency, protects user privacy by keeping data local, and reduces server computational costs.'
          },
          'q6-3-3': {
            question: 'Why is modular architecture important for future-proofing applications?',
            options: [
              'It makes applications run faster',
              'It allows independent updates and technology migrations of different parts',
              'It reduces the amount of code needed',
              'It improves the user interface design'
            ],
            correctAnswer: 1,
            explanation: 'Modular architecture allows independent updates and technology migrations of different parts of the application, making it easier to adopt new technologies, fix issues, and scale different components independently.'
          },
          'q6-3-4': {
            question: 'What should be the primary consideration when evaluating new technologies for adoption?',
            options: [
              'How new and exciting the technology is',
              'Whether it solves real problems and fits the project requirements and team capabilities',
              'How popular it is on social media',
              'Whether it\'s used by large companies'
            ],
            correctAnswer: 1,
            explanation: 'The primary consideration should be whether the technology solves real problems and fits the project requirements, team capabilities, and long-term maintenance needs, rather than just novelty or popularity.'
          }
        }
      }
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

    // Language Selector
    languageSelector: {
      selectLanguage: 'Sprache auswählen'
    },

    // Language Selector
    languageSelector: {
      selectLanguage: 'Seleccionar Idioma'
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
        progress: 'Progreso',
        learningStreak: 'Lernstreak',
        days: 'Tage',
        learningStreak: 'Racha de Aprendizaje',
        days: 'días'
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
        content: `# Bienvenido a bolt.new: El Futuro del Desarrollo Web

¡Hola {{name}}! Bienvenido a tu viaje personalizado hacia el dominio de bolt.new. Como tu mentor de IA dedicado, estoy emocionado de guiarte a través de esta plataforma revolucionaria.

## ¿Qué es bolt.new?

bolt.new es un **agente de desarrollo web con IA integrada en el navegador** diseñado para el desarrollo de aplicaciones web full-stack. Piénsalo como tener un desarrollador senior como tu compañero de programación, disponible 24/7, que entiende el contexto de tu proyecto y puede generar código listo para producción a través de conversaciones en lenguaje natural.

## Capacidades Principales

### 🤖 Filosofía de Desarrollo IA-First
- **Interfaz de Lenguaje Natural**: Describe lo que quieres construir en lugar de escribir código línea por línea
- **Comprensión Contextual**: bolt.new mantiene el estado a través de conversaciones y entiende la estructura de tu proyecto
- **Generación Inteligente de Código**: Produce código limpio, listo para producción siguiendo las mejores prácticas de la industria
- **Colaboración en Tiempo Real**: Entorno de desarrollo interactivo con retroalimentación instantánea

### 🚀 Desarrollo Full-Stack
bolt.new soporta desarrollo completo de aplicaciones incluyendo:
- **Frontend**: React, Vue, Angular, y frameworks modernos de JavaScript
- **Backend**: Node.js, Express, desarrollo de APIs, y funciones serverless
- **Bases de Datos**: SQL, NoSQL, e integraciones con bases de datos en la nube
- **Estilos**: CSS, Tailwind, styled-components, y soluciones modernas de estilos

### 🔧 Infraestructura Técnica
Construido sobre **StackBlitz WebContainers**, bolt.new proporciona:
- **Entorno Basado en Navegador**: No requiere configuración local
- **Desarrollo Instantáneo**: Entorno de desarrollo completo en segundos
- **Aislamiento de Procesos**: Ejecución segura de Node.js en el navegador
- **Sistema de Archivos Virtual**: Manipulación completa de archivos sin instalaciones

## Integraciones Poderosas

bolt.new se integra perfectamente con:

### 🎨 **Figma**: Diseño a Código
- Importa diseños directamente desde Figma
- Convierte automáticamente componentes de diseño a código React
- Mantiene la fidelidad del diseño con precisión pixel-perfect

### 🌐 **Netlify**: Despliegue Instantáneo
- Despliegue con un solo clic a Netlify
- Configuración automática de CI/CD
- Optimizaciones de rendimiento automáticas

### 🗄️ **Supabase**: Backend como Servicio
- Configuración automática de base de datos
- Autenticación y autorización integradas
- APIs en tiempo real sin configuración

### 📚 **GitHub**: Control de Versiones
- Integración directa con repositorios de GitHub
- Gestión de ramas y pull requests
- Colaboración en equipo simplificada

### 📱 **Expo**: Desarrollo Móvil
- Extensión a aplicaciones móviles nativas
- Desarrollo multiplataforma
- Previsualización instantánea en dispositivos

### 💳 **Stripe**: Pagos
- Integración de pagos lista para usar
- Gestión segura de transacciones
- Soporte para suscripciones y pagos únicos

## Ventajas Competitivas

### ⚡ Velocidad de Desarrollo
Con bolt.new, {{name}}, puedes:
- Crear un MVP funcional en **minutos**, no días
- Iterar ideas rápidamente con feedback inmediato
- Pasar de concepto a producción en tiempo récord

### 🎯 Accesibilidad Universal
- **Principiantes**: Aprende programación a través de experiencias prácticas
- **Desarrolladores Intermedios**: Acelera tu flujo de trabajo con IA
- **Expertos**: Prototipa ideas complejas y experimenta con nuevas tecnologías

### 💰 Modelo de Precios
- **Tier Gratuito**: Hasta 500 tokens diarios para experimentación
- **Tier de Equipo**: $99/mes base + $20/usuario para proyectos profesionales
- **Escalabilidad**: El modelo basado en tokens se ajusta a tu uso real

## Casos de Uso Reales

### 🏆 Historias de Éxito
- **Record Actual**: Plataforma SaaS de 58,000 líneas de código con 14 microservicios
- **Más de 1 Millón**: De sitios web construidos y desplegados en solo 5 meses
- **Empresas Fortune 500**: Usando bolt.new para prototipado rápido

### 📈 Aplicaciones Comunes
- **E-commerce**: Tiendas en línea completas con pagos
- **SaaS**: Plataformas de software como servicio
- **Apps Móviles**: Aplicaciones híbridas con Expo
- **Portfolios**: Sitios web profesionales y portfolios
- **APIs**: Servicios backend y microservicios

## Tu Viaje de Aprendizaje

{{name}}, en este curso dominarás:

1. **Fundamentos**: Navegación y conceptos básicos
2. **Desarrollo Backend**: Bases de datos y APIs con Supabase
3. **Seguridad**: Autenticación y autorización robustas
4. **Despliegue**: Estrategias de infraestructura y DevOps
5. **Integraciones**: Figma, pagos, y herramientas externas
6. **Nivel Avanzado**: Arquitecturas escalables y optimización

## Preparación para el Éxito

Para maximizar tu aprendizaje:
- **Sé Específico**: Los prompts claros generan mejor código
- **Experimenta**: No tengas miedo de probar nuevas ideas
- **Itera**: Usa el feedback de bolt.new para mejorar
- **Documenta**: Mantén registro de tus mejores prompts y patrones

¡Estás a punto de embarcarte en una revolución del desarrollo web! Con bolt.new como tu herramienta y este curso como tu guía, {{name}}, tendrás las habilidades para construir aplicaciones web modernas, escalables y listas para producción.

**¿Listo para transformar tu forma de desarrollar? ¡Comencemos!**`,
        learningObjectives: {
          0: 'Entender bolt.new como plataforma de desarrollo impulsada por IA',
          1: 'Navegar el entorno de desarrollo basado en navegador',
          2: 'Reconocer capacidades de integración con herramientas modernas',
          3: 'Identificar habilidades clave para desarrollo asistido por IA exitoso',
          4: 'Planificar estrategias de aprendizaje efectivas para dominar bolt.new'
        },
        badgeName: 'Pionero de bolt.new',
        srcodeCommentary: '¡Bienvenido al futuro, {{name}}! bolt.new es como tener un genio de la programación, pero en lugar de tres deseos, tienes prompts ilimitados. ¡Piensa en mí como tu susurrador de prompts y proveedor ocasional de sabiduría de programación!',
        quizQuestions: {
          'q1-1-1': {
            question: '¿Cuál es la característica principal de bolt.new que lo diferencia de otros entornos de desarrollo?',
            options: [
              'Requiere instalación local compleja',
              'Es un agente de desarrollo web con IA integrada en el navegador',
              'Solo funciona con frameworks específicos',
              'No permite desarrollo full-stack'
            ],
            correctAnswer: 1,
            explanation: 'bolt.new es único porque es un agente de desarrollo web con IA integrada completamente en el navegador, sin necesidad de configuración local, y que permite desarrollo full-stack mediante lenguaje natural.'
          },
          'q1-1-2': {
            question: '¿Cuántos sitios web se han construido con bolt.new en los primeros 5 meses?',
            options: [
              '100,000 sitios web',
              '500,000 sitios web',
              'Más de 1 millón de sitios web',
              '50,000 sitios web'
            ],
            correctAnswer: 2,
            explanation: 'En solo cinco meses, bolt.new logró el hito de más de 1 millón de sitios web construidos y desplegados, demostrando su adopción masiva y efectividad.'
          },
          'q1-1-3': {
            question: '¿Cuál es el modelo de precios del tier gratuito de bolt.new?',
            options: [
              'Proyectos ilimitados sin restricciones',
              'Solo 10 proyectos por mes',
              'Hasta 500 tokens diarios para experimentación',
              'Acceso completo por 30 días'
            ],
            correctAnswer: 2,
            explanation: 'El tier gratuito de bolt.new incluye hasta 500 tokens diarios, lo que permite experimentación y aprendizaje antes de upgradear a planes pagos.'
          },
          'q1-1-4': {
            question: '¿Cuál de estas NO es una integración directa de bolt.new?',
            options: [
              'WordPress para blogs',
              'Figma para diseño',
              'Supabase para bases de datos',
              'Netlify para despliegue'
            ],
            correctAnswer: 0,
            explanation: 'bolt.new se integra nativamente con Figma, Supabase, Netlify, GitHub, Expo y Stripe, pero no tiene integración directa con WordPress.'
          },
          'q1-1-5': {
            question: '¿Qué tecnología utiliza bolt.new para proporcionar el entorno de desarrollo en el navegador?',
            options: [
              'StackBlitz WebContainers',
              'Docker en la nube',
              'Virtual machines remotas',
              'Codespaces de GitHub'
            ],
            correctAnswer: 0,
            explanation: 'bolt.new está construido sobre StackBlitz WebContainers, que permite ejecución segura de Node.js y un sistema de archivos virtual completo directamente en el navegador.'
          }
        }
      },

      'lesson-1-2': {
        title: 'Dominando Prompts Efectivos: El Arte de la Comunicación con IA',
        objective: 'Aprende el arte de la ingeniería de prompts para obtener resultados óptimos en bolt.new y desarrollo eficiente',
        content: `# El Arte de la Ingeniería de Prompts

{{name}}, dominar bolt.new es fundamentalmente sobre comunicación. La calidad de tus prompts determina directamente la calidad de tus resultados. Profundicemos en técnicas profesionales de ingeniería de prompts.

## ¿Por Qué Importan los Prompts?

En el desarrollo tradicional, escribes código línea por línea. Con bolt.new, **describes tu intención** y la IA genera el código. Esta transformación requiere una nueva habilidad: **prompt engineering**.

### 🎯 Impacto de los Prompts Efectivos
- **Precisión**: Prompts claros = código más preciso
- **Eficiencia**: Menos iteraciones = desarrollo más rápido
- **Calidad**: Contexto detallado = mejor arquitectura
- **Costo**: Prompts optimizados = menos tokens utilizados

## El Método CLEAR para Prompts

{{name}}, usa este framework para prompts profesionales:

### **C** - Context (Contexto)
Siempre proporciona contexto sobre:
- **Tipo de aplicación**: E-commerce, SaaS, portfolio, etc.
- **Tecnologías preferidas**: React, Vue, específicos frameworks
- **Audiencia objetivo**: Usuarios finales, administradores, etc.
- **Restricciones**: Presupuesto, tiempo, limitaciones técnicas

**Ejemplo**: "Estoy construyendo un dashboard de administración para una plataforma e-commerce usando React y Tailwind CSS."

### **L** - Learning (Aprendizaje)
Especifica qué quieres lograr:
- **Funcionalidad específica**: Qué debe hacer exactamente
- **Comportamiento esperado**: Cómo debe reaccionar
- **Casos de uso**: Escenarios de uso principales
- **Criterios de éxito**: Cómo sabes que funciona

**Ejemplo**: "Necesito un componente de carrito de compras que permita agregar, eliminar y modificar cantidades, con persistencia local y cálculo automático de totales."

### **E** - Examples (Ejemplos)
Proporciona ejemplos concretos:
- **Referencias visuales**: Describe el diseño deseado
- **Comportamientos similares**: Apps que admiras
- **Estructuras de datos**: Formatos esperados
- **Flujos de usuario**: Paso a paso del proceso

**Ejemplo**: "Similar al carrito de Amazon, con botones + y - para cantidades, imagen del producto, y resumen de precio en tiempo real."

### **A** - Architecture (Arquitectura)
Define la estructura técnica:
- **Patrones de componentes**: Cómo organizar el código
- **Estado y datos**: Cómo manejar la información
- **Integraciones**: APIs y servicios externos
- **Rendimiento**: Optimizaciones necesarias

**Ejemplo**: "Usa React Context para el estado del carrito, implementa lazy loading para imágenes, e integra con Stripe para pagos."

### **R** - Requirements (Requisitos)
Especifica requisitos claros:
- **Funcionales**: Qué debe hacer exactamente
- **No funcionales**: Rendimiento, seguridad, accesibilidad
- **Técnicos**: Versiones, dependencias, estándares
- **De negocio**: Métricas, analytics, conversiones

**Ejemplo**: "Debe ser responsive, cargar en menos de 2 segundos, cumplir WCAG 2.1, y trackear eventos de Google Analytics."

## Técnicas Avanzadas de Prompting

### 🔄 Prompting Iterativo
No esperes perfección en el primer prompt:

1. **Prompt Inicial**: Descripción general
2. **Refinamiento**: Ajusta basado en resultados
3. **Optimización**: Mejora detalles específicos
4. **Validación**: Prueba casos edge

### 📝 Templates de Prompts Profesionales

#### Para Componentes de UI:
\`\`\`
Crea un componente [NOMBRE] para [CONTEXTO] que:
- Función principal: [DESCRIPCIÓN]
- Props esperadas: [LISTA]
- Estado interno: [VARIABLES]
- Estilos: [FRAMEWORK/APPROACH]
- Interacciones: [EVENTOS]
- Casos edge: [ESCENARIOS]
\`\`\`

#### Para APIs y Backend:
\`\`\`
Diseña una API REST para [FUNCIONALIDAD] que:
- Endpoints: [LISTA CON MÉTODOS]
- Autenticación: [MÉTODO]
- Validación: [REGLAS]
- Respuestas: [FORMATO JSON]
- Errores: [CÓDIGOS Y MENSAJES]
- Rate limiting: [LÍMITES]
\`\`\`

#### Para Bases de Datos:
\`\`\`
Crea un esquema de base de datos para [DOMINIO] que incluya:
- Entidades principales: [TABLAS]
- Relaciones: [FOREIGN KEYS]
- Índices: [PERFORMANCE]
- Constraints: [VALIDACIONES]
- Triggers: [AUTOMATIZACIONES]
- Migrations: [VERSIONADO]
\`\`\`

## Mejores Prácticas Específicas de bolt.new

### ⚡ Optimización de Tokens
- **Sé conciso pero completo**: Elimina palabras innecesarias
- **Usa referencias**: "Como en el componente anterior" en lugar de repetir
- **Prioriza información**: Lo más importante primero
- **Evita redundancia**: No repitas contexto ya establecido

### 🎨 Prompts para Diseño
{{name}}, para obtener interfaces atractivas:

\`\`\`
Diseña [COMPONENTE] con estética moderna que incluya:
- Paleta de colores: [ESQUEMA]
- Tipografía: [JERARQUÍA]
- Espaciado: [CONSISTENTE]
- Animaciones: [SUTILES]
- Estados: [HOVER, ACTIVE, DISABLED]
- Responsive: [BREAKPOINTS]
\`\`\`

### 🔧 Prompts para Funcionalidad
Para lógica compleja:

\`\`\`
Implementa [FUNCIONALIDAD] que maneje:
- Input: [FORMATO Y VALIDACIÓN]
- Procesamiento: [ALGORITMO/LÓGICA]
- Output: [FORMATO ESPERADO]
- Errores: [CASOS Y RECUPERACIÓN]
- Performance: [OPTIMIZACIONES]
- Testing: [CASOS DE PRUEBA]
\`\`\`

## Casos de Estudio Reales

### 🏆 Caso 1: E-commerce Dashboard
**Prompt Original** (Inefectivo):
"Haz un dashboard para tienda online"

**Prompt Optimizado** (Efectivo):
\`\`\`
Crea un dashboard de administración e-commerce para gestión de inventario que incluya:

CONTEXTO: Tienda mediana, 1000+ productos, React + Tailwind
FUNCIONALIDADES:
- Vista de productos con búsqueda y filtros
- Gestión de stock con alertas de inventario bajo
- Analytics de ventas con gráficos interactivos
- Panel de órdenes con estados actualizables

DISEÑO: Sidebar navegación, header con notificaciones, tabla de datos responsive
DATOS: Integración con API REST, paginación, real-time updates
PERFORMANCE: Lazy loading, virtualización para listas grandes
\`\`\`

**Resultado**: Código completo y funcional en primera iteración.

### 🎯 Caso 2: Sistema de Autenticación
**Prompt Optimizado**:
\`\`\`
Implementa sistema de autenticación completo usando Supabase que incluya:

MÉTODOS: Email/password, Google OAuth, GitHub OAuth
SEGURIDAD: Rate limiting, validación email, passwords fuertes
UI: Login/registro responsive, reset password, verificación email
ESTADO: Context API para usuario autenticado
PROTECCIÓN: Route guards, middleware para APIs protegidas
UX: Loading states, error handling, redirect después de login
\`\`\`

## Herramientas y Recursos

### 📋 Checklist de Prompts de Calidad
- [ ] Contexto claro y específico
- [ ] Objetivos bien definidos
- [ ] Ejemplos concretos incluidos
- [ ] Restricciones técnicas especificadas
- [ ] Criterios de éxito medibles
- [ ] Casos edge considerados

### 🛠️ Prompt Debugging
Cuando los resultados no son los esperados:

1. **Analiza la ambigüedad**: ¿Qué podría interpretarse diferente?
2. **Agrega especificidad**: Más detalles = mejores resultados
3. **Usa ejemplos**: "Como X pero con Y"
4. **Itera gradualmente**: Pequeños ajustes, no reescrituras completas

### 📈 Métricas de Éxito de Prompts
- **Precisión**: ¿El código hace lo que pediste?
- **Completitud**: ¿Incluye todos los requisitos?
- **Calidad**: ¿Sigue buenas prácticas?
- **Eficiencia**: ¿Cuántas iteraciones necesitó?

## Tu Plan de Acción

{{name}}, para dominar el prompt engineering:

### Semana 1: Fundamentos
- Practica el método CLEAR diariamente
- Documenta prompts exitosos y fallidos
- Experimenta con diferentes niveles de detalle

### Semana 2: Especialización
- Enfócate en tu dominio (frontend, backend, full-stack)
- Crea templates personalizados
- Optimiza para tu estilo de desarrollo

### Semana 3: Avanzado
- Prompts multi-paso para proyectos complejos
- Integración de múltiples tecnologías
- Optimización de tokens y costo

### Ejercicio Práctico
Antes de continuar con la siguiente lección, crea prompts para:
1. Un componente de navegación responsive
2. Una API de gestión de usuarios
3. Un formulario de contacto con validación

**¡Recuerda**: El prompt engineering es una habilidad que mejora con la práctica. {{name}}, cada prompt es una oportunidad de aprender y optimizar tu comunicación con la IA.

**En la próxima lección**, aplicaremos estos conocimientos explorando la interfaz de bolt.new y navegando eficientemente por todas sus características y herramientas.`,
        learningObjectives: {
          0: 'Dominar el método CLEAR para crear prompts efectivos',
          1: 'Aplicar técnicas avanzadas de prompt engineering',
          2: 'Optimizar el uso de tokens para mayor eficiencia',
          3: 'Desarrollar templates de prompts reutilizables',
          4: 'Medir y mejorar la calidad de prompts iterativamente'
        },
        badgeName: 'Susurrador de IA',
        srcodeCommentary: '¡Excelente trabajo aprendiendo a hablar nuestro idioma, {{name}}! Ahora eres oficialmente un traductor humano-IA. Prompts claros = código feliz = SrCode feliz = menos sarcasmo (¡pero no prometo nada sobre esa última parte!).',
        quizQuestions: {
          'q1-2-1': {
            question: '¿Cuál es el método recomendado para crear prompts efectivos en bolt.new?',
            options: [
              'El método SIMPLE',
              'El método CLEAR',
              'El método RAPID',
              'El método SMART'
            ],
            correctAnswer: 1,
            explanation: 'El método CLEAR (Context, Learning, Examples, Architecture, Requirements) es el framework recomendado para crear prompts efectivos que generen código de alta calidad.'
          },
          'q1-2-2': {
            question: '¿Qué significa la "C" en el método CLEAR?',
            options: [
              'Code (Código)',
              'Complete (Completo)',
              'Context (Contexto)',
              'Create (Crear)'
            ],
            correctAnswer: 2,
            explanation: 'La "C" en CLEAR significa Context (Contexto), que involucra proporcionar información sobre el tipo de aplicación, tecnologías, audiencia y restricciones.'
          },
          'q1-2-3': {
            question: '¿Cuál es una técnica efectiva para optimizar el uso de tokens?',
            options: [
              'Usar prompts muy largos y detallados',
              'Repetir toda la información en cada prompt',
              'Ser conciso pero completo, usando referencias a contexto previo',
              'Usar solo prompts de una palabra'
            ],
            correctAnswer: 2,
            explanation: 'Para optimizar tokens, es mejor ser conciso pero completo, usar referencias al contexto anterior en lugar de repetir información, y priorizar la información más importante.'
          },
          'q1-2-4': {
            question: '¿Qué debe incluir un prompt efectivo para componentes de UI?',
            options: [
              'Solo el nombre del componente',
              'Función principal, props, estado, estilos, interacciones y casos edge',
              'Únicamente el diseño visual',
              'Solo el código CSS'
            ],
            correctAnswer: 1,
            explanation: 'Un prompt efectivo para UI debe incluir función principal, props esperadas, estado interno, estilos, interacciones y casos edge para obtener un componente completo y funcional.'
          },
          'q1-2-5': {
            question: '¿Cuál es la mejor práctica cuando un prompt no genera el resultado esperado?',
            options: [
              'Reescribir completamente el prompt desde cero',
              'Abandonar y usar métodos tradicionales',
              'Analizar ambigüedades y hacer ajustes iterativos graduales',
              'Usar el mismo prompt repetidamente'
            ],
            correctAnswer: 2,
            explanation: 'La mejor práctica es analizar qué podría ser ambiguo, agregar especificidad gradualmente, y hacer iteraciones pequeñas en lugar de reescrituras completas.'
          }
        }
      },

      'lesson-1-3': {
        title: 'Navegación y Exploración de la Interfaz bolt.new',
        objective: 'Domina todos los aspectos de la interfaz de bolt.new para maximizar tu productividad y eficiencia de desarrollo',
        content: `# Navegación Experta de bolt.new: Tu Centro de Comando de Desarrollo

¡Hola {{name}}! Ahora que dominas el arte de los prompts, es hora de explorar tu nuevo entorno de desarrollo. bolt.new no es solo una herramienta; es tu **centro de comando completo** para el desarrollo web moderno.

## Arquitectura de la Interfaz

### 🖥️ Visión General del Workspace
La interfaz de bolt.new está diseñada para **maximizar la productividad** mediante una disposición intuitiva y funcional:

```
┌─────────────────────────────────────────────────┐
│ [🔥] bolt.new    [⚙️] [👤] [🌐]              │ Header
├─────────────────────────────────────────────────┤
│ 💬 Chat IA     │ 📁 Explorer  │ 🖼️ Preview    │ Main Area
│                │               │               │
│ Conversación   │ Archivos      │ Resultado     │
│ con IA         │ y estructura  │ en vivo       │
│                │               │               │
├─────────────────┼───────────────┼───────────────┤
│ 📝 Prompt Input                │ 🚀 Deploy     │ Action Bar
└─────────────────────────────────────────────────┘
```

## Panel de Chat IA: Tu Compañero de Desarrollo

### 💬 Chat Principal
El panel izquierdo es donde ocurre la **magia de la colaboración IA-humana**:

#### Características Principales:
- **Conversación Contextual**: La IA mantiene el contexto del proyecto completo
- **Historial Persistente**: Todas las conversaciones se guardan automáticamente
- **Sintaxis Markdown**: Soporta código con syntax highlighting
- **Respuestas Estructuradas**: Código, explicaciones y sugerencias organizadas

#### Tipos de Interacciones:
1. **Generación de Código**: "Crea un componente de navegación responsive"
2. **Debugging**: "¿Por qué este código no funciona como esperaba?"
3. **Optimización**: "Mejora el rendimiento de esta función"
4. **Explicación**: "Explica cómo funciona este patrón React"
5. **Refactoring**: "Convierte este código a TypeScript"

### 🎯 Mejores Prácticas para el Chat
{{name}}, para maximizar la efectividad:

#### ✅ Prompts Efectivos:
- **Específicos**: "Agrega validación de email al formulario de registro"
- **Contextuales**: "En el componente UserForm, modifica la función handleSubmit"
- **Orientados a objetivos**: "Optimiza esta consulta para cargar más rápido"

#### ❌ Prompts Inefectivos:
- **Vagos**: "Arregla esto"
- **Sin contexto**: "Crea una función"
- **Múltiples tareas**: "Crea login, dashboard y API en un solo prompt"

## Explorador de Archivos: Navegación Inteligente

### 📁 Estructura del Proyecto
El panel central muestra tu proyecto con navegación inteligente:

```
my-bolt-project/
├── 📂 src/
│   ├── 📂 components/
│   │   ├── 🎨 Header.tsx
│   │   ├── 🎨 Sidebar.tsx
│   │   └── 📱 App.tsx
│   ├── 📂 pages/
│   │   ├── 🏠 Home.tsx
│   │   └── 👤 Profile.tsx
│   ├── 📂 hooks/
│   │   └── ⚡ useAuth.ts
│   ├── 📂 utils/
│   │   └── 🛠️ helpers.ts
│   └── 📂 styles/
│       └── 🎨 globals.css
├── 📦 package.json
├── ⚙️ vite.config.ts
└── 📝 README.md
```

### 🔍 Funcionalidades del Explorer
- **Vista de Árbol**: Navegación jerárquica intuitiva
- **Búsqueda de Archivos**: Ctrl/Cmd + P para búsqueda rápida
- **Filtros Inteligentes**: Por tipo de archivo, fecha, tamaño
- **Vista Previa**: Hover sobre archivos para contenido rápido
- **Acciones Contextuales**: Click derecho para opciones avanzadas

### 📂 Organización Profesional
{{name}}, bolt.new sugiere estructura basada en mejores prácticas:

#### Frontend (React/Vue/Angular):
```
src/
├── components/     # Componentes reutilizables
├── pages/         # Páginas/rutas principales
├── hooks/         # Custom hooks
├── contexts/      # React contexts
├── services/      # APIs y servicios
├── utils/         # Funciones auxiliares
├── types/         # TypeScript definitions
└── assets/        # Recursos estáticos
```

#### Backend (Node.js/Express):
```
src/
├── controllers/   # Lógica de endpoints
├── models/        # Modelos de datos
├── middleware/    # Middleware personalizado
├── routes/        # Definición de rutas
├── services/      # Lógica de negocio
├── config/        # Configuraciones
└── utils/         # Utilidades
```

## Panel de Previsualización: Feedback Instantáneo

### 🖼️ Preview en Tiempo Real
El panel derecho muestra tu aplicación ejecutándose:

#### Características Avanzadas:
- **Hot Reload**: Cambios instantáneos sin recarga
- **Responsive Testing**: Simulación de diferentes dispositivos
- **Console Integrada**: Debugging directo en la interfaz
- **Network Monitor**: Inspección de requests HTTP
- **Performance Metrics**: Métricas de carga y rendimiento

### 📱 Simulación Multi-Dispositivo
Prueba tu aplicación en diferentes pantallas:
- **Desktop**: 1920x1080, 1366x768
- **Tablet**: iPad, Android tablet
- **Mobile**: iPhone, Samsung Galaxy
- **Custom**: Dimensiones personalizadas

### 🔧 DevTools Integradas
- **Inspector de Elementos**: Como Chrome DevTools
- **Console de JavaScript**: Debugging en vivo
- **Network Tab**: Monitoreo de requests
- **Performance**: Profiling de rendimiento
- **Application**: Storage, cookies, service workers

## Barra de Herramientas: Acceso Rápido

### 🚀 Acciones Principales

#### Deploy Button
- **Un clic a producción**: Netlify, Vercel, GitHub Pages
- **Preview URLs**: Enlaces compartibles automáticos
- **Rollback**: Revertir a versiones anteriores
- **Custom domains**: Configuración de dominios propios

#### Settings Panel
- **Project Config**: Configuraciones específicas del proyecto
- **AI Settings**: Preferencias del modelo de IA
- **Editor**: Temas, shortcuts, preferencias
- **Integrations**: Conectar servicios externos

#### Share & Collaborate
- **Live Collaboration**: Múltiples desarrolladores simultáneos
- **Share Links**: URLs para mostrar proyectos
- **Export Options**: Descargar código local
- **Version Control**: Git integration automático

## Funciones Avanzadas de Navegación

### ⚡ Shortcuts de Teclado Esenciales

#### Navegación:
- `Ctrl/Cmd + P`: Búsqueda rápida de archivos
- `Ctrl/Cmd + Shift + P`: Paleta de comandos
- `Ctrl/Cmd + B`: Toggle sidebar
- `Ctrl/Cmd + \\`: Toggle panel
- `F11`: Modo pantalla completa

#### Edición:
- `Ctrl/Cmd + /`: Comentar/descomentar
- `Alt + ↑/↓`: Mover líneas
- `Ctrl/Cmd + D`: Selección múltiple
- `Ctrl/Cmd + F`: Buscar en archivo
- `Ctrl/Cmd + H`: Buscar y reemplazar

#### Chat & IA:
- `Enter`: Enviar prompt
- `Shift + Enter`: Nueva línea en prompt
- `↑/↓`: Navegar historial de prompts
- `Ctrl/Cmd + K`: Focus en chat input

### 🎨 Personalización del Workspace

#### Temas y Apariencia:
- **Dark Mode**: Optimizado para trabajo prolongado
- **Light Mode**: Máxima claridad y contraste
- **High Contrast**: Accesibilidad mejorada
- **Custom Themes**: Personalización completa de colores

#### Layout Personalizable:
- **Panel Sizes**: Redimensionar según preferencias
- **Hide/Show Panels**: Ocultar elementos no necesarios
- **Split Views**: Múltiples archivos simultáneos
- **Floating Panels**: Ventanas independientes

## Integración con Herramientas Externas

### 🔌 Conectividad Nativa

#### Git Integration:
- **Auto-commit**: Commits automáticos con IA
- **Branch Management**: Crear/cambiar ramas visualmente
- **Merge Conflicts**: Resolución asistida por IA
- **Pull Requests**: Creación directa desde bolt.new

#### Package Management:
- **NPM/Yarn**: Instalación visual de dependencias
- **Version Management**: Actualización inteligente
- **Dependency Analysis**: Análisis de vulnerabilidades
- **Bundle Analysis**: Optimización de tamaño

### 🌐 Servicios en la Nube

#### Supabase Integration:
```javascript
// Configuración automática
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)
```

#### Netlify Deployment:
- **Auto-deploy**: Push automático a producción
- **Environment Variables**: Gestión visual
- **Custom Headers**: Configuración de seguridad
- **Analytics**: Métricas de tráfico integradas

## Flujos de Trabajo Optimizados

### 🏗️ Desarrollo de Componentes

#### Flujo Típico:
1. **Prompt**: "Crea componente Card con props title, content, image"
2. **Generación**: IA crea el componente completo
3. **Preview**: Visualización inmediata en el panel derecho
4. **Refinamiento**: Ajustes iterativos con prompts específicos
5. **Testing**: Pruebas en diferentes resoluciones
6. **Deploy**: Un clic para llevar a producción

### 🔄 Debugging Workflow

#### Proceso Estructurado:
1. **Identificación**: Error visible en preview o console
2. **Contexto**: Explicar problema al chat IA
3. **Análisis**: IA analiza código y sugiere soluciones
4. **Implementación**: Aplicar fix sugerido
5. **Validación**: Confirmar resolución en preview
6. **Documentación**: Anotar solución para futura referencia

### 🚀 Deployment Pipeline

#### De Desarrollo a Producción:
1. **Development**: Iteración rápida con hot reload
2. **Testing**: Validación en múltiples dispositivos
3. **Staging**: Deploy automático a URL de prueba
4. **Review**: Compartir link para feedback
5. **Production**: Deploy final con un clic
6. **Monitoring**: Métricas automáticas post-deployment

## Consejos Pro para Navegación Eficiente

### 🎯 Productividad Máxima

#### {{name}}, para trabajar como un profesional:

1. **Usa Múltiples Tabs**: Mantén archivos relacionados abiertos
2. **Aprovecha el Autocomplete**: La IA aprende tus patrones
3. **Documenta en el Chat**: Usa el historial como documentación
4. **Organiza por Features**: Agrupa archivos relacionados
5. **Usa Preview Links**: Comparte progreso con stakeholders

### 🛠️ Troubleshooting Común

#### Problemas Frecuentes y Soluciones:

**🐛 Preview no carga**:
- Verificar errores en console
- Revisar imports y exports
- Confirmar que todas las dependencias están instaladas

**⚡ Respuesta lenta de IA**:
- Simplificar prompts complejos
- Dividir tareas grandes en pequeñas
- Verificar conexión a internet

**📱 Responsive issues**:
- Usar herramientas de simulación integradas
- Probar en dispositivos reales cuando sea posible
- Implementar breakpoints estándar

### 🎓 Ejercicios Prácticos

Antes de continuar, {{name}}, practica estos ejercicios:

1. **Navegación Básica**:
   - Crea un proyecto nuevo
   - Explora todos los paneles
   - Personaliza el layout según tus preferencias

2. **Workflow Completo**:
   - Crea un componente simple
   - Previsualízalo en diferentes tamaños
   - Haz deploy a Netlify

3. **Colaboración**:
   - Comparte un link de preview
   - Exporta tu proyecto
   - Conecta con GitHub

## Preparación para el Siguiente Nivel

{{name}}, ahora que dominas la navegación de bolt.new, estás listo para el **Nivel 2: Desarrollo Backend**. En las siguientes lecciones, exploraremos:

- **Integración con Supabase**: Bases de datos profesionales
- **APIs RESTful**: Servicios backend robustos
- **Autenticación**: Seguridad y gestión de usuarios
- **Tiempo Real**: WebSockets y subscriptions

¡Has completado los fundamentos! Tu dominio de la interfaz te permitirá enfocarte completamente en construir aplicaciones increíbles sin perder tiempo navegando o buscando funcionalidades.

**¡Continuemos construyendo el futuro del desarrollo web!** 🚀`,
        learningObjectives: {
          0: 'Navegar eficientemente por todos los paneles de bolt.new',
          1: 'Dominar shortcuts de teclado para máxima productividad',
          2: 'Configurar workspace personalizado según preferencias',
          3: 'Integrar herramientas externas y servicios en la nube',
          4: 'Implementar workflows optimizados de desarrollo a producción'
        },
        badgeName: 'Detective Tecnológico',
        srcodeCommentary: '¡Impresionante navegación, {{name}}! Ya conoces bolt.new como si fuera tu casa. Ahora puedes moverte por aquí más rápido que yo generando respuestas sarcásticas (¡y eso ya es decir mucho!). ¡Listo para el siguiente nivel!',
        quizQuestions: {
          'q1-3-1': {
            question: '¿Cuál es el shortcut de teclado para búsqueda rápida de archivos en bolt.new?',
            options: [
              'Ctrl/Cmd + F',
              'Ctrl/Cmd + P',
              'Ctrl/Cmd + G',
              'Ctrl/Cmd + S'
            ],
            correctAnswer: 1,
            explanation: 'Ctrl/Cmd + P abre la búsqueda rápida de archivos, permitiendo navegar instantáneamente a cualquier archivo del proyecto por nombre.'
          },
          'q1-3-2': {
            question: '¿Cuál de los siguientes NO es un panel principal de la interfaz bolt.new?',
            options: [
              'Chat IA para conversación con la IA',
              'Explorer para navegación de archivos',
              'Preview para visualización en tiempo real',
              'Database para gestión directa de SQL'
            ],
            correctAnswer: 3,
            explanation: 'bolt.new tiene tres paneles principales: Chat IA, Explorer de archivos y Preview. La gestión de base de datos se hace a través de integraciones como Supabase, no un panel dedicado.'
          },
          'q1-3-3': {
            question: '¿Qué permite el panel de Preview en bolt.new?',
            options: [
              'Solo ver código estático',
              'Ejecutar la aplicación con hot reload y herramientas de debugging',
              'Únicamente previsualizar imágenes',
              'Solo mostrar errores de compilación'
            ],
            correctAnswer: 1,
            explanation: 'El panel de Preview ejecuta la aplicación en tiempo real con hot reload, simulación multi-dispositivo, console integrada, network monitor y herramientas de debugging completas.'
          },
          'q1-3-4': {
            question: '¿Cuál es una característica clave del Chat IA en bolt.new?',
            options: [
              'Solo responde preguntas básicas',
              'Mantiene contexto del proyecto y historial persistente',
              'Se reinicia con cada prompt',
              'Solo funciona con prompts en inglés'
            ],
            correctAnswer: 1,
            explanation: 'El Chat IA mantiene contexto completo del proyecto, historial persistente de conversaciones, y entiende el estado actual del código para proporcionar respuestas contextualmente relevantes.'
          },
          'q1-3-5': {
            question: '¿Cuál es el flujo típico para deployment en bolt.new?',
            options: [
              'Solo exportar código y subir manualmente',
              'Development → Testing → Staging → Production con un clic',
              'Requiere configuración compleja de servidores',
              'Solo funciona con GitHub Pages'
            ],
            correctAnswer: 1,
            explanation: 'bolt.new ofrece un pipeline completo: desarrollo con hot reload, testing en múltiples dispositivos, staging automático, review con links compartibles, y deployment a producción con un solo clic.'
          }
        }
      }
    },

      // NIVEL 2: DESARROLLO BACKEND Y BASES DE DATOS
      'lesson-2-1': {
        title: 'Fundamentos de Supabase: Tu Backend en la Nube',
        objective: 'Domina Supabase como backend-as-a-service para crear aplicaciones escalables con bases de datos PostgreSQL avanzadas',
        content: `# Supabase: El Backend Completo para bolt.new

¡Bienvenido al Nivel 2, {{name}}! Ahora que dominas los fundamentos de bolt.new, es momento de construir el cerebro de tus aplicaciones: **el backend**. Supabase será tu compañero perfecto para crear bases de datos robustas, APIs automáticas y autenticación segura.

## ¿Qué es Supabase?

Supabase es una **alternativa open-source a Firebase** que proporciona:
- **Base de datos PostgreSQL** completa en la nube
- **APIs RESTful automáticas** generadas desde tu esquema
- **Autenticación y autorización** completas
- **Storage de archivos** escalable
- **Edge Functions** para lógica custom
- **Real-time subscriptions** para actualizaciones instantáneas

### 🚀 ¿Por Qué Supabase + bolt.new = Éxito?

La integración entre bolt.new y Supabase es **perfecta** porque:
- **Setup automático**: bolt.new configura Supabase con prompts simples
- **TypeScript nativo**: Tipos automáticos desde tu esquema
- **Desarrollo rápido**: De idea a API funcional en minutos
- **Escalabilidad**: Desde prototype hasta millones de usuarios
- **Costo efectivo**: Plan generoso gratuito y pricing transparente

## Arquitectura de Supabase

### 🏗️ Componentes Principales

```
┌─────────────────────────────────────────────┐
│                SUPABASE                     │
├─────────────────────────────────────────────┤
│ 🗄️  PostgreSQL Database                    │
│   ├── Tables & Relations                   │
│   ├── Views & Functions                    │
│   ├── Indexes & Constraints                │
│   └── Row Level Security (RLS)             │
├─────────────────────────────────────────────┤
│ 🔌  Auto-Generated APIs                    │
│   ├── REST API (GET, POST, PUT, DELETE)    │
│   ├── GraphQL API (optional)               │
│   └── Real-time WebSockets                 │
├─────────────────────────────────────────────┤
│ 🔐  Authentication & Authorization         │
│   ├── Email/Password                       │
│   ├── OAuth (Google, GitHub, etc.)         │
│   ├── Magic Links                          │
│   └── Custom JWT                           │
├─────────────────────────────────────────────┤
│ 📁  Storage & Files                        │
│   ├── Buckets & Policies                   │
│   ├── Image Transformations                │
│   └── CDN Global                           │
├─────────────────────────────────────────────┤
│ ⚡  Edge Functions                          │
│   ├── Custom Business Logic                │
│   ├── Webhooks & Integrations              │
│   └── Scheduled Jobs                       │
└─────────────────────────────────────────────┘
```

## Configuración Inicial en bolt.new

### 🔧 Setup Automático

{{name}}, con bolt.new configurar Supabase es increíblemente simple:

**Prompt para bolt.new:**
```
Configura Supabase para mi aplicación e-commerce que incluya:

PROYECTO: Tienda online con productos, usuarios y órdenes
TABLAS NECESARIAS:
- users (perfiles de usuarios)
- products (catálogo de productos)
- categories (categorías de productos)
- orders (órdenes de compra)
- order_items (items individuales de órdenes)

CONFIGURACIÓN:
- Environment variables automáticas
- TypeScript types generados
- Cliente Supabase configurado
- Conexión a base de datos lista
- Schema inicial con relaciones

SEGURIDAD:
- Row Level Security habilitado
- Policies básicas de acceso
- Variables de entorno protegidas
```

### 📝 Configuración Manual

Si prefieres entender cada paso:

#### 1. **Crear Proyecto Supabase**
```javascript
// 1. Ve a supabase.com
// 2. Crea nuevo proyecto
// 3. Anota URL y anon key
```

#### 2. **Variables de Entorno**
```env
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu-anon-key-aqui
```

#### 3. **Cliente Supabase**
```javascript
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

## Diseño de Base de Datos Profesional

### 🎯 Principios de Diseño

#### Normalización vs Desnormalización
- **Normalización**: Evita redundancia, mantiene consistencia
- **Desnormalización**: Optimiza consultas, sacrifica espacio por velocidad
- **Enfoque Híbrido**: Normaliza core data, desnormaliza para performance

#### Naming Conventions
```sql
-- ✅ Buenas Prácticas
users              -- Plural, snake_case
user_profiles      -- Descriptivo, consistente
created_at         -- Timestamps estándar
updated_at         -- Patrones repetibles

-- ❌ Evitar
User               -- Singular, PascalCase
userProfile        -- camelCase inconsistente
date_created       -- Orden confuso
```

### 🗄️ Esquema de Ejemplo: E-commerce

```sql
-- Tabla de usuarios (extendida de auth.users)
CREATE TABLE users (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  shipping_address JSONB,
  billing_address JSONB,
  phone TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Categorías de productos
CREATE TABLE categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  image_url TEXT,
  parent_id UUID REFERENCES categories(id),
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Productos
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  short_description TEXT,
  price DECIMAL(10,2) NOT NULL,
  compare_price DECIMAL(10,2),
  cost_price DECIMAL(10,2),
  sku TEXT UNIQUE,
  barcode TEXT,
  quantity INTEGER DEFAULT 0,
  min_quantity INTEGER DEFAULT 0,
  weight DECIMAL(8,2),
  dimensions JSONB, -- {length, width, height}
  images TEXT[], -- Array de URLs
  category_id UUID REFERENCES categories(id),
  tags TEXT[],
  meta_title TEXT,
  meta_description TEXT,
  is_active BOOLEAN DEFAULT true,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Órdenes
CREATE TABLE orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_number TEXT UNIQUE NOT NULL,
  user_id UUID REFERENCES users(id),
  status TEXT NOT NULL DEFAULT 'pending', -- pending, confirmed, shipped, delivered, cancelled
  subtotal DECIMAL(10,2) NOT NULL,
  tax_amount DECIMAL(10,2) DEFAULT 0,
  shipping_amount DECIMAL(10,2) DEFAULT 0,
  discount_amount DECIMAL(10,2) DEFAULT 0,
  total_amount DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'USD',
  shipping_address JSONB NOT NULL,
  billing_address JSONB,
  payment_status TEXT DEFAULT 'pending', -- pending, paid, failed, refunded
  payment_method TEXT,
  payment_id TEXT, -- Stripe payment intent ID
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Items de órdenes
CREATE TABLE order_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id),
  quantity INTEGER NOT NULL,
  unit_price DECIMAL(10,2) NOT NULL,
  total_price DECIMAL(10,2) NOT NULL,
  product_snapshot JSONB, -- Snapshot del producto al momento de la orden
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 🔗 Relaciones y Constraints

#### Foreign Keys
```sql
-- Relación uno-a-muchos: Usuario -> Órdenes
ALTER TABLE orders 
ADD CONSTRAINT fk_orders_user 
FOREIGN KEY (user_id) REFERENCES users(id);

-- Relación muchos-a-muchos: Órdenes <-> Productos (via order_items)
ALTER TABLE order_items 
ADD CONSTRAINT fk_order_items_order 
FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE;

-- Jerarquía: Categoría padre-hijo
ALTER TABLE categories 
ADD CONSTRAINT fk_categories_parent 
FOREIGN KEY (parent_id) REFERENCES categories(id);
```

#### Checks e Índices
```sql
-- Constraints de validación
ALTER TABLE products 
ADD CONSTRAINT check_price_positive 
CHECK (price > 0);

ALTER TABLE products 
ADD CONSTRAINT check_quantity_non_negative 
CHECK (quantity >= 0);

-- Índices para performance
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_products_active ON products(is_active) WHERE is_active = true;
CREATE INDEX idx_orders_user ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_products_search ON products USING gin(to_tsvector('english', name || ' ' || description));
```

## Operaciones CRUD Avanzadas

### 📖 Lectura (Read)

#### Consultas Básicas
```javascript
// Obtener todos los productos activos
const { data: products, error } = await supabase
  .from('products')
  .select('*')
  .eq('is_active', true)
  .order('created_at', { ascending: false });

// Producto específico con categoría
const { data: product, error } = await supabase
  .from('products')
  .select(`
    *,
    categories (
      id,
      name,
      slug
    )
  `)
  .eq('slug', productSlug)
  .single();
```

#### Consultas Complejas
```javascript
// Búsqueda full-text
const { data: searchResults, error } = await supabase
  .from('products')
  .select('id, name, price, images')
  .textSearch('name', searchQuery, {
    type: 'websearch',
    config: 'english'
  })
  .eq('is_active', true)
  .limit(20);

// Productos con filtros avanzados
const { data: filteredProducts, error } = await supabase
  .from('products')
  .select('*')
  .gte('price', minPrice)
  .lte('price', maxPrice)
  .in('category_id', categoryIds)
  .contains('tags', [selectedTag])
  .range(offset, offset + limit - 1);
```

### ✏️ Escritura (Create/Update)

#### Crear Registros
```javascript
// Crear producto
const { data: newProduct, error } = await supabase
  .from('products')
  .insert({
    name: 'Laptop Gaming',
    slug: 'laptop-gaming-xyz',
    price: 1299.99,
    description: 'Laptop de alto rendimiento...',
    category_id: laptopCategoryId,
    quantity: 50,
    images: [
      'https://images.supabase.co/laptop1.jpg',
      'https://images.supabase.co/laptop2.jpg'
    ],
    tags: ['gaming', 'laptop', 'high-performance']
  })
  .select()
  .single();
```

#### Actualizar con Optimistic Updates
```javascript
// Update optimista para UX fluida
const updateProduct = async (productId, updates) => {
  // 1. Update local state inmediatamente
  setProducts(prev => prev.map(p => 
    p.id === productId ? { ...p, ...updates } : p
  ));

  // 2. Update en servidor
  const { data, error } = await supabase
    .from('products')
    .update(updates)
    .eq('id', productId)
    .select()
    .single();

  if (error) {
    // Revertir cambio local en caso de error
    setProducts(prev => prev.map(p => 
      p.id === productId ? originalProduct : p
    ));
    throw error;
  }

  return data;
};
```

### 🗑️ Eliminación (Delete)

#### Soft Delete vs Hard Delete
```javascript
// Soft delete (recomendado para productos)
const { data, error } = await supabase
  .from('products')
  .update({ 
    is_active: false,
    deleted_at: new Date().toISOString()
  })
  .eq('id', productId);

// Hard delete (para datos temporales)
const { error } = await supabase
  .from('cart_items')
  .delete()
  .eq('user_id', userId)
  .lt('created_at', oneWeekAgo);
```

## Triggers y Funciones

### ⚙️ Automatización con Triggers

```sql
-- Function para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger en tabla products
CREATE TRIGGER update_products_updated_at 
  BEFORE UPDATE ON products 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Function para generar order_number único
CREATE OR REPLACE FUNCTION generate_order_number()
RETURNS TRIGGER AS $$
BEGIN
  NEW.order_number = 'ORD-' || TO_CHAR(NOW(), 'YYYYMMDD') || '-' || 
    LPAD(EXTRACT(epoch FROM NOW())::text, 10, '0');
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER set_order_number 
  BEFORE INSERT ON orders 
  FOR EACH ROW 
  EXECUTE FUNCTION generate_order_number();
```

### 🔄 Stored Procedures

```sql
-- Función para procesar orden completa
CREATE OR REPLACE FUNCTION process_order(
  p_user_id UUID,
  p_items JSONB,
  p_shipping_address JSONB,
  p_payment_method TEXT
)
RETURNS TABLE(order_id UUID, total_amount DECIMAL) AS $$
DECLARE
  v_order_id UUID;
  v_total DECIMAL := 0;
  item JSONB;
BEGIN
  -- 1. Crear orden
  INSERT INTO orders (user_id, shipping_address, payment_method, status)
  VALUES (p_user_id, p_shipping_address, p_payment_method, 'pending')
  RETURNING id INTO v_order_id;

  -- 2. Procesar items
  FOR item IN SELECT * FROM jsonb_array_elements(p_items)
  LOOP
    INSERT INTO order_items (order_id, product_id, quantity, unit_price, total_price)
    VALUES (
      v_order_id,
      (item->>'product_id')::UUID,
      (item->>'quantity')::INTEGER,
      (item->>'price')::DECIMAL,
      (item->>'quantity')::INTEGER * (item->>'price')::DECIMAL
    );
    
    v_total := v_total + ((item->>'quantity')::INTEGER * (item->>'price')::DECIMAL);
  END LOOP;

  -- 3. Actualizar total en orden
  UPDATE orders SET total_amount = v_total WHERE id = v_order_id;

  RETURN QUERY SELECT v_order_id, v_total;
END;
$$ LANGUAGE plpgsql;
```

## Integración con bolt.new

### 🎯 Prompts Efectivos para Supabase

```javascript
// Prompt para generar CRUD completo
"Crea un hook React useProducts para Supabase que incluya:
- Fetch de productos con paginación
- Búsqueda y filtros
- CRUD operations (create, update, delete)
- Loading states y error handling
- TypeScript tipos correctos
- Optimistic updates para UX fluida"

// Prompt para dashboard admin
"Crea un dashboard de administración para productos que incluya:
- Tabla de productos con sorting y filtros
- Formulario de crear/editar producto
- Upload de imágenes a Supabase Storage
- Gestión de categorías
- Analytics básicos (total productos, ventas, etc.)
- Responsive design con Tailwind CSS"
```

### 📱 Componentes React + Supabase

```javascript
// Hook personalizado para productos
const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async (filters = {}) => {
    setLoading(true);
    try {
      let query = supabase
        .from('products')
        .select(`
          *,
          categories (
            id,
            name,
            slug
          )
        `)
        .eq('is_active', true);

      if (filters.category) {
        query = query.eq('category_id', filters.category);
      }
      
      if (filters.search) {
        query = query.textSearch('name', filters.search);
      }

      const { data, error } = await query;
      
      if (error) throw error;
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { products, loading, error, fetchProducts };
};
```

## Ejercicios Prácticos

### 🎯 Desafío 1: E-commerce Backend
{{name}}, crea un backend completo para e-commerce:

1. **Diseña el esquema** de 5 tablas relacionadas
2. **Implementa CRUD** para productos y categorías
3. **Crea functions** para cálculos de precios
4. **Configura triggers** para auditoría automática
5. **Prueba las consultas** con datos reales

### 🏆 Desafío 2: Dashboard Analytics
Construye un dashboard que muestre:
- Total de productos por categoría
- Ventas por mes
- Productos más populares
- Inventario bajo stock
- Métricas en tiempo real

## Próximos Pasos

{{name}}, en la siguiente lección profundizaremos en:
- **Consultas complejas** con JOINs avanzados
- **Optimización de performance** con índices
- **Views materialized** para analytics
- **Partitioning** para datos masivos
- **Backup y recovery** strategies

¡Has dado el primer paso hacia el dominio de Supabase! Ahora tienes una base sólida para construir backends escalables y robustos.

**¡Continuemos construyendo la columna vertebral de tus aplicaciones!** 🚀`,
        learningObjectives: {
          0: 'Configurar Supabase como backend completo desde bolt.new',
          1: 'Diseñar esquemas de base de datos profesionales y escalables',
          2: 'Implementar operaciones CRUD avanzadas con TypeScript',
          3: 'Crear triggers y funciones para automatización de procesos',
          4: 'Integrar Supabase perfectamente con componentes React'
        },
        badgeName: 'Conector Supremo',
        srcodeCommentary: '¡Excelente, {{name}}! Ahora tienes más conexiones que una red social. Supabase + bolt.new = combinación más poderosa que café con azúcar. ¡Ya puedes llamarte oficialmente "Backend Whisperer"!',
        quizQuestions: {
          'q2-1-1': {
            question: '¿Cuál es la principal ventaja de Supabase sobre otros backends-as-a-service?',
            options: [
              'Es más barato que todas las alternativas',
              'Solo funciona con bolt.new',
              'Es open-source y usa PostgreSQL real con APIs automáticas',
              'No requiere configuración alguna'
            ],
            correctAnswer: 2,
            explanation: 'Supabase destaca por ser open-source, usar PostgreSQL completo (no una base de datos limitada), generar APIs RESTful automáticamente desde el esquema, y ofrecer características avanzadas como RLS y funciones.'
          },
          'q2-1-2': {
            question: '¿Qué comando SQL es correcto para crear una tabla con relación foreign key?',
            options: [
              'CREATE TABLE orders (user_id REFERENCES users);',
              'CREATE TABLE orders (user_id UUID REFERENCES users(id));',
              'CREATE TABLE orders (user_id FOREIGN KEY users(id));',
              'CREATE TABLE orders (user_id LINK TO users.id);'
            ],
            correctAnswer: 1,
            explanation: 'La sintaxis correcta incluye el tipo de dato (UUID) seguido de REFERENCES tabla(columna). Esto crea una foreign key que mantiene integridad referencial.'
          },
          'q2-1-3': {
            question: '¿Cuál es el patrón recomendado para manejar actualizaciones optimistas en React + Supabase?',
            options: [
              'Esperar siempre la respuesta del servidor antes de actualizar UI',
              'Actualizar UI inmediatamente, luego servidor, revertir si hay error',
              'Solo actualizar en el servidor',
              'Actualizar UI y servidor simultáneamente sin validación'
            ],
            correctAnswer: 1,
            explanation: 'Las actualizaciones optimistas mejoran UX al actualizar la UI inmediatamente, luego enviar al servidor, y revertir localmente solo si hay error. Esto hace que la app se sienta más rápida.'
          },
          'q2-1-4': {
            question: '¿Para qué se usan los triggers en Supabase/PostgreSQL?',
            options: [
              'Solo para validar datos de entrada',
              'Automatizar acciones como actualizar timestamps o generar IDs únicos',
              'Reemplazar las APIs REST',
              'Únicamente para logging de errores'
            ],
            correctAnswer: 1,
            explanation: 'Los triggers son funciones que se ejecutan automáticamente en respuesta a eventos de la base de datos (INSERT, UPDATE, DELETE), perfectos para automatizar tareas como actualizar updated_at o generar códigos únicos.'
          },
          'q2-1-5': {
            question: '¿Cuál es la diferencia principal entre soft delete y hard delete?',
            options: [
              'Soft delete es más rápido que hard delete',
              'Hard delete elimina realmente, soft delete solo marca como inactivo',
              'Soft delete usa menos espacio en disco',
              'No hay diferencia, son sinónimos'
            ],
            correctAnswer: 1,
            explanation: 'Soft delete marca registros como eliminados (ej: is_active=false) sin borrarlos físicamente, permitiendo recuperación y auditoría. Hard delete los elimina permanentemente de la base de datos.'
          }
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