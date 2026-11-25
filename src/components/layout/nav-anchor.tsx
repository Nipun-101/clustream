"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

/**
 * Moving to another page goes through `next/link`, so it can transition.
 * Jumps within the current page (and mailto) stay plain anchors, leaving the
 * scrolling to the browser. Choosing the current page returns to its top.
 */
export function NavAnchor({
  href,
  onClick,
  ...props
}: Omit<ComponentProps<"a">, "href"> & { href: string }) {
  const pathname = usePathname();
  const [path, hash] = href.split("#");
  const isRoute = href.startsWith("/") && !(hash && path === pathname);

  return isRoute ? (
    <Link
      href={href}
      onClick={(event) => {
        onClick?.(event);
        if (href === pathname) window.scrollTo({ top: 0 });
      }}
      {...props}
    />
  ) : (
    <a href={href} onClick={onClick} {...props} />
  );
}
