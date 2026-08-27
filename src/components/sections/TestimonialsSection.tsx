import { Section } from "@/components/layout/Section";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { Card } from "@/components/ui/Card";
import { ReviewLinks } from "@/components/ui/ReviewLinks";
import { getContent, type Content, type Locale } from "@/content";

type Testimonial = Content["testimonials"]["items"][number];

/**
 * REFERENCE — vodorovný karusel
 *
 * Revize 2. kolo, bod 10.1: OPRAVA CHYBY. Sekce běžela na třech svislých
 * sloupcích a položky se do nich rozdělovaly ručně:
 *
 *   sloupec 1: [0, 3, 1]   sloupec 2: [1, 4, 2]   sloupec 3: [2, 0, 4]
 *
 * Každá citace tak byla nejmíň ve dvou sloupcích, a protože se obsah
 * každého sloupce kvůli bezešvé smyčce v DOM zdvojuje, byla na stránce
 * až pětkrát. Zdroj chyby byl v tomhle poli, ne v animaci.
 *
 * Teď je pořadí přesně to z `content/home.ts`, každá citace v něm stojí
 * jednou, a klonování kvůli smyčce dělá až `loop()` níž — s `aria-hidden`
 * na druhé polovině, aby čtečka i vyhledávač slyšely každou referenci jednou.
 *
 * Zároveň to řeší i mobil: ve třech sloupcích byly dva z nich schované
 * (`hidden sm:flex` / `hidden lg:flex`), takže na telefonu šly vidět jen tři
 * z pěti referencí. Vodorovný pás ukáže všechny na každé šířce.
 */

/*
 * Karty jsou v DOM dvakrát za sebou. Posun o −50 % tak skončí přesně tam,
 * kde začal, a smyčka je bezešvá. Zdrojové pole zůstává unikátní.
 */
function loop(items: readonly Testimonial[]): Testimonial[] {
  return [...items, ...items];
}

export function TestimonialsSection({ locale }: { locale: Locale }) {
  const { testimonials } = getContent(locale);

  const cards = loop(testimonials.items);
  const uniqueCount = testimonials.items.length;

  return (
    <Section
      id="reference"
      tone="deep-light"
      labelledBy="testimonials-title"
      className="relative isolate overflow-hidden"
    >
      <TestimonialsBackdrop />
      <div className="max-w-text">
        <SectionLabel>{testimonials.label}</SectionLabel>
        <h2
          id="testimonials-title"
          className="mt-6 text-h2 text-ink [.on-deep_&]:text-on-deep"
        >
          {testimonials.title}
        </h2>
      </div>

      {/*
       * Pás je full-bleed: vyjede z odsazení kontejneru až na okraje okna,
       * aby bylo na první pohled vidět, že jede dál a dá se posouvat.
       * Maska po stranách ho na obou koncích rozpustí do pozadí.
       */}
      <div
        className="marquee-stage relative mt-12 overflow-hidden [margin-inline:calc(var(--page-x)*-1)]"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      >
        {/*
         * Pás nesmí mít vlastní vodorovné odsazení. Šířka pásu je základ, ze
         * kterého se počítá posun −50 %; jakýkoli padding by tu půlku posunul
         * o svou polovinu a smyčka by na každém otočení poskočila.
         */}
        <ul className="marquee-row py-1">
          {cards.map((item, idx) => (
            <li
              key={`${item.id}-${idx}`}
              className="me-6 w-[290px] shrink-0 sm:w-[360px] lg:w-[400px]"
              /*
               * Druhá polovina pásu je vizuální duplikát první — čtečka
               * i vyhledávač by jinak slyšeli každou referenci dvakrát.
               */
              aria-hidden={idx >= uniqueCount || undefined}
            >
              <TestimonialCard item={item} />
            </li>
          ))}
        </ul>
      </div>

      {/* Revize 2. kolo, bod 10.3 — cesta k ověřitelnému plnému znění. */}
      <p className="mt-8 text-small text-on-deep-2">
        {testimonials.reviewsNote.before} <ReviewLinks locale={locale} />
        {testimonials.reviewsNote.after}
      </p>
    </Section>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <Card className="flex h-full flex-col justify-between">
      <div>
        {/* Top Quote Icon Badge */}
        <div className="mb-4 inline-flex size-9 items-center justify-center rounded-full bg-accent-soft text-accent">
          <svg className="size-4" viewBox="0 0 100 100" fill="currentColor">
            <path d="M 28 30 C 18 30 10 38 10 48 C 10 68 30 70 30 70 C 30 70 26 56 22 54 C 20 53 18 52 18 48 C 18 44 22 40 28 40 C 34 40 38 44 38 50 C 38 60 28 70 18 70 M 68 30 C 58 30 50 38 50 48 C 50 68 70 70 70 70 C 70 70 66 56 62 54 C 60 53 58 52 58 48 C 58 44 62 40 68 40 C 74 40 78 44 78 50 C 78 60 68 70 58 70" />
          </svg>
        </div>

        {/* Quote Body */}
        <blockquote className="text-body text-ink leading-relaxed font-sans [.on-deep_&]:text-on-deep">
          „{item.quote}“
        </blockquote>
      </div>

      {/* Author Details */}
      <div className="mt-6 border-t border-line pt-4 [.on-deep_&]:border-on-deep-line">
        <p className="font-sans text-small font-bold tracking-wider uppercase text-ink [.on-deep_&]:text-on-deep">
          {item.author}
        </p>
        <p className="mt-0.5 text-small text-ink-2 [.on-deep_&]:text-on-deep-2">
          {item.role}
        </p>
      </div>
    </Card>
  );
}

/**
 * Pozadí sekce — sytá tmavá navy plocha s radial gradientem pro tekutý "navy liquid glassy" efekt.
 */
function TestimonialsBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 bg-deep-light">
      <div className="absolute inset-0 section-glow" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-deep via-deep/50 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deep via-deep/50 to-transparent" />
    </div>
  );
}
