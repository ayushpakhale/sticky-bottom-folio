
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Star,
  Shield,
  Lock,
  Zap
} from "lucide-react";

const SkillsSection = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const [skills, setSkills] = useState([
    { name: "Network Security", value: 0, maxValue: 95, icon: Shield },
    { name: "Penetration Testing", value: 0, maxValue: 90, icon: Lock },
    { name: "SIEM Tools", value: 0, maxValue: 85, icon: Zap },
    { name: "Cryptography", value: 0, maxValue: 80, icon: Shield },
    { name: "Cloud Security", value: 0, maxValue: 85, icon: Lock },
    { name: "Threat Intelligence", value: 0, maxValue: 75, icon: Zap },
    { name: "Incident Response", value: 0, maxValue: 90, icon: Shield },
    { name: "Secure Coding", value: 0, maxValue: 70, icon: Lock },
  ]);
  
  const [visibleSections, setVisibleSections] = useState({
    skills: false
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
            skills: true
          }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    
    if (visibleSections.skills) {
      timer = setInterval(() => {
        setSkills(prevSkills => 
          prevSkills.map(skill => ({
            ...skill,
            value: skill.value < skill.maxValue ? skill.value + 1 : skill.value
          }))
        );
      }, 20);
    }

    const allFilled = skills.every(skill => skill.value >= skill.maxValue);
    if (allFilled && timer) {
      clearInterval(timer);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [visibleSections.skills, skills]);

  return (
    <section id="skills" ref={skillsRef} className="py-16 bg-gradient-to-br from-green-950/20 via-background to-green-950/20">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold mb-12 text-center flex items-center justify-center select-none ${visibleSections.skills ? 'animate-scale-in' : 'opacity-0'}`}>
          <Star className="mr-2 text-primary animate-bounce-subtle" />
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Card 
                key={skill.name} 
                className={`overflow-hidden border-green-900/50 bg-black/80 backdrop-blur transform transition-all duration-500 hover:border-green-600/70 hover:shadow-lg hover:shadow-green-900/30 hover:-translate-y-1 ${visibleSections.skills ? 'animate-scale-in' : 'opacity-0 translate-y-10'}`} 
                style={{animationDelay: `${0.1 + index * 0.1}s`}}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center space-x-2">
                      <IconComponent className="w-5 h-5 text-green-400" />
                      <h3 className="font-semibold text-green-400 professional-text select-none" style={{animationDelay: `${0.2 + index * 0.1}s`}}>{skill.name}</h3>
                    </div>
                    <span className="text-green-200 font-mono select-none">{skill.value}%</span>
                  </div>
                  <Progress className="h-3 bg-green-950/50" value={skill.value} />
                  <div className="mt-2 text-xs text-green-300/70 select-none">
                    {skill.value >= skill.maxValue ? "Expert Level" : "Loading..."}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
