/** A query and its nearest passages, each tied to a source page. */
export function PassageMap() {
  return (
    <svg
      viewBox="0 0 520 440"
      role="img"
      aria-label="A query point in a map of document passages, linked to its nearest passages, each tied back to a source page"
      className="h-auto w-full max-w-[560px]"
    >
      <defs>
        <marker
          id="h-ar"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="4"
          orient="auto"
        >
          <path d="M0 0L8 4L0 8Z" fill="#E7B97A"></path>
        </marker>
        <radialGradient id="h-g" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#8AA4D6" stopOpacity="0.22"></stop>
          <stop offset="1" stopColor="#8AA4D6" stopOpacity="0"></stop>
        </radialGradient>
      </defs>
      <circle cx="260" cy="200" r="190" fill="url(#h-g)"></circle>
      <circle
        cx="260"
        cy="200"
        r="150"
        fill="none"
        stroke="#2A3140"
        strokeDasharray="3 6"
      ></circle>
      <circle
        cx="260"
        cy="200"
        r="90"
        fill="none"
        stroke="#2A3140"
        strokeDasharray="3 6"
      ></circle>
      <g fill="#3A4357">
        <circle cx="70" cy="90" r="4"></circle>
        <circle cx="110" cy="150" r="4"></circle>
        <circle cx="60" cy="230" r="4"></circle>
        <circle cx="120" cy="300" r="4"></circle>
        <circle cx="200" cy="360" r="4"></circle>
        <circle cx="330" cy="370" r="4"></circle>
        <circle cx="430" cy="320" r="4"></circle>
        <circle cx="460" cy="220" r="4"></circle>
        <circle cx="440" cy="120" r="4"></circle>
        <circle cx="360" cy="50" r="4"></circle>
        <circle cx="230" cy="40" r="4"></circle>
        <circle cx="150" cy="60" r="4"></circle>
        <circle cx="95" cy="190" r="3"></circle>
        <circle cx="400" cy="270" r="3"></circle>
        <circle cx="300" cy="320" r="3"></circle>
        <circle cx="170" cy="250" r="3"></circle>
      </g>
      <g stroke="#E7B97A" strokeWidth="1.6" fill="none">
        <path d="M260 200L205 150"></path>
        <path d="M260 200L330 160"></path>
        <path d="M260 200L315 245"></path>
        <path d="M260 200L215 258"></path>
      </g>
      <g fill="#8AA4D6">
        <circle cx="205" cy="150" r="7"></circle>
        <circle cx="330" cy="160" r="7"></circle>
        <circle cx="315" cy="245" r="7"></circle>
        <circle cx="215" cy="258" r="7"></circle>
      </g>
      <circle cx="260" cy="200" r="11" fill="#E7B97A"></circle>
      <circle
        cx="260"
        cy="200"
        r="20"
        fill="none"
        stroke="#E7B97A"
        strokeOpacity="0.5"
      ></circle>
      <text
        x="260"
        y="236"
        textAnchor="middle"
        className="font-mono"
        fontSize="12"
        fill="#F3D9AE"
      >
        QUERY
      </text>
      <rect
        x="20"
        y="380"
        width="130"
        height="44"
        rx="12"
        fill="#151A23"
        stroke="#2A3140"
      ></rect>
      <rect x="32" y="392" width="40" height="5" rx="2.5" fill="#E7B97A"></rect>
      <rect x="32" y="404" width="90" height="5" rx="2.5" fill="#3A4357"></rect>
      <text
        x="85"
        y="372"
        textAnchor="middle"
        className="font-mono"
        fontSize="11"
        fill="#9CA5B8"
      >
        SOURCE · p.12
      </text>
      <path
        d="M205 157C150 220 120 330 100 378"
        stroke="#8AA4D6"
        strokeWidth="1.4"
        strokeDasharray="4 5"
        fill="none"
        markerEnd="url(#h-ar)"
      ></path>
      <rect
        x="390"
        y="18"
        width="116"
        height="44"
        rx="12"
        fill="#151A23"
        stroke="#2A3140"
      ></rect>
      <circle cx="494" cy="40" r="5" fill="#8FC59A"></circle>
      <rect x="402" y="30" width="40" height="5" rx="2.5" fill="#E7B97A"></rect>
      <rect x="402" y="42" width="64" height="5" rx="2.5" fill="#3A4357"></rect>
      <text
        x="448"
        y="82"
        textAnchor="middle"
        className="font-mono"
        fontSize="11"
        fill="#9CA5B8"
      >
        VERIFIED
      </text>
      <path
        d="M337 154C370 120 380 90 400 64"
        stroke="#8AA4D6"
        strokeWidth="1.4"
        strokeDasharray="4 5"
        fill="none"
        markerEnd="url(#h-ar)"
      ></path>
    </svg>
  );
}

