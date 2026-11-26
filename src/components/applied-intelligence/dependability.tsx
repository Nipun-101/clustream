import { Accent } from "@/components/ui/accent";
import {
  SectionIntro,
  leadClass,
  sectionClass,
} from "@/components/ui/section-intro";

const measures = [
  {
    label: "Groundedness",
    line: "M4 40 L36 34 L68 36 L100 24 L132 26 L164 14 L196 12",
    color: "#8FC59A",
    text: "Answers backed by a source",
  },
  {
    label: "Cost per task",
    line: "M4 14 L36 18 L68 16 L100 28 L132 30 L164 38 L196 40",
    color: "#E7B97A",
    text: "Tracked per request and per route",
  },
  {
    label: "Failure rate",
    line: "M4 12 L36 30 L68 22 L100 36 L132 34 L164 42 L196 44",
    color: "#8AA4D6",
    text: "Retries and escalations by step",
  },
  {
    label: "Latency",
    line: "M4 30 L36 26 L68 32 L100 22 L132 28 L164 20 L196 22",
    color: "#C5CCDA",
    text: "Per route, local and remote",
  },
];

export function Dependability() {
  return (
    <section
      id="measure"
      aria-labelledby="measure-title"
      className={sectionClass}
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(420px,100%),1fr))] items-center gap-x-20 gap-y-12">
        <SectionIntro
          id="measure-title"
          className="gap-5!"
          eyebrow="Dependability"
          title={
            <>
              If it is not measured, it is <Accent>a guess.</Accent>
            </>
          }
        >
          <p className={leadClass}>
            Every Applied Intelligence system ships with the numbers that matter
            in front of you: whether answers are backed by sources, what each
            task costs, where steps fail and how long users wait.
          </p>
          <p className="leading-[1.65] text-muted">
            The panel on the right is illustrative. The exact measures are
            chosen with you, based on what the system has to get right.
          </p>
        </SectionIntro>
        <div className="flex flex-col gap-4 rounded-[22px] border border-white/10 bg-panel p-5">
          <div className="flex items-center gap-2 font-mono text-muted-label">
            {[0, 1, 2].map((dot) => (
              <span
                key={dot}
                aria-hidden
                className="size-2.5 rounded-full bg-[#2a303c]"
              />
            ))}
            <span className="ml-2.5 text-xs">system / health</span>
            <span className="ml-auto text-[11px]">ILLUSTRATIVE</span>
          </div>
          <ul className="grid gap-5 min-[641px]:grid-cols-2">
            {measures.map((measure) => (
              <li
                key={measure.label}
                className="flex flex-col gap-2 rounded-3xl border border-line bg-surface p-[26px]"
              >
                <h3 className="font-mono text-[15px] leading-[1.55] font-medium tracking-[0.04em] text-muted uppercase min-[641px]:tracking-[0.08em]">
                  {measure.label}
                </h3>
                <svg aria-hidden viewBox="0 0 200 56" className="h-14 w-full">
                  <path
                    d={measure.line}
                    fill="none"
                    stroke={measure.color}
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-[15px] leading-[1.55] text-[#dde2ec]">
                  {measure.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
