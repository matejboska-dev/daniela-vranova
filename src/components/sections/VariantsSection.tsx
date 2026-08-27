import { Anatomy } from "@/components/brand/Anatomy";
import { Section } from "@/components/layout/Section";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { Card } from "@/components/ui/Card";
import { TextLink } from "@/components/ui/Button";
import { getContent, type Locale } from "@/content";

/**
 * DVĚ VARIANTY OVĚŘENÍ
 *
 * Nejdůležitější sekce na stránce. Rozhoduje se tady, jestli člověk pochopí,
 * že elektronický překlad má stejnou platnost jako svázaný papír — a jestli tedy
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
export function VariantsSection({ locale }: { locale: Locale }) {
  const { variants } = getContent(locale);

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
            <Card padding="tight" className="flex h-full flex-col overflow-hidden">
              <Anatomy
                variant={variant.anatomy as "paper" | "digital"}
                locale={locale}
                className="rounded-xl border border-line bg-surface p-6 md:p-8 text-accent [.on-deep_&]:border-white/15 [.on-deep_&]:bg-white/[0.05] [.on-deep_&]:backdrop-blur-xl"
              />

              <div className="flex flex-1 flex-col p-5 md:p-6">
                <h3 className="text-h3 text-on-deep">{variant.title}</h3>

                <p className="mt-3 text-body text-on-deep-2">
                  {variant.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {variant.bullets.map((bullet) => (
                    <li
                      key={bullet.text}
                      className="flex gap-3 text-body text-on-deep-2"
                    >
                      <BulletMark />
                      <span>
                        {bullet.text}
                        {/*
                         * Odkaz na autorizovanou konverzi u České pošty
                         * (revize 2. kolo, bod 6.4). Je součástí věty, ne
                         * zvláštního řádku pod ní — čtenář na něj narazí
                         * přesně ve chvíli, kdy ten pojem poprvé uvidí.
                         */}
                        {"link" in bullet && bullet.link ? (
                          <TextLink
                            href={bullet.link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {bullet.link.label}
                          </TextLink>
                        ) : null}
                      </span>
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

/**
 * Odrážka — vodorovná čárka, ne puntík a ne fajfka. Jeden a týž tvar používá
 * i sekce Cena a termín (revize 2. kolo, bod 7.8), proto tady i tam stejné
 * rozměry i barva.
 */
function BulletMark() {
  return (
    <span
      aria-hidden="true"
      className="mt-[0.7em] h-px w-3 shrink-0 bg-brand [.on-deep_&]:bg-brand-soft"
    />
  );
}

/**
 * Pozadí sekce — sytá tmavá navy plocha s radial gradientem pro tekutý "navy liquid glassy" efekt.
 */
function VariantsBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 bg-deep">
      <div className="absolute inset-0 section-veil" />
      <div className="absolute inset-0 section-glow" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-deep via-deep/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deep via-deep/80 to-transparent" />
    </div>
  );
}
