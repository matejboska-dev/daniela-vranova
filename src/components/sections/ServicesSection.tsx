import { Section } from "@/components/layout/Section";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { Card } from "@/components/ui/Card";
import { Icon, type IconName } from "@/components/ui/Icon";
import { services } from "@/content/home";

/**
 * SLUŽBY — osm typů dokumentů
 *
 * Revize bod 10: čtyři oborové karty (soudní / právní / obchodní / tlumočení)
 * šly proti tomu, s čím člověk na web přichází. Nikdo nehledá "právní
 * překlad", hledá "kolik stojí přeložit oddací list". Mřížka proto
 * pojmenovává dokumenty.
 *
 * Mřížka 4 × 2 na desktopu, 2 × 4 na tabletu, jeden sloupec na mobilu. Nadpis
 * je nad mřížkou, ne vedle ní — na 5/7 by osm karet vyšlo na sloupec 2 × 4
 * a mřížka by ztratila rytmus.
 *
 * Sekce jede na tmavě modré ploše (tone="deep"), stejně jako Varianty, Proces,
 * FAQ a Kontakt — sjednocený navy liquid glass rytmus přes celou stránku.
 * Karta i ikony proto mají vlastní `[.on-deep_&]:` variantu.
 */
export function ServicesSection() {
  return (
    <Section
      id="sluzby"
      tone="deep"
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

      <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.items.map((service) => (
          <li
            key={service.id}
            className="reveal"
            /* V DevTools se všechny nedokreslené ikony najdou přes [data-todo]. */
            data-todo={service.drawn ? undefined : "ikona k překreslení"}
          >
            <Card className="flex h-full flex-col">
              <Icon
                name={service.icon as IconName}
                className="size-7 text-accent [.on-deep_&]:text-on-deep-accent"
              />

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
    <div aria-hidden="true" className="absolute inset-0 -z-10 bg-deep">
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_20%,rgba(11,31,58,0.75)_0%,rgba(11,31,58,0.92)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_0%,rgba(41,171,226,0.12)_0%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0b1f3a] via-[#0b1f3a]/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b1f3a] via-[#0b1f3a]/80 to-transparent" />
    </div>
  );
}
