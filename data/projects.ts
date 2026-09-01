export type ProjectChallenge = {
  title: string;
  detail: string;
};

export type ArchitectureNode = {
  id: string;
  label: string;
  detail: string;
};

export type ProjectScreenshot = {
  src: string;
  alt: string;
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  summary: string;
  contributions: string[];
  role: string[];
  challenges: ProjectChallenge[];
  tech: string[];
  architecture?: ArchitectureNode[];
  architectureNote?: string;
  screenshots: ProjectScreenshot[];
};

export const projects: Project[] = [
  {
    slug: "expense-manager",
    title: "Expense Manager",
    year: "2026",
    category: "Personal Finance · Full-Stack",
    summary:
      "A full-stack personal finance web app built with React, NestJS, PostgreSQL, and Prisma. It gives users one dashboard for bank accounts, savings, cash, and fixed deposits — with income, expenses, transfers, recurring deductions, goals, and analytics kept in sync without rewriting today’s balances when historical entries are logged.",
    contributions: [
      "Unified dashboard for balances across bank accounts, cash, savings, fixed deposits, and investments",
      "Secure tracking of income, expenses, transfers, and categorized spending",
      "Recurring automation for SIPs, rent, bills, and similar deductions",
      "Financial goals with progress tracking against target amounts",
      "Charts and insights for spending trends, account distribution, and savings rate",
      "Historical transaction logging that does not incorrectly alter today’s financial snapshot — balances can be set to what the user actually has now",
      "Dynamic fixed-deposit valuation from principal, interest rate, tenure, and compounding",
    ],
    role: [
      "Full-stack product ownership",
      "NestJS API design",
      "PostgreSQL + Prisma data model",
      "React dashboard & analytics UI",
      "Auth and account security",
      "Balance snapshot & FD calculation logic",
    ],
    challenges: [
      {
        title: "Snapshot integrity",
        detail:
          "Logging past expenses must not silently rewrite today’s cash or bank balances. The app supports setting what the user has now so catch-up history stays honest.",
      },
      {
        title: "Multi-account ledger",
        detail:
          "Bank, cash, savings, and fixed deposits share one dashboard while remaining distinct account types with their own rules.",
      },
      {
        title: "Recurring deductions",
        detail:
          "SIPs, rent, and bills need automation that stays predictable month to month without manual re-entry.",
      },
      {
        title: "Fixed deposit valuation",
        detail:
          "FD values are calculated from principal, interest rate, tenure, and compounding so the dashboard reflects live growth when accounts are opened — without a separate daily job.",
      },
      {
        title: "Readable insights",
        detail:
          "Spending trends, category breakdowns, account distribution, and goal progress need to stay clear enough to act on, not just chart-heavy.",
      },
    ],
    tech: ["React.js", "NestJS", "PostgreSQL", "Prisma", "TypeScript", "Node.js"],
    architecture: [
      { id: "web", label: "React App", detail: "Dashboard, accounts, analytics" },
      { id: "api", label: "NestJS API", detail: "Auth, ledger, goals, automation" },
      { id: "orm", label: "Prisma", detail: "Typed data access" },
      { id: "db", label: "PostgreSQL", detail: "Accounts, transactions, goals" },
    ],
    architectureNote:
      "React client → NestJS API → Prisma → PostgreSQL. Balances, recurring rules, goals, and FD calculations are owned on the backend so the dashboard always reads a consistent financial snapshot.",
    screenshots: [
      {
        src: "/projects/expense-manager/login-signup.png",
        alt: "Expense Manager login and sign up screens",
        label: "Auth",
      },
      {
        src: "/projects/expense-manager/dashboard.png",
        alt: "Expense Manager dashboard with balances, trends, and recent transactions",
        label: "Dashboard",
      },
      {
        src: "/projects/expense-manager/accounts.png",
        alt: "Accounts view for cash and bank balances with snapshot controls",
        label: "Accounts",
      },
      {
        src: "/projects/expense-manager/categories.png",
        alt: "Categories management screen",
        label: "Categories",
      },
      {
        src: "/projects/expense-manager/transactions.png",
        alt: "Transactions list and filtering",
        label: "Transactions",
      },
      {
        src: "/projects/expense-manager/Automate.png",
        alt: "Automate screen for recurring SIPs, rent, and bills",
        label: "Automate",
      },
      {
        src: "/projects/expense-manager/goals.png",
        alt: "Financial goals progress screen",
        label: "Goals",
      },
      {
        src: "/projects/expense-manager/analytics.png",
        alt: "Analytics charts and spending insights",
        label: "Analytics",
      },
      {
        src: "/projects/expense-manager/settings.png",
        alt: "Settings screen",
        label: "Settings",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
