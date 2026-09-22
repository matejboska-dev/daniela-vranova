/**
 * ---------------------------------------------------------------------------
 * OBSAH HOMEPAGE — ANGLICKÁ MUTACE
 * ---------------------------------------------------------------------------
 * Zrcadlí `home.ts` klíč po klíči. Strukturu hlídá typ `Content`
 * v `content/index.ts`; když se tady klíč ztratí nebo přibude, neprojde
 * `npm run typecheck`.
 *
 * TERMINOLOGIE. České "soudní / ověřený / úřední překlad" má v angličtině
 * jeden ustálený ekvivalent — "certified translation" — a profesi říká
 * "certified translator and interpreter". Přesně tak je klientka vedená
 * i na Expats.cz, takže se web s jejím vlastním profilem nerozchází.
 * Dál jednotně:
 *   normostrana                → standard page (SP)
 *   listinný (svázaný) překlad → hard-copy (bound) translation
 *   elektronický ověřený p.    → electronic (digitally signed) certified transl.
 *   tlumočnická doložka        → translator's clause
 *   matrika                    → registry office
 *   autorizovaná konverze      → authorised document conversion
 *
 * Slovo "digital" se o překladu nepoužívá, stejně jako se v české verzi
 * nepoužívá "digitální" (revize 2. kolo, bod 1) — jen "electronic".
 *
 * Tone of voice zůstává stejný: první osoba jednotného čísla, krátké věty,
 * konkrétní čísla místo přídavných jmen, žádný "team of professionals".
 *
 * Kotvy (`href: "/en#sluzby"`) se nepřekládají — `id` sekcí jsou v komponentách
 * a jsou pro obě mutace společné. Prefix `/en` je nutný, protože obě mutace
 * teď mají i podstránky mimo homepage (Ochrana osobních údajů, Obchodní
 * podmínky) — bez cesty před `#` by odkaz z podstránky nikam nescrolloval.
 * ---------------------------------------------------------------------------
 */

export const brand = {
  name: "Daniela Vránová Translations",
  person: "Mgr. Daniela Vránová",
  tagline: "Certified English translations and interpreting in Prague since 2004.",
  phone: { label: "+420 604 750 796", href: "tel:+420604750796" },
  email: {
    label: "daniela.vranova@seznam.cz",
    href: "mailto:daniela.vranova@seznam.cz",
  },
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

/**
 * Zrcadlí `legal` v `home.ts` – stejná fakta, anglicky popsaná. Adresa a IČO
 * jsou jazykově neutrální identifikátory, proto se hodnoty neliší, jen popisky.
 */
export const legal = {
  name: "Mgr. Daniela Vránová",
  ico: "69605726",
  icoLabel: "Company ID (IČO)",
  address: "Prague 3, Czech Republic",
  place: "Prague 3",
  meetingPoint: "meeting point Flora / in-person handover by arrangement",
  registrationNote:
    "Sole trader (self-employed) registered in the Czech Trade Licensing Register. Not registered for VAT.",
} as const;

const QUOTE = { label: "Free, no-obligation quote", href: "/en#kontakt" };

const QUALIFICATIONS = {
  ministry: {
    label: "Appointed by the Ministry of Justice",
    href: "https://seznat.justice.cz/",
  },
  chamber: {
    label: "Member of KST ČR",
    href: "https://www.kstcr.cz/en",
  },
} as const;

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
  nav: [
    { label: "Translations", href: "/en#sluzby" },
    { label: "Interpreting", href: "/en#tlumoceni" },
    { label: "Certification", href: "/en#varianty" },
    { label: "Price & turnaround", href: "/en#cena" },
    { label: "FAQ", href: "/en#faq" },
  ],
  cta: QUOTE,
  locales: [
    { code: "CS", href: "/", current: false },
    { code: "EN", href: "/en", current: true },
  ],
} as const;

/** Popisky rozhraní pro čtečku. Zrcadlí `ui` v `home.ts`. */
export const ui = {
  nav: {
    main: "Main navigation",
    open: "Open menu",
    close: "Close menu",
    mobileMenu: "Mobile menu",
  },
} as const;

