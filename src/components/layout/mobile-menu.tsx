"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { navLinks, siteConfig } from "@/config/site";
import { NavAnchor } from "./nav-anchor";

const themes = {
  light: {
    button: "border-ink/15 bg-white/60 text-ink",
    panel: "bg-white text-ink shadow-ink/20",
    link: "hover:bg-ink/5",
    cta: "bg-ink text-white",
  },
  dark: {
    button: "border-white/20 bg-white/6 text-[#f2f4f8]",
    panel: "border border-white/12 bg-surface text-[#f2f4f8] shadow-black/50",
    link: "hover:bg-surface-2",
    cta: "bg-sand text-sand-ink",
  },
};

export function MobileMenu({
  theme,
  current,
  showCta,
}: {
  theme: keyof typeof themes;
  current: string;
  showCta: boolean;
}) {
  const styles = themes[theme];
  const menuId = useId();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const Icon = open ? X : Menu;

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
        className={`flex size-11 items-center justify-center rounded-xl border ${styles.button}`}
      >
        <Icon aria-hidden className="size-5" />
      </button>
      <div
        id={menuId}
        hidden={!open}
        className={`absolute inset-x-6 top-full -mt-3 rounded-2xl p-3 shadow-2xl ${styles.panel}`}
      >
        <nav aria-label="Primary">
          <ul>
            {navLinks.map(({ href, label }) => (
              <li key={label}>
                <NavAnchor
                  href={href}
                  onClick={close}
                  aria-current={href === current ? "page" : undefined}
                  className={`flex min-h-12 items-center rounded-lg px-3 font-medium ${styles.link}`}
                >
                  {label}
                </NavAnchor>
              </li>
            ))}
          </ul>
        </nav>
        {showCta && (
          <a
            href={siteConfig.mailto}
            onClick={close}
            className={`mt-2 flex min-h-12 items-center justify-center rounded-xl text-sm font-semibold ${styles.cta}`}
          >
            Get in touch
          </a>
        )}
      </div>
    </div>
  );
}
