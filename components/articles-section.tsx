"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock,
} from "lucide-react";
import { useState } from "react";
import { ArticleVisual } from "@/components/article-visual";
import { SectionHeading } from "@/components/section-heading";
import { buttonClasses } from "@/components/ui/cta";
import { Modal } from "@/components/ui/modal";
import { Reveal } from "@/components/ui/reveal";
import { articles, type Accent, type Article } from "@/lib/data";
import { cn } from "@/lib/utils";

const accentChip: Record<Accent, string> = {
  violet: "border-violet/20 bg-violet/[0.07] text-violet-soft/80",
  cyan: "border-cyan/20 bg-cyan/[0.07] text-cyan/75",
  acid: "border-acid/20 bg-acid/[0.06] text-acid/75",
};

export function ArticlesSection() {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  return (
    <section id="articles" className="section-pad relative scroll-mt-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Catatan lapangan"
            title={
              <>
                Pelajari Konsep Yang{" "}
                <span className="text-gradient">Benar-Benar Penting.</span>
              </>
            }
            description="Bacaan singkat dan terfokus tentang mekanika di balik setiap transaksi. Penjelasan edukatif yang bisa kamu bawa ke proses risetmu sendiri."
            action={
              <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.025] px-3.5 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                <Clock className="size-3 text-white/30" />
                6 bacaan penting
              </span>
            }
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <Reveal
              key={article.slug}
              delay={index * 0.045}
              className="h-full"
            >
              <button
                type="button"
                onClick={() => setActiveArticle(article)}
                aria-label={`Baca ${article.title}`}
                className="group relative flex h-full w-full flex-col overflow-hidden rounded-[22px] border border-white/[0.07] bg-white/[0.025] text-left transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.14] hover:shadow-[0_30px_80px_-44px_rgba(0,0,0,0.95)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-acid/50"
              >
                <ArticleVisual kind={article.visual} accent={article.accent} />

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span
                      className={cn(
                        "rounded-full border px-2 py-0.5 font-mono text-[7.5px] uppercase tracking-[0.12em]",
                        accentChip[article.accent],
                      )}
                    >
                      {article.category}
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-[8.5px] uppercase tracking-[0.1em] text-white/25">
                      <Clock className="size-2.5" />
                      {article.minutes} mnt baca
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-[16px] font-semibold leading-snug tracking-[-0.015em] text-white/90 transition-colors duration-300 group-hover:text-white">
                    {article.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-[12px] leading-relaxed text-white/40">
                    {article.excerpt}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-5">
                    <span className="text-[11px] font-medium text-white/35 transition-colors duration-300 group-hover:text-acid/80">
                      Baca artikel
                    </span>
                    <span className="grid size-7 place-items-center rounded-full border border-white/[0.08] bg-white/[0.02] text-white/30 transition-all duration-300 group-hover:border-acid/25 group-hover:bg-acid/[0.08] group-hover:text-acid">
                      <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Modal
        open={activeArticle !== null}
        onClose={() => setActiveArticle(null)}
        label={activeArticle?.title ?? "Pratinjau artikel"}
        className="max-w-2xl"
      >
        {activeArticle && (
          <div className="p-6 pt-9 sm:p-8 sm:pt-10">
            <div className="flex flex-wrap items-center gap-2.5">
              <span
                className={cn(
                  "rounded-full border px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.14em]",
                  accentChip[activeArticle.accent],
                )}
              >
                {activeArticle.category}
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-white/30">
                <Clock className="size-3" />
                {activeArticle.minutes} mnt baca
              </span>
            </div>

            <h2 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-[-0.025em] text-white sm:text-[27px]">
              {activeArticle.title}
            </h2>

            <p className="mt-3 border-l-2 border-violet/40 pl-3 text-[13px] italic leading-relaxed text-white/45">
              {activeArticle.excerpt}
            </p>

            <div className="mt-5 space-y-4">
              {activeArticle.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="text-[13.5px] leading-[1.8] text-white/55"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4">
              <p className="font-mono text-[8.5px] uppercase tracking-[0.18em] text-acid/65">
                Poin penting
              </p>
              <ul className="mt-3 space-y-2">
                {activeArticle.takeaways.map((takeaway) => (
                  <li
                    key={takeaway}
                    className="flex items-start gap-2.5 text-[12px] leading-snug text-white/55"
                  >
                    <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-acid/[0.08] text-acid">
                      <Check className="size-2.5" strokeWidth={3} />
                    </span>
                    {takeaway}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-[16rem] text-[9.5px] leading-relaxed text-white/25">
                Konten edukatif. Tidak ada bagian di sini yang merupakan
                nasihat keuangan atau investasi.
              </p>
              <a
                href="/#curriculum"
                onClick={() => setActiveArticle(null)}
                className={buttonClasses("ghost", "sm", "shrink-0")}
              >
                Lanjut belajar
                <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