export const hero = {
  eyebrow: "Certified English translator and interpreter · Prague · Since 2004",
  /*
   * Zrcadlí revizi 3. kola v `home.ts` (nadpis pokrývá překlady i tlumočení
   * rovnocenně, ne jen dokumenty) – dřívější EN znění odpovídalo staršímu,
   * překonanému 2. kolu CS textu.
   */
  title:
    "Certified English translations and interpreting. Handled with care.",
  description:
    "Certified translations in hard-copy or electronic form, plus professional interpreting.\nThe price and deadline are agreed in advance.",
  primaryCta: QUOTE,
  translationsCta: { label: "Translations", href: "/en#sluzby" },
  interpretingCta: { label: "Interpreting", href: "/en#tlumoceni" },
  photoAlt: "Mgr. Daniela Vránová, certified translator and interpreter",
} as const;

export const trust = {
  label: "Credentials",
  title: "Why clients choose me",
  lead: "Professional credentials and practical details you can verify.",
  items: [
    {
      id: "jmenovana",
      index: "I",
      title: QUALIFICATIONS.ministry.label,
      note: "Certified English translator and interpreter",
    },
    {
      id: "komora",
      index: "II",
      title: "Chamber of Court-Appointed Interpreters and Translators",
      note: "A professional association for court-appointed linguists",
    },
    {
      id: "varianty",
      index: "III",
      title: "Hard-copy and electronic translations",
      note: "Both formats carry the same legal validity",
    },
    {
      id: "termin",
      index: "IV",
      title: "Turnaround confirmed up front",
      note: "Quotes are free and non-binding",
    },
  ],
} as const;

const YEAR_APPOINTED = 2004;
const YEARS_OF_PRACTICE = new Date().getFullYear() - YEAR_APPOINTED;

export const about = {
  label: "About me",
  title: "Mgr. Daniela Vránová, certified English translator and interpreter",
  paragraphs: [
    "I was first appointed by a court and am a member of the Chamber of Court-Appointed Interpreters and Translators of the Czech Republic. After the law governing court interpreters and translators changed in 2021, I completed the relicensing process and was appointed by the Ministry of Justice.",
    "I carry out every assignment personally, so you deal directly with the person who translates, certifies and signs your document. I interpret at weddings, notarial appointments, business meetings and court hearings in Prague and across Bohemia.",
    "I provide certified translations either as a bound hard copy with an official stamp or as a PDF with a qualified electronic signature. I help people communicate clearly in a wide range of personal and professional situations.",
  ],
  stats: [
    { id: "jmenovani", value: YEAR_APPOINTED, suffix: "", label: "Appointed by the court" },
    { id: "praxe", value: YEARS_OF_PRACTICE, suffix: "", label: "Years of practice" },
  ],

  badges: [QUALIFICATIONS.ministry, QUALIFICATIONS.chamber],
  cta: QUOTE,
  phoneCta: { label: brand.phone.label, href: brand.phone.href },
  ctaNote: "Send me a scan or photo of the document. I will reply with the price and deadline.",
  photoAlt:
    "Mgr. Daniela Vránová, certified translator and interpreter for the English language",
  video: {
    description:
      "Footage from a wedding ceremony: Daniela Vránová stands next to the registrar and interprets the ceremony for the couple.",
    pause: "Pause video",
    play: "Play video",
  },
} as const;

export const services = {
  label: "Translations",
  title: "Documents I can translate for you",
  description:
    "Every assignment is quoted free of charge and in advance. The price depends on the length of the document and your deadline. Your certified translation can be supplied as a bound hard copy or electronically.",
  items: [
    {
      id: "rodny-oddaci-list",
      icon: "certificate",
      drawn: true,
      title: "Birth and marriage certificates",
      description:
        "For the registry office, marriage to a foreign national, residence permits and entry in foreign registers.",
    },
    {
      id: "rejstrik-trestu",
      icon: "shieldCheck",
      drawn: false,
      title: "Criminal record extract",
      description:
        "For employers, trade licensing authorities and residence applications abroad.",
    },
    {
      id: "diplom-nostrifikace",
      icon: "diploma",
      drawn: true,
      title: "Diplomas and recognition of studies",
      description:
        "Diplomas, school reports and diploma supplements for the recognition of qualifications.",
    },
    {
      id: "smlouvy",
      icon: "contract",
      drawn: false,
      title: "Contracts",
      description:
        "Purchase, lease, employment and commercial contracts, including appendices.",
    },
    {
      id: "plna-moc",
      icon: "signature",
      drawn: false,
      title: "Powers of attorney",
      description:
        "Powers of attorney for representation before public authorities, notaries and courts.",
    },
    {
      id: "obchodni-rejstrik",
      icon: "registry",
      drawn: false,
      title: "Commercial register extract",
      description:
        "Commercial register extracts, deeds of incorporation and proof of legal personality.",
    },
    {
      id: "ostatni",
      icon: "documents",
      drawn: false,
      title: "Other official documents",
      description:
        "Judgments, certificates, medical reports and other papers for the authorities.",
    },
  ],
} as const;

