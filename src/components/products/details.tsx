import { TapTargetArt } from "@/components/illustrations/ez-prep";
import { Accent } from "@/components/ui/accent";
import { Eyebrow } from "@/components/ui/section-heading";
import {
  headingClass,
  leadClass,
  sectionClass,
} from "@/components/ui/section-intro";

const details = [
  {
    title: "Nothing between you and the question",
    text: "Clean screens that keep your attention on the paper in front of you.",
  },
  {
    title: "Made for the device in your hand",
    text: "Layouts, tap targets and text sizes tuned for phones, never just shrunk down from desktop.",
  },
  {
    title: "Smooth while you work",
    text: "Pages open quickly and the interface stays fluid, so practice never feels like a chore.",
  },
  {
    title: "Consistent everywhere",
    text: "The same flow on desktop, mobile and Android, so nothing needs to be learned twice.",
  },
];

export function Details() {
  return (
    <section
      id="details"
      aria-labelledby="details-title"
      className={sectionClass}
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(420px,100%),1fr))] items-start gap-x-20 gap-y-16">
        <div className="flex flex-col gap-5">
          <Eyebrow>The details</Eyebrow>
          <h2 id="details-title" className={headingClass}>
            The small things <Accent>add up.</Accent>
          </h2>
          <p className={leadClass}>
            We sweat the nitty-gritty of the learner&apos;s experience, the
            parts most platforms never get around to.
          </p>
          <div className="mt-5 rounded-3xl border border-line bg-panel p-[clamp(16px,3vw,28px)]">
            <TapTargetArt />
          </div>
        </div>
        <ol className="border-b border-white/10">
          {details.map((detail, index) => (
            <li
              key={detail.title}
              className="flex gap-4 border-t border-white/10 py-[22px] md:gap-6 md:py-7"
            >
              <span
                aria-hidden
                className="min-w-6 pt-1.5 font-mono text-[13px] text-sand"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="mb-2 text-[22px] leading-[normal] tracking-[-0.015em] text-heading">
                  {detail.title}
                </h3>
                <p className="leading-[1.65] text-muted">{detail.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
