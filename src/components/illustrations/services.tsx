export function WorkflowArt() {
  return (
    <svg
      viewBox="0 0 520 280"
      role="img"
      aria-label="A language-model workflow: input, workflow step, evaluation and human review, with refinement loops"
      className="block h-auto w-full"
    >
      <defs>
        <marker
          id="wf-ar"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="4"
          orient="auto"
        >
          <path d="M0 0L8 4L0 8Z" fill="#E7B97A" />
        </marker>
      </defs>
      <rect
        x="10"
        y="98"
        width="86"
        height="84"
        rx="18"
        fill="#171C26"
        stroke="#2A3140"
      />
      <rect x="26" y="118" width="54" height="5" rx="2.5" fill="#3A4357" />
      <rect x="26" y="132" width="40" height="5" rx="2.5" fill="#3A4357" />
      <rect x="26" y="146" width="54" height="5" rx="2.5" fill="#3A4357" />
      <rect x="26" y="160" width="30" height="5" rx="2.5" fill="#E7B97A" />
      <path
        d="M100 140H144"
        fill="none"
        stroke="#E7B97A"
        strokeWidth="2"
        markerEnd="url(#wf-ar)"
      />
      <rect
        x="148"
        y="98"
        width="86"
        height="84"
        rx="18"
        fill="#1A1F29"
        stroke="#2F384A"
      />
      <circle cx="170" cy="118" r="5" fill="#E7B97A" />
      <circle cx="212" cy="118" r="5" fill="#8AA4D6" />
      <circle cx="191" cy="162" r="5" fill="#E7B97A" />
      <path
        d="M170 118L212 118M170 118L191 162M212 118L191 162"
        fill="none"
        stroke="#4A5468"
        strokeWidth="2"
      />
      <path
        d="M238 140H282"
        fill="none"
        stroke="#E7B97A"
        strokeWidth="2"
        markerEnd="url(#wf-ar)"
      />
      <rect
        x="286"
        y="98"
        width="86"
        height="84"
        rx="18"
        fill="#1A1F29"
        stroke="#2F384A"
      />
      <circle
        cx="329"
        cy="140"
        r="20"
        fill="none"
        stroke="#8FC59A"
        strokeWidth="2.5"
      />
      <path
        d="M319 140l7 7 13-14"
        fill="none"
        stroke="#8FC59A"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M376 140H420"
        fill="none"
        stroke="#E7B97A"
        strokeWidth="2"
        markerEnd="url(#wf-ar)"
      />
      <rect
        x="424"
        y="98"
        width="86"
        height="84"
        rx="18"
        fill="#1A1F29"
        stroke="#E7B97A"
      />
      <circle
        cx="467"
        cy="127"
        r="10"
        fill="none"
        stroke="#E7B97A"
        strokeWidth="2.5"
      />
      <path
        d="M447 168c2-14 11-20 20-20s18 6 20 20"
        fill="none"
        stroke="#E7B97A"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M329 94C329 36 191 36 191 94"
        fill="none"
        stroke="#E7B97A"
        strokeWidth="2"
        strokeDasharray="5 6"
        markerEnd="url(#wf-ar)"
      />
      <text
        x="260"
        y="44"
        textAnchor="middle"
        className="font-mono"
        fontSize="13"
        fill="#E7B97A"
      >
        refine
      </text>
      <text
        x="53"
        y="216"
        textAnchor="middle"
        className="font-mono"
        fontSize="13"
        fill="#9CA5B8"
      >
        INPUT
      </text>
      <text
        x="191"
        y="216"
        textAnchor="middle"
        className="font-mono"
        fontSize="13"
        fill="#9CA5B8"
      >
        WORKFLOW
      </text>
      <text
        x="329"
        y="216"
        textAnchor="middle"
        className="font-mono"
        fontSize="13"
        fill="#9CA5B8"
      >
        EVALUATE
      </text>
      <text
        x="467"
        y="216"
        textAnchor="middle"
        className="font-mono"
        fontSize="13"
        fill="#9CA5B8"
      >
        REVIEW
      </text>
      <text
        x="260"
        y="262"
        textAnchor="middle"
        className="font-mono"
        fontSize="13"
        fill="#8D95A7"
      >
        tested on real cases, checked by people
      </text>
    </svg>
  );
}

