"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function BackgroundAnimation() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth out the mouse movement
  const springX1 = useSpring(mouseX, { damping: 50, stiffness: 400, mass: 0.5 });
  const springY1 = useSpring(mouseY, { damping: 50, stiffness: 400, mass: 0.5 });
  
  const springX2 = useSpring(mouseX, { damping: 100, stiffness: 100, mass: 1 });
  const springY2 = useSpring(mouseY, { damping: 100, stiffness: 100, mass: 1 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
      {/* Soft animated gradient orb following mouse */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] -ml-[250px] -mt-[250px]"
        style={{
          x: springX1,
          y: springY1,
        }}
      />
      
      {/* Secondary accent orb following mouse with delay */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] -ml-[100px] -mt-[100px]"
        style={{
          x: springX2,
          y: springY2,
        }}
      />

      {/* Static subtle background pattern (optional grid) */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ backgroundImage: 'radial-gradient(circle at center, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      ></div>
    </div>
  );
}
