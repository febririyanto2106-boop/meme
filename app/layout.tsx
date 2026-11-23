import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavigation } from "@/components/site-navigation";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Memecoin Academy — Belajar Membaca Pasar",
    template: "%s | Memecoin Academy",
  },
  description:
    "Platform edukasi riset-first untuk trading memecoin, riset on-chain, Solana, Pump.fun, DexScreener, analisis likuiditas, psikologi pasar, dan manajemen risiko.",
  applicationName: "Memecoin Academy",
  keywords: [
    "memecoin academy",
    "memecoin trading education",
    "on-chain research",
    "Solana ecosystem",
    "Pump.fun",
    "DexScreener",
    "liquidity analysis",
    "risk management",
  ],
  openGraph: {
    title: "Memecoin Academy — Belajar Membaca Pasar",
    description:
      "Kuasai riset on-chain, analisis likuiditas, psikologi pasar, dan manajemen risiko sebelum masuk ke pasar memecoin.",
    siteName: "Memecoin Academy",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary",
    title: "Memecoin Academy — Belajar Membaca Pasar",
    description:
      "Pengalaman belajar premium riset-first untuk pasar memecoin. Hanya edukasi — bukan nasihat keuangan.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#090B12",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="relative min-h-screen overflow-x-hidden bg-ink-900 font-sans text-white antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:rounded-full focus:bg-acid focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-950"
        >
          Lewati ke konten
        </a>

        <div
          className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-ink-900" />
          <div className="mask-fade-top absolute inset-0 bg-grid opacity-70" />
          <div className="absolute -left-48 top-[-12%] size-[560px] rounded-full bg-violet/[0.08] blur-[150px]" />
          <div className="absolute -right-40 top-[22%] size-[500px] rounded-full bg-cyan/[0.05] blur-[150px]" />
          <div className="absolute bottom-[6%] left-[24%] size-[520px] rounded-full bg-acid/[0.025] blur-[170px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(6,7,12,0.65))]" />
          <div className="noise-layer absolute inset-0" />
        </div>

        <SiteNavigation />
        <main id="main" className="relative z-10">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
