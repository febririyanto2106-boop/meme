import type { Metadata } from "next";
import {
  BookOpen,
  Search,
  ShieldCheck,
} from "lucide-react";
import { LegalSection, LegalShell } from "@/components/legal-shell";

export const metadata: Metadata = {
  title: "About",
  description:
    "Memecoin Academy is a research-first, educational platform for understanding memecoin markets, on-chain activity, and risk.",
};

const principles = [
  {
    icon: BookOpen,
    title: "Education before execution",
    copy: "Concepts are taught before tactics. Understanding comes first, and nothing here is framed as a trade signal.",
  },
  {
    icon: Search,
    title: "Research over hype",
    copy: "We focus on on-chain evidence, liquidity conditions, and market structure — not promises about outcomes.",
  },
  {
    icon: ShieldCheck,
    title: "Risk awareness by default",
    copy: "Volatility, thin liquidity, and unreliable information are part of the curriculum, not an afterthought.",
  },
];

export default function AboutPage() {
  return (
    <LegalShell
      eyebrow="About the Academy"
      title={
        <>
          Education first.{" "}
          <span className="text-gradient">Hype last.</span>
        </>
      }
      description="Memecoin Academy is a research-first learning experience for people who want to understand how memecoin markets actually work — before they make decisions."
      updated="November 2026"
    >
      <LegalSection title="Why this exists">
        <p>
          Memecoin markets are full of numbers without context: market caps,
          liquidity pools, holder counts, buy and sell pressure. Most people see
          the dashboard before they understand the mechanics behind it.
        </p>
        <p>
          This platform was built to reverse that order. The goal is a calm,
          structured way to learn how tokens launch, how liquidity behaves, how
          on-chain activity can be inspected, and how risk shows up before it
          becomes expensive.
        </p>
      </LegalSection>

      <LegalSection title="Our learning principles">
        <div className="mt-2 grid gap-2.5 sm:grid-cols-3">
          {principles.map((principle) => {
            const Icon = principle.icon;

            return (
              <div
                key={principle.title}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4"
              >
                <span className="grid size-8 place-items-center rounded-lg border border-violet/20 bg-violet/[0.08] text-violet-soft">
                  <Icon className="size-4" />
                </span>
                <h3 className="mt-3 font-display text-[13px] font-semibold text-white/80">
                  {principle.title}
                </h3>
                <p className="mt-1.5 text-[11.5px] leading-relaxed text-white/38">
                  {principle.copy}
                </p>
              </div>
            );
          })}
        </div>
      </LegalSection>

      <LegalSection title="What you can learn">
        <p>
          The curriculum covers memecoin fundamentals, the Solana ecosystem,
          launch mechanics, DexScreener literacy, wallet tracking, holder
          distribution, liquidity pools, LP burn, volume analysis, price impact,
          slippage, entry planning, position sizing, and a research framework
          you can repeat.
        </p>
        <p>
          Every module is designed as education. You are not being asked to
          transact, connect a wallet, or follow a call.
        </p>
      </LegalSection>

      <LegalSection title="What this is not">
        <p>
          This is not a signal service, a trading bot, a fund, or a financial
          advisory platform. We do not publish price predictions and we do not
          promote specific tokens. Fictional assets such as $MOONCAT and all
          dashboard figures are illustrative examples used for learning.
        </p>
        <p>
          This build is also a product preview. Account access, community
          features, and live data are not connected.
        </p>
      </LegalSection>

      <LegalSection title="The bottom line">
        <p>
          Memecoins combine high volatility, thin liquidity, and rapidly
          changing narratives. Education can improve how you research and
          evaluate a market, but it cannot remove risk. Nothing on this platform
          constitutes financial or investment advice.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
