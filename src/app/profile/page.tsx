import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = { title: "Profile" };

export default function ProfilePage() {
  return <PageHeader title="Profile" description="Placeholder page." />;
}
