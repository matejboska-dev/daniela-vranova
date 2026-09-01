/**
 * ---------------------------------------------------------------------------
 * OBSAH HOMEPAGE
 * ---------------------------------------------------------------------------
 * Všechny texty na jednom místě. Komponenty nemají žádné texty natvrdo –
 * přepis copy se dělá jen tady.
 *
 * Tone of voice: vykání, první osoba jednotného čísla ("překládám", "ověřuji",
 * nikdy "náš tým"). Krátké věty. Konkrétní čísla a termíny místo přídavných
 * jmen. Nic se neomlouvá a nic se nepřehání.
 *
 * Zakázaná slovní zásoba: komplexní řešení, individuální přístup, tým
 * profesionálů, kvalita je naše priorita, těšíme se na spolupráci.
 * Nikde se neuvádí členství v JTP a nikde se nenabízí překlad knih.
 *
 * TERMINOLOGIE (revize 2. kolo): zákon č. 354/2019 Sb. zná "překlad
 * v elektronické podobě", praxe říká "elektronický (ověřený) překlad".
 * Slovo "digitální" se na webu nepoužívá vůbec – ani v textech, ani v ID,
 * ani v alt textech.
 *
 * CO WEB NESLIBUJE (revize 2. kolo): nikde se netvrdí, že klientka za
 * zákazníka zjistí požadavky konkrétního úřadu, ani že daný úřad zvolenou
 * variantu uzná. Úřady s třetími stranami běžně nekomunikují. Web proto
 * vysvětluje rozdíly a nechává ověření na zákazníkovi.
 *
 * INTERPUNKCE: v textech se nepoužívá dlouhá pomlčka (—). Jednotně jen
 * půltvrdá pomlčka s mezerami ( – ), viz revize bod 18.
 *
 * Druhá jazyková mutace je `home.en.ts` a jede na routě `/en`
 * (`app/(en)/en/page.tsx`). Struktura klíčů je v obou souborech shodná a hlídá
 * ji typ `Content` v `content/index.ts` — chybějící nebo přebývající klíč
 * neprojde `npm run typecheck`.
 * ---------------------------------------------------------------------------
 */

export const brand = {
  name: "Překlady Vránová",
  person: "Mgr. Daniela Vránová",
  tagline: "Soudní překlady a\u00A0tlumočení z\u00A0angličtiny. Praha, od\u00A0roku 2004.",
  phone: { label: "+420 604 750 796", href: "tel:+420604750796" },
  email: {
    label: "daniela.vranova@seznam.cz",
    href: "mailto:daniela.vranova@seznam.cz",
  },
  /*
   * Klientka aktivně dává obsah z akcí do Instagram Stories (tlumočnická
   * praxe v reálném čase) a chce vidět i LinkedIn. Odkazy se používají jak
   * v patičce, tak v sekci Tlumočení vedle výčtu referencí.
   */
  social: {
    instagram: {
      label: "Instagram",
      href: "https://www.instagram.com/certified_interpreter/",
    },
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/daniela-vranova-7607b0359/",
    },
  },
} as const;

/* Brief: označení "Konzultace" nahradit za "Nezávazné nacenění (zdarma)". */
const NACENENI = { label: "Nezávazné nacenění (zdarma)", href: "#kontakt" };

/**
 * KVALIFIKACE – jediný zdroj obou tvrzení i odkazů na jejich ověření.
 *
 * Revize 2. kolo, bod 3.3 a 3.4: po přelicencování podle nového zákona
 * jmenuje soudní překladatele a tlumočníky Ministerstvo spravedlnosti, ne
 * soud. Obě tvrzení jsou veřejně ověřitelná, proto vedou rovnou do rejstříku
 * a na stránky komory – tvrzení o kvalifikaci, které si nejde ověřit, je na
 * webu soudního překladatele k ničemu.
 */
const QUALIFICATIONS = {
  ministry: {
    label: "Jmenovaná Ministerstvem spravedlnosti",
    href: "https://seznat.justice.cz/",
  },
  chamber: {
    label: "Členka Komory soudních tlumočníků\u00A0ČR",
    /* Odkaz cílí na českou verzi webu komory; anglická mutace vede na /en. */
    href: "https://www.kstcr.cz/cz",
  },
} as const;

/**
 * Veřejná hodnocení. Používají se na dvou místech (Tlumočení a Reference),
 * proto stojí v jedné konstantě – dvě kopie URL by se po první opravě
 * rozešly.
 */
export const reviewLinks = [
  {
    label: "Firmy.cz",
    href: "https://www.firmy.cz/detail/659391-preklady-vranova-praha-zizkov.html",
  },
  {
    label: "Expats.cz",
    href: "https://www.expats.cz/directory/listing/daniela-vranova-certified-translatorinterpreter-xtwqv#reviews-list-start",
  },
] as const;

export const header = {
  /*
   * Revize (klientčin brief): "Tlumočení" bylo dřív jen jedna karta uvnitř
   * "Služby" (mřížka typů dokumentů) – kdo hledá tlumočníka, na "Služby"
   * neklikne, protože ten label o tlumočení nic neříká. Překlady a Tlumočení
   * proto stojí v navigaci jako dvě samostatné, stejně viditelné položky,
   * žádná pod tou druhou jako podpoložka.
   */
  nav: [
    { label: "Překlady", href: "#sluzby" },
    { label: "Tlumočení", href: "#tlumoceni" },
    { label: "Ověření", href: "#varianty" },
    { label: "Cena a termín", href: "#cena" },
    { label: "Časté dotazy", href: "#faq" },
  ],
  cta: NACENENI,
  /* Přepínač jazyka. Čeština sedí na kořeni webu, angličtina pod `/en`. */
  locales: [
    { code: "CS", href: "/", current: true },
    { code: "EN", href: "/en", current: false },
  ],
} as const;

/**
 * POPISKY ROZHRANÍ, které nejsou vidět — `aria-label` u navigace a menu.
 * Patří sem, ne do komponent: v druhé mutaci se překládají stejně jako
 * viditelný text a čtečka je předčítá nahlas.
 */
export const ui = {
  nav: {
    main: "Hlavní navigace",
    open: "Otevřít menu",
    close: "Zavřít menu",
    mobileMenu: "Mobilní menu",
  },
} as const;

