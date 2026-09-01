import type { Metadata } from "next";
import { RootShell } from "@/components/layout/RootShell";
import { SITE_URL, SITE_LAUNCHED } from "@/lib/site";
import "../globals.css";

/**
 * Kořenový layout ČESKÉ mutace (`/`).
 *
 * Web má dva kořenové layouty ve dvou route groups — `(cs)` a `(en)` — místo
 * jednoho sdíleného. Důvod je jediný, ale zásadní: `<html lang>` smí nastavit
 * jen kořenový layout, a anglická stránka pod `lang="cs"` je pro čtečku
 * i vyhledávač nepravdivý údaj (čtečka by ji přečetla českou výslovností).
 * Přepnutí jazyka proto znamená plné načtení stránky, ne klientský přechod —
 * u dvou samostatných jazykových verzí je to správné chování.
 *
 * Společné části (písma, scroll engine, `<body>`) drží `RootShell`, aby se
 * mezi mutacemi nekopírovaly.
 */
const description =
  "Soudní překlady a tlumočení z angličtiny. Praha, od roku 2004. Listinný i elektronický ověřený překlad, nezávazné nacenění zdarma.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Překlady Vránová – soudní překlady a tlumočení z angličtiny",
  description,
  alternates: {
    canonical: "/",
    languages: { cs: "/", en: "/en" },
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    alternateLocale: "en_GB",
    siteName: "Překlady Vránová",
    url: "/",
    title: "Překlady Vránová – soudní překlady a tlumočení z angličtiny",
    description,
    /* Obrázek doplní `app/(cs)/opengraph-image.tsx` automaticky. */
  },
  twitter: {
    card: "summary_large_image",
    title: "Překlady Vránová – soudní překlady a tlumočení z angličtiny",
    description,
  },
  /*
   * Indexace se řídí jedním vypínačem v `lib/site.ts`. Dokud je web náhled,
   * drží `noindex, nofollow` (a `robots.ts` k tomu zakáže crawlerům celý web).
   */
  robots: SITE_LAUNCHED ? undefined : { index: false, follow: false },
};

export default function CsRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootShell locale="cs">{children}</RootShell>;
}
