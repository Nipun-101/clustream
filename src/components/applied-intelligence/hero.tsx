import { PassageMap } from "@/components/illustrations/applied-intelligence-page";
import { HeroChip } from "@/components/ui/hero-chip";
import { siteConfig } from "@/config/site";

export function AppliedIntelligenceHero() {
  return (
    <div className="relative overflow-hidden pt-header">
      {/* Fading line grid and a warm glow. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.05)_1px,transparent_1px)] mask-[linear-gradient(180deg,#000_0%,transparent_85%)] bg-size-[64px_64px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[260px] -right-[300px] size-[900px] bg-[radial-gradient(closest-side,rgb(231_185_122/0.1),transparent)]"
      />
      <section
        aria-labelledby="applied-intelligence-hero-title"
        className="relative container-page grid grid-cols-[repeat(auto-fit,minmax(min(420px,100%),1fr))] items-center gap-[22px] pt-5 pb-9 md:gap-x-16 md:gap-y-12 md:pt-12 md:pb-[104px]"
      >
        <div className="flex flex-col items-start gap-7">
          <HeroChip className="text-[#e4e8f0]">
            Dependable Intelligence
          </HeroChip>
          <h1
            id="applied-intelligence-hero-title"
            className="text-[clamp(44px,7vw,96px)] leading-[0.98] tracking-[-0.045em] text-heading"
          >
            <span className="block text-muted-faint">Models are easy.</span>{" "}
            <span className="block">
              Making them{" "}
              <em className="font-serif text-[1.08em] leading-[0.98] font-normal tracking-normal text-sand">
                dependable
              </em>{" "}
              is the work.
            </span>
          </h1>
          <p className="max-w-[540px] text-[clamp(17px,2vw,20px)] leading-[1.6] text-pretty text-muted">
            Applied Intelligence is how Clustream builds with language models:
            retrieval you can trace, routing that controls cost, and multi-step
            systems that stay inside their limits. Engineered by people who
            understand what happens inside the model.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`${siteConfig.mailto}?subject=Applied%20Intelligence`}
              className="inline-flex min-h-[52px] items-center rounded-[14px] bg-sand px-[26px] text-[15px] font-semibold text-sand-ink transition-colors hover:bg-sand-soft"
            >
              Talk to an engineer
            </a>
            <a
              href="#problems"
              className="inline-flex min-h-[52px] items-center rounded-[14px] border border-white/20 bg-white/5 px-[26px] text-[15px] font-medium text-heading transition-colors hover:bg-white/10"
            >
              See the problems we solve
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <PassageMap />
        </div>
      </section>
    </div>
  );
}
