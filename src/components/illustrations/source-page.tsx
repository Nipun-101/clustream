/** Skeleton drawing of a source PDF page, with a chunk boundary. */
export function SourcePage() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 210 260"
      className="mx-auto h-auto w-full max-w-[210px]"
    >
      <rect
        x="0.5"
        y="0.5"
        width="209"
        height="259"
        rx="12"
        fill="#171c27"
        stroke="#2a3140"
      />
      <rect
        x="19"
        y="21"
        width="94"
        height="8"
        rx="4"
        className="fill-sand"
        opacity="0.75"
      />
      <rect
        x="19.5"
        y="88.5"
        width="171"
        height="52"
        rx="8"
        fill="#1c2230"
        stroke="#2a3140"
      />
      <g fill="#2e3646">
        {[
          [46, 172],
          [61, 147],
          [157, 172],
          [172, 157],
          [186, 172],
          [201, 115],
          [226, 63],
        ].map(([y, width]) => (
          <rect key={y} x="19" y={y} width={width} height="6" rx="3" />
        ))}
      </g>
      <g fill="#3a4357">
        <rect x="29" y="101" width="125" height="6" rx="3" />
        <rect x="29" y="117" width="94" height="6" rx="3" />
      </g>
      <path
        d="M6 147H204"
        className="stroke-slate2"
        strokeWidth="2"
        strokeDasharray="5 4"
      />
    </svg>
  );
}
