import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { projects } from "@/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

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
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      {/* Project Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <Link href="/work" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-12 transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Back to Work
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
          <div>
            <div className="text-primary font-bold tracking-widest text-sm uppercase mb-4">
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
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-full hover:bg-secondary/80 transition-colors"
              >
                Visit Live Site <ExternalLink size={18} />
              </a>
            )}
          </div>
          
          <div className="space-y-8 p-8 rounded-3xl bg-card border border-border h-fit">
            <div>
              <h3 className="text-sm text-muted-foreground uppercase tracking-widest font-semibold mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
              <div>
                <h3 className="text-sm text-muted-foreground uppercase tracking-widest font-semibold mb-2">Client</h3>
                <p className="font-medium text-foreground">{project.caseStudy.testimonial?.client || "Confidential"}</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground uppercase tracking-widest font-semibold mb-2">Timeline</h3>
                <p className="font-medium text-foreground">12 Weeks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-24">
        <div className="w-full h-[400px] md:h-[600px] lg:h-[700px] bg-secondary/50 rounded-3xl overflow-hidden relative group">
           <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-muted-foreground/30 font-bold text-4xl uppercase tracking-widest text-center">
               Project Showcase<br/>
               <span className="text-xl">Image Placeholder</span>
             </div>
           </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-24">
        <div className="space-y-24">
          
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">The Challenge</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.caseStudy.challenge}
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.caseStudy.solution}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-card p-8 md:p-12 rounded-3xl border border-border">
            <div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Design Process</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.caseStudy.designProcess}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Development Process</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.caseStudy.developmentProcess}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-foreground">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.caseStudy.keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 bg-background rounded-2xl border border-border">
                  <CheckCircle2 className="text-primary shrink-0" />
                  <span className="font-medium text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 md:p-12 bg-primary/10 border border-primary/20 rounded-3xl text-center">
            <h2 className="text-sm text-primary uppercase tracking-widest font-bold mb-4">The Impact</h2>
            <p className="text-2xl md:text-3xl font-bold text-foreground leading-tight max-w-2xl mx-auto">
              {project.caseStudy.results}
            </p>
          </div>

        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
