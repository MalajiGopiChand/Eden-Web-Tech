import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Privacy Policy | Eden Technologies",
  description: "Privacy Policy for Eden Technologies Pvt. Ltd.",
};

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      <Navbar />
      
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <FadeIn direction="up">
          <div className="mb-12">
            <div className="inline-block px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              Legal Documentation
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
              PRIVACY <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">POLICY</span>
            </h1>
            <p className="text-muted-foreground text-sm">Last updated: September 19, 2026</p>
          </div>
        </FadeIn>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <FadeIn direction="up" delay={0.1}>
            <section className="p-7 rounded-3xl bg-card border border-border/80 shadow-xs hover:border-primary/40 transition-all duration-300">
              <h2 className="text-xl font-bold text-foreground mb-3">1. Introduction</h2>
              <p>
                Welcome to Eden Technologies Pvt. Ltd. ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy informs you how we look after your data when you visit our website or interact with our digital engineering services.
              </p>
            </section>
          </FadeIn>

          <FadeIn direction="up" delay={0.15}>
            <section className="p-7 rounded-3xl bg-card border border-border/80 shadow-xs hover:border-primary/40 transition-all duration-300">
              <h2 className="text-xl font-bold text-foreground mb-3">2. The Data We Collect</h2>
              <p className="mb-4">
                We may collect, use, and process the following categories of information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li><strong>Identity Data:</strong> First name, last name, username, and company title.</li>
                <li><strong>Contact Data:</strong> Email address, phone number, and billing details.</li>
                <li><strong>Technical Data:</strong> IP address, device fingerprints, operating system, browser type, and time zone.</li>
                <li><strong>Usage Data:</strong> How you engage with our services, features, and performance metrics.</li>
              </ul>
            </section>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <section className="p-7 rounded-3xl bg-card border border-border/80 shadow-xs hover:border-primary/40 transition-all duration-300">
              <h2 className="text-xl font-bold text-foreground mb-3">3. How We Use Your Data</h2>
              <p className="mb-4">
                Your data is utilized strictly for lawful purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>To deliver custom web, mobile, and software development contracts.</li>
                <li>To maintain system security, thwart fraud, and improve application speed.</li>
                <li>To communicate sprint updates, deploy code releases, and invoice project milestones.</li>
              </ul>
            </section>
          </FadeIn>

          <FadeIn direction="up" delay={0.25}>
            <section className="p-7 rounded-3xl bg-card border border-border/80 shadow-xs hover:border-primary/40 transition-all duration-300">
              <h2 className="text-xl font-bold text-foreground mb-3">4. Security & Encryption</h2>
              <p>
                We employ enterprise-grade TLS 1.3 transport encryption, role-based access control, and strict cloud infrastructure partitioning. Access to client source code and personal data is restricted strictly to authorized development personnel.
              </p>
            </section>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <section className="p-7 rounded-3xl bg-card border border-border/80 shadow-xs hover:border-primary/40 transition-all duration-300">
              <h2 className="text-xl font-bold text-foreground mb-3">5. Contact Privacy Team</h2>
              <p>
                If you have inquiries regarding this policy or data management, please contact us:<br /><br />
                <strong>Eden Technologies Pvt. Ltd.</strong><br />
                Email: edenwebtechnologies@gmail.com<br />
                Phone: +91 9705527264<br />
                Office: Vijayawada, Andhra Pradesh, India
              </p>
            </section>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
