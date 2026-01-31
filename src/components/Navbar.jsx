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
    <div className="w-full bg-transparent h-15 absolute  ">
      <div className="max-w-[90rem] xl:max-w-[100rem] bg-transparent flex justify-center items-center h-17  mx-auto">
        <nav className="flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `text-md font-semibold  cursor-pointer font-rale transition ${isActive ? "text-black" : "text-gray-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>



      </div>
    </div>
  );
};

export default Navbar;

{/*  */ }