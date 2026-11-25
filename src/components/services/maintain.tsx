import { HeartbeatArt } from "@/components/illustrations/services";
import { Accent } from "@/components/ui/accent";
import { Eyebrow } from "@/components/ui/section-heading";
import {
  headingClass,
  leadClass,
  sectionClass,
} from "@/components/ui/section-intro";
import { upkeep } from "./content";

export function Maintain() {
  return (
    <section
      id="maintain"
      aria-labelledby="maintain-title"
      className={sectionClass}
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(420px,100%),1fr))] items-center gap-x-20 gap-y-16">
        <div className="flex flex-col gap-5">
          <Eyebrow>After launch</Eyebrow>
          <h2 id="maintain-title" className={headingClass}>
            Software is never <Accent>finished.</Accent> We stay.
          </h2>
          <p className={leadClass}>
            We maintain the projects we build, so launch day is the start of the
            relationship and not the end of it.
          </p>
          <ol className="mt-2 border-b border-white/10">
            {upkeep.map((item, index) => (
              <li
                key={item.title}
                className="flex gap-4 border-t border-white/10 py-5 md:gap-6"
              >
                <span
                  aria-hidden
                  className="min-w-6 pt-1.5 font-mono text-[13px] leading-[normal] text-sand"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="mb-1 text-[19px] leading-[normal] tracking-[-0.015em] text-heading">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-[1.65] text-muted">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="rounded-[28px] border border-line bg-panel p-[clamp(18px,3vw,36px)]">
          <HeartbeatArt />
        </div>
      </div>
    </section>
  );
}
