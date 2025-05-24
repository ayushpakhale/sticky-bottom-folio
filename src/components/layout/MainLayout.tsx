
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ayushImage from "@/assets/12.jpg";

const MainLayout = () => {
  const [scrollY, setScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="min-h-screen">
      {/* Top navbar with hide/show animation */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out ${
          navbarVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Navbar />
      </div>
      
      {/* Hero section that scrolls naturally */}
      <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden pt-16">
        {/* Animated background particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-70"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-green-300 rounded-full animate-bounce opacity-50" style={{animationDelay: "0.5s"}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse opacity-60" style={{animationDelay: "1s"}}></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-green-200 rounded-full animate-bounce opacity-40" style={{animationDelay: "1.5s"}}></div>
        </div>
        
        {/* Hero content */}
        <div 
          className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            opacity: Math.max(0, 1 - scrollY / 600)
          }}
        >
          <div className="md:w-1/2 text-left space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold typing">
              Hi, I'm <span className="text-primary animate-text-shimmer">Ayush Pakhale</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: "0.3s"}}>
              Cyber Security Engineer leveraging SOAR to enhance network security and execute ethical hacking with precision.
            </p>
            <div className="flex space-x-4 animate-fade-in" style={{animationDelay: "0.6s"}}>
              <button className="px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-green-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/30">
                View Projects
              </button>
              <button className="px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-black transition-all duration-300 transform hover:scale-105">
                Contact Me
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden animate-float relative">
              <img src={ayushImage} alt="Ayush Pakhale" className="w-full h-full object-cover rounded-full"/>
              <div className="absolute inset-0 rounded-full border-4 border-green-400/30 animate-pulse"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="text-green-400 text-sm mt-2 text-center">Scroll Down</p>
        </div>
      </section>
      
      {/* Main content */}
      <main className="bg-background relative z-10">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;
