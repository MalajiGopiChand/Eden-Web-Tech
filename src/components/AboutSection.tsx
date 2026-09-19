"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const advantages = [
    { 
      id: "01",
      title: "BUSINESS-MINDED DEVELOPMENT", 
      desc: "We don't start with code. We start by deeply understanding your business goals and customer funnel." 
    },
    { 
      id: "02",
      title: "CUSTOM TAILORED ARCHITECTURE", 
      desc: "Zero bloated templates. We engineer every product specifically tailored to your scalability requirements." 
    },
    { 
      id: "03",
      title: "CONVERSION-DRIVEN DESIGN", 
      desc: "Aesthetics that drive real sales. Every UX interaction is crafted to guide your visitors towards action." 
    },
    { 
      id: "04",
      title: "FUTURE-PROOF TECH STACK", 
      desc: "Built with Next.js, React Native, and cloud-native backends ensuring high speed and enterprise security." 
    },
    { 
      id: "05",
      title: "TRANSPARENT SPRINT UPDATES", 
      desc: "Direct communication with founders and developers. You always know what is deployed and what comes next." 
    },
    { 
      id: "06",
      title: "POST-LAUNCH PARTNERSHIP", 
      desc: "Our collaboration extends beyond deployment. We support your growth with proactive maintenance and scaling." 
    },
  ];

  return (
    <section id="about" className="py-28 bg-transparent border-y border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Leadership Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase mb-4">
            <CheckCircle2 size={13} />
            <span>Executive Leadership</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight mb-4">
            THE MINDS BEHIND EDEN
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We believe world-class digital products combine visionary design, rock-solid engineering, and a sharp understanding of the business behind them.
          </p>
        </div>

        {/* Leadership Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-28">
          
          {/* Founder & CEO */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="group relative p-8 md:p-10 rounded-3xl bg-card border border-border/80 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(79,70,229,0.12)] flex flex-col items-center text-center"
          >
            <div className="relative h-48 w-48 md:h-56 md:w-56 rounded-full p-2 bg-gradient-to-tr from-primary via-indigo-400 to-sky-400 shadow-xl mb-6 group-hover:scale-105 transition-transform duration-500">
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background bg-background">
                <Image 
                  src="/images/ceo.jpg" 
                  alt="Malaji Gopichand - Founder & CEO" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, 224px"
                />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-black text-foreground tracking-tight mb-1">
              MALAJI GOPICHAND
            </h3>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              Founder & Chief Executive Officer
            </span>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md text-sm sm:text-base">
              Passionate technologist and software architect dedicated to helping ambitious companies build scalable, high-performance web platforms and mobile apps.
            </p>

            <div className="flex items-center gap-3 mt-auto">
              <Link 
                href="https://www.linkedin.com/in/malajigopichand/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-secondary/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 text-xs font-semibold shadow-xs"
              >
                <span>LinkedIn</span>
                <ArrowUpRight size={14} />
              </Link>
              <Link 
                href="https://www.instagram.com/mr.gopichand.7/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-secondary/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 text-xs font-semibold shadow-xs"
              >
                <span>Instagram</span>
                <ArrowUpRight size={14} />
              </Link>
              <Link 
                href="mailto:thegopichand@gmail.com" 
                className="flex items-center justify-center w-9 h-9 rounded-full bg-secondary/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 shadow-xs"
                title="Email CEO"
              >
                <Mail size={15} />
              </Link>
            </div>
          </motion.div>

          {/* Co-Founder & COO */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group relative p-8 md:p-10 rounded-3xl bg-card border border-border/80 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(79,70,229,0.12)] flex flex-col items-center text-center"
          >
            <div className="relative h-48 w-48 md:h-56 md:w-56 rounded-full p-2 bg-gradient-to-tr from-sky-400 via-indigo-400 to-primary shadow-xl mb-6 group-hover:scale-105 transition-transform duration-500">
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background bg-background">
                <Image 
                  src="/images/co-ceo.jpg" 
                  alt="Mercy - Co-Founder & COO" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, 224px"
                />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-black text-foreground tracking-tight mb-1">
              MERCY
            </h3>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              Co-Founder & Chief Operating Officer
            </span>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md text-sm sm:text-base">
              The operational backbone of Eden Technologies, ensuring flawless sprint execution, quality standards, and precision delivery for all client ventures.
            </p>

            <div className="flex items-center gap-3 mt-auto">
              <Link 
                href="mailto:mercy@example.com" 
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-secondary/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 text-xs font-semibold shadow-xs"
              >
                <Mail size={14} />
                <span>Contact COO</span>
              </Link>
            </div>
          </motion.div>

        </div>

        {/* Why Choose Us Grid */}
        <div>
          <div className="text-center mb-14">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
              Why Partner With Eden?
            </h2>
            <h3 className="text-3xl md:text-4xl font-black text-foreground">
              BECAUSE YOUR PRODUCT DESERVES UNCOMPROMISING QUALITY
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group p-7 rounded-3xl bg-card border border-border/70 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(79,70,229,0.08)] hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-2xl bg-primary/10 text-primary font-mono font-bold text-sm flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {adv.id}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-125 transition-all" />
                </div>

                <h4 className="text-base font-bold text-foreground tracking-tight mb-2 group-hover:text-primary transition-colors">
                  {adv.title}
                </h4>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {adv.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