/** Document to cited passage. */
export function RetrievalDiagram() {
  return (
    <svg
      viewBox="0 0 520 300"
      role="img"
      aria-label="Documents are split into chunks, turned into embeddings, stored in a vector index, retrieved, reranked and returned with citations"
      className="h-auto w-full"
    >
      <defs>
        <marker
          id="r-ar"
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
        y="40"
        width="70"
        height="92"
        rx="10"
        fill="#171C26"
        stroke="#34405A"
      ></rect>
      <rect
        x="22"
        y="56"
        width="30"
        height="6"
        rx="3"
        fill="#E7B97A"
        fillOpacity="0.8"
      ></rect>
      <rect x="22" y="70" width="46" height="5" rx="2.5" fill="#2E3646"></rect>
      <rect x="22" y="82" width="38" height="5" rx="2.5" fill="#2E3646"></rect>
      <rect x="22" y="94" width="46" height="5" rx="2.5" fill="#2E3646"></rect>
      <path
        d="M86 86H118"
        stroke="#E7B97A"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#r-ar)"
      ></path>
      <rect
        x="124"
        y="40"
        width="64"
        height="26"
        rx="8"
        fill="#1A1F29"
        stroke="#2F384A"
      ></rect>
      <rect
        x="124"
        y="74"
        width="64"
        height="26"
        rx="8"
        fill="#1A1F29"
        stroke="#2F384A"
      ></rect>
      <rect
        x="124"
        y="108"
        width="64"
        height="26"
        rx="8"
        fill="#1A1F29"
        stroke="#2F384A"
      ></rect>
      <path
        d="M194 86H226"
        stroke="#E7B97A"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#r-ar)"
      ></path>
      <rect
        x="232"
        y="40"
        width="110"
        height="94"
        rx="14"
        fill="#1A1F29"
        stroke="#2F384A"
      ></rect>
      <circle cx="262" cy="70" r="4" fill="#8AA4D6"></circle>
      <circle cx="296" cy="62" r="4" fill="#8AA4D6" fillOpacity="0.6"></circle>
      <circle cx="318" cy="92" r="4" fill="#E7B97A"></circle>
      <circle cx="276" cy="106" r="4" fill="#8AA4D6" fillOpacity="0.6"></circle>
      <circle cx="302" cy="112" r="4" fill="#E7B97A"></circle>
      <text
        x="287"
        y="160"
        textAnchor="middle"
        className="font-mono"
        fontSize="12"
        fill="#9CA5B8"
      >
        VECTOR INDEX
      </text>
      <path
        d="M348 86H380"
        stroke="#E7B97A"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#r-ar)"
      ></path>
      <rect
        x="386"
        y="40"
        width="124"
        height="26"
        rx="8"
        fill="#E7B97A"
        fillOpacity="0.14"
        stroke="#E7B97A"
      ></rect>
      <rect
        x="386"
        y="74"
        width="124"
        height="26"
        rx="8"
        fill="#1A1F29"
        stroke="#2F384A"
      ></rect>
      <rect
        x="386"
        y="108"
        width="124"
        height="26"
        rx="8"
        fill="#1A1F29"
        stroke="#2F384A"
        strokeOpacity="0.6"
      ></rect>
      <text
        x="448"
        y="57"
        textAnchor="middle"
        className="font-mono"
        fontSize="11"
        fill="#F3D9AE"
      >
        1 · p.12
      </text>
      <text
        x="448"
        y="91"
        textAnchor="middle"
        className="font-mono"
        fontSize="11"
        fill="#C5CCDA"
      >
        2 · p.40
      </text>
      <text
        x="448"
        y="125"
        textAnchor="middle"
        className="font-mono"
        fontSize="11"
        fill="#9CA5B8"
      >
        3 · p.7
      </text>
      <text
        x="448"
        y="160"
        textAnchor="middle"
        className="font-mono"
        fontSize="12"
        fill="#9CA5B8"
      >
        RERANK
      </text>
      <text
        x="46"
        y="160"
        textAnchor="middle"
        className="font-mono"
        fontSize="12"
        fill="#9CA5B8"
      >
        DOCUMENT
      </text>
      <text
        x="156"
        y="160"
        textAnchor="middle"
        className="font-mono"
        fontSize="12"
        fill="#9CA5B8"
      >
        CHUNKS
      </text>
      <rect
        x="10"
        y="200"
        width="500"
        height="80"
        rx="16"
        fill="#12161E"
        stroke="#232A38"
      ></rect>
      <rect x="28" y="218" width="170" height="8" rx="4" fill="#3A4357"></rect>
      <rect x="28" y="236" width="300" height="6" rx="3" fill="#2E3646"></rect>
      <rect x="28" y="250" width="240" height="6" rx="3" fill="#2E3646"></rect>
      <rect
        x="384"
        y="226"
        width="108"
        height="30"
        rx="15"
        fill="#8FC59A"
        fillOpacity="0.14"
        stroke="#8FC59A"
      ></rect>
      <text
        x="438"
        y="246"
        textAnchor="middle"
        className="font-mono"
        fontSize="11"
        fill="#8FC59A"
      >
        CITED · p.12
      </text>
    </svg>
  );
}

