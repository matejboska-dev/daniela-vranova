import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/legal/LegalDocumentPage";
import { termsAndConditions } from "@/content/legal";
import { SITE_LAUNCHED } from "@/lib/site";

export const metadata: Metadata = {
  title: "Obchodní podmínky – Překlady Vránová",
  description:
    "Podmínky objednávky, ceny a platby, dodání překladu, odstoupení od smlouvy a reklamace.",
  alternates: {
    canonical: "/obchodni-podminky",
    languages: {
      cs: "/obchodni-podminky",
      en: "/en/terms-and-conditions",
      "x-default": "/obchodni-podminky",
    },
  },
  /* Stejný vypínač jako kořenový layout (`lib/site.ts`) – dokud web běží
     jako náhled, drží noindex spolu se zbytkem webu. */
  robots: SITE_LAUNCHED ? undefined : { index: false, follow: false },
};

/** Obchodní podmínky. Jen česká mutace, viz `content/legal.ts`. */
export default function TermsAndConditionsPage() {
  return <LegalDocumentPage doc={termsAndConditions} />;
}
