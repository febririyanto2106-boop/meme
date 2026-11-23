"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowUpRight,
  Cat,
  Check,
  Clock,
  Eye,
  Info,
  Layers,
  Lock,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { useMemo, useState } from "react";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Sparkline } from "@/components/ui/sparkline";
import { cn } from "@/lib/utils";

type Range = "1H" | "1D" | "1W";

const ranges: Range[] = ["1H", "1D", "1W"];

const mooncatSeries: Record<Range, number[]> = {
  "1H": [
    0.000398, 0.000402, 0.000397, 0.000406, 0.000403, 0.000411, 0.000408,
    0.000415, 0.000412, 0.000418, 0.000416, 0.000421,
  ],
  "1D": [
    0.000356, 0.000362, 0.000352, 0.000371, 0.000368, 0.000381, 0.000374,
    0.000392, 0.000386, 0.000401, 0.000395, 0.000409, 0.000403, 0.000416,
    0.000411, 0.000421,
  ],
  "1W": [
    0.000258, 0.000271, 0.000264, 0.000288, 0.000279, 0.000301, 0.000294,
    0.000318, 0.000306, 0.000334, 0.000325, 0.000352, 0.000341, 0.000374,
    0.000362, 0.000396, 0.000389, 0.000421,
  ],
};

const rangeMeta: Record<
  Range,
  { change: string; low: string; high: string; rising: boolean }
> = {
  "1H": { change: "+2.1%", low: "$0.000397", high: "$0.000423", rising: true },
  "1D": { change: "+18.4%", low: "$0.000352", high: "$0.000426", rising: true },
  "1W": { change: "+64.9%", low: "$0.000258", high: "$0.000432", rising: true },
};

const checklist = [
  "Lacak holder teratas dan klaster wallet",
  "Periksa LP burn dan kedalaman likuiditas",
  "Tinjau tekanan beli / jual sebelum entry",
];

const signals = [
  {
    label: "LP dibakar",
    status: "Terverifikasi",
    tone: "text-acid",
    dot: "bg-acid",
    icon: ShieldCheck,
  },
  {
    label: "Konsentrasi holder",
    status: "Pantau",
    tone: "text-amber-300",
    dot: "bg-amber-300",
    icon: AlertTriangle,
  },
  {
    label: "Mint authority",
    status: "Dicabut",
    tone: "text-cyan",
    dot: "bg-cyan",
    icon: Check,
  },
];

