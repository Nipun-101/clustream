import type { Metadata, Viewport } from "next";
import { BigEmail } from "@/components/contact/big-email";
import { ContactHero } from "@/components/contact/hero";
import { NextSteps } from "@/components/contact/next-steps";
import { PageTransition } from "@/components/layout/page-transition";
import { siteConfig } from "@/config/site";

const title = "Contact — Clustream";
const description =
  "One inbox. Tell us what you are building, or what is not working yet, and we will take it from there.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: {
    title,
    description,
    url: "/contact",
    siteName: siteConfig.name,
    type: "website",
  },
};

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: "#0A0C10",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <main>
        <ContactHero />
        <NextSteps />
        <BigEmail />
      </main>
    </PageTransition>
  );
}
