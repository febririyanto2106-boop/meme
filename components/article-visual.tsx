import {
  Activity,
  AlertTriangle,
  BarChart3,
  Droplets,
  Lock,
  Target,
  type LucideIcon,
} from "lucide-react";
import type { Accent, ArticleVisual as ArticleVisualKind } from "@/lib/data";
import { cn } from "@/lib/utils";

const accentStyles: Record<
  Accent,
  { hex: string; rgb: string; frame: string; chip: string }
> = {
  violet: {
    hex: "#A855F7",
    rgb: "168,85,247",
    frame: "from-violet/[0.13]",
    chip: "border-violet/20 bg-violet/[0.07] text-violet-soft/80",
  },
  cyan: {
    hex: "#38DDF8",
    rgb: "56,221,248",
    frame: "from-cyan/[0.1]",
    chip: "border-cyan/20 bg-cyan/[0.07] text-cyan/80",
  },
  acid: {
    hex: "#C6FF5E",
    rgb: "198,255,94",
    frame: "from-acid/[0.09]",
    chip: "border-acid/20 bg-acid/[0.06] text-acid/75",
  },
};

const iconMap: Record<ArticleVisualKind, LucideIcon> = {
  slippage: Activity,
  impact: BarChart3,
  liquidity: Droplets,
  burn: Lock,
  position: Target,
  signals: AlertTriangle,
};

const labels: Record<ArticleVisualKind, string> = {
  slippage: "Eksekusi",
  impact: "Kedalaman pool",
  liquidity: "Likuiditas",
  burn: "Kepemilikan LP",
  position: "Sizing",
  signals: "Sinyal wallet",
};

type ArticleVisualProps = {
  kind: ArticleVisualKind;
  accent: Accent;
};

