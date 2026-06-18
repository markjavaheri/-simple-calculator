# 🤝 Contributing to Simple Calculator

Thank you for your interest in contributing! This project is designed to be beginner-friendly, so don't worry if you're new to coding or GitHub.

## 🎯 Quick Start

1. **New to the project?** Start with [BEGINNER_GUIDE.md](BEGINNER_GUIDE.md)
2. **Need help with Bob?** Check [BOB_GUIDE.md](BOB_GUIDE.md)
3. **Want to collaborate?** Read [COLLABORATION_GUIDE.md](COLLABORATION_GUIDE.md)
4. **Visual learner?** See [WORKFLOW_DIAGRAM.md](WORKFLOW_DIAGRAM.md)

## 📋 Ways to Contribute

### 🐛 Report Bugs
Found a bug? [Create a bug report](../../issues/new?template=bug_report.md)

### 💡 Suggest Features
Have an idea? [Submit a feature request](../../issues/new?template=feature_request.md)

### 📝 Improve Documentation
Help make our guides better! Documentation improvements are always welcome.

### 💻 Write Code
Pick an issue and start coding! Look for issues labeled `good first issue` if you're new.

### 👀 Review Pull Requests
Help review others' code. Fresh eyes catch bugs!

## 🚀 Getting Started

### 1. Fork and Clone

```bash
# Fork the repository on GitHub, then:
git clone https://github.com/YOUR-USERNAME/simple-calculator.git
cd simple-calculator
```

### 2. Create a Branch

```bash
git checkout -b feature/your-feature-name
```

**Branch naming:**
- `feature/add-multiply` - New features
- `fix/subtract-bug` - Bug fixes
- `docs/update-readme` - Documentation
- `style/button-colors` - Style changes

### 3. Make Changes

Use Bob to help you:
```
Bob, help me add a multiply button
```

### 4. Test Your Changes

- Open `index.html` in your browser
- Test normal cases
- Test edge cases (0, negatives, decimals)
- Check for console errors

### 5. Commit Your Changes

```bash
git add .
git commit -m "Add multiply button functionality"
```

**Good commit messages:**
- ✅ "Add multiply button functionality"
- ✅ "Fix subtract button returning NaN"
- ✅ "Improve button contrast for accessibility"
- ❌ "changes"
- ❌ "fix"
- ❌ "update"

### 6. Push and Create PR

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

## 📏 Code Style

### JavaScript
- Use clear, descriptive variable names
- Add comments for complex logic
- Keep functions small and focused
- Use `const` and `let`, not `var`

```javascript
// ✅ Good
function calculateSum(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

// ❌ Avoid
function calc(a, b) {
    return a + b;
}
```

### HTML
- Use semantic HTML elements
- Add ARIA labels for accessibility
- Keep structure clean and organized

### CSS
- Use clear class names
- Group related styles
- Add comments for sections
- Follow mobile-first approach

## ✅ Pull Request Checklist

Before submitting your PR:

- [ ] Code works as expected
- [ ] Tested in browser
- [ ] Code is well-commented
- [ ] Follows project style
- [ ] No console errors
- [ ] Documentation updated (if needed)
- [ ] Tested edge cases

## 🔍 Code Review Process

1. **Submit PR** with clear description
2. **Automated checks** run (if configured)
3. **Team reviews** your code
4. **Address feedback** if requested
5. **PR is merged** when approved

**Review timeline:** Usually within 2-3 days

## 🎓 Learning Resources

### For Beginners
- [MDN Web Docs](https://developer.mozilla.org/en-US/)
- [JavaScript.info](https://javascript.info/)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)

### Project-Specific
- [BEGINNER_GUIDE.md](BEGINNER_GUIDE.md) - Start here
- [BOB_GUIDE.md](BOB_GUIDE.md) - Using Bob AI
- [COLLABORATION_GUIDE.md](COLLABORATION_GUIDE.md) - Team workflow

## 💬 Communication

### Where to Ask Questions
- **GitHub Issues** - Project-specific questions
- **Pull Request comments** - Code-specific questions
- **Issue comments** - Task-specific questions

### How to Ask Good Questions
1. **Be specific** - "The add button returns NaN" vs "It doesn't work"
2. **Provide context** - What you tried, what happened
3. **Include details** - Browser, OS, steps to reproduce
4. **Be patient** - We're all volunteers

## 🏆 Recognition

Contributors are recognized in:
- GitHub contributors list
- Project README (for significant contributions)
- Release notes

## 📜 Code of Conduct

### Our Standards

**Be:**
- Respectful and inclusive
- Patient with beginners
- Constructive in feedback
- Collaborative and helpful

**Don't:**
- Use offensive language
- Make personal attacks
- Harass or discriminate
- Share others' private information

### Reporting Issues

If you experience or witness unacceptable behavior, please report it by:
- Opening a confidential issue
- Contacting project maintainers directly

## 🎯 Good First Issues

New to the project? Look for issues labeled:
- `good first issue` - Perfect for beginners
- `help wanted` - We need your help!
- `documentation` - Improve our docs

## 🔧 Development Setup

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code recommended)
- Git installed
- Bob extension for VS Code

### Optional Tools
- Live Server extension for VS Code
- Browser DevTools
- Git GUI client (if you prefer)

## 📊 Project Structure

```
simple-calculator/
├── index.html              # Main HTML file
├── style.css               # All styles
├── calculator.js           # All JavaScript
├── README.md               # Project overview
├── CONTRIBUTING.md         # This file
├── BEGINNER_GUIDE.md       # Beginner's guide
├── BOB_GUIDE.md            # Bob AI guide
├── COLLABORATION_GUIDE.md  # Collaboration guide
├── WORKFLOW_DIAGRAM.md     # Visual workflow
├── GITHUB_SETUP.md         # GitHub setup
├── .gitignore              # Git ignore rules
└── .github/
    ├── ISSUE_TEMPLATE/     # Issue templates
    └── pull_request_template.md
```

## 🚫 What NOT to Contribute

Please avoid:
- Unrelated features (keep it a simple calculator)
- Breaking changes without discussion
- Code without tests
- Undocumented complex features
- Dependencies without good reason

## 🎉 Thank You!

Every contribution, no matter how small, makes this project better. We appreciate:
- Code contributions
- Bug reports
- Documentation improvements
- Helping other contributors
- Spreading the word

**Happy coding!** 🚀

---

## 📞 Need Help?

- **Stuck?** Ask Bob: "Bob, help me with [problem]"
- **Questions?** Open an issue
- **Want to chat?** Comment on an issue
- **Found a typo?** Submit a quick PR!

Remember: **Everyone was a beginner once. We're here to help you learn!** 💪