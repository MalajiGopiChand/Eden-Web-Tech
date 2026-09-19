"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Process", href: "/process" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3.5 bg-white/85 backdrop-blur-xl border-b border-border/70 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
          : "py-5 sm:py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Animated Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <img
                src="/images/logo-navbar.png"
                alt="Eden Technologies"
                className="h-10 md:h-12 object-contain group-hover:brightness-105 transition-all"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation with Animated Hover Pills */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-3.5 py-2 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors duration-200 rounded-full"
              >
                {hoveredLink === link.name && (
                  <motion.div
                    layoutId="navHoverPill"
                    className="absolute inset-0 bg-blue-50/80 rounded-full -z-10 border border-blue-100"
                    transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  />
                )}
                <span>{link.name}</span>
              </Link>
            ))}

            {/* CTA Button with Shimmer and Spring Tap */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="ml-3"
            >
              <Link
                href="/contact"
                className="relative group overflow-hidden flex items-center gap-1.5 px-5 py-2.5 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/95 transition-all shadow-[0_4px_16px_rgba(37,99,235,0.25)] hover:shadow-[0_6px_22px_rgba(37,99,235,0.35)] text-sm"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-out" />
                <span>Start a Project</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2.5 rounded-2xl bg-secondary/80 text-foreground border border-border/70"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Drawer with Staggered Entrance */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-2xl border-b border-border shadow-xl"
          >
            <div className="flex flex-col px-6 pt-3 pb-8 space-y-3">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="block text-lg font-bold text-foreground/90 py-2 border-b border-border/40 hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="pt-2"
              >
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-primary text-primary-foreground text-center font-bold rounded-full shadow-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>Start a Project</span>
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
