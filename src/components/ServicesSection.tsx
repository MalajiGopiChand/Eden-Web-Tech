import { services } from "@/data";
import { ArrowRight, Globe, Smartphone, ShoppingCart, PenTool, Layout, Settings } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  ShoppingCart,
  PenTool,
  Layout,
  Settings,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">
            WHAT CAN WE BUILD FOR YOU?
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            FROM A SIMPLE IDEA TO A COMPLETE DIGITAL PRODUCT.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you're launching a new business, improving an existing operation, or building your next big product, we have the technology and expertise to bring it to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            
            return (
              <div 
                key={service.id}
                className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] flex flex-col h-full cursor-default relative overflow-hidden"
              >
                {/* Subtle gradient hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      {IconComponent && <IconComponent size={24} />}
                    </div>
                    <span className="text-2xl font-black text-muted/30">
                      {service.id}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto">
                    <Link href="/contact" className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-primary-foreground group-hover:bg-primary px-4 py-2 rounded-full transition-all duration-300">
                      Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
