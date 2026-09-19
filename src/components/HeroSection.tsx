"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowDown, Star, CheckCircle, ExternalLink, ShieldCheck, Sparkles, Zap, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState(0);

  const featuredProjects = [
    {
      name: "PulseFit Gym & Athletic Club",
      shortName: "PulseFit Gym",
      badgeIcon: "🏋️",
      category: "Fitness & Gym Centers",
      tagline: "All-in-one gym membership pass, trainer slot booking & automated recurring billing.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80",
      slug: "pulsefit-gym",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe Recurring"],
      highlight: "+42% Renewals",
      statLabel: "Member Retention"
    },
    {
      name: "CarePoint Medical Clinic",
      shortName: "CarePoint Clinic",
      badgeIcon: "🏥",
      category: "Healthcare & Clinical Systems",
      tagline: "Token-based doctor appointments, live waiting queue & digital prescription vault.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
      slug: "carepoint-medical",
      tech: ["React Native", "WebRTC", "Node.js", "PostgreSQL"],
      highlight: "12,000+ Bookings",
      statLabel: "Patient Appointments"
    },
    {
      name: "QuickMart General Store",
      shortName: "QuickMart E-Cart",
      badgeIcon: "🛒",
      category: "Retail & Supermarkets",
      tagline: "Fast grocery e-cart ordering, barcode POS billing & automated WhatsApp delivery receipts.",
      image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1600&q=80",
      slug: "quickmart-ecart",
      tech: ["Next.js", "TypeScript", "MongoDB", "WhatsApp API"],
      highlight: "600+ Daily Orders",
      statLabel: "Active E-Cart Volume"
    },
    {
      name: "Lumina Living & Architecture",
      shortName: "Lumina Living",
      badgeIcon: "🛋️",
      category: "Luxury E-Commerce",
      tagline: "Ultra-fast headless commerce with interactive spatial previews & high-converting checkout.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
      slug: "lumina-living",
      tech: ["Next.js", "Three.js", "Shopify", "Stripe"],
      highlight: "+38% Conversion",
      statLabel: "Checkout Completion"
    },
  ];

  const activeProject = featuredProjects[activeTab];

  return (
    <section className="relative min-h-[92vh] flex items-center pt-20 pb-14 overflow-hidden bg-transparent">
      {/* Subtle ambient light aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-40">
        <div className="absolute top-[8%] left-[10%] w-[550px] h-[550px] rounded-full bg-blue-400/10 blur-[140px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-cyan-300/10 blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Authentic Human Headline & Pitch */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-7">
            
            {/* Live Studio Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase tracking-wider shadow-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Now Accepting New Projects • 100% In-House Team</span>
            </motion.div>

            {/* Main Punchy Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.12]"
            >
              We design and build digital products people{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                love to use.
              </span>
            </motion.h1>
            
            {/* Natural, honest copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl"
            >
              Eden is an independent software studio. We partner directly with founders and business owners to build high-converting websites, fast mobile apps, and custom software that solve real operational problems.
            </motion.p>

            {/* Quick Interactive Project Category Chips */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25 }}
              className="flex flex-wrap gap-2 pt-1"
            >
              {featuredProjects.map((p, idx) => (
                <button
                  key={p.slug}
                  onClick={() => setActiveTab(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 border ${
                    activeTab === idx
                      ? "bg-primary text-primary-foreground border-primary shadow-xs"
                      : "bg-white/80 text-muted-foreground border-border/70 hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  <span>{p.badgeIcon}</span>
                  <span>{p.shortName}</span>
                </button>
              ))}
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto pt-2"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Link 
                  href="/contact" 
                  className="relative group overflow-hidden flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-2xl hover:bg-primary/95 transition-all shadow-[0_8px_24px_rgba(37,99,235,0.25)] hover:shadow-[0_12px_32px_rgba(37,99,235,0.35)] w-full sm:w-auto text-sm sm:text-base cursor-pointer"
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
              >
                <Link 
                  href="/work" 
                  className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-foreground font-bold rounded-2xl hover:bg-slate-50 transition-all border border-border hover:border-primary/40 shadow-xs w-full sm:w-auto text-sm sm:text-base cursor-pointer"
                >
                  <span>Explore Case Studies</span>
                  <ArrowDown size={17} className="group-hover:translate-y-1 transition-transform duration-200 text-muted-foreground group-hover:text-primary" />
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Real Social Proof & Trust Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 pt-4 border-t border-border/60 w-full"
            >
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-sm font-bold text-foreground ml-1.5">4.8 / 5 Rating</span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Across 20+ shipped digital platforms
                </p>
              </div>

              <div className="hidden sm:block h-7 w-px bg-border/80" />

              <div className="text-xs text-muted-foreground space-y-0.5">
                <p className="font-semibold text-foreground flex items-center gap-1">
                  <CheckCircle size={13} className="text-emerald-500" /> Direct Senior Engineer Access
                </p>
                <p>No account manager telephone games • Weekly live demos</p>
              </div>
            </motion.div>

          </div>
          
          {/* Right Column: Live Interactive Product Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 w-full"
          >
            <div className="rounded-3xl bg-white border border-border/80 shadow-[0_16px_45px_rgba(0,0,0,0.06)] overflow-hidden">
              
              {/* Window Header with Project Switcher */}
              <div className="px-5 py-4 border-b border-border/60 bg-slate-50/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-400/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-400/80"></span>
                  </div>
                  <span className="text-xs font-bold text-muted-foreground ml-2">Recent Client Work</span>
                </div>

                {/* Tab buttons */}
                <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
                  {featuredProjects.map((p, idx) => (
                    <button
                      key={p.name}
                      onClick={() => setActiveTab(idx)}
                      className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                        activeTab === idx
                          ? "bg-white text-primary shadow-xs border border-border/80"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {p.shortName}
                    </button>
                  ))}
                </div>
              </div>

              {/* Showcase Image & Live Product Details */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.slug}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5"
                  >
                    {/* High-Resolution Flagship Product Showcase */}
                    <div className="relative w-full h-[260px] sm:h-[300px] rounded-2xl overflow-hidden bg-slate-100 border border-border/70 group shadow-inner">
                      <img 
                        src={activeProject.image} 
                        alt={activeProject.name}
                        className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent pointer-events-none" />
                      
                      {/* Floating Badges */}
                      <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white text-xs">
                        <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md font-bold border border-white/10">
                          {activeProject.category}
                        </span>
                        <div className="px-3 py-1 rounded-full bg-emerald-600/90 backdrop-blur-md font-bold flex items-center gap-1.5 shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          <span>{activeProject.highlight}</span>
                        </div>
                      </div>
                    </div>

                    {/* Project Metadata */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                      <div>
                        <h3 className="text-xl font-black text-foreground">{activeProject.name}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">{activeProject.tagline}</p>
                      </div>

                      <Link
                        href={`/work/${activeProject.slug}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-50 text-primary text-xs font-bold hover:bg-primary hover:text-white transition-all self-start sm:self-auto shrink-0 shadow-xs cursor-pointer"
                      >
                        <span>View Case Study</span>
                        <ExternalLink size={13} />
                      </Link>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-border/60">
                      <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mr-1">Stack:</span>
                      {activeProject.tech.map((t) => (
                        <span key={t} className="px-2.5 py-0.5 rounded-full bg-slate-50 text-slate-700 text-xs font-semibold border border-border/60">
                          {t}
                        </span>
                      ))}
                    </div>

                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
