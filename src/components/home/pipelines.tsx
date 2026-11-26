import { PipelineIllustration } from "@/components/illustrations/pipeline";
import { Accent } from "@/components/ui/accent";
import { SplitFeature } from "@/components/ui/split-feature";

const points = [
  {
    title: "Titles, types and chunks, in your schema",
    text: "Documents are classified by type and subtype, split into titled chunks and emitted as records shaped exactly the way your application expects them.",
  },
  {
    title: "Reads layout, not just text",
    text: "OCR that understands tables, columns and figures, so meaning survives the conversion.",
  },
  {
    title: "Chunking that respects the document",
    text: "Splits follow the document's own structure, never arbitrary lengths, so nothing is cut mid-thought.",
  },
  {
    title: "Backs off and recovers",
    text: "When a step fails or a service slows down, jobs wait, retry and resume on their own.",
  },
  {
    title: "Cheap to run, steady under load",
    text: "Every stage is tuned to spend as little as possible per document, without trading away stability.",
  },
];

export function Pipelines() {
  return (
    <SplitFeature
      id="pipelines"
      eyebrow="Document pipelines"
      title={
        <>
          Turning documents into data you can <Accent>trust.</Accent>
        </>
      }
      lead="Most documents were never meant to be read by software. We build the pipelines that read them anyway, at scale, at the lowest cost we can reach, and without anyone watching the queue."
      illustration={<PipelineIllustration />}
      points={points}
    />
  );
}
