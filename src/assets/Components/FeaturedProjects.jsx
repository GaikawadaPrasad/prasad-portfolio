import iotImg from "../../images/final_year_project1.webp";
import iotUI1 from "../../images/final_year_project_UI1.png";
import iotUI2 from "../../images/final_year_project_UI2.png";
import chatImg from "../../images/Chart_Karo_UI2.png";
import chatImg2 from "../../images/Chart_Karo_UI1.png";
import sriImg from "../../images/Sri_Sri_Associates.png";
import Muscle_UP_CAFE1 from "../../images/Muscle_UP_CAFE1.png";
import Muscle_UP_CAFE2 from "../../images/Muscle_Up_CAFE2.png";
import Muscle_UP_CAFE3 from "../../images/Muscle_UP_CAFE3.png";
import { useState } from "react";
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
            : "bg-white border-neutral-200 shadow-xs hover:border-neutral-300"
        }`}
      >
        {/* Image panel */}
        <div className="lg:w-[48%] shrink-0 flex flex-col justify-between">
          <div className="relative rounded-xl overflow-hidden aspect-video border border-neutral-700/20 shadow-sm bg-neutral-900">
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
                      ? getTheme
                        ? "border-white opacity-100 ring-1 ring-white/60"
                        : "border-black opacity-100 ring-1 ring-black/60"
                      : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                  aria-label={`View thumbnail ${i + 1}`}
                >
                  <img
                    src={img}
                    alt={`${project.title} thumbnail ${i + 1}`}
                    className="w-full h-full object-cover object-top"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info panel */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <span
              className={`inline-block text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-md border mb-3 ${
                getTheme
                  ? "bg-white/10 border-white/15 text-neutral-300"
                  : "bg-neutral-100 border-neutral-200 text-neutral-700"
              }`}
            >
              {project.badge}
            </span>

            <h3
              className={`text-2xl md:text-3xl font-bold mb-1 ${
                getTheme ? "text-white" : "text-neutral-900"
              }`}
            >
              {project.title}
            </h3>

            <p
              className={`text-sm font-medium mb-4 ${
                getTheme ? "text-neutral-400" : "text-neutral-600"
              }`}
            >
              {project.subtitle}
            </p>

            <p
              className={`text-sm md:text-base leading-relaxed mb-6 ${
                getTheme ? "text-neutral-300" : "text-neutral-600"
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
                    className={`text-xs font-mono px-3 py-1 rounded-full border transition-transform duration-150 ${
                      getTheme
                        ? "bg-white/5 text-neutral-300 border-white/10"
                        : "bg-neutral-100 text-neutral-700 border-neutral-200"
                    }`}
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

            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 ${
                  getTheme
                    ? "bg-white text-black hover:bg-neutral-200"
                    : "bg-black text-white hover:bg-neutral-800"
                }`}
              >
                View Project &rarr;
              </a>
            ) : (
              <span
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs border ${
                  getTheme
                    ? "border-white/10 text-neutral-400 bg-white/5"
                    : "border-neutral-200 text-neutral-500 bg-neutral-100"
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
      badge: "IoT & Hardware",
      title: "IoT Motor & Appliance Protection System",
      subtitle: "Live Sensor Monitoring & Health Diagnostics",
      desc: "An IoT monitoring system engineered to detect anomalies in electrical motors and appliances using voltage, current, temperature, and vibration sensors. Features an interactive React dashboard with Chart.js for real-time visualization, coupled with ESP32 microcontrollers synced via Firebase.",
      techs: [
        "React.js",
        "Chart.js",
        "ESP32",
        "Python",
        "Firebase",
        "IoT Sensors",
      ],
      images: [iotImg, iotUI1, iotUI2],
      link: "https://github.com/GaikawadaPrasad/IntelliSense-web",
    },
    {
      id: 2,
      badge: "Full-Stack Web App",
      title: "Chat Karo",
      subtitle: "Real-Time One-on-One Messaging",
      desc: "A full-stack messaging web application built with the MERN stack and Socket.io. Features secure authentication, real-time message delivery, online and offline presence indicators, and clean toast notifications.",
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
      badge: "Client Project",
      title: "Sri Sri Associates",
      subtitle: "Loan Management & Employee Portal",
      desc: "A production management portal built for a financial consultancy. Helps the team manage loan leads, upload customer KYC documents, compute EMI schedules, and track daily staff attendance.",
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
      badge: "Desktop / POS",
      title: "MuscleUP Café",
      subtitle: "Point of Sale & Inventory System",
      desc: "A custom billing and inventory system for a local café and fitness store. Supports rapid checkout, physical thermal bill printing via machine integration, inventory tracking, and daily sales reports.",
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
      className={`py-24 px-6 md:px-12 scroll-mt-10 ${
        getTheme
          ? "bg-[#0a0a0a] text-white"
          : "bg-white text-neutral-900"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h2
            className={`text-3xl md:text-5xl font-extrabold tracking-tight mb-3 ${
              getTheme ? "text-white" : "text-neutral-900"
            }`}
          >
            Featured Projects
          </h2>
          <p
            className={`text-sm md:text-base ${
              getTheme ? "text-neutral-400" : "text-neutral-600"
            }`}
          >
            Selected full-stack web applications and hardware builds
          </p>
          <div className={`w-16 h-1 mt-4 rounded-full ${getTheme ? "bg-white/30" : "bg-black/30"}`} />
        </div>

        <div className="space-y-10">
          {featuredProjects.map((project, index) => (
            <FeaturedCard
              key={project.id}
              project={project}
              getTheme={getTheme}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
