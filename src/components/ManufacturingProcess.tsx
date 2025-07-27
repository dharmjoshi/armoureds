'use client';

import { useEffect, useRef, useState } from 'react';

const ManufacturingProcess = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const stagesRef = useRef<HTMLDivElement[]>([]);
  const [isScrollButtonVisible, setIsScrollButtonVisible] = useState(true);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !stagesRef.current.includes(el)) {
      stagesRef.current.push(el);
    }
  };

  useEffect(() => {
    // Only load GSAP when component mounts to improve initial load time
    if (typeof window === 'undefined' || !sectionRef.current || !containerRef.current) return;

    // Scroll button visibility handler
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionTop = sectionRef.current?.offsetTop || 0;
      const sectionHeight = sectionRef.current?.offsetHeight || 0;
      
      // Show button only when in the manufacturing section
      const isInSection = scrollY >= sectionTop - 100 && scrollY <= sectionTop + sectionHeight + 100;
      setIsScrollButtonVisible(isInSection);
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);

    const loadGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      
      gsap.registerPlugin(ScrollTrigger);

      const section = sectionRef.current;
      const container = containerRef.current;
      const stages = stagesRef.current;

      if (!section || !container) return;

      // Check if mobile device
      const isMobile = window.innerWidth < 768;
      
      if (isMobile) {
        // Mobile: no GSAP animations to improve performance
        return;
      }

      // Desktop: horizontal scroll animation
      const totalWidth = container.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = totalWidth - viewportWidth;

      gsap.to(container, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      // Stage animations
      stages.forEach((stage, index) => {
        const icon = stage.querySelector('.stage-icon');
        const text = stage.querySelector('.stage-text');
        
        if (icon && text) {
          gsap.fromTo([icon, text], 
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.2,
              scrollTrigger: {
                trigger: stage,
                start: "left center",
                end: "right center",
                toggleActions: "play none none reverse",
                containerAnimation: gsap.to(container, { x: -scrollDistance }),
              }
            }
          );
        }
      });
    };

    loadGSAP();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (typeof window !== 'undefined') {
        const { ScrollTrigger } = require('gsap/ScrollTrigger');
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      }
    };
  }, []);

  const stages = [
    {
      icon: (
        <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
      ),
      title: "Raw Materials",
      description: "We source premium-grade materials from certified suppliers worldwide, ensuring the highest quality foundation for our cybersecurity products."
    },
    {
      icon: (
        <div className="w-24 h-24 mx-auto bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
      ),
      title: "Design & Engineering",
      description: "Our expert engineers craft innovative cybersecurity solutions using cutting-edge technology and advanced design principles."
    },
    {
      icon: (
        <div className="w-24 h-24 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
      ),
      title: "Security Testing",
      description: "Rigorous security testing and vulnerability assessments ensure our products meet the highest cybersecurity standards."
    },
    {
      icon: (
        <div className="w-24 h-24 mx-auto bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>
      ),
      title: "Quality Assurance",
      description: "Each product undergoes comprehensive quality checks and performance optimization to guarantee reliability and effectiveness."
    },
    {
      icon: (
        <div className="w-24 h-24 mx-auto bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
      ),
      title: "Final Deployment",
      description: "Ready-to-deploy cybersecurity solutions are delivered to clients with comprehensive support and documentation."
    }
  ];

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Header Section */}
      <div className="relative py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our Manufacturing
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Process
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to delivery, our state-of-the-art manufacturing process ensures 
            every cybersecurity solution meets the highest standards of quality and innovation.
          </p>
        </div>
      </div>

      {/* Mobile Layout - Vertical Scrolling */}
      <div className="md:hidden px-4 sm:px-6 pb-20">
        <div className="space-y-12 sm:space-y-16">
          {stages.map((stage, index) => (
            <div key={index} className="text-center">
              {/* Stage Icon */}
              <div className="mb-6 sm:mb-8">
                {stage.icon}
              </div>

              {/* Stage Content */}
              <div className="max-w-sm mx-auto">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  {stage.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {stage.description}
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="mt-6 sm:mt-8 flex justify-center items-center space-x-2">
                {stages.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      i === index 
                        ? 'bg-blue-500 scale-125' 
                        : i < index 
                        ? 'bg-blue-300' 
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Connection Line */}
              {index < stages.length - 1 && (
                <div className="mt-8 sm:mt-12 flex justify-center">
                  <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-blue-300 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Horizontal Scrolling Container */}
      <div className="hidden md:block relative">
        <div 
          ref={containerRef}
          className="flex items-center h-screen"
          style={{ width: 'max-content' }}
        >
          {stages.map((stage, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="flex-shrink-0 w-screen px-8 md:px-16 lg:px-24"
            >
              <div className="max-w-md mx-auto text-center">
                {/* Stage Icon */}
                <div className="stage-icon mb-8">
                  {stage.icon}
                </div>

                {/* Stage Content */}
                <div className="stage-text">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {stage.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                {/* Progress Indicator */}
                <div className="mt-8 flex justify-center items-center space-x-2">
                  {stages.map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        i === index 
                          ? 'bg-blue-500 scale-125' 
                          : i < index 
                          ? 'bg-blue-300' 
                          : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center hidden md:block">
        <div className="flex items-center justify-center space-x-2 text-gray-500">
          <span className="text-sm font-medium">Scroll to explore process</span>
          <svg className="w-5 h-5 animate-bounce-horizontal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Mobile Scroll Indicator - conditionally visible */}
      {isScrollButtonVisible && (
        <button 
          onClick={() => {
            const nextSection = document.querySelector('section:nth-of-type(3)');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 z-40 md:hidden cursor-pointer hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-xl p-3 sm:p-4 bg-white/95 backdrop-blur-md shadow-xl border border-gray-200"
          aria-label="Scroll to next section"
        >
          <div className="flex flex-col items-center justify-center space-y-2">
            <span className="text-xs sm:text-sm font-medium text-gray-700 text-center leading-tight">
              Scroll down
            </span>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </button>
      )}

      <style jsx>{`
        @keyframes bounce-horizontal {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(4px);
          }
        }
        .animate-bounce-horizontal {
          animation: bounce-horizontal 1s infinite;
        }
      `}</style>
    </section>
  );
};

export default ManufacturingProcess;
