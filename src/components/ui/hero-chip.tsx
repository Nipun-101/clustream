/** Small pill above the heading of a dark page hero. */
export function HeroChip({ children }: { children: string }) {
  return (
    <p className="inline-flex items-center gap-2.5 self-start rounded-full border border-white/14 bg-white/6 px-3.5 py-2 font-mono text-[11px] leading-[normal] tracking-[0.08em] text-[#c5ccda] uppercase">
      <span aria-hidden className="size-1.5 rounded-full bg-sand" />
      {children}
    </p>
  );
}