export const hero = {
  /* Revize 2. kolo, bod 2.1: klientka je překladatelka i tlumočnice, eyebrow
     dřív nesl jen půlku profese. */
  eyebrow: "Soudní překladatelka a\u00A0tlumočnice – Praha,\nod\u00A0roku 2004",
  /*
   * Revize (klientčin brief, 14. 8. 2026): původní "Dokumenty, které úřad
   * přijme napoprvé" klientka odmítla – jestli konkrétní úřad nebo zahraniční
   * instituce dokument přijme, nemá pod kontrolou a nechce to slibovat. Nový
   * nadpis slibuje jen to, co reálně dodržet může: že dokument připraví
   * přesně podle toho, co návštěvník potřebuje, ne že to za něj zaručí
   * u třetí strany.
   *
   * Revize 3. kolo (e-mail klientky, 29. 8. 2026): nadpis mluvil jen
   * o dokumentech, přitom tlumočení je pro klientku objemově větší část
   * práce a chce ho na úvodní straně vidět rovnocenně s překlady. "Dokumenty"
   * se proto rozšířilo na "Dokumenty i tlumočení" – slib zůstává stejný
   * (připravím přesně tak, jak potřebujete), jen teď pokrývá obě činnosti.
   * Vychází z klientčiny vlastní formulace z poznámek: "Dokumenty nebo
   * tlumočení – cokoli potřebujete."
   */
  title: "Soudní překlady i\u00A0tlumočení z\u00A0angličtiny – cokoli potřebujete.\nOchotně a\u00A0spolehlivě.",
  description:
    "Soudní překlady a\u00A0tlumočení z\u00A0angličtiny. Listinný i\u00A0elektronický ověřený překlad.\nCena a\u00A0termín domluvené předem.",
  primaryCta: NACENENI,
  /*
   * Revize (klientčin brief): pod hlavní CTA stojí dvě rychlé kotvy do sekcí,
   * které rozhodují, proč návštěvník přišel – překlad dokumentu, nebo
   * tlumočení. Dřív tu bylo jedno tlačítko „Jak to probíhá“ (kotva na #proces);
   * ta cesta zůstává dostupná z hlavní navigace.
   */
  translationsCta: { label: "Překlady", href: "#sluzby" },
  interpretingCta: { label: "Tlumočení", href: "#tlumoceni" },
  /*
   * Revize 2. kolo, bod 2.3: věta "Cenu a termín pošlu nezávazně a zdarma."
   * pod tlačítky odsud zmizela. Stála přímo pod tlačítkem "Nezávazné nacenění
   * (zdarma)" a stejné tlačítko je i v hlavičce – tři formulace téhož slibu
   * na jedné obrazovce.
   */
  photoAlt: "Mgr.\u00A0Daniela Vránová, soudní překladatelka a\u00A0tlumočnice",
  /*
   * ROLE HERO FOTKY: alt text pro portrét z bodu 2a klientčina briefu.
   * Zdrojová fotka je stejná profilovka, jakou má na Instagramu
   * (@certified_interpreter) i LinkedInu – jednotný vizuální styl napříč
   * kanály. `object-position` v komponentě řeší, který výřez je vidět.
   */
} as const;

/**
 * TRUST SEKCE POD HERO — „rejstřík kvalifikace“
 * Původně logolišta klientů. Klientka je sólo tlumočnice a žádná loga nemá –
 * pás proto nese to, co v jejím oboru rozhoduje: kvalifikaci a rozsah služby.
 *
 * Poslední kolo: sr-only nadpis se stal viditelnou hlavičkou sekce (eyebrow +
 * nadpis + perex), čtyři mikropečetě nahradila jedna plná pečeť pod perexem
 * a čtyři sloupce dlaždic se změnily v evidenční seznam s římským indexem.
 * `index` je římská číslice záznamu, `title` tvrzení, `note` upřesnění.
 */
export const trust = {
  label: "Kvalifikace",
  title: "Proč mě lidé oslovují",
  lead: "Čtyři záznamy v\u00A0rejstříku, který úřady znají.",
  items: [
    {
      id: "jmenovana",
      index: "I",
      title: QUALIFICATIONS.ministry.label,
      note: "Soudní překladatelka a\u00A0tlumočnice pro\u00A0anglický jazyk",
    },
    { id: "komora", index: "II", title: "Komora soudních tlumočníků\u00A0ČR", note: "Členka od\u00A0jmenování" },
    { id: "varianty", index: "III", title: "Listinný i\u00A0elektronický překlad", note: "Obě varianty se\u00A0stejnou platností" },
    { id: "termin", index: "IV", title: "Termín potvrzený předem", note: "Nacenění zdarma a\u00A0nezávazně" },
  ],
} as const;

/** Rok jmenování soudní tlumočnicí. Odsud se dopočítává délka praxe. */
const ROK_JMENOVANI = 2004;

/*
 * Délka praxe se nepíše ručně. Ruční číslo je jediný údaj na webu, který
 * zestárne bez toho, aby si toho kdokoli všiml — a na stránce, která prodává
 * přesnost, je zastaralý počet let praxe ta nejhloupější možná chyba.
 * Hodnota se spočítá při buildu, takže se opraví každým nasazením.
 */
const LET_PRAXE = new Date().getFullYear() - ROK_JMENOVANI;

export const about = {
  label: "Kdo jsem",
  title: "Mgr.\u00A0Daniela Vránová, soudní tlumočnice pro\u00A0angličtinu",
  /*
   * Revize 2. kolo, bod 3.1: druhý odstavec je doslovné znění od klientky.
   * Mění se dvě věci proti minulé verzi – "Pracuji sama" na "Práci vykonávám
   * osobně" a "váš dokument" na "vám dokument" – a přibývá věta o změně
   * zákona a přelicencování u Ministerstva spravedlnosti.
   */
  paragraphs: [
    /*
     * Revize 3. kolo: nový úvodní odstavec o historii jmenování – doslovné
     * znění z klientčiných poznámek ("POZNÁMKY WEB I"). Věta o osobním výkonu
     * práce, kterou tam měla klientka napsanou za tímhle odstavcem, se
     * neopakuje – stojí už jako první věta odstavce níž.
     */
    "Jmenoval mě soud a\u00A0jsem členkou Komory soudních tlumočníků\u00A0ČR. Nedávno došlo ke\u00A0změně zákona o\u00A0soudních tlumočnících a\u00A0překladatelích a\u00A0já prošla procesem přelicencování a\u00A0byla jmenována Ministerstvem spravedlnosti.",
    "Práci vykonávám osobně, takže mluvíte přímo s\u00A0tím, kdo vám dokument překládá, razítkuje a\u00A0podepisuje. Tlumočím na\u00A0svatbách, u\u00A0notáře, při\u00A0jednáních i\u00A0u\u00A0soudu, v\u00A0Praze a\u00A0po\u00A0Čechách.",
    "Překlad vyhotovím v\u00A0listinné podobě s\u00A0kulatým razítkem nebo elektronicky jako PDF s\u00A0kvalifikovaným podpisem. Pomáhám lidem dorozumět se v\u00A0nejrůznějších životních i\u00A0profesních situacích.",
  ],
  /*
   * Statistiky přes portrét. Obě jsou ověřitelné a odpovídají na otázku,
   * kterou má návštěvník v hlavě: jak dlouho to dělá a kdo ji pověřil.
   *
   * Třetí dlaždice ("24 h / Na nacenění zdarma") padla – nesla stejný
   * neodsouhlasený časový slib jako zbytek webu ("do 24 hodin"), který se
   * nikde na stránce nemá tvrdit.
   */
  stats: [
    { id: "jmenovani", value: ROK_JMENOVANI, suffix: "", label: "Jmenována soudem" },
    { id: "praxe", value: LET_PRAXE, suffix: "", label: "Let praxe" },
  ],

  badges: [QUALIFICATIONS.ministry, QUALIFICATIONS.chamber],
  cta: NACENENI,
  phoneCta: { label: brand.phone.label, href: brand.phone.href },
  /*
   * Revize 2. kolo, bod 6.5: dřív tu stálo "napíšu vám, jestli vám stačí
   * digitální varianta". Klientka to odmítá – co uzná cizí úřad, není v její
   * moci. Zůstává jen to, co reálně pošle: cena a termín.
   */
  ctaNote: "Pošlete sken nebo fotku dokumentu. Napíšu vám cenu i\u00A0termín.",
  photoAlt: "Mgr.\u00A0Daniela Vránová, soudní překladatelka a\u00A0tlumočnice pro\u00A0anglický jazyk",
  /*
   * Video z tlumočení svatebního obřadu v Havlíčkových sadech (Grébovka).
   * Doplňuje fotky v téhle sekci, nenahrazuje je (klientčin brief, 23. 8. 2026).
   *
   * Barevné, bez přepínače: dřív tu byl přepínač barevná / černobílá k výběru,
   * klientka v e-mailu 29. 8. 2026 rozhodla pro barevnou ("ANO BARVA, PROSÍM").
   * Video je teď jediná barevná plocha na jinak desaturovaném webu.
   *
   * Bez viditelného popisku – `label`/`title`/`note` byly v obsahu, ale
   * komponenta je nevykreslovala; po krátkém pokusu ukázat je jako
   * figcaption padlo rozhodnutí video nechat bez textu.
   */
  video: {
    /* Popisek pro čtečku – video nemá zvuk ani titulky. */
    description:
      "Záznam z\u00A0tlumočení svatebního obřadu: Daniela Vránová stojí vedle oddávajícího a\u00A0tlumočí obřad snoubencům.",
    pause: "Pozastavit video",
    play: "Spustit video",
  },
} as const;

