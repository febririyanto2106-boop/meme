"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  Clock,
  Layers,
} from "lucide-react";
import { useState } from "react";
import { CtaLink } from "@/components/ui/cta";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/section-heading";
import { curriculumModules } from "@/lib/data";
import { cn } from "@/lib/utils";

const meta = [
  { icon: Layers, label: "5 modul" },
  { icon: BookOpen, label: "24 pelajaran" },
  { icon: Clock, label: "Total 2j 09m" },
];

export function CurriculumSection() {
  const [openModule, setOpenModule] = useState<string | null>("module-01");

  return (
    <section id="curriculum" className="section-pad relative scroll-mt-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Kurikulum"
            title={
              <>
                Semua Yang Kamu Butuhkan Untuk{" "}
                <span className="text-gradient">Memahami Memecoin.</span>
              </>
            }
            description="Lima modul terfokus yang membangun dari prinsip dasar hingga proses riset yang bisa diulang. Buka modul untuk melihat isinya."
          />
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
            {meta.map((item) => {
              const Icon = item.icon;

              return (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-white/40"
                >
                  <Icon className="size-3 text-white/30" />
                  {item.label}
                </span>
              );
            })}
          </div>
        </Reveal>

        <div className="mx-auto mt-10 max-w-3xl space-y-2.5 sm:mt-12">
          {curriculumModules.map((module, index) => {
            const isOpen = openModule === module.id;

            return (
              <Reveal key={module.id} delay={index * 0.04}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border transition-colors duration-300",
                    isOpen
                      ? "border-white/[0.14] bg-white/[0.04]"
                      : "border-white/[0.07] bg-white/[0.02] hover:border-white/[0.11] hover:bg-white/[0.03]",
                  )}
                >
                  <button
                    type="button"
                    id={`${module.id}-trigger`}
                    onClick={() =>
                      setOpenModule(isOpen ? null : module.id)
                    }
                    aria-expanded={isOpen}
                    aria-controls={`${module.id}-panel`}
                    className="flex w-full items-center gap-3.5 p-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-acid/40 sm:gap-4 sm:p-5"
                  >
                    <span
                      className={cn(
                        "grid size-10 shrink-0 place-items-center rounded-xl border font-mono text-[11px] transition-colors duration-300",
                        isOpen
                          ? "border-acid/25 bg-acid/[0.08] text-acid"
                          : "border-white/[0.07] bg-white/[0.03] text-white/35",
                      )}
                    >
                      {module.number}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-[14.5px] font-medium tracking-[-0.01em] text-white/90 sm:text-[15.5px]">
                        {module.title}
                      </span>
                      <span className="mt-1 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[8.5px] uppercase tracking-[0.12em] text-white/30">
                        <span>{module.lessons.length} pelajaran</span>
                        <span className="size-0.5 rounded-full bg-white/20" />
                        <span>{module.duration}</span>
                        <span className="size-0.5 rounded-full bg-white/20" />
                        <span>{module.level}</span>
                      </span>
                    </span>

                    <span
                      className={cn(
                        "grid size-8 shrink-0 place-items-center rounded-full border transition-all duration-300",
                        isOpen
                          ? "rotate-180 border-white/[0.15] bg-white/[0.06] text-white"
                          : "border-white/[0.07] bg-white/[0.02] text-white/30",
                      )}
                      aria-hidden="true"
                    >
                      <ChevronDown className="size-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="panel"
                        id={`${module.id}-panel`}
                        role="region"
                        aria-labelledby={`${module.id}-trigger`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.36,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-white/[0.06] px-4 pb-4 pt-1.5 sm:px-5 sm:pb-5">
                          <ul className="divide-y divide-white/[0.05]">
                            {module.lessons.map((lesson, lessonIndex) => (
                              <li
                                key={lesson}
                                className="flex items-center gap-3 py-2.5"
                              >
                                <span className="w-5 shrink-0 font-mono text-[9px] text-white/20">
                                  {String(lessonIndex + 1).padStart(2, "0")}
                                </span>
                                <span className="flex-1 text-[12.5px] text-white/60">
                                  {lesson}
                                </span>
                                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/[0.05] bg-white/[0.02] px-2 py-0.5 font-mono text-[7.5px] uppercase tracking-[0.14em] text-white/25">
                                  <BookOpen className="size-2.5" />
                                  Pelajaran
                                </span>
                              </li>
                            ))}
                          </ul>

                          <div className="mt-3 flex items-center justify-between rounded-xl border border-white/[0.05] bg-white/[0.02] px-3.5 py-2.5">
                            <span className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-white/25">
                              Modul {module.number} · Belajar mandiri
                            </span>
                            <a
                              href="/#learning"
                              className="group inline-flex items-center gap-1 text-[11px] font-medium text-acid/75 transition hover:text-acid"
                            >
                              Jelajahi jalur
                              <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-5 flex max-w-3xl flex-col items-start justify-between gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 py-4 sm:flex-row sm:items-center">
            <p className="text-[12.5px] text-white/40">
              Mulai dari nol. Tanpa pengalaman trading atau wallet.
            </p>
            <CtaLink href="/#learning" size="sm" className="shrink-0">
              Mulai Belajar
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
