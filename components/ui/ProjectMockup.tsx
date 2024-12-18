"use client";

import Image from 'next/image';
import { useState } from 'react';

interface ProjectMockupProps {
  mockup: {
    url: string;
    caption: string;
  };
}

export function ProjectMockup({ mockup }: ProjectMockupProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative aspect-[4/3] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={mockup.url}
        alt={mockup.caption}
        fill
        className="object-cover rounded-lg"
      />
      {/* Mobile: Always show caption at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-2 md:hidden">
        <div className="bg-black/70 text-white text-sm p-2 rounded">
          {mockup.caption}
        </div>
      </div>
      {/* Desktop: Show caption on hover */}
      <div className={`absolute inset-0 bg-black/60 items-center justify-center hidden md:flex transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-white text-center p-4">
          {mockup.caption}
        </p>
      </div>
    </div>
  );
}