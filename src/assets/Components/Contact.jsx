import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { RevealOnScroll } from "../RevealOnScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

export const Contact = ({ getTheme }) => {
  const [formData, setFormData] = useState({
    user_name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const service_id = "service_kx1qjdj";
  const template_id = "template_oziconp";
  const public_key = "aORidiTZGt5beCvS_";

  useEffect(() => {
    emailjs.init(public_key);
  }, [public_key]);

  useEffect(() => {
    const cards = document.querySelectorAll(".contact-card");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    emailjs
      .send(service_id, template_id, {
        name: formData.user_name,
        title: formData.message,
        email: formData.email,
      })
      .then(
        () => {
          setIsLoading(false);
          setIsSubmitted(true);
          setFormData({ user_name: "", email: "", message: "" });
        },
        () => {
          setIsLoading(false);
          setError("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <RevealOnScroll>
      <section
        id="contact"
        className={`py-24 px-6 md:px-12 scroll-mt-10 ${
          getTheme ? "bg-black text-white" : "bg-neutral-50 text-neutral-900"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2
              className={`text-3xl md:text-5xl font-extrabold mb-3 tracking-tight ${
                getTheme ? "text-white" : "text-neutral-900"
              }`}
            >
              Get In Touch
            </h2>
            <p
              className={`text-sm md:text-base ${
                getTheme ? "text-neutral-400" : "text-neutral-600"
              }`}
            >
              Have a question or want to discuss a project? Send a message directly.
            </p>
            <div className={`w-16 h-1 mt-4 mx-auto rounded-full ${getTheme ? "bg-white/30" : "bg-black/30"}`} />
          </div>

          <div
            className={`contact-card rounded-3xl p-8 md:p-10 border transition-all duration-300 ${
              getTheme
                ? "bg-white/5 border-white/10 backdrop-blur-md"
                : "bg-white border-neutral-200 shadow-sm"
            }`}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider mb-2 opacity-80">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  value={formData.user_name}
                  onChange={(e) =>
                    setFormData({ ...formData, user_name: e.target.value })
                  }
                  required
                  placeholder="Your Name"
                  className={`w-full border rounded-xl px-4 py-3 text-sm transition focus:outline-none ${
                    getTheme
                      ? "bg-white/5 text-white placeholder-neutral-500 border-white/15 focus:border-white/50 focus:bg-white/10"
                      : "bg-neutral-50 text-neutral-900 placeholder-neutral-400 border-neutral-300 focus:border-black"
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider mb-2 opacity-80">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  placeholder="your.email@example.com"
                  className={`w-full border rounded-xl px-4 py-3 text-sm transition focus:outline-none ${
                    getTheme
                      ? "bg-white/5 text-white placeholder-neutral-500 border-white/15 focus:border-white/50 focus:bg-white/10"
                      : "bg-neutral-50 text-neutral-900 placeholder-neutral-400 border-neutral-300 focus:border-black"
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider mb-2 opacity-80">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  placeholder="Your message..."
                  rows={5}
                  className={`w-full border rounded-xl px-4 py-3 text-sm transition focus:outline-none ${
                    getTheme
                      ? "bg-white/5 text-white placeholder-neutral-500 border-white/15 focus:border-white/50 focus:bg-white/10"
                      : "bg-neutral-50 text-neutral-900 placeholder-neutral-400 border-neutral-300 focus:border-black"
                  }`}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer disabled:opacity-50 ${
                  getTheme
                    ? "bg-white text-black hover:bg-neutral-200"
                    : "bg-black text-white hover:bg-neutral-800"
                }`}
              >
                {isLoading ? "Sending Message..." : "Send Message"}
              </button>

              {error && (
                <p className="text-red-400 text-sm text-center mt-3 font-mono">{error}</p>
              )}
              {isSubmitted && (
                <p className="text-emerald-400 text-sm text-center mt-3 font-mono">
                  Message sent successfully. I will get back to you soon.
                </p>
              )}
            </form>

            <div className="mt-12 pt-8 border-t border-white/10 text-center">
              <h3 className="text-sm font-mono uppercase tracking-wider mb-6 text-neutral-400">
                Connect
              </h3>

              <div className="flex justify-center items-center gap-6">
                <a
                  href="https://www.linkedin.com/in/prasadgaikawada/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className={`p-3.5 rounded-full border transition-all duration-300 hover:scale-110 ${
                    getTheme
                      ? "bg-white/5 border-white/10 text-white hover:bg-white/15 hover:border-white/30"
                      : "bg-neutral-100 border-neutral-200 text-neutral-800 hover:bg-neutral-200"
                  }`}
                >
                  <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
                </a>

                <a
                  href="https://github.com/GaikawadaPrasad"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className={`p-3.5 rounded-full border transition-all duration-300 hover:scale-110 ${
                    getTheme
                      ? "bg-white/5 border-white/10 text-white hover:bg-white/15 hover:border-white/30"
                      : "bg-neutral-100 border-neutral-200 text-neutral-800 hover:bg-neutral-200"
                  }`}
                >
                  <FontAwesomeIcon icon={faGithub} className="text-lg" />
                </a>

                <a
                  href="https://www.instagram.com/princeprasad_1/profilecard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className={`p-3.5 rounded-full border transition-all duration-300 hover:scale-110 ${
                    getTheme
                      ? "bg-white/5 border-white/10 text-white hover:bg-white/15 hover:border-white/30"
                      : "bg-neutral-100 border-neutral-200 text-neutral-800 hover:bg-neutral-200"
                  }`}
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-lg" />
                </a>

                <a
                  href="https://drive.google.com/file/d/1GiIQHGwUThnbyUcdNp-A2lFJq9RnSskq/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Resume Document"
                  className={`p-3.5 rounded-full border transition-all duration-300 hover:scale-110 ${
                    getTheme
                      ? "bg-white/5 border-white/10 text-white hover:bg-white/15 hover:border-white/30"
                      : "bg-neutral-100 border-neutral-200 text-neutral-800 hover:bg-neutral-200"
                  }`}
                >
                  <FontAwesomeIcon icon={faFileAlt} className="text-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};
