import { useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { motion as Motion } from "framer-motion";

export const About = ({ getTheme }) => {
  const SkillBadge = ({ label }) => {
    return (
      <Motion.span
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-mono border transition-colors cursor-default ${
          getTheme
            ? "bg-white/5 text-neutral-200 border-white/10 hover:border-white/25 hover:bg-white/10"
            : "bg-neutral-100 text-neutral-800 border-neutral-200 hover:bg-neutral-200"
        }`}
      >
        {label}
      </Motion.span>
    );
  };

  const SkillCard = ({ title, skills }) => (
    <Motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className={`p-6 rounded-2xl border transition-all duration-300 ${
        getTheme
          ? "bg-white/5 border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-white/5"
          : "bg-white border-neutral-200 shadow-xs hover:border-neutral-300"
      }`}
    >
      <h3
        className={`text-sm font-mono uppercase tracking-wider mb-4 ${
          getTheme ? "text-neutral-400" : "text-neutral-600"
        }`}
      >
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((label) => (
          <SkillBadge key={label} label={label} />
        ))}
      </div>
    </Motion.div>
  );

  useEffect(() => {
    const cards = document.querySelectorAll(".about-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <RevealOnScroll>
      <section
        id="about"
        className={`py-24 px-6 md:px-12 ${
          getTheme
            ? "bg-[#0a0a0a] text-white"
            : "bg-neutral-50 text-neutral-900"
        }`}
      >
        <div className="w-full max-w-5xl mx-auto">
          <div className="mb-10">
            <h2
              className={`text-3xl md:text-5xl font-extrabold tracking-tight mb-3 ${
                getTheme ? "text-white" : "text-neutral-900"
              }`}
            >
              About Me
            </h2>
            <p className={`text-sm md:text-base ${getTheme ? "text-neutral-400" : "text-neutral-600"}`}>
              Background, practical experience, and the tools I work with daily
            </p>
            <div className={`w-16 h-1 mt-4 rounded-full ${getTheme ? "bg-white/30" : "bg-black/30"}`} />
          </div>

          <div
            className={`about-card rounded-2xl p-6 md:p-8 border ${
              getTheme
                ? "bg-white/5 border-white/10"
                : "bg-white border-neutral-200 shadow-xs"
            }`}
          >
            <p
              className={`mb-8 leading-relaxed text-base md:text-lg max-w-3xl ${
                getTheme ? "text-neutral-300" : "text-neutral-700"
              }`}
            >
              I am a developer who loves building practical, interactive web experiences and exploring hardware systems. I work extensively with React, Node.js, and MongoDB to build responsive full-stack applications, and use Python, Java, and microcontrollers like ESP32 to bridge software with real-world IoT sensors. I focus on writing clean, readable code and delivering software that people can actually use.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <SkillCard
                title="Frontend"
                skills={["React.js", "Vite", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"]}
              />
              <SkillCard
                title="Backend"
                skills={["Node.js", "Express.js", "REST APIs", "Socket.io", "Python", "Java"]}
              />
              <SkillCard
                title="Database"
                skills={["MongoDB", "Mongoose", "Firebase", "IndexedDB"]}
              />
              <SkillCard
                title="Hardware & Tools"
                skills={["ESP32", "IoT Sensors", "Capacitor", "Git", "GitHub", "Postman"]}
              />
            </div>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};
