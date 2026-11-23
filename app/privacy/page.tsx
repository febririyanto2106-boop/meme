import type { Metadata } from "next";
import {
  LegalList,
  LegalSection,
  LegalShell,
} from "@/components/legal-shell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How the Memecoin Academy preview handles information. This interface is a product preview without an account backend.",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Privacy Policy"
      description="A clear summary of how this preview handles information. It is intentionally minimal because the demo has no connected account system, analytics, or live community backend."
      updated="November 2026"
    >
      <LegalSection title="1. Overview">
        <p>
          This website is a design and product preview for Memecoin Academy. The
          current build does not provide working accounts, payments, or a live
          community. This policy describes the data behaviour of this preview
          only.
        </p>
      </LegalSection>

      <LegalSection title="2. Information we collect">
        <p>
          The preview does not operate a backend account service. If you type an
          email address into the sign-in preview, it stays in your browser and
          is not transmitted, stored, or used to contact you.
        </p>
        <p>
          Standard technical information — such as a truncated IP address,
          browser type, device information, and request timestamps — may be
          processed by the hosting infrastructure for security, reliability,
          and performance. This is standard web hosting telemetry, not a
          marketing profile.
        </p>
      </LegalSection>

      <LegalSection title="3. Cookies and analytics">
        <p>
          This preview does not include advertising trackers, fingerprinting
          scripts, or a third-party analytics product. The interactive elements
          on the page use in-memory state and do not set persistent cookies for
          personalisation.
        </p>
      </LegalSection>

      <LegalSection title="4. How information is used">
        <p>
          Any technical information processed by hosting infrastructure is used
          only to serve the page securely, diagnose failures, and prevent abuse.
          It is not sold, and it is not used to build an advertising profile.
        </p>
      </LegalSection>

      <LegalSection title="5. Third-party links and references">
        <p>
          The preview references educational tools and platforms such as Solana,
          Pump.fun, and DexScreener. Those services have their own privacy
          policies. The Telegram community is not live in this build, and no
          invite link is currently active.
        </p>
      </LegalSection>

      <LegalSection title="6. Your choices">
        <LegalList
          items={[
            "Do not enter personal information into the preview form.",
            "Use browser controls to clear any locally cached page data.",
            "Contact the operator through the official channel published at launch for privacy requests.",
          ]}
        />
      </LegalSection>

      <LegalSection title="7. Children">
        <p>
          The platform is intended for adults and is not directed at children.
          It does not knowingly collect personal information from children.
        </p>
      </LegalSection>

      <LegalSection title="8. Changes">
        <p>
          This policy will be updated when accounts, analytics, or community
          features are connected. Material changes should be reviewed before you
          continue using those features.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
