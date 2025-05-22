
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
      {/* Content goes first, navbar overlays on top of it */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      
      {/* Navbar overlays the content with high z-index */}
      <div 
        className={`fixed w-full transition-all duration-500 ease-in-out z-50 ${
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
