import { motion } from "framer-motion";
import { useState } from "react";

export default function About() {
  const cards = [
    {
      title: "Our Mission",
      text: "To build reliable, innovative, and user-centric software solutions that solve real-world problems and create long-term value for clients.",
    },
    {
      title: "Our Vision",
      text: "To become a trusted technology partner by delivering impactful digital experiences and scalable solutions worldwide.",
    },
    {
      title: "Our Values",
      text: "We believe in transparency, quality, continuous learning, and building long-term relationships with our clients.",
    },
    {
      title: "Our Approach",
      text: "We follow a collaborative and agile approach to ensure timely delivery, scalability, and client satisfaction.",
    },
  ];

  /* ================= FORM STATE ================= */
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  /* ================= SUBMIT HANDLER ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: fullName,
          email: email,
          message: message,
        }),
      });

      const data = await res.json();
      alert(data.message);

      setFullName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[#0B1120] text-gray-200 min-h-screen flex items-center">
        {/* Background layer */}
        <div className="absolute inset-0 bg-[#0B1120]" />

        {/* ===== PAGE ANIMATION WRAPPER ===== */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full px-6 md:px-12 py-20 overflow-hidden"
        >
          <div className="max-w-6xl mx-auto text-center">
            {/* ===== HEADING ===== */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="
              relative inline-block
              text-4xl md:text-6xl font-bold text-white leading-tight mb-8
              after:content-['']
              after:absolute after:left-0 after:-bottom-2
              after:h-[3px] after:w-0
              after:bg-blue-500
              after:transition-all after:duration-300
              hover:after:w-full
            "
            >
              About <span className="text-blue-500">Us</span>
            </motion.h1>

            {/* ===== DESCRIPTION ===== */}
            <p
              className="
          max-w-3xl mx-auto
          leading-relaxed text-lg mb-16
          text-gray-400
          transition-all duration-300 ease-out
          hover:text-white
        "
            >
              We are a software development company focused on delivering
              high-quality, scalable, and secure digital solutions that help
              businesses grow.
            </p>

            {/* ===== MARQUEE (UNCHANGED LOGIC) ===== */}
            <div className="overflow-hidden">
              <div className="flex gap-8 w-max animate-marquee hover:[animation-play-state:paused]">
                {[...cards, ...cards].map((card, index) => (
                  <div
                    key={index}
                    className="
                      group
                      w-[280px] h-[200px]
                      bg-[#111827]
                      p-6
                      rounded-md
                      border border-transparent
                      shadow-lg shadow-black/30
                      flex flex-col justify-center
                      text-center
                      transition-all duration-300
                      hover:border-white
                    "
                  >
                    <h2
                      className="
                      relative inline-block mx-auto
                      text-lg font-semibold mb-3
                      text-gray-200
                      transition-colors duration-300
                      group-hover:text-white

                      after:content-['']
                      after:absolute after:left-0 after:-bottom-1
                      after:h-[2px] after:w-0
                      after:bg-blue-500
                      after:transition-all after:duration-300

                      group-hover:after:w-full
                    "
                    >
                      {card.title}
                    </h2>

                    <p className="text-sm text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-white">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* ===== ANIMATIONS ===== */}
        <style>{`
          /* marquee animation */
          @keyframes marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
              }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
        }
          
      `}</style>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section id="contact" className="px-6 md:px-8 py-20 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* ================= HEADING ================= */}
          <div className="flex justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="
                relative inline-block
                text-4xl md:text-6xl font-bold text-center mb-6 leading-tight

                after:content-['']
                after:absolute after:left-1/2 after:-bottom-2
                after:-translate-x-1/2
                after:h-[3px] after:w-0
                after:bg-blue-500
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              Contact <span className="text-blue-500">Us</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 max-w-2xl mx-auto mb-16"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Reach out
            to us for business inquiries, partnerships, or technical support.
          </motion.p>

          {/* ================= CONTACT CARDS ================= */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* -------- Office -------- */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow text-center animate-card-highlight"
            >
              <div className="inline-block animate-icon-shake">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 text-blue-600 mb-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 10.5a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2.25c-4.556 0-8.25 3.694-8.25 8.25
                      0 6.018 8.25 11.25 8.25 11.25s8.25-5.232
                      8.25-11.25c0-4.556-3.694-8.25-8.25-8.25z"
                  />
                </svg>
              </div>

              <h3 className="text-lg font-semibold mb-2">Our Office</h3>
              <p className="text-gray-600 text-sm">Pune, Maharashtra, India</p>
            </motion.div>

            {/* -------- Email -------- */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow text-center animate-card-highlight delay-1"
            >
              <div className="inline-block animate-icon-shake delay-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 text-blue-600 mb-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5
                      A2.25 2.25 0 012.25 17.25V6.75m19.5 0
                      A2.25 2.25 0 0019.5 4.5H4.5
                      A2.25 2.25 0 002.25 6.75m19.5 0v.243
                      a2.25 2.25 0 01-.832 1.742l-7.5 6
                      a2.25 2.25 0 01-2.836 0l-7.5-6
                      A2.25 2.25 0 012.25 6.993V6.75"
                  />
                </svg>
              </div>

              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm">contact@yourcompany.com</p>
            </motion.div>

            {/* -------- Phone -------- */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow text-center animate-card-highlight delay-2"
            >
              <div className="inline-block animate-icon-shake delay-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 text-blue-600 mb-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5
                      a2.25 2.25 0 002.25-2.25v-1.372
                      a1.125 1.125 0 00-.852-1.091l-4.423-1.106
                      a1.125 1.125 0 00-1.173.417l-.97 1.293
                      a1.125 1.125 0 01-1.21.38A12.035 12.035
                      0 015.48 9.87a1.125 1.125 0 01.38-1.21
                      l1.293-.97a1.125 1.125 0 00.417-1.173
                      L6.464 2.094a1.125 1.125 0 00-1.091-.852H4.5
                      A2.25 2.25 0 002.25 3.5v3.25z"
                  />
                </svg>
              </div>

              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm">+91 98765 43210</p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* ================= FORM ================= */}
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white p-10 rounded-xl shadow space-y-6"
            >
              <h3 className="text-xl font-semibold">Send Us a Message</h3>

              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border rounded-lg px-4 py-3"
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-lg px-4 py-3"
              />

              <textarea
                rows="4"
                placeholder="Enter Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border rounded-lg px-4 py-3"
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                {loading ? "Sending..." : "Submit Message"}
              </button>
            </motion.form>

            {/* ================= MAP ================= */}
            <motion.div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-4">Visit Our Office</h3>
              <iframe
                title="Office Location"
                src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
                className="w-full h-72 border-0"
                loading="lazy"
              ></iframe>
            </motion.div>
          </div>
        </motion.div>
        <style>{`
          /* ICON SHAKE */
          @keyframes iconShake {
            0%, 78%, 100% {
              transform: translateX(0);
            }
              80% {
              transform: translateX(-4px);
            }
            82% {
              transform: translateX(4px);
            }
            84% {
              transform: translateX(-3px);
            }
            86% {
              transform: translateX(3px);
            }
          }

          .animate-icon-shake {
            animation: iconShake 3s ease-in-out infinite;
            will-change: transform;
          }

          /* CARD BACKGROUND */
          @keyframes cardHighlight {
            0%, 75%, 100% {
              background-color: white;
            }
            78%, 86% {
              background-color: #eff6ff;
            }
          }

          .animate-card-highlight {
            animation: cardHighlight 3s ease-in-out infinite;
          }

          /* DELAYS (SYNCED) */
          .delay-1 {
            animation-delay: 0.6s;
          }

          .delay-2 {
            animation-delay: 1.2s;
          }
      `}</style>
      </section>
    </>
  );
}
