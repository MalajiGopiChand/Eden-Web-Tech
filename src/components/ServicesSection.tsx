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
  "01": ["Next.js 15", "SEO Optimization", "Ultra-Fast Load", "CMS"],
  "02": ["iOS & Android", "React Native", "Offline Mode", "Push Alerts"],
  "03": ["Stripe / Razorpay", "Cart Funnel", "Product Catalog", "GST Ready"],
  "04": ["Internal Portals", "Custom ERP", "REST APIs", "Cloud DB"],
  "05": ["Figma Prototypes", "Design Systems", "User Research", "Dark Mode"],
  "06": ["24/7 Monitoring", "Security Patches", "Speed Audits", "SLA Support"],
};

function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) {
  const IconComponent = iconMap[service.icon];
  const tags = serviceTags[service.id] || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative p-8 rounded-3xl bg-card border border-border/80 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_16px_36px_rgba(37,99,235,0.12)] flex flex-col justify-between h-full cursor-default overflow-hidden"
    >
      {/* Top Accent Gradient Border with Shimmer on Hover */}
      <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
        <motion.div
          className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Card Header: Icon + Step ID */}
        <div className="flex justify-between items-start mb-6">
          <motion.div 
            whileHover={{ scale: 1.15, rotate: 6 }}
            transition={{ type: "spring", stiffness: 350, damping: 15 }}
            className="w-13 h-13 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-xs"
          >
            {IconComponent && <IconComponent size={23} />}
          </motion.div>
          <span className="text-3xl font-black text-muted-foreground/20 font-mono group-hover:text-primary/40 transition-colors">
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

        {/* Feature / Technology Pills with Hover Lift */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {tags.map((tag, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.06, y: -1 }}
              className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-secondary/80 text-foreground/80 border border-border/50 group-hover:border-primary/20 transition-colors cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between">
          <Link
            href="/contact"
            className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-primary group-hover:text-primary transition-all duration-200 group/link"
          >
            <span>Start Project</span>
            <ArrowRight
              size={15}
              className="ml-1.5 group-hover/link:translate-x-2 transition-transform duration-200"
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
    <section id="services" className="py-28 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase mb-4">
            <Sparkles size={13} className="animate-spin" />
            <span>Full-Cycle Engineering & Design</span>
          </div>
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
            WHAT CAN WE BUILD FOR YOU?
          </h2>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-[1.1] mb-6 tracking-tight">
            FROM A SIMPLE IDEA TO A{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              COMPLETE DIGITAL PRODUCT.
            </span>
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you are launching a new startup, modernizing an existing business, or building high-load enterprise software, our specialized engineering team brings it to life on time and within budget.
          </p>
        </motion.div>

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
