# ModernBlog

A modern, clean blog website built with React, Headless UI (Base UI), and Framer Motion featuring bold color choices and smooth animations.

![ModernBlog Homepage](https://github.com/user-attachments/assets/f8805c4c-7ef7-4d6d-b528-9648ca548ded)

## ✨ Features

- **Modern Design** - Clean, bold aesthetic with vibrant color palette
- **Smooth Animations** - Powered by Framer Motion for delightful interactions
- **Responsive** - Fully responsive design that works on all devices
- **Accessible** - Built with Headless UI for accessible components
- **Fast** - Powered by Vite for lightning-fast development and builds

## 🎨 Color Palette

- **Primary**: Vibrant Pink (#FF006E)
- **Secondary**: Electric Purple (#8338EC)
- **Accent**: Bright Blue (#3A86FF)
- **Warning**: Bold Yellow (#FFBE0B)
- **Success**: Neon Green (#06FFA5)

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 📦 Tech Stack

- **React 19** - Latest React with modern hooks
- **Vite** - Next generation frontend tooling
- **Headless UI** - Unstyled, accessible UI components
- **Framer Motion** - Production-ready animation library
- **ESLint** - Code quality and consistency

## 🏗️ Project Structure

```
src/
├── components/         # Reusable components
│   ├── Header.jsx     # Navigation header
│   ├── Hero.jsx       # Hero section
│   ├── BlogCard.jsx   # Blog post card
│   ├── BlogPost.jsx   # Blog post modal
│   └── Footer.jsx     # Footer
├── pages/             # Page components
│   └── Home.jsx       # Home page
├── data/              # Data files
│   └── blogPosts.js   # Blog post data
├── App.jsx            # Root component
└── index.css          # Global styles
```

## 🎯 Components

### Header
Sticky navigation with responsive menu that collapses to hamburger on mobile.

### Hero
Eye-catching hero section with animated gradient blobs and call-to-action buttons.

### BlogCard
Reusable blog post card with category badges, metadata, and hover animations.

### BlogPost
Full blog post view displayed in a modal overlay with smooth transitions.

### Footer
Multi-column footer with quick links, categories, and social media links.

## 🌟 Animations

All animations are built with Framer Motion:
- Staggered page load animations
- Card hover effects (lift and scale)
- Modal open/close transitions
- Floating gradient blobs
- Button interactions

## 📱 Responsive Design

The blog is fully responsive and optimized for:
- Mobile devices (375px+)
- Tablets (768px+)
- Desktop (1200px+)

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is open source and available under the MIT License.
