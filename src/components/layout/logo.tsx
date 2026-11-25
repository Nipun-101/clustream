import { siteConfig } from "@/config/site";
import { NavAnchor } from "./nav-anchor";

/** `tone` names the background the logo sits on. */
export function Logo({
  tone,
  size = "large",
}: {
  tone: "light" | "dark";
  size?: "small" | "large";
}) {
  const small = size === "small";

  return (
    <NavAnchor
      href="/"
      className={`inline-flex min-h-11 items-center gap-2.5 font-display font-semibold tracking-[-0.02em] ${small ? "text-xl" : "text-[22px]"} ${tone === "light" ? "text-ink" : "text-heading"}`}
    >
      <svg
        aria-hidden
        viewBox="0 0 34 34"
        fill="none"
        className={small ? "size-[30px]" : "size-[34px]"}
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
    </NavAnchor>
  );
}
