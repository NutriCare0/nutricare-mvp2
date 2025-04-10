"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Page4() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-b from-gray-100 to-white text-gray-900 relative overflow-hidden">
      {/* Decorative Animated Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 4 }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-200 via-transparent to-transparent pointer-events-none"
      />

      {/* Subtle Animated Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.07, scale: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-30 pointer-events-none"
      />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500"
      >
        Discover NutriCare
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-xl md:text-2xl text-center text-gray-600 max-w-3xl mb-12"
      >
        NutriCare is an intelligent nutrition assistant powered by AI, designed to support every user regardless of their condition, lifestyle, or health goals.
      </motion.p>

      {/* Sections */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="max-w-4xl text-center space-y-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition hover:bg-purple-50"
        >
          <h2 className="text-2xl font-semibold mb-2 text-purple-700">🧠 How It Works</h2>
          <p className="text-gray-600 text-lg">
            NutriCare continuously learns from your activity, mood, and preferences. It builds a personalized nutrition path for you — updated in real-time based on your body, feedback, and schedule.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition hover:bg-purple-50"
        >
          <h2 className="text-2xl font-semibold mb-2 text-purple-700">⚙️ Powered by AI & Health Data</h2>
          <p className="text-gray-600 text-lg">
            By connecting to Apple Health and other wellness APIs, NutriCare adapts your meals, hydration, and recommendations to fit your exact condition — chronic illness, recovery, or daily optimization.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition hover:bg-purple-50"
        >
          <h2 className="text-2xl font-semibold mb-2 text-purple-700">🌍 Who It&#39;s For</h2>
          <p className="text-gray-600 text-lg">
            Whether you’re an athlete, a busy professional, or managing a health condition — NutriCare is built to understand your pace, your needs, and evolve with you.
          </p>
        </motion.div>
      </motion.section>

      {/* CTA to Homepage */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="mt-16"
      >
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 text-lg font-semibold bg-black text-white rounded-full shadow-md hover:bg-gray-800 transition hover:shadow-2xl"
          >
            Back to Homepage
          </motion.button>
        </Link>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-center text-sm text-gray-400 mt-20"
      >
        © {new Date().getFullYear()} NutriCare. Designed by Rami Kataya.
      </motion.footer>
    </main>
  );
}
