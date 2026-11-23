import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";
import {
  LegalList,
  LegalSection,
  LegalShell,
} from "@/components/legal-shell";

export const metadata: Metadata = {
  title: "Risk Disclaimer",
  description:
    "Risk disclosure for memecoin markets. Educational purposes only. Nothing on Memecoin Academy is financial or investment advice.",
};

export default function RiskDisclaimerPage() {
  return (
    <LegalShell
      eyebrow="Risk disclosure"
      title="Risk Disclaimer"
      description="Memecoin markets are fast, volatile, and unforgiving. This page summarises the risks that education can help you understand — but cannot remove."
      updated="November 2026"
    >
      <div className="flex items-start gap-3 rounded-2xl border border-amber-300/15 bg-amber-300/[0.04] p-4">
        <AlertTriangle className="mt-0.5 size-4 shrink-0 text-amber-300/70" />
        <p className="text-[12.5px] leading-relaxed text-white/55">
          Educational purposes only. Nothing on this platform constitutes
          financial or investment advice. Memecoins are highly volatile and
          involve substantial risk.
        </p>
      </div>

      <LegalSection title="Volatility risk">
        <p>
          Memecoin prices can move dramatically within minutes. Narratives
          change, attention shifts, and liquidity can disappear. A position can
          lose a large portion of its value before a research process has time
          to react.
        </p>
      </LegalSection>

      <LegalSection title="Liquidity risk">
        <p>
          Thin liquidity produces high price impact and unpredictable exits. A
          pool that looks large at the surface may be concentrated around a
          narrow price range, or controlled by a small number of wallets.
          Slippage and failed transactions are part of this environment.
        </p>
      </LegalSection>

      <LegalSection title="Scam and contract risk">
        <p>
          Token contracts can contain hidden powers, holder clusters can be
          misleading, and fake projects can imitate real ones. LP burn does not
          make an asset safe. On-chain data can inform research but cannot
          guarantee intent or future behaviour.
        </p>
      </LegalSection>

      <LegalSection title="Execution risk">
        <p>
          Quotes can change before a transaction confirms. Network congestion,
          priority fees, and aggressive slippage settings can all affect the
          final fill. Never treat an indicative number on a dashboard as a
          guaranteed execution price.
        </p>
      </LegalSection>

      <LegalSection title="Information risk">
        <p>
          All dashboards on this site use illustrative mock data. $MOONCAT and
          the other tokens shown are fictional. Figures are not live market
          data, not investment signals, and not endorsements. Real-world data
          should be independently verified.
        </p>
      </LegalSection>

      <LegalSection title="No advice and no guarantees">
        <LegalList
          items={[
            "Memecoin Academy does not provide personalised financial advice.",
            "Educational frameworks do not guarantee better outcomes.",
            "Past behaviour of any token or market does not predict future results.",
            "You are solely responsible for your own decisions and risk.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Personal responsibility">
        <p>
          If you choose to participate in memecoin markets, only use what you can
          afford to lose and understand the mechanisms before acting. If any
          aspect of a token or trade is unclear, the safest educational decision
          is to keep researching — or to not participate.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
