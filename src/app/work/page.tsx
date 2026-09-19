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
      
      <div className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <FadeIn direction="up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase mb-4">
            <span>Selected Case Studies</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground tracking-tight mb-6">
            OUR <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">PORTFOLIO</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We don't just build software. We build solutions that drive real business results.
          </p>
        </FadeIn>
      </div>

      <PortfolioSection />
      
      <FadeIn direction="none">
        <CTASection />
      </FadeIn>
      <Footer />
    </main>
  );
}
