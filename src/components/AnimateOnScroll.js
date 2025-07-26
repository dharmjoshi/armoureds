'use client'

import { motion } from 'framer-motion'

const AnimateOnScroll = ({ 
  children, 
  className = "",
  delay = 0,
  duration = 0.6,
  direction = "up", // "up", "down", "left", "right"
  distance = 50,
  once = true,
  ...props 
}) => {
  // Define animation variants based on direction
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
      x: direction === "left" ? distance : direction === "right" ? -distance : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }} // Trigger when 10% of element is visible
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Preset animation components for common use cases
export const FadeInUp = ({ children, ...props }) => (
  <AnimateOnScroll direction="up" {...props}>
    {children}
  </AnimateOnScroll>
)

export const FadeInDown = ({ children, ...props }) => (
  <AnimateOnScroll direction="down" {...props}>
    {children}
  </AnimateOnScroll>
)

export const FadeInLeft = ({ children, ...props }) => (
  <AnimateOnScroll direction="left" {...props}>
    {children}
  </AnimateOnScroll>
)

export const FadeInRight = ({ children, ...props }) => (
  <AnimateOnScroll direction="right" {...props}>
    {children}
  </AnimateOnScroll>
)

export const FadeIn = ({ children, ...props }) => (
  <AnimateOnScroll direction="up" distance={0} {...props}>
    {children}
  </AnimateOnScroll>
)

// Staggered animation for lists
export const StaggerContainer = ({ children, staggerDelay = 0.1, className = "" }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay
      }
    }
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  )
}

export const StaggerItem = ({ children, className = "" }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  )
}

export default AnimateOnScroll
