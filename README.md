# 🛡️ Armoureds - Advanced Cybersecurity Solutions

A cutting-edge Next.js website featuring advanced 3D animations, GSAP scroll-triggered effects, horizontal scrolling sections, and modern cybersecurity product showcases with immersive user experiences.

## ✨ Features

### 🎯 **Advanced Hero Section**
- **3D Animated Models** using React Three Fiber with dynamic lighting
- **GSAP ScrollTrigger** animations for smooth scroll-based interactions
- **Sequential Text Animations** with letter-by-letter reveals and typewriter effects
- **Magnetic Buttons** with 3D hover effects and cursor tracking
- **Particle Background System** with floating elements and atmospheric effects
- **Cybersecurity-themed 3D Scene** with orbiting security nodes and wireframe animations

### 🏭 **Manufacturing Process Section**
- **Horizontal Scrolling Experience** with GSAP ScrollTrigger pin animations
- **5 Interactive Stages**: Raw Materials → Electrode Coating → Cell Assembly → Quality Testing → Final Product
- **Stage-specific Animations**:
  - Rolling mechanisms for electrode coating
  - Robotic arm movements for assembly
  - Checkmark animations for quality testing
  - Package stacking for final products
- **Progress Indicators** and smooth stage transitions

### 📖 **Enhanced About Us Page**
- **Animated Mission Section** with slide-in effects from left and right
- **High-tech Factory Imagery** with hover effects and decorative borders
- **Statistics Highlights** with animated counters
- **Team Member Profiles** with professional layouts
- **Company Timeline** showing key milestones

### 🔒 **Cybersecurity Products**
- **ArmoGuard Basic** - Essential protection ($9.99/month)
- **ArmoShield Pro** - Advanced security suite with AI detection
- **ArmoMax Enterprise** - Full enterprise solution with custom pricing
- **Detailed Product Pages** with feature comparisons and screenshots

### 🎨 **Advanced Animation System**
- **GSAP ScrollTrigger** for scroll-based animations
- **Framer Motion** for React component animations
- **CSS-based fallbacks** for better performance
- **Intersection Observer** for optimized animation triggers
- **Lazy loading** for heavy 3D components

## 🚀 Tech Stack

### Core Framework
- **Next.js 15** with App Router and Turbopack optimization
- **TypeScript** for type safety and better development experience
- **Tailwind CSS** for styling with PostCSS and Autoprefixer
- **React 18** with Suspense and concurrent features

### 3D & Animation Libraries
- **React Three Fiber** - 3D graphics in React
- **@react-three/drei** - Utility components for Three.js
- **Three.js** - Core 3D graphics library
- **GSAP** - Professional animations and ScrollTrigger
- **Framer Motion** - React animation library

### Performance & Optimization
- **Dynamic imports** for code splitting
- **Image optimization** with Next.js Image component
- **Turbopack** for faster development builds
- **Static export** configuration for deployment
- **ESLint** for code quality

## 🗂️ Project Structure

```
src/
├── components/
│   ├── Hero3D.tsx                    # 3D Hero section with GSAP
│   ├── Hero3DFallback.tsx           # CSS-based hero fallback
│   ├── HeroScene.tsx                # React Three Fiber 3D scene
│   ├── ManufacturingProcess.tsx     # Horizontal scrolling section
│   ├── ManufacturingProcessOptimized.tsx # Performance-optimized version
│   ├── OurMissionSection.tsx        # Animated mission section
│   ├── AnimatedText.tsx             # Text animation component
│   ├── AnimatedButton.tsx           # Interactive button component
│   ├── MagneticButton.tsx           # Magnetic hover effect button
│   ├── ParticleBackground.tsx       # Floating particle system
│   ├── ParallaxContainer.tsx        # Parallax scroll effects
│   ├── AnimateOnScroll.js           # Scroll animation utilities
│   ├── Navbar.js                    # Responsive navigation
│   └── Layout.js                    # Layout wrapper component
├── app/
│   ├── layout.tsx                   # Root layout with metadata
│   ├── page.tsx                     # Home page with hero and features
│   ├── globals.css                  # Global styles and animations
│   ├── about/
│   │   └── page.tsx                 # About page with mission section
│   ├── products/
│   │   ├── page.tsx                 # Products overview
│   │   ├── armoguard-basic/
│   │   │   └── page.tsx             # ArmoGuard Basic details
│   │   ├── armoshield-pro/
│   │   │   └── page.tsx             # ArmoShield Pro details
│   │   └── armomax-enterprise/
│   │       └── page.tsx             # ArmoMax Enterprise details
│   └── contact/
│       └── page.tsx                 # Contact page with forms
└── public/
    └── images/                      # Organized image assets
        ├── hero/                    # Hero section images
        ├── products/                # Product screenshots
        │   ├── armoguard-basic/
        │   ├── armoshield-pro/
        │   └── armomax-enterprise/
        ├── features/                # Feature illustrations
        ├── team/                    # Team member photos
        ├── company/                 # Company images
        ├── icons/                   # SVG icons
        ├── logos/                   # Branding assets
        └── backgrounds/             # Background textures
```

