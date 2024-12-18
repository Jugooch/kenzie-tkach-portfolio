"use client";

import { Project } from '@/lib/types';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { ProjectDialog } from '@/components/ui/ProjectDialog';
import { useState } from 'react';

interface ProjectGalleryProps {
  projects: Project[];
}

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="gallery" className="relative py-24 px-4 bg-white">
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif text-center mb-12 fade-in text-[#0a0c14]">
          Featured Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>
      <ProjectDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}