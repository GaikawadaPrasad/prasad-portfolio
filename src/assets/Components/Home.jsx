import { useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = ({ getTheme }) => {
  useEffect(() => {
    document.title = "Prasad | Developer Portfolio";
  }, []);

  return (
    <RevealOnScroll>
      <section
        id="home"
        className={`min-h-screen flex items-center justify-center relative pt-24 pb-16 px-6 md:px-12 ${
          getTheme
            ? "bg-[#0a0a0a] text-neutral-100"
            : "bg-white text-neutral-900"
        }`}
      >
        <div className="z-10 px-4 w-full max-w-4xl text-center">
          <p
            className={`font-mono text-xs sm:text-sm uppercase tracking-widest mb-4 ${
              getTheme ? "text-neutral-400" : "text-neutral-600"
            }`}
          >
            Full-Stack & Hardware Developer
          </p>

          <h1
            className={`text-5xl sm:text-7xl font-extrabold mb-6 tracking-tight ${
              getTheme ? "text-white" : "text-neutral-900"
            }`}
          >
            Hi, I'm Prasad
          </h1>

          <p
            className={`text-lg sm:text-xl mb-10 mx-auto max-w-2xl leading-relaxed ${
              getTheme ? "text-neutral-300" : "text-neutral-600"
            }`}
          >
            I'm a Web Developer passionate about building fast, engaging web apps, practical full-stack systems, and IoT projects with clean, reliable code.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#featured"
              className={`w-full sm:w-auto inline-flex justify-center items-center gap-2 py-3.5 px-8 rounded-xl font-semibold text-sm transition-all duration-200 ${
                getTheme
                  ? "bg-white text-black hover:bg-neutral-200"
                  : "bg-black text-white hover:bg-neutral-800"
              }`}
            >
              View Projects &rarr;
            </a>

            <a
              href="https://drive.google.com/file/d/1GiIQHGwUThnbyUcdNp-A2lFJq9RnSskq/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full sm:w-auto inline-flex justify-center items-center gap-2 py-3.5 px-8 rounded-xl font-semibold text-sm border transition-all duration-200 ${
                getTheme
                  ? "border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30"
                  : "border-neutral-300 bg-white text-neutral-800 hover:bg-neutral-100"
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
