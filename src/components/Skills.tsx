import React, { useEffect, useRef } from 'react';
import { 
  BrainCircuit, 
  FileCode2, 
  Database, 
  Paintbrush, 
  Leaf, 
  BarChart, 
  Bot,
  Eye,
  Image,
  Zap,
  Atom
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
  category: string;
}

const skills: Skill[] = [
  // AI/ML
  { name: "Python", icon: <div className="text-4xl">🐍</div>, color: "#3776AB", category: "ai" },
  { name: "OpenCV", icon: <Eye className="w-8 h-8" />, color: "#5C3EE8", category: "ai" },
  { name: "YOLO", icon: <Image className="w-8 h-8" />, color: "#00FFFF", category: "ai" },
  { name: "TensorFlow/PyTorch", icon: <BrainCircuit className="w-8 h-8" />, color: "#FF6F00", category: "ai" },
  { name: "Computer Vision", icon: <div className="text-4xl">👀</div>, color: "#3B78A7", category: "ai" },
  
  // Web Development
  { name: "Next.js", icon: <Zap className="w-8 h-8" />, color: "#000000", category: "web" },
  { name: "React", icon: <Atom className="w-8 h-8" />, color: "#61DAFB", category: "web" },
  { name: "JavaScript/TypeScript", icon: <FileCode2 className="w-8 h-8" />, color: "#F7DF1E", category: "web" },
  { name: "Tailwind CSS", icon: <Paintbrush className="w-8 h-8" />, color: "#06B6D4", category: "web" },
  { name: "MongoDB", icon: <Leaf className="w-8 h-8" />, color: "#47A248", category: "web" },
  
  // Other
  { name: "Data Analytics", icon: <BarChart className="w-8 h-8" />, color: "#4285F4", category: "other" },
  { name: "IoT Integration", icon: <div className="text-4xl">📶</div>, color: "#FF4F00", category: "other" },
  { name: "Drizzle ORM", icon: <Database className="w-8 h-8" />, color: "#165DFF", category: "other" },
  { name: "Google Generative AI", icon: <Bot className="w-8 h-8" />, color: "#4285F4", category: "other" },
];

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const skillCards = entry.target.querySelectorAll('.skill-card');
            skillCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);
  
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl font-bold text-center mb-12">My Skills</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">AI/ML</h3>
          <div ref={skillsRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {skills.filter(skill => skill.category === 'ai').map((skill, index) => (
              <div 
                key={index} 
                className="skill-card opacity-0 p-4 bg-card rounded-lg border border-border flex flex-col items-center justify-center h-32 transition-transform duration-200 hover:scale-105 hover:shadow-md"
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                <div className="text-4xl mb-2" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <p className="font-medium text-center">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Web Development</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {skills.filter(skill => skill.category === 'web').map((skill, index) => (
              <div 
                key={index} 
                className="skill-card opacity-0 p-4 bg-card rounded-lg border border-border flex flex-col items-center justify-center h-32 transition-transform duration-200 hover:scale-105 hover:shadow-md"
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                <div className="text-4xl mb-2" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <p className="font-medium text-center">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Other</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.filter(skill => skill.category === 'other').map((skill, index) => (
              <div 
                key={index} 
                className="skill-card opacity-0 p-4 bg-card rounded-lg border border-border flex flex-col items-center justify-center h-32 transition-transform duration-200 hover:scale-105 hover:shadow-md"
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                <div className="text-4xl mb-2" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <p className="font-medium text-center">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
