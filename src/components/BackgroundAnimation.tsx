"use client";

import { motion } from "framer-motion";

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
      {/* 1. Deep Background Base */}
      <div className="absolute inset-0 bg-background"></div>

      {/* 2. Aurora / Mesh Gradient Orbs */}
      <div className="absolute inset-0 opacity-40 mix-blend-screen dark:mix-blend-lighten saturate-150">
        <motion.div
          animate={{
            x: ["-20%", "20%", "-20%"],
            y: ["-20%", "20%", "-20%"],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-[50vw] h-[50vh] bg-blue-500 rounded-full blur-[130px]"
        />
        <motion.div
          animate={{
            x: ["20%", "-20%", "20%"],
            y: ["20%", "-20%", "20%"],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-[60vw] h-[60vh] bg-cyan-400 rounded-full blur-[130px]"
        />
        <motion.div
          animate={{
            x: ["0%", "30%", "0%"],
            y: ["30%", "0%", "30%"],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/4 w-[40vw] h-[40vh] bg-indigo-500 rounded-full blur-[130px]"
        />
      </div>

      {/* 3. Subtle Glass/Noise Overlay for Texture */}
      <div className="absolute inset-0 backdrop-blur-[20px] bg-background/30"></div>
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
    </div>
  );
}
