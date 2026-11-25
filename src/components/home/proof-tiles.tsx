const proofs = [
  {
    figure: "1 lakh+",
    text: "previous-year questions extracted from documents and published by our own pipeline.",
  },
  {
    figure: "1000s",
    text: "of users served in production, on systems we designed and operate.",
  },
  {
    figure: "Cost-tuned",
    text: "every stage is built to spend as little as possible per document, without giving up stability.",
  },
];

export function ProofTiles() {
  return (
    <section aria-label="In numbers" className="container-page pt-[72px]">
      <ul className="grid gap-5 md:grid-cols-3">
        {proofs.map((proof) => (
          <li
            key={proof.figure}
            className="rounded-3xl border border-line bg-surface p-8 md:p-5 lg:p-8"
          >
            <p className="font-display text-[40px] leading-none font-semibold tracking-[-0.04em] whitespace-nowrap text-heading md:text-[clamp(30px,4.2vw,60px)]">
              {proof.figure}
            </p>
            <p className="mt-3.5 text-[15px] leading-[23px] text-muted">
              {proof.text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
