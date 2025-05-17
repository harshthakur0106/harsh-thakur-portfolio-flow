
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const TypeWriter: React.FC<{ text: string; delay?: number }> = ({ 
  text,
  delay = 100
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);
  
  return (
    <div className="relative h-8">
      <span className="text-xl md:text-2xl font-medium text-muted-foreground">
        {displayText}
      </span>
      <span className="animate-blink-caret absolute h-8 border-r-4 border-primary ml-1"></span>
    </div>
  );
};

const Hero: React.FC = () => {
  const typedPhrases = [
    "Building solutions for social good",
    "AI/ML Developer",
    "Full-Stack Engineer"
  ];
  
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [showTypewriter, setShowTypewriter] = useState(true);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowTypewriter(false);
      setTimeout(() => {
        setCurrentPhraseIndex(prev => (prev + 1) % typedPhrases.length);
        setShowTypewriter(true);
      }, 500);
    }, 4000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <section className="min-h-screen flex flex-col items-center justify-center wave-bg pt-16">
      <div className="container mx-auto px-4 flex flex-col items-center text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-primary">Harsh Thakur</span>
        </h1>
        
        {showTypewriter && (
          <TypeWriter text={typedPhrases[currentPhraseIndex]} />
        )}
        
        <p className="mt-8 max-w-lg text-muted-foreground text-center">
          Passionate about creating innovative solutions through AI/ML and full-stack development. 
          Based in Pune, India.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button asChild>
            <a href="#projects">View My Work</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
        
        <div className="mt-12">
          <a href="#about" className="animate-bounce inline-block">
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
              className="text-muted-foreground"
            >
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
