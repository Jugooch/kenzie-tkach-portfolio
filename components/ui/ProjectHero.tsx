"use client";

import Image from 'next/image';

interface ProjectHeroProps {
  image: string;
  alt: string;
}

export function ProjectHero({ image, alt }: ProjectHeroProps) {
  return (
    <div className="relative w-full aspect-[16/9]">
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
    </div>
  );
}