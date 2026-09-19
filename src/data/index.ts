export type ProjectCategory = "All" | "Websites" | "Mobile Apps" | "E-commerce" | "UI/UX" | "Custom Software";

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  industry: string;
  image: string;
  showcaseImage: string;
  technologies: string[];
  liveUrl?: string;
  caseStudy: {
    challenge: string;
    solution: string;
    designProcess: string;
    developmentProcess: string;
    keyFeatures: string[];
    results: string;
    testimonial?: {
      client: string;
      role: string;
      quote: string;
    };
  };
}

export const projects: Project[] = [
  {
    id: "proj-1",
    slug: "pulsefit-gym",
    title: "PulseFit Gym & Athletic Club",
    category: "Websites",
    description: "An all-in-one gym membership portal, workout scheduler, and automated recurring billing system built for multi-branch fitness centers.",
    industry: "Fitness & Gym Centers",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80",
    showcaseImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Stripe Recurring"],
    caseStudy: {
      challenge: "A growing fitness studio with 800+ members struggled with manual paper attendance logs, missed membership renewal payments, and chaotic personal trainer booking over phone calls.",
      solution: "Engineered a responsive member portal and trainer dashboard featuring contactless QR code check-in, automated monthly subscription renewals, and an interactive class scheduler.",
      designProcess: "Designed an energetic, high-contrast dark/smoke UI with tactile buttons, real-time trainer availability calendars, and a mobile-first member workout log.",
      developmentProcess: "Built on Next.js with server-side rendering for sub-second load times, integrated with Razorpay/Stripe automated webhooks for subscription billing and instant WhatsApp renewal receipts.",
      keyFeatures: ["Member Digital QR Pass & Check-In", "Automated Recurring Membership Billing", "Live Trainer & Class Slot Booking", "Personal Workout & Diet Log"],
      results: "Increased membership renewal retention by 42%, eliminated 100% of front-desk paper logs, and onboarded 1,400+ active members across 2 gym branches.",
      testimonial: {
        client: "Vikram Singh",
        role: "Founder & Head Coach, PulseFit Athletic Club",
        quote: "Eden built our gym website and member booking app from scratch. Our members book training slots and renew memberships right from their phones. Monthly renewals increased by 42% and our front desk is completely paperless."
      }
    }
  },
  {
    id: "proj-2",
    slug: "carepoint-medical",
    title: "CarePoint Medical Clinic & Diagnostics",
    category: "Mobile Apps",
    description: "A HIPAA-compliant patient appointment booking, tele-consultation, and digital prescription platform connecting clinics, doctors, and diagnostics labs.",
    industry: "Healthcare & Medical Clinics",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
    showcaseImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
    technologies: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "WebRTC"],
    caseStudy: {
      challenge: "A busy outpatient polyclinic and diagnostic laboratory suffered from crowded waiting rooms with 45-minute average patient delays, lost paper medical files, and telephone appointment congestion.",
      solution: "Engineered a unified clinic companion app allowing patients to book token-based doctor visits, consult remotely via secure video, and download verified digital prescriptions and diagnostic lab results.",
      designProcess: "Created a calming, high-accessibility UI with legible typography, simple navigation for elderly patients, and a clear real-time live queue token tracker.",
      developmentProcess: "Implemented encrypted WebRTC video pipelines and a resilient PostgreSQL schema complying with medical data privacy regulations, backed by automated SMS & WhatsApp appointment reminders.",
      keyFeatures: ["Token-Based Doctor Appointment Booking", "Live Clinic Queue Status on Phone", "Digital Prescriptions & Lab Report Vault", "Encrypted HD Video Tele-Consultation"],
      results: "Reduced clinic waiting room congestion by 85%, processed over 12,000 monthly doctor bookings, and served 28,000+ registered patients with zero downtime.",
      testimonial: {
        client: "Dr. Sneha Patel, MD",
        role: "Medical Director, CarePoint Diagnostics",
        quote: "The clinic appointment portal and digital prescription system transformed our daily operations. Patient wait times dropped from 40 minutes to under 5 minutes, and our doctors can access lab records with one click."
      }
    }
  },
  {
    id: "proj-3",
    slug: "quickmart-ecart",
    title: "QuickMart General Store & E-Cart OS",
    category: "E-commerce",
    description: "An omnichannel grocery and general store platform combining lightning-fast e-cart online ordering, barcode POS billing, and real-time inventory ledger.",
    industry: "Retail, Grocery & Supermarkets",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1600&q=80",
    showcaseImage: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1600&q=80",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Redis", "WhatsApp API"],
    caseStudy: {
      challenge: "A high-volume general store and supermarket chain struggled with manual telephone home delivery orders, frequent inventory stockouts, and counter checkout bottlenecks during evening rush hours.",
      solution: "Built an ultra-fast web e-cart ordering application paired with a desktop barcode POS cash counter terminal, automated low-stock inventory alerts, and instant WhatsApp delivery dispatch.",
      designProcess: "Engineered an intuitive 2-tap cart checkout experience optimized for mobile browsers on slow connections, featuring category search, daily discounts, and express 30-minute delivery tags.",
      developmentProcess: "Developed a distributed real-time inventory engine on MongoDB and Redis with sub-50ms query speeds, synchronized instantly with barcode scanner inputs at the physical store counters.",
      keyFeatures: ["Instant E-Cart Online Grocery Ordering", "Barcode Scanner POS Counter Billing", "Automated WhatsApp Order & Receipt Dispatch", "Real-Time Stock Ledger & Low-Stock Alerts"],
      results: "Processed 600+ daily online deliveries, accelerated counter checkout speed by 3x, and reduced grocery stock discrepancies to under 0.5%.",
      testimonial: {
        client: "Rajesh Gupta",
        role: "Managing Director, QuickMart General Stores",
        quote: "Our general store went from taking phone orders to processing over 600 daily orders through the new e-cart web app. Automated inventory sync and WhatsApp order receipts made daily management effortless."
      }
    }
  },
  {
    id: "proj-4",
    slug: "lumina-living",
    title: "Lumina Living & Architecture",
    category: "UI/UX",
    description: "A minimalist luxury omnichannel e-commerce experience for architectural furniture featuring interactive 3D spatial previews and customized checkout.",
    industry: "Luxury Retail & Interiors",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
    showcaseImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
    technologies: ["Next.js", "Three.js", "Shopify Storefront API", "Stripe", "Tailwind CSS"],
    caseStudy: {
      challenge: "Bespoke architectural furniture suffered from customer hesitation and high return rates because online shoppers could not inspect fabric textures, timber finishes, or spatial scale.",
      solution: "Built a headless flagship storefront featuring photorealistic WebGL 3D material configurators, augmented reality room previewing, and a frictionless 1-click checkout flow.",
      designProcess: "Crafted an editorial, gallery-grade digital showroom inspired by modern architectural monographs, with smooth layout morphing and refined typography.",
      developmentProcess: "Engineered headless Next.js rendering on Vercel Edge networks with optimized 3D glTF asset compression for instant sub-second mobile page loads.",
      keyFeatures: ["Interactive 3D WebGL Configurator", "Sub-Second Global Edge Load Speeds", "Multi-Currency Headless Checkout", "White-Glove Delivery Tracking"],
      results: "Online conversion jumped by 38%, average order value increased to $2,850, and returns dropped by 65% in the first 6 months.",
      testimonial: {
        client: "Aanya Singhania",
        role: "Co-Founder & Creative Director, Lumina Living",
        quote: "Our online furniture store looks like an international luxury catalog and loads in milliseconds. Customer checkout drop-offs dropped by nearly 35% in our first quarter."
      }
    }
  },
  {
    id: "proj-5",
    slug: "nexapay-pos",
    title: "NexaPay Retail POS & Billing",
    category: "Custom Software",
    description: "An enterprise retail payment and billing dashboard enabling instant multi-tender card settlements, GST invoicing, and merchant sales telemetry.",
    industry: "FinTech & Store Billing",
    image: "https://images.unsplash.com/photo-1556742049-0a67e557224f?auto=format&fit=crop&w=1600&q=80",
    showcaseImage: "https://images.unsplash.com/photo-1556742049-0a67e557224f?auto=format&fit=crop&w=1600&q=80",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    caseStudy: {
      challenge: "Multi-store retail operators faced fragmented card POS terminals, 48-hour settlement delays, and error-prone end-of-day manual cash and card reconciliations.",
      solution: "Built a cloud-connected smart billing and POS terminal interface supporting unified UPI, cards, split payments, GST invoice generation, and real-time store analytics.",
      designProcess: "Created an ultra-fast high-contrast counter interface optimized for touch displays and quick keyboard shortcut workflows.",
      developmentProcess: "Constructed secure AES-256 encrypted microservices with offline billing caching, instant cloud sync, and direct banking webhook reconciliations.",
      keyFeatures: ["Split Cash/Card/UPI Counter Checkout", "Instant GST Tax Compliance Invoicing", "Real-Time Multi-Branch Sales Dashboard", "Automated Daily Ledger Reconciliation"],
      results: "Processed $140M+ in retail store transactions with 99.999% uptime and same-day merchant settlement across 350 retail locations.",
      testimonial: {
        client: "Karthik Reddy",
        role: "Head of Merchant Operations, NexaPay Solutions",
        quote: "Clear communication, clean code, and zero bugs on launch day. Working directly with Gopi and the Eden team made a world of difference for our retail billing platform."
      }
    }
  },
  {
    id: "proj-6",
    slug: "volt-delivery-os",
    title: "Volt Express Fleet & Store Dispatch",
    category: "Mobile Apps",
    description: "An end-to-end delivery dispatch and rider app optimizing multi-stop urban retail routes, digital proof-of-delivery, and live customer order tracking.",
    industry: "Supply Chain & Local Dispatch",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    showcaseImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    technologies: ["React Native", "Node.js", "Mapbox GL", "Redis", "MongoDB"],
    caseStudy: {
      challenge: "Retail and grocery stores struggled with unoptimized delivery rider routes, delayed customer deliveries, and missing delivery proofs.",
      solution: "Developed a lightweight driver dispatch app paired with a central web console featuring dynamic turn-by-turn route batching, OTP order handover, and live SMS tracking.",
      designProcess: "Designed large touch targets, high-contrast sunlight display mode, and battery-optimized GPS tracking for delivery drivers on Android and iOS.",
      developmentProcess: "Implemented Mapbox vector routing with automated multi-drop clustering, offline manifest sync, and digital sign-on-glass proof-of-delivery.",
      keyFeatures: ["Dynamic Multi-Stop Route Optimization", "Digital Signature & Photo Proof of Delivery", "Live Customer GPS Tracking Link", "Offline-Ready Driver Manifest Sync"],
      results: "Reduced delivery turnaround times by 25%, decreased fleet fuel expenditure by 18%, and maintained a 98.4% on-time delivery rate.",
      testimonial: {
        client: "Harish Verma",
        role: "Logistics & Dispatch Manager, Volt Express",
        quote: "The driver dispatch mobile app and live order tracking reduced our grocery delivery turnaround times by 25%. Simple, rock-solid engineering that just works."
      }
    }
  }
];

