import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function WebIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4.5" width="18" height="15" rx="2.2" />
      <path d="M3 8.5h18" />
      <path d="M6.3 6.5h.01M8.7 6.5h.01" />
      <path d="M7.5 13.2l-2 2.2 2 2.2M12.5 13.2l2 2.2-2 2.2" />
    </svg>
  );
}

export function MobileIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.4" />
      <path d="M6.5 6h11M6.5 17.5h11" />
      <path d="M11 19.6h2" />
    </svg>
  );
}

export function GearIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="3.1" />
      <path d="M12 3.5v2.4M12 18.1v2.4M20.5 12h-2.4M5.9 12H3.5M17.7 6.3l-1.7 1.7M8 16l-1.7 1.7M17.7 17.7L16 16M8 8L6.3 6.3" />
    </svg>
  );
}

export function PaletteIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5c-4.7 0-8.5 3.6-8.5 8 0 3.4 2.5 4.8 4.4 4.8.9 0 1.3-.5 1.3-1.1 0-.5-.4-.9-.4-1.6 0-1.2 1-2 2.4-2h1.9c2.6 0 4.9-1.9 4.9-4.7 0-3.5-3-5.4-6-5.4Z" />
      <circle cx="8.3" cy="10.2" r=".9" fill="currentColor" stroke="none" />
      <circle cx="11.3" cy="7.6" r=".9" fill="currentColor" stroke="none" />
      <circle cx="14.9" cy="8.6" r=".9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CartIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 4.5h2l1.6 10.2a2 2 0 0 0 2 1.7h7.2a2 2 0 0 0 2-1.6l1.2-6.4H6.4" />
      <circle cx="10" cy="19.5" r="1.2" />
      <circle cx="17" cy="19.5" r="1.2" />
    </svg>
  );
}

export function ApiIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="9" width="6" height="6" rx="1.4" />
      <rect x="15" y="9" width="6" height="6" rx="1.4" />
      <path d="M9 12h6" strokeDasharray="2.2 2.2" />
      <path d="M6 9V6.5M18 9V6.5M6 15v2.5M18 15v2.5" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.2 4.5 6v5.6c0 4.4 3 7.2 7.5 9.2 4.5-2 7.5-4.8 7.5-9.2V6L12 3.2Z" />
      <path d="M8.7 12.2l2.1 2.1 4.3-4.5" />
    </svg>
  );
}

export function RocketIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M13.5 3.8c3 .5 5 2.6 5.6 5.6-2 3.4-4.3 5.6-7.1 7.2l-3.5-3.5c1.6-2.8 3.8-5.1 5-9.3Z" />
      <circle cx="14.3" cy="9.7" r="1.3" />
      <path d="M8.6 13.4 5.6 14.7c-.5.2-.7.8-.4 1.3l2.6 2.6c.5.3 1.1.1 1.3-.4l1.3-3" />
      <path d="M6.4 17.6c-1 .3-1.6 1-1.9 2 1 .3 1.7-.3 2-1.9Z" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 12.5 9 17l10.5-11" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ChatIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5.5h16v10.5H9.5L5.5 19v-3H4V5.5Z" />
      <path d="M8 9.3h8M8 12h5.5" />
    </svg>
  );
}

export function ScaleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5v17M6 7.5l-3.2 6.4a3.4 3.4 0 0 0 6.4 0L6 7.5ZM18 7.5l-3.2 6.4a3.4 3.4 0 0 0 6.4 0L18 7.5Z" />
      <path d="M4.6 7.5h2.8M15.6 7.5h2.8M8.5 5.3h7" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12.5" r="8" />
      <path d="M12 8v4.7l3.2 2" />
      <path d="M9.5 2.6h5" />
    </svg>
  );
}

export function CoinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="12" cy="7.5" rx="8" ry="3.2" />
      <path d="M4 7.5V16c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2V7.5" />
      <path d="M4 11.8c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2" />
    </svg>
  );
}

export function HandshakeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 11.5 6 8l3 2.4M21.5 11.5 18 8l-6.4 5c-.6.5-.6 1.4-.1 1.9.5.5 1.3.5 1.9 0" />
      <path d="M9 10.4l3.6 3c.6.5.6 1.4.1 1.9-.5.5-1.3.5-1.9.1l-1-.8" />
      <path d="M2.5 11.5V17h3.7M21.5 11.5V17h-3.4" />
    </svg>
  );
}

export function BracketLogo(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M11 8 4 16l7 8"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 8l7 8-7 8"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M18.5 6.5l-5 19" stroke="var(--accent)" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.4M12 19.1v2.4M4.6 12H2.2M21.8 12h-2.4M6.3 6.3 4.6 4.6M19.4 19.4l-1.7-1.7M17.7 6.3l1.7-1.7M4.6 19.4l1.7-1.7" />
    </svg>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M19.5 14.2A8 8 0 1 1 9.8 4.5a6.4 6.4 0 0 0 9.7 9.7Z" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 3.2l2.6 5.6 6 .7-4.5 4.2 1.2 6-5.3-3-5.3 3 1.2-6-4.5-4.2 6-.7L12 3.2Z" />
    </svg>
  );
}

export const serviceIconMap = {
  web: WebIcon,
  mobile: MobileIcon,
  gear: GearIcon,
  palette: PaletteIcon,
  cart: CartIcon,
  api: ApiIcon,
  shield: ShieldIcon,
  rocket: RocketIcon,
};

export const whyIconMap = {
  chat: ChatIcon,
  scale: ScaleIcon,
  clock: ClockIcon,
  coin: CoinIcon,
  handshake: HandshakeIcon,
};
