
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

// Path to your Resume PDF file
const RESUME_PDF_URL = "/resume.pdf";

const Resume = () => {
  const pdfContainerRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = RESUME_PDF_URL;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-green-400">My Resume</h1>
        <p className="text-lg text-green-200 max-w-2xl mx-auto mb-5">
          Experienced cybersecurity engineer with a passion for securing digital infrastructures.
        </p>
        <Button 
          onClick={handleDownload}
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          <FileDown className="mr-2 h-4 w-4" /> Download Resume
        </Button>
      </div>

      {/* PDF Viewer */}
      <div className="pdf-container bg-black/50 p-2 border border-green-800 rounded-lg mb-10" ref={pdfContainerRef}>
        <iframe 
          src={`${RESUME_PDF_URL}#toolbar=0`} 
          className="w-full h-full"
          title="Resume PDF"
        />
        <div className="text-center text-sm text-muted-foreground mt-2">
          If the PDF doesn't load, please <a href={RESUME_PDF_URL} target="_blank" rel="noreferrer" className="text-green-400 hover:underline">open it directly</a> or download it.
        </div>
      </div>

      {/* Experience Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 border-b border-green-800 pb-2 text-green-400">Work Experience</h2>
        <div className="space-y-6">
          {/* Job 1 */}
          <Card className="bg-black/50 border-green-800">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-green-400">Senior Cybersecurity Engineer</CardTitle>
                  <p className="text-green-200">SecureTech Solutions</p>
                </div>
                <span className="text-sm text-green-200">2021 - Present</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-outside ml-5 space-y-1 text-green-100">
                <li>Led security infrastructure for mission-critical systems</li>
                <li>Implemented zero-trust architecture and network segmentation</li>
                <li>Conducted penetration testing and vulnerability assessments</li>
                <li>Mentored junior security analysts and engineers</li>
              </ul>
            </CardContent>
          </Card>

          {/* Job 2 */}
          <Card className="bg-black/50 border-green-800">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-green-400">Cybersecurity Analyst</CardTitle>
                  <p className="text-green-200">Digital Defense Corp</p>
                </div>
                <span className="text-sm text-green-200">2018 - 2021</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-outside ml-5 space-y-1 text-green-100">
                <li>Monitored and responded to security incidents using SIEM tools</li>
                <li>Performed regular security audits and compliance checks</li>
                <li>Developed security documentation and incident response procedures</li>
                <li>Conducted security awareness training for staff</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 border-b border-green-800 pb-2 text-green-400">Education</h2>
        <Card className="bg-black/50 border-green-800">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-green-400">Master of Science in Cybersecurity</CardTitle>
                <p className="text-green-200">University of Technology</p>
              </div>
              <span className="text-sm text-green-200">2016 - 2018</span>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-green-100">Graduated with distinction. Specialized in network security and cryptography.</p>
          </CardContent>
        </Card>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 border-b border-green-800 pb-2 text-green-400">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Card className="p-4 bg-black/50 border-green-800">
            <h3 className="font-semibold mb-2 text-green-400">Security</h3>
            <p className="text-sm text-green-100">Penetration Testing, SIEM, IDS/IPS, Threat Modeling, Incident Response</p>
          </Card>
          <Card className="p-4 bg-black/50 border-green-800">
            <h3 className="font-semibold mb-2 text-green-400">Technologies</h3>
            <p className="text-sm text-green-100">Firewalls, WAF, EDR, Splunk, Wireshark, Kali Linux, Metasploit</p>
          </Card>
          <Card className="p-4 bg-black/50 border-green-800">
            <h3 className="font-semibold mb-2 text-green-400">Certifications</h3>
            <p className="text-sm text-green-100">CISSP, CEH, OSCP, CompTIA Security+, AWS Security Specialist</p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Resume;
