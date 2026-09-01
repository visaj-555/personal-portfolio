export type ExperienceRole = {
  id: string;
  company: string;
  title: string;
  period: string;
  start: string;
  focus?: string;
  points: string[];
  badges: string[];
};

export const experience: ExperienceRole[] = [
  {
    id: "cilans",
    company: "Cilans System",
    title: "Software Developer",
    period: "April 2025–Present",
    start: "Apr 2025",
    focus:
      "NestJS backend, modular architecture, secure auth, real-time communication, AI integrations, cloud processing, database performance.",
    points: [
      "Developed backend services using NestJS with modular, scalable architecture",
      "Designed authentication/authorization flows following backend best practices",
      "Collaborated with AI/ML teams to integrate agentic AI capabilities into backend systems",
      "Built AI-powered chatbot services using OpenAI and Gemini APIs",
      "Implemented AWS Lambda for event-driven, scalable backend processing",
      "Developed real-time communication features using WebSockets",
      "Designed and optimized database schemas for performance and data integrity",
      "Integrated third-party auth using Google OAuth",
    ],
    badges: [
      "NestJS",
      "Node.js",
      "TypeScript",
      "WebSockets",
      "AWS Lambda",
      "OpenAI API",
      "Gemini API",
      "Google OAuth",
      "Databases",
    ],
  },
  {
    id: "seven-square",
    company: "Seven Square Technosoft",
    title: "Junior Software Developer",
    period: "June 2024–March 2025",
    start: "Jun 2024",
    focus:
      "Node.js/Express.js API development, auth, database design, API performance.",
    points: [
      "Built and maintained scalable RESTful APIs using Node.js and Express.js",
      "Implemented authentication/authorization logic for secure user access",
      "Designed and managed NoSQL databases for efficient, flexible data storage",
      "Improved API performance through debugging, query optimization, efficient data modeling",
      "Optimized database schemas and indexing to enhance response times and scalability",
    ],
    badges: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "NoSQL",
      "Database Optimization",
    ],
  },
  {
    id: "active-servers",
    company: "Active Servers",
    title: "Web Developer Intern",
    period: "January 2024–April 2024",
    start: "Jan 2024",
    focus:
      "Responsive UI development, clean layouts, client collaboration, and frontend problem-solving.",
    points: [
      "Developed responsive and user-friendly web interfaces using HTML, CSS, and Bootstrap, ensuring compatibility across different screen sizes",
      "Designed and customized web pages with a focus on clean UI, responsive layouts, and improved user experience",
      "Collaborated with clients and the development team to understand requirements, discuss design changes, and implement feedback",
      "Identified and resolved UI and responsiveness issues, while gaining practical experience in frontend development and client communication",
    ],
    badges: ["HTML", "CSS", "Bootstrap"],
  },
];
