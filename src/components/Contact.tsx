
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="flex flex-col items-center justify-center mt-10">
          <Avatar className="h-24 w-24 mb-6">
            <AvatarImage src="/lovable-uploads/c59f3828-cb1e-4b3c-974c-e015045ed7ca.png" alt="Harsh Thakur" />
            <AvatarFallback>HT</AvatarFallback>
          </Avatar>
          
          <h3 className="text-2xl font-bold mb-4">Harsh Thakur</h3>
          <p className="text-muted-foreground text-center max-w-lg mb-8">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
            <Card>
              <CardContent className="p-6 flex flex-col items-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <h4 className="font-medium text-center">Email</h4>
                <a 
                  href="mailto:contact@harshthakur.com" 
                  className="text-primary hover:underline mt-1"
                >
                  contact@harshthakur.com
                </a>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex flex-col items-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </div>
                <h4 className="font-medium text-center">LinkedIn</h4>
                <a 
                  href="https://linkedin.com/in/harshthakur" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:underline mt-1"
                >
                  linkedin.com/in/harshthakur
                </a>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex flex-col items-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                </div>
                <h4 className="font-medium text-center">GitHub</h4>
                <a 
                  href="https://github.com/harshthakur" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:underline mt-1"
                >
                  github.com/harshthakur
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
