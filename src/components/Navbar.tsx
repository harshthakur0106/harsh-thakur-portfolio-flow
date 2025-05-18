
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-secondary/95 backdrop-blur-md shadow-md py-2 border-b border-accent/20' : 'bg-transparent py-4'
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-foreground">
          Harsh<span className="text-primary">Thakur</span>
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={cn(
            'w-6 h-0.5 bg-foreground transition-all mb-1.5',
            isMenuOpen && 'transform rotate-45 translate-y-2 bg-primary'
          )} />
          <div className={cn(
            'w-6 h-0.5 bg-foreground transition-all mb-1.5',
            isMenuOpen && 'opacity-0'
          )} />
          <div className={cn(
            'w-6 h-0.5 bg-foreground transition-all',
            isMenuOpen && 'transform -rotate-45 -translate-y-2 bg-primary'
          )} />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-foreground">
          <a href="#about" className="hover:text-primary transition-colors relative group">
            About
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
          <a href="#skills" className="hover:text-primary transition-colors relative group">
            Skills
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
          <a href="#projects" className="hover:text-primary transition-colors relative group">
            Projects
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
          <a href="#contact" className="hover:text-primary transition-colors relative group">
            Contact
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-secondary/95 backdrop-blur-md shadow-md border-t border-accent/20">
          <nav className="flex flex-col items-center p-4 gap-4 text-foreground">
            <a 
              href="#about" 
              className="w-full py-2 text-center hover:bg-primary/20 rounded-md relative group"
              onClick={() => setIsMenuOpen(false)}
            >
              About
              <span className="absolute left-1/4 right-1/4 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></span>
            </a>
            <a 
              href="#skills" 
              className="w-full py-2 text-center hover:bg-primary/20 rounded-md relative group"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
              <span className="absolute left-1/4 right-1/4 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></span>
            </a>
            <a 
              href="#projects" 
              className="w-full py-2 text-center hover:bg-primary/20 rounded-md relative group"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
              <span className="absolute left-1/4 right-1/4 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></span>
            </a>
            <a 
              href="#contact" 
              className="w-full py-2 text-center hover:bg-primary/20 rounded-md relative group"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
              <span className="absolute left-1/4 right-1/4 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
