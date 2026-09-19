"use client";

import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Copy, 
  Check, 
  Sparkles,
  ArrowUpRight
} from "lucide-react";

export default function ContactDirectChannels() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("edenwebtechnologies@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-6">
      {/* WhatsApp Fast-Track Banner */}
      <a
        href="https://wa.me/919705527264?text=Hi%20Eden%20Technologies%2C%20I%20would%20like%20to%20discuss%20a%20new%20project%20with%20your%20engineering%20team."
        target="_blank"
        rel="noopener noreferrer"
        className="group p-5 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-emerald-50 to-white border border-emerald-200/80 shadow-xs hover:border-emerald-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-between"
      >
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
            <MessageCircle size={24} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Fastest Response</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
            </div>
            <h4 className="text-base font-black text-foreground group-hover:text-emerald-700 transition-colors">
              Chat on WhatsApp Directly
            </h4>
            <p className="text-xs text-muted-foreground mt-0.5">
              Instant connection with senior engineers • Avg 15 mins
            </p>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-white border border-emerald-200 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-all shrink-0">
          <ArrowUpRight size={16} />
        </div>
      </a>

      {/* Direct Contact Cards */}
      <div className="grid grid-cols-1 gap-3.5">
        {/* Email Card with Copy Feature */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-border/80 shadow-xs hover:border-primary/40 transition-all flex items-center justify-between gap-3">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary shrink-0">
              <Mail size={20} />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Official Inquiries</span>
              <a 
                href="mailto:edenwebtechnologies@gmail.com" 
                className="block text-sm sm:text-base font-bold text-foreground hover:text-primary transition-colors truncate max-w-[200px] sm:max-w-[260px]"
              >
                edenwebtechnologies@gmail.com
              </a>
            </div>
          </div>
          <button
            onClick={handleCopyEmail}
            aria-label="Copy Email Address"
            className="px-3 py-1.5 rounded-xl text-xs font-bold border border-border/70 hover:border-primary/50 text-muted-foreground hover:text-primary transition-all flex items-center gap-1.5 cursor-pointer shrink-0 bg-slate-50 hover:bg-white"
          >
            {copied ? (
              <>
                <Check size={13} className="text-emerald-600" />
                <span className="text-emerald-600">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={13} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Phone Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-border/80 shadow-xs hover:border-primary/40 transition-all flex items-center justify-between gap-3">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary shrink-0">
              <Phone size={20} />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Direct Line & WhatsApp</span>
              <a 
                href="tel:+919705527264" 
                className="block text-sm sm:text-base font-bold text-foreground hover:text-primary transition-colors"
              >
                +91 97055 27264
              </a>
            </div>
          </div>
          <a
            href="tel:+919705527264"
            className="px-3 py-1.5 rounded-xl text-xs font-bold border border-border/70 hover:border-primary/50 text-muted-foreground hover:text-primary transition-all flex items-center gap-1.5 shrink-0 bg-slate-50 hover:bg-white"
          >
            <span>Call</span>
          </a>
        </div>

        {/* Location Hubs Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-border/80 shadow-xs hover:border-primary/40 transition-all flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary shrink-0">
            <MapPin size={20} />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Engineering Headquarters</span>
            <p className="text-sm sm:text-base font-bold text-foreground">
              Vijayawada, Andhra Pradesh, India
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Regional operating hubs in Hyderabad & Bangalore
            </p>
          </div>
        </div>
      </div>

      {/* "What Happens Next" 3-Step Micro Timeline */}
      <div className="p-6 rounded-3xl bg-slate-50/80 border border-border/70 space-y-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
          <Sparkles size={14} /> What Happens Next
        </h4>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-blue-100 text-primary font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
              1
            </span>
            <div>
              <p className="text-xs sm:text-sm font-bold text-foreground">
                20-Minute Strategy Call
              </p>
              <p className="text-xs text-muted-foreground">
                We review your brief, ask clarifying architecture questions, and understand your business goals.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-blue-100 text-primary font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
              2
            </span>
            <div>
              <p className="text-xs sm:text-sm font-bold text-foreground">
                Fixed Proposal & Roadmap (48h)
              </p>
              <p className="text-xs text-muted-foreground">
                You receive an itemized feature plan, weekly sprint schedule, and 100% fixed budget estimate.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
              3
            </span>
            <div>
              <p className="text-xs sm:text-sm font-bold text-foreground">
                Sprint 1 Development Begins
              </p>
              <p className="text-xs text-muted-foreground">
                We set up your private repository, staging environment, and direct developer communication channels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
