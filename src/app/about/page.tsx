import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  Zap, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Mail, 
  ArrowUpRight, 
  MapPin, 
  Users, 
  HeartHandshake, 
  Terminal, 
  Cpu, 
  Layers,
  Lock
} from "lucide-react";

export const metadata = {
  title: "About Us | Eden Technologies Pvt. Ltd.",
  description: "Learn about Eden Technologies: our founding story, engineering leadership, core values, and why ambitious founders partner with us to build scalable web and mobile software.",
};

const studioValues = [
  {
    number: "01",
    title: "Radical Transparency",
    desc: "No hidden hourly fees, no surprise invoices, and no disappearing developers. You get working private staging links every Friday to verify real progress."
  },
  {
    number: "02",
    title: "Engineering Rigor",
    desc: "We write clean, strictly typed codebases built with Next.js, React Native, and robust cloud APIs. We reject bloated templates in favor of tailored scalability."
  },
  {
    number: "03",
    title: "Business-First Thinking",
    desc: "We don't start with code; we start with your business model, customer conversion funnel, and unit economics to ensure every screen drives tangible ROI."
  },
  {
    number: "04",
    title: "100% Client Ownership",
    desc: "Every line of code, design file, and database schema belongs to you. Upon milestone settlement, we transfer everything directly to your private GitHub and cloud accounts."
  }
];

