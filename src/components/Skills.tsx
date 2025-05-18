import React, { useEffect, useRef } from 'react';
import { 
  FileCode2, 
  Database, 
  Paintbrush, 
  Leaf, 
  BarChart, 
  Bot,
  Eye,
  Image,
  Zap,
  Atom,
  Rocket,
  Brain,
  Wifi,
  Code
} from "lucide-react";
import { Progress } from '@/components/ui/progress';

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
  category: string;
  proficiency: number;
}

const skills: Skill[] = [
  // AI/ML
  { name: "Python", icon: <div className="text-4xl">🐍</div>, color: "#E63946", category: "ai", proficiency: 90 },
  { name: "OpenCV", icon: <Eye className="w-8 h-8" />, color: "#E63946", category: "ai", proficiency: 85 },
  { name: "YOLO", icon: <Image className="w-8 h-8" />, color: "#E63946", category: "ai", proficiency: 80 },
  { name: "TensorFlow/PyTorch", icon: <Brain className="w-8 h-8" />, color: "#E63946", category: "ai", proficiency: 75 },
  { name: "Computer Vision", icon: <Eye className="w-8 h-8" />, color: "#E63946", category: "ai", proficiency: 85 },
  { name: "Google AI", icon: <Bot className="w-8 h-8" />, color: "#E63946", category: "ai", proficiency: 80 },
  
  // Web Development
  { name: "Next.js", icon: <Zap className="w-8 h-8" />, color: "#E63946", category: "web", proficiency: 90 },
  { name: "React", icon: <Atom className="w-8 h-8" />, color: "#E63946", category: "web", proficiency: 95 },
  { name: "JavaScript/TypeScript", icon: <Code className="w-8 h-8" />, color: "#E63946", category: "web", proficiency: 90 },
  { name: "Tailwind CSS", icon: <Paintbrush className="w-8 h-8" />, color: "#E63946", category: "web", proficiency: 85 },
  { name: "MongoDB", icon: <Leaf className="w-8 h-8" />, color: "#E63946", category: "web", proficiency: 80 },
  { name: "Bootstrap", icon: <Rocket className="w-8 h-8" />, color: "#E63946", category: "web", proficiency: 75 },
  
  // Other
  { name: "Data Analytics", icon: <BarChart className="w-8 h-8" />, color: "#E63946", category: "other", proficiency: 85 },
  { name: "IoT Integration", icon: <Wifi className="w-8 h-8" />, color: "#E63946", category: "other", proficiency: 70 },
  { name: "Drizzle ORM", icon: <Database className="w-8 h-8" />, color: "#E63946", category: "other", proficiency: 75 },
];

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!skillsRef.current) return;
      
      const skillElements = skillsRef.current.querySelectorAll('.skill-progress');
      
      skillElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        
        if (isVisible) {
          const progressBar = el.querySelector('.progress-bar') as HTMLElement;
          const proficiency = progressBar.dataset.proficiency || "0";
          progressBar.style.width = `${proficiency}%`;
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    setTimeout(handleScroll, 500);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="skills" className="py-20 bg-secondary" ref={skillsRef}>
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl font-bold text-center mb-12 text-foreground">My Skills</h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">AI/ML</h3>
          <div className="grid grid-cols-1 gap-6">
            {skills.filter(skill => skill.category === 'ai').map((skill, index) => (
              <div 
                key={index} 
                className="skill-progress glassmorphism-card p-4"
              >
                <div className="flex items-center mb-2">
                  <div className="skill-icon mr-4" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground mb-1">{skill.name}</p>
                    <div className="h-2 w-full bg-accent/20 rounded-full overflow-hidden">
                      <div 
                        className="progress-bar rounded-full" 
                        data-proficiency={skill.proficiency}
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-primary font-bold ml-4">{skill.proficiency}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Web Development</h3>
          <div className="grid grid-cols-1 gap-6">
            {skills.filter(skill => skill.category === 'web').map((skill, index) => (
              <div 
                key={index} 
                className="skill-progress glassmorphism-card p-4"
              >
                <div className="flex items-center mb-2">
                  <div className="skill-icon mr-4" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground mb-1">{skill.name}</p>
                    <div className="h-2 w-full bg-accent/20 rounded-full overflow-hidden">
                      <div 
                        className="progress-bar rounded-full" 
                        data-proficiency={skill.proficiency}
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-primary font-bold ml-4">{skill.proficiency}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Other Skills</h3>
          <div className="grid grid-cols-1 gap-6">
            {skills.filter(skill => skill.category === 'other').map((skill, index) => (
              <div 
                key={index} 
                className="skill-progress glassmorphism-card p-4"
              >
                <div className="flex items-center mb-2">
                  <div className="skill-icon mr-4" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground mb-1">{skill.name}</p>
                    <div className="h-2 w-full bg-accent/20 rounded-full overflow-hidden">
                      <div 
                        className="progress-bar rounded-full" 
                        data-proficiency={skill.proficiency}
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-primary font-bold ml-4">{skill.proficiency}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
