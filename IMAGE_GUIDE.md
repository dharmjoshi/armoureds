// Image Usage Guide for Armoureds Next.js Project
// This file demonstrates best practices for using images in your project

import Image from 'next/image'

/* 
===========================================
📁 IMAGE DIRECTORY STRUCTURE GUIDE
===========================================

public/
├── images/
│   ├── hero/                    # Hero section images
│   │   ├── cybersecurity-hero.jpg
│   │   ├── hero-background.webp
│   │   └── hero-mobile.jpg
│   │
│   ├── products/                # Product screenshots & demos
│   │   ├── armoguard-basic/
│   │   │   ├── dashboard.jpg
│   │   │   ├── alerts.jpg
│   │   │   └── settings.jpg
│   │   ├── armoshield-pro/
│   │   └── armomax-enterprise/
│   │
│   ├── features/                # Feature illustrations
│   │   ├── real-time-monitoring.svg
│   │   ├── threat-detection.jpg
│   │   └── encryption.png
│   │
│   ├── team/                    # Team member photos
│   │   ├── ceo-john-doe.jpg
│   │   └── cto-jane-smith.jpg
│   │
│   ├── company/                 # About/company images
│   │   ├── office.jpg
│   │   ├── mission.jpg
│   │   └── values.jpg
│   │
│   ├── icons/                   # SVG icons & small graphics
│   │   ├── security-shield.svg
│   │   ├── lock-icon.svg
│   │   └── check-mark.svg
│   │
│   ├── logos/                   # Branding & logos
│   │   ├── armoureds-logo.svg
│   │   ├── partners/
│   │   └── certifications/
│   │
│   └── backgrounds/             # Background textures
│       ├── grid-pattern.svg
│       └── cyber-texture.jpg

===========================================
🎯 HOW TO USE IMAGES IN YOUR COMPONENTS
===========================================
*/

// ✅ RECOMMENDED: Using Next.js Image component for optimization
export function OptimizedImageExample() {
  return (
    <div>
      {/* Hero Image with priority loading */}
      <Image
        src="/images/hero/cybersecurity-hero.jpg"
        alt="Advanced cybersecurity dashboard showing real-time threat protection"
        width={1200}
        height={630}
        priority={true} // Load immediately for above-the-fold content
        placeholder="blur" // Show blur while loading
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..." // Base64 blur
        className="rounded-lg shadow-xl"
      />

      {/* Product Image with lazy loading */}
      <Image
        src="/images/products/armoguard-basic/dashboard.jpg"
        alt="ArmoGuard Basic dashboard interface"
        width={800}
        height={600}
        loading="lazy" // Lazy load for below-the-fold content
        className="w-full h-auto"
      />

      {/* Team Member Photo */}
      <Image
        src="/images/team/ceo-john-doe.jpg"
        alt="John Doe, CEO of Armoureds"
        width={300}
        height={300}
        className="rounded-full"
      />

      {/* Feature Icon */}
      <Image
        src="/images/icons/security-shield.svg"
        alt="Security shield icon"
        width={64}
        height={64}
        className="text-blue-600" // For SVGs that support CSS coloring
      />
    </div>
  )
}

// ✅ Using images in CSS backgrounds
export function BackgroundImageExample() {
  return (
    <section 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/backgrounds/cyber-texture.jpg')"
      }}
    >
      <div className="absolute inset-0 bg-black/50"> {/* Overlay */}
        <div className="relative z-10 text-white">
          Content here
        </div>
      </div>
    </section>
  )
}

/* 
===========================================
📝 IMAGE NAMING CONVENTIONS
===========================================

✅ GOOD NAMING:
- hero-cybersecurity-dashboard.jpg
- armoguard-basic-feature-alerts.jpg
- team-member-john-doe-ceo.jpg
- icon-security-shield.svg
- background-grid-pattern.svg

❌ AVOID:
- image1.jpg
- pic.png
- photo.jpeg
- unnamed.gif

===========================================
🎨 RECOMMENDED IMAGE FORMATS & SIZES
===========================================

📸 PHOTOS & COMPLEX IMAGES:
- Format: JPEG or WebP
- Hero images: 1920x1080 or 1200x630
- Product screenshots: 800x600 to 1200x900
- Team photos: 400x400 (square) or 300x400 (portrait)

🎯 ICONS & SIMPLE GRAPHICS:
- Format: SVG (preferred) or PNG
- Icons: 24x24, 32x32, 64x64
- Simple illustrations: SVG for scalability

🌄 BACKGROUNDS:
- Format: WebP or JPEG
- Size: 1920x1080 or larger
- Keep file size under 500KB

===========================================
⚡ PERFORMANCE OPTIMIZATION TIPS
===========================================

1. Use Next.js Image component for automatic optimization
2. Add proper alt text for accessibility
3. Use priority={true} for above-the-fold images
4. Use loading="lazy" for below-the-fold images
5. Provide width and height to prevent layout shift
6. Use WebP format when possible
7. Compress images before uploading
8. Use placeholder blur for better UX

===========================================
🔗 HOW TO REFERENCE IMAGES
===========================================
*/

// In your components, reference images like this:
export const ImageExamples = {
  // Hero section
  heroImage: "/images/hero/cybersecurity-hero.jpg",
  
  // Product images
  armoguardDashboard: "/images/products/armoguard-basic/dashboard.jpg",
  armoshieldFeatures: "/images/products/armoshield-pro/features.jpg",
  
  // Icons
  securityIcon: "/images/icons/security-shield.svg",
  lockIcon: "/images/icons/lock-icon.svg",
  
  // Company
  logo: "/images/logos/armoureds-logo.svg",
  officePhoto: "/images/company/office.jpg",
  
  // Team
  ceoPhoto: "/images/team/ceo-john-doe.jpg",
}

/* 
===========================================
📱 RESPONSIVE IMAGES EXAMPLE
===========================================
*/

export function ResponsiveImageExample() {
  return (
    <picture>
      {/* Mobile version */}
      <source 
        media="(max-width: 768px)" 
        srcSet="/images/hero/hero-mobile.jpg"
      />
      {/* Desktop version */}
      <Image
        src="/images/hero/cybersecurity-hero.jpg"
        alt="Cybersecurity dashboard"
        width={1200}
        height={630}
        className="w-full h-auto"
      />
    </picture>
  )
}

export default OptimizedImageExample;
