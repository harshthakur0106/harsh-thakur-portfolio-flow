
import React, { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  icon: string;
  color: string;
}

const skills: Skill[] = [
  { name: "Python", icon: "🐍", color: "#3776AB" },
  { name: "TensorFlow", icon: "🧠", color: "#FF6F00" },
  { name: "React", icon: "⚛️", color: "#61DAFB" },
  { name: "Next.js", icon: "▲", color: "#000000" },
  { name: "Node.js", icon: "🟩", color: "#339933" },
  { name: "JavaScript", icon: "📜", color: "#F7DF1E" },
  { name: "TypeScript", icon: "🔷", color: "#3178C6" },
  { name: "AWS", icon: "☁️", color: "#FF9900" },
  { name: "Docker", icon: "🐋", color: "#2496ED" },
  { name: "MongoDB", icon: "🍃", color: "#47A248" },
  { name: "PostgreSQL", icon: "🐘", color: "#336791" },
  { name: "GraphQL", icon: "⬢", color: "#E10098" },
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
        <h2 className="section-title">My Skills</h2>
        
        <div ref={skillsRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card opacity-0"
              style={{ 
                transitionDelay: `${index * 50}ms`,
                borderColor: `${skill.color}30` 
              }}
            >
              <div 
                className="text-4xl mb-2"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
              <p className="font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-4">Areas of Expertise</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-card rounded-lg border border-border shadow-sm">
              <h4 className="text-primary font-semibold text-lg mb-2">
                Machine Learning & AI
              </h4>
              <p className="text-muted-foreground">
                Deep learning, NLP, computer vision algorithms, model deployment, and ethical AI considerations.
              </p>
            </div>
            
            <div className="p-6 bg-card rounded-lg border border-border shadow-sm">
              <h4 className="text-primary font-semibold text-lg mb-2">
                Full-Stack Development
              </h4>
              <p className="text-muted-foreground">
                Building responsive web applications with modern frameworks, RESTful APIs, and scalable backend services.
              </p>
            </div>
            
            <div className="p-6 bg-card rounded-lg border border-border shadow-sm">
              <h4 className="text-primary font-semibold text-lg mb-2">
                Cloud & DevOps
              </h4>
              <p className="text-muted-foreground">
                CI/CD pipelines, containerization, cloud infrastructure, and serverless architectures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
