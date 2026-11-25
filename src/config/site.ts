export const siteConfig = {
  name: "Clustream",
  url: "https://clustream.tech",
  domain: "clustream.tech",
  title: "Clustream — Software that holds up",
  description:
    "Clustream builds the systems behind the screen: document pipelines, backends, web apps and Android apps. Designed with care, tuned for cost and stability, and run in production for real users.",
  email: "support@clustream.tech",
  mailto: "mailto:support@clustream.tech",
};

export type NavLink = { href: string; label: string };

/** Shared by the header, mobile menu and footer. */
export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];
