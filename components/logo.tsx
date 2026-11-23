import Link from "next/link";
import { Cat } from "lucide-react";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  compact?: boolean;
};

export function Logo({ className, compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Memecoin Academy home"
      className={cn("group flex items-center gap-2.5", className)}
    >
      <span className="relative grid size-9 shrink-0 place-items-center rounded-[11px] bg-gradient-to-br from-[#A855F7] via-[#7C3AED] to-[#38DDF8] shadow-[0_0_24px_-6px_rgba(168,85,247,0.65)] transition-transform duration-300 group-hover:scale-[1.04]">
        <Cat className="size-[18px] text-white" strokeWidth={2.1} />
        <span className="absolute -right-0.5 -top-0.5 size-2 rounded-full border-2 border-[#0A0D16] bg-acid" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[14px] font-semibold tracking-[0.01em] text-white">
          Memecoin
        </span>
        <span className="mt-[3px] font-mono text-[8.5px] font-medium uppercase tracking-[0.34em] text-acid/80">
          Academy
        </span>
      </span>
      {!compact && <span className="sr-only">Memecoin Academy</span>}
    </Link>
  );
}
