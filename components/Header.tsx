'use client';

import Link from 'next/link';
import { useState, useContext } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { ThemeContext } from './ThemeProvider';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useContext(ThemeContext);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">MP</div>
        
        <div className="hidden md:flex gap-8 items-center">
          <button
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-primary transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-secondary hover:bg-border transition-colors text-foreground"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <div className="flex md:hidden gap-4 items-center">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-secondary hover:bg-border transition-colors text-foreground"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-primary"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-secondary border-t border-border">
          <div className="flex flex-col gap-4 px-6 py-4">
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
