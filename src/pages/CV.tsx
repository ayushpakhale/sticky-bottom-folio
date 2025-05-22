
import { Button } from "@/components/ui/button";

const CV = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Curriculum Vitae</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
          My detailed professional background and qualifications.
        </p>
        <Button>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download CV
        </Button>
      </div>

      <div className="bg-white dark:bg-slate-950 border rounded-lg p-6 md:p-8 shadow-sm">
        {/* Personal Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold border-b pb-2 mb-4">Personal Information</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Name</h3>
              <p>John Doe</p>
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p>john.doe@example.com</p>
            </div>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p>(123) 456-7890</p>
            </div>
            <div>
              <h3 className="font-semibold">Location</h3>
              <p>New York, NY</p>
            </div>
          </div>
        </section>

        {/* Professional Summary */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold border-b pb-2 mb-4">Professional Summary</h2>
          <p className="mb-2">
            Web developer with over 5 years of experience specializing in frontend development. 
            Proficient in JavaScript, TypeScript, React, and modern CSS frameworks.
          </p>
          <p>
            Passionate about creating intuitive user interfaces and accessible web applications.
            Experienced in working with cross-functional teams and delivering projects on time.
          </p>
        </section>

        {/* Work Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold border-b pb-2 mb-4">Work Experience</h2>
          
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-lg">Senior Frontend Developer</h3>
                <p className="text-muted-foreground">Tech Solutions Inc.</p>
              </div>
              <span className="text-sm text-muted-foreground">Jan 2021 - Present</span>
            </div>
            <ul className="list-disc list-outside ml-5 space-y-1">
              <li>Led the development of the company's flagship web application using React and TypeScript</li>
              <li>Optimized application performance, reducing load time by 40%</li>
              <li>Implemented CI/CD pipelines and automated testing strategies</li>
              <li>Mentored junior developers and conducted technical interviews</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-lg">Web Developer</h3>
                <p className="text-muted-foreground">Digital Agency XYZ</p>
              </div>
              <span className="text-sm text-muted-foreground">Jun 2018 - Dec 2020</span>
            </div>
            <ul className="list-disc list-outside ml-5 space-y-1">
              <li>Developed responsive websites for clients across various industries</li>
              <li>Collaborated with designers to implement pixel-perfect UI components</li>
              <li>Created and maintained technical documentation</li>
              <li>Conducted cross-browser and device testing</li>
            </ul>
          </div>
          
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-lg">Junior Web Developer</h3>
                <p className="text-muted-foreground">StartUp Co.</p>
              </div>
              <span className="text-sm text-muted-foreground">Sep 2016 - May 2018</span>
            </div>
            <ul className="list-disc list-outside ml-5 space-y-1">
              <li>Built and maintained company website and e-commerce platform</li>
              <li>Implemented tracking and analytics solutions</li>
              <li>Assisted in UX research and user testing</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold border-b pb-2 mb-4">Education</h2>
          <div className="mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg">University of Technology</h3>
                <p>Bachelor of Science in Computer Science</p>
              </div>
              <span className="text-sm text-muted-foreground">2014 - 2018</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">GPA: 3.8/4.0, Dean's List all semesters</p>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold border-b pb-2 mb-4">Certifications</h2>
          <ul className="space-y-2">
            <li>
              <div className="flex justify-between">
                <span className="font-medium">AWS Certified Developer</span>
                <span className="text-sm text-muted-foreground">2022</span>
              </div>
            </li>
            <li>
              <div className="flex justify-between">
                <span className="font-medium">React Advanced Developer</span>
                <span className="text-sm text-muted-foreground">2021</span>
              </div>
            </li>
            <li>
              <div className="flex justify-between">
                <span className="font-medium">Google UX Design Professional Certificate</span>
                <span className="text-sm text-muted-foreground">2020</span>
              </div>
            </li>
          </ul>
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-2xl font-bold border-b pb-2 mb-4">Languages</h2>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>English</span>
              <span>Native</span>
            </li>
            <li className="flex justify-between">
              <span>Spanish</span>
              <span>Fluent</span>
            </li>
            <li className="flex justify-between">
              <span>French</span>
              <span>Intermediate</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CV;
