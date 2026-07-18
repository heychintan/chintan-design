"use client";

import { useRef, useState } from "react";

type Mode = "frosted" | "fluted";
type Direction = "vertical" | "horizontal";

const DEMO_GRADIENT =
  "linear-gradient(135deg, rgb(var(--accent-400)), rgb(var(--accent-700)))";

export function GlassEffect() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [mode, setMode] = useState<Mode>("fluted");
  const [blur, setBlur] = useState(8);
  const [stripe, setStripe] = useState(14);
  const [direction, setDirection] = useState<Direction>("vertical");
  const [opacity, setOpacity] = useState(12);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) return;
    setImageSrc(URL.createObjectURL(file));
  };

  const angle = direction === "vertical" ? "90deg" : "0deg";
  const flutes =
    mode === "fluted"
      ? `repeating-linear-gradient(${angle}, rgba(255,255,255,0.22) 0px, rgba(255,255,255,0.02) ${Math.round(stripe * 0.35)}px, rgba(0,0,0,0.05) ${Math.round(stripe * 0.55)}px, rgba(255,255,255,0.14) ${stripe}px)`
      : "none";

  const overlayStyle: React.CSSProperties = {
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    backgroundColor: `rgba(255,255,255,${opacity / 100})`,
    backgroundImage: flutes === "none" ? undefined : flutes,
  };

  const css = [
    `.glass-overlay {`,
    `  backdrop-filter: blur(${blur}px);`,
    `  -webkit-backdrop-filter: blur(${blur}px);`,
    `  background-color: rgba(255, 255, 255, ${opacity / 100});`,
    ...(mode === "fluted" ? [`  background-image: ${flutes};`] : []),
    `}`,
  ].join("\n");

  const copyCss = async () => {
    try {
      await navigator.clipboard.writeText(css);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // clipboard unavailable — CSS is visible below for manual copy
    }
  };

  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-[1fr_280px]">
      {/* Preview */}
      <div className="space-y-4">
        <div
          className="relative h-[360px] overflow-hidden rounded-2xl ring-1 ring-black/5 md:h-[440px]"
          style={
            imageSrc
              ? {
                  backgroundImage: `url(${imageSrc})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
              : { backgroundImage: DEMO_GRADIENT }
          }
        >
          {!imageSrc && (
            <div className="absolute left-6 top-6 max-w-[50%] text-white/90">
              <p className="text-2xl font-medium tracking-tight">
                Sample backdrop
              </p>
              <p className="mt-1 text-sm text-white/70">
                Upload your own image to see the glass over it.
              </p>
            </div>
          )}
          {/* Glass panel over right half */}
          <div
            className="absolute inset-y-0 right-0 w-1/2 border-l border-white/30"
            style={overlayStyle}
          />
        </div>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => inputRef.current?.click()}
            className="rounded-full border border-border-primary px-5 py-2 text-sm font-medium text-text-primary transition-colors hover:bg-white"
          >
            {imageSrc ? "Replace image" : "Upload image"}
          </button>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFile(file);
            }}
          />
          <span className="text-xs text-text-tertiary">
            Processed locally — never uploaded
          </span>
        </div>
      </div>

      {/* Controls */}
      <div className="space-y-6 rounded-2xl border border-border-primary bg-bg-primary p-6">
        <div className="space-y-2">
          <span className="text-xs font-medium uppercase tracking-wide text-text-tertiary">
            Effect
          </span>
          <div className="flex gap-2">
            {(["frosted", "fluted"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`flex-1 rounded-full px-3 py-1.5 text-sm font-medium capitalize transition-colors ${
                  mode === m
                    ? "bg-indigo-600 text-white"
                    : "border border-border-primary text-text-secondary hover:text-text-primary"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <Slider
          label="Blur"
          value={blur}
          min={0}
          max={30}
          unit="px"
          onChange={setBlur}
        />
        <Slider
          label="Glass opacity"
          value={opacity}
          min={0}
          max={50}
          unit="%"
          onChange={setOpacity}
        />

        {mode === "fluted" && (
          <>
            <Slider
              label="Stripe width"
              value={stripe}
              min={6}
              max={48}
              unit="px"
              onChange={setStripe}
            />
            <div className="space-y-2">
              <span className="text-xs font-medium uppercase tracking-wide text-text-tertiary">
                Direction
              </span>
              <div className="flex gap-2">
                {(["vertical", "horizontal"] as const).map((d) => (
                  <button
                    key={d}
                    onClick={() => setDirection(d)}
                    className={`flex-1 rounded-full px-3 py-1.5 text-sm font-medium capitalize transition-colors ${
                      direction === d
                        ? "bg-indigo-600 text-white"
                        : "border border-border-primary text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        <div className="space-y-2 border-t border-border-primary/50 pt-4">
          <button
            onClick={copyCss}
            className="w-full rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            {copied ? "Copied!" : "Copy CSS"}
          </button>
          <pre className="overflow-x-auto rounded-xl bg-white p-3 font-mono text-[11px] leading-5 text-text-secondary ring-1 ring-border-primary">
            {css}
          </pre>
        </div>
      </div>
    </div>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  unit,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  unit: string;
  onChange: (v: number) => void;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-wide text-text-tertiary">
          {label}
        </span>
        <span className="font-mono text-xs text-text-secondary">
          {value}
          {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[rgb(var(--accent))]"
      />
    </div>
  );
}