/**
 * SLUŽBY – sedm typů dokumentů, ne čtyři obory.
 *
 * Návštěvník nepřichází s dotazem "chci právní překlad". Přichází s rodným
 * listem v ruce. Mřížka proto pojmenovává dokumenty, ne kategorie.
 *
 * `icon: "custom"` = vlastní kresba, `icon: "todo"` = Lucide v šedé,
 * čeká na překreslení (viz revize bod 25).
 *
 * Revize (klientčin brief, 14. 8. 2026): položka "Tlumočení na svatbě
 * a u notáře" odsud zmizela – tlumočení dřív bylo jen jedna karta v týhle
 * mřížce dokumentů, takže ho polovina poptávky vůbec nenašla. Má teď vlastní
 * sekci `interpreting` níž a vlastní položku v hlavní navigaci.
 */
export const services = {
  label: "Služby",
  title: "Co pro\u00A0vás přeložím",
  description:
    "Každou zakázku nacením předem a\u00A0zdarma. Cenu určuje rozsah dokumentu a\u00A0termín. Překlad můžete mít v\u00A0listinné nebo elektronické verzi.",
  items: [
    {
      id: "rodny-oddaci-list",
      icon: "certificate",
      drawn: true,
      title: "Rodný a\u00A0oddací list",
      description: "Pro matriku, svatbu s\u00A0cizincem, pobyt i\u00A0zápis do\u00A0zahraniční evidence.",
    },
    {
      id: "rejstrik-trestu",
      icon: "shieldCheck",
      drawn: false,
      title: "Výpis z\u00A0rejstříku trestů",
      description: "Pro zaměstnavatele, živnostenský úřad i\u00A0řízení o\u00A0pobytu v\u00A0zahraničí.",
    },
    {
      id: "diplom-nostrifikace",
      icon: "diploma",
      drawn: true,
      title: "Diplom a\u00A0nostrifikace",
      description: "Diplomy, vysvědčení a\u00A0dodatky k\u00A0diplomu pro\u00A0uznání vzdělání.",
    },
    {
      id: "smlouvy",
      icon: "contract",
      drawn: false,
      title: "Smlouvy",
      description: "Kupní, nájemní, pracovní i\u00A0obchodní smlouvy včetně příloh.",
    },
    {
      id: "plna-moc",
      icon: "signature",
      drawn: false,
      title: "Plná moc",
      description: "Plné moci pro\u00A0zastupování na\u00A0úřadě, u\u00A0notáře i\u00A0před soudem.",
    },
    {
      id: "obchodni-rejstrik",
      icon: "registry",
      drawn: false,
      title: "Výpis z\u00A0obchodního rejstříku",
      description: "Výpisy, zakladatelské listiny a\u00A0doklady o\u00A0právní subjektivitě.",
    },
    {
      id: "ostatni",
      icon: "documents",
      drawn: false,
      title: "Ostatní úřední dokumenty",
      description: "Rozsudky, potvrzení, lékařské zprávy a\u00A0další listiny pro\u00A0úřady.",
    },
  ],
} as const;

/**
 * TLUMOČENÍ – vlastní sekce, ne karta v mřížce dokumentů.
 *
 * Revize (klientčin brief, 14. 8. 2026): dřív šlo tlumočení najít jen jako
 * jednu z osmi karet v sekci Služby ("Tlumočení na svatbě a u notáře"), takže
 * ho polovina návštěvníků – ta, co hledá tlumočníka, ne překlad dokumentu –
 * vůbec neobjevila. Sekce teď stojí samostatně, s vlastní položkou v hlavní
 * navigaci, a rozpadá nabídku na jasně odlišené situace.
 *
 * Revize 2. kolo, bod 5.1: rozsah působnosti je "v Praze a po Čechách", ne
 * "po celé ČR". Druhá věta perexu (ochota, vstřícnost, příjemné jednání) je
 * záměrná – klientka chce, aby na webu zaznělo její osobní vystupování, a
 * přeje si to právě u tlumočení, ne u dokumentů.
 *
 * Revize 3. kolo (e-mail klientky, 29. 8. 2026): "Tlumočení pro autoškoly"
 * dřív jelo jen v EN mutaci (`enOnly: true`) – klientka teď výslovně chce
 * kartu i v české verzi, "aby to aspoň vyjíždělo" (dohledatelnost). Flag
 * zmizel, sekce má v obou mutacích čtyři karty a `InterpretingSection.tsx`
 * už nefiltruje.
 */
