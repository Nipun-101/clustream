import { Mail } from "lucide-react";
import { HeroChip } from "@/components/ui/hero-chip";
import { siteConfig } from "@/config/site";
import { CopyButton } from "./copy-button";
import { Letter } from "./letter";

export function ContactHero() {
  return (
    <div className="relative overflow-hidden pt-header">
      {/* Warm and cool glows, and a flight path towards the letter. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[420px] -left-[320px] size-[1000px] bg-[radial-gradient(closest-side,rgb(231_185_122/0.16),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[360px] -right-[300px] size-[900px] bg-[radial-gradient(closest-side,rgb(138_164_214/0.14),transparent)]"
      />
      <svg
        aria-hidden
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 hidden size-full md:block"
      >
        <path
          d="M-20 780C260 840 470 560 700 590S1070 330 1210 175"
          fill="none"
          className="stroke-sand"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          strokeDasharray="4 9"
        />
      </svg>
      <section
        aria-labelledby="contact-title"
        className="relative container-page grid grid-cols-[repeat(auto-fit,minmax(min(440px,100%),1fr))] items-center gap-x-16 gap-y-14 pt-10 pb-28"
      >
        <div className="flex flex-col items-start gap-7">
          <HeroChip>Contact</HeroChip>
          <h1
            id="contact-title"
            className="text-[clamp(60px,11vw,148px)] leading-[0.9] tracking-[-0.055em] text-heading"
          >
            Say{" "}
            <em className="font-serif text-[1.05em] leading-[0.9] font-normal tracking-normal text-sand">
              hello.
            </em>
          </h1>
          <p className="max-w-[480px] text-[clamp(17px,2vw,20px)] leading-[1.6] text-pretty text-muted">
            One inbox. Tell us what you are building, or what is not working
            yet, and we will take it from there.
          </p>
          <div className="flex w-full max-w-[560px] flex-wrap items-center gap-x-3.5 gap-y-3 rounded-[18px] border border-white/14 bg-white/5 py-3.5 pr-3.5 pl-5">
            <Mail
              aria-hidden
              strokeWidth={1.7}
              className="size-[26px] shrink-0 text-sand"
            />
            <a
              href={siteConfig.mailto}
              className="min-w-0 flex-1 font-display text-[clamp(18px,2.4vw,25px)] leading-[normal] font-semibold tracking-[-0.02em] break-all text-heading"
            >
              {siteConfig.email}
            </a>
            <CopyButton text={siteConfig.email} />
          </div>
          <p className="text-[15px] leading-[normal] text-[#a3abbc]">
            We reply with questions and ideas, not a sales deck.
          </p>
        </div>
        <Letter />
      </section>
    </div>
  );
}
