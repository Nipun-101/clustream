"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navLinks, siteConfig } from "@/config/site";

export function MobileMenu() {
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
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
        className="flex size-11 items-center justify-center rounded-xl border border-ink/15 bg-white/60 text-ink"
      >
        <Icon aria-hidden className="size-5" />
      </button>
      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-6 top-full -mt-3 rounded-2xl bg-white p-3 text-ink shadow-2xl shadow-ink/20"
      >
        <nav aria-label="Primary">
          <ul>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={close}
                  className="flex min-h-12 items-center rounded-lg px-3 font-medium hover:bg-ink/5"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={siteConfig.mailto}
          onClick={close}
          className="mt-2 flex min-h-12 items-center justify-center rounded-xl bg-ink text-sm font-semibold text-white"
        >
          Get in touch
        </a>
      </div>
    </div>
  );
}
