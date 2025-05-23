
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText,
  ChevronDown
} from "lucide-react";

const PublicationsSection = () => {
  const publicationsRef = useRef<HTMLDivElement>(null);
  const [visibleSections, setVisibleSections] = useState({
    publications: false
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
            publications: true
          }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    if (publicationsRef.current) observer.observe(publicationsRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const publications = [
    {
      title: "Advanced Threat Detection in Zero Trust Networks",
      journal: "Cybersecurity Journal",
      year: 2023,
      description: "Research on enhancing threat detection capabilities in zero trust architecture environments.",
      impact: "High Impact"
    },
    {
      title: "Cryptographic Vulnerabilities in IoT Devices",
      journal: "International Journal of Network Security",
      year: 2022,
      description: "Analysis of common cryptographic implementations in IoT devices and their vulnerabilities.",
      impact: "Medium Impact"
    },
    {
      title: "SIEM Optimization for Modern Threat Landscapes",
      journal: "Security Conference Proceedings",
      year: 2021,
      description: "Methodologies for optimizing SIEM systems to detect sophisticated modern attacks.",
      impact: "High Impact"
    }
  ];

  return (
    <section id="publications" ref={publicationsRef} className="py-16">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold mb-12 text-center flex items-center justify-center select-none ${visibleSections.publications ? 'animate-scale-in' : 'opacity-0'}`}>
          <FileText className="mr-2 text-primary animate-bounce-subtle" />
          Publications & Research
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((pub, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden border-green-900/50 hover:border-green-600/70 transition-all duration-500 bg-black/80 backdrop-blur hover:shadow-lg hover:shadow-green-900/20 hover:-translate-y-2 group
              ${visibleSections.publications ? 'animate-fade-in card-hover' : 'opacity-0 translate-y-10'}`}
              style={{animationDelay: `${0.2 + index * 0.2}s`}}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${pub.impact === 'High Impact' ? 'bg-green-900/50 text-green-300' : 'bg-blue-900/50 text-blue-300'} select-none`}>
                    {pub.impact}
                  </span>
                  <span className="text-green-200 text-sm font-mono select-none">{pub.year}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-green-400 group-hover:text-green-300 transition-colors professional-text select-none" style={{animationDelay: `${0.3 + index * 0.2}s`}}>{pub.title}</h3>
                <p className="text-green-200 text-sm mb-4 font-medium select-none">{pub.journal}</p>
                <p className="text-muted-foreground text-sm select-none">{pub.description}</p>
                <Button variant="link" className="text-green-400 hover:text-green-300 p-0 mt-4 btn-shine select-none">
                  Read More
                  <ChevronDown className="ml-1 h-4 w-4 animate-bounce-subtle" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
