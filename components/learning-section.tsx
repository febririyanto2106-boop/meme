import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Droplets,
  Radar,
  ShieldAlert,
  Sparkles,
  Target,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { learningTracks, type Accent, type Level } from "@/lib/data";
import { CtaLink } from "@/components/ui/cta";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  wallet: Wallet,
  droplets: Droplets,
  target: Target,
  shield: ShieldAlert,
  radar: Radar,
};

const accentMap: Record<
  Accent,
  { tile: string; glow: string; number: string }
> = {
  violet: {
    tile: "border-violet/20 bg-violet/[0.09] text-violet-soft",
    glow: "from-violet/20",
    number: "text-violet/10",
  },
  cyan: {
    tile: "border-cyan/20 bg-cyan/[0.07] text-cyan",
    glow: "from-cyan/15",
    number: "text-cyan/10",
  },
  acid: {
    tile: "border-acid/20 bg-acid/[0.07] text-acid",
    glow: "from-acid/15",
    number: "text-acid/10",
  },
};

const levelMap: Record<Level, string> = {
  Pemula: "border-acid/20 bg-acid/[0.06] text-acid/75",
  Menengah: "border-cyan/20 bg-cyan/[0.06] text-cyan/75",
  Lanjutan: "border-violet/25 bg-violet/[0.08] text-violet-soft/85",
};

export function LearningSection() {
  return (
    <section id="learning" className="section-pad relative scroll-mt-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Jalur belajar"
            title={
              <>
                Perjalananmu Dari{" "}
                <span className="text-gradient">Pemula Menjadi Peneliti</span>
              </>
            }
            description="Jalur terstruktur melalui mekanika, tools, dan kerangka keputusan di balik riset memecoin. Tanpa hype, tanpa sinyal — hanya cara berpikir yang bisa diulang."
            action={
              <CtaLink href="/#curriculum" variant="ghost" size="md">
                Kurikulum lengkap
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </CtaLink>
            }
          />
        </Reveal>

        <div className="mt-10 grid gap-3.5 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {learningTracks.map((track, index) => {
            const Icon = iconMap[track.icon];
            const accent = accentMap[track.accent];

            return (
              <Reveal key={track.id} delay={index * 0.045} className="h-full">
                <a
                  href="/#curriculum"
                  aria-label={`Jelajahi ${track.title} di kurikulum`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-white/[0.07] bg-white/[0.025] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.14] hover:bg-white/[0.04] hover:shadow-[0_30px_80px_-44px_rgba(0,0,0,0.95)] sm:p-6"
                >
                  <span
                    className={cn(
                      "pointer-events-none absolute -right-12 -top-16 size-44 rounded-full bg-gradient-to-br to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100",
                      accent.glow,
                    )}
                    aria-hidden="true"
                  />
                  <span
                    className={cn(
                      "pointer-events-none absolute -bottom-7 right-1 select-none font-display text-[92px] font-bold leading-none tracking-tighter transition-opacity duration-500 group-hover:opacity-100",
                      accent.number,
                    )}
                    aria-hidden="true"
                  >
                    {track.index}
                  </span>

                  <div className="relative flex items-start justify-between gap-3">
                    <span
                      className={cn(
                        "grid size-11 place-items-center rounded-xl border transition-transform duration-500 group-hover:scale-105",
                        accent.tile,
                      )}
                    >
                      <Icon className="size-5" strokeWidth={1.9} />
                    </span>
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[8.5px] uppercase tracking-[0.14em]",
                        levelMap[track.level],
                      )}
                    >
                      <span className="size-1 rounded-full bg-current" />
                      {track.level}
                    </span>
                  </div>

                  <div className="relative mt-5 flex flex-1 flex-col">
                    <h3 className="font-display text-[16.5px] font-semibold tracking-[-0.01em] text-white/92">
                      {track.title}
                    </h3>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-white/42">
                      {track.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-6">
                      <span className="inline-flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.12em] text-white/32">
                        <BookOpen className="size-3.5" />
                        {track.lessons} pelajaran
                      </span>
                      <span className="grid size-8 place-items-center rounded-full border border-white/[0.08] bg-white/[0.02] text-white/35 transition-all duration-300 group-hover:border-acid/25 group-hover:bg-acid/[0.08] group-hover:text-acid">
                        <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-5 flex flex-col items-start justify-between gap-4 rounded-[20px] border border-white/[0.07] bg-gradient-to-r from-violet/[0.07] via-white/[0.02] to-transparent p-5 sm:flex-row sm:items-center sm:p-6">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 size-2 shrink-0 rounded-full bg-acid shadow-[0_0_12px_rgba(198,255,94,0.7)]" />
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">
                  Baru di memecoin?
                </p>
                <p className="mt-1 text-[13.5px] text-white/65">
                  Mulai dari Modul 01 — tanpa wallet atau pengalaman sebelumnya.
                </p>
              </div>
            </div>
            <CtaLink href="/#curriculum" size="sm" className="shrink-0">
              Mulai Modul 01
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
