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
    title: "Learnify",
    category: "Websites",
    description: "A modern edutech platform helping students discover courses, attend live classes, and manage their learning journey.",
    industry: "Education / Technology",
    image: "/images/projects/learnify.png",
    showcaseImage: "/images/projects/learnify.png",
    technologies: ["React", "Next.js", "Node.js", "MongoDB"],
    caseStudy: {
      challenge: "The client needed a platform to unify course discovery, live classes, and progress tracking for students.",
      solution: "I built a scalable Next.js web app with a clean UI, powerful dashboard, and seamless onboarding experience.",
      designProcess: "Focused on an accessible, clear interface and intuitive navigation. Prototyped the student dashboard for optimal user experience.",
      developmentProcess: "Built using React and Next.js for high performance and scalability. Integrated a robust MongoDB database.",
      keyFeatures: ["Live Classes", "Student Dashboard", "Progress Tracking", "Assignments & Certificates"],
      results: "Increased student engagement significantly and provided a seamless learning experience."
    }
  },
  {
    id: "proj-2",
    slug: "medicare-app",
    title: "MediCare Website & App",
    category: "Mobile Apps",
    description: "A comprehensive health companion application for booking appointments, managing medications, and accessing health records.",
    industry: "Healthcare",
    image: "/images/projects/medicare-dashboard.jpg",
    showcaseImage: "/images/projects/medicare-dashboard.jpg",
    technologies: ["React Native", "Node.js", "PostgreSQL"],
    caseStudy: {
      challenge: "Patients needed a centralized platform to manage their healthcare needs, from booking doctors to tracking medications.",
      solution: "A custom cross-platform application combining appointment scheduling, health records, and emergency alerts.",
      designProcess: "Created a clean, calming UI prioritizing ease of use for patients of all ages.",
      developmentProcess: "Developed robust APIs and a responsive frontend to ensure secure and fast access to health data.",
      keyFeatures: ["Doctor Appointments", "Medication Tracking", "Health Records", "Emergency Assistance"],
      results: "Streamlined the patient experience and improved communication between doctors and patients."
    }
  },
  {
    id: "proj-3",
    slug: "edutrack-system",
    title: "EduTrack Attendance System",
    category: "Custom Software",
    description: "A complete attendance management system for educational institutions to track students and faculty.",
    industry: "Education / Management",
    image: "/images/projects/edutrack.png",
    showcaseImage: "/images/projects/edutrack.png",
    technologies: ["React", "Express", "PostgreSQL"],
    caseStudy: {
      challenge: "Schools were struggling with manual attendance tracking and lacked real-time insights into student presence.",
      solution: "A digital dashboard to manage attendance, generate reports, and track overall institutional metrics.",
      designProcess: "Designed an analytics-focused dashboard with clear visual representations of attendance data.",
      developmentProcess: "Built a secure backend to handle thousands of daily records and a highly responsive frontend.",
      keyFeatures: ["Real-time Attendance", "Automated Reports", "Faculty Management", "Analytics Dashboard"],
      results: "Saved hours of administrative work daily and provided instant visibility into attendance trends."
    }
  },
  {
    id: "proj-4",
    slug: "billora-billing",
    title: "Billora Billing Software",
    category: "Custom Software",
    description: "Smart billing software for modern businesses to create GST-ready invoices and track business growth.",
    industry: "Finance / Business",
    image: "/images/projects/billora.png",
    showcaseImage: "/images/projects/billora.png",
    technologies: ["Next.js", "Tailwind CSS", "Firebase"],
    caseStudy: {
      challenge: "Small businesses needed an easy way to generate compliant invoices without complex accounting software.",
      solution: "A streamlined web application focused solely on fast, accurate invoice generation and basic customer management.",
      designProcess: "Focused on a frictionless user journey, allowing users to generate a bill within seconds.",
      developmentProcess: "Leveraged Next.js for a fast, SEO-friendly landing page and a secure authenticated dashboard.",
      keyFeatures: ["GST-Ready Invoices", "Customer Management", "Growth Tracking", "PDF Generation"],
      results: "Helped businesses transition from paper billing to professional digital invoices effortlessly."
    }
  },
  {
    id: "proj-5",
    slug: "gudavalli-pools",
    title: "Gudavalli Pools",
    category: "Websites",
    description: "A professional business website for a pool construction and maintenance company.",
    industry: "Construction / Services",
    image: "/images/projects/pools.png",
    showcaseImage: "/images/projects/pools.png",
    technologies: ["React", "Tailwind CSS"],
    caseStudy: {
      challenge: "The client needed a strong online presence to showcase their portfolio and attract new construction projects.",
      solution: "A visually striking, responsive website highlighting their expertise, services, and past projects.",
      designProcess: "Used a dark, premium color palette to convey luxury and high-quality craftsmanship.",
      developmentProcess: "Built with modern web standards ensuring fast load times and excellent SEO.",
      keyFeatures: ["Service Showcase", "Project Gallery", "Quote Request System", "Responsive Design"],
      results: "Increased inbound inquiries for pool construction by establishing digital trust."
    }
  }
];

