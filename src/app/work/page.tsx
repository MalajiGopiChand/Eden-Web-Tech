import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioSection from "@/components/PortfolioSection";
import CTASection from "@/components/CTASection";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Our Work | Premium Digital Agency",
  description: "Explore our portfolio of premium websites, mobile apps, and digital products.",
};

export default function WorkPage() {
  return (
    <main className="flex min-h-screen flex-col pt-24 bg-transparent">
      <Navbar />
      
      <div className="pt-12 pb-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <FadeIn direction="up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Client Work & Case Studies</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground tracking-tight mb-4 leading-tight">
            Crafted for real business growth.
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore our production work across Gyms, Medical Clinics, Supermarket E-Carts, and custom retail platforms.
          </p>
        </FadeIn>
      </div>

      <PortfolioSection isPage />
      
      <FadeIn direction="none">
        <CTASection />
      </FadeIn>
      <Footer />
    </main>
  );
}
