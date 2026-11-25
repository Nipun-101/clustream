import { Contact } from "@/components/home/contact";
import { Hero } from "@/components/home/hero";
import { HowWeWork } from "@/components/home/how-we-work";
import { PipelinePanel } from "@/components/home/pipeline-panel";
import { Pipelines } from "@/components/home/pipelines";
import { Process } from "@/components/home/process";
import { Products } from "@/components/home/products";
import { ProofTiles } from "@/components/home/proof-tiles";
import { Services } from "@/components/home/services";
import { SiteFooter } from "@/components/layout/site-footer";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <PipelinePanel />
        <ProofTiles />
        <Services />
        <Pipelines />
        <HowWeWork />
        <Products />
        <Process />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