export const interpreting = {
  label: "Tlumočení",
  title: "Tlumočení soudní i\u00A0běžné",
  description:
    "Tlumočím u\u00A0soudu, na\u00A0úřadech, u\u00A0notáře i\u00A0na\u00A0konferencích a\u00A0firemních jednáních, v\u00A0Praze a\u00A0po\u00A0Čechách. Ochota, vstřícnost a\u00A0příjemné jednání jsou to, co mi klienti zmiňují nejčastěji.",
  categories: [
    {
      id: "soudni",
      icon: "scale",
      title: "Soudní tlumočení",
      description:
        "Tlumočení u\u00A0soudu, na\u00A0úřadech a\u00A0u\u00A0notáře – jednání, výslechy i\u00A0notářské zápisy, kde je přítomnost soudního tlumočníka podmínkou.",
    },
    {
      id: "autoskola",
      icon: "car",
      title: "Tlumočení pro\u00A0autoškoly",
      description:
        "Tlumočení u\u00A0zkoušek cizinců v\u00A0autoškole, aby rozuměli zadání i\u00A0průběhu zkoušky.",
    },
    {
      id: "konsekutivni-simultanni",
      icon: "mic",
      title: "Konsekutivní a\u00A0simultánní tlumočení",
      description:
        "Tlumočení na\u00A0konferencích, jednáních a\u00A0firemních akcích, konsekutivně i\u00A0simultánně podle formátu akce.",
    },
    /* Revize 2. kolo, bod 5.2 – doslovné znění od klientky. */
    {
      id: "svatba",
      icon: "rings",
      title: "Tlumočení svatebního obřadu",
      description:
        "Tlumočení svatby s\u00A0cizincem na\u00A0matrice i\u00A0mimo ni, včetně přípravy dokumentů, které matrika k\u00A0obřadu vyžaduje.",
    },
  ],
  /*
   * Revize 2. kolo, bod 5.3 a 5.4 – NEJDŮLEŽITĚJŠÍ VĚCNÁ OPRAVA CELÉHO KOLA.
   *
   * Dřív tu stálo "Tlumočila jsem mimo jiné pro:" a čtyři jména (Senát ČR,
   * O2 arena, SOS dětské vesničky, Škoda Auto). To bylo věcně špatně: klientka
   * pro tyhle subjekty netlumočila, tlumočila v jejich prostorách a poptal ji
   * někdo jiný. Seznam níž dodala sama a formulace je "Spolupracovala jsem
   * mimo jiné s:" – vyjmenovává skutečné zadavatele.
   *
   * Vizuálně je to výpis jmen, ne logolišta. Loga k dispozici nejsou a
   * vyrobit je "aby to vypadalo" by byl přesně ten typ tvrzení, kvůli kterému
   * se tenhle blok musel přepisovat.
   */
  references: {
    intro: "Spolupracovala jsem mimo jiné s:",
    /*
     * Revize 3. kolo (e-mail klientky, 29. 8. 2026): klientka poslala nový,
     * kratší seznam ("ten stávající seznam vyměňte za tento") – 17 jmen místo
     * 24. Vypadly Fakulta sociálních věd UK, Národní soustava kvalifikací,
     * Brando/In the Company of Huskies, Immigreat, Visa guru, Evropské noviny
     * a Insounder. Pořadí i znění drží její e-mail; "Grada" a "PBIS" jsou
     * zkrácené tvary z jejího seznamu. "Air BNB" psala klientka takto, na webu
     * je ale správný firemní tvar "Airbnb" (stejná úvaha jako u dřívějších
     * revizí).
     *
     * Loga: 10 ze 17 jmen má reálné logo (jede v marquee), zbylých 7 se
     * vypisuje jako věta pod sloupci – viz `InterpretingReferencesSection.tsx`.
     * Nepoužitá loga po výměně: `fsv-uk.webp`, `immigreat.webp`.
     */
    items: [
      "UNYP",
      "CIEE",
      "Porat law firm",
      "AK Legato",
      "Act legal",
      "Advokátní kancelář Brož, Sedlatý s.r.o.",
      "PBIS",
      "Plato",
      "Elektrárny Opatovice",
      "Prime Homes Český Brod s. r. o.",
      "Grada",
      "SOS Dětské vesničky",
      "Velvyslanectví Malajsie",
      "Air BNB",
      "Ininvest",
      "Sirena Film",
      "AK Insight",
    ],
    logolessIntro: "Spolupracovala jsem např.\u00A0s:",
    reviewsIntro: "Další reference najdete na",
  },
  cta: NACENENI,
  /*
   * Alt text popisuje, co je na fotce, ne pro koho klientka tlumočila –
   * z téhož důvodu, proč zmizel blok se jmény výš (revize 2. kolo, bod 5.3).
   */
  photoAlt: "Mgr.\u00A0Daniela Vránová tlumočí v\u00A0tlumočnické kabině na\u00A0konferenci",
} as const;

/**
 * DVĚ VARIANTY OVĚŘENÍ – nejdůležitější sekce na stránce.
 * Brief je žádá jasně oddělit: elektronický ověřený překlad je dnes běžná
 * varianta a klientka ji chce nabízet výslovně, ne jako poznámku pod čarou.
 *
 * Každá karta: nákres anatomie, nadpis, odrážky. Termínová bublina pod
 * odrážkami padla – nesla jen neodsouhlasený placeholder "[doplnit] pracovních
 * dní" a na web se natvrdé číslo, které klientka nepotvrdila, dostat nesmí.
 *
 * Odrážka je objekt, ne řetězec: poslední bod elektronické varianty nese
 * odkaz na autorizovanou konverzi u České pošty (revize 2. kolo, bod 6.4).
 * Jednotný tvar pro obě karty, aby se komponenta nemusela větvit.
 */
export const variants = {
  label: "Dvě varianty ověření",
  title: "Papír se\u00A0šňůrkou nebo PDF s\u00A0elektronickým podpisem",
  items: [
    {
      id: "listinny",
      anatomy: "paper",
      title: "Listinný (svázaný) překlad",
      description:
        "Papírový překlad pevně spojený s\u00A0dokumentem, s\u00A0doložkou, kulatým razítkem a\u00A0podpisem.",
      bullets: [
        { text: "Potřebuji originál nebo ověřenou kopii dokumentu" },
        { text: "Svázáno šňůrkou a\u00A0přelepkou, nelze rozdělit" },
        { text: "Předám osobně v\u00A0Praze nebo pošlu doporučeně" },
        /*
         * Revize 3. kolo: jen sken e-mailem nejde svázat s ničím fyzickým.
         * Klientka chce mít tuhle mez jasně řečenou dřív, než si ji klient
         * domyslí sám až ve chvíli, kdy má hotovo a čeká na svázaný dokument.
         */
        { text: "Jen e-mailem nic nesvážu – potřebuji fyzický dokument nebo osobní setkání" },
      ],
    },
    {
      id: "elektronicky",
      anatomy: "digital",
      title: "Elektronický (elektronicky ověřený) soudní překlad",
      description:
        "PDF s\u00A0kvalifikovaným elektronickým podpisem a\u00A0časovým razítkem. Stejná právní platnost jako u\u00A0listinného.",
      bullets: [
        /* "Většinou", ne "Stačí": o pár řádků níž stojí, že jindy úřad chce
           autorizovanou konverzi. Absolutní tvrzení by si s tím odporovalo. */
        { text: "Většinou stačí kvalitní sken nebo fotka dokumentu" },
        { text: "Doložka i\u00A0podpis jsou součástí jednoho PDF" },
        { text: "Doručím e-mailem, tisk platnost ruší" },
        {
          text: "Někdy stačí kvalitní sken, jindy úřad vyžaduje\u00A0",
          link: {
            label: "autorizovanou konverzi dokumentu",
            href: "https://www.ceskaposta.cz/sluzby/sluzby-egovernment/czechpoint/autorizovana-konverze-dokumentu",
          },
        },
        {
          text: "Někdy klient přichází rovnou s\u00A0elektronickým originálem opatřeným časovým razítkem",
        },
      ],
    },
  ],
  /*
   * Revize 2. kolo, bod 6.5: dřív tu stálo "poradím vám, která varianta
   * projde u vaší instituce". Klientka to odmítá – úřady s třetími stranami
   * často vůbec nekomunikují, takže tenhle slib nemá jak splnit.
   */
  note: "Nevíte, kterou variantu zvolit? Zjistěte, co přesně požaduje instituce, u\u00A0které budete dokument předkládat.\nNení vám něco jasné? Vše vysvětlím a\u00A0poradím vám.",
} as const;

