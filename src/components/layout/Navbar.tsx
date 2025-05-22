
import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { FileDown } from "lucide-react";

const navItems = [
  { title: "Home", path: "/" },
  { title: "Resume", path: "/resume", hasDownload: true },
  { title: "CV", path: "/cv", hasDownload: true },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

// CV and Resume PDF files
const CV_PDF_URL = "/cv.pdf"; // Path to your CV PDF file
const RESUME_PDF_URL = "/resume.pdf"; // Path to your Resume PDF file

const Navbar = () => {
  const handleDownload = (documentType: "resume" | "cv") => {
    const link = document.createElement('a');
    link.href = documentType === "resume" ? RESUME_PDF_URL : CV_PDF_URL;
    link.download = documentType === "resume" ? "resume.pdf" : "cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="w-full border-t dark:border-t-green-900 border-t-green-700 bg-black/95 dark:bg-black/95 backdrop-blur shadow-lg shadow-green-900/20 animate-pulse-glow">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="text-xl font-bold animate-text-shimmer">
          CyberSec Portfolio
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <div key={item.path} className="flex items-center stagger-item animate-fade-in" style={{animationDelay: `${0.1 * index}s`}}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium transition-colors hover:text-green-400 hover-glow",
                    isActive ? "text-green-500" : "text-green-100"
                  )
                }
              >
                {item.title}
              </NavLink>
              
              {item.hasDownload && (
                <button 
                  onClick={() => handleDownload(item.path === "/resume" ? "resume" : "cv")}
                  className="ml-1 p-1 rounded-full hover:bg-green-900/30 text-green-400 animate-pulse-glow"
                  title={`Download ${item.title}`}
                >
                  <FileDown size={16} className="animate-bounce-subtle" />
                </button>
              )}
            </div>
          ))}
        </nav>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          {/* Simple mobile menu */}
          <div className="relative">
            <details className="group [&[open]]:z-50">
              <summary className="list-none cursor-pointer">
                <div className="p-2 rounded hover:bg-green-900/30 text-green-400 animate-pulse-glow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                    <line x1="4" x2="20" y1="12" y2="12"/>
                    <line x1="4" x2="20" y1="6" y2="6"/>
                    <line x1="4" x2="20" y1="18" y2="18"/>
                  </svg>
                </div>
              </summary>
              <div className="absolute right-0 top-full mt-2 w-48 rounded-md border border-green-900 bg-black shadow-lg shadow-green-900/20 animate-scale-in">
                <div className="p-2 flex flex-col space-y-1">
                  {navItems.map((item, index) => (
                    <div key={item.path} className="flex items-center justify-between stagger-item animate-fade-in" style={{animationDelay: `${0.1 * index}s`}}>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          cn(
                            "block px-3 py-2 rounded-md text-sm hover:bg-green-900/30 flex-grow hover-glow",
                            isActive ? "bg-green-900/40 text-green-400" : "text-green-100"
                          )
                        }
                      >
                        {item.title}
                      </NavLink>
                      
                      {item.hasDownload && (
                        <button 
                          onClick={() => handleDownload(item.path === "/resume" ? "resume" : "cv")}
                          className="p-2 rounded-full hover:bg-green-900/30 text-green-400 mr-1 animate-pulse-glow"
                          title={`Download ${item.title}`}
                        >
                          <FileDown size={16} className="animate-bounce-subtle" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
