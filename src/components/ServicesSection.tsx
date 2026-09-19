"use client";

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
  "01": ["Next.js", "Tailwind CSS", "SEO & Performance", "Headless CMS"],
  "02": ["React Native", "iOS & Android", "Offline Sync", "Push Alerts"],
  "03": ["Razorpay & Stripe", "Cart Checkout", "Order Management", "GST Invoicing"],
  "04": ["Internal Portals", "Custom Dashboards", "REST APIs", "Database Design"],
  "05": ["Figma Wireframes", "Design Systems", "User Journeys", "Clickable Prototypes"],
  "06": ["Uptime Monitoring", "Security Updates", "Speed Audits", "Feature Additions"],
};

function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) {
  const IconComponent = iconMap[service.icon];
  const tags = serviceTags[service.id] || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      className="group relative p-8 rounded-3xl bg-card border border-border/80 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_14px_35px_rgba(37,99,235,0.08)] flex flex-col justify-between h-full cursor-default overflow-hidden"
    >
      <div className="relative z-10 flex flex-col h-full">
        {/* Card Header */}
        <div className="flex justify-between items-start mb-6">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 350, damping: 15 }}
            className="w-12 h-12 rounded-2xl bg-blue-50/90 border border-blue-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-xs"
          >
            {IconComponent && <IconComponent size={22} />}
          </motion.div>
          <span className="text-2xl font-bold text-muted-foreground/30 font-mono group-hover:text-primary/40 transition-colors">
            {service.id}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
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
              className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-slate-100/80 text-slate-700 border border-border/50 group-hover:border-primary/20 transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between">
          <Link
            href="/contact"
            className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-primary group-hover:text-primary transition-all duration-200 group/link"
          >
            <span>Discuss This Service</span>
            <ArrowRight
              size={14}
              className="ml-1.5 group-hover/link:translate-x-1.5 transition-transform duration-200"
            />
          </Link>
          <span className="text-[11px] font-semibold text-muted-foreground flex items-center gap-1">
            <CheckCircle2 size={12} className="text-emerald-500" /> Fixed Scope
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Human Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <span>What We Do Best</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-[1.15] mb-4">
            Everything you need to launch and scale.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From the initial idea and wireframes to production deployment and long-term maintenance, we take care of the technical heavy lifting so you can focus on running your business.
          </p>
        </motion.div>

        {/* Services 3-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
