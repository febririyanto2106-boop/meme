"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  Info,
  Lock,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react";
import { useMemo, useState } from "react";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { Sparkline } from "@/components/ui/sparkline";
import { cn } from "@/lib/utils";

type Range = "1H" | "1D" | "1W";

const ranges: Range[] = ["1H", "1D", "1W"];

const solSeries: Record<Range, number[]> = {
  "1H": [
    181.92, 182.24, 181.78, 182.4, 182.12, 182.71, 182.38, 182.98, 182.76,
    183.24, 182.94, 183.42,
  ],
  "1D": [
    174.88, 175.42, 174.16, 176.28, 175.54, 177.86, 176.94, 178.62, 177.48,
    180.14, 179.28, 181.66, 180.42, 182.28, 181.18, 183.42,
  ],
  "1W": [
    162.4, 164.82, 163.14, 166.92, 165.38, 168.24, 167.12, 171.62, 169.84,
    174.28, 172.94, 176.84, 175.12, 179.46, 177.82, 183.42,
  ],
};

const rangeMeta: Record<Range, { change: string; low: string; high: string; rising: boolean }> = {
  "1H": { change: "+0.9%", low: "$181.92", high: "$183.58", rising: true },
  "1D": { change: "+4.8%", low: "$174.12", high: "$183.87", rising: true },
  "1W": { change: "+12.4%", low: "$162.40", high: "$183.87", rising: true },
};

const tokens = [
  {
    ticker: "$MOONCAT",
    name: "MoonCat",
    mcap: "$4.21M",
    change: "+18.4%",
    positive: true,
    series: [4.2, 4.6, 4.4, 5.1, 4.8, 5.6, 5.3, 6.2, 5.9, 6.8],
    accent: "from-violet to-[#7C3AED]",
  },
  {
    ticker: "$NOVA",
    name: "Nova",
    mcap: "$1.86M",
    change: "+9.2%",
    positive: true,
    series: [3.1, 3.4, 3.2, 3.8, 3.5, 4.2, 4.0, 4.6, 4.3, 4.9],
    accent: "from-cyan/80 to-[#0EA5C4]",
  },
  {
    ticker: "$GLITCH",
    name: "Glitch",
    mcap: "$824K",
    change: "-4.7%",
    positive: false,
    series: [5.2, 4.8, 5.0, 4.4, 4.6, 4.0, 4.2, 3.7, 3.9, 3.4],
    accent: "from-[#F43F5E]/80 to-[#9F1239]",
  },
];

