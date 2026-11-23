import type { Metadata } from "next";
import {
  LegalList,
  LegalSection,
  LegalShell,
} from "@/components/legal-shell";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms of use for the Memecoin Academy educational preview. Education only — no financial or investment advice.",
};

export default function TermsPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Terms & Conditions"
      description="These terms apply to your use of the Memecoin Academy preview. The platform is educational and does not provide financial or investment advice."
      updated="November 2026"
    >
      <LegalSection title="1. Acceptance of terms">
        <p>
          By accessing this preview, you agree to these terms. If you do not
          agree, please discontinue use. These terms apply alongside the Privacy
          Policy and Risk Disclaimer.
        </p>
      </LegalSection>

      <LegalSection title="2. Educational purpose only">
        <p>
          Memecoin Academy provides educational content about memecoin markets,
          on-chain research, liquidity mechanics, and risk management. Nothing
          on the platform is financial, investment, legal, or tax advice, and
          nothing should be treated as a recommendation to buy, sell, or hold
          any asset.
        </p>
      </LegalSection>

      <LegalSection title="3. Preview limitations">
        <LegalList
          items={[
            "Accounts, sign-in, and the community are not connected in this build.",
            "All market dashboards, token names, and metrics are illustrative.",
            "$MOONCAT is a fictional asset created for educational examples.",
            "Features may change, be removed, or be replaced at launch.",
          ]}
        />
      </LegalSection>

      <LegalSection title="4. No guarantees">
        <p>
          We make no guarantee that content is complete, current, or suitable
          for any particular purpose. Markets change quickly, and educational
          examples may not reflect live conditions. You are responsible for your
          own research and decisions.
        </p>
      </LegalSection>

      <LegalSection title="5. Acceptable use">
        <p>You agree not to:</p>
        <LegalList
          items={[
            "Use the platform for unlawful purposes or to harm others.",
            "Attempt to extract, scrape, or republish the curriculum at scale without permission.",
            "Misrepresent educational content as financial advice or a signal service.",
            "Interfere with the security or availability of the site.",
          ]}
        />
      </LegalSection>

      <LegalSection title="6. Intellectual property">
        <p>
          The site design, copy, curriculum structure, and original visual
          elements are protected by applicable intellectual property laws.
          Third-party names and marks — including Solana, Pump.fun, and
          DexScreener — belong to their respective owners and are referenced for
          educational identification only. Reference does not imply endorsement
          or partnership.
        </p>
      </LegalSection>

      <LegalSection title="7. Limitation of liability">
        <p>
          To the maximum extent permitted by law, Memecoin Academy and its
          contributors are not liable for losses or damages arising from use of
          the site or reliance on its educational content. Trading memecoins
          involves substantial risk, including the loss of all funds.
        </p>
      </LegalSection>

      <LegalSection title="8. Changes and contact">
        <p>
          These terms may be updated as the product evolves. Continued use after
          an update means you accept the revised terms. Official contact details
          will be published when the platform launches.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
