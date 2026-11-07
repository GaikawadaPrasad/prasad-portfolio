import { useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = ({ getTheme }) => {
  useEffect(() => {
    document.title = "Prasad Gaikawada | Developer Portfolio";
  }, []);

  return (
    <RevealOnScroll>
      <section
        id="home"
        className={`min-h-screen flex items-center justify-center relative pt-24 pb-16 px-6 md:px-12 ${
          getTheme
            ? "bg-[#0a0a0a] text-gray-100"
            : "bg-gray-50 text-gray-900"
        }`}
      >
        <div className="z-10 px-4 w-full max-w-4xl text-center">
          {/* Greeting */}
          <p
            className={`text-sm md:text-base font-semibold tracking-wide uppercase mb-3 ${
              getTheme ? "text-violet-400" : "text-violet-600"
            }`}
          >
            Software & Hardware Developer
          </p>

          {/* Main Name */}
          <h1
            className={`text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight ${
              getTheme ? "text-white" : "text-gray-900"
            }`}
          >
            Hi, I'm Prasad Gaikawada.
          </h1>

          {/* Bio Subtitle - Direct & Human */}
          <p
            className={`text-lg sm:text-xl mb-10 mx-auto max-w-2xl leading-relaxed ${
              getTheme ? "text-gray-300" : "text-gray-600"
            }`}
          >
            I build web apps, billing systems, and hardware projects. Focused on practical MERN stack development, real-time messaging, and IoT monitoring.
          </p>

          {/* Quick Highlight Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-xl mx-auto">
            {["React & Node.js", "MongoDB", "Python & IoT", "Capacitor Mobile"].map((item) => (
              <span
                key={item}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-lg border ${
                  getTheme
                    ? "bg-white/5 border-white/10 text-gray-300"
                    : "bg-white border-gray-200 text-gray-700 shadow-xs"
                }`}
              >
                {item}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#featured"
              className={`w-full sm:w-auto inline-flex justify-center items-center gap-2 py-3 px-7 rounded-xl font-semibold text-sm transition-all duration-200 ${
                getTheme
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
            >
              Explore Projects <span>↓</span>
            </a>

            <a
              href="https://drive.google.com/file/d/1GiIQHGwUThnbyUcdNp-A2lFJq9RnSskq/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full sm:w-auto inline-flex justify-center items-center gap-2 py-3 px-7 rounded-xl font-semibold text-sm border transition-all duration-200 ${
                getTheme
                  ? "border-white/20 bg-white/5 text-white hover:bg-white/10"
                  : "border-gray-300 bg-white text-gray-800 hover:bg-gray-100"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
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
