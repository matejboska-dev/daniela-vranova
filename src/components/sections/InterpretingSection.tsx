import { Section } from "@/components/layout/Section";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { Card } from "@/components/ui/Card";
import { DRAWN_ICONS, Icon, type IconName } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";
import { getContent, type Locale } from "@/content";

/**
 * TLUMOČENÍ — vlastní sekce, ne karta v mřížce dokumentů (Služby).
 *
 * Revize (klientčin brief, 14. 8. 2026): tlumočení dřív bylo neviditelné pro
 * polovinu poptávky, protože šlo najít jen jako jednu z osmi karet uvnitř
 * Služeb. Sekce teď stojí samostatně hned za Službami, s vlastní položkou
 * v hlavní navigaci ("Tlumočení" vedle "Překlady", `content/home.ts`), a
 * rozpadá nabídku na tři jasně odlišené situace místo jedné karty.
 *
 * Sekce jede na stejné tmavě modré ploše (`tone="deep"`) jako zbytek
 * stránky — sjednocený navy liquid glass rytmus z `page.tsx`.
 */
/*
 * Šířka karet pro EN mutaci (4 karty) v 12sloupcovém bento gridu.
 * Stejná plná šířka jako hlavička sekce (12 sloupců):
 * - 1. řádek: Soudní tlumočení (7 sloupců) + Autoškoly (5 sloupců)
 * - 2. řádek: Konsekutivní a simultánní (5 sloupců) + Svatební obřad (7 sloupců)
 * Asymetrický bento rytmus (7+5 / 5+7) ladí s 5/7 rozdělením hlavičky sekce
 * a drží stejnou šířku přes celý kontejner.
 */
const EN_BENTO_COL_CLASSES = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
] as const;

export function InterpretingSection({ locale }: { locale: Locale }) {
  const { interpreting } = getContent(locale);

  /*
   * "Tlumočení pro autoškoly" dává podle klientky smysl jen pro cizince
   * skládající zkoušky v ČR, tedy jen v anglické mutaci — v české se karta
   * nevykresluje. Řídí to příznak `enOnly` v obsahu, ne kopie seznamu.
   */
  const categories = interpreting.categories.filter(
    (category) => !("enOnly" in category && category.enOnly) || locale === "en",
  );

  return (
    <Section
      id="tlumoceni"
      tone="deep"
      labelledBy="interpreting-title"
      className="relative isolate overflow-hidden"
    >
      <InterpretingBackdrop />

      <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionLabel>{interpreting.label}</SectionLabel>

          <h2
            id="interpreting-title"
            className="mt-6 text-h2 text-on-deep"
          >
            {interpreting.title}
          </h2>
        </div>

        <p className="max-w-lead text-body-l lg:col-span-7 lg:pt-2 text-on-deep-2">
          {interpreting.description}
        </p>
      </div>

      {/*
       * BENTO / MASONRY GRID:
       * - EN mutace (4 karty): 12sloupcový bento grid přes celou šířku kontejneru
       *   (stejně široký jako hlavička sekce nahoře). Na `lg` střídá 7 a 5 sloupců
       *   (7+5 v 1. řádku, 5+7 ve 2. řádku). Na `sm` 2 vyvážené sloupce, na mobilu 1 sloupec.
       * - CS mutace (3 karty): 3 sloupce na `lg` (`lg:grid-cols-3`), 2 na `sm`, 1 na mobilu.
       */}
      <ul
        className={cn(
          "mt-16 grid gap-6",
          categories.length === 4
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8"
            : categories.length >= 3
              ? "sm:grid-cols-2 lg:grid-cols-3"
              : "sm:grid-cols-2",
        )}
      >
        {categories.map((category, i) => (
          <li
            key={category.id}
            className={cn(
              "reveal",
              categories.length === 4 && EN_BENTO_COL_CLASSES[i],
            )}
          >
            <Card className="flex h-full flex-col">
              {/* Stejná dlaždice jako ve Službách — hotová kresba (`rings`) dostane
                  accent, zástupné tvary (`scale`, `car`, `mic`) zůstávají neutrální. */}
              <div
                className={cn(
                  "inline-flex size-12 items-center justify-center rounded-lg",
                  DRAWN_ICONS.includes(category.icon as IconName)
                    ? "bg-white/12 text-on-deep-accent"
                    : "border border-on-deep-line bg-white/5 text-on-deep-2",
                )}
              >
                <Icon name={category.icon as IconName} className="size-6" />
              </div>

              <h3 className="mt-6 text-h3 text-on-deep">{category.title}</h3>

              <p className="mt-3 max-w-lead text-body">{category.description}</p>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/**
 * Pozadí sekce — sytá tmavá navy plocha s radial gradientem pro tekutý "navy liquid glassy" efekt.
 */
function InterpretingBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 bg-deep">
      <div className="absolute inset-0 section-veil" />
      <div className="absolute inset-0 section-glow" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-deep via-deep/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deep via-deep/80 to-transparent" />
    </div>
  );
}
