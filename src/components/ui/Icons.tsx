import type { SVGProps } from "react";

/**
 * Icon set.
 *
 * Hand-drawn as inline SVG rather than pulled from a package: the console has no
 * runtime dependencies beyond React, and a dozen 20px glyphs are not worth adding one.
 * Every icon is a 24-box stroke drawing so they share weight and optical size, and they
 * inherit `currentColor` so a single text colour drives icon and label together.
 */

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Icon({ size = 18, children, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  );
}

/* --------------------------------- navigation ------------------------------ */

export const IconHome = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 10.5 12 3l9 7.5" />
    <path d="M5.5 9.5V20h13V9.5" />
    <path d="M9.5 20v-6h5v6" />
  </Icon>
);

export const IconCalendar = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2.5" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </Icon>
);

export const IconRoute = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="6" cy="18" r="2.5" />
    <circle cx="18" cy="6" r="2.5" />
    <path d="M8.5 18h5a4 4 0 0 0 0-8h-3a4 4 0 0 1 0-8h1" />
  </Icon>
);

export const IconUsers = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
    <path d="M16 5.2a3.5 3.5 0 0 1 0 6.6M17.5 14.6A6.5 6.5 0 0 1 21.5 20" />
  </Icon>
);

export const IconDispatch = (p: IconProps) => (
  <Icon {...p}>
    <path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12z" />
  </Icon>
);

export const IconPricing = (p: IconProps) => (
  <Icon {...p}>
    <path d="M20.5 12.5 12.5 20.5a2 2 0 0 1-2.8 0l-6.2-6.2a2 2 0 0 1-.5-1.9l1.6-6a2 2 0 0 1 1.4-1.4l6-1.6a2 2 0 0 1 1.9.5l6.6 6.6a2 2 0 0 1 0 2.8Z" />
    <circle cx="8.5" cy="8.5" r="1.4" />
  </Icon>
);

export const IconCar = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 13.5 5 8a2.5 2.5 0 0 1 2.4-1.7h9.2A2.5 2.5 0 0 1 19 8l2 5.5" />
    <path d="M3 13.5h18V18a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1v-1h-11v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z" />
    <path d="M6.5 16h.01M17.5 16h.01" />
  </Icon>
);

export const IconMoney = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 6.5v11M14.8 9.2A3 3 0 0 0 12 8c-1.7 0-2.8.8-2.8 2s1.1 1.8 2.8 2 2.8.8 2.8 2-1.1 2-2.8 2a3 3 0 0 1-2.8-1.2" />
  </Icon>
);

export const IconReport = (p: IconProps) => (
  <Icon {...p}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <path d="M14 3v5h5M9 13h6M9 17h4" />
  </Icon>
);

export const IconSupport = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="3.5" />
    <path d="m14.5 9.5 3.2-3.2M6.3 17.7l3.2-3.2M14.5 14.5l3.2 3.2M6.3 6.3l3.2 3.2" />
  </Icon>
);

export const IconDocument = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6 3h8l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
    <path d="M14 3v5h5" />
    <path d="m8.5 14 2 2 4-4.5" />
  </Icon>
);

export const IconPenalty = (p: IconProps) => (
  <Icon {...p}>
    <path d="M10.3 3.9 2.5 17.4A2 2 0 0 0 4.2 20.5h15.6a2 2 0 0 0 1.7-3.1L13.7 3.9a2 2 0 0 0-3.4 0Z" />
    <path d="M12 9.5v4M12 17h.01" />
  </Icon>
);

/* ---------------------------------- chrome --------------------------------- */

export const IconSearch = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </Icon>
);

export const IconBell = (p: IconProps) => (
  <Icon {...p}>
    <path d="M18 8.5a6 6 0 1 0-12 0c0 5-2 6.5-2 6.5h16s-2-1.5-2-6.5Z" />
    <path d="M10.3 19a2 2 0 0 0 3.4 0" />
  </Icon>
);

export const IconChevronDown = (p: IconProps) => (
  <Icon {...p}>
    <path d="m6 9 6 6 6-6" />
  </Icon>
);

export const IconChevronRight = (p: IconProps) => (
  <Icon {...p}>
    <path d="m9 6 6 6-6 6" />
  </Icon>
);

export const IconLogout = (p: IconProps) => (
  <Icon {...p}>
    <path d="M9.5 3.5H6a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h3.5" />
    <path d="M15.5 16.5 20 12l-4.5-4.5M20 12H9.5" />
  </Icon>
);

export const IconMenu = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Icon>
);

export const IconClose = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Icon>
);

export const IconPanelLeft = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2.5" />
    <path d="M9.5 4v16" />
  </Icon>
);

/* ---------------------------------- content -------------------------------- */

export const IconTrendUp = (p: IconProps) => (
  <Icon {...p}>
    <path d="m3 16 6-6 4 4 8-8" />
    <path d="M15 6h6v6" />
  </Icon>
);

export const IconTrendDown = (p: IconProps) => (
  <Icon {...p}>
    <path d="m3 8 6 6 4-4 8 8" />
    <path d="M15 18h6v-6" />
  </Icon>
);

export const IconStar = (p: IconProps) => (
  <Icon {...p}>
    <path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1.1 5.9-5.3-2.9-5.3 2.9 1.1-5.9L3.5 9.7l5.9-.8z" />
  </Icon>
);

export const IconClock = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5.2l3.2 1.9" />
  </Icon>
);

export const IconPin = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </Icon>
);

export const IconPlane = (p: IconProps) => (
  <Icon {...p}>
    <path d="M10.5 12.5 3 10V7.5l2 .6L6.4 10l3.3.9 2.6-6.4a1.6 1.6 0 0 1 3 0l2.6 6.4 3.3-.9L22.6 8l2-.6" transform="translate(-1.3 1)" />
    <path d="m10.5 13.5-1.2 4.2L11 19v1.5l-3-1-3 1V19l1.7-1.3-1.2-4.2" />
  </Icon>
);

export const IconCheck = (p: IconProps) => (
  <Icon {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </Icon>
);

export const IconInbox = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 13h5l1.5 3h5L16 13h5" />
    <path d="M5.5 5h13l2.5 8v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6z" />
  </Icon>
);

export const IconSun = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4" />
  </Icon>
);

export const IconMoon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
  </Icon>
);
