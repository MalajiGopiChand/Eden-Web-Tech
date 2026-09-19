"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const advantages = [
    { 
      id: "01",
      title: "Business-First Thinking", 
      desc: "We don't start with code. We start by deeply understanding your business model, customer funnel, and revenue goals." 
    },
    { 
      id: "02",
      title: "Tailored Architecture", 
      desc: "Zero bloated templates or shortcuts. Every application is engineered specifically for your product and scalability needs." 
    },
    { 
      id: "03",
      title: "Conversion-Focused Design", 
      desc: "Aesthetics that drive real business results. Every screen interaction is crafted to guide visitors into paying customers." 
    },
    { 
      id: "04",
      title: "Modern, Scalable Tech Stack", 
      desc: "Built with Next.js, React Native, and robust cloud APIs ensuring high speed, mobile responsiveness, and strong security." 
    },
    { 
      id: "05",
      title: "Transparent Weekly Sprints", 
      desc: "Direct communication with the founders and developers. You get working private staging links every week to test on your phone." 
    },
    { 
      id: "06",
      title: "Long-Term Partnership", 
      desc: "Our collaboration extends far beyond launch day. We support your growth with proactive maintenance, fast bug fixes, and feature updates." 
    },
  ];

  return (
    <section id="about" className="py-24 bg-transparent border-y border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Leadership Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <CheckCircle2 size={13} className="text-primary" />
            <span>Studio Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight mb-4">
            Meet the founders behind Eden
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We are an independent software studio founded by engineers who believe world-class products are built through direct collaboration, craftsmanship, and honest communication.
          </p>
        </motion.div>

        {/* Leadership Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-24">
          
          {/* Founder & Lead Architect */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="group relative p-8 md:p-10 rounded-3xl bg-card border border-border/80 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_16px_40px_rgba(37,99,235,0.08)] flex flex-col items-center text-center"
          >
            <div className="relative h-44 w-44 md:h-52 md:w-52 rounded-full p-1.5 mb-6 group-hover:scale-103 transition-transform duration-500">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-400 to-emerald-400 opacity-70 blur-[2px]" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background bg-background z-10">
                <Image 
                  src="/images/ceo.jpg" 
                  alt="Malaji Gopichand - Founder & Lead Architect" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 176px, 208px"
                />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-black text-foreground tracking-tight mb-1">
              Malaji Gopichand
            </h3>
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
              Founder & Lead Architect
            </span>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md text-sm sm:text-base">
              Passionate software engineer and system architect. Gopi leads engineering at Eden, working directly with founders to translate business requirements into clean, high-performance web and mobile platforms.
            </p>

            <div className="flex items-center gap-3 mt-auto">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="https://www.linkedin.com/in/malajigopichand/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-100 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 text-xs font-semibold shadow-xs"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight size={14} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a 
                  href="mailto:edenwebtechnologies@gmail.com" 
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-100 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 text-xs font-semibold shadow-xs"
                >
                  <Mail size={14} />
                  <span>Email Gopichand</span>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Co-Founder & Head of Operations */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.12 }}
            whileHover={{ y: -5 }}
            className="group relative p-8 md:p-10 rounded-3xl bg-card border border-border/80 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_16px_40px_rgba(37,99,235,0.08)] flex flex-col items-center text-center"
          >
            <div className="relative h-44 w-44 md:h-52 md:w-52 rounded-full p-1.5 mb-6 group-hover:scale-103 transition-transform duration-500">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-emerald-400 opacity-70 blur-[2px]" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background bg-background z-10">
                <Image 
                  src="/images/co-ceo.jpg" 
                  alt="Mercy - Co-Founder & Head of Operations" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 176px, 208px"
                />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-black text-foreground tracking-tight mb-1">
              Mercy
            </h3>
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
              Co-Founder & Head of Operations
            </span>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md text-sm sm:text-base">
              Operations lead managing project roadmaps, client milestones, and cross-functional team delivery. Mercy ensures every build is delivered on schedule with clear weekly demos and zero friction.
            </p>

            <div className="flex items-center gap-3 mt-auto">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a 
                  href="mailto:edenwebtechnologies@gmail.com" 
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-100 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 text-xs font-semibold shadow-xs"
                >
                  <Mail size={14} />
                  <span>Email Mercy</span>
                </a>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Why Choose Us Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h3 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
            Why founders enjoy working with us
          </h3>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
            Disciplined craftsmanship and transparent communication designed to launch your product without stress.
          </p>
        </motion.div>

        {/* 6 Advantages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, index) => (
            <motion.div
              key={adv.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="group p-7 rounded-3xl bg-card border border-border/70 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_10px_28px_rgba(37,99,235,0.06)] cursor-default"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-primary font-mono font-bold text-sm flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 border border-blue-100">
                  {adv.id}
                </span>
                <div className="w-2 h-2 rounded-full bg-emerald-500/70" />
              </div>

              <h4 className="text-base font-bold text-foreground tracking-tight mb-2 group-hover:text-primary transition-colors">
                {adv.title}
              </h4>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                {adv.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
