import { Cloud, Database, FileText, Monitor, Smartphone } from "lucide-react";
import type { SVGProps } from "react";
import { Accent } from "@/components/ui/accent";
import { SectionHeading } from "@/components/ui/section-heading";

function WorkflowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      {...props}
    >
      <circle cx="5" cy="6" r="2.5" />
      <circle cx="5" cy="18" r="2.5" />
      <circle cx="19" cy="12" r="2.5" />
      <path d="M7.5 6H11a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H7.5M14 12h2.5" />
    </svg>
  );
}

const services = [
  {
    icon: FileText,
    title: "Document processing pipelines",
    text: "PDFs and scans turned into clean, structured data in the shape you define, at heavy scale and low cost.",
    tags: ["OCR", "Schema output", "Chunking"],
  },
  {
    icon: Monitor,
    title: "Web applications",
    text: "Fully responsive apps, with separate experiences for admins and for users, each built around the work it needs to do.",
    tags: ["Admin portals", "User apps", "Responsive"],
  },
  {
    icon: Database,
    title: "Backend systems",
    text: "The processing behind the screens: queues, workers and scheduled jobs that retry themselves and keep data moving.",
    tags: ["APIs", "Queues", "Auto-retry"],
  },
  {
    icon: Smartphone,
    title: "Android apps",
    text: "Native Android apps built for real devices and real networks, from the first prototype to release and every update after.",
    tags: ["Prototype", "Release", "Updates"],
  },
  {
    icon: Cloud,
    title: "Scalable infrastructure",
    text: "Cloud architecture with sensible monitoring and costs. Sized for today, ready for the day traffic multiplies.",
    tags: ["Deployment", "Monitoring", "Cost"],
  },
  {
    icon: WorkflowIcon,
    title: "Language-model workflows",
    text: "Designed step by step, tested against real cases and kept under human review, so they behave the same on day 200 as on day one.",
    tags: ["Workflows", "Evaluation", "Review"],
  },
];

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="container-page scroll-mt-[-64px] pt-24 md:scroll-mt-[-88px] md:pt-32"
    >
      <SectionHeading
        id="services-title"
        eyebrow="What we build"
        title={
          <span className="block max-w-[11.5em]">
            From the first upload to the <Accent>thousandth</Accent> user.
          </span>
        }
        lead="Clustream is a small software studio. We take products from a blank page to production, and stay close after they ship."
      />
      <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, text, tags }) => (
          <li
            key={title}
            className="rounded-3xl border border-line bg-surface p-[26px] lg:p-8"
          >
            <span className="flex size-[52px] items-center justify-center rounded-xl bg-surface-2 text-sand">
              <Icon aria-hidden className="size-[22px]" />
            </span>
            <h3 className="mt-6 text-2xl leading-[1.25] tracking-[-0.02em] text-heading">
              {title}
            </h3>
            <p className="mt-3 leading-[1.65] text-muted">{text}</p>
            <ul className="mt-[22px] flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-lg bg-surface-2 px-2.5 py-1 font-mono text-[11px] leading-[18px] text-[#c9cfdb] uppercase"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