## 🎮 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/dharmjoshi/armoureds.git
cd armoureds-next

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
# Standard development server
npm run dev

# With Turbopack for faster builds (recommended)
npm run dev --turbo

# Build for production
npm run build

# Run production build locally
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 🎯 Key Features Showcase

### 1. **3D Hero Section**
Navigate to the homepage to experience:
- Orbiting cybersecurity nodes
- Dynamic lighting effects
- Scroll-triggered 3D model rotation
- Sequential text animations

### 2. **Manufacturing Process**
Scroll down on the homepage to see:
- Horizontal scrolling through 5 manufacturing stages
- Stage-specific animations (rollers, robotic arms, etc.)
- Progress indicators and smooth transitions

### 3. **Mission Section**
Visit `/about` to experience:
- Slide-in animations from left and right
- Interactive hover effects on images
- Animated statistics counters

## 🖼️ Image Organization

Images are organized in `/public/images/` with the following structure:

```
images/
├── hero/                    # Hero section backgrounds
├── products/                # Product screenshots
├── features/                # Feature illustrations  
├── team/                    # Team member photos
├── company/                 # Company/about images
├── icons/                   # SVG icons
├── logos/                   # Branding assets
└── backgrounds/             # Background textures
```

### Usage Example:
```tsx
import Image from 'next/image'

<Image
  src="/images/products/armoguard-basic/dashboard.jpg"
  alt="ArmoGuard Basic dashboard"
  width={800}
  height={600}
  priority={true} // For above-the-fold images
/>
```

## ⚡ Performance Optimizations

### Build Optimizations
- **Turbopack** for faster development builds
- **Dynamic imports** for code splitting
- **Image optimization** with WebP conversion
- **Bundle analysis** and dead code elimination

### Animation Optimizations  
- **GSAP lazy loading** to reduce initial bundle size
- **CSS animation fallbacks** for better performance
- **Intersection Observer** for efficient scroll triggers
- **Hardware acceleration** with transform3d

### Development Speed
- **Optimized webpack config** for faster rebuilds
- **Reduced file watching** overhead
- **Efficient hot reloading** with Next.js Fast Refresh

## 🎨 Customization Guide

### Adding New Animations
1. Create component in `/src/components/`
2. Use GSAP ScrollTrigger pattern:
```tsx
useEffect(() => {
  const { gsap } = await import('gsap');
  const { ScrollTrigger } = await import('gsap/ScrollTrigger');
  
  gsap.registerPlugin(ScrollTrigger);
  // Your animations here
}, []);
```

### Adding New Images
1. Place images in appropriate `/public/images/` subfolder
2. Use Next.js Image component for optimization
3. Include descriptive alt text for accessibility

### Modifying 3D Scenes
1. Edit `/src/components/HeroScene.tsx`
2. Adjust camera positions, lighting, and materials
3. Test performance across devices

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Connect to Vercel
vercel

# Deploy
vercel --prod
```

### Static Export
```bash
# Build static files
npm run build

# Files generated in `out/` directory
# Deploy to any static hosting service
```

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Live Demo**: [https://armoureds.vercel.app](https://armoureds.vercel.app)
- **Repository**: [https://github.com/dharmjoshi/armoureds](https://github.com/dharmjoshi/armoureds)
- **Documentation**: [Next.js Docs](https://nextjs.org/docs)
- **GSAP Docs**: [GSAP Documentation](https://greensock.com/docs/)
- **Three.js Docs**: [Three.js Documentation](https://threejs.org/docs/)

---

**Built with ❤️ by the Armoureds team**
