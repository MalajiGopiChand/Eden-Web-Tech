import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      
      <FadeIn delay={0.2} direction="up">
        <TrustSection />
      </FadeIn>
      
      <FadeIn direction="up">
        <ServicesSection />
      </FadeIn>
      
      <FadeIn direction="up">
        <PortfolioSection limit={4} />
      </FadeIn>
      
      <FadeIn direction="up">
        <AboutSection />
      </FadeIn>
      
      <FadeIn direction="up">
        <ProcessSection />
      </FadeIn>
      
      <FadeIn direction="up">
        <TechnologiesSection />
      </FadeIn>
      
      <FadeIn direction="up">
        <TestimonialsSection />
      </FadeIn>
      
      <FadeIn direction="none">
        <CTASection />
      </FadeIn>
      
      <Footer />
    </main>
  );
}
