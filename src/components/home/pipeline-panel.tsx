import type { ReactNode } from "react";
import { SourcePage } from "@/components/illustrations/source-page";

const stages = [
  { name: "Ingest", detail: "PDFs, scans, images" },
  { name: "Read", detail: "OCR that understands layout" },
  { name: "Chunk", detail: "Splits that follow the document" },
  { name: "Validate", detail: "Checked against your schema" },
  { name: "Recover", detail: "Retry with back-off", retrying: true },
];

function Key({ children }: { children: string }) {
  return <span className="text-slate2">&quot;{children}&quot;</span>;
}

function Value({ children }: { children: ReactNode }) {
  return <span className="text-sand">{children}</span>;
}

function ColumnLabel({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-mono text-[11px] font-medium tracking-[0.1em] text-muted-label uppercase">
      {children}
    </h3>
  );
}

export function PipelinePanel() {
  const placeholder = <Value>&quot;…&quot;</Value>;

  return (
    <section
      aria-label="Illustration of a document pipeline"
      className="relative z-10 mx-auto -mt-[150px] max-w-[1168px] px-6"
    >
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-panel shadow-[0_40px_90px_rgb(0_0_0/0.55)]">
        <div className="flex h-[45px] items-center gap-3 border-b border-line px-5 font-mono text-muted-label">
          <span aria-hidden className="flex gap-2">
            {[0, 1, 2].map((dot) => (
              <span key={dot} className="size-2.5 rounded-full bg-[#2a3040]" />
            ))}
          </span>
          <span className="ml-1 truncate text-xs">pipeline / documents</span>
          <span className="ml-auto text-[11px] tracking-[0.02em]">
            ILLUSTRATIVE
          </span>
        </div>
        <div className="grid divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
          <div className="p-5 pt-6">
            <ColumnLabel>Source · PDF</ColumnLabel>
            <div className="mt-4 pb-2.5">
              <SourcePage />
            </div>
          </div>
          <div className="bg-[#131720] p-5 pt-6">
            <ColumnLabel>Stages</ColumnLabel>
            <ol className="mt-3 divide-y divide-line">
              {stages.map((stage) => (
                <li key={stage.name} className="flex items-center gap-3 py-3.5">
                  <span
                    aria-hidden
                    className={`size-[9px] shrink-0 rounded-full ${
                      stage.retrying
                        ? "bg-sand motion-safe:animate-status"
                        : "bg-ok"
                    }`}
                  />
                  <div>
                    <p className="text-[15px] leading-5 font-semibold text-heading">
                      {stage.name}
                    </p>
                    <p className="font-mono text-[11px] leading-[18px] text-muted-label">
                      {stage.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="min-w-0 p-5 pt-6">
            <ColumnLabel>Output · Your schema</ColumnLabel>
            <pre className="mt-3.5 overflow-x-auto rounded-xl border border-line bg-[#0a0d14] p-4 font-mono text-xs leading-[21px] text-body">
              <code className="font-mono">
                {"{\n  "}
                <Key>title</Key>: {placeholder}
                {",\n  "}
                <Key>doc_type</Key>: {placeholder}
                {",\n  "}
                <Key>subtype</Key>: {placeholder}
                {",\n  "}
                <Key>chunks</Key>: [{placeholder}, {placeholder}]{",\n  "}
                <Key>source_page</Key>: <Value>12</Value>
                {"\n}"}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
