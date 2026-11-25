import { siteConfig } from "@/config/site";

/** The address set large in outline, filling in on hover. */
export function BigEmail() {
  return (
    <section
      aria-label="Email address"
      // The bottom padding adds to the footer's own, as this page spaces it more.
      className="mx-auto max-w-[1440px] px-4 pt-24 pb-6 text-center md:pt-40"
    >
      <p className="mb-6 font-mono text-xs tracking-[0.1em] text-muted-label uppercase">
        Or just write to
      </p>
      <a
        href={siteConfig.mailto}
        className="block font-display text-[clamp(22px,6.6vw,112px)] leading-[1.05] font-semibold tracking-[-0.045em] break-all text-transparent transition-colors duration-250 [-webkit-text-stroke:1px_rgb(231_185_122/0.7)] hover:text-sand hover:[-webkit-text-stroke-color:var(--color-sand)] md:[-webkit-text-stroke-width:1.5px]"
      >
        {siteConfig.email}
      </a>
    </section>
  );
}
