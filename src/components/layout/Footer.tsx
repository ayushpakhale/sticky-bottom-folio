
import { Github, Linkedin, Twitter, Shield } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t border-green-900 py-6 bg-black">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-green-200 mb-4 md:mb-0 flex items-center">
          <Shield className="h-4 w-4 mr-2 text-green-400" />
          © {year} CyberSec Portfolio. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-green-200 hover:text-green-400 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-green-200 hover:text-green-400 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-green-200 hover:text-green-400 transition-colors">
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
