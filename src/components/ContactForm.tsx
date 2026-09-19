"use client";

import { useState } from "react";
import { Loader2, CheckCircle, AlertCircle, Send } from "lucide-react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { motion, AnimatePresence } from "framer-motion";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");

    // Get form data
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Basic validation
    if (!data.name || !data.email || !data.projectType || !data.description) {
      setFormState("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    try {
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
      
      // Success
      setFormState("success");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Error saving/sending:", error);
      setFormState("error");
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  if (formState === "success") {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="p-12 text-center bg-card border border-border/80 rounded-3xl shadow-sm h-full flex flex-col items-center justify-center"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.25, 1] }}
          transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
          className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6 border border-emerald-200 shadow-sm"
        >
          <CheckCircle size={42} />
        </motion.div>
        <h3 className="text-3xl font-black text-foreground mb-3 tracking-tight">Inquiry Sent Successfully!</h3>
        <p className="text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed">
          Thank you for reaching out. We've received your project specifications and our engineering leadership will get back to you within 24 hours.
        </p>
        <motion.button 
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setFormState("idle")}
          className="px-8 py-3.5 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/95 transition-all shadow-md cursor-pointer"
        >
          Send Another Message
        </motion.button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 md:p-10 rounded-3xl border border-border/80 shadow-[0_10px_35px_rgba(0,0,0,0.03)]">
      
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-foreground/80">Full Name *</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            className="w-full bg-slate-50 border border-border/80 rounded-2xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm"
            placeholder="Rajesh Kumar"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-xs font-bold uppercase tracking-wider text-foreground/80">Company Name</label>
          <input 
            type="text" 
            id="company" 
            name="company" 
            className="w-full bg-slate-50 border border-border/80 rounded-2xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm"
            placeholder="Your Startup / Brand"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-foreground/80">Email Address *</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            className="w-full bg-slate-50 border border-border/80 rounded-2xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm"
            placeholder="rajesh@example.com"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-foreground/80">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            className="w-full bg-slate-50 border border-border/80 rounded-2xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm"
            placeholder="+91 98765 43210"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="projectType" className="text-xs font-bold uppercase tracking-wider text-foreground/80">Project Type *</label>
          <select 
            id="projectType" 
            name="projectType" 
            required
            className="w-full bg-slate-50 border border-border/80 rounded-2xl px-4 py-3.5 text-foreground focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm"
          >
            <option value="" disabled defaultValue="">Select category...</option>
            <option value="Website">Website Development</option>
            <option value="Mobile App">Mobile App (iOS / Android)</option>
            <option value="E-commerce">E-commerce Platform</option>
            <option value="UI/UX">UI/UX Design System</option>
            <option value="Custom Software">Custom Enterprise Software</option>
            <option value="Other">Other Digital Solution</option>
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="budget" className="text-xs font-bold uppercase tracking-wider text-foreground/80">Estimated Budget</label>
          <select 
            id="budget" 
            name="budget" 
            className="w-full bg-slate-50 border border-border/80 rounded-2xl px-4 py-3.5 text-foreground focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm"
          >
            <option value="Less than ₹1 Lakh">Less than ₹1 Lakh</option>
            <option value="₹1 Lakh - ₹5 Lakhs">₹1 Lakh - ₹5 Lakhs</option>
            <option value="₹5 Lakhs - ₹10 Lakhs">₹5 Lakhs - ₹10 Lakhs</option>
            <option value="₹10 Lakhs - ₹25 Lakhs">₹10 Lakhs - ₹25 Lakhs</option>
            <option value="₹25 Lakhs+">₹25 Lakhs+</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="description" className="text-xs font-bold uppercase tracking-wider text-foreground/80">Project Scope & Vision *</label>
        <textarea 
          id="description" 
          name="description" 
          required 
          rows={5}
          className="w-full bg-slate-50 border border-border/80 rounded-2xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm resize-none"
          placeholder="Tell us about your product goals, required features, and desired timeline..."
        ></textarea>
      </div>

      {/* Honeypot for spam protection */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

      <motion.button 
        type="submit" 
        disabled={formState === "submitting"}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="relative group overflow-hidden w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-2xl hover:bg-primary/95 transition-all shadow-[0_10px_25px_rgba(37,99,235,0.25)] hover:shadow-[0_15px_35px_rgba(37,99,235,0.35)] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
        {formState === "submitting" ? (
          <>
            <Loader2 className="animate-spin" size={19} />
            <span>Sending Inquiry...</span>
          </>
        ) : (
          <>
            <span>Send Project Inquiry</span>
            <Send size={16} className="group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </motion.button>
    </form>
  );
}
