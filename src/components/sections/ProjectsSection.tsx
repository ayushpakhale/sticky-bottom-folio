
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ProjectsSection = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [visibleSections, setVisibleSections] = useState({
    projects: false
  });

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => ({
            ...prev,
            projects: true
          }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    if (projectsRef.current) observer.observe(projectsRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const projects = [
    {
      title: "Network Intrusion Detection System",
      description: "AI-powered intrusion detection system for enterprise networks",
      image: "network-ids",
      tech: "Python, TensorFlow, Scapy"
    },
    {
      title: "Secure Code Analyzer",
      description: "Automated tool for identifying security vulnerabilities in source code",
      image: "code-analyzer",
      tech: "Node.js, AST Analysis, Docker"
    },
    {
      title: "Zero Trust Implementation Framework",
      description: "Framework and tools for implementing zero trust architecture in organizations",
      image: "zero-trust",
      tech: "Go, Kubernetes, Istio"
    }
  ];

  return (
    <section id="projects" ref={projectsRef} className="py-16 bg-gradient-to-br from-green-950/10 via-background to-green-950/10">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold mb-12 text-center select-none ${visibleSections.projects ? 'animate-scale-in' : 'opacity-0'}`}>Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-green-900/20 hover:-translate-y-2 border-green-900/50 hover:border-green-600/70 group
              ${visibleSections.projects ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}
              style={{animationDelay: `${0.2 + index * 0.2}s`}}
            >
              <div className="h-48 bg-gradient-to-br from-green-900/30 to-black/70 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-black/70"></div>
                <span className="text-green-400/70 relative z-10 text-lg font-semibold select-none">{project.image}</span>
              </div>
              <CardContent className="p-6 bg-black/80 backdrop-blur">
                <h3 className="text-xl font-bold mb-2 text-green-400 group-hover:text-green-300 transition-colors professional-text select-none" style={{animationDelay: `${0.3 + index * 0.2}s`}}>{project.title}</h3>
                <p className="text-muted-foreground mb-3 select-none">
                  {project.description}
                </p>
                <div className="text-xs text-green-300/70 mb-4 font-mono select-none">{project.tech}</div>
                <Button variant="outline" size="sm" className="border-green-800 hover:bg-green-900/30 hover:text-green-300 btn-shine select-none">View Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" className="border-green-800 hover:bg-green-900/30 hover:text-green-300 btn-shine select-none">View All Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
