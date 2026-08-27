import { Section } from "@/components/layout/Section";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { Card } from "@/components/ui/Card";
import { Icon, type IconName } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";
import { getContent, type Locale } from "@/content";

/**
 * SLUŽBY — osm typů dokumentů
 *
 * Revize bod 10: čtyři oborové karty (soudní / právní / obchodní / tlumočení)
 * šly proti tomu, s čím člověk na web přichází. Nikdo nehledá "právní
 * překlad", hledá "kolik stojí přeložit oddací list". Mřížka proto
 * pojmenovává dokumenty.
 *
 * Bento mřížka: 12 sloupců na `lg`, první tři karty berou `col-span-4`
 * (3 × 4 = 12 → jeden plný řádek), zbylé čtyři `col-span-3` (4 × 3 = 12 →
 * druhý plný řádek). Pevné, ne náhodné rozdělení — dva čisté řádky (3 širší
 * karty nahoře, 4 užší dole), místo masonry s proměnlivou výškou karet.
 * Pod `lg` se span classes nepoužijí, mřížka jede `sm:grid-cols-2` / jeden
 * sloupec na mobilu.
 *
 * `h-full` na kartě drží karty ve stejném řádku na stejné výšce (grid ze
 * své podstaty stretchuje položky na výšku nejvyšší v řádku) — čistý,
 * sjednocený vzhled řádku místo rozdílných výšek podle délky textu.
 *
 * Sekce jede na tmavě modré ploše (tone="deep"), stejně jako Varianty, Proces,
 * FAQ a Kontakt — sjednocený navy liquid glass rytmus přes celou stránku.
 * Karta i ikony proto mají vlastní `[.on-deep_&]:` variantu.
 */
/*
 * Šířka karty v pořadí, jen `lg:`. Musí být v kódu jako doslovné řetězce
 * (ne poskládané za běhu), jinak je Tailwindův scanner při buildu nenajde.
 */
const CARD_COL_CLASSES = [
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-3",
] as const;

export function ServicesSection({ locale }: { locale: Locale }) {
  const { services } = getContent(locale);

  return (
    <Section
      id="sluzby"
      tone="deep-light"
      labelledBy="services-title"
      className="relative isolate overflow-hidden"
    >
      <ServicesBackdrop />
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionLabel>{services.label}</SectionLabel>

          <h2
            id="services-title"
            className="mt-6 text-h2 text-ink [.on-deep_&]:text-on-deep"
          >
            {services.title}
          </h2>
        </div>

        <p className="max-w-lead text-body-l lg:col-span-7 lg:pt-2 [.on-deep_&]:text-on-deep-2">
          {services.description}
        </p>
      </div>

      <ul className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12">
        {services.items.map((service, i) => (
          <li
            key={service.id}
            className={`reveal ${CARD_COL_CLASSES[i] ?? ""}`}
            /* V DevTools se všechny nedokreslené ikony najdou přes [data-todo]. */
            data-todo={service.drawn ? undefined : "ikona k překreslení"}
          >
            <Card className="flex h-full flex-col">
              {/*
               * Barva pečetí štítku ikony nese stav dodávky (viz `Icon.tsx`):
               * hotová kresba (`drawn: true`) dostane měkkou accent dlaždici
               * a plnou barvu, zástupný Lucide tvar zůstává tichý a neutrální
               * — rozdíl má být vidět, ne schovaný pod stejnou modrou pro obojí.
               */}
              <div
                className={cn(
                  "inline-flex size-12 items-center justify-center rounded-lg",
                  service.drawn
                    ? "bg-accent-soft text-accent [.on-deep_&]:bg-white/12 [.on-deep_&]:text-on-deep-accent"
                    : "border border-line bg-alt text-ink-muted [.on-deep_&]:border-on-deep-line [.on-deep_&]:bg-white/5 [.on-deep_&]:text-on-deep-2",
                )}
              >
                <Icon name={service.icon as IconName} className="size-6" />
              </div>

              <h3 className="mt-6 text-h3 [.on-deep_&]:text-on-deep">
                {service.title}
              </h3>

              <p className="mt-3 text-body">{service.description}</p>
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
function ServicesBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 bg-deep-light">
      <div className="absolute inset-0 section-glow" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-deep via-deep/50 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deep via-deep/50 to-transparent" />
    </div>
  );
}
