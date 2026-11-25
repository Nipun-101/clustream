import Link from "next/link";
import { siteConfig } from "@/config/site";

/** Top bar for small screens. The sidebar takes over from `md` up. */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 pt-[env(safe-area-inset-top)] backdrop-blur md:hidden">
      <div className="flex h-14 items-center pr-[max(1rem,env(safe-area-inset-right))] pl-[max(1rem,env(safe-area-inset-left))]">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {siteConfig.name}
        </Link>
      </div>
    </header>
  );
}
