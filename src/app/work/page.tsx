import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioSection from "@/components/PortfolioSection";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Our Work | Premium Digital Agency",
  description: "Explore our portfolio of premium websites, mobile apps, and digital products.",
};

export default function WorkPage() {
  return (
    <main className="flex min-h-screen flex-col pt-24 bg-background">
      <Navbar />
      
      <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <h1 className="text-5xl md:text-6xl font-black text-foreground tracking-tight mb-6">
          OUR <span className="text-primary">PORTFOLIO</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We don't just build software. We build solutions that drive real business results.
        </p>
      </div>

      <PortfolioSection />
      
      <CTASection />
      <Footer />
    </main>
  );
}
