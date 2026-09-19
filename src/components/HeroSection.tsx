"use client";

import Link from "next/link";
import { ArrowRight, ArrowDown, Star, Sparkles, CheckCircle, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { SlidingNumber } from "@/components/animate-ui/primitives/texts/sliding-number";

export default function HeroSection() {
  const avatarList = [
    "https://i.pravatar.cc/150?u=priya",
    "https://i.pravatar.cc/150?u=rahul",
    "https://i.pravatar.cc/150?u=anjali",
    "https://i.pravatar.cc/150?u=karthik",
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-transparent">
      {/* Soft Ambient Radial Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] pointer-events-none opacity-50">
        <div className="absolute top-[15%] left-[15%] w-[450px] h-[450px] rounded-full bg-primary/20 blur-[130px]" />
        <div className="absolute bottom-[15%] right-[15%] w-[400px] h-[400px] rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline & Action */}
          <div className="flex flex-col items-start text-left space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-foreground leading-[1.06]"
            >
              YOUR IDEA DESERVES{" "}
              <span className="bg-gradient-to-r from-primary via-indigo-500 to-sky-400 bg-clip-text text-transparent">
                MORE THAN JUST CODE.
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="space-y-4"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                WE TURN IDEAS INTO DIGITAL PRODUCTS THAT GROW BUSINESSES.
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                From high-converting web applications to scalable mobile apps and enterprise software, we build digital solutions that look exceptional and perform with surgical precision.
              </p>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link 
                href="/contact" 
                className="relative group overflow-hidden flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-all shadow-[0_10px_35px_rgba(79,70,229,0.35)] hover:shadow-[0_15px_45px_rgba(79,70,229,0.5)]"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                <span>Start Your Project</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/work" 
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-secondary/80 text-secondary-foreground font-semibold rounded-full hover:bg-secondary transition-all border border-border hover:border-primary/40"
              >
                Explore Our Work
                <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
              </Link>
            </motion.div>
            
            {/* Social Proof Avatars & Rating */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <div className="flex -space-x-2.5">
                {avatarList.map((avatar, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden shadow-sm">
                    <img src={avatar} alt="Client" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-foreground ml-1.5">4.8 out of 5</span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Rated 4.8/5 by innovative businesses across India & worldwide
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Right Column: High-End Interactive Workspace Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative hidden lg:block h-[600px] w-full rounded-3xl p-4"
          >
            {/* Floating Badge 1: Top-Right Speed/Performance */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-2 z-20 px-4 py-2 rounded-2xl bg-card/90 backdrop-blur-xl border border-border shadow-xl flex items-center gap-2.5 text-xs font-bold text-foreground select-none"
            >
              <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <Zap size={13} className="fill-emerald-500" />
              </div>
              <span>Sub-second Load Speeds</span>
            </motion.div>

            {/* Floating Badge 2: Bottom-Left Security */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-3 -left-3 z-20 px-4 py-2.5 rounded-2xl bg-card/90 backdrop-blur-xl border border-border shadow-xl flex items-center gap-2.5 text-xs font-bold text-foreground select-none"
            >
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <ShieldCheck size={14} />
              </div>
              <span>Production-Grade Architecture</span>
            </motion.div>

            {/* Main Mockup Window */}
            <div className="absolute inset-0 bg-gradient-to-br from-card/95 via-card/80 to-background/90 rounded-3xl backdrop-blur-2xl border border-border/80 shadow-[0_20px_60px_rgba(79,70,229,0.12)] overflow-hidden">
              <div className="p-7 h-full flex flex-col gap-5">
                
                {/* Window Header with Tabs */}
                <div className="flex justify-between items-center pb-4 border-b border-border/60">
                  <div className="flex items-center gap-3">
                    <img src="/images/logo-navbar.png" alt="Eden" className="h-8 object-contain" />
                    <div className="hidden sm:flex items-center gap-1.5 ml-2 bg-secondary/50 p-1 rounded-lg text-xs font-mono">
                      <span className="px-2 py-0.5 rounded bg-background shadow-xs text-primary font-bold">App.tsx</span>
                      <span className="px-2 py-0.5 text-muted-foreground">schema.prisma</span>
                      <span className="px-2 py-0.5 text-muted-foreground">api.ts</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  </div>
                </div>
                
                {/* Code Window */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="w-full rounded-2xl bg-secondary/25 p-5 border border-border/50 font-mono text-xs sm:text-sm shadow-inner"
                >
                  <div className="text-primary/70 mb-2 flex items-center gap-1.5">
                    <Sparkles size={13} />
                    <span>// Engineering your custom digital platform</span>
                  </div>
                  <div className="text-foreground"><span className="text-indigo-400 font-semibold">const</span> <span className="text-amber-400 font-semibold">clientSolution</span> = <span className="text-indigo-400 font-semibold">new</span> <span className="text-emerald-400 font-semibold">EdenProduct</span>({'{'}</div>
                  <div className="pl-4 text-foreground">partner: <span className="text-amber-300">'Your Brand'</span>,</div>
                  <div className="pl-4 text-foreground">stack: [<span className="text-amber-300">'Next.js'</span>, <span className="text-amber-300">'React Native'</span>, <span className="text-amber-300">'Node'</span>],</div>
                  <div className="pl-4 text-foreground">scalability: <span className="text-purple-400">100% Cloud Native</span>,</div>
                  <div className="pl-4 text-foreground">launch: <span className="text-emerald-400">'Ready for Market'</span></div>
                  <div className="text-foreground">{'}'});</div>
                  
                  <div className="mt-4 flex items-center justify-between pt-3 border-t border-border/30 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>Cluster active • 0 errors</span>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground/60">latency: 14ms</span>
                  </div>
                </motion.div>
                
                {/* Live Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 flex-1">
                  <motion.div 
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 p-5 flex flex-col justify-center"
                  >
                    <h4 className="text-muted-foreground text-xs font-bold tracking-wider uppercase mb-1 flex items-center gap-1.5">
                      <CheckCircle size={13} className="text-primary" /> Lighthouse Score
                    </h4>
                    <p className="text-3xl font-black text-foreground flex items-center">
                      <SlidingNumber 
                        number={99.9} 
                        fromNumber={0} 
                        decimalPlaces={1} 
                        inView={true} 
                        inViewOnce={true}
                        transition={{ stiffness: 90, damping: 25, mass: 0.5 }}
                      />
                      <span className="text-lg text-primary ml-0.5">%</span>
                    </p>
                    <div className="w-full h-1.5 bg-secondary rounded-full mt-3 overflow-hidden">
                      <div className="w-[99.9%] h-full bg-gradient-to-r from-primary to-indigo-400 rounded-full"></div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="rounded-2xl bg-secondary/30 border border-border/60 p-5 flex flex-col justify-center relative overflow-hidden"
                  >
                    <h4 className="text-muted-foreground text-xs font-bold tracking-wider uppercase mb-1">
                      Active Users Scaled
                    </h4>
                    <p className="text-3xl font-black text-foreground flex items-center">
                      <SlidingNumber 
                        number={10} 
                        fromNumber={0} 
                        inView={true} 
                        inViewOnce={true}
                        transition={{ stiffness: 100, damping: 20, mass: 0.5 }}
                      />
                      <span>k</span>
                      <span className="text-lg text-primary ml-0.5">+</span>
                    </p>
                    
                    {/* Animated chart bars */}
                    <div className="absolute bottom-0 left-0 w-full h-1/2 flex items-end justify-between px-4 pb-2 opacity-30 gap-1 pointer-events-none">
                      {[40, 65, 35, 85, 55, 95, 75].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: "0%" }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 1.2, delay: 0.8 + (i * 0.1), ease: "easeOut" }}
                          className="w-full rounded-t-xs bg-primary"
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
