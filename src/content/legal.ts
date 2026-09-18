/**
 * ---------------------------------------------------------------------------
 * PRÁVNÍ PODSTRÁNKY – Ochrana osobních údajů, Obchodní podmínky
 * ---------------------------------------------------------------------------
 * Samostatný obsahový soubor mimo `home.ts` / `home.en.ts` záměrně. Anglický
 * překlad je v `legal.en.ts`; oba dokumenty sdílejí typ `LegalDocument`, ale
 * nejsou součástí homepage slovníku `Content`.
 *
 * Identifikační údaje (jméno, IČO, sídlo) se sem nekopírují – oba dokumenty
 * je čerpají přímo z `legal` v `home.ts`, aby existoval jediný zdroj pravdy
 * shodný s patičkou.
 *
 * Datum účinnosti (`updated`) je jeden literál použitý na obou stránkách;
 * při obsahové revizi dokumentu se mění na jednom místě.
 * ---------------------------------------------------------------------------
 */

const EFFECTIVE_DATE = "18. 9. 2026";

export type LegalSection = {
  id: string;
  title: string;
  /** Odstavce běžného textu, v pořadí, v jakém se mají vykreslit. */
  paragraphs?: string[];
  /** Odrážkový seznam, vloží se mezi první a druhý odstavec, pokud existuje. */
  list?: string[];
};

export type LegalDocument = {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string[];
  sections: LegalSection[];
};

export const privacyPolicy: LegalDocument = {
  eyebrow: "Právní informace",
  title: "Zásady zpracování osobních údajů",
  updated: EFFECTIVE_DATE,
  intro: [
    "Tyto zásady popisují, jaké osobní údaje na webu soudni-anglictina.cz a czech-translator.eu zpracovávám, proč to dělám a jaká v souvislosti s tím máte práva. Řídí se nařízením Evropského parlamentu a Rady (EU) 2016/679 (GDPR) a zákonem č. 110/2019 Sb., o zpracování osobních údajů.",
  ],
  sections: [
    {
      id: "spravce",
      title: "Kdo je správcem vašich údajů",
      paragraphs: [
        "Správcem osobních údajů, které mi prostřednictvím tohoto webu, e-mailem nebo telefonicky svěříte, jsem já:",
      ],
      list: [
        "Mgr. Daniela Vránová",
        "IČO: 69605726",
        "místo podnikání: Křišťanova 1789/17, Žižkov, 130 00 Praha 3",
        "e-mail: daniela.vranova@seznam.cz",
        "telefon: +420 604 750 796",
      ],
    },
    {
      id: "jake-udaje",
      title: "Jaké údaje zpracovávám a proč",
      paragraphs: [
        "Poptávkový formulář a e-mailová komunikace. Když mi napíšete přes kontaktní formulář nebo e-mailem, zpracovávám jméno, e-mailovou adresu, případně telefon, a obsah zprávy – typ dokumentu, požadovaný termín, popis zakázky. Přiložíte-li k poptávce sken nebo fotku dokumentu, zpracovávám i údaje, které dokument obsahuje. Slouží mi výhradně k tomu, abych poptávku dokázala nacenit a připravit překlad. Právním základem je jednání o uzavření smlouvy a plnění smlouvy (čl. 6 odst. 1 písm. b) GDPR), případně můj oprávněný zájem na tom, abych vám odpověděla (čl. 6 odst. 1 písm. f) GDPR).",
        "Vyhotovení zakázky a fakturace. Uzavřeme-li spolu spolupráci, zpracovávám navíc fakturační údaje – jméno nebo název, adresu, případně IČO a DIČ – a údaje potřebné k vyhotovení a předání překladu nebo tlumočení. Právním základem je plnění smlouvy (čl. 6 odst. 1 písm. b)) a plnění mých zákonných povinností, zejména vedení účetnictví a evidence pro daňové účely (čl. 6 odst. 1 písm. c)).",
        "Přímý telefonický kontakt. Zavoláte-li mi, zpracovávám telefonní číslo a obsah hovoru v rozsahu, který potřebuji k vyřízení vaší poptávky. Právní základ je stejný jako u poptávkového formuláře.",
        "Zpracování vašich údajů nezahrnuje žádné automatizované rozhodování ani profilování.",
      ],
    },
    {
      id: "cookies",
      title: "Cookies a analytika",
      paragraphs: [
        "Tento web nepoužívá žádné cookies. Návštěvnost měřím nástrojem Plausible Analytics, který funguje bez cookies a bez sledování jednotlivých návštěvníků – data zpracovává souhrnně a anonymně, takže vás z návštěvy webu nedokážu identifikovat. Tento způsob měření podle GDPR ani zákona o elektronických komunikacích nevyžaduje váš souhlas. Písma na webu se navíc načítají z vlastní domény, ne z Google Fonts, takže k přenosu údajů ke Googlu nedochází ani jen kvůli zobrazení textu.",
      ],
    },
    {
      id: "prijemci",
      title: "Komu údaje předávám",
      paragraphs: [
        "Vaše údaje neprodávám ani nepředávám k marketingovým účelům třetím stranám. K údajům mohou mít přístup zpracovatelé, které využívám k provozu webu a k vlastní činnosti – zejména poskytovatel webhostingu, poskytovatel e-mailových služeb, služba Web3Forms zajišťující přenos poptávkového formuláře a případně externí účetní. Pokud platbu provedete přes PayPal, zpracovává vaše platební údaje přímo PayPal (PayPal (Europe) S.à r.l. et Cie, S.C.A.) podle vlastních zásad ochrany osobních údajů – s údaji o vaší platební kartě ani účtu se sama vůbec nesetkám.",
        "Se zpracovateli musí být nastavené záruky odpovídající GDPR. Pokud některý poskytovatel zpracovává údaje mimo Evropský hospodářský prostor, musí být přenos chráněn odpovídajícím právním mechanismem, například standardními smluvními doložkami Evropské komise. Dokumenty mohou obsahovat citlivé údaje, proto pro nacenění posílejte pokud možno jen nezbytné strany.",
      ],
    },
    {
      id: "doba",
      title: "Jak dlouho údaje uchovávám",
      paragraphs: [
        "Údaje z nezávazné poptávky, ze které nevznikla zakázka, uchovávám nejdéle 12 měsíců od posledního kontaktu, poté je maži. Údaje související s uzavřenou zakázkou a vystavenými doklady uchovávám po dobu vyžadovanou zákonem o účetnictví a zákonem o dani z přidané hodnoty, tedy zpravidla 10 let od konce zdaňovacího období, kterého se týkají. Sken nebo fotku dokumentu, který mi zašlete k nacenění nebo k překladu, bezpečně smažu po dokončení zakázky, případně po uplynutí lhůty pro vyřízení poptávky.",
      ],
    },
    {
      id: "prava",
      title: "Vaše práva",
      paragraphs: ["V souvislosti se zpracováním osobních údajů máte právo:"],
      list: [
        "na přístup k osobním údajům, které o vás zpracovávám,",
        "na opravu nepřesných nebo neúplných údajů,",
        "na výmaz údajů („právo být zapomenut“), pokud pro jejich zpracování už není důvod,",
        "na omezení zpracování,",
        "na přenositelnost údajů, které jste mi poskytli na základě smlouvy,",
        "vznést námitku proti zpracování, které stojí na mém oprávněném zájmu,",
        "podat stížnost u Úřadu pro ochranu osobních údajů (Pplk. Sochora 27, 170 00 Praha 7, www.uoou.cz), pokud se domníváte, že zpracování porušuje GDPR.",
      ],
    },
    {
      id: "kontakt",
      title: "Jak práva uplatnit",
      paragraphs: [
        "Kterékoli z uvedených práv uplatníte e-mailem na daniela.vranova@seznam.cz nebo telefonicky na +420 604 750 796. Na žádost odpovím bez zbytečného odkladu, nejpozději do jednoho měsíce od jejího doručení.",
      ],
    },
    {
      id: "zaverem",
      title: "Závěrečná ustanovení",
      paragraphs: [
        `Tyto zásady mohu čas od času upravit, například při změně zákona nebo při změně toho, jak web funguje. Aktuální verzi vždy najdete na této stránce. Tyto zásady jsou účinné od ${EFFECTIVE_DATE}.`,
      ],
    },
  ],
};

