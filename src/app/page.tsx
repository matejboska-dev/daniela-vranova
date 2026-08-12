import { SiteHeader } from "@/components/sections/SiteHeader";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { VariantsSection } from "@/components/sections/VariantsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CallToActionSection } from "@/components/sections/CallToActionSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { StickyCallBar } from "@/components/sections/StickyCallBar";

/**
 * Homepage.
 *
 * Pořadí sleduje otázky, se kterými člověk přichází:
 *   co nabízíš → komu věřím → jaký je můj dokument → v jaké podobě ho dostanu
 *   → kolik to stojí → jak to proběhne → čím to doložíš → co ještě nevím
 *   → napiš mi.
 *
 * Sekce "Jak se počítá cena a termín" stojí hned za dvěma variantami ověření
 * schválně: v tu chvíli má člověk vybranou variantu a ptá se na cenu. Je to
 * náhrada za ceník, který na webu být nesmí.
 *
 * Rytmus ploch (revize: sjednocený navy liquid glass): navy (hero) → navy →
 * foto/navy → navy → navy → foto/navy → navy → navy → navy → navy → navy →
 * navy (patička). Zadání záměrně opustilo dřívější přísné střídání bílá /
 * tmavá modrá — celá stránka teď jede na tmavě modré ploše (`tone="deep"`,
 * stejný `--color-deep` jako hero a patička) s tekutým skleněným efektem
 * (radial gradient + `backdrop-blur` karty), aby web působil jako jeden
 * souvislý navy povrch, ne jako střídavé pásy.
 *
 * Druhý tmavě modrý tón (`--color-deep-alt` / `tone="navy"`) byl pro tuhle
 * verzi rytmu zbytečný a nepoužila ho ani jedna sekce, takže je pryč
 * ze `Section.tsx` i z `globals.css`. Všechny sekce jedou v přesné
 * `--color-deep`.
 */
export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        <HeroSection /> {/* navy */}
        <TrustBar /> {/* navy, lišta */}
        <AboutSection /> {/* foto s navy overlay */}
        <ServicesSection /> {/* navy */}
        <VariantsSection /> {/* navy */}
        <PricingSection /> {/* foto s navy overlay */}
        <ProcessSection /> {/* navy */}
        <CallToActionSection /> {/* navy */}
        <FaqSection /> {/* navy */}
        <TestimonialsSection /> {/* navy */}
        <ContactSection /> {/* navy */}
      </main>

      <SiteFooter /> {/* navy */}

      <StickyCallBar />
    </>
  );
}
