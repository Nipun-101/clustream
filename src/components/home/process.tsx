import { Accent } from "@/components/ui/accent";
import { cardClass } from "@/components/ui/card";
import { SectionIntro, sectionClass } from "@/components/ui/section-intro";

const steps = [
  {
    title: "Understand",
    text: "We learn the problem, the users and the constraints before we touch any code.",
  },
  {
    title: "Design",
    text: "Architecture, data and interface are planned together, then reviewed with you.",
  },
  {
    title: "Build",
    text: "Short cycles with working software along the way, so you see progress and not promises.",
  },
  {
    title: "Run",
    text: "We deploy, monitor and keep improving, and we stay available after launch.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className={`${sectionClass} scroll-mt-[-64px] md:scroll-mt-[-120px]`}
    >
      <SectionIntro
        id="process-title"
        eyebrow="Process"
        title={
          <>
            Four steps. <Accent>No surprises.</Accent>
          </>
        }
      />
      <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className={`${cardClass} gap-3.5 rounded-[20px]! p-[26px] md:p-7`}
          >
            <span aria-hidden className="font-mono text-[13px] text-sand">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-[22px] leading-[1.25] tracking-[-0.025em] text-heading">
              {step.title}
            </h3>
            <p className="text-[15px] leading-[24.5px] text-muted">
              {step.text}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
