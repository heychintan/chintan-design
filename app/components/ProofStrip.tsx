import { ClientLogos } from "./ClientLogos";

const metrics = [
  { value: "7+", label: "years experience" },
  { value: "50+", label: "websites shipped" },
  { value: "9", label: "five-star reviews" },
];

export function ProofStrip() {
  return (
    <div className="mx-auto max-w-4xl space-y-10 pt-8 md:pt-12">
      <div className="flex flex-wrap items-baseline justify-center gap-x-10 gap-y-3">
        {metrics.map((m) => (
          <div key={m.label} className="flex items-baseline gap-2.5">
            <span className="text-2xl font-medium tracking-tight text-text-primary md:text-3xl">
              {m.value}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-tertiary md:text-xs">
              {m.label}
            </span>
          </div>
        ))}
      </div>
      <ClientLogos />
    </div>
  );
}
