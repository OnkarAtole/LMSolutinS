import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

/* =======================
   WHY WORK WITH US DATA
   ======================= */
const whyWorkWithUs = [
  {
    title: "Hands-On Product Development",
    description: [
      "Work on live, real-world projects used by actual clients.",
      "Be involved in the complete development lifecycle.",
      "Gain practical exposure beyond tutorials and mock tasks.",
    ],
  },
  {
    title: "Close-Knit Team & Direct Mentorship",
    description: [
      "Collaborate within a small and focused development team.",
      "Learn directly from experienced developers and leads.",
      "Receive continuous guidance and constructive feedback.",
    ],
  },
  {
    title: "Modern Tech Stack & Best Practices",
    description: [
      "Work with modern frameworks and scalable architectures.",
      "Follow industry-standard coding and review practices.",
      "Build clean, future-ready software solutions.",
    ],
  },
  {
    title: "Fast Growth Through Real Responsibility",
    description: [
      "Take ownership of meaningful features early.",
      "Your contributions directly influence success.",
      "Growth is driven by skill and initiative.",
    ],
  },
  {
    title: "Transparent & Learning-Driven Culture",
    description: [
      "Open communication and clarity at every level.",
      "Mistakes are treated as learning opportunities.",
      "Continuous improvement is encouraged.",
    ],
  },
  {
    title: "Internship to Full-Time Career Path",
    description: [
      "Clear conversion path to full-time roles.",
      "Interns are treated as real contributors.",
      "High performers grow long-term with us.",
    ],
  },
];

/* =======================
   ANIMATION VARIANTS
   ======================= */
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

/* =======================
   COMPONENT
   ======================= */
