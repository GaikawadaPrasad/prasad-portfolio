import { useEffect, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

const techColor = (tech) => {
  const map = {
    "React.js": "#61DAFB",
    "Node.js": "#68A063",
    "Express.js": "#888",
    MongoDB: "#47A248",
    "Socket.io": "#fff",
    Firebase: "#FFCA28",
    "Firebase Auth": "#FFCA28",
    "Firebase Database": "#FFA000",
    Python: "#3776AB",
    "Machine Learning": "#FF6B6B",
    "Chart.js": "#FF6384",
    ESP32: "#E7352C",
    "IoT Sensors": "#00BCD4",
    "Tailwind CSS": "#38BDF8",
    "JWT Auth": "#D4AC0D",
    "Framer Motion": "#BB6BD9",
    "Cloudinary API": "#3448C5",
    Zustand: "#FF7043",
    Capacitor: "#119EFF",
    "Android SDK": "#3DDC84",
    Java: "#F89820",
    "Spring Boot": "#6DB33F",
    "REST API": "#FF9800",
    "React Router": "#CA4245",
    Vite: "#646CFF",
    "dnd-kit": "#FF6B35",
    IndexedDB: "#7C4DFF",
    Mongoose: "#880000",
    "React Hot Toast": "#FF6B6B",
    RoughJS: "#F5A623",
    "HTML5 Canvas": "#E44D26",
    "LocalStorage API": "#4CAF50",
    "Gemini API": "#4285F4",
    "Monaco Editor": "#0078D4",
  };
  return map[tech] || "#9CA3AF";
};



const FeaturedCard = ({ project, getTheme, reverse }) => {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div
      className={`group flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-8 rounded-2xl border p-6 md:p-8 transition-all duration-500 hover:shadow-2xl ${
        getTheme
          ? "bg-white/5 border-white/10 hover:border-white/20"
          : "bg-white border-gray-200 hover:border-gray-300 shadow-sm"
      }`}
      style={{
        boxShadow: `0 0 0 0 ${project.glowColor}`,
        transition: "box-shadow 0.4s ease",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow = `0 8px 40px 0 ${project.glowColor}`)
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.boxShadow = `0 0 0 0 ${project.glowColor}`)
      }
    >
      {/* ── Image panel ── */}
      <div className="lg:w-[48%] shrink-0">
        <div className="relative rounded-xl overflow-hidden aspect-video ring-1 ring-white/10 shadow-xl">
          <img
            src={project.images[activeImg]}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <div className={`absolute inset-0 bg-linear-to-t ${project.accent} opacity-10 pointer-events-none`} />
        </div>

        {/* Thumbnails */}
        {project.images.length > 1 && (
          <div className="flex gap-2 mt-3">
            {project.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`flex-1 aspect-video rounded-lg overflow-hidden ring-2 transition-all duration-200 ${
                  activeImg === i ? "ring-violet-400 opacity-100" : "ring-transparent opacity-50 hover:opacity-75"
                }`}
              >
                <img src={img} alt={`thumb-${i}`} className="w-full h-full object-cover object-top" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Content panel ── */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          {/* Badge */}
          <span
            className={`inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-linear-to-r ${project.accent} text-white shadow`}
          >
            {project.badge}
          </span>

          <h3 className={`text-2xl md:text-3xl font-extrabold leading-tight mb-1 ${getTheme ? "text-white" : "text-gray-900"}`}>
            {project.title}
          </h3>
          <p className={`text-sm font-semibold mb-4 bg-linear-to-r ${project.accent} bg-clip-text text-transparent`}>
            {project.subtitle}
          </p>
          <p className={`text-sm leading-relaxed mb-6 ${getTheme ? "text-gray-400" : "text-gray-600"}`}>
            {project.desc}
          </p>
        </div>

        <div>
          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techs.map((tech) => (
              <span
                key={tech}
                className={`text-xs font-semibold px-3 py-1 rounded-full border transition-all duration-200 hover:scale-105 cursor-default ${
                  getTheme
                    ? "bg-white/5 text-gray-300 hover:bg-white/10"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                style={{ borderColor: `${techColor(tech)}44` }}
              >
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full mr-1.5 align-middle"
                  style={{ backgroundColor: techColor(tech) }}
                />
                {tech}
              </span>
            ))}
          </div>

          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm text-white bg-linear-to-r ${project.accent} shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            >
              View Project <span>→</span>
            </a>
          ) : (
            <span
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm border ${
                getTheme ? "border-white/20 text-gray-500" : "border-gray-300 text-gray-400"
              }`}
            >
              Private / Confidential
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export const Projects = ({ getTheme }) => {
  const [showMore, setShowMore] = useState(false);

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
      { threshold: 0.3 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [showMore]);

  const projectsCard1 = [
    {
      title: "FitTrack - Smart Fitness Companion",
      desc: "A fully responsive fitness-tracking dashboard built with React and Firebase. Calculates custom biological metrics including BMI, BMR, and TDEE based on physical attributes and daily activity factors. Features interactive progress charts powered by Chart.js, and an automated milestone engine that records fitness progress over time.",
      techs: ["React.js", "Firebase Auth", "Firebase Database", "Chart.js", "Vite", "React Router", "Tailwind CSS"],
      link: "https://vdp-fit-track.vercel.app/login",
    },
    {
      title: "Melodix - Hybrid Mobile Music Player",
      desc: "An offline-first hybrid mobile music player built with React and Tailwind CSS, compiled natively for Android using Capacitor. Features high-performance local audio playback, persistent metadata caching using IndexedDB, dynamic drag-and-drop playlist reordering powered by dnd-kit, and native haptic feedback.",
      techs: ["React.js", "Capacitor", "Zustand", "IndexedDB", "Tailwind CSS", "dnd-kit", "Framer Motion", "Android SDK"],
      link: "https://github.com/GaikawadaPrasad/Melodix",
    },
    {
      title: "Terminal Portfolio",
      desc: "A terminal-style portfolio website built with React and Tailwind CSS. Features a unique command-line interface for navigating through different sections of the portfolio.",
      techs: ["React.js", "Tailwind CSS"],
      link: "https://gaikawadaprasad.github.io/terminal-portfolio/",
    },
    {
      title: "Gaming Website",
      desc: "An interactive website that offers fun mini-games such as Memory Game, Rock-Paper-Scissors, Tic-Tac-Toe and more. Designed to provide a playful and engaging user experience.",
      techs: ["HTML", "CSS", "JS"],
      link: "https://vdp-gaming-hub.netlify.app/",
    },
    {
      title: "InterviewMate - AI-Powered Interview Preparation Platform",
      desc: "Built a complete MERN application from scratch, integrated Gemini API for dynamic question generation and performance analysis, implemented secure authentication, code execution, and analytics tracking.",
      techs: ["React.js", "Node.js", "MongoDB", "Gemini API", "Monaco Editor"],
      link: "https://github.com/GaikawadaPrasad/Interview-Mate-backend",
    },
    {
      title: "RoyaleStats",
      desc: "A real-time statistics web application built using Java and Spring Boot that integrates with the Clash Royale API to fetch and display live player and clan data. Features REST API integration, JSON parsing, exception handling, and dynamic data rendering.",
      techs: ["Java", "Spring Boot", "REST API", "HTML", "CSS"],
      link: "https://github.com/GaikawadaPrasad/RoyaleStats-frontend",
    },
  ];

  const projectsCard2 = [
    {
      title: "Habit Tracker",
      desc: "A habit tracking application designed to help users build consistent daily routines using secure authentication and real-time data synchronization. Features habit management, progress tracking, and responsive user interaction.",
      techs: ["React.js", "Firebase Authentication", "Firebase Realtime Database"],
      link: "https://vdp-habit-tracker.vercel.app/",
    },
    {
      title: "Password Strength Checker",
      desc: "A helpful tool that analyzes the strength of user-entered passwords. Provides real-time feedback on password quality based on length, character variety, and overall security level.",
      techs: ["HTML", "CSS", "JS"],
      link: "https://vdp-pwd-strength.vercel.app/",
    },
    {
      title: "Chat Karo",
      desc: "A real-time chat application built using the MERN stack that enables secure one-to-one messaging with user authentication and instant communication using Socket.io.",
      techs: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "React Hot Toast"],
      link: "https://github.com/GaikawadaPrasad/chat-frontend",
    },
  ];

  const cardClass = (getTheme) =>
    `project-card ${
      getTheme
        ? "bg-linear-to-t from-black to-[#5b5a5a3f] border-white/20 text-white hover:border-white/40 hover:shadow-md"
        : "bg-white/10 border-black/20 text-white hover:border-black/40 hover:shadow-md"
    } p-6 rounded-xl hover:-translate-y-1 transition-all duration-300`;

  const renderCard = ({ title, desc, techs, link }) => (
    <div key={title} className={cardClass(getTheme)}>
      <h3 className={`text-xl font-bold mb-2 ${getTheme ? "text-white" : "text-black"}`}>
        {title}
      </h3>
      <p className={`${getTheme ? "text-gray-300" : "text-gray-700"} mb-4`}>{desc}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {techs.map((tech) => (
          <span
            key={tech}
            className={`${
              getTheme
                ? "bg-white/10 text-white hover:bg-black hover:shadow-white/30"
                : "bg-black/10 text-black hover:bg-white hover:shadow-black/30"
            } py-1 px-3 rounded-xl text-sm font-medium shadow-sm`}
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block ${
          getTheme ? "text-white hover:text-gray-300" : "text-black hover:text-gray-600"
        } transition-color`}
      >
        <div
          className={`flex items-center gap-3 border rounded-xl px-6 py-2 ${
            getTheme
              ? "border-white/50 hover:border-black/50 hover:bg-white hover:text-black hover:shadow-white"
              : "border-black/50 hover:border-white/50 hover:bg-black hover:text-white hover:shadow-black"
          }`}
        >
          View Project <span className="text-2xl">&rarr;</span>
        </div>
      </a>
    </div>
  );

  return (
    <RevealOnScroll>
      <section
        id="projects"
        className={`scroll-mt-20 min-h-screen py-20 px-6 md:px-12 animation-slide ${
          getTheme
            ? "bg-linear-to-t from-[#5b5a5a3e] via-black to-[#5b5a5a3e]"
            : "bg-linear-to-t from-black-900 to-white"
        }`}
      >
        <div className="max-w-7xl w-full">

       
          <h2 className={`text-4xl font-extrabold mb-10 ${getTheme ? "text-white" : "text-black"} text-left`}>
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-full">
            {projectsCard1.map(renderCard)}
          </div>

          <div>
            {showMore && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-full mt-6">
                {projectsCard2.map(renderCard)}
              </div>
            )}
          </div>

          <button
            type="button"
            className={`w-full py-3 mt-6 px-6 rounded font-medium transition ${
              getTheme
                ? "bg-linear-to-t from-black to-[#5b5a5a4b] ml-2 text-white border rounded-xl border-[#5b5a5a55] hover:bg-white hover:text-black active:bg-gray-300"
                : "bg-white text-black border rounded-xl border-black hover:bg-black hover:text-white active:bg-gray-900"
            }`}
            onClick={() => {
              if (showMore) {
                window.scrollTo({
                  top: document.getElementById("projects").offsetTop,
                  behavior: "smooth",
                });
              }
              setShowMore(!showMore);
            }}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </section>
    </RevealOnScroll>
  );
};
