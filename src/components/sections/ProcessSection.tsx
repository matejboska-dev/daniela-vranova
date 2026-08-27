"use client";

import { useRef, useEffect, useState } from "react";
import { Section } from "@/components/layout/Section";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { getContent, type Locale } from "@/content";
import { buildCurvePath, buildDotPositions, stepWidthPercent } from "@/lib/curve";

/**
 * JAK TO PROBÍHÁ — pět kroků s animovanou křivkou
 *
 * Redesign inspirovaný referenčním vizuálem: kroky stojí podél plynulé
 * vzestupné křivky (SVG path), každý v jiné vertikální výšce. Křivka je jeden
 * souvislý kus, který se odkrývá zleva doprava přes clip-path — žádné
 * dasharray, tah je vždy celistvý. Tečky na křivce a textové bloky kroků se
 * postupně objevují, jakmile k nim odkrývání „dojede".
 *
 * Sekvence je časová, ne navázaná na pozici scrollu: pustí se jednou, když
 * sekce vjede do viewportu. Dřív ji skládal GSAP timeline, teď ji nese trojice
 * CSS keyframes s `animation-delay` (globals.css) a JS jen přidá třídu
 * `process-is-running`, jakmile IntersectionObserver ohlásí příjezd sekce.
 *
 * Na mobilu a tabletu (pod `lg`) se kroky zobrazí jako jednoduchý vertikální
 * seznam s čísly — křivka tam nemá dost prostoru, aby dávala smysl.
 *
 * POČET KROKŮ SE NEPÍŠE NIKDE NATVRDO. Pozice teček, šířka textového bloku
 * i časování animace se dopočítají z délky `process.steps` (revize 2. kolo,
 * bod 8: ze čtyř kroků je pět). Přidání šestého kroku v obsahu proto rozvržení
 * nerozbije — dřív byly čtyři souřadnice ručně vypsané v `lib/curve.ts`.
 *
 * Sekce jede na tmavě modré ploše (tone="navy"). Barvy psané pro bílé pozadí
 * (nadpis, duchová čísla kroků, křivka, popisky) mají vlastní `[.on-deep_&]:`
 * variantu — obsah tu stojí přímo na pozadí sekce, žádné bílé karty.
 */
export function ProcessSection({ locale }: { locale: Locale }) {
  const { process } = getContent(locale);

  return (
    <Section
      id="proces"
      tone="deep"
      labelledBy="process-title"
      className="relative isolate overflow-hidden"
    >
      <ProcessBackdrop />
      <div className="max-w-text">
        <SectionLabel>{process.label}</SectionLabel>
        <h2
          id="process-title"
          className="mt-6 text-h2 text-ink [.on-deep_&]:text-on-deep"
        >
          {process.title}
        </h2>
      </div>

      {/* Mobile / tablet: vertical list */}
      <ProcessListMobile locale={locale} />

      {/* Desktop: animated curve layout */}
      <ProcessCurveDesktop locale={locale} />
    </Section>
  );
}

/* ── Mobile fallback ─────────────────────────────────────────────────── */

