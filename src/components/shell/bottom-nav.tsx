import { navItems } from "@/config/site";
import { NavLink } from "./nav-link";

/** Fixed tab bar for small screens. */
export function BottomNav() {
  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 pr-[env(safe-area-inset-right)] pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)] backdrop-blur md:hidden"
    >
      <ul className="flex h-16">
        {navItems.map(({ href, label, icon: Icon }) => (
          <li key={href} className="flex-1">
            <NavLink
              href={href}
              className="flex h-full flex-col items-center justify-center gap-1 text-xs font-medium text-muted aria-[current=page]:text-foreground"
            >
              <Icon aria-hidden className="size-5" />
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
