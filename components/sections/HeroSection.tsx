"use client";

import { HeroTitle } from '@/components/ui/hero/HeroTitle';
import { HeroSubtitle } from '@/components/ui/hero/HeroSubtitle';
import { HeroButton } from '@/components/ui/hero/HeroButton';
import { BackgroundPattern } from '@/components/ui/BackgroundPattern';
import { motion } from 'framer-motion';

export function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#fefaee]">
      <BackgroundPattern />
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <HeroTitle />
        <HeroSubtitle />
        <HeroButton />
      </motion.div>
    </section>
  );
}