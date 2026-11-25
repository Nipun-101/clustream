import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = { title: "Explore" };

export default function ExplorePage() {
  return <PageHeader title="Explore" description="Placeholder page." />;
}
