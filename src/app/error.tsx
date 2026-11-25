"use client";

export default function ErrorPage({ retry }: { retry: () => void }) {
  return (
    <main className="container-page pt-40 pb-24 text-center">
      <h1 className="text-3xl text-heading">Something went wrong</h1>
      <button
        type="button"
        onClick={() => retry()}
        className="mt-6 min-h-11 rounded-xl bg-sand px-5 text-sm font-semibold text-sand-ink"
      >
        Try again
      </button>
    </main>
  );
}
