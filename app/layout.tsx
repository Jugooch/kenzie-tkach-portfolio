import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

const playfair = Playfair_Display({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kenzie Tkach - Graphic Designer',
  description: 'Portfolio of Kenzie Tkach - Where Gothic Meets Contemporary Design',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(inter.className, "scroll-smooth")}>
      <body>
        <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <Image src="/logos/SymbolLogoRed.png" alt="KT" width="48" height="48"></Image>
            <div className="space-x-8">
              <a href="#" className="hover:text-primary transition-colors">Home</a>
              <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-[#0a0c14] text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <Image src="/logos/WatermarkLogoRed.png" alt="Kenzie Tkach" width="400" height="48"></Image>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Link 
                  href="https://www.linkedin.com/in/mackenzie-tkach/?original_referer=https%3A%2F%2Fkenzietkachdesign.com%2F"
                  className="relative group flex items-center"
                >
                  <span className="text-white/80 font-medium group-hover:text-white transition-colors">
                    LinkedIn
                  </span>
                  <span className="text-primary ml-0.5">.</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link 
                  href="https://www.behance.net/kenzietkach"
                  className="relative group flex items-center"
                >
                  <span className="text-white/80 font-medium group-hover:text-white transition-colors">
                    Behance
                  </span>
                  <span className="text-primary ml-0.5">.</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link 
                  href="https://www.instagram.com/kenzietkach/"
                  className="relative group flex items-center"
                >
                  <span className="text-white/80 font-medium group-hover:text-white transition-colors">
                    Instagram
                  </span>
                  <span className="text-primary ml-0.5">.</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
              <div className="text-white/40">© {new Date().getFullYear()} All rights reserved</div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}