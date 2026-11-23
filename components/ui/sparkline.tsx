"use client";

import { useId } from "react";
import { buildChart } from "@/lib/chart";
import { cn } from "@/lib/utils";

type SparklineProps = {
  values: number[];
  width?: number;
  height?: number;
  color?: string;
  fill?: boolean;
  animate?: boolean;
  showEndDot?: boolean;
  strokeWidth?: number;
  className?: string;
};

export function Sparkline({
  values,
  width = 240,
  height = 80,
  color = "#C6FF5E",
  fill = true,
  animate = false,
  showEndDot = false,
  strokeWidth = 1.6,
  className,
}: SparklineProps) {
  const gradientId = useId().replace(/:/g, "");
  const { line, area, last } = buildChart(values, width, height, 3);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className={cn("h-full w-full", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.28" />
          <stop offset="60%" stopColor={color} stopOpacity="0.06" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>

      {fill && <path d={area} fill={`url(#${gradientId})`} />}

      <path
        key={animate ? line : undefined}
        d={line}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        pathLength={animate ? 1 : undefined}
        className={animate ? "draw-line" : undefined}
      />

      {showEndDot && (
        <>
          <circle
            cx={last.x}
            cy={last.y}
            r="4.5"
            fill={color}
            opacity="0.18"
          />
          <circle cx={last.x} cy={last.y} r="2" fill={color} />
        </>
      )}
    </svg>
  );
}
