
import React, { useState, useEffect } from 'react';
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
    "AI Engineer & Full-Stack Developer",
    "Building solutions for social good",
    "Creating meaningful impact with technology"
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

  // Scroll progress indicator
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = document.documentElement.scrollTop;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Particle effect
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random size between 2-6px
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position within hero section
      const heroSection = document.querySelector('section') as HTMLElement;
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height;
        
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        
        heroSection.appendChild(particle);
        
        // Animate and remove
        setTimeout(() => {
          particle.style.opacity = '0';
          setTimeout(() => {
            if (heroSection.contains(particle)) {
              heroSection.removeChild(particle);
            }
          }, 1000);
        }, Math.random() * 2000 + 1000);
      }
    };
    
    // Create particles periodically
    const interval = setInterval(createParticle, 300);
    
    return () => clearInterval(interval);
  }, []);
  
  // Scroll to top button
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const handleScrollVisibility = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScrollVisibility);
    return () => window.removeEventListener('scroll', handleScrollVisibility);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>
      
      <section className="min-h-screen flex flex-col items-center justify-center bg-secondary relative pt-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCAzLjgtMS43OSA0LTR6TTYgMTZWMGgxNnY2SDZ2MTB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 flex flex-col items-center text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary animate-fade-in">
            Hi, I'm <span className="text-primary">Harsh Thakur</span>
          </h1>
          
          {showTypewriter && (
            <TypeWriter text={typedPhrases[currentPhraseIndex]} />
          )}
          
          <p className="mt-8 max-w-lg text-foreground text-center animate-fade-in">
            Passionate about leveraging AI and technology to solve real-world problems 
            while creating meaningful impact. Based in Pune, India.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in">
            <Button asChild className="glow-button animated-gradient-border">
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" asChild className="border-accent/50 text-foreground hover:text-foreground hover:bg-primary/20 hover:border-primary">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          
          <div className="mt-12">
            <a href="#about" className="animate-bounce inline-block text-primary">
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
              >
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      <button 
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
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
        >
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </button>
    </>
  );
};

export default Hero;
