"use client";

import { SlidingNumber } from "@/components/animate-ui/primitives/texts/sliding-number";
import { FolderGit2, Building2, Layers, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function TrustSection() {
  const stats = [
    { 
      number: 20, 
      suffix: "+", 
      label: "Projects Completed", 
      subLabel: "Delivered on schedule with clean, maintainable code",
      icon: FolderGit2,
      accent: "from-blue-600/30 via-cyan-500/30 to-blue-600/30"
    },
    { 
      number: 10, 
      suffix: "+", 
      label: "Repeat Partners", 
      subLabel: "Founders who trust us across multiple milestones",
      icon: Building2,
      accent: "from-cyan-500/30 via-blue-600/30 to-indigo-500/30"
    },
    { 
      number: 5, 
      suffix: "+", 
      label: "Core Industries", 
      subLabel: "Healthcare, EduTech, E-commerce, Real Estate & SaaS",
      icon: Layers,
      accent: "from-teal-500/30 via-emerald-500/30 to-cyan-500/30"
    },
    { 
      number: 100, 
      suffix: "%", 
      label: "On-Time Delivery", 
      subLabel: "Sprint-based milestones with weekly staging demos",
      icon: Award,
      accent: "from-amber-500/30 via-emerald-500/30 to-blue-500/30"
    },
  ];

  return (
    <section className="py-16 border-y border-border bg-white/50 backdrop-blur-md relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-6 rounded-3xl bg-white border border-border/80 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_12px_32px_rgba(37,99,235,0.08)] flex flex-col justify-between cursor-default shadow-xs"
              >
                <div className="flex items-center justify-between mb-4">
                  <motion.div 
                    whileHover={{ scale: 1.12 }}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                    className="w-11 h-11 rounded-2xl bg-blue-50/90 border border-blue-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-xs"
                  >
                    <Icon size={19} />
                  </motion.div>
                  <span className="text-xs font-mono font-bold text-muted-foreground/40 group-hover:text-primary/60 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <div>
                  <div className="text-3xl md:text-4xl font-black tracking-tight text-foreground flex items-center mb-1.5">
                    <SlidingNumber 
                      number={stat.number} 
                      fromNumber={0}
                      inView={true}
                      inViewOnce={true}
                      delay={index * 100}
                      transition={{ stiffness: 120, damping: 25, mass: 0.5 }}
                    />
                    <span className="text-primary">{stat.suffix}</span>
                  </div>

                  <h3 className="text-sm font-bold text-foreground tracking-tight mb-1">
                    {stat.label}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {stat.subLabel}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
