// Shared motion system — one variant set, used everywhere.
// Load: headline lines mask-reveal upward, media fades+scales after text.
// Scroll: sections reveal once, index rows get a subtle x-shift.

export const EASE = [0.22, 1, 0.36, 1] as const;

export const VIEWPORT_ONCE = { once: true, margin: "-80px" } as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
} as const;

export const rowShift = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0 },
} as const;

export const media = {
  hidden: { opacity: 0, scale: 1.02 },
  visible: { opacity: 1, scale: 1 },
} as const;
