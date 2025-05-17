
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold text-primary">
              Harsh<span className="text-secondary">Thakur</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Building solutions that make a difference
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Harsh Thakur. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 text-sm text-muted-foreground">
            <span className="mr-2">
              Made with <span className="text-destructive">❤</span> in Pune, India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
