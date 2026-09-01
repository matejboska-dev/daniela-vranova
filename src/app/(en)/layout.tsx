import type { Metadata } from "next";
import { RootShell } from "@/components/layout/RootShell";
import { SITE_URL, SITE_LAUNCHED } from "@/lib/site";
import "../globals.css";

/**
 * Kořenový layout ANGLICKÉ mutace (`/en`). Proč dva kořenové layouty místo
 * jednoho sdíleného, viz `app/(cs)/layout.tsx`.
 */
const description =
  "Certified translations and interpreting from English. Prague, since 2004. Hard-copy and electronic certified translations, free no-obligation quote.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Translations Vránová – certified translations and interpreting",
  description,
  alternates: {
    canonical: "/en",
    languages: { cs: "/", en: "/en" },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    alternateLocale: "cs_CZ",
    siteName: "Translations Vránová",
    url: "/en",
    title: "Translations Vránová – certified translations and interpreting",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Translations Vránová – certified translations and interpreting",
    description,
  },
  /* Indexace se řídí jedním vypínačem v `lib/site.ts` (viz `app/(cs)/layout.tsx`). */
  robots: SITE_LAUNCHED ? undefined : { index: false, follow: false },
};

export default function EnRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootShell locale="en">{children}</RootShell>;
}
