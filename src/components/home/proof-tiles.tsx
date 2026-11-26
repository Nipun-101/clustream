import {
  BracketsIcon,
  DocumentIcon,
  FlowIcon,
  ScanIcon,
} from "@/components/ui/icons";

const highlights = [
  {
    icon: DocumentIcon,
    title: "Document parsing",
    text: "Any layout, any length, split by the document's own structure.",
  },
  {
    icon: BracketsIcon,
    title: "Structured conversion",
    text: "Typed records in the schema your product already uses.",
  },
  {
    icon: FlowIcon,
    title: "LLM pipelines",
    text: "Model steps that are tested, bounded and recoverable.",
  },
  {
    icon: ScanIcon,
    title: "Efficient OCR",
    text: "Layout-aware reading at the lowest cost per page we can reach.",
  },
];

const proofs = [
  {
    figure: "5 lakh+",
    text: "pieces of content (titles, chunks and records) extracted from documents and published by our own pipelines.",
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
      <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map(({ icon: Icon, title, text }) => (
          <li
            key={title}
            className="flex flex-col gap-2.5 rounded-[20px] border border-line bg-surface p-6"
          >
            <Icon className="size-6 text-sand" />
            <h3 className="text-lg tracking-[-0.01em] text-heading">{title}</h3>
            <p className="text-sm leading-[1.55] text-muted">{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
