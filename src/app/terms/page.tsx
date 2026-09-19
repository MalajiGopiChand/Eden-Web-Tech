import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms & Conditions | Eden Technologies",
  description: "Terms and Conditions for Eden Technologies Pvt. Ltd.",
};

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
            TERMS & <span className="text-primary">CONDITIONS</span>
          </h1>
          <p className="text-muted-foreground">Last updated: September 19, 2026</p>
        </div>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Description of Service</h2>
            <p>
              Eden Technologies Pvt. Ltd. provides software development, mobile application development, UI/UX design, and related digital services. We reserve the right to modify or discontinue, temporarily or permanently, the services with or without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Intellectual Property</h2>
            <p>
              The Site and its original content, features, and functionality are owned by Eden Technologies Pvt. Ltd. and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Client Projects and Confidentiality</h2>
            <p>
              All client projects, source code, and related business information shared with Eden Technologies are treated with strict confidentiality. Non-Disclosure Agreements (NDAs) can be signed upon request before the commencement of any project. Intellectual property rights for custom software development are transferred to the client upon full payment, unless otherwise agreed upon in writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Limitation of Liability</h2>
            <p>
              In no event shall Eden Technologies Pvt. Ltd., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:<br /><br />
              <strong>Eden Technologies Pvt. Ltd.</strong><br />
              Email: edenwebtechnologies@gmail.com<br />
              Phone: +91 9705527264
            </p>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
