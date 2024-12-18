"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Mail, FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ProjectGallery } from '@/components/sections/ProjectGallery';
import { projects } from '@/data/projects';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectGallery projects={projects} />
      <ContactSection />
    </main>
  );
}