/*
 * Revize 3. kolo (e-mail klientky, 29. 8. 2026): "Tlumočení pro autoškoly"
 * jelo dřív jen v EN mutaci (`enOnly: true`); klientka ho teď chce i v CS,
 * takže flag zmizel z obou souborů a `InterpretingSection.tsx` už nefiltruje.
 */
export const interpreting = {
  label: "Interpreting",
  title: "Court-appointed and general interpreting",
  description:
    "I interpret at court hearings, public authorities, notarial appointments, conferences and business meetings in Prague and across Bohemia. Clients value my responsiveness, helpful approach and calm, professional manner.",
  categories: [
    {
      id: "soudni",
      icon: "scale",
      title: "Court interpreting",
      description:
        "Interpreting at courts, public authorities and notarial appointments — including hearings, interviews and notarial acts that require a certified interpreter.",
    },
    {
      id: "autoskola",
      icon: "car",
      title: "Interpreting for driving schools",
      description:
        "Interpreting at driving-school examinations for foreign nationals, so that you understand both the questions and the procedure.",
    },
    {
      id: "konsekutivni-simultanni",
      icon: "mic",
      title: "Consecutive and simultaneous interpreting",
      description:
        "Interpreting at conferences, negotiations and company events, consecutively or simultaneously depending on the format.",
    },
    {
      id: "svatba",
      icon: "rings",
      title: "Wedding ceremony interpreting",
      description:
        "Interpreting at a wedding involving a foreign national, at a registry office or another venue, including help preparing the documents requested by the registry office.",
    },
  ],
  references: {
    intro: "Selected clients and partners",
    /* Revize 3. kolo: nový kratší seznam od klientky (17 jmen), viz home.ts. */
    items: [
      "UNYP",
      "CIEE",
      "Porat law firm",
      "Legato law firm",
      "act legal",
      "Brož, Sedlatý law firm",
      "Prague British International School",
      "Plato",
      "Elektrárny Opatovice",
      "Prime Homes Český Brod",
      "Grada",
      "SOS Children's Villages",
      "Embassy of Malaysia",
      "Airbnb",
      "Ininvest",
      "Sirena Film",
      "Insight law firm",
    ],
    logolessIntro: "Other clients include:",
    reviewsIntro: "More reviews are available on",
  },
  cta: QUOTE,
  photoAlt:
    "Mgr. Daniela Vránová interpreting from an interpreting booth at a conference",
} as const;

export const variants = {
  label: "Two certified formats",
  title: "A bound hard copy or an electronically signed PDF",
  items: [
    {
      id: "listinny",
      anatomy: "paper",
      title: "Hard-copy (bound) translation",
      description:
        "A paper translation permanently attached to the document, with a translator's clause, a round stamp and a signature.",
      bullets: [
        { text: "Depending on the receiving institution, I may need the original, a certified copy or a plain scan" },
        { text: "Bound with a ribbon and an adhesive label, it cannot be separated" },
        { text: "Handed over in person in Prague or sent by registered post" },
        { text: "If the translation must be bound to a physical document, send it to me or arrange an in-person handover" },
      ],
    },
    {
      id: "elektronicky",
      anatomy: "digital",
      title: "Electronic (digitally signed) certified translation",
      description:
        "A PDF with a qualified electronic signature and time stamp. It has the same legal validity as the hard-copy version.",
      notice:
        "The client must verify whether an electronic translation will be accepted for their specific purpose.",
      bullets: [
        { text: "A good scan or photo of the document is usually enough" },
        { text: "The translator's clause and the signature are part of the single PDF" },
        { text: "Delivered by e-mail; a printout is not valid as the electronic original" },
        {
          text: "Sometimes a good scan is enough, sometimes the authority requires ",
          link: {
            label: "an authorised document conversion",
            href: "https://www.ceskaposta.cz/sluzby/sluzby-egovernment/czechpoint/autorizovana-konverze-dokumentu",
          },
        },
        {
          text: "Sometimes the client already has an electronic original carrying a time stamp",
        },
      ],
    },
  ],
  note: "Not sure which one to choose? Find out exactly what the institution you will submit the document to requires.\nIf anything is unclear, I will explain it and help you decide.",
} as const;

