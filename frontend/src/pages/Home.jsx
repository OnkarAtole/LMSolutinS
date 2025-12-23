import { useState } from "react";
import { motion } from "framer-motion";

/* ================= FAQ DATA ================= */
const faqs = [
  {
    q: "What services does LM Software Solutions provide?",
    a: "We provide web development, mobile applications, cloud & DevOps solutions, backend systems, and AI-powered automation tailored to business needs.",
  },
  {
    q: "What technologies do you specialize in?",
    a: "Our stack includes React, Next.js, FastAPI, Django, Node.js, cloud platforms, containerization, and scalable databases.",
  },
  {
    q: "Do you work with startups and enterprises?",
    a: "Yes. We collaborate with startups, growing businesses, and enterprises to deliver secure and scalable digital solutions.",
  },
  {
    q: "How do you ensure quality and security?",
    a: "We follow best practices such as code reviews, testing, secure authentication, data protection, and cloud security standards.",
  },
  {
    q: "How can we start working together?",
    a: "Simply contact us through our website. Our team will understand your requirements and propose the best solution.",
  },
];

/* ================= FAQ ITEM ================= */
function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white border border-gray-200 rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-5
                   text-left text-gray-900 font-medium hover:bg-gray-50"
      >
        {item.q}
        <span className="text-blue-600 text-xl">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="px-6 pb-5 text-gray-600 leading-relaxed">{item.a}</div>
      )}
    </motion.div>
  );
}

/* ================= HOME PAGE ================= */
export default function Home() {
  return (
    <>
      {/* ================= HERO (VIDEO BACKGROUND) ================= */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 🎥 Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="\public\animation.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0B1120]/80"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            Engineering <span className="text-blue-500">Digital Solutions</span>
            <br />
            That Scale With Your Business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg"
          >
            LM Software Solutions delivers secure, scalable, and
            high-performance software solutions using modern technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/about"
              className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700
                         text-white font-medium transition-all shadow-lg shadow-blue-600/30"
            >
              Get Started
            </a>
            <a
              href="/why-choose-us"
              className="px-8 py-4 rounded-full border border-blue-500/40
                         text-blue-400 hover:bg-blue-500/10 transition-all"
            >
              Why Choose Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES (LIGHT SECTION) ================= */}
      <section className="bg-[#F8FAFC] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Core Services
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              End-to-end technology services designed for growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Web Development",
              "Mobile Applications",
              "Cloud & DevOps",
              "AI & Automation",
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm
                           hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Secure, scalable, and future-ready solutions.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS (LIGHT – UNIFORM & DYNAMIC) ================= */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">
            Our Development Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Requirement Analysis",
              "Design & Architecture",
              "Development & Testing",
              "Deployment & Support",
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 text-3xl font-bold mb-4">
                  {i + 1}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {step}
                </h4>
                <p className="text-gray-600 text-sm">
                  Structured, transparent, and efficient execution.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ (LIGHT) ================= */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-gray-600">
              Everything you need to know before working with us.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((item, index) => (
              <FAQItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA (DARK) ================= */}
      <section className="bg-[#F8FAFC] py-28 text-center text-gray-700">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Ready to Build Something Powerful?
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Let’s turn your idea into a scalable digital product.
        </p>

        <a
          href="/about"
          className="inline-block mt-8 px-10 py-4 rounded-full bg-blue-600
                     hover:bg-blue-700 text-white font-medium transition-all
                     shadow-lg shadow-blue-600/30"
        >
          Contact Us
        </a>
      </section>
    </>
  );
}
