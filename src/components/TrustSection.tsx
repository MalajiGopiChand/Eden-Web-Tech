"use client";

import { SlidingNumber } from "@/components/animate-ui/primitives/texts/sliding-number";
import { FolderGit2, Building2, Layers, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function TrustSection() {
  const stats = [
    { 
      number: 20, 
      suffix: "+", 
      label: "Projects Delivered", 
      subLabel: "Successfully launched with 100% client satisfaction",
      icon: FolderGit2,
      accent: "from-blue-500/20 to-indigo-500/20"
    },
    { 
      number: 10, 
      suffix: "+", 
      label: "Partner Businesses", 
      subLabel: "Empowered with modern websites & mobile apps",
      icon: Building2,
      accent: "from-indigo-500/20 to-purple-500/20"
    },
    { 
      number: 5, 
      suffix: "+", 
      label: "Industry Domains", 
      subLabel: "Healthcare, EduTech, FinTech, Retail & Real Estate",
      icon: Layers,
      accent: "from-sky-500/20 to-teal-500/20"
    },
    { 
      number: 100, 
      suffix: "%", 
      label: "On-Time Delivery", 
      subLabel: "Agile sprints and transparent progress tracking",
      icon: Award,
      accent: "from-amber-500/20 to-rose-500/20"
    },
  ];

  return (
    <section className="py-16 border-y border-border bg-background/50 relative overflow-hidden">
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
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 rounded-3xl bg-card border border-border/70 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_15px_35px_rgba(37,99,235,0.08)] hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Top Glowing Gradient Bar */}
                <div className={`absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r ${stat.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full`} />

                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-secondary/70 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-xs">
                    <Icon size={18} />
                  </div>
                  <span className="text-xs font-mono font-bold text-muted-foreground/50">
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
                      delay={index * 120}
                      transition={{ stiffness: 120, damping: 25, mass: 0.5 }}
                    />
                    <span className="text-primary">{stat.suffix}</span>
                  </div>

                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wide mb-1">
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
