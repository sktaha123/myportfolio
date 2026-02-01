import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Experience", path: "/experience" },
];

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled((prev) => {
        if (prev !== isScrolled) return isScrolled;
        return prev;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-100 transition-all duration-500  ${scrolled
          ? "bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl   py-4"
          : "bg-transparent  py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand */}
          <NavLink to="/" className="z-110">
            <span className="font-heading font-extrabold text-2xl tracking-tight text-primary-text uppercase">
              Taha
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-semibold transition-colors ${isActive ? "text-primary-text" : "text-secondary-text hover:text-primary-text"
                    }`}
                >
                  {item.name}
                </NavLink>
              );
            })}

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors text-primary-text"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <NavLink
              to="/contact"
              className="px-4 py-2 bg-black dark:bg-zinc-100 text-white dark:text-black text-sm font-bold rounded-lg hover:opacity-80 transition-colors"
            >
              Let's Talk
            </NavLink>
          </nav>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden z-110">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl text-primary-text hover:bg-primary-border/10 transition-colors"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;