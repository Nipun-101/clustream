import type { Metadata, Viewport } from "next";
import { PageTransition } from "@/components/layout/page-transition";
import { Capabilities } from "@/components/services/capabilities";
import { Depth } from "@/components/services/depth";
import { Faq } from "@/components/services/faq";
import { ServicesHero } from "@/components/services/hero";
import { Maintain } from "@/components/services/maintain";
import { ProjectProcess } from "@/components/services/process";
import { Ways } from "@/components/services/ways";
import { Accent } from "@/components/ui/accent";
import { PageContact } from "@/components/ui/page-contact";
import { siteConfig } from "@/config/site";

const title = "Services — Clustream";
const description =
  "Clustream builds, ships and maintains software of every size, from a single landing page to enterprise applications, and builds products of its own.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: {
    title,
    description,
    url: "/services",
    siteName: siteConfig.name,
    type: "website",
  },
};

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: "#0A0C10",
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <main>
        <ServicesHero />
        <Ways />
        <Capabilities />
        <Depth />
        <Maintain />
        <ProjectProcess />
        <Faq />
        <PageContact
          title={
            <>
              Have a project in <Accent>mind?</Accent>
            </>
          }
          text="Tell us what you want to build, whether it is a landing page or an enterprise platform. We reply with questions and ideas, not a sales deck."
          subject="New project"
          textClassName="max-w-[560px]"
        />
      </main>
    </PageTransition>
  );
}
