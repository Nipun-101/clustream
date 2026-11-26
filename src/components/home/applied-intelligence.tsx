import { Check } from "lucide-react";
import Link from "next/link";
import { AppliedIntelligenceIllustration } from "@/components/illustrations/applied-intelligence";
import { Accent } from "@/components/ui/accent";
import { SectionIntro, sectionClass } from "@/components/ui/section-intro";

const strengths = [
  "Vector databases and RAG on current embedding models",
  "Model routing and cost control",
  "Language models run locally, inside your own boundary",
  "Multi-step systems with guardrails, checks and measured failure rates",
];

const problems = [
  {
    title: "Confident, wrong answers",
    text: "Outputs are traced to source passages and checked before anything acts on them.",
  },
  {
    title: "Costs that climb with usage",
    text: "Each request goes to the smallest model that can do the job well, with budgets enforced.",
  },
  {
    title: "Chains that break quietly",
    text: "Multi-step systems with bounded steps, retries and failure rates you can actually read.",
  },
];

export function AppliedIntelligence() {
  return (
    <section
      id="applied-intelligence"
      aria-labelledby="applied-intelligence-title"
      className={`${sectionClass} scroll-mt-[-64px] md:scroll-mt-[-120px]`}
    >
      <SectionIntro
        id="applied-intelligence-title"
        eyebrow="Applied Intelligence"
        title={
          <>
            Intelligence that stays <Accent>grounded.</Accent>
          </>
        }
        lead="Models are the easy part. Making them accurate, bounded and affordable in production is the engineering. That is the work we do, and it is where we stand apart."
      />
      <div className="mt-14 grid overflow-hidden rounded-[28px] border border-line bg-surface lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-5 p-[clamp(28px,5vw,56px)]">
          <p className="font-mono text-xs tracking-[0.1em] text-[#a3abbc] uppercase">
            How we build it
          </p>
          <h3 className="text-[clamp(30px,4vw,44px)] leading-[1.08] tracking-[-0.03em] text-balance text-heading">
            Built by engineers who know the models underneath.
          </h3>
          <p className="text-[17px] leading-[1.65] text-pretty text-muted">
            Our team works at the level of neural networks and embeddings, not
            just APIs. That shows up in how retrieval, routing and multi-step
            systems behave when real traffic arrives.
          </p>
          <ul className="flex flex-col gap-3.5">
            {strengths.map((strength) => (
              <li
                key={strength}
                className="flex items-start gap-3 leading-normal text-[#dde2ec]"
              >
                <Check
                  aria-hidden
                  className="mt-0.5 size-5 shrink-0 text-sand"
                />
                {strength}
              </li>
            ))}
          </ul>
          <Link
            href="/applied-intelligence"
            className="mt-2 inline-flex min-h-[50px] items-center self-start rounded-[14px] bg-sand px-6 py-2 text-[15px] font-semibold text-sand-ink transition-colors hover:bg-sand-soft"
          >
            Explore Applied Intelligence
          </Link>
        </div>
        <div className="flex min-h-[400px] items-center justify-center border-t border-white/6 bg-[#0d1016] px-6 py-10 lg:min-h-[440px] lg:border-t-0 lg:border-l">
          <AppliedIntelligenceIllustration />
        </div>
      </div>
      <ul className="mt-5 grid gap-5 lg:grid-cols-3">
        {problems.map((problem, index) => (
          <li
            key={problem.title}
            className="flex flex-col gap-2.5 rounded-[20px] border border-line bg-surface p-7"
          >
            <p className="font-mono text-[11px] tracking-[0.1em] text-sand uppercase">
              Problem {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="text-xl tracking-[-0.015em] text-heading">
              {problem.title}
            </h3>
            <p className="text-[15px] leading-[1.6] text-muted">
              {problem.text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
