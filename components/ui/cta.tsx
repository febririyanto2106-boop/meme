import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "soft";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-acid/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-acid text-ink-950 hover:-translate-y-0.5 hover:bg-acid-soft hover:shadow-glow-lime active:translate-y-0",
  ghost:
    "border border-white/10 bg-white/[0.04] text-white backdrop-blur-xl hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07] active:translate-y-0",
  soft: "bg-white text-ink-950 hover:-translate-y-0.5 hover:bg-white/90 active:translate-y-0",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[12px]",
  md: "h-11 px-5 text-[13px]",
  lg: "h-[52px] px-6 text-sm sm:px-7",
};

export function buttonClasses(
  variant: Variant = "primary",
  size: Size = "md",
  className?: string,
) {
  return cn(base, variants[variant], sizes[size], className);
}

type CtaLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

export function CtaLink({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CtaLinkProps) {
  return (
    <a className={buttonClasses(variant, size, className)} {...props}>
      {children}
    </a>
  );
}

type CtaButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

export function CtaButton({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CtaButtonProps) {
  return (
    <button className={buttonClasses(variant, size, className)} {...props}>
      {children}
    </button>
  );
}
