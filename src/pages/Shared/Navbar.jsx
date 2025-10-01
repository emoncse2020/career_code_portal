import { useState, useContext } from "react";
import { SiCodersrank } from "react-icons/si";
import { FaTimes, FaBars } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const base = "transition hover:text-blue-400";
  const active = "text-blue-400 font-semibold";

  // Dynamic links
  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    ...(user
      ? [
          { name: "My Applications", path: "/myApplications" },
          { name: user?.name || "Profile", path: "/profile" },
          { name: "Logout", path: "/logout" },
        ]
      : [
          { name: "Login", path: "/login" },
          { name: "Register", path: "/register" },
        ]),
  ];

  const handleLogout = () => {
    signOutUser();
    navigate("/login"); // redirect to login
    setMenuOpen(false);
  };

  return (
    <nav className="bg-gray-700 border-b shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex justify-center items-center gap-2 text-lg font-bold text-blue-300"
        >
          <SiCodersrank />
          <span>Career Code</span>
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="space-x-4 text-sm text-gray-300">
            {links.map((link, idx) =>
              link.name === "Logout" ? (
                <button
                  key={idx}
                  onClick={handleLogout}
                  className={`${base} bg-red-500 px-3 py-1 rounded`}
                >
                  {link.name}
                </button>
              ) : (
                <NavLink
                  key={idx}
                  to={link.path}
                  className={({ isActive }) => (isActive ? active : base)}
                >
                  {link.path === "/profile" ? link.name.slice(0, 3) : link.name}
                </NavLink>
              )
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-400 text-4xl cursor-pointer"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="bg-gray-800 border-t border-gray-700 px-6 py-4 space-y-2 text-center">
          {links.map((link, idx) =>
            link.name === "Logout" ? (
              <button
                key={idx}
                onClick={handleLogout}
                className={`${base} bg-red-500 px-3 py-1 rounded`}
              >
                {link.name}
              </button>
            ) : (
              <NavLink
                key={idx}
                to={link.path}
                className={({ isActive }) => (isActive ? active : base)}
                onClick={() => setMenuOpen(false)}
              >
                {link.path === "/profile" ? link.name.slice(0, 3) : link.name}
              </NavLink>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
