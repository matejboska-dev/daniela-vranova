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
 * Masonry se schválně různou výškou karet (ne jen "napakovaný" `columns`
 * layout) — `grid-template-columns: repeat(3, 1fr)` + `grid-auto-rows` +
 * pevný `grid-row: span N` na každé kartě, jen na `lg` (3 sloupce). Pod `lg`
 * se spany nepoužijí a mřížka jede jako normální `sm:grid-cols-2` / jeden
 * sloupec na mobilu s výškou podle obsahu — spany jsou vyladěné na šířku
 * 3sloupcové desktopové mřížky, na užší mřížce by seděly špatně.
 *
 * `CARD_HEIGHT_CLASSES` musí být v kódu jako doslovné řetězce (ne poskládané
 * za běhu), jinak je Tailwindův scanner při buildu nenajde a CSS pro ně
 * nevygeneruje. Rozpětí 260–420 px je změřené, ne odhadnuté: skutečný obsah
 * karty (ikona + nadpis + popis + odsazení 32 px) potřebuje 215 px u šesti
 * karet s jednořádkovým nadpisem a 249 px u karty s nejdelším nadpisem
 * ("Výpis z obchodního rejstříku", zalomí se na dva řádky) — změřeno jako
 * skutečná výška obsahu bez vynuceného `h-full`. Spodní hranice spanů má
 * nad tím ~20-30 px rezervu, žádný z nich obsah neusekne (`Card` nemá
 * `overflow-hidden`, viz Card.tsx). Rozpětí je záměrně nepravidelné
 * (270/420/260/330/290/290/370), ne jen střídavě vysoká/nízká karta —
 * dvě výrazně vyšší karty (2. a 7.) mezi kompaktnějšími dělají z mřížky
 * skutečně "náhodný" masonry rytmus, ne jen dva opakující se rozměry.
 *
 * Pořadí čtení jde shora dolů v každém sloupci, ne řádek po řádku jako
 * u pravidelného gridu — u sedmi krátkých karet bez závislosti na pořadí
 * to nevadí.
 *
 * `gap-y-0` na `<ul>` + `pb-6` na každé `<li>`, ne `gap-6` na obou osách:
 * CSS grid vkládá `row-gap` mezi KAŽDOU dvojici sousedních řádkových stop,
 * ne mezi karty. Karta natažená přes 30-40 stop po 10 px by tak se `gap-6`
 * na řádcích zdědila 29-39× 24 px navíc uvnitř sebe sama (karta by vyšla
 * přes 1000 px vysoká místo 300-400 px) — bug, ne vlastnost. Svislá mezera
 * mezi kartami proto jede přes padding dole na položce, ne přes grid gap.
 *
 * Sekce jede na tmavě modré ploše (tone="deep"), stejně jako Varianty, Proces,
 * FAQ a Kontakt — sjednocený navy liquid glass rytmus přes celou stránku.
 * Karta i ikony proto mají vlastní `[.on-deep_&]:` variantu.
 */
/*
 * Řádkové rozpětí (10px/řádek) pro každou kartu v pořadí, jen `lg:`.
 * Odvozené ze skutečně změřené výšky obsahu, viz komentář u sekce výš.
 */
const CARD_HEIGHT_CLASSES = [
  "lg:[grid-row:span_27]",
  "lg:[grid-row:span_42]",
  "lg:[grid-row:span_26]",
  "lg:[grid-row:span_33]",
  "lg:[grid-row:span_29]",
  "lg:[grid-row:span_29]",
  "lg:[grid-row:span_37]",
] as const;

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

      <ul className="mt-16 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-0 lg:auto-rows-[10px]">
        {services.items.map((service, i) => (
          <li
            key={service.id}
            className={`reveal lg:pb-6 ${CARD_HEIGHT_CLASSES[i] ?? ""}`}
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
