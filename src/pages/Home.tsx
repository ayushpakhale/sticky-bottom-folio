
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="py-16 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">John Doe</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Web Developer & Designer creating beautiful digital experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Contact Me</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/about">About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="overflow-hidden">
                <div className="h-48 bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground">Project Image {item}</span>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project {item}</h3>
                  <p className="text-muted-foreground mb-4">
                    A brief description of this amazing project and the technologies used.
                  </p>
                  <Button variant="outline" size="sm">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">View All Projects</Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["React", "TypeScript", "Node.js", "Tailwind CSS", "UI/UX Design", "Next.js", "GraphQL", "Figma"].map((skill) => (
              <Card key={skill} className="text-center p-4">
                <p className="font-medium">{skill}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
