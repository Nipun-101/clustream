import { navLinks, siteConfig } from "@/config/site";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";

/** Sits on a light background (the hero sky). */
export function SiteHeader() {
  return (
    <header className="relative z-30 pt-[env(safe-area-inset-top)]">
      <div className="container-page flex items-center justify-between py-6">
        <Logo tone="light" />
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex gap-1 lg:gap-2">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="flex min-h-11 items-center px-2 text-[15px] font-medium text-[#353c4d] transition-colors hover:text-ink lg:px-3"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={siteConfig.mailto}
          className="hidden min-h-11 items-center rounded-xl bg-ink px-5 text-sm font-semibold text-white transition-colors hover:bg-surface-2 md:inline-flex"
        >
          Get in touch
        </a>
        <MobileMenu />
      </div>
    </header>
  );
}
