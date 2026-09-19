import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact Us | Premium Digital Agency",
  description: "Start a project with us. We build premium digital solutions for ambitious brands.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      <Navbar />
      
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h1 className="text-5xl md:text-6xl font-black text-foreground tracking-tight mb-6">
                LET'S BUILD <br/>
                <span className="text-primary">SOMETHING GREAT.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Whether you have a fully fleshed-out idea or just a concept, we're ready to help you bring it to life. Reach out today.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Email</h3>
                  <a href="mailto:edenwebtechnologies@gmail.com" className="text-lg font-medium text-foreground hover:text-primary transition-colors">edenwebtechnologies@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Phone</h3>
                  <a href="tel:+919705527264" className="text-lg font-medium text-foreground hover:text-primary transition-colors">+91 9705527264</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Location</h3>
                  <p className="text-lg font-medium text-foreground">Vijayawada, Andhra Pradesh, India</p>
                  <p className="text-sm text-muted-foreground mt-1">Also operating in Hyderabad & Bangalore</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          
        </div>
      </section>

      <Footer />
    </main>
  );
}
