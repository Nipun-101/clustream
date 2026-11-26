import type { ReactNode } from "react";
import { SectionIntro, sectionClass } from "./section-intro";

/** Heading and illustration on the left, numbered points on the right. */
export function SplitFeature({
  id,
  eyebrow,
  title,
  lead,
  illustration,
  points,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  lead: string;
  illustration: ReactNode;
  points: { title: string; text: string }[];
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`${sectionClass} scroll-mt-[-64px] md:scroll-mt-[-120px]`}
    >
      <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionIntro
            className="gap-5!"
            id={`${id}-title`}
            eyebrow={eyebrow}
            title={title}
            lead={lead}
          />
          <div className="mt-10 rounded-3xl border border-line bg-panel p-[clamp(16px,3vw,28px)]">
            {illustration}
          </div>
        </div>
        <ol className="border-t border-line">
          {points.map((point, index) => (
            <li
              key={point.title}
              className="grid grid-cols-[2.5rem_1fr] border-b border-line py-[22px] md:grid-cols-[3rem_1fr] md:py-7"
            >
              <span
                aria-hidden
                className="pt-1.5 font-mono text-[13px] text-sand"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[22px] leading-[normal] tracking-[-0.015em] text-heading">
                  {point.title}
                </h3>
                <p className="mt-2 leading-[1.65] text-muted">{point.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