export const termsAndConditions: LegalDocument = {
  eyebrow: "Právní informace",
  title: "Obchodní podmínky",
  updated: EFFECTIVE_DATE,
  intro: [
    "Tyto obchodní podmínky platí pro objednávky soudních překladů a tlumočení, které si u mě sjednáte telefonicky, e-mailem nebo přes poptávkový formulář na webu soudni-anglictina.cz. Řídí se zákonem č. 89/2012 Sb., občanský zákoník, a jste-li spotřebitel, i zákonem č. 634/1992 Sb., o ochraně spotřebitele.",
  ],
  sections: [
    {
      id: "poskytovatel",
      title: "Kdo služby poskytuje",
      paragraphs: ["Služby soudního překladu a tlumočení poskytuji já:"],
      list: [
        "Mgr. Daniela Vránová",
        "IČO: 69605726",
        "místo podnikání: Křišťanova 1789/17, Žižkov, 130 00 Praha 3",
        "fyzická osoba podnikající na základě živnostenského oprávnění, zapsaná v živnostenském rejstříku; nejsem plátcem DPH",
        "soudní překladatelka a tlumočnice pro anglický jazyk jmenovaná Ministerstvem spravedlnosti, členka Komory soudních tlumočníků ČR",
        "e-mail: daniela.vranova@seznam.cz, telefon: +420 604 750 796",
      ],
    },
    {
      id: "objednavka",
      title: "Objednávka a uzavření smlouvy",
      paragraphs: [
        "Poptávku mi zašlete přes formulář na webu, e-mailem nebo telefonicky. Na základě poslaného dokumentu nebo popisu zakázky vám zašlu nezávazné nacenění a odhad termínu. Smlouva je uzavřena ve chvíli, kdy nacenění – cenu, rozsah a termín – potvrdíte, a to i neformálně, například odpovědí e-mailem. Nabídka, kterou vám pošlu, je platná 30 dní od odeslání, pokud u ní neuvedu jinak.",
      ],
    },
    {
      id: "cena",
      title: "Cena a způsob úhrady",
      paragraphs: [
        "Cenu určuji individuálně podle rozsahu dokumentu v normostranách, náročnosti a požadovaného termínu, proto na webu nenajdete ceník. Konečnou cenu vždy potvrdím předem, ještě než na zakázce začnu pracovat, a v průběhu vyhotovování ji bez vašeho souhlasu neměním.",
        "Platbu můžete provést v korunách českých (Kč) nebo v eurech (EUR):",
      ],
      list: [
        "v hotovosti,",
        "bankovním převodem – číslo účtu obdržíte na faktuře,",
        "prostřednictvím PayPalu.",
      ],
    },
    {
      id: "dodani",
      title: "Dodání překladu a termín",
      paragraphs: [
        "Ověřený překlad dodávám ve dvou podobách: listinné (svázaný s originálem nebo jeho kopií, opatřený tlumočnickou doložkou, kulatým razítkem a podpisem, předání osobně nebo poštou) nebo elektronické (PDF s kvalifikovaným elektronickým podpisem a časovým razítkem, doručení e-mailem). Kterou variantu zvolit, záleží na tom, co vyžaduje úřad nebo instituce, pro kterou překlad potřebujete – ověření požadavků nechávám na vás, protože úřady s třetími stranami běžně nekomunikují. Termín dodání potvrzuji individuálně při nacenění a dodržuji ho; o případném zpoždění, které bych zavinila já, vás včas informuji.",
      ],
    },
    {
      id: "odstoupeni",
      title: "Odstoupení od smlouvy",
      paragraphs: [
        "Jste-li spotřebitel a smlouvu jsme uzavřeli na dálku – telefonicky, e-mailem nebo přes web –, máte podle § 1829 občanského zákoníku obecně právo odstoupit od smlouvy do 14 dnů bez udání důvodu. Toto právo se ale podle § 1837 písm. d) a a) občanského zákoníku nevztahuje na dodávku zboží nebo služby upravené podle vašich požadavků nebo pro vaši osobu – a soudní překlad konkrétního dokumentu je přesně takový případ. Požádáte-li mě výslovně, abych s vyhotovením překladu začala ještě před uplynutím 14denní lhůty, a já s plněním před jejím koncem skončím, právo na odstoupení podle § 1837 písm. a) zaniká.",
        "Než na zakázce začnu pracovat, můžete objednávku kdykoli bezplatně zrušit. Zrušíte-li zakázku poté, co jsem na ní začala pracovat, mám nárok na úhradu již vykonané práce.",
      ],
    },
    {
      id: "reklamace",
      title: "Práva z vadného plnění (reklamace)",
      paragraphs: [
        "Odpovídám za to, že vyhotovený překlad odpovídá zadání a je bez věcných a jazykových chyb. Najdete-li v překladu chybu, napište mi bez zbytečného odkladu po jejím zjištění e-mailem nebo dopisem na výše uvedenou adresu a popište, v čem chybu spatřujete. Reklamaci vyřídím, včetně opravy překladu, nejpozději do 30 dnů od jejího uplatnění, pokud se výslovně nedohodneme na delší lhůtě. Jste-li spotřebitel, řídí se reklamace § 2099 a násl. občanského zákoníku a zákonem o ochraně spotřebitele.",
      ],
    },
    {
      id: "mlcenlivost",
      title: "Mlčenlivost a ochrana osobních údajů",
      paragraphs: [
        "Jako soudní tlumočnice jsem ze zákona č. 354/2019 Sb., o soudních tlumočnících a soudních překladatelích, vázána mlčenlivostí o skutečnostech, se kterými se při výkonu činnosti seznámím – to platí i pro obsah dokumentů, které mi k překladu zašlete. Jak nakládám s osobními údaji, popisují samostatné Zásady zpracování osobních údajů.",
      ],
    },
    {
      id: "spory",
      title: "Mimosoudní řešení sporů",
      paragraphs: [
        "Jste-li spotřebitel a vznikne mezi námi spor, který se nepodaří vyřešit dohodou, máte právo obrátit se na Českou obchodní inspekci (Štěpánská 567/15, 120 00 Praha 2, www.coi.cz, adr.coi.cz) jako subjekt mimosoudního řešení spotřebitelských sporů.",
      ],
    },
    {
      id: "zaverecna",
      title: "Závěrečná ustanovení",
      paragraphs: [
        `Právní vztahy těmito podmínkami neupravené se řídí právním řádem České republiky, zejména občanským zákoníkem a zákonem o ochraně spotřebitele. Podmínky mohu přiměřeně upravovat, například při změně právních předpisů; na již potvrzenou zakázku se ale vždy použije znění platné v okamžiku jejího potvrzení. Tyto obchodní podmínky jsou účinné od ${EFFECTIVE_DATE}.`,
      ],
    },
  ],
};
