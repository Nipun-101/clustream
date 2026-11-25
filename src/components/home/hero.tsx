import { SiteHeader } from "@/components/layout/site-header";
import { Accent } from "@/components/ui/accent";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <div className="bg-[linear-gradient(180deg,#f3eee6_0%,#f6e1ce_26%,#dad8e4_56%,#a9b2cb_100%)] text-ink [color-scheme:light]">
      <SiteHeader />
      <section
        aria-labelledby="hero-title"
        className="container-page flex flex-col items-center pt-5 text-center md:pt-12"
      >
        <p className="inline-flex min-h-8 items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-3.5 py-1.5 font-mono text-[11px] tracking-[0.08em] text-hero-body uppercase">
          <span aria-hidden className="size-1.5 rounded-full bg-[#c98a2e]" />
          Software studio · Built for scale
        </p>
        <h1
          id="hero-title"
          className="mt-5 max-w-[800px] text-[clamp(40px,7.2vw,88px)] leading-[1.06] tracking-[-0.035em] md:mt-7"
        >
          Software that <Accent>holds up</Accent> when thousands show up.
        </h1>
        <p className="mt-5 max-w-[640px] leading-[1.6] text-hero-body md:mt-6 md:text-[19px]">
          Clustream builds the systems behind the screen: document pipelines,
          backends, web apps and Android apps. Designed with care, tuned for
          cost and stability, and run in production for real users.
        </p>
        <div className="mt-[22px] flex flex-col items-center gap-3 sm:flex-row md:mt-7">
          <a
            href={siteConfig.mailto}
            className="inline-flex min-h-[52px] items-center rounded-[14px] bg-ink px-[26px] text-[15px] font-semibold text-white transition-colors hover:bg-surface-2"
          >
            Start a conversation
          </a>
          <a
            href="#services"
            className="inline-flex min-h-[54px] items-center rounded-[14px] border border-ink/12 bg-white/55 px-[26px] text-[15px] font-medium transition-colors hover:bg-white/80"
          >
            See what we build
          </a>
        </div>
        <p className="mt-5 text-sm text-hero-body md:mt-7">
          Trusted to carry thousands of users in production.
        </p>
      </section>
      {/* The pipeline panel overlaps the bottom 150px of these hills. */}
      <div
        aria-hidden
        className="mt-9 h-[280px] bg-[url(/hills.svg)] bg-[length:100%_100%] md:mt-[54px]"
      />
    </div>
  );
}
