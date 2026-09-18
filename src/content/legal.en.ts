import type { LegalDocument } from "./legal";

const EFFECTIVE_DATE = "18 September 2026";

export const privacyPolicyEn: LegalDocument = {
  eyebrow: "Legal information",
  title: "Privacy policy",
  updated: EFFECTIVE_DATE,
  intro: [
    "This policy explains what personal data I process through soudni-anglictina.cz and czech-translator.eu, why I process it and what rights you have. It is governed by Regulation (EU) 2016/679 (the GDPR) and Czech Act No. 110/2019 Coll., on the Processing of Personal Data.",
  ],
  sections: [
    {
      id: "controller",
      title: "Who is responsible for your data",
      paragraphs: [
        "I am the controller of the personal data you provide through this website, by e-mail or by telephone:",
      ],
      list: [
        "Mgr. Daniela Vránová",
        "Company ID (IČO): 69605726",
        "registered place of business: Křišťanova 1789/17, Žižkov, 130 00 Prague 3, Czech Republic",
        "e-mail: daniela.vranova@seznam.cz",
        "telephone: +420 604 750 796",
      ],
    },
    {
      id: "data-and-purpose",
      title: "What data I process and why",
      paragraphs: [
        "Enquiry form and e-mail communication. When you contact me through the enquiry form or by e-mail, I process your name, e-mail address, telephone number if provided, and the contents of your message, including the document type, requested deadline and assignment details. If you attach a scan or photograph of a document, I also process the personal data contained in it. I use this information solely to assess, quote and prepare your assignment. The legal basis is taking steps before entering into a contract and performing a contract (Article 6(1)(b) GDPR), or my legitimate interest in responding to your enquiry (Article 6(1)(f) GDPR).",
        "Fulfilling the assignment and invoicing. If we work together, I also process billing details, such as your name or business name, address and, where applicable, company and VAT numbers, as well as information needed to complete and deliver the translation or interpreting service. The legal basis is performance of a contract (Article 6(1)(b) GDPR) and compliance with legal obligations, particularly accounting and tax obligations (Article 6(1)(c) GDPR).",
        "Telephone enquiries. If you call me, I process your telephone number and the contents of the call to the extent necessary to deal with your enquiry. The same legal bases apply as for the enquiry form.",
        "I do not use your data for automated decision-making or profiling.",
      ],
    },
    {
      id: "cookies",
      title: "Cookies and analytics",
      paragraphs: [
        "This website does not use tracking cookies. I measure aggregate website traffic using Plausible Analytics, which operates without cookies and does not track individual visitors. Fonts are served from the website itself rather than loaded from Google Fonts.",
      ],
    },
    {
      id: "recipients",
      title: "Who can access your data",
      paragraphs: [
        "I do not sell your data or share it with third parties for marketing. Service providers used to run the website and my business may process data on my behalf. These include the hosting and e-mail providers, Web3Forms as the provider handling enquiry-form submissions, and, where applicable, an external accountant. If you pay through PayPal, PayPal (Europe) S.à r.l. et Cie, S.C.A. processes the payment information under its own privacy policy; I do not receive your card or bank-account details.",
        "I use appropriate contractual safeguards with processors as required by the GDPR. Where a provider processes data outside the European Economic Area, the transfer must be protected by an applicable legal safeguard, such as the European Commission's standard contractual clauses. Because enquiry attachments may contain sensitive information, send only the pages needed for a quote whenever possible.",
      ],
    },
    {
      id: "retention",
      title: "How long I keep your data",
      paragraphs: [
        "I keep information from an enquiry that does not lead to an assignment for no longer than 12 months after our last contact. Information connected with a completed assignment and accounting records is retained for the period required by law, generally up to 10 years after the end of the relevant accounting or tax period. I securely delete scans and photographs supplied for a quote or translation after the assignment is completed or the enquiry retention period expires, unless a legal obligation requires otherwise.",
      ],
    },
    {
      id: "rights",
      title: "Your rights",
      paragraphs: ["Depending on the circumstances, you have the right to:"],
      list: [
        "request access to the personal data I process about you,",
        "have inaccurate or incomplete data corrected,",
        "request deletion where there is no longer a legal reason to retain the data,",
        "request restriction of processing,",
        "receive data you provided on the basis of a contract in a portable format,",
        "object to processing based on my legitimate interests,",
        "lodge a complaint with the Czech Office for Personal Data Protection (Úřad pro ochranu osobních údajů), Pplk. Sochora 27, 170 00 Prague 7, www.uoou.cz.",
      ],
    },
    {
      id: "contact",
      title: "How to exercise your rights",
      paragraphs: [
        "To exercise any of these rights, e-mail daniela.vranova@seznam.cz or call +420 604 750 796. I will respond without undue delay and no later than one month after receiving your request.",
      ],
    },
    {
      id: "updates",
      title: "Updates to this policy",
      paragraphs: [
        `I may update this policy when legislation or the way the website operates changes. The current version will always be available on this page. This policy is effective from ${EFFECTIVE_DATE}.`,
      ],
    },
  ],
};

