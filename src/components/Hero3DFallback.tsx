'use client';

import { useEffect, useRef } from 'react';
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
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-400/30 animate-pulse">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-600/30 to-cyan-600/30 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-80 animate-spin" style={{ animationDuration: '8s' }}>
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-transparent to-white/20"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Orbiting security nodes */}
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="absolute w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded opacity-70 animate-spin"
              style={{
                transform: `rotateY(${i * 45}deg) translateZ(200px)`,
                animationDuration: `${10 + i}s`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}

          {/* Wireframe rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 rounded-full border-2 border-blue-400/20 animate-spin" style={{ animationDuration: '20s' }}></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-80 h-80 rounded-full border border-cyan-400/30 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
          </div>
        </div>
      </div>

      {/* Text Overlay */}
      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <div className="text-center px-4 max-w-5xl mx-auto">
          <div ref={textRef}>
            {/* Main Title */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight">
              <div className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                {splitText('Welcome to')}
              </div>
              <div className="mt-2 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                {splitText('Armoureds')}
              </div>
            </h1>

            {/* Subtitle */}
            <div ref={subtitleRef}>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Experience the future of cybersecurity with cutting-edge 3D visualizations 
                and AI-powered threat detection
              </p>
            </div>

            {/* Call-to-action buttons */}
            <div ref={buttonsRef} className="flex gap-6 justify-center flex-wrap">
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

          {/* Scroll indicator - clickable and properly centered */}
          <button 
            onClick={() => {
              const nextSection = document.querySelector('#manufacturing-process');
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
              }
            }}
            className="absolute bottom-8 left-0 right-0 mx-auto w-fit text-center animate-bounce cursor-pointer hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg p-2"
            aria-label="Scroll to explore content"
          >
            <div className="flex flex-col items-center justify-center space-y-2 text-blue-200 hover:text-white transition-colors duration-200">
              <span className="text-sm font-medium text-center">Scroll to explore</span>
              <svg 
                className="w-6 h-6 mx-auto" 
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
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-15" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent pointer-events-none z-15" />
    </section>
  );
}
