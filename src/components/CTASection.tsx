"use client";

import Link from "next/link";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-28 bg-transparent relative overflow-hidden border-t border-border/60">
      {/* Animated Floating Radial Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.35, 0.5, 0.35] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-gradient-to-r from-blue-400/15 via-cyan-400/15 to-emerald-400/15 blur-[120px]"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase mb-6">
            <Sparkles size={14} className="animate-spin" />
            <span>Have a business idea? Let's bring it to life</span>
          </div>

          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-8 tracking-tight leading-[1.1]">
            READY TO BUILD <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              SOMETHING EXTRAORDINARY?
            </span>
          </h3>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            That idea you've been thinking about could become your next website, mobile application, or enterprise platform. Tell us what you want to achieve — we'll handle the design, code, and deployment.
          </p>
        
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="w-full sm:w-auto"
            >
              <Link 
                href="/contact" 
                className="relative group overflow-hidden flex items-center justify-center gap-2 px-9 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/95 transition-all shadow-[0_10px_25px_rgba(37,99,235,0.25)] hover:shadow-[0_15px_35px_rgba(37,99,235,0.35)] w-full sm:w-auto"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                <span>Start a Project</span>
                <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform duration-200" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="w-full sm:w-auto"
            >
              <Link 
                href="/contact" 
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-foreground font-semibold rounded-full hover:bg-secondary transition-all border border-border w-full sm:w-auto hover:border-primary/40 shadow-xs"
              >
                <MessageSquare size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                <span>Talk to Us</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
