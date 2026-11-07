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
      { threshold: 0.2 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [showMore]);

  const projectsCard1 = [
    {
      title: "FitTrack - Smart Fitness Companion",
      desc: "A fully responsive fitness-tracking dashboard built with React and Firebase. Calculates custom biological metrics including BMI, BMR, and TDEE based on physical attributes and daily activity factors. Features interactive progress charts powered by Chart.js, and an automated milestone engine.",
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
      title: "Melodix - Hybrid Mobile Music Player",
      desc: "An offline-first hybrid mobile music player built with React and Tailwind CSS, compiled natively for Android using Capacitor. Features high-performance local audio playback, persistent metadata caching using IndexedDB, dynamic drag-and-drop playlist reordering powered by dnd-kit, and native haptic feedback.",
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
      desc: "A terminal-style portfolio website built with React and Tailwind CSS. Features a unique command-line interface for navigating through different sections of the portfolio.",
      techs: ["React.js", "Tailwind CSS"],
      category: "Web Development",
      link: "https://gaikawadaprasad.github.io/terminal-portfolio/",
    },
    {
      title: "Gaming Website",
      desc: "An interactive website that offers fun mini-games such as Memory Game, Rock-Paper-Scissors, Tic-Tac-Toe and more. Designed to provide a playful and engaging user experience.",
      techs: ["HTML", "CSS", "JS"],
      category: "Web Development",
      link: "https://vdp-gaming-hub.netlify.app/",
    },
    {
      title: "InterviewMate - AI-Powered Interview Preparation Platform",
      desc: "Built a complete MERN application from scratch, integrated Gemini API for dynamic question generation and performance analysis, implemented secure authentication, code execution, and analytics tracking.",
      techs: ["React.js", "Node.js", "MongoDB", "Gemini API", "Monaco Editor"],
      category: "Interactive Web Application",
      link: "https://github.com/GaikawadaPrasad/Interview-Mate-backend",
    },
    {
      title: "RoyaleStats",
      desc: "A real-time statistics web application built using Java and Spring Boot that integrates with the Clash Royale API to fetch and display live player and clan data. Features REST API integration, JSON parsing, exception handling, and dynamic data rendering.",
      techs: ["Java", "Spring Boot", "REST API", "HTML", "CSS"],
      category: "Full Stack",
      link: "https://github.com/GaikawadaPrasad/RoyaleStats-frontend",
    },
  ];

  const projectsCard2 = [
    {
      title: "Habit Tracker",
      desc: "A habit tracking application designed to help users build consistent daily routines using secure authentication and real-time data synchronization. Features habit management, progress tracking, and responsive user interaction.",
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
      desc: "A helpful tool that analyzes the strength of user-entered passwords. Provides real-time feedback on password quality based on length, character variety, and overall security level.",
      techs: ["HTML", "CSS", "JS"],
      category: "Web Development",
      link: "https://vdp-pwd-strength.vercel.app/",
    },
    {
      id: 1,
      title: "AI-Based IoT System for Early Failure Detection",
      desc: "Developed an AI-powered IoT system to monitor electrical appliances using current, voltage, temperature, and vibration sensors. Built a React.js dashboard with Chart.js for real-time monitoring, appliance health analysis, and visualization of sensor data.",
      techs: [
        "React.js",
        "Chart.js",
        "ESP32",
        "Python",
        "Firebase",
        "Machine Learning",
        "IoT Sensors",
      ],
      category: "IoT",
      link: "https://github.com/GaikawadaPrasad/IntelliSense-web",
    },
    {
      title: "Chat Karo",
      desc: "A real-time chat application built using the MERN stack that enables secure one-to-one messaging with user authentication and instant communication using Socket.io.",
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
      desc: "A minimalistic and responsive whiteboard application inspired by Excalidraw, built with React and RoughJS. Supports freehand drawing, lines, rectangles, ellipses, customizable stroke styles, color selection, undo functionality, and local persistence.",
      techs: ["React.js", "RoughJS", "HTML5 Canvas", "LocalStorage", "CSS"],
      category: "Interactive Web Application",
      link: "https://vdp-white-board.vercel.app/",
    },
  ];

  const renderCard = (project) => {
    const { title, desc, techs, category, link } = project;
    if (activeCategory !== "All" && category !== activeCategory) return null;

    return (
      <div
        key={title}
        className={`project-card group flex flex-col justify-between p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
          getTheme
            ? "bg-white/5 border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-violet-500/5"
            : "bg-white border-slate-200 shadow-xs hover:shadow-md hover:border-slate-300"
        }`}
      >
        <div>
          <h3
            className={`text-xl font-bold mb-3 group-hover:text-violet-400 transition-colors ${
              getTheme ? "text-white" : "text-slate-900"
            }`}
          >
            {title}
          </h3>

          <p
            className={`text-sm leading-relaxed mb-6 ${
              getTheme ? "text-gray-300" : "text-slate-600"
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
                  className={`text-xs font-semibold px-3 py-1 rounded-full border transition-transform duration-150 hover:scale-105 ${
                    getTheme
                      ? "bg-white/5 text-gray-200 border-white/10"
                      : "bg-slate-100 text-slate-700 border-slate-200"
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
                : "border-slate-300 text-slate-800 hover:bg-slate-900 hover:text-white"
            }`}
          >
            View Project <span>→</span>
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
            : "bg-slate-50 text-slate-900"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2
              className={`text-3xl md:text-5xl font-extrabold mb-3 tracking-tight ${
                getTheme ? "text-white" : "text-slate-900"
              }`}
            >
              All Projects
            </h2>
            <p
              className={`text-sm md:text-base ${
                getTheme ? "text-gray-400" : "text-slate-600"
              }`}
            >
              Explore my full catalog of web applications, mobile builds, and open-source code
            </p>
            <div className="w-20 h-1.5 bg-violet-600 rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsCard1.map(renderCard)}
          </div>

          {showMore && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {projectsCard2.map(renderCard)}
            </div>
          )}

          <div className="mt-10 text-center">
            <button
              type="button"
              className={`px-8 py-3 rounded-xl font-semibold border transition-all duration-300 cursor-pointer ${
                getTheme
                  ? "bg-white/5 border-white/15 text-white hover:bg-white/10 hover:border-white/30"
                  : "bg-white border-slate-300 text-slate-800 shadow-xs hover:bg-slate-900 hover:text-white"
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
        </div>
      </section>
    </RevealOnScroll>
  );
};
