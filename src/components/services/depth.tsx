import { PipelineIllustration } from "@/components/illustrations/pipeline";
import { WorkflowArt } from "@/components/illustrations/services";
import { Accent } from "@/components/ui/accent";
import { SectionIntro, sectionClass } from "@/components/ui/section-intro";
import { Tags } from "@/components/ui/tags";
import { cardClass } from "@/components/ui/card";

const specialities = [
  {
    title: "Data processing pipelines",
    art: <PipelineIllustration arrowId="pl-ar-services" />,
    text: "We turn documents and scans into clean, structured data in the shape you define. OCR that understands layout, chunking that follows the document, and jobs that back off and recover on their own, all tuned for the lowest cost per document.",
    tags: ["OCR", "Schema output", "Auto-retry", "Low cost"],
  },
  {
    title: "Applied intelligence",
    art: <WorkflowArt />,
    text: "We put language models to work inside real products, with care. Each workflow is designed step by step, evaluated against real cases and reviewed by people where it matters, so results stay dependable as usage grows.",
    tags: ["Workflows", "Evaluation", "Human review"],
  },
];

export function Depth() {
  return (
    <section id="depth" aria-labelledby="depth-title" className={sectionClass}>
      <SectionIntro
        id="depth-title"
        className="max-w-[820px]"
        eyebrow="Where we go deep"
        title={
          <>
            Data pipelines and applied-intelligence systems,{" "}
            <Accent>done properly.</Accent>
          </>
        }
        lead="The work that looks simple from the outside and is hard to get right at scale. This is where our experience shows."
      />
      <div className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(min(460px,100%),1fr))] gap-5">
        {specialities.map((speciality) => (
          <article
            key={speciality.title}
            className={`${cardClass} gap-[22px] p-[clamp(20px,3vw,32px)]`}
          >
            <div className="rounded-[18px] border border-line bg-panel p-[clamp(14px,2.5vw,24px)]">
              {speciality.art}
            </div>
            <h3 className="text-[26px] leading-[normal] tracking-[-0.02em] text-heading">
              {speciality.title}
            </h3>
            <p className="leading-[1.65] text-muted">{speciality.text}</p>
            <Tags tags={speciality.tags} className="mt-2" />
          </article>
        ))}
      </div>
    </section>
  );
}
