import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function AboutSection() {
  const advantages = [
    { title: "BUSINESS-MINDED DEVELOPMENT", desc: "We don't start with technology. We start with your business problem." },
    { title: "BUILT FOR YOUR BUSINESS", desc: "No unnecessary features. No generic templates. Your product is built around your actual requirements." },
    { title: "DESIGN THAT SELLS", desc: "Beautiful isn't enough. We design experiences that guide users toward action." },
    { title: "TECHNOLOGY THAT SCALES", desc: "Build today without limiting tomorrow. Our solutions are designed with future growth in mind." },
    { title: "CLEAR COMMUNICATION", desc: "No disappearing developers. No confusing technical language. You always know what's happening with your project." },
    { title: "LONG-TERM PARTNERSHIP", desc: "Your success doesn't end at launch. We're here when you need the next feature, improvement, or upgrade." },
  ];

  return (
    <section id="about" className="py-24 bg-transparent border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">
              Our Leadership
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              THE VISION BEHIND EDEN
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe great digital products combine thoughtful design, reliable technology, and a clear understanding of the business behind them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Founder & CEO */}
            <div className="flex flex-col items-center text-center">
              <div className="relative h-64 w-64 md:h-72 md:w-72 rounded-full overflow-hidden p-2 border-4 border-background shadow-2xl bg-gradient-to-br from-primary/20 to-accent/20 mb-8">
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 to-accent/5"></div>
                <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-2 border-border/50 bg-background">
                  <Image 
                    src="/images/ceo.jpg" 
                    alt="Malaji Gopichand - Founder & CEO" 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">MALAJI GOPICHAND</h3>
              <p className="text-primary font-bold uppercase tracking-wider mb-6">Founder & CEO</p>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                I am a passionate leader and technologist with a mission to help ambitious companies thrive in the digital age by building world-class scalable platforms.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="https://www.linkedin.com/in/malajigopichand/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                </Link>
                <Link 
                  href="https://www.instagram.com/mr.gopichand.7/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </Link>
                <Link 
                  href="mailto:edenwebtechnologies@gmail.com" 
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <Mail size={18} />
                </Link>
              </div>
            </div>

            {/* Co-Founder & COO */}
            <div className="flex flex-col items-center text-center">
              <div className="relative h-64 w-64 md:h-72 md:w-72 rounded-full overflow-hidden p-2 border-4 border-background shadow-2xl bg-gradient-to-br from-primary/10 to-secondary/20 mb-8">
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/5 to-secondary/10"></div>
                <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-2 border-border/50 bg-background flex items-center justify-center">
                  <Image 
                    src="/images/co-ceo.jpg" 
                    alt="Mercy - Co-Founder & COO" 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">MERCY</h3>
              <p className="text-primary font-bold uppercase tracking-wider mb-6">Co-Founder & COO</p>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                As the operational backbone of Eden Technologies, Mercy ensures that every project is executed flawlessly. Her strategic vision guarantees we meet our clients' goals on time and with absolute precision.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="mailto:mercy@example.com" 
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <Mail size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">
              Why Work With Us?
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              BECAUSE YOUR PROJECT IS MORE THAN A PROJECT.
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((adv, index) => (
              <div key={index} className="p-6 rounded-2xl bg-background border border-border">
                <div className="text-primary font-bold mb-3 flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg">
                    {index + 1}
                  </div>
                  {adv.title}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
