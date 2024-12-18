"use client";

import { motion } from 'framer-motion';

export function HeroTitle() {
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
    <motion.div
      variants={item}
      className="overflow-hidden mb-6"
    >
      <motion.h1 
        className="text-6xl md:text-8xl font-serif tracking-tight"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        Kenzie Tkach
      </motion.h1>
    </motion.div>
  );
}