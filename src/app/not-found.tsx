import Link from "next/link";
import { PageHeader } from "@/components/page-header";

export default function NotFound() {
  return (
    <div className="space-y-4">
      <PageHeader title="Page not found" />
      <Link href="/" className="font-medium underline">
        Back to home
      </Link>
    </div>
  );
}
