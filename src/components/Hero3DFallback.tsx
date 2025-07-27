'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from './MagneticButton';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero3DFallback() {
  const heroRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scene3DRef = useRef<HTMLDivElement>(null);
  const scrollButtonRef = useRef<HTMLButtonElement>(null);
  const [isScrollButtonVisible, setIsScrollButtonVisible] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined' || !heroRef.current) return;

    // Scroll button visibility handler
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current?.offsetHeight || 0;
      
      // Hide button when scrolled past 30% of hero section
      setIsScrollButtonVisible(scrollY < heroHeight * 0.3);
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);

    // Initial animation for text elements
    const tl = gsap.timeline({ delay: 1 });
    
    // Animate main title letters
    tl.fromTo(
      '.title-letter',
      { 
        y: 100, 
        opacity: 0, 
        rotationX: 90,
        transformOrigin: 'bottom center'
      },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: 'back.out(1.7)',
      }
    )
    .fromTo(
      subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out' },
      '-=0.5'
    )
    .fromTo(
      buttonsRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.3'
    );

    // Scroll-triggered text fade out
    gsap.to(textRef.current, {
      opacity: 0,
      y: -100,
      scale: 0.8,
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: '50% top',
        scrub: 1,
      },
    });

    // 3D Scene rotation effect (CSS-based)
    gsap.fromTo(scene3DRef.current, 
      { rotateY: 0 },
      {
        rotateY: 90,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      }
    );

    // Background color transition on scroll
    gsap.to(heroRef.current, {
      backgroundColor: '#1e293b', // slate-800
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Split text into individual letters for animation
  const splitText = (text: string) => {
    return text.split('').map((letter, index) => (
      <span 
        key={index} 
        className="title-letter inline-block"
        style={{ perspective: '1000px' }}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </span>
    ));
  };

  return (
    <section 
      ref={heroRef}
      className="hero-section relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden"
    >
      {/* CSS-based 3D Scene */}
      <div 
        ref={scene3DRef}
        className="absolute inset-0 flex items-center justify-center"
        style={{ perspective: '1000px' }}
      >
        <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
          {/* Central cybersecurity hub */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-400/30 animate-pulse">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-600/30 to-cyan-600/30 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-80 animate-spin" style={{ animationDuration: '8s' }}>
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-transparent to-white/20"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Orbiting security nodes */}
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded opacity-70 animate-spin"
              style={{
                transform: `rotateY(${i * 45}deg) translateZ(${100 + i * 10}px)`,
                animationDuration: `${10 + i}s`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}

          {/* Wireframe rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full border-2 border-blue-400/20 animate-spin" style={{ animationDuration: '20s' }}></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full border border-cyan-400/30 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
          </div>
        </div>
      </div>

      {/* Text Overlay */}
      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <div className="text-center px-3 sm:px-4 md:px-6 max-w-5xl mx-auto">
          <div ref={textRef}>
            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold mb-4 sm:mb-6 leading-tight">
              <div className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                {splitText('Welcome to')}
              </div>
              <div className="mt-1 sm:mt-2 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                {splitText('Armoureds')}
              </div>
            </h1>

            {/* Subtitle */}
            <div ref={subtitleRef}>
              <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
                Experience the future of cybersecurity with cutting-edge 3D visualizations 
                and AI-powered threat detection
              </p>
            </div>

            {/* Call-to-action buttons */}
            <div ref={buttonsRef} className="flex gap-3 sm:gap-4 md:gap-6 justify-center flex-wrap px-2">
              <MagneticButton 
                href="/products/armoguard-basic"
                size="lg"
                variant="primary"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold shadow-2xl shadow-blue-500/25 px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base"
              >
                🚀 Launch Experience
              </MagneticButton>
              
              <MagneticButton 
                href="/products"
                size="lg"
                variant="secondary"
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base"
              >
                Explore Products
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - positioned relative to hero section */}
      {isScrollButtonVisible && (
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-0 right-0 z-30 flex justify-center">
          <button 
            ref={scrollButtonRef}
            onClick={() => {
              const nextSection = document.querySelector('#manufacturing-process');
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
              }
            }}
            className="animate-bounce cursor-pointer hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-xl p-3 sm:p-4 backdrop-blur-md bg-white/10 border border-white/30 shadow-lg"
            aria-label="Scroll to explore content"
          >
            <div className="flex flex-col items-center justify-center space-y-2">
              <span className="text-xs sm:text-sm font-medium text-white text-center">
                Scroll to explore
              </span>
              <svg 
                className="w-5 h-5 sm:w-6 sm:h-6 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </div>
          </button>
        </div>
      )}

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-15" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent pointer-events-none z-15" />
    </section>
  );
}
