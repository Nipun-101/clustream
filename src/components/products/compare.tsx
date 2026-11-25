import { Check, X } from "lucide-react";
import { Accent } from "@/components/ui/accent";
import { SectionIntro, sectionClass } from "@/components/ui/section-intro";

const columns = [
  {
    title: "Conventional platforms",
    icon: X,
    card: "border-dashed border-white/18",
    heading: "text-muted-label",
    iconClass: "text-muted-label",
    text: "text-[#a3abbc]",
    points: [
      "Content overload, with everything thrown at everyone",
      "Little thought given to the learner's experience",
      "Often not responsive, and awkward on a phone",
      "Sluggish, dated interfaces that get in the way",
    ],
  },
  {
    title: "Ez Prep",
    icon: Check,
    card: "border-sand/50 bg-surface",
    heading: "text-sand",
    iconClass: "text-sand",
    text: "text-[#edeff4]",
    points: [
      "Content curated by experts, so you study what matters",
      "Designed around the learner, from the first screen",
      "Fully responsive, the same on every device",
      "Smooth and quick, and priced to stay affordable",
    ],
  },
];

export function Compare() {
  return (
    <section
      id="compare"
      aria-labelledby="compare-title"
      className={sectionClass}
    >
      <SectionIntro
        id="compare-title"
        eyebrow="Why we built it"
        title={
          <>
            Most prep platforms were never built for the{" "}
            <Accent>learner.</Accent>
          </>
        }
        lead="They pile on content, ignore the experience, and treat the phone as an afterthought. Ez Prep starts from the opposite end."
      />
      <div className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(min(440px,100%),1fr))] gap-5">
        {columns.map(({ icon: Icon, ...column }) => (
          <div
            key={column.title}
            className={`rounded-3xl border p-[clamp(24px,4vw,40px)] ${column.card}`}
          >
            <h3
              className={`mb-3 font-mono text-xs font-medium tracking-[0.1em] uppercase ${column.heading}`}
            >
              {column.title}
            </h3>
            <ul className="divide-y divide-white/7">
              {column.points.map((point) => (
                <li
                  key={point}
                  className={`flex gap-3.5 py-4 text-[17px] leading-normal ${column.text}`}
                >
                  <Icon
                    aria-hidden
                    className={`mt-0.5 size-5 shrink-0 ${column.iconClass}`}
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
