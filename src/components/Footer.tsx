"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Our Work", href: "/work" },
  { name: "Process", href: "/process" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Web Development", href: "/contact" },
  { name: "Mobile Apps", href: "/contact" },
  { name: "UI / UX Design", href: "/contact" },
  { name: "E-commerce", href: "/contact" },
  { name: "Custom Software", href: "/contact" },
  { name: "Maintenance & SLA", href: "/contact" },
];

const promises = [
  "Fixed Scope & Budget — no surprise invoices",
  "Weekly Friday staging demos",
  "Direct founder communication",
  "Mutual NDA available on request",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">

      {/* Ambient background glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[250px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* ── Top CTA Banner ── */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <p className="text-sm font-semibold text-white/85">
              Now accepting new projects — fixed scope, transparent pricing, weekly demos.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-slate-900 text-xs font-bold hover:bg-blue-50 transition-all whitespace-nowrap shrink-0 shadow-lg"
          >
            Start a Project <ArrowRight size={13} />
          </Link>
        </div>
      </div>

      {/* ── Main Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-14">

          {/* Brand column — wider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <Link href="/" className="inline-block mb-5">
              <img
                src="/images/logo-navbar.png"
                alt="Eden Web Technologies"
                className="h-11 object-contain brightness-0 invert"
              />
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
              A product-focused digital studio from Vijayawada, India — building fast, scalable websites, mobile apps, and custom software for ambitious businesses.
            </p>

            {/* Contact details */}
            <ul className="space-y-3 mb-7">
              <li>
                <a
                  href="mailto:edenwebtechnologies@gmail.com"
                  className="inline-flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors group"
                >
                  <span className="w-7 h-7 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-600/30 transition-colors">
                    <Mail size={13} className="text-blue-400" />
                  </span>
                  edenwebtechnologies@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919705527264"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors group"
                >
                  <span className="w-7 h-7 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-600/30 transition-colors">
                    <Phone size={13} className="text-emerald-400" />
                  </span>
                  +91 97055 27264
                </a>
              </li>
              <li className="inline-flex items-start gap-2.5 text-sm text-slate-400">
                <span className="w-7 h-7 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={13} className="text-slate-400" />
                </span>
                <span>Vijayawada, Andhra Pradesh<br />India — 520 001</span>
              </li>
            </ul>

            {/* Social buttons */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.linkedin.com/in/malajigopichand/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/8 border border-white/10 text-xs font-semibold text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
              >
                LinkedIn
              </a>
              <a
                href="https://wa.me/919705527264?text=Hi%20Eden%20Technologies%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/8 border border-white/10 text-xs font-semibold text-slate-300 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h4 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <h4 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Promises + Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <h4 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-5">
              Our Promise
            </h4>
            <ul className="space-y-3 mb-8">
              {promises.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <h4 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/privacy" className="text-sm text-slate-400 hover:text-white transition-colors inline-block duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-slate-400 hover:text-white transition-colors inline-block duration-200">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs text-slate-500">
            © {currentYear} Eden Web Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span>Vijayawada · Hyderabad · Bangalore</span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span>Made in India 🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