export function ArticleVisual({ kind, accent }: ArticleVisualProps) {
  const styles = accentStyles[accent];
  const Icon = iconMap[kind];

  return (
    <div
      className={cn(
        "relative h-[144px] overflow-hidden border-b border-white/[0.06] bg-gradient-to-br via-transparent to-transparent",
        styles.frame,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:radial-gradient(rgba(255,255,255,0.14)_0.6px,transparent_0.6px)] [background-size:14px_14px]"
        aria-hidden="true"
      />

      <div className="absolute left-4 top-3.5 z-10 font-mono text-[8px] uppercase tracking-[0.18em] text-white/30">
        {labels[kind]}
      </div>
      <div
        className={cn(
          "absolute right-3.5 top-3 z-10 grid size-7 place-items-center rounded-lg border",
          styles.chip,
        )}
      >
        <Icon className="size-3.5" strokeWidth={1.9} />
      </div>

      {kind === "slippage" && (
        <div className="absolute inset-x-5 bottom-5 top-9">
          <svg
            viewBox="0 0 280 78"
            preserveAspectRatio="none"
            className="h-full w-full transition-transform duration-500 group-hover:scale-[1.02]"
            aria-hidden="true"
          >
            <line
              x1="0"
              y1="26"
              x2="280"
              y2="26"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="1"
              strokeDasharray="3 4"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M0 26 C 46 26, 66 30, 92 42 S 152 68, 196 57 S 246 36, 280 40"
              fill="none"
              stroke={styles.hex}
              strokeWidth="1.8"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            <line
              x1="196"
              y1="57"
              x2="196"
              y2="26"
              stroke="rgba(255,255,255,0.14)"
              strokeWidth="1"
              strokeDasharray="2 3"
              vectorEffect="non-scaling-stroke"
            />
            <circle cx="196" cy="57" r="3" fill={styles.hex} />
          </svg>
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between font-mono text-[7.5px] uppercase tracking-[0.12em] text-white/25">
            <span>Kuotasi</span>
            <span style={{ color: styles.hex }}>Eksekusi aktual</span>
          </div>
        </div>
      )}

      {kind === "impact" && (
        <div className="absolute inset-x-5 bottom-7 top-10">
          <div className="absolute inset-x-0 top-[38%] border-t border-dashed border-white/15" />
          <div className="flex h-full items-end gap-1.5">
            {[34, 46, 39, 58, 48, 74, 62, 92, 80].map((height, index) => (
              <div
                key={height}
                className={cn(
                  "flex-1 rounded-t-[3px] transition-all duration-500 group-hover:opacity-100",
                  index === 8 ? "opacity-100" : "opacity-80",
                )}
                style={{
                  height: `${height}%`,
                  backgroundColor:
                    index === 8
                      ? styles.hex
                      : `rgba(${styles.rgb},0.18)`,
                }}
              />
            ))}
          </div>
          <div className="absolute inset-x-0 -bottom-4 flex items-center justify-between font-mono text-[7.5px] uppercase tracking-[0.12em] text-white/25">
            <span>Kedalaman</span>
            <span>Ordermu</span>
          </div>
        </div>
      )}

      {kind === "liquidity" && (
        <div className="absolute inset-0">
          <div className="absolute left-[28%] top-[54%] size-[70px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/25 blur-[10px]" />
          <div className="absolute left-[52%] top-[54%] size-[70px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/20 blur-[10px]" />
          <div className="absolute left-[28%] top-[54%] size-[62px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet/30" />
          <div className="absolute left-[52%] top-[54%] size-[62px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/30" />
          <span className="absolute left-[20%] top-[28%] font-mono text-[8px] uppercase tracking-[0.14em] text-violet-soft/70">
            SOL
          </span>
          <span className="absolute right-[16%] top-[28%] font-mono text-[8px] uppercase tracking-[0.14em] text-cyan/70">
            Token
          </span>
          <span className="absolute left-1/2 top-[54%] -translate-x-1/2 -translate-y-1/2 rounded-md border border-white/10 bg-ink-900/80 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.14em] text-white/60 backdrop-blur">
            LP
          </span>
          <div className="absolute inset-x-5 bottom-4 flex items-end justify-between">
            {[30, 55, 80, 64, 42].map((height) => (
              <span
                key={height}
                className="w-3 rounded-t-sm bg-white/[0.08]"
                style={{ height: `${height * 0.35}px` }}
              />
            ))}
          </div>
        </div>
      )}

      {kind === "burn" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="relative grid size-[76px] place-items-center rounded-full bg-acid shadow-[0_0_36px_-8px_rgba(198,255,94,0.5)]">
            <div className="grid size-[64px] place-items-center rounded-full border border-white/[0.08] bg-[#0B0F1A]">
              <Lock className="size-5 text-acid" strokeWidth={1.9} />
            </div>
            <span className="absolute -right-2 -top-1 rounded-full border border-acid/30 bg-[#0B0F1A] px-2 py-0.5 font-mono text-[8px] font-medium text-acid">
              100%
            </span>
          </div>
          <span className="mt-2.5 font-mono text-[7.5px] uppercase tracking-[0.16em] text-white/30">
            LP dibakar · permanen
          </span>
        </div>
      )}

      {kind === "position" && (
        <div className="absolute inset-x-6 bottom-5 top-10 flex flex-col justify-between">
          <div className="flex items-center justify-between font-mono text-[7.5px] uppercase tracking-[0.14em] text-white/25">
            <span>Anggaran risiko</span>
            <span>1%</span>
          </div>
          <div className="grid grid-cols-5 gap-1.5">
            {Array.from({ length: 15 }).map((_, index) => (
              <span
                key={index}
                className={cn(
                  "h-4 rounded-[3px] border border-transparent",
                  index === 7 &&
                    "border-acid/70 ring-1 ring-acid/25",
                )}
                style={{
                  backgroundColor:
                    index === 7
                      ? `rgba(${styles.rgb},0.55)`
                      : index % 3 === 0
                        ? `rgba(${styles.rgb},0.16)`
                        : "rgba(255,255,255,0.055)",
                }}
              />
            ))}
          </div>
          <div className="flex items-center justify-between font-mono text-[7.5px] uppercase tracking-[0.14em] text-white/25">
            <span>Volatilitas</span>
            <span className="text-white/45">Ukuran disesuaikan</span>
          </div>
        </div>
      )}

      {kind === "signals" && (
        <div className="absolute left-1/2 top-[53%] size-[112px] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 rounded-full border border-white/[0.09]" />
          <div className="absolute inset-[20%] rounded-full border border-white/[0.08]" />
          <div className="absolute inset-[40%] rounded-full border border-white/[0.08]" />
          <div className="absolute left-1/2 top-1/2 h-px w-1/2 origin-left -rotate-[32deg] bg-gradient-to-r from-acid/50 to-transparent" />
          <span className="absolute right-[16%] top-[22%] size-1.5 rounded-full bg-acid shadow-[0_0_8px_rgba(198,255,94,0.8)]" />
          <span className="absolute left-[24%] top-[58%] size-1.5 rounded-full bg-rose-400/80" />
          <span className="absolute right-[34%] bottom-[8%] size-1 rounded-full bg-cyan/80" />
          <span className="absolute left-1/2 top-1/2 size-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70" />
          <span className="absolute -right-1 top-[38%] rounded border border-white/[0.08] bg-[#0B0F1A]/90 px-1.5 py-0.5 font-mono text-[7px] text-white/35">
            Klaster
          </span>
        </div>
      )}
    </div>
  );
}
