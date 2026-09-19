"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/">
              <img
                src="/images/logo-navbar.png"
                alt="Eden Technologies"
                className="h-9 object-contain brightness-0 invert mb-3"
              />
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Digital studio building websites, apps &amp; software for ambitious businesses across India.
            </p>
            <ul className="space-y-1.5">
              <li>
                <a href="mailto:edenwebtechnologies@gmail.com" className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors">
                  <Mail size={11} className="text-blue-400" /> edenwebtechnologies@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/919705527264" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors">
                  <Phone size={11} className="text-emerald-400" /> +91 97055 27264
                </a>
              </li>
              <li className="flex items-center gap-1.5 text-xs text-slate-400">
                <MapPin size={11} className="text-slate-500 shrink-0" /> Vijayawada, Andhra Pradesh
              </li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-3">Pages</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/#services" },
                { name: "Work", href: "/work" },
                { name: "Process", href: "/process" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="text-xs text-slate-400 hover:text-white transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-3">Services</h4>
            <ul className="space-y-2">
              {["Web Development","Mobile Apps","UI / UX Design","E-commerce","Custom Software","Maintenance & SLA"].map((s) => (
                <li key={s}>
                  <Link href="/contact" className="text-xs text-slate-400 hover:text-white transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Promise + Legal */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-3">Our Promise</h4>
            <ul className="space-y-1.5 mb-5">
              {["Fixed Scope & Budget","Weekly Friday Demos","100% In-House Team","Mutual NDA Available"].map((p) => (
                <li key={p} className="flex items-center gap-1.5 text-xs text-slate-400">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
            <h4 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-3">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-xs text-slate-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-xs text-slate-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-500">© {currentYear} Eden Web Technologies. All rights reserved.</p>
          <p className="text-xs text-slate-500">Made with care in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}
