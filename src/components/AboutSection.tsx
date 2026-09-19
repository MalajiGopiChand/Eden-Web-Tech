"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const advantages = [
    { 
      id: "01",
      title: "BUSINESS-MINDED DEVELOPMENT", 
      desc: "We don't start with code. We start by deeply understanding your business goals and customer funnel." 
    },
    { 
      id: "02",
      title: "CUSTOM TAILORED ARCHITECTURE", 
      desc: "Zero bloated templates. We engineer every product specifically tailored to your scalability requirements." 
    },
    { 
      id: "03",
      title: "CONVERSION-DRIVEN DESIGN", 
      desc: "Aesthetics that drive real sales. Every UX interaction is crafted to guide your visitors towards action." 
    },
    { 
      id: "04",
      title: "FUTURE-PROOF TECH STACK", 
      desc: "Built with Next.js, React Native, and cloud-native backends ensuring high speed and enterprise security." 
    },
    { 
      id: "05",
      title: "TRANSPARENT SPRINT UPDATES", 
      desc: "Direct communication with founders and developers. You always know what is deployed and what comes next." 
    },
    { 
      id: "06",
      title: "POST-LAUNCH PARTNERSHIP", 
      desc: "Our collaboration extends beyond deployment. We support your growth with proactive maintenance and scaling." 
    },
  ];

  return (
    <section id="about" className="py-28 bg-transparent border-y border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Leadership Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase mb-4">
            <CheckCircle2 size={13} className="text-primary" />
            <span>Executive Leadership</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight mb-4">
            THE MINDS BEHIND EDEN
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We believe world-class digital products combine visionary design, rock-solid engineering, and a sharp understanding of the business behind them.
          </p>
        </motion.div>

        {/* Leadership Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-28">
          
          {/* Founder & CEO */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="group relative p-8 md:p-10 rounded-3xl bg-card border border-border/80 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] flex flex-col items-center text-center"
          >
            {/* Animated Rotating Gradient Aura Ring */}
            <div className="relative h-48 w-48 md:h-56 md:w-56 rounded-full p-1.5 mb-6 group-hover:scale-105 transition-transform duration-500">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-400 to-emerald-400 blur-[2px]" 
              />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background bg-background z-10">
                <Image 
                  src="/images/ceo.jpg" 
                  alt="Malaji Gopichand - Founder & CEO" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 192px, 224px"
                />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-black text-foreground tracking-tight mb-1">
              MALAJI GOPICHAND
            </h3>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              Founder & Chief Executive Officer
            </span>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md text-sm sm:text-base">
              Passionate technologist and software architect dedicated to helping ambitious companies build scalable, high-performance web platforms and mobile apps.
            </p>

            <div className="flex items-center gap-3 mt-auto">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="https://www.linkedin.com/in/malajigopichand/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-secondary/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 text-xs font-semibold shadow-xs"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight size={14} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a 
                  href="mailto:edenwebtechnologies@gmail.com" 
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-secondary/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 text-xs font-semibold shadow-xs"
                >
                  <Mail size={14} />
                  <span>Contact</span>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Co-Founder & COO */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -6 }}
            className="group relative p-8 md:p-10 rounded-3xl bg-card border border-border/80 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] flex flex-col items-center text-center"
          >
            {/* Animated Rotating Gradient Aura Ring */}
            <div className="relative h-48 w-48 md:h-56 md:w-56 rounded-full p-1.5 mb-6 group-hover:scale-105 transition-transform duration-500">
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-emerald-400 blur-[2px]" 
              />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background bg-background z-10">
                <Image 
                  src="/images/co-ceo.jpg" 
                  alt="Mercy - Co-Founder & COO" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 192px, 224px"
                />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-black text-foreground tracking-tight mb-1">
              MERCY
            </h3>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              Co-Founder & Chief Operating Officer
            </span>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md text-sm sm:text-base">
              Operations strategist orchestrating agile sprint deliveries, client milestones, and cross-functional engineering processes to ensure flawless project execution.
            </p>

            <div className="flex items-center gap-3 mt-auto">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a 
                  href="mailto:edenwebtechnologies@gmail.com" 
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-secondary/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 text-xs font-semibold shadow-xs"
                >
                  <Mail size={14} />
                  <span>Contact COO</span>
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
          className="text-center mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
            WHY AMBITIOUS FOUNDERS CHOOSE EDEN
          </h3>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
            Disciplined product execution engineered to turn bold concepts into profitable digital ventures.
          </p>
        </motion.div>

        {/* 6 Advantages Cards Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, index) => (
            <motion.div
              key={adv.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group p-7 rounded-3xl bg-card border border-border/70 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_12px_32px_rgba(37,99,235,0.08)] cursor-default"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-2xl bg-primary/10 text-primary font-mono font-bold text-sm flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {adv.id}
                </span>
                <motion.div 
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.3 }}
                  className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary" 
                />
              </div>

              <h4 className="text-base font-bold text-foreground tracking-tight mb-2 group-hover:text-primary transition-colors">
                {adv.title}
              </h4>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {adv.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
