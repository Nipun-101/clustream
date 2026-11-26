import { LocalDiagram } from "@/components/illustrations/applied-intelligence-page";
import { Accent } from "@/components/ui/accent";
import { IconCards } from "@/components/ui/icon-cards";
import {
  LockIcon,
  PulseIcon,
  ShieldIcon,
  WifiIcon,
} from "@/components/ui/icons";
import { NumberedList } from "@/components/ui/numbered-list";
import { SectionIntro, sectionClass } from "@/components/ui/section-intro";
import { Tags } from "@/components/ui/tags";

const points = [
  {
    title: "Models chosen to fit",
    text: "We pick open models that suit the task and the hardware, and compare them against hosted ones on your own evaluation set.",
  },
  {
    title: "Serving that fits the hardware",
    text: "Quantisation, batching and caching bring memory use and response time down to what your machines can carry.",
  },
  {
    title: "Retrieval stays inside too",
    text: "The vector database and RAG pipeline run in the same environment, so documents are never copied out to be searched.",
  },
  {
    title: "Hybrid, only where you allow",
    text: "Sensitive work stays local. Other requests can route to a larger remote model, under rules you set and can audit.",
  },
];

const benefits = [
  {
    icon: LockIcon,
    title: "Privacy by design",
    text: "Prompts, documents and answers never cross your boundary, because there is nowhere for them to go.",
  },
  {
    icon: ShieldIcon,
    title: "Data stays in bounds",
    text: "Residency and confidentiality requirements are easier to meet when the whole stack runs where you control it.",
  },
  {
    icon: PulseIcon,
    title: "Predictable cost",
    text: "Spend follows your hardware, not a meter that grows with every request, which suits steady, high-volume work.",
  },
  {
    icon: WifiIcon,
    title: "Fast, and works offline",
    text: "No round-trip to a remote service, so responses are quicker and the system keeps working without a connection.",
  },
];

export function LocalModels() {
  return (
    <section id="local" aria-labelledby="local-title" className={sectionClass}>
      <SectionIntro
        id="local-title"
        className="max-w-[820px]"
        eyebrow="Private by design"
        title={
          <>
            Run the model <Accent>inside your walls.</Accent>
          </>
        }
        lead="Not every document can be sent to someone else's servers. We deploy open language models on your own hardware or private cloud, so your data stays within your own bounds. We have built and run this ourselves, so we know what it takes."
      />
      <div className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(min(420px,100%),1fr))] items-start gap-x-20 gap-y-12">
        <div className="rounded-3xl border border-line bg-panel p-[clamp(16px,3vw,28px)]">
          <LocalDiagram />
          <Tags
            tags={["On-premises", "Private cloud", "Edge devices"]}
            className="mt-4"
          />
        </div>
        <NumberedList points={points} />
      </div>
      <IconCards cards={benefits} className="mt-12" />
    </section>
  );
}
