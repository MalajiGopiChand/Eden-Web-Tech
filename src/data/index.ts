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
    slug: "nexapay-global",
    title: "NexaPay Global Banking",
    category: "Custom Software",
    description: "An enterprise-grade cross-border payment platform enabling multi-currency corporate treasury, instant remittances, and automated ledger reconciliation.",
    industry: "FinTech & Digital Banking",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    showcaseImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    technologies: ["Next.js 15", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    caseStudy: {
      challenge: "Legacy cross-border banking rails suffered from 2–3 day transaction delays, manual ledger errors, and lack of real-time foreign exchange transparency for enterprise import/export clients.",
      solution: "Engineered a low-latency financial operations platform processing microsecond transactions with automated FX hedging, role-based treasury controls, and biometric authorization.",
      designProcess: "Created a high-density financial analytics interface in Figma with dark/light mode parity, accessible data tables, and interactive cash flow projection charts.",
      developmentProcess: "Architected event-driven microservices on Node.js and PostgreSQL with bank-grade encryption (AES-256), processing real-time SWIFT and SEPA instant network rails.",
      keyFeatures: ["Multi-Currency Treasury Accounts", "Real-Time SWIFT & SEPA Settlement", "Automated FX Hedging Algorithms", "Role-Based Maker-Checker Approvals"],
      results: "Processed $140M+ in international corporate volume in the first two quarters with zero downtime and 99.999% ledger accuracy."
    }
  },
  {
    id: "proj-2",
    slug: "aura-health-ai",
    title: "Aura Telehealth & Diagnostics",
    category: "Mobile Apps",
    description: "A comprehensive digital health companion offering HD video consultations, wearable biometric syncing, and AI-assisted clinical triage.",
    industry: "Healthcare & Biotech",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
    showcaseImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
    technologies: ["React Native", "GraphQL", "Python", "WebRTC", "PostgreSQL"],
    caseStudy: {
      challenge: "Hospital networks faced fragmented patient communication, missed appointment rates exceeding 25%, and emergency triage bottlenecks for routine clinical inquiries.",
      solution: "Designed and built an intuitive cross-platform patient and doctor application featuring encrypted video tele-consultations, digital prescriptions, and continuous wearable vitals tracking.",
      designProcess: "Designed a clean, calming aesthetic with high-contrast accessibility standards suited for elderly patients and busy healthcare practitioners.",
      developmentProcess: "Developed a HIPAA-compliant WebRTC audio/video infrastructure with end-to-end encryption and real-time biometric telemetry synchronization.",
      keyFeatures: ["One-Tap Doctor Appointments", "Secure Health Vault & Lab Records", "Continuous Vitals & Glucose Sync", "Emergency Clinic Triage Engine"],
      results: "Over 85,000 active patients onboarded across 12 partner clinics with average clinic wait times reduced from 45 minutes to under 3 minutes."
    }
  },
  {
    id: "proj-3",
    slug: "lumina-living",
    title: "Lumina Living & Architecture",
    category: "E-commerce",
    description: "A minimalist luxury omnichannel e-commerce experience for architectural furniture featuring interactive 3D material customization.",
    industry: "Luxury Retail & Interiors",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
    showcaseImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
    technologies: ["Next.js", "Shopify Plus", "Three.js", "Stripe", "Tailwind CSS"],
    caseStudy: {
      challenge: "Bespoke architectural furniture suffered from customer hesitation and high return rates because online shoppers could not inspect fabric textures, timber finishes, or spatial scale.",
      solution: "Built a headless flagship storefront featuring photorealistic WebGL 3D material configurators, augmented reality room previewing, and a frictionless 1-click checkout flow.",
      designProcess: "Crafted an editorial, gallery-grade digital showroom inspired by modern architectural monographs, with smooth layout morphing and refined typography.",
      developmentProcess: "Engineered headless Next.js rendering on Vercel Edge networks with optimized 3D glTF asset compression for instant sub-second mobile page loads.",
      keyFeatures: ["Interactive 3D WebGL Configurator", "Sub-Second Global Edge Load Speeds", "Multi-Currency Headless Checkout", "White-Glove Delivery Tracking"],
      results: "Online conversion jumped by 38%, average order value increased to $2,850, and returns dropped by 65% in the first 6 months."
    }
  },
  {
    id: "proj-4",
    slug: "strata-cloud-intelligence",
    title: "Strata Cloud Intelligence",
    category: "Custom Software",
    description: "A real-time telemetry and cloud observability platform monitoring distributed microservices, infrastructure anomalies, and failure diagnostics.",
    industry: "Enterprise Cloud SaaS",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1600&q=80",
    showcaseImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1600&q=80",
    technologies: ["React", "TypeScript", "Go", "ClickHouse", "Tailwind CSS"],
    caseStudy: {
      challenge: "Enterprise DevOps engineers were overwhelmed by alert fatigue and fragmented monitoring tools when investigating production latency spikes.",
      solution: "Engineered a unified telemetry cockpit that aggregates server logs, APM traces, and container metrics into real-time visual dependency graphs.",
      designProcess: "Focused on an ultra-responsive high-density data canvas with instant keyboard shortcuts, dark-mode data visualizations, and contextual trace inspection.",
      developmentProcess: "Powered by ClickHouse for analytical queries exceeding 50M rows in under 180ms, connected via persistent WebSocket streaming.",
      keyFeatures: ["Real-Time Distributed Tracing", "Sub-Second Telemetry Queries", "Autonomous Root-Cause Alerts", "Multi-Cloud Topology Maps"],
      results: "Decreased Mean Time to Resolution (MTTR) by 58% across 45 enterprise engineering organizations managing over 500 microservices."
    }
  },
  {
    id: "proj-5",
    slug: "volt-fleet-os",
    title: "Volt Fleet Logistics OS",
    category: "Mobile Apps",
    description: "An end-to-end fleet tracking and dispatch application optimizing multi-stop freight routes, automated manifests, and real-time safety compliance.",
    industry: "Supply Chain & Logistics",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    showcaseImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    technologies: ["React Native", "Node.js", "Mapbox GL", "Redis", "MongoDB"],
    caseStudy: {
      challenge: "Interstate freight logistics struggled with manual paper manifests, delayed proof-of-delivery disputes, and unoptimized urban delivery routes.",
      solution: "Developed an offline-first mobile application for commercial drivers paired with a real-time web dispatch dashboard featuring dynamic route calculation.",
      designProcess: "Designed large tactile touch targets and high-glare sunlight viewing modes for commercial vehicle drivers on tablets and smartphones.",
      developmentProcess: "Integrated Mapbox vector routing algorithms with real-time GPS telemetry and digital sign-on-glass electronic bill-of-lading capture.",
      keyFeatures: ["Dynamic Multi-Stop Route Planning", "Digital Proof-of-Delivery Capture", "Live Vehicle Telemetry & Diagnostics", "Offline-Ready Manifest Storage"],
      results: "Reduced fleet fuel expenditure by 18% and eliminated 100% of physical delivery paperwork across 450 active transport vehicles."
    }
  },
  {
    id: "proj-6",
    slug: "orbit-workspace",
    title: "Orbit Team Collaboration",
    category: "UI/UX",
    description: "A collaborative digital canvas combining design token systems, interactive user flow diagrams, and real-time product squad reviews.",
    industry: "Productivity & SaaS",
    image: "https://images.unsplash.com/photo-1581291518655-9523c932edcf?auto=format&fit=crop&w=1600&q=80",
    showcaseImage: "https://images.unsplash.com/photo-1581291518655-9523c932edcf?auto=format&fit=crop&w=1600&q=80",
    technologies: ["Next.js", "WebSockets", "Canvas API", "TypeScript", "Tailwind CSS"],
    caseStudy: {
      challenge: "Distributed product teams suffered from persistent miscommunication between static design mockups and actual production frontend codebases.",
      solution: "Created an interactive multiplayer workspace that syncs design tokens directly with production code repositories and enables live visual annotations.",
      designProcess: "Conducted extensive UX research with 30 product managers and engineers to eliminate context switching between Figma, Jira, and GitHub.",
      developmentProcess: "Built with high-performance HTML5 Canvas and low-latency WebSockets supporting 50+ concurrent multiplayer cursors per canvas board.",
      keyFeatures: ["Multiplayer Real-Time Canvas", "Automated Token Git Integration", "Interactive Component Playground", "Asynchronous Video Review Threads"],
      results: "Accelerated product sprint velocity by 35% and cut design-to-engineering handoff cycles from days to minutes."
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
    client: "Priya Sharma",
    company: "TechFlow Solutions",
    role: "Founder & CEO",
    image: "https://i.pravatar.cc/150?u=priya",
    quote: "Gopi and the Eden team took the time to understand our business before writing a single line of code. They delivered our platform two weeks ahead of schedule, and our users love how fast it is.",
    rating: 5
  },
  {
    id: 2,
    client: "Rahul Verma",
    company: "Lumina Retail",
    role: "Founder",
    image: "https://i.pravatar.cc/150?u=rahul",
    quote: "The entire process was honest and straightforward. We had weekly updates, live demos we could test on our phones, and zero surprises on invoice day. Truly refreshing team to work with.",
    rating: 5
  },
  {
    id: 3,
    client: "Anjali Desai",
    company: "EduVantage Academy",
    role: "Product Director",
    image: "https://i.pravatar.cc/150?u=anjali",
    quote: "They didn't just build what we asked for — they actually gave us practical advice on how to improve our student onboarding. Our course completion rates jumped immediately.",
    rating: 5
  },
  {
    id: 4,
    client: "Karthik Reddy",
    company: "Reddy Urban Infra",
    role: "Managing Director",
    image: "https://i.pravatar.cc/150?u=karthik",
    quote: "Eden built a stunning website and custom lead CRM for our real estate projects. Our inbound client inquiries jumped significantly within two months of launch.",
    rating: 5
  },
  {
    id: 5,
    client: "Sneha Patel",
    company: "HealthFirst Clinics",
    role: "Co-Founder",
    image: "https://i.pravatar.cc/150?u=sneha",
    quote: "Their mobile app architecture made our clinic booking seamless. We onboarded over 5,000 patients without a single server hiccup. Excellent engineering standards.",
    rating: 5
  },
  {
    id: 6,
    client: "Vikram Malhotra",
    company: "Malhotra Freight Lines",
    role: "Head of Operations",
    image: "https://i.pravatar.cc/150?u=vikram",
    quote: "The custom portal they built replaced four separate manual spreadsheets. Our team now processes dispatches in half the time. Worth every rupee invested.",
    rating: 5
  },
  {
    id: 7,
    client: "Divya Krishnan",
    company: "StyleZen E-Commerce",
    role: "Creative Director",
    image: "https://i.pravatar.cc/150?u=divya",
    quote: "Our online store looks like an international luxury brand and loads instantly on 4G networks. Customer checkout drop-offs dropped by nearly 30%.",
    rating: 5
  },
  {
    id: 8,
    client: "Rajesh Nambiar",
    company: "Apex Advisory Group",
    role: "Managing Partner",
    image: "https://i.pravatar.cc/150?u=rajesh",
    quote: "Clear communication, clean code, and zero bugs on launch day. Working directly with the founders made a world of difference compared to large bloated agencies.",
    rating: 5
  },
  {
    id: 9,
    client: "Meera Joshi",
    company: "EduConnect Labs",
    role: "Academic Dean",
    image: "https://i.pravatar.cc/150?u=meera",
    quote: "The student attendance dashboard made daily administration effortless. They listened patiently to our faculty feedback and tailored the system perfectly.",
    rating: 5
  },
  {
    id: 10,
    client: "Arjun Sundaram",
    company: "Quantum Cloud",
    role: "Chief Technology Officer",
    image: "https://i.pravatar.cc/150?u=arjun",
    quote: "Their Next.js and TypeScript code was clean, well-documented, and easy for our internal developers to build upon. High-caliber engineering team.",
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
