import { ArrowRight, BookOpen, Check } from "lucide-react";
import { HeroTerminal } from "@/components/hero-terminal";
import { CtaLink } from "@/components/ui/cta";
import { Reveal } from "@/components/ui/reveal";

const heroStats = ["5 modul", "24 pelajaran", "Belajar mandiri", "Tanpa wallet"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-28 overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-40"
    >
      <div
        className="pointer-events-none absolute -top-24 left-[8%] size-[420px] rounded-full bg-violet/[0.09] blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[4%] top-1/3 size-[380px] rounded-full bg-cyan/[0.06] blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_1fr] lg:gap-10 xl:gap-14">
          <div className="relative">
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.09] bg-white/[0.03] py-1.5 pl-2.5 pr-3.5 backdrop-blur-xl">
                <span className="relative flex size-2 items-center justify-center">
                  <span className="absolute inline-flex size-2 animate-ping rounded-full bg-acid opacity-40" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-acid" />
                </span>
                <span className="font-mono text-[9.5px] font-medium uppercase tracking-[0.24em] text-white/60">
                  Panduan Memecoin
                </span>
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 text-balance font-display text-[2.7rem] font-semibold leading-[0.99] tracking-[-0.045em] text-white sm:text-[3.6rem] lg:text-[3.65rem] xl:text-[4.15rem]">
                <span className="block">Jangan Cuma Beli Meme.</span>
                <span className="mt-1.5 block">
                  Belajar Cara{" "}
                  <span className="text-gradient drop-shadow-[0_0_38px_rgba(168,85,247,0.18)]">
                    Membaca Pasar.
                  </span>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-[30rem] text-[15px] leading-relaxed text-white/48 sm:text-[16.5px]">
                Kuasai riset on-chain, analisis likuiditas, psikologi pasar,
                dan manajemen risiko sebelum masuk ke pasar memecoin.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CtaLink href="http://lynk.id/altelierstudio/m43mv1w5lvgx" size="lg">
                  Mulai Belajar
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </CtaLink>
                <CtaLink href="/#curriculum" variant="ghost" size="lg">
                  <BookOpen className="size-4 text-white/60" />
                  Lihat Kurikulum
                </CtaLink>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2.5">
                {heroStats.map((stat) => (
                  <span
                    key={stat}
                    className="flex items-center gap-1.5 text-[11px] text-white/35"
                  >
                    <Check className="size-3 text-acid/60" strokeWidth={2.5} />
                    {stat}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} y={30} className="relative lg:pl-2">
            <HeroTerminal />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
