import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
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
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <FadeIn direction="left">
          <Link href="/work" className="inline-flex items-center text-muted-foreground hover:text-primary mb-12 transition-colors group">
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1.5 transition-transform" />
            Back to Work
          </Link>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
          <FadeIn direction="up" delay={0.1}>
            <div>
              <div className="text-primary font-bold tracking-widest text-xs uppercase mb-4 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 inline-block">
                {project.category} • {project.industry}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-foreground mb-6 leading-[1.1]">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-8 relative group overflow-hidden inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/95 transition-all shadow-[0_6px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_10px_25px_rgba(37,99,235,0.35)]"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                  <span>Visit Live Site</span>
                  <ExternalLink size={17} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.25}>
            <div className="space-y-8 p-8 rounded-3xl bg-card border border-border/80 shadow-[0_8px_30px_rgba(0,0,0,0.03)] h-fit">
              <div>
                <h3 className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3.5 py-1.5 bg-secondary text-secondary-foreground border border-border/60 rounded-full text-xs font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border/60">
                <div>
                  <h3 className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Client</h3>
                  <p className="font-bold text-foreground text-sm">{project.caseStudy.testimonial?.client || "Confidential"}</p>
                </div>
                <div>
                  <h3 className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Timeline</h3>
                  <p className="font-bold text-foreground text-sm">12 Weeks</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Hero Image with Fade In */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-24">
        <FadeIn direction="up" delay={0.2}>
          <div className="w-full h-[400px] md:h-[600px] lg:h-[700px] bg-secondary/20 rounded-3xl overflow-hidden relative group border border-border shadow-md">
            <img 
              src={project.showcaseImage}
              alt={`${project.title} Interface Showcase`}
              className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </FadeIn>
      </section>

      {/* Case Study Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-24">
        <div className="space-y-20">
          
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

        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
