# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vibe Coding Academy is an AI-powered coding education platform that teaches bolt.new development through an interactive web application. The project features SrCode, a sarcastic AI mentor that provides personalized learning assistance.

## Development Commands

### Main Project (Vite-based)
```bash
npm run dev          # Start development server
npm run build        # Build for production (tsc + vite build)
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

### Secondary Project (Create React App)
```bash
cd vibe-coding-academy/
npm start           # Start development server
npm run build       # Build for production
npm test            # Run tests
```

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS with custom design system
- **Authentication**: Clerk (primary) with Supabase integration
- **Database**: Supabase (PostgreSQL)
- **AI Integration**: OpenRouter API for SrCode AI mentor
- **State Management**: Zustand + React Context patterns
- **Deployment**: Netlify with PWA capabilities

## Architecture

### Project Structure
```
src/
├── components/           # React components
│   ├── gamification/    # XP, badges, streaks
│   ├── layout/          # Layout components
│   ├── lessons/         # Lesson-specific components
│   ├── srcode/          # AI mentor components
│   └── ui/              # Reusable UI components
├── contexts/            # React contexts
├── data/                # Static data & translations
├── hooks/               # Custom React hooks
├── lib/                 # External service configs
├── pages/               # Route components
├── stores/              # Zustand stores
└── types/               # TypeScript definitions
```

### State Management Patterns
- **Zustand**: For global state (auth, user progress, SrCode interactions)
- **React Context**: For language/i18n and authentication
- **Hybrid approach**: Zustand for complex state, Context for simple providers

### Authentication Flow
- **Primary**: Clerk for OAuth (Google, GitHub) and email/password
- **Secondary**: Supabase for database-level security
- **Sync mechanism**: Automatic user profile creation in Supabase

### Database Schema (Supabase)
Key tables:
- `users`: User profiles with XP, levels, streaks
- `user_progress`: Lesson completion tracking
- `badges`: Achievement system
- `user_badges`: User-earned badges
- `srcode_interactions`: AI mentor chat history
- `leaderboard`: User rankings

All tables use Row Level Security (RLS) with Clerk-Supabase authentication sync.

## Key Features

### Gamification System
- XP points and level progression
- Badge achievement system
- Streak tracking
- Leaderboard competition

### AI Mentor (SrCode)
- Personality-driven responses using OpenRouter API
- Lesson-context awareness
- Multilingual support (10+ languages)
- Fallback system for reliability when API unavailable

### Internationalization
- 10+ language support via translation key system
- Dynamic language switching
- Fallback to English

## Environment Variables Required

```env
VITE_CLERK_PUBLISHABLE_KEY=     # Clerk authentication
VITE_SUPABASE_URL=              # Supabase database URL
VITE_SUPABASE_ANON_KEY=         # Supabase anonymous key
VITE_OPENROUTER_API_KEY=        # OpenRouter AI API (optional)
```

## Configuration Files

- `vite.config.ts`: Build configuration with PWA setup
- `tailwind.config.js`: Custom design system with CSS variables
- `tsconfig.json`: TypeScript project references setup
- `netlify.toml`: Deployment configuration with security headers

## Development Notes

- TypeScript strict mode enabled
- Component-based architecture with separation of concerns
- Code splitting with manual chunks for performance
- PWA with service worker for offline functionality
- Database migrations managed through Supabase
- Deployment via Netlify with continuous deployment