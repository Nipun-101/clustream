import Link from "next/link";
import { Accent } from "@/components/ui/accent";
import { Eyebrow } from "@/components/ui/section-heading";
import { leadClass, sectionClass } from "@/components/ui/section-intro";

export function BuiltBy() {
  return (
    <section
      id="builtby"
      aria-labelledby="builtby-title"
      className={sectionClass}
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(380px,100%),1fr))] items-center gap-x-16 gap-y-8 rounded-[28px] border border-line bg-surface p-[clamp(28px,5vw,64px)]">
        <div className="flex flex-col gap-4">
          <Eyebrow>Built by Clustream</Eyebrow>
          <h2
            id="builtby-title"
            className="text-[clamp(28px,4vw,44px)] leading-[1.06] tracking-[-0.03em] text-heading [&_em]:leading-[1.06] [&_em]:text-sand"
          >
            Ez Prep runs on the same foundations we build for{" "}
            <Accent>clients.</Accent>
          </h2>
        </div>
        <div className="flex flex-col items-start gap-[22px]">
          <p className={leadClass}>
            Document pipelines that prepare the content, web and Android apps
            that deliver it, and a backend built to stay steady under load. The
            product is our proof of how we work.
          </p>
          <Link
            href="/"
            className="inline-flex min-h-[50px] items-center rounded-[14px] bg-sand px-6 text-[15px] font-semibold text-sand-ink transition-colors hover:bg-sand-soft"
          >
            See what else we build
          </Link>
        </div>
      </div>
    </section>
  );
}
