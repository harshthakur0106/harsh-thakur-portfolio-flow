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

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
  category: string;
}

const skills: Skill[] = [
  // AI/ML
  { name: "Python", icon: <div className="text-4xl">🐍</div>, color: "#E63946", category: "ai" },
  { name: "OpenCV", icon: <Eye className="w-8 h-8" />, color: "#E63946", category: "ai" },
  { name: "YOLO", icon: <Image className="w-8 h-8" />, color: "#E63946", category: "ai" },
  { name: "TensorFlow/PyTorch", icon: <Brain className="w-8 h-8" />, color: "#E63946", category: "ai" },
  { name: "Computer Vision", icon: <Eye className="w-8 h-8" />, color: "#E63946", category: "ai" },
  { name: "Google AI", icon: <Bot className="w-8 h-8" />, color: "#E63946", category: "ai" },
  { name: "Machine Learning", icon: <Brain className="w-8 h-8" />, color: "#E63946", category: "ai" },
  
  // Web Development
  { name: "Next.js", icon: <Zap className="w-8 h-8" />, color: "#E63946", category: "web" },
  { name: "React", icon: <Atom className="w-8 h-8" />, color: "#E63946", category: "web" },
  { name: "JavaScript", icon: <Code className="w-8 h-8" />, color: "#E63946", category: "web" },
  { name: "TypeScript", icon: <Code className="w-8 h-8" />, color: "#E63946", category: "web" },
  { name: "Tailwind CSS", icon: <Paintbrush className="w-8 h-8" />, color: "#E63946", category: "web" },
  { name: "MongoDB", icon: <Leaf className="w-8 h-8" />, color: "#E63946", category: "web" },
  { name: "Bootstrap", icon: <Rocket className="w-8 h-8" />, color: "#E63946", category: "web" },
  
  // Other
  { name: "Data Analytics", icon: <ChartBar className="w-8 h-8" />, color: "#E63946", category: "other" },
  { name: "IoT Integration", icon: <Wifi className="w-8 h-8" />, color: "#E63946", category: "other" },
  { name: "Drizzle ORM", icon: <Database className="w-8 h-8" />, color: "#E63946", category: "other" },
  { name: "Git/GitHub", icon: <GitBranch className="w-8 h-8" />, color: "#E63946", category: "other" },
  { name: "SQL", icon: <Database className="w-8 h-8" />, color: "#E63946", category: "other" },
  { name: "Excel", icon: <FileSpreadsheet className="w-8 h-8" />, color: "#E63946", category: "other" },
  { name: "LeetCode", icon: <GitCommitHorizontal className="w-8 h-8" />, color: "#E63946", category: "other" },
];

const SkillTable = ({ category, title }: { category: string, title: string }) => {
  const filteredSkills = skills.filter(skill => skill.category === category);
  
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
        {title}
      </h3>
      <div className="glassmorphism-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-primary">Icon</TableHead>
              <TableHead className="text-primary">Skill</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSkills.map((skill, index) => (
              <TableRow key={index} className="hover:bg-accent/10 transition-colors">
                <TableCell className="p-4">
                  <div className="skill-icon flex justify-center" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                </TableCell>
                <TableCell className="font-medium text-foreground">{skill.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl font-bold text-center mb-12 text-foreground">My Skills</h2>
        
        <SkillTable category="ai" title="🔬 AI/ML" />
        <SkillTable category="web" title="💻 Web Development" />
        <SkillTable category="other" title="⚙️ Tools & Others" />
      </div>
    </section>
  );
};

export default Skills;
