import { useEffect, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = ({ getTheme }) => {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
  const cards = document.querySelectorAll(".project-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }else{
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
      desc: "Built a complete MERN application from scratch, integrated Gemini API for dynamic question generation and performance analysis, implemented secure authentication, code execution, and analytics tracking",
      techs: ["React.js", "Node.js", "MongoDB", "Gemini API", "Monaco Editor"],
      link: "https://github.com/GaikawadaPrasad/Interview-Mate-backend",
    },
    // {
    //   title: "Ai Based iot system for early failure detection and monitering of electrical appliances",
    //   desc: "An IoT-based system designed to monitor and detect early signs of failure in electrical appliances. Utilizes sensors to collect data on appliance performance and provides real-time alerts for maintenance.",
    //   techs: ["React.js" , "IOT Sensors" , ""],
    //   link: "https://github.com/GaikawadaPrasad/IntelliSense-web",
    // },
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
      techs: [
        "React.js",
        "Firebase Authentication",
        "Firebase Realtime Database",
      ],
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
      techs: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Socket.io",
        "React Hot Toast",
      ],
      link: "https://github.com/GaikawadaPrasad/chat-frontend",
    },
  ];

  return (
    <RevealOnScroll>
      <section
        id="projects"
        className={`scroll-mt-20 min-h-screen flex items-center py-20 px-6 md:px-12 animation-slide ${
          getTheme
            ? "bg-linear-to-t from-[#5b5a5a3e] to-black"
            : "bg-linear-to-t from-black-900 to-white"
        }`}
      >
        <div className="max-w-7xl w-full">
          <h2
            className={`text-4xl font-extrabold mb-10 ${
              getTheme ? "text-white" : "text-black"
            } text-left`}
          >
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-full">
            {projectsCard1.map(({ title, desc, techs, link }) => (
              <div
                key={title}
                className={` project-card ${
                  getTheme
                    ? "bg-linear-to-t from-black to-[#5b5a5a3f] border-white/20 text-white hover:border-white/40 hover:shadow-md"
                    : "bg-white/10 border-black/20 text-white hover:border-black/40 hover:shadow-md"
                } p-6 rounded-xl hover:-translate-y-1 transition-all duration-300`}
              >
                <h3
                  className={`text-xl font-bold mb-2 ${
                    getTheme ? "text-white" : "text-black"
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`${
                    getTheme ? "text-gray-300" : "text-gray-700"
                  } mb-4`}
                >
                  {desc}
                </p>
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
                    getTheme
                      ? "text-white hover:text-gray-300"
                      : "text-black hover:text-gray-600"
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
            ))}
          </div>
          <div className="">
           {showMore && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-full">
            {projectsCard2.map(({ title, desc, techs, link }) => (
              <div
                key={title}
                className={` project-card ${
                  getTheme
                    ? "bg-linear-to-t from-black to-[#5b5a5a3f] border-white/20 text-white hover:border-white/40 hover:shadow-md"
                    : "bg-white/10 border-black/20 text-white hover:border-black/40 hover:shadow-md"
                } p-6 rounded-xl hover:-translate-y-1 transition-all duration-300`}
              >
                <h3
                  className={`text-xl font-bold mb-2 ${
                    getTheme ? "text-white" : "text-black"
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`${
                    getTheme ? "text-gray-300" : "text-gray-700"
                  } mb-4`}
                >
                  {desc}
                </p>
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
                    getTheme
                      ? "text-white hover:text-gray-300"
                      : "text-black hover:text-gray-600"
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
            ))}
          </div>
           )}
          </div>
            <button
              type="submit"
              className={`w-full py-3 mt-6  px-6 rounded font-medium transition   ${
                getTheme
                  ? "bg-linear-to-t from-black to-[#5b5a5a4b] ml-2 text-white border rounded-xl border-[#5b5a5a55] hover:bg-white hover:text-black active:bg-gray-300"
                  : "bg-white text-black border rounded-xl border-black hover:bg-black hover:text-white active:bg-gray-900"
              }`}
              onClick={() => {
                if(showMore){
                  window.scrollTo({ top: document.getElementById("projects").offsetTop, behavior: "smooth" });

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
