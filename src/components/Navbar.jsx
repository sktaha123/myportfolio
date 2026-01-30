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

  return (
    <>
      {/* Navbar */}
      <header className="absolute top-0 left-0 w-full h-20 bg-transparent text-white z-50">
        <div className="max-w-[90rem] mx-auto h-full px-6 flex items-center justify-between">
          
          {/* Logo / Name */}
          <div className="text-2xl  font-rale font-bold text-black px-4 py-2  rounded-full ">
            Portfolio
          </div>
          

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center pr-4 gap-0 shadow-xl bg-[#696868] rounded-full"
          >
        <span className="text-gray-200 text-sm px-4 py-2 bg-[#1F1F1F] rounded-full mr-2 font-rale font-semibold ">MENU</span>
            {isMenuOpen ? <X size={17} color="white" /> : <Menu size={17} color="white" />}
          </button>
        </div>
      </header>

      {/* Full Screen Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-40 flex items-center justify-center">
          <nav className="flex flex-col items-center gap-8">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-3xl font-medium transition ${
                    isActive ? "text-blue-400" : "text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;