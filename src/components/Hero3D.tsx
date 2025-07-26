'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroScene from './HeroScene';
import MagneticButton from './MagneticButton';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero3D() {
  const heroRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !heroRef.current) return;

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

    // Parallax effect for different layers
    gsap.to('.parallax-slow', {
      y: -100,
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });

    gsap.to('.parallax-fast', {
      y: -200,
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });

    // Cleanup
    return () => {
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
      {/* Background particles - slow parallax */}
      <div className="parallax-slow absolute inset-0 opacity-30">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* 3D Scene Background */}
      <div className="absolute inset-0 z-10">
        <HeroScene />
      </div>

      {/* Text Overlay */}
      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <div className="text-center px-4 max-w-5xl mx-auto">
          <div ref={textRef}>
            {/* Main Title */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight">
              <div className="parallax-fast bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                {splitText('Welcome to')}
              </div>
              <div className="mt-2 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                {splitText('Armoureds')}
              </div>
            </h1>

            {/* Subtitle */}
            <div ref={subtitleRef} className="parallax-fast">
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Experience the future of cybersecurity with cutting-edge 3D visualizations 
                and AI-powered threat detection
              </p>
            </div>

            {/* Call-to-action buttons */}
            <div ref={buttonsRef} className="parallax-fast flex gap-6 justify-center flex-wrap">
              <MagneticButton 
                href="/products/armoguard-basic"
                size="lg"
                variant="primary"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold shadow-2xl shadow-blue-500/25 px-8 py-4"
              >
                🚀 Launch Experience
              </MagneticButton>
              
              <MagneticButton 
                href="/products"
                size="lg"
                variant="secondary"
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 px-8 py-4"
              >
                Explore Products
              </MagneticButton>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-bounce">
            <div className="flex flex-col items-center space-y-2 text-blue-200">
              <span className="text-sm font-medium">Scroll to explore</span>
              <svg 
                className="w-6 h-6" 
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
          </div>
        </div>
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-15" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent pointer-events-none z-15" />
    </section>
  );
}
