import { DM_Sans, Playfair_Display } from "next/font/google";
import { ScrollEffects } from "@/components/scroll/ScrollEffects";
import { Analytics } from "@/components/Analytics";
import type { Locale } from "@/content";

/*
 * Dva fonty, ne tři. Utility roli (štítky, termíny) zvládne DM Sans 500
 * verzálkami s prostrkáním, takže mono font je zbytečný — méně souborů
 * znamená rychlejší načtení, které je v nabídce garantované.
 *
 * next/font stahuje písma při buildu a servíruje je z vlastní domény. Oproti
 * @import z Google CDN to řeší rychlost i GDPR, jak doporučuje styleguide §4.
 *
 * DM Sans nese i wordmark v logu (`brand/Logo.tsx` je inline SVG s živým
 * `<text>`), takže se sazba značky a sazba stránky nemůžou rozejít.
 */
const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
  display: "swap",
});

/**
 * Společný kořen obou jazykových mutací.
 *
 * Každá mutace má vlastní root layout (route groups `(cs)` a `(en)`), protože
 * `<html lang>` smí nastavit jedině kořenový layout — jeden sdílený layout by
 * anglickou stránku poslal do světa s `lang="cs"`, což je pro čtečky
 * i vyhledávače tvrzení, ne kosmetika. Aby se kvůli jednomu atributu
 * neduplikovalo načítání písem a scroll engine, sedí obojí tady.
 */
export function RootShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <html lang={locale} className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        {children}
        <ScrollEffects />
        <Analytics />
      </body>
    </html>
  );
}
