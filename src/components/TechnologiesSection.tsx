"use client";

import { technologies } from "@/data";
import { motion } from "framer-motion";

export default function TechnologiesSection() {
  const row1 = [...technologies, ...technologies, ...technologies];
  const row2 = [...technologies.slice().reverse(), ...technologies.slice().reverse(), ...technologies.slice().reverse()];

  return (
    <section className="py-10 sm:py-14 bg-transparent border-y border-border/60 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center"
      >
        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">
          Technology Stack
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
          Tools we use to build the future
        </h3>
      </motion.div>

      {/* Marquee Wrapper with side fade gradients */}
      <div className="relative w-full overflow-hidden py-4 flex flex-col gap-4">
        {/* Left & Right Gradient Shadows */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Row 1: Scrolling Left with Pause on Hover */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-4 md:gap-6 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {row1.map((tech, idx) => (
              <motion.div
                key={`row1-${idx}`}
                whileHover={{ scale: 1.08, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="px-6 py-3 rounded-full bg-white/90 border border-border/70 text-foreground font-semibold text-sm hover:border-primary hover:text-primary hover:shadow-md transition-colors duration-200 shadow-xs flex items-center gap-2.5 cursor-default select-none shrink-0"
              >
                <span className="w-2 h-2 rounded-full bg-primary/80 animate-pulse" />
                <span>{tech}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Scrolling Right with Pause on Hover */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-4 md:gap-6 whitespace-nowrap"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {row2.map((tech, idx) => (
              <motion.div
                key={`row2-${idx}`}
                whileHover={{ scale: 1.08, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="px-6 py-3 rounded-full bg-white/80 border border-border/70 text-muted-foreground font-medium text-sm hover:border-primary hover:text-primary hover:shadow-md transition-colors duration-200 shadow-xs flex items-center gap-2.5 cursor-default select-none shrink-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                <span>{tech}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
