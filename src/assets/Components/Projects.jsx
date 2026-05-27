import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

import iotImg from "../../images/final_year_project1.png";
import iotUI1 from "../../images/final_year_project_UI1.png";
import iotUI2 from "../../images/final_year_project_UI2.png";
import chatImg from "../../images/Chart_Karo_UI2.png";
import chatImg2 from "../../images/Chart_Karo_UI1.png";
import sriImg from "../../images/Sri_Sri_Associates.png";

export const Projects = ({ getTheme }) => {
  const [showAll, setShowAll] = React.useState(false);
  const INITIAL_LIMIT = 4;
  const featuredProjects = [
    {
      id: 1,
      badge: "Final Year Project",
      title: "AI-Based IoT System for Early Failure Detection",
      subtitle: "Monitoring of Electrical Appliances",
      desc: "Developed an AI-powered IoT system to monitor electrical appliances using current, voltage, temperature, and vibration sensors. Built a React.js dashboard with Chart.js for real-time monitoring, appliance health analysis, and visualization of sensor data. Integrated ESP32 with Firebase for live data collection, cloud storage, and remote monitoring. Implemented machine learning models for anomaly detection and early prediction of appliance failures.",
      techs: [
        "React.js",
        "Chart.js",
        "ESP32",
        "Python",
        "Firebase",
        "Machine Learning",
        "IoT Sensors",
      ],
      images: [iotImg, iotUI1, iotUI2],
      link: "https://github.com/GaikawadaPrasad/IntelliSense-web",
      accent: "from-orange-500 to-rose-600",
      accentLight: "from-orange-400/20 to-rose-500/20",
    },
    {
      id: 2,
      badge: "MERN Stack",
      title: "Chart Karo",
      subtitle: "Real-Time Chat Application",
      desc: "A real-time chat application built using the MERN stack that enables secure one-to-one messaging with user authentication and instant communication using Socket.io.",
      techs: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Socket.io",
        "React Hot Toast",
      ],
      images: [chatImg, chatImg2],
      link: "https://github.com/GaikawadaPrasad/chat-frontend",
      accent: "from-violet-500 to-indigo-600",
      accentLight: "from-violet-400/20 to-indigo-500/20",
    },
    {
      id: 3,
      badge: "B2B ",
      title: "Sri Sri Associates",
      subtitle: "Financial Consulting Platform",
      desc: "A comprehensive, secure B2B  platform custom-built for a financial consulting and loan brokerage firm. Enables agents to submit customer leads with multi-document upload support, tracks lead status throughout a disbursed-to-rejected pipeline, integrates an interactive EMI calculator, and automates employee attendance, leave management, and monthly performance target tracking.",
      techs: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Tailwind CSS",
        "JWT Auth",
        "Cloudinary API"
      ],
      images: [sriImg],
      link: "",
      accent: "from-blue-500 to-cyan-500",
      accentLight: "from-blue-400/20 to-cyan-500/20",
    },
  ];

  const otherProjects = [
    {
      title: "FitTrack",
      subtitle: "Smart Fitness Companion",
      desc: "A fully responsive fitness-tracking dashboard built with React and Firebase. Calculates custom biological metrics including BMI, BMR, and TDEE. Features interactive progress charts powered by Chart.js and an automated milestone engine.",
      techs: [
        "React.js",
        "Firebase Auth",
        "Firebase Database",
        "Chart.js",
        "Vite",
        "React Router",
        "Tailwind CSS",
      ],
      link: "https://vdp-fit-track.vercel.app/login",
    },
    {
      title: "Melodix",
      subtitle: "Hybrid Mobile Music Player",
      desc: "An offline-first hybrid mobile music player built with React and Tailwind CSS, compiled natively for Android using Capacitor. Features high-performance local audio playback, persistent metadata caching using IndexedDB, and dynamic drag-and-drop playlist reordering.",
      techs: [
        "React.js",
        "Capacitor",
        "IndexedDB",
        "Tailwind CSS",
        "Android SDK",
      ],
      link: "https://github.com/GaikawadaPrasad/Melodix",
    },
    {
      title: "Terminal Portfolio",
      subtitle: "Command-Line Interface Portfolio",
      desc: "A terminal-style portfolio website built with React and Tailwind CSS. Features a unique command-line interface for navigating through different sections of the portfolio.",
      techs: ["React.js", "Tailwind CSS"],
      link: "https://gaikawadaprasad.github.io/terminal-portfolio/",
    },
    {
      title: "RoyaleStats",
      subtitle: "Real-Time Game Statistics",
      desc: "A real-time statistics web application built using Java and Spring Boot that integrates with the Clash Royale API to fetch and display live player and clan data.",
      techs: ["Java", "Spring Boot", "REST API", "HTML", "CSS"],
      link: "https://github.com/GaikawadaPrasad/RoyaleStats-frontend",
    },
    {
      title: "Gaming Website",
      subtitle: "Mini Games Hub",
      desc: "An interactive website that offers fun mini-games such as Memory Game, Rock-Paper-Scissors, Tic-Tac-Toe and more. Designed to provide a playful and engaging user experience.",
      techs: ["HTML", "CSS", "JS"],
      link: "https://vdp-gaming-hub.netlify.app/",
    },
    {
      title: "Habit Tracker",
      subtitle: "Daily Routine Manager",
      desc: "A habit tracking application designed to help users build consistent daily routines using secure authentication and real-time data synchronization.",
      techs: [
        "React.js",
        "Firebase Authentication",
        "Firebase Realtime Database",
      ],
      link: "https://vdp-habit-tracker.vercel.app/",
    },
    {
      title: "Password Strength Checker",
      subtitle: "Security Analysis Tool",
      desc: "A helpful tool that analyzes the strength of user-entered passwords. Provides real-time feedback on password quality based on length, character variety, and overall security level.",
      techs: ["HTML", "CSS", "JS"],
      link: "https://vdp-pwd-strength.vercel.app/",
    },
    {
      title: "WhiteBoard",
      subtitle: "Sketch-Style Drawing App",
      desc: "A minimalistic browser-based whiteboard built with React and RoughJS, inspired by Excalidraw. Features freehand drawing, geometric shapes (line, rectangle, ellipse), fill/stroke toggle, adjustable stroke width, color picker, undo, and JSON export/import to save and restore sketches across sessions via localStorage.",
      techs: [
        "React.js",
        "RoughJS",
        "HTML5 Canvas",
        "Vite",
        "LocalStorage API",
      ],
      link: "https://github.com/GaikawadaPrasad/whiteBoard",
    },
  ];

  const techColor = (tech) => {
    const map = {
      "React.js": "#61DAFB",
      "Node.js": "#68A063",
      "Express.js": "#888",
      MongoDB: "#47A248",
      "Socket.io": "#fff",
      Firebase: "#FFCA28",
      Python: "#3776AB",
      RoughJS: "#F5A623",
      "HTML5 Canvas": "#E44D26",
      "LocalStorage API": "#4CAF50",
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
    };
    return map[tech] || "#9CA3AF";
  };

  return (
    <RevealOnScroll>
      <section
        id="projects"
        className={`scroll-mt-20 min-h-screen py-24 px-6 md:px-12 ${
          getTheme
            ? "bg-gradient-to-b from-black via-gray-950 to-black"
            : "bg-gradient-to-b from-white via-gray-50 to-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            {/* <span
              className={`inline-block text-sm font-semibold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full border ${
                getTheme
                  ? "text-violet-400 border-violet-400/30 bg-violet-400/10"
                  : "text-violet-600 border-violet-400/40 bg-violet-100"
              }`}
            >
              My Work
            </span> */}
            <h2
              className={`text-4xl md:text-5xl font-extrabold mb-4 ${
                getTheme ? "text-white" : "text-gray-900"
              }`}
            >
              Projects
            </h2>
            <p
              className={`text-lg max-w-2xl mx-auto ${
                getTheme ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {/* Things I've built with passion, curiosity, and a lot of clean code. */}
            </p>
          </div>

          {/* ─── Featured Projects ─── */}
          <div id="featured" className="mb-8 scroll-mt-20">
            <div className="flex items-center gap-3 mb-10">
              <h3
                className={`text-2xl font-bold ${
                  getTheme ? "text-white" : "text-gray-900"
                }`}
              >
                Featured Projects
              </h3>
              <div
                className={`flex-1 h-px ${
                  getTheme ? "bg-white/10" : "bg-gray-200"
                }`}
              />
            </div>

            <div className="space-y-16">
              {featuredProjects.map((project, idx) => (
                <FeaturedCard
                  key={project.id}
                  project={project}
                  getTheme={getTheme}
                  reverse={idx % 2 !== 0}
                  techColor={techColor}
                />
              ))}
            </div>
          </div>

          {/* ─── Other Projects ─── */}
          <div className="mt-24">
            <div className="flex items-center gap-3 mb-10">
              <h3
                className={`text-2xl font-bold ${
                  getTheme ? "text-white" : "text-gray-900"
                }`}
              >
                Other Projects
              </h3>
              <div
                className={`flex-1 h-px ${
                  getTheme ? "bg-white/10" : "bg-gray-200"
                }`}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(showAll ? otherProjects : otherProjects.slice(0, INITIAL_LIMIT)).map(
                (project) => (
                  <OtherProjectCard
                    key={project.title}
                    project={project}
                    getTheme={getTheme}
                    techColor={techColor}
                  />
                )
              )}
            </div>

            {/* View More / Show Less button */}
            {otherProjects.length > INITIAL_LIMIT && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setShowAll((prev) => !prev)}
                  className={`group relative inline-flex items-center gap-3 px-8 py-3 rounded-xl font-semibold text-sm border transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    getTheme
                      ? "border-white/20 text-white hover:bg-white hover:text-black hover:border-white"
                      : "border-gray-300 text-gray-800 hover:bg-gray-900 hover:text-white hover:border-gray-900"
                  }`}
                >
                  {showAll ? (
                    <>
                      Show Less
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                      </svg>
                    </>
                  ) : (
                    <>
                      View More Projects
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          getTheme
                            ? "bg-white/10 text-gray-400"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        +{otherProjects.length - INITIAL_LIMIT} more
                      </span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};

/* ─────────────────────────────────────────
   Featured Project Card (large, with image)
───────────────────────────────────────── */
const FeaturedCard = ({ project, getTheme, reverse, techColor }) => {
  const [activeImg, setActiveImg] = React.useState(0);

  return (
    <div
      className={`group relative flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-8 rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-2xl ${
        getTheme
          ? "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/8"
          : "bg-white border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-xl"
      } p-6 md:p-8`}
    >
      {/* Gradient accent glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.accentLight} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none`}
      />

      {/* ── Image Panel ── */}
      <div className="relative lg:w-[48%] shrink-0">
        {/* Main image */}
        <div className="relative rounded-xl overflow-hidden aspect-video shadow-2xl ring-1 ring-white/10">
          <img
            src={project.images[activeImg]}
            alt={`${project.title} screenshot`}
            className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105"
          />
          {/* gradient overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t ${project.accent} opacity-10`}
          />
        </div>

        {/* Thumbnail strip (if multiple images) */}
        {project.images.length > 1 && (
          <div className="flex gap-2 mt-3">
            {project.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`flex-1 aspect-video rounded-lg overflow-hidden ring-2 transition-all duration-200 ${
                  activeImg === i
                    ? `ring-violet-400 opacity-100`
                    : "ring-transparent opacity-50 hover:opacity-80"
                }`}
              >
                <img
                  src={img}
                  alt={`thumb-${i}`}
                  className="w-full h-full object-cover object-top"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Content Panel ── */}
      <div className="flex flex-col justify-between flex-1 relative z-10">
        {/* Badge */}
        <div>
          <span
            className={`inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-gradient-to-r ${project.accent} text-white shadow-lg`}
          >
            {project.badge}
          </span>

          <h3
            className={`text-2xl md:text-3xl font-extrabold leading-tight mb-1 ${
              getTheme ? "text-white" : "text-gray-900"
            }`}
          >
            {project.title}
          </h3>
          <p
            className={`text-base font-medium mb-4 bg-gradient-to-r ${project.accent} bg-clip-text text-transparent`}
          >
            {project.subtitle}
          </p>

          <p
            className={`text-sm leading-relaxed mb-6 ${
              getTheme ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {project.desc}
          </p>
        </div>

        {/* Tech stack */}
        <div>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techs.map((tech) => (
              <span
                key={tech}
                className={`text-xs font-semibold px-3 py-1 rounded-full border transition-all duration-200 hover:scale-105 cursor-default ${
                  getTheme
                    ? "bg-white/5 border-white/15 text-gray-300 hover:bg-white/10"
                    : "bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200"
                }`}
                style={{ borderColor: `${techColor(tech)}33` }}
              >
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full mr-1.5 align-middle"
                  style={{ backgroundColor: techColor(tech) }}
                />
                {tech}
              </span>
            ))}
          </div>

          {/* CTA */}
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-r ${project.accent} text-white shadow-lg`}
            >
              View Project <span className="text-base">→</span>
            </a>
          ) : (
            <span
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm border ${
                getTheme
                  ? "border-white/20 text-gray-500"
                  : "border-gray-300 text-gray-400"
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

/* ─────────────────────────────────────────
   Other Project Mini Card
───────────────────────────────────────── */
const OtherProjectCard = ({ project, getTheme, techColor }) => (
  <div
    className={`group relative flex flex-col h-full rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
      getTheme
        ? "bg-white/5 border-white/10 hover:border-violet-500/40 hover:bg-white/8"
        : "bg-white border-gray-200 hover:border-violet-300 shadow-sm hover:shadow-violet-100"
    }`}
  >
    <h4
      className={`text-lg font-bold mb-0.5 ${
        getTheme ? "text-white" : "text-gray-900"
      }`}
    >
      {project.title}
    </h4>
    <p
      className={`text-xs font-semibold mb-3 ${
        getTheme ? "text-violet-400" : "text-violet-600"
      }`}
    >
      {project.subtitle}
    </p>

    <p
      className={`text-sm leading-relaxed mb-4 flex-1 ${
        getTheme ? "text-gray-400" : "text-gray-600"
      }`}
    >
      {project.desc}
    </p>

    {/* Techs */}
    <div className="flex flex-wrap gap-1.5 mb-5">
      {project.techs.slice(0, 4).map((tech) => (
        <span
          key={tech}
          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
            getTheme
              ? "bg-white/5 border-white/10 text-gray-400"
              : "bg-gray-100 border-gray-200 text-gray-600"
          }`}
          style={{ borderColor: `${techColor(tech)}33` }}
        >
          {tech}
        </span>
      ))}
      {project.techs.length > 4 && (
        <span
          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
            getTheme ? "text-gray-500" : "text-gray-400"
          }`}
        >
          +{project.techs.length - 4} more
        </span>
      )}
    </div>

    {/* Link */}
    {project.link ? (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group-hover:gap-3 ${
          getTheme
            ? "text-violet-400 hover:text-violet-300"
            : "text-violet-600 hover:text-violet-500"
        }`}
      >
        View Project <span>→</span>
      </a>
    ) : (
      <span
        className={`text-sm font-semibold ${
          getTheme ? "text-gray-600" : "text-gray-400"
        }`}
      >
        Private
      </span>
    )}
  </div>
);


