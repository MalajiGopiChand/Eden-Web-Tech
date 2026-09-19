import Link from "next/link";
import { Globe, Mail, MessageSquare } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="mb-6 block">
              <Logo className="h-10 w-auto" />
            </Link>
            <p className="text-muted-foreground mt-4 mb-6 pr-4">
              We design and build websites, mobile apps and digital products for ambitious businesses.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/malajigopichand/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Globe size={20} />
              </a>
              <a href="mailto:edenwebtechnologies@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Contact</span>
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-foreground">Navigation</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/#services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/work" className="text-muted-foreground hover:text-primary transition-colors">Work</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-foreground">Services</h3>
            <ul className="space-y-3">
              <li className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Web Development</li>
              <li className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Mobile Apps</li>
              <li className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">UI/UX Design</li>
              <li className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">E-commerce</li>
              <li className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Custom Software</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-foreground">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-sm font-bold tracking-widest text-foreground uppercase">
            BUILD WITH PURPOSE. LAUNCH WITH CONFIDENCE. GROW WITHOUT LIMITS.
          </p>
          <p className="text-sm text-muted-foreground">
            Websites • Mobile Apps • E-commerce • Custom Software • UI/UX
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            &copy; {currentYear} EDEN TECHNOLOGIES PVT. LTD. — All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
