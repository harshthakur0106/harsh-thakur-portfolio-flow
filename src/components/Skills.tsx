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
  Code,
  ChartBar,
  ChartPie,
  ChartLine,
  GitBranch,
  GitCommitHorizontal,
  FileSpreadsheet
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

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
  { name: "YOLO", icon: <Image className="w-8 h-8" />, color: "#00BFFF", category: "ai" },
  { name: "TensorFlow/PyTorch", icon: <Brain className="w-8 h-8" />, color: "#FF6F00", category: "ai" },
  { name: "Computer Vision", icon: <Eye className="w-8 h-8" />, color: "#9C27B0", category: "ai" },
  { name: "Google AI", icon: <Bot className="w-8 h-8" />, color: "#34A853", category: "ai" },
  { name: "Machine Learning", icon: <Brain className="w-8 h-8" />, color: "#F06292", category: "ai" },
  
  // Web Development
  { name: "Next.js", icon: <Zap className="w-8 h-8" />, color: "#000000", category: "web" },
  { name: "React", icon: <Atom className="w-8 h-8" />, color: "#61DAFB", category: "web" },
  { name: "JavaScript", icon: <Code className="w-8 h-8" />, color: "#F7DF1E", category: "web" },
  { name: "TypeScript", icon: <Code className="w-8 h-8" />, color: "#3178C6", category: "web" },
  { name: "Tailwind CSS", icon: <Paintbrush className="w-8 h-8" />, color: "#06B6D4", category: "web" },
  { name: "MongoDB", icon: <Leaf className="w-8 h-8" />, color: "#4DB33D", category: "web" },
  { name: "Bootstrap", icon: <Rocket className="w-8 h-8" />, color: "#7952B3", category: "web" },
  
  // Other
  { name: "Data Analytics", icon: <ChartBar className="w-8 h-8" />, color: "#FF9800", category: "other" },
  { name: "IoT Integration", icon: <Wifi className="w-8 h-8" />, color: "#00BCD4", category: "other" },
  { name: "Drizzle ORM", icon: <Database className="w-8 h-8" />, color: "#8E44AD", category: "other" },
  { name: "Git/GitHub", icon: <GitBranch className="w-8 h-8" />, color: "#F05032", category: "other" },
  { name: "SQL", icon: <Database className="w-8 h-8" />, color: "#4479A1", category: "other" },
  { name: "Excel", icon: <FileSpreadsheet className="w-8 h-8" />, color: "#217346", category: "other" },
  { name: "LeetCode", icon: <GitCommitHorizontal className="w-8 h-8" />, color: "#FFA116", category: "other" },
];

const SkillCard = ({ category, title, bgGradient }: { category: string, title: string, bgGradient: string }) => {
  const filteredSkills = skills.filter(skill => skill.category === category);
  
  return (
    <div className="mb-12">
      <h3 className={`text-2xl font-bold mb-6 text-center bg-clip-text text-transparent ${bgGradient}`}>
        {title}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredSkills.map((skill, index) => (
          <Card key={index} className="skill-card animated-gradient-border overflow-hidden hover:border-primary transition-all duration-300">
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <div 
                className="skill-icon mb-3" 
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
              <span className="text-foreground font-medium text-center">{skill.name}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-secondary to-secondary/95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-2 border-primary/40 text-primary animate-pulse-glow">My Expertise</Badge>
          <h2 className="section-title text-3xl lg:text-4xl font-bold text-center text-foreground">Technical Arsenal</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          <SkillCard 
            category="ai" 
            title="🔬 AI & Machine Learning" 
            bgGradient="bg-gradient-to-r from-purple-500 to-pink-500" 
          />
          
          <SkillCard 
            category="web" 
            title="💻 Web Development" 
            bgGradient="bg-gradient-to-r from-blue-500 to-cyan-500" 
          />
          
          <SkillCard 
            category="other" 
            title="⚙️ Tools & Others" 
            bgGradient="bg-gradient-to-r from-amber-500 to-orange-500" 
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
