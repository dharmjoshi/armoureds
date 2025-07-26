'use client'

import { motion } from 'framer-motion'

const AnimatedButton = ({ 
  children, 
  className = "", 
  variant = "primary", 
  size = "md", 
  onClick = () => {}, 
  disabled = false, 
  ...props 
}) => {
  // Base button styles
  const baseStyles = "font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
  
  // Variant styles
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500",
    ghost: "text-blue-600 hover:bg-blue-50 focus:ring-blue-500"
  }
  
  // Size styles
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    xl: "px-8 py-4 text-xl"
  }
  
  // Animation variants
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeInOut" }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1, ease: "easeInOut" }
    },
    disabled: {
      scale: 1,
      opacity: 0.6,
      cursor: "not-allowed"
    }
  }
  
  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${
    disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'
  }`
  
  return (
    <motion.button
      className={buttonClasses}
      variants={buttonVariants}
      initial="initial"
      whileHover={disabled ? "disabled" : "hover"}
      whileTap={disabled ? "disabled" : "tap"}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  )
}

// Preset button components for common use cases
export const PrimaryButton = ({ children, ...props }) => (
  <AnimatedButton variant="primary" {...props}>
    {children}
  </AnimatedButton>
)

export const SecondaryButton = ({ children, ...props }) => (
  <AnimatedButton variant="secondary" {...props}>
    {children}
  </AnimatedButton>
)

export const OutlineButton = ({ children, ...props }) => (
  <AnimatedButton variant="outline" {...props}>
    {children}
  </AnimatedButton>
)

export const GhostButton = ({ children, ...props }) => (
  <AnimatedButton variant="ghost" {...props}>
    {children}
  </AnimatedButton>
)

export default AnimatedButton
