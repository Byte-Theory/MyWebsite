import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const ScrollSection = ({ children, id }: { children: React.ReactNode, id?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.section 
      id={id} 
      ref={ref} 
      style={{ opacity }}
      className="relative"
    >
      {children}
    </motion.section>
  );
};
