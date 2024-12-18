"use client";

import { Project } from '@/lib/types';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="group relative cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Always visible on mobile, overlay on desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent md:bg-black/0 md:group-hover:bg-black/60 transition-colors duration-300">
          <div className="absolute bottom-0 p-4 text-white">
            <div className="inline-block px-2 py-1 mb-2 text-xs font-medium bg-primary/90 rounded">
              {project.category}
            </div>
            <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
            <p className="text-sm text-white/80 line-clamp-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}