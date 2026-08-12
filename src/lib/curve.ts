/**
 * ---------------------------------------------------------------------------
 * KŘIVKA — sdílená vzestupná linka pro dvě sekce
 * ---------------------------------------------------------------------------
 * Stejná křivka vede kroky v sekci "Jak to probíhá" a pečeti v liště
 * kvalifikace pod hero. Sdílí se, aby se obě místa nemohla rozjet — body
 * i vykreslení path musí sedět, jinak pečeti nesednou na linku.
 *
 * Křivka je VŽDY jeden souvislý kus: žádné stroke-dasharray. Tečkovaný
 * vzhled vzniká tím, že se dash vzor pod preserveAspectRatio="none"
 * (nestejnoměrné roztažení viewBoxu) zdeformuje — linka pak vypadá jako
 * tečky, i když je dasharray rovný délce path. Odkrývání proto jede přes
 * clip-path, tah zůstává souvislý od začátku do konce.
 * ---------------------------------------------------------------------------
 */

/** Body křivky v procentech šířky a výšky stage. Vzestupně zleva doprava. */
export const DOT_POSITIONS = [
  { x: 12.5, y: 68 }, // bod 1: vlevo dole
  { x: 37.5, y: 48 }, // bod 2: střed-nízko
  { x: 62.5, y: 28 }, // bod 3: střed-vysoko
  { x: 87.5, y: 10 }, // bod 4: vpravo nahoře
] as const;

/** Plynulá cubic bezier křivka proložená čtyřmi body DOT_POSITIONS. */
export function buildCurvePath(): string {
  const points = DOT_POSITIONS.map((p) => ({
    x: p.x,
    y: p.y,
  }));

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
