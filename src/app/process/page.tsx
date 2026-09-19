import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProcessTimelineView from "@/components/ProcessTimelineView";
import Link from "next/link";
import { 
  Clock, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  Code2, 
  MessageSquare, 
  ArrowRight,
  GitBranch,
  Terminal,
  Zap,
  Sparkles,
  Lock
} from "lucide-react";

export const metadata = {
  title: "Engineering Process & Methodology | Eden Technologies",
  description: "Learn how Eden Technologies designs and engineers high-performing websites and mobile apps through transparent weekly sprints and fixed-milestone pricing.",
};

const methodologyHighlights = [
  { label: "Sprint Rhythm", value: "1-Week Iterations", icon: Clock, desc: "Fast feedback cycles with zero delayed surprises." },
  { label: "Live Verification", value: "Weekly Staging Demos", icon: Terminal, desc: "Test working software on your own device every Friday." },
  { label: "Pricing Security", value: "100% Fixed Budget", icon: ShieldCheck, desc: "Detailed scope upfront. What we quote is what you pay." },
  { label: "Direct Access", value: "Dedicated WhatsApp / Slack", icon: MessageSquare, desc: "No middleman managers. Direct line to your lead engineers." },
];

const sprintRhythm = [
  {
    day: "Monday",
    badge: "Sprint Planning",
    title: "Milestone Alignment",
    desc: "A brief 20-minute sync to align on this week's sprint goals, user stories, and priority features."
  },
  {
    day: "Tue – Thu",
    badge: "Active Sprints",
    title: "Deep Execution & Automated Tests",
    desc: "Our engineers build, write unit tests, and integrate APIs with daily internal code reviews."
  },
  {
    day: "Friday",
    badge: "Staging Release",
    title: "Live Demo URL Delivery",
    desc: "You receive a private staging link to test every new screen and workflow on your actual phone and browser."
  },
  {
    day: "Weekend / Mon",
    badge: "Sign-off",
    title: "Review & Next Sprint Prep",
    desc: "You give feedback, approve the completed milestone, and we lock the next sprint scope without delay."
  }
];

const coreCommitments = [
  {
    icon: Lock,
    title: "100% Code & IP Ownership",
    desc: "Upon final milestone settlement, every line of source code, Figma file, and database schema is transferred completely to your private repositories."
  },
  {
    icon: ShieldCheck,
    title: "Mutual NDA Protection",
    desc: "We sign enforceable mutual confidentiality agreements before discussing your proprietary logic, customer lists, or product ideas."
  },
  {
    icon: Zap,
    title: "Free 30-Day Post-Launch Warranty",
    desc: "We don't vanish after release. We include 30 days of proactive bug-squashing and uptime monitoring at zero additional cost."
  }
];

export default function ProcessPage() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      <Navbar />

      <section className="pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex-grow">
        
        {/* Hero Header */}
        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles size={13} />
            <span>Engineering Methodology</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight mb-5 leading-[1.12]">
            How We Build Software:{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              Transparent, Fast, & Predictable.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
            We’ve eliminated opaque hourly billing, telephone games with non-technical account managers, and disappearing developers. Here is our exact 6-phase engineering playbook from first idea to public market launch.
          </p>

          {/* Methodology Highlights Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-2">
            {methodologyHighlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="p-4 rounded-2xl bg-white/85 border border-border/70 shadow-xs flex flex-col justify-between">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                      <Icon size={16} />
                    </div>
                    <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                      {item.label}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-foreground">{item.value}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive 6-Phase Timeline Explorer */}
        <div className="mb-20">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
              The 6-Phase Engineering Lifecycle
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-1">
              Select any phase below to inspect deliverables, required client inputs, and technology tools.
            </p>
          </div>
          <ProcessTimelineView />
        </div>

        {/* Weekly Sprint Rhythm Visualizer */}
        <div className="mb-20 p-8 sm:p-10 rounded-3xl bg-slate-50/70 border border-border/80">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <Calendar size={13} />
              <span>Sprint Cadence</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight mb-2">
              A Week in the Life of an Active Sprint
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Every sprint operates on a disciplined 5-day cycle so you always know what is being built, when you can test it, and how your budget is invested.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sprintRhythm.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-border/70 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-primary bg-blue-50 px-2 py-0.5 rounded">
                      {item.day}
                    </span>
                    <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-foreground mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees & Transparency */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight mb-2">
              Built on Complete Transparency
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              No hidden fees, no proprietary lock-ins, and full intellectual property ownership from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreCommitments.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="p-6 rounded-3xl bg-white border border-border/70 shadow-xs hover:border-primary/40 transition-all">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-4">
                    <Icon size={22} />
                  </div>
                  <h4 className="text-base font-bold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white text-center relative overflow-hidden shadow-lg">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mx-auto relative z-10">
            <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
              Ready for Phase 01?
            </span>
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight mb-4">
              Let's map out your project architecture.
            </h3>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8">
              Reach out with your goals or current challenges. We'll deliver a comprehensive, fixed-budget sprint roadmap within 48 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-primary font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                <span>Start Phase 01 Discovery</span>
                <ArrowRight size={16} />
              </Link>

              <a
                href="https://wa.me/919705527264?text=Hi%20Eden%20Technologies%2C%20I%20would%20like%20to%20discuss%20our%20project%20process%20and%20timeline."
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
