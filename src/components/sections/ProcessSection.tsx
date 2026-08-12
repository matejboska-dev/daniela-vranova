"use client";

import { useRef, useEffect, useState } from "react";
import { Section } from "@/components/layout/Section";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { process } from "@/content/home";
import { buildCurvePath, DOT_POSITIONS } from "@/lib/curve";

/**
 * JAK TO PROBÍHÁ — čtyři kroky s animovanou křivkou
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
 * Sekce jede na tmavě modré ploše (tone="navy"). Barvy psané pro bílé pozadí
 * (nadpis, duchová čísla kroků, křivka, popisky) mají vlastní `[.on-deep_&]:`
 * variantu — obsah tu stojí přímo na pozadí sekce, žádné bílé karty.
 */
export function ProcessSection() {
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
      <ProcessListMobile />

      {/* Desktop: animated curve layout */}
      <ProcessCurveDesktop />
    </Section>
  );
}

/* ── Mobile fallback ─────────────────────────────────────────────────── */

function ProcessListMobile() {
  return (
    <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:hidden">
      {process.steps.map((step) => (
        <li key={step.number} className="reveal">
          <span
            aria-hidden="true"
            className="font-display text-h2 font-normal leading-none text-line-strong [.on-deep_&]:text-on-deep-line"
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

const CURVE_PATH = buildCurvePath();

/** Trvání odkrývání křivky. Musí odpovídat `process-line` v globals.css. */
const LINE_DURATION_S = 2.4;

/**
 * Kdy startuje krok `i`: rovnoměrně po délce křivky, ale jen po 88 % jejího
 * trvání — poslední krok tak naskočí ještě před dokreslením tahu, ne až po něm.
 */
function stepStart(index: number): number {
  const fraction = index / (process.steps.length - 1);
  return fraction * (LINE_DURATION_S * 0.88);
}

function ProcessCurveDesktop() {
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
      className={`relative mt-20 hidden lg:block ${running ? "process-is-running" : ""}`}
      style={{ height: "480px" }}
    >
      {/* SVG curve — barva jde přes currentColor, ať zvládne on-deep variantu. */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="process-line absolute inset-0 h-full w-full text-line-strong [.on-deep_&]:text-on-deep-line"
        style={{ overflow: "visible" }}
      >
        <path
          d={CURVE_PATH}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Dots and step cards positioned absolutely */}
      {process.steps.map((step, i) => {
        const pos = DOT_POSITIONS[i];
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
                "--dot-delay": `${stepStart(i)}s`,
              } as React.CSSProperties}
            >
              <div className="size-4 rounded-full border-2 border-white bg-accent shadow-[0_0_0_3px_rgba(11,87,208,0.18)]" />
            </div>

            {/* Step card below the dot — 0,1 s za svou tečkou. */}
            <div
              className="process-step absolute w-[22%]"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                paddingTop: "24px",
                "--step-delay": `${stepStart(i) + 0.1}s`,
              } as React.CSSProperties}
            >
              <span
                aria-hidden="true"
                className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-normal leading-none tracking-[-0.02em] text-line/40 [.on-deep_&]:text-white/15"
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
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_20%,rgba(11,31,58,0.75)_0%,rgba(11,31,58,0.92)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_0%,rgba(41,171,226,0.12)_0%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0b1f3a] via-[#0b1f3a]/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b1f3a] via-[#0b1f3a]/80 to-transparent" />
    </div>
  );
}
