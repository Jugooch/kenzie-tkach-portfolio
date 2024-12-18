"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export function HeroButton() {
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
    <motion.div variants={item}>
      <Button
        size="lg"
        className="group relative overflow-hidden"
        onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
      >
        <motion.span
          className="absolute inset-0 bg-primary/10"
          initial={false}
          whileHover={{ scale: 5 }}
          transition={{ duration: 0.4 }}
        />
        <span className="relative flex items-center justify-center">
          View My Work
          <motion.span
            className="inline-flex ml-2"
            animate={{ y: [-2, 2, -2] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.span>
        </span>
      </Button>
    </motion.div>
  );
}