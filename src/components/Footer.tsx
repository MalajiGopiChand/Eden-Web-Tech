"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight, Globe } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Work", href: "/work" },
  { name: "Process", href: "/process" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Web Development",
  "Mobile Apps",
  "UI / UX Design",
  "E-commerce",
  "Custom Software",
  "Maintenance & SLA",
];

const legal = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-border/60">
      {/* Top CTA strip */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <p className="text-sm font-semibold text-white/90">
              Now accepting new projects — fixed scope, transparent pricing, weekly demos.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-white text-primary text-xs font-bold hover:bg-slate-100 transition-all whitespace-nowrap shrink-0"
          >
            Start a Project <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-10"
        >
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="mb-4 block">
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                src="/images/logo-navbar.png"
                alt="Eden Technologies"
                className="h-10 object-contain"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 pr-4">
              A product-focused digital studio building websites, mobile apps, and custom software for ambitious Indian businesses.
            </p>

            {/* Contact info */}
            <ul className="space-y-2 mb-5">
              <li>
                <a
                  href="mailto:edenwebtechnologies@gmail.com"
                  className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={12} className="text-primary shrink-0" />
                  edenwebtechnologies@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919705527264"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone size={12} className="text-primary shrink-0" />
                  +91 97055 27264
                </a>
              </li>
              <li className="flex items-start gap-2 text-xs text-muted-foreground">
                <MapPin size={12} className="text-primary shrink-0 mt-0.5" />
                <span>Vijayawada, Andhra Pradesh, India</span>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              <motion.a
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/malajigopichand/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all"
              >
                <span className="sr-only">LinkedIn</span>
                <Globe size={14} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:edenwebtechnologies@gmail.com"
                className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all"
              >
                <span className="sr-only">Email</span>
                <Mail size={14} />
              </motion.a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase mb-4 text-foreground">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <motion.div whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase mb-4 text-foreground">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <motion.div whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
                    <Link
                      href="/contact"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {service}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Trust */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase mb-4 text-foreground">
              Legal
            </h3>
            <ul className="space-y-2.5 mb-7">
              {legal.map((item) => (
                <li key={item.name}>
                  <motion.div whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>

            <h3 className="text-xs font-bold tracking-widest uppercase mb-3 text-foreground">
              Our Promise
            </h3>
            <ul className="space-y-2">
              {[
                "Fixed Scope & Budget",
                "Weekly Friday Demos",
                "Mutual NDA on Request",
                "100% In-House Team",
              ].map((badge) => (
                <li key={badge} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  {badge}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="pt-5 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Eden Web Technologies. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Crafted with care in{" "}
            <span className="font-semibold text-foreground">Vijayawada, India</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
