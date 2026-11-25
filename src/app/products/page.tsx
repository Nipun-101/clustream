import type { Metadata, Viewport } from "next";
import { PageTransition } from "@/components/layout/page-transition";
import { BuiltBy } from "@/components/products/built-by";
import { Compare } from "@/components/products/compare";
import { Details } from "@/components/products/details";
import { Devices } from "@/components/products/devices";
import { Features } from "@/components/products/features";
import { ProductHero } from "@/components/products/hero";
import { Highlights } from "@/components/products/highlights";
import { Accent } from "@/components/ui/accent";
import { PageContact } from "@/components/ui/page-contact";
import { siteConfig } from "@/config/site";

const title = "Ez Prep — Clustream";
const description =
  "Exam prep without the clutter. Content curated by experts, the same experience on desktop, mobile and Android, and a price that stays fair.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: {
    title,
    description,
    url: "/products",
    siteName: siteConfig.name,
    type: "website",
  },
};

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: "#0A0C10",
};

export default function ProductsPage() {
  return (
    <PageTransition>
      <main>
        <ProductHero />
        <Highlights />
        <Compare />
        <Features />
        <Devices />
        <Details />
        <BuiltBy />
        <PageContact
          title={
            <>
              Curious about <Accent>Ez Prep?</Accent>
            </>
          }
          text="Write to us and we will get back with answers, not a sales pitch."
          subject="Ez Prep"
        />
      </main>
    </PageTransition>
  );
}
