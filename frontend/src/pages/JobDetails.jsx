import { useState } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";


/* ======== JOB DATA ======== */
const jobsData = {
  "frontend-developer": {
    title: "Frontend Developer (React)",
    description:
      "We are looking for a passionate Frontend Developer to build scalable, user-friendly web applications.",
    responsibilities: [
      "Develop responsive web applications using React",
      "Collaborate with designers and backend engineers",
      "Optimize applications for performance",
      "Write clean, maintainable code",
    ],
    qualifications: [
      "Strong knowledge of React and JavaScript",
      "Understanding of HTML, CSS, Tailwind",
      "0–2 years of experience",
      "Good problem-solving skills",
    ],
  },

  "backend-developer": {
    title: "Backend Developer (Python / Node)",
    description:
      "We are seeking a Backend Developer to design and build scalable backend systems and APIs.",
    responsibilities: [
      "Build REST APIs using Node.js or Python",
      "Work with SQL / NoSQL databases",
      "Optimize backend performance",
      "Collaborate with frontend teams",
    ],
    qualifications: [
      "Strong knowledge of Node.js or Python",
      "Experience with databases",
      "1–3 years of experience",
      "Understanding of REST APIs",
    ],
  },

  "web-development-intern": {
    title: "Web Development Intern",
    description:
      "Join our team as a Web Development Intern and gain hands-on experience on live projects.",
    responsibilities: [
      "Assist in building web applications",
      "Work closely with senior developers",
      "Fix bugs and improve UI",
      "Learn industry best practices",
    ],
    qualifications: [
      "Basic knowledge of HTML, CSS, JavaScript",
      "React knowledge is a plus",
      "Strong learning mindset",
      "Available for 3–6 months",
    ],
  },
};

/* =======================
   COMPONENT
   ======================= */
const JobDetails = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const job = jobsData[jobId];

  /* ===== FORM STATE ===== */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experience: "",
    linkedin: "",
    resume: null,
  });

const [loading, setLoading] = useState(false);
const [submitError, setSubmitError] = useState("");

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name || formData.name.length < 3)
      newErrors.name = "Full name must be at least 3 characters";

    if (!formData.email)
      newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email address";

    if (!formData.experience)
      newErrors.experience = "Please select experience";

    if (
      formData.linkedin &&
      !/^https?:\/\/(www\.)?linkedin\.com\/.+/.test(formData.linkedin)
    )
      newErrors.linkedin = "Enter a valid LinkedIn URL";

    if (!formData.resume)
      newErrors.resume = "Resume is required";
    else if (formData.resume.size > 2 * 1024 * 1024)
      newErrors.resume = "Resume must be under 2MB";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  setSubmitError("");
  setSubmitted(false);

  if (!validate()) return;

  setLoading(true);

  try {
    const formDataToSend = new FormData();

    formDataToSend.append("job_id", jobId);
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("experience", formData.experience);
    formDataToSend.append("linkedin", formData.linkedin);
    formDataToSend.append("resume", formData.resume);

    await axios.post(
      "http://127.0.0.1:8000/jobs/apply",
      formDataToSend,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      experience: "",
      linkedin: "",
      resume: null,
    });

  } catch (error) {
    setSubmitError(
      error.response?.data?.detail || "Failed to submit application"
    );
  } finally {
    setLoading(false);
  }
};



  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Job not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-14">

        {/* LEFT: JOB DETAILS */}
        <motion.div
          className="md:col-span-2 bg-[#cce1e0] p-12 rounded-2xl shadow-md hover:shadow-xl transition"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={() => navigate("/careers")}
            className="text-blue-600 mb-6 hover:underline"
          >
            ← Back to Careers
          </button>

          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            {job.title}
          </h1>

          <p className="text-gray-600 mb-10 leading-relaxed">
            {job.description}
          </p>

          <h2 className="text-xl font-semibold mb-4 text-blue-700">
            Responsibilities
          </h2>
          <ul className="list-disc pl-6 space-y-3 mb-10">
            {job.responsibilities.map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 6 }}
                className="text-gray-700"
              >
                {item}
              </motion.li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mb-4 text-blue-700">
            Qualifications
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            {job.qualifications.map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 6 }}
                className="text-gray-700"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT: APPLY FORM */}
        <motion.div
  className="bg-[#cce1e0] p-10 rounded-2xl shadow-md hover:shadow-xl sticky top-24 transition max-h-[560px] overflow-y-auto"
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
>
  <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900">
    Apply for this position
  </h2>

  <form onSubmit={handleSubmit} className="space-y-5">

    <input
      className="w-full border bg-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
      placeholder="Full Name"
      value={formData.name}
      onChange={(e) =>
        setFormData({ ...formData, name: e.target.value })
      }
    />
    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

    <input
      type="email"
      className="w-full border bg-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
      placeholder="Email"
      value={formData.email}
      onChange={(e) =>
        setFormData({ ...formData, email: e.target.value })
      }
    />
    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

    <select
      className="w-full border bg-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400"
      value={formData.experience}
      onChange={(e) =>
        setFormData({ ...formData, experience: e.target.value })
      }
    >
      <option value="">Select Experience</option>
      <option value="0-1">0–1 Year</option>
      <option value="1-3">1–3 Years</option>
      <option value="3+">3+ Years</option>
    </select>
    {errors.experience && (
      <p className="text-red-500 text-sm">{errors.experience}</p>
    )}

    <input
      className="w-full border bg-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400"
      placeholder="LinkedIn URL"
      value={formData.linkedin}
      onChange={(e) =>
        setFormData({ ...formData, linkedin: e.target.value })
      }
    />
    {errors.linkedin && (
      <p className="text-red-500 text-sm">{errors.linkedin}</p>
    )}

    <input
      type="file"
      accept=".pdf,.doc,.docx"
      className="w-full text-sm"
      onChange={(e) =>
        setFormData({ ...formData, resume: e.target.files[0] })
      }
    />
    {errors.resume && (
      <p className="text-red-500 text-sm">{errors.resume}</p>
    )}

<motion.button
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.96 }}
  type="submit"
  disabled={loading}
  className="
    w-full bg-gradient-to-r from-blue-600 to-indigo-600
    text-white py-2 rounded-lg font-medium
    shadow-md hover:shadow-xl transition
    disabled:opacity-50 disabled:cursor-not-allowed
  "
>
  {loading ? "Submitting..." : "Apply"}
</motion.button>


    {submitted && (
      <p className="text-green-600 text-sm text-center mt-3">
        Application submitted successfully!
      </p>
    )}
  </form>
</motion.div>

      </div>
    </div>
  );
};

export default JobDetails;
