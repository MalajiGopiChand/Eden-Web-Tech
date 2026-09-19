"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, ShieldCheck, Clock, FileCode, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: "faq-1",
    question: "How quickly can we kick off development after our initial discussion?",
    answer: "Most projects kick off within 3 to 5 business days after our discovery session and proposal approval. We assemble your core tech stack immediately, configure private GitHub repositories, and provide you with a dedicated Slack/WhatsApp channel and live staging environment."
  },
  {
    id: "faq-2",
    question: "Do you sign Non-Disclosure Agreements (NDAs)?",
    answer: "Yes, 100%. We take client confidentiality and proprietary technology seriously. We are happy to execute mutual NDAs before you share technical specs, design prototypes, or proprietary business logic."
  },
  {
    id: "faq-3",
    question: "How are project milestones and payments structured?",
    answer: "We work on a transparent milestone-based schedule (e.g., 30% project kickoff deposit, 40% upon review and approval of working staging build demos, and 30% upon final production launch and code handover). What we quote in our proposal is what you pay — zero hidden hourly overages."
  },
  {
    id: "faq-4",
    question: "Who owns the intellectual property, design assets, and source code?",
    answer: "You own 100% of the repository, source code, design systems, database schemas, and digital assets upon final milestone settlement. We assist in transferring everything directly to your private GitHub organization, AWS/Vercel cloud, and app store developer accounts."
  },
  {
    id: "faq-5",
    question: "Can you take over, audit, or modernize an existing codebase?",
    answer: "Yes. We frequently conduct deep architectural and security audits for existing products. We refactor legacy systems, eliminate technical debt, speed up sluggish databases, and rewrite outdated frontends into modern Next.js and React Native architectures with zero downtime."
  },
  {
    id: "faq-6",
    question: "What kind of post-launch maintenance and support do you provide?",
    answer: "We never disappear after launch day. Every project includes a complimentary 30-day post-launch warranty to squash any unexpected edge-case bugs. After that, we offer flexible ongoing maintenance retainers covering security updates, server monitoring, and continuous new feature rollouts."
  }
];

export default function ContactFAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="mt-20 pt-16 border-t border-border/60">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase tracking-wider mb-4">
          <HelpCircle size={14} />
          <span>Common Questions</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground tracking-tight mb-4">
          Frequently asked questions before hiring us.
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Everything you need to know about our collaboration model, contracts, and engineering standards.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-3.5">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen 
                  ? "bg-white border-primary/50 shadow-xs" 
                  : "bg-white/80 border-border/70 hover:border-primary/30"
              }`}
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="text-sm sm:text-base font-bold text-foreground">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 ${
                  isOpen ? "bg-primary text-white rotate-180" : "bg-slate-100 text-muted-foreground"
                }`}>
                  <ChevronDown size={16} />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
