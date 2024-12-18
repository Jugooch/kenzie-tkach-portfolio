"use client";

import Image from 'next/image';

interface ProjectGalleryProps {
  mockups: Array<{
    url: string;
    caption: string;
  }>;
}

export function ProjectGallery({ mockups }: ProjectGalleryProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-serif text-left">Project Gallery</h3>
      <div className="grid grid-cols-1 gap-6">
        {mockups.map((mockup, index) => (
          <figure key={index} className="relative space-y-2">
            <div className="relative aspect-[16/9]">
              <Image
                src={mockup.url}
                alt={mockup.caption}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <figcaption className="text-sm text-muted-foreground text-left">
              {mockup.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}