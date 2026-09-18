import type { Metadata } from "next";
import { RootShell } from "@/components/layout/RootShell";
import { SITE_URL, SITE_LAUNCHED } from "@/lib/site";
import "../globals.css";

/**
 * Kořenový layout ANGLICKÉ mutace (`/en`). Proč dva kořenové layouty místo
 * jednoho sdíleného, viz `app/(cs)/layout.tsx`.
 */
const description =
  "Certified English translations and interpreting in Prague since 2004. Hard-copy and electronic certified translations. Free, no-obligation quote.";

const title = "English Translator & Interpreter in Prague | Daniela Vránová";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: {
    canonical: "/en",
    languages: { cs: "/", en: "/en", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    alternateLocale: "cs_CZ",
    siteName: "Daniela Vránová Translations",
    url: "/en",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
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
