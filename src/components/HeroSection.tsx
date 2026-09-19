"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowDown, Star, CheckCircle, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState(0);

  const featuredProjects = [
    {
      name: "NexaPay Global",
      category: "FinTech & Payments",
      tagline: "Next-gen cross-border treasury & liquidity management for modern global enterprises.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
      slug: "nexapay-global",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe Connect"],
      highlight: "$140M+ Processed"
    },
    {
      name: "Aura Telehealth",
      category: "Healthcare & Biotech",
      tagline: "HIPAA-compliant video triage, smart scheduling, and instant prescription routing.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
      slug: "aura-health-ai",
      tech: ["React Native", "WebRTC", "FastAPI", "Python"],
      highlight: "85,000+ Patients"
    },
    {
      name: "Lumina Living",
      category: "Luxury E-Commerce",
      tagline: "Ultra-fast headless commerce with interactive 3D spatial previews & checkout.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
      slug: "lumina-living",
      tech: ["Next.js", "Three.js", "Shopify", "Stripe"],
      highlight: "+38% Conversion"
    },
    {
      name: "Strata Cloud",
      category: "Enterprise Cloud SaaS",
      tagline: "Multi-cloud observability, automated anomaly detection, & unified telemetry.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1600&q=80",
      slug: "strata-cloud-intelligence",
      tech: ["React", "TypeScript", "ClickHouse", "Go"],
      highlight: "-58% MTTR"
    },
  ];

  const activeProject = featuredProjects[activeTab];

  return (
    <section className="relative min-h-[92vh] flex items-center pt-32 pb-20 overflow-hidden bg-transparent">
      {/* Subtle ambient light glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-40">
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-[130px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[450px] h-[450px] rounded-full bg-cyan-300/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Authentic Human Headline & Pitch */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-7">
            
            {/* Friendly Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase tracking-wider"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Web & Mobile Development Studio</span>
            </motion.div>

            {/* Human Headline (No shouting all-caps) */}
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
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
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl"
            >
              Eden is an independent software studio. We partner directly with founders and business owners to build high-converting websites, fast mobile apps, and custom tools that solve real problems.
            </motion.p>
            
            {/* CTA Buttons with Tactile Spring Feel */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Link 
                  href="/contact" 
                  className="relative group overflow-hidden flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/95 transition-all shadow-[0_6px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_10px_30px_rgba(37,99,235,0.35)] w-full sm:w-auto"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                  <span>Start Your Project</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Link 
                  href="/work" 
                  className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-foreground font-semibold rounded-full hover:bg-slate-50 transition-all border border-border hover:border-primary/40 shadow-xs w-full sm:w-auto"
                >
                  <span>Explore Our Work</span>
                  <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform duration-200" />
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Real Social Proof & Trust Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap items-center gap-6 pt-3 border-t border-border/60 w-full"
            >
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-sm font-bold text-foreground ml-1.5">4.8 out of 5</span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Based on 20+ verified client deliveries
                </p>
              </div>

              <div className="hidden sm:block h-7 w-px bg-border/80" />

              <div className="text-xs text-muted-foreground space-y-0.5">
                <p className="font-semibold text-foreground flex items-center gap-1">
                  <CheckCircle size={13} className="text-emerald-500" /> Direct Founder Collaboration
                </p>
                <p>No middlemen • Weekly staging demos</p>
              </div>
            </motion.div>

          </div>
          
          {/* Right Column: REAL Interactive Portfolio Showcase (Not a fake code editor!) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 w-full"
          >
            <div className="rounded-3xl bg-card border border-border/80 shadow-[0_16px_45px_rgba(0,0,0,0.06)] overflow-hidden">
              
              {/* Window Header with Project Switcher Tabs */}
              <div className="px-5 py-4 border-b border-border/60 bg-slate-50/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-400/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-400/80"></span>
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground ml-2">Recent Client Launches</span>
                </div>

                {/* Tab buttons */}
                <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
                  {featuredProjects.map((p, idx) => (
                    <button
                      key={p.name}
                      onClick={() => setActiveTab(idx)}
                      className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                        activeTab === idx
                          ? "bg-white text-primary shadow-xs border border-border/80"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {p.name.split(" ")[0]}
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
                    transition={{ duration: 0.35 }}
                    className="space-y-5"
                  >
                    {/* High-Resolution Flagship Product Showcase */}
                    <div className="relative w-full h-[260px] sm:h-[300px] rounded-2xl overflow-hidden bg-slate-100 border border-border/70 group shadow-inner">
                      <img 
                        src={activeProject.image} 
                        alt={activeProject.name}
                        className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      
                      {/* Badge over screenshot */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                        <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md font-semibold border border-white/10">
                          {activeProject.category}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-emerald-600/90 backdrop-blur-md font-bold">
                          {activeProject.highlight}
                        </span>
                      </div>
                    </div>

                    {/* Project Metadata */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                      <div>
                        <h3 className="text-xl font-black text-foreground">{activeProject.name}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">{activeProject.tagline}</p>
                      </div>

                      <Link
                        href={`/work/${activeProject.slug}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-50 text-primary text-xs font-bold hover:bg-primary hover:text-white transition-all self-start sm:self-auto shrink-0 shadow-xs"
                      >
                        <span>Case Study</span>
                        <ExternalLink size={13} />
                      </Link>
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-border/50">
                      <span className="text-[11px] font-bold text-muted-foreground/80 uppercase tracking-wider mr-1">Stack:</span>
                      {activeProject.tech.map((t) => (
                        <span key={t} className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium border border-border/50">
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
