import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, useMotionTemplate } from 'motion/react';

export const Spotlight = () => {
  const mouseX = useSpring(useMotionValue(0), { damping: 30, stiffness: 200 });
  const mouseY = useSpring(useMotionValue(0), { damping: 30, stiffness: 200 });
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, isVisible]);

  const background = useMotionTemplate`radial-gradient(700px circle at ${mouseX}px ${mouseY}px, rgba(59, 130, 246, 0.12), transparent 80%)`;

  return (
    <motion.div 
      className="fixed inset-0 pointer-events-none z-30"
      style={{
        background,
        opacity: isVisible ? 1 : 0
      }}
    />
  );
};
