"use client";

import { useEffect, useRef, useState } from "react";

export const ACCENT_THEMES = [
  { id: "violet", label: "Violet", hex: "#6C47FF" },
  { id: "blue", label: "Blue", hex: "#0099FF" },
  { id: "emerald", label: "Emerald", hex: "#059669" },
  { id: "orange", label: "Orange", hex: "#EA580C" },
  { id: "rose", label: "Rose", hex: "#E11D48" },
  { id: "slate", label: "Slate", hex: "#334155" },
] as const;

export type AccentTheme = (typeof ACCENT_THEMES)[number]["id"];

const STORAGE_KEY = "accent-theme";

function applyAccent(id: AccentTheme) {
  document.documentElement.dataset.accent = id;
  try {
    localStorage.setItem(STORAGE_KEY, id);
  } catch {
    // localStorage unavailable (private mode) — theme still applies for this page
  }
}

export function ThemeSwitcher({ inline = false }: { inline?: boolean }) {
  const [active, setActive] = useState<AccentTheme>("violet");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = document.documentElement.dataset.accent as AccentTheme;
    if (current && ACCENT_THEMES.some((t) => t.id === current)) {
      setActive(current);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen]);

  const select = (id: AccentTheme) => {
    setActive(id);
    applyAccent(id);
    setIsOpen(false);
  };

  const swatches = (
    <div className="flex items-center gap-2">
      {ACCENT_THEMES.map((theme) => (
        <button
          key={theme.id}
          type="button"
          onClick={() => select(theme.id)}
          aria-label={`Switch accent color to ${theme.label}`}
          aria-pressed={active === theme.id}
          className={`h-5 w-5 rounded-full transition-transform hover:scale-110 ${
            active === theme.id
              ? "ring-2 ring-dark-primary ring-offset-2 ring-offset-bg-primary"
              : "ring-1 ring-black/10"
          }`}
          style={{ backgroundColor: theme.hex }}
        />
      ))}
    </div>
  );

  if (inline) {
    return swatches;
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change accent color"
        aria-expanded={isOpen}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-border-primary transition-colors hover:bg-white"
      >
        <span
          className="h-4 w-4 rounded-full bg-accent"
          aria-hidden="true"
        ></span>
      </button>
      {isOpen && (
        <div className="absolute right-0 top-11 z-50 rounded-full border border-border-primary bg-white px-3 py-2 shadow-md">
          {swatches}
        </div>
      )}
    </div>
  );
}
