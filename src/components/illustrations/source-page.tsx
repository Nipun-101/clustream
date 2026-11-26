/** Skeleton drawing of a source PDF page, with a chunk boundary. */
export function SourcePage() {
  return (
    <svg
      viewBox="0 0 220 260"
      role="img"
      aria-label="A scanned document page being read"
      className="mx-auto h-auto w-full max-w-[230px]"
    >
      <rect
        x="10"
        y="6"
        width="200"
        height="248"
        rx="12"
        fill="#161B25"
        stroke="#2A3140"
      ></rect>
      <rect
        x="28"
        y="26"
        width="90"
        height="8"
        rx="4"
        fill="#E7B97A"
        fillOpacity="0.75"
      ></rect>
      <rect x="28" y="50" width="164" height="6" rx="3" fill="#2E3646"></rect>
      <rect x="28" y="64" width="140" height="6" rx="3" fill="#2E3646"></rect>
      <rect
        x="28"
        y="90"
        width="164"
        height="50"
        rx="8"
        fill="#1C2230"
        stroke="#2A3140"
      ></rect>
      <rect x="38" y="102" width="120" height="6" rx="3" fill="#3A4357"></rect>
      <rect x="38" y="118" width="90" height="6" rx="3" fill="#3A4357"></rect>
      <rect x="28" y="156" width="164" height="6" rx="3" fill="#2E3646"></rect>
      <rect x="28" y="170" width="150" height="6" rx="3" fill="#2E3646"></rect>
      <rect x="28" y="184" width="164" height="6" rx="3" fill="#2E3646"></rect>
      <rect x="28" y="198" width="110" height="6" rx="3" fill="#2E3646"></rect>
      <rect x="28" y="222" width="60" height="6" rx="3" fill="#2E3646"></rect>
      <line
        x1="16"
        y1="146"
        x2="204"
        y2="146"
        stroke="#8AA4D6"
        strokeWidth="2"
        strokeDasharray="5 5"
      ></line>
    </svg>
  );
}
