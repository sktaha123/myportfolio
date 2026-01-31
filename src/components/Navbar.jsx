import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full bg-gradient-to-r from-[#d1dce0]  to-[#d1dce0] absolute top-0 left-0 z-50">
      <div className="max-w-[90rem] relative xl:max-w-[100rem] mx-auto flex justify-between md:justify-center items-center h-20 px-6">
         <div className="absolute bottom-0 left-0 w-full h-[1px]
                  bg-gradient-to-r
                  from-transparent
                  via-[#99a2a5]
                  to-transparent"></div>
        {/* DESKTOP NAVIGATION - Hidden on Mobile/Tablet */}
        <nav className="hidden md:flex relative  items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-md font-semibold cursor-pointer font-rale transition-all duration-200 ${
                  isActive ? "text-black  " : "text-gray-500 hover:text-black"
                }`
              }
            >
              {link.name}
              
            </NavLink>
          ))}
          
        </nav>

        {/* MOBILE TOGGLE - Hidden on Desktop */}
        <div className="md:hidden flex w-full justify-end">
          <button 
            onClick={toggleMenu}
            className="text-black p-2 transition-transform active:scale-90"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div onClick={() => setIsMenuOpen(!isMenuOpen)} className={`
        fixed inset-0 bg-white/95 backdrop-blur-md z-[60] flex flex-col items-center justify-center transition-all duration-300 ease-in-out md:hidden
        ${isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"}
      `}>
        {/* Close Button inside Overlay */}
        <button 
          onClick={toggleMenu} 
          className="absolute top-6 right-6 text-black"
        >
          <X size={32} />
        </button>

        <nav className="flex flex-col items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `text-2xl font-bold font-rale transition-colors ${
                  isActive ? "text-black" : "text-gray-400"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;