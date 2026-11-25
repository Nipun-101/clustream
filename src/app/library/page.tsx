import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = { title: "Library" };

export default function LibraryPage() {
  return <PageHeader title="Library" description="Placeholder page." />;
}
