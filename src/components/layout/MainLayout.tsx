
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
      <div className="fixed inset-0 flex items-center justify-center z-0 bg-black">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-left space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold typing">
              Hi, I'm <span className="text-primary animate-text-shimmer">John Doe</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: "0.3s"}}>
              Cybersecurity Engineer specializing in network security and ethical hacking
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {/* Placeholder for photo - you can add your image here */}
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-green-700/30 to-green-500/10 animate-float flex items-center justify-center">
              <div className="text-green-500 text-opacity-50">Your Photo Here</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content overlays the static hero content when scrolling */}
      <div className="relative z-10 pt-screen min-h-screen">
        <main className="flex-grow container mx-auto px-4 py-8">
          <Outlet />
        </main>
      </div>
      
      {/* Navbar overlays the content with high z-index */}
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
