/**
 * ---------------------------------------------------------------------------
 * KŘIVKA — vzestupná linka pod kroky v sekci "Jak to probíhá"
 * ---------------------------------------------------------------------------
 * Křivka je VŽDY jeden souvislý kus: žádné stroke-dasharray. Tečkovaný
 * vzhled vzniká tím, že se dash vzor pod preserveAspectRatio="none"
 * (nestejnoměrné roztažení viewBoxu) zdeformuje — linka pak vypadá jako
 * tečky, i když je dasharray rovný délce path. Odkrývání proto jede přes
 * clip-path, tah zůstává souvislý od začátku do konce.
 *
 * Revize 2. kolo, bod 8: pozice bodů se dřív psaly ručně jako čtyři
 * souřadnice. Proces má teď pět kroků a příště může mít jiný počet, takže
 * se body dopočítávají z počtu kroků. Ruční pole by znamenalo, že přidání
 * kroku v `content/home.ts` tiše rozbije desktopové rozvržení.
 * ---------------------------------------------------------------------------
 */

export type DotPosition = { x: number; y: number };

/** Svislý rozsah křivky v procentech výšky stage: začátek dole, konec nahoře. */
const Y_START = 56;
const Y_END = 8;

/**
 * Body křivky v procentech šířky a výšky stage. Vzestupně zleva doprava,
 * vodorovně rovnoměrně: každý krok sedí uprostřed svého dílu šířky, takže
 * textový sloupec pod tečkou nikdy nepřeteče přes sousední.
 */
export function buildDotPositions(count: number): DotPosition[] {
  if (count < 1) return [];

  return Array.from({ length: count }, (_, i) => ({
    x: ((i + 0.5) / count) * 100,
    y:
      count === 1
        ? (Y_START + Y_END) / 2
        : Y_START - (i * (Y_START - Y_END)) / (count - 1),
  }));
}

/** Šířka textového bloku jednoho kroku v procentech — díl šířky minus mezera. */
export function stepWidthPercent(count: number): number {
  return Math.max(100 / Math.max(count, 1) - 2, 10);
}

/** Plynulá cubic bezier křivka proložená zadanými body. */
export function buildCurvePath(points: readonly DotPosition[]): string {
  if (points.length === 0) return "";

  // Začátek o kus před prvním bodem
  let d = `M ${points[0].x - 8} ${points[0].y + 4}`;

  for (let i = 0; i < points.length; i++) {
    const curr = points[i];
    const prev = points[i - 1] ?? { x: curr.x - 12, y: curr.y + 6 };
    const next = points[i + 1] ?? { x: curr.x + 12, y: curr.y - 6 };

    // Řídicí body: táhnou vodorovně k sousedům
    const cp1x = prev.x + (curr.x - prev.x) * 0.6;
    const cp1y = prev.y + (curr.y - prev.y) * 0.3;
    const cp2x = curr.x - (next.x - prev.x) * 0.15;
    const cp2y = curr.y + (prev.y - next.y) * 0.15;

    if (i === 0) {
      // Kvadratika do prvního bodu
      d += ` Q ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
    } else {
      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
    }
  }

  // Malý ocásek za posledním bodem
  const last = points[points.length - 1];
  d += ` Q ${last.x + 4} ${last.y - 3}, ${last.x + 8} ${last.y - 2}`;

  return d;
}
