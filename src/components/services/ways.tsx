import { ArrowRight } from "lucide-react";
import { NavAnchor } from "@/components/layout/nav-anchor";
import { Accent } from "@/components/ui/accent";
import { SectionIntro } from "@/components/ui/section-intro";
import { siteConfig } from "@/config/site";
import { cardClass } from "./card";

const ways = [
  {
    label: "Services",
    title: "Build it for you",
    text: "You bring the idea or the problem. We design, build and launch it, from a small website to an enterprise application.",
    action: "Start a project",
    href: `${siteConfig.mailto}?subject=New%20project`,
  },
  {
    label: "Products",
    title: "Our own products",
    text: "We build and run products of our own, like Ez Prep, on the same foundations we offer to clients.",
    action: "See Ez Prep",
    href: "/products",
  },
  {
    label: "Support",
    title: "Keep it running",
    text: "We maintain the projects we build: monitoring, updates, fixes and new features as your needs change.",
    action: "Talk about support",
    href: `${siteConfig.mailto}?subject=Support`,
  },
];

export function Ways() {
  return (
    <section
      id="models"
      aria-labelledby="models-title"
      className="container-page pt-24 md:pt-16"
    >
      <SectionIntro
        id="models-title"
        eyebrow="Ways to work with us"
        title={
          <>
            Build it. Own it. <Accent>Keep it running.</Accent>
          </>
        }
        lead="Whether you have an idea, a product or something that needs looking after, there is a way to work together."
      />
      <ul className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-5">
        {ways.map((way, index) => (
          <li
            key={way.title}
            className={`${cardClass} justify-between gap-4 p-[clamp(26px,3vw,36px)]`}
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between font-mono leading-[normal]">
                <span aria-hidden className="text-[13px] text-sand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[11px] tracking-[0.1em] text-muted-label uppercase">
                  {way.label}
                </span>
              </div>
              <h3 className="mt-3 text-[28px] leading-[normal] tracking-[-0.02em] text-heading">
                {way.title}
              </h3>
              <p className="leading-[1.65] text-muted">{way.text}</p>
            </div>
            <NavAnchor
              href={way.href}
              className="mt-5 inline-flex min-h-11 items-center gap-2 self-start text-[15px] font-semibold text-sand hover:text-sand-soft"
            >
              {way.action}
              <ArrowRight aria-hidden className="size-[18px]" />
            </NavAnchor>
          </li>
        ))}
      </ul>
    </section>
  );
}
