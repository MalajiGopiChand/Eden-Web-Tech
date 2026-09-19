"use client";

import { testimonials } from "@/data";
import { Star, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span>Verified Client Feedback • 5.0 Rating</span>
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            WHAT OUR CLIENTS SAY
          </h3>
          <p className="text-muted-foreground mt-4 max-w-xl text-lg">
            Real feedback from ambitious founders and teams who trusted us to build their products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              key={testimonial.id}
              className="p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-[0_15px_35px_rgba(79,70,229,0.12)] hover:border-primary/50 transition-all flex flex-col h-full group"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                  <CheckCircle2 size={13} className="text-green-500" /> Verified Project
                </span>
              </div>
              
              <p className="text-base md:text-lg text-foreground/90 italic mb-8 flex-grow leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="mt-auto flex items-center gap-4 pt-4 border-t border-border/50">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/10 shrink-0 border border-primary/20">
                  <img src={testimonial.image} alt={testimonial.client} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-base group-hover:text-primary transition-colors">
                    {testimonial.client}
                  </h4>
                  <p className="text-xs text-muted-foreground font-medium">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
