import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Experience", path: "/experience" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 border-b ${scrolled || mobileMenuOpen
          ? "bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 py-4"
          : "bg-transparent border-transparent py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Brand */}
          <NavLink to="/" className="z-110">
            <span className="font-heading font-extrabold text-2xl tracking-tight text-primary-text">
              TAHA<span className="opacity-30">.</span>
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
                  className={`text-sm font-medium transition-colors ${isActive ? "text-primary-text" : "text-secondary-text hover:text-primary-text"
                    }`}
                >
                  {item.name}
                </NavLink>
              );
            })}

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors text-primary-text"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <NavLink
              to="/contact"
              className="px-5 py-2.5 bg-black dark:bg-zinc-100 text-white dark:text-black text-sm font-semibold rounded-lg hover:opacity-80 transition-colors"
            >
              Let's Talk
            </NavLink>
          </nav>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden z-110">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full text-primary-text"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 -mr-2 text-primary-text"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-white dark:bg-zinc-950/95 backdrop-blur-xl md:hidden flex flex-col"
          >
            {/* Close Button Inside Overlay */}
            <div className="absolute top-8 right-6">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-primary-text"
              >
                <X size={32} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-8">
              <nav className="flex flex-col gap-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.1 }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `text-4xl font-heading font-extrabold transition-all ${isActive ? "text-primary-text" : "text-secondary-text opacity-50 hover:opacity-100"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1, duration: 0.5 }}
                >
                  <NavLink
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-4xl font-heading font-extrabold transition-all ${isActive ? "text-primary-text" : "text-secondary-text opacity-50 hover:opacity-100"
                      }`
                    }
                  >
                    Contact Me
                  </NavLink>
                </motion.div>
              </nav>
            </div>

            <div className="p-8 text-center border-t border-gray-100 dark:border-zinc-900">
              <p className="text-[10px] font-mono text-secondary-text opacity-40 uppercase tracking-widest">©2026 TAHA SHAIKH</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;