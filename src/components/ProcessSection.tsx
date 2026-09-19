"use client";

import { processSteps } from "@/data";
import { motion } from "framer-motion";

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-background relative overflow-hidden">
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
          {/* Glowing Animated Timeline line */}
          <div className="absolute left-[28px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-indigo-400 to-primary/20"></div>
          
          <div className="space-y-12">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={step.id} className="relative flex flex-col md:flex-row items-start md:items-center w-full">
                  
                  {/* Timeline dot */}
                  <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="absolute left-[16px] md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-background border-4 border-primary z-10 flex items-center justify-center shadow-[0_0_12px_rgba(79,70,229,0.5)]"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></div>
                  </motion.div>
                  
                  {/* Content Left (Desktop) */}
                  <div className={`pl-16 md:pl-0 w-full md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:order-2 md:pl-16 md:text-left'}`}>
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-7 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(79,70,229,0.1)] inline-block w-full text-left group"
                    >
                      <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-mono text-xs font-bold mb-3">
                        STEP {step.id}
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
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