export const termsAndConditionsEn: LegalDocument = {
  eyebrow: "Legal information",
  title: "Terms and conditions",
  updated: EFFECTIVE_DATE,
  intro: [
    "These terms apply to certified translation and interpreting services ordered from me by telephone, e-mail or through the enquiry form on soudni-anglictina.cz. The contractual relationship is governed by Czech law, particularly Act No. 89/2012 Coll., the Czech Civil Code, and, for consumers, Act No. 634/1992 Coll., on Consumer Protection.",
  ],
  sections: [
    {
      id: "provider",
      title: "Service provider",
      paragraphs: ["Certified translation and interpreting services are provided by:"],
      list: [
        "Mgr. Daniela Vránová",
        "Company ID (IČO): 69605726",
        "registered place of business: Křišťanova 1789/17, Žižkov, 130 00 Prague 3, Czech Republic",
        "a sole trader registered in the Czech Trade Licensing Register; not registered for VAT",
        "a certified English translator and interpreter appointed by the Czech Ministry of Justice and a member of the Chamber of Court-Appointed Interpreters and Translators of the Czech Republic",
        "e-mail: daniela.vranova@seznam.cz; telephone: +420 604 750 796",
      ],
    },
    {
      id: "order",
      title: "Enquiries and formation of the contract",
      paragraphs: [
        "You can send an enquiry through the website, by e-mail or by telephone. Based on the document or assignment details you provide, I will send you a non-binding quote and proposed deadline. A contract is formed when you accept the quoted price, scope and deadline, including by a simple confirmation by e-mail. Unless stated otherwise, the quote is valid for 30 days from the date it is sent.",
      ],
    },
    {
      id: "price",
      title: "Price and payment",
      paragraphs: [
        "Prices are calculated individually according to the length and complexity of the document and the requested deadline. I confirm the final price before starting work and will not change it without your agreement.",
        "Payment can be made in Czech koruna (CZK) or euros (EUR):",
      ],
      list: [
        "in cash,",
        "by bank transfer to the account shown on the invoice,",
        "through PayPal.",
      ],
    },
    {
      id: "delivery",
      title: "Delivery and deadlines",
      paragraphs: [
        "A certified translation can be supplied as a hard copy, bound to the original document or a copy and bearing the certification clause, round seal and signature, or electronically as a PDF with a qualified electronic signature and time stamp. The receiving institution determines which form it accepts, so you should confirm its requirements before choosing a format. I confirm the delivery deadline with you as part of the quote. If a delay for which I am responsible becomes likely, I will inform you promptly.",
      ],
    },
    {
      id: "withdrawal",
      title: "Cancellation and consumer withdrawal rights",
      paragraphs: [
        "If you are a consumer and the contract is concluded at a distance, Czech law generally gives you 14 days to withdraw. Statutory exceptions may apply to a service or product prepared to your individual requirements. If you expressly ask me to begin providing the service before the withdrawal period expires, your right to withdraw may be affected once the service has been fully performed. The application of these rules depends on the particular assignment and applicable law.",
        "You may cancel the order free of charge before I begin work. If you cancel after work has started, I may charge a proportionate amount for work already completed.",
      ],
    },
    {
      id: "complaints",
      title: "Complaints and defective performance",
      paragraphs: [
        "I am responsible for delivering the translation in accordance with the agreed instructions and without substantive or language errors. If you identify an error, contact me without undue delay, describe the issue and provide the relevant document. I will deal with the complaint, including any required correction, within 30 days unless we expressly agree on a longer period. Consumer complaints are governed by the applicable provisions of the Czech Civil Code and Consumer Protection Act.",
      ],
    },
    {
      id: "confidentiality",
      title: "Confidentiality and personal data",
      paragraphs: [
        "As a certified court interpreter and translator, I am bound by the statutory duty of confidentiality under Czech Act No. 354/2019 Coll., on Court Interpreters and Translators. This duty also covers the contents of documents you send for translation. The separate Privacy Policy explains how I process personal data.",
      ],
    },
    {
      id: "disputes",
      title: "Alternative dispute resolution",
      paragraphs: [
        "If you are a consumer and we cannot resolve a dispute by agreement, you may submit a proposal for alternative dispute resolution to the Czech Trade Inspection Authority (Česká obchodní inspekce), Štěpánská 567/15, 120 00 Prague 2, Czech Republic, www.coi.cz. The former European Online Dispute Resolution platform was discontinued in 2025 and is therefore not listed as a dispute-resolution channel.",
      ],
    },
    {
      id: "final",
      title: "Final provisions",
      paragraphs: [
        `Matters not covered by these terms are governed by Czech law. I may update these terms when legislation or my services change, but an accepted assignment is governed by the version in force when the order was confirmed. These terms are effective from ${EFFECTIVE_DATE}.`,
      ],
    },
  ],
};
