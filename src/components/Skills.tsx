import React, { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  icon: string;
  color: string;
  category: string;
}

const skills: Skill[] = [
  // AI/ML
  { name: "Python", icon: "🐍", color: "#3776AB", category: "ai" },
  { name: "OpenCV", icon: "👁️", color: "#5C3EE8", category: "ai" },
  { name: "YOLO", icon: "🖼️", color: "#00FFFF", category: "ai" },
  { name: "TensorFlow/PyTorch", icon: "🧠", color: "#FF6F00", category: "ai" },
  { name: "Computer Vision", icon: "👀", color: "#3B78A7", category: "ai" },
  
  // Web Development
  { name: "Next.js", icon: "⚡", color: "#000000", category: "web" },
  { name: "React", icon: "⚛️", color: "#61DAFB", category: "web" },
  { name: "JavaScript/TypeScript", icon: "📜", color: "#F7DF1E", category: "web" },
  { name: "Tailwind CSS", icon: "🎨", color: "#06B6D4", category: "web" },
  { name: "MongoDB", icon: "🍃", color: "#47A248", category: "web" },
  
  // Other
  { name: "Data Analytics", icon: "📊", color: "#4285F4", category: "other" },
  { name: "IoT Integration", icon: "📶", color: "#FF4F00", category: "other" },
  { name: "Drizzle ORM", icon: "🗄️", color: "#165DFF", category: "other" },
  { name: "Google Generative AI", icon: "🤖", color: "#4285F4", category: "other" },
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
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">AI/ML</h3>
          <div ref={skillsRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {skills.filter(skill => skill.category === 'ai').map((skill, index) => (
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
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Web Development</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {skills.filter(skill => skill.category === 'web').map((skill, index) => (
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
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Other</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.filter(skill => skill.category === 'other').map((skill, index) => (
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
