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
 * INTERPUNKCE: v textech se nepoužívá dlouhá pomlčka (—). Jednotně jen
 * půltvrdá pomlčka s mezerami ( – ), viz revize bod 18.
 *
 * Druhá jazyková mutace (EN dle briefu) = kopie tohoto souboru jako `home.en.ts`
 * a routa `src/app/[locale]/page.tsx`. Struktura klíčů zůstává stejná.
 * ---------------------------------------------------------------------------
 */

export const brand = {
  name: "Překlady Vránová",
  person: "Mgr. Daniela Vránová",
  tagline: "Soudní překlady a tlumočení z angličtiny. Praha, od roku 2003.",
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
  /* Přepínač jazyka – druhá mutace je připravená, zatím vede na kotvu. */
  locales: [
    { code: "CS", href: "#uvod", current: true },
    { code: "EN", href: "#uvod", current: false },
  ],
} as const;

export const hero = {
  eyebrow: "Soudní tlumočnice · Praha, od roku 2003",
  /*
   * Revize (klientčin brief, 14. 8. 2026): původní "Dokumenty, které úřad
   * přijme napoprvé" klientka odmítla – jestli konkrétní úřad nebo zahraniční
   * instituce dokument přijme, nemá pod kontrolou a nechce to slibovat. Nový
   * nadpis slibuje jen to, co reálně dodržet může: že dokument připraví
   * přesně podle toho, co návštěvník potřebuje, ne že to za něj zaručí
   * u třetí strany.
   */
  title: "Dokumenty připravené přesně tak, jak je budete potřebovat.",
  description:
    "Soudní překlady a tlumočení z angličtiny. Listinný i digitální ověřený překlad, s termínem, který potvrdím předem.",
  primaryCta: NACENENI,
  secondaryCta: { label: "Jak to probíhá", href: "#proces" },
  /*
   * Jediná věta, která na webu nahrazuje chybějící ceník. Musí být vidět bez
   * scrollu, proto stojí hned pod tlačítky, ne až v sekci Kontakt.
   */
  assurance: "Cenu a termín pošlu nezávazně a zdarma.",
  photoAlt: "Mgr. Daniela Vránová, soudní tlumočnice",
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
    { id: "jmenovana", index: "I", title: "Jmenovaná soudem", note: "Soudní tlumočnice pro anglický jazyk" },
    { id: "komora", index: "II", title: "Komora soudních tlumočníků ČR", note: "Členka od jmenování" },
    { id: "varianty", index: "III", title: "Listinný i digitální překlad", note: "Obě varianty se stejnou platností" },
    { id: "termin", index: "IV", title: "Termín potvrzený předem", note: "Nacenění zdarma a nezávazně" },
  ],
} as const;

/** Rok jmenování soudní tlumočnicí. Odsud se dopočítává délka praxe. */
const ROK_JMENOVANI = 2003;

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
  paragraphs: [
    "Soudní tlumočnicí pro anglický jazyk jsem od roku 2003. Jmenoval mě soud a jsem členkou Komory soudních tlumočníků ČR. Pracuji sama, takže mluvíte přímo s tím, kdo váš dokument překládá, razítkuje a podepisuje.",
    "Překládám rodné a oddací listy, výpisy z rejstříku trestů, diplomy, smlouvy, plné moci a rozsudky. Tlumočím na svatbách, u notáře, při jednáních i u soudu, po celé ČR. Překlad dodám listinně se šňůrkou a kulatým razítkem, nebo digitálně jako PDF s kvalifikovaným elektronickým podpisem.",
    "Než začnu překládat, zeptám se, kam dokument půjde. Každá instituce má jiné požadavky a je levnější je znát předem než překlad předělávat.",
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
  /* Jediná kurzíva na celé stránce. Víc pull quotů už je dekorace. */
  pullquote: "Dokument má projít napoprvé. To je celá práce.",
  badges: ["Jmenovaná soudem", "Komora soudních tlumočníků ČR"],
  cta: NACENENI,
  phoneCta: { label: brand.phone.label, href: brand.phone.href },
  ctaNote:
    "Pošlete sken nebo fotku dokumentu. Napíšu vám cenu, termín i to, jestli vám stačí digitální varianta.",
  photoAlt: "Mgr. Daniela Vránová, soudní tlumočnice pro anglický jazyk",
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
    "Každou zakázku nacením předem a zdarma. Cenu určuje rozsah dokumentu, termín a to, jestli chcete překlad listinný, nebo digitální.",
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
    "Tlumočím u soudu, na úřadech, u notáře i na konferencích a firemních jednáních, po celé ČR. Tři situace, se kterými se na mě lidé nejčastěji obracejí:",
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
  ],
  references: {
    intro: "Tlumočila jsem mimo jiné pro:",
    items: ["Senát ČR", "O2 arena", "SOS dětské vesničky", "Škoda Auto"],
  },
  cta: NACENENI,
  photoAlt: "Mgr. Daniela Vránová tlumočí v kabině na konferenci v O2 areně",
} as const;

