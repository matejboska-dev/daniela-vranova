import { Anatomy } from "@/components/brand/Anatomy";
import { Section } from "@/components/layout/Section";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { Card } from "@/components/ui/Card";
import { variants } from "@/content/home";

/**
 * DVĚ VARIANTY OVĚŘENÍ
 *
 * Nejdůležitější sekce na stránce. Rozhoduje se tady, jestli člověk pochopí,
 * že digitální překlad má stejnou platnost jako svázaný papír — a jestli tedy
 * vůbec musí do Prahy.
 *
 * Revize bod 11: dřív to byly dvě prázdné krabice s ikonou a odstavcem. Teď
 * má každá karta nákres anatomie nahoře, nadpis a tři odrážky. Nákres nese
 * většinu informace — anatomii svázaného překladu si nikdo nepředstaví
 * z textu, a přesně kvůli ní lidé volají s dotazem "co mi vlastně přijde".
 *
 * Termínová bublina v patě karty padla — nesla natvrdý placeholder
 * "[doplnit] pracovních dní", který klientka nikdy nepotvrdila. Skutečný
 * termín se dozví každý zákazník individuálně v nezávazném nacenění.
 *
 * Karty zůstávají bílé (`bg-surface`) bez ohledu na tón sekce, protože nákres
 * anatomie se kreslí na bílou. Sekce teď jede na tmavě modré ploše, takže
 * nadpis a závěrečná poznámka mimo karty mají vlastní `[.on-deep_&]:` barvu.
 */
export function VariantsSection() {
  return (
    <Section
      id="varianty"
      tone="deep"
      labelledBy="variants-title"
      className="relative isolate overflow-hidden"
    >
      <VariantsBackdrop />

      <div className="max-w-text">
        <SectionLabel>{variants.label}</SectionLabel>

        <h2
          id="variants-title"
          className="mt-6 text-h2 text-ink [.on-deep_&]:text-on-deep"
        >
          {variants.title}
        </h2>
      </div>

      <ul className="mt-16 grid gap-6 lg:grid-cols-2 lg:gap-8">
        {variants.items.map((variant) => (
          <li key={variant.id} className="reveal">
            <Card className="flex h-full flex-col p-3 sm:p-4 overflow-hidden">
              <Anatomy
                variant={variant.anatomy as "paper" | "digital"}
                className="rounded-xl border border-line bg-surface p-6 md:p-8 text-accent [.on-deep_&]:border-white/15 [.on-deep_&]:bg-white/[0.05] [.on-deep_&]:backdrop-blur-xl"
              />

              <div className="flex flex-1 flex-col p-5 md:p-6">
                <h3 className="text-h3 text-on-deep">{variant.title}</h3>

                <p className="mt-3 text-body text-on-deep-2">
                  {variant.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {variant.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-body text-on-deep-2">
                      <BulletMark />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </li>
        ))}
      </ul>

      <p className="mx-auto mt-10 max-w-text text-center text-small text-ink-2 [.on-deep_&]:text-on-deep-2">
        {variants.note}
      </p>
    </Section>
  );
}

/** Odrážka — vodorovná čárka v accentu, ne puntík a ne fajfka. */
function BulletMark() {
  return (
    <span
      aria-hidden="true"
      className="mt-[0.7em] h-px w-3 shrink-0 bg-accent"
    />
  );
}

/**
 * Pozadí sekce — sytá tmavá navy plocha s radial gradientem pro tekutý "navy liquid glassy" efekt.
 */
function VariantsBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 bg-deep">
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_20%,rgba(11,31,58,0.75)_0%,rgba(11,31,58,0.92)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_0%,rgba(41,171,226,0.12)_0%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0b1f3a] via-[#0b1f3a]/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b1f3a] via-[#0b1f3a]/80 to-transparent" />
    </div>
  );
}
