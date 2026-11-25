import { navLinks, siteConfig } from "@/config/site";
import { Logo } from "./logo";
import { NavAnchor } from "./nav-anchor";

export function SiteFooter() {
  return (
    <footer className="container-page pt-24 pb-[max(2.5rem,env(safe-area-inset-bottom))]">
      <div className="border-t border-line pt-6 md:pt-[29px]">
        <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
          <Logo tone="dark" size="small" />
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-7 gap-y-0.5">
              {navLinks.map(({ href, label }) => (
                <li key={label}>
                  <NavAnchor
                    href={href}
                    className="flex min-h-11 items-center text-[15px] text-muted-label transition-colors hover:text-heading"
                  >
                    {label}
                  </NavAnchor>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-4 flex flex-col gap-1 text-sm text-muted-faint md:flex-row md:justify-between">
          <p>© 2026 Clustream. Kochi, Kerala, India.</p>
          <p>{siteConfig.domain}</p>
        </div>
      </div>
    </footer>
  );
}
