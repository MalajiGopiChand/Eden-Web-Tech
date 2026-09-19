"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BackgroundAnimation() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="fixed inset-0 z-[-1] bg-background"></div>;

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background transition-colors duration-1000">
      {/* Primary Blue Orb */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.9, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-500 blur-[120px] mix-blend-screen dark:mix-blend-lighten"
      />
      
      {/* Secondary Green Orb */}
      <motion.div
        animate={{
          x: [0, -150, 100, 0],
          y: [0, 150, -100, 0],
          scale: [1, 1.3, 0.8, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500 blur-[120px] mix-blend-screen dark:mix-blend-lighten"
      />

      {/* Tertiary Cyan Orb */}
      <motion.div
        animate={{
          x: [-100, 200, -200, -100],
          y: [100, -200, 200, 100],
          scale: [1.1, 0.9, 1.2, 1.1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full bg-cyan-400 blur-[150px] -translate-x-1/2 -translate-y-1/2 mix-blend-screen dark:mix-blend-lighten"
      />

      {/* Static subtle grid overlay to add texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] mix-blend-overlay" 
        style={{ backgroundImage: 'radial-gradient(circle at center, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      ></div>
      
      {/* Noise overlay for premium cinematic feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
    </div>
  );
}
