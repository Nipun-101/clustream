export const siteConfig = {
  name: "Clustream",
  url: "https://clustream.tech",
  domain: "clustream.tech",
  title: "Clustream — Software that holds up",
  description:
    "Clustream builds the systems behind the screen: document pipelines, state of the art retrieval and reasoning systems, backends and apps. Engineered by people who understand the models, tuned for cost and stability, and run in production for real users.",
  email: "support@clustream.tech",
  mailto: "mailto:support@clustream.tech",
};

export type NavLink = { href: string; label: string };

/** Shared by the header, mobile menu and footer. */
export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/applied-intelligence", label: "Applied Intelligence" },
  { href: "/contact", label: "Contact" },
];
