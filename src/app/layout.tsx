import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { ScrollEffects } from "@/components/scroll/ScrollEffects";
import "./globals.css";

/*
 * Dva fonty, ne tři. Utility roli (štítky, termíny) zvládne DM Sans 500
 * verzálkami s prostrkáním, takže mono font je zbytečný — méně souborů
 * znamená rychlejší načtení, které je v nabídce garantované.
 *
 * next/font stahuje písma při buildu a servíruje je z vlastní domény. Oproti
 * @import z Google CDN to řeší rychlost i GDPR, jak doporučuje styleguide §4.
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

export const metadata: Metadata = {
  title: "Překlady Vránová – soudní překlady a tlumočení z angličtiny",
  description:
    "Soudní překlady a tlumočení z angličtiny. Praha, od roku 2003. Listinný i digitální ověřený překlad, nezávazné nacenění zdarma.",
  /* Náhled se zatím nemá dostat do vyhledávače. Před spuštěním se odstraní. */
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        {children}
        <ScrollEffects />
      </body>
    </html>
  );
}
