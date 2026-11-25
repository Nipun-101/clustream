import type { ReactNode } from "react";

/** The one italic serif word (or phrase) in each heading. */
export function Accent({ children }: { children: ReactNode }) {
  return (
    <em className="font-serif text-[1.1em] leading-[0.9] font-normal tracking-normal">
      {children}
    </em>
  );
}
