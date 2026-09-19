"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects, ProjectCategory } from "@/data";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioSection({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<ProjectCategory>("All");
  
  const categories: ProjectCategory[] = ["All", "Websites", "Mobile Apps", "E-commerce", "UI/UX"];
  
  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter
  );
  
  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">
              OUR WORK
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              REAL PROJECTS. REAL SOLUTIONS.
            </h3>
            <p className="text-lg text-muted-foreground max-w-xl">
              We don't just showcase screens. We showcase what technology can do for a business.
            </p>
          </motion.div>
          
          {/* Animated Category Filter Pills */}
          {!limit && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-2"
            >
              {categories.map((category) => {
                const isSelected = filter === category;
                return (
                  <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                      isSelected
                        ? "text-primary-foreground"
                        : "bg-white/80 text-muted-foreground hover:text-foreground border border-border/60 hover:border-primary/40"
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activePortfolioFilter"
                        className="absolute inset-0 bg-primary rounded-full -z-10 shadow-[0_4px_14px_rgba(37,99,235,0.3)]"
                        transition={{ type: "spring", stiffness: 450, damping: 30 }}
                      />
                    )}
                    <span>{category}</span>
                  </button>
                );
              })}
            </motion.div>
          )}
        </div>

        {/* Animated Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, idx) => (
              <motion.div 
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-400 hover:shadow-[0_20px_50px_rgba(37,99,235,0.14)]"
              >
                <Link href={`/work/${project.slug}`} className="absolute inset-0 z-30" aria-label={`View ${project.title} case study`} />
                
                {/* Showcase Image with Smooth Scale */}
                <div className="w-full h-[320px] sm:h-[400px] bg-secondary/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-80 z-10 transition-opacity group-hover:opacity-60 duration-500"></div>
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-cyan-300 mb-2">
                        {project.industry}
                      </div>
                      <h4 className="text-2xl md:text-3xl font-black text-white mb-2 group-hover:text-cyan-200 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-slate-200 text-sm line-clamp-2 max-w-md leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    {/* Floating Action Arrow */}
                    <div 
                      className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-[0_4px_20px_rgba(37,99,235,0.6)] shrink-0 ml-4"
                    >
                      <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  {/* Tech Tags Staggered Display */}
                  <div className="flex flex-wrap gap-2 mt-5 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs font-semibold bg-white/20 backdrop-blur-md text-white rounded-full border border-white/20">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2.5 py-1 text-xs font-semibold bg-white/15 backdrop-blur-md text-white/90 rounded-full border border-white/10">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
