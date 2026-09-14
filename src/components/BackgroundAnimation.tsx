"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BackgroundAnimation() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
      {/* Soft animated gradient orb following mouse */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]"
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 2 }}
      />
      
      {/* Secondary accent orb following mouse with delay */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]"
        animate={{
          x: mousePosition.x - 200 + 100,
          y: mousePosition.y - 200 + 100,
        }}
        transition={{ type: "tween", ease: "circOut", duration: 4 }}
      />

      {/* Static subtle background pattern (optional grid) */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ backgroundImage: 'radial-gradient(circle at center, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      ></div>
    </div>
  );
}
