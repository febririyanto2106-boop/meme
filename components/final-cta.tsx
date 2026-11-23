import { ArrowRight, ShieldCheck } from "lucide-react";
import { CtaLink } from "@/components/ui/cta";
import { Reveal } from "@/components/ui/reveal";

export function FinalCta() {
  return (
    <section className="relative pb-24 pt-4 lg:pb-32">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-white/[0.09] bg-gradient-to-b from-white/[0.05] via-white/[0.025] to-white/[0.01] px-6 py-16 text-center sm:px-12 sm:py-20">
            <div
              className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,black,transparent)]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 size-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 size-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 size-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/[0.12] blur-[110px]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-20 right-[16%] size-56 rounded-full bg-acid/[0.06] blur-[90px]"
              aria-hidden="true"
            />
            <span
              className="absolute left-[18%] top-[26%] hidden size-1.5 animate-pulse-soft rounded-full bg-acid/70 sm:block"
              aria-hidden="true"
            />
            <span
              className="absolute bottom-[24%] right-[20%] hidden size-1 rounded-full bg-cyan/70 sm:block"
              aria-hidden="true"
            />

            <div className="relative mx-auto max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.03] px-3 py-1.5 backdrop-blur-xl">
                <span className="size-1.5 rounded-full bg-acid shadow-[0_0_10px_rgba(198,255,94,0.7)]" />
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/50">
                  Mulai di sini
                </span>
              </span>

              <h2 className="mt-6 text-balance font-display text-[2.1rem] font-semibold leading-[1.04] tracking-[-0.04em] text-white sm:text-[2.8rem] lg:text-[3.05rem]">
                <span className="block">Pasar Bergerak Cepat.</span>
                <span className="mt-1 block">
                  Pastikan Kamu{" "}
                  <span className="text-gradient">Memahaminya.</span>
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-lg text-[14.5px] leading-relaxed text-white/45">
                Bangun keterampilan risetmu. Pahami risikonya. Ambil keputusan
                yang lebih terinformasi.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <CtaLink href="/#learning" size="lg">
                  Mulai Perjalanan Belajarmu
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </CtaLink>
              </div>

              <p className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5 text-[10px] text-white/25">
                <ShieldCheck className="size-3.5 text-acid/50" />
                Pratinjau edukatif · Tanpa wallet · Bukan nasihat keuangan
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
