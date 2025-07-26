'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export default function MagneticButton({ 
  children, 
  href, 
  className = '', 
  size = 'md',
  variant = 'primary',
  onClick 
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  
  const rotateX = useTransform(springY, [-50, 50], [10, -10]);
  const rotateY = useTransform(springX, [-50, 50], [-10, 10]);

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl'
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Create magnetic effect within a larger radius
    const maxDistance = 100;
    const distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY);
    
    if (distance < maxDistance) {
      const strength = Math.max(0, 1 - distance / maxDistance) * 0.3;
      x.set(mouseX * strength);
      y.set(mouseY * strength);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const buttonContent = (
    <motion.div
      ref={ref}
      className={`
        inline-block cursor-pointer rounded-lg font-semibold transition-all duration-200 
        ${sizeClasses[size]} ${variantClasses[variant]} ${className}
      `}
      style={{
        x: springX,
        y: springY,
        rotateX,
        rotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{ 
        scale: 0.95,
        transition: { duration: 0.1 }
      }}
    >
      <motion.span
        className="block"
        animate={isHovered ? { 
          textShadow: variant === 'primary' ? '0 0 20px rgba(255,255,255,0.5)' : '0 0 20px rgba(59,130,246,0.5)'
        } : {}}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.span>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: variant === 'primary' 
            ? 'linear-gradient(135deg, rgba(59,130,246,0.3), rgba(37,99,235,0.3))'
            : 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(37,99,235,0.2))',
          filter: 'blur(8px)',
          zIndex: -1,
        }}
        animate={isHovered ? { 
          opacity: 1,
          scale: 1.1
        } : { 
          opacity: 0,
          scale: 0.8
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="relative inline-block">
        {buttonContent}
      </Link>
    );
  }

  return <div className="relative inline-block">{buttonContent}</div>;
}