export const services = [
  {
    id: "01",
    title: "WEBSITES",
    description: "YOUR WEBSITE IS YOUR FIRST IMPRESSION. We create modern websites that make your business look credible, communicate your value clearly, and turn visitors into customers.",
    icon: "Globe"
  },
  {
    id: "02",
    title: "MOBILE APPLICATIONS",
    description: "PUT YOUR BUSINESS IN YOUR CUSTOMERS' HANDS. We create fast, intuitive mobile applications designed around how your customers actually use your product.",
    icon: "Smartphone"
  },
  {
    id: "03",
    title: "E-COMMERCE",
    description: "DON'T JUST SELL ONLINE. BUILD AN ONLINE BUSINESS. From product discovery to checkout, we create shopping experiences that are fast, simple, secure, and designed to convert.",
    icon: "ShoppingCart"
  },
  {
    id: "04",
    title: "CUSTOM SOFTWARE",
    description: "YOUR BUSINESS HAS A UNIQUE PROBLEM. LET'S BUILD A UNIQUE SOLUTION. Replace spreadsheets, manual processes, and disconnected tools with software designed specifically for the way your business works.",
    icon: "Layout"
  },
  {
    id: "05",
    title: "UI/UX DESIGN",
    description: "GREAT TECHNOLOGY SHOULD FEEL SIMPLE. We design interfaces that make complicated products feel effortless — helping your customers understand, navigate, and use your product with confidence.",
    icon: "PenTool"
  },
  {
    id: "06",
    title: "SUPPORT & MAINTENANCE",
    description: "LAUNCH IS NOT THE FINISH LINE. We stay with your product after launch — fixing issues, improving performance, adding features, and helping your technology keep up with your business.",
    icon: "Settings"
  }
];

export const testimonials = [
  {
    id: 1,
    client: "Priya Sharma",
    company: "TechFlow Solutions",
    role: "CEO",
    image: "https://i.pravatar.cc/150?u=priya",
    quote: "They understood what we wanted from the beginning and transformed our idea into a product that exceeded our expectations.",
    rating: 5
  },
  {
    id: 2,
    client: "Rahul Verma",
    company: "Lumina Retail",
    role: "Founder",
    image: "https://i.pravatar.cc/150?u=rahul",
    quote: "The entire process was professional and transparent. The final product was fast, modern, and exactly what our business needed.",
    rating: 5
  },
  {
    id: 3,
    client: "Anjali Desai",
    company: "EduVantage",
    role: "Product Manager",
    image: "https://i.pravatar.cc/150?u=anjali",
    quote: "They didn't simply develop an app. They helped us think through the product and build something our users genuinely enjoy.",
    rating: 5
  }
];

export const technologies = [
  "React", "Next.js", "Node.js", "Flutter", "Android", "iOS", "Firebase", "MongoDB", "PostgreSQL", "AWS"
];

export const processSteps = [
  {
    id: "01",
    title: "DISCOVER",
    description: "First, we listen. We understand your business, your customers, your challenges, and what you want to achieve."
  },
  {
    id: "02",
    title: "PLAN",
    description: "Then, we create the roadmap. We define the features, user experience, technology, timeline, and development strategy."
  },
  {
    id: "03",
    title: "DESIGN",
    description: "We turn ideas into experiences. Our designs focus on clarity, usability, branding, and the experience your customers expect."
  },
  {
    id: "04",
    title: "BUILD",
    description: "Then we make it real. Our development process focuses on clean code, performance, scalability, security, and reliability."
  },
  {
    id: "05",
    title: "LAUNCH",
    description: "Ready for the real world. We test, optimize, deploy, and make sure your product is ready for your customers."
  },
  {
    id: "06",
    title: "GROW",
    description: "We don't disappear after delivery. We help you improve, scale, maintain, and evolve your product as your business grows."
  }
];
