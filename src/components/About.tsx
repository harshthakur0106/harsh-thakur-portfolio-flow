
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 items-center">
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* This is a placeholder - replace with actual image */}
              <div className="w-full h-full rounded-full bg-gradient-to-tr from-primary to-secondary opacity-75 animate-tilt"></div>
              <div className="absolute inset-4 rounded-full bg-muted overflow-hidden border-4 border-background">
                {/* Replace with your actual profile image */}
                <div className="w-full h-full flex items-center justify-center text-xl font-medium text-muted-foreground">
                  Harsh Thakur
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Full-Stack Developer & AI/ML Engineer</h3>
            
            <p className="text-muted-foreground">
              I'm Harsh Thakur, a passionate developer focused on creating innovative solutions 
              that make a positive social impact. With expertise in both AI/ML technologies and 
              full-stack development, I bridge the gap between cutting-edge algorithms and 
              user-friendly applications.
            </p>
            
            <p className="text-muted-foreground">
              Based in Pune, India, I'm constantly exploring new technologies and approaches to 
              solve complex problems. I believe in writing clean, maintainable code and building
              applications that are both powerful and intuitive.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="outline">
                Download Resume
              </Button>
            </div>
          </div>
        </div>
        
        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          <Card className="border-primary/20">
            <CardContent className="p-6 text-center">
              <h4 className="text-4xl font-bold text-primary">5+</h4>
              <p className="text-sm text-muted-foreground mt-2">Years Experience</p>
            </CardContent>
          </Card>
          
          <Card className="border-primary/20">
            <CardContent className="p-6 text-center">
              <h4 className="text-4xl font-bold text-primary">20+</h4>
              <p className="text-sm text-muted-foreground mt-2">Projects Completed</p>
            </CardContent>
          </Card>
          
          <Card className="border-primary/20">
            <CardContent className="p-6 text-center">
              <h4 className="text-4xl font-bold text-primary">10+</h4>
              <p className="text-sm text-muted-foreground mt-2">Happy Clients</p>
            </CardContent>
          </Card>
          
          <Card className="border-primary/20">
            <CardContent className="p-6 text-center">
              <h4 className="text-4xl font-bold text-primary">5+</h4>
              <p className="text-sm text-muted-foreground mt-2">Publications</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
