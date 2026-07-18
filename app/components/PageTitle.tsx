import { cx } from "../lib/utils";

type PageTitleProps = {
  title: string;
  textAlign?: "left" | "center" | "right";
  className?: string;
};
export function PageTitle({
  title,
  textAlign = "center",
  className,
}: PageTitleProps) {
  return (
    <div className={cx("w-full", className)}>
      <h1
        className={cx(
          "text-balance text-5xl font-medium leading-[1.05] tracking-[-0.03em] text-text-primary md:text-7xl",
          textAlign === "left"
            ? "text-left"
            : textAlign === "right"
              ? "text-right"
              : "text-center",
        )}
      >
        {title}
      </h1>
    </div>
  );
}
