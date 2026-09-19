import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";
import { Mail, Phone, MapPin, Sparkles } from "lucide-react";

export const metadata = {
  title: "Contact Us | Premium Digital Agency",
  description: "Start a project with us. We build premium digital solutions for ambitious brands.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      <Navbar />
      
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          <div className="lg:col-span-5 flex flex-col justify-between">
            <FadeIn direction="up">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase mb-4">
                  <Sparkles size={13} className="animate-spin" />
                  <span>Let's Discuss Your Project</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground tracking-tight mb-6 leading-[1.08]">
                  LET'S BUILD <br/>
                  <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">SOMETHING GREAT.</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground mb-12 leading-relaxed">
                  Whether you have a fully fleshed-out product roadmap or just a rough idea, our engineering architects are ready to guide you from concept to market launch.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-card border border-border/80 shadow-xs hover:border-primary/50 hover:shadow-sm hover:-translate-y-1 transition-all duration-300 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary shrink-0 shadow-xs">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm mb-0.5">Email Us</h3>
                    <a href="mailto:edenwebtechnologies@gmail.com" className="text-base font-semibold text-foreground hover:text-primary transition-colors">edenwebtechnologies@gmail.com</a>
                    <p className="text-xs text-muted-foreground mt-0.5">Direct founder & engineering response</p>
                  </div>
                </div>
                
                <div className="p-5 rounded-2xl bg-card border border-border/80 shadow-xs hover:border-primary/50 hover:shadow-sm hover:-translate-y-1 transition-all duration-300 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary shrink-0 shadow-xs">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm mb-0.5">Call or WhatsApp</h3>
                    <a href="tel:+919705527264" className="text-base font-semibold text-foreground hover:text-primary transition-colors">+91 9705527264</a>
                    <p className="text-xs text-muted-foreground mt-0.5">Mon–Sat • 9:00 AM – 7:00 PM IST</p>
                  </div>
                </div>
                
                <div className="p-5 rounded-2xl bg-card border border-border/80 shadow-xs hover:border-primary/50 hover:shadow-sm hover:-translate-y-1 transition-all duration-300 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary shrink-0 shadow-xs">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm mb-0.5">Registered Office</h3>
                    <p className="text-base font-semibold text-foreground">Vijayawada, Andhra Pradesh, India</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Also operating in Hyderabad & Bangalore</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <div className="lg:col-span-7">
            <FadeIn direction="up" delay={0.2}>
              <ContactForm />
            </FadeIn>
          </div>
          
        </div>
      </section>

      <Footer />
    </main>
  );
}
