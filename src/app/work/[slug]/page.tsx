import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, CheckCircle2, Star } from "lucide-react";
import { projects } from "@/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import FadeIn from "@/components/FadeIn";

// Generate static paths for Vercel production
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Next.js 15 requires async page props for dynamic routes
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      <Navbar />
      
      {/* Project Hero */}
      <section className="pt-32 pb-12 md:pt-36 md:pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <FadeIn direction="left">
          <Link href="/work" className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-primary mb-8 transition-colors group">
            <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to All Projects
          </Link>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
          <FadeIn direction="up" delay={0.1} className="lg:col-span-7">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                <span>{project.category}</span>
                <span className="text-slate-300">•</span>
                <span>{project.industry}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground mb-4 leading-tight">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-6 relative group overflow-hidden inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/95 transition-all shadow-xs text-sm"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                  <span>Visit Live Product</span>
                  <ExternalLink size={15} />
                </a>
              )}
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2} className="lg:col-span-5">
            <div className="space-y-6 p-6 sm:p-7 rounded-3xl bg-card border border-border/80 shadow-xs">
              <div>
                <h3 className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-3">Core Tech Stack</h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-50 text-slate-700 border border-slate-200/70 rounded-lg text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border/60">
                <div>
                  <h3 className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-0.5">Client</h3>
                  <p className="font-bold text-foreground text-sm">{project.caseStudy.testimonial?.client || "Confidential"}</p>
                </div>
                <div>
                  <h3 className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-0.5">Timeline</h3>
                  <p className="font-bold text-foreground text-sm">8–12 Weeks</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Hero Showcase Image */}
        <FadeIn direction="up" delay={0.25}>
          <div className="w-full h-[320px] sm:h-[440px] md:h-[500px] bg-slate-100 rounded-3xl overflow-hidden relative group border border-border/80 shadow-xs mb-16">
            <img 
              src={project.showcaseImage}
              alt={`${project.title} Interface Showcase`}
              className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-700"
            />
          </div>
        </FadeIn>
      </section>

      {/* Case Study Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-24">
        <div className="space-y-10">
          
          <FadeIn direction="up">
            <div className="p-8 sm:p-10 rounded-3xl bg-card border border-border/80 shadow-xs">
              <h2 className="text-2xl sm:text-3xl font-black mb-4 text-foreground">The Challenge</h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {project.caseStudy.challenge}
              </p>
            </div>
          </FadeIn>
          
          <FadeIn direction="up">
            <div className="p-8 sm:p-10 rounded-3xl bg-card border border-blue-100 bg-blue-50/20 shadow-xs">
              <h2 className="text-2xl sm:text-3xl font-black mb-4 text-foreground">Our Solution</h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {project.caseStudy.solution}
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-card p-8 md:p-10 rounded-3xl border border-border/80 shadow-xs">
              <div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Design Process</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {project.caseStudy.designProcess}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Development Process</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {project.caseStudy.developmentProcess}
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black mb-6 text-foreground">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.caseStudy.keyFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-5 bg-card rounded-2xl border border-border/70 hover:border-primary/50 hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200">
                    <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={18} />
                    <span className="font-semibold text-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up">
            <div className="p-8 md:p-12 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-3xl text-center shadow-xs">
              <h2 className="text-xs text-primary uppercase tracking-widest font-black mb-3">The Measurable Impact</h2>
              <p className="text-2xl md:text-3xl font-black text-foreground leading-tight max-w-2xl mx-auto">
                {project.caseStudy.results}
              </p>
            </div>
          </FadeIn>

          {project.caseStudy.testimonial && (
            <FadeIn direction="up">
              <div className="p-8 sm:p-10 rounded-3xl bg-card border border-border/80 shadow-[0_10px_35px_rgba(0,0,0,0.04)] relative overflow-hidden">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                    Verified Client Review
                  </span>
                </div>
                <blockquote className="text-lg sm:text-xl font-medium text-foreground/90 italic mb-6 leading-relaxed">
                  "{project.caseStudy.testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold text-sm">
                    {project.caseStudy.testimonial.client[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm">
                      {project.caseStudy.testimonial.client}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {project.caseStudy.testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          )}

        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
