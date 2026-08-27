/**
 * ---------------------------------------------------------------------------
 * GEOMETRIE ZNAČKY — jediný zdroj tvaru loga
 * ---------------------------------------------------------------------------
 * Zdrojový vektor loga od klientky k dispozici není, existovalo jen rastrové
 * `public/logo.png` (250 × 144 px). Tvary níž jsou z něj obtažené:
 *
 *  · Bloky (modrý nahoře, černý dole) jsou v původním PNG přesné obdélníky,
 *    změřené na pixel: blok začíná na x = 49, je 144 px široký a 144 px vysoký,
 *    předěl mezi modrou a černou částí ležel na y = 107.
 *
 *  · `WING_PATH` je kaligrafická křivka (racek) obtažená z alfa masky PNG:
 *    maska se převzorkovala 6×, obešla se hranice po pixelových hranách,
 *    zjemnila Chaikinovým řezem, prořídla Ramer–Douglas–Peuckerem a body se
 *    proložily Catmull-Rom → kubickými Béziery. Výsledek má 40 uzlů a od
 *    původní masky se nikde neliší o víc než ~0,2 px při 250 px šířce, což je
 *    pod rozlišením, ve kterém se logo kdy vykreslí. Křivka je to, co klientka
 *    na logu chce zachovat, proto obtah, ne překreslení.
 *
 * Souřadnicová soustava zůstává stejná jako v původním PNG (250 × 144), aby
 * šlo kdykoli porovnat nové logo se starým rastrem 1 : 1.
 * ---------------------------------------------------------------------------
 */

/** Soustava shodná s původním rastrem `public/logo.png`. */
export const LOGO_VIEWBOX = { width: 250, height: 144 } as const;

/**
 * Plný blok značky. V původním logu to byly dva bloky nad sebou (modrý
 * a černý), po přebarvení na jednu navy je to jeden čtverec 144 × 144 —
 * předěl mezi slovy dělá sama křivka, která mezi nimi prochází.
 */
export const LOGO_BLOCK = { x: 49, y: 0, width: 144, height: 144 } as const;

/** Kaligrafická křivka (racek). Obtah z `public/logo.png`, viz komentář výš. */
export const WING_PATH =
  "M103.92 84.33C103.26 83.17 101.53 79.25 99.98 77.36C98.44 75.47 96.86 74.24 94.63 73.01C92.4 71.78 90.12 70.84 86.61 70C83.11 69.17 82.63 68.17 73.59 68C64.55 67.83 41.93 67.83 32.39 69C22.85 70.17 20.84 72.68 16.37 75.01C11.91 77.34 8.32 81.84 5.6 83C2.88 84.16 0.96 82.8 0.02 81.98C-0.91 81.16 -0.33 79.35 0 78.08C0.33 76.8 0.79 75.7 2.02 74.36C3.25 73.01 4.3 71.91 7.36 70.01C10.42 68.12 16.37 64.84 20.37 63.01C24.38 61.17 26.88 60.17 31.39 59C35.89 57.84 39.7 56.33 47.4 56C55.11 55.67 69.56 56.17 77.6 57C85.64 57.84 91.12 59.5 95.62 61.01C100.13 62.51 102.41 64.46 104.64 66.01C106.87 67.57 107.52 68.02 108.98 70.36C110.44 72.69 109.17 80.06 113.4 80C117.64 79.94 128.71 72.34 134.37 70.01C140.04 67.67 140.18 66.84 147.39 66C154.59 65.17 168.22 63.83 177.6 65C186.97 66.17 192.62 68.01 203.63 73.01C214.64 78.01 235.91 90.36 243.64 95.01C251.36 99.67 249.71 100.1 250 100.93C250.29 101.76 250.1 102.31 245.37 99.99C240.65 97.67 228.13 90.01 221.63 87.01C215.13 84.01 209.71 83.33 206.37 81.99C203.04 80.66 205.59 80.34 201.63 79.01C197.66 77.68 189.97 74.67 182.6 74C175.23 73.33 165.44 74 157.4 75C149.36 76 139.72 78.34 134.38 80.01C129.04 81.68 127.92 83.12 125.36 85.02C122.8 86.91 120.08 89.92 119.01 91.36C117.95 92.8 119.88 92.54 118.98 93.64C118.08 94.75 115.37 97.27 113.6 98C111.83 98.72 109.65 98.39 108.38 98C107.12 97.6 106.76 97.92 106.01 95.64C105.27 93.36 104.27 86.22 103.92 84.33C103.58 82.45 104.58 85.5 103.92 84.33Z";

/**
 * SAZBA OBOU SLOV.
 *
 * Původní logo je vysázené úzkým geometrickým bezpatkovým písmem (Futura /
 * Century Gothic), které v projektu není a kupovat ho zadání neřeší. Web jede
 * na DM Sans, což je taky geometrický grotesk s kruhovým "O" — z toho, co je
 * na webu k dispozici, je to nejbližší možná náhrada. DM Sans je asi o 12 %
 * širší při stejné výšce verzálek, proto vychází stupeň o něco menší, než měl
 * rastr (verzálky 17,5 místo 20 px v soustavě 250 × 144).
 *
 * Šířka obou slov je svázaná přes `textLength` + `lengthAdjust="spacing"`:
 * prohlížeč roztáhne nebo stáhne jen PROSTRKÁNÍ, tvary písmen nechá být.
 * Slovo tak sedí přesně do bloku bez ohledu na to, jestli se DM Sans stihl
 * načíst, nebo se sází systémovým fallbackem — což je u loga v hlavičce
 * podstatné, jinak by při přepnutí písma poskočila celá značka.
 *
 * ANGLICKÁ MUTACE: "TRANSLATIONS" má 12 znaků proti osmi v "PŘEKLADY", takže
 * se do stejné šířky bloku nevejde ve stejném stupni — je menší (verzálky
 * 11,2). Svislá poloha se pak neřídí účařím, ale optickým středem pásu
 * verzálek české verze, aby obě mutace seděly v bloku stejně vysoko.
 *
 * SPODNÍ SLOVO JE PŘÍJMENÍ, NE OBOR (oprava, 26. 8. 2026): originální rastr
 * (`public/logo.png`) i klientčin e-mail ("TRANSLATIONS VRÁNOVÁ... jen
 * výměna translations za překlady") shodně ukazují "PŘEKLADY" / "VRÁNOVÁ" –
 * spodní slovo je příjmení a v obou mutacích se nepřekládá. Dřívější verze
 * tu měla omylem "TLUMOČENÍ" / "INTERPRETING" (obor, ne jméno).
 */
export const LOGO_TYPE = {
  /** Levý okraj a pevná šířka obou slov uvnitř bloku. */
  x: 62,
  length: 118,
  top: {
    cs: { text: "PŘEKLADY", fontSize: 25, baseline: 34.5 },
    en: { text: "TRANSLATIONS", fontSize: 16, baseline: 31.4 },
  },
  bottom: {
    cs: { text: "VRÁNOVÁ", fontSize: 25, baseline: 134.5 },
    en: { text: "VRÁNOVÁ", fontSize: 25, baseline: 134.5 },
  },
} as const;

export type LogoLocale = keyof typeof LOGO_TYPE.top;
