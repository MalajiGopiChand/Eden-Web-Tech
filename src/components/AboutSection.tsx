"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowUpRight, ArrowRight, CheckCircle2, ShieldCheck, Zap, Sparkles, Lock, Code2, Users } from "lucide-react";
import { motion } from "framer-motion";

const studioPillars = [
  {
    id: "01",
    title: "Zero Agency Bloat",
    desc: "No non-technical account managers or outsourced junior contractors. You talk directly with the engineers writing your code.",
    icon: Users
  },
  {
    id: "02",
    title: "100% Fixed Milestone Budget",
    desc: "Detailed scope mapped before any contract is signed. What we quote is what you pay — zero hidden hourly overages.",
    icon: ShieldCheck
  },
  {
    id: "03",
    title: "Weekly Friday Staging Demos",
    desc: "Every Friday, you receive a working private staging URL to test progress on your actual phone and browser. Zero guesswork.",
    icon: Zap
  },
  {
    id: "04",
    title: "Full Code & IP Handover",
    desc: "Upon final milestone settlement, 100% of the repository, Figma designs, and cloud infrastructure belongs entirely to you.",
    icon: Lock
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-transparent border-y border-border/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Leadership Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles size={13} />
            <span>Studio Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight mb-4 leading-[1.15]">
            Engineered with rigor. Built by founders.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            We founded Eden because we were tired of traditional agency bloat: endless meetings, junior contractors, and code that breaks the moment real traffic arrives. Here is who builds your product.
          </p>
        </div>

        {/* Leadership Executive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-20">
          
          {/* Founder: Malaji Gopichand */}
          <div className="group p-6 sm:p-8 lg:p-9 rounded-3xl bg-white border border-border/80 hover:border-primary/50 transition-all duration-300 shadow-xs hover:shadow-[0_16px_40px_rgba(37,99,235,0.08)] flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:gap-7 mb-6 text-center sm:text-left">
                {/* Arranged Executive Portrait Frame */}
                <div className="relative w-40 sm:w-44 lg:w-48 aspect-[4/5] shrink-0 mx-auto sm:mx-0">
                  <div className="relative w-full h-full p-2 rounded-2xl bg-white border-2 border-slate-200/90 shadow-md shadow-slate-200/60 ring-1 ring-slate-900/5 group-hover:border-primary/50 group-hover:shadow-lg transition-all duration-300">
                    <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80">
                      <Image 
                        src="/images/ceo.jpg" 
                        alt="Malaji Gopichand - Founder & Lead Systems Architect" 
                        fill 
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 160px, (max-width: 1024px) 176px, 192px"
                        priority
                      />
                    </div>
                    {/* Anchored Executive Badge */}
                    <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-white border border-slate-200 shadow-xs flex items-center gap-1.5 whitespace-nowrap z-10">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-800">Founder & CEO</span>
                    </div>
                  </div>
                </div>

                {/* Identity & Direct Access */}
                <div className="flex-1 min-w-0 pt-1">
                  <h3 className="text-2xl lg:text-3xl font-black text-foreground tracking-tight">
                    Malaji Gopichand
                  </h3>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-wider my-2 border border-blue-100">
                    <ShieldCheck size={13} className="text-primary shrink-0" />
                    <span>Founder & Lead Systems Architect</span>
                  </div>
                  <p className="text-xs text-muted-foreground font-mono leading-relaxed mb-4">
                    Next.js • React Native • Node.js • Cloud Architecture
                  </p>

                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1">
                    <Link 
                      href="https://www.linkedin.com/in/malajigopichand/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-primary hover:text-white text-foreground transition-all text-xs font-bold shadow-xs cursor-pointer"
                    >
                      <span>LinkedIn Profile</span>
                      <ArrowUpRight size={13} />
                    </Link>

                    <a 
                      href="mailto:edenwebtechnologies@gmail.com" 
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-primary hover:text-white text-foreground transition-all text-xs font-bold shadow-xs"
                    >
                      <Mail size={13} />
                      <span>Email Gopichand</span>
                    </a>
                  </div>
                </div>
              </div>

              <blockquote className="p-4 rounded-2xl bg-slate-50/80 border border-border/60 text-xs sm:text-sm text-foreground/90 italic leading-relaxed mb-5">
                "We treat every client codebase as if our own capital was at stake. Clean architecture, strict type safety, and software that scales effortlessly."
              </blockquote>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Leading engineering across 20+ shipped web and mobile products. Gopi works hands-on with founders to transform business requirements into robust, high-performing digital platforms.
              </p>
            </div>
          </div>

          {/* Co-Founder: Mercy */}
          <div className="group p-6 sm:p-8 lg:p-9 rounded-3xl bg-white border border-border/80 hover:border-primary/50 transition-all duration-300 shadow-xs hover:shadow-[0_16px_40px_rgba(37,99,235,0.08)] flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:gap-7 mb-6 text-center sm:text-left">
                {/* Arranged Executive Portrait Frame */}
                <div className="relative w-40 sm:w-44 lg:w-48 aspect-[4/5] shrink-0 mx-auto sm:mx-0">
                  <div className="relative w-full h-full p-2 rounded-2xl bg-white border-2 border-slate-200/90 shadow-md shadow-slate-200/60 ring-1 ring-slate-900/5 group-hover:border-primary/50 group-hover:shadow-lg transition-all duration-300">
                    <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80">
                      <Image 
                        src="/images/co-ceo.jpg" 
                        alt="Mercy - Co-Founder & Head of Operations" 
                        fill 
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 160px, (max-width: 1024px) 176px, 192px"
                      />
                    </div>
                    {/* Anchored Executive Badge */}
                    <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-white border border-slate-200 shadow-xs flex items-center gap-1.5 whitespace-nowrap z-10">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-800">Co-Founder & COO</span>
                    </div>
                  </div>
                </div>

                {/* Identity & Direct Access */}
                <div className="flex-1 min-w-0 pt-1">
                  <h3 className="text-2xl lg:text-3xl font-black text-foreground tracking-tight">
                    Mercy
                  </h3>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-wider my-2 border border-blue-100">
                    <CheckCircle2 size={13} className="text-primary shrink-0" />
                    <span>Co-Founder & Head of Operations</span>
                  </div>
                  <p className="text-xs text-muted-foreground font-mono leading-relaxed mb-4">
                    Sprint Delivery • Milestone Governance • Client Success
                  </p>

                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1">
                    <a 
                      href="mailto:edenwebtechnologies@gmail.com" 
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-primary hover:text-white text-foreground transition-all text-xs font-bold shadow-xs"
                    >
                      <Mail size={13} />
                      <span>Email Mercy</span>
                    </a>

                    <a 
                      href="https://wa.me/919705527264?text=Hi%20Mercy%2C%20I%20would%20like%20to%20discuss%20a%20new%20project%20with%20Eden." 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-emerald-600 hover:text-white text-foreground transition-all text-xs font-bold shadow-xs"
                    >
                      <span>WhatsApp Connect</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              </div>

              <blockquote className="p-4 rounded-2xl bg-slate-50/80 border border-border/60 text-xs sm:text-sm text-foreground/90 italic leading-relaxed mb-5">
                "Predictability is our promise. Weekly Friday staging demos, zero surprise invoices, and direct, honest communication at every milestone."
              </blockquote>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Managing sprint pipelines, cross-functional delivery, and milestone quality standards. Mercy ensures every build is delivered on schedule with total transparency.
              </p>
            </div>
          </div>

        </div>

        {/* 4 Studio Pillars of Engineering */}
        <div className="mb-14">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
              Why founders trust Eden to engineer their products
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base mt-1 max-w-xl mx-auto">
              Our four foundational commitments to every client who builds with us.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {studioPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={pillar.id}
                  className="p-6 rounded-3xl bg-white border border-border/70 hover:border-primary/40 transition-all duration-300 shadow-xs hover:shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-blue-50 text-primary flex items-center justify-center shadow-xs">
                        <Icon size={19} />
                      </div>
                      <span className="text-xs font-mono font-bold text-muted-foreground/50">
                        {pillar.id}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-foreground mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Link to Dedicated About Page */}
        <div className="text-center pt-2">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 border border-border/80 hover:border-primary/50 text-foreground hover:text-primary text-xs sm:text-sm font-bold transition-all shadow-xs hover:shadow-sm group cursor-pointer"
          >
            <span>Read Our Full Story, Mission & Studio Culture</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform text-primary" />
          </Link>
        </div>

      </div>
    </section>
  );
}
