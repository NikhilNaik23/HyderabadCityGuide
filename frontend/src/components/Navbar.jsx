import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../assets/logo.png"; // Adjust the path to your logo file

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 bg-bg-[#bd843a] bg-[linear-gradient(180deg,_rgba(189,_132,_58,_1)_0%,_rgba(0,_0,_0,_0)_100%)]    backdrop-blur-none h-20 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <ul className="flex items-center list-none p-0">
        {/* Logo Section */}
        <li className="mx-2 px-25">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-18 w-auto mt-0" />
          </Link>
        </li>

        {/* Links Section */}
        <div className="flex ml-auto space-x-4 gap-3.5 justify-center items-center">
            <Link
              to="/explore"
              className="text-white no-underline text-lg font-bold hover:text-yellow-500"
            >
              Hotspots 🚋
            </Link>
          <Link
              to="/specialties"
              className="text-white no-underline text-lg font-bold hover:text-yellow-500"
            >
              Specialties 🍽️
            </Link>
          <Link
              to="/maps"
              className="text-white no-underline text-lg font-bold hover:text-yellow-500"
            >
              Map & Routes 🗺️
            </Link>
            <Link
            to={"/authorities"}
            className="text-white no-underline text-lg font-bold hover:text-yellow-500"
          >Administration👨‍💼
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
