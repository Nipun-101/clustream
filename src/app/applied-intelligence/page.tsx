import type { Metadata, Viewport } from "next";
import { DeepDives } from "@/components/applied-intelligence/deep-dives";
import { Dependability } from "@/components/applied-intelligence/dependability";
import { Habits } from "@/components/applied-intelligence/habits";
import { AppliedIntelligenceHero } from "@/components/applied-intelligence/hero";
import { Problems } from "@/components/applied-intelligence/problems";
import { PageTransition } from "@/components/layout/page-transition";
import { Accent } from "@/components/ui/accent";
import { PageContact } from "@/components/ui/page-contact";
import { siteConfig } from "@/config/site";

const title = "Dependable Intelligence — Clustream";
const description =
  "How Clustream builds with language models: retrieval you can trace, routing that controls cost, and multi-step systems that stay inside their limits.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: {
    title,
    description,
    url: "/applied-intelligence",
    siteName: siteConfig.name,
    type: "website",
  },
};

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: "#0A0C10",
};

export default function AppliedIntelligencePage() {
  return (
    <PageTransition>
      <main>
        <AppliedIntelligenceHero />
        <Problems />
        <DeepDives />
        <Habits />
        <Dependability />
        <PageContact
          eyebrow="Start here"
          title={
            <>
              Bring us the problem that has to be <Accent>right.</Accent>
            </>
          }
          text="Tell us what the system needs to get right and what it costs when it does not. We reply with questions and a plan, not a pitch."
          subject="Applied Intelligence"
          textClassName="max-w-[560px]"
        />
      </main>
    </PageTransition>
  );
}
