"use client";

import { useState } from "react";
import Link from "next/link";
import { processSteps } from "@/data";
import { 
  Compass, 
  Kanban, 
  PenTool, 
  Code2, 
  Rocket, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  MessageSquare,
  ArrowRight
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
    <section id="process" className="py-12 sm:py-16 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Human Section Header */}
        <div className="mb-8 sm:mb-10 text-center max-w-3xl mx-auto">
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

        {/* Step Switcher Grid - 100% Responsive, Zero Horizontal Overflow Clipping */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-10">
          {processSteps.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            const Icon = processIcons[idx] || Compass;
            const detail = stepDetails[step.id];

            return (
              <button
                key={step.id}
                onClick={() => setActiveStepIndex(idx)}
                className={`relative text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? "bg-white border-primary shadow-[0_8px_24px_rgba(37,99,235,0.12)] ring-2 ring-primary/20 -translate-y-0.5"
                    : "bg-white/80 border-border/70 hover:border-primary/40 hover:bg-white hover:-translate-y-0.5"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[11px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-md ${
                    isActive ? "bg-primary text-primary-foreground" : "bg-slate-100 text-muted-foreground"
                  }`}>
                    PHASE {step.id}
                  </span>
                  <Icon size={16} className={isActive ? "text-primary" : "text-muted-foreground"} />
                </div>
                <div>
                  <h4 className={`text-xs sm:text-sm font-bold line-clamp-1 ${
                    isActive ? "text-primary" : "text-foreground"
                  }`}>
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-muted-foreground mt-0.5 font-medium">
                    {detail?.duration || `Week ${idx + 1}`}
                  </p>
                </div>
                {isActive && (
                  <motion.div
                    layoutId="activeProcessIndicator"
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-full"
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
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="mb-8 sm:mb-10 p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-blue-100 shadow-[0_12px_36px_rgba(0,0,0,0.04)] relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
                  {/* Left: Phase Info */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-4">
                        <span className="text-xs font-mono font-bold text-primary bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
                          PHASE {currentStep.id}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground bg-slate-100 px-3 py-1 rounded-md">
                          <Clock size={13} className="text-primary" /> {detail.duration}
                        </span>
                        <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-md">
                          Step {activeStepIndex + 1} of 6
                        </span>
                      </div>

                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          <Icon size={22} />
                        </div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground tracking-tight">
                          {currentStep.title}
                        </h3>
                      </div>

                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                        {currentStep.description}
                      </p>

                      <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-border/70">
                        <div className="flex items-start gap-3">
                          <span className="text-xl shrink-0 mt-0.5">💡</span>
                          <div>
                            <h5 className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                              Client Benefit
                            </h5>
                            <p className="text-sm font-medium text-foreground/90 leading-relaxed">
                              {detail.highlights}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step Navigation Controls */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <button
                        onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                        disabled={activeStepIndex === 0}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-colors ${
                          activeStepIndex === 0
                            ? "opacity-40 cursor-not-allowed border-border/50 text-muted-foreground"
                            : "border-border/80 text-foreground hover:border-primary hover:text-primary cursor-pointer bg-white"
                        }`}
                      >
                        ← Previous Phase
                      </button>

                      <div className="flex items-center gap-1.5">
                        {processSteps.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveStepIndex(i)}
                            aria-label={`Jump to phase ${i + 1}`}
                            className={`h-2 rounded-full transition-all cursor-pointer ${
                              activeStepIndex === i ? "w-6 sm:w-8 bg-primary" : "w-2 sm:w-2.5 bg-slate-200 hover:bg-slate-300"
                            }`}
                          />
                        ))}
                      </div>

                      <button
                        onClick={() => setActiveStepIndex((prev) => Math.min(processSteps.length - 1, prev + 1))}
                        disabled={activeStepIndex === processSteps.length - 1}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-colors ${
                          activeStepIndex === processSteps.length - 1
                            ? "opacity-40 cursor-not-allowed border-border/50 text-muted-foreground"
                            : "bg-primary text-primary-foreground border-primary hover:bg-primary/90 cursor-pointer shadow-xs"
                        }`}
                      >
                        Next Phase →
                      </button>
                    </div>
                  </div>

                  {/* Right: Key Deliverables */}
                  <div className="lg:col-span-5 bg-slate-50/70 p-6 sm:p-7 rounded-2xl border border-border/80 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                          <CheckCircle2 size={15} className="text-primary" /> Tangible Deliverables
                        </h4>
                        <span className="text-[11px] font-semibold text-primary bg-blue-50 px-2 py-0.5 rounded">
                          {detail.deliverables.length} Outputs
                        </span>
                      </div>
                      <div className="space-y-2.5">
                        {detail.deliverables.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-foreground/90 bg-white p-3 rounded-xl border border-border/60 shadow-xs"
                          >
                            <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                            <span className="leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-border/60 flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                      <span>100% Client approval before advancing to the next phase.</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })()}
        </AnimatePresence>

        {/* Sprint Guarantees & Quality Commitment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 rounded-3xl bg-white border border-border/70 shadow-xs hover:border-primary/40 transition-all">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-4">
              <Code2 size={20} />
            </div>
            <h4 className="text-base font-bold text-foreground mb-2">
              Weekly Live Staging Demos
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Every Friday, you receive a live private staging URL. Test every screen on your phone and laptop as we build — zero guesswork.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-border/70 shadow-xs hover:border-primary/40 transition-all">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <ShieldCheck size={20} />
            </div>
            <h4 className="text-base font-bold text-foreground mb-2">
              Fixed Scope & Budget Guarantee
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              We define every screen and feature before touching code. What we quote is what you pay — no surprise invoices or hidden hourly fees.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-border/70 shadow-xs hover:border-primary/40 transition-all">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
              <MessageSquare size={20} />
            </div>
            <h4 className="text-base font-bold text-foreground mb-2">
              Direct Founder Communication
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              No account managers or telephone games. You have a direct WhatsApp and Slack channel to the senior engineers building your app.
            </p>
          </div>
        </div>

        {/* Full Methodology Link Button */}
        <div className="mt-8 text-center">
          <Link
            href="/process"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 border border-border/80 hover:border-primary/50 text-foreground hover:text-primary text-xs sm:text-sm font-bold transition-all shadow-xs hover:shadow-sm group cursor-pointer"
          >
            <span>Explore Our Full 6-Phase Engineering Playbook & Sprint Cadence</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform text-primary" />
          </Link>
        </div>

      </div>
    </section>
  );
}
