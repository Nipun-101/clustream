"use client";

import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "@/config/site";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { NavAnchor } from "./nav-anchor";

const themes = {
  /** On the landing page's light hero sky. */
  light: {
    link: "text-[#3b4252] hover:text-ink aria-[current=page]:text-ink",
    cta: "bg-ink text-white hover:bg-surface-2",
  },
  /** On every other (dark) page. */
  dark: {
    link: "text-muted hover:text-white aria-[current=page]:text-white",
    cta: "bg-sand text-sand-ink hover:bg-sand-soft",
  },
};

/**
 * Lives in the root layout and overlays the top of each page, which leaves room
 * for it with `pt-header`.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const theme = pathname === "/" ? "light" : "dark";
  const styles = themes[theme];
  // The contact page is itself "get in touch", so its button offers email.
  const onContact = pathname === "/contact";

  return (
    <header className="absolute inset-x-0 top-0 z-30 pt-[env(safe-area-inset-top)] [view-transition-name:site-header]">
      <div className="container-page flex items-center justify-between gap-4 py-6">
        <Logo tone={theme} />
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex gap-4 lg:gap-8">
            {navLinks.map(({ href, label }) => (
              <li key={label}>
                <NavAnchor
                  href={href}
                  aria-current={href === pathname ? "page" : undefined}
                  className={`flex min-h-11 items-center text-[15px] font-medium transition-colors aria-[current=page]:font-semibold ${styles.link}`}
                >
                  {label}
                </NavAnchor>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={siteConfig.mailto}
          className={`hidden min-h-11 items-center rounded-xl px-5 text-sm font-semibold whitespace-nowrap transition-colors md:inline-flex ${styles.cta}`}
        >
          {onContact ? "Email us" : "Get in touch"}
        </a>
        {/* Keyed so the menu is closed again after any route change. */}
        <MobileMenu
          key={pathname}
          theme={theme}
          current={pathname}
          showCta={!onContact}
        />
      </div>
    </header>
  );
}