/** Popisky k nákresům obou variant ověření. Zrcadlí `anatomy` v `home.ts`. */
export const anatomy = {
  paper: {
    title: "Anatomy of a hard-copy bound translation",
    labels: [
      "Certified copy or original",
      "Translation",
      "Translator's clause",
      "Round stamp",
      "Ribbon",
      "Adhesive label with signature",
    ],
  },
  digital: {
    title: "Anatomy of an electronic certified translation",
    labels: [
      "Scan of the original",
      "Translation",
      "Translator's clause",
      "Qualified electronic signature",
      "Qualified time stamp",
      "A single PDF, delivered by e-mail",
    ],
  },
} as const;

export const pricing = {
  label: "Price & turnaround",
  title: "How price and turnaround are calculated",
  description:
    "A fixed price list would be misleading. Two documents of the same length can differ in formatting, stamps, tables and the requirements of the receiving institution. Here is what determines the final quote.",
  columns: [
    {
      id: "podle-ceho",
      title: "What the price depends on",
      items: [
        "The length of the translation in standard pages",
        "The type of certification: hard copy or electronic",
        "The deadline you need; express costs more",
        "The number of copies required; an additional copy costs less",
        "The difficulty of the source: stamps, tables, handwriting",
      ],
    },
    {
      id: "normostrana",
      title: "What a standard page (SP) is",
      metric: { value: "1,800", unit: "characters incl. spaces" },
      lead: "Roughly 250 words. It is counted from the source document. For some certified translations, physical pages are quoted as well because of the formatting.",
      examples: [
        { doc: "Birth or marriage certificate", size: "approx. 1 SP" },
        { doc: "Criminal record extract", size: "approx. 1 SP" },
        { doc: "Diploma with supplement", size: "approx. 2 to 4 SP" },
        { doc: "Contract", size: "usually 5 to 15 SP" },
      ],
    },
    {
      id: "rychlost",
      title: "How quickly the quote arrives",
      lead: "I reply as soon as I have reviewed the document.",
      items: [
        "The standard turnaround for documents up to 5 pages is 3 working days.",
        "The quote is final. Any handling fee and postage are stated separately in advance.",
        "The agreed price and deadline will not change without consulting you.",
        "If you are in a hurry, I will tell you up front what I can realistically manage.",
      ],
    },
  ],
  interpretingPrice: {
    title: "How the price of interpreting is calculated",
    lead: "The rate depends on the type of interpreting:",
    rates: [
      "Registry office appointments and wedding ceremonies are charged at a fixed rate.",
      "Court and public-authority assignments have a base rate plus a surcharge for each additional hour or part thereof.",
      "Corporate interpreting by the half-day or the full day.",
    ],
    askLead: "Before I send a quote, I need to know:",
    items: [
      "The purpose and nature of the meeting",
      "The date, if it is already known",
      "The town where the interpreting will take place",
      "The specific office, court or institution",
    ],
  },
} as const;

