'use client';

import { useRef, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { gsap } from 'gsap';

// Dynamically import React Three Fiber components to avoid SSR issues
const Canvas = dynamic(() => import('@react-three/fiber').then(mod => ({ default: mod.Canvas })), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-gradient-to-br from-slate-900 to-blue-900 animate-pulse" />
});

const OrbitControls = dynamic(() => import('@react-three/drei').then(mod => ({ default: mod.OrbitControls })), { ssr: false });
const Sphere = dynamic(() => import('@react-three/drei').then(mod => ({ default: mod.Sphere })), { ssr: false });
const Box = dynamic(() => import('@react-three/drei').then(mod => ({ default: mod.Box })), { ssr: false });
const Environment = dynamic(() => import('@react-three/drei').then(mod => ({ default: mod.Environment })), { ssr: false });
const Float = dynamic(() => import('@react-three/drei').then(mod => ({ default: mod.Float })), { ssr: false });

// Register GSAP plugins only on client side
if (typeof window !== 'undefined') {
  import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
    gsap.registerPlugin(ScrollTrigger);
  });
}

// Animated 3D Model Component - Enhanced Cybersecurity Theme
function AnimatedModel() {
  const modelRef = useRef<any>(null);
  const coreRef = useRef<any>(null);
  const orbitingRefs = useRef<any[]>([]);
  
  useEffect(() => {
    if (!modelRef.current || typeof window === 'undefined') return;

    // Import ScrollTrigger dynamically and set up animations
    import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);
      
      // GSAP ScrollTrigger animation for 3D model rotation
      gsap.fromTo(
        modelRef.current.rotation,
        { y: 0 },
        {
          y: Math.PI / 2, // 90 degrees
          scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: 1, // Smooth animation tied to scroll
            onUpdate: (self) => {
              if (modelRef.current) {
                // Additional scaling effect based on scroll progress
                const scale = 1 + self.progress * 0.3;
                modelRef.current.scale.setScalar(scale);
                
                // Rotate orbiting elements faster during scroll
                orbitingRefs.current.forEach((ref, index) => {
                  if (ref) {
                    ref.rotation.y += self.progress * 0.1 * (index + 1);
                  }
                });
              }
            },
          },
        }
      );
    });

    // Cleanup
    return () => {
      if (typeof window !== 'undefined') {
        import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        });
      }
    };
  }, []);

  // Continuous floating and rotation animation
  const useFrame = typeof window !== 'undefined' ? 
    require('@react-three/fiber').useFrame : 
    () => {};

  useFrame((state: any) => {
    if (coreRef.current) {
      // Core floating animation
      coreRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
      coreRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      coreRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
    }

    // Animate orbiting elements
    orbitingRefs.current.forEach((ref, index) => {
      if (ref) {
        const time = state.clock.elapsedTime;
        const radius = 2.5 + index * 0.5;
        const speed = 0.5 + index * 0.2;
        const offset = index * (Math.PI * 2) / orbitingRefs.current.length;
        
        ref.position.x = Math.cos(time * speed + offset) * radius;
        ref.position.z = Math.sin(time * speed + offset) * radius;
        ref.position.y = Math.sin(time * 0.5 + offset) * 0.5;
        
        // Self rotation
        ref.rotation.x += 0.01;
        ref.rotation.y += 0.015;
      }
    });
  });

  return (
    <group ref={modelRef}>
      {/* Central Core - Main Security Hub */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.2}>
        <group>
          {/* Inner glowing core */}
          <Sphere ref={coreRef} args={[0.8, 64, 64]} position={[0, 0, 0]}>
            <meshStandardMaterial
              color="#3B82F6"
              metalness={0.9}
              roughness={0.1}
              envMapIntensity={1.5}
              emissive="#1E40AF"
              emissiveIntensity={0.2}
            />
          </Sphere>
          
          {/* Outer protective shell */}
          <Sphere args={[1.0, 32, 32]} position={[0, 0, 0]}>
            <meshStandardMaterial
              color="#60A5FA"
              metalness={0.7}
              roughness={0.3}
              transparent
              opacity={0.6}
              envMapIntensity={1}
            />
          </Sphere>
        </group>
      </Float>

      {/* Orbiting Security Nodes */}
      {Array.from({ length: 8 }, (_, i) => (
        <Box
          key={i}
          ref={(el) => {
            if (el) orbitingRefs.current[i] = el;
          }}
          args={[0.2, 0.2, 0.2]}
          position={[2, 0, 0]}
        >
          <meshStandardMaterial
            color={['#3B82F6', '#60A5FA', '#93C5FD', '#DBEAFE'][i % 4]}
            metalness={0.8}
            roughness={0.2}
            emissive={['#1E40AF', '#3B82F6', '#60A5FA', '#93C5FD'][i % 4]}
            emissiveIntensity={0.1}
          />
        </Box>
      ))}

      {/* Connecting Data Streams */}
      <group>
        {Array.from({ length: 12 }, (_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const x = Math.cos(angle) * 1.5;
          const z = Math.sin(angle) * 1.5;
          return (
            <Box key={`stream-${i}`} args={[0.05, 1.5, 0.05]} position={[x, 0, z]}>
              <meshStandardMaterial
                color="#60A5FA"
                transparent
                opacity={0.4}
                emissive="#3B82F6"
                emissiveIntensity={0.2}
              />
            </Box>
          );
        })}
      </group>

      {/* Outer Wireframe Shield */}
      <Sphere args={[1.8, 16, 16]} position={[0, 0, 0]}>
        <meshBasicMaterial 
          color="#60A5FA" 
          wireframe 
          opacity={0.2} 
          transparent 
        />
      </Sphere>

      {/* Rotating Ring Elements */}
      <group>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2, 0.05, 16, 100]} />
          <meshStandardMaterial
            color="#3B82F6"
            metalness={0.9}
            roughness={0.1}
            emissive="#1E40AF"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[2.2, 0.03, 16, 100]} />
          <meshStandardMaterial
            color="#60A5FA"
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.7}
          />
        </mesh>
      </group>
    </group>
  );
}

// Lighting setup
function Lighting() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3B82F6" />
      <pointLight position={[10, 10, 10]} intensity={0.3} color="#60A5FA" />
    </>
  );
}

// Main HeroScene component
export default function HeroScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Additional GSAP animations for the canvas container
    if (typeof window !== 'undefined') {
      gsap.set('.hero-canvas', { opacity: 0 });
      gsap.to('.hero-canvas', { 
        opacity: 1, 
        duration: 2, 
        ease: 'power2.out',
        delay: 0.5 
      });
    }
  }, []);

  return (
    <div className="hero-canvas w-full h-full">
      <Canvas
        ref={canvasRef}
        camera={{ position: [0, 0, 6], fov: 50 }}
        shadows
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Environment and lighting */}
        <Environment preset="night" />
        <Lighting />
        
        {/* 3D Models */}
        <AnimatedModel />
        
        {/* Controls for development (remove in production) */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          enableRotate={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}
