import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export const MobileMenu = ({ mobileView, setMobileView, darkMode, setDarkMode }) => {
  const changeMode = () => setDarkMode((prev) => !prev);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 flex flex-col items-center justify-center
                  transition-all duration-300 ease-in-out backdrop-blur-xl
                  ${
                    darkMode
                      ? "bg-black/95 text-white"
                      : "bg-white/95 text-neutral-900"
                  }
                  ${
                    mobileView
                      ? "h-screen opacity-100 pointer-events-auto"
                      : "h-0 opacity-0 pointer-events-none"
                  }`}
    >
      <button
        onClick={() => setMobileView(false)}
        className="absolute top-6 right-6 text-3xl focus:outline-none cursor-pointer p-2 hover:opacity-75"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <div className="flex flex-col items-center space-y-6 text-center">
        <a
          href="#home"
          onClick={() => setMobileView(false)}
          className="text-2xl font-semibold hover:opacity-70 transition-opacity"
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => setMobileView(false)}
          className="text-2xl font-semibold hover:opacity-70 transition-opacity"
        >
          About
        </a>
        <a
          href="#featured"
          onClick={() => setMobileView(false)}
          className="text-2xl font-semibold hover:opacity-70 transition-opacity"
        >
          Featured
        </a>
        <a
          href="#projects"
          onClick={() => setMobileView(false)}
          className="text-2xl font-semibold hover:opacity-70 transition-opacity"
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={() => setMobileView(false)}
          className="text-2xl font-semibold hover:opacity-70 transition-opacity"
        >
          Contact
        </a>

        <button
          onClick={() => {
            changeMode();
            setMobileView(false);
          }}
          className={`mt-6 px-6 py-2.5 rounded-full font-medium flex items-center gap-3 border transition-all cursor-pointer ${
            darkMode
              ? "bg-white/10 border-white/20 text-white hover:bg-white/20"
              : "bg-neutral-100 border-neutral-300 text-neutral-800 hover:bg-neutral-200"
          }`}
        >
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
        </button>
      </div>
    </div>
  );
};