/**
 * JAK SE POČÍTÁ CENA A TERMÍN
 * Náhrada za ceník, který na webu být nesmí. Bez téhle sekce web nesplní cíl
 * z briefu: odpovědět na cenu a termín dřív, než uživatel klikne na kontakt.
 *
 * Revize 2. kolo:
 *  · 7.3 – zkratka NS se zavádí v nadpisu karty a dál se používá důsledně
 *  · 7.6 – normostrana se počítá ZE ZDROJOVÉHO DOKUMENTU, ne z hotového
 *          překladu; předchozí znění bylo věcně špatně
 *  · 7.8 – obě karty s odrážkami mají jeden a týž styl odrážky
 *  · 7.10 – tlumočení se nacenuje jinak než překlad, má vlastní blok
 */
/**
 * ANATOMIE OBOU VARIANT OVĚŘENÍ — popisky k nákresům ve `brand/Anatomy.tsx`.
 *
 * Legenda pod nákresem je HTML, ne text v SVG (viz komentář v komponentě),
 * takže se překládá jako každý jiný text na webu — proto sedí tady, ne
 * v komponentě. Pořadí odpovídá číslům 1 až 6 u kresby a měnit se nesmí:
 * čísla jsou v SVG napevno.
 */
export const anatomy = {
  paper: {
    title: "Anatomie listinného svázaného překladu",
    labels: [
      "Ověřená kopie nebo originál",
      "Překlad",
      "Tlumočnická doložka",
      "Kulaté razítko",
      "Šňůrka",
      "Přelepka s\u00A0podpisem",
    ],
  },
  digital: {
    title: "Anatomie elektronického ověřeného překladu",
    labels: [
      "Sken originálu",
      "Překlad",
      "Tlumočnická doložka",
      "Kvalifikovaný elektronický podpis",
      "Kvalifikované časové razítko",
      "Jedno PDF, doručené e-mailem",
    ],
  },
} as const;

export const pricing = {
  label: "Cena a termín",
  title: "Jak se počítá cena a\u00A0termín",
  description:
    "Ceník tady nenajdete, protože by lhal. Dva stejně dlouhé dokumenty se liší razítky, tabulkami i\u00A0tím, kam mají jít. Tady je celý výpočet, ať víte, co čekat.",
  columns: [
    {
      id: "podle-ceho",
      title: "Podle čeho se cena určuje",
      items: [
        "Rozsah překladu v\u00A0normostranách",
        "Varianta ověření: listinná nebo elektronická",
        "Požadovaný termín, expres stojí víc",
        "Počet vyhotovení, druhé paré je levnější",
        "Náročnost předlohy: razítka, tabulky, ruční psaní",
      ],
    },
    {
      id: "normostrana",
      title: "Co je normostrana (NS)",
      /*
       * Oddělovač tisíců je úzká pevná mezera (U+202F) – typograficky správně
       * pro češtinu a v grotesku sedí těsněji než běžná nedělitelná mezera.
       * Číslo jede v DM Sans, ne v Playfairu (viz komponenta) – klientčina
       * poznámka "doladit grafiku čísla a mezery".
       */
      metric: { value: "1 800", unit: "znaků vč.\u00A0mezer" },
      lead: "Cca 250\u00A0slov. Počítá se ze\u00A0zdrojového dokumentu. U\u00A0některých soudních překladů se s\u00A0ohledem na\u00A0formátování naceňují i\u00A0fyzické strany.",
      examples: [
        { doc: "Rodný nebo oddací list", size: "cca 1\u00A0NS" },
        { doc: "Výpis z\u00A0rejstříku trestů", size: "cca 1\u00A0NS" },
        { doc: "Diplom s\u00A0dodatkem", size: "cca 2\u00A0až 4\u00A0NS" },
        { doc: "Smlouva", size: "obvykle 5\u00A0až 15\u00A0NS" },
      ],
    },
    {
      id: "rychlost",
      /*
       * Revize 3. kolo: `lead` dřív zněl "Pošlete sken nebo fotku. Cenu
       * i termín pošlu nezávazně a zdarma." – stálo to hned nad tlačítkem
       * "Nezávazné nacenění (zdarma)" a říkalo přesně totéž (klientčina
       * poznámka: "je to tam 3× ve stejném místě"). Lead teď mluví jen
       * o rychlosti, slib zdarma/nezávazně nese tlačítko.
       */
      title: "Jak rychle přijde nacenění",
      lead: "Napíšu vám obratem, jakmile dokument uvidím.",
      items: [
        "Nacenění je konečné, nic se k\u00A0němu nepřipočítává. Při\u00A0zasílání poštou se hradí poplatek za\u00A0zaslání a\u00A0poštovné.",
        "Domluva vždy platí, můžete se stoprocentně spolehnout.",
        "Pokud zašlete kvalitní sken nebo foto dokumentu, překlad vyhotovím ze\u00A0zaslaného dokumentu, není nutné jej doručit fyzicky.",
        "Pokud na\u00A0překlad spěcháte, řeknu vám předem, co reálně stihnu.",
      ],
    },
  ],
  /*
   * Revize 2. kolo, bod 7.10: tlumočení se nedá nacenit stejnou úvahou jako
   * překlad – rozsah v NS tu neexistuje.
   *
   * Revize 3. kolo (e-mail klientky, 29. 8. 2026): klientka dodala model
   * sazby, ať ceník nestojí jen na normostranách. `rates` je způsob účtování
   * (bez konkrétních čísel – ta na web zatím nechce), `items` zůstává výčet
   * toho, co potřebuje vědět, aby mohla nacenit.
   */
  interpretingPrice: {
    title: "Jak se počítá cena tlumočení",
    lead: "Sazba se liší podle typu tlumočení:",
    rates: [
      "Matriční obřad za\u00A0úkon.",
      "U\u00A0soudu a\u00A0na\u00A0úřadech základní sazba plus doplatek za\u00A0každou další započatou hodinu.",
      "Firemní tlumočení na\u00A0půlden nebo celý den.",
    ],
    askLead: "Než pošlu nacenění, potřebuji znát:",
    items: [
      "Účel a\u00A0povahu jednání",
      "Termín, pokud už je známý",
      "Město, kde se bude tlumočit",
      "Konkrétní úřad, soud nebo instituci",
    ],
  },
} as const;

/**
 * JAK TO PROBÍHÁ
 *
 * Revize 2. kolo, bod 8: pět kroků místo čtyř. Přibyla záloha (krok 03)
 * a rozdělil se dřívější krok "Překládám a ověřuji" – pokud klient poslal
 * jen e-mail a chce svázanou listinnou verzi, nedá se v té fázi nic svázat
 * ani orazítkovat. To nastane až při předání.
 */
export const process = {
  label: "Jak to probíhá",
  title: "Pět kroků, žádné překvapení",
  steps: [
    {
      number: "01",
      title: "Pošlete dokument",
      description:
        "Sken nebo fotku e-mailem. Napište, kam dokument půjde a\u00A0do\u00A0kdy ho potřebujete.",
    },
    {
      number: "02",
      title: "Dostanete nacenění",
      description: "Zdarma a\u00A0nezávazně.\nZnáte cenu i\u00A0termín.",
    },
    {
      number: "03",
      title: "Zaplatíte zálohu",
      description:
        "Po\u00A0odsouhlasení nacenění vám pošlu QR kód nebo zálohovou fakturu. Doplatek hradíte až při\u00A0předání.",
    },
    {
      number: "04",
      title: "Překládám",
      description:
        "Vyhotovím překlad a\u00A0opatřím ho tlumočnickou doložkou. U\u00A0elektronické varianty připojím kvalifikovaný elektronický podpis a\u00A0časové razítko.",
    },
    {
      number: "05",
      title: "Předávám v\u00A0termínu",
      description:
        "U\u00A0listinné varianty svážu dokument s\u00A0překladem, opatřím razítkem a\u00A0podpisem a\u00A0předám osobně v\u00A0Praze nebo pošlu poštou. Elektronickou variantu posílám e-mailem.",
    },
  ],
} as const;

