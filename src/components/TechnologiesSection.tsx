"use client";

import { technologies } from "@/data";
import { motion } from "framer-motion";

export default function TechnologiesSection() {
  const row1 = [...technologies, ...technologies, ...technologies];
  const row2 = [...technologies.slice().reverse(), ...technologies.slice().reverse(), ...technologies.slice().reverse()];

  return (
    <section className="py-20 bg-transparent border-y border-border/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">
          Technology Stack
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
          Tools we use to build the future
        </h3>
      </div>

      {/* Marquee Wrapper with side fade gradients */}
      <div className="relative w-full overflow-hidden py-4 flex flex-col gap-4">
        {/* Left & Right Gradient Shadows (Magic UI signature) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Row 1: Scrolling Left */}
        <motion.div
          className="flex gap-4 md:gap-6 whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {row1.map((tech, idx) => (
            <div
              key={`row1-${idx}`}
              className="px-6 py-3 rounded-full bg-background border border-border/60 text-foreground font-semibold text-sm hover:border-primary hover:text-primary hover:scale-105 transition-all duration-300 shadow-sm flex items-center gap-2 cursor-default select-none"
            >
              <span className="w-2 h-2 rounded-full bg-primary/70 animate-pulse" />
              {tech}
            </div>
          ))}
        </motion.div>

        {/* Row 2: Scrolling Right */}
        <motion.div
          className="flex gap-4 md:gap-6 whitespace-nowrap"
          animate={{ x: [-1000, 0] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 28,
              ease: "linear",
            },
          }}
        >
          {row2.map((tech, idx) => (
            <div
              key={`row2-${idx}`}
              className="px-6 py-3 rounded-full bg-background/80 border border-border/60 text-muted-foreground font-medium text-sm hover:border-primary hover:text-primary hover:scale-105 transition-all duration-300 shadow-sm flex items-center gap-2 cursor-default select-none"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent/70" />
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
