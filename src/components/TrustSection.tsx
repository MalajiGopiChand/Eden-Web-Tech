"use client";

import { SlidingNumber } from "@/components/animate-ui/primitives/texts/sliding-number";

export default function TrustSection() {
  const stats = [
    { number: 20, suffix: "+", label: "Projects", subLabel: "Successfully designed and developed" },
    { number: 10, suffix: "+", label: "Businesses", subLabel: "Supported with digital solutions" },
    { number: 5, suffix: "+", label: "Industries", subLabel: "Experience across different domains" },
    { number: 100, suffix: "%", label: "Commitment", subLabel: "Focused on client satisfaction" },
  ];

  return (
    <section className="py-12 border-y border-border bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <div className="text-4xl md:text-5xl font-bold tracking-tight text-foreground flex items-center justify-center">
                <SlidingNumber 
                  number={stat.number} 
                  fromNumber={0}
                  inView={true}
                  inViewOnce={true}
                  delay={index * 150}
                  transition={{ stiffness: 120, damping: 25, mass: 0.5 }}
                />
                <span>{stat.suffix}</span>
              </div>
              <span className="text-sm font-medium text-foreground uppercase tracking-wider">
                {stat.label}
              </span>
              <span className="text-xs text-muted-foreground mt-1 hidden md:block">
                {stat.subLabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
