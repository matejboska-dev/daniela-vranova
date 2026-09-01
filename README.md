# Překlady Vránová — web

Web pro Mgr. Danielu Vránovou, soudní tlumočnici pro angličtinu.
Postavený podle briefu `Brief_Prekady_Vranova.docx` a nabídky CN-2026-014.

```bash
npm install && npm run dev
```

## Proč tento stack

| Požadavek z nabídky | Řešení |
| --- | --- |
| Bez WordPressu a Elementoru | Next.js 15 (App Router) |
| Načtení do 2 s | Statický prerender celé stránky, 140 kB JS (gzip), žádná animační knihovna |
| Čisté URL | Souborový routing |
| Meta tagy, sitemap.xml, FAQ strukturovaná data | Metadata API + `sitemap.ts` + JSON-LD |
| Dvě jazykové mutace (CS/EN) | Připraveno — viz níže |
| Kontaktní formulář s notifikacemi | Server action ve fázi vývoje |
| Responzivní design | Tailwind v4, ověřeno na 375 a 1280 px |

## Designový systém

Jediný zdroj barev, typografie a rozměrů je `@theme` blok v `src/app/globals.css`.
Implementuje `tokens.css` v1.2. V komponentách nejsou žádné natvrdo psané barvy
ani velikosti písma — všechno jde odsud.

**Fonty.** Playfair Display (display) a DM Sans (text). Třetí font schválně není,
utility roli zvládne DM Sans 500 verzálkami s prostrkáním. Obojí přes
`next/font/google`, takže se stahují při buildu a servírují z vlastní domény —
rychlost i GDPR.

**Tvrdá pravidla, která se nesmí porušit:**

- Playfair jen ve váze 400 (na navy 500), nikdy pod 20 px, nikdy 600+.
  Kurzíva výhradně v jednom pull quote na stránku — teď je v sekci O mně.
- Řádkování nesmí klesnout pod 1,08 u display a 1,12 u H2. České háčky nad
  velkými Ř, Č, Š a Ž se při těsnějším řádkování sekají s dolními dotahy
  předchozího řádku.
- Jedna akční barva `#0B57D0`. Sky `#29ABE2` maximálně na 5 % plochy a nikdy
  na textu ani tlačítku — na webu je jen jako vlásková linka pod eyebrow
  a jako jemný gradient v hero.
- Navy `#0B1F3A` přesně dvakrát: hero a patička. Třetí výskyt barvě bere váhu.

Váha display fontu se schválně nenastavuje v `--text-*` tokenech. Utility třída
by ji zapsala natvrdo a přebila pravidlo „na navy 500" z base vrstvy.

**Kontrast.** Ověřeno, všechno prochází WCAG AA: ink na bílé 18,1 : 1 ·
accent na bílé 6,4 : 1 · bílá na accentu 6,4 : 1 · bílá na navy 16,5 : 1 ·
`--ink-2` na světlé ploše 5,7 : 1 · `--on-deep-2` na navy 8,5 : 1.

## Vrána

Signature prvek. Jednotahová kresba v `src/components/brand/Crow.tsx`,
použitá přesně na třech místech — čtvrté je už dekorace:

| | Kde | Komponenta |
| --- | --- | --- |
| A | oddělovač sekcí, linka se uprostřed zvedne do dvou křídel | `CrowDivider` |
| B | značka v pečeti — logo, favicon, štítek „ověřeno" | `CrowSeal` |
| C | kresba v hero, vykreslí se jednou při načtení | `CrowDrawing` |

Oddělovač stojí jen tam, kde na sebe navazují dvě bílé sekce a barva je od sebe
neodliší. Jinde by to byla dekorace.

**Pozor: tohle je pracovní značka, ne hotové logo.** Silueta ve stávajícím logu
klientky je racek, ne vrána — rozpětí a ostrý úhel křídel odpovídají mořskému
ptáku. Proto je tady pták z profilu s kratšími zaoblenými křídly a klínovitým
ocasem. Finální kresba s texturou (rytina, hlubotisk) je samostatná položka
dodávky a čeká na odsouhlasení směru klientkou.

## Sekce stránky

Pořadí odpovídá návrhu, mění se přehozením řádků v `src/app/page.tsx`.

