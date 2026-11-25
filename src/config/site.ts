import { CircleUserRound, Compass, House, Library } from "lucide-react";

export const siteConfig = {
  name: "Clustream",
  description: "Clustream web application",
};

/** Drives both the mobile tab bar and the desktop sidebar. */
export const navItems = [
  { href: "/", label: "Home", icon: House },
  { href: "/explore", label: "Explore", icon: Compass },
  { href: "/library", label: "Library", icon: Library },
  { href: "/profile", label: "Profile", icon: CircleUserRound },
] as const;
