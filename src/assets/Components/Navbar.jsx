import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export const Navbar = ({ mobileView, setMobileView, darkMode, setDarkMode }) => {
  const changeMode = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = mobileView ? "hidden" : "";
  }, [mobileView]);

  useEffect(() => {
    document.title = "Prasad Gaikawada | Portfolio";
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-40 text-sm font-medium transition-colors duration-200 border-b backdrop-blur-md ${
        darkMode
          ? "bg-[#0a0a0a]/80 border-white/10 text-white"
          : "bg-white/80 border-gray-200 text-gray-900 shadow-2xs"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className="text-base font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            Prasad Gaikawada
          </a>

          <button
            type="button"
            className="w-10 h-10 flex items-center justify-center rounded-lg md:hidden text-2xl focus:outline-none cursor-pointer"
            onClick={() => setMobileView((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            &#9776;
          </button>

          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#home"
              className={`transition-colors py-1 px-2.5 rounded-md ${
                darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-black"
              }`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`transition-colors py-1 px-2.5 rounded-md ${
                darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-black"
              }`}
            >
              About
            </a>
            <a
              href="#featured"
              className={`transition-colors py-1 px-2.5 rounded-md ${
                darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-black"
              }`}
            >
              Featured
            </a>
            <a
              href="#projects"
              className={`transition-colors py-1 px-2.5 rounded-md ${
                darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-black"
              }`}
            >
              All Projects
            </a>
            <a
              href="#contact"
              className={`transition-colors py-1 px-2.5 rounded-md ${
                darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-black"
              }`}
            >
              Contact
            </a>

            <button
              type="button"
              onClick={changeMode}
              className={`p-2 rounded-lg border transition-all duration-200 cursor-pointer ${
                darkMode
                  ? "border-white/10 bg-white/5 text-yellow-400 hover:bg-white/10"
                  : "border-gray-200 bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              aria-label="Toggle light and dark mode"
              title="Toggle theme"
            >
              <FontAwesomeIcon
                icon={darkMode ? faSun : faMoon}
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