export function HeroTerminal() {
  const [range, setRange] = useState<Range>("1D");
  const meta = rangeMeta[range];
  const series = useMemo(() => solSeries[range], [range]);

  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-violet/20 blur-[90px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-16 size-64 rounded-full bg-cyan/10 blur-[100px]"
        aria-hidden="true"
      />

      <div className="absolute -left-5 top-[26%] z-20 hidden animate-float items-center gap-2.5 rounded-2xl border border-white/[0.09] bg-[#0B0F1A]/92 px-3.5 py-2.5 shadow-card backdrop-blur-xl xl:flex">
        <span className="grid size-8 place-items-center rounded-lg border border-acid/20 bg-acid/[0.08] text-acid">
          <Lock className="size-3.5" />
        </span>
        <span>
          <span className="block font-mono text-[8px] uppercase tracking-[0.18em] text-white/35">
            LP dibakar
          </span>
          <span className="mt-0.5 block font-mono text-[12px] font-medium text-acid">
            100%
          </span>
        </span>
      </div>

      <div
        className="absolute -right-4 bottom-[16%] z-20 hidden animate-float-slow items-center gap-2.5 rounded-2xl border border-white/[0.09] bg-[#0B0F1A]/92 px-3.5 py-2.5 shadow-card backdrop-blur-xl xl:flex"
        style={{ animationDelay: "1.4s" }}
      >
        <span className="grid size-8 place-items-center rounded-lg border border-cyan/20 bg-cyan/[0.08] text-cyan">
          <Users className="size-3.5" />
        </span>
        <span>
          <span className="block font-mono text-[8px] uppercase tracking-[0.18em] text-white/35">
            Pertumbuhan holder
          </span>
          <span className="mt-0.5 block font-mono text-[12px] font-medium text-cyan">
            +12.4%
          </span>
        </span>
      </div>

      <div className="relative overflow-hidden rounded-[26px] border border-white/[0.1] bg-[#0B0F1A]/88 shadow-terminal backdrop-blur-2xl">
        <div className="flex h-9 items-center justify-between border-b border-white/[0.06] bg-white/[0.02] px-4">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="size-[5px] rounded-full bg-white/15" />
            <span className="size-[5px] rounded-full bg-white/15" />
            <span className="size-[5px] rounded-full bg-white/15" />
          </div>
          <span className="font-mono text-[8.5px] uppercase tracking-[0.22em] text-white/30">
            memecoin_terminal
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.03] px-2 py-0.5">
            <span className="size-1 animate-pulse-soft rounded-full bg-acid" />
            <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/40">
              Ilustrasi
            </span>
          </span>
        </div>

        <div className="px-5 pb-1 pt-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-white/40">
                  SOL / USD
                </span>
                <span className="flex items-center gap-1 rounded-full border border-acid/15 bg-acid/[0.07] px-1.5 py-0.5">
                  <span className="size-1 rounded-full bg-acid" />
                  <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-acid/80">
                    Pasar
                  </span>
                </span>
              </div>
              <div className="mt-1.5 flex items-end gap-2.5">
                <AnimatedNumber
                  value={183.42}
                  decimals={2}
                  prefix="$"
                  className="font-display text-[32px] font-semibold leading-none tracking-[-0.03em] text-white"
                />
                <span className="mb-0.5 inline-flex items-center gap-0.5 rounded-md bg-acid/10 px-1.5 py-0.5 font-mono text-[10px] font-medium text-acid">
                  <TrendingUp className="size-3" />
                  {meta.change}
                </span>
              </div>
            </div>

            <div
              className="flex shrink-0 items-center rounded-full border border-white/[0.07] bg-white/[0.03] p-0.5"
              role="group"
              aria-label="Chart timeframe"
            >
              {ranges.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setRange(item)}
                  aria-pressed={range === item}
                  className={cn(
                    "relative rounded-full px-2.5 py-1 font-mono text-[9.5px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-acid/50",
                    range === item ? "text-white" : "text-white/35 hover:text-white/70",
                  )}
                >
                  {range === item && (
                    <motion.span
                      layoutId="hero-range-pill"
                      className="absolute inset-0 rounded-full bg-white/[0.09]"
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{item}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="relative mt-4 h-[104px]">
            <div
              className="pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:100%_33.33%]"
              aria-hidden="true"
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={range}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Sparkline
                  values={series}
                  width={420}
                  height={104}
                  color="#C6FF5E"
                  strokeWidth={1.8}
                  animate
                  showEndDot
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-1 flex items-center justify-between px-0.5 font-mono text-[8.5px] uppercase tracking-[0.12em] text-white/25">
            <span>Terendah {meta.low}</span>
            <span>Tertinggi {meta.high}</span>
          </div>
        </div>

        <div className="mt-4 border-t border-white/[0.06] px-5 py-4">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
              <Activity className="size-3 text-white/35" />
              Token populer
            </span>
            <a
              href="/#research"
              className="group inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.14em] text-white/30 transition hover:text-acid/80"
            >
              Lihat
              <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
            </a>
          </div>

          <div className="mt-2.5 space-y-0.5">
            {tokens.map((token) => (
              <div
                key={token.ticker}
                className="group flex items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-white/[0.03]"
              >
                <span
                  className={cn(
                    "grid size-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br font-display text-[11px] font-bold text-white",
                    token.accent,
                  )}
                >
                  {token.name.charAt(0)}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[12px] font-medium text-white/85">
                    {token.name}
                  </span>
                  <span className="mt-0.5 block font-mono text-[9px] uppercase tracking-[0.12em] text-white/25">
                    {token.ticker} · {token.mcap}
                  </span>
                </span>
                <span className="hidden h-6 w-14 opacity-80 sm:block">
                  <Sparkline
                    values={token.series}
                    width={56}
                    height={24}
                    color={token.positive ? "#C6FF5E" : "#FB7185"}
                    fill={false}
                    strokeWidth={1.4}
                  />
                </span>
                <span
                  className={cn(
                    "inline-flex min-w-[58px] items-center justify-end gap-0.5 font-mono text-[10.5px]",
                    token.positive ? "text-acid" : "text-rose-400",
                  )}
                >
                  {token.positive ? (
                    <TrendingUp className="size-3" />
                  ) : (
                    <TrendingDown className="size-3" />
                  )}
                  {token.change}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/[0.06] px-5 py-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
              Tekanan beli / jual
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/25">
              24j
            </span>
          </div>
          <div className="mt-2.5 flex h-2 gap-1 overflow-hidden rounded-full bg-white/[0.04]">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#8FBF3E] to-acid"
              initial={{ width: 0 }}
              whileInView={{ width: "62%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            />
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#9F1239] to-rose-400"
              initial={{ width: 0 }}
              whileInView={{ width: "31%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
            />
          </div>
          <div className="mt-2 flex items-center justify-between font-mono text-[9px]">
            <span className="flex items-center gap-1.5 text-white/40">
              <span className="size-1.5 rounded-full bg-acid" />
              Pembeli <span className="text-white/70">3.214</span>
            </span>
            <span className="flex items-center gap-1.5 text-white/40">
              Penjual <span className="text-white/70">1.982</span>
              <span className="size-1.5 rounded-full bg-rose-400" />
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 divide-x divide-white/[0.06] border-t border-white/[0.06] bg-white/[0.015]">
          {[
            {
              label: "Kap. pasar",
              value: 4_210_000,
              decimals: 2,
              change: "+12.4%",
              tone: "text-acid",
            },
            {
              label: "Volume 24j",
              value: 1_860_000,
              decimals: 2,
              change: "+8.1%",
              tone: "text-acid",
            },
            {
              label: "Likuiditas",
              value: 412_000,
              decimals: 0,
              change: "+4.2%",
              tone: "text-cyan",
            },
          ].map((stat) => (
            <div key={stat.label} className="px-3.5 py-3.5 sm:px-4">
              <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/30">
                {stat.label}
              </p>
              <p className="mt-1 font-display text-[14px] font-semibold tracking-tight text-white/90">
                <AnimatedNumber
                  value={stat.value}
                  compact
                  decimals={stat.decimals}
                  prefix="$"
                />
              </p>
              <p className={cn("mt-0.5 font-mono text-[8.5px]", stat.tone)}>
                {stat.change}
              </p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-3.5 flex items-center justify-center gap-1.5 text-center text-[10px] leading-relaxed text-white/30">
        <Info className="size-3 shrink-0" />
        Data pasar ilustratif untuk pratinjau desain. Bukan data pasar live.
      </p>
    </div>
  );
}
