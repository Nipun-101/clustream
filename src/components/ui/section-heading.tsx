import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-xs tracking-[0.1em] text-sand uppercase">
      {children}
    </p>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  lead,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  lead?: string;
}) {
  return (
    <div>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className="mt-4 text-[clamp(32px,5vw,56px)] leading-[1.12] tracking-[-0.03em] text-heading [&_em]:text-sand"
      >
        {title}
      </h2>
      {lead && (
        <p className="mt-5 max-w-[760px] text-[17px] leading-7 text-muted md:text-lg md:leading-[30px]">
          {lead}
        </p>
      )}
    </div>
  );
}
