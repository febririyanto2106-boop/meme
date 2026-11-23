"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type AnimatedNumberProps = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  compact?: boolean;
  duration?: number;
  className?: string;
};

function formatValue(value: number, decimals: number, compact: boolean) {
  if (compact) {
    if (Math.abs(value) >= 1_000_000_000) {
      return `${(value / 1_000_000_000).toFixed(decimals)}B`;
    }
    if (Math.abs(value) >= 1_000_000) {
      return `${(value / 1_000_000).toFixed(decimals)}M`;
    }
    if (Math.abs(value) >= 1_000) {
      return `${(value / 1_000).toFixed(decimals)}K`;
    }
  }

  return value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function AnimatedNumber({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  compact = false,
  duration = 1.6,
  className,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState(() =>
    formatValue(0, decimals, compact),
  );

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplay(formatValue(latest, decimals, compact));
      },
    });

    return () => controls.stop();
  }, [inView, value, decimals, compact, duration]);

  const label = `${prefix}${formatValue(value, decimals, compact)}${suffix}`;

  return (
    <span ref={ref} className={cn("tabular-nums", className)} aria-label={label}>
      <span aria-hidden="true">
        {prefix}
        {display}
        {suffix}
      </span>
    </span>
  );
}
