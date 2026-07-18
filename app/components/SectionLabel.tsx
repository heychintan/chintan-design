import { cx } from "../lib/utils";

type SectionLabelProps = {
  index?: string;
  title: string;
  className?: string;
};

export function SectionLabel({ index, title, className }: SectionLabelProps) {
  return (
    <div
      className={cx(
        "flex items-baseline gap-3 font-mono text-xs uppercase tracking-[0.16em] md:text-sm",
        className,
      )}
    >
      {index && (
        <span aria-hidden="true" className="text-indigo-600">
          {index} —
        </span>
      )}
      <span className="text-text-secondary">{title}</span>
    </div>
  );
}
