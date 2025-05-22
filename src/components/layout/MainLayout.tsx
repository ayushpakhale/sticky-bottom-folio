
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  const [navbarPosition, setNavbarPosition] = useState("bottom"); // "bottom", "moving", "top"
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      const windowHeight = window.innerHeight;
      
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
    const windowHeight = window.innerHeight;
    if (navbarPosition === "bottom") {
      return "translate3d(0, 0, 0)";
    } else if (navbarPosition === "moving") {
      // Calculate position - starts at bottom, moves to top
      const progress = Math.min(scrollY / windowHeight, 1);
      const translateY = -progress * 100;
      return `translate3d(0, ${translateY}%, 0)`;
    } else {
      return "translate3d(0, -100%, 0)";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div 
        className={`transition-transform duration-300 z-50 ${
          navbarPosition === "bottom" ? "fixed bottom-0 left-0 right-0" : 
          navbarPosition === "moving" ? "fixed bottom-0 left-0 right-0" :
          "fixed top-0 left-0 right-0"
        }`}
        style={{
          transform: navbarPosition === "top" ? "none" : calculateNavbarTransform()
        }}
      >
        <Navbar />
      </div>
      
      <main className={`flex-grow container mx-auto px-4 py-8 ${navbarPosition === "bottom" ? "pt-8 pb-24" : "pt-24 pb-8"}`}>
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;
