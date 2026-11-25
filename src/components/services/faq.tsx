import { Plus } from "lucide-react";
import { QuestionArt } from "@/components/illustrations/services";
import { Accent } from "@/components/ui/accent";
import { Eyebrow } from "@/components/ui/section-heading";
import { headingClass, sectionClass } from "@/components/ui/section-intro";
import { faqs } from "./content";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className={sectionClass}>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(380px,100%),1fr))] items-start gap-x-20 gap-y-12">
        <div className="flex flex-col gap-[18px]">
          <Eyebrow>Questions</Eyebrow>
          <h2 id="faq-title" className={headingClass}>
            Good to <Accent>know.</Accent>
          </h2>
          <div className="mt-3.5 rounded-3xl border border-line bg-panel p-[clamp(16px,3vw,28px)]">
            <QuestionArt />
          </div>
        </div>
        {/* Native disclosure: works without JavaScript and from the keyboard. */}
        <div className="border-b border-white/10">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              open={index === 0}
              className="group border-t border-white/10"
            >
              <summary className="box-content flex min-h-11 cursor-pointer list-none items-center justify-between gap-5 py-6 font-display text-lg leading-[normal] font-semibold tracking-[-0.015em] text-heading min-[641px]:text-[21px] [&::-webkit-details-marker]:hidden">
                {faq.question}
                <Plus
                  aria-hidden
                  className="size-[22px] shrink-0 text-sand transition-transform duration-200 group-open:rotate-45"
                />
              </summary>
              <p className="mb-[26px] max-w-[720px] leading-[1.7] text-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
