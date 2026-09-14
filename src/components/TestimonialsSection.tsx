"use client";

import { testimonials } from "@/data";
import { Star, RefreshCw } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialsSection() {
  const [reviews, setReviews] = useState<typeof testimonials>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate real-time fetching
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setReviews(testimonials);
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase">
              DON'T TAKE OUR WORD FOR IT.
            </h2>
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            LET OUR WORK SPEAK.
          </h3>
        </div>

        <div className="min-h-[300px] relative">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div 
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground gap-4"
              >
                <RefreshCw className="animate-spin text-primary" size={32} />
                <p>Fetching real-time data...</p>
              </motion.div>
            ) : (
              <motion.div 
                key="content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {reviews.map((testimonial, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    key={testimonial.id}
                    className="p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/50 transition-all flex flex-col h-full"
                  >
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <p className="text-lg text-foreground italic mb-8 flex-grow">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="mt-auto flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/10 shrink-0">
                        <img src={testimonial.image} alt={testimonial.client} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">{testimonial.client}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
