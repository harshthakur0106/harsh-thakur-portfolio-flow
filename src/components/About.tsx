
import React from 'react';
import { Button } from '@/components/ui/button';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl font-bold text-center mb-12 text-foreground">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 items-center">
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
              <div className="w-full h-full rounded-full bg-gradient-to-tr from-primary to-primary/50 opacity-30 animate-pulse-glow"></div>
              <div className="absolute inset-4 rounded-full bg-background overflow-hidden border-2 border-primary">
                <img 
                  src="/lovable-uploads/c59f3828-cb1e-4b3c-974c-e015045ed7ca.png" 
                  alt="Harsh Thakur" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-6 glassmorphism-card p-6 animate-fade-in">
            <h3 className="text-2xl font-bold text-primary">Full-Stack Developer & AI/ML Engineer</h3>
            
            <p className="text-foreground">
              I'm Harsh Thakur, a passionate developer focused on creating innovative solutions 
              that make a positive social impact. With expertise in both AI/ML technologies and 
              full-stack development, I bridge the gap between cutting-edge algorithms and 
              user-friendly applications.
            </p>
            
            <p className="text-foreground">
              Currently pursuing Engineering in Artificial Intelligence & Data Science, I combine tech 
              skills with purpose to solve meaningful problems. Beyond tech, I enjoy writing poetry 
              about self-growth and emotional strength. My personal brand statement: "Building intelligent 
              systems and writing words that create change".
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild className="glow-button animated-gradient-border">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
