"use client";

import { testimonials } from "@/data";
import { Star, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  // Duplicate the 10 testimonials once for a seamless infinite loop
  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
  ];

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span>Verified Client Feedback • 4.8 out of 5 Rating</span>
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight">
            WHAT OUR CLIENTS SAY
          </h3>
          <p className="text-muted-foreground mt-3 max-w-xl text-lg">
            Real feedback from ambitious founders and teams who trusted us to build their products.
          </p>
        </motion.div>
      </div>

      {/* Infinite Moving Reviews Marquee with Hover Pause */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right Gradient Shadows for seamless fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-44 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-44 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Moving Marquee Track */}
        <div className="flex overflow-hidden select-none">
          <motion.div
            className="flex gap-6 shrink-0"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 55,
                ease: "linear",
              },
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {duplicatedTestimonials.map((testimonial, idx) => (
              <motion.div
                key={`testimonial-${idx}`}
                whileHover={{ y: -6 }}
                className="w-[340px] md:w-[420px] p-7 rounded-3xl bg-card border border-border shadow-xs hover:shadow-[0_16px_36px_rgba(37,99,235,0.12)] hover:border-primary/50 transition-all duration-300 flex flex-col justify-between shrink-0 group cursor-default"
              >
                <div>
                  <div className="flex justify-between items-center mb-5">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.3, rotate: 12 }}
                          transition={{ type: "spring", stiffness: 400, damping: 12 }}
                        >
                          <Star
                            size={16}
                            className="fill-amber-400 text-amber-400"
                          />
                        </motion.div>
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5 bg-secondary/80 px-2.5 py-1 rounded-full">
                      <CheckCircle2 size={13} className="text-emerald-500" />{" "}
                      Verified Project
                    </span>
                  </div>

                  <p className="text-base text-foreground/90 italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-4 border-t border-border/50">
                  <div className="w-11 h-11 rounded-full overflow-hidden bg-primary/10 shrink-0 border border-primary/20 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={testimonial.image}
                      alt={testimonial.client}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">
                      {testimonial.client}
                    </h4>
                    <p className="text-xs text-muted-foreground font-medium">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
