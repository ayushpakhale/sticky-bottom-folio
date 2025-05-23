
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  FileText, 
  Star,
  ChevronDown,
  Shield,
  Lock,
  Zap
} from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const Home = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const publicationsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  
  // Animation for skills progress bars
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
    skills: false,
    experience: false,
    publications: false,
    projects: false
  });

  // Check if sections are visible in viewport
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetId = entry.target.id;
          
          setVisibleSections(prev => ({
            ...prev,
            [targetId]: true
          }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    if (skillsRef.current) observer.observe(skillsRef.current);
    if (experienceRef.current) observer.observe(experienceRef.current);
    if (publicationsRef.current) observer.observe(publicationsRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Animation effect for progress bars when skills section is visible
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
    <div className="space-y-20">
      {/* Empty space for the hero section overlay */}
      <section className="h-screen"></section>
      
      {/* Work Experience Timeline */}
      <section id="experience" ref={experienceRef} className="py-16 relative">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-12 text-center flex items-center justify-center select-none ${visibleSections.experience ? 'animate-scale-in' : 'opacity-0'}`}>
            <Briefcase className="mr-2 text-primary animate-bounce-subtle" />
            Work Experience
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-1 ${visibleSections.experience ? 'bg-green-800 animate-pulse-glow' : 'bg-green-900/20'} transition-all duration-1000`}></div>
            
            {/* Timeline items */}
            <div className="space-y-24">
              {/* Job 1 */}
              <div className="relative">
                <div className={`absolute left-1/2 transform -translate-x-1/2 -mt-2 w-5 h-5 rounded-full ${visibleSections.experience ? 'bg-primary animate-pulse-glow' : 'bg-green-900/30'} z-10 transition-all duration-1000`}></div>
                <div className="flex items-center justify-between">
                  <div className={`w-[45%] pr-8 text-right timeline-item-left select-none ${visibleSections.experience ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: "0.2s"}}>
                    <h3 className="text-xl font-bold text-primary professional-text">2021 - Present</h3>
                    <p className="text-muted-foreground">Full-time</p>
                  </div>
                  <div className={`w-[45%] pl-8 timeline-item-right select-none ${visibleSections.experience ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: "0.4s"}}>
                    <h3 className="text-xl font-bold mb-2 professional-text">Senior Cybersecurity Engineer</h3>
                    <p className="text-muted-foreground mb-2">SecureTech Solutions</p>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="responsibilities-1" className="animate-scale-in select-none" style={{animationDelay: "0.6s"}}>
                        <AccordionTrigger className="text-green-400 hover-glow select-none">Responsibilities</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5 space-y-1">
                            <li className="stagger-item animate-fade-in select-none">Led security infrastructure for mission-critical systems</li>
                            <li className="stagger-item animate-fade-in select-none">Implemented zero-trust architecture and network segmentation</li>
                            <li className="stagger-item animate-fade-in select-none">Conducted penetration testing and vulnerability assessments</li>
                            <li className="stagger-item animate-fade-in select-none">Mentored junior security analysts and engineers</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
              
              {/* Job 2 */}
              <div className="relative">
                <div className={`absolute left-1/2 transform -translate-x-1/2 -mt-2 w-5 h-5 rounded-full ${visibleSections.experience ? 'bg-primary animate-pulse-glow' : 'bg-green-900/30'} z-10 transition-all duration-1000`} style={{transitionDelay: "0.3s"}}></div>
                <div className="flex items-center justify-between">
                  <div className={`w-[45%] pr-8 text-right timeline-item-left select-none ${visibleSections.experience ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: "0.7s"}}>
                    <h3 className="text-xl font-bold text-primary professional-text">2018 - 2021</h3>
                    <p className="text-muted-foreground">Full-time</p>
                  </div>
                  <div className={`w-[45%] pl-8 timeline-item-right select-none ${visibleSections.experience ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: "0.9s"}}>
                    <h3 className="text-xl font-bold mb-2 professional-text">Cybersecurity Analyst</h3>
                    <p className="text-muted-foreground mb-2">Digital Defense Corp</p>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="responsibilities-2" className="animate-scale-in select-none" style={{animationDelay: "1.1s"}}>
                        <AccordionTrigger className="text-green-400 hover-glow select-none">Responsibilities</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5 space-y-1">
                            <li className="stagger-item animate-fade-in select-none">Monitored and responded to security incidents using SIEM tools</li>
                            <li className="stagger-item animate-fade-in select-none">Performed regular security audits and compliance checks</li>
                            <li className="stagger-item animate-fade-in select-none">Developed security documentation and incident response procedures</li>
                            <li className="stagger-item animate-fade-in select-none">Conducted security awareness training for staff</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
              
              {/* Job 3 */}
              <div className="relative">
                <div className={`absolute left-1/2 transform -translate-x-1/2 -mt-2 w-5 h-5 rounded-full ${visibleSections.experience ? 'bg-primary animate-pulse-glow' : 'bg-green-900/30'} z-10 transition-all duration-1000`} style={{transitionDelay: "0.6s"}}></div>
                <div className="flex items-center justify-between">
                  <div className={`w-[45%] pr-8 text-right timeline-item-left select-none ${visibleSections.experience ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: "1.2s"}}>
                    <h3 className="text-xl font-bold text-primary professional-text">2016 - 2018</h3>
                    <p className="text-muted-foreground">Internship</p>
                  </div>
                  <div className={`w-[45%] pl-8 timeline-item-right select-none ${visibleSections.experience ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: "1.4s"}}>
                    <h3 className="text-xl font-bold mb-2 professional-text">Security Intern</h3>
                    <p className="text-muted-foreground mb-2">CyberShield Inc</p>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="responsibilities-3" className="animate-scale-in select-none" style={{animationDelay: "1.6s"}}>
                        <AccordionTrigger className="text-green-400 hover-glow select-none">Responsibilities</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5 space-y-1">
                            <li className="stagger-item animate-fade-in select-none">Assisted in vulnerability scanning and assessment</li>
                            <li className="stagger-item animate-fade-in select-none">Performed security research and documentation</li>
                            <li className="stagger-item animate-fade-in select-none">Participated in security awareness program development</li>
                            <li className="stagger-item animate-fade-in select-none">Supported incident response team during security events</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with Progress Bars */}
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

      {/* Publications Section */}
      <section id="publications" ref={publicationsRef} className="py-16">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-12 text-center flex items-center justify-center select-none ${visibleSections.publications ? 'animate-scale-in' : 'opacity-0'}`}>
            <FileText className="mr-2 text-primary animate-bounce-subtle" />
            Publications & Research
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
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
            ].map((pub, index) => (
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

      {/* Featured Projects */}
      <section id="projects" ref={projectsRef} className="py-16 bg-gradient-to-br from-green-950/10 via-background to-green-950/10">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-12 text-center select-none ${visibleSections.projects ? 'animate-scale-in' : 'opacity-0'}`}>Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
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
            ].map((project, index) => (
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
    </div>
  );
};

export default Home;