export function HeartbeatArt() {
  return (
    <svg
      viewBox="0 0 520 260"
      role="img"
      aria-label="A steady heartbeat line showing a system kept healthy after launch"
      className="block h-auto w-full"
    >
      <line x1="0" y1="50" x2="520" y2="50" stroke="#1E2430" />
      <line x1="0" y1="110" x2="520" y2="110" stroke="#1E2430" />
      <line x1="0" y1="170" x2="520" y2="170" stroke="#1E2430" />
      <line x1="0" y1="230" x2="520" y2="230" stroke="#1E2430" />
      <line x1="80" y1="20" x2="80" y2="240" stroke="#1E2430" />
      <line x1="160" y1="20" x2="160" y2="240" stroke="#1E2430" />
      <line x1="240" y1="20" x2="240" y2="240" stroke="#1E2430" />
      <line x1="320" y1="20" x2="320" y2="240" stroke="#1E2430" />
      <line x1="400" y1="20" x2="400" y2="240" stroke="#1E2430" />
      <line x1="480" y1="20" x2="480" y2="240" stroke="#1E2430" />
      <path
        d="M0 140H70L84 140L98 96L116 184L134 56L152 168L166 140H300L314 140L328 108L344 172L358 140H500"
        fill="none"
        stroke="#E7B97A"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        className="motion-safe:animate-status"
        cx="500"
        cy="140"
        r="6"
        fill="#E7B97A"
      />
    </svg>
  );
}

export function QuestionArt() {
  return (
    <svg
      viewBox="0 0 460 310"
      role="img"
      aria-label="A question and a clear answer in a conversation"
      className="block h-auto w-full"
    >
      <path
        d="M44 108L34 140L78 108Z"
        fill="#1A1F29"
        stroke="#2F384A"
        strokeLinejoin="round"
      />
      <rect
        x="20"
        y="16"
        width="262"
        height="94"
        rx="22"
        fill="#1A1F29"
        stroke="#2F384A"
      />
      <circle
        cx="62"
        cy="63"
        r="22"
        fill="rgba(231,185,122,0.15)"
        stroke="#E7B97A"
        strokeWidth="1.5"
      />
      <text
        x="62"
        y="72"
        textAnchor="middle"
        className="font-display"
        fontWeight="600"
        fontSize="26"
        fill="#E7B97A"
      >
        ?
      </text>
      <rect x="102" y="44" width="148" height="7" rx="3.5" fill="#4A5468" />
      <rect x="102" y="62" width="112" height="7" rx="3.5" fill="#4A5468" />
      <rect x="102" y="80" width="130" height="7" rx="3.5" fill="#3A4357" />
      <circle cx="44" cy="176" r="4" fill="#3A4357" />
      <circle cx="60" cy="176" r="4" fill="#4A5468" />
      <circle cx="76" cy="176" r="4" fill="#5A6580" />
      <path
        d="M418 244L430 276L384 244Z"
        fill="#171B22"
        stroke="#E7B97A"
        strokeLinejoin="round"
      />
      <rect
        x="178"
        y="146"
        width="262"
        height="100"
        rx="22"
        fill="#171B22"
        stroke="#E7B97A"
      />
      <rect
        x="179"
        y="147"
        width="260"
        height="98"
        rx="21"
        fill="rgba(231,185,122,0.1)"
      />
      <circle cx="220" cy="196" r="20" fill="#E7B97A" />
      <path
        d="M211 196l7 7 13-14"
        fill="none"
        stroke="#1A1206"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="254"
        y="176"
        width="156"
        height="7"
        rx="3.5"
        fill="#E7B97A"
        fillOpacity="0.55"
      />
      <rect
        x="254"
        y="194"
        width="124"
        height="7"
        rx="3.5"
        fill="#E7B97A"
        fillOpacity="0.4"
      />
      <rect
        x="254"
        y="212"
        width="94"
        height="7"
        rx="3.5"
        fill="#E7B97A"
        fillOpacity="0.3"
      />
      <rect
        x="20"
        y="248"
        width="70"
        height="46"
        rx="11"
        fill="#12161E"
        stroke="#3A4357"
      />
      <path
        d="M26 256L55 276L84 256"
        fill="none"
        stroke="#3A4357"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M100 271H168"
        fill="none"
        stroke="#E7B97A"
        strokeWidth="2"
        strokeDasharray="4 6"
        strokeLinecap="round"
      />
    </svg>
  );
}
