import { processSteps } from "@/data";

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">
            FROM IDEA TO IMPACT.
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            A SIMPLE PROCESS. A SERIOUS APPROACH.
          </h3>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[28px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-border"></div>
          
          <div className="space-y-12">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={step.id} className="relative flex flex-col md:flex-row items-start md:items-center w-full">
                  
                  {/* Timeline dot */}
                  <div className="absolute left-[16px] md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-background border-4 border-primary z-10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                  </div>
                  
                  {/* Content Left (Desktop) */}
                  <div className={`pl-16 md:pl-0 w-full md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:order-2 md:pl-16 md:text-left'}`}>
                    <div className="glass p-6 rounded-2xl hover:border-primary/50 transition-colors inline-block w-full text-left">
                      <div className="text-primary font-mono text-sm mb-2">{step.id}</div>
                      <h4 className="text-xl font-bold text-foreground mb-2">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Empty Spacer (Desktop) */}
                  <div className={`hidden md:block w-1/2 ${isEven ? 'order-2' : 'order-1'}`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