export const services = [
  {
    id: "01",
    title: "Custom Websites & Web Apps",
    description: "We design and build fast, responsive websites that represent your business with credibility, communicate your value clearly, and turn visitors into paying clients.",
    icon: "Globe"
  },
  {
    id: "02",
    title: "Mobile App Development",
    description: "Cross-platform iOS and Android applications built with React Native. Smooth animations, offline support, and intuitive user experiences people genuinely enjoy using.",
    icon: "Smartphone"
  },
  {
    id: "03",
    title: "E-Commerce Stores",
    description: "High-converting online storefronts with streamlined checkout funnels, Razorpay & Stripe integrations, automated inventory, and mobile-first shopping.",
    icon: "ShoppingCart"
  },
  {
    id: "04",
    title: "Custom Software & Dashboards",
    description: "Internal tools, client portals, and automated business software designed specifically around how your team works — replacing manual spreadsheets and disconnected apps.",
    icon: "Layout"
  },
  {
    id: "05",
    title: "UI/UX & Product Design",
    description: "Thoughtful user research, wireframes, and interactive Figma prototypes. We craft interfaces that make complex digital workflows feel effortlessly simple.",
    icon: "PenTool"
  },
  {
    id: "06",
    title: "Maintenance & Scaling",
    description: "We stay in your corner after launch. Fast bug fixes, security updates, cloud monitoring, and continuous feature additions as your customer base expands.",
    icon: "Settings"
  }
];

