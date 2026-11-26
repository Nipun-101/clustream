/** A request through retrieval, routing and verification. */
export function AppliedIntelligenceIllustration() {
  return (
    <svg
      viewBox="0 0 440 380"
      role="img"
      aria-label="A request passes through retrieval, a router that picks a model, and a verification step before an answer is returned; failed checks loop back"
      className="h-auto w-full max-w-[440px]"
    >
      <defs>
        <marker
          id="gr-ar"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="4"
          orient="auto"
        >
          <path d="M0 0L8 4L0 8Z" fill="#E7B97A"></path>
        </marker>
      </defs>
      <rect
        x="10"
        y="20"
        width="110"
        height="46"
        rx="12"
        fill="#151A23"
        stroke="#2A3140"
      ></rect>
      <text
        x="65"
        y="48"
        textAnchor="middle"
        className="font-mono"
        fontSize="12"
        fill="#C5CCDA"
      >
        REQUEST
      </text>
      <path
        d="M65 70V100"
        stroke="#E7B97A"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#gr-ar)"
      ></path>
      <rect
        x="10"
        y="106"
        width="210"
        height="66"
        rx="14"
        fill="#1A1F29"
        stroke="#2F384A"
      ></rect>
      <circle cx="40" cy="139" r="4" fill="#8AA4D6"></circle>
      <circle cx="62" cy="128" r="4" fill="#8AA4D6" fillOpacity="0.6"></circle>
      <circle cx="64" cy="150" r="4" fill="#8AA4D6" fillOpacity="0.6"></circle>
      <circle cx="88" cy="139" r="4" fill="#E7B97A"></circle>
      <text
        x="190"
        y="144"
        textAnchor="end"
        className="font-mono"
        fontSize="12"
        fill="#C5CCDA"
      >
        RETRIEVE
      </text>
      <path
        d="M115 176V206"
        stroke="#E7B97A"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#gr-ar)"
      ></path>
      <rect
        x="10"
        y="212"
        width="210"
        height="52"
        rx="14"
        fill="#1A1F29"
        stroke="#2F384A"
      ></rect>
      <text
        x="115"
        y="243"
        textAnchor="middle"
        className="font-mono"
        fontSize="12"
        fill="#C5CCDA"
      >
        ROUTE · BUDGET
      </text>
      <path
        d="M220 238H262"
        stroke="#E7B97A"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#gr-ar)"
      ></path>
      <rect
        x="268"
        y="106"
        width="150"
        height="46"
        rx="12"
        fill="#151A23"
        stroke="#2A3140"
      ></rect>
      <text
        x="343"
        y="134"
        textAnchor="middle"
        className="font-mono"
        fontSize="12"
        fill="#C5CCDA"
      >
        LOCAL MODEL
      </text>
      <rect
        x="268"
        y="214"
        width="150"
        height="46"
        rx="12"
        fill="#151A23"
        stroke="#2A3140"
      ></rect>
      <text
        x="343"
        y="242"
        textAnchor="middle"
        className="font-mono"
        fontSize="12"
        fill="#C5CCDA"
      >
        LARGER MODEL
      </text>
      <path
        d="M343 266V300"
        stroke="#E7B97A"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#gr-ar)"
      ></path>
      <path
        d="M343 152V176H300"
        stroke="#3A4357"
        strokeWidth="2"
        fill="none"
      ></path>
      <rect
        x="268"
        y="306"
        width="150"
        height="52"
        rx="14"
        fill="#E7B97A"
        fillOpacity="0.12"
        stroke="#E7B97A"
      ></rect>
      <text
        x="343"
        y="337"
        textAnchor="middle"
        className="font-mono"
        fontSize="12"
        fontWeight="500"
        fill="#F3D9AE"
      >
        VERIFY
      </text>
      <path
        d="M268 332H115V270"
        stroke="#E7B97A"
        strokeWidth="2"
        strokeDasharray="5 6"
        fill="none"
        markerEnd="url(#gr-ar)"
      ></path>
      <text
        x="190"
        y="324"
        textAnchor="middle"
        className="font-mono"
        fontSize="11"
        fill="#E7B97A"
      >
        retry
      </text>
      <circle cx="425" cy="332" r="4" fill="#8FC59A"></circle>
    </svg>
  );
}
