"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  House,
  LogIn,
  Search,
  UserRound,
  Users,
  type LucideIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AccountModal } from "@/components/account-modal";
import { Logo } from "@/components/logo";
import { CtaLink } from "@/components/ui/cta";
import { cn } from "@/lib/utils";

type AccountMode = "login" | "profile";

const desktopNavItems = [
  { label: "Beranda", href: "/#home", section: "home" },
  { label: "Belajar", href: "/#learning", section: "learning" },
  { label: "Riset", href: "/#research", section: "research" },
  { label: "Strategi", href: "/#curriculum", section: "curriculum" },
  { label: "Komunitas", href: "/#community", section: "community" },
];

const mobileNavItems: {
  label: string;
  href?: string;
  section?: string;
  icon: LucideIcon;
}[] = [
  { label: "Beranda", href: "/#home", section: "home", icon: House },
  {
    label: "Belajar",
    href: "/#learning",
    section: "learning",
    icon: GraduationCap,
  },
  { label: "Riset", href: "/#research", section: "research", icon: Search },
  {
    label: "Komunitas",
    href: "/#community",
    section: "community",
    icon: Users,
  },
  { label: "Profil", icon: UserRound },
];

const sectionIds = ["home", "learning", "research", "curriculum", "community"];

export function SiteNavigation() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [accountMode, setAccountMode] = useState<AccountMode | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    setAccountMode(null);
  }, [pathname]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 hidden lg:block">
        <div className="container-page">
          <div
            className={cn(
              "mt-5 flex h-[64px] items-center justify-between gap-4 rounded-full border py-2 pl-5 pr-2.5 shadow-[0_20px_70px_-30px_rgba(0,0,0,0.95)] backdrop-blur-2xl transition-colors duration-500",
              scrolled
                ? "border-white/[0.11] bg-[#0A0D16]/88"
                : "border-white/[0.08] bg-[#0A0D16]/65",
            )}
          >
            <Logo />

            <nav
              aria-label="Navigasi utama"
              className="flex items-center rounded-full border border-white/[0.05] bg-white/[0.02] p-1"
            >
              {desktopNavItems.map((item) => {
                const active = activeSection === item.section;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative rounded-full px-3.5 py-2 text-[12.5px] font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-acid/50",
                      active
                        ? "text-white"
                        : "text-white/45 hover:text-white/80",
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="desktop-nav-active"
                        className="absolute inset-0 rounded-full border border-white/[0.08] bg-white/[0.06]"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 34,
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setAccountMode("login")}
                className="rounded-full px-3 py-2 text-[12.5px] font-medium text-white/55 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-acid/50"
              >
                Masuk
              </button>
              <CtaLink href="/#learning" size="sm" className="pr-3.5">
                Mulai Belajar
                <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </CtaLink>
            </div>
          </div>
        </div>
      </header>

      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-[max(0.75rem,env(safe-area-inset-top))] lg:hidden">
        <div className="flex h-14 items-center justify-between rounded-2xl border border-white/[0.09] bg-[#0A0D16]/78 px-3.5 shadow-[0_16px_50px_-24px_rgba(0,0,0,0.95)] backdrop-blur-2xl">
          <Logo />
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setAccountMode("login")}
              aria-label="Masuk"
              className="grid size-8 place-items-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white/55 transition hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-acid/50"
            >
              <LogIn className="size-3.5" />
            </button>
            <CtaLink href="/#learning" size="sm" className="h-8 gap-1 px-3.5 text-[11px]">
              Mulai
              <ArrowRight className="size-3" />
            </CtaLink>
          </div>
        </div>
      </header>

      <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
        <nav
          aria-label="Navigasi mobile"
          className="mx-auto flex max-w-md items-stretch gap-0.5 rounded-[22px] border border-white/[0.09] bg-[#0A0D16]/88 p-1.5 shadow-[0_-16px_60px_-24px_rgba(0,0,0,0.95)] backdrop-blur-2xl"
        >
          {mobileNavItems.map((item) => {
            const isProfile = !item.href;
            const active = isProfile
              ? accountMode !== null
              : item.section === "learning"
                ? activeSection === "learning" || activeSection === "curriculum"
                : activeSection === item.section;

            const Icon = item.icon;

            const inner = (
              <>
                {active && (
                  <motion.span
                    layoutId="mobile-nav-active"
                    className="absolute inset-0 rounded-2xl border border-white/[0.08] bg-white/[0.07]"
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
                <motion.span
                  className="relative z-10 flex flex-col items-center gap-[3px]"
                  animate={{
                    y: active ? -1 : 0,
                    scale: active ? 1.06 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 420, damping: 28 }}
                >
                  <Icon
                    className={cn(
                      "size-[19px] transition-colors duration-300",
                      active
                        ? "text-acid drop-shadow-[0_0_8px_rgba(198,255,94,0.55)]"
                        : "text-white/38",
                    )}
                    strokeWidth={active ? 2.2 : 1.8}
                  />
                  <span
                    className={cn(
                      "text-[9px] font-medium tracking-[0.01em] transition-colors duration-300",
                      active ? "text-acid/90" : "text-white/35",
                    )}
                  >
                    {item.label}
                  </span>
                </motion.span>
              </>
            );

            if (isProfile) {
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setAccountMode("profile")}
                  aria-label="Buka pratinjau profil"
                  aria-current={active ? "page" : undefined}
                  className="relative flex h-[54px] flex-1 flex-col items-center justify-center rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-acid/50"
                >
                  {inner}
                </button>
              );
            }

            return (
              <a
                key={item.label}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className="relative flex h-[54px] flex-1 flex-col items-center justify-center rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-acid/50"
              >
                {inner}
              </a>
            );
          })}
        </nav>
      </div>

      <AccountModal
        mode={accountMode}
        onClose={() => setAccountMode(null)}
        onChangeMode={setAccountMode}
      />
    </>
  );
}
