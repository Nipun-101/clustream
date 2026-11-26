import {
  RetrievalDiagram,
  RoutingDiagram,
  SystemsDiagram,
} from "@/components/illustrations/applied-intelligence-page";
import { Accent } from "@/components/ui/accent";
import { SplitFeature } from "@/components/ui/split-feature";

const retrievalPoints = [
  {
    title: "Document-aware chunking",
    text: "Chunks follow headings, tables and clauses, so a passage keeps its meaning and its place in the source.",
  },
  {
    title: "Embedding models chosen by test",
    text: "We compare current embedding models on your documents, not on public benchmarks, and keep the one that retrieves best.",
  },
  {
    title: "Hybrid search and reranking",
    text: "Vector and keyword search are combined, then reranked, so exact terms and related meaning both count.",
  },
  {
    title: "Citations on every answer",
    text: "Each answer points to the pages it came from, so a reviewer can check it in seconds.",
  },
  {
    title: "Measured on your questions",
    text: "A fixed set of real questions scores every change to chunking, models and prompts before it ships.",
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
        eyebrow="Retrieval"
        title={
          <>
            Finding the right passage, <Accent>every time.</Accent>
          </>
        }
        lead="Retrieval decides whether a model is useful or dangerous. We treat it as its own discipline, built on current embedding models, vector databases and evaluation."
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
