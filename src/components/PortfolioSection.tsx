"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects, ProjectCategory } from "@/data";

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
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">
              OUR WORK
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              REAL PROJECTS. REAL SOLUTIONS.
            </h3>
            <p className="text-lg text-muted-foreground max-w-xl">
              We don't just showcase screens. We showcase what technology can do for a business.
            </p>
          </div>
          
          {/* Filters - only show if not limited (i.e. on the full work page) */}
          {!limit && (
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(79,70,229,0.18)] hover:-translate-y-1.5"
            >
              <Link href={`/work/${project.slug}`} className="absolute inset-0 z-30" aria-label={`View ${project.title} case study`} />
              
              {/* Actual Image */}
              <div className="w-full h-[300px] sm:h-[400px] bg-secondary/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90 z-10 transition-opacity group-hover:opacity-60 duration-500"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-sm font-bold text-primary mb-2">
                      {project.industry}
                    </div>
                    <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground line-clamp-2 max-w-md">
                      {project.description}
                    </p>
                  </div>
                  
                  <div 
                    className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_rgba(37,99,235,0.5)] shrink-0"
                  >
                    <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>
                
                <div className="flex gap-2 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {limit && (
          <div className="mt-16 text-center">
            <Link 
              href="/work" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground font-bold rounded-full hover:bg-secondary transition-all border border-border"
            >
              View All Projects
              <ArrowRight size={20} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
