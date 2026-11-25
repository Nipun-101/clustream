import Link from "next/link";
import { siteConfig } from "@/config/site";

/** `tone` names the background the logo sits on. */
export function Logo({ tone }: { tone: "light" | "dark" }) {
  return (
    <Link
      href="/"
      className={`inline-flex min-h-11 items-center gap-2.5 font-display font-semibold tracking-[-0.02em] ${
        tone === "light" ? "text-[22px] text-ink" : "text-xl text-heading"
      }`}
    >
      <svg
        aria-hidden
        viewBox="0 0 34 34"
        fill="none"
        className={tone === "light" ? "size-[34px]" : "size-[30px]"}
      >
        <rect
          width="34"
          height="34"
          rx="10"
          className={tone === "light" ? "fill-ink" : "fill-surface-2"}
        />
        <path
          d="M22.5 11.5A8 8 0 1 0 22.5 22.5"
          className="stroke-sand"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <circle cx="23" cy="17" r="2" className="fill-sand" />
      </svg>
      {siteConfig.name}
    </Link>
  );
}
