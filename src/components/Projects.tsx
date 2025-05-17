
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Sample project data
const projects = [
  {
    id: 1,
    title: "AI-Powered Healthcare Assistant",
    description: "A machine learning system that helps healthcare providers diagnose and treat patients more effectively.",
    image: "/placeholder.svg",
    tags: ["Python", "TensorFlow", "React", "AWS"],
    link: "#",
    github: "#",
    category: "ai"
  },
  {
    id: 2,
    title: "Sustainable Agriculture Platform",
    description: "Full-stack application helping farmers optimize crop yields and reduce resource usage through data analytics.",
    image: "/placeholder.svg",
    tags: ["Next.js", "Node.js", "MongoDB", "IoT"],
    link: "#",
    github: "#",
    category: "fullstack"
  },
  {
    id: 3,
    title: "Ethical AI Framework",
    description: "An open-source framework for developing and evaluating AI systems with ethical considerations built-in.",
    image: "/placeholder.svg",
    tags: ["Python", "TensorFlow", "Research"],
    link: "#",
    github: "#",
    category: "ai"
  },
  {
    id: 4,
    title: "Community Support Network",
    description: "Mobile-first platform connecting volunteers with vulnerable community members who need assistance.",
    image: "/placeholder.svg",
    tags: ["React Native", "Firebase", "GraphQL"],
    link: "#",
    github: "#",
    category: "mobile"
  },
  {
    id: 5,
    title: "Renewable Energy Dashboard",
    description: "Interactive visualization dashboard for monitoring and optimizing renewable energy usage in buildings.",
    image: "/placeholder.svg",
    tags: ["D3.js", "React", "Node.js", "PostgreSQL"],
    link: "#",
    github: "#",
    category: "data"
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
            const projectCards = entry.target.querySelectorAll('.project-card-anim');
            projectCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in');
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
    { value: 'fullstack', label: 'Full-Stack' },
    { value: 'data', label: 'Data' },
    { value: 'mobile', label: 'Mobile' }
  ];
  
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Projects</h2>
        
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
              className="project-card project-card-anim opacity-0 overflow-hidden flex flex-col"
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