function ProcessListMobile({ locale }: { locale: Locale }) {
  const { process } = getContent(locale);

  return (
    <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:hidden">
      {process.steps.map((step) => (
        <li key={step.number} className="reveal">
          {/* Číslice kroku je jedno z míst, kde se objevuje barva z loga
              (revize 2. kolo, bod 12). Je to dekorace, ne text pro čtečku. */}
          <span
            aria-hidden="true"
            className="font-display text-h2 font-normal leading-none text-brand-deep [.on-deep_&]:text-brand-soft"
          >
            {step.number}
          </span>
          <h3 className="mt-6 text-h3 text-ink [.on-deep_&]:text-on-deep">
            {step.title}
          </h3>
          <p className="mt-3 text-body">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}

/* ── Desktop curve layout ────────────────────────────────────────────── */

/*
 * Geometrie křivky se počítá z počtu kroků. Dřív to byly konstanty na úrovni
 * modulu nad natvrdo importovaným obsahem — s druhou jazykovou mutací by to
 * znamenalo, že se křivka odvodí z české verze a v anglické by neseděla, kdyby
 * se počty kroků kdy rozešly. Teď je to funkce nad předaným počtem.
 */
function curveGeometry(stepCount: number) {
  const dots = buildDotPositions(stepCount);
  return {
    dots,
    path: buildCurvePath(dots),
    stepWidth: `${stepWidthPercent(stepCount)}%`,
  };
}

/** Trvání odkrývání křivky. Musí odpovídat `process-line` v globals.css. */
const LINE_DURATION_S = 2.4;

/**
 * Kdy startuje krok `i`: rovnoměrně po délce křivky, ale jen po 88 % jejího
 * trvání — poslední krok tak naskočí ještě před dokreslením tahu, ne až po něm.
 */
function stepStart(index: number, stepCount: number): number {
  const fraction = stepCount > 1 ? index / (stepCount - 1) : 0;
  return fraction * (LINE_DURATION_S * 0.88);
}

function ProcessCurveDesktop({ locale }: { locale: Locale }) {
  const { process } = getContent(locale);
  const { dots, path, stepWidth } = curveGeometry(process.steps.length);

  const containerRef = useRef<HTMLDivElement>(null);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    /* Bez IntersectionObserveru se sekvence pustí rovnou — nikdy nezůstane skrytá. */
    if (typeof IntersectionObserver === "undefined") {
      setRunning(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setRunning(true);
        observer.disconnect();
      },
      /* Odpovídá původnímu ScrollTrigger `start: "top 70%"`. */
      { rootMargin: "0px 0px -30% 0px" },
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      /*
       * Výška stage povyrostla ze 480 na 560 px: pět kroků má užší textové
       * bloky než čtyři, takže se popisky lámou na víc řádků a nejnižší
       * krok (01) by z původní výšky vytekl ven.
       */
      className={`relative mt-20 hidden lg:block ${running ? "process-is-running" : ""}`}
      style={{ height: "560px" }}
    >
      {/* SVG curve — barva jde přes currentColor, ať zvládne on-deep variantu. */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="process-line absolute inset-0 h-full w-full text-line-strong [.on-deep_&]:text-on-deep-line"
        style={{ overflow: "visible" }}
      >
        <path
          d={path}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Dots and step cards positioned absolutely */}
      {process.steps.map((step, i) => {
        const pos = dots[i];
        return (
          <div key={step.number}>
            {/*
             * Posun na střed drží keyframe, ne utility třída: animace přepisuje
             * celý `transform`, takže `-translate-x-1/2` by se z ní vytratil.
             */}
            <div
              className="process-dot absolute z-10"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                "--dot-delay": `${stepStart(i, process.steps.length)}s`,
              } as React.CSSProperties}
            >
              {/* Tečka na křivce nese barvu z loga (revize 2. kolo, bod 12). */}
              <div className="size-4 rounded-full border-2 border-white bg-brand shadow-[0_0_0_3px_rgba(0,138,205,0.28)]" />
            </div>

            {/* Step card below the dot — 0,1 s za svou tečkou. */}
            <div
              className="process-step absolute"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                width: stepWidth,
                paddingTop: "24px",
                "--step-delay": `${stepStart(i, process.steps.length) + 0.1}s`,
              } as React.CSSProperties}
            >
              <span
                aria-hidden="true"
                className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-normal leading-none tracking-[-0.02em] text-brand-deep [.on-deep_&]:text-brand-soft"
              >
                {step.number}
              </span>
              <h3 className="mt-3 text-h3 text-ink [.on-deep_&]:text-on-deep">
                {step.title}
              </h3>
              <p className="mt-2 text-small leading-relaxed text-ink-2 [.on-deep_&]:text-on-deep-2">
                {step.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/**
 * Pozadí sekce — sytá tmavá navy plocha s radial gradientem pro tekutý "navy liquid glassy" efekt.
 */
function ProcessBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 bg-deep">
      <div className="absolute inset-0 section-veil" />
      <div className="absolute inset-0 section-glow" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-deep via-deep/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deep via-deep/80 to-transparent" />
    </div>
  );
}
