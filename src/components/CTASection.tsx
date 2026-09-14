import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-32 bg-card relative overflow-hidden">
      {/* Animated Background Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-full max-h-[800px] rounded-full bg-primary/5 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-accent/10 blur-[80px]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">
            HAVE A BUSINESS IDEA? DON'T KEEP IT IN YOUR NOTES.
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-foreground mb-8 leading-tight">
            READY TO BUILD <br /> SOMETHING GREAT?
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            That idea you've been thinking about could become your next website, application, platform, or business. Tell us what you're building, what problem you're solving, or simply where you want to start.
            <br/><br/>
            <strong className="text-foreground block mt-4 text-2xl">WE'LL HELP YOU FIGURE OUT THE REST.</strong>
          </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            href="/contact" 
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] w-full sm:w-auto"
          >
            Start a Project
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            href="/contact" 
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground font-bold rounded-full hover:bg-secondary transition-all border border-border w-full sm:w-auto"
          >
            <MessageSquare size={20} className="text-muted-foreground group-hover:text-foreground transition-colors" />
            Talk to Us
          </Link>
        </div>
      </div>
    </section>
  );
}
