"use client";

import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";

import { motion } from "framer-motion";
import { SlidingNumber } from "@/components/animate-ui/primitives/texts/sliding-number";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-background">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1000px] pointer-events-none opacity-40">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-[20%] left-[20%] w-[400px] h-[400px] rounded-full bg-primary/20 blur-[120px]"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="absolute bottom-[20%] right-[20%] w-[300px] h-[300px] rounded-full bg-accent/20 blur-[100px]"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start text-left space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.08]"
            >
              YOUR IDEA DESERVES <span className="bg-gradient-to-r from-primary via-indigo-500 to-sky-400 bg-clip-text text-transparent">MORE THAN JUST CODE.</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-foreground">
                WE TURN IDEAS INTO DIGITAL PRODUCTS THAT GROW BUSINESSES.
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                From powerful websites to custom mobile apps and complete business platforms, we design and build digital solutions that look exceptional, perform reliably, and are built around your goals.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4"
            >
              <Link 
                href="/contact" 
                className="relative group overflow-hidden flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all shadow-[0_10px_30px_rgba(79,70,229,0.35)] hover:shadow-[0_15px_40px_rgba(79,70,229,0.5)]"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                <span>Start Your Project</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/work" 
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-full hover:bg-secondary/80 transition-all border border-border"
              >
                Explore Our Work
                <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="pt-8 border-t border-border/50 mt-12 w-full max-w-md"
            >
              <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Websites / Mobile Apps / Digital Products
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative hidden lg:block h-[600px] w-full rounded-3xl overflow-hidden glass p-4"
          >
            {/* Abstract UI representation */}
            <div className="absolute inset-0 bg-gradient-to-br from-card/90 to-background/50 rounded-3xl backdrop-blur-3xl border-4 border-background/50 shadow-2xl">
              <div className="p-8 h-full flex flex-col gap-6 opacity-90">
                <div className="flex justify-between items-center mb-2 pb-4 border-b border-border/50">
                  <div className="flex items-center gap-3">
                    <img src="/images/logo-navbar.png" alt="Eden" className="h-8 md:h-10 object-contain group-hover:scale-105 transition-all" />
                    <span className="text-sm font-bold text-foreground tracking-wider">WORKSPACE</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="w-full rounded-2xl bg-secondary/30 p-6 border border-border/50 font-mono text-sm shadow-inner"
                >
                  <div className="text-primary/70 mb-2">{'// Initializing digital product'}</div>
                  <div className="text-foreground"><span className="text-blue-500">const</span> <span className="text-yellow-500">project</span> = <span className="text-blue-500">new</span> <span className="text-green-500">EdenProject</span>({'{'}</div>
                  <div className="pl-4 text-foreground">client: <span className="text-orange-400">'Your Business'</span>,</div>
                  <div className="pl-4 text-foreground">stack: [<span className="text-orange-400">'Next.js'</span>, <span className="text-orange-400">'React'</span>, <span className="text-orange-400">'Node'</span>],</div>
                  <div className="pl-4 text-foreground">scale: <span className="text-purple-400">Infinity</span>,</div>
                  <div className="pl-4 text-foreground">status: <span className="text-green-400">'Deploying...'</span></div>
                  <div className="text-foreground">{'}'});</div>
                  
                  <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    System operational
                  </div>
                </motion.div>
                
                <div className="grid grid-cols-2 gap-4 flex-1 mt-2">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 p-5 flex flex-col justify-center"
                  >
                    <h4 className="text-muted-foreground text-xs font-bold tracking-wider uppercase mb-1">Performance</h4>
                    <p className="text-3xl font-black text-foreground flex items-center">
                      <SlidingNumber 
                        number={99.9} 
                        fromNumber={0} 
                        decimalPlaces={1} 
                        inView={true} 
                        inViewOnce={true}
                        transition={{ stiffness: 90, damping: 25, mass: 0.5 }}
                      />
                      <span className="text-lg text-primary">%</span>
                    </p>
                    <div className="w-full h-1 bg-secondary rounded-full mt-3 overflow-hidden">
                      <div className="w-[99%] h-full bg-primary rounded-full"></div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="rounded-2xl bg-gradient-to-br from-secondary/50 to-transparent border border-border/50 p-5 flex flex-col justify-center relative overflow-hidden"
                  >
                    <h4 className="text-muted-foreground text-xs font-bold tracking-wider uppercase mb-1">Active Users</h4>
                    <p className="text-3xl font-black text-foreground flex items-center">
                      <SlidingNumber 
                        number={10} 
                        fromNumber={0} 
                        inView={true} 
                        inViewOnce={true}
                        transition={{ stiffness: 100, damping: 20, mass: 0.5 }}
                      />
                      <span>k</span>
                      <span className="text-lg text-primary">+</span>
                    </p>
                    
                    {/* Tiny animated chart */}
                    <div className="absolute bottom-0 left-0 w-full h-1/2 flex items-end justify-between px-4 pb-2 opacity-30 gap-1">
                      {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: "0%" }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 1.5, delay: 1 + (i * 0.1), ease: "easeOut" }}
                          className="w-full rounded-t-sm bg-primary"
                        ></motion.div>
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
