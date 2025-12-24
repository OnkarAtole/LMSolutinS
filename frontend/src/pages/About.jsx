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
      {/* ================= ABOUT SECTION ================= */}
      <section className="relative overflow-hidden bg-[#0B1120] text-gray-200 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[#0B1120]" />

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full px-6 md:px-12 py-20 overflow-hidden"
        >
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-8"
            >
              About <span className="text-blue-500">Us</span>
            </motion.h1>

            <p className="max-w-3xl mx-auto text-lg mb-16 text-gray-400">
              We are a software development company focused on delivering
              high-quality, scalable, and secure digital solutions that help
              businesses grow.
            </p>

            <div className="overflow-hidden">
              <div className="flex gap-8 w-max animate-marquee">
                {[...cards, ...cards].map((card, index) => (
                  <div
                    key={index}
                    className="w-[280px] h-[200px] bg-[#111827] p-6 rounded-md shadow-lg flex flex-col justify-center text-center"
                  >
                    <h2 className="text-lg font-semibold mb-3 text-gray-200">
                      {card.title}
                    </h2>
                    <p className="text-sm text-gray-400">{card.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="px-6 md:px-8 py-20 bg-gray-50">
        <motion.div className="max-w-6xl mx-auto">
          <motion.h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Contact <span className="text-blue-500">Us</span>
          </motion.h2>

          <motion.p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            Reach out to us for business inquiries, partnerships, or technical support.
          </motion.p>

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
                placeholder="Your Message"
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
      </section>
    </>
  );
}
