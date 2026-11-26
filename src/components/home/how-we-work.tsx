import { FoundationIllustration } from "@/components/illustrations/foundation";
import { Accent } from "@/components/ui/accent";
import { SplitFeature } from "@/components/ui/split-feature";

const points = [
  {
    title: "Infrastructure first",
    text: "We start with how the system will run, grow and fail, then design the product on top of that foundation.",
  },
  {
    title: "Curated, not automated",
    text: "We use modern tools, language models included, but every decision is made by an engineer who can explain why.",
  },
  {
    title: "Built to be owned",
    text: "Readable code and clear documentation, so your team is never locked out of its own software.",
  },
];

export function HowWeWork() {
  return (
    <SplitFeature
      id="approach"
      eyebrow="How we work"
      title={
        <>
          A small team that <Accent>thinks</Accent> before it builds.
        </>
      }
      lead="The engineers behind Clustream bring deep experience in infrastructure, scalability and machine learning, from neural networks to production language-model systems. We stay hands-on, so the people who design your system are the people who build it."
      illustration={<FoundationIllustration />}
      points={points}
    />
  );
}