export const process = {
  label: "How it works",
  title: "Five steps, no surprises",
  steps: [
    {
      number: "01",
      title: "Send the document",
      description:
        "Send a scan or photo by e-mail. Tell me where the document will be submitted and when you need it by.",
    },
    {
      number: "02",
      title: "Get a quote",
      description: "Free and non-binding.\nYou will know the price and deadline in advance.",
    },
    {
      number: "03",
      title: "Pay a deposit",
      description:
        "Once you approve the quote, I send a QR code or a proforma invoice. Payment can be made by bank transfer, in cash, or via PayPal, Wise or Revolut. The balance is paid on handover.",
    },
    {
      number: "04",
      title: "I translate",
      description:
        "I prepare the translation and attach the translator's clause. For the electronic version I add a qualified electronic signature and a time stamp.",
    },
    {
      number: "05",
      title: "I deliver on time",
      description:
        "For the hard copy I bind the document with the translation, add the stamp and my signature, and hand it over in person in Prague or send it by post. The electronic version goes out by e-mail.",
    },
  ],
} as const;

export const callToAction = {
  title: "Not sure about something?",
  description:
    "Tell me what document you need and when you need it by. I will reply with the price and deadline and explain the next steps.",
  cta: QUOTE,
  contactLabel: "Or get in touch directly",
} as const;

export const testimonials = {
  label: "References",
  title: "What clients say about me",
  items: [
    {
      id: "weerden",
      quote:
        "I have had an excellent experience working with Ms Vránová over many years. Her translations are accurate, of a high standard and prepared with great expertise. Legal terminology is translated with complete precision. She is always pleasant to work with and highly accommodating.",
      author: "JUDr. A. van der Weerden",
      role: "attorney-at-law",
    },
    {
      id: "dolezi",
      quote:
        "Our company, which specialises in technical and legal translations, has worked with Mgr. Daniela Vránová since early 2015. She always delivers legal translations on time and to a high standard. The cooperation is valuable to our business and thoroughly professional. She has translated 500 pages for us during that time, and I am happy to recommend her.",
      author: "Petr Doleží",
      role: "owner, HEDO Praha s.r.o.",
    },
    {
      id: "svozilek",
      quote:
        "I have worked with Ms Vránová on translations for many years and can recommend her services without hesitation. Her translations are consistently excellent and ready by the agreed deadline. I will continue to use Ms Vránová as my main translator and recommend her translation and interpreting services.",
      author: "Miroslav Svozílek",
      role: "entrepreneur / recruitment consultant, HAYS Czech Republic s.r.o.",
    },
    {
      id: "bursik",
      quote:
        "We have worked with Ms Vránová since 2015 on certified translations of contracts and extracts from public registers for our foreign partners. Although we are based outside Prague, the process is always quick and straightforward, and communication with Ms Vránová is consistently pleasant.",
      author: "Martin Buršík",
      role: "BURŠÍK CAPITAL s.r.o.",
    },
    {
      id: "kratochvilova",
      quote:
        "Ms Vránová approaches every translation with the utmost professionalism. Our repeated cooperation with Grada Publishing shows that she is a true professional with a feel for language, a strong sense of responsibility and respect for deadlines.",
      author: "Šárka Kratochvílová",
      role: "Grada",
    },
  ],
  reviewsNote: {
    before: "You will find all the reviews in full on",
    after: ".",
  },
} as const;

