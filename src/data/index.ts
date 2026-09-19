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
    slug: "learnify-platform",
    title: "Learnify Education",
    category: "Websites",
    description: "A modern edutech learning platform helping students discover courses, attend live classes, and track daily progress.",
    industry: "Education & Learning",
    image: "/images/projects/learnify.png",
    showcaseImage: "/images/projects/learnify.png",
    technologies: ["Next.js", "React", "Node.js", "MongoDB"],
    caseStudy: {
      challenge: "The academy needed a unified platform for course discovery, interactive live classes, and student performance tracking.",
      solution: "We designed and built a fast Next.js web application with an intuitive student dashboard and automated milestone certificates.",
      designProcess: "Conducted interviews with students and educators to design an accessible, clutter-free course experience in Figma.",
      developmentProcess: "Built using Next.js for sub-second page loads and server-side SEO, with MongoDB powering real-time course analytics.",
      keyFeatures: ["Live Interactive Classes", "Student Progress Dashboard", "Automated Assessments", "Digital Certificates"],
      results: "Onboarded over 3,000 active students within the first semester with a 94% course completion rate."
    }
  },
  {
    id: "proj-2",
    slug: "medicare-app",
    title: "MediCare Health App",
    category: "Mobile Apps",
    description: "A comprehensive digital health companion for booking appointments, tracking prescriptions, and accessing medical records.",
    industry: "Healthcare",
    image: "/images/projects/medicare-dashboard.jpg",
    showcaseImage: "/images/projects/medicare-dashboard.jpg",
    technologies: ["React Native", "Node.js", "PostgreSQL"],
    caseStudy: {
      challenge: "Patients were dealing with long clinic wait times and fragmented prescription records across multiple doctors.",
      solution: "A cross-platform mobile application that unifies doctor scheduling, instant prescription access, and emergency triage.",
      designProcess: "Designed a clean, calming interface with high contrast and readable typography suited for patients of all age groups.",
      developmentProcess: "Developed a HIPAA-conscious REST API with end-to-end data encryption and offline-first mobile synchronization.",
      keyFeatures: ["One-Tap Doctor Appointments", "Prescription & Dose Reminders", "Secure Digital Health Vault", "Clinic Tele-Consultations"],
      results: "Cut clinic wait times by 40% and facilitated over 12,000 confirmed consultations across 4 specialty branches."
    }
  },
  {
    id: "proj-3",
    slug: "edutrack-system",
    title: "EduTrack Management",
    category: "Custom Software",
    description: "An automated attendance and academic reporting portal engineered for schools, colleges, and training institutes.",
    industry: "Institutional Software",
    image: "/images/projects/edutrack.png",
    showcaseImage: "/images/projects/edutrack.png",
    technologies: ["React", "Express.js", "PostgreSQL"],
    caseStudy: {
      challenge: "Institutions relied on paper logs and disjointed spreadsheets that caused daily administrative delays.",
      solution: "A web portal that automates student check-ins, calculates attendance percentages, and alerts parents via WhatsApp/SMS.",
      designProcess: "Focused on an executive dashboard that displays classroom attendance metrics in clean visual charts.",
      developmentProcess: "Built an Express.js backend optimized to process simultaneous daily check-ins for thousands of students.",
      keyFeatures: ["Instant Attendance Logging", "Automated Parent Alerts", "Faculty Schedule Planner", "Institutional Analytics"],
      results: "Saved administrative staff 15+ hours weekly and reduced student absenteeism with proactive parent alerts."
    }
  },
  {
    id: "proj-4",
    slug: "billora-billing",
    title: "Billora Business Invoicing",
    category: "Custom Software",
    description: "Fast, GST-compliant invoicing and receivables software designed specifically for retail shops and SMEs.",
    industry: "Finance & Retail",
    image: "/images/projects/billora.png",
    showcaseImage: "/images/projects/billora.png",
    technologies: ["Next.js", "Tailwind CSS", "Firebase"],
    caseStudy: {
      challenge: "Small business owners struggled with overly complex enterprise accounting tools just to print a basic compliant bill.",
      solution: "A lightweight, lightning-fast invoicing web app that lets owners create and share professional invoices in under 30 seconds.",
      designProcess: "Designed with large keyboard shortcuts and high-contrast tables for quick counter-checkout operations.",
      developmentProcess: "Used client-side rendering with instant PDF generation and secure Firebase real-time database storage.",
      keyFeatures: ["GST-Ready Invoices", "Customer Balance Ledger", "Instant WhatsApp PDF Sharing", "Revenue Growth Summaries"],
      results: "Adopted by 50+ local retail businesses who processed over 25,000 invoices in their first year."
    }
  },
  {
    id: "proj-5",
    slug: "gudavalli-pools",
    title: "Gudavalli Pools & Living",
    category: "Websites",
    description: "A luxury design and construction website showcasing custom swimming pools, outdoor living spaces, and maintenance services.",
    industry: "Architecture & Construction",
    image: "/images/projects/pools.png",
    showcaseImage: "/images/projects/pools.png",
    technologies: ["React", "Tailwind CSS", "Vercel"],
    caseStudy: {
      challenge: "The builder needed a sophisticated website that reflected their luxury pool craftsmanship and attracted high-ticket clients.",
      solution: "An image-forward, responsive portfolio highlighting completed estates, customer video tours, and quote estimates.",
      designProcess: "Crafted a clean, elegant aesthetic with immersive project galleries and smooth layout transitions.",
      developmentProcess: "Optimized high-resolution architectural imagery with modern WebP delivery for instant loading.",
      keyFeatures: ["Portfolio Gallery by Project Type", "Online Quote Estimator", "Maintenance Plan Bookings", "Mobile-Optimized Experience"],
      results: "Generated an 85% increase in qualified consultation inquiries within 90 days of launch."
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
