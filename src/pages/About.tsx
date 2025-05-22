
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Get to know me better - my story, values, and what drives me as a developer.
        </p>
      </div>

      {/* Profile Section */}
      <section className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/3">
          <div className="aspect-square bg-muted rounded-full overflow-hidden flex items-center justify-center">
            <span className="text-muted-foreground">Profile Photo</span>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-bold mb-4">John Doe</h2>
          <p className="text-muted-foreground mb-4">Frontend Developer & Designer</p>
          <p className="mb-4">
            Hello! I'm John, a passionate web developer with a keen eye for design and a love for creating beautiful, functional websites. I've been in the industry for over 5 years, working on various projects from small business websites to complex web applications.
          </p>
          <p>
            What excites me most about web development is the perfect blend of logical problem-solving and creative expression. I enjoy the challenge of writing clean, efficient code while also creating intuitive and visually appealing user experiences.
          </p>
        </div>
      </section>

      {/* Journey Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">My Journey</h2>
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">How I Got Started</h3>
              <p>
                My journey in web development began during my college years when I took an introductory course on HTML and CSS. I was immediately captivated by the ability to create something visual and interactive with just a few lines of code. What started as a hobby quickly became a passion, and I found myself spending countless hours learning new technologies and building small projects.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">Professional Growth</h3>
              <p>
                After graduating with a degree in Computer Science, I joined a small startup as a junior developer, where I gained hands-on experience working on real-world projects. Over the years, I've worked with various companies, from agencies to tech firms, continuously expanding my skill set and taking on more challenging roles. Each project has taught me valuable lessons and helped me grow as a developer.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">Philosophy & Approach</h3>
              <p>
                I believe in writing code that is not only functional but also maintainable and scalable. I follow best practices and industry standards, always keeping up with the latest technologies while being mindful of browser compatibility and performance. I value collaboration and communication, recognizing that the best results come from working together with designers, other developers, and stakeholders.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Interests Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Beyond Coding</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="h-full">
            <CardContent className="pt-6 h-full">
              <h3 className="font-bold text-lg mb-2">Hobbies & Interests</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Photography and visual arts</li>
                <li>Hiking and outdoor adventures</li>
                <li>Reading books on design and technology</li>
                <li>Playing the guitar</li>
                <li>Cooking and exploring new cuisines</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="h-full">
            <CardContent className="pt-6 h-full">
              <h3 className="font-bold text-lg mb-2">Continuous Learning</h3>
              <p>
                I'm a lifelong learner who believes in constantly improving my skills. Currently, I'm exploring advanced animations with GSAP, diving deeper into accessibility practices, and learning about 3D on the web with Three.js. I also enjoy attending web development conferences and participating in online communities to stay connected with the ever-evolving tech world.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">My Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card className="text-center p-6">
            <h3 className="font-bold text-lg mb-2">Quality</h3>
            <p className="text-sm text-muted-foreground">
              I believe in delivering high-quality work that I can be proud of. No cutting corners.
            </p>
          </Card>
          <Card className="text-center p-6">
            <h3 className="font-bold text-lg mb-2">Creativity</h3>
            <p className="text-sm text-muted-foreground">
              Finding innovative solutions to problems and thinking outside the box.
            </p>
          </Card>
          <Card className="text-center p-6">
            <h3 className="font-bold text-lg mb-2">User-Centric</h3>
            <p className="text-sm text-muted-foreground">
              Always designing and developing with the end user in mind.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
