import { useState } from "react";
import { SiCodersrank } from "react-icons/si";
import { FaTimes, FaBars } from "react-icons/fa";
import { NavLink } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const base = "transition hover:text-blue-400";
  const active = "text-blue-400 font-semibold";

  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
  ];
  return (
    <nav className="bg-gray-700 border-b shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink
          to={"/"}
          className="flex justify-center items-center gap-2 text-lg font-bold text-blue-300"
        >
          <SiCodersrank></SiCodersrank>
          <span>Career Code</span>
        </NavLink>
        {/* desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="space-x-4 text-sm-text-gray-300">
            {links.map((link) => (
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? active : base)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-400 text-4xl cursor-pointer"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {/* mobile nav */}
      {menuOpen && (
        <div className="bg-gray-800 border-t border-gray-700 px-6 py-4 space-x-4 space-y-2 text-center">
          {links.map((link) => (
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? active : base)}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
