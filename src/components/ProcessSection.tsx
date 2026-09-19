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
  Clock,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const processIcons = [Compass, Kanban, PenTool, Code2, Rocket, TrendingUp];

const stepDetails: Record<string, { duration: string; deliverables: string[]; highlights: string }> = {
  "01": {
    duration: "Week 1",
    deliverables: ["Product Vision Doc", "Competitor Analysis", "User Personas", "Scope Alignment"],
    highlights: "We extract your core value proposition and align development directly with your revenue model."
  },
  "02": {
    duration: "Week 1–2",
    deliverables: ["Technical Architecture", "Milestone Roadmap", "API Specifications", "Sprint Backlog"],
    highlights: "Every feature is scheduled with clear deadlines. No scope creep, no surprises."
  },
  "03": {
    duration: "Week 2–3",
    deliverables: ["Interactive Figma Prototypes", "Design System", "Mobile & Desktop Flows", "Micro-Interactions"],
    highlights: "Clickable prototypes that test user behavior before a single line of backend code is finalized."
  },
  "04": {
    duration: "Weeks 3–6",
    deliverables: ["Full-Stack Next.js / Mobile Code", "REST & GraphQL APIs", "CI/CD Pipeline", "Test Suites"],
    highlights: "Clean, maintainable, production-ready code with weekly staging releases for your review."
  },
  "05": {
    duration: "Week 7",
    deliverables: ["Cloud Edge Deployment", "SEO & Speed Optimization", "Security Auditing", "Domain & DNS Setup"],
    highlights: "Zero-downtime launch checklist ensuring 99.9% Lighthouse scores and sub-second loading."
  },
  "06": {
    duration: "Ongoing",
    deliverables: ["24/7 Health Monitoring", "Performance Tweaks", "Version Upgrades", "Feature Expansion"],
    highlights: "We partner with your team long-term to evolve your platform as your user base scales."
  }
};

export default function ProcessSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section id="process" className="py-28 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase mb-4">
            <Sparkles size={13} />
            <span>Structured Agile Methodology</span>
          </div>
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
            FROM IDEA TO IMPACT
          </h2>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-[1.1]">
            A SIMPLE PROCESS. <br />
            <span className="bg-gradient-to-r from-primary via-indigo-500 to-sky-400 bg-clip-text text-transparent">
              A SERIOUS APPROACH.
            </span>
          </p>
          <p className="text-muted-foreground mt-4 text-base sm:text-lg leading-relaxed">
            Click any phase below to explore our transparent sprint-based execution and tangible deliverables.
          </p>
        </div>

        {/* Interactive Step Switcher Tabs */}
        <div className="mb-12 flex justify-start sm:justify-center overflow-x-auto pb-4 pt-1 gap-2 sm:gap-3 no-scrollbar select-none">
          {processSteps.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            const Icon = processIcons[idx] || Compass;

            return (
              <button
                key={step.id}
                onClick={() => setActiveStepIndex(idx)}
                className={`relative px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 shrink-0 border cursor-pointer ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_4px_20px_rgba(79,70,229,0.35)]"
                    : "bg-card/70 text-muted-foreground border-border/70 hover:text-foreground hover:border-primary/40"
                }`}
              >
                <Icon size={15} />
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

        {/* Active Phase Spotlight Hero Card */}
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
                transition={{ duration: 0.35 }}
                className="mb-14 p-8 sm:p-10 rounded-3xl bg-card border border-primary/30 shadow-[0_20px_50px_rgba(79,70,229,0.1)] relative overflow-hidden"
              >
                {/* Ambient glow in background */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  {/* Left: Phase Info */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-md">
                        <Icon size={24} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-primary">PHASE {currentStep.id}</span>
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground bg-secondary/80 px-2.5 py-0.5 rounded-full">
                            <Clock size={11} /> {detail.duration}
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black text-foreground">
                          {currentStep.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                      {currentStep.description}
                    </p>

                    <p className="text-sm font-medium text-foreground/90 bg-secondary/40 p-4 rounded-2xl border border-border/50">
                      💡 {detail.highlights}
                    </p>
                  </div>

                  {/* Right: Key Deliverables */}
                  <div className="lg:col-span-5 bg-background/80 backdrop-blur-md p-6 rounded-2xl border border-border/80">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-1.5">
                      <CheckCircle2 size={14} className="text-primary" /> Concrete Phase Deliverables
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {detail.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-xs font-semibold text-foreground/90 bg-secondary/50 px-3 py-2 rounded-xl border border-border/40"
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

        {/* 6-Card Interactive Bento Grid of All Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, index) => {
            const Icon = processIcons[index] || Compass;
            const isSelected = activeStepIndex === index;
            const detail = stepDetails[step.id];

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => setActiveStepIndex(index)}
                className={`group relative p-7 rounded-3xl bg-card border transition-all duration-300 cursor-pointer flex flex-col justify-between h-full ${
                  isSelected
                    ? "border-primary/70 shadow-[0_15px_40px_rgba(79,70,229,0.15)] ring-2 ring-primary/20 -translate-y-1"
                    : "border-border/70 hover:border-primary/40 hover:shadow-[0_10px_30px_rgba(79,70,229,0.08)] hover:-translate-y-1"
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    isSelected
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-secondary/80 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                  }`}>
                    <Icon size={20} />
                  </div>
                  <span className="text-2xl font-black text-muted-foreground/30 font-mono">
                    {step.id}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-5">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables Footer */}
                <div className="pt-4 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground/80">{detail.duration}</span>
                  <span className="text-primary font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Inspect</span>
                    <ArrowRight size={13} />
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
