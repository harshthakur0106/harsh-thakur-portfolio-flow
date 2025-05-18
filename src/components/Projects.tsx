
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Project data
const projects = [
  {
    id: 1,
    title: "Swachhta and LiFE Dashboard",
    description: "AI-powered cleanliness monitoring system for post offices with waste detection and analytics",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=400",
    tags: ["Python", "OpenCV", "Next.js", "MongoDB", "IoT"],
    link: "https://sih-project-ak.vercel.app/",
    github: "https://github.com/harshthakur0106",
    category: "ai"
  },
  {
    id: 2,
    title: "AI Driven Content Management System",
    description: "Automates social media content generation and performance analysis",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&h=400",
    tags: ["Next.js", "Tailwind", "TypeScript", "Google Generative AI"],
    link: "https://team-omega-hackathon-2024.vercel.app/",
    github: "https://github.com/harshthakur0106",
    category: "ai"
  },
  {
    id: 3,
    title: "Fullstack E-Commerce Website",
    description: "Complete e-commerce solution with product search and cart functionality",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=400",
    tags: ["Next.js", "MongoDB", "JavaScript", "Responsive Design"],
    link: "https://nextjs-ecommerce-zeta-eight.vercel.app/",
    github: "https://github.com/harshthakur0106",
    category: "fullstack"
  },
  {
    id: 4,
    title: "No More Lazy - Gamified Task Manager",
    description: "Productivity app that turns tasks into a game with streaks and rankings",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=400",
    tags: ["React", "TypeScript", "Zustand", "UI/UX"],
    link: "https://nomorelazy.vercel.app/",
    github: "https://github.com/harshthakur0106",
    category: "fullstack"
  },
  {
    id: 5,
    title: "Innova: AI-Powered Interview Prep",
    description: "Platform for interview preparation with AI mock interviews",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&h=400",
    tags: ["AI", "React", "Voice Recognition"],
    link: "https://innova-ai.vercel.app/",
    github: "https://github.com/harshthakur0106",
    category: "ai"
  }
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [animatedProjects, setAnimatedProjects] = useState<number[]>([]);
  
  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === filter));
    }
  }, [filter]);
  
  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = Number(entry.target.getAttribute('data-project-id'));
            if (!animatedProjects.includes(projectId)) {
              setAnimatedProjects(prev => [...prev, projectId]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );
    
    const projectElements = document.querySelectorAll('.project-card');
    projectElements.forEach(el => observer.observe(el));
    
    return () => {
      projectElements.forEach(el => observer.unobserve(el));
    };
  }, [filteredProjects, animatedProjects]);
  
  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'ai', label: 'AI/ML' },
    { value: 'fullstack', label: 'Full-Stack' }
  ];
  
  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl font-bold text-center mb-12 text-foreground">My Projects</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mt-8 mb-12">
          {categories.map(category => (
            <Button
              key={category.value}
              variant={filter === category.value ? "default" : "outline"}
              size="lg"
              onClick={() => setFilter(category.value)}
              className={`rounded-full px-6 ${
                filter === category.value 
                  ? "bg-primary hover:bg-[#FF4E4E]" 
                  : "border-accent hover:border-primary hover:text-primary"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className={`project-card card-lift overflow-hidden flex flex-col border-accent/40 bg-accent/10 ${
                animatedProjects.includes(project.id) ? 'animate-fade-in' : 'opacity-0'
              }`}
              data-project-id={project.id}
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 z-20">
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <Badge key={i} variant="secondary" className="bg-primary/20 text-primary border border-primary/20">{tag}</Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="border-primary/20 text-foreground">+{project.tags.length - 3}</Badge>
                    )}
                  </div>
                </div>
              </div>
              
              <CardHeader className="bg-accent/10">
                <CardTitle className="text-xl font-bold text-primary">{project.title}</CardTitle>
                <CardDescription className="text-foreground mt-2">{project.description}</CardDescription>
              </CardHeader>
              
              <CardFooter className="flex justify-between mt-auto pt-4 gap-4 bg-accent/10">
                <Button size="sm" variant="outline" asChild className="w-full border-accent/50 hover:border-primary hover:text-primary">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">View Code</a>
                </Button>
                <Button size="sm" asChild className="w-full glow-button">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
