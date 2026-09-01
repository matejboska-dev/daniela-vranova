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
  title: "Documents and interpreting\nprepared exactly the way\nyou will need them.",
  description:
    "Certified translations and interpreting from English. Hard-copy or electronic certification.\nPrice and turnaround agreed in advance.",
  primaryCta: QUOTE,
  translationsCta: { label: "Translations", href: "#sluzby" },
  interpretingCta: { label: "Interpreting", href: "#tlumoceni" },
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
    "I prepare translations as a hard copy with an official seal or electronically as a PDF with a qualified signature. I help people communicate in a wide variety of personal and professional situations.",
  ],
  stats: [
    { id: "jmenovani", value: YEAR_APPOINTED, suffix: "", label: "Appointed by the court" },
    { id: "praxe", value: YEARS_OF_PRACTICE, suffix: "", label: "Years of practice" },
  ],

  badges: [QUALIFICATIONS.ministry, QUALIFICATIONS.chamber],
  cta: QUOTE,
  phoneCta: { label: brand.phone.label, href: brand.phone.href },
  ctaNote: "Send a scan or a photo of the document. I will write back with the price and the turnaround.",
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
 * Revize 3. kolo (e-mail klientky, 29. 8. 2026): "Tlumočení pro autoškoly"
 * jelo dřív jen v EN mutaci (`enOnly: true`); klientka ho teď chce i v CS,
 * takže flag zmizel z obou souborů a `InterpretingSection.tsx` už nefiltruje.
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
    /* Revize 3. kolo: nový kratší seznam od klientky (17 jmen), viz home.ts. */
    items: [
      "UNYP",
      "CIEE",
      "Porat law firm",
      "Legato law firm",
      "Act legal",
      "Brož, Sedlatý law firm",
      "Prague British International School",
      "Plato",
      "Elektrárny Opatovice",
      "Prime Homes Český Brod",
      "Grada",
      "SOS Children's Villages",
      "Embassy of Malaysia",
      "Air BNB",
      "Ininvest",
      "Sirena Film",
      "Insight law firm",
    ],
    logolessIntro: "I have worked with, for example:",
    reviewsIntro: "You will find more references on",
  },
  cta: QUOTE,
  photoAlt:
    "Mgr. Daniela Vránová interpreting from an interpreting booth at a conference",
} as const;

