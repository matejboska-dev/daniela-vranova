"use client";

import { useEffect } from "react";

/**
 * Celostránkové scroll efekty — jediný scroll engine webu.
 *
 * Dřív tohle dělal GSAP + ScrollTrigger. Obě věci, které odsud potřebujeme,
 * ale umí prohlížeč sám: odkrývání řeší IntersectionObserver a parallax jeden
 * rAF-throttlovaný listener. Knihovna za to stála ~116 kB JS a držela vlastní
 * ticker v běhu po celou dobu, co byla stránka otevřená.
 *
 * Ještě dřívější verze stála na `animation-timeline`, což uměl jen Chromium —
 * Firefox a Safari viděly obsah bez pohybu. Tahle varianta jede všude stejně.
 *
 * Třída `.js` se na <html> přidává jen když uživatel nechce omezený pohyb.
 * CSS pravidlo `.js .reveal { opacity: 0 }` proto nikdy neschová obsah, když
 * se skript nespustí nebo když je zapnuté prefers-reduced-motion.
 */

/** Rozestup mezi sourozenci, kteří vjedou do viewportu ve stejném snímku. */
const STAGGER_MS = 80;

/** Musí odpovídat trvání přechodu `.reveal` v globals.css. */
const REVEAL_MS = 700;

/** Posun podkladu hero za obsahem, v procentech jeho vlastní výšky. */
const PARALLAX_PERCENT = 12;

export function ScrollEffects() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    document.documentElement.classList.add("js");

    const cleanups: Array<() => void> = [];

    setupReveal(cleanups);
    setupHeroParallax(cleanups);

    return () => {
      document.documentElement.classList.remove("js");
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}

/**
 * Reveal: fade + posun 14 px nahoru, jednou.
 *
 * Prvky, které do viewportu vjedou ve stejném snímku, doručí observer v jednom
 * volání. Seřadí se podle pořadí v dokumentu a dostanou odstupňovaný
 * `transition-delay` — tím vznikne stejný stagger, jaký dřív dělal
 * `ScrollTrigger.batch`, jen bez knihovny.
 */
function setupReveal(cleanups: Array<() => void>) {
  const targets = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
  if (targets.length === 0) return;

  const timers = new Set<number>();

  const observer = new IntersectionObserver(
    (entries) => {
      const arrived = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => entry.target as HTMLElement)
        /*
         * `compareDocumentPosition` místo pořadí z observeru: to není zaručeně
         * v pořadí dokumentu, takže stagger by jinak přeskakoval sem a tam.
         */
        .sort((a, b) =>
          a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : 1,
        );

      arrived.forEach((element, index) => {
        const delay = index * STAGGER_MS;
        element.style.transitionDelay = `${delay}ms`;
        element.classList.add("is-revealed");
        observer.unobserve(element);

        /*
         * Po doběhnutí se zpoždění uklidí. Inline `transition-delay` platí pro
         * všechny přechody prvku, takže by jinak zdržoval i pozdější hover.
         */
        const timer = window.setTimeout(() => {
          element.style.transitionDelay = "";
          timers.delete(timer);
        }, delay + REVEAL_MS);

        timers.add(timer);
      });
    },
    /* Odpovídá původnímu ScrollTrigger `start: "top 88%"`. */
    { rootMargin: "0px 0px -12% 0px" },
  );

  targets.forEach((element) => observer.observe(element));

  cleanups.push(() => {
    observer.disconnect();
    timers.forEach((timer) => window.clearTimeout(timer));
  });
}

/**
 * Jemný parallax podkladu hero: při odjezdu sekce se podklad posune o 12 %
 * dolů pomaleji než obsah. Sekce má vlastní `bg-deep`, takže odhalený pruh
 * nahoře nevznikne.
 *
 * Čte se jen `getBoundingClientRect()` a zapisuje `transform`, obojí jednou za
 * snímek — žádné layout thrashing, žádná knihovna.
 */
function setupHeroParallax(cleanups: Array<() => void>) {
  const hero = document.getElementById("uvod");
  const backdrop = hero?.querySelector<HTMLElement>(".hero-backdrop");
  if (!hero || !backdrop) return;

  let frame = 0;
  let lastProgress = -1;

  const update = () => {
    frame = 0;

    const { top, height } = hero.getBoundingClientRect();
    if (height === 0) return;

    if (top < -height) {
      if (lastProgress !== 1) {
        lastProgress = 1;
        backdrop.style.transform = `translateY(${PARALLAX_PERCENT}%)`;
      }
      return;
    }

    /* 0 = hero sedí u horní hrany, 1 = právě vyjel celý nahoru. */
    const progress = Math.min(Math.max(-top / height, 0), 1);
    if (Math.abs(progress - lastProgress) > 0.001) {
      lastProgress = progress;
      backdrop.style.transform = `translateY(${progress * PARALLAX_PERCENT}%)`;
    }
  };

  const onScroll = () => {
    if (frame === 0) frame = requestAnimationFrame(update);
  };

  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });

  cleanups.push(() => {
    if (frame !== 0) cancelAnimationFrame(frame);
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
    backdrop.style.transform = "";
  });
}