export const faq = {
  label: "FAQ",
  title: "What people ask most often",
  items: [
    // — 1. TRANSLATIONS (5 questions) —
    {
      id: "co-je-soudni-preklad",
      question: "What is a certified, sworn or official translation?",
      answer:
        "‘Certified translation’, ‘sworn translation’ and ‘official translation’ are commonly used terms for the same service in the Czech Republic. The translation is permanently attached to the source document and includes the translator's clause, signature and round official stamp. An electronic version is supplied as a PDF with a qualified electronic signature and time stamp. Both versions serve as officially certified translations; always check which format the receiving institution requires.",
    },
    {
      id: "cena",
      question: "How much does a certified translation cost and how is the price calculated?",
      answer:
        "I quote every assignment individually, free of charge and before you confirm anything. The price depends on the length of the source document in standard pages (1,800 characters including spaces, or roughly 250 words), your deadline and whether you need a hard-copy or electronic translation. A birth certificate, marriage certificate or criminal record extract is usually about one standard page, a diploma with its supplement two to four, and a typical contract five to fifteen.",
    },
    {
      id: "formaty-overeneho-prekladu",
      question: "In what format will I get the certified translation?",
      answer:
        "You can receive your certified translation in four formats, depending on what you need and on what the receiving institution accepts:",
      details: [
        {
          title: "Hard copy bound with the original document",
          text: "You provide the original document in person or by post. I bind it to the translation, add the translator's clause and official round stamp, and return the complete document in person, by post or by courier. For an in-person handover, I prefer Prague 3 near Flora.",
        },
        {
          title: "Hard copy bound with a copy of the document",
          text: "You provide a plain or officially certified copy, either physically or by e-mail. I bind the copy to the translation and add the translator's clause and round stamp. Before choosing this option, check whether the receiving institution will accept a translation attached to a copy rather than the original.",
        },
        {
          title: "Scanned copy of the bound translation sent by e-mail",
          text: "You send me a scan of the document. I print it, bind it to the translation, add the translator's clause and round stamp, then scan the complete document and send it to you by e-mail. Choose this option only if the receiving institution accepts a scan. The hard-copy version can be collected or posted later.",
        },
        {
          title: "Electronic certified translation (PDF with electronic signature)",
          text: "You send me the document by e-mail and receive a certified translation as a PDF with a qualified electronic signature and time stamp. The entire process is electronic. Before choosing this option, check whether the receiving institution accepts an electronic certified translation.",
        },
      ],
      disclaimer:
        "Which format and type of certification you will need differs from one authority to another and from country to country — I recommend checking directly in advance with the institution you will submit the document to.",
    },
    {
      /*
       * Zrcadlí `home.ts`: klientka na CS straně výslovně odmítla jakýkoli
       * slib "do 24 hodin" / "ještě dnes" (viz komentáře u `hero`/`about` v
       * `home.ts`). Dřívější EN znění tenhle slib dávalo, přestože ho CS verze
       * stejné položky nikdy nedávala – dvě mutace téhož podnikání tak
       * slibovaly něco jiného.
       */
      id: "termin",
      question: "How long does a certified translation take?",
      answer:
        "The standard turnaround for documents up to 5 pages is 3 working days. For shorter documents, I can often manage an express turnaround as well. With electronic translations, there is no delay for postal transit or personal collection. I always confirm the completion date in advance.",
    },
    {
      id: "apostila",
      question: "Do I need an apostille or superlegalisation?",
      answer:
        "That depends on the country and the institution receiving the document. If an apostille or superlegalisation is required, it is normally added to the original document before the translation is prepared, because it also needs to be translated. Tell me where the document will be submitted and I can help you establish the correct order of steps before you pay for anything unnecessarily. The receiving institution should always confirm its exact requirements.",
    },

    // — 2. INTERPRETING (5 questions) —
    {
      id: "kdy-soudni-tlumocnik",
      question: "When do I need a certified court interpreter?",
      answer:
        "A certified court interpreter is typically needed when a court, public authority or other official body is dealing with someone who does not understand Czech well enough to follow the proceedings. Common examples include court hearings, police interviews, notarial appointments, registry office appointments and weddings involving a foreign national, and certain residence or citizenship proceedings. The responsible institution decides whether a certified interpreter is required for your particular appointment.",
    },
    {
      /* Zrcadlí `tlumocnik-vs-prekladatel` v `home.ts` (viz komentář tam). */
      id: "tlumocnik-vs-prekladatel",
      question: "What is the difference between a certified interpreter and a certified translator?",
      answer:
        "A translator works with the written word – translating a document and adding the translator's clause and official stamp. An interpreter conveys the spoken word directly on site, at a hearing or a ceremony. I am appointed for both, so I can interpret in court, at the notary, or at a wedding, and also provide the certified translations of any documents the authority requires.",
    },
    {
      id: "tlumoceni-svatba-nutnost",
      question: "Is a certified interpreter mandatory for a wedding with a foreigner and how does it work?",
      answer:
        "If either partner does not understand Czech sufficiently, the registry office will normally require a certified court interpreter. I can interpret both the preparatory appointment at the registry office and the ceremony itself. I can also prepare certified translations of documents requested by the registry office, such as a birth certificate or certificate of no impediment to marriage. Confirm the exact requirements with the registry office arranging your ceremony.",
    },
    {
      id: "tlumoceni-cena",
      question: "How is certified interpreting priced and what affects the rate?",
      answer:
        "Registry office appointments and wedding ceremonies are charged at a fixed rate. Court, notarial and public-authority assignments have a base rate plus a surcharge for each additional hour or part thereof. Corporate and conference interpreting is usually quoted as a half-day or full-day booking. Once I know the purpose, date, location and institution involved, I will send you the exact rate, including any agreed travel costs.",
    },
    {
      id: "tlumoceni-online",
      question: "Do you interpret online, or is in-person attendance required?",
      answer:
        "I interpret online for meetings and consultations where remote participation is permitted, including many corporate meetings and preparatory calls. Courts, notaries and registry offices often require the interpreter to attend in person, but the rule depends on the institution and the type of appointment. Tell me what the meeting is and which institution is involved, and I will help you determine whether an online option is possible.",
    },
  ],
} as const;

