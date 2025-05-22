
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  const [navbarPosition, setNavbarPosition] = useState("bottom"); // "bottom", "moving", "top"
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (scrollPosition < windowHeight * 0.3) {
        // When near the top of the page, navbar stays at bottom
        setNavbarPosition("bottom");
      } else if (scrollPosition < windowHeight) {
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

  return (
    <div className="min-h-screen flex flex-col">
      <div className={`transition-all duration-500 ${
        navbarPosition === "bottom" ? "fixed bottom-0 left-0 right-0 z-50" : 
        navbarPosition === "moving" ? `fixed top-[${Math.min(window.scrollY / 2, window.innerHeight * 0.7)}px] left-0 right-0 z-50` :
        "sticky top-0 z-50"
      }`}>
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
