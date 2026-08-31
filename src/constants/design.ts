export const COLORS = {
  // Primary palette
  primary: {
    purple: "#7C3AED",
    pink: "#EC4899",
    indigo: "#4F46E5",
  },
  // Secondary palette
  secondary: {
    gray: {
      50: "#F9FAFB",
      100: "#F3F4F6",
      200: "#E5E7EB",
      300: "#D1D5DB",
      400: "#9CA3AF",
      500: "#6B7280",
      600: "#4B5563",
      700: "#374151",
      800: "#1F2937",
      900: "#111827",
    },
  },
  // Game-specific
  game: {
    x: "#EC4899", // Pink
    o: "#60A5FA", // Light blue
    board: "#1E1B4B", // Deep purple-blue
    cell: "#312E81", // Slightly lighter
    highlight: "#818CF8",
    winner: "#FCD34D", // Gold
    draw: "#9CA3AF", // Gray
  },
} as const;

export const TYPOGRAPHY = {
  fontFamily: {
    sans: "'Inter', system-ui, -apple-system, sans-serif",
    display: "'Tilt Warp', 'Inter', system-ui, sans-serif",
  },
  sizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
    "7xl": "5rem",
  },
} as const;

export const SPACING = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
  "3xl": "4rem",
} as const;

export const BORDER_RADIUS = {
  sm: "0.375rem",
  md: "0.5rem",
  lg: "1rem",
  xl: "1.5rem",
  full: "9999px",
} as const;

export const SHADOWS = {
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  glow: "0 0 30px -5px rgba(124, 58, 237, 0.3)",
  "glow-pink": "0 0 30px -5px rgba(236, 72, 153, 0.3)",
} as const;