/*
 * Revize 2. kolo, bod 11: dřívější znění ("Odpovím vám, která varianta
 * projde") slibovalo, že klientka zjistí požadavky kteréhokoli úřadu na
 * světě. To odmítá. Nová verze slibuje jen cenu, termín a vysvětlení procesu.
 */
export const callToAction = {
  title: "Nevíte si s\u00A0něčím rady?",
  description:
    "Napište mi, o\u00A0jaký dokument jde a\u00A0do\u00A0kdy ho potřebujete. Ozvu se s\u00A0cenou i\u00A0termínem a\u00A0vysvětlím vám, jak celý proces proběhne.",
  cta: NACENENI,
  contactLabel: "Nebo rovnou napřímo",
} as const;

/**
 * REFERENCE
 *
 * Revize 2. kolo, bod 10.1: zdrojové pole je unikátní, každá citace v něm
 * stojí právě jednou. Klonování kvůli plynulé smyčce dělá až komponenta
 * (`TestimonialsSection`), a duplikát je `aria-hidden`. Dřív se položky
 * míchaly do tří sloupců tak, že se každá objevila ve dvou z nich a k tomu
 * dvakrát kvůli smyčce – jedna reference tak byla na stránce až pětkrát.
 */
export const testimonials = {
  label: "Reference",
  title: "Co o\u00A0mně říkají klienti?",
  items: [
    {
      id: "weerden",
      quote:
        "S\u00A0paní Vránovou mám letité výborné zkušenosti, její překlady jsou kvalitní, přesné, vypracované s\u00A0vysokou odborností. Právní terminologie je překládána naprosto precizně. Spolupráce s\u00A0ní je vždy příjemná, ve\u00A0všem mi vychází vstříc.",
      author: "JUDr.\u00A0A.\u00A0van der Weerden",
      role: "advokát",
    },
    {
      id: "dolezi",
      quote:
        "Naše společnost s\u00A0ručením omezeným zaměřená na\u00A0technické a\u00A0právní překlady spolupracuje s\u00A0paní Mgr.\u00A0Danielou Vránovou od\u00A0začátku roku 2015. Vždy kvalitně a\u00A0včas odevzdává zadané právní překlady. Spolupráce s\u00A0ní je pro\u00A0naši společnost velmi užitečná a\u00A0prospěšná včetně profesionální úrovně. Za\u00A0dobu spolupráce nám přeložila 500\u00A0stránek. Rád doporučuji.",
      author: "Petr Doleží",
      role: "majitel společnosti HEDO Praha s.r.o.",
    },
    {
      id: "svozilek",
      quote:
        "S\u00A0paní Vránovou spolupracuji na\u00A0překladech dlouhou dobu a\u00A0mohu její služby 100%\u00A0doporučit. Překlady jsou vždy v\u00A0perfektní kvalitě a\u00A0v\u00A0dohodnutém čase připraveny. S\u00A0paní Vránovou budu nadále spolupracovat jako se\u00A0svou hlavní překladatelkou a\u00A0budu doporučovat její překladatelské a\u00A0tlumočnické služby.",
      author: "Miroslav Svozílek",
      role: "podnikatel/recruitment consultant, HAYS Czech Republic s.r.o.",
    },
    {
      id: "bursik",
      quote:
        "S\u00A0paní Vránovou spolupracujeme od\u00A0roku 2015 při\u00A0veškerých úředních překladech smluv a\u00A0výpisů ze\u00A0státních rejstříků pro\u00A0naše zahraniční partnery. Přestože jsme mimopražští, tak je spolupráce vždy velmi rychlá a\u00A0bezproblémová a\u00A0komunikace s\u00A0paní Vránovou vždy příjemná.",
      author: "Martin Buršík",
      role: "BURŠÍK CAPITAL s.r.o.",
    },
    {
      id: "kratochvilova",
      quote:
        "Přístup paní Vránové k\u00A0překladatelské činnosti a\u00A0odvedené práci je profesionální v\u00A0maximální možné míře. Vzhledem k\u00A0opakující se spolupráci s\u00A0nakladatelstvím Grada Publishing je zřejmé, že je skutečnou profesionálkou s\u00A0citem pro\u00A0jazyk a\u00A0smyslem pro\u00A0zodpovědnost a\u00A0dodržování termínů.",
      author: "Šárka Kratochvílová",
      role: "Grada",
    },
  ],
  /* Revize 2. kolo, bod 10.3 – odkaz na ověřitelná hodnocení pod karuselem. */
  reviewsNote: {
    before: "Všechna hodnocení v\u00A0plném znění najdete na",
    after: ".",
  },
} as const;

/**
 * ČASTÉ DOTAZY
 * Jádro briefu – web má odpovědět místo klientky na "co to obnáší, co to stojí,
 * jak dlouho to trvá". Odsud se zároveň generují strukturovaná data FAQPage.
 */
