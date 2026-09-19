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
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#f8fafc]">
      {/* 1. Luminous Light Base with Subtle Top Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(79,70,229,0.08),rgba(248,250,252,0))]" />

      {/* 2. Interactive Cursor Ambient Spotlight (Follows mouse on light background) */}
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full will-change-transform"
        style={{
          x: smoothMouseX,
          y: smoothMouseY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(79, 70, 229, 0.09) 0%, rgba(2, 132, 199, 0.05) 45%, transparent 70%)",
        }}
      />

      {/* 3. Soft Ambient Floating Pastel Aura Beams */}
      <motion.div
        className="absolute top-[5%] right-[5%] w-[500px] h-[500px] rounded-full will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(56, 189, 248, 0.05) 45%, transparent 70%)",
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[5%] left-[5%] w-[550px] h-[550px] rounded-full will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(2, 132, 199, 0.07) 0%, rgba(99, 102, 241, 0.04) 50%, transparent 70%)",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -35, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 4. Crisp Architecture Micro-Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(15, 23, 42, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 23, 42, 0.3) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 90% 70% at 50% 30%, #000 40%, transparent 95%)",
        }}
      />
    </div>
  );
}
