const highlights = [
  "Curated by experts",
  "Same on every screen",
  "Affordable",
  "Secure and scalable",
];

export function Highlights() {
  return (
    <section aria-label="At a glance" className="container-page pt-16">
      <ul className="flex flex-wrap justify-center gap-3">
        {highlights.map((highlight) => (
          <li
            key={highlight}
            className="rounded-full border border-white/12 px-[22px] py-3 text-[15px] leading-[normal] font-medium text-[#e4e8f0]"
          >
            {highlight}
          </li>
        ))}
      </ul>
    </section>
  );
}
