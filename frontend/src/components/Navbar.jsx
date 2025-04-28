import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-gradient-to-b from-[#bd843a] to-transparent backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <NavLinks />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (animated slide down) */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        } md:hidden bg-[#bd843a] text-white`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          <NavLinks mobile onLinkClick={() => setMenuOpen(false)} />
        </div>
      </div>
    </nav>
  );
};

// Separate component for links
const NavLinks = ({ mobile = false, onLinkClick }) => (
  <ul
    className={`${
      mobile ? "flex flex-col space-y-4" : "flex space-x-6"
    } items-center`}
  >
    <li>
      <Link
        to="/explore"
        onClick={onLinkClick}
        className="font-semibold hover:text-yellow-300 transition-colors"
      >
        Hotspots 🚋
      </Link>
    </li>
    <li>
      <Link
        to="/specialties"
        onClick={onLinkClick}
        className="font-semibold hover:text-yellow-300 transition-colors"
      >
        Specialties 🍽️
      </Link>
    </li>
    <li>
      <Link
        to="/maps"
        onClick={onLinkClick}
        className="font-semibold hover:text-yellow-300 transition-colors"
      >
        Map & Routes 🗺️
      </Link>
    </li>
    <li>
      <Link
        to="/authorities"
        onClick={onLinkClick}
        className="font-semibold hover:text-yellow-300 transition-colors"
      >
        Administration 👨‍💼
      </Link>
    </li>
  </ul>
);

export default Navbar;
