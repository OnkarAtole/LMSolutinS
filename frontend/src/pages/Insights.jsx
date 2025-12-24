// import { motion } from "framer-motion";
// import BlogCard from "../components/insights/BlogCard";
// import EventCard from "../components/insights/EventCard";
// import TrendCard from "../components/insights/TrendCard";

// const blogs = [
//   {
//     title: "Clean Architecture in Modern Web Apps",
//     description: "How we design scalable frontend and backend systems.",
//     category: "Engineering",
//     date: "Aug 2025",
//   },
//   {
//     title: "Choosing the Right Backend for Startups",
//     description: "FastAPI vs Node.js vs Django.",
//     category: "Backend",
//     date: "Jul 2025",
//   },
// ];

// const events = [
//   {
//     name: "Cloud & DevOps Fundamentals",
//     type: "Webinar",
//     date: "Sep 2025",
//     info: "Intro to cloud & CI/CD pipelines.",
//   },
// ];

// const trends = [
//   "React",
//   "FastAPI",
//   "AWS",
//   "DevOps",
//   "AI",
// ];

// export default function InsightsPage() {
//   return (
//     <div className="bg-gray-50">

//       {/* HEADER */}
//       <section className="pt-28 pb-20 text-center">
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-5xl font-bold"
//         >
//           Insights & Knowledge
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1, duration: 0.6 }}
//           className="mt-4 text-slate-600 max-w-3xl mx-auto"
//         >
//           Blogs, events, and technology trends from our team.
//         </motion.p>
//       </section>

//       {/* BLOGS */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl font-semibold mb-8">Blogs</h2>

//           <div className="grid md:grid-cols-3 gap-6">
//             {blogs.map((blog, i) => (
//               <motion.div
//                 key={blog.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1 }}
//               >
//                 <BlogCard {...blog} />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* EVENTS */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl font-semibold mb-8">Events</h2>

//           <div className="grid md:grid-cols-2 gap-6">
//             {events.map((event, i) => (
//               <motion.div
//                 key={event.name}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1 }}
//               >
//                 <EventCard {...event} />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* TRENDS */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl font-semibold mb-8">
//             Technology Trends
//           </h2>

//           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {trends.map((trend, i) => (
//               <motion.div
//                 key={trend}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.05 }}
//               >
//                 <TrendCard title={trend} />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }



import { motion } from "framer-motion";
import BlogCard from "../components/insights/BlogCard";
import EventCard from "../components/insights/EventCard";
import TrendCard from "../components/insights/TrendCard";

// const blogs = [
//   {
//     slug: "clean-architecture-modern-web",
//     title: "Clean Architecture in Modern Web Apps",
//     description: "How we design scalable frontend and backend systems.",
//     category: "Engineering",
//     date: "Aug 2025",
//     image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
//   },
//   {
//     slug: "choosing-right-backend-startups",
//     title: "Choosing the Right Backend for Startups",
//     description: "FastAPI vs Node.js vs Django.",
//     category: "Backend",
//     date: "Jul 2025",
//     image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
//   },
// ];

const blogs = [
  {
    slug: "clean-architecture-modern-web",
    title: "Clean Architecture in Modern Web Apps",
    description: "How we design scalable frontend and backend systems.",
    category: "Engineering",
    date: "Aug 2025",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },
  {
    slug: "choosing-right-backend-startups",
    title: "Choosing the Right Backend for Startups",
    description: "FastAPI vs Node.js vs Django.",
    category: "Backend",
    date: "Jul 2025",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    slug: "building-platform-fastapi-react",
    title: "Building a Scalable Platform with FastAPI & React",
    description:
      "Architecture, tech choices, and lessons learned while designing a modern platform.",
    category: "Full Stack",
    date: "Sep 2025",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  },
];


const events = [
  {
    name: "Cloud & DevOps Fundamentals",
    type: "Webinar",
    date: "Sep 2025",
    info: "Intro to cloud & CI/CD pipelines.",
  },
];

const trends = ["React", "FastAPI", "AWS", "DevOps", "AI","DevOps"];

export default function InsightsPage() {
  return (
    <div className="bg-[#0B1020] text-white">

      {/* HEADER (MATCHES HERO STYLE) */}
      <section className="pt-32 pb-24 text-center bg-gradient-to-b from-[#0B1020] to-[#0F172A]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold"
        >
          Insights &{" "}
          <span className="text-blue-500"> Knowledge</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-6 text-slate-400 max-w-3xl mx-auto text-lg"
        >
          Blogs, events, and technology trends from our engineering team.
        </motion.p>
      </section>

      {/* BLOGS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-10">
            Blogs
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((blog, i) => (
              <motion.div
                key={blog.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <BlogCard blog={blog} dark />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS (LIGHT CONTRAST STRIP) */}
      <section className="py-20 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-10">
            Events
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, i) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <EventCard {...event} dark />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRENDS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-10">
            Technology Trends
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {trends.map((trend, i) => (
              <motion.div
                key={trend}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <TrendCard title={trend} dark />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
