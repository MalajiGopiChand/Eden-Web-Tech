"use client";

import { useState } from "react";
import { services } from "@/data";
import { ArrowRight, Globe, Smartphone, ShoppingCart, PenTool, Layout, Settings } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  ShoppingCart,
  PenTool,
  Layout,
  Settings,
};

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, opacity: 0 });
  const IconComponent = iconMap[service.icon];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_10px_35px_rgba(79,70,229,0.12)] flex flex-col h-full cursor-default relative overflow-hidden"
    >
      {/* Aceternity style Spotlight hover effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(79, 70, 229, 0.15), transparent 80%)`,
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-8">
          <div className="w-12 h-12 rounded-xl bg-secondary/80 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
            {IconComponent && <IconComponent size={24} />}
          </div>
          <span className="text-2xl font-black text-muted-foreground/30 font-mono">
            {service.id}
          </span>
        </div>

        <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-200">
          {service.title}
        </h3>

        <p className="text-muted-foreground mb-8 flex-grow leading-relaxed text-sm">
          {service.description}
        </p>

        <div className="mt-auto">
          <Link
            href="/contact"
            className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-primary-foreground group-hover:bg-primary px-4 py-2 rounded-full transition-all duration-300 border border-transparent group-hover:shadow-md"
          >
            Learn More{" "}
            <ArrowRight
              size={16}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

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
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
