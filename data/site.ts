export const site = {
  name: "Visaj Panchal",
  title: "Backend & Full-Stack Software Engineer",
  location: "Ahmedabad, Gujarat, India",
  email: "visajpanchal777@gmail.com",
  phone: "+91 8200988308",
  phoneHref: "tel:+918200988308",
  linkedin: {
    handle: "visaj-panchal-8577951b",
    href: "https://www.linkedin.com/in/visaj-panchal-8577951b",
  },
  github: {
    handle: "visaj-555",
    href: "https://github.com/visaj-555",
  },
  // [TODO: resume PDF path]
  resumeHref: "/resume.pdf",
  // [TODO: production domain]
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  positioning:
    "I build the systems products run on — APIs, auth, real-time communication, data, and AI-powered services — with architecture that stays maintainable as they grow.",
  metaDescription:
    "Backend & Full-Stack Software Engineer in Ahmedabad. 2.8+ years professional experience building Node.js/NestJS APIs, auth, real-time systems, databases, AWS, and AI-powered backend services.",
  about: [
    "Backend and full-stack software engineer based in Ahmedabad, with 2.8+ years of professional experience and 2.3+ years focused on Node.js backend and full-stack development.",
    "Work covers backend services, scalable REST APIs, authentication and authorization systems, real-time applications, database solutions, AI-powered services, and cloud-based backend processing.",
    "Primary tools: Node.js, NestJS, Express.js, TypeScript, PostgreSQL, MongoDB, AWS Lambda, WebSockets, and React.js.",
  ],
  contact: {
    intro:
      "I'm currently exploring Backend and Full-Stack opportunities where I can work on challenging engineering problems, build scalable products, and continue growing as a software engineer.",
    closer:
      "If you're hiring for Node.js, Backend, NestJS, or Full-Stack roles, I'd be happy to connect.",
  },
  stats: [
    { value: "2.8+", label: "Years professional experience" },
    { value: "2.3+", label: "Years Node.js / full-stack" },
    { value: "Node.js", label: "Primary backend focus" },
    { value: "AWS", label: "Cloud experience" },
    { value: "AI", label: "AI-powered backend integrations" },
  ],
  nav: [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/#projects" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/#contact" },
  ],
} as const;
