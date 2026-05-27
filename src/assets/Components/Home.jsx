import { useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = ({ getTheme }) => {
  useEffect(() => {
    document.title = "Prasad Portfolio - Home";
  }, []);

  return (
    <RevealOnScroll>
      <section
        id="home"
        className={`min-h-screen flex items-center justify-center relative ${
          getTheme
            ? "bg-gradient-to-t from-white-900  to-black"
            : "bg-gradient-to-t from-black-900  to-white"
        } overflow-hidden`}
      >
        <div
          className={`z-10 px-4 w-full max-w-5xl md:px-10 text-center ${
            !getTheme ? "text-black" : "text-white"
          }`}
        >
          <h1
            className={`text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-xl md:max-w-2xl mx-auto ${
              !getTheme ? "text-black" : "text-white"
            }`}
          >
            Hi, I'm Prasad
          </h1>

          <p
            className={` text-lg md:text-xl mb-12 mx-auto max-w-3xl leading-relaxed ${
              !getTheme ? "text-black/500" : "text-white"
            }`}
          >
            I'm a Web developer — passionate about building engaging,
            user-friendly web experiences with clean, performant code.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#projects"
              className={`border ${
                !getTheme
                  ? "border-black hover:border-black hover:bg-white hover:text-black"
                  : "border-white hover:border-white hover:bg-black hover:text-white"
              }  py-3 px-8 md:px-12 rounded-lg font-semibold shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl`}
            >
              View Projects <span className="text-2xl">&rarr;</span>
            </a>

            <a
              href="https://drive.google.com/file/d/1aJZ4f2APLUj7rBadpxZD1V4g0ogWaagZ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 py-3 px-8 md:px-12 rounded-lg font-semibold shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl ${
                !getTheme
                  ? "bg-black text-white hover:bg-gray-900"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                />
              </svg>
              View Resume
            </a>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};
