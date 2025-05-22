
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  FileText, 
  Star,
  ChevronDown
} from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const Home = () => {
  // Animation for skills progress bars
  const [skills, setSkills] = useState([
    { name: "Network Security", value: 0, maxValue: 95 },
    { name: "Penetration Testing", value: 0, maxValue: 90 },
    { name: "SIEM Tools", value: 0, maxValue: 85 },
    { name: "Cryptography", value: 0, maxValue: 80 },
    { name: "Cloud Security", value: 0, maxValue: 85 },
    { name: "Threat Intelligence", value: 0, maxValue: 75 },
    { name: "Incident Response", value: 0, maxValue: 90 },
    { name: "Secure Coding", value: 0, maxValue: 70 },
  ]);

  // Animation effect for progress bars
  useEffect(() => {
    const timer = setTimeout(() => {
      setSkills(prevSkills => 
        prevSkills.map(skill => ({
          ...skill,
          value: skill.value < skill.maxValue ? skill.value + 1 : skill.value
        }))
      );
    }, 20);

    const allFilled = skills.every(skill => skill.value >= skill.maxValue);
    if (allFilled) {
      clearTimeout(timer);
    }

    return () => clearTimeout(timer);
  }, [skills]);

  return (
    <div className="space-y-16 animate-fade-in">
      {/* Hero Section */}
      <section className="py-16 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-in-right">
            Hi, I'm <span className="text-primary">John Doe</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Cybersecurity Engineer specializing in network security and ethical hacking
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="animate-scale-in" asChild>
              <Link to="/contact">Contact Me</Link>
            </Button>
            <Button size="lg" variant="outline" className="animate-scale-in" asChild>
              <Link to="/about">About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Work Experience Timeline */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
            <Briefcase className="mr-2 text-primary" />
            Work Experience
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-800"></div>
            
            {/* Timeline items */}
            <div className="space-y-24">
              {/* Job 1 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2 w-5 h-5 rounded-full bg-primary z-10"></div>
                <div className="flex items-center justify-between">
                  <div className="w-[45%] pr-8 text-right animate-fade-in">
                    <h3 className="text-xl font-bold text-primary">2021 - Present</h3>
                    <p className="text-muted-foreground">Full-time</p>
                  </div>
                  <div className="w-[45%] pl-8 animate-fade-in">
                    <h3 className="text-xl font-bold mb-2">Senior Cybersecurity Engineer</h3>
                    <p className="text-muted-foreground mb-2">SecureTech Solutions</p>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="responsibilities-1">
                        <AccordionTrigger className="text-green-400">Responsibilities</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Led security infrastructure for mission-critical systems</li>
                            <li>Implemented zero-trust architecture and network segmentation</li>
                            <li>Conducted penetration testing and vulnerability assessments</li>
                            <li>Mentored junior security analysts and engineers</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
              
              {/* Job 2 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2 w-5 h-5 rounded-full bg-primary z-10"></div>
                <div className="flex items-center justify-between">
                  <div className="w-[45%] pr-8 text-right animate-fade-in">
                    <h3 className="text-xl font-bold text-primary">2018 - 2021</h3>
                    <p className="text-muted-foreground">Full-time</p>
                  </div>
                  <div className="w-[45%] pl-8 animate-fade-in">
                    <h3 className="text-xl font-bold mb-2">Cybersecurity Analyst</h3>
                    <p className="text-muted-foreground mb-2">Digital Defense Corp</p>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="responsibilities-2">
                        <AccordionTrigger className="text-green-400">Responsibilities</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Monitored and responded to security incidents using SIEM tools</li>
                            <li>Performed regular security audits and compliance checks</li>
                            <li>Developed security documentation and incident response procedures</li>
                            <li>Conducted security awareness training for staff</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
              
              {/* Job 3 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2 w-5 h-5 rounded-full bg-primary z-10"></div>
                <div className="flex items-center justify-between">
                  <div className="w-[45%] pr-8 text-right animate-fade-in">
                    <h3 className="text-xl font-bold text-primary">2016 - 2018</h3>
                    <p className="text-muted-foreground">Internship</p>
                  </div>
                  <div className="w-[45%] pl-8 animate-fade-in">
                    <h3 className="text-xl font-bold mb-2">Security Intern</h3>
                    <p className="text-muted-foreground mb-2">CyberShield Inc</p>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="responsibilities-3">
                        <AccordionTrigger className="text-green-400">Responsibilities</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Assisted in vulnerability scanning and assessment</li>
                            <li>Performed security research and documentation</li>
                            <li>Participated in security awareness program development</li>
                            <li>Supported incident response team during security events</li>
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
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center">
            <Star className="mr-2 text-primary" />
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <Card key={skill.name} className="overflow-hidden border-green-900/50 bg-black/70 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-green-400">{skill.name}</h3>
                    <span className="text-green-200">{skill.value}%</span>
                  </div>
                  <Progress className="h-2" value={skill.value} />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center">
            <FileText className="mr-2 text-primary" />
            Publications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <Card key={index} className="overflow-hidden border-green-900/50 hover:border-green-600/70 transition-colors bg-black/70 backdrop-blur hover:shadow-lg hover:shadow-green-900/20 hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-green-400">{pub.title}</h3>
                  <div className="flex justify-between mb-4">
                    <p className="text-green-200 text-sm">{pub.journal}</p>
                    <p className="text-green-200 text-sm">{pub.year}</p>
                  </div>
                  <p className="text-muted-foreground text-sm">{pub.description}</p>
                  <Button variant="link" className="text-green-400 hover:text-green-300 p-0 mt-4">
                    Read More
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Network Intrusion Detection System",
                description: "AI-powered intrusion detection system for enterprise networks",
                image: "network-ids"
              },
              {
                title: "Secure Code Analyzer",
                description: "Automated tool for identifying security vulnerabilities in source code",
                image: "code-analyzer" 
              },
              {
                title: "Zero Trust Implementation Framework",
                description: "Framework and tools for implementing zero trust architecture in organizations",
                image: "zero-trust"
              }
            ].map((project) => (
              <Card key={project.title} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-green-900/20 hover:-translate-y-1 border-green-900/50 hover:border-green-600/70 group">
                <div className="h-48 bg-muted/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-black/70"></div>
                  <span className="text-muted-foreground relative z-10">{project.image}</span>
                </div>
                <CardContent className="p-6 bg-black/70 backdrop-blur">
                  <h3 className="text-xl font-bold mb-2 text-green-400 group-hover:text-green-300 transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <Button variant="outline" size="sm" className="border-green-800 hover:bg-green-900/30 hover:text-green-300">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="border-green-800 hover:bg-green-900/30 hover:text-green-300">View All Projects</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
