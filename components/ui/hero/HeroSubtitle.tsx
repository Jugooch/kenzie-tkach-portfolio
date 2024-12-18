"use client";

import { motion } from 'framer-motion';

export function HeroSubtitle() {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.p
      variants={item}
      className="text-xl md:text-2xl text-foreground/80 mb-8"
    >
      Graphic Designer & Cat Mom
    </motion.p>
  );
}