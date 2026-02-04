'use client';

import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">Get In Touch</h2>
        
        <p className="text-xl text-foreground/80 mb-12 leading-relaxed">
          I'm always interested in hearing about new opportunities and collaborations. 
          Feel free to reach out!
        </p>

        <div className="mb-12">
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-lg"
          >
            <Mail size={24} />
            Send me an email
          </a>
        </div>

        <div className="flex justify-center gap-8">
          <a
            href="#"
            className="p-4 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} className="text-primary" />
          </a>
          <a
            href="#"
            className="p-4 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-colors"
            aria-label="GitHub"
          >
            <Github size={28} className="text-primary" />
          </a>
          <a
            href="#"
            className="p-4 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={28} className="text-primary" />
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-foreground/60 text-sm">
          <p>© 2024 Mico Patrick M. Pulido. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