export const faq = {
  label: "Časté dotazy",
  title: "Na\u00A0co se lidé ptají nejčastěji",
  items: [
    {
      id: "co-je-soudni-preklad",
      /* Revize 2. kolo, bod 9.1: lidé hledají všechna tři slova, ne jedno. */
      question: "Co je soudní, ověřený a\u00A0úřední překlad?",
      answer:
        "Tři synonyma téhož. Překlad neoddělitelně spojený s\u00A0dokumentem a\u00A0opatřený doložkou, kulatým razítkem a\u00A0podpisem soudního tlumočníka. Úřady, soudy a\u00A0instituce jej uznávají jako úředně platný.",
    },
    {
      id: "svazany-vs-elektronicky",
      question: "Jaký je rozdíl mezi listinným a\u00A0elektronickým překladem?",
      answer:
        "Listinný (svázaný) překlad je fyzicky spojený s\u00A0dokumentem a\u00A0předává se osobně nebo poštou. Elektronický překlad je PDF opatřené kvalifikovaným elektronickým podpisem a\u00A0časovým razítkem. Má stejnou právní platnost a\u00A0doručím jej e-mailem.",
    },
    /*
     * Revize (klientčin brief, 14. 8. 2026): text čtyř formátů dodala
     * klientka sama – dřív jí vysvětlování jednomu klientovi zabralo až tři
     * hodiny. `details` je rozpad na čtyři podpoložky navíc k `answer`,
     * `disclaimer` je věta, která zároveň řeší i slib z hero nadpisu: web
     * nikde netvrdí, že konkrétní úřad formát uzná.
     *
     * Revize 2. kolo, bod 1: slovo "digitální" nahrazeno "elektronický",
     * jinak text zůstává v klientčině znění.
     */
    {
      id: "formaty-overeneho-prekladu",
      question: "V\u00A0jakém formátu dostanu ověřený překlad?",
      answer:
        "Ověřený překlad můžete dostat čtyřmi způsoby, podle toho, co potřebujete a\u00A0co bude váš úřad akceptovat:",
      details: [
        {
          title: "Listinná verze (originál dokumentu, překlad, razítko)",
          text: "Dodáte mi originál dokumentu – osobně nebo poštou – který následně sešiju s\u00A0překladem, přidám překladatelskou doložku a\u00A0razítko. Můžeme se setkat osobně (preferuji Prahu\u00A03, Flora) a\u00A0překlad vám předám nebo vám jej mohu zaslat poštou či kurýrem (za\u00A0příplatek).",
        },
        {
          title: "Listinná verze (kopie dokumentu, překlad, razítko)",
          text: "Dodáte mi kopii dokumentu (prostou či notářskou), buď fyzicky nebo e-mailem. Tuto kopii, kterou dodáte fyzicky nebo si ji vytisknu z\u00A0e-mailu, sešiju s\u00A0překladem, přidám překladatelskou doložku a\u00A0razítko. Můžeme se setkat osobně (preferuji Prahu\u00A03, Flora) a\u00A0překlad vám předám nebo vám jej mohu zaslat poštou či kurýrem (za\u00A0příplatek). Ujistěte se, že úřad, kam překlad budete předkládat, akceptuje jiný dokument než originál.",
        },
        {
          title: "Emailem zaslaný sken překladu",
          text: "Pošlete mi sken dokumentu, který vytisknu, a\u00A0fyzicky s\u00A0ním sešiju překlad, přidám překladatelskou doložku a\u00A0razítko. Tento celý dokument následně naskenuji a\u00A0zašlu Vám jej e-mailem. Tato varianta je vhodná, pokud potřebujete rychle elektronickou verzi překladu a\u00A0víte, že úřad, kam překlad budete předkládat, tuto formu akceptuje. (Případně si můžete mnou naskenovaný dokument s\u00A0překladem v\u00A0listinné podobě vyzvednout později.)",
        },
        {
          title: "Elektronický (elektronicky podepsaný) ověřený překlad",
          text: "Zašlete mi dokument emailem. Obdržíte ověřený překlad ve\u00A0formátu PDF s\u00A0kvalifikovaným elektronickým podpisem a\u00A0časovým razítkem. Tato varianta je plně elektronická. Před volbou této možnosti si prosím ověřte, zda daný úřad, kam překlad budete předkládat, tento formát překladu akceptuje.",
        },
      ],
      disclaimer:
        "Který formát a\u00A0jaké ověření budete potřebovat, se liší úřad od\u00A0úřadu i\u00A0země od\u00A0země – doporučuji si to předem ověřit přímo u\u00A0instituce, které budete dokument předkládat.",
    },
    {
      id: "cena",
      question: "Kolik soudní překlad stojí?",
      answer:
        "Každou zakázku nacením zvlášť, proto na\u00A0webu nenajdete ceník. Cenu ovlivňuje rozsah dokumentu v\u00A0normostranách, požadovaný termín a\u00A0to, zda chcete překlad listinný nebo elektronický. Pošlete mi dokument a\u00A0dostanete nezávazné nacenění zdarma, takže přesnou částku znáte dřív, než cokoli potvrdíte.",
    },
    {
      id: "normostrana",
      question: "Co je normostrana a\u00A0kolik jich má můj dokument?",
      answer:
        "Normostrana je 1\u202F800\u00A0znaků včetně mezer, tedy cca 250\u00A0slov. Počítá se ze\u00A0zdrojového dokumentu. Rodný list, oddací list nebo výpis z\u00A0rejstříku trestů vyjde cca na\u00A0jednu normostranu, diplom s\u00A0dodatkem na\u00A0dvě až čtyři, běžná smlouva na\u00A0pět až patnáct.",
    },
    {
      id: "termin",
      /* Revize 2. kolo, bod 9.3: placeholder [doplnit] nahrazen údajem od klientky. */
      question: "Jak dlouho vyhotovení trvá?",
      answer:
        "Běžný termín jsou 3\u00A0pracovní dny u\u00A0dokumentů do\u00A05\u00A0stran. U\u00A0kratších dokumentů zvládnu i\u00A0expresní vyhotovení. Termín potvrdím vždy předem.",
    },
    /*
     * SEO výběr (Matěj, 1. 9. 2026): FAQ na homepage zkráceno na 10 otázek
     * s nejvyšším vyhledávacím potenciálem. Zakomentované otázky níže se
     * nemažou – jsou připravené pro samostatnou stránku (Tlumočení / Časté
     * dotazy), kde dávají větší smysl.
     *
     * {
     *   id: "expres",
     *   question: "Zvládnete to do zítřka?",
     *   answer:
     *     "U jednostránkových dokumentů často ano, u elektronické varianty odpadá pošta i osobní předání. Napište mi rovnou termín, do kdy dokument potřebujete, a odpovím, jestli to stihnu, ještě než objednáte.",
     * },
     */
    {
      id: "original",
      /*
       * Revize 2. kolo, bod 9.4: předchozí odpověď ("u listinného ano,
       * u digitálního stačí sken") byla zavádějící. Požadavek na originál
       * neurčuje varianta ověření, ale instituce, které se dokument předkládá.
       */
      question: "Musím dodat originál dokumentu?",
      answer:
        "Odpověď na\u00A0tuto otázku vám nemohu dát já, je třeba ji zjistit u\u00A0instituce, které budete překlad předkládat. Někdy stačí prostá kopie, jindy ověřená, někdy je zapotřebí originál. U\u00A0elektronického překladu je to stejné. Někdy stačí sken, jindy je nutná autorizovaná konverze a\u00A0někdy je váš originál vydaný rovnou elektronicky.",
    },
    {
      id: "apostila",
      question: "Potřebuji apostilu nebo superlegalizaci?",
      answer:
        "Záleží na\u00A0zemi a\u00A0na\u00A0instituci, která dokument přebírá. Apostila se pořizuje na\u00A0originál před překladem, ne po\u00A0něm. Napište mi, kam dokument míří, a\u00A0poradím vám pořadí kroků dřív, než zaplatíte něco zbytečně.",
    },
    {
      id: "uznani-elektronickeho",
      question: "Uzná úřad elektronický překlad?",
      answer:
        "Elektronický překlad s\u00A0kvalifikovaným elektronickým podpisem má stejnou právní platnost jako listinný. Některé instituce ale stále vyžadují papír. Proto si vždy předem zjistěte, co po\u00A0vás bude daný úřad vyžadovat.",
    },
    /*
     * Revize 3. kolo (e-mail klientky, 29. 8. 2026): "do FAQ otázky na
     * TLUMOČENÍ, ne jen na překlady". Z pěti tlumočnických otázek zůstává na
     * homepage jen ta s reálným vyhledávacím potenciálem (svatba s cizincem);
     * zbytek je připravený pro samostatnou stránku Tlumočení.
     */
    {
      id: "tlumoceni-svatba-nutnost",
      question: "Musí být u\u00A0svatby s\u00A0cizincem soudní tlumočník?",
      answer:
        "Ano, pokud jeden ze\u00A0snoubenců dostatečně nerozumí česky. Matrika vyžaduje přítomnost soudního tlumočníka u\u00A0obřadu i\u00A0při\u00A0předání dokladů. Tlumočím obřad i\u00A0přípravu na\u00A0matrice a\u00A0vím, které dokumenty matrika chce.",
    },
    /*
     * SEO výběr (Matěj, 1. 9. 2026) – zakomentované otázky pro pozdější použití:
     *
     * {
     *   id: "jak-poslat",
     *   question: "Jak vám dokument bezpečně pošlu?",
     *   answer:
     *     "Stačí příloha e-mailu nebo formulář na téhle stránce. Dokumenty používám výhradně k vyhotovení překladu a nikam je nepředávám.",
     * },
     * {
     *   id: "tlumoceni-cena",
     *   question: "Jak se účtuje tlumočení?",
     *   answer:
     *     "Matriční obřad se účtuje za úkon. U soudu, na úřadech a u notáře platí základní sazba a doplatek za každou další započatou hodinu. Firemní tlumočení se počítá na půlden nebo celý den. Přesnou sazbu pošlu, jakmile znám účel, termín, město a konkrétní úřad.",
     * },
     * {
     *   id: "tlumoceni-delka",
     *   question: "Na jak dlouho si vás mám objednat a co když se jednání protáhne?",
     *   answer:
     *     "Rezervuji si celý blok, který dopředu odhadneme podle typu jednání. Když se to protáhne, účtuji doplatek za každou další započatou hodinu – sazbu znáte předem. U soudních jednání raději počítáme rezervu, protože termín ani délku úřad obvykle negarantuje.",
     * },
     * {
     *   id: "tlumoceni-online",
     *   question: "Tlumočíte i online nebo po telefonu?",
     *   answer:
     *     "Ano, u jednání a konzultací, kde to úřad nebo soud připouští. U notáře a u soudu bývá podmínkou osobní přítomnost. Napište mi, o jaké jednání jde, a řeknu vám, jestli online varianta projde.",
     * },
     * {
     *   id: "tlumoceni-pocet",
     *   question: "Kolik tlumočníků je potřeba na celodenní konferenci?",
     *   answer:
     *     "U simultánního tlumočení z kabiny se tlumočníci po zhruba půl hodině střídají, na celý den jsou proto potřeba dva. U kratších akcí a u konsekutivního tlumočení obvykle stačím sama. Poradím podle programu akce.",
     * },
     * {
     *   id: "tlumoceni-kde",
     *   question: "Tlumočíte i mimo Prahu?",
     *   answer:
     *     "Ano, tlumočím v Praze a po Čechách. U vzdálenějších míst k ceně připočítávám cestovné, které znáte předem.",
     * },
     * {
     *   id: "svatba",
     *   question: "Co potřebujeme, když se bere Čech s cizincem?",
     *   answer:
     *     "Matrika obvykle chce soudní překlad rodného listu a dokladu o osobním stavu, u obřadu pak přítomnost soudního tlumočníka. Napište mi datum obřadu a matriku, u které se berete, a projdu s vámi seznam dokumentů.",
     * },
     */
  ],
} as const;

