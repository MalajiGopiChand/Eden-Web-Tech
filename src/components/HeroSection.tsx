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
      {/* Soft Ambient Radial Lights with Gentle Floating Motion */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] pointer-events-none opacity-60">
        <motion.div 
          animate={{ scale: [1, 1.08, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[15%] w-[480px] h-[480px] rounded-full bg-blue-400/10 blur-[130px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.06, 1], x: [0, -35, 0], y: [0, 25, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[15%] right-[15%] w-[420px] h-[420px] rounded-full bg-cyan-300/10 blur-[120px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline & Action */}
          <div className="flex flex-col items-start text-left space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-foreground leading-[1.06]"
            >
              YOUR IDEA DESERVES{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                MORE THAN JUST CODE.
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                WE TURN IDEAS INTO DIGITAL PRODUCTS THAT GROW BUSINESSES.
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                From high-converting web applications to scalable mobile apps and enterprise software, we build digital solutions that look exceptional and perform with surgical precision.
              </p>
            </motion.div>
            
            {/* CTA Buttons with Spring Physics */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Link 
                  href="/contact" 
                  className="relative group overflow-hidden flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/95 transition-all shadow-[0_10px_25px_rgba(37,99,235,0.25)] hover:shadow-[0_15px_35px_rgba(37,99,235,0.35)] w-full sm:w-auto"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                  <span>Start Your Project</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform duration-200" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Link 
                  href="/work" 
                  className="group flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-full hover:bg-secondary/80 transition-all border border-border hover:border-primary/40 w-full sm:w-auto"
                >
                  <span>Explore Our Work</span>
                  <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform duration-200" />
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Social Proof Avatars & Rating with Staggered Entrance */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <div className="flex -space-x-2.5">
                {avatarList.map((avatar, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.08, type: "spring", stiffness: 350, damping: 22 }}
                    whileHover={{ scale: 1.15, zIndex: 10 }}
                    className="w-10 h-10 rounded-full border-2 border-background overflow-hidden shadow-xs cursor-default"
                  >
                    <img src={avatar} alt="Client" className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.7 + i * 0.05 }}
                    >
                      <Star size={15} className="fill-amber-400 text-amber-400" />
                    </motion.div>
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
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block h-[600px] w-full rounded-3xl p-4"
          >
            {/* Floating Badge 1: Top-Right Speed/Performance */}
            <motion.div
              animate={{ 
                y: [0, -10, 2, 0],
                x: [0, 4, -4, 0]
              }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.06 }}
              className="absolute -top-4 -right-2 z-20 px-4 py-2 rounded-2xl bg-card border border-border shadow-lg flex items-center gap-2.5 text-xs font-bold text-foreground select-none cursor-default"
            >
              <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                <Zap size={13} className="fill-emerald-500 animate-pulse" />
              </div>
              <span>Sub-second Load Speeds</span>
            </motion.div>

            {/* Floating Badge 2: Bottom-Left Security */}
            <motion.div
              animate={{ 
                y: [0, 10, -3, 0],
                x: [0, -4, 4, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              whileHover={{ scale: 1.06 }}
              className="absolute -bottom-3 -left-3 z-20 px-4 py-2.5 rounded-2xl bg-card border border-border shadow-lg flex items-center gap-2.5 text-xs font-bold text-foreground select-none cursor-default"
            >
              <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center text-primary">
                <ShieldCheck size={14} className="animate-pulse" />
              </div>
              <span>Production-Grade Architecture</span>
            </motion.div>

            {/* Main Mockup Window */}
            <div className="absolute inset-0 bg-card rounded-3xl border border-border/80 shadow-[0_20px_50px_rgba(37,99,235,0.08)] overflow-hidden">
              <div className="p-7 h-full flex flex-col gap-5">
                
                {/* Window Header with Tabs */}
                <div className="flex justify-between items-center pb-4 border-b border-border/60">
                  <div className="flex items-center gap-3">
                    <img src="/images/logo-navbar.png" alt="Eden" className="h-8 object-contain" />
                    <div className="hidden sm:flex items-center gap-1.5 ml-2 bg-slate-100 p-1 rounded-lg text-xs font-mono">
                      <span className="px-2 py-0.5 rounded bg-white shadow-xs text-primary font-bold">App.tsx</span>
                      <span className="px-2 py-0.5 text-muted-foreground">schema.prisma</span>
                      <span className="px-2 py-0.5 text-muted-foreground">api.ts</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  </div>
                </div>
                
                {/* Code Window */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="w-full rounded-2xl bg-slate-50 p-5 border border-slate-200/80 font-mono text-xs sm:text-sm shadow-inner"
                >
                  <div className="text-blue-600/75 mb-2 flex items-center gap-1.5 font-medium">
                    <Sparkles size={13} className="animate-spin" />
                    <span>// Engineering your custom digital platform</span>
                  </div>
                  <div className="text-slate-800"><span className="text-blue-600 font-semibold">const</span> <span className="text-slate-900 font-bold">clientSolution</span> = <span className="text-blue-600 font-semibold">new</span> <span className="text-teal-600 font-bold">EdenProduct</span>({'{'}</div>
                  <div className="pl-4 text-slate-700">partner: <span className="text-emerald-700 font-medium">'Your Brand'</span>,</div>
                  <div className="pl-4 text-slate-700">stack: [<span className="text-emerald-700 font-medium">'Next.js'</span>, <span className="text-emerald-700 font-medium">'React Native'</span>, <span className="text-emerald-700 font-medium">'Node'</span>],</div>
                  <div className="pl-4 text-slate-700">scalability: <span className="text-blue-600 font-semibold">100% Cloud Native</span>,</div>
                  <div className="pl-4 text-slate-700">launch: <span className="text-emerald-700 font-medium">'Ready for Market'</span></div>
                  <div className="text-slate-800">{'}'});</div>
                  
                  <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-200 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                      <span className="text-slate-600 font-medium">Cluster active • 0 errors</span>
                    </div>
                    <span className="font-mono text-xs text-slate-400">latency: 14ms</span>
                  </div>
                </motion.div>
                
                {/* Live Metrics Grid with Continuous Pulse */}
                <div className="grid grid-cols-2 gap-4 flex-1">
                  <motion.div 
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-2xl bg-blue-50/50 border border-blue-100 p-5 flex flex-col justify-center transition-all"
                  >
                    <h4 className="text-slate-500 text-xs font-bold tracking-wider uppercase mb-1 flex items-center gap-1.5">
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
                    <div className="w-full h-1.5 bg-blue-100/70 rounded-full mt-3 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "99.9%" }}
                        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-2xl bg-slate-50/60 border border-border/70 p-5 flex flex-col justify-center relative overflow-hidden transition-all"
                  >
                    <h4 className="text-slate-500 text-xs font-bold tracking-wider uppercase mb-1">
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
                    
                    {/* Live Looping Animated Chart Wave Bars */}
                    <div className="absolute bottom-0 left-0 w-full h-1/2 flex items-end justify-between px-4 pb-2 opacity-40 gap-1.5 pointer-events-none">
                      {[40, 70, 35, 90, 60, 95, 75].map((baseHeight, i) => (
                        <motion.div 
                          key={i}
                          animate={{ 
                            height: [`${baseHeight}%`, `${Math.max(25, (baseHeight + 35) % 100)}%`, `${baseHeight}%`] 
                          }}
                          transition={{ 
                            duration: 2.5 + i * 0.4, 
                            repeat: Infinity, 
                            ease: "easeInOut",
                            delay: i * 0.2
                          }}
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
