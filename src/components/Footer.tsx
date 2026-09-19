"use client";

import Link from "next/link";
import { Globe, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent border-t border-border/60 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16"
        >
          <div className="md:col-span-1">
            <Link href="/" className="mb-6 block group">
              <motion.img 
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                src="/images/logo-navbar.png" 
                alt="Eden Technologies" 
                className="h-12 md:h-16 object-contain" 
              />
            </Link>
            <p className="text-muted-foreground mt-4 mb-6 pr-4 text-sm leading-relaxed">
              We design and build websites, mobile apps and digital products for ambitious businesses.
            </p>
            <div className="flex space-x-3">
              <motion.a 
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/malajigopichand/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <Globe size={18} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:edenwebtechnologies@gmail.com" 
                className="w-9 h-9 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <span className="sr-only">Contact</span>
                <Mail size={18} />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase mb-4 text-foreground">Navigation</h3>
            <ul className="space-y-2.5">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/#services" },
                { name: "Work", href: "/work" },
                { name: "About", href: "/#about" },
                { name: "Process", href: "/#process" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
                    <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase mb-4 text-foreground">Services</h3>
            <ul className="space-y-2.5">
              {[
                "Web Development",
                "Mobile Apps",
                "UI/UX Design",
                "E-commerce",
                "Custom Software",
                "Maintenance & SLA"
              ].map((service) => (
                <li key={service}>
                  <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
                    <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                      {service}
                    </span>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase mb-4 text-foreground">Legal</h3>
            <ul className="space-y-2.5">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms & Conditions", href: "/terms" },
              ].map((legal) => (
                <li key={legal.name}>
                  <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
                    <Link href={legal.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {legal.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="pt-8 border-t border-border flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-sm font-bold tracking-widest text-foreground uppercase">
            BUILD WITH PURPOSE. LAUNCH WITH CONFIDENCE. GROW WITHOUT LIMITS.
          </p>
          <p className="text-sm text-muted-foreground">
            Websites • Mobile Apps • E-commerce • Custom Software • UI/UX
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            &copy; {currentYear} EDEN TECHNOLOGIES PVT. LTD. — All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
