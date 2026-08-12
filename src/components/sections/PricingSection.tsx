import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { pricing, hero } from "@/content/home";

/**
 * JAK SE POČÍTÁ CENA A TERMÍN
 *
 * Visual excellence & Custom Layout according to STYLEGUIDE_soudni-anglictina:
 * 1. Photo backdrop (/foto/pricing.webp) with photo-mono filter and navy overlay.
 * 2. Icon headers for each card (calculator, fileText, clock) inside soft accent badges.
 * 3. Card 1 (Podle čeho se cena určuje): Numbered factor items (01..05) with clear labels.
 * 4. Card 2 (Co je normostrana): Prominent metric callout box for 1 800 characters (~250 words)
 *    + structured key-value list of document types and page count tags.
 * 5. Card 3 (Jak rychle přijde nacenění): Highlighted guarantee list with checkmarks
 *    + full-width CTA button for "Nezávazné nacenění (zdarma)".
 */
export function PricingSection() {
  const col1 = pricing.columns[0];
  const col2 = pricing.columns[1];
  const col3 = pricing.columns[2];

  return (
    <Section
      id="cena"
      tone="deep"
      labelledBy="pricing-title"
      className="relative isolate overflow-hidden"
    >
      <PricingBackdrop />

      <div className="max-w-text">
        <SectionLabel>{pricing.label}</SectionLabel>

        <h2 id="pricing-title" className="mt-6 text-h2 text-on-deep">
          {pricing.title}
        </h2>

        <p className="mt-8 max-w-lead text-body-l text-on-deep-2">
          {pricing.description}
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:gap-8 lg:grid-cols-3 lg:items-stretch">
        {/* CARD 1: Podle čeho se cena určuje */}
        <Card className="flex flex-col justify-between">
          <div>
            <div className="mb-6 inline-flex rounded-lg border border-on-deep-line bg-white/5 p-3 text-on-deep-accent">
              <Icon name="calculator" className="size-6" />
            </div>

            <h3 className="text-h3 text-on-deep">{col1.title}</h3>

            <ol className="mt-6 space-y-3.5">
              {col1.items.map((item, i) => (
                <li key={item} className="flex items-start gap-3.5 text-body text-on-deep-2">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded bg-on-deep-accent/15 font-mono text-[11px] font-medium text-on-deep-accent">
                    0{i + 1}
                  </span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </Card>

        {/* CARD 2: Co je normostrana */}
        <Card className="flex flex-col justify-between">
          <div>
            <div className="mb-6 inline-flex rounded-lg border border-on-deep-line bg-white/5 p-3 text-on-deep-accent">
              <Icon name="fileText" className="size-6" />
            </div>

            <h3 className="text-h3 text-on-deep">{col2.title}</h3>

            {/* Metric Callout Highlight */}
            <div className="mt-5 rounded-md border border-on-deep-line bg-white/5 p-4">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-2xl font-medium tracking-tight text-on-deep">
                  1 800
                </span>
                <span className="util text-on-deep-accent">znaků vč. mezer</span>
              </div>
              <p className="mt-1 text-small text-on-deep-2">
                Zhruba 250 slov. Počítá se z hotového překladu, ne z počtu listů.
              </p>
            </div>

            {/* Document examples */}
            <ul className="mt-5 space-y-3">
              {col2.items.map((item) => {
                const parts = item.split(":");
                const docName = parts[0];
                const docPages = parts[1] || "";
                return (
                  <li
                    key={item}
                    className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1 text-small text-on-deep-2 border-b border-on-deep-line/40 pb-2.5 last:border-0 last:pb-0"
                  >
                    <span className="font-medium text-on-deep">{docName}</span>
                    <span className="text-on-deep-2">{docPages.trim()}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </Card>

        {/* CARD 3: Jak rychle přijde nacenění */}
        <Card className="flex flex-col justify-between">
          <div>
            <div className="mb-6 inline-flex rounded-lg border border-on-deep-line bg-white/5 p-3 text-on-deep-accent">
              <Icon name="clock" className="size-6" />
            </div>

            <h3 className="text-h3 text-on-deep">{col3.title}</h3>

            {"lead" in col3 && col3.lead ? (
              <p className="mt-4 text-body text-on-deep-2">{col3.lead}</p>
            ) : null}

            <ul className="mt-5 space-y-3">
              {col3.items.map((item) => (
                <li key={item} className="flex gap-3 text-body text-on-deep-2">
                  <span
                    aria-hidden="true"
                    className="mt-[0.7em] h-px w-3 shrink-0 bg-on-deep-accent"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-on-deep-line/50">
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
 * Pozadí sekce s fotografií Mgr. Daniely Vránové s dokumentem u řečnického pultu.
 */
function PricingBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 bg-deep">
      <Image
        src="/foto/pricing.webp"
        alt=""
        fill
        sizes="100vw"
        className="photo-mono object-cover object-[50%_30%] lg:object-[50%_25%]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-deep/90 via-deep/80 to-deep/95" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_20%,rgba(11,31,58,0.75)_0%,rgba(11,31,58,0.92)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0b1f3a] via-[#0b1f3a]/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b1f3a] via-[#0b1f3a]/80 to-transparent" />
    </div>
  );
}

