import React from 'react';
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
  { name: "TensorFlow/PyTorch", icon: <Brain className="w-8 h-8" />, color: "#FF6F00", category: "ai" },
  { name: "Computer Vision", icon: <Eye className="w-8 h-8" />, color: "#3B78A7", category: "ai" },
  { name: "Google AI", icon: <Bot className="w-8 h-8" />, color: "#4285F4", category: "ai" },
  
  // Web Development
  { name: "Next.js", icon: <Zap className="w-8 h-8" />, color: "#000000", category: "web" },
  { name: "React", icon: <Atom className="w-8 h-8" />, color: "#61DAFB", category: "web" },
  { name: "JavaScript/TypeScript", icon: <Code className="w-8 h-8" />, color: "#F7DF1E", category: "web" },
  { name: "Tailwind CSS", icon: <Paintbrush className="w-8 h-8" />, color: "#06B6D4", category: "web" },
  { name: "MongoDB", icon: <Leaf className="w-8 h-8" />, color: "#47A248", category: "web" },
  { name: "Bootstrap", icon: <Rocket className="w-8 h-8" />, color: "#7952B3", category: "web" },
  
  // Other
  { name: "Data Analytics", icon: <BarChart className="w-8 h-8" />, color: "#4285F4", category: "other" },
  { name: "IoT Integration", icon: <Wifi className="w-8 h-8" />, color: "#FF4F00", category: "other" },
  { name: "Drizzle ORM", icon: <Database className="w-8 h-8" />, color: "#165DFF", category: "other" },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl font-bold text-center mb-12">My Skills</h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">AI/ML</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {skills.filter(skill => skill.category === 'ai').map((skill, index) => (
              <div 
                key={index} 
                className="p-4 bg-card rounded-lg border border-primary/20 shadow-lg hover:shadow-primary/20 flex flex-col items-center justify-center h-32 transition-all duration-300 hover:scale-105 hover:border-primary"
              >
                <div className="text-4xl mb-3" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <p className="font-medium text-center">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Web Development</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {skills.filter(skill => skill.category === 'web').map((skill, index) => (
              <div 
                key={index} 
                className="p-4 bg-card rounded-lg border border-primary/20 shadow-lg hover:shadow-primary/20 flex flex-col items-center justify-center h-32 transition-all duration-300 hover:scale-105 hover:border-primary"
              >
                <div className="text-4xl mb-3" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <p className="font-medium text-center">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Other Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
            {skills.filter(skill => skill.category === 'other').map((skill, index) => (
              <div 
                key={index} 
                className="p-4 bg-card rounded-lg border border-primary/20 shadow-lg hover:shadow-primary/20 flex flex-col items-center justify-center h-32 transition-all duration-300 hover:scale-105 hover:border-primary"
              >
                <div className="text-4xl mb-3" style={{ color: skill.color }}>
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
