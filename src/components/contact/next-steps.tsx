import { Accent } from "@/components/ui/accent";
import { SectionIntro } from "@/components/ui/section-intro";

const steps = [
  {
    title: "You write",
    text: "A few lines is plenty: what you are building, or what is not working yet.",
  },
  {
    title: "We read",
    text: "Every message gets read, and we come back with questions and ideas.",
  },
  {
    title: "We talk",
    text: "If it is a good fit, we set up a call and plan the next step together.",
  },
];

export function NextSteps() {
  return (
    <section
      id="next"
      aria-labelledby="next-title"
      className="container-page pt-24 md:pt-16"
    >
      <SectionIntro
        id="next-title"
        eyebrow="What happens next"
        title={
          <>
            Write. We read. We <Accent>reply.</Accent>
          </>
        }
      />
      <ol className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-5">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="flex flex-col gap-3 rounded-[22px] border border-line bg-surface p-7"
          >
            <span
              aria-hidden
              className="font-mono text-[13px] leading-[normal] text-sand"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-2xl leading-[normal] tracking-[-0.02em] text-heading">
              {step.title}
            </h3>
            <p className="leading-[1.65] text-muted">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
