import { AppliedIntelligence } from "@/components/home/applied-intelligence";
import { Hero } from "@/components/home/hero";
import { HowWeWork } from "@/components/home/how-we-work";
import { PipelinePanel } from "@/components/home/pipeline-panel";
import { Pipelines } from "@/components/home/pipelines";
import { Process } from "@/components/home/process";
import { ProofTiles } from "@/components/home/proof-tiles";
import { Services } from "@/components/home/services";
import { PageTransition } from "@/components/layout/page-transition";
import { Accent } from "@/components/ui/accent";
import { PageContact } from "@/components/ui/page-contact";

export default function HomePage() {
  return (
    <PageTransition>
      <main>
        <Hero />
        <PipelinePanel />
        <ProofTiles />
        <Services />
        <Pipelines />
        <HowWeWork />
        <AppliedIntelligence />
        <Process />
        <PageContact
          title={
            <>
              Have something that needs to <Accent>hold up?</Accent>
            </>
          }
          text="Tell us what you are building. We reply with questions and ideas, not a sales deck."
        />
      </main>
    </PageTransition>
  );
}
