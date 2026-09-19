"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function BackgroundAnimation() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Ultra-smooth spring physics for fluid mouse spotlight tracking
  const springConfig = { damping: 35, stiffness: 200, mass: 0.6 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (typeof window === "undefined") return;

    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 3);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#080b12]">
      {/* 1. Deep Obsidian Base with Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_0%,#0f172a_0%,#080b12_70%)]" />

      {/* 2. Interactive Cursor Ambient Spotlight (Illuminates content under mouse) */}
      <motion.div
        className="absolute top-0 left-0 w-[650px] h-[650px] rounded-full will-change-transform"
        style={{
          x: smoothMouseX,
          y: smoothMouseY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.16) 0%, rgba(56, 189, 248, 0.08) 40%, transparent 70%)",
        }}
      />

      {/* 3. Celestial Aurora Glow (Drifting Ambient Beams) */}
      <motion.div
        className="absolute top-[-10%] right-[10%] w-[550px] h-[550px] rounded-full will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, rgba(168, 85, 247, 0.08) 45%, transparent 70%)",
        }}
        animate={{
          x: [0, -60, 0],
          y: [0, 50, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[-15%] left-[5%] w-[600px] h-[600px] rounded-full will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(99, 102, 241, 0.07) 50%, transparent 70%)",
        }}
        animate={{
          x: [0, 70, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 4. Elegant Cybernetic Micro-Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 90% 70% at 50% 30%, #000 40%, transparent 95%)",
        }}
      />
    </div>
  );
}
