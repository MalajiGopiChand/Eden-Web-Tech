import { technologies } from "@/data";

export default function TechnologiesSection() {
  return (
    <section className="py-20 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">
            Technology Stack
          </h2>
          <h3 className="text-2xl font-bold text-foreground">
            Tools we use to build the future
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="px-6 py-3 rounded-full bg-background border border-border/50 text-muted-foreground font-medium hover:border-primary/50 hover:text-primary hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md cursor-default"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
