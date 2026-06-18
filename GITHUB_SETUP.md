# 🚀 GitHub Repository Setup Guide

Step-by-step instructions for setting up the Simple Calculator project on GitHub.

## 📋 Table of Contents

1. [Creating the Repository](#creating-the-repository)
2. [Initial Setup](#initial-setup)
3. [Configuring Repository Settings](#configuring-repository-settings)
4. [Setting Up Branch Protection](#setting-up-branch-protection)
5. [Creating Issue Templates](#creating-issue-templates)
6. [Creating Pull Request Template](#creating-pull-request-template)
7. [Adding Collaborators](#adding-collaborators)
8. [First Push](#first-push)

---

## 🎯 Creating the Repository

### Step 1: Create New Repository

1. **Go to GitHub** and sign in
2. **Click** the "+" icon (top-right) → "New repository"
3. **Fill in details:**
   - **Repository name:** `simple-calculator`
   - **Description:** `A beginner-friendly calculator project for learning addition and subtraction with easy collaboration using Bob and GitHub`
   - **Visibility:** Public (or Private if preferred)
   - **Initialize:** ✅ Add a README file
   - **Add .gitignore:** None (we'll create our own)
   - **Choose a license:** MIT License (recommended)

4. **Click** "Create repository"

---

## 🛠️ Initial Setup

### Step 2: Clone to Your Computer

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/simple-calculator.git

# Navigate into the directory
cd simple-calculator
```

### Step 3: Add Project Files

Copy all the project files into the repository:

```bash
# If you have the files elsewhere, copy them
cp -r /path/to/simple-calculator/* .

# Or create them using the guides
```

### Step 4: Create .gitignore

Create a `.gitignore` file to exclude unnecessary files:

```bash
# Create .gitignore
touch .gitignore
```

Add this content to `.gitignore`:

```
# OS Files
.DS_Store
Thumbs.db

# Editor Files
.vscode/
.idea/
*.swp
*.swo
*~

# Logs
*.log
npm-debug.log*

# Temporary Files
*.tmp
.temp/

# Node modules (if you add npm later)
node_modules/

# Environment variables
.env
.env.local
```

---

## ⚙️ Configuring Repository Settings

### Step 5: Configure General Settings

1. **Go to** your repository on GitHub
2. **Click** "Settings" tab
3. **Under "General":**
   - ✅ Enable "Issues"
   - ✅ Enable "Projects"
   - ✅ Enable "Discussions" (optional, for team chat)
   - ✅ Enable "Wiki" (optional, for documentation)

### Step 6: Set Up Topics

Add topics to help others find your project:

1. **Click** the gear icon next to "About"
2. **Add topics:**
   - `calculator`
   - `beginner-friendly`
   - `javascript`
   - `html-css-javascript`
   - `learning-project`
   - `collaboration`
   - `bob-ai`

---

## 🔒 Setting Up Branch Protection

### Step 7: Protect Main Branch

1. **Go to** Settings → Branches
2. **Click** "Add rule"
3. **Branch name pattern:** `main`
4. **Enable these rules:**
   - ✅ Require a pull request before merging
   - ✅ Require approvals (set to 1)
   - ✅ Dismiss stale pull request approvals when new commits are pushed
   - ✅ Require status checks to pass before merging (if you add CI later)
   - ✅ Require conversation resolution before merging
   - ✅ Include administrators (optional)

5. **Click** "Create" or "Save changes"

**Why?** This prevents direct pushes to main and ensures all changes are reviewed.

---

## 📝 Creating Issue Templates

### Step 8: Set Up Issue Templates

1. **Go to** Settings → Features → Issues → "Set up templates"
2. **Click** "Add template" → "Custom template"

#### Bug Report Template

Create `.github/ISSUE_TEMPLATE/bug_report.md`:

```markdown
---
name: Bug Report
about: Report a bug or issue
title: '[BUG] '
labels: bug
assignees: ''
---

## 🐛 Bug Description
A clear description of what the bug is.

## 📋 Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. Enter '...'
4. See error

## ✅ Expected Behavior
What you expected to happen.

## ❌ Actual Behavior
What actually happened.

## 📸 Screenshots
If applicable, add screenshots.

## 💻 Environment
- Browser: [e.g., Chrome, Firefox]
- OS: [e.g., Windows, Mac, Linux]
- Version: [e.g., 1.0]

## 📝 Additional Context
Any other information about the problem.
```

#### Feature Request Template

Create `.github/ISSUE_TEMPLATE/feature_request.md`:

```markdown
---
name: Feature Request
about: Suggest a new feature
title: '[FEATURE] '
labels: enhancement
assignees: ''
---

## 💡 Feature Description
A clear description of the feature you'd like to add.

## 🎯 Problem It Solves
What problem does this feature solve?

## 📋 Proposed Solution
How would you implement this feature?

## 🔄 Alternatives Considered
What other solutions did you consider?

## 📝 Additional Context
Any other information or screenshots.

## ✅ Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3
```

#### Good First Issue Template

Create `.github/ISSUE_TEMPLATE/good_first_issue.md`:

```markdown
---
name: Good First Issue
about: Beginner-friendly task
title: '[GOOD FIRST ISSUE] '
labels: good first issue
assignees: ''
---

## 👋 Welcome!
This is a great task for someone new to the project!

## 📋 Task Description
Clear description of what needs to be done.

## 🎯 Goal
What should be accomplished.

## 📝 Steps to Complete
1. Step 1
2. Step 2
3. Step 3

## 💡 Helpful Resources
- Link to relevant documentation
- Link to similar code
- Link to guides

## ✅ Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2

## 🆘 Need Help?
Ask questions in the comments or check out:
- [BEGINNER_GUIDE.md](../BEGINNER_GUIDE.md)
- [BOB_GUIDE.md](../BOB_GUIDE.md)
```

---

## 📄 Creating Pull Request Template

### Step 9: Set Up PR Template

Create `.github/pull_request_template.md`:

```markdown
## 📝 Description
Brief description of what this PR does.

## 🎯 Related Issue
Closes #(issue number)

## 🔄 Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Code refactoring
- [ ] Performance improvement

## 🧪 How to Test
1. Step 1
2. Step 2
3. Expected result

## 📸 Screenshots (if applicable)
Add screenshots here.

## ✅ Checklist
- [ ] Code works as expected
- [ ] Tested in browser
- [ ] Code is well-commented
- [ ] Follows project style
- [ ] Documentation updated (if needed)
- [ ] No console errors
- [ ] Tested edge cases

## 📝 Additional Notes
Any additional information for reviewers.
```

---

## 👥 Adding Collaborators

### Step 10: Invite Team Members

1. **Go to** Settings → Collaborators
2. **Click** "Add people"
3. **Enter** their GitHub username or email
4. **Select** permission level:
   - **Write** - Can push to repository
   - **Maintain** - Can manage issues and PRs
   - **Admin** - Full access

5. **Click** "Add [username] to this repository"

### Step 11: Create Teams (Optional)

For larger groups:

1. **Go to** your organization (if applicable)
2. **Click** "Teams" → "New team"
3. **Create teams:**
   - `maintainers` - Core team
   - `contributors` - Active contributors
   - `beginners` - New contributors

---

## 🚀 First Push

### Step 12: Push Initial Code

```bash
# Make sure you're in the project directory
cd simple-calculator

# Add all files
git add .

# Commit with a clear message
git commit -m "Initial commit: Add calculator with collaboration guides"

# Push to GitHub
git push origin main
```

### Step 13: Verify on GitHub

1. **Go to** your repository on GitHub
2. **Check that all files** are there:
   - index.html
   - style.css
   - calculator.js
   - README.md
   - BEGINNER_GUIDE.md
   - BOB_GUIDE.md
   - COLLABORATION_GUIDE.md
   - WORKFLOW_DIAGRAM.md
   - .gitignore

---

## 📊 Setting Up Project Board

### Step 14: Create Project Board

1. **Go to** "Projects" tab
2. **Click** "New project"
3. **Choose** "Board" template
4. **Name it:** "Simple Calculator Development"
5. **Add columns:**
   - 📋 To Do
   - 🏗️ In Progress
   - 👀 In Review
   - ✅ Done

### Step 15: Add Initial Issues

Create some starter issues:

1. **Good First Issues:**
   - "Add multiply button"
   - "Add divide button"
   - "Improve button colors"
   - "Add keyboard shortcuts"

2. **Documentation:**
   - "Add code comments"
   - "Create video tutorial"
   - "Add FAQ section"

3. **Enhancements:**
   - "Add dark mode"
   - "Add calculation history export"
   - "Add scientific calculator mode"

---

## 🎓 Setting Up GitHub Pages (Optional)

### Step 16: Enable GitHub Pages

To host your calculator online:

1. **Go to** Settings → Pages
2. **Source:** Deploy from a branch
3. **Branch:** main
4. **Folder:** / (root)
5. **Click** "Save"

Your calculator will be live at:
`https://YOUR-USERNAME.github.io/simple-calculator/`

---

## 📚 Creating Documentation

### Step 17: Set Up Wiki (Optional)

1. **Go to** "Wiki" tab
2. **Create pages:**
   - Home (overview)
   - Getting Started
   - Contributing Guidelines
   - Code Style Guide
   - FAQ

---

## 🔔 Setting Up Notifications

### Step 18: Configure Notifications

**For maintainers:**
1. **Go to** repository → Watch → Custom
2. **Enable:**
   - ✅ Issues
   - ✅ Pull requests
   - ✅ Releases
   - ✅ Discussions

**For contributors:**
1. **Watch** the repository
2. **Enable** notifications for:
   - Issues you're assigned to
   - PRs you're mentioned in

---

## 🎯 Repository Labels

### Step 19: Create Useful Labels

Add these labels to organize issues:

**Priority:**
- `priority: high` (red)
- `priority: medium` (orange)
- `priority: low` (yellow)

**Type:**
- `bug` (red)
- `enhancement` (blue)
- `documentation` (green)
- `question` (purple)

**Status:**
- `good first issue` (green)
- `help wanted` (blue)
- `in progress` (yellow)
- `blocked` (red)

**Difficulty:**
- `difficulty: easy` (green)
- `difficulty: medium` (yellow)
- `difficulty: hard` (red)

---

## ✅ Setup Checklist

Before inviting collaborators, verify:

- [ ] Repository created and configured
- [ ] All project files pushed
- [ ] .gitignore configured
- [ ] Branch protection enabled
- [ ] Issue templates created
- [ ] PR template created
- [ ] Labels organized
- [ ] Project board set up
- [ ] Initial issues created
- [ ] README is clear and welcoming
- [ ] Collaboration guides are accessible
- [ ] GitHub Pages enabled (optional)

---

## 🎉 You're Ready!

Your repository is now set up for easy collaboration! Next steps:

1. **Invite your team** using the instructions above
2. **Share the repository link** with collaborators
3. **Point them to** [BEGINNER_GUIDE.md](BEGINNER_GUIDE.md)
4. **Create your first issue** and assign it
5. **Start collaborating!**

---

## 🆘 Troubleshooting

### Can't push to repository
- Check you have write access
- Verify you're on the correct branch
- Try: `git pull origin main` first

### Branch protection preventing merge
- Ensure PR has required approvals
- Check all conversations are resolved
- Verify status checks pass

### Collaborators can't access
- Check they accepted the invitation
- Verify their permission level
- Check organization settings (if applicable)

---

## 📖 Additional Resources

- [GitHub Docs](https://docs.github.com)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- [BEGINNER_GUIDE.md](BEGINNER_GUIDE.md)
- [COLLABORATION_GUIDE.md](COLLABORATION_GUIDE.md)

Happy collaborating! 🚀