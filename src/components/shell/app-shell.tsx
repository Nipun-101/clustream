import type { ReactNode } from "react";
import { BottomNav } from "./bottom-nav";
import { Header } from "./header";
import { Sidebar } from "./sidebar";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh">
      <a
        href="#main"
        className="sr-only z-50 rounded-md bg-foreground px-4 py-2 text-background focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Header />
        {/* Bottom padding keeps content clear of the fixed tab bar. */}
        <main
          id="main"
          className="mx-auto w-full max-w-6xl flex-1 pt-6 pr-[max(1rem,env(safe-area-inset-right))] pb-[calc(5.5rem+env(safe-area-inset-bottom))] pl-[max(1rem,env(safe-area-inset-left))] md:px-8 md:py-8"
        >
          {children}
        </main>
        <BottomNav />
      </div>
    </div>
  );
}
