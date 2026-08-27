import { SiteHeader } from "@/components/sections/SiteHeader";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { InterpretingSection } from "@/components/sections/InterpretingSection";
import { InterpretingReferencesSection } from "@/components/sections/InterpretingReferencesSection";
import { VariantsSection } from "@/components/sections/VariantsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CallToActionSection } from "@/components/sections/CallToActionSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { StickyCallBar } from "@/components/sections/StickyCallBar";
import type { Locale } from "@/content";

/**
 * Homepage.
 *
 * Pořadí sleduje otázky, se kterými člověk přichází:
 *   co nabízíš → komu věřím → jaký je můj dokument → potřebuju tlumočníka →
 *   v jaké podobě dokument dostanu → kolik to stojí → jak to proběhne →
 *   čím to doložíš → co ještě nevím → napiš mi.
 *
 * Sekce "Tlumočení" stojí hned za Službami, ne uvnitř nich (revize: klientčin
 * brief, 14. 8. 2026) — dřív šlo tlumočení najít jen jako jednu z osmi karet
 * v mřížce dokumentů, takže ho polovina poptávky (ta, co hledá tlumočníka,
 * ne překlad listiny) nikdy neobjevila. Teď má vlastní sekci i vlastní
 * položku v hlavní navigaci.
 *
 * Sekce "Jak se počítá cena a termín" stojí hned za dvěma variantami ověření
 * schválně: v tu chvíli má člověk vybranou variantu a ptá se na cenu. Je to
 * náhrada za ceník, který na webu být nesmí.
 *
 * Rytmus ploch (revize, 26. 8. 2026): sekce střídají `--color-deep` a
 * `--color-deep-light` (Kvalifikace v hero → Kdo jsem `deep` → Služby
 * `deep-light` → Tlumočení `deep` → Spolupráce `deep-light` → … dál liché
 * `deep`, sudé `deep-light`), s plynulým gradientovým přechodem na hranici
 * každé sekce (`*Backdrop` komponenty), ne ostrým řezem. Dřív celá stránka
 * jela na jednom `--color-deep` bez variace; klientka chtěla, aby šel předěl
 * mezi sekcemi vidět, ne aby web působil jako jedna nepřerušená plocha.
 *
 * Kvalifikace (dřív samostatná sekce `TrustBar.tsx`, smazaná) teď stojí
 * přímo v hero pod CTA tlačítky (`HeroCredentials` v `HeroSection.tsx`) —
 * čtyři tvrzení nejsou druhá obrazovka, kterou návštěvník musí minout, než
 * uvidí zbytek stránky.
 */
export function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <SiteHeader locale={locale} />

      <main>
        <HeroSection locale={locale} /> {/* deep, kvalifikace pod CTA */}
        <AboutSection locale={locale} /> {/* deep */}
        <ServicesSection locale={locale} /> {/* deep-light */}
        <InterpretingSection locale={locale} /> {/* deep */}
        <InterpretingReferencesSection locale={locale} /> {/* deep-light */}
        <VariantsSection locale={locale} /> {/* deep */}
        <PricingSection locale={locale} /> {/* deep-light, foto */}
        <ProcessSection locale={locale} /> {/* deep */}
        <CallToActionSection locale={locale} /> {/* deep-light */}
        <FaqSection locale={locale} /> {/* deep */}
        <TestimonialsSection locale={locale} /> {/* deep-light */}
        <ContactSection locale={locale} /> {/* deep */}
      </main>

      <SiteFooter locale={locale} /> {/* navy */}

      <StickyCallBar locale={locale} />
    </>
  );
}
