import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="text-gray-800">
      {/* ================= ABOUT US ================= */}
      <section className="px-6 md:px-8 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h1 className="text-3xl font-bold mb-6">About Us</h1>

          {/* Intro */}
          <p className="text-gray-600 leading-relaxed max-w-4xl mb-12">
            We are a Pune-based software company established in 2024, delivering
            scalable, secure, and high-performance digital solutions for
            businesses of all sizes. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our
                mission is to empower organizations through innovative
                technology solutions that drive growth, efficiency, and
                long-term success.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-xl font-semibold mb-3">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. We
                envision becoming a trusted global technology partner known for
                quality, integrity, and innovation.
              </p>
            </div>
          </div>

          {/* What We Do */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">What We Do</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 border rounded-xl">
                <h3 className="font-semibold mb-2">
                  Custom Software Development
                </h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>

              <div className="p-6 border rounded-xl">
                <h3 className="font-semibold mb-2">
                  Web & Mobile Applications
                </h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>

              <div className="p-6 border rounded-xl">
                <h3 className="font-semibold mb-2">Cloud & DevOps Solutions</h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT US ================= */}
      <section className="px-6 md:px-8 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Reach out
            to us for business inquiries, partnerships, or technical support.
          </p>

          {/* ---------- Contact Cards ---------- */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Location */}
            <div className="bg-white p-8 rounded-xl shadow text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 mx-auto mb-4 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 10.5a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2.25c-4.556 0-8.25 3.694-8.25 8.25 0 6.018 8.25 11.25 8.25 11.25s8.25-5.232 8.25-11.25c0-4.556-3.694-8.25-8.25-8.25z"
                />
              </svg>
              <h3 className="text-lg font-semibold mb-2">Our Office</h3>
              <p className="text-gray-600 text-sm">
                Pune, Maharashtra, India <br />
                Lorem ipsum dolor sit amet
              </p>
            </div>

            {/* Email */}
            <div className="bg-white p-8 rounded-xl shadow text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 mx-auto mb-4 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5A2.25 2.25 0 002.25 6.75m19.5 0v.243a2.25 2.25 0 01-.832 1.742l-7.5 6a2.25 2.25 0 01-2.836 0l-7.5-6A2.25 2.25 0 012.25 6.993V6.75"
                />
              </svg>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm">
                contact@yourcompany.com <br />
                support@yourcompany.com
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white p-8 rounded-xl shadow text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 mx-auto mb-4 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-1.372a1.125 1.125 0 00-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a1.125 1.125 0 01-1.21.38A12.035 12.035 0 015.48 9.87a1.125 1.125 0 01.38-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L6.464 2.094a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 3.5v3.25z"
                />
              </svg>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm">
                +91 98765 43210 <br />
                Mon – Fri, 9:30 AM – 6:30 PM
              </p>
            </div>
          </div>

          {/* ---------- Form + Map ---------- */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <form className="bg-white p-10 rounded-xl shadow space-y-6">
              <h3 className="text-xl font-semibold">Send Us a Message</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Submit Message
              </button>
            </form>

            {/* Map */}
            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-4">Visit Our Office</h3>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our
                team would be happy to welcome you.
              </p>

              <div className="w-full h-72 rounded-lg overflow-hidden">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section className="bg-[#0B1120] text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* ================= ABOUT HERO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About <span className="text-blue-500">LM Software Solutions</span>
          </h1>
          <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
            We are a technology-driven software company focused on building scalable,
            secure, and future-ready digital solutions for startups and enterprises.
          </p>
        </motion.div>

        {/* ================= STORY ================= */}
        <div className="grid md:grid-cols-2 gap-14 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold text-white mb-4">
              Our Story
            </h2>
            <p className="text-gray-400 leading-relaxed">
              LM Software Solutions was founded with a clear vision — to help
              businesses leverage modern technology to solve real-world problems.
              We combine strong engineering practices with business understanding
              to deliver solutions that truly make an impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#111827] rounded-2xl p-8 border border-blue-500/10"
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              What We Do
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>✔ Web & Mobile Application Development</li>
              <li>✔ Cloud & DevOps Engineering</li>
              <li>✔ API & Backend Systems</li>
              <li>✔ AI & Automation Solutions</li>
            </ul>
          </motion.div>
        </div>

        {/* ================= MISSION / VISION ================= */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {[
            {
              title: "Our Mission",
              text: "To deliver reliable, scalable, and high-quality software solutions using modern technologies.",
            },
            {
              title: "Our Vision",
              text: "To become a trusted technology partner for businesses worldwide.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#111827] rounded-2xl p-8 border border-blue-500/10
                         hover:border-cyan-400/40 transition-all"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ================= CONTACT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#111827] rounded-3xl p-10 border border-blue-500/10"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Let’s Build Something Together
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or want to discuss your idea?
              Reach out — we’d love to hear from you.
            </p>
          </div>

          <form className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-[#0B1120] border border-gray-700 rounded-xl px-5 py-3
                         text-gray-200 focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-[#0B1120] border border-gray-700 rounded-xl px-5 py-3
                         text-gray-200 focus:outline-none focus:border-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="md:col-span-2 bg-[#0B1120] border border-gray-700 rounded-xl px-5 py-3
                         text-gray-200 focus:outline-none focus:border-blue-500"
            ></textarea>

            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-700
                           text-white font-medium transition-all
                           shadow-lg shadow-blue-600/30"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