const studioStats = [
  { value: "20+", label: "Platforms Delivered", desc: "Across retail, healthcare, gym management, and custom software." },
  { value: "100%", label: "In-House Engineering", desc: "Every line written by our senior technical team — zero outsourcing." },
  { value: "4.8 / 5", label: "Client Satisfaction", desc: "Consistent top ratings from startup founders and business directors." },
  { value: "0 hrs", label: "Surprise Billables", desc: "100% fixed milestone scopes agreed upon before work begins." }
];

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      <Navbar />

      <section className="pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex-grow">
        
        {/* Page Hero Header */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles size={13} />
            <span>Our Story & Philosophy</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight mb-5 leading-[1.12]">
            We build software with the craft of artisans and the{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              speed of startups.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Eden Technologies is an independent software studio founded by senior engineers. We partner directly with founders and business owners to design, architect, and scale high-impact web and mobile products.
          </p>
        </div>

        {/* Studio Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {studioStats.map((s, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white border border-border/80 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">{s.value}</span>
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary mt-1 mb-2">{s.label}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* The Eden Manifesto / Origin Story */}
        <div className="mb-20 p-8 sm:p-12 rounded-3xl bg-slate-50/80 border border-border/80">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <span>Why We Started Eden</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground tracking-tight mb-6">
              Traditional software agencies are fundamentally broken.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                In typical digital agencies, sales reps make sweeping promises, pass your project to non-technical account managers, who then secretly offshore the actual coding to inexperienced junior contractors. The end result is predictable: delayed timelines, bloated invoices, fragile code, and frustration.
              </p>
              <p>
                We built <strong className="text-foreground">Eden Technologies</strong> as the antidote to agency bloat. When you work with us, you speak directly with the systems architects writing your code. Every sprint is disciplined, every milestone is fixed in scope, and every Friday you receive a live staging demo on your phone.
              </p>
              <p>
                Whether building an end-to-end medical clinic appointment system, a multi-store grocery e-cart, or a gym management platform — our standard is simple: <strong className="text-foreground">world-class engineering, delivered on time, with zero surprises.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Duo Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground tracking-tight mb-2">
              Studio Leadership
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Meet the founders leading engineering and operations at Eden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Gopichand */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-border/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6 text-center sm:text-left">
                  <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-2xl overflow-hidden p-1 bg-gradient-to-tr from-blue-600 via-cyan-400 to-emerald-400 shrink-0 shadow-sm">
                    <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-100">
                      <Image 
                        src="/images/ceo.jpg" 
                        alt="Malaji Gopichand - Founder & Lead Systems Architect" 
                        fill 
                        className="object-cover"
                        sizes="(max-width: 768px) 112px, 128px"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-foreground tracking-tight">
                      Malaji Gopichand
                    </h3>
                    <span className="inline-block px-3 py-0.5 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-wider my-1.5 border border-blue-100">
                      Founder & Lead Systems Architect
                    </span>
                    <p className="text-xs text-muted-foreground font-mono">
                      Next.js • React Native • Node.js • Cloud Architecture
                    </p>
                  </div>
                </div>

                <blockquote className="p-4 rounded-2xl bg-slate-50 border border-border/60 text-xs sm:text-sm text-foreground/90 italic leading-relaxed mb-6">
                  "Every line of code is an investment in your company's scalability. We engineer with strict type safety, zero bloat, and long-term maintainability."
                </blockquote>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                  Software engineer and system architect with deep expertise in full-stack web and mobile development. Gopi oversees all architectural decisions, code reviews, and cloud deployments at Eden, partnering directly with founders from wireframe to public release.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border/60">
                <Link 
                  href="https://www.linkedin.com/in/malajigopichand/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-primary hover:text-white text-foreground transition-all text-xs font-bold shadow-xs"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight size={14} />
                </Link>

                <a 
                  href="mailto:edenwebtechnologies@gmail.com" 
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-primary hover:text-white text-foreground transition-all text-xs font-bold shadow-xs"
                >
                  <Mail size={14} />
                  <span>Email Gopichand</span>
                </a>
              </div>
            </div>

            {/* Mercy */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-border/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6 text-center sm:text-left">
                  <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-2xl overflow-hidden p-1 bg-gradient-to-tr from-cyan-400 via-blue-500 to-emerald-400 shrink-0 shadow-sm">
                    <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-100">
                      <Image 
                        src="/images/co-ceo.jpg" 
                        alt="Mercy - Co-Founder & Head of Operations" 
                        fill 
                        className="object-cover"
                        sizes="(max-width: 768px) 112px, 128px"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-foreground tracking-tight">
                      Mercy
                    </h3>
                    <span className="inline-block px-3 py-0.5 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-wider my-1.5 border border-blue-100">
                      Co-Founder & Head of Operations
                    </span>
                    <p className="text-xs text-muted-foreground font-mono">
                      Sprint Delivery • Milestone Governance • Client Success
                    </p>
                  </div>
                </div>

                <blockquote className="p-4 rounded-2xl bg-slate-50 border border-border/60 text-xs sm:text-sm text-foreground/90 italic leading-relaxed mb-6">
                  "Predictability is our promise. Weekly Friday staging demos, zero surprise invoices, and direct, honest communication at every milestone."
                </blockquote>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                  Operations and client success lead managing project pipelines, milestone schedules, and quality acceptance. Mercy ensures that every client collaboration is seamless, on schedule, and completely transparent.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border/60">
                <a 
                  href="mailto:edenwebtechnologies@gmail.com" 
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-primary hover:text-white text-foreground transition-all text-xs font-bold shadow-xs"
                >
                  <Mail size={14} />
                  <span>Email Mercy</span>
                </a>

                <a 
                  href="https://wa.me/919705527264?text=Hi%20Mercy%2C%20I%20would%20like%20to%20discuss%20a%20new%20project%20with%20Eden." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-emerald-600 hover:text-white text-foreground transition-all text-xs font-bold shadow-xs"
                >
                  <span>WhatsApp Connect</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Core Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground tracking-tight mb-2">
              Our Core Principles
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              The four non-negotiables that guide every product we design and build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studioValues.map((v) => (
              <div key={v.number} className="p-7 sm:p-8 rounded-3xl bg-white border border-border/80 shadow-xs flex items-start gap-4">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-primary font-mono font-bold text-sm flex items-center justify-center shrink-0 border border-blue-100">
                  {v.number}
                </span>
                <div>
                  <h4 className="text-base sm:text-lg font-black text-foreground mb-2">{v.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Hubs & Presence */}
        <div className="mb-20 p-8 sm:p-10 rounded-3xl bg-white border border-border/80 shadow-xs">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <h3 className="text-xl font-black text-foreground">Our Operating Hubs</h3>
              <p className="text-xs text-muted-foreground">Headquartered in Andhra Pradesh with active technical networks</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-border/60">
            <div className="p-4 rounded-2xl bg-slate-50 border border-border/60">
              <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider block mb-1">Headquarters</span>
              <h4 className="text-base font-bold text-foreground">Vijayawada</h4>
              <p className="text-xs text-muted-foreground mt-0.5">Andhra Pradesh, India</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-border/60">
              <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider block mb-1">Engineering Hub</span>
              <h4 className="text-base font-bold text-foreground">Hyderabad</h4>
              <p className="text-xs text-muted-foreground mt-0.5">Telangana, India</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-border/60">
              <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider block mb-1">Product Hub</span>
              <h4 className="text-base font-bold text-foreground">Bangalore</h4>
              <p className="text-xs text-muted-foreground mt-0.5">Karnataka, India</p>
            </div>
          </div>
        </div>

        {/* Final CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white text-center relative overflow-hidden shadow-lg">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mx-auto relative z-10">
            <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
              Let's Collaborate
            </span>
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight mb-4">
              Have a product you want to build with rigor?
            </h3>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8">
              We'll review your vision, ask clarifying architecture questions, and deliver a transparent fixed-budget roadmap within 48 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-primary font-bold text-sm hover:bg-slate-50 transition-all shadow-md cursor-pointer"
              >
                <span>Start a Project Discussion</span>
                <ArrowRight size={16} />
              </Link>

              <a
                href="https://wa.me/919705527264?text=Hi%20Gopichand%2C%20I%20would%20like%20to%20discuss%20a%20new%20project%20with%20Eden."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-all border border-white/20"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </section>

      <Footer />
    </main>
  );
}