export function ResearchSection() {
  const [range, setRange] = useState<Range>("1D");
  const meta = rangeMeta[range];
  const series = useMemo(() => mooncatSeries[range], [range]);

  return (
    <section id="research" className="section-pad relative scroll-mt-28 overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 top-20 size-[500px] -translate-x-1/2 rounded-full bg-violet/[0.055] blur-[130px]"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <Reveal>
          <SectionHeading
            eyebrow="Terminal riset"
            title={
              <>
                Pahami Apa Yang Terjadi{" "}
                <span className="text-gradient">Di Balik Setiap Token.</span>
              </>
            }
            description="Jelajahi tampilan riset premium yang dibuat untuk latihan. Setiap metrik di bawah adalah bagian dari kurikulum — bukan alasan untuk trading."
            action={
              <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white/45 backdrop-blur-xl">
                <span className="size-1 animate-pulse-soft rounded-full bg-cyan" />
                Pratinjau interaktif
              </span>
            }
          />
        </Reveal>

        <div className="mt-10 grid items-start gap-4 sm:mt-12 lg:grid-cols-[1.32fr_0.68fr] lg:gap-5">
          <Reveal>
            <div className="overflow-hidden rounded-[28px] border border-white/[0.1] bg-[#0B0F1A]/88 shadow-terminal backdrop-blur-2xl">
              <div className="flex h-9 items-center justify-between border-b border-white/[0.06] bg-white/[0.02] px-4">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="size-[5px] rounded-full bg-white/15" />
                  <span className="size-[5px] rounded-full bg-white/15" />
                  <span className="size-[5px] rounded-full bg-white/15" />
                </div>
                <span className="font-mono text-[8.5px] uppercase tracking-[0.22em] text-white/30">
                  token_research / mooncat
                </span>
                <span className="rounded-full border border-white/[0.07] bg-white/[0.03] px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.16em] text-white/35">
                  Demo
                </span>
              </div>

              <div className="flex flex-col gap-4 border-b border-white/[0.06] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <div className="flex items-center gap-3.5">
                  <span className="relative grid size-[52px] shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet via-[#7C3AED] to-cyan shadow-[0_0_30px_-8px_rgba(168,85,247,0.6)]">
                    <Cat className="size-6 text-white" strokeWidth={1.9} />
                    <span className="absolute -bottom-1 -right-1 rounded-full border-2 border-[#0B0F1A] bg-acid px-1 font-mono text-[6.5px] font-bold uppercase text-ink-950">
                      new
                    </span>
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-white">
                        MoonCat
                      </h3>
                      <span className="rounded-full border border-violet/25 bg-violet/[0.09] px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.14em] text-violet-soft/80">
                        Token fiktif
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/30">
                      $MOONCAT <span className="text-white/15">·</span> Pair Solana{" "}
                      <span className="text-white/15">·</span> umur 6h 14j
                    </p>
                  </div>
                </div>

                <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 font-mono text-[8.5px] uppercase tracking-[0.14em] text-white/35">
                  <Eye className="size-3" />
                  Aset ilustratif
                </span>
              </div>

              <div className="px-5 pt-5 sm:px-6">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">
                      Harga
                    </p>
                    <div className="mt-1.5 flex items-center gap-2.5">
                      <AnimatedNumber
                        value={0.000421}
                        decimals={6}
                        prefix="$"
                        className="font-display text-[30px] font-semibold leading-none tracking-[-0.03em] text-white"
                      />
                      <span className="inline-flex items-center gap-1 rounded-md bg-acid/10 px-1.5 py-0.5 font-mono text-[10px] font-medium text-acid">
                        <TrendingUp className="size-3" />
                        {meta.change}
                      </span>
                    </div>
                  </div>

                  <div
                    className="flex items-center rounded-full border border-white/[0.07] bg-white/[0.03] p-0.5"
                    role="group"
                    aria-label="Rentang waktu grafik riset"
                  >
                    {ranges.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setRange(item)}
                        aria-pressed={range === item}
                        className={cn(
                          "relative rounded-full px-3 py-1 font-mono text-[9.5px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-acid/50",
                          range === item
                            ? "text-white"
                            : "text-white/35 hover:text-white/70",
                        )}
                      >
                        {range === item && (
                          <motion.span
                            layoutId="research-range-pill"
                            className="absolute inset-0 rounded-full bg-white/[0.09]"
                            transition={{
                              type: "spring",
                              stiffness: 420,
                              damping: 32,
                            }}
                          />
                        )}
                        <span className="relative z-10">{item}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="relative mt-4 h-[148px] sm:h-[176px]">
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
                        width={640}
                        height={176}
                        color="#C6FF5E"
                        strokeWidth={1.9}
                        animate
                        showEndDot
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="mb-5 mt-1 flex items-center justify-between font-mono text-[8.5px] uppercase tracking-[0.12em] text-white/25">
                  <span>Terendah {meta.low}</span>
                  <span className="hidden items-center gap-1.5 sm:flex">
                    <span className="size-1 rounded-full bg-acid/70" />
                    Grafik latihan · ilustratif
                  </span>
                  <span>Tertinggi {meta.high}</span>
                </div>
              </div>

              <div className="border-t border-white/[0.06] px-5 py-5 sm:px-6">
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3.5">
                    <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/30">
                      Kap. pasar
                    </p>
                    <p className="mt-1.5 font-display text-[16px] font-semibold text-white/90">
                      <AnimatedNumber
                        value={4_210_000}
                        compact
                        decimals={2}
                        prefix="$"
                      />
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3.5">
                    <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/30">
                      Volume 24j
                    </p>
                    <p className="mt-1.5 font-display text-[16px] font-semibold text-white/90">
                      <AnimatedNumber
                        value={1_860_000}
                        compact
                        decimals={2}
                        prefix="$"
                      />
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3.5">
                    <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/30">
                      Likuiditas
                    </p>
                    <p className="mt-1.5 font-display text-[16px] font-semibold text-white/90">
                      <AnimatedNumber
                        value={412_000}
                        compact
                        decimals={0}
                        prefix="$"
                      />
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3.5">
                    <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/30">
                      Holder
                    </p>
                    <p className="mt-1.5 font-display text-[16px] font-semibold text-white/90">
                      <AnimatedNumber value={12_847} decimals={0} />
                    </p>
                  </div>

                  <div className="rounded-2xl border border-acid/[0.14] bg-acid/[0.04] p-3.5">
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/30">
                        LP burn
                      </p>
                      <Lock className="size-3 text-acid/60" />
                    </div>
                    <p className="mt-1.5 font-display text-[16px] font-semibold text-acid">
                      100%
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3.5">
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/30">
                        Umur token
                      </p>
                      <Clock className="size-3 text-white/25" />
                    </div>
                    <p className="mt-1.5 font-display text-[16px] font-semibold text-white/90">
                      6d 14h
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3.5">
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/30">
                        Performa ATH
                      </p>
                      <TrendingDown className="size-3 text-rose-400/70" />
                    </div>
                    <p className="mt-1.5 font-display text-[16px] font-semibold text-rose-400">
                      -42.8%
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3.5">
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/30">
                        10 holder teratas
                      </p>
                      <Layers className="size-3 text-white/25" />
                    </div>
                    <p className="mt-1.5 font-display text-[16px] font-semibold text-white/90">
                      <AnimatedNumber
                        value={24.6}
                        decimals={1}
                        suffix="%"
                      />
                    </p>
                  </div>
                </div>

                <div className="mt-2.5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/30">
                      Aktivitas beli / jual · 24j
                    </p>
                    <p className="font-mono text-[9px] text-white/40">
                      <span className="text-acid/80">3.214 pembeli</span>
                      <span className="mx-1.5 text-white/15">·</span>
                      <span className="text-rose-400/80">2.908 penjual</span>
                    </p>
                  </div>
                  <div className="mt-2.5 flex h-2 gap-1 overflow-hidden rounded-full bg-white/[0.04]">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[#8FBF3E] to-acid"
                      initial={{ width: 0 }}
                      whileInView={{ width: "53%" }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.1,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.2,
                      }}
                    />
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[#9F1239] to-rose-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: "47%" }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.1,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.3,
                      }}
                    />
                  </div>
                </div>

                <p className="mt-4 flex items-start gap-1.5 text-[10px] leading-relaxed text-white/28">
                  <Info className="mt-px size-3 shrink-0" />
                  $MOONCAT adalah token fiktif. Semua angka, wallet, dan
                  aktivitas yang ditampilkan bersifat ilustratif, bukan data pasar live.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4">
            <Reveal delay={0.08}>
              <div className="gradient-ring rounded-[26px] p-5 sm:p-6">
                <span className="grid size-10 place-items-center rounded-xl border border-violet/20 bg-violet/[0.1] text-violet-soft">
                  <Eye className="size-[18px]" />
                </span>
                <p className="eyebrow mt-4">Baca sebelum membeli</p>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-white/65">
                  Pelajari cara mengidentifikasi aktivitas pasar, kondisi
                  likuiditas, dan potensi risiko sebelum mengambil keputusan.
                </p>

                <ul className="mt-5 space-y-2.5">
                  {checklist.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[12px] leading-snug text-white/45"
                    >
                      <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-acid/[0.09] text-acid">
                        <Check className="size-2.5" strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="/#curriculum"
                  className="mt-5 flex items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.02] px-3.5 py-3 text-[12.5px] font-medium text-white/70 transition hover:border-white/[0.14] hover:bg-white/[0.05] hover:text-white"
                >
                  Buka kurikulum riset
                  <ArrowUpRight className="size-3.5 text-white/35" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="rounded-[26px] border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-xl sm:p-6">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
                    Checklist sinyal
                  </p>
                  <span className="rounded-full border border-white/[0.07] bg-white/[0.03] px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.14em] text-white/30">
                    Pratinjau
                  </span>
                </div>

                <div className="mt-4 space-y-2.5">
                  {signals.map((signal) => {
                    const Icon = signal.icon;

                    return (
                      <div
                        key={signal.label}
                        className="flex items-center gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] px-3.5 py-2.5"
                      >
                        <span className="grid size-7 place-items-center rounded-lg bg-white/[0.04] text-white/40">
                          <Icon className="size-3.5" />
                        </span>
                        <span className="flex-1 text-[11.5px] text-white/55">
                          {signal.label}
                        </span>
                        <span
                          className={cn(
                            "flex items-center gap-1.5 font-mono text-[8.5px] uppercase tracking-[0.1em]",
                            signal.tone,
                          )}
                        >
                          <span
                            className={cn("size-1 rounded-full", signal.dot)}
                          />
                          {signal.status}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <p className="mt-4 flex items-start gap-1.5 text-[10px] leading-relaxed text-white/25">
                  <Info className="mt-px size-3 shrink-0" />
                  Contoh sinyal dari token fiktif. Checklist adalah alat
                  berpikir, bukan jaminan keamanan.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
