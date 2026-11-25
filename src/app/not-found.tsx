import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-page pt-40 pb-24 text-center">
      <h1 className="text-3xl text-heading">Page not found</h1>
      <Link
        href="/"
        className="mt-6 inline-flex min-h-11 items-center rounded-xl bg-sand px-5 text-sm font-semibold text-sand-ink"
      >
        Back to home
      </Link>
    </main>
  );
}
