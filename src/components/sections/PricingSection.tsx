import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Icon, type IconName } from "@/components/ui/Icon";
import { getContent, type Locale } from "@/content";

/**
 * JAK SE POČÍTÁ CENA A TERMÍN
 *
 * Čtyři karty v kompaktní a vyvážené 2x2 mřížce na fotografickém podkladu:
 *  1. Podle čeho se cena určuje — výčet faktorů pro překlad
 *  2. Co je normostrana (NS) — metrika (1 800 znaků) a konkrétní příklady
 *  3. Jak se počítá cena tlumočení — specifické faktory tlumočení
 *  4. Jak rychle přijde nacenění — garance konečné ceny a rychlosti + CTA
 *
 * Adaptace (desktop / velký monitor):
 * Dříve 3 vysoké sloupy a pod nimi obří 1240px karta přes celou šířku vytvářely
 * masivní vertikální blok (>1200 px), který se nevešel do viewportu a karty
 * působily přerostle a poloprázdně.
 * Sjednocená 2x2 struktura:
 * - 1. řádek: kompletní informace o ceně překladů (faktory + vysvětlení NS)
 * - 2. řádek: cena tlumočení + garance rychlosti a finální CTA
 * - Kompaktní hlavička do dvou sloupců (nadpis vlevo, popis vpravo)
 * - Přirozená výška karet (~260-320 px) dokonale sedí na obrazovku na jeden pohled.
 */
export function PricingSection({ locale }: { locale: Locale }) {
  const { pricing, hero } = getContent(locale);

  const col1 = pricing.columns[0];
  const col2 = pricing.columns[1];
  const col3 = pricing.columns[2];
  const interpretingBlock = pricing.interpretingPrice;

  return (
    <Section
      id="cena"
      tone="deep-light"
      labelledBy="pricing-title"
      className="relative isolate overflow-hidden"
    >
      <PricingBackdrop />

      {/* Dvou-sloupcová hlavička: šetří vertikální prostor a sjednocuje rytmus se sekcemi Služby a Tlumočení */}
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-12 lg:items-end">
        <div className="lg:col-span-6">
          <SectionLabel>{pricing.label}</SectionLabel>

          <h2 id="pricing-title" className="mt-4 text-h2 text-on-deep">
            {pricing.title}
          </h2>
        </div>

        <p className="max-w-lead text-body text-on-deep-2 lg:col-span-6 lg:text-body-l">
          {pricing.description}
        </p>
      </div>

      <div className="mt-8 md:mt-10 lg:mt-12 grid gap-5 md:grid-cols-2 lg:gap-6 lg:items-stretch">
        {/* KARTA 1: Podle čeho se cena určuje (překlady) */}
        <Card padding="compact" className="flex flex-col justify-between">
          <div>
            <PricingIconTile icon="calculator" />
            <h3 className="text-h3 text-on-deep">{col1.title}</h3>
            <div className="mt-4">
              <PricingBullets items={col1.items} />
            </div>
          </div>
        </Card>

        {/* KARTA 2: Co je normostrana (NS) */}
        <Card padding="compact" className="flex flex-col justify-between">
          <div>
            <PricingIconTile icon="fileText" />
            <h3 className="text-h3 text-on-deep">{col2.title}</h3>

            <div className="mt-4 grid gap-4 sm:grid-cols-12 sm:items-stretch">
              <div className="rounded-md border border-on-deep-line bg-white/5 p-3.5 flex flex-col justify-between sm:col-span-5">
                <div>
                  <p className="font-display text-2xl sm:text-3xl font-medium leading-none tracking-tight text-on-deep">
                    {col2.metric.value}
                  </p>
                  <p className="util mt-1.5 text-brand-soft text-[11px]">
                    {col2.metric.unit}
                  </p>
                </div>
                <p className="mt-2.5 text-xs text-on-deep-2 leading-relaxed">
                  {col2.lead}
                </p>
              </div>

              <ul className="space-y-2 sm:col-span-7 flex flex-col justify-center">
                {col2.examples.map((example) => (
                  <li
                    key={example.doc}
                    className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5 border-b border-on-deep-line/30 pb-1.5 text-small text-on-deep-2 last:border-0 last:pb-0"
                  >
                    <span className="font-medium text-on-deep">{example.doc}</span>
                    <span className="text-on-deep-2 shrink-0">{example.size}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>

        {/* KARTA 3: Jak se počítá cena tlumočení */}
        <Card padding="compact" className="flex flex-col justify-between">
          <div>
            <PricingIconTile icon="mic" />
            <h3 className="text-h3 text-on-deep">{interpretingBlock.title}</h3>
            <p className="mt-2 text-small text-on-deep-2">{interpretingBlock.lead}</p>
            <div className="mt-3.5">
              <PricingBullets items={interpretingBlock.items} />
            </div>
          </div>
        </Card>

        {/* KARTA 4: Jak rychle přijde nacenění & CTA */}
        <Card padding="compact" className="flex flex-col justify-between">
          <div>
            <PricingIconTile icon="clock" />
            <h3 className="text-h3 text-on-deep">{col3.title}</h3>
            <p className="mt-2 text-small text-on-deep-2">{col3.lead}</p>
            <div className="mt-3">
              <PricingBullets items={col3.items} compact />
            </div>
          </div>

          <div className="mt-5 pt-3.5 border-t border-on-deep-line/40">
            <Button href="#kontakt" size="sm" className="w-full justify-center">
              {hero.primaryCta.label}
            </Button>
          </div>
        </Card>
      </div>
    </Section>
  );
}

/**
 * Ikonová dlaždice Ceny — proporčně vyvážená pro kompaktní karty.
 */
function PricingIconTile({ icon }: { icon: IconName }) {
  return (
    <div className="mb-4 inline-flex size-10 items-center justify-center rounded-full bg-accent text-white shadow-[0_8px_20px_-6px_rgba(11,87,208,0.55)]">
      <Icon name={icon} className="size-5" />
    </div>
  );
}

/**
 * Odrážky uvnitř karet sekce.
 */
function PricingBullets({
  items,
  compact = false,
}: {
  items: readonly string[];
  compact?: boolean;
}) {
  return (
    <ul className={compact ? "space-y-2 text-small" : "space-y-2.5 text-small sm:text-body"}>
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-on-deep-2">
          <span
            aria-hidden="true"
            className="mt-[0.65em] h-px w-2.5 shrink-0 bg-brand-soft"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Pozadí sekce s fotografií Mgr. Daniely Vránové s dokumentem u řečnického pultu.
 */
function PricingBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 bg-deep-light">
      <Image
        src="/foto/pricing.webp"
        alt=""
        fill
        sizes="100vw"
        className="photo-mono object-cover object-[50%_30%] lg:object-[50%_25%]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-deep-light/90 via-deep-light/80 to-deep-light/95" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-deep via-deep/50 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deep via-deep/50 to-transparent" />
    </div>
  );
}

