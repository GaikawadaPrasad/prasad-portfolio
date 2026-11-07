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
  const template_id_reply = "template_oziconp";
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

    emailjs.send(service_id, template_id_reply, {
      name: formData.user_name,
      title: formData.message,
      email: formData.email,
    });

    emailjs
      .send(service_id, template_id, {
        name: formData.user_name,
        title: formData.message,
        email: formData.email,
      })
      .then(
        (res) => {
          setIsLoading(false);
          setIsSubmitted(true);
          setFormData({ user_name: "", email: "", message: "" });
        },
        (err) => {
          setIsLoading(false);
          setError(`Something went wrong. Please try again later.`);
        }
      );
  };

  return (
    <RevealOnScroll>
      <section
        id="contact"
        className={`py-24 px-6 md:px-12 scroll-mt-10 ${
          getTheme ? "bg-black text-white" : "bg-slate-50 text-slate-900"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2
              className={`text-3xl md:text-5xl font-extrabold mb-3 tracking-tight ${
                getTheme ? "text-white" : "text-slate-900"
              }`}
            >
              Get In Touch
            </h2>
            <p
              className={`text-sm md:text-base ${
                getTheme ? "text-gray-400" : "text-slate-600"
              }`}
            >
              Have a project in mind or looking to hire? Feel free to reach out anytime!
            </p>
            <div className="w-20 h-1.5 bg-violet-600 rounded-full mx-auto mt-4" />
          </div>

          <div
            className={`contact-card rounded-3xl p-8 md:p-10 border transition-all duration-300 ${
              getTheme
                ? "bg-white/5 border-white/10 backdrop-blur-md"
                : "bg-white border-slate-200 shadow-sm"
            }`}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2 opacity-80">
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  value={formData.user_name}
                  onChange={(e) =>
                    setFormData({ ...formData, user_name: e.target.value })
                  }
                  required
                  placeholder="John Doe"
                  className={`w-full border rounded-xl px-4 py-3 text-sm transition focus:outline-none focus:ring-2 focus:ring-violet-500 ${
                    getTheme
                      ? "bg-white/5 text-white placeholder-gray-500 border-white/15"
                      : "bg-slate-50 text-slate-900 placeholder-slate-400 border-slate-300"
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2 opacity-80">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  placeholder="john@example.com"
                  className={`w-full border rounded-xl px-4 py-3 text-sm transition focus:outline-none focus:ring-2 focus:ring-violet-500 ${
                    getTheme
                      ? "bg-white/5 text-white placeholder-gray-500 border-white/15"
                      : "bg-slate-50 text-slate-900 placeholder-slate-400 border-slate-300"
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2 opacity-80">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  placeholder="Hi Prasad, I'd like to discuss a project..."
                  rows={5}
                  className={`w-full border rounded-xl px-4 py-3 text-sm transition focus:outline-none focus:ring-2 focus:ring-violet-500 ${
                    getTheme
                      ? "bg-white/5 text-white placeholder-gray-500 border-white/15"
                      : "bg-slate-50 text-slate-900 placeholder-slate-400 border-slate-300"
                  }`}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 shadow-md transition-all duration-300 hover:scale-[1.01] hover:shadow-lg disabled:opacity-50 cursor-pointer"
              >
                {isLoading ? "Sending Message..." : "Send Message 🚀"}
              </button>

              {error && (
                <p className="text-red-400 text-sm text-center mt-3">{error}</p>
              )}
              {isSubmitted && (
                <p className="text-emerald-400 text-sm text-center mt-3 font-medium">
                  ✓ Message sent successfully! I will reply to you shortly.
                </p>
              )}
            </form>

            <div className="mt-12 pt-8 border-t border-white/10 text-center">
              <h3 className="text-lg font-bold mb-6">Connect With Me</h3>

              <div className="flex justify-center items-center gap-6">
                <a
                  href="https://www.linkedin.com/in/prasadgaikawada/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className={`p-3.5 rounded-full border transition-all duration-300 hover:scale-110 ${
                    getTheme
                      ? "bg-white/5 border-white/10 text-white hover:bg-white/15 hover:border-violet-500/50"
                      : "bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200"
                  }`}
                >
                  <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
                </a>

                <a
                  href="https://github.com/GaikawadaPrasad"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className={`p-3.5 rounded-full border transition-all duration-300 hover:scale-110 ${
                    getTheme
                      ? "bg-white/5 border-white/10 text-white hover:bg-white/15 hover:border-violet-500/50"
                      : "bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200"
                  }`}
                >
                  <FontAwesomeIcon icon={faGithub} className="text-xl" />
                </a>

                <a
                  href="https://www.instagram.com/princeprasad_1/profilecard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className={`p-3.5 rounded-full border transition-all duration-300 hover:scale-110 ${
                    getTheme
                      ? "bg-white/5 border-white/10 text-white hover:bg-white/15 hover:border-violet-500/50"
                      : "bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200"
                  }`}
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-xl" />
                </a>

                <a
                  href="https://drive.google.com/file/d/1GiIQHGwUThnbyUcdNp-A2lFJq9RnSskq/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Resume Document"
                  className={`p-3.5 rounded-full border transition-all duration-300 hover:scale-110 ${
                    getTheme
                      ? "bg-white/5 border-white/10 text-white hover:bg-white/15 hover:border-violet-500/50"
                      : "bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200"
                  }`}
                >
                  <FontAwesomeIcon icon={faFileAlt} className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};
