"use client";

import { PageHeader } from "@/components/page-header";

export default function ErrorPage({ retry }: { retry: () => void }) {
  return (
    <div className="space-y-4">
      <PageHeader title="Something went wrong" />
      <button
        type="button"
        onClick={() => retry()}
        className="h-11 rounded-lg bg-foreground px-4 text-sm font-medium text-background"
      >
        Try again
      </button>
    </div>
  );
}
