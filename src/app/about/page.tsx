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
  { value: "100%", label: "In-House Engineering", desc: "Every line written by our senior technical team â€” zero outsourcing." },
  { value: "4.8 / 5", label: "Client Satisfaction", desc: "Consistent top ratings from startup founders and business directors." },
  { value: "0 hrs", label: "Surprise Billables", desc: "100% fixed milestone scopes agreed upon before work begins." }
];

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      <Navbar />

      <section className="pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex-grow">
        
        {/* ── Hero: Full-width dramatic header ── */}
        <div className="relative mb-10 sm:mb-12 rounded-3xl overflow-hidden bg-white border border-border/80 shadow-sm">
          {/* Background glow orbs */}
          <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[250px] bg-cyan-100/50 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">

            {/* Left: headline + copy */}
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase tracking-wider mb-5">
                  <Sparkles size={12} />
                  <span>Our Story & Philosophy</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-[1.12] mb-5">
                  Engineered<br className="hidden sm:block" /> with rigor.{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                    Built by founders.
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg mb-7">
                  We founded Eden because we were tired of traditional agency bloat: endless meetings, junior contractors, and code that breaks the moment real traffic arrives. <span className="text-foreground font-semibold">Here is who builds your product.</span>
                </p>

                {/* Trust bullets */}
                <div className="flex flex-col gap-2.5">
                  {[
                    "Founders write every line of your code",
                    "100% in-house — zero outsourcing, ever",
                    "Live staging demo every Friday",
                    "Fixed scope, fixed price — guaranteed",
                  ].map((pt) => (
                    <div key={pt} className="flex items-center gap-2.5 text-sm text-foreground/80">
                      <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                      {pt}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all shadow-md"
                >
                  Start a Project <ArrowRight size={15} />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-border/80 text-foreground text-sm font-bold hover:bg-slate-50 transition-all shadow-sm"
                >
                  See Our Work
                </Link>
              </div>
            </div>

            {/* Right: Stats panel */}
            <div className="border-t lg:border-t-0 lg:border-l border-border/60 grid grid-cols-2 bg-slate-50/50">
              {studioStats.map((s, idx) => (
                <div
                  key={idx}
                  className={`p-6 sm:p-8 flex flex-col justify-between border-border/60 ${
                    idx === 0 ? "border-b border-r" :
                    idx === 1 ? "border-b" :
                    idx === 2 ? "border-r" : ""
                  }`}
                >
                  <div>
                    <span className="text-2xl sm:text-3xl font-black text-foreground tracking-tight block mb-1">{s.value}</span>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">{s.label}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The Eden Manifesto / Origin Story */}
        <div className="mb-10 sm:mb-12 rounded-3xl bg-white border border-border/80 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Left — headline panel */}
            <div className="lg:col-span-2 p-6 sm:p-8 flex flex-col justify-between bg-slate-50/80 border-b lg:border-b-0 lg:border-r border-border/60">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                  <span>Why We Started Eden</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight leading-[1.2] mb-4">
                  Traditional agencies are{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    fundamentally broken.
                  </span>
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We built Eden as the antidote — a studio where the founders are the engineers, and every client speaks directly with the people writing their code.
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-2.5">
                {[
                  "No account managers or middlemen",
                  "No offshore contractors",
                  "No surprise invoices — ever",
                ].map((pt) => (
                  <div key={pt} className="flex items-center gap-2.5 text-xs font-semibold text-foreground/80">
                    <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                    {pt}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — story paragraphs */}
            <div className="lg:col-span-3 p-6 sm:p-8 flex flex-col gap-5 justify-center">
              <div className="flex gap-3">
                <span className="w-7 h-7 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-red-500 text-sm font-black">✕</span>
                </span>
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-1">The agency model they sell you</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    A polished sales rep makes sweeping promises. Your project is handed to a non-technical account manager. Actual coding is quietly offshored to junior contractors you'll never meet. Result: delayed timelines, bloated invoices, and fragile code that breaks under real traffic.
                  </p>
                </div>
              </div>

              <div className="h-px bg-border/60" />

              <div className="flex gap-3">
                <span className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 size={14} className="text-emerald-600" />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-1">The Eden model we built instead</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    You speak directly with the systems architects writing your code. Every sprint is disciplined, every milestone is fixed in scope, and every Friday you receive a live staging demo on your phone to verify real progress before a single rupee of the next milestone is invoiced.
                  </p>
                </div>
              </div>

              <div className="h-px bg-border/60" />

              <div className="flex gap-3">
                <span className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Terminal size={13} className="text-blue-600" />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-1">Our standard — no exceptions</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Whether it's a medical clinic appointment system, a multi-store grocery e-cart, or a gym management platform — our bar is the same: <span className="text-foreground font-semibold">world-class engineering, on time, with zero surprises.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Duo Section */}
        <div className="mb-10 sm:mb-12">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight mb-1.5">
              Studio Leadership
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Meet the founders leading engineering and operations at Eden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {/* Founder: Gopichand */}
            <div className="group p-5 sm:p-6 lg:p-7 rounded-3xl bg-white border border-border/80 hover:border-primary/50 transition-all duration-300 shadow-xs hover:shadow-[0_16px_40px_rgba(37,99,235,0.08)] flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 mb-4 text-center sm:text-left">
                  {/* Arranged Executive Portrait Frame */}
                  <div className="relative w-32 sm:w-36 lg:w-40 aspect-[4/5] shrink-0 mx-auto sm:mx-0">
                    <div className="relative w-full h-full p-1.5 rounded-2xl bg-white border-2 border-slate-200/90 shadow-md shadow-slate-200/60 ring-1 ring-slate-900/5 group-hover:border-primary/50 group-hover:shadow-lg transition-all duration-300">
                      <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80">
                        <Image 
                          src="/images/ceo.jpg" 
                          alt="Malaji Gopichand - Founder & Lead Systems Architect" 
                          fill 
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 130px, (max-width: 1024px) 144px, 160px"
                          priority
                        />
                      </div>
                      {/* Anchored Executive Badge */}
                      <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-white border border-slate-200 shadow-xs flex items-center gap-1.5 whitespace-nowrap z-10">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-800">Founder & CEO</span>
                      </div>
                    </div>
                  </div>

                  {/* Identity & Direct Access */}
                  <div className="flex-1 min-w-0 pt-0.5">
                    <h3 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
                      Malaji Gopichand
                    </h3>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-wider my-1.5 border border-blue-100">
                      <ShieldCheck size={13} className="text-primary shrink-0" />
                      <span>Founder & Lead Systems Architect</span>
                    </div>
                    <p className="text-xs text-muted-foreground font-mono leading-relaxed mb-3">
                      Next.js â€¢ React Native â€¢ Node.js â€¢ Cloud Architecture
                    </p>

                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                      <Link 
                        href="https://www.linkedin.com/in/malajigopichand/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-primary hover:text-white text-foreground transition-all text-xs font-bold shadow-xs cursor-pointer"
                      >
                        <span>LinkedIn</span>
                        <ArrowUpRight size={13} />
                      </Link>

                      <a 
                        href="mailto:edenwebtechnologies@gmail.com" 
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-primary hover:text-white text-foreground transition-all text-xs font-bold shadow-xs"
                      >
                        <Mail size={13} />
                        <span>Email</span>
                      </a>
                    </div>
                  </div>
                </div>

                <blockquote className="p-3.5 rounded-2xl bg-slate-50/80 border border-border/60 text-xs sm:text-sm text-foreground/90 italic leading-relaxed mb-3">
                  "Every line of code is an investment in your company's scalability. We engineer with strict type safety, zero bloat, and long-term maintainability."
                </blockquote>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Software engineer and system architect with deep expertise in full-stack web and mobile development. Gopi oversees all architectural decisions, code reviews, and cloud deployments at Eden, partnering directly with founders from wireframe to public release.
                </p>
              </div>
            </div>

            {/* Co-Founder: Mercy */}
            <div className="group p-5 sm:p-6 lg:p-7 rounded-3xl bg-white border border-border/80 hover:border-primary/50 transition-all duration-300 shadow-xs hover:shadow-[0_16px_40px_rgba(37,99,235,0.08)] flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 mb-4 text-center sm:text-left">
                  {/* Arranged Executive Portrait Frame */}
                  <div className="relative w-32 sm:w-36 lg:w-40 aspect-[4/5] shrink-0 mx-auto sm:mx-0">
                    <div className="relative w-full h-full p-1.5 rounded-2xl bg-white border-2 border-slate-200/90 shadow-md shadow-slate-200/60 ring-1 ring-slate-900/5 group-hover:border-primary/50 group-hover:shadow-lg transition-all duration-300">
                      <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80">
                        <Image 
                          src="/images/co-ceo.jpg" 
                          alt="Mercy - Co-Founder & Head of Operations" 
                          fill 
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 160px, (max-width: 1024px) 176px, 192px"
                        />
                      </div>
                      {/* Anchored Executive Badge */}
                      <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-white border border-slate-200 shadow-xs flex items-center gap-1.5 whitespace-nowrap z-10">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-800">Co-Founder & COO</span>
                      </div>
                    </div>
                  </div>

                  {/* Identity & Direct Access */}
                  <div className="flex-1 min-w-0 pt-0.5">
                    <h3 className="text-xl lg:text-2xl font-black text-foreground tracking-tight">
                      Mercy
                    </h3>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-wider my-1.5 border border-blue-100">
                      <CheckCircle2 size={13} className="text-primary shrink-0" />
                      <span>Co-Founder & Head of Operations</span>
                    </div>
                    <p className="text-xs text-muted-foreground font-mono leading-relaxed mb-3">
                      Sprint Delivery â€¢ Milestone Governance â€¢ Client Success
                    </p>

                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                      <a 
                        href="mailto:edenwebtechnologies@gmail.com" 
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-primary hover:text-white text-foreground transition-all text-xs font-bold shadow-xs cursor-pointer"
                      >
                        <Mail size={13} />
                        <span>Email Mercy</span>
                      </a>
                    </div>
                  </div>
                </div>

                <blockquote className="p-3.5 rounded-2xl bg-slate-50/80 border border-border/60 text-xs sm:text-sm text-foreground/90 italic leading-relaxed mb-3">
                  "Predictability is our promise. Weekly Friday staging demos, zero surprise invoices, and direct, honest communication at every milestone."
                </blockquote>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Operations and client success lead managing project pipelines, milestone schedules, and quality acceptance. Mercy ensures that every client collaboration is seamless, on schedule, and completely transparent.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Core Values */}
        <div className="mb-10 sm:mb-12">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground tracking-tight mb-2">
              Our Core Principles
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              The four non-negotiables that guide every product we design and build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {studioValues.map((v) => (
              <div key={v.number} className="p-5 sm:p-6 rounded-2xl bg-white border border-border/80 shadow-xs flex items-start gap-4">
                <span className="w-9 h-9 rounded-xl bg-blue-50 text-primary font-mono font-bold text-sm flex items-center justify-center shrink-0 border border-blue-100">
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
        <div className="mb-10 sm:mb-12 p-6 sm:p-8 rounded-3xl bg-white border border-border/80 shadow-xs">
          <div className="flex items-center gap-3 mb-3.5">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
              <MapPin size={18} />
            </div>
            <div>
              <h3 className="text-xl font-black text-foreground">Our Operating Hubs</h3>
              <p className="text-xs text-muted-foreground">Headquartered in Andhra Pradesh with active technical networks</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3.5 border-t border-border/60">
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-border/60">
              <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider block mb-1">Headquarters</span>
              <h4 className="text-base font-bold text-foreground">Vijayawada</h4>
              <p className="text-xs text-muted-foreground mt-0.5">Andhra Pradesh, India</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-border/60">
              <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider block mb-1">Engineering Hub</span>
              <h4 className="text-base font-bold text-foreground">Hyderabad</h4>
              <p className="text-xs text-muted-foreground mt-0.5">Telangana, India</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-border/60">
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

