"use client";

import { useState } from "react";
import { 
  Loader2, 
  CheckCircle, 
  AlertCircle, 
  Send, 
  User, 
  Building2, 
  Mail, 
  Phone, 
  Globe, 
  Smartphone, 
  ShoppingBag, 
  Cpu, 
  Palette,
  Lock,
  MessageCircle,
  ArrowRight
} from "lucide-react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { motion, AnimatePresence } from "framer-motion";

type FormState = "idle" | "submitting" | "success" | "error";

const projectTypes = [
  { id: "Website", label: "Custom Website", icon: Globe },
  { id: "Mobile App", label: "Mobile App (iOS / Android)", icon: Smartphone },
  { id: "E-commerce", label: "E-Commerce & Store", icon: ShoppingBag },
  { id: "Custom Software", label: "Custom Software / SaaS", icon: Cpu },
  { id: "UI/UX", label: "UI/UX & Design System", icon: Palette },
];

const budgetRanges = [
  "Less than ₹1 Lakh",
  "₹1 Lakh - ₹5 Lakhs",
  "₹5 Lakhs - ₹10 Lakhs",
  "₹10 Lakhs - ₹25 Lakhs",
  "₹25 Lakhs+"
];

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedProjectType, setSelectedProjectType] = useState("Website");
  const [selectedBudget, setSelectedBudget] = useState("₹1 Lakh - ₹5 Lakhs");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Ensure state-controlled fields are set
    data.projectType = selectedProjectType;
    data.budget = selectedBudget;

    if (!data.name || !data.email || !data.description) {
      setFormState("error");
      setErrorMessage("Please fill out your name, email, and project description.");
      return;
    }

    try {
      setSubmittedName(String(data.name));

      // 1. Save data to Firestore (as a backup/record)
      await addDoc(collection(db, "inquiries"), {
        ...data,
        createdAt: new Date(),
        status: "new"
      });
      
      // 2. Trigger Email & WhatsApp Notifications
      await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      setFormState("success");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Error saving/sending:", error);
      setFormState("error");
      setErrorMessage("Something went wrong. Please try again or WhatsApp us directly.");
    }
  };

  if (formState === "success") {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="p-8 sm:p-12 text-center bg-white border border-blue-100 rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.04)] h-full flex flex-col items-center justify-center relative overflow-hidden"
      >
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />

        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.25, 1] }}
          transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
          className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6 border border-emerald-200 shadow-sm"
        >
          <CheckCircle size={44} />
        </motion.div>

        <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 mb-3">
          Proposal Request Received
        </span>

        <h3 className="text-2xl sm:text-3xl font-black text-foreground mb-3 tracking-tight">
          Thank you{submittedName ? `, ${submittedName}` : ""}!
        </h3>

        <p className="text-muted-foreground max-w-md mx-auto mb-8 text-sm sm:text-base leading-relaxed">
          We’ve received your project specifications. Our engineering leadership will review your requirements and get back to you with a complimentary scope analysis within <strong className="text-foreground">2–4 business hours</strong>.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
          <a
            href="https://wa.me/919705527264?text=Hi%20Eden%20Technologies%2C%20I%20just%20submitted%20a%20project%20inquiry%20on%20your%20website%20and%20would%20like%20to%20connect%20faster."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-all shadow-sm"
          >
            <MessageCircle size={16} />
            <span>Chat on WhatsApp Now</span>
          </a>

          <button 
            onClick={() => setFormState("idle")}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-foreground font-bold text-xs sm:text-sm transition-all cursor-pointer"
          >
            <span>Send Another Inquiry</span>
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="space-y-6 bg-white p-7 sm:p-9 lg:p-10 rounded-3xl border border-border/80 shadow-[0_12px_40px_rgba(0,0,0,0.03)] relative"
    >
      {/* Form Title & Indicator */}
      <div className="flex items-center justify-between border-b border-border/50 pb-5">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
            Tell Us About Your Project
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
            Fill out the details below for a free estimate and architecture blueprint.
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Quick 2-4 Hr Reply</span>
        </div>
      </div>

      <AnimatePresence>
        {formState === "error" && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-start gap-3 text-red-600 text-sm font-medium"
          >
            <AlertCircle className="shrink-0 mt-0.5" size={18} />
            <p>{errorMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. Project Type Selector Chips */}
      <div className="space-y-2.5">
        <label className="text-xs font-bold uppercase tracking-wider text-foreground/80 flex items-center justify-between">
          <span>What are you building? *</span>
          <span className="text-[11px] font-normal text-muted-foreground">Select one</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {projectTypes.map((type) => {
            const Icon = type.icon;
            const isSelected = selectedProjectType === type.id;
            return (
              <button
                key={type.id}
                type="button"
                onClick={() => setSelectedProjectType(type.id)}
                className={`p-3 rounded-2xl border text-left text-xs font-bold transition-all cursor-pointer flex items-center gap-2.5 ${
                  isSelected
                    ? "bg-blue-50/80 border-primary text-primary shadow-[0_2px_10px_rgba(37,99,235,0.12)]"
                    : "bg-slate-50/70 border-border/70 text-muted-foreground hover:bg-slate-100 hover:text-foreground"
                }`}
              >
                <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${
                  isSelected ? "bg-primary text-white" : "bg-white text-muted-foreground border border-border/60"
                }`}>
                  <Icon size={13} />
                </div>
                <span className="truncate">{type.label}</span>
              </button>
            );
          })}
        </div>
        <input type="hidden" name="projectType" value={selectedProjectType} />
      </div>

      {/* 2. Personal & Company Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-foreground/80">
            Your Name *
          </label>
          <div className="relative">
            <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/70 pointer-events-none" />
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              className="w-full bg-slate-50/70 border border-border/80 rounded-xl pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm font-medium"
              placeholder="e.g. Rahul Sharma"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="company" className="text-xs font-bold uppercase tracking-wider text-foreground/80">
            Company / Organization
          </label>
          <div className="relative">
            <Building2 size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/70 pointer-events-none" />
            <input 
              type="text" 
              id="company" 
              name="company" 
              className="w-full bg-slate-50/70 border border-border/80 rounded-xl pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm font-medium"
              placeholder="e.g. PulseFit Gyms / Startup"
            />
          </div>
        </div>
      </div>

      {/* 3. Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-foreground/80">
            Work Email *
          </label>
          <div className="relative">
            <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/70 pointer-events-none" />
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              className="w-full bg-slate-50/70 border border-border/80 rounded-xl pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm font-medium"
              placeholder="rahul@company.com"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-foreground/80">
            Phone / WhatsApp
          </label>
          <div className="relative">
            <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/70 pointer-events-none" />
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              className="w-full bg-slate-50/70 border border-border/80 rounded-xl pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm font-medium"
              placeholder="+91 98765 43210"
            />
          </div>
        </div>
      </div>

      {/* 4. Estimated Budget Selection */}
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-foreground/80 flex items-center justify-between">
          <span>Anticipated Budget Range</span>
          <span className="text-[11px] font-normal text-muted-foreground">Fixed milestone pricing</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {budgetRanges.map((range) => {
            const isSelected = selectedBudget === range;
            return (
              <button
                key={range}
                type="button"
                onClick={() => setSelectedBudget(range)}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                  isSelected
                    ? "bg-primary text-primary-foreground border-primary shadow-xs"
                    : "bg-slate-50/80 text-foreground/80 border-border/70 hover:bg-slate-100"
                }`}
              >
                {range}
              </button>
            );
          })}
        </div>
        <input type="hidden" name="budget" value={selectedBudget} />
      </div>

      {/* 5. Project Description */}
      <div className="space-y-1.5">
        <label htmlFor="description" className="text-xs font-bold uppercase tracking-wider text-foreground/80 flex items-center justify-between">
          <span>Project Vision & Requirements *</span>
          <span className="text-[11px] text-muted-foreground font-normal">Features, references, timeline</span>
        </label>
        <textarea 
          id="description" 
          name="description" 
          required 
          rows={4}
          className="w-full bg-slate-50/70 border border-border/80 rounded-2xl p-4 text-foreground placeholder:text-muted-foreground/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm font-medium resize-none leading-relaxed"
          placeholder="Briefly describe what your app or website should do, key features needed (e.g. login, payment gateway, inventory, booking), or reference websites you admire..."
        />
      </div>

      {/* Honeypot for spam protection */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

      {/* Submit Button */}
      <motion.button 
        type="submit" 
        disabled={formState === "submitting"}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="relative group overflow-hidden w-full flex items-center justify-center gap-2.5 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-2xl hover:bg-primary/95 transition-all shadow-[0_10px_25px_rgba(37,99,235,0.25)] hover:shadow-[0_15px_35px_rgba(37,99,235,0.35)] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
        {formState === "submitting" ? (
          <>
            <Loader2 className="animate-spin" size={19} />
            <span>Reviewing & Sending Your Inquiry...</span>
          </>
        ) : (
          <>
            <span>Submit Project Details for Free Estimate</span>
            <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </motion.button>

      {/* Confidentiality Footer */}
      <div className="flex items-center justify-center gap-2 text-center text-xs text-muted-foreground pt-1">
        <Lock size={13} className="text-emerald-600" />
        <span>100% Confidential. Mutual NDA signed before technical discussions.</span>
      </div>
    </form>
  );
}

