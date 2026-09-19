"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects, ProjectCategory } from "@/data";
import { motion, AnimatePresence } from "framer-motion";

interface PortfolioSectionProps {
  limit?: number;
  isPage?: boolean;
}

export default function PortfolioSection({ limit, isPage = false }: PortfolioSectionProps) {
  const [filter, setFilter] = useState<ProjectCategory>("All");
  
  const categories: ProjectCategory[] = ["All", "Websites", "Mobile Apps", "E-commerce", "Custom Software", "UI/UX"];
  
  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter
  );
  
  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section className={`bg-transparent ${isPage ? "pb-24 pt-2" : "py-24"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: only show if NOT on dedicated /work page */}
        {!isPage ? (
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Featured Client Work</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-[1.15] mb-3">
                Real software built for real businesses.
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Take a look at recent digital platforms, mobile apps, and custom business systems we engineered for our clients.
              </p>
            </motion.div>
            
            <Link
              href="/work"
              className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/95 transition-all shadow-xs hover:shadow-md shrink-0 self-end"
            >
              <span>View All Projects</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          /* Centered Filter Bar on dedicated /work page */
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-white/80 backdrop-blur-md border border-border/80 shadow-xs">
              {categories.map((category) => {
                const isSelected = filter === category;
                return (
                  <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-slate-100/60"
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activePortfolioFilter"
                        className="absolute inset-0 bg-primary rounded-full -z-10 shadow-[0_4px_14px_rgba(37,99,235,0.25)]"
                        transition={{ type: "spring", stiffness: 450, damping: 30 }}
                      />
                    )}
                    <span>{category}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Animated Project Cards Grid (Split Editorial Cards) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-9">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, idx) => (
              <motion.div 
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl overflow-hidden bg-card border border-border/80 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_16px_40px_rgba(37,99,235,0.1)] flex flex-col h-full"
              >
                <Link 
                  href={`/work/${project.slug}`} 
                  className="absolute inset-0 z-30" 
                  aria-label={`View ${project.title} case study`} 
                />
                
                {/* 1. Visual Showcase Header */}
                <div className="relative w-full h-60 sm:h-72 overflow-hidden bg-slate-100 border-b border-border/60 shrink-0">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
                  
                  {/* Floating Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-primary border border-white/40 shadow-xs">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-xs font-semibold text-white border border-white/10 shadow-xs">
                      {project.industry}
                    </span>
                  </div>
                </div>
                
                {/* 2. Structured Card Content (Clean Flow, Zero Overlap) */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-white">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-xl sm:text-2xl font-black text-foreground group-hover:text-primary transition-colors tracking-tight leading-snug">
                        {project.title}
                      </h3>
                      <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0 mt-0.5 shadow-xs">
                        <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-5">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Card Footer: Tech Stack & Case Study Link */}
                  <div className="pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2.5 py-1 text-xs font-medium bg-slate-50 text-slate-700 rounded-lg border border-slate-200/70">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs font-medium text-slate-400 bg-slate-50 rounded-lg">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <span className="text-xs font-bold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Case Study →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Mobile-only "View All" Button on homepage */}
        {!isPage && limit && (
          <div className="mt-12 text-center md:hidden">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-bold text-sm shadow-sm"
            >
              <span>View All 6 Case Studies</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
