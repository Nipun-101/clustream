import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-xs tracking-[0.1em] text-sand uppercase">
      {children}
    </p>
  );
}
