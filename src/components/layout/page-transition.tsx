import { type ReactNode, ViewTransition } from "react";

/** Wrap each page in this to fade between routes. Styles are in globals.css. */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      {children}
    </ViewTransition>
  );
}