export const variants = {
  label: "Two ways to certify",
  title: "Paper with a ribbon or a PDF with an electronic signature",
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
        { text: "A scan by e-mail alone cannot be bound – I need the physical document or an in-person meeting" },
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
  note: "Not sure which one to choose? Find out exactly what the institution you will submit the document to requires.\nIf anything is unclear, I will explain it and help you decide.",
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
      lead: "I write back as soon as I have seen the document.",
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
    lead: "The rate depends on the type of interpreting:",
    rates: [
      "A registry-office ceremony is charged per act.",
      "In court and at public offices, a base rate plus a surcharge for every additional hour started.",
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
        "A scan or a photo by e-mail. Tell me where the document is going and by when you need it.",
    },
    {
      number: "02",
      title: "Get a quote",
      description: "Free and non-binding.\nYou know the price and the turnaround.",
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
    // — 1. TRANSLATIONS (5 questions) —
    {
      id: "co-je-soudni-preklad",
      question: "What is a certified, sworn or official translation?",
      answer:
        "Three names for the same thing: an official translation produced by a court-appointed translator appointed by the Ministry of Justice of the Czech Republic. It is inextricably bound to the source document and accompanied by a translator's certification clause, signature, and round official seal (or a qualified electronic signature with a time stamp). Courts, public authorities, police, universities, and foreign institutions recognise it as a legally binding document.",
    },
    {
      id: "cena",
      question: "How much does a certified translation cost and how is the price calculated?",
      answer:
        "I quote every assignment individually in advance and free of charge, which is why there is no generic price list on the website. The price depends on the number of standard pages (1 standard page = 1,800 characters including spaces, approx. 250 words) calculated from the source document, the document type, the deadline, and whether you choose a hard-copy or electronic format. Standard documents such as birth, marriage, or criminal record certificates are usually 1 standard page, university diplomas with transcripts 2 to 4 pages, and contracts 5 to 15 pages.",
    },
    {
      id: "formaty-overeneho-prekladu",
      question: "In what format will I get the certified translation?",
      answer:
        "You can receive your certified translation in four formats, depending on what you need and on what the receiving institution accepts:",
      details: [
        {
          title: "Hard copy bound with the original document",
          text: "You provide me with the original document — in person or by post. I permanently bind it with a tricolour ribbon to the translation, add the translator's certification clause and the official round seal. We can meet in person (preferably Prague 3, Flora) or I can send it by registered post or courier.",
        },
        {
          title: "Hard copy bound with an officially certified copy",
          text: "You provide an officially certified copy (from a notary or Czech POINT), either physically or by e-mail. I bind this copy with the translation and add the round seal. This option is ideal when you need to keep your original document (such as a birth certificate or diploma).",
        },
        {
          title: "Scanned copy of the bound translation sent by e-mail",
          text: "I prepare, bind, and seal the hard-copy translation and immediately send you a high-resolution colour scan via e-mail for fast preliminary submission, while the physical original can be collected or posted later.",
        },
        {
          title: "Electronic certified translation (PDF with electronic signature)",
          text: "You send me the document by e-mail. You receive a single PDF containing the document scan, translation, certification clause, qualified electronic signature, and qualified time stamp pursuant to Act No. 354/2019 Coll. It has the same legal validity as a hard-copy translation.",
        },
      ],
      disclaimer:
        "Which format and type of certification you will need differs from one authority to another and from country to country — I recommend checking directly in advance with the institution you will submit the document to.",
    },
    {
      id: "termin",
      question: "How long does a certified translation take and do you offer express delivery?",
      answer:
        "The standard turnaround for common documents up to 5 pages is 2 to 3 working days. For shorter certificates (birth certificates, registry extracts), express turnaround within 24 hours or same-day delivery is available upon agreement. With electronic translations, there is no delay for postal transit or personal collection. I always confirm the exact completion date in advance.",
    },
    {
      id: "apostila",
      question: "Do I need an apostille or superlegalisation, and do I have to submit the original?",
      answer:
        "It depends on the country of issue and the destination of the document. Within the EU, higher authentication is generally not required; countries party to the Hague Convention require an apostille, and other countries require superlegalisation. Important rule: an apostille or superlegalisation must be affixed to the original document BEFORE the certified translation is made, as it must be translated as part of the document. Write to me where your document is headed and I will advise you on the proper order of steps.",
    },

    // — 2. INTERPRETING (5 questions) —
    {
      id: "kdy-soudni-tlumocnik",
      question: "When is a certified (court-appointed) interpreter legally required?",
      answer:
        "The presence of a court-appointed interpreter appointed by the Ministry of Justice is mandatory by law for all official legal proceedings where any participant is not fluent in Czech. Typical situations include court hearings and police interrogations, notarial proceedings (incorporating companies, notarial deeds, powers of attorney), civil weddings with a foreign national at the registry office, residency and immigration hearings (OAMP / Foreign Police), and driving licence exams for foreigners.",
    },
    {
      id: "tlumoceni-svatba-nutnost",
      question: "Is a certified interpreter mandatory for a wedding with a foreigner and how does it work?",
      answer:
        "Yes, if either the bride, groom, or a witness does not speak Czech fluently, the registry office legally requires a certified court interpreter. I interpret both the preparatory paperwork meeting at the registry office and the wedding ceremony itself (officiant's speech, vows, questions). After the ceremony, the interpreter signs the official marriage protocol along with the couple, witnesses, and officiant. I can also provide certified translations of all required foreign documents in advance (birth certificate, certificate of no impediment to marriage).",
    },
    {
      id: "tlumoceni-notar-soud",
      question: "How does court interpreting work at a notary, public authority, or court?",
      answer:
        "Interpreting is performed consecutively — the speaker (notary, judge, or lawyer) speaks in sections, which I translate accurately into English (and the client's responses back into Czech). I review all documentation in advance (draft contracts, powers of attorney, notarial deeds, indictments) to ensure precise legal terminology. The interpreter validates the legal act by signing and sealing the official record.",
    },
    {
      id: "tlumoceni-cena",
      question: "How is certified interpreting priced and what affects the rate?",
      answer:
        "Wedding ceremonies at registry offices are charged as a fixed fee per ceremony. For notaries, public authorities, courts, or police, a base fee per assignment applies plus an hourly surcharge for each subsequent hour started. Corporate and conference interpreting is quoted as a half-day or full-day block. For assignments outside Prague, pre-agreed travel expenses and travel time compensation are added.",
    },
    {
      id: "tlumoceni-online",
      question: "What is the difference between consecutive and simultaneous interpreting, and do you interpret online?",
      answer:
        "In consecutive interpreting, the speaker pauses after a few sentences for the interpreter to translate (ideal for notaries, weddings, courts, and business meetings). In simultaneous interpreting, the interpreter speaks concurrently from a booth into participants' headphones (conferences, lectures). Online interpreting (Zoom, MS Teams, etc.) is available for corporate meetings, consultations, and training; however, for official legal acts (notarial deeds, weddings, court hearings), Czech law generally mandates physical in-person attendance.",
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
      label: "Deadline you need",
      hint: "Non-binding. If you do not know the date, leave the field empty.",
    },
    message: {
      label: "What document or meeting is it?",
      placeholder:
        "E.g. a marriage certificate for the registry office in Prague, needed by 20 Aug. Or: interpreting at the registry office in Prague 3, ceremony on 12 Sep.",
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