export const contact = {
  label: "Contact",
  title: "Free, no-obligation quote",
  description:
    "Please let me know which document you need, where it needs to be submitted and by when. I will get back to you with the price and the turnaround.",
  fields: {
    name: { label: "Full name", placeholder: "Full name" },
    email: { label: "E-mail", placeholder: "you@email.com" },
    documentType: {
      label: "What do you need help with?",
      placeholder: "Choose an option",
      options: [
        "Interpreting",
        "Translation – birth or marriage certificate",
        "Translation – criminal record extract",
        "Translation – diploma and recognition of studies",
        "Translation – contract",
        "Translation – power of attorney",
        "Translation – commercial register extract",
        "Translation – other official document",
        "I am not sure, please advise",
      ],
    },
    deadline: {
      label: "When do you need it?",
      hint: "This is non-binding. Leave the field empty if you do not know yet.",
    },
    message: {
      label: "What do you need translated or interpreted?",
      placeholder:
        "E.g. a marriage certificate for the registry office in Prague, needed by 20 Aug. Or: interpreting at the registry office in Prague 3, ceremony on 12 Sep.",
    },
  },
  upload: {
    label: "Scan or photo of the document",
    dropText: "Drag a scan or a photo of the document here",
    hint: "PDF, JPG or PNG up to 10 MB. Optional, but it helps me prepare your quote faster.",
  },
  privacyNote:
    "Your details are used only to process your enquiry and are handled as described in the privacy policy.",
  submitLabel: "Send enquiry",
  status: {
    sending: "Sending…",
    success: "Thank you, your enquiry has been sent. I will get back to you shortly.",
    error:
      "The enquiry could not be sent. Please try again, or write directly to the e-mail above.",
  },
} as const;

export const footer = {
  position: "Certified English translator and interpreter in Prague.",
  columns: [
    {
      id: "sluzby",
      title: "Services",
      links: [
        { label: "Document types", href: "/en#sluzby" },
        { label: "Hard-copy translation", href: "/en#varianty" },
        { label: "Electronic translation", href: "/en#varianty" },
        { label: "Interpreting", href: "/en#tlumoceni" },
      ],
    },
    {
      id: "informace",
      title: "Information",
      links: [
        { label: "Price & turnaround", href: "/en#cena" },
        { label: "How it works", href: "/en#proces" },
        { label: "FAQ", href: "/en#faq" },
        {
          label: "Privacy policy",
          href: "/en/privacy-policy",
        },
        { label: "Terms & conditions", href: "/en/terms-and-conditions" },
      ],
    },
  ],
  qualifications: {
    title: "Credentials",
    items: [
      {
        label:
          "Certified translator and interpreter appointed by the Ministry of Justice",
        href: QUALIFICATIONS.ministry.href,
      },
      QUALIFICATIONS.chamber,
    ],
  },
  domains: ["soudni-anglictina.cz", "czech-translator.eu"],
  copyright: "© 2026 Mgr. Daniela Vránová",
  privacy: {
    label: "Privacy policy",
    href: "/en/privacy-policy",
  },
  terms: {
    label: "Terms & conditions",
    href: "/en/terms-and-conditions",
  },
} as const;

export const stickyBar = {
  call: { label: "Call", href: brand.phone.href },
  form: { label: "Free quote", href: "/en#kontakt" },
} as const;
