import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/legal/LegalDocumentPage";
import { termsAndConditionsEn } from "@/content/legal.en";
import { SITE_LAUNCHED } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms and Conditions | Daniela Vránová Translations",
  description:
    "Terms covering quotes, orders, payment, delivery, cancellation, complaints and confidentiality.",
  alternates: {
    canonical: "/en/terms-and-conditions",
    languages: {
      cs: "/obchodni-podminky",
      en: "/en/terms-and-conditions",
      "x-default": "/obchodni-podminky",
    },
  },
  robots: SITE_LAUNCHED ? undefined : { index: false, follow: false },
};

export default function TermsAndConditionsPage() {
  return <LegalDocumentPage doc={termsAndConditionsEn} locale="en" />;
}
