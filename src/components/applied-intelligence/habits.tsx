import { Accent } from "@/components/ui/accent";
import { cardClass } from "@/components/ui/card";
import {
  CheckSquareIcon,
  PulseIcon,
  ScreenIcon,
  TrendIcon,
} from "@/components/ui/icons";
import { SectionIntro, sectionClass } from "@/components/ui/section-intro";

const habits = [
  {
    icon: TrendIcon,
    title: "Research-led",
    text: "We read the papers and run the experiments, so new techniques are tested against your data before they reach your product.",
  },
  {
    icon: CheckSquareIcon,
    title: "Evaluation first",
    text: "Before a system is built, we define how it will be scored. Every change has to beat the last result.",
  },
  {
    icon: ScreenIcon,
    title: "Open and local options",
    text: "We are comfortable with open models and self-hosting, so you are never tied to one provider or one price.",
  },
  {
    icon: PulseIcon,
    title: "Production mindset",
    text: "Monitoring, alerts and rollbacks come with the system, because the first release is only the start.",
  },
];

export function Habits() {
  return (
    <section id="ahead" aria-labelledby="ahead-title" className={sectionClass}>
      <SectionIntro
        id="ahead-title"
        className="max-w-[800px]"
        eyebrow="How we stay ahead"
        title={
          <>
            A field that moves monthly needs <Accent>habits,</Accent> not hype.
          </>
        }
        lead="New models and techniques appear constantly. What keeps a system dependable is how we choose, test and adopt them."
      />
      <ul className="mt-14 grid gap-5 min-[641px]:grid-cols-2 min-[1101px]:grid-cols-4">
        {habits.map(({ icon: Icon, title, text }) => (
          <li key={title} className={`${cardClass} gap-3.5 p-7`}>
            <span className="mb-2 flex size-[52px] items-center justify-center rounded-[14px] bg-surface-2 text-sand">
              <Icon className="size-[26px]" />
            </span>
            <h3 className="text-[22px] leading-[normal] tracking-[-0.02em] text-heading">
              {title}
            </h3>
            <p className="leading-[1.65] text-muted">{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
