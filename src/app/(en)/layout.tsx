import type { Metadata } from "next";
import { RootShell } from "@/components/layout/RootShell";
import "../globals.css";

/**
 * Kořenový layout ANGLICKÉ mutace (`/en`). Proč dva kořenové layouty místo
 * jednoho sdíleného, viz `app/(cs)/layout.tsx`.
 */
export const metadata: Metadata = {
  title: "Translations Vránová – certified translations and interpreting",
  description:
    "Certified translations and interpreting from English. Prague, since 2004. Hard-copy and electronic certified translations, free no-obligation quote.",
  alternates: {
    canonical: "/en",
    languages: { cs: "/", en: "/en" },
  },
  /* Náhled se zatím nemá dostat do vyhledávače. Před spuštěním se odstraní. */
  robots: { index: false, follow: false },
};

export default function EnRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootShell locale="en">{children}</RootShell>;
}
