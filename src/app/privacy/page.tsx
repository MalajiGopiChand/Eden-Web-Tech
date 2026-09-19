import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Eden Technologies",
  description: "Privacy Policy for Eden Technologies Pvt. Ltd.",
};

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
            PRIVACY <span className="text-primary">POLICY</span>
          </h1>
          <p className="text-muted-foreground">Last updated: September 19, 2026</p>
        </div>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p>
              Welcome to Eden Technologies Pvt. Ltd. ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. The Data We Collect About You</h2>
            <p className="mb-4">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes billing address, email address, and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Personal Data</h2>
            <p className="mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Contact Details</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us in the following ways:<br /><br />
              <strong>Eden Technologies Pvt. Ltd.</strong><br />
              Email address: edenwebtechnologies@gmail.com<br />
              Phone number: +91 9705527264<br />
              Location: Vijayawada, Andhra Pradesh, India
            </p>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
