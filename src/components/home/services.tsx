import { Accent } from "@/components/ui/accent";
import { cardClass } from "@/components/ui/card";
import { SectionIntro, sectionClass } from "@/components/ui/section-intro";
import { Tags } from "@/components/ui/tags";
import {
  CloudIcon,
  DatabaseIcon,
  DocumentIcon,
  FlowIcon,
  MonitorIcon,
  PhoneIcon,
} from "@/components/ui/icons";

const services = [
  {
    icon: DocumentIcon,
    title: "Document processing pipelines",
    text: "PDFs and scans turned into clean, structured data in the shape you define, at heavy scale and low cost.",
    tags: ["OCR", "Schema output", "Chunking"],
  },
  {
    icon: MonitorIcon,
    title: "Web applications",
    text: "Fully responsive apps, with separate experiences for admins and for users, each built around the work it needs to do.",
    tags: ["Admin portals", "User apps", "Responsive"],
  },
  {
    icon: DatabaseIcon,
    title: "Backend systems",
    text: "The processing behind the screens: queues, workers and scheduled jobs that retry themselves and keep data moving.",
    tags: ["APIs", "Queues", "Auto-retry"],
  },
  {
    icon: PhoneIcon,
    title: "Android apps",
    text: "Native Android apps built for real devices and real networks, from the first prototype to release and every update after.",
    tags: ["Prototype", "Release", "Updates"],
  },
  {
    icon: CloudIcon,
    title: "Scalable infrastructure",
    text: "Cloud architecture with sensible monitoring and costs. Sized for today, ready for the day traffic multiplies.",
    tags: ["Deployment", "Monitoring", "Cost"],
  },
  {
    icon: FlowIcon,
    title: "Applied intelligence",
    text: "Retrieval, routing and multi-step systems built by engineers who understand the models, and measured so they behave the same on day 200 as on day one.",
    tags: ["Retrieval", "Routing", "Evaluation"],
  },
];

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className={`${sectionClass} scroll-mt-[-64px] md:scroll-mt-[-96px]`}
    >
      <SectionIntro
        id="services-title"
        eyebrow="What we build"
        title={
          <>
            From the first upload to the <Accent>thousandth</Accent> user.
          </>
        }
        lead="Clustream is a small software studio. We take products from a blank page to production, and stay close after they ship."
      />
      <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, text, tags }) => (
          <li key={title} className={`${cardClass} gap-3.5 p-[26px] md:p-8`}>
            <span className="mb-2 flex size-[52px] items-center justify-center rounded-[14px] bg-surface-2 text-sand">
              <Icon className="size-[26px]" />
            </span>
            <h3 className="text-2xl tracking-[-0.02em] text-heading">
              {title}
            </h3>
            <p className="leading-[1.65] text-muted">{text}</p>
            <Tags tags={tags} className="mt-2" />
          </li>
        ))}
      </ul>
    </section>
  );
}
