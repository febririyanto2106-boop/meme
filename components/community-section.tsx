"use client";

import {
  ArrowRight,
  BookOpen,
  Hash,
  Info,
  MessageCircle,
  Send,
  Sparkles,
  Users,
} from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { buttonClasses, CtaButton } from "@/components/ui/cta";
import { Modal } from "@/components/ui/modal";
import { Reveal } from "@/components/ui/reveal";
import { communityTopics } from "@/lib/data";

const stats = [
  {
    value: <AnimatedNumber value={2400} compact decimals={1} />,
    label: "Diskusi latihan",
  },
  {
    value: <AnimatedNumber value={18} decimals={0} />,
    label: "Prompt riset mingguan",
  },
  {
    value: <AnimatedNumber value={24} decimals={0} suffix="/7" />,
    label: "Belajar sesama",
  },
];

const perks = ["Catatan sesama", "Prompt riset", "Tanpa sinyal"];

export function CommunitySection() {
  const [telegramOpen, setTelegramOpen] = useState(false);

  return (
    <section id="community" className="section-pad relative scroll-mt-28">
      <div
        className="pointer-events-none absolute right-[12%] top-24 size-[360px] rounded-full bg-cyan/[0.05] blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <Reveal>
          <SectionHeading
            eyebrow="Pratinjau komunitas"
            title={
              <>
                Belajar Bersama.{" "}
                <span className="text-gradient">Riset Lebih Cerdas.</span>
              </>
            }
            description="Bergabung dengan komunitas pelajar memecoin yang berbagi pengetahuan, riset, insight, dan edukasi pasar."
            action={
              <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.025] px-3.5 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                <Users className="size-3 text-white/30" />
                Tanya jawab, bukan call
              </span>
            }
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-5">
          <Reveal className="min-w-0">
            <div className="gradient-ring relative flex h-full flex-col overflow-hidden rounded-[26px] p-6 sm:p-7">
              <div
                className="pointer-events-none absolute -right-16 -top-20 size-56 rounded-full bg-violet/15 blur-[70px]"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -left-10 bottom-0 size-40 rounded-full bg-cyan/[0.07] blur-[60px]"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -right-12 top-10 size-52 rounded-full border border-white/[0.05]"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -right-4 top-[72px] size-36 rounded-full border border-white/[0.04]"
                aria-hidden="true"
              />

              <div className="relative">
                <span className="grid size-11 place-items-center rounded-xl border border-cyan/25 bg-cyan/[0.1] text-cyan">
                  <Send className="size-5" />
                </span>

                <p className="eyebrow mt-4">Komunitas Telegram</p>
                <h3 className="mt-2 font-display text-[24px] font-semibold leading-tight tracking-[-0.02em] text-white">
                  Sudut kripto yang lebih tenang.
                </h3>
                <p className="mt-2.5 max-w-sm text-[13px] leading-relaxed text-white/45">
                  Bagikan catatan riset, ajukan pertanyaan yang lebih baik, dan
                  uji pemikiranmu bersama pelajar lain — tanpa kebisingan grup
                  sinyal.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {perks.map((perk) => (
                    <span
                      key={perk}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.025] px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-white/35"
                    >
                      <span className="size-1 rounded-full bg-acid/70" />
                      {perk}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <CtaButton
                    onClick={() => setTelegramOpen(true)}
                    className="w-full sm:w-auto"
                  >
                    <Send className="size-4" />
                    Gabung pratinjau Telegram
                  </CtaButton>
                  <p className="mt-2.5 text-[10px] text-white/25">
                    CTA pratinjau — belum ada tautan undangan aktif.
                  </p>
                </div>
              </div>

              <div className="relative mt-auto pt-7">
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-violet/10 text-violet-soft">
                      <MessageCircle className="size-3.5" />
                    </span>
                    <div className="min-w-0">
                      <p className="line-clamp-2 text-[11.5px] leading-snug text-white/55">
                        &ldquo;Apa yang pertama kamu periksa sebelum masuk ke
                        pool tipis?&rdquo;
                      </p>
                      <p className="mt-0.5 font-mono text-[7.5px] uppercase tracking-[0.14em] text-white/20">
                        Contoh prompt riset · ilustratif
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="min-w-0">
            <div className="flex h-full flex-col rounded-[26px] border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-xl sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl border border-white/[0.07] bg-white/[0.03] text-white/50">
                    <Hash className="size-[18px]" />
                  </span>
                  <div>
                    <p className="font-display text-[14px] font-medium text-white/85">
                      Pratinjau aktivitas
                    </p>
                    <p className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.14em] text-white/25">
                      Contoh topik diskusi
                    </p>
                  </div>
                </div>
                <span className="rounded-full border border-white/[0.07] bg-white/[0.03] px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.14em] text-white/30">
                  Contoh
                </span>
              </div>

              <div className="mt-4 flex-1 space-y-2.5">
                {communityTopics.map((topic, index) => (
                  <div
                    key={topic.title}
                    className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3.5 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-violet-soft/65">
                        <span className="size-1 rounded-full bg-violet/70" />
                        {topic.tag}
                      </span>
                      <span className="font-mono text-[7.5px] uppercase tracking-[0.12em] text-white/20">
                        {topic.note}
                      </span>
                    </div>
                    <p className="mt-2 text-[12.5px] font-medium leading-snug text-white/65 transition-colors group-hover:text-white/85">
                      {topic.title}
                    </p>
                    <div className="mt-2.5 flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.1em] text-white/22">
                      <span className="inline-flex items-center gap-1">
                        <MessageCircle className="size-2.5" />
                        Prompt diskusi
                      </span>
                      <span className="size-0.5 rounded-full bg-white/20" />
                      <span className="inline-flex items-center gap-1">
                        <Sparkles className="size-2.5" />
                        Pratinjau {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-4 flex items-start gap-1.5 text-[10px] leading-relaxed text-white/25">
                <Info className="mt-px size-3 shrink-0" />
                Hanya prompt diskusi ilustratif. Tidak ada pesan, orang,
                testimoni, atau angka anggota nyata yang ditampilkan.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="mt-4 rounded-[26px] border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-xl sm:mt-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
                Ringkasan komunitas
              </p>
              <span className="rounded-full border border-amber-300/15 bg-amber-300/[0.05] px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.12em] text-amber-200/55">
                Placeholder ilustratif
              </span>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2.5 sm:gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-3.5 py-4 sm:px-5"
                >
                  <p className="font-display text-[22px] font-semibold tracking-[-0.02em] text-white/90 sm:text-[26px]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[9.5px] leading-snug text-white/35 sm:text-[10.5px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-3 flex items-start gap-1.5 text-[10px] leading-relaxed text-white/25">
              <Info className="mt-px size-3 shrink-0" />
              Metrik placeholder untuk pratinjau desain. Ini bukan jumlah
              anggota komunitas nyata atau angka aktivitas live.
            </p>
          </div>
        </Reveal>
      </div>

      <Modal
        open={telegramOpen}
        onClose={() => setTelegramOpen(false)}
        label="Pratinjau komunitas Telegram"
      >
        <div className="p-6 pt-9 sm:p-7">
          <span className="grid size-11 place-items-center rounded-2xl border border-cyan/25 bg-cyan/[0.1] text-cyan">
            <Send className="size-5" />
          </span>
          <p className="eyebrow mt-4">Pratinjau komunitas</p>
          <h3 className="mt-1.5 font-display text-2xl font-semibold tracking-[-0.02em] text-white">
            Ruang Telegram belum aktif.
          </h3>
          <p className="mt-2 text-[13px] leading-relaxed text-white/45">
            Landing page ini adalah pratinjau desain edukatif, jadi belum ada
            tautan undangan nyata untuk dibagikan. Saat komunitas dibuka, akan
            ada catatan riset sesama, prompt terstruktur, dan kebijakan tanpa
            sinyal yang ketat.
          </p>

          <div className="mt-5 space-y-2">
            {[
              "Catatan dan observasi riset sesama",
              "Prompt riset on-chain mingguan",
              "Tanpa call sinyal, tanpa promosi berbayar",
            ].map((perk) => (
              <div
                key={perk}
                className="flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3.5 py-2.5 text-[12px] text-white/55"
              >
                <span className="size-1.5 rounded-full bg-acid/70" />
                {perk}
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-2.5">
            <a
              href="/#curriculum"
              onClick={() => setTelegramOpen(false)}
              className={buttonClasses("primary", "md", "w-full")}
            >
              <BookOpen className="size-4" />
              Jelajahi kurikulum
              <ArrowRight className="size-4" />
            </a>
            <button
              type="button"
              onClick={() => setTelegramOpen(false)}
              className={buttonClasses("ghost", "md", "w-full")}
            >
              Kembali ke halaman
            </button>
          </div>

          <p className="mt-4 text-center text-[10px] leading-relaxed text-white/25">
            Belum ada komunitas live untuk pratinjau ini.
          </p>
        </div>
      </Modal>
    </section>
  );
}
