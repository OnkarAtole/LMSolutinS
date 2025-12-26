import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import reqImg from "../assets/process/requirement.jpg";
import designImg from "../assets/process/design.jpg";
import devImg from "../assets/process/development.jpg";
import deployImg from "../assets/process/deployment.jpg";

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
      transition={{ delay: index * 0.08 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl border border-gray-200
                 shadow-sm hover:shadow-md transition-all"
    >
      {/* QUESTION */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center
                   px-6 py-5 text-left"
      >
        <span className="text-gray-900 font-medium text-base md:text-lg">
          {item.q}
        </span>

        {/* ICON */}
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-blue-600 text-2xl font-light"
        >
          +
        </motion.span>
      </button>

      {/* ANSWER */}
      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 text-gray-600 leading-relaxed text-sm md:text-base">
          {item.a}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ================= DEVELOPMENT PROCESS DATA ================= */
const processVariants = {
  left: {
    hidden: { opacity: 0, x: -80, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  right: {
    hidden: { opacity: 0, x: 80, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
};

const processSteps = [
  {
    title: "Requirement Analysis",
    description:
      "We deeply understand business goals, user needs, and technical constraints before starting.",
    image:
      reqImg,
  },
  {
    title: "Design & Architecture",
    description:
      "We design scalable system architecture and intuitive UI/UX for long-term success.",
    image:
      designImg,
  },
  {
    title: "Development & Testing",
    description:
      "Agile development with continuous testing ensures quality, performance, and security.",
    image:
      devImg,
  },
  {
    title: "Deployment & Support",
    description:
      "We deploy, monitor, and support your product to ensure smooth operations and growth.",
    image:
      deployImg,
  },
];
const timelineContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4, // LEFT → RIGHT delay
    },
  },
};

const timelineItemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/* ================= HOME PAGE ================= */
export default function Home() {
  return (
    <>
      {/* ================= HERO (VIDEO BACKGROUND) ================= */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/animation.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[#0B1120]/80"></div>

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

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg">
            LM Software Solutions delivers secure, scalable, and high-performance
            software solutions using modern technologies.
          </p>
        </div>
      </section>

      {/* ================= SERVICES (ENHANCED WITH IMAGES) ================= */}
      <section className="bg-[#F8FAFC] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Core Services
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              End-to-end technology services designed to help businesses scale
              with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Web Development",
                img: "/services/web.jpg",
                desc: "High-performance websites and web applications built with modern frameworks and best UX practices.",
              },
              {
                title: "Mobile Applications",
                img: "/services/mobile.jpg",
                desc: "Intuitive Android and iOS applications designed for scalability, speed, and seamless user experience.",
              },
              {
                title: "Cloud & DevOps",
                img: "/services/cloud.jpg",
                desc: "Cloud-native architectures, CI/CD pipelines, and infrastructure automation for reliable deployments.",
              },
              {
                title: "AI & Automation",
                img: "/services/ai.jpg",
                desc: "AI-driven solutions and intelligent automation to optimize operations and decision-making.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all overflow-hidden"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-44 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS (HORIZONTAL TIMELINE – MOTION FIXED) ================= */}
<section className="bg-[#F8FAFC] py-16">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-24">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Our Development Process
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        A structured, transparent, and scalable approach to building reliable digital products.
      </p>
    </div>

    <div className="relative">

      {/* Base timeline */}
      <div className="absolute top-1/2 left-0 w-full h-[3px] bg-blue-200 rounded-full" />

      {/* Animated progress line */}
      <motion.div
        className="absolute top-1/2 left-0 h-[3px] bg-blue-600 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
      />

      {/* GRID */}
      <motion.div
        className="grid grid-cols-4 grid-rows-[auto_32px_auto] gap-x-10 relative z-10"
        variants={timelineContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {processSteps.map((step, index) => {
          const isTop = index % 2 === 0;

          return (
            <motion.div
              key={index}
              className="contents"
              variants={timelineItemVariants}
            >
              {/* CARD */}
              <div
                className={`${
                  isTop ? "row-start-1" : "row-start-3"
                } flex justify-center`}
              >
                <div className="bg-white w-xs rounded-2xl shadow-md
                                hover:shadow-xl transition-all
                                hover:ring-2 hover:ring-blue-500/30">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-32 object-cover rounded-t-2xl"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* DOT */}
              <div className="row-start-2 flex justify-center items-center">
                <div className="w-5 h-5 bg-blue-600 rounded-full shadow-lg" />
              </div>

              {/* SPACER */}
              <div className={`${isTop ? "row-start-3" : "row-start-1"}`} />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </div>
</section>

      {/* ================= FAQ ================= */ }
      {/* ================= FAQ ================= */}
<section className="bg-[#F8FAFC] py-10">
  <div className="max-w-5xl mx-auto px-6">
    
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Frequently Asked Questions
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Everything you need to know before partnering with us.
      </p>
    </div>

    {/* FAQ List */}
    <div className="space-y-5">
      {faqs.map((item, index) => (
        <FAQItem key={index} item={item} index={index} />
      ))}
    </div>
  </div>
</section>

    </>
  );
}
