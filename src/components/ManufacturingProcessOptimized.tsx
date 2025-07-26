'use client';

import { useEffect, useRef } from 'react';

const ManufacturingProcess = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const stagesRef = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !stagesRef.current.includes(el)) {
      stagesRef.current.push(el);
    }
  };

  useEffect(() => {
    // Only load GSAP when component mounts to improve initial load time
    if (typeof window === 'undefined' || !sectionRef.current || !containerRef.current) return;

    const loadGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      
      gsap.registerPlugin(ScrollTrigger);

      const section = sectionRef.current;
      const container = containerRef.current;
      const stages = stagesRef.current;

      if (!section || !container) return;

      // Calculate total scroll distance
      const totalWidth = container.scrollWidth - window.innerWidth;

      // Create horizontal scrolling animation
      const horizontalScroll = gsap.to(container, {
        x: -totalWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          end: () => `+=${totalWidth}`,
          anticipatePin: 1,
        },
      });

      // Animate each stage as it comes into view
      stages.forEach((stage, index) => {
        const icon = stage.querySelector('.stage-icon');
        const text = stage.querySelector('.stage-text');
        const animation = stage.querySelector('.stage-animation');

        gsap.fromTo(
          [icon, text, animation],
          {
            opacity: 0,
            y: 50,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: stage,
              containerAnimation: horizontalScroll,
              start: 'left 80%',
              end: 'left 20%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Add specific animations for each stage
        if (index === 1) { // Electrode Coating - rolling animation
          const rollers = stage.querySelectorAll('.roller');
          gsap.to(rollers, {
            rotation: 360,
            duration: 2,
            repeat: -1,
            ease: 'none',
            scrollTrigger: {
              trigger: stage,
              containerAnimation: horizontalScroll,
              start: 'left 60%',
              end: 'left 40%',
              toggleActions: 'play pause resume pause',
            },
          });
        }

        if (index === 2) { // Cell Assembly - robotic arm
          const arm = stage.querySelector('.robotic-arm');
          gsap.to(arm, {
            rotation: 15,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: stage,
              containerAnimation: horizontalScroll,
              start: 'left 60%',
              end: 'left 40%',
              toggleActions: 'play pause resume pause',
            },
          });
        }

        if (index === 3) { // Quality Testing - checkmark animation
          const checkmark = stage.querySelector('.checkmark');
          gsap.fromTo(checkmark, 
            { 
              scale: 0,
              rotation: -180,
            },
            {
              scale: 1,
              rotation: 0,
              duration: 0.8,
              ease: 'back.out(1.7)',
              scrollTrigger: {
                trigger: stage,
                containerAnimation: horizontalScroll,
                start: 'left 60%',
                end: 'left 40%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }

        if (index === 4) { // Final Product - stacking animation
          const packages = stage.querySelectorAll('.package');
          gsap.fromTo(packages,
            {
              y: 50,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.2,
              ease: 'bounce.out',
              scrollTrigger: {
                trigger: stage,
                containerAnimation: horizontalScroll,
                start: 'left 60%',
                end: 'left 40%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });

      // Cleanup function
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    };

    loadGSAP();
  }, []);

  const stages = [
    {
      title: 'Raw Material Sourcing',
      description: 'Premium lithium and rare earth minerals sourced from sustainable suppliers worldwide.',
      icon: (
        <div className="stage-animation relative">
          <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg">
            <div className="relative">
              <div className="w-8 h-8 bg-yellow-300 transform rotate-45 absolute -top-2 -left-2 opacity-80"></div>
              <div className="w-6 h-6 bg-orange-400 transform rotate-12 absolute top-1 right-1 opacity-90"></div>
              <div className="w-10 h-10 bg-amber-300 transform -rotate-12 opacity-70"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Electrode Coating',
      description: 'Advanced coating technology ensures optimal conductivity and battery performance.',
      icon: (
        <div className="stage-animation relative">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
            <div className="relative">
              <div className="roller w-6 h-16 bg-gray-300 rounded-full shadow-md absolute -left-4"></div>
              <div className="roller w-6 h-16 bg-gray-400 rounded-full shadow-md absolute right-2"></div>
              <div className="w-8 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Cell Assembly',
      description: 'Precision robotic assembly ensures consistent quality and performance standards.',
      icon: (
        <div className="stage-animation relative">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-lg flex items-center justify-center shadow-lg">
            <div className="relative">
              <div className="robotic-arm w-12 h-3 bg-gray-600 rounded-full transform-gpu origin-left"></div>
              <div className="w-4 h-4 bg-red-400 rounded-full absolute -right-1 -top-1"></div>
              <div className="w-8 h-8 bg-gray-500 rounded-full absolute -left-2 -top-2"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Quality Testing',
      description: 'Rigorous testing protocols guarantee safety, reliability, and longevity.',
      icon: (
        <div className="stage-animation relative">
          <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg">
            <div className="relative">
              <div className="w-12 h-16 bg-gray-800 rounded-sm"></div>
              <div className="w-8 h-2 bg-gray-600 absolute -top-1 left-2 rounded-t"></div>
              <div className="checkmark absolute inset-0 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Final Product & Supply',
      description: 'Eco-friendly packaging and global distribution network for worldwide availability.',
      icon: (
        <div className="stage-animation relative">
          <div className="w-24 h-24 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
            <div className="relative">
              <div className="package w-8 h-6 bg-orange-400 rounded absolute bottom-0 left-2"></div>
              <div className="package w-8 h-6 bg-orange-500 rounded absolute bottom-4 left-2"></div>
              <div className="package w-8 h-6 bg-orange-600 rounded absolute bottom-8 left-2"></div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Section Header */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Manufacturing Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From raw materials to final delivery, experience the precision and innovation 
            behind every Armoured battery through our state-of-the-art manufacturing pipeline.
          </p>
        </div>
      </div>

      {/* Horizontal Scrolling Container */}
      <div 
        ref={containerRef}
        className="flex items-center h-screen pt-40"
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

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="flex items-center space-x-2 text-gray-500">
          <span className="text-sm font-medium">Scroll to explore process</span>
          <svg className="w-5 h-5 animate-bounce-horizontal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

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
