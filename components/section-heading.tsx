import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        centered
          ? "items-center text-center"
          : "lg:flex-row lg:items-end lg:justify-between",
        className,
      )}
    >
      <div className={cn("max-w-2xl", centered && "mx-auto")}>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 backdrop-blur-xl">
          <span className="size-1.5 rounded-full bg-acid shadow-[0_0_10px_rgba(198,255,94,0.8)]" />
          <span className="font-mono text-[9.5px] font-medium uppercase tracking-[0.24em] text-white/55">
            {eyebrow}
          </span>
        </span>

        <h2 className="mt-5 text-balance font-display text-[2rem] font-semibold leading-[1.06] tracking-[-0.035em] text-white sm:text-4xl lg:text-[42px]">
          {title}
        </h2>

        {description && (
          <p
            className={cn(
              "mt-4 text-[14.5px] leading-relaxed text-white/50 sm:text-[15px]",
              centered && "mx-auto max-w-xl",
            )}
          >
            {description}
          </p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
