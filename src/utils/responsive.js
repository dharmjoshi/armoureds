import { useState, useEffect } from 'react';
import Image from 'next/image';

// Responsive utility classes and breakpoints for consistent mobile-first design
export const responsive = {
  // Container classes with proper responsive padding
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  containerSmall: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
  containerLarge: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
  
  // Text size classes that scale properly
  headingHero: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold",
  headingLarge: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold",
  headingMedium: "text-xl sm:text-2xl md:text-3xl font-bold",
  headingSmall: "text-lg sm:text-xl md:text-2xl font-bold",
  
  // Body text that's readable across devices
  bodyLarge: "text-base sm:text-lg md:text-xl",
  bodyMedium: "text-sm sm:text-base md:text-lg",
  bodySmall: "text-xs sm:text-sm md:text-base",
  
  // Spacing classes for consistent gaps
  sectionPadding: "py-12 md:py-16 lg:py-20",
  sectionPaddingSmall: "py-8 md:py-12 lg:py-16",
  
  // Grid layouts that work well on all devices
  gridTwoCol: "grid sm:grid-cols-2 gap-6 md:gap-8",
  gridThreeCol: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
  gridFourCol: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8",
  
  // Button sizes for touch-friendly interaction
  buttonLarge: "py-3 px-6 md:px-8 text-base md:text-lg",
  buttonMedium: "py-2 px-4 md:px-6 text-sm md:text-base",
  buttonSmall: "py-2 px-3 md:px-4 text-xs md:text-sm",
};

// Hook for detecting screen size
export const useResponsive = () => {
  const [screenSize, setScreenSize] = useState('md');
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setScreenSize('sm');
      else if (width < 768) setScreenSize('md');
      else if (width < 1024) setScreenSize('lg');
      else setScreenSize('xl');
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return screenSize;
};

// Responsive image component wrapper
export const ResponsiveImage = ({ 
  src, 
  alt, 
  className = "", 
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={`w-full h-auto object-cover ${className}`}
      priority={priority}
      sizes={sizes}
      width={800}
      height={600}
    />
  );
};

export default responsive;
