"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type CountUpProps = {
  /** Cílová hodnota. */
  value: number;
  /** Délka odpočtu v ms. */
  duration?: number;
  className?: string;
};

/**
 * Počítadlo — číslo naběhne z nuly, jakmile se dostane do viewportu.
 *
 * POZNÁMKA K PRAVIDLŮM: styleguide §8 říká „co se NEanimuje: ceny a čísla
 * (žádná počítadla)". Tohle je vědomá výjimka na přání zadavatele, omezená na
 * jedno místo na stránce (statistiky u portrétu v sekci O mně). Ceny ani
 * termíny se dál neanimují nikde.
 *
 * Tři věci, které z počítadla dělají použitelnou komponentu místo efektu:
 *
 * 1. Výchozí stav je hotové číslo, ne nula. Na nulu se přepne až ve chvíli,
 *    kdy je jisté, že ji má co animovat zpátky nahoru. Bez JavaScriptu,
 *    v prohlížeči bez IntersectionObserveru i v HTML, které někdo vytiskne,
 *    tak zůstane stát „2003" a ne „0". Nula na stránce, která prodává
 *    přesnost, je horší než žádná animace.
 * 2. Šířka se nemění. Skrytá kopie cílové hodnoty drží místo v mřížce, takže
 *    číslo při náběhu neroztahuje sloupec a sousední text neposkakuje.
 *    DM Sans ani Playfair nemají spolehlivé tabulární číslice, samotné
 *    `tabular-nums` by to neuhlídalo (styleguide §4).
 * 3. Čtečka slyší jen výslednou hodnotu. Animovaná číslice je `aria-hidden`,
 *    finální hodnotu nese `sr-only` sourozenec v rodičovské komponentě.
 */
export function CountUp({ value, duration = 1400, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    /* Obě cesty nechávají na obrazovce hotovou hodnotu z prvního renderu. */
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let safety = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        /*
         * Na nulu se sahá až tady, v první odpovědi observeru — ne hned
         * v efektu. Kdyby observer nikdy nedoručil (prohlížeč, který
         * nevykresluje, vypnutá kompozice), zůstalo by číslo na nule
         * napořád. Takhle je nula vždycky jen začátek běhu, který se
         * prokazatelně rozjel.
         */
        if (!entries[0].isIntersecting) {
          setShown(0);
          return;
        }

        observer.disconnect();

        const startedAt = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          /* easeOutCubic — rychlý náběh, klidné dojetí. */
          const eased = 1 - Math.pow(1 - progress, 3);

          setShown(Math.round(value * eased));

          if (progress < 1) frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);

        /*
         * Pojistka. requestAnimationFrame se zastaví, kdykoli prohlížeč
         * přestane vykreslovat — skrytá záložka, minimalizované okno. Bez ní
         * by číslo v takové chvíli zamrzlo na nule a zůstalo tam i po návratu.
         */
        safety = window.setTimeout(() => setShown(value), duration + 400);
      },
      { threshold: 0.4 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      clearTimeout(safety);
    };
  }, [value, duration]);

  return (
    <span ref={ref} aria-hidden="true" className={cn("inline-grid", className)}>
      {/* Rezervace šířky — nevidí ji nikdo, ale drží sloupec v klidu. */}
      <span className="invisible col-start-1 row-start-1">{value}</span>

      <span className="col-start-1 row-start-1 justify-self-start tabular-nums">
        {shown}
      </span>
    </span>
  );
}
