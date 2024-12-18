"use client";

import Image from 'next/image';

export function BackgroundPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ef384015_1px,transparent_1px),linear-gradient(to_bottom,#ef384015_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      {/* Brand emblem */}
      <Image
        className="absolute top-8 right-4 opacity-20 w-[75%] sm:w-[50%] md:w-[30%] h-auto"
        src="/logos/SymbolLogoRed.png" alt="" width="400" height="400"
      >
      </Image>
    </div>
  );
}