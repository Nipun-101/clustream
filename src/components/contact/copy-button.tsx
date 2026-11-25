"use client";

import { useEffect, useState } from "react";

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // The clipboard API is missing on insecure origins and older browsers.
    const field = document.createElement("textarea");
    field.value = text;
    document.body.appendChild(field);
    field.select();
    const copied = document.execCommand("copy");
    field.remove();
    return copied;
  }
}

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <button
      type="button"
      onClick={async () => setCopied(await copyText(text))}
      className="h-11 cursor-pointer rounded-xl border border-sand/55 px-[18px] text-sm font-semibold text-sand transition-colors hover:bg-sand/12"
    >
      <span aria-live="polite">{copied ? "Copied" : "Copy address"}</span>
    </button>
  );
}
