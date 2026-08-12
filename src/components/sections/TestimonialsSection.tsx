import { Section } from "@/components/layout/Section";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { Card } from "@/components/ui/Card";
import { testimonials } from "@/content/home";

type Testimonial = (typeof testimonials.items)[number];

/**
 * REFERENCE — tři sloupce v nekonečném svislém marquee.
 *
 * Sekce byla klientská jen kvůli GSAPu, který tři sloupce posouval nekonečnou
 * smyčkou (`repeat: -1`). To mělo tři vady: knihovna navíc, rAF ticker běžící
 * pořád dokola po celou dobu, co je stránka otevřená, a žádná reakce na
 * prefers-reduced-motion — styleguide §8 přitom omezený pohyb žádá respektovat.
 *
 * Teď to dělá jedna CSS animace na sloupec (viz `.marquee-col` v globals.css).
 * Běží v kompozitoru, při omezeném pohybu se vůbec nespustí a pauza při najetí
 * myší je taky čisté CSS. Díky tomu odsud zmizelo `"use client"` — sekce se
 * renderuje na serveru a do klientského bundlu nepřidá ani řádek.
 */

/*
 * Obsah každého sloupce je v DOM dvakrát za sebou. Posun o −50 % tak skončí
 * přesně tam, kde začal, a smyčka je bezešvá.
 */
function loop(items: readonly Testimonial[]): Testimonial[] {
  return [...items, ...items];
}

export function TestimonialsSection() {
  const items = testimonials.items;

  const columns = [
    {
      id: "col1",
      items: loop([items[0], items[3], items[1]]),
      className: "flex",
      style: { "--marquee-name": "marquee-up", "--marquee-duration": "35s" },
    },
    {
      id: "col2",
      items: loop([items[1], items[4], items[2]]),
      className: "hidden sm:flex",
      style: { "--marquee-name": "marquee-down", "--marquee-duration": "40s" },
    },
    {
      id: "col3",
      items: loop([items[2], items[0], items[4]]),
      className: "hidden lg:flex",
      style: { "--marquee-name": "marquee-up", "--marquee-duration": "38s" },
    },
  ] as const;

  return (
    <Section
      id="reference"
      tone="deep"
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

      {/* Masonry Container with Top and Bottom Fade Mask */}
      <div
        className="marquee-stage relative mt-12 h-[560px] overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {columns.map((column) => (
            <div
              key={column.id}
              className={`marquee-col ${column.className} flex-col gap-6`}
              style={column.style as React.CSSProperties}
            >
              {column.items.map((item, idx) => (
                <TestimonialCard
                  key={`${column.id}-${item.id}-${idx}`}
                  item={item}
                  /*
                   * Druhá polovina smyčky je vizuální duplikát první — čtečka
                   * i vyhledávač by jinak slyšeli každou referenci dvakrát.
                   */
                  duplicate={idx >= column.items.length / 2}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function TestimonialCard({
  item,
  duplicate = false,
}: {
  item: Testimonial;
  duplicate?: boolean;
}) {
  return (
    <Card
      interactive
      className="flex flex-col justify-between"
      aria-hidden={duplicate || undefined}
    >
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
    <div aria-hidden="true" className="absolute inset-0 -z-10 bg-deep">
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_20%,rgba(11,31,58,0.75)_0%,rgba(11,31,58,0.92)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_0%,rgba(41,171,226,0.12)_0%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0b1f3a] via-[#0b1f3a]/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b1f3a] via-[#0b1f3a]/80 to-transparent" />
    </div>
  );
}
