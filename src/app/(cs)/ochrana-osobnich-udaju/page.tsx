import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/legal/LegalDocumentPage";
import { privacyPolicy } from "@/content/legal";
import { SITE_LAUNCHED } from "@/lib/site";

export const metadata: Metadata = {
  title: "Zásady zpracování osobních údajů – Překlady Vránová",
  description:
    "Jaké osobní údaje na webu zpracovávám, proč to dělám a jaká máte práva podle GDPR.",
  alternates: { canonical: "/ochrana-osobnich-udaju" },
  /* Stejný vypínač jako kořenový layout (`lib/site.ts`) – dokud web běží
     jako náhled, drží noindex spolu se zbytkem webu. */
  robots: SITE_LAUNCHED ? undefined : { index: false, follow: false },
};

/** Ochrana osobních údajů. Jen česká mutace, viz `content/legal.ts`. */
export default function PrivacyPolicyPage() {
  return <LegalDocumentPage doc={privacyPolicy} />;
}
