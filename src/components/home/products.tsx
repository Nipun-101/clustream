import { Check } from "lucide-react";
import { ProductMockup } from "@/components/illustrations/product-mockup";
import { Accent } from "@/components/ui/accent";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";

const highlights = [
  "1 lakh+ previous-year questions extracted and published by our own pipeline",
  "Separate admin and learner apps, both fully responsive",
  "Backend processing behind the screens, with automatic retries",
];

export function Products() {
  return (
    <section
      id="products"
      aria-labelledby="products-title"
      className="container-page scroll-mt-[-64px] pt-24 md:scroll-mt-[-120px] md:pt-40"
    >
      <SectionHeading
        id="products-title"
        eyebrow="Products"
        title={
          <>
            Things we build for <Accent>ourselves</Accent>, too.
          </>
        }
        lead="Our own products run on the same foundations we offer to clients."
      />
      <article className="mt-14 grid overflow-hidden rounded-3xl border border-line lg:grid-cols-2">
        <div className="bg-surface p-7 md:p-14">
          <p className="font-mono text-[11px] tracking-[0.1em] text-muted-label uppercase">
            Our product
          </p>
          <h3 className="mt-5 text-4xl leading-[1.15] tracking-[-0.035em] text-heading md:text-[56px]">
            Ez Prep
          </h3>
          <p className="mt-5 text-[17px] leading-7 text-muted">
            An exam preparation platform for competitive exams, designed, built
            and operated by Clustream from the document pipeline to the app in
            your pocket.
          </p>
          <ul className="mt-5 space-y-3.5">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex gap-4 text-base leading-6">
                <Check aria-hidden className="mt-1 size-4 shrink-0 text-sand" />
                {highlight}
              </li>
            ))}
          </ul>
          <a
            href={siteConfig.caseStudyHref}
            className="mt-7 inline-flex min-h-[50px] items-center rounded-[14px] bg-sand px-6 text-[15px] font-semibold text-sand-ink transition-colors hover:bg-sand-soft"
          >
            Read the case study
          </a>
        </div>
        <div className="flex items-center justify-center border-t border-line bg-[#0e1117] px-6 py-[58px] lg:border-t-0 lg:border-l">
          <ProductMockup />
        </div>
      </article>
    </section>
  );
}
