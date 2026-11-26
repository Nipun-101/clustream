import { Accent } from "@/components/ui/accent";
import { SectionIntro } from "@/components/ui/section-intro";

const problems = [
  {
    tag: "Confident, wrong answers",
    title: "Hallucinated output",
    text: "A model fills gaps with plausible text, and nobody notices until it reaches a customer.",
    answer:
      "Answers are drawn from retrieved passages, tied to a source page, and checked before they leave the system.",
  },
  {
    tag: "Retrieval that misses",
    title: "The right page is never found",
    text: "Naive chunking splits tables and clauses, and similar-looking text outranks the passage that matters.",
    answer:
      "Document-aware chunks, hybrid search and reranking, tuned against questions from your own domain.",
  },
  {
    tag: "Costs that climb",
    title: "Every request goes to the biggest model",
    text: "Spend grows with usage while most requests never needed that much capability.",
    answer:
      "Routing sends each request to the smallest model that can do the job, with budgets and caching in front.",
  },
  {
    tag: "Multi-step drift",
    title: "Chains that wander off-script",
    text: "Small errors compound across steps, and open-ended autonomy turns them into incidents.",
    answer:
      "Bounded steps, typed tool calls and validation between stages, with human checkpoints where they matter.",
  },
  {
    tag: "Silent failures",
    title: "Quality that decays unnoticed",
    text: "Prompts, models and data change underneath you, and nothing tells you the system got worse.",
    answer:
      "Regression sets and failure-rate tracking on every release, with alerts before users feel it.",
  },
  {
    tag: "Data and latency",
    title: "Sensitive data and slow round-trips",
    text: "Sending everything to a remote model adds delay, risk and a dependency you do not control.",
    answer:
      "Local models at the edge handle private and latency-sensitive work, and larger models are used only when needed.",
  },
];

export function Problems() {
  return (
    <section
      id="problems"
      aria-labelledby="problems-title"
      className="container-page pt-24 md:pt-16"
    >
      <SectionIntro
        id="problems-title"
        className="max-w-[800px]"
        eyebrow="Where projects actually break"
        title={
          <>
            The real problems of building with models, and{" "}
            <Accent>our answers.</Accent>
          </>
        }
        lead="These are the failures we see when a prototype meets production. Each one has an engineering answer, and we build those answers in from the first design."
      />
      <ul className="mt-14 grid gap-5 min-[641px]:grid-cols-2 min-[1101px]:grid-cols-3">
        {problems.map((problem, index) => (
          <li
            key={problem.title}
            className="flex flex-col gap-3.5 rounded-3xl border border-line bg-surface p-7"
          >
            <p className="font-mono text-[11px] leading-[normal] tracking-[0.1em] text-muted-label uppercase">
              Problem {String(index + 1).padStart(2, "0")} · {problem.tag}
            </p>
            <h3 className="text-[22px] leading-[1.2] tracking-[-0.02em] text-heading">
              {problem.title}
            </h3>
            <p className="text-[15px] leading-[1.6] text-muted">
              {problem.text}
            </p>
            <div className="flex flex-col gap-1.5 border-t border-line pt-3.5">
              <p className="font-mono text-[11px] leading-[normal] tracking-[0.1em] text-sand uppercase">
                How we tackle it
              </p>
              <p className="text-[15px] leading-[1.6] text-[#dde2ec]">
                {problem.answer}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
