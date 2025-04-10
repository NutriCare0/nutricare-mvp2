"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function AdaptiveIntelligence() {
  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-start min-h-screen p-8 bg-gradient-to-b from-gray-50 to-white text-gray-900 overflow-hidden relative"
    >
      {/* Decorative Animated Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-200 via-transparent to-transparent pointer-events-none"
      />

      {/* Subtle Animated Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.07, scale: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-30 pointer-events-none"
      />

      {/* Hero Section */}
      <motion.h1
        variants={itemVariants}
        className="text-5xl md:text-7xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500"
      >
        Your health. Your pace. Your NutriCare.
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-xl text-gray-600 text-center max-w-2xl mb-16"
      >
        No matter your condition, NutriCare listens, learns and adjusts.
      </motion.p>

      {/* Adaptability Blocks */}
      <motion.section
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-6xl w-full"
      >
        {["🌡️ Chronic conditions?", "❤️ Post-surgery?", "🧘 Feeling great?"].map((title, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="p-6 bg-white rounded-3xl shadow-xl text-center hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 hover:bg-purple-50"
          >
            <h3 className="text-2xl font-semibold mb-3 text-purple-700">{title}</h3>
            <p className="text-gray-600 text-lg">
              {[
                "No problem. We adapt your plan to support your needs.",
                "We follow your pace for a safe and healthy recovery.",
                "We elevate your progress and unlock new milestones."
              ][idx]}
            </p>
          </motion.div>
        ))}
      </motion.section>

      {/* Adaptive Simulation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
        transition={{ delay: 0.4 }}
        className="w-full max-w-4xl bg-gray-100 p-8 rounded-3xl shadow-2xl text-center mb-20 backdrop-blur-sm hover:shadow-purple-200 transition-shadow"
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-800">See NutriCare in action</h2>
        <p className="text-gray-600 mb-6 text-lg">Choose a condition. Watch NutriCare adapt instantly.</p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          {["Fatigue", "Diabetes", "Post-Surgery"].map((state, i) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={i}
              className="bg-white hover:bg-purple-100 transition px-6 py-3 rounded-full shadow text-gray-700 text-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {state}
            </motion.button>
          ))}
        </div>
        <div className="mt-6 text-gray-500 italic text-sm">
          (Simulation module coming soon)
        </div>
      </motion.div>

      {/* Quote */}
      <motion.blockquote
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="italic text-center text-gray-500 max-w-2xl mx-auto mb-20 text-xl"
      >
        “NutriCare doesn’t ask you to fit a mold. It builds one around you.”
      </motion.blockquote>

      {/* CTA */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        variants={itemVariants}
        className="bg-black text-white px-8 py-4 rounded-full text-lg hover:bg-gray-800 transition shadow-lg hover:shadow-2xl"
      >
        See how we adapt to you
      </motion.button>

      <footer className="text-center text-sm text-gray-400 mt-16">
        © {new Date().getFullYear()} NutriCare. Built with care.
      </footer>
    </motion.main>
  );
}

