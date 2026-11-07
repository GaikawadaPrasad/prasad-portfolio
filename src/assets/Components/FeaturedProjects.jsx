import iotImg from "../../images/final_year_project1.png";
import iotUI1 from "../../images/final_year_project_UI1.png";
import iotUI2 from "../../images/final_year_project_UI2.png";
import chatImg from "../../images/Chart_Karo_UI2.png";
import chatImg2 from "../../images/Chart_Karo_UI1.png";
import sriImg from "../../images/Sri_Sri_Associates.png";
import Muscle_UP_CAFE1 from "../../images/Muscle_UP_CAFE1.png";
import Muscle_UP_CAFE2 from "../../images/Muscle_Up_CAFE2.png";
import Muscle_UP_CAFE3 from "../../images/Muscle_UP_CAFE3.png";
import { useEffect, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { techColor } from "../../utils/techColors";

const FeaturedCard = ({ project, getTheme, reverse }) => {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <RevealOnScroll>
      <div
        className={`flex flex-col ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } gap-8 rounded-2xl border p-6 md:p-8 transition-all duration-300 ${
          getTheme
            ? "bg-white/5 border-white/10 hover:border-white/20"
            : "bg-white border-gray-200 shadow-xs hover:border-gray-300"
        }`}
      >
        {/* ── Image panel ── */}
        <div className="lg:w-[48%] shrink-0 flex flex-col justify-between">
          <div className="relative rounded-xl overflow-hidden aspect-video border border-gray-500/10 shadow-sm">
            <img
              src={project.images[activeImg]}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Thumbnails */}
          {project.images.length > 1 && (
            <div className="flex gap-2 mt-3">
              {project.images.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImg(i)}
                  className={`flex-1 aspect-video rounded-lg overflow-hidden border transition-all duration-150 cursor-pointer ${
                    activeImg === i
                      ? "border-violet-500 opacity-100 ring-1 ring-violet-500"
                      : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                  aria-label={`View thumbnail ${i + 1}`}
                >
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="w-full h-full object-cover object-top"
                  />
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
              className={`inline-block text-xs font-semibold uppercase tracking-wider mb-2 px-3 py-1 rounded-md border ${
                getTheme
                  ? "bg-violet-500/10 border-violet-500/20 text-violet-300"
                  : "bg-violet-50 border-violet-200 text-violet-700"
              }`}
            >
              {project.badge}
            </span>

            <h3
              className={`text-2xl md:text-3xl font-bold mb-1 ${
                getTheme ? "text-white" : "text-gray-900"
              }`}
            >
              {project.title}
            </h3>

            <p
              className={`text-sm font-semibold mb-4 ${
                getTheme ? "text-violet-400" : "text-violet-600"
              }`}
            >
              {project.subtitle}
            </p>

            <p
              className={`text-sm md:text-base leading-relaxed mb-6 ${
                getTheme ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {project.desc}
            </p>
          </div>

          <div>
            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techs.map((tech) => {
                const color = techColor(tech);
                return (
                  <span
                    key={tech}
                    className={`text-xs font-medium px-3 py-1 rounded-md border ${
                      getTheme
                        ? "bg-white/5 text-gray-200 border-white/10"
                        : "bg-gray-100 text-gray-700 border-gray-200"
                    }`}
                  >
                    <span
                      className="inline-block w-2 h-2 rounded-full mr-1.5 align-middle"
                      style={{ backgroundColor: color }}
                    />
                    {tech}
                  </span>
                );
              })}
            </div>

            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 ${
                  getTheme
                    ? "bg-white text-black hover:bg-gray-200"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                View Code / Demo <span>→</span>
              </a>
            ) : (
              <span
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-xs border ${
                  getTheme
                    ? "border-white/10 text-gray-400 bg-white/5"
                    : "border-gray-200 text-gray-500 bg-gray-100"
                }`}
              >
                Client / Private Project
              </span>
            )}
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default function FeaturedProjects({ getTheme }) {
  const featuredProjects = [
    {
      id: 1,
      badge: "Final Year Project",
      title: "AI-Based IoT Failure Detection System",
      subtitle: "Appliance Health Monitoring & Diagnostics",
      desc: "An IoT project built to monitor electrical equipment using voltage, current, temperature, and vibration sensors. Features a React dashboard with real-time Chart.js visualizer, ESP32 microcontrollers synced with Firebase, and machine learning models for anomaly detection.",
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
    },
    {
      id: 2,
      badge: "MERN Stack",
      title: "Chat Karo",
      subtitle: "Real-Time Messaging Application",
      desc: "A MERN stack chat application featuring secure user authentication, instant one-to-one messaging with Socket.io, online status indicators, and notification toasts.",
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
    },
    {
      id: 3,
      badge: "B2B SaaS Platform",
      title: "Sri Sri Associates",
      subtitle: "Financial Lead & Employee Portal",
      desc: "Custom web platform built for a loan consultancy firm. Manages customer leads, document uploads, loan pipeline statuses, EMI calculations, and daily employee punch-in / attendance records.",
      techs: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Tailwind CSS",
        "JWT Auth",
        "Cloudinary API",
      ],
      images: [sriImg],
      link: "",
    },
    {
      id: 4,
      badge: "MERN Stack",
      title: "MuscleUP Café",
      subtitle: "Café Billing & Sales System",
      desc: "A custom billing and sales system created for a local café and supplement store. Supports fast checkout, thermal bill printing via machine integration, inventory management, daily sales tracking, and PDF reports.",
      techs: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "React Hot Toast",
        "REST APIs",
        "AutoTable PDF",
      ],
      images: [Muscle_UP_CAFE1, Muscle_UP_CAFE2, Muscle_UP_CAFE3],
      link: "",
    },
  ];

  return (
    <section
      id="featured"
      className={`py-20 px-6 md:px-12 scroll-mt-10 ${
        getTheme
          ? "bg-[#0a0a0a] text-white"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h2
            className={`text-3xl md:text-4xl font-extrabold tracking-tight mb-2 ${
              getTheme ? "text-white" : "text-gray-900"
            }`}
          >
            Featured Projects
          </h2>
          <p
            className={`text-sm ${
              getTheme ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A selection of projects I've built for clients, research, and production use
          </p>
        </div>

        <div className="space-y-8">
          {featuredProjects.map((project, idx) => (
            <FeaturedCard
              key={project.id}
              project={project}
              getTheme={getTheme}
              reverse={idx % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
