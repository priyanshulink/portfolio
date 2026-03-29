# 🎨 Priyanshu Singh - Portfolio

A modern, interactive macOS-inspired portfolio website built with **React + Vite**. Features draggable windows, a terminal CLI, and seamless social media integration.

**🌐 Live Demo:** [https://portfolio-krcb.onrender.com](https://portfolio-krcb.onrender.com)

---

## ✨ Features

### 🪟 Interactive Windows
- **GitHub Profile Window** - Displays your GitHub profile, repositories, and social links
- **Notes Window** - Markdown-rendered notes and documentation
- **Resume Window** - View and download your resume
- **Spotify Window** - Music integration
- **CLI Terminal Window** - Interactive command-line interface with 10+ commands

### 🎯 Windows Features
- **Draggable & Resizable** - Move and resize windows using React RnD
- **Close Button** - Red macOS-style close button
- **Dark Theme** - Professional dark GitHub-inspired UI
- **Auto-scroll** - Content automatically scrolls to bottom

### 🖥️ CLI Terminal Commands
```bash
help      # Show all available commands
about     # Learn about Priyanshu
skills    # View technical skills
projects  # Check out projects
contact   # Get contact information
github    # Open GitHub profile
social    # View social media links
resume    # Download resume
clear     # Clear terminal
echo      # Echo a passed string
```

### 🎨 Design
- **macOS Aesthetic** - Clean, minimalist design inspired by macOS
- **Dark Theme** - GitHub-inspired dark color scheme (#0d1117)
- **Responsive Dock** - Bottom dock with active window indicators
- **Smooth Animations** - Hover effects and transitions
- **Custom Scrollbars** - Styled scrollbars throughout

### 🔗 Social Integration
- **Email** - Opens Gmail compose with pre-filled template
- **LinkedIn** - Direct link to LinkedIn profile
- **Twitter** - Follow on Twitter
- **Calendar** - Google Calendar integration

---

## 🛠️ Tech Stack

```
Frontend:
  ✓ React 19.2.4
  ✓ Vite 8.0.3
  ✓ SCSS/Sass
  ✓ Tailwind CSS

Libraries:
  ✓ react-rnd - Draggable/resizable windows
  ✓ react-markdown - Markdown rendering
  ✓ react-syntax-highlighter - Code syntax highlighting

Build Tools:
  ✓ Vite for fast development
  ✓ ESLint for code quality
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/priyanshulink/portfolio.git
cd portfolio/mac-os

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173/` to see the portfolio.

---

## 📦 Build & Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

### Deploy to Render

1. **Connect GitHub Repository**
   - Go to [https://render.com](https://render.com)
   - Create new Web Service
   - Select your portfolio repository

2. **Configure Settings**
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
   - **Root Directory:** Leave blank

3. **Deploy**
   - Click "Create Web Service"
   - Wait for build to complete (2-5 minutes)
   - Your live URL: `https://your-service.onrender.com`

### Deploy to GitHub Pages

```bash
# Build and deploy
npm run build
git add .
git commit -m "Deploy to GitHub Pages"
git push
```

---

## 📂 Project Structure

```
mac-os/
├── src/
│   ├── component/
│   │   ├── dock.jsx           # Bottom dock with app icons
│   │   ├── Navbar.jsx         # Header with profile info
│   │   ├── DateTime.jsx       # Real-time clock
│   │   └── window/
│   │       ├── MacWindow.jsx  # Draggable window wrapper
│   │       ├── Github.jsx     # GitHub profile display
│   │       ├── Note.jsx       # Markdown notes viewer
│   │       ├── Resume.jsx     # Resume window
│   │       ├── Spotify.jsx    # Spotify player
│   │       └── Cli.jsx        # Terminal interface
│   ├── App.jsx                # Main app component
│   ├── App.scss               # Main styles
│   └── main.jsx               # React entry point
├── public/
│   ├── doc-icon/              # Dock icon SVGs
│   ├── Navbar-icons/          # Navbar icon SVGs
│   ├── note.txt               # Notes markdown file
│   ├── resume.pdf             # Resume PDF
│   └── mac-os-walpaper.jpg   # Background image
├── package.json
├── vite.config.js
└── README.md
```

---

## 🎯 Commands

### Development
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
npm start        # Start production server
npm run lint     # Run ESLint
```

---

## 🎨 Customization

### Change Your Information

**Update `public/github.json`:**
```json
{
  "profile": {
    "name": "Your Name",
    "username": "yourusername",
    "email": "your.email@gmail.com",
    "location": "Your City",
    "bio": "Your bio here",
    ...
  }
}
```

**Update `public/note.txt`:**
- Add your own notes in markdown format
- Will be rendered in the Notes window

**Update CLI Commands:**
- Edit `src/component/window/Cli.jsx` to customize terminal commands

---

## 🔒 Security & Best Practices

- ✅ No sensitive data in version control
- ✅ Environment variables for secrets
- ✅ CORS-friendly deployment configuration
- ✅ Optimized bundle size with code splitting warnings

---

## 📊 Performance

- **Bundle Size:** ~1.1MB (gzipped: ~366KB)
- **Build Time:** ~820ms
- **FCP:** < 1s
- **LCP:** < 2s

---

## 🤝 Contributing

This is a personal portfolio, but feel free to:
- Fork and customize for your own use
- Submit improvements and bug fixes
- Share your variations

---

## 📄 License

MIT License - Feel free to use this for your portfolio!

---

## 👨‍💻 About

Built by **Priyanshu Singh** - Full Stack Web Developer

- **GitHub:** [github.com/priyanshulink](https://github.com/priyanshulink)
- **LinkedIn:** [in/priyanshu-singh](https://linkedin.com/in/priyanshu-singh-188715290)
- **Email:** ompriyanshu12@gmail.com

---

## 🙏 Acknowledgments

- React + Vite for the amazing dev experience
- React RnD for draggable windows
- GitHub's design for dark theme inspiration
- macOS for UI/UX inspiration

---

**⭐ If you found this helpful, please star the repository!**
