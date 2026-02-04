'use client';

import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-secondary px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <img src="/mp-logo.png" alt="MP Logo" className="h-64 md:h-80 lg:h-96 w-auto" />
        </div>
        <p className="text-xl md:text-2xl text-foreground/80 mb-8">
          2nd Year Student at Ateneo de Davao University
        </p>
        <p className="text-lg md:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          Passionate about creating beautiful, functional digital experiences. 
          Exploring technology, design, and the endless possibilities they offer.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
          >
            View My Work
            <ArrowRight size={20} />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
