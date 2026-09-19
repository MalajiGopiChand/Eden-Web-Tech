import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ContactDirectChannels from "@/components/ContactDirectChannels";
import ContactFAQ from "@/components/ContactFAQ";
import FadeIn from "@/components/FadeIn";
import { ShieldCheck, Zap, Award, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Contact Us | Eden Technologies Pvt. Ltd.",
  description: "Start your project with Eden Technologies. Fast architecture proposals, fixed pricing, and direct senior engineer communication.",
};

const trustHighlights = [
  { label: "Client Satisfaction", value: "4.8 / 5 Rating", icon: Award },
  { label: "First Response", value: "< 2 Hours", icon: Zap },
  { label: "IP Protection", value: "100% Mutual NDA", icon: ShieldCheck },
  { label: "Sprint Delivery", value: "Weekly Staging Links", icon: Sparkles },
];

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      <Navbar />
      
      <section className="pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex-grow">
        
        {/* Page Top Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for New Projects • Typically Replies in 2 Hours</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight mb-5 leading-[1.12]">
            Let’s build something{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              exceptional.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
            Whether you need a high-converting website, an intuitive cross-platform mobile app, or a scalable custom software dashboard — our engineering team is ready to deliver.
          </p>

          {/* Quick Trust Pillars Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {trustHighlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="p-3 sm:p-3.5 rounded-2xl bg-white/80 border border-border/70 shadow-xs flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                    <Icon size={16} />
                  </div>
                  <div>
                    <span className="block text-xs font-black text-foreground leading-tight">{item.value}</span>
                    <span className="text-[10px] text-muted-foreground">{item.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Channels, Office Info, What Happens Next */}
          <div className="lg:col-span-5">
            <ContactDirectChannels />
          </div>
          
          {/* Right Column: Interactive Proposal Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* Founder Quality Assurance Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-50/70 via-white to-emerald-50/60 border border-blue-100 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-black text-xl shadow-xs shrink-0">
              ET
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-black text-foreground">
                The Eden Founder Guarantee
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mt-0.5 leading-relaxed">
                "We treat every client product with the care and rigor of our own startup. No offshore middlemen, no hidden billable hours, and no disappearing developers."
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0 text-xs font-bold text-emerald-700 bg-white px-4 py-2 rounded-xl border border-emerald-200/80 shadow-xs">
            <CheckCircle2 size={16} className="text-emerald-500" />
            <span>100% In-House Engineering</span>
          </div>
        </div>

        {/* Client FAQ Section */}
        <ContactFAQ />

      </section>

      <Footer />
    </main>
  );
}