/**
 * DVĚ VARIANTY OVĚŘENÍ – nejdůležitější sekce na stránce.
 * Brief je žádá jasně oddělit: digitální ověřený překlad je dnes běžná
 * varianta a klientka ji chce nabízet výslovně, ne jako poznámku pod čarou.
 *
 * Každá karta: nákres anatomie, nadpis, tři odrážky. Termínová bublina pod
 * odrážkami padla – nesla jen neodsouhlasený placeholder "[doplnit] pracovních
 * dní" a na web se natvrdé číslo, které klientka nepotvrdila, dostat nesmí.
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
        "Potřebuji originál nebo ověřenou kopii dokumentu",
        "Svázáno šňůrkou a přelepkou, nelze rozdělit",
        "Předám osobně v Praze nebo pošlu doporučeně",
      ],
    },
    {
      id: "digitalni",
      anatomy: "digital",
      title: "Digitální (elektronicky ověřený) překlad",
      description:
        "PDF s kvalifikovaným elektronickým podpisem a časovým razítkem. Stejná právní platnost jako u listinného.",
      bullets: [
        "Stačí kvalitní sken nebo fotka dokumentu",
        "Doložka i podpis jsou součástí jednoho PDF",
        "Doručím e-mailem, tisk platnost ruší",
      ],
    },
  ],
  note: "Nevíte, která varianta projde u vaší instituce? Napište mi, co s dokumentem plánujete – poradím vám dřív, než cokoli objednáte.",
} as const;

/**
 * JAK SE POČÍTÁ CENA A TERMÍN
 * Náhrada za ceník, který na webu být nesmí. Bez téhle sekce web nesplní cíl
 * z briefu: odpovědět na cenu a termín dřív, než uživatel klikne na kontakt.
 */
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
        "Varianta ověření: listinná, nebo digitální",
        "Požadovaný termín, expres stojí víc",
        "Počet vyhotovení, druhý paré je levnější",
        "Náročnost předlohy: razítka, tabulky, ruční psaní",
      ],
    },
    {
      id: "normostrana",
      title: "Co je normostrana",
      lead: "Normostrana je 1 800 znaků včetně mezer, tedy zhruba 250 slov. Počítá se z hotového překladu, ne z počtu listů.",
      items: [
        "Rodný nebo oddací list: přibližně 1 normostrana",
        "Výpis z rejstříku trestů: přibližně 1 normostrana",
        "Diplom s dodatkem: přibližně 2 až 4 normostrany",
        "Smlouva: obvykle 5 až 15 normostran",
      ],
    },
    {
      id: "rychlost",
      title: "Jak rychle přijde nacenění",
      lead: "Pošlete sken nebo fotku. Cenu i termín pošlu nezávazně a zdarma.",
      items: [
        "Nacenění je konečné, nic se k němu nepřipočítává",
        "Rovnou napíšu, jestli stačí digitální varianta",
        "U spěchu řeknu předem, co reálně stihnu",
      ],
    },
  ],
} as const;

