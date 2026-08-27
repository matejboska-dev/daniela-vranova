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
  tagline: "Soudní překlady a tlumočení z angličtiny. Praha, od roku 2004.",
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
    label: "Členka Komory soudních tlumočníků ČR",
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
  eyebrow: "Soudní překladatelka a tlumočnice – Praha,\nod roku 2004",
  /*
   * Revize (klientčin brief, 14. 8. 2026): původní "Dokumenty, které úřad
   * přijme napoprvé" klientka odmítla – jestli konkrétní úřad nebo zahraniční
   * instituce dokument přijme, nemá pod kontrolou a nechce to slibovat. Nový
   * nadpis slibuje jen to, co reálně dodržet může: že dokument připraví
   * přesně podle toho, co návštěvník potřebuje, ne že to za něj zaručí
   * u třetí strany.
   */
  title: "Dokumenty\npřipravené přesně tak,\njak je budete potřebovat.",
  description:
    "Soudní překlady a tlumočení z angličtiny. Listinný i elektronický ověřený překlad. Cena a termín domluvené předem.",
  primaryCta: NACENENI,
  secondaryCta: { label: "Jak to probíhá", href: "#proces" },
  /*
   * Revize 2. kolo, bod 2.3: věta "Cenu a termín pošlu nezávazně a zdarma."
   * pod tlačítky odsud zmizela. Stála přímo pod tlačítkem "Nezávazné nacenění
   * (zdarma)" a stejné tlačítko je i v hlavičce – tři formulace téhož slibu
   * na jedné obrazovce.
   */
  photoAlt: "Mgr. Daniela Vránová, soudní překladatelka a tlumočnice",
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
  lead: "Čtyři záznamy v rejstříku, který úřady znají.",
  items: [
    {
      id: "jmenovana",
      index: "I",
      title: QUALIFICATIONS.ministry.label,
      note: "Soudní překladatelka a tlumočnice pro anglický jazyk",
    },
    { id: "komora", index: "II", title: "Komora soudních tlumočníků ČR", note: "Členka od jmenování" },
    { id: "varianty", index: "III", title: "Listinný i elektronický překlad", note: "Obě varianty se stejnou platností" },
    { id: "termin", index: "IV", title: "Termín potvrzený předem", note: "Nacenění zdarma a nezávazně" },
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
  title: "Mgr. Daniela Vránová, soudní tlumočnice pro angličtinu",
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
    "Jmenoval mě soud a jsem členkou Komory soudních tlumočníků ČR. Nedávno došlo ke změně zákona o soudních tlumočnících a překladatelích a já prošla procesem přelicencování a byla jmenována Ministerstvem spravedlnosti.",
    "Práci vykonávám osobně, takže mluvíte přímo s tím, kdo vám dokument překládá, razítkuje a podepisuje. Tlumočím na svatbách, u notáře, při jednáních i u soudu, v Praze a po Čechách.",
    "Překlad dodám v listinné podobě s kulatým razítkem nebo elektronicky jako PDF s kvalifikovaným podpisem. Vždy se předem zeptám, kam dokument půjde, aby splnil všechny požadavky dané instituce.",
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
  ctaNote: "Pošlete sken nebo fotku dokumentu. Napíšu vám cenu i termín.",
  photoAlt: "Mgr. Daniela Vránová, soudní překladatelka a tlumočnice pro anglický jazyk",
  /*
   * Video z tlumočení svatebního obřadu v Havlíčkových sadech (Grébovka).
   * Doplňuje fotky v téhle sekci, nenahrazuje je (klientčin brief, 23. 8. 2026).
   *
   * Přepínač barevná / černobílá je tu schválně: klientka si má vybrat, co
   * lépe sedí do designu. Zbytek obrazového materiálu na webu jede přes
   * `.photo-mono`, proto je černobílá výchozí — barevná je na jedno kliknutí.
   */
  video: {
    label: "Ze záznamu",
    title: "Tlumočení svatebního obřadu, Havlíčkovy sady",
    note: "Obřad v Havlíčkových sadech v Praze. Tlumočím po matrikářce, snoubencům i hostům, bez papíru v ruce a bez zdržování obřadu.",
    /* Popisek pro čtečku – video nemá zvuk ani titulky. */
    description:
      "Záznam z tlumočení svatebního obřadu: Daniela Vránová stojí vedle oddávajícího a tlumočí obřad snoubencům.",
    toggle: {
      /* Skupina se ohlašuje čtečce jako celek, jednotlivá tlačítka nesou stav. */
      legend: "Podoba videa",
      mono: "Černobíle",
      color: "Barevně",
    },
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
  title: "Co pro vás přeložím",
  description:
    "Každou zakázku nacením předem a zdarma. Cenu určuje rozsah dokumentu a termín. Překlad můžete mít v listinné nebo elektronické verzi.",
  items: [
    {
      id: "rodny-oddaci-list",
      icon: "certificate",
      drawn: true,
      title: "Rodný a oddací list",
      description: "Pro matriku, svatbu s cizincem, pobyt i zápis do zahraniční evidence.",
    },
    {
      id: "rejstrik-trestu",
      icon: "shieldCheck",
      drawn: false,
      title: "Výpis z rejstříku trestů",
      description: "Pro zaměstnavatele, živnostenský úřad i řízení o pobytu v zahraničí.",
    },
    {
      id: "diplom-nostrifikace",
      icon: "diploma",
      drawn: true,
      title: "Diplom a nostrifikace",
      description: "Diplomy, vysvědčení a dodatky k diplomu pro uznání vzdělání.",
    },
    {
      id: "smlouvy",
      icon: "contract",
      drawn: false,
      title: "Smlouvy",
      description: "Kupní, nájemní, pracovní i obchodní smlouvy včetně příloh.",
    },
    {
      id: "plna-moc",
      icon: "signature",
      drawn: false,
      title: "Plná moc",
      description: "Plné moci pro zastupování na úřadě, u notáře i před soudem.",
    },
    {
      id: "obchodni-rejstrik",
      icon: "registry",
      drawn: false,
      title: "Výpis z obchodního rejstříku",
      description: "Výpisy, zakladatelské listiny a doklady o právní subjektivitě.",
    },
    {
      id: "ostatni",
      icon: "documents",
      drawn: false,
      title: "Ostatní úřední dokumenty",
      description: "Rozsudky, potvrzení, lékařské zprávy a další listiny pro úřady.",
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
 * navigaci, a rozpadá nabídku na tři jasně odlišené situace.
 *
 * Revize 2. kolo, bod 5.1: rozsah působnosti je "v Praze a po Čechách", ne
 * "po celé ČR". Druhá věta perexu (ochota, vstřícnost, příjemné jednání) je
 * záměrná – klientka chce, aby na webu zaznělo její osobní vystupování, a
 * přeje si to právě u tlumočení, ne u dokumentů.
 *
 * `enOnly: true` u položky "Tlumočení pro autoškoly": klientka výslovně
 * řekla, že tohle dává smysl jen pro cizince skládající zkoušky v ČR, tedy
 * jen v anglické verzi webu. Web je teď jen český (`content/home.en.ts` až
 * přijde EN mutace, viz PRODUCT.md), takže se položka v datech drží pro
 * budoucí použití, ale komponenta ji na téhle (CS) stránce nevykresluje –
 * viz filtr v `InterpretingSection.tsx`.
 */
export const interpreting = {
  label: "Tlumočení",
  title: "Tlumočení soudní i běžné",
  description:
    "Tlumočím u soudu, na úřadech, u notáře i na konferencích a firemních jednáních, v Praze a po Čechách. Ochota, vstřícnost a příjemné jednání jsou to, co mi klienti zmiňují nejčastěji.",
  categories: [
    {
      id: "soudni",
      icon: "scale",
      title: "Soudní tlumočení",
      description:
        "Tlumočení u soudu, na úřadech a u notáře – jednání, výslechy i notářské zápisy, kde je přítomnost soudního tlumočníka podmínkou.",
    },
    {
      id: "autoskola",
      icon: "car",
      enOnly: true,
      title: "Tlumočení pro autoškoly",
      description:
        "Tlumočení u zkoušek cizinců v autoškole, aby rozuměli zadání i průběhu zkoušky.",
    },
    {
      id: "konsekutivni-simultanni",
      icon: "mic",
      title: "Konsekutivní a simultánní tlumočení",
      description:
        "Tlumočení na konferencích, jednáních a firemních akcích, konsekutivně i simultánně podle formátu akce.",
    },
    /* Revize 2. kolo, bod 5.2 – doslovné znění od klientky. */
    {
      id: "svatba",
      icon: "rings",
      title: "Tlumočení svatebního obřadu",
      description:
        "Tlumočení svatby s cizincem na matrice i mimo ni, včetně přípravy dokumentů, které matrika k obřadu vyžaduje.",
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
     * Revize 3. kolo: zdrojový seznam z klientčiných poznámek ("POZNÁMKY WEB
     * I") má 24 jmen, ne 18 – druhé kolo revizí pracovalo se zkráceným
     * výtahem, který šest položek vynechal (Brando/In the Company of Huskies,
     * Plato, Prime Homes Český Brod, Visa guru, Insounder, Ininvest). Pořadí
     * i znění (vč. "Porat law firm", "Airbnb" psáno anglicky) drží zdrojový
     * dokument.
     */
    items: [
      "UNYP",
      "CIEE",
      "Fakulta sociálních věd UK",
      "Porat law firm",
      "AK Legato",
      "Act legal",
      "Advokátní kancelář Brož, Sedlatý s.r.o.",
      "Národní soustava kvalifikací při Národním ústavu pro vzdělávání (Europass, EQF, EQAVET)",
      "Prague British International School",
      "Brando Advertising Agency (nyní In the Company of Huskies)",
      "Plato",
      "Elektrárny Opatovice",
      "Prime Homes Český Brod s.r.o.",
      "Immigreat",
      "Visa guru",
      "Evropské noviny",
      "Insounder",
      "nakladatelství Grada",
      "SOS Dětské vesničky",
      "Velvyslanectví Malajsie",
      "Airbnb",
      "Ininvest",
      "Sirena Film",
      "AK Insight",
    ],
    /*
     * Revize (klientčina loga, 26. 8. 2026): seznam jmen se ve výpisu
     * nahradil dvěma marquee sloupci se skutečnými logy. Ne všechna jména
     * mají dodané logo – ta bez něj jedou pod sloupci jako věta, ne mlčky
     * pryč ze stránky. `InterpretingReferencesSection.tsx` dopočítává,
     * která jména logo nemají, a připojuje je za tuhle větu.
     */
    logolessIntro: "Spolupracovala jsem také s:",
    reviewsIntro: "Další reference najdete na",
  },
  cta: NACENENI,
  /*
   * Alt text popisuje, co je na fotce, ne pro koho klientka tlumočila –
   * z téhož důvodu, proč zmizel blok se jmény výš (revize 2. kolo, bod 5.3).
   */
  photoAlt: "Mgr. Daniela Vránová tlumočí v tlumočnické kabině na konferenci",
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
  title: "Papír se šňůrkou, nebo PDF s elektronickým podpisem",
  items: [
    {
      id: "listinny",
      anatomy: "paper",
      title: "Listinný (svázaný) překlad",
      description:
        "Papírový překlad pevně spojený s dokumentem, s doložkou, kulatým razítkem a podpisem.",
      bullets: [
        { text: "Potřebuji originál nebo ověřenou kopii dokumentu" },
        { text: "Svázáno šňůrkou a přelepkou, nelze rozdělit" },
        { text: "Předám osobně v Praze nebo pošlu doporučeně" },
        /*
         * Revize 3. kolo: jen sken e-mailem nejde svázat s ničím fyzickým.
         * Klientka chce mít tuhle mez jasně řečenou dřív, než si ji klient
         * domyslí sám až ve chvíli, kdy má hotovo a čeká na svázaný dokument.
         */
        { text: "Jen e-mailem nic nesvážu – potřebuji fyzický dokument, nebo se sejdeme osobně" },
      ],
    },
    {
      id: "elektronicky",
      anatomy: "digital",
      title: "Elektronický (elektronicky ověřený) soudní překlad",
      description:
        "PDF s kvalifikovaným elektronickým podpisem a časovým razítkem. Stejná právní platnost jako u listinného.",
      bullets: [
        /* "Většinou", ne "Stačí": o pár řádků níž stojí, že jindy úřad chce
           autorizovanou konverzi. Absolutní tvrzení by si s tím odporovalo. */
        { text: "Většinou stačí kvalitní sken nebo fotka dokumentu" },
        { text: "Doložka i podpis jsou součástí jednoho PDF" },
        { text: "Doručím e-mailem, tisk platnost ruší" },
        {
          text: "Někdy stačí kvalitní sken, jindy úřad vyžaduje ",
          link: {
            label: "autorizovanou konverzi dokumentu",
            href: "https://www.ceskaposta.cz/sluzby/sluzby-egovernment/czechpoint/autorizovana-konverze-dokumentu",
          },
        },
        {
          text: "Někdy klient přichází rovnou s elektronickým originálem opatřeným časovým razítkem",
        },
      ],
    },
  ],
  /*
   * Revize 2. kolo, bod 6.5: dřív tu stálo "poradím vám, která varianta
   * projde u vaší instituce". Klientka to odmítá – úřady s třetími stranami
   * často vůbec nekomunikují, takže tenhle slib nemá jak splnit.
   */
  note: "Nevíte, kterou variantu zvolit? Zjistěte, co přesně požaduje instituce, u které budete dokument předkládat. Není vám něco jasné? Vše vysvětlím a poradím vám.",
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
      "Přelepka s podpisem",
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
  title: "Jak se počítá cena a termín",
  description:
    "Ceník tady nenajdete, protože by lhal. Dva stejně dlouhé dokumenty se liší razítky, tabulkami i tím, kam mají jít. Tady je celý výpočet, ať víte, co čekat.",
  columns: [
    {
      id: "podle-ceho",
      title: "Podle čeho se cena určuje",
      items: [
        "Rozsah překladu v normostranách",
        "Varianta ověření: listinná nebo elektronická",
        "Požadovaný termín, expres stojí víc",
        "Počet vyhotovení, druhé paré je levnější",
        "Náročnost předlohy: razítka, tabulky, ruční psaní",
      ],
    },
    {
      id: "normostrana",
      title: "Co je normostrana (NS)",
      /* Číslo drží pevná mezera, aby se nikdy nezalomilo mezi 1 a 800. */
      metric: { value: "1 800", unit: "znaků vč. mezer" },
      lead: "Zhruba 250 slov. Počítá se ze zdrojového dokumentu. U některých soudních překladů se s ohledem na formátování naceňují i fyzické strany.",
      examples: [
        { doc: "Rodný nebo oddací list", size: "cca 1 NS" },
        { doc: "Výpis z rejstříku trestů", size: "cca 1 NS" },
        { doc: "Diplom s dodatkem", size: "cca 2 až 4 NS" },
        { doc: "Smlouva", size: "obvykle 5 až 15 NS" },
      ],
    },
    {
      id: "rychlost",
      title: "Jak rychle přijde nacenění",
      lead: "Pošlete sken nebo fotku. Cenu i termín pošlu nezávazně a zdarma.",
      items: [
        "Nacenění je konečné, nic se k němu nepřipočítává. Při zasílání poštou se hradí poplatek za zaslání a poštovné.",
        "Domluva vždy platí, můžete se stoprocentně spolehnout.",
        "Pokud zašlete kvalitní sken nebo foto dokumentu, překlad vyhotovím ze zaslaného dokumentu, není nutné jej doručit fyzicky.",
        "U spěchu řeknu předem, co reálně stihnu.",
      ],
    },
  ],
  /*
   * Revize 2. kolo, bod 7.10: tlumočení se nedá nacenit stejnou úvahou jako
   * překlad – rozsah v NS tu neexistuje. Vlastní blok pod trojicí karet.
   */
  interpretingPrice: {
    title: "Jak se počítá cena tlumočení",
    lead: "Cenu tlumočení nelze odhadnout bez kontextu. Než vám pošlu nacenění, potřebuji vědět čtyři věci:",
    items: [
      "O jaké jednání jde a co je jeho účelem",
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
        "Sken nebo fotku e-mailem. Napište, kam dokument půjde a do kdy ho potřebujete.",
    },
    {
      number: "02",
      title: "Dostanete nacenění",
      description: "Zdarma a nezávazně. Znáte cenu i termín.",
    },
    {
      number: "03",
      title: "Zaplatíte zálohu",
      description:
        "Po odsouhlasení nacenění vám pošlu QR kód nebo zálohovou fakturu. Doplatek hradíte až při předání.",
    },
    {
      number: "04",
      title: "Překládám",
      description:
        "Vyhotovím překlad a opatřím ho tlumočnickou doložkou. U elektronické varianty připojím kvalifikovaný elektronický podpis a časové razítko.",
    },
    {
      number: "05",
      title: "Předávám v termínu",
      description:
        "U listinné varianty svážu dokument s překladem, opatřím razítkem a podpisem a předám osobně v Praze nebo pošlu poštou. Elektronickou variantu posílám e-mailem.",
    },
  ],
} as const;

/*
 * Revize 2. kolo, bod 11: dřívější znění ("Odpovím vám, která varianta
 * projde") slibovalo, že klientka zjistí požadavky kteréhokoli úřadu na
 * světě. To odmítá. Nová verze slibuje jen cenu, termín a vysvětlení procesu.
 */
export const callToAction = {
  title: "Nevíte si s něčím rady?",
  description:
    "Napište mi, o jaký dokument jde a do kdy ho potřebujete. Ozvu se s cenou i termínem a vysvětlím vám, jak celý proces proběhne.",
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
  title: "Co o mně říkají klienti?",
  items: [
    {
      id: "weerden",
      quote:
        "S paní Vránovou mám letité výborné zkušenosti, její překlady jsou kvalitní, přesné, vypracované s vysokou odborností. Právní terminologie je překládána naprosto precizně. Spolupráce s ní je vždy příjemná, ve všem mi vychází vstříc.",
      author: "JUDr. A. van der Weerden",
      role: "advokát",
    },
    {
      id: "dolezi",
      quote:
        "Naše společnost s ručením omezeným zaměřená na technické a právní překlady spolupracuje s paní Mgr. Danielou Vránovou od začátku roku 2015. Vždy kvalitně a včas odevzdává zadané právní překlady. Spolupráce s ní je pro naši společnost velmi užitečná a prospěšná včetně profesionální úrovně. Za dobu spolupráce nám přeložila 500 stránek. Rád doporučuji.",
      author: "Petr Doleží",
      role: "majitel společnosti HEDO Praha s.r.o.",
    },
    {
      id: "svozilek",
      quote:
        "S paní Vránovou spolupracuji na překladech dlouhou dobu a mohu její služby 100% doporučit. Překlady jsou vždy v perfektní kvalitě a v dohodnutém čase připraveny. S paní Vránovou budu nadále spolupracovat jako se svou hlavní překladatelkou a budu doporučovat jejím překladatelské a tlumočnické služby.",
      author: "Miroslav Svozílek",
      role: "podnikatel/recruitment consultant, HAYS Czech Republic s.r.o.",
    },
    {
      id: "bursik",
      quote:
        "S paní Vránovou spolupracujeme od roku 2015 při veškerých úředních překladech smluv a výpisů ze státních rejstříků pro naše zahraniční partnery. Přestože jsme mimopražští, tak je spolupráce vždy velmi rychlá a bezproblémová a komunikace s paní Vránovou vždy příjemná.",
      author: "Martin Buršík",
      role: "BURŠÍK CAPITAL s.r.o.",
    },
    {
      id: "kratochvilova",
      quote:
        "Přístup paní Vránové k překladatelské činnosti a odvedené práci je profesionální v maximální možné míře. Vzhledem k opakující se spolupráci s nakladatelstvím Grada Publishing je zřejmé, že je skutečnou profesionálkou s citem pro jazyk a smyslem pro zodpovědnost a dodržování termínů.",
      author: "Šárka Kratochvílová",
      role: "Grada",
    },
  ],
  /* Revize 2. kolo, bod 10.3 – odkaz na ověřitelná hodnocení pod karuselem. */
  reviewsNote: {
    before: "Všechna hodnocení v plném znění najdete na",
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
  title: "Na co se lidé ptají nejčastěji",
  items: [
    {
      id: "co-je-soudni-preklad",
      /* Revize 2. kolo, bod 9.1: lidé hledají všechna tři slova, ne jedno. */
      question: "Co je soudní, ověřený a úřední překlad?",
      answer:
        "Tři synonyma téhož. Překlad neoddělitelně spojený s dokumentem a opatřený doložkou, kulatým razítkem a podpisem soudního tlumočníka. Úřady, soudy a instituce jej uznávají jako úředně platný.",
    },
    {
      id: "svazany-vs-elektronicky",
      question: "Jaký je rozdíl mezi listinným a elektronickým překladem?",
      answer:
        "Listinný (svázaný) překlad je fyzicky spojený s dokumentem a předává se osobně nebo poštou. Elektronický překlad je PDF opatřené kvalifikovaným elektronickým podpisem a časovým razítkem. Má stejnou právní platnost a doručím jej e-mailem.",
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
      question: "V jakém formátu dostanu ověřený překlad?",
      answer:
        "Ověřený překlad můžete dostat čtyřmi způsoby, podle toho, co potřebujete a co bude váš úřad akceptovat:",
      details: [
        {
          title: "Listinná verze (originál dokumentu, překlad, razítko)",
          text: "Dodáte mi originál dokumentu – osobně nebo poštou – který následně sešiju s překladem, přidám překladatelskou doložku a razítko. Můžeme se buď setkat osobně (preferuji Praha 3, Flora) a překlad Vám předám, nebo Vám jej mohu zaslat poštou či kurýrem (za příplatek).",
        },
        {
          title: "Listinná verze (kopie dokumentu, překlad, razítko)",
          text: "Dodáte mi kopii dokumentu (prostou či notářskou), buď fyzicky nebo emailem. Tuto kopii, kterou dodáte fyzicky nebo si ji vytisknu z emailu, sešiju s překladem, přidám překladatelskou doložku a razítko. Můžeme se buď setkat osobně (preferuji Praha 3, Flora) a překlad Vám předám, nebo Vám jej mohu zaslat poštou či kurýrem (za příplatek). Ujistěte se, že úřad, kam překlad budete předkládat, akceptuje jiný dokument než originál.",
        },
        {
          title: "Emailem zaslaný sken překladu",
          text: "Pošlete mi sken dokumentu, který vytisknu, a fyzicky s ním sešiju překlad, přidám překladatelskou doložku a razítko. Tento celý dokument následně naskenuji a zašlu Vám jej e-mailem. Tato varianta je vhodná, pokud potřebujete rychle elektronickou verzi překladu a víte, že úřad, kam překlad budete předkládat, tuto formu akceptuje. (Případně si můžete mnou naskenovaný dokument s překladem v listinné podobě vyzvednout později.)",
        },
        {
          title: "Elektronický (elektronicky podepsaný) ověřený překlad",
          text: "Zašlete mi dokument emailem. Obdržíte ověřený překlad ve formátu PDF s kvalifikovaným elektronickým podpisem a časovým razítkem. Tato varianta je plně elektronická. Před volbou této možnosti si prosím ověřte, zda daný úřad, kam překlad budete předkládat, tento formát překladu akceptuje.",
        },
      ],
      disclaimer:
        "Který formát a jaké ověření budete potřebovat, se liší úřad od úřadu i zemi od země – doporučujeme si to předem ověřit přímo u instituce, které budete dokument předkládat.",
    },
    {
      id: "cena",
      question: "Kolik soudní překlad stojí?",
      answer:
        "Každou zakázku nacením individuálně, proto na webu nenajdete ceník. Cenu ovlivňuje rozsah dokumentu v normostranách, požadovaný termín a to, zda chcete překlad listinný nebo elektronický. Pošlete mi dokument a dostanete nezávazné nacenění zdarma, takže přesnou částku znáte dřív, než cokoli potvrdíte.",
    },
    {
      id: "normostrana",
      question: "Co je normostrana a kolik jich má můj dokument?",
      answer:
        "Normostrana je 1 800 znaků včetně mezer, zhruba 250 slov, a počítá se ze zdrojového dokumentu. Rodný list, oddací list nebo výpis z rejstříku trestů vyjde přibližně na jednu normostranu, diplom s dodatkem na dvě až čtyři, běžná smlouva na pět až patnáct.",
    },
    {
      id: "termin",
      /* Revize 2. kolo, bod 9.3: placeholder [doplnit] nahrazen údajem od klientky. */
      question: "Jak dlouho vyhotovení trvá?",
      answer:
        "Běžný termín jsou 3 pracovní dny u dokumentů do 5 stran. U kratších dokumentů zvládnu i expresní vyhotovení. Termín potvrdím vždy předem.",
    },
    {
      id: "expres",
      question: "Zvládnete to do zítřka?",
      answer:
        "U jednostránkových dokumentů často ano, u elektronické varianty odpadá pošta i osobní předání. Napište mi rovnou termín, do kdy dokument potřebujete, a odpovím, jestli to stihnu, ještě než objednáte.",
    },
    {
      id: "original",
      /*
       * Revize 2. kolo, bod 9.4: předchozí odpověď ("u listinného ano,
       * u digitálního stačí sken") byla zavádějící. Požadavek na originál
       * neurčuje varianta ověření, ale instituce, které se dokument předkládá.
       */
      question: "Musím dodat originál dokumentu?",
      answer:
        "Odpověď na tuto otázku vám nemohu dát já, je třeba ji zjistit u instituce, které budete překlad předkládat. Někdy stačí prostá kopie, jindy ověřená, někdy je zapotřebí originál. U elektronického překladu je to stejné. Někdy stačí sken, jindy je nutná autorizovaná konverze a někdy je váš originál vydaný rovnou elektronicky.",
    },
    {
      id: "apostila",
      question: "Potřebuji apostilu nebo superlegalizaci?",
      answer:
        "Záleží na zemi a na instituci, která dokument přebírá. Apostila se pořizuje na originál před překladem, ne po něm. Napište mi, kam dokument míří, a poradím vám pořadí kroků dřív, než zaplatíte něco zbytečně.",
    },
    {
      id: "uznani-elektronickeho",
      question: "Uzná úřad elektronický překlad?",
      answer:
        "Elektronický překlad s kvalifikovaným elektronickým podpisem má stejnou právní platnost jako listinný. Některé instituce ale stále vyžadují papír. Proto si vždy předem zjistěte, co po vás bude daný úřad vyžadovat.",
    },
    {
      id: "jak-poslat",
      question: "Jak vám dokument bezpečně pošlu?",
      answer:
        "Stačí příloha e-mailu nebo formulář na téhle stránce. Dokumenty používám výhradně k vyhotovení překladu a nikam je nepředávám.",
    },
    {
      id: "tlumoceni-kde",
      question: "Tlumočíte i mimo Prahu?",
      answer:
        "Ano, tlumočím v Praze a po Čechách. U vzdálenějších míst k ceně připočítávám cestovné, které znáte předem.",
    },
    {
      id: "svatba",
      question: "Co potřebujeme, když se bere Čech s cizincem?",
      answer:
        "Matrika obvykle chce soudní překlad rodného listu a dokladu o osobním stavu, u obřadu pak přítomnost soudního tlumočníka. Napište mi datum obřadu a matriku, u které se berete, a projdu s vámi seznam dokumentů.",
    },
  ],
} as const;

export const contact = {
  label: "Kontakt",
  title: "Nezávazné nacenění zdarma",
  description:
    "Napište mi, o jaký dokument jde, kam ho potřebujete doložit a do kdy. Ozvu se s cenou a termínem.",
  fields: {
    name: { label: "Jméno a příjmení", placeholder: "Jméno a příjmení" },
    email: { label: "E-mail", placeholder: "vas@email.cz" },
    documentType: {
      label: "Typ dokumentu",
      placeholder: "Vyberte typ dokumentu",
      options: [
        "Rodný nebo oddací list",
        "Výpis z rejstříku trestů",
        "Diplom a nostrifikace",
        "Smlouva",
        "Plná moc",
        "Výpis z obchodního rejstříku",
        "Tlumočení",
        "Ostatní úřední dokument",
        "Nevím, poraďte mi",
      ],
    },
    deadline: {
      label: "Požadovaný termín",
      hint: "Nezávazně. Když termín nevíte, nechte pole prázdné.",
    },
    message: {
      label: "O jaký dokument jde a kam ho potřebujete?",
      placeholder:
        "Např. oddací list pro matriku v Praze, potřebuji do 20. srpna.",
    },
  },
  upload: {
    label: "Sken nebo fotka dokumentu",
    dropText: "Přetáhněte sem sken nebo fotku dokumentu",
    hint: "PDF, JPG nebo PNG do 10 MB. Nepovinné, ale zrychlí to nacenění.",
  },
  privacyNote:
    "Údaje použiji jen k odpovědi na vaši poptávku. Nikam je nepředávám.",
  submitLabel: "Odeslat poptávku",
} as const;

export const footer = {
  position: "Soudní překladatelka a tlumočnice pro anglický jazyk, Praha.",
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
        { label: "Cena a termín", href: "#cena" },
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
        label: "Soudní překladatelka a tlumočnice jmenovaná Ministerstvem spravedlnosti",
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
