import { AlertTriangle, Send } from "lucide-react";
import { Logo } from "@/components/logo";

const columns = [
  {
    title: "Platform",
    links: [
      { label: "Tentang", href: "/about" },
      { label: "Belajar", href: "/#learning" },
      { label: "Riset", href: "/#research" },
      { label: "Komunitas", href: "/#community" },
    ],
  },
  {
    title: "Kurikulum",
    links: [
      { label: "Memulai", href: "/#curriculum" },
      { label: "Riset On-Chain", href: "/#curriculum" },
      { label: "Mekanika Likuiditas", href: "/#curriculum" },
      { label: "Riset Lanjutan", href: "/#curriculum" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Kebijakan Privasi", href: "/privacy" },
      { label: "Syarat & Ketentuan", href: "/terms" },
      { label: "Penafian Risiko", href: "/risk-disclaimer" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-[#070910]/70">
      <div className="container-page pb-[calc(7.25rem+env(safe-area-inset-bottom))] pt-14 lg:pb-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-8">
          <div>
            <Logo />
            <p className="mt-4 max-w-[17rem] text-[12.5px] leading-relaxed text-white/35">
              Akademi riset-first dan edukasi-saja untuk memahami pasar memecoin
              di Solana dan sekitarnya.
            </p>

            <div className="mt-5 flex items-center gap-2.5">
              <a
                href="/#community"
                aria-label="Pratinjau komunitas"
                className="grid size-9 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-white/40 transition hover:border-cyan/25 hover:bg-cyan/[0.06] hover:text-cyan"
              >
                <Send className="size-4" />
              </a>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-white/25">
                <span className="size-1 animate-pulse-soft rounded-full bg-acid/70" />
                Pratinjau edukatif
              </span>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <p className="font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-white/35">
                {column.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[12.5px] text-white/40 transition-colors hover:text-white/75"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-start gap-3 rounded-2xl border border-amber-300/[0.13] bg-amber-300/[0.035] p-4">
          <AlertTriangle className="mt-0.5 size-4 shrink-0 text-amber-300/60" />
          <div>
            <p className="font-mono text-[8.5px] uppercase tracking-[0.18em] text-amber-200/50">
              Penafian risiko
            </p>
            <p className="mt-1 text-[11px] leading-relaxed text-white/38">
              Hanya untuk tujuan edukasi. Tidak ada bagian dari platform ini yang
              merupakan nasihat keuangan atau investasi. Memecoin sangat volatil
              dan mengandung risiko besar.
            </p>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-2.5 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10.5px] text-white/25">
            © 2026 Memecoin Academy. Hak cipta dilindungi.
          </p>
          <p className="text-[10.5px] text-white/22">
            Token fiktif dan data ilustratif digunakan di seluruh pratinjau ini.
          </p>
        </div>
      </div>
    </footer>
  );
}
