import { motion } from "framer-motion";

export default function ServiceCard({ title, desc, icon }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="bg-[#111827] border border-blue-500/10 rounded-2xl
                 p-6 h-full hover:border-cyan-400/40 transition-all"
    >
      <div className="text-3xl mb-4">{icon}</div>

      <h3 className="text-lg font-semibold text-white mb-2">
        {title}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}
