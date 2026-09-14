"use client";

import { useState } from "react";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

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
      <div className="p-12 text-center bg-card border border-border rounded-3xl h-full flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6">
          <CheckCircle size={40} />
        </div>
        <h3 className="text-3xl font-bold text-foreground mb-4">Inquiry Sent!</h3>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          Thank you for reaching out. We've received your project details and our team will get back to you within 24 hours.
        </p>
        <button 
          onClick={() => setFormState("idle")}
          className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 md:p-12 rounded-3xl border border-border">
      
      {formState === "error" && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3 text-red-500">
          <AlertCircle className="shrink-0 mt-0.5" />
          <p>{errorMessage}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name *</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="Rajesh Kumar"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-foreground">Company Name</label>
          <input 
            type="text" 
            id="company" 
            name="company" 
            className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="Your Company Ltd."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address *</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="rajesh@example.com"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="+91 98765 43210"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="projectType" className="text-sm font-medium text-foreground">Project Type *</label>
          <select 
            id="projectType" 
            name="projectType" 
            required
            className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
          >
            <option value="" disabled defaultValue="">Select an option...</option>
            <option value="Website">Website Development</option>
            <option value="Mobile App">Mobile App Development</option>
            <option value="E-commerce">E-commerce</option>
            <option value="UI/UX">UI/UX Design</option>
            <option value="Custom Software">Custom Software</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="budget" className="text-sm font-medium text-foreground">Estimated Budget</label>
          <select 
            id="budget" 
            name="budget" 
            className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
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
        <label htmlFor="description" className="text-sm font-medium text-foreground">Project Description *</label>
        <textarea 
          id="description" 
          name="description" 
          required 
          rows={5}
          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
          placeholder="Tell us about your project goals, features, and timeline..."
        ></textarea>
      </div>

      {/* Honeypot for spam protection */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

      <button 
        type="submit" 
        disabled={formState === "submitting"}
        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {formState === "submitting" ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            Submitting...
          </>
        ) : (
          "Send Project Inquiry"
        )}
      </button>
    </form>
  );
}
