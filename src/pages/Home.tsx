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
  Sparkles,
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
    { name: "Cortex XSIAM/XSOAR", value: 0, maxValue: 95 },
    { name: "Servicenow SOAR", value: 0, maxValue: 90 },
    { name: "ServiceNow", value: 0, maxValue: 85 },
    { name: "Cryptography", value: 0, maxValue: 80 },
    { name: "Python/JavaScript", value: 0, maxValue: 85 },
    { name: "Threat Intelligence", value: 0, maxValue: 75 },
    { name: "Incident Response", value: 0, maxValue: 90 },
    { name: "Secure Coding", value: 0, maxValue: 70 },
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
    <div className="space-y-0">
      {/* Skills Section with enhanced animations */}
      <section id="skills" ref={skillsRef} className="py-20 bg-gradient-to-br from-green-950/20 to-black relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <Sparkles className="absolute top-10 left-10 text-green-400 animate-pulse opacity-30" size={24} />
          <Zap className="absolute top-20 right-20 text-green-300 animate-bounce opacity-40" size={20} />
          <Sparkles className="absolute bottom-20 left-1/3 text-green-500 animate-pulse opacity-25" size={16} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className={`text-4xl font-bold mb-16 text-center flex items-center justify-center ${visibleSections.skills ? 'animate-scale-in' : 'opacity-0'}`}>
            <Star className="mr-3 text-primary animate-pulse" size={32} />
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <Card 
                key={skill.name} 
                className={`overflow-hidden border-green-900/50 bg-black/80 backdrop-blur-sm transform transition-all duration-700 hover:scale-105 hover:shadow-xl hover:shadow-green-400/20 ${visibleSections.skills ? 'animate-scale-in' : 'opacity-0 translate-y-10'}`} 
                style={{animationDelay: `${0.1 + index * 0.1}s`}}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-green-400 text-lg">{skill.name}</h3>
                    <span className="text-green-200 font-bold">{skill.value}%</span>
                  </div>
                  <Progress className="h-3 bg-green-950/50" value={skill.value} />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience Timeline with enhanced animations */}
      <section id="experience" ref={experienceRef} className="py-20 relative bg-gradient-to-br from-black to-green-950/10">
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl font-bold mb-16 text-center flex items-center justify-center ${visibleSections.experience ? 'animate-scale-in' : 'opacity-0'}`}>
            <Briefcase className="mr-3 text-primary animate-bounce" size={32} />
            Professional Journey
          </h2>
          
          <div className="relative">
            {/* Enhanced timeline line */}
            <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-1 ${visibleSections.experience ? 'bg-gradient-to-b from-green-400 via-green-500 to-green-600 animate-pulse-glow' : 'bg-green-900/20'} transition-all duration-1000`}></div>
            
            {/* Timeline items */}
            <div className="space-y-32">
              {/* Job 1 */}
              <div className="relative">
                <div className={`absolute left-1/2 transform -translate-x-1/2 -mt-2 w-6 h-6 rounded-full ${visibleSections.experience ? 'bg-primary animate-pulse shadow-lg shadow-green-400/50' : 'bg-green-900/30'} z-10 transition-all duration-1000 border-4 border-black`}></div>
                <div className="flex items-center justify-between">
                  <div className={`w-[45%] pr-8 text-right timeline-item-left ${visibleSections.experience ? 'animate-slide-in-right' : 'opacity-0'}`} style={{animationDelay: "0.2s"}}>
                    <h3 className="text-2xl font-bold text-primary">2025 - Present</h3>
                    <p className="text-muted-foreground text-lg">Full-time</p>
                  </div>
                  <div className={`w-[45%] pl-8 timeline-item-right ${visibleSections.experience ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: "0.4s"}}>
                    <div className="bg-black/70 backdrop-blur-sm p-6 rounded-lg border border-green-900/50 hover:border-green-600/70 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/20">
                      <h3 className="text-2xl font-bold mb-2 text-green-400">Lead Security Engineer - SOAR</h3>
                      <p className="text-muted-foreground mb-4 text-lg">Cognizant Technology Solutions</p>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="responsibilities-1" className="animate-scale-in border-green-900/30" style={{animationDelay: "0.6s"}}>
                          <AccordionTrigger className="text-green-400 hover-glow text-left">Key Achievements & Responsibilities</AccordionTrigger>
                          <AccordionContent>
                            <ul className="list-disc pl-5 space-y-2">
                              <li className="stagger-item animate-fade-in">Spearheaded the development of tailored SOAR playbooks for 10 distinct use cases using ServiceNow SOAR and Cortex XSIAM, resulting in a 40% reduction in manual workload for SOC teams and enhancing incident response times by 30%</li>
                              <li className="stagger-item animate-fade-in">Migrated customers from ServiceNow SOAR to Cortex XSIAM, streamlining incident management processes and ensuring seamless integration.</li>
                              <li className="stagger-item animate-fade-in">Designed and rigorously tested multiple playbooks in Cortex XSIAM to automate security incident workflows, reducing error rates by 30% and significantly improving system reliability and team response efficiency.</li>
                              <li className="stagger-item animate-fade-in">Led administration of the ServiceNow platform, including eBonding integration and user onboarding; resolved 1,000+ internal support tickets in a quarter, improving uptime to 99.8% and enhancing cross-team communication by 40%.</li>
                              <li className="stagger-item animate-fade-in">Completed in live training for Palo Alto EDU 270 on Cortex XSIAM, earning certification in best practices for XSIAM configurations and incident management.</li>
                              <li className="stagger-item animate-fade-in">Analyzed 300+ emerging threats and vulnerabilities, delivering prioritized threat alerts and advisories to clients, which led to the identification of 40 previously unknown security risks within the first quarter.</li>
                              <li className="stagger-item animate-fade-in">Actively learning and implementing Qualys VMDR to integrate automated vulnerability scanning and remediation into the security operations framework.</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Job 2 */}
              <div className="relative">
                <div className={`absolute left-1/2 transform -translate-x-1/2 -mt-2 w-6 h-6 rounded-full ${visibleSections.experience ? 'bg-primary animate-pulse shadow-lg shadow-green-400/50' : 'bg-green-900/30'} z-10 transition-all duration-1000 border-4 border-black`} style={{transitionDelay: "0.3s"}}></div>
                <div className="flex items-center justify-between">
                  <div className={`w-[45%] pr-8 text-right timeline-item-left ${visibleSections.experience ? 'animate-slide-in-right' : 'opacity-0'}`} style={{animationDelay: "0.7s"}}>
                    <h3 className="text-2xl font-bold text-primary">2023 - 2025</h3>
                    <p className="text-muted-foreground text-lg">Full-time</p>
                  </div>
                  <div className={`w-[45%] pl-8 timeline-item-right ${visibleSections.experience ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: "0.9s"}}>
                    <div className="bg-black/70 backdrop-blur-sm p-6 rounded-lg border border-green-900/50 hover:border-green-600/70 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/20">
                      <h3 className="text-2xl font-bold mb-2 text-green-400">Sr. Security Engineer - SOAR</h3>
                      <p className="text-muted-foreground mb-4 text-lg">Cognizant Technology Solutions</p>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="responsibilities-2" className="animate-scale-in border-green-900/30" style={{animationDelay: "1.1s"}}>
                          <AccordionTrigger className="text-green-400 hover-glow text-left">Key Achievements & Responsibilities</AccordionTrigger>
                          <AccordionContent>
                            <ul className="list-disc pl-5 space-y-2">
                              <li className="stagger-item animate-fade-in">Conducted preventive analysis of the systems' consoles to establish potential security breaches which resulted in the prevention of up to 99% of unauthorized risks.</li>
                              <li className="stagger-item animate-fade-in">Provided 24/7 Endpoint and firewall support to resolve Level 1 issues for an international client base, ensuring 100% adherence to service-level agreements for over 5000 Service Requests and Incidents while responding tothem within an average of 5 minutes, with zero SLA breaches over 8 months.</li>
                              <li className="stagger-item animate-fade-in">Performed comprehensive health checks for over 100 servers covering 38+ enterprises daily, confirming no identified threats and ensuring antivirus updates.</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Job 3 */}
              <div className="relative">
                <div className={`absolute left-1/2 transform -translate-x-1/2 -mt-2 w-6 h-6 rounded-full ${visibleSections.experience ? 'bg-primary animate-pulse shadow-lg shadow-green-400/50' : 'bg-green-900/30'} z-10 transition-all duration-1000 border-4 border-black`} style={{transitionDelay: "0.6s"}}></div>
                <div className="flex items-center justify-between">
                  <div className={`w-[45%] pr-8 text-right timeline-item-left ${visibleSections.experience ? 'animate-slide-in-right' : 'opacity-0'}`} style={{animationDelay: "1.2s"}}>
                    <h3 className="text-2xl font-bold text-primary">2022 - 2023</h3>
                    <p className="text-muted-foreground text-lg">Internship</p>
                  </div>
                  <div className={`w-[45%] pl-8 timeline-item-right ${visibleSections.experience ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: "1.4s"}}>
                    <div className="bg-black/70 backdrop-blur-sm p-6 rounded-lg border border-green-900/50 hover:border-green-600/70 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/20">
                      <h3 className="text-2xl font-bold mb-2 text-green-400">Threat Management Intern - ITM</h3>
                      <p className="text-muted-foreground mb-4 text-lg">Cognizant Technology Solutions</p>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="responsibilities-3" className="animate-scale-in border-green-900/30" style={{animationDelay: "1.6s"}}>
                          <AccordionTrigger className="text-green-400 hover-glow text-left">Key Achievements & Responsibilities</AccordionTrigger>
                          <AccordionContent>
                            <ul className="list-disc pl-5 space-y-2">
                              <li className="stagger-item animate-fade-in">Assisted in vulnerability scanning and assessment</li>
                              <li className="stagger-item animate-fade-in">Performed security research and documentation</li>
                              <li className="stagger-item animate-fade-in">Participated in security awareness program development</li>
                              <li className="stagger-item animate-fade-in">Supported incident response team during security events</li>
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
        </div>
      </section>

      {/* Publications Section with enhanced styling */}
      <section id="publications" ref={publicationsRef} className="py-20 bg-gradient-to-br from-green-950/10 to-black">
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl font-bold mb-16 text-center flex items-center justify-center ${visibleSections.publications ? 'animate-scale-in' : 'opacity-0'}`}>
            <FileText className="mr-3 text-primary animate-pulse" size={32} />
            Research & Publications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Advanced Threat Detection in Zero Trust Networks",
                journal: "Cybersecurity Journal",
                year: 2023,
                description: "Research on enhancing threat detection capabilities in zero trust architecture environments."
              },
              {
                title: "Cryptographic Vulnerabilities in IoT Devices",
                journal: "International Journal of Network Security",
                year: 2022,
                description: "Analysis of common cryptographic implementations in IoT devices and their vulnerabilities."
              },
              {
                title: "SIEM Optimization for Modern Threat Landscapes",
                journal: "Security Conference Proceedings",
                year: 2021,
                description: "Methodologies for optimizing SIEM systems to detect sophisticated modern attacks."
              }
            ].map((pub, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden border-green-900/50 hover:border-green-600/70 transition-all duration-500 bg-black/80 backdrop-blur-sm hover:shadow-xl hover:shadow-green-900/30 hover:-translate-y-2 group
                ${visibleSections.publications ? 'animate-fade-in card-hover' : 'opacity-0 translate-y-10'}`}
                style={{animationDelay: `${0.2 + index * 0.2}s`}}
              >
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-3 text-green-400 group-hover:text-green-300 transition-colors">{pub.title}</h3>
                  <div className="flex justify-between mb-4">
                    <p className="text-green-200 text-sm font-medium">{pub.journal}</p>
                    <p className="text-green-200 text-sm font-bold">{pub.year}</p>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{pub.description}</p>
                  <Button variant="link" className="text-green-400 hover:text-green-300 p-0 mt-4 btn-shine group">
                    Read More
                    <ChevronDown className="ml-1 h-4 w-4 group-hover:animate-bounce" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects with enhanced animations */}
      <section id="projects" ref={projectsRef} className="py-20 bg-gradient-to-br from-black to-green-950/20">
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl font-bold mb-16 text-center ${visibleSections.projects ? 'animate-scale-in' : 'opacity-0'}`}>
            <span className="flex items-center justify-center">
              <Zap className="mr-3 text-primary animate-bounce" size={32} />
              Featured Projects
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Network Intrusion Detection System",
                description: "AI-powered intrusion detection system for enterprise networks with real-time threat analysis",
                image: "🔒 Network Security"
              },
              {
                title: "Secure Code Analyzer",
                description: "Automated tool for identifying security vulnerabilities in source code with ML-driven insights",
                image: "🔍 Code Analysis" 
              },
              {
                title: "Zero Trust Implementation Framework",
                description: "Comprehensive framework and tools for implementing zero trust architecture in organizations",
                image: "🛡️ Zero Trust"
              }
            ].map((project, index) => (
              <Card 
                key={project.title} 
                className={`overflow-hidden transition-all duration-700 hover:shadow-xl hover:shadow-green-900/40 hover:-translate-y-3 border-green-900/50 hover:border-green-600/70 group bg-black/80 backdrop-blur-sm
                ${visibleSections.projects ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}
                style={{animationDelay: `${0.2 + index * 0.2}s`}}
              >
                <div className="h-48 bg-gradient-to-br from-green-950/30 to-black/90 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-black/70"></div>
                  <span className="text-4xl relative z-10">{project.image}</span>
                  <div className="absolute inset-0 bg-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-8 bg-black/90 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-3 text-green-400 group-hover:text-green-300 transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <Button variant="outline" size="sm" className="border-green-800 hover:bg-green-900/50 hover:text-green-300 btn-shine transition-all duration-300 group-hover:scale-105">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" className="border-green-800 hover:bg-green-900/50 hover:text-green-300 btn-shine px-8 py-4 text-lg transition-all duration-300 hover:scale-105">
              View All Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
