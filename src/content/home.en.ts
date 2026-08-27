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
 *   tlumočnická doložka        → certification clause
 *   matrika                    → registry office
 *   autorizovaná konverze      → authorised document conversion
 *
 * Slovo "digital" se o překladu nepoužívá, stejně jako se v české verzi
 * nepoužívá "digitální" (revize 2. kolo, bod 1) — jen "electronic".
 *
 * Tone of voice zůstává stejný: první osoba jednotného čísla, krátké věty,
 * konkrétní čísla místo přídavných jmen, žádný "team of professionals".
 *
 * Kotvy (`href: "#sluzby"`) se nepřekládají — `id` sekcí jsou v komponentách
 * a jsou pro obě mutace společné.
 * ---------------------------------------------------------------------------
 */

export const brand = {
  name: "Translations Vránová",
  person: "Mgr. Daniela Vránová",
  tagline: "Certified translations and interpreting from English. Prague, since 2004.",
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

const QUOTE = { label: "Free, no-obligation quote", href: "#kontakt" };

const QUALIFICATIONS = {
  ministry: {
    label: "Appointed by the Ministry of Justice",
    href: "https://seznat.justice.cz/",
  },
  chamber: {
    label:
      "Member of the Chamber of Court-Appointed Interpreters and Translators of the Czech Republic",
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
    { label: "Translations", href: "#sluzby" },
    { label: "Interpreting", href: "#tlumoceni" },
    { label: "Certification", href: "#varianty" },
    { label: "Price & turnaround", href: "#cena" },
    { label: "FAQ", href: "#faq" },
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
  eyebrow: "Certified translator and interpreter · Prague, since 2004",
  title: "Documents prepared exactly the way\nyou will need them.",
  description:
    "Certified translations and interpreting from English. Hard-copy or electronic certification. Price and turnaround agreed in advance.",
  primaryCta: QUOTE,
  secondaryCta: { label: "How it works", href: "#proces" },
  photoAlt: "Mgr. Daniela Vránová, certified translator and interpreter",
} as const;

export const trust = {
  label: "Credentials",
  title: "Why people come to me",
  lead: "Four entries in a register the authorities know.",
  items: [
    {
      id: "jmenovana",
      index: "I",
      title: QUALIFICATIONS.ministry.label,
      note: "Certified translator and interpreter for the English language",
    },
    {
      id: "komora",
      index: "II",
      title: "Chamber of Court-Appointed Interpreters and Translators",
      note: "Member since appointment",
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
  title: "Mgr. Daniela Vránová, certified interpreter for English",
  paragraphs: [
    "A court appointed me, and I am a member of the Chamber of Court-Appointed Interpreters and Translators of the Czech Republic. Following a recent change to the law on court interpreters and translators, I went through a relicensing process and was appointed by the Ministry of Justice.",
    "I do the work personally, so you speak directly with the person who translates, stamps and signs your document. I interpret at weddings, at the notary, in business meetings and in court, in Prague and across Bohemia.",
    "I deliver translations as a hard copy with an official seal or electronically as a PDF with a qualified signature. I always verify the requirements up front so the document meets all institution criteria.",
  ],
  stats: [
    { id: "jmenovani", value: YEAR_APPOINTED, suffix: "", label: "Appointed by the court" },
    { id: "praxe", value: YEARS_OF_PRACTICE, suffix: "", label: "Years of practice" },
  ],
  pullquote: "The document has to go through the first time. That is the whole job.",
  pullquoteNote:
    "I help people understand each other in all kinds of personal and professional situations.",
  badges: [QUALIFICATIONS.ministry, QUALIFICATIONS.chamber],
  cta: QUOTE,
  phoneCta: { label: brand.phone.label, href: brand.phone.href },
  ctaNote: "Send a scan or a photo of the document. I will write back with the price and the turnaround.",
  photoAlt:
    "Mgr. Daniela Vránová, certified translator and interpreter for the English language",
  video: {
    label: "On the record",
    title: "Interpreting a wedding ceremony, Havlíčkovy sady",
    note: "A ceremony in Havlíčkovy sady in Prague. I interpret after the registrar, for the couple and for the guests, without a script in hand and without holding up the ceremony.",
    description:
      "Footage from a wedding ceremony: Daniela Vránová stands next to the registrar and interprets the ceremony for the couple.",
    toggle: {
      legend: "Video treatment",
      mono: "Black & white",
      color: "Colour",
    },
    pause: "Pause video",
    play: "Play video",
  },
} as const;

export const services = {
  label: "Translations",
  title: "What I will translate for you",
  description:
    "Every job is quoted up front and free of charge. The price depends on the length of the document and on the deadline. You can have the translation as a hard copy or electronically.",
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
        "For employers, the trade licensing office and residence proceedings abroad.",
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
        "Purchase, lease, employment and commercial contracts, annexes included.",
    },
    {
      id: "plna-moc",
      icon: "signature",
      drawn: false,
      title: "Powers of attorney",
      description:
        "Powers of attorney for representation at public offices, at the notary and in court.",
    },
    {
      id: "obchodni-rejstrik",
      icon: "registry",
      drawn: false,
      title: "Commercial register extract",
      description:
        "Extracts, deeds of incorporation and proof of legal personality.",
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
 * "Tlumočení pro autoškoly" (`enOnly: true`) se vykresluje jen tady — podle
 * klientky dává smysl výhradně pro cizince skládající zkoušky v ČR, tedy
 * v anglické mutaci. Filtr je v `InterpretingSection.tsx`.
 */
export const interpreting = {
  label: "Interpreting",
  title: "Court and general interpreting",
  description:
    "I interpret in court, at public offices, at the notary, and at conferences and business meetings, in Prague and across Bohemia. Willingness, helpfulness and being easy to deal with are what clients mention most often.",
  categories: [
    {
      id: "soudni",
      icon: "scale",
      title: "Court interpreting",
      description:
        "Interpreting in court, at public offices and at the notary — hearings, examinations and notarial deeds, where a certified interpreter must be present.",
    },
    {
      id: "autoskola",
      icon: "car",
      enOnly: true,
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
        "Interpreting a wedding with a foreign national at the registry office or elsewhere, including help with the documents the registry office requires for the ceremony.",
    },
  ],
  references: {
    intro: "Among others, I have worked with:",
    items: [
      "UNYP",
      "CIEE",
      "Faculty of Social Sciences, Charles University",
      "Porat law firm",
      "Legato law firm",
      "Act legal",
      "Brož, Sedlatý law firm",
      "National Register of Qualifications, National Institute for Education (Europass, EQF, EQAVET)",
      "Prague British International School",
      "Brando Advertising Agency (now In the Company of Huskies)",
      "Plato",
      "Elektrárny Opatovice",
      "Prime Homes Český Brod",
      "Immigreat",
      "Visa guru",
      "Evropské noviny",
      "Insounder",
      "Grada publishing house",
      "SOS Children's Villages",
      "Embassy of Malaysia",
      "Airbnb",
      "Ininvest",
      "Sirena Film",
      "Insight law firm",
    ],
    logolessIntro: "I have also worked with:",
    reviewsIntro: "You will find more references on",
  },
  cta: QUOTE,
  photoAlt:
    "Mgr. Daniela Vránová interpreting from an interpreting booth at a conference",
} as const;

export const variants = {
  label: "Two ways to certify",
  title: "Paper with a ribbon, or a PDF with an electronic signature",
  items: [
    {
      id: "listinny",
      anatomy: "paper",
      title: "Hard-copy (bound) translation",
      description:
        "A paper translation permanently attached to the document, with a certification clause, a round seal and a signature.",
      bullets: [
        { text: "I need the original document or a certified copy" },
        { text: "Bound with a ribbon and a seal label, it cannot be taken apart" },
        { text: "Handed over in person in Prague or sent by registered post" },
        { text: "A scan by e-mail alone cannot be bound – I need the physical document, or we meet in person" },
      ],
    },
    {
      id: "elektronicky",
      anatomy: "digital",
      title: "Electronic (digitally signed) certified translation",
      description:
        "A PDF with a qualified electronic signature and a time stamp. The same legal validity as the hard copy.",
      bullets: [
        { text: "A good scan or photo of the document is usually enough" },
        { text: "The certification clause and the signature are part of the single PDF" },
        { text: "Delivered by e-mail; printing it out voids its validity" },
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
  note: "Not sure which one to choose? Find out exactly what the institution you will submit the document to requires. If anything is unclear, I will explain it and help you decide.",
} as const;

/** Popisky k nákresům obou variant ověření. Zrcadlí `anatomy` v `home.ts`. */
export const anatomy = {
  paper: {
    title: "Anatomy of a hard-copy bound translation",
    labels: [
      "Certified copy or original",
      "Translation",
      "Certification clause",
      "Round seal",
      "Ribbon",
      "Seal label with signature",
    ],
  },
  digital: {
    title: "Anatomy of an electronic certified translation",
    labels: [
      "Scan of the original",
      "Translation",
      "Certification clause",
      "Qualified electronic signature",
      "Qualified time stamp",
      "A single PDF, delivered by e-mail",
    ],
  },
} as const;

export const pricing = {
  label: "Price & turnaround",
  title: "How the price and the turnaround are calculated",
  description:
    "You will not find a price list here, because it would lie. Two documents of the same length differ in seals, tables and in where they have to go. Here is the whole calculation, so you know what to expect.",
  columns: [
    {
      id: "podle-ceho",
      title: "What the price depends on",
      items: [
        "The length of the translation in standard pages",
        "The type of certification: hard copy or electronic",
        "The deadline you need; express costs more",
        "The number of counterparts; a second copy is cheaper",
        "The difficulty of the source: seals, tables, handwriting",
      ],
    },
    {
      id: "normostrana",
      title: "What a standard page (SP) is",
      metric: { value: "1 800", unit: "characters incl. spaces" },
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
      lead: "Send a scan or a photo. The price and the turnaround come back free of charge and with no obligation.",
      items: [
        "The quote is final; nothing is added on top. If it is sent by post, the handling fee and postage are charged.",
        "What we agree on holds. You can rely on it completely.",
        "If you send a good scan or photo, I will prepare the translation from that file; you do not have to deliver the document in person.",
        "If you are in a hurry, I will tell you up front what I can realistically manage.",
      ],
    },
  ],
  interpretingPrice: {
    title: "How the price of interpreting is calculated",
    lead: "Interpreting cannot be quoted without context. Before I send you a price, I need to know four things:",
    items: [
      "What kind of meeting it is and what its purpose is",
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
        "A scan or a photo by e-mail. Tell me where the document is going and by when you need it.",
    },
    {
      number: "02",
      title: "Get a quote",
      description: "Free and non-binding. You know the price and the turnaround.",
    },
    {
      number: "03",
      title: "Pay a deposit",
      description:
        "Once you approve the quote, I send a QR code or a proforma invoice. The balance is paid on handover.",
    },
    {
      number: "04",
      title: "I translate",
      description:
        "I prepare the translation and attach the certification clause. For the electronic version I add a qualified electronic signature and a time stamp.",
    },
    {
      number: "05",
      title: "I deliver on time",
      description:
        "For the hard copy I bind the document with the translation, add the seal and my signature, and hand it over in person in Prague or send it by post. The electronic version goes out by e-mail.",
    },
  ],
} as const;

export const callToAction = {
  title: "Not sure about something?",
  description:
    "Write to me about the document and when you need it. I will get back to you with the price and the turnaround, and explain how the whole process works.",
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
        "I have had excellent experience with Ms Vránová over many years. Her translations are of high quality, accurate and prepared with great expertise. Legal terminology is translated with complete precision. Working with her is always pleasant and she accommodates me in everything.",
      author: "JUDr. A. van der Weerden",
      role: "attorney-at-law",
    },
    {
      id: "dolezi",
      quote:
        "Our limited liability company, which specialises in technical and legal translations, has been working with Mgr. Daniela Vránová since the beginning of 2015. She always delivers the legal translations she is given on time and to a high standard. Working with her is very useful and beneficial for our company, and thoroughly professional. Over that time she has translated 500 pages for us. I am happy to recommend her.",
      author: "Petr Doleží",
      role: "owner, HEDO Praha s.r.o.",
    },
    {
      id: "svozilek",
      quote:
        "I have been working with Ms Vránová on translations for a long time and I can recommend her services 100%. The translations are always of perfect quality and ready at the agreed time. I will continue to work with Ms Vránová as my main translator and I will recommend her translation and interpreting services.",
      author: "Miroslav Svozílek",
      role: "entrepreneur / recruitment consultant, HAYS Czech Republic s.r.o.",
    },
    {
      id: "bursik",
      quote:
        "We have been working with Ms Vránová since 2015 on all official translations of contracts and extracts from state registers for our foreign partners. Even though we are based outside Prague, the cooperation is always very fast and trouble-free, and communication with Ms Vránová is always pleasant.",
      author: "Martin Buršík",
      role: "BURŠÍK CAPITAL s.r.o.",
    },
    {
      id: "kratochvilova",
      quote:
        "Ms Vránová's approach to translation work and to the work she delivers is professional to the greatest possible degree. Given our repeated cooperation with the Grada Publishing house, it is clear that she is a genuine professional with a feel for language and a sense of responsibility and deadlines.",
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
    {
      id: "co-je-soudni-preklad",
      question: "What is a certified, sworn or official translation?",
      answer:
        "Three names for the same thing. A translation permanently attached to the document and carrying a certification clause, a round seal and the signature of a court-appointed interpreter. Authorities, courts and institutions recognise it as officially valid.",
    },
    {
      id: "svazany-vs-elektronicky",
      question: "What is the difference between a hard-copy and an electronic translation?",
      answer:
        "A hard-copy (bound) translation is physically attached to the document and is handed over in person or sent by post. An electronic translation is a PDF carrying a qualified electronic signature and a time stamp. It has the same legal validity and I deliver it by e-mail.",
    },
    {
      id: "formaty-overeneho-prekladu",
      question: "In what format will I get the certified translation?",
      answer:
        "You can receive a certified translation in four ways, depending on what you need and on what your authority will accept:",
      details: [
        {
          title: "Hard copy (original document, translation, seal)",
          text: "You give me the original document — in person or by post — and I bind it together with the translation, add the translator's certification clause and the seal. We can either meet in person (I prefer Prague 3, Flora) and I hand the translation over to you, or I can send it by post or courier (for an extra charge).",
        },
        {
          title: "Hard copy (copy of the document, translation, seal)",
          text: "You give me a copy of the document (a plain copy or a notarised one), either physically or by e-mail. I bind that copy — the one you deliver physically, or one I print from the e-mail — together with the translation, add the translator's certification clause and the seal. We can either meet in person (I prefer Prague 3, Flora) and I hand the translation over to you, or I can send it by post or courier (for an extra charge). Please make sure the authority you will submit the translation to accepts a document other than the original.",
        },
        {
          title: "Scan of the translation sent by e-mail",
          text: "You send me a scan of the document, I print it out and physically bind the translation to it, add the translator's certification clause and the seal. I then scan the whole thing and send it to you by e-mail. This option suits you if you need an electronic version quickly and you know that the authority you will submit the translation to accepts this form. (You can also collect the hard copy of the scanned document with the translation later.)",
        },
        {
          title: "Electronic (digitally signed) certified translation",
          text: "You send me the document by e-mail. You receive the certified translation as a PDF with a qualified electronic signature and a time stamp. This option is fully electronic. Before choosing it, please check that the authority you will submit the translation to accepts this format.",
        },
      ],
      disclaimer:
        "Which format and which type of certification you will need differs from one authority to another and from one country to another — we recommend checking it in advance directly with the institution you will submit the document to.",
    },
    {
      id: "cena",
      question: "How much does a certified translation cost?",
      answer:
        "I quote every job individually, which is why you will not find a price list on this website. The price depends on the length of the document in standard pages, on the deadline you need, and on whether you want a hard-copy or an electronic translation. Send me the document and you will get a free, non-binding quote, so you know the exact amount before you confirm anything.",
    },
    {
      id: "normostrana",
      question: "What is a standard page and how many does my document have?",
      answer:
        "A standard page is 1,800 characters including spaces, roughly 250 words, and it is counted from the source document. A birth certificate, a marriage certificate or a criminal record extract comes to about one standard page, a diploma with a supplement to two to four, an ordinary contract to five to fifteen.",
    },
    {
      id: "termin",
      question: "How long does it take?",
      answer:
        "The usual turnaround is 3 working days for documents up to 5 pages. For shorter documents I can also manage express delivery. I always confirm the deadline in advance.",
    },
    {
      id: "expres",
      question: "Can you do it by tomorrow?",
      answer:
        "For single-page documents, often yes — and with the electronic version there is no post and no handover to arrange. Write to me with the deadline you need and I will tell you whether I can make it before you place the order.",
    },
    {
      id: "original",
      question: "Do I have to provide the original document?",
      answer:
        "This is not something I can answer for you; it has to be checked with the institution you will submit the translation to. Sometimes a plain copy is enough, sometimes a certified one, sometimes the original is required. It is the same with an electronic translation. Sometimes a scan is enough, sometimes an authorised document conversion is needed, and sometimes your original is issued electronically in the first place.",
    },
    {
      id: "apostila",
      question: "Do I need an apostille or superlegalisation?",
      answer:
        "It depends on the country and on the institution receiving the document. An apostille is obtained on the original before the translation, not after it. Write to me where the document is headed and I will advise you on the order of the steps before you pay for anything unnecessary.",
    },
    {
      id: "uznani-elektronickeho",
      question: "Will the authority accept an electronic translation?",
      answer:
        "An electronic translation with a qualified electronic signature has the same legal validity as a hard copy. Some institutions, however, still require paper. So always check in advance what the authority in question will ask of you.",
    },
    {
      id: "jak-poslat",
      question: "How do I send you the document securely?",
      answer:
        "An e-mail attachment or the form on this page is enough. I use documents solely to prepare the translation and I do not pass them on to anyone.",
    },
    {
      id: "tlumoceni-kde",
      question: "Do you interpret outside Prague?",
      answer:
        "Yes, I interpret in Prague and across Bohemia. For more distant locations I add travel costs to the price, and you know them in advance.",
    },
    {
      id: "svatba",
      question: "What do we need if a Czech is marrying a foreign national?",
      answer:
        "The registry office usually asks for a certified translation of the birth certificate and of the certificate of marital status, and for a certified interpreter to be present at the ceremony. Write to me with the date of the ceremony and the registry office where you are getting married, and I will go through the list of documents with you.",
    },
  ],
} as const;

export const contact = {
  label: "Contact",
  title: "Free, no-obligation quote",
  description:
    "Write to me about the document, where you need to submit it and by when. I will get back to you with the price and the turnaround.",
  fields: {
    name: { label: "Full name", placeholder: "Full name" },
    email: { label: "E-mail", placeholder: "you@email.com" },
    documentType: {
      label: "Type of document",
      placeholder: "Choose a type of document",
      options: [
        "Birth or marriage certificate",
        "Criminal record extract",
        "Diploma and recognition of studies",
        "Contract",
        "Power of attorney",
        "Commercial register extract",
        "Interpreting",
        "Other official document",
        "I am not sure, please advise",
      ],
    },
    deadline: {
      label: "Deadline you need",
      hint: "Non-binding. If you do not know the date, leave the field empty.",
    },
    message: {
      label: "What document is it and where do you need it?",
      placeholder:
        "E.g. a marriage certificate for the registry office in Prague, needed by 20 August.",
    },
  },
  upload: {
    label: "Scan or photo of the document",
    dropText: "Drag a scan or a photo of the document here",
    hint: "PDF, JPG or PNG up to 10 MB. Optional, but it speeds the quote up.",
  },
  privacyNote:
    "I use your details only to answer your enquiry. I do not pass them on to anyone.",
  submitLabel: "Send enquiry",
} as const;

export const footer = {
  position: "Certified translator and interpreter for the English language, Prague.",
  columns: [
    {
      id: "sluzby",
      title: "Services",
      links: [
        { label: "Types of document", href: "#sluzby" },
        { label: "Hard-copy translation", href: "#varianty" },
        { label: "Electronic translation", href: "#varianty" },
        { label: "Interpreting", href: "#tlumoceni" },
      ],
    },
    {
      id: "informace",
      title: "Information",
      links: [
        { label: "Price & turnaround", href: "#cena" },
        { label: "How it works", href: "#proces" },
        { label: "FAQ", href: "#faq" },
        { label: "Personal data protection", href: "#gdpr" },
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
  privacy: { label: "Personal data protection policy", href: "#gdpr" },
} as const;

export const stickyBar = {
  call: { label: "Call", href: brand.phone.href },
  form: { label: "Free quote", href: "#kontakt" },
} as const;
