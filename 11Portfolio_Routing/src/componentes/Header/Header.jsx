import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import myImage from "../../assets/logo2.png";
import cv from "../../assets/SurajResume.pdf";
import { ThemeProvider } from "../../Context/Context";
import ThemeBtn from "../ThemeBtn/ThemeBtn";

export default function Header() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  // Function to handle menu toggle
  const toggleMobileMenu = () => {
    document.getElementById("mobile-menu").classList.toggle("hidden");
  };

  // Function to handle navigation link click
  const handleNavLinkClick = () => {
    // Close the mobile menu only if it's currently visible
    const mobileMenu = document.getElementById("mobile-menu");
    if (!mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
    }
  };

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <header className="shadow sticky z-50 top-0">
        <nav className="border-[#EFECEC] shadow-md px-4 lg:px-6 py-1 md:py-2.5 bg-white dark:bg-[#171717]">
          <div className="flex flex-wrap justify-between items-center mx-auto xl:max-w-screen-xl max-w-screen-lg">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={myImage} className="h-16" alt="Logo" />
            </Link>

            {/* Menu Button */}
            <button
              className="block lg:hidden focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-6 w-6 fill-current dark:fill-white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"
                />
              </svg>
            </button>

            {/* Mobile Menu */}
            <div
              className="flex flex-col w-full lg:w-auto overflow-hidden hidden lg:flex" // Hide mobile menu by default, show desktop menu
              id="mobile-menu"
            >
              <ul className="flex flex-col lg:flex-row w-full lg:w-auto lg:ml-auto mt-4 lg:mt-0">
                <li>
                  <NavLink
                    to="/"
                    onClick={handleNavLinkClick} // Close menu on click
                    className={({ isActive }) =>
                      `block py-2 px-4 ${isActive ? "text-orange-700 dark:hover:text-[#DA0037]" : "text-[#0C2D57] dark:text-[#EDEDED]"} hover:text-orange-700 dark:hover:text-[#DA0037]`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    onClick={handleNavLinkClick} // Close menu on click
                    className={({ isActive }) =>
                      `block py-2 px-4 ${isActive ? "text-orange-700 dark:hover:text-[#DA0037]" : "text-[#0C2D57] dark:text-[#EDEDED]"} hover:text-orange-700 dark:hover:text-[#DA0037]`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/project"
                    onClick={handleNavLinkClick} // Close menu on click
                    className={({ isActive }) =>
                      `block py-2 px-4 ${isActive ? "text-orange-700 dark:hover:text-[#DA 0037]" : "text-[#0C2D57] dark:text-[#EDEDED]"} hover:text-orange-700 dark:hover:text-[#DA0037]`
                    }
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    onClick={handleNavLinkClick} // Close menu on click
                    className={({ isActive }) =>
                      `block py-2 px-4 ${isActive ? "text-orange-700 dark:hover:text-[#DA0037]" : "text-[#0C2D57] dark:text-[#EDEDED]"} hover:text-orange-700 dark:hover:text-[#DA0037]`
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/github"
                    onClick={handleNavLinkClick} // Close menu on click
                    className={({ isActive }) =>
                      `block py-2 px-4 ${isActive ? "text-orange-700 dark:hover:text-[#DA0037]" : "text-[#0C2D57] dark:text-[#EDEDED]"} hover:text-orange-700 dark:hover:text-[#DA0037]`
                    }
                  >
                    Github
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Download CV Button and Theme Button */}
            <div className="flex items-center order-2">
              <a
                href={cv}
                download={cv}
                className="text-white bg-orange-700 dark:bg-[#DA0037] hover:opacity-90 hover:scale-105 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-md md:px-4 p-2 text-sm text-center mt-2 lg:py-2.5 mr-2 focus:outline-none md:scale-90 sm:scale-75 lg:scale-95"
              >
                Download CV
              </a>

              <div className="flex ml-3 h-10 rounded mb-2">
                <ThemeBtn />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </ThemeProvider>
  );
}