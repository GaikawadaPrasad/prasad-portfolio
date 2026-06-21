import iotImg from "../../images/final_year_project1.png";
import iotUI1 from "../../images/final_year_project_UI1.png";
import iotUI2 from "../../images/final_year_project_UI2.png";
import chatImg from "../../images/Chart_Karo_UI2.png";
import chatImg2 from "../../images/Chart_Karo_UI1.png";
import sriImg from "../../images/Sri_Sri_Associates.png";
import { useEffect, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export default function FeaturedProjects({ getTheme }) {
  const FeaturedCard = ({ project, getTheme, reverse }) => {
    const [activeImg, setActiveImg] = useState(0);

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

    useEffect(() => {
      const cards = document.querySelectorAll(".featured-card");
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
        { threshold: 0.1 },
      );
      cards.forEach((card) => observer.observe(card));
      return () => observer.disconnect();
    }, []);

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
        { threshold: 0.3 },
      );
      cards.forEach((card) => observer.observe(card));
      return () => observer.disconnect();
    }, []);

    return (
      <RevealOnScroll>
        <div>
          <div
            className={`project-card group flex flex-col ${
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
            <div className="lg:w-[48%] shrink-0">
              <div className="relative rounded-xl overflow-hidden aspect-video ring-1 ring-white/10 shadow-xl">
                <img
                  src={project.images[activeImg]}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 bg-linear-to-t ${project.accent} opacity-10 pointer-events-none`}
                />
              </div>

              {project.images.length > 1 && (
                <div className="project-card flex gap-2 mt-3">
                  {project.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={`flex-1 aspect-video rounded-lg overflow-hidden ring-2 transition-all duration-200 ${
                        activeImg === i
                          ? "ring-violet-400 opacity-100"
                          : "ring-transparent opacity-50 hover:opacity-75"
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

            {/* ── Content panel ── */}
            <div className="flex flex-col justify-between flex-1">
              <div>
                {/* Badge */}
                <span
                  className={`inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-linear-to-r ${project.accent} text-white shadow`}
                >
                  {project.badge}
                </span>

                <h3
                  className={`text-2xl md:text-3xl font-extrabold leading-tight mb-1 ${getTheme ? "text-white" : "text-gray-900"}`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-sm font-semibold mb-4 bg-linear-to-r ${project.accent} bg-clip-text text-transparent`}
                >
                  {project.subtitle}
                </p>
                <p
                  className={`text-sm leading-relaxed mb-6 ${getTheme ? "text-gray-400" : "text-gray-600"}`}
                >
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
        </div>
      </RevealOnScroll>
    );
  };

  const featuredProjects = [
    {
      id: 1,
      badge: "Final Year Project",
      title: "AI-Based IoT System for Early Failure Detection",
      subtitle: "Monitoring of Electrical Appliances",
      desc: "Developed an AI-powered IoT system to monitor electrical appliances using current, voltage, temperature, and vibration sensors. Built a React.js dashboard with Chart.js for real-time monitoring, appliance health analysis, and visualization of sensor data. Integrated ESP32 with Firebase for live data collection, cloud storage, and remote monitoring. Implemented machine learning models for anomaly detection and early prediction of appliance failures to support preventive maintenance.",
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
      glowColor: "rgba(249,115,22,0.15)",
    },
    {
      id: 2,
      badge: "MERN Stack",
      title: "Chat Karo",
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
      glowColor: "rgba(139,92,246,0.15)",
    },
    {
      id: 3,
      badge: "B2B SaaS",
      title: "Sri Sri Associates",
      subtitle: "Financial Consulting Platform",
      desc: "A comprehensive, secure B2B SaaS platform custom-built for a financial consulting and loan brokerage firm. Enables agents to submit customer leads with multi-document upload support, tracks lead status throughout a disbursed-to-rejected pipeline, integrates an interactive EMI calculator, and automates employee attendance (Punch In/Out), leave management, and monthly performance target tracking.",
      techs: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Tailwind CSS",
        "JWT Auth",
        "Cloudinary API",
        "Framer Motion",
      ],
      images: [sriImg],
      link: "",
      accent: "from-blue-500 to-cyan-500",
      glowColor: "rgba(59,130,246,0.15)",
    },
  ];
  return (
    <>
        <section
      id="featured"
      className={`featured-card min-h-screen flex items-center py-20 px-6 md:px-12 animation-slide ${
        getTheme
          ? " bg-linear-to-t from-[#5b5a5a3e] via-black to-[#5b5a5a3e]"
          : "bg-linear-to-t from-black-900 to-white"
      }`}
    >
      <div id="featured" className=".featured-card featured-card scroll-mt-20 mb-20">
        <h2
          className={`text-4xl font-extrabold mb-2 ${getTheme ? "text-white" : "text-black"} text-left`}
        >
          Featured Projects
        </h2>
        <p
          className={`text-sm mb-10 ${getTheme ? "text-gray-500" : "text-gray-500"}`}
        >
          Highlighted work — click the images to browse screenshots
        </p>

        <div className=".project-card space-y-14">
          {featuredProjects.map((project, idx) => (
            <FeaturedCard
             className="project-card"
              key={project.id}
              project={project}
              getTheme={getTheme}
              reverse={idx % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
