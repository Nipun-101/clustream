import type { ReactNode } from "react";
import { NumberedList } from "./numbered-list";
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
        <NumberedList points={points} />
      </div>
    </section>
  );
}
