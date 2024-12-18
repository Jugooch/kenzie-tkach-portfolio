"use client";

import { Project } from '@/lib/types';
import { ProjectGallery } from './ProjectGallery';
import { ProjectTools } from './ProjectTools';

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className="mt-8 space-y-8">
      <div className="prose prose-lg">
        <p className="text-foreground/80">{project.details}</p>
      </div>
      <ProjectGallery mockups={project.mockups} />
      <ProjectTools tools={project.tools} />
    </div>
  );
}