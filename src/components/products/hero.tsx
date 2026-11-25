import { EzPrepHeroArt } from "@/components/illustrations/ez-prep";
import { Accent } from "@/components/ui/accent";
import { HeroChip } from "@/components/ui/hero-chip";
import { siteConfig } from "@/config/site";

export function ProductHero() {
  return (
    <div className="relative overflow-hidden pt-header">
      {/* Dot grid and warm glow behind the artwork. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(rgb(255_255_255/0.09)_1px,transparent_1px)] mask-[radial-gradient(ellipse_75%_70%_at_72%_45%,#000_15%,transparent_72%)] bg-size-[28px_28px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[260px] -right-[240px] size-[960px] bg-[radial-gradient(closest-side,rgb(231_185_122/0.17),transparent)]"
      />
      <section
        aria-labelledby="product-title"
        className="relative container-page grid grid-cols-[repeat(auto-fit,minmax(min(440px,100%),1fr))] items-center gap-x-10 gap-y-14 pt-10 pb-28"
      >
        <div className="flex flex-col items-start gap-[26px]">
          <HeroChip>Our latest product</HeroChip>
          <h1 id="product-title">
            <span className="block text-[clamp(64px,11vw,148px)] leading-[0.9] tracking-[-0.055em] text-heading">
              Ez Prep
              <em className="font-serif font-normal tracking-normal text-sand">
                .
              </em>
            </span>
            <span className="mt-5 block text-[clamp(26px,3.4vw,46px)] leading-[1.1] font-medium tracking-[-0.025em] text-balance text-muted [&_em]:leading-[1.1]">
              Exam prep without the{" "}
              <span className="text-sand">
                <Accent>clutter.</Accent>
              </span>
            </span>
          </h1>
          <p className="max-w-[520px] text-[clamp(16px,2vw,18px)] leading-[1.65] text-pretty text-muted">
            Built as an alternative to slow, overloaded study platforms. Content
            curated by experts, an experience that stays the same on desktop,
            mobile and Android, and a price that stays fair.
          </p>
          <div className="mt-1.5 flex flex-wrap gap-3">
            <a
              href={`${siteConfig.mailto}?subject=Ez%20Prep`}
              className="inline-flex min-h-[52px] items-center rounded-[14px] bg-sand px-[26px] text-[15px] font-semibold text-sand-ink transition-colors hover:bg-sand-soft"
            >
              Talk to us about Ez Prep
            </a>
            <a
              href="#compare"
              className="inline-flex min-h-[54px] items-center rounded-[14px] border border-white/20 bg-white/5 px-[26px] text-[15px] font-medium text-heading transition-colors hover:bg-white/10"
            >
              See how it is different
            </a>
          </div>
        </div>
        <div className="w-full max-w-[640px] justify-self-center">
          <EzPrepHeroArt />
        </div>
      </section>
    </div>
  );
}
