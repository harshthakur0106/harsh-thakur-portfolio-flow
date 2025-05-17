
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
      isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm py-2' : 'py-4'
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-primary">
          Harsh<span className="text-secondary">Thakur</span>
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={cn(
            'w-6 h-0.5 bg-foreground transition-all mb-1.5',
            isMenuOpen && 'transform rotate-45 translate-y-2'
          )} />
          <div className={cn(
            'w-6 h-0.5 bg-foreground transition-all mb-1.5',
            isMenuOpen && 'opacity-0'
          )} />
          <div className={cn(
            'w-6 h-0.5 bg-foreground transition-all',
            isMenuOpen && 'transform -rotate-45 -translate-y-2'
          )} />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          <ThemeToggle />
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-md">
          <nav className="flex flex-col items-center p-4 gap-4">
            <a 
              href="#about" 
              className="w-full py-2 text-center hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#skills" 
              className="w-full py-2 text-center hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="w-full py-2 text-center hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="w-full py-2 text-center hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
