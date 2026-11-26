import type { ReactNode, SVGProps } from "react";

function Icon({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
}

function icon(paths: ReactNode) {
  return function DesignIcon(props: SVGProps<SVGSVGElement>) {
    return <Icon {...props}>{paths}</Icon>;
  };
}

export const DocumentIcon = icon(
  <>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z"></path>
    <path d="M14 3v5h5"></path>
    <path d="M9 13h6"></path>
    <path d="M9 17h4"></path>
  </>,
);

export const MonitorIcon = icon(
  <>
    <rect x="3" y="4" width="18" height="13" rx="2.5"></rect>
    <path d="M8 21h8"></path>
    <path d="M12 17v4"></path>
  </>,
);

export const DatabaseIcon = icon(
  <>
    <ellipse cx="12" cy="6" rx="8" ry="3"></ellipse>
    <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"></path>
    <path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"></path>
  </>,
);

export const PhoneIcon = icon(
  <>
    <rect x="7" y="2.5" width="10" height="19" rx="2.5"></rect>
    <path d="M11 18.5h2"></path>
  </>,
);

export const CloudIcon = icon(
  <>
    <path d="M7 18a4.5 4.5 0 0 1-.5-8.97A6 6 0 0 1 18 8.5 4 4 0 0 1 17.5 18H7Z"></path>
  </>,
);

export const FlowIcon = icon(
  <>
    <circle cx="5" cy="6" r="2"></circle>
    <circle cx="5" cy="18" r="2"></circle>
    <circle cx="19" cy="12" r="2.5"></circle>
    <path d="M7 6h4a3 3 0 0 1 3 3v1.5"></path>
    <path d="M7 18h4a3 3 0 0 0 3-3v-1.5"></path>
  </>,
);

export const BracketsIcon = icon(
  <>
    <path d="M8 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2"></path>
    <path d="M16 4h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-2"></path>
    <path d="M9 9h6"></path>
    <path d="M9 15h6"></path>
  </>,
);

export const ScanIcon = icon(
  <>
    <path d="M4 8V6a2 2 0 0 1 2-2h2"></path>
    <path d="M16 4h2a2 2 0 0 1 2 2v2"></path>
    <path d="M20 16v2a2 2 0 0 1-2 2h-2"></path>
    <path d="M8 20H6a2 2 0 0 1-2-2v-2"></path>
    <path d="M8 12h8"></path>
  </>,
);

export const TrendIcon = icon(
  <>
    <path d="M4 19V5"></path>
    <path d="M4 19h16"></path>
    <path d="M8 15l4-5 3 3 5-7"></path>
  </>,
);

export const CheckSquareIcon = icon(
  <>
    <path d="M9 11l3 3 8-8"></path>
    <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9"></path>
  </>,
);

export const ScreenIcon = icon(
  <>
    <rect x="3" y="4" width="18" height="12" rx="2"></rect>
    <path d="M8 20h8"></path>
    <path d="M12 16v4"></path>
  </>,
);

export const PulseIcon = icon(
  <>
    <path d="M3 12h4l3-8 4 16 3-8h4"></path>
  </>,
);

export const LockIcon = icon(
  <>
    <rect x="5" y="11" width="14" height="10" rx="2"></rect>
    <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
  </>,
);

export const ShieldIcon = icon(
  <>
    <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6Z"></path>
    <path d="M9 12l2 2 4-4"></path>
  </>,
);

export const WifiIcon = icon(
  <>
    <path d="M5 12.5a10 10 0 0 1 14 0"></path>
    <path d="M8.5 16a5 5 0 0 1 7 0"></path>
    <circle cx="12" cy="19" r="1"></circle>
  </>,
);
