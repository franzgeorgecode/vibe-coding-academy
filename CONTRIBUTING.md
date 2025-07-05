# Contributing to Vibe Coding Academy

Thank you for your interest in contributing to Vibe Coding Academy! 🚀

## How to Contribute

### 🐛 Bug Reports
1. Check existing issues first
2. Use the bug report template
3. Include steps to reproduce
4. Add screenshots if applicable

### ✨ Feature Requests
1. Check if feature already exists
2. Use the feature request template
3. Explain the use case
4. Consider implementation complexity

### 🔧 Code Contributions

#### Setup Development Environment
```bash
# Fork and clone the repository
git clone https://github.com/your-username/vibe-coding-academy.git
cd vibe-coding-academy

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Edit .env.local with your keys

# Start development server
npm run dev
```

#### Development Guidelines
- Use TypeScript for all new code
- Follow existing code style and conventions
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

#### Pull Request Process
1. Create a feature branch from `main`
2. Make your changes
3. Run tests: `npm test`
4. Run linting: `npm run lint`
5. Build the project: `npm run build`
6. Submit a pull request

### 📚 Documentation
- Improve README clarity
- Add code comments
- Update API documentation
- Create tutorials and guides

### 🌍 Translations
We welcome translations! Current languages:
- English (complete)
- Spanish (complete)
- Need help with: French, German, Portuguese, Italian, Japanese, Korean, Chinese, Russian

To add a translation:
1. Copy the English translations in `src/data/translations.ts`
2. Translate all strings while keeping the structure
3. Test the translation in the app
4. Submit a pull request

## Code Style

### TypeScript
- Use strict typing
- Prefer interfaces over types for object shapes
- Use meaningful variable names
- Add JSDoc comments for complex functions

### React
- Use functional components with hooks
- Follow the existing component structure
- Use Tailwind CSS for styling
- Implement proper error boundaries

### Git Commits
Use conventional commit format:
```
feat: add new achievement system
fix: resolve quiz completion bug
docs: update setup instructions
style: improve button hover effects
```

## Community Guidelines

### Be Respectful
- Use inclusive language
- Be constructive in feedback
- Help newcomers learn
- Celebrate others' contributions

### Quality Standards
- Test your changes thoroughly
- Consider performance implications
- Maintain backward compatibility
- Follow accessibility guidelines

## Getting Help

- 💬 [Discussions](https://github.com/your-username/vibe-coding-academy/discussions) for questions
- 🐛 [Issues](https://github.com/your-username/vibe-coding-academy/issues) for bugs
- 📧 Email: contributors@vibecoding.academy

## Recognition

Contributors will be:
- Listed in the README
- Featured in release notes
- Eligible for special badges
- Invited to maintainer discussions

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for helping make Vibe Coding Academy the best way to learn bolt.new! 🎓✨