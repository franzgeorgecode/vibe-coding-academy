# 🚀 Vibe Coding Academy - bolt.new Mastery Course

<div align="center">

![Vibe Coding Academy](https://img.shields.io/badge/Vibe%20Coding%20Academy-2025-blue?style=for-the-badge)
![bolt.new](https://img.shields.io/badge/bolt.new-Powered-orange?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)

*Master AI-powered web development with bolt.new through an epic interactive learning experience*

</div>

## 🌟 Epic Features for bolt.new 2025 Hackathon

### 🎓 **Comprehensive Learning Experience**
- **18 Interactive Lessons** covering all bolt.new concepts from the official documentation
- **Real-time AI Mentor (SrCode)** providing personalized guidance with personality
- **Progressive Skill Building** from basics to advanced deployment strategies
- **Multilingual Support** in 10+ languages for global accessibility

### 🎮 **Gamification & Engagement**
- **Epic XP System** with level progression and achievements
- **Rare Badge Collection** system with 4 rarity tiers (Common → Legendary)
- **Learning Streaks** to maintain momentum
- **Achievement Notifications** with particle effects and animations
- **Global Leaderboard** for competitive learning

### 📜 **Certificate System**
- **Personalized Certificates** with editable names
- **PDF Download** (only available after completing all 18 lessons)
- **Professional Design** suitable for portfolios and LinkedIn
- **Digital Verification** with completion timestamps

### 🛠 **Technical Excellence**
- **Modern Tech Stack**: React 18, TypeScript, Tailwind CSS, Framer Motion
- **Secure Authentication**: Clerk integration with Google/GitHub OAuth
- **Real-time Database**: Supabase with RLS and real-time subscriptions
- **PWA Support**: Offline functionality and app-like experience
- **Performance Optimized**: Code splitting and lazy loading

## 🎯 Curriculum Overview

### **Level 1: Foundation Mastery**
1. **Introduction to bolt.new** - Understanding AI-powered development
2. **Prompt Engineering Mastery** - The CLEAR method and best practices  
3. **Interface Navigation** - Mastering the bolt.new workspace

### **Level 2: Database & Storage**
4. **Database Integration** - Supabase and data management
5. **Advanced Database Operations** - Complex queries and relationships
6. **Real-time Features** - Live data and subscriptions

### **Level 3: Authentication & Security**
7. **User Authentication** - Secure login systems
8. **Advanced Security** - Best practices and patterns
9. **Social Authentication** - OAuth and social logins

### **Level 4: Deployment & Hosting**
10. **Cloud Deployment** - Netlify and production deployment
11. **Custom Domains** - Professional hosting setup
12. **CI/CD Automation** - Automated deployment pipelines

### **Level 5: Integrations & APIs**
13. **Version Control** - Git integration and workflows
14. **Payment Systems** - Stripe integration
15. **Design-to-Code** - Figma integration

### **Level 6: Advanced Mastery**
16. **Performance Optimization** - Speed and efficiency
17. **Advanced Patterns** - Complex application architecture
18. **Master Certification** - Final assessment and certification

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Supabase account for database
- Clerk account for authentication

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/vibe-coding-academy.git
cd vibe-coding-academy

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your keys:
# VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
# VITE_SUPABASE_URL=your_supabase_url
# VITE_SUPABASE_ANON_KEY=your_supabase_key
# VITE_OPENROUTER_API_KEY=your_openrouter_key (optional)

# Run database migrations
npm run db:migrate

# Start development server
npm run dev
```

### Environment Variables Required

```env
VITE_CLERK_PUBLISHABLE_KEY=     # Clerk authentication
VITE_SUPABASE_URL=              # Supabase database URL
VITE_SUPABASE_ANON_KEY=         # Supabase anonymous key
VITE_OPENROUTER_API_KEY=        # OpenRouter AI API (optional for SrCode)
```

## 🏗 Architecture

### **Frontend Stack**
- **React 18** with TypeScript for type safety
- **Vite** for lightning-fast development
- **Tailwind CSS** with custom design system
- **Framer Motion** for smooth animations
- **Clerk** for authentication

### **Backend Services**
- **Supabase** for database, auth, and real-time features
- **OpenRouter** for AI mentor functionality
- **Netlify** for deployment and hosting

### **Key Components**
```
src/
├── components/
│   ├── gamification/     # XP, badges, achievements
│   ├── layout/          # Navigation, headers
│   ├── lessons/         # Lesson content and quizzes
│   ├── srcode/          # AI mentor chat
│   └── ui/              # Reusable components
├── stores/              # Zustand state management
├── contexts/            # React contexts
├── data/                # Lessons and translations
└── lib/                 # External service configs
```

## 🎮 Gamification Features

### **XP & Leveling System**
- Earn 15-100 XP per lesson completion
- Level up every 100 XP
- Bonus XP for perfect scores and speed

### **Badge System**
- **Common Badges**: Basic lesson completions
- **Rare Badges**: Special achievements
- **Epic Badges**: Major milestones
- **Legendary Badges**: Master-level accomplishments

### **Achievements**
- First Lesson Complete
- Perfect Score (100%)
- Speed Demon (< 5 minutes)
- Week Streak
- Course Master

## 🌍 Internationalization

Fully translated into:
- English (en)
- Spanish (es)
- French (fr)
- German (de)
- Portuguese (pt)
- Italian (it)
- Japanese (ja)
- Korean (ko)
- Chinese (zh)
- Russian (ru)

## 📱 PWA Features

- **Offline Support**: Continue learning without internet
- **App Installation**: Install as native app
- **Push Notifications**: Streak reminders and achievements
- **Background Sync**: Automatic progress saving

## 🔐 Security Features

- **Row Level Security (RLS)** on all database tables
- **JWT Authentication** with Clerk
- **CORS Protection** and CSP headers
- **Input Validation** and sanitization
- **API Rate Limiting**

## 🚀 Deployment

### Automatic Deployment
Connected to Netlify for automatic deployment on push to main branch.

### Manual Deployment
```bash
npm run build
npm run preview  # Test build locally
```

### Database Migrations
```bash
# Apply all migrations
npm run db:migrate

# Reset database (development only)
npm run db:reset
```

## 🤖 AI Features

### **SrCode AI Mentor**
- **Personality-driven responses** with humor and sarcasm
- **Context-aware help** based on current lesson
- **Multilingual support** in all supported languages
- **Fallback responses** when API is unavailable

### **Smart Prompting**
- Learn the CLEAR method for effective prompts
- Progressive prompting strategies
- Cost optimization techniques
- Token management best practices

## 📊 Analytics & Tracking

- **User Progress Tracking**: Lesson completion and scores
- **Time Analytics**: Study time and pace tracking
- **Performance Metrics**: Quiz scores and improvement
- **Engagement Data**: Streaks and session frequency

## 🏆 Why This Will Win the bolt.new 2025 Hackathon

### **1. Comprehensive Education**
- Covers ALL official bolt.new documentation
- Progressive learning path from beginner to expert
- Real-world project examples and best practices

### **2. Exceptional User Experience**
- Beautiful, responsive design with smooth animations
- Gamification that actually motivates learning
- AI mentor that provides personalized guidance

### **3. Technical Innovation**
- Modern tech stack with best practices
- Real-time features and offline capability
- Scalable architecture ready for thousands of users

### **4. Global Impact**
- Multilingual support for worldwide accessibility
- Open-source for community contributions
- Educational focus aligned with bolt.new's mission

### **5. Professional Quality**
- Production-ready code with comprehensive testing
- Security best practices implemented
- Performance optimized for all devices

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **bolt.new team** for creating an amazing platform
- **Supabase** for the incredible backend infrastructure
- **Clerk** for seamless authentication
- **OpenRouter** for AI model access
- **The open-source community** for amazing tools and libraries

---

<div align="center">

**Built with ❤️ for the bolt.new community**

[Live Demo](https://vibe-coding-academy.netlify.app) • [Documentation](docs/) • [Discord](https://discord.gg/vibe-coding)

</div>