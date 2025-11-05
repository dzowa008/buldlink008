import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import avatarImg from "../assets/avatar.jpg";
import logoImg from "../assets/logo.jpg";   

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logoImg}
            alt="BuildLink Logo"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/40 shadow-sm"
          />
          <span className="text-xl sm:text-2xl font-extrabold text-blue-600 tracking-tight hover:text-blue-700 transition">
            BuildLink
          </span>
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex space-x-2 font-medium">
            {[
              { name: "Home", path: "/" },
              { name: "Providers", path: "/providers" },
              { name: "Services", path: "/services" },
              { name: "About Us", path: "/about" },
              { name: "Projects", path: "/projects" },
              { name: "Contact Us", path: "/contact" },
            ].map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.path}
                  className="px-3 py-2 rounded-full bg-white/30 backdrop-blur-sm text-gray-800 hover:bg-blue-600 hover:text-white transition shadow-sm text-sm"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:block bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700 transition text-sm">
            Register
          </button>

          <img
            src={avatarImg}
            alt="User Avatar"
            className="hidden sm:block w-9 h-9 rounded-full border-2 border-white/40 shadow-md object-cover"
          />

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-800 text-2xl"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <ul className="flex flex-col py-4 px-4 space-y-2">
            {[
              { name: "Home", path: "/" },
              { name: "Providers", path: "/providers" },
              { name: "Services", path: "/services" },
              { name: "About Us", path: "/about" },
              { name: "Projects", path: "/projects" },
              { name: "Contact Us", path: "/contact" },
            ].map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg bg-gray-50 text-gray-800 hover:bg-blue-600 hover:text-white transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg shadow hover:bg-blue-700 transition">
                Register
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
