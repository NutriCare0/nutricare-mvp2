"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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

export default function Features() {
  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex min-h-screen flex-col items-center justify-start p-8 bg-gradient-to-b from-gray-100 to-white text-gray-900 relative overflow-hidden"
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

      <motion.h1
        variants={itemVariants}
        className="text-5xl md:text-7xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500"
      >
        Why NutriCare?
      </motion.h1>

      <motion.section
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-20"
      >
        <div className="hover:shadow-xl transition duration-300 rounded-2xl p-4">
          <h3 className="text-2xl font-semibold mb-3 text-purple-700">🧠 Smart Recommendations</h3>
          <p className="text-gray-600 text-lg">AI-powered guidance tailored to your daily lifestyle.</p>
        </div>
        <div className="hover:shadow-xl transition duration-300 rounded-2xl p-4">
          <h3 className="text-2xl font-semibold mb-3 text-purple-700">⏱ Save Time</h3>
          <p className="text-gray-600 text-lg">Generate meals and groceries in seconds, not hours.</p>
        </div>
        <div className="hover:shadow-xl transition duration-300 rounded-2xl p-4">
          <h3 className="text-2xl font-semibold mb-3 text-purple-700">📱 Seamless Experience</h3>
          <p className="text-gray-600 text-lg">Clean, intuitive design inspired by Apple. Smooth as butter.</p>
        </div>
      </motion.section>

      <motion.div
        variants={itemVariants}
        className="text-center text-lg text-gray-500 max-w-xl mb-16"
      >
        <p>
          NutriCare isn’t just another app — it’s your daily nutrition companion, built to simplify your life and make every bite count.
        </p>
      </motion.div>

      <motion.section
        variants={itemVariants}
        className="w-full bg-white rounded-3xl shadow-xl p-10 max-w-6xl mb-20 backdrop-blur-sm hover:shadow-purple-200 transition-shadow"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">✨ What Makes Us Different?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:bg-purple-50 transition">
            <h4 className="text-xl font-semibold mb-2 text-purple-700">Real-Time Adaptation</h4>
            <p className="text-gray-600">Your plans adjust based on your progress, lifestyle, and mood. NutriCare grows with you.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:bg-purple-50 transition">
            <h4 className="text-xl font-semibold mb-2 text-purple-700">Minimalist but Powerful</h4>
            <p className="text-gray-600">Built with elegance and function in mind, just like the tools you love most.</p>
          </div>
        </div>
      </motion.section>

      <motion.blockquote
        variants={itemVariants}
        className="italic text-center text-gray-500 max-w-2xl mx-auto mb-20 text-xl"
      >
        “Health isn’t a destination. It’s a journey. NutriCare makes it a beautiful one.”
      </motion.blockquote>

      <motion.div
        variants={itemVariants}
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
      >
        <div className="bg-gradient-to-br from-green-100 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h4 className="text-xl font-semibold mb-2 text-green-700">🔄 Sync Across Devices</h4>
          <p className="text-gray-600">Start on your phone, continue on your tablet, finish on your watch. Always in sync.</p>
        </div>
        <div className="bg-gradient-to-br from-yellow-100 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h4 className="text-xl font-semibold mb-2 text-yellow-700">🔍 Advanced Analytics</h4>
          <p className="text-gray-600">Understand your habits and progress with beautiful, easy-to-read charts and graphs.</p>
        </div>
        <div className="bg-gradient-to-br from-blue-100 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h4 className="text-xl font-semibold mb-2 text-blue-700">🎯 Goal-Oriented Design</h4>
          <p className="text-gray-600">We don’t just track. We help you achieve real, tangible results day by day.</p>
        </div>
      </motion.div>

      {/* 👇👇👇 AJOUT DU BOUTON PAGE 3 👇👇👇 */}
      <motion.div
        variants={itemVariants}
        className="mb-20"
      >
        <Link href="/ai">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 text-lg font-semibold bg-black text-white rounded-full shadow-md hover:bg-gray-800 transition hover:shadow-2xl"
          >
            Découvre l’intelligence adaptative
          </motion.button>
        </Link>
      </motion.div>
      {/* 👆👆👆 FIN DU BOUTON 👆👆👆 */}

      <footer className="text-center text-sm text-gray-400 mt-10">
        © {new Date().getFullYear()} NutriCare. Crafted by Rami Kataya.
      </footer>
    </motion.main>
  );
}

