
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial theme preference
    const darkModePreference = 
      window.matchMedia('(prefers-color-scheme: dark)').matches || 
      document.documentElement.classList.contains('dark');
    
    setIsDark(darkModePreference);
  }, []);

  useEffect(() => {
    // Apply theme changes
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="rounded-full text-white hover:bg-primary/20 hover:text-white"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
};

export default ThemeToggle;