| # | Sekce | Komponenta | Plocha | Kotva |
| --- | --- | --- | --- | --- |
| — | Hlavička | `SiteHeader` | průhledná → bílá | — |
| 1 | Hero | `HeroSection` | navy | `#uvod` |
| 2 | Kvalifikace | `CredentialsSection` | bílá | `#klienti` |
| 3 | O mně | `AboutSection` | světlá | `#o-mne` |
| 4 | Služby + varianty ověření | `ServicesSection` | bílá | `#sluzby` |
| 5 | Jak to probíhá | `ProcessSection` | bílá | `#proces` |
| 6 | Výzva k akci | `CallToActionSection` | světlá | `#poptavka` |
| 7 | Reference | `TestimonialsSection` | bílá | `#reference` |
| 8 | Časté dotazy | `FaqSection` | bílá | `#faq` |
| 9 | Kontakt | `ContactSection` | světlá | `#kontakt` |
| 10 | Patička | `SiteFooter` | navy | — |

### Hlavička

Nad hero leží průhledná s bílým textem. Po odscrollování 40 px přepne na bílou
plochu, ink text a spodní linku a zároveň se sníží z 80 na 64 px. Mobilní menu
je full-screen overlay: položky v display fontu 28 px, CTA přes celou šířku
dole, zamčené rolování pod sebou a zavírání Escapem.

Kvůli tomu je hlavička klientská komponenta — před hydratací mobilní menu
nefunguje. U ostatního obsahu to neplatí, ten je celý serverový.

Text tlačítka je „Nezávazné nacenění (zdarma)" záměrně — brief výslovně žádá
nahradit označení „Konzultace".

### Pás pod hero

Původně logolišta klientů. Klientka je ale sólo soudní tlumočnice a žádná loga
k zobrazení nemá — pět prázdných rámečků by jen zabralo první obrazovku. Pás
proto nese kvalifikaci a rozsah služby. Kdyby loga přece jen byla, vrací se to
změnou `credentials` v `content/home.ts`.

### Služby a varianty ověření

Sekce jede na rozdělení 5/7 (nadpis vlevo, karty vpravo) po vzoru editorial
layoutu. Nikdy 6/6, které působí staticky. Pod mřížkou stojí **listinný**
a **digitální** překlad jako dvě rovnocenné, jasně oddělené varianty — brief to
žádá výslovně, digitální ověřený překlad je dnes běžná varianta.

### Časté dotazy

Umístěné mezi reference a kontakt. Dotazy na cenu a termín mají padnout dřív,
než někdo sáhne po formuláři — kontaktní formulář není náhrada za chybějící
informaci. Rozbalování stojí na `<details>`, funguje bez JavaScriptu.

Ze stejného zdroje se generuje **FAQPage JSON-LD** kvůli dohledatelnosti
v Google AI Overview a ChatGPT (AEO dle nabídky).

## Struktura

```
src/
  app/            layout, homepage, design tokeny (globals.css), favicon
  components/
    brand/        Crow (vrána, pečeť, oddělovač), Logo
    layout/       Container, Section, SectionLabel
    sections/     deset sekcí stránky, jedna sekce = jeden soubor
    ui/           Button, Card, Badge, Icon, TextField, ChevronIcon
  content/home.ts všechny texty na jednom místě
  lib/cn.ts
public/foto/      fotografie klientky
```

Komponenty neobsahují žádné texty ani barvy natvrdo — copy se mění
v `content/home.ts`, barvy v `@theme` bloku v `app/globals.css`.

## Co se kde vyměňuje

**Hero video.** `HeroBackdrop` v `HeroSection.tsx` je zatím navy plocha
s gradientem. Až se vybere a zkomprimuje klip, nahradí se za `<video>`
(`muted`, `loop`, `playsinline`, s posterem) — royalty free záběry bez obličejů,
později vlastní: paternoster, podepisování, razítkování. Pod 768 px a při
`prefers-reduced-motion` se video nahrazuje posterem. Rozvržení textu se nemění.

Klipy v `daniela vranova images/background video/` mají 7–106 MB a do repa
zatím nejdou — potřebují ořez a kompresi, jinak by shodily garanci načtení
do dvou sekund.

**Fotky.** Použitelný je jen výřez `hero-photo.png` (v repu jako
`public/foto/daniela-vranova.png`) — je na tmavém pozadí a s alfa kanálem,
takže sedí do hero i do portrétu 4 : 5 v sekci O mně. Ostatní dodané snímky
mají v záběru svatební hosty, což obrazový jazyk zakazuje.

