"use client";

import Link from "next/link";
import { ArrowRight, MessageSquare, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-12 sm:py-16 bg-transparent relative overflow-hidden border-t border-border/60">
      {/* Gentle ambient light aura */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] rounded-full bg-gradient-to-r from-blue-400/15 via-cyan-400/15 to-emerald-400/15 blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <span>Direct Founder Access</span>
          </div>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-6 tracking-tight leading-[1.15]">
            Have an idea you want to build? <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              Let's make it a reality.
            </span>
          </h3>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-9 leading-relaxed">
            Tell us about your product goals, desired timeline, or budget. We will review your requirements and respond with honest recommendations and a clear roadmap within 24 hours.
          </p>
        
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="w-full sm:w-auto"
            >
              <Link 
                href="/contact" 
                className="relative group overflow-hidden flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-2xl hover:bg-primary/95 transition-all shadow-[0_8px_24px_rgba(37,99,235,0.25)] hover:shadow-[0_12px_32px_rgba(37,99,235,0.35)] w-full sm:w-auto cursor-pointer"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                <span>Start Your Project</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="w-full sm:w-auto"
            >
              <a 
                href="https://wa.me/919705527264?text=Hi%20Eden%20Technologies%2C%20I%20would%20like%20to%20discuss%20a%20new%20project."
                target="_blank"
                rel="noopener noreferrer" 
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-foreground font-bold rounded-2xl hover:bg-slate-50 transition-all border border-border w-full sm:w-auto hover:border-primary/40 shadow-xs cursor-pointer"
              >
                <MessageSquare size={17} className="text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </motion.div>
          </div>

          <div className="mt-8 pt-6 border-t border-border/50 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              100% Confidential • Mutual NDA
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Free Architecture & Budget Estimate
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              Direct Founder Communication
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
