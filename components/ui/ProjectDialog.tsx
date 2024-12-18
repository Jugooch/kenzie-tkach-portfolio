"use client";

import { Project } from '@/lib/types';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ProjectDetails } from './ProjectDetails';
import { ProjectHero } from './ProjectHero';
import { X } from 'lucide-react';
import { ProjectCategory } from './ProjectCategory';

interface ProjectDialogProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  if (!project) return null;

  return (
    <Dialog open={!!project} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <button 
          onClick={() => onClose()} 
          className="absolute right-4 top-4 z-50 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background/90 transition-colors"
          aria-label="Close dialog"
        >
          <X className="h-4 w-4" />
        </button>
        <ProjectHero image={project.image} alt={project.title} />
        <div className="p-6">
          <DialogHeader className="text-left space-y-4">
            <div className="flex flex-col space-y-2 sm:space-y-3">
              <ProjectCategory category={project.category} />
              <DialogTitle className="text-3xl font-serif">
                {project.title}
              </DialogTitle>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {project.description}
            </p>
          </DialogHeader>
          <ProjectDetails project={project} />
        </div>
      </DialogContent>
    </Dialog>
  );
}