import { useEffect, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { techColor } from "../../utils/techColors";

export const Projects = ({ getTheme }) => {
  const [showMore, setShowMore] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");
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
      { threshold: 0.1 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [showMore, activeCategory]);

  const projectsCard1 = [
    {
      title: "FitTrack - Fitness Companion",
      desc: "A responsive fitness-tracking dashboard built with React and Firebase. Calculates biological metrics including BMI, BMR, and TDEE based on physical attributes and daily activity factors. Features interactive progress charts powered by Chart.js.",
      techs: [
        "React.js",
        "Firebase Auth",
        "Firebase Database",
        "Chart.js",
        "Vite",
        "React Router",
        "Tailwind CSS",
      ],
      category: "Interactive Web Application",
      link: "https://vdp-fit-track.vercel.app/login",
    },
    {
      title: "Melodix - Mobile Music Player",
      desc: "An offline-first hybrid mobile music player built with React and Tailwind CSS, compiled natively for Android using Capacitor. Features local audio playback, persistent metadata caching using IndexedDB, and drag-and-drop playlist reordering.",
      techs: [
        "React.js",
        "Capacitor",
        "Zustand",
        "IndexedDB",
        "Tailwind CSS",
        "dnd-kit",
        "Framer Motion",
        "Android SDK",
      ],
      category: "Mobile Development",
      link: "https://github.com/GaikawadaPrasad/Melodix",
    },
    {
      title: "Terminal Portfolio",
      desc: "A command-line style portfolio website built with React and Tailwind CSS. Features an interactive terminal prompt for exploring my skills, projects, and bio via keyboard commands.",
      techs: ["React.js", "Tailwind CSS"],
      category: "Web Development",
      link: "https://gaikawadaprasad.github.io/terminal-portfolio/",
    },
    {
      title: "Mini Games Hub",
      desc: "An interactive browser gaming hub featuring mini-games including Memory Match, Rock-Paper-Scissors, and Tic-Tac-Toe. Built to practice core DOM manipulation, game loops, and responsive layout design.",
      techs: ["HTML", "CSS", "JS"],
      category: "Web Development",
      link: "https://vdp-gaming-hub.netlify.app/",
    },
    {
      title: "InterviewMate - AI Interview Prep",
      desc: "A full-stack preparation platform built with the MERN stack and integrated with the Gemini API for adaptive question generation, mock technical interviews, and real-time code editor integration.",
      techs: ["React.js", "Node.js", "MongoDB", "Gemini API", "Monaco Editor"],
      category: "Interactive Web Application",
      link: "https://github.com/GaikawadaPrasad/Interview-Mate-backend",
    },
    {
      title: "RoyaleStats",
      desc: "A statistics tracking application built with Java and Spring Boot that integrates directly with the official Clash Royale API to fetch and render live player profiles, battle history, and clan metrics.",
      techs: ["Java", "Spring Boot", "REST API", "HTML", "CSS"],
      category: "Full Stack",
      link: "https://github.com/GaikawadaPrasad/RoyaleStats-frontend",
    },
  ];

  const projectsCard2 = [
    {
      title: "Habit Tracker",
      desc: "A daily habit tracking application designed to help build consistent routines. Uses Firebase for real-time data sync, progress calculations, and responsive streak tracking.",
      techs: [
        "React.js",
        "Firebase Authentication",
        "Firebase Realtime Database",
      ],
      category: "Web Development",
      link: "https://vdp-habit-tracker.vercel.app/",
    },
    {
      title: "Password Strength Checker",
      desc: "A client-side security tool that analyzes passwords in real time. Evaluates character complexity, length, entropy, and common security pitfalls to offer immediate feedback.",
      techs: ["HTML", "CSS", "JS"],
      category: "Web Development",
      link: "https://vdp-pwd-strength.vercel.app/",
    },
    {
      title: "IoT Appliance Failure Detection",
      desc: "An IoT monitoring system for electrical appliances using current, voltage, temperature, and vibration sensors with ESP32 and Firebase, combined with a real-time web dashboard for health metrics.",
      techs: [
        "React.js",
        "Chart.js",
        "ESP32",
        "Python",
        "Firebase",
        "IoT Sensors",
      ],
      category: "IoT",
      link: "https://github.com/GaikawadaPrasad/IntelliSense-web",
    },
    {
      title: "Chat Karo",
      desc: "A full-stack chat application built with the MERN stack and Socket.io enabling instant one-to-one messaging with live presence indicators and notification alerts.",
      techs: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Socket.io",
        "React Hot Toast",
      ],
      category: "Full Stack",
      link: "https://github.com/GaikawadaPrasad/chat-frontend",
    },
    {
      title: "Whiteboard Drawing App",
      desc: "A responsive browser whiteboard application built with React and RoughJS. Supports freehand sketches, geometric shapes, customizable stroke styles, color picker, and local state saving.",
      techs: ["React.js", "RoughJS", "HTML5 Canvas", "LocalStorage", "CSS"],
      category: "Interactive Web Application",
      link: "https://vdp-white-board.vercel.app/",
    },
  ];

  const categories = [
    "All",
    "Full Stack",
    "Mobile Development",
    "Interactive Web Application",
    "IoT",
    "Web Development",
  ];

  const allProjects = [...projectsCard1, ...projectsCard2];
  const displayedProjects =
    activeCategory === "All"
      ? showMore
        ? allProjects
        : projectsCard1
      : allProjects.filter((p) => p.category === activeCategory);

  const renderCard = (project) => {
    const { title, desc, techs, link } = project;

    return (
      <div
        key={title}
        className={`project-card group flex flex-col justify-between p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
          getTheme
            ? "bg-white/5 border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-white/5"
            : "bg-white border-neutral-200 shadow-xs hover:border-neutral-300"
        }`}
      >
        <div>
          <h3
            className={`text-xl font-bold mb-3 transition-colors ${
              getTheme ? "text-white" : "text-neutral-900"
            }`}
          >
            {title}
          </h3>

          <p
            className={`text-sm leading-relaxed mb-6 ${
              getTheme ? "text-neutral-300" : "text-neutral-600"
            }`}
          >
            {desc}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-2 mb-6">
            {techs.map((tech) => {
              const color = techColor(tech);
              return (
                <span
                  key={tech}
                  className={`text-xs font-mono px-3 py-1 rounded-full border transition-transform duration-150 ${
                    getTheme
                      ? "bg-white/5 text-neutral-300 border-white/10"
                      : "bg-neutral-100 text-neutral-700 border-neutral-200"
                  }`}
                  style={{ borderColor: `${color}44` }}
                >
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full mr-1.5 align-middle"
                    style={{ backgroundColor: color }}
                  />
                  {tech}
                </span>
              );
            })}
          </div>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold border transition-all duration-200 ${
              getTheme
                ? "border-white/20 text-white hover:bg-white hover:text-black"
                : "border-neutral-300 text-neutral-800 hover:bg-black hover:text-white"
            }`}
          >
            View Project &rarr;
          </a>
        </div>
      </div>
    );
  };

  return (
    <RevealOnScroll>
      <section
        id="projects"
        className={`py-24 px-6 md:px-12 scroll-mt-10 ${
          getTheme
            ? "bg-black text-white"
            : "bg-neutral-50 text-neutral-900"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2
              className={`text-3xl md:text-5xl font-extrabold mb-3 tracking-tight ${
                getTheme ? "text-white" : "text-neutral-900"
              }`}
            >
              All Projects
            </h2>
            <p
              className={`text-sm md:text-base ${
                getTheme ? "text-neutral-400" : "text-neutral-600"
              }`}
            >
              Catalog of web applications, mobile apps, and open-source projects
            </p>
            <div className={`w-16 h-1 mt-4 rounded-full ${getTheme ? "bg-white/30" : "bg-black/30"}`} />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all duration-200 cursor-pointer border ${
                  activeCategory === cat
                    ? getTheme
                      ? "bg-white text-black border-white shadow-sm"
                      : "bg-black text-white border-black shadow-sm"
                    : getTheme
                    ? "bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10 hover:text-white"
                    : "bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayedProjects.map(renderCard)}
          </div>

          {activeCategory === "All" && (
            <div className="mt-10 text-center">
              <button
                type="button"
                className={`px-8 py-3 rounded-xl font-semibold border transition-all duration-300 cursor-pointer ${
                  getTheme
                    ? "bg-white/5 border-white/15 text-white hover:bg-white/10 hover:border-white/30"
                    : "bg-white border-neutral-300 text-neutral-800 shadow-xs hover:bg-black hover:text-white"
                }`}
                onClick={() => {
                  if (showMore) {
                    const elem = document.getElementById("projects");
                    if (elem) {
                      window.scrollTo({
                        top: elem.offsetTop - 80,
                        behavior: "smooth",
                      });
                    }
                  }
                  setShowMore(!showMore);
                }}
              >
                {showMore ? "Show Less Projects" : "Show More Projects"}
              </button>
            </div>
          )}
        </div>
      </section>
    </RevealOnScroll>
  );
};
