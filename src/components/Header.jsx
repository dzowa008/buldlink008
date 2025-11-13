import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import avatarImg from "../assets/avatar.jpg";
import logoImg from "../assets/logo.jpg";   

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-lg shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="BuildLink Logo"
            className="w-10 h-10 rounded-full border-2 border-white shadow-md"
          />
          <span className="text-2xl font-bold text-white tracking-tight">
            Buildlinks
          </span>
        </Link>

        <nav className="hidden lg:block flex-1 mx-8">
          <ul className="flex items-center justify-center space-x-8 font-medium">
            {[
              { name: "Home", path: "/" },
              { name: "Service", path: "/services" },
              { name: "About Us", path: "/about" },
              { name: "Projects", path: "/projects" },
              { name: "Contact Us", path: "/contact" },
            ].map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.path}
                  className="text-white hover:text-cyan-400 transition-colors text-base font-normal"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block bg-cyan-400 hover:bg-cyan-500 text-gray-900 px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all text-base font-semibold">
            Register
          </button>

          <img
            src={avatarImg}
            alt="User Avatar"
            className="hidden sm:block w-11 h-11 rounded-full border-2 border-white shadow-lg object-cover"
          />

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white text-2xl"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="lg:hidden bg-gray-800/95 backdrop-blur-md border-t border-gray-700">
          <ul className="flex flex-col py-4 px-4 space-y-2">
            {[
              { name: "Home", path: "/" },
              { name: "Service", path: "/services" },
              { name: "About Us", path: "/about" },
              { name: "Projects", path: "/projects" },
              { name: "Contact Us", path: "/contact" },
            ].map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-white hover:bg-cyan-400 hover:text-gray-900 transition-all"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <button className="w-full bg-cyan-400 hover:bg-cyan-500 text-gray-900 px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all font-semibold">
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
