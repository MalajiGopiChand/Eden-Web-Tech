"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function AnimatedCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Exact mouse coordinate (zero latency)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth fluid spring follower
  const springConfig = { damping: 26, stiffness: 280, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  // Dynamic velocity angle tracking for fluid elongation
  const [angle, setAngle] = useState(0);
  const [velocityScale, setVelocityScale] = useState(1);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Only enable for desktop pointer devices
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let frameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 1) {
        const rad = Math.atan2(dy, dx);
        const deg = (rad * 180) / Math.PI;
        setAngle(deg);
        // Subtle elongation based on speed
        setVelocityScale(Math.min(1 + distance * 0.015, 1.4));
      }

      lastPos.current = { x: e.clientX, y: e.clientY };

      // Return smoothly to circle
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        setVelocityScale(1);
      });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest(".group") ||
        target.closest(".cursor-pointer");

      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(frameId);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* 1. Fluid Trailing Magnetic Halo (Organically rotates & stretches with velocity) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full will-change-transform pointer-events-none flex items-center justify-center"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          rotate: `${angle}deg`,
          scaleX: isHovered ? 1 : velocityScale,
          scaleY: isHovered ? 1 : 1 / Math.sqrt(velocityScale),
        }}
        animate={{
          width: isHovered ? 58 : isClicking ? 26 : 38,
          height: isHovered ? 58 : isClicking ? 26 : 38,
          borderColor: isHovered ? "rgba(99, 102, 241, 0.9)" : "rgba(56, 189, 248, 0.45)",
          backgroundColor: isHovered ? "rgba(99, 102, 241, 0.18)" : "rgba(99, 102, 241, 0.05)",
          boxShadow: isHovered 
            ? "0 0 25px rgba(99, 102, 241, 0.45)" 
            : "0 0 15px rgba(56, 189, 248, 0.2)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      >
        {/* Subtle crosshair center mark when hovered */}
        {isHovered && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]"
          />
        )}
      </motion.div>

      {/* 2. Precision Glowing Focal Core */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#38bdf8] will-change-transform pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.5 : isHovered ? 0 : 1,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 25 }}
      />
    </div>
  );
}
