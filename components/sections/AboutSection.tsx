"use client";

import Image from 'next/image';
import Link from 'next/link';

export function AboutSection() {
  return (
    <section className="relative py-24 px-4 bg-[#fefaee]">
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[3/4] fade-in">
          <Image
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80"
            alt="Kenzie Tkach"
            fill
            className="object-cover rounded-lg shadow-2xl"
          />
          <div className="absolute inset-0 border border-primary/10 rounded-lg transform rotate-3"></div>
        </div>
        <div className="space-y-6 fade-in">
          <h2 className="text-4xl font-serif text-[#0a0c14]">About Me</h2>
          <p className="text-lg text-[#0a0c14]/80">
            I am a Graphic Designer, Photographer, and Videographer based in Phoenix, AZ. My goal is to use my passion for art and design to tell stories that can reach and inspire others.
              <br/>
              <br/>
            I have a B.A. in Advertising and Graphic Design from Grand Canyon University. I've interned with the design team at The Reynolds and Reynolds Company in Dayton, OH, and was a graphic designer at LittleBird in Phoenix, AZ. I'm passionate about anything that allows me to tell a story and express myself creatively, whether in design, film, art, poetry, or music.
          </p>
          <blockquote className="border-l-2 border-primary pl-6 italic text-[#0a0c14]/70">
            "I love what I do and I’m always excited by the opportunity to push boundaries and try something new."
          </blockquote>
          <div className="flex flex-wrap gap-x-8 gap-y-3 pt-6 text-lg">
            <Link 
              href="https://www.linkedin.com/in/mackenzie-tkach/?original_referer=https%3A%2F%2Fkenzietkachdesign.com%2F"
              className="relative group flex items-center"
            >
              <span className="text-[#0a0c14] font-medium group-hover:text-primary transition-colors">
                LinkedIn
              </span>
              <span className="text-primary ml-0.5">.</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="https://www.behance.net/kenzietkach"
              className="relative group flex items-center"
            >
              <span className="text-[#0a0c14] font-medium group-hover:text-primary transition-colors">
                Behance
              </span>
              <span className="text-primary ml-0.5">.</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="https://www.instagram.com/kenzietkach/"
              className="relative group flex items-center"
            >
              <span className="text-[#0a0c14] font-medium group-hover:text-primary transition-colors">
                Instagram
              </span>
              <span className="text-primary ml-0.5">.</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}