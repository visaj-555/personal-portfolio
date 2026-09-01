export type SkillItem = {
  name: string;
  blurb: string;
};

export type SkillGroup = {
  heading: string;
  items: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  {
    heading: "Backend",
    items: [
      { name: "Node.js", blurb: "Primary backend runtime" },
      { name: "NestJS", blurb: "Modular server-side architecture" },
      { name: "Express.js", blurb: "HTTP APIs and middleware" },
      { name: "REST APIs", blurb: "Predictable resource contracts" },
      { name: "WebSockets", blurb: "Real-time communication" },
    ],
  },
  {
    heading: "Languages",
    items: [
      { name: "TypeScript", blurb: "Typed application code" },
      { name: "JavaScript", blurb: "Runtime language of the stack" },
    ],
  },
  {
    heading: "Databases",
    items: [
      { name: "PostgreSQL", blurb: "Relational schemas and queries" },
      { name: "MongoDB", blurb: "Document-oriented storage" },
    ],
  },
  {
    heading: "Frontend",
    items: [
      { name: "React.js", blurb: "Component-driven UI" },
      { name: "HTML", blurb: "Document structure" },
      { name: "CSS", blurb: "Layout and presentation" },
    ],
  },
  {
    heading: "Cloud & Storage",
    items: [
      { name: "AWS Lambda", blurb: "Event-driven backend processing" },
      { name: "AWS S3", blurb: "Object storage" },
    ],
  },
  {
    heading: "Authentication",
    items: [
      { name: "JWT", blurb: "Token-based access" },
      { name: "OAuth", blurb: "Delegated authorization" },
      { name: "Google OAuth", blurb: "Third-party identity" },
    ],
  },
  {
    heading: "AI Integrations",
    items: [
      { name: "OpenAI API", blurb: "Model-backed backend services" },
      { name: "Gemini API", blurb: "Model-backed backend services" },
    ],
  },
  {
    heading: "Developer Tools",
    items: [
      { name: "Git", blurb: "Version control" },
      { name: "Postman", blurb: "API exploration and checks" },
      { name: "Swagger", blurb: "API documentation" },
    ],
  },
];
