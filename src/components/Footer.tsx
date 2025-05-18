
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-accent bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold">
              Harsh<span className="text-primary">Thakur</span>
            </a>
            <p className="text-sm text-accent mt-2">
              Building solutions that make a difference
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#about" className="text-sm text-accent hover:text-primary transition-colors relative group">
              About
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <a href="#skills" className="text-sm text-accent hover:text-primary transition-colors relative group">
              Skills
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <a href="#projects" className="text-sm text-accent hover:text-primary transition-colors relative group">
              Projects
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <a href="#contact" className="text-sm text-accent hover:text-primary transition-colors relative group">
              Contact
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-accent/30 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-accent">
            &copy; {currentYear} Harsh Thakur. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 text-sm text-accent">
            <span className="mr-2">
              Made with <span className="text-primary animate-pulse">❤</span> in Pune, India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
