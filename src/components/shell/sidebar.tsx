import Link from "next/link";
import { navItems, siteConfig } from "@/config/site";
import { NavLink } from "./nav-link";

/** Side navigation from `md` up: an icon rail on tablets, labelled on `lg`. */
export function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-dvh w-20 shrink-0 flex-col gap-6 overflow-y-auto border-r border-border p-3 md:flex lg:w-64">
      <Link
        href="/"
        className="flex h-11 items-center justify-center text-lg font-semibold tracking-tight lg:justify-start lg:px-3"
      >
        <span aria-hidden className="lg:hidden">
          {siteConfig.name.charAt(0)}
        </span>
        <span className="sr-only lg:not-sr-only">{siteConfig.name}</span>
      </Link>
      <nav aria-label="Primary">
        <ul className="flex flex-col gap-1">
          {navItems.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <NavLink
                href={href}
                title={label}
                className="flex h-11 items-center justify-center gap-3 rounded-lg text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-foreground aria-[current=page]:bg-surface aria-[current=page]:text-foreground lg:justify-start lg:px-3"
              >
                <Icon aria-hidden className="size-5 shrink-0" />
                <span className="sr-only lg:not-sr-only">{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