export const testimonials = [
  {
    id: 1,
    client: "Vikram Singh",
    company: "PulseFit Gym & Athletic Club",
    role: "Founder & Head Coach",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    quote: "Eden built our gym website and member booking app from scratch. Our members book training slots and renew memberships right from their phones. Monthly renewals increased by 42% and our front desk is completely paperless.",
    rating: 5
  },
  {
    id: 2,
    client: "Dr. Sneha Patel, MD",
    company: "CarePoint Medical Clinic & Diagnostics",
    role: "Medical Director",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80",
    quote: "The clinic appointment portal and digital prescription system transformed our daily operations. Patient wait times dropped from 40 minutes to under 5 minutes, and our doctors can access lab records with one click.",
    rating: 5
  },
  {
    id: 3,
    client: "Rajesh Gupta",
    company: "QuickMart General Store & Supermarket",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    quote: "Our general store went from taking phone orders to processing over 600 daily orders through the new e-cart web app. Automated inventory sync and WhatsApp order receipts made daily store management effortless.",
    rating: 5
  },
  {
    id: 4,
    client: "Dr. Amit Roy",
    company: "Apex Specialty Hospital",
    role: "Chief Surgeon & Director",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=150&q=80",
    quote: "Handling inpatient admissions and doctor shift schedules used to require hours of manual paperwork. Eden delivered a secure, HIPAA-compliant clinical portal that our entire medical staff praises daily.",
    rating: 5
  },
  {
    id: 5,
    client: "Rohan Mehta",
    company: "Titan Strength Gyms",
    role: "Fitness Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    quote: "The member management software Eden engineered scaled seamlessly across our 3 gym locations. Member retention improved significantly thanks to the automated workout tracker and class booking.",
    rating: 5
  },
  {
    id: 6,
    client: "Sunil Agarwal",
    company: "Agarwal Kirana & E-Store",
    role: "Proprietor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    quote: "The barcode POS billing and WhatsApp e-cart ordering helped us compete with big online grocery apps. Our regular customers love placing orders online for quick 30-minute neighborhood pickup.",
    rating: 5
  },
  {
    id: 7,
    client: "Aanya Singhania",
    company: "Lumina Living & Architecture",
    role: "Co-Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    quote: "Our online furniture store looks like an international luxury catalog and loads in milliseconds. Customer checkout drop-offs dropped by nearly 35% in our first quarter.",
    rating: 5
  },
  {
    id: 8,
    client: "Karthik Reddy",
    company: "NexaPay Merchant Solutions",
    role: "Head of Merchant Operations",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
    quote: "Clear communication, clean code, and zero bugs on launch day. Working directly with Gopi and the Eden team made a world of difference for our retail billing and payment terminals.",
    rating: 5
  },
  {
    id: 9,
    client: "Harish Verma",
    company: "Volt Express Logistics",
    role: "Logistics & Dispatch Manager",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
    quote: "The driver dispatch mobile app and live order tracking reduced our grocery delivery turnaround times by 25%. Simple, rock-solid engineering that just works.",
    rating: 5
  },
  {
    id: 10,
    client: "Meera Nambiar",
    company: "FreshCart Online Mart",
    role: "Head of Customer Experience",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    quote: "Their Next.js and React Native architecture gave us blazing fast e-cart performance and zero cart crashes even during festival sales rushes. Truly outstanding engineering.",
    rating: 5
  }
];

export const technologies = [
  "React", "Next.js", "React Native", "TypeScript", "Node.js", "Tailwind CSS", "Firebase", "PostgreSQL", "MongoDB", "AWS"
];

export const processSteps = [
  {
    id: "01",
    title: "Discovery & Strategy",
    description: "First, we listen. We sit down with you to understand your business model, customer journey, required features, and realistic budget."
  },
  {
    id: "02",
    title: "Scope & Planning",
    description: "We map out every feature into clear weekly milestones so you know exactly what is getting built, when it will be ready, and what it costs."
  },
  {
    id: "03",
    title: "UI/UX & Prototyping",
    description: "We create interactive Figma prototypes. You click through real screens on your phone and give feedback before any backend code is written."
  },
  {
    id: "04",
    title: "Full-Stack Development",
    description: "We build with Next.js and React Native. You get private staging links every Friday to test the latest working build on your own device."
  },
  {
    id: "05",
    title: "Testing & Launch",
    description: "We test across real devices, configure security and SEO, hook up domain DNS, and ensure a smooth, zero-downtime public launch."
  },
  {
    id: "06",
    title: "Growth & Maintenance",
    description: "We don't disappear after delivery. We monitor uptime, install security updates, fix bugs fast, and build new features as your business scales."
  }
];
