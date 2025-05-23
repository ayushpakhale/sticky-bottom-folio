
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  const [navbarPosition, setNavbarPosition] = useState("bottom"); // "bottom", "moving", "top"
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      const progress = Math.min(currentScrollY / windowHeight, 1);
      setScrollProgress(progress);
      
      if (currentScrollY < windowHeight * 0.2) {
        // When near the top of the page, navbar stays at bottom
        setNavbarPosition("bottom");
      } else if (currentScrollY < windowHeight) {
        // When scrolling, navbar is moving up
        setNavbarPosition("moving");
      } else {
        // When scrolled further down, navbar pins to top
        setNavbarPosition("top");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate navbar position dynamically during the "moving" phase
  const calculateNavbarTransform = () => {
    if (navbarPosition === "bottom") {
      return "translate3d(0, 0, 0)";
    } else if (navbarPosition === "moving") {
      // Enhanced easing for more fluid movement
      const translateY = -(scrollProgress * 100);
      return `translate3d(0, ${translateY}%, 0)`;
    } else {
      return "translate3d(0, -100%, 0)";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Static hero content for homepage that stays fixed */}
      <div className="fixed inset-0 flex items-center justify-center z-0 bg-gradient-to-br from-black via-green-950/20 to-black">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-left space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold typing">
              Hi, I'm <span className="text-primary animate-text-shimmer">John Doe</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: "0.3s"}}>
              Cybersecurity Engineer specializing in network security and ethical hacking
            </p>
            <div className="flex gap-4 animate-fade-in" style={{animationDelay: "0.6s"}}>
              <div className="px-4 py-2 bg-green-900/30 rounded-lg border border-green-700/50 animate-pulse-glow">
                <span className="text-green-400 text-sm">5+ Years Experience</span>
              </div>
              <div className="px-4 py-2 bg-green-900/30 rounded-lg border border-green-700/50 animate-pulse-glow">
                <span className="text-green-400 text-sm">Security Expert</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {/* Enhanced photo placeholder with professional styling */}
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-green-700/40 to-green-500/20 animate-float flex items-center justify-center border-4 border-green-600/30 shadow-2xl shadow-green-900/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-green-400/10 to-transparent animate-rotate-glow"></div>
              <div className="text-green-400 text-opacity-70 text-lg font-semibold relative z-10">Your Photo Here</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content overlays the static hero content when scrolling with solid background */}
      <div className="relative z-10 mt-screen min-h-screen bg-background border-t border-green-700/30">
        <main className="flex-grow container mx-auto px-4 py-8 bg-background">
          <Outlet />
        </main>
      </div>
      
      {/* Navbar overlays the content with high z-index and solid background */}
      <div 
        className={`fixed w-full transition-all duration-700 ease-in-out z-50 ${
          navbarPosition === "bottom" ? "bottom-0 left-0 right-0 animate-bounce-subtle" : 
          navbarPosition === "moving" ? "bottom-0 left-0 right-0 nav-moving" :
          "top-0 left-0 right-0 animate-fade-in"
        }`}
        style={{
          transform: navbarPosition === "top" ? "none" : calculateNavbarTransform()
        }}
      >
        <Navbar />
      </div>
      
      <Footer />
    </div>
  );
};

export default MainLayout;
