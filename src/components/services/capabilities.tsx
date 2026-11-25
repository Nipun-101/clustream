import { Accent } from "@/components/ui/accent";
import { SectionIntro, sectionClass } from "@/components/ui/section-intro";
import { Tags } from "@/components/ui/tags";
import { cardClass } from "./card";
import { capabilities, essentials } from "./content";

export function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-title"
      className={sectionClass}
    >
      <SectionIntro
        id="capabilities-title"
        eyebrow="What we build"
        title={
          <>
            The whole range, from a <Accent>single page</Accent> to a platform.
          </>
        }
        lead="One team across the stack, so the people who plan your system are the people who build and run it."
      />
      <ul className="mt-14 grid gap-5 min-[640px]:grid-cols-2 min-[1100px]:grid-cols-4">
        {capabilities.map((capability) => (
          <li key={capability.title} className={`${cardClass} gap-3.5 p-7`}>
            <span className="mb-2 flex size-[52px] items-center justify-center rounded-[14px] bg-surface-2 text-sand">
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-[26px]"
              >
                {capability.icon}
              </svg>
            </span>
            <h3 className="text-[22px] leading-[normal] tracking-[-0.02em] text-heading">
              {capability.title}
            </h3>
            <p className="text-[15px] leading-[1.65] text-muted">
              {capability.text}
            </p>
            <Tags tags={capability.tags} className="mt-2" />
          </li>
        ))}
      </ul>
      <div className="mt-14 flex flex-col gap-5">
        <h3 className="font-mono text-xs font-medium tracking-[0.1em] text-muted-label uppercase">
          The usual essentials, handled
        </h3>
        <ul className="flex flex-wrap gap-3">
          {essentials.map((essential) => (
            <li
              key={essential}
              className="rounded-full border border-white/12 bg-white/2 px-5 py-3 text-[15px] leading-[normal] font-medium text-[#e4e8f0]"
            >
              {essential}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
