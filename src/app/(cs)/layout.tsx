import type { Metadata } from "next";
import { RootShell } from "@/components/layout/RootShell";
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
export const metadata: Metadata = {
  title: "Překlady Vránová – soudní překlady a tlumočení z angličtiny",
  description:
    "Soudní překlady a tlumočení z angličtiny. Praha, od roku 2004. Listinný i elektronický ověřený překlad, nezávazné nacenění zdarma.",
  alternates: {
    canonical: "/",
    languages: { cs: "/", en: "/en" },
  },
  /* Náhled se zatím nemá dostat do vyhledávače. Před spuštěním se odstraní. */
  robots: { index: false, follow: false },
};

export default function CsRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootShell locale="cs">{children}</RootShell>;
}