export const process = {
  label: "Jak to probíhá",
  title: "Čtyři kroky, žádné překvapení",
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
      description:
        "Zdarma a nezávazně. Znáte cenu, termín i to, jestli stačí digitální varianta.",
    },
    {
      number: "03",
      title: "Překládám a ověřuji",
      description:
        "Překlad opatřím doložkou, razítkem a podpisem, nebo elektronickým podpisem s časovým razítkem.",
    },
    {
      number: "04",
      title: "Předám v termínu",
      description:
        "Osobně v Praze, poštou, nebo e-mailem u digitální varianty.",
    },
  ],
} as const;

export const callToAction = {
  title: "Nevíte, co přesně po vás úřad chce?",
  description:
    "Napište mi, o jaký dokument jde a kam ho potřebujete doložit. Odpovím vám, která varianta projde, co to bude stát a do kdy to mám hotové.",
  cta: NACENENI,
  contactLabel: "Nebo rovnou napřímo",
} as const;

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
} as const;

/**
 * ČASTÉ DOTAZY
 * Jádro briefu – web má odpovědět místo klientky na "co to obnáší, co to stojí,
 * jak dlouho to trvá". Odsud se zároveň generují strukturovaná data FAQPage.
 *
 * Texty v hranatých závorkách čekají na potvrzení od klientky.
 */
