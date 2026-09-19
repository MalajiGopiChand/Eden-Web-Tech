import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Terms & Conditions | Eden Technologies",
  description: "Terms and Conditions for Eden Technologies Pvt. Ltd.",
};

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      <Navbar />
      
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <FadeIn direction="up">
          <div className="mb-12">
            <div className="inline-block px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              Legal Agreement
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
              TERMS & <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">CONDITIONS</span>
            </h1>
            <p className="text-muted-foreground text-sm">Last updated: September 19, 2026</p>
          </div>
        </FadeIn>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <FadeIn direction="up" delay={0.1}>
            <section className="p-7 rounded-3xl bg-card border border-border/80 shadow-xs hover:border-primary/40 transition-all duration-300">
              <h2 className="text-xl font-bold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. In addition, when using these digital engineering services, you shall be subject to any posted guidelines and milestone roadmaps.
              </p>
            </section>
          </FadeIn>

          <FadeIn direction="up" delay={0.15}>
            <section className="p-7 rounded-3xl bg-card border border-border/80 shadow-xs hover:border-primary/40 transition-all duration-300">
              <h2 className="text-xl font-bold text-foreground mb-3">2. Description of Service</h2>
              <p>
                Eden Technologies Pvt. Ltd. provides custom web development, mobile application development (iOS & Android), UI/UX system design, cloud architecture, and ongoing engineering SLA support.
              </p>
            </section>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <section className="p-7 rounded-3xl bg-card border border-border/80 shadow-xs hover:border-primary/40 transition-all duration-300">
              <h2 className="text-xl font-bold text-foreground mb-3">3. Intellectual Property</h2>
              <p>
                The Eden brand identity, website code, proprietary frameworks, and marketing assets are owned exclusively by Eden Technologies Pvt. Ltd. and protected by international intellectual property laws.
              </p>
            </section>
          </FadeIn>

          <FadeIn direction="up" delay={0.25}>
            <section className="p-7 rounded-3xl bg-card border border-border/80 shadow-xs hover:border-primary/40 transition-all duration-300">
              <h2 className="text-xl font-bold text-foreground mb-3">4. Client Projects & IP Transfer</h2>
              <p>
                All client projects, source repositories, and business data shared with Eden Technologies are treated with rigorous confidentiality under mutual Non-Disclosure Agreements (NDAs). 100% of custom codebase intellectual property transfers to the client upon full milestone settlement.
              </p>
            </section>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <section className="p-7 rounded-3xl bg-card border border-border/80 shadow-xs hover:border-primary/40 transition-all duration-300">
              <h2 className="text-xl font-bold text-foreground mb-3">5. Limitation of Liability</h2>
              <p>
                Eden Technologies Pvt. Ltd. exercises industry-standard testing and code verification. We shall not be held liable for indirect, incidental, or third-party host outages beyond reasonable SLA parameters.
              </p>
            </section>
          </FadeIn>

          <FadeIn direction="up" delay={0.35}>
            <section className="p-7 rounded-3xl bg-card border border-border/80 shadow-xs hover:border-primary/40 transition-all duration-300">
              <h2 className="text-xl font-bold text-foreground mb-3">6. Contact Information</h2>
              <p>
                If you have questions regarding these Terms, reach out to our legal team:<br /><br />
                <strong>Eden Technologies Pvt. Ltd.</strong><br />
                Email: edenwebtechnologies@gmail.com<br />
                Phone: +91 9705527264<br />
                Location: Vijayawada, Andhra Pradesh, India
              </p>
            </section>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
