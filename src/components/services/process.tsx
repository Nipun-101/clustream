import { Accent } from "@/components/ui/accent";
import { SectionIntro, sectionClass } from "@/components/ui/section-intro";
import { steps } from "./content";

export function ProjectProcess() {
  return (
    <section
      id="process"
      aria-labelledby="project-process-title"
      className={sectionClass}
    >
      <SectionIntro
        id="project-process-title"
        eyebrow="How a project runs"
        title={
          <>
            Five steps. <Accent>No surprises.</Accent>
          </>
        }
      />
      <ol className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(min(210px,100%),1fr))] gap-4">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="flex flex-col gap-3 rounded-[20px] border border-line bg-surface p-[26px]"
          >
            <span
              aria-hidden
              className="font-mono text-[13px] leading-[normal] text-sand"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-[22px] leading-[normal] tracking-[-0.02em] text-heading">
              {step.title}
            </h3>
            <p className="text-[15px] leading-[1.65] text-muted">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
