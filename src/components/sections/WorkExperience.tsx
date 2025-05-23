
import { useState, useEffect, useRef } from "react";
import { Briefcase } from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const WorkExperience = () => {
  const experienceRef = useRef<HTMLDivElement>(null);
  const [visibleSections, setVisibleSections] = useState({
    experience: false
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
            experience: true
          }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    if (experienceRef.current) observer.observe(experienceRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
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
  );
};

export default WorkExperience;