export const faq = {
  label: "Časté dotazy",
  title: "Na co se lidé ptají nejčastěji",
  items: [
    {
      id: "co-je-soudni-preklad",
      question: "Co je soudní ověřený překlad?",
      answer:
        "Překlad neoddělitelně spojený s dokumentem a opatřený doložkou, kulatým razítkem a podpisem soudního tlumočníka. Úřady, soudy a instituce jej uznávají jako úředně platný.",
    },
    {
      id: "svazany-vs-digitalni",
      question: "Jaký je rozdíl mezi listinným a digitálním překladem?",
      answer:
        "Listinný (svázaný) překlad je fyzicky spojený s dokumentem a předává se osobně nebo poštou. Digitální překlad je PDF opatřené kvalifikovaným elektronickým podpisem a časovým razítkem. Má stejnou právní platnost a doručím jej e-mailem.",
    },
    /*
     * Revize (klientčin brief, 14. 8. 2026): text čtyř formátů dodala
     * klientka sama, beze změny – dřív jí vysvětlování jednomu klientovi
     * zabralo až tři hodiny. `details` je rozpad na čtyři podpoložky navíc
     * k `answer`, `disclaimer` je věta, která zároveň řeší i slib z hero
     * nadpisu: web nikde netvrdí, že konkrétní úřad formát uzná.
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
          text: "Dodáte mi kopii dokumentu (prostou či notářskou), buď fyzicky nebo emailem. Tuto kopii sešiju s překladem, přidám překladatelskou doložku a razítko. Předání osobně (Praha 3, Flora), poštou nebo kurýrem (za příplatek). Ujistěte se, že úřad, kam překlad budete předkládat, akceptuje jiný dokument než originál.",
        },
        {
          title: "Emailem zaslaný sken překladu",
          text: "Pošlete mi sken dokumentu, který vytisknu a fyzicky s ním sešiju překlad, přidám doložku a razítko, celé to naskenuji a zašlu e-mailem. Vhodné, pokud potřebujete rychle digitální verzi a víte, že úřad tuto formu akceptuje.",
        },
        {
          title: "Elektronický (digitálně podepsaný) ověřený překlad",
          text: "Zašlete dokument emailem, obdržíte ověřený překlad ve formátu PDF s digitálním podpisem a časovým razítkem. Plně elektronická varianta – před volbou ověřte, že daný úřad tento formát akceptuje.",
        },
      ],
      disclaimer:
        "Který formát a jaké ověření budete potřebovat, se liší úřad od úřadu i zemi od země – doporučujeme si to předem ověřit přímo u instituce, které budete dokument předkládat.",
    },
    {
      id: "cena",
      question: "Kolik soudní překlad stojí?",
      answer:
        "Každou zakázku nacením individuálně, proto na webu nenajdete ceník. Cenu ovlivňuje rozsah dokumentu v normostranách, požadovaný termín a to, zda chcete překlad listinný, nebo digitální. Pošlete mi dokument a dostanete nezávazné nacenění zdarma, takže přesnou částku znáte dřív, než cokoli potvrdíte.",
    },
    {
      id: "normostrana",
      question: "Co je normostrana a kolik jich má můj dokument?",
      answer:
        "Normostrana je 1 800 znaků včetně mezer, zhruba 250 slov. Rodný list, oddací list nebo výpis z rejstříku trestů vyjde přibližně na jednu normostranu, diplom s dodatkem na dvě až čtyři, běžná smlouva na pět až patnáct.",
    },
    {
      id: "termin",
      question: "Jak dlouho vyhotovení trvá?",
      answer:
        "Běžný termín je [doplnit] pracovních dní od potvrzení objednávky. U kratších dokumentů zvládnu i expresní vyhotovení. Termín potvrdím vždy předem.",
    },
    {
      id: "expres",
      question: "Zvládnete to do zítřka?",
      answer:
        "U jednostránkových dokumentů často ano, u digitální varianty odpadá pošta i osobní předání. Napište mi rovnou termín, do kdy dokument potřebujete, a odpovím, jestli to stihnu, ještě než objednáte.",
    },
    {
      id: "original",
      question: "Musím dodat originál dokumentu?",
      answer:
        "U listinného překladu ano, potřebuji originál nebo ověřenou kopii. U digitálního překladu stačí kvalitní sken nebo ostrá fotka.",
    },
    {
      id: "apostila",
      question: "Potřebuji apostilu nebo superlegalizaci?",
      answer:
        "Záleží na zemi a na instituci, která dokument přebírá. Apostila se pořizuje na originál před překladem, ne po něm. Napište mi, kam dokument míří, a poradím vám pořadí kroků dřív, než zaplatíte něco zbytečně.",
    },
    {
      id: "uznani-digitalu",
      question: "Uzná úřad digitální překlad?",
      answer:
        "Digitální překlad s kvalifikovaným elektronickým podpisem má stejnou právní platnost jako listinný. Některé instituce ale stále vyžadují papír. Proto se vždy ptám, kam dokument půjde, a variantu doporučím podle toho.",
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
        "Ano, tlumočím po celé ČR. U vzdálenějších míst k ceně připočítávám cestovné, které znáte předem.",
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
  position: "Soudní tlumočnice pro anglický jazyk, Praha.",
  columns: [
    {
      id: "sluzby",
      title: "Služby",
      links: [
        { label: "Typy dokumentů", href: "#sluzby" },
        { label: "Listinný překlad", href: "#varianty" },
        { label: "Digitální překlad", href: "#varianty" },
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
  qualifications: {
    title: "Kvalifikace",
    items: [
      "Soudní tlumočnice jmenovaná soudem",
      "Členka Komory soudních tlumočníků ČR",
    ],
  },
  /* Stejné odkazy jako `brand.social`, čtené přímo v patičce vedle telefonu a e-mailu. */
  social: [brand.social.instagram, brand.social.linkedin],
  domains: ["soudni-anglictina.cz", "czech-translator.eu"],
  copyright: "© 2026 Mgr. Daniela Vránová",
  privacy: { label: "Zásady zpracování osobních údajů", href: "#gdpr" },
} as const;

/** Mobilní sticky lišta – telefon vlevo, formulář vpravo. */
export const stickyBar = {
  call: { label: "Zavolat", href: brand.phone.href },
  form: { label: "Nacenění zdarma", href: "#kontakt" },
} as const;
