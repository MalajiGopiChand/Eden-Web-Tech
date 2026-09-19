"use client";

import { useState } from "react";
import { processSteps } from "@/data";
import { 
  Compass, 
  Kanban, 
  PenTool, 
  Code2, 
  Rocket, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  Clock
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const processIcons = [Compass, Kanban, PenTool, Code2, Rocket, TrendingUp];

const stepDetails: Record<string, { duration: string; deliverables: string[]; highlights: string }> = {
  "01": {
    duration: "Week 1",
    deliverables: ["Product Vision Document", "Target Audience Breakdown", "Feature Priority List", "Fixed Budget Estimate"],
    highlights: "We listen to your business goals and define the exact scope needed to succeed without bloated costs."
  },
  "02": {
    duration: "Week 1–2",
    deliverables: ["Technical Architecture Plan", "Database Schema", "Milestone Schedule", "Weekly Demo Calendar"],
    highlights: "Every screen and feature is mapped to a weekly sprint so you always know what is being built."
  },
  "03": {
    duration: "Week 2–3",
    deliverables: ["Interactive Figma Prototype", "Design System & Colors", "Mobile & Desktop Flows", "User Testing Notes"],
    highlights: "You test clickable screens on your own phone and give feedback before any backend code is written."
  },
  "04": {
    duration: "Weeks 3–6",
    deliverables: ["Production-Ready Next.js & React Native", "REST / GraphQL APIs", "Weekly Staging Links", "Automated Tests"],
    highlights: "Clean, maintainable code with a live private staging URL every Friday for your review."
  },
  "05": {
    duration: "Week 7",
    deliverables: ["Zero-Downtime Deployment", "SEO Meta & Speed Audit", "Security Hardening", "Domain & DNS Setup"],
    highlights: "We perform thorough cross-browser testing and launch your product cleanly to the public."
  },
  "06": {
    duration: "Ongoing",
    deliverables: ["Server Uptime Monitoring", "Performance Optimizations", "Security Patches", "Feature Roadmap"],
    highlights: "We stay with you post-launch to squash bugs fast and build new features as your user base expands."
  }
};

export default function ProcessSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section id="process" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Human Section Header */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <span>How We Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-[1.15] mb-4">
            A clear process. No surprises.
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            No technical jargon, no hidden fees, and no disappearing developers. Just honest communication, weekly progress demos, and working software.
          </p>
        </div>

        {/* Step Switcher Tabs */}
        <div className="mb-10 flex justify-start sm:justify-center overflow-x-auto pb-4 pt-1 gap-2 sm:gap-2.5 no-scrollbar select-none">
          {processSteps.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            const Icon = processIcons[idx] || Compass;

            return (
              <button
                key={step.id}
                onClick={() => setActiveStepIndex(idx)}
                className={`relative px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 shrink-0 border cursor-pointer ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_4px_14px_rgba(37,99,235,0.25)]"
                    : "bg-white/80 text-muted-foreground border-border/70 hover:text-foreground hover:border-primary/40"
                }`}
              >
                <Icon size={14} />
                <span>{step.id}. {step.title}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeProcessPill"
                    className="absolute inset-0 rounded-2xl border-2 border-primary -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Phase Spotlight Card */}
        <AnimatePresence mode="wait">
          {(() => {
            const currentStep = processSteps[activeStepIndex];
            const detail = stepDetails[currentStep.id];
            const Icon = processIcons[activeStepIndex] || Compass;

            return (
              <motion.div
                key={currentStep.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="mb-14 p-8 sm:p-10 rounded-3xl bg-card border border-blue-100 shadow-[0_12px_36px_rgba(0,0,0,0.03)] relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  {/* Left: Phase Info */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-xs">
                        <Icon size={22} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-primary">PHASE {currentStep.id}</span>
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground bg-slate-100 px-2.5 py-0.5 rounded-full">
                            <Clock size={11} /> {detail.duration}
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black text-foreground">
                          {currentStep.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-base text-muted-foreground leading-relaxed">
                      {currentStep.description}
                    </p>

                    <p className="text-sm font-medium text-foreground/90 bg-slate-50 p-4 rounded-2xl border border-border/60">
                      💡 {detail.highlights}
                    </p>
                  </div>

                  {/* Right: Key Deliverables */}
                  <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-border/80 shadow-xs">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-1.5">
                      <CheckCircle2 size={14} className="text-primary" /> Tangible Deliverables
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {detail.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-xs font-semibold text-foreground/90 bg-slate-50 px-3 py-2 rounded-xl border border-border/50"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })()}
        </AnimatePresence>

        {/* 6-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {processSteps.map((step, index) => {
            const Icon = processIcons[index] || Compass;
            const isSelected = activeStepIndex === index;
            const detail = stepDetails[step.id];

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                onClick={() => setActiveStepIndex(index)}
                className={`group relative p-6 rounded-3xl bg-card border transition-all duration-200 cursor-pointer flex flex-col justify-between h-full ${
                  isSelected
                    ? "border-primary shadow-[0_8px_24px_rgba(37,99,235,0.1)] ring-2 ring-primary/20 -translate-y-1"
                    : "border-border/70 hover:border-primary/40 hover:shadow-xs hover:-translate-y-0.5"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-200 ${
                    isSelected
                      ? "bg-primary text-primary-foreground shadow-xs"
                      : "bg-slate-100 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                  }`}>
                    <Icon size={18} />
                  </div>
                  <span className="text-xl font-bold text-muted-foreground/30 font-mono">
                    {step.id}
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground/80">{detail.duration}</span>
                  <span className="text-primary font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>View Phase</span>
                    <ArrowRight size={12} />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