/** A router choosing a model within a budget. */
export function RoutingDiagram() {
  return (
    <svg
      viewBox="0 0 520 300"
      role="img"
      aria-label="A decision model reads each request and routes it to a local model, a mid-size model or a large model, within a cost budget"
      className="h-auto w-full"
    >
      <defs>
        <marker
          id="t-ar"
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
        y="118"
        width="86"
        height="54"
        rx="12"
        fill="#151A23"
        stroke="#2A3140"
      ></rect>
      <text
        x="53"
        y="150"
        textAnchor="middle"
        className="font-mono"
        fontSize="12"
        fill="#C5CCDA"
      >
        REQUEST
      </text>
      <path
        d="M100 145H130"
        stroke="#E7B97A"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#t-ar)"
      ></path>
      <rect
        x="136"
        y="100"
        width="124"
        height="90"
        rx="18"
        fill="#E7B97A"
        fillOpacity="0.12"
        stroke="#E7B97A"
      ></rect>
      <text
        x="198"
        y="136"
        textAnchor="middle"
        className="font-sans"
        fontSize="16"
        fontWeight="600"
        fill="#F3D9AE"
      >
        Router
      </text>
      <text
        x="198"
        y="158"
        textAnchor="middle"
        className="font-mono"
        fontSize="11"
        fill="#C5CCDA"
      >
        decision model
      </text>
      <text
        x="198"
        y="176"
        textAnchor="middle"
        className="font-mono"
        fontSize="11"
        fill="#C5CCDA"
      >
        + budget
      </text>
      <path
        d="M264 125C300 100 320 62 350 62"
        stroke="#E7B97A"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#t-ar)"
      ></path>
      <path
        d="M264 145H346"
        stroke="#E7B97A"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#t-ar)"
      ></path>
      <path
        d="M264 165C300 190 320 228 350 228"
        stroke="#E7B97A"
        strokeWidth="2"
        strokeDasharray="5 6"
        fill="none"
        markerEnd="url(#t-ar)"
      ></path>
      <rect
        x="352"
        y="38"
        width="158"
        height="48"
        rx="12"
        fill="#1A1F29"
        stroke="#2F384A"
      ></rect>
      <text
        x="431"
        y="60"
        textAnchor="middle"
        className="font-mono"
        fontSize="12"
        fill="#F2F4F8"
      >
        LOCAL · EDGE
      </text>
      <text
        x="431"
        y="76"
        textAnchor="middle"
        className="font-mono"
        fontSize="10"
        fill="#8FC59A"
      >
        lowest cost
      </text>
      <rect
        x="352"
        y="121"
        width="158"
        height="48"
        rx="12"
        fill="#1A1F29"
        stroke="#2F384A"
      ></rect>
      <text
        x="431"
        y="143"
        textAnchor="middle"
        className="font-mono"
        fontSize="12"
        fill="#F2F4F8"
      >
        MID-SIZE
      </text>
      <text
        x="431"
        y="159"
        textAnchor="middle"
        className="font-mono"
        fontSize="10"
        fill="#9CA5B8"
      >
        default path
      </text>
      <rect
        x="352"
        y="204"
        width="158"
        height="48"
        rx="12"
        fill="#1A1F29"
        stroke="#2F384A"
      ></rect>
      <text
        x="431"
        y="226"
        textAnchor="middle"
        className="font-mono"
        fontSize="12"
        fill="#F2F4F8"
      >
        LARGE
      </text>
      <text
        x="431"
        y="242"
        textAnchor="middle"
        className="font-mono"
        fontSize="10"
        fill="#E7B97A"
      >
        only when needed
      </text>
      <rect x="10" y="256" width="250" height="10" rx="5" fill="#1A1F29"></rect>
      <rect x="10" y="256" width="96" height="10" rx="5" fill="#E7B97A"></rect>
      <text x="10" y="288" className="font-mono" fontSize="11" fill="#9CA5B8">
        BUDGET USED
      </text>
    </svg>
  );
}

