
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

// Path to your CV PDF file
const CV_PDF_URL = "/cv.pdf";

const CV = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = CV_PDF_URL;
    link.download = "cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-green-400">Curriculum Vitae</h1>
        <p className="text-lg text-green-200 max-w-2xl mx-auto mb-6">
          My detailed professional background and qualifications in cybersecurity.
        </p>
        <Button 
          onClick={handleDownload}
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          <FileDown className="mr-2 h-4 w-4" /> Download CV
        </Button>
      </div>

      {/* PDF Viewer */}
      <div className="pdf-container bg-black/50 p-2 border border-green-800 rounded-lg mb-10">
        <iframe 
          src={`${CV_PDF_URL}#toolbar=0`} 
          className="w-full h-full"
          title="CV PDF"
        />
        <div className="text-center text-sm text-muted-foreground mt-2">
          If the PDF doesn't load, please <a href={CV_PDF_URL} target="_blank" rel="noreferrer" className="text-green-400 hover:underline">open it directly</a> or download it.
        </div>
      </div>

      <div className="bg-black/50 border border-green-800 rounded-lg p-6 md:p-8 shadow-md shadow-green-900/20">
        {/* Personal Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold border-b border-green-800 pb-2 mb-4 text-green-400">Personal Information</h2>
          <div className="grid md:grid-cols-2 gap-4 text-green-100">
            <div>
              <h3 className="font-semibold text-green-300">Name</h3>
              <p>John Doe</p>
            </div>
            <div>
              <h3 className="font-semibold text-green-300">Email</h3>
              <p>john.doe@example.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-green-300">Phone</h3>
              <p>(123) 456-7890</p>
            </div>
            <div>
              <h3 className="font-semibold text-green-300">Location</h3>
              <p>New York, NY</p>
            </div>
          </div>
        </section>

        {/* Professional Summary */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold border-b border-green-800 pb-2 mb-4 text-green-400">Professional Summary</h2>
          <p className="mb-2 text-green-100">
            Cybersecurity engineer with over 7 years of experience specializing in threat detection, incident response, and security architecture. 
            Proficient in implementing zero-trust frameworks and securing cloud infrastructure.
          </p>
          <p className="text-green-100">
            Passionate about staying ahead of emerging threats and implementing proactive security measures.
            Experienced in working with cross-functional teams and leading security initiatives.
          </p>
        </section>

        {/* Work Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold border-b border-green-800 pb-2 mb-4 text-green-400">Work Experience</h2>
          
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-lg text-green-300">Senior Cybersecurity Engineer</h3>
                <p className="text-green-200">SecureTech Solutions</p>
              </div>
              <span className="text-sm text-green-200">Jan 2021 - Present</span>
            </div>
            <ul className="list-disc list-outside ml-5 space-y-1 text-green-100">
              <li>Led implementation of zero-trust architecture across enterprise systems</li>
              <li>Reduced security incidents by 60% through enhanced monitoring and proactive threat hunting</li>
              <li>Designed and implemented comprehensive security controls for cloud environments (AWS, Azure)</li>
              <li>Managed a team of 5 security analysts and developed comprehensive security training programs</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-lg text-green-300">Cybersecurity Analyst</h3>
                <p className="text-green-200">Digital Defense Corp</p>
              </div>
              <span className="text-sm text-green-200">Jun 2018 - Dec 2020</span>
            </div>
            <ul className="list-disc list-outside ml-5 space-y-1 text-green-100">
              <li>Conducted vulnerability assessments and penetration tests for clients across various industries</li>
              <li>Implemented and managed SIEM solutions, developing custom correlation rules</li>
              <li>Created comprehensive incident response procedures that reduced response time by 45%</li>
              <li>Led security awareness programs that measurably reduced successful phishing attempts</li>
            </ul>
          </div>
          
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-lg text-green-300">IT Security Specialist</h3>
                <p className="text-green-200">SecureNet Inc.</p>
              </div>
              <span className="text-sm text-green-200">Sep 2016 - May 2018</span>
            </div>
            <ul className="list-disc list-outside ml-5 space-y-1 text-green-100">
              <li>Managed firewall configurations and network security monitoring</li>
              <li>Performed regular security assessments and compliance audits</li>
              <li>Assisted in security incident investigations and remediation</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold border-b border-green-800 pb-2 mb-4 text-green-400">Education</h2>
          <div className="mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg text-green-300">University of Technology</h3>
                <p className="text-green-100">Master of Science in Cybersecurity</p>
              </div>
              <span className="text-sm text-green-200">2016 - 2018</span>
            </div>
            <p className="text-sm text-green-200 mt-1">GPA: 3.9/4.0, Thesis on Advanced Threat Detection Techniques</p>
          </div>
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg text-green-300">State University</h3>
                <p className="text-green-100">Bachelor of Science in Computer Science</p>
              </div>
              <span className="text-sm text-green-200">2012 - 2016</span>
            </div>
            <p className="text-sm text-green-200 mt-1">Minor in Network Security</p>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold border-b border-green-800 pb-2 mb-4 text-green-400">Certifications</h2>
          <ul className="space-y-2 text-green-100">
            <li>
              <div className="flex justify-between">
                <span className="font-medium">Certified Information Systems Security Professional (CISSP)</span>
                <span className="text-sm text-green-200">2022</span>
              </div>
            </li>
            <li>
              <div className="flex justify-between">
                <span className="font-medium">Offensive Security Certified Professional (OSCP)</span>
                <span className="text-sm text-green-200">2021</span>
              </div>
            </li>
            <li>
              <div className="flex justify-between">
                <span className="font-medium">Certified Ethical Hacker (CEH)</span>
                <span className="text-sm text-green-200">2019</span>
              </div>
            </li>
            <li>
              <div className="flex justify-between">
                <span className="font-medium">AWS Certified Security Specialty</span>
                <span className="text-sm text-green-200">2020</span>
              </div>
            </li>
            <li>
              <div className="flex justify-between">
                <span className="font-medium">CompTIA Security+</span>
                <span className="text-sm text-green-200">2017</span>
              </div>
            </li>
          </ul>
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-2xl font-bold border-b border-green-800 pb-2 mb-4 text-green-400">Languages</h2>
          <ul className="space-y-2 text-green-100">
            <li className="flex justify-between">
              <span>English</span>
              <span>Native</span>
            </li>
            <li className="flex justify-between">
              <span>Spanish</span>
              <span>Fluent</span>
            </li>
            <li className="flex justify-between">
              <span>German</span>
              <span>Intermediate</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CV;
