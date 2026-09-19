"use client";

import { useState } from "react";
import { services } from "@/data";
import { ArrowRight, Globe, Smartphone, ShoppingCart, PenTool, Layout, Settings, Sparkles, CheckCircle2 } from "lucide-react";
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

const serviceTags: Record<string, string[]> = {
  "01": ["Next.js 15", "SEO Optimization", "Ultra-Fast Load", "CMS"],
  "02": ["iOS & Android", "React Native", "Offline Mode", "Push Alerts"],
  "03": ["Stripe / Razorpay", "Cart Funnel", "Product Catalog", "GST Ready"],
  "04": ["Internal Portals", "Custom ERP", "REST APIs", "Cloud DB"],
  "05": ["Figma Prototypes", "Design Systems", "User Research", "Dark Mode"],
  "06": ["24/7 Monitoring", "Security Patches", "Speed Audits", "SLA Support"],
};

function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, opacity: 0 });
  const IconComponent = iconMap[service.icon];
  const tags = serviceTags[service.id] || [];

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
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.09 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-400 hover:shadow-[0_20px_45px_rgba(79,70,229,0.14)] hover:-translate-y-1 flex flex-col justify-between h-full cursor-default overflow-hidden"
    >
      {/* Aceternity Style Radial Mouse Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(79, 70, 229, 0.14), transparent 80%)`,
        }}
      />

      {/* Top Accent Gradient Border */}
      <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Card Header: Icon + Step ID */}
        <div className="flex justify-between items-start mb-6">
          <div className="w-13 h-13 rounded-2xl bg-secondary/80 border border-border/60 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300 shadow-sm">
            {IconComponent && <IconComponent size={24} />}
          </div>
          <span className="text-3xl font-black text-muted-foreground/25 font-mono group-hover:text-primary/40 transition-colors">
            {service.id}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-black tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground mb-6 leading-relaxed text-sm flex-grow">
          {service.description}
        </p>

        {/* Feature / Technology Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-secondary/70 text-foreground/80 border border-border/40 group-hover:border-primary/20 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-auto pt-4 border-t border-border/40 flex items-center justify-between">
          <Link
            href="/contact"
            className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-primary group-hover:text-primary transition-all duration-200"
          >
            <span>Start Project</span>
            <ArrowRight
              size={15}
              className="ml-1.5 group-hover:translate-x-1.5 transition-transform"
            />
          </Link>
          <span className="text-[11px] font-medium text-muted-foreground flex items-center gap-1">
            <CheckCircle2 size={12} className="text-primary" /> Turnkey
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase mb-4">
            <Sparkles size={13} />
            <span>Full-Cycle Engineering & Design</span>
          </div>
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
            WHAT CAN WE BUILD FOR YOU?
          </h2>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-[1.1] mb-6 tracking-tight">
            FROM A SIMPLE IDEA TO A{" "}
            <span className="bg-gradient-to-r from-primary via-indigo-500 to-sky-400 bg-clip-text text-transparent">
              COMPLETE DIGITAL PRODUCT.
            </span>
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you are launching a new startup, modernizing an existing business, or building high-load enterprise software, our specialized engineering team brings it to life on time and within budget.
          </p>
        </div>

        {/* Services 3-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
