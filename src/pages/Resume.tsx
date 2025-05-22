
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">My Resume</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Experienced web developer with a passion for creating beautiful, functional websites and applications.
        </p>
      </div>

      {/* Experience Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Work Experience</h2>
        <div className="space-y-6">
          {/* Job 1 */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Senior Frontend Developer</CardTitle>
                  <p className="text-muted-foreground">Tech Solutions Inc.</p>
                </div>
                <span className="text-sm text-muted-foreground">2021 - Present</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-outside ml-5 space-y-1">
                <li>Led development of the company's flagship web application</li>
                <li>Implemented modern frontend architecture using React and TypeScript</li>
                <li>Collaborated with designers to create pixel-perfect UI components</li>
                <li>Mentored junior developers and conducted code reviews</li>
              </ul>
            </CardContent>
          </Card>

          {/* Job 2 */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Web Developer</CardTitle>
                  <p className="text-muted-foreground">Digital Agency XYZ</p>
                </div>
                <span className="text-sm text-muted-foreground">2018 - 2021</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-outside ml-5 space-y-1">
                <li>Developed responsive websites for clients across various industries</li>
                <li>Optimized website performance and improved SEO metrics</li>
                <li>Created and maintained documentation for development processes</li>
                <li>Participated in client meetings to gather requirements</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Education</h2>
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Bachelor of Science in Computer Science</CardTitle>
                <p className="text-muted-foreground">University of Technology</p>
              </div>
              <span className="text-sm text-muted-foreground">2014 - 2018</span>
            </div>
          </CardHeader>
          <CardContent>
            <p>Graduated with honors. Specialized in web technologies and software engineering.</p>
          </CardContent>
        </Card>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Card className="p-4">
            <h3 className="font-semibold mb-2">Frontend</h3>
            <p className="text-sm text-muted-foreground">React, Vue.js, JavaScript/TypeScript, HTML5, CSS3, Tailwind CSS</p>
          </Card>
          <Card className="p-4">
            <h3 className="font-semibold mb-2">Backend</h3>
            <p className="text-sm text-muted-foreground">Node.js, Express, REST APIs, GraphQL, MongoDB</p>
          </Card>
          <Card className="p-4">
            <h3 className="font-semibold mb-2">Tools</h3>
            <p className="text-sm text-muted-foreground">Git, Webpack, Docker, CI/CD, Jest, Figma</p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Resume;
