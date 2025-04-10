"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setHasScrolled(true);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-b from-gray-100 to-white text-gray-900 relative overflow-hidden"
    >
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100 via-transparent to-transparent pointer-events-none"
      />

      {/* Animated Orbs */}
      <motion.div
        animate={{ x: [0, 10, -10, 0], y: [0, -10, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-purple-200 rounded-full blur-3xl opacity-25 pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -10, 10, 0], y: [0, 10, -10, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] bg-pink-200 rounded-full blur-3xl opacity-25 pointer-events-none"
      />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl md:text-8xl font-bold mb-8 text-center leading-tight drop-shadow-sm bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500"
      >
        Welcome to NutriCare
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-2xl md:text-3xl mb-10 text-center max-w-3xl text-gray-700"
      >
        Your personal AI-powered nutrition assistant. Track your meals, get personalized tips, and feel better every day.
      </motion.p>

      {/* App Image */}
      <motion.img
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        src="/iphone-mockup.png"
        alt="NutriCare App"
        className="w-[350px] md:w-[500px] lg:w-[550px] mb-12 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
      />

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => router.push("/about")}
        className="bg-black text-white px-10 py-4 rounded-full text-xl hover:bg-gray-800 transition-all duration-300 mb-16 shadow-xl relative overflow-hidden"
      >
        <span className="relative z-10">Get Started</span>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50"
        />
      </motion.button>

      {/* Features */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-20"
      >
        {["🥗 Personalized Guidance", "📊 Smart Tracking", "🛒 Grocery Assistant"].map((title, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-2xl shadow-lg transition hover:shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-3 text-purple-700">{title}</h3>
            <p className="text-gray-600 text-lg">
              {[
                "Tailored advice based on your goals, habits, and preferences.",
                "Monitor your nutrition effortlessly and stay on track.",
                "Generate shopping lists with one tap."
              ][i]}
            </p>
          </motion.div>
        ))}
      </motion.section>

      {/* Quote */}
      <motion.blockquote
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="italic text-center text-gray-500 max-w-2xl mx-auto mb-14 text-xl"
      >
        “The future of health is personalized. NutriCare brings it to your pocket.”
      </motion.blockquote>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-center text-sm text-gray-400 mb-6"
      >
        © {new Date().getFullYear()} NutriCare. Crafted by Rami Kataya.
      </motion.footer>
    </motion.main>
  );
}