/** Orchestrator, workers, validator and approval. */
export function SystemsDiagram() {
  return (
    <svg
      viewBox="0 0 520 300"
      role="img"
      aria-label="An orchestrator hands tasks to specialist workers, a validator checks each result, failed checks retry, and risky steps pause for human approval"
      className="h-auto w-full"
    >
      <defs>
        <marker
          id="m-ar"
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
        x="190"
        y="10"
        width="140"
        height="50"
        rx="14"
        fill="#1A1F29"
        stroke="#2F384A"
      ></rect>
      <text
        x="260"
        y="40"
        textAnchor="middle"
        className="font-sans"
        fontSize="15"
        fontWeight="500"
        fill="#F2F4F8"
      >
        Orchestrator
      </text>
      <path
        d="M230 62L100 112"
        stroke="#3A4357"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#m-ar)"
      ></path>
      <path
        d="M260 62V112"
        stroke="#3A4357"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#m-ar)"
      ></path>
      <path
        d="M290 62L420 112"
        stroke="#3A4357"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#m-ar)"
      ></path>
      <rect
        x="30"
        y="118"
        width="140"
        height="48"
        rx="12"
        fill="#151A23"
        stroke="#2A3140"
      ></rect>
      <text
        x="100"
        y="147"
        textAnchor="middle"
        className="font-mono"
        fontSize="12"
        fill="#C5CCDA"
      >
        RETRIEVER
      </text>
      <rect
        x="190"
        y="118"
        width="140"
        height="48"
        rx="12"
        fill="#151A23"
        stroke="#2A3140"
      ></rect>
      <text
        x="260"
        y="147"
        textAnchor="middle"
        className="font-mono"
        fontSize="12"
        fill="#C5CCDA"
      >
        EXTRACTOR
      </text>
      <rect
        x="350"
        y="118"
        width="140"
        height="48"
        rx="12"
        fill="#151A23"
        stroke="#2A3140"
      ></rect>
      <text
        x="420"
        y="147"
        textAnchor="middle"
        className="font-mono"
        fontSize="12"
        fill="#C5CCDA"
      >
        WRITER
      </text>
      <path
        d="M100 168V196H230"
        stroke="#3A4357"
        strokeWidth="2"
        fill="none"
      ></path>
      <path
        d="M260 168V196"
        stroke="#3A4357"
        strokeWidth="2"
        fill="none"
      ></path>
      <path
        d="M420 168V196H290"
        stroke="#3A4357"
        strokeWidth="2"
        fill="none"
      ></path>
      <rect
        x="170"
        y="200"
        width="180"
        height="52"
        rx="14"
        fill="#E7B97A"
        fillOpacity="0.12"
        stroke="#E7B97A"
      ></rect>
      <text
        x="260"
        y="231"
        textAnchor="middle"
        className="font-mono"
        fontSize="12"
        fontWeight="500"
        fill="#F3D9AE"
      >
        VALIDATOR
      </text>
      <path
        d="M350 226H400"
        stroke="#E7B97A"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#m-ar)"
      ></path>
      <rect
        x="406"
        y="204"
        width="100"
        height="44"
        rx="22"
        fill="#8FC59A"
        fillOpacity="0.14"
        stroke="#8FC59A"
      ></rect>
      <text
        x="456"
        y="231"
        textAnchor="middle"
        className="font-mono"
        fontSize="11"
        fill="#8FC59A"
      >
        APPROVE
      </text>
      <path
        d="M170 226H60C30 226 30 140 30 140"
        stroke="#E7B97A"
        strokeWidth="2"
        strokeDasharray="5 6"
        fill="none"
      ></path>
      <text
        x="96"
        y="248"
        textAnchor="middle"
        className="font-mono"
        fontSize="11"
        fill="#E7B97A"
      >
        retry · back-off
      </text>
      <text
        x="260"
        y="284"
        textAnchor="middle"
        className="font-mono"
        fontSize="11"
        fill="#9CA5B8"
      >
        BOUNDED STEPS · TYPED OUTPUTS · HUMAN CHECKPOINT
      </text>
    </svg>
  );
}
