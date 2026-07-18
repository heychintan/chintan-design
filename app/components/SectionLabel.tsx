import { cx } from "../lib/utils";

type SectionLabelProps = {
  index?: string;
  title: string;
  className?: string;
  tone?: "light" | "dark";
};

export function SectionLabel({
  index,
  title,
  className,
  tone = "light",
}: SectionLabelProps) {
  return (
    <div
      className={cx(
        "flex items-baseline gap-3 font-mono text-xs uppercase tracking-[0.16em] md:text-sm",
        className,
      )}
    >
      {index && (
        <span
          aria-hidden="true"
          className={tone === "dark" ? "text-indigo-400" : "text-indigo-600"}
        >
          {index} —
        </span>
      )}
      <span className={tone === "dark" ? "text-slate-400" : "text-text-secondary"}>
        {title}
      </span>
    </div>
  );
}
