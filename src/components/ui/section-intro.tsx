import type { ReactNode } from "react";
import { Eyebrow } from "./section-heading";

export const sectionClass = "container-page pt-24 md:pt-40";
export const headingClass =
  "text-[clamp(32px,5vw,56px)] leading-[1.06] tracking-[-0.03em] text-heading [&_em]:leading-[1.06] [&_em]:text-sand";
export const leadClass =
  "text-[17px] leading-[1.65] text-pretty text-muted md:text-lg";

export function SectionIntro({
  className = "max-w-[780px]",
  id,
  eyebrow,
  title,
  lead,
  children,
}: {
  className?: string;
  id: string;
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`flex flex-col gap-[18px] ${className}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 id={id} className={headingClass}>
        {title}
      </h2>
      {lead && <p className={leadClass}>{lead}</p>}
      {children}
    </div>
  );
}
