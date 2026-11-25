export const capabilities = [
  {
    title: "Websites and landing pages",
    text: "Fast, accessible and easy to update, from a single page to a full site.",
    tags: ["LANDING PAGES", "SITES", "CONTENT"],
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2.5" />
        <path d="M3 9h18" />
        <path d="M7 14h6" />
      </>
    ),
  },
  {
    title: "Web applications",
    text: "Responsive apps with separate experiences for admins and for users, built around the work each one does.",
    tags: ["ADMIN", "USER APPS", "DASHBOARDS"],
    icon: (
      <>
        <rect x="3" y="4" width="18" height="13" rx="2.5" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </>
    ),
  },
  {
    title: "Enterprise applications",
    text: "Multi-role systems with workflows, permissions and integrations, designed to grow with the organisation.",
    tags: ["WORKFLOWS", "ROLES", "INTEGRATIONS"],
    icon: (
      <>
        <path d="M4 21V7l8-4 8 4v14" />
        <path d="M9 21v-5h6v5" />
        <path d="M9 10h.01M12 10h.01M15 10h.01M9 13h.01M12 13h.01M15 13h.01" />
      </>
    ),
  },
  {
    title: "Android apps",
    text: "Native apps for real devices and real networks, from first prototype to release and every update after.",
    tags: ["PROTOTYPE", "RELEASE", "UPDATES"],
    icon: (
      <>
        <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
        <path d="M11 18.5h2" />
      </>
    ),
  },
  {
    title: "Backend systems and APIs",
    text: "Queues, workers and scheduled jobs that retry themselves and keep data moving behind the screens.",
    tags: ["APIS", "QUEUES", "AUTO-RETRY"],
    icon: (
      <>
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
        <path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </>
    ),
  },
  {
    title: "Data processing pipelines",
    text: "Documents and scans turned into structured data in your schema, at scale and at low cost.",
    tags: ["OCR", "CHUNKING", "SCHEMA"],
    icon: (
      <>
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
        <path d="M14 3v5h5" />
        <path d="M9 13h6" />
        <path d="M9 17h4" />
      </>
    ),
  },
  {
    title: "Language-model workflows",
    text: "Designed step by step, tested on real cases and kept under human review.",
    tags: ["WORKFLOWS", "EVALUATION", "REVIEW"],
    icon: (
      <>
        <circle cx="5" cy="6" r="2" />
        <circle cx="5" cy="18" r="2" />
        <circle cx="19" cy="12" r="2.5" />
        <path d="M7 6h4a3 3 0 0 1 3 3v1.5" />
        <path d="M7 18h4a3 3 0 0 0 3-3v-1.5" />
      </>
    ),
  },
  {
    title: "Cloud and infrastructure",
    text: "Deployment, monitoring and scaling set up sensibly, so cost and stability stay in balance.",
    tags: ["DEPLOYMENT", "MONITORING", "COST"],
    icon: (
      <>
        <path d="M7 18a4.5 4.5 0 0 1-.5-8.97A6 6 0 0 1 18 8.5 4 4 0 0 1 17.5 18H7Z" />
      </>
    ),
  },
];

export const essentials = [
  "Sign-in and roles",
  "Payments",
  "Notifications",
  "Analytics and reports",
  "Admin dashboards",
  "Integrations and APIs",
  "Search",
  "File uploads",
];

export const upkeep = [
  {
    title: "Monitoring and alerts",
    text: "We notice problems before your users do.",
  },
  {
    title: "Updates and security",
    text: "Dependencies and platforms kept current and safe.",
  },
  {
    title: "Fixes and new features",
    text: "Small improvements and bigger additions as your needs change.",
  },
  {
    title: "Performance and cost",
    text: "Tuning so the system stays quick and the bills stay sensible.",
  },
];

export const steps = [
  {
    title: "Discover",
    text: "We learn the problem, the people who will use it and the limits we are working within.",
  },
  {
    title: "Design",
    text: "Architecture, data and interface are planned together and reviewed with you before we build.",
  },
  {
    title: "Build",
    text: "Short cycles with working software along the way, so you see progress and not promises.",
  },
  {
    title: "Launch",
    text: "A careful rollout, monitoring from the first day and a clear handover.",
  },
  {
    title: "Maintain",
    text: "We stay on, keeping what we build secure, quick and improving.",
  },
];

export const faqs = [
  {
    question: "What size of project do you take on?",
    answer:
      "Anything from a single landing page to an enterprise application. The approach scales with the work: the same care goes into a small site as into a large platform.",
  },
  {
    question: "Do you maintain what you build?",
    answer:
      "Yes. We keep the projects we build running, with monitoring, updates, fixes and new features as your needs change.",
  },
  {
    question: "Do you work with language models?",
    answer:
      "Yes, where they genuinely help. We design the workflow step by step, test it against real cases and keep people in the loop where it matters.",
  },
  {
    question: "Do you build products of your own?",
    answer:
      "We do. Ez Prep is our own product, built and run on the same foundations we offer to clients.",
  },
  {
    question: "How do we get started?",
    answer:
      "Email support@clustream.tech with what you want to build. We reply with questions and ideas, and take it from there.",
  },
];
