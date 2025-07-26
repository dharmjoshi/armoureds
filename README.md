# 🛡️ Armoureds - Advanced Cybersecurity Solutions

A cutting-edge Next.js website featuring advanced 3D animations, GSAP scroll-triggered effects, and modern cybersecurity product showcases with responsive navigation.

## ✨ Features

### 🎯 **Advanced Hero Section**
- **3D Animated Models** using React Three Fiber
- **GSAP ScrollTrigger** animations for smooth scroll-based interactions
- **Sequential Text Animations** with letter-by-letter reveals
- **Magnetic Buttons** with 3D hover effects
- **Particle Background System** for atmospheric effects

### 🔒 **Cybersecurity Products**
- **ArmoGuard Basic** - Essential protection ($9.99/month)
- **ArmoShield Pro** - Advanced security suite
- **ArmoMax Enterprise** - Full enterprise solution

### Core Features
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling with PostCSS and Autoprefixer
- **React Three Fiber** - 3D graphics in React
- **GSAP** - Professional animations and ScrollTrigger
- **Framer Motion** - React animation library
- **Three.js** - 3D graphics library
- **Static Export** configuration for deployment
- **ESLint** for code quality

### Navigation System
- **Fixed responsive navbar** with scroll effects
- **Mobile hamburger menu** with smooth animations
- **Accessibility features** with ARIA labels and keyboard navigation
- **Smooth hover transitions** and color changes
- **Brand logo** linking to home page

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or with Turbopack for faster builds
npm run dev:fast
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Navigation Features

### Desktop Navigation
- Fixed navbar with white background and shadow
- Brand name "Armoureds" on the left
- Four navigation links: Home, About, Products, Contact
- Smooth hover effects with color transitions
- Background becomes transparent with backdrop blur on scroll

### Mobile Navigation
- Hamburger menu icon with 3-line to X animation
- Slide-down mobile menu with staggered item animations
- Touch-friendly interface
- Auto-close when selecting navigation items

### Accessibility
- ARIA labels for screen readers
- Keyboard navigation support
- Focus management
- Semantic HTML structure

## Building for Production

To build and export the project as static files:

```bash
npm run build
```

This will generate static files in the `out/` directory ready for deployment.

## Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Main navigation component
│   └── Layout.js          # Layout wrapper component
├── app/
│   ├── layout.tsx         # Root layout with Layout component
│   ├── page.tsx           # Home page
│   ├── about/
│   │   └── page.tsx       # About page
│   ├── products/
│   │   └── page.tsx       # Products page
│   └── contact/
│       └── page.tsx       # Contact page
└── styles/
    └── globals.css        # Global styles with Tailwind imports
```

## Key Tailwind Classes Used

### Animation & Transitions
- `transition-all duration-300 ease-in-out` - Smooth transitions
- `transform translate-x-0 opacity-100` - Mobile menu animations
- `hover:bg-blue-50` - Hover state backgrounds
- `backdrop-blur-sm` - Glass morphism effect on scroll

### Layout & Positioning
- `fixed top-0 left-0 right-0 z-50` - Fixed navbar positioning
- `max-w-7xl mx-auto` - Centered container with max width
- `pt-16` - Top padding to account for fixed navbar height

### Responsive Design
- `hidden md:block` - Hide on mobile, show on desktop
- `md:hidden` - Show on mobile, hide on desktop
- `sm:px-6 lg:px-8` - Responsive padding

## Customization

### Adding New Navigation Items
Edit the `navLinks` array in `src/components/Navbar.js`:

```javascript
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
  { href: '/new-page', label: 'New Page' } // Add new items here
]
```

### Modifying Colors and Animations
Update the Tailwind classes in the Navbar component:
- Change `text-blue-600` to your preferred color
- Adjust `duration-300` for different animation speeds
- Modify `hover:bg-blue-50` for different hover effects
├── app/
│   ├── globals.css      # Global styles with Tailwind imports
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Home page component
```

## Configuration

### Static Export
The project is configured for static export in `next.config.js`:
- `output: 'export'` enables static export
- `trailingSlash: true` for better static hosting compatibility
- `images: { unoptimized: true }` for static image handling

### Tailwind CSS
Tailwind is configured to scan all components in the `src/` directory:
- Content paths include `src/pages/**/*`, `src/components/**/*`, and `src/app/**/*`
- PostCSS is configured with Tailwind and Autoprefixer
- Global styles import Tailwind's base, components, and utilities

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
