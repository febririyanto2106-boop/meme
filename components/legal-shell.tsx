import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { CtaLink } from "@/components/ui/cta";
import { Reveal } from "@/components/ui/reveal";

type LegalShellProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  updated?: string;
  children: ReactNode;
};

export function LegalShell({
  eyebrow,
  title,
  description,
  updated = "November 2026",
  children,
}: LegalShellProps) {
  return (
    <div className="relative overflow-hidden pb-24 pt-28 sm:pt-32 lg:pt-40">
      <div
        className="pointer-events-none absolute -top-32 left-[18%] size-[420px] rounded-full bg-violet/[0.07] blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[10%] top-40 size-72 rounded-full bg-cyan/[0.05] blur-[110px]"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <Reveal>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[11.5px] font-medium text-white/35 transition hover:text-white/75"
          >
            <ArrowLeft className="size-3.5" />
            Back to home
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-7 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5">
              <span className="size-1.5 rounded-full bg-acid" />
              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/50">
                {eyebrow}
              </span>
            </span>
            <h1 className="mt-5 text-balance font-display text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-[2.9rem]">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-[14.5px] leading-relaxed text-white/45">
              {description}
            </p>
            <p className="mt-4 font-mono text-[8.5px] uppercase tracking-[0.18em] text-white/25">
              Last updated · {updated}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <article className="mt-10 max-w-3xl rounded-[26px] border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-xl sm:p-8 lg:p-10">
            {children}
          </article>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-5 flex max-w-3xl flex-col items-start justify-between gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 py-4 sm:flex-row sm:items-center">
            <p className="text-[12px] text-white/35">
              Ready to build a research-first approach?
            </p>
            <CtaLink href="/#learning" size="sm" className="shrink-0">
              Explore the Academy
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

type LegalSectionProps = {
  title: string;
  children: ReactNode;
};

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section className="mt-8 border-t border-white/[0.06] pt-8 first:mt-0 first:border-0 first:pt-0">
      <h2 className="font-display text-[17px] font-semibold tracking-[-0.01em] text-white/85">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-[13px] leading-[1.8] text-white/45">
        {children}
      </div>
    </section>
  );
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span className="mt-[9px] size-1 shrink-0 rounded-full bg-acid/60" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
