'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function OurMissionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;

    // Load GSAP dynamically to avoid SSR issues
    const loadAnimations = async () => {
      try {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const image = imageRef.current;
        const content = contentRef.current;

        if (!section || !image || !content) return;

        // Set initial states
        gsap.set(image, { 
          opacity: 0, 
          x: -100,
          scale: 0.8
        });
        
        gsap.set(content, { 
          opacity: 0, 
          x: 100
        });

        // Create timeline for coordinated animation
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none', // Only play once
            once: true, // Ensure animation only runs once
          }
        });

        // Image animation - slide in from left with scale
        tl.to(image, {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out'
        })
        // Content animation - slide in from right with stagger
        .to(content, {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out'
        }, '-=0.6'); // Start 0.6 seconds before image animation ends

        // Add subtle hover effect for image
        const imageElement = image.querySelector('img');
        if (imageElement) {
          imageElement.addEventListener('mouseenter', () => {
            gsap.to(imageElement, {
              scale: 1.05,
              duration: 0.3,
              ease: 'power2.out'
            });
          });

          imageElement.addEventListener('mouseleave', () => {
            gsap.to(imageElement, {
              scale: 1,
              duration: 0.3,
              ease: 'power2.out'
            });
          });
        }

        // Cleanup function
        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
      } catch (error) {
        console.log('GSAP not available, using CSS animations as fallback');
        // Fallback to CSS animations
        if (imageRef.current) {
          imageRef.current.style.animation = 'slideInLeft 1.2s ease-out forwards';
        }
        if (contentRef.current) {
          contentRef.current.style.animation = 'slideInRight 1s ease-out 0.6s forwards';
        }
      }
    };

    loadAnimations();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Image */}
          <div 
            ref={imageRef} 
            className="relative opacity-0 -translate-x-24 scale-90 animate-slide-in-left"
          >
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg opacity-20 blur-lg"></div>
              
              {/* Main image container */}
              <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden">
                <Image
                  src="/images/robot.png"
                  alt="High-tech battery factory with advanced robotic automation and precision manufacturing equipment"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                  priority={false}
                />
                
                {/* Image overlay with subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg">
                <div className="text-sm font-semibold">Innovation</div>
                <div className="text-xs opacity-90">Since 2013</div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div 
            ref={contentRef} 
            className="relative opacity-0 translate-x-24 animate-slide-in-right"
          >
            {/* Section Label */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Our Mission
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Powering Tomorrow&apos;s{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                World
              </span>
            </h2>

            {/* Mission Paragraphs */}
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                At Armoureds, we believe that cybersecurity should be accessible to everyone, 
                not just large enterprises with unlimited budgets. Our mission is to democratize 
                digital protection by creating innovative, user-friendly security solutions that 
                adapt to the ever-evolving threat landscape.
              </p>
              
              <p>
                We are committed to delivering exceptional quality through cutting-edge technology, 
                rigorous testing, and continuous innovation. Every product we create is designed 
                with the end user in mind, ensuring that advanced security doesn&apos;t come at 
                the cost of simplicity or performance. Our dedication to excellence drives us 
                to push the boundaries of what&apos;s possible in cybersecurity.
              </p>
            </div>

            {/* Stats or highlights */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">10M+</div>
                <div className="text-sm text-gray-600">Users Protected</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">99.9%</div>
                <div className="text-sm text-gray-600">Threat Detection</div>
              </div>
            </div>

            {/* Call to action */}
            <div className="mt-8">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation Fallbacks */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in-left {
          animation: slideInLeft 1.2s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 1s ease-out 0.6s forwards;
        }
      `}</style>
    </section>
  );
}