Chybí dokumentární detaily: razítko, podpis, svázaný překlad se šňůrkou, papír,
ruce. Pro ně je připravená komponenta `MediaPlaceholder`, v DevTools se najdou
přes `[data-placeholder]`.

## SEO, náhledy a spuštění

Adresu webu a stav spuštění drží **`src/lib/site.ts`** — jedno místo:

- `SITE_URL` — finální doména (zatím placeholder, potvrdit před spuštěním).
- `SITE_LAUNCHED` — vypínač. Dokud je `false`, web je neveřejný náhled:
  `robots.ts` zakáže crawlerům celý web, meta `robots` v obou layoutech drží
  `noindex, nofollow`, `sitemap.ts` vrací prázdno. Při spuštění se přepne na
  `true` a indexace se zapne naráz.

Co je hotové:

- **`app/robots.ts`** a **`app/sitemap.ts`** (Next konvence) — obojí gated přes
  `SITE_LAUNCHED`, sitemapa nese hreflang přes `alternates.languages`.
- **OG / náhledové obrázky** — statické PNG `app/(cs)/opengraph-image.png`
  a `app/(en)/en/opengraph-image.png` (1200×630, navy s modrým akcentem).
  Vygenerované přes `next/og` (satori) šablonu; ta byla po vygenerování
  smazána, protože edge runtime je v Next 16 deprecated a statický soubor
  je spolehlivější. Nová verze: dočasně vrátit generátor z gitu, nebo
  přemalovat PNG ručně.
- **Metadata** v obou layoutech — `metadataBase`, `openGraph`, `twitter`,
  `alternates` (canonical + hreflang).
- **Strukturovaná data** — `FAQPage` (v `FaqSection.tsx`) a `ProfessionalService`
  / LocalBusiness (`components/seo/BusinessSchema.tsx`, v `HomePage`). Adresa
  je jen „Praha 3" + oblast působnosti, žádná ulice (klientčino přání).
- **Favicon** — `app/icon.svg` (navy plocha s křivkou z loga).
- **Analytika** — `components/Analytics.tsx` načte Plausible jen když je
  nastavená `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`. Bez cookies, bez souhlasu. Do té
  doby prázdný slot.

## Co web zatím nemá

Vědomě mimo rozsah tohoto kroku:

- **Podstránky služeb** — karty i odkazy v hlavičce zatím vedou na kotvy,
  ne na `/sluzby/...`.
- **Odesílání formuláře** — tlačítko je `type="button"`, nikam neposílá.
- **EN mutace** — přepínač je v hlavičce, obě položky zatím vedou na kotvu.
  Struktura je připravená: `content/home.ts` se zkopíruje jako `home.en.ts`
  a homepage se přesune do `app/[locale]/page.tsx`.
- **SEO** — `robots` je zatím `noindex`, aby se náhled nedostal do vyhledávače.

## Rozhodnutí: web nemá ceník

Brief zmiňuje „sekci s cenami", ale klientka to upřesnila — **každá poptávka se
naceňuje individuálně**, žádný ceník ani sazba za normostranu na web nepatří.

Web to řeší jinak: tlačítko v hlavičce zve na „Nezávazné nacenění (zdarma)"
a FAQ u otázky na cenu vysvětluje, **co cenu ovlivňuje** (rozsah, jazyková
kombinace, termín, listinný vs. digitální překlad). Člověk tak ví, do čeho jde,
i bez čísla.

Nepřidávat ceník ani „ceny od…" — rozporovalo by to způsob práce klientky.

## Otevřené otázky

Nesouvisí přímo s kódem, ale blokují další fázi:

- Rozpor v cíli webu: „kvalitnější poptávky" vs. poznámka „přivést více klientů".
- Odsouhlasení hero nadpisu „Dokumenty, které úřad přijme napoprvé."
  (návrh ze styleguidu) a směru loga.
- Dodací lhůty — v textech zbývají `[hranaté závorky]`, které musí potvrdit
  klientka.
- Skutečné reference včetně souhlasu s uvedením jména. Teď jsou zástupné.
- Přístupy k doméně soudni-anglictina.cz (FORPSI) — bezpečným kanálem,
  ne čistým textem v e-mailu.