export const contact = {
  label: "Kontakt",
  title: "Nezávazné nacenění zdarma",
  description:
    "Napište mi, o\u00A0jaký dokument jde, kam ho potřebujete doložit a\u00A0do\u00A0kdy. Ozvu se s\u00A0cenou a\u00A0termínem.",
  fields: {
    name: { label: "Jméno a\u00A0příjmení", placeholder: "Jméno a\u00A0příjmení" },
    email: { label: "E-mail", placeholder: "vas@email.cz" },
    /*
     * Revize 3. kolo (e-mail klientky, 29. 8. 2026): web má stát na obou
     * činnostech. Pole se ptá "s čím pomoct", ne "typ dokumentu", a tlumočení
     * stojí na prvním místě roletky, ne schované mezi listinami. Ostatní
     * volby dostaly prefix "Překlad – ", aby byl rozdíl vidět bez optgroup.
     */
    documentType: {
      label: "S\u00A0čím potřebujete pomoct?",
      placeholder: "Vyberte možnost",
      options: [
        "Tlumočení",
        "Překlad – rodný nebo oddací list",
        "Překlad – výpis z\u00A0rejstříku trestů",
        "Překlad – diplom a\u00A0nostrifikace",
        "Překlad – smlouva",
        "Překlad – plná moc",
        "Překlad – výpis z\u00A0obchodního rejstříku",
        "Překlad – jiný úřední dokument",
        "Nevím, poraďte mi",
      ],
    },
    deadline: {
      label: "Požadovaný termín",
      hint: "Nezávazně. Když termín nevíte, nechte pole prázdné.",
    },
    message: {
      label: "O\u00A0jaký dokument nebo tlumočení jde?",
      placeholder:
        "Např. oddací list pro matriku v Praze, potřebuji do 20. 8. Nebo: tlumočení na matrice v Praze 3, obřad 12. 9.",
    },
  },
  upload: {
    label: "Sken nebo fotka dokumentu",
    dropText: "Přetáhněte sem sken nebo fotku dokumentu",
    hint: "PDF, JPG nebo PNG do\u00A010\u00A0MB. Nepovinné, ale zrychlí to nacenění.",
  },
  privacyNote:
    "Údaje použiji jen k\u00A0odpovědi na\u00A0vaši poptávku. Nikam je nepředávám.",
  submitLabel: "Odeslat poptávku",
} as const;

export const footer = {
  position: "Soudní překladatelka a\u00A0tlumočnice pro\u00A0anglický jazyk, Praha.",
  columns: [
    {
      id: "sluzby",
      title: "Služby",
      links: [
        { label: "Typy dokumentů", href: "#sluzby" },
        { label: "Listinný překlad", href: "#varianty" },
        { label: "Elektronický překlad", href: "#varianty" },
        { label: "Tlumočení", href: "#tlumoceni" },
      ],
    },
    {
      id: "informace",
      title: "Informace",
      links: [
        { label: "Cena a\u00A0termín", href: "#cena" },
        { label: "Jak to probíhá", href: "#proces" },
        { label: "Časté dotazy", href: "#faq" },
        { label: "Ochrana osobních údajů", href: "#gdpr" },
      ],
    },
  ],
  /*
   * KONTROLA OBSAHU: neuvádí se členství v JTP – klientka už členkou není.
   * Obě tvrzení vedou na veřejný zdroj, kde si je návštěvník ověří
   * (revize 2. kolo, bod 3.4).
   */
  qualifications: {
    title: "Kvalifikace",
    items: [
      {
        label: "Soudní překladatelka a\u00A0tlumočnice jmenovaná Ministerstvem spravedlnosti",
        href: QUALIFICATIONS.ministry.href,
      },
      QUALIFICATIONS.chamber,
    ],
  },
  domains: ["soudni-anglictina.cz", "czech-translator.eu"],
  copyright: "© 2026 Mgr. Daniela Vránová",
  privacy: { label: "Zásady zpracování osobních údajů", href: "#gdpr" },
} as const;

/** Mobilní sticky lišta – telefon vlevo, formulář vpravo. */
export const stickyBar = {
  call: { label: "Zavolat", href: brand.phone.href },
  form: { label: "Nacenění zdarma", href: "#kontakt" },
} as const;
