
import React, { useState, useEffect, useRef } from 'react';
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
  const projectsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === filter));
    }
  }, [filter]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const projectCards = entry.target.querySelectorAll('.project-card');
            projectCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in');
                card.classList.remove('opacity-0');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }
    
    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, [filteredProjects]);
  
  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'ai', label: 'AI/ML' },
    { value: 'fullstack', label: 'Full-Stack' }
  ];
  
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl font-bold text-center mb-12">My Projects</h2>
        
        <div className="flex flex-wrap justify-center gap-2 mt-8 mb-10">
          {categories.map(category => (
            <Button
              key={category.value}
              variant={filter === category.value ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category.value)}
            >
              {category.label}
            </Button>
          ))}
        </div>
        
        <div 
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="project-card overflow-hidden flex flex-col"
            >
              <div className="h-48 overflow-hidden bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              
              <CardHeader>
                <div className="flex gap-2 flex-wrap mb-2">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <Badge key={i} variant="secondary">{tag}</Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline">+{project.tags.length - 3}</Badge>
                  )}
                </div>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardFooter className="flex justify-between mt-auto pt-4">
                <Button size="sm" variant="outline" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">Code</a>
                </Button>
                <Button size="sm" asChild>
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
