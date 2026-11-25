import { Accent } from "@/components/ui/accent";
import { Eyebrow } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="container-page scroll-mt-[-64px] pt-24 md:scroll-mt-[-120px] md:pt-40"
    >
      <div className="rounded-[32px] border border-line bg-surface bg-[radial-gradient(ellipse_360px_230px_at_50%_0%,rgb(231_185_122/0.16),transparent)] px-7 py-9 text-center md:px-8 md:py-[88px]">
        <Eyebrow>Contact</Eyebrow>
        <h2
          id="contact-title"
          className="mx-auto mt-5 max-w-[9.5em] text-[clamp(34px,5vw,64px)] leading-[1.12] tracking-[-0.03em] text-heading [&_em]:text-sand"
        >
          Have something that needs to <Accent>hold up?</Accent>
        </h2>
        <p className="mx-auto mt-6 max-w-[520px] text-[17px] leading-7 text-muted md:text-lg md:leading-[29px]">
          Tell us what you are building. We reply with questions and ideas, not
          a sales deck.
        </p>
        <a
          href={siteConfig.mailto}
          className="mt-8 inline-flex min-h-[58px] max-w-full items-center rounded-2xl bg-sand px-4 text-[15px] font-semibold break-all text-sand-ink transition-colors hover:bg-sand-soft min-[360px]:px-7 min-[360px]:text-base md:text-lg"
        >
          {siteConfig.email}
        </a>
      </div>
    </section>
  );
}
