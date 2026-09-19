"use client";

import { useState } from "react";
import { 
  Compass, 
  Kanban, 
  PenTool, 
  Code2, 
  Rocket, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  ArrowLeft,
  FileCheck,
  UserCheck,
  ShieldCheck,
  Cpu,
  Layers
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const phaseData = [
  {
    id: "01",
    phaseNumber: "PHASE 01",
    title: "Discovery & Technical Strategy",
    duration: "Week 1",
    subtitle: "We listen first, understand your business model, and map out a lean architecture without bloated costs.",
    icon: Compass,
    clientInputs: [
      "Core business goals & target customer profile",
      "Branding guidelines, logos & visual inspirations",
      "Competitor URLs and must-have feature wishlists",
      "Target launch deadlines and business priorities"
    ],
    deliverables: [
      "Product Vision & Architecture Blueprint",
      "Target User Journey & Persona Breakdown",
      "Categorized Feature Priority List (MVP vs V2)",
      "100% Fixed Scope & Milestone Budget Quote"
    ],
    milestoneApproval: "Mutual agreement on exact scope and fixed timeline before any design or code starts.",
    tools: ["FigJam", "Miro", "Notion", "Google Meet"]
  },
  {
    id: "02",
    phaseNumber: "PHASE 02",
    title: "Architecture & Sprint Roadmap",
    duration: "Weeks 1–2",
    subtitle: "We turn requirements into technical specifications, database schemas, and a sprint-by-sprint milestone schedule.",
    icon: Kanban,
    clientInputs: [
      "Existing third-party service accounts (Stripe, Twilio, etc.)",
      "Domain and DNS access credentials (if ready)",
      "Clarifications on complex business rules & payment splits"
    ],
    deliverables: [
      "Complete Relational / NoSQL Database Schema",
      "REST & GraphQL API Endpoints Specification",
      "Detailed Weekly Sprint Milestone Calendar",
      "Security & Authentication Architecture Plan"
    ],
    milestoneApproval: "Client reviews and signs off on the technical sprint roadmap.",
    tools: ["Linear", "PostgreSQL", "GitHub Projects", "Swagger"]
  },
  {
    id: "03",
    phaseNumber: "PHASE 03",
    title: "UI/UX & Interactive Prototyping",
    duration: "Weeks 2–3",
    subtitle: "You click through real interactive prototypes on your phone and laptop before any backend code is written.",
    icon: PenTool,
    clientInputs: [
      "Feedback on clickable Figma screen flows",
      "Content copywriting, product catalogs, or imagery",
      "Approval of brand color schemes and typography"
    ],
    deliverables: [
      "High-Fidelity Interactive Figma Prototype",
      "Complete Design Token & Component System",
      "Mobile App (iOS/Android) & Desktop Breakpoint Views",
      "Exported SVG Assets & Icon Libraries"
    ],
    milestoneApproval: "100% client approval of all clickable UI screens before development kickoff.",
    tools: ["Figma", "Tailwind CSS", "Framer", "Adobe Suite"]
  },
  {
    id: "04",
    phaseNumber: "PHASE 04",
    title: "Agile Full-Stack Development",
    duration: "Weeks 3–6",
    subtitle: "We build with Next.js and React Native. You receive live private staging links every Friday to test progress.",
    icon: Code2,
    clientInputs: [
      "Weekly 20-minute Friday staging demo review",
      "Real-device user testing feedback",
      "Payment gateway sandbox testing"
    ],
    deliverables: [
      "Clean, maintainable Next.js 16 & React Native code",
      "Live Private Staging URL updated every Friday",
      "Integrated Payment Gateways & WhatsApp Webhooks",
      "Automated End-to-End & Integration Test Suite"
    ],
    milestoneApproval: "Weekly demo acceptance and sign-off on completed sprint features.",
    tools: ["Next.js 16", "React 19", "React Native", "TypeScript", "Node.js", "Vercel"]
  },
  {
    id: "05",
    phaseNumber: "PHASE 05",
    title: "Testing, Security & Public Launch",
    duration: "Week 7",
    subtitle: "We execute cross-browser audits, security penetration checks, SEO optimization, and conduct a zero-downtime launch.",
    icon: Rocket,
    clientInputs: [
      "Final staging sign-off across all user roles",
      "Production domain and hosting access authorization",
      "App Store & Google Play developer account invites"
    ],
    deliverables: [
      "Zero-Downtime Public Production Deployment",
      "95+ Google Lighthouse Performance & SEO Score",
      "Automated SSL, Security Headers & DDoS Protection",
      "Published App Store & Play Store Production Builds"
    ],
    milestoneApproval: "Successful public release and complete repository handover.",
    tools: ["Lighthouse CI", "Sentry", "Cloudflare", "Jest", "Playwright"]
  },
  {
    id: "06",
    phaseNumber: "PHASE 06",
    title: "Continuous Scaling & Maintenance",
    duration: "Ongoing",
    subtitle: "We stay with you post-launch. Complimentary 30-day warranty plus proactive monthly scaling retainers.",
    icon: TrendingUp,
    clientInputs: [
      "Feature priority requests from real customer feedback",
      "Traffic analytics review and scaling goals"
    ],
    deliverables: [
      "24/7 Automated Server & Uptime Health Monitoring",
      "Immediate Bug Squashing & Security Patches",
      "Database Query Optimization as Traffic Scales",
      "Continuous Iteration Sprints for New Features"
    ],
    milestoneApproval: "Monthly performance reviews and continuous SLA adherence.",
    tools: ["Sentry", "AWS CloudWatch", "Datadog", "Google Analytics 4"]
  }
];

export default function ProcessTimelineView() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = phaseData[activeIndex];
  const Icon = current.icon;

  return (
    <div className="space-y-10">
      {/* Responsive Phase Selector Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
        {phaseData.map((item, idx) => {
          const isActive = activeIndex === idx;
          const StepIcon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveIndex(idx)}
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
                  PHASE {item.id}
                </span>
                <StepIcon size={16} className={isActive ? "text-primary" : "text-muted-foreground"} />
              </div>
              <div>
                <h4 className={`text-xs sm:text-sm font-bold line-clamp-1 ${
                  isActive ? "text-primary" : "text-foreground"
                }`}>
                  {item.title}
                </h4>
                <p className="text-[11px] text-muted-foreground mt-0.5 font-medium">
                  {item.duration}
                </p>
              </div>
              {isActive && (
                <motion.div
                  layoutId="activeProcessTimelineIndicator"
                  className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Active Phase Deep Dive Dossier */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
          className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-blue-100 shadow-[0_12px_36px_rgba(0,0,0,0.04)] relative overflow-hidden"
        >
          {/* Header Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border/60 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-xs shrink-0">
                <Icon size={26} />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-bold text-primary bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
                    {current.phaseNumber}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground bg-slate-100 px-2.5 py-0.5 rounded-md">
                    <Clock size={12} className="text-primary" /> {current.duration}
                  </span>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-100">
                    Step {activeIndex + 1} of 6
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                  {current.title}
                </h3>
              </div>
            </div>

            {/* Step Jumper Controls */}
            <div className="flex items-center gap-2 self-start md:self-auto">
              <button
                onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
                disabled={activeIndex === 0}
                className={`p-2.5 rounded-xl border transition-all ${
                  activeIndex === 0
                    ? "opacity-40 cursor-not-allowed border-border/60 text-muted-foreground"
                    : "border-border/80 text-foreground hover:border-primary hover:text-primary cursor-pointer bg-white"
                }`}
                aria-label="Previous Phase"
              >
                <ArrowLeft size={16} />
              </button>

              <button
                onClick={() => setActiveIndex((prev) => Math.min(phaseData.length - 1, prev + 1))}
                disabled={activeIndex === phaseData.length - 1}
                className={`p-2.5 rounded-xl border transition-all ${
                  activeIndex === phaseData.length - 1
                    ? "opacity-40 cursor-not-allowed border-border/60 text-muted-foreground"
                    : "bg-primary text-primary-foreground border-primary hover:bg-primary/90 cursor-pointer shadow-xs"
                }`}
                aria-label="Next Phase"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            {current.subtitle}
          </p>

          {/* 2-Column Split: Client Inputs vs Deliverables */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Left: What We Need From You */}
            <div className="p-6 rounded-2xl bg-slate-50/80 border border-border/70 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                  <UserCheck size={16} className="text-primary" />
                  <span>What We Ask From You</span>
                </div>
                <ul className="space-y-3">
                  {current.clientInputs.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-medium text-foreground/90">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 mt-6 border-t border-border/60 text-xs text-muted-foreground">
                Minimal meetings — clear, structured async questionnaires so you don't waste valuable executive time.
              </div>
            </div>

            {/* Right: Tangible Deliverables */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50/40 via-white to-emerald-50/30 border border-blue-100 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                    <FileCheck size={16} />
                    <span>Tangible Outputs & Assets</span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                    100% Client Owned
                  </span>
                </div>
                <ul className="space-y-3">
                  {current.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-bold text-foreground bg-white p-3 rounded-xl border border-border/60 shadow-xs">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 mt-6 border-t border-border/60 flex items-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck size={14} className="text-emerald-600 shrink-0" />
                <span>Sign-off gate: {current.milestoneApproval}</span>
              </div>
            </div>
          </div>

          {/* Tools Used Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-border/60">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              <Layers size={14} className="text-primary" />
              <span>Industry Tools Used in this Phase:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {current.tools.map((tool, idx) => (
                <span key={idx} className="px-3 py-1 bg-white rounded-lg border border-border/70 text-xs font-semibold text-foreground/80 shadow-xs">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
