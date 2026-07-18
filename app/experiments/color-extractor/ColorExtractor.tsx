"use client";

import { useRef, useState } from "react";

type Swatch = { hex: string; population: number };

function toHex(r: number, g: number, b: number) {
  return (
    "#" +
    [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("").toUpperCase()
  );
}

function extractPalette(img: HTMLImageElement, count = 8): Swatch[] {
  const canvas = document.createElement("canvas");
  const scale = Math.min(1, 200 / Math.max(img.width, img.height));
  canvas.width = Math.max(1, Math.round(img.width * scale));
  canvas.height = Math.max(1, Math.round(img.height * scale));
  const ctx = canvas.getContext("2d");
  if (!ctx) return [];
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);

  // Quantize to 4 bits per channel, count buckets
  const buckets = new Map<number, { r: number; g: number; b: number; n: number }>();
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] < 128) continue;
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const key = ((r >> 4) << 8) | ((g >> 4) << 4) | (b >> 4);
    const bucket = buckets.get(key);
    if (bucket) {
      bucket.r += r;
      bucket.g += g;
      bucket.b += b;
      bucket.n += 1;
    } else {
      buckets.set(key, { r, g, b, n: 1 });
    }
  }

  const sorted = [...buckets.values()].sort((a, b) => b.n - a.n);
  const picked: { r: number; g: number; b: number; n: number }[] = [];
  for (const bucket of sorted) {
    const r = bucket.r / bucket.n;
    const g = bucket.g / bucket.n;
    const b = bucket.b / bucket.n;
    // Skip colors too close to an already-picked one
    const tooClose = picked.some((p) => {
      const dr = p.r / p.n - r;
      const dg = p.g / p.n - g;
      const db = p.b / p.n - b;
      return dr * dr + dg * dg + db * db < 900;
    });
    if (!tooClose) picked.push(bucket);
    if (picked.length >= count) break;
  }

  return picked.map((p) => ({
    hex: toHex(
      Math.round(p.r / p.n),
      Math.round(p.g / p.n),
      Math.round(p.b / p.n),
    ),
    population: p.n,
  }));
}

export function ColorExtractor() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [palette, setPalette] = useState<Swatch[]>([]);
  const [copied, setCopied] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) return;
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      setPalette(extractPalette(img));
      setImageSrc(url);
    };
    img.src = url;
  };

  const copy = async (hex: string) => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(hex);
      setTimeout(() => setCopied(null), 1200);
    } catch {
      // clipboard unavailable — user can select the text manually
    }
  };

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          const file = e.dataTransfer.files[0];
          if (file) handleFile(file);
        }}
        onClick={() => inputRef.current?.click()}
        className="cursor-pointer rounded-2xl border-2 border-dashed border-border-primary bg-bg-primary p-10 text-center transition-colors hover:border-indigo-500/50"
      >
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
        {imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageSrc}
            alt="Uploaded"
            className="mx-auto max-h-72 rounded-xl object-contain"
          />
        ) : (
          <div className="space-y-2">
            <p className="text-base font-medium text-text-primary">
              Drop an image here, or click to browse
            </p>
            <p className="text-sm text-text-secondary">
              PNG, JPG, WebP — processed locally, never uploaded
            </p>
          </div>
        )}
      </div>

      {palette.length > 0 && (
        <div className="space-y-4">
          <div className="flex h-16 w-full overflow-hidden rounded-xl ring-1 ring-black/5">
            {palette.map((s) => (
              <div
                key={s.hex}
                className="h-full flex-1"
                style={{ backgroundColor: s.hex }}
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {palette.map((s) => (
              <button
                key={s.hex}
                onClick={() => copy(s.hex)}
                className="group flex items-center gap-3 rounded-xl border border-border-primary bg-white p-3 text-left transition-colors hover:border-indigo-500/50"
              >
                <span
                  className="h-9 w-9 shrink-0 rounded-lg ring-1 ring-black/5"
                  style={{ backgroundColor: s.hex }}
                />
                <span className="font-mono text-xs text-text-primary">
                  {copied === s.hex ? "Copied!" : s.hex}
                </span>
              </button>
            ))}
          </div>
          <p className="text-center text-xs text-text-tertiary">
            Click a swatch to copy its hex code
          </p>
        </div>
      )}
    </div>
  );
}
