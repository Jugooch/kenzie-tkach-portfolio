"use client";

import Link from 'next/link';
import { Mail, FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 px-4 bg-[#fefaee]">
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl font-serif text-center mb-12 fade-in text-[#0a0c14]">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 fade-in">
            <form className="space-y-4">
              <Input placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Textarea placeholder="Your message" className="h-32" />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
          <div className="space-y-6 fade-in">
            <div className="flex items-center space-x-4">
              <Mail className="h-5 w-5" />
              <Link href="mailto:hello@kenzietkachdesign.com" className="text-[#0a0c14]/80 hover:text-primary transition-colors">
                  hello@kenzietkachdesign.com
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <FileText className="h-5 w-5" />
              <Link href="/Tkach_Mackenzie_Resume2024.pdf" className="text-[#0a0c14]/80 hover:text-primary transition-colors">
                Download Resume
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Download className="h-5 w-5" />
              <Link href="/Tkach_Mackenzie_Portfolio.pdf" className="text-[#0a0c14]/80 hover:text-primary transition-colors">
                Download PDF Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}