import { useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { techColor } from "../../utils/techColors";

export const About = ({ getTheme }) => {
  const SkillBadge = ({ label }) => {
    const color = techColor(label);
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border ${
          getTheme
            ? "bg-white/5 text-gray-200 border-white/10"
            : "bg-gray-100 text-gray-800 border-gray-200"
        }`}
      >
        <span
          className="w-2 h-2 rounded-full shrink-0"
          style={{ backgroundColor: color }}
        />
        {label}
      </span>
    );
  };

  const SkillCard = ({ title, skills }) => (
    <div
      className={`p-5 rounded-xl border ${
        getTheme
          ? "bg-white/5 border-white/10"
          : "bg-white border-gray-200 shadow-xs"
      }`}
    >
      <h3
        className={`text-base font-bold mb-3 ${
          getTheme ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((label) => (
          <SkillBadge key={label} label={label} />
        ))}
      </div>
    </div>
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
        className={`py-20 px-6 md:px-12 animation-slide ${
          getTheme
            ? "bg-[#0a0a0a] text-white"
            : "bg-gray-50 text-gray-900"
        }`}
      >
        <div className="w-full max-w-5xl mx-auto">
          <div className="mb-8">
            <h2
              className={`text-3xl md:text-4xl font-extrabold tracking-tight mb-2 ${
                getTheme ? "text-white" : "text-gray-900"
              }`}
            >
              About Me
            </h2>
            <p className={`text-sm ${getTheme ? "text-gray-400" : "text-gray-600"}`}>
              My background, experience, and the tools I use daily
            </p>
          </div>

          <div
            className={`about-card rounded-2xl p-6 md:p-8 border ${
              getTheme
                ? "bg-white/5 border-white/10"
                : "bg-white border-gray-200 shadow-xs"
            }`}
          >
            <p
              className={`mb-8 leading-relaxed text-base max-w-3xl ${
                getTheme ? "text-gray-300" : "text-gray-700"
              }`}
            >
              I am a developer focused on building functional, reliable applications. I spend most of my time writing MERN stack software, designing REST APIs, and connecting hardware sensors with cloud databases. Whether it's building a daily-use billing system for a local café or developing real-time anomaly detection for electrical appliances, I enjoy working on projects that solve practical problems.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <SkillCard
                title="Frontend"
                skills={["React.js", "Vite", "Tailwind CSS", "HTML5", "CSS3"]}
              />
              <SkillCard
                title="Backend"
                skills={["Node.js", "Express.js", "REST APIs", "Socket.io", "Python", "Java"]}
              />
              <SkillCard
                title="Database & Storage"
                skills={["MongoDB", "Mongoose", "Firebase", "IndexedDB"]}
              />
              <SkillCard
                title="Hardware & Tools"
                skills={["ESP32", "IoT Sensors", "Capacitor", "Git", "Postman"]}
              />
            </div>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};
