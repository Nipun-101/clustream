import {
  RetrievalDiagram,
  RoutingDiagram,
  SystemsDiagram,
} from "@/components/illustrations/applied-intelligence-page";
import { Accent } from "@/components/ui/accent";
import { SplitFeature } from "@/components/ui/split-feature";
import { LocalModels } from "./local-models";

const retrievalPoints = [
  {
    title: "Document-aware chunking",
    text: "Chunks follow headings, tables and clauses, so a passage keeps its meaning and its place in the source.",
  },
  {
    title: "Embeddings that capture meaning",
    text: "Text becomes vectors, so semantically similar passages sit close together even when the wording differs. We compare current embedding models on your documents and keep the one that retrieves best.",
  },
  {
    title: "Vector database with hybrid search",
    text: "Vector search finds related meaning and keyword search catches exact terms. Results are reranked so the most accurate passages come first.",
  },
  {
    title: "RAG that answers from sources",
    text: "The model sees only the retrieved passages, answers from them, and cites the pages. If the sources do not contain the answer, it says so.",
  },
  {
    title: "Measured on your questions",
    text: "A fixed set of real questions scores every change to chunking, embeddings and prompts before it ships.",
  },
];

const routingPoints = [
  {
    title: "Intelligent model routing",
    text: "Each request goes to the smallest model that can handle it, and escalates only when a check says it must.",
  },
  {
    title: "Decision models",
    text: "Small, fast classifiers decide the path: which model, which tools, whether a human should look.",
  },
  {
    title: "Cost control built in",
    text: "Per-request budgets, caching, batching and usage limits keep spend visible and bounded.",
  },
  {
    title: "Local models at the edge",
    text: "Private or latency-sensitive work runs on local models close to the user, with no round-trip to a remote service.",
  },
  {
    title: "Fallbacks, not outages",
    text: "If a model is slow or unavailable, traffic shifts to another path without the user noticing.",
  },
];

const systemsPoints = [
  {
    title: "Specialised roles",
    text: "Retrieval, extraction and writing are separate workers with separate prompts and tests, not one model doing everything.",
  },
  {
    title: "Validation between steps",
    text: "Every output is checked against a schema and against the source before the next step may use it.",
  },
  {
    title: "Bounded autonomy",
    text: "Step limits, tool permissions and approval gates stop a system from doing more than it was designed to do.",
  },
  {
    title: "Retries that make sense",
    text: "Failures back off and retry on a different path, and repeated failures stop and report instead of looping.",
  },
  {
    title: "Failure rates you can read",
    text: "We track success, retries and escalations per step, so a weak link shows up in numbers, not in complaints.",
  },
];

export function DeepDives() {
  return (
    <>
      <SplitFeature
        id="retrieval"
        eyebrow="Vector databases and RAG"
        title={
          <>
            Search by meaning, answer from <Accent>your documents.</Accent>
          </>
        }
        lead="Retrieval-augmented generation (RAG) lets a model answer from your own documents instead of from memory. Text becomes embeddings in a vector database, so passages are found by meaning rather than exact words, and the answer is built only from what was found."
        illustration={<RetrievalDiagram />}
        points={retrievalPoints}
      />
      <SplitFeature
        id="routing"
        eyebrow="Routing and cost"
        title={
          <>
            Spend like it <Accent>matters.</Accent>
          </>
        }
        lead="Most requests do not need the largest model. We design the routing, budgets and fallbacks so quality holds while cost stays predictable."
        illustration={<RoutingDiagram />}
        points={routingPoints}
      />
      <LocalModels />
      <SplitFeature
        id="systems"
        eyebrow="Multi-step systems"
        title={
          <>
            Autonomy with <Accent>boundaries.</Accent>
          </>
        }
        lead="Systems made of several cooperating models are powerful and fragile. We give each part a narrow role, a typed output and a check, so errors are caught where they start."
        illustration={<SystemsDiagram />}
        points={systemsPoints}
      />
    </>
  );
}
