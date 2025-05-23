
import WorkExperience from "@/components/sections/WorkExperience";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import PublicationsSection from "@/components/sections/PublicationsSection";

const Home = () => {
  return (
    <div className="space-y-20">
      {/* Empty space for the hero section overlay */}
      <section className="h-screen"></section>
      
      {/* Work Experience Timeline */}
      <WorkExperience />

      {/* Featured Projects */}
      <ProjectsSection />

      {/* Skills Section with Progress Bars */}
      <SkillsSection />

      {/* Publications Section */}
      <PublicationsSection />
    </div>
  );
};

export default Home;
