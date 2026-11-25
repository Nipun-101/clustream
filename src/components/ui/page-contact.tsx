import type { ReactNode } from "react";
import { siteConfig } from "@/config/site";
import { Eyebrow } from "./section-heading";
import { leadClass, sectionClass } from "./section-intro";

/** Closing contact card of the dark pages. */
export function PageContact({
  title,
  text,
  subject,
  textClassName = "max-w-[540px]",
}: {
  title: ReactNode;
  text: string;
  /** Pre-filled email subject. */
  subject: string;
  textClassName?: string;
}) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className={sectionClass}
    >
      <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-[32px] border border-white/10 bg-surface px-[clamp(24px,5vw,72px)] py-[clamp(36px,7vw,88px)] text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-[220px] left-1/2 -ml-[360px] h-[420px] w-[720px] bg-[radial-gradient(closest-side,rgb(231_185_122/0.16),transparent)]"
        />
        <div className="relative">
          <Eyebrow>Contact</Eyebrow>
        </div>
        <h2
          id="contact-title"
          className="relative max-w-[780px] text-[clamp(34px,5.6vw,64px)] leading-[1.06] tracking-[-0.03em] text-heading [&_em]:leading-[1.06] [&_em]:text-sand"
        >
          {title}
        </h2>
        <p className={`relative ${textClassName} ${leadClass}`}>{text}</p>
        <a
          href={`${siteConfig.mailto}?subject=${encodeURIComponent(subject)}`}
          className="relative mt-2 inline-flex min-h-[58px] max-w-full items-center rounded-2xl bg-sand px-7 text-[clamp(15px,4vw,18px)] font-semibold break-all text-sand-ink transition-colors hover:bg-sand-soft"
        >
          {siteConfig.email}
        </a>
      </div>
    </section>
  );
}
