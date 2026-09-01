"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type VideoCopy = {
  description: string;
  pause: string;
  play: string;
};

/**
 * ---------------------------------------------------------------------------
 * VIDEO V SEKCI KDO JSEM
 * ---------------------------------------------------------------------------
 * Klientčin brief, 23. 8. 2026. Záznam z tlumočení svatebního obřadu
 * v Havlíčkových sadech. Fotky v sekci zůstávají, video je doplňuje.
 *
 * BAREVNÉ, BEZ PŘEPÍNAČE. Dřív tu byl přepínač barevná / černobílá, ať si
 * klientka vybere; v e-mailu 29. 8. 2026 rozhodla pro barevnou ("ANO BARVA,
 * PROSÍM"). Video je teď jediná barevná plocha na jinak desaturovaném webu –
 * záměrný akcent, ne nedopatření. Přepínač (`.photo-mono` filtr + radiogroup)
 * zmizel.
 *
 * PŘEHRÁVÁNÍ: `autoplay muted loop playsinline`, bez `controls`, tedy bez
 * ovládacího panelu, jak zadání žádá. Zvuková stopa je z exportu odstraněná
 * úplně (ne jen ztlumená) — autoplay se zvukem prohlížeče blokují a stopa by
 * jen zabírala data.
 *
 * NAČÍTÁNÍ: `<source>` se do DOM vloží až ve chvíli, kdy se sekce blíží
 * viewportu. Do té doby je vidět jen `poster` (49 kB JPEG), takže video
 * nesoutěží o pásmo s hero obrázkem a na návštěvníkovi, který doskroluje jen
 * do poloviny stránky, se nestáhne vůbec. Když je video mimo obraz, pauzuje —
 * dekódování videa na pozadí je na mobilu znát na baterii.
 *
 * PŘÍSTUPNOST: WCAG 2.2.2 žádá u pohybu, který se spustí sám a trvá přes pět
 * vteřin, možnost ho zastavit. Proto je v rohu jedno malé tlačítko pauza /
 * přehrát — není to ovládací panel, je to povinná úniková cesta. Při zapnutém
 * `prefers-reduced-motion` se video nerozjede samo a čeká na to tlačítko.
 * ---------------------------------------------------------------------------
 */
export function AboutVideo({ copy }: { copy: VideoCopy }) {
  const [playing, setPlaying] = useState(true);
  /** Až `true`, teprve se do DOM dostanou `<source>` a soubor se stáhne. */
  const [armed, setArmed] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  /*
   * Jeden observer dělá obojí: napoprvé povolí stahování (se `rootMargin`,
   * aby soubor začal téct kousek předtím, než na video dojde řada), pak už
   * jen pauzuje a rozjíždí podle toho, jestli je video na obraze.
   */
  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setArmed(true);

        const video = videoRef.current;
        if (!video) return;

        if (entry.isIntersecting) {
          if (!reduced.matches) void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "300px 0px" },
    );

    observer.observe(frame);

    if (reduced.matches) setPlaying(false);

    return () => observer.disconnect();
  }, []);

  /*
   * Když `<source>` přibude až dodatečně, prohlížeč o něm sám od sebe vědět
   * nemusí — výběr zdroje už jednou proběhl naprázdno. `load()` ho spustí
   * znovu. Bez tohohle řádku by video na části prohlížečů zůstalo na posteru.
   */
  useEffect(() => {
    if (armed) videoRef.current?.load();
  }, [armed]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) void video.play().catch(() => {});
    else video.pause();
  };

  return (
    <div className="w-full max-w-[300px] sm:max-w-[320px] xl:max-w-[360px]">
      {/*
       * Rámeček drží poměr 9 : 16 a adaptivní měřítko, aby celá sekce dýchala a vešla se do obrazovky.
       */}
      <div
        ref={frameRef}
        className="relative w-full overflow-hidden rounded-lg border border-on-deep-line bg-deep shadow-2xl shadow-black/40"
        style={{ aspectRatio: "9 / 16" }}
      >
        <video
          ref={videoRef}
          poster="/video/grebovka-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-label={copy.description}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          className="size-full object-cover"
        >
          {armed ? (
            <source
              src="https://cdn.jsdelivr.net/gh/matejboska-dev/daniela-vranova-background-video@main/Grebovka%20bez%20textu%20(1).webm"
              type="video/webm"
            />
          ) : null}
        </video>

        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? copy.pause : copy.play}
          className={cn(
            "absolute bottom-2.5 right-2.5 flex size-8 items-center justify-center rounded-full",
            "border border-white/30 bg-deep/70 text-white backdrop-blur-sm",
            "transition-colors duration-150 hover:bg-deep/90",
          )}
        >
          <PlayPauseIcon playing={playing} />
        </button>
      </div>
    </div>
  );
}

function PlayPauseIcon({ playing }: { playing: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="size-4"
    >
      {playing ? (
        <>
          <rect x="7" y="5" width="3.5" height="14" rx="1" />
          <rect x="13.5" y="5" width="3.5" height="14" rx="1" />
        </>
      ) : (
        <path d="M8 5.5v13a1 1 0 0 0 1.53.85l10-6.5a1 1 0 0 0 0-1.7l-10-6.5A1 1 0 0 0 8 5.5Z" />
      )}
    </svg>
  );
}