const Careers = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    domain: "",
    experience_level: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      alert(data.message || "Thanks! We'll reach out soon.");

      // Reset form
      setFormData({
        full_name: "",
        email: "",
        domain: "",
        experience_level: "",
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#0B1220] via-[#0E1628] to-[#0B1220] text-white">
{/* HERO */}
<motion.section
  className="
    relative
    min-h-screen
    w-full
    flex
    items-center
    justify-center
    text-center
    overflow-hidden
  "
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9 }}
>
  {/* BACKGROUND IMAGE */}
  <div
    className="
      absolute inset-0
      bg-[url('/careerimage.jpg')]
      bg-cover bg-center bg-no-repeat
      scale-110
      blur-[2px]
      opacity-60
    "
  />

  {/* COLOR + DARK OVERLAY */}
  <div
    className="
      absolute inset-0
      bg-gradient-to-b
      from-[#0B1220]/80
      via-[#0E1628]/75
      to-[#0B1220]/90
    "
  />

  {/* CONTENT */}
  <div className="relative z-10 max-w-6xl mx-auto px-6">
    <h1
      className="
        text-4xl md:text-6xl
        font-extrabold
        leading-tight
        text-white
        tracking-tight
        drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]
      "
    >
      Build Your Career With{" "}
      <span className="text-blue-400 relative">
        LM Software
        <span
          className="
            absolute left-0 -bottom-2
            w-full h-[3px]
            bg-blue-400/70
            rounded-full
          "
        />
      </span>
    </h1>

    <p
      className="
        mt-6
        text-lg md:text-xl
        text-gray-200
        max-w-2xl mx-auto
        leading-relaxed
        drop-shadow
      "
    >
      Work on scalable digital solutions, grow your skills, and be part of a
      team that values ownership, learning, and innovation.
    </p>
  </div>
</motion.section>

      {/* WHY WORK WITH US */}
      <motion.section
        className="max-w-6xl mx-auto px-6 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* SECTION HEADER WITH HOVER EFFECT */}
        <div className="flex justify-center mb-14">
          <motion.h2
            className="relative inline-block text-3xl font-semibold text-center cursor-pointer"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <span className="relative z-10 text-white">
              Why Work With Us
            </span>

            {/* Animated underline */}
            <motion.span
              variants={{
                rest: { width: 0 },
                hover: { width: "100%" },
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute left-0 -bottom-2 h-[3px] bg-gradient-to-r from-blue-600 to-blue-400"
            />

            {/* Soft glow */}
            <motion.span
              variants={{
                rest: { opacity: 0 },
                hover: { opacity: 1 },
              }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 blur-xl bg-blue-500/20 -z-10"
            />
          </motion.h2>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {whyWorkWithUs.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="
          bg-white text-black rounded-xl p-6
          border border-black/10
          transition-all duration-300
          hover:border-blue-700
          hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]
          relative overflow-hidden
        "
            >
              {/* Accent bar */}
              <span className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-600 to-blue-400" />

              <h3 className="text-lg font-semibold mb-4">
                {item.title}
              </h3>

              <ul className="space-y-2">
                {item.description.map((line, i) => (
                  <li
                    key={i}
                    className="text-sm italic leading-relaxed text-gray-800"
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>


      {/* OPEN POSITIONS */}
      <motion.section
        className="max-w-6xl mx-auto px-6 py-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* SECTION HEADER */}
        <div className="flex justify-center mb-6">
          <motion.h2
            className="relative inline-block text-3xl font-semibold text-center cursor-default"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span className="relative z-10">Open Positions</span>

            {/* Animated underline */}
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "100%", opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="
          absolute left-1/2 -bottom-3 h-[3px]
          bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600
          -translate-x-1/2 rounded-full
        "
            />

            {/* Soft glow */}
            <span
              className="
          absolute inset-0 blur-xl bg-blue-600/25
          opacity-0 hover:opacity-100 transition-opacity duration-300
          -z-10
        "
            />
          </motion.h2>
        </div>

        {/* JOB OPPORTUNITY PARAGRAPH */}
        <motion.p
          className="text-center text-gray-400 max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          We are always looking for passionate individuals who are eager to learn,
          take ownership, and contribute to real-world digital solutions. Explore
          our current opportunities and find a role where your skills can grow
          and make a meaningful impact.
        </motion.p>

        {/* JOB LIST */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {[
            {
              title: "Frontend Developer (React)",
              info: "Pune / Hybrid | 0–2 Years",
              slug: "frontend-developer",
            },
            {
              title: "Backend Developer (Python / Node)",
              info: "Remote | 1–3 Years",
              slug: "backend-developer",
            },
            {
              title: "Web Development Intern",
              info: "Pune | 3–6 Months",
              slug: "web-development-intern",
            },
          ].map((job, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="
          relative overflow-hidden
          flex justify-between items-center
          bg-gradient-to-br from-white/5 to-white/0
          border border-white/10
          rounded-xl p-6
          transition-all duration-300
          hover:border-blue-600
          hover:shadow-[0_15px_40px_rgba(59,130,246,0.25)]
        "
            >
              {/* LEFT ACCENT BAR */}
              <span className="
          absolute left-0 top-0 h-full w-1
          bg-gradient-to-b from-blue-600 to-blue-400
          opacity-0 group-hover:opacity-100
        " />

              <div>
                <h3 className="text-lg font-semibold text-white">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  {job.info}
                </p>
              </div>

              {/* APPLY BUTTON */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(`/careers/${job.slug}`)}
                className="
            px-6 py-2 rounded-lg
            bg-blue-600 text-white font-medium
            shadow-md shadow-blue-600/30
            hover:bg-blue-700
            transition
          "
              >
                Apply
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ROLE NOT AVAILABLE / NOTIFY SECTION */}
      <motion.section
        className="max-w-6xl mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="
      relative overflow-hidden
      bg-gradient-to-br from-white/5 to-white/0
      border border-white/10
      rounded-2xl
      p-10
      text-center
      hover:border-blue-600/60
      hover:shadow-[0_0_50px_rgba(59,130,246,0.25)]
      transition-all duration-500
    "
        >
          {/* Animated background glow */}
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-blue-600/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />

          {/* Heading */}
          <motion.h2
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="text-3xl font-semibold mb-4 relative z-10"
          >
            Didn’t Find a Role That Fits You?
          </motion.h2>

          {/* Description */}
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 relative z-10">
            We’re always open to connecting with skilled and motivated professionals.
            Share your interests and experience, and we’ll reach out when a role
            matching your profile becomes available.
          </p>

          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6 text-left relative z-10"
            onSubmit={handleFormSubmit}
          >
            {/* Full Name */}
            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleInputChange}
                required
                placeholder="Your full name"
                className="
            w-full px-4 py-3 rounded-lg
            bg-white text-black
            border border-transparent
            focus:border-blue-600
            focus:ring-2 focus:ring-blue-600/30
            transition-all duration-300
          "
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="you@example.com"
                className="
            w-full px-4 py-3 rounded-lg
            bg-white text-black
            border border-transparent
            focus:border-blue-600
            focus:ring-2 focus:ring-blue-600/30
            transition-all duration-300
          "
              />
            </div>

            {/* Domain */}
            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Preferred Domain
              </label>
              <select
                name="domain"
                value={formData.domain}
                onChange={handleInputChange}
                required
                className="
            w-full px-4 py-3 rounded-lg
            bg-white text-black
            border border-transparent
            focus:border-blue-600
            focus:ring-2 focus:ring-blue-600/30
            transition-all duration-300
          "
              >
                <option value="">Select domain</option>
                <option>Frontend Development</option>
                <option>Backend Development</option>
                <option>Full Stack Development</option>
                <option>Mobile App Development</option>
                <option>UI / UX Design</option>
                <option>DevOps / Cloud</option>
                <option>Data / AI / ML</option>
                <option>Internship / Fresher</option>
                <option>Other</option>
              </select>
            </div>

            {/* Experience */}
            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Experience Level
              </label>
              <select
                name="experience_level"
                value={formData.experience_level}
                onChange={handleInputChange}
                required
                className="
            w-full px-4 py-3 rounded-lg
            bg-white text-black
            border border-transparent
            focus:border-blue-600
            focus:ring-2 focus:ring-blue-600/30
            transition-all duration-300
          "
              >
                <option value="">Select experience</option>
                <option>Fresher</option>
                <option>0–1 Year</option>
                <option>1–3 Years</option>
                <option>3–5 Years</option>
                <option>5+ Years</option>
              </select>
            </div>

            {/* Submit */}
            <div className="md:col-span-2 text-center mt-6">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className="
            px-12 py-4
            bg-blue-600 text-white
            rounded-xl font-medium
            shadow-lg shadow-blue-600/30
            hover:bg-blue-700
            transition-all duration-300
            disabled:opacity-50 disabled:cursor-not-allowed
          "
              >
                {loading ? "Submitting..." : "Notify Me When a Role Opens"}
              </motion.button>
            </div>
          </motion.form>
        </motion.div>
      </motion.section>


    </div>
  );
};

export default Careers;