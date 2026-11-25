import { HeroChip } from "@/components/ui/hero-chip";
import { siteConfig } from "@/config/site";

const scale = [
  { label: "Landing page", dot: "size-2.5" },
  { label: "Web app", dot: "size-3.5" },
  { label: "Product", dot: "size-[18px]" },
  { label: "Platform", dot: "size-[22px]" },
  { label: "Enterprise", dot: "size-[30px]", peak: true },
];

export function ServicesHero() {
  return (
    <div className="relative overflow-hidden pt-header">
      {/* Fading line grid and a cool glow. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.05)_1px,transparent_1px)] mask-[linear-gradient(180deg,#000_0%,transparent_85%)] bg-size-[64px_64px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[300px] -left-[300px] size-[900px] bg-[radial-gradient(closest-side,rgb(138_164_214/0.14),transparent)]"
      />
      <section
        aria-labelledby="services-hero-title"
        className="relative container-page flex flex-col gap-10 pt-12 pb-[104px]"
      >
        <HeroChip>Services</HeroChip>
        <h1
          id="services-hero-title"
          className="text-[clamp(46px,9vw,128px)] leading-[0.96] tracking-[-0.05em] text-heading"
        >
          <span className="block text-muted-faint">Small sites.</span>{" "}
          <span className="block">Serious systems.</span>{" "}
          <span className="block">
            One{" "}
            <em className="font-serif text-[1.08em] leading-[0.96] font-normal tracking-normal text-sand">
              studio.
            </em>
          </span>
        </h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(360px,100%),1fr))] items-end gap-x-16 gap-y-7">
          <p className="max-w-[560px] text-[clamp(17px,2vw,20px)] leading-[1.6] text-pretty text-muted">
            Clustream builds, ships and maintains software of every size, from a
            single landing page to enterprise applications, and builds products
            of its own.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`${siteConfig.mailto}?subject=New%20project`}
              className="inline-flex min-h-[52px] items-center rounded-[14px] bg-sand px-[26px] text-[15px] font-semibold text-sand-ink transition-colors hover:bg-sand-soft"
            >
              Start a project
            </a>
            <a
              href="#capabilities"
              className="inline-flex min-h-[54px] items-center rounded-[14px] border border-white/20 bg-white/5 px-[26px] text-[15px] font-medium text-heading transition-colors hover:bg-white/10"
            >
              See what we build
            </a>
          </div>
        </div>
        {/* The range of project sizes, smallest to largest. */}
        <div className="relative mt-6">
          <div
            aria-hidden
            className="absolute inset-x-[10%] top-4 h-0.5 bg-linear-to-r from-[#2a3140] to-sand"
          />
          <ol
            aria-label="From the smallest project to the largest"
            className="relative flex justify-between"
          >
            {scale.map(({ label, dot, peak }) => (
              <li
                key={label}
                className="flex w-1/5 flex-col items-center gap-3 text-center"
              >
                <span aria-hidden className="flex h-[34px] items-center">
                  <span
                    className={`rounded-full ${dot} ${
                      peak
                        ? "bg-sand shadow-[0_0_0_9px_rgb(231_185_122/0.16)]"
                        : "border-2 border-sand bg-[#12161e]"
                    }`}
                  />
                </span>
                <span
                  className={`font-mono text-[9.5px] tracking-[0.04em] uppercase min-[640px]:text-[11px] min-[640px]:tracking-[0.08em] ${peak ? "text-sand" : "text-muted-label"}`}
                >
                  {label}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
