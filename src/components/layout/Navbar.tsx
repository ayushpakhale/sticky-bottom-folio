
import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Home", path: "/" },
  { title: "Resume", path: "/resume" },
  { title: "CV", path: "/cv" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="text-xl font-bold">
          My Portfolio
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground"
                )
              }
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          {/* Simple mobile menu */}
          <div className="relative">
            <details className="group [&[open]]:z-50">
              <summary className="list-none cursor-pointer">
                <div className="p-2 rounded hover:bg-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                    <line x1="4" x2="20" y1="12" y2="12"/>
                    <line x1="4" x2="20" y1="6" y2="6"/>
                    <line x1="4" x2="20" y1="18" y2="18"/>
                  </svg>
                </div>
              </summary>
              <div className="absolute right-0 top-full mt-2 w-48 rounded-md border bg-background shadow-lg">
                <div className="p-2 flex flex-col space-y-1">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        cn(
                          "block px-3 py-2 rounded-md text-sm hover:bg-accent",
                          isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                        )
                      }
                    >
                      {item.title}
                    </NavLink>
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
