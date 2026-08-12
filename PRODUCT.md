# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: individuals in a stressful, unfamiliar administrative moment — marrying a foreigner, having a foreign diploma recognized, applying for residency, or involved in a court matter — who need a certified translation an institution will accept on the first try and don't know the rules (what "listinný" vs. "digitální" means, what it costs, how long it takes).

Secondary: businesses and professionals with recurring translation needs (law firms, companies needing contracts/registry extracts translated, HR/recruitment agencies, a publisher). Real, named testimonials in `content/home.ts` are from this group (a law firm partner, HEDO Praha, HAYS Czech Republic, Buršík Capital, Grada Publishing) — they are evidence of trust, not the primary voice the site writes to.

## Product Purpose

Certified (soudní/ověřený) English↔Czech translation and interpreting by Mgr. Daniela Vránová, a court-appointed judicial interpreter in Prague, practicing since 2003. The product is not "a translation" — it's certainty that the resulting document will be accepted by the institution the visitor is dealing with, on the first submission.

**Success metric (confirmed, overrides an earlier internal assumption):** grow the total number of inquiries/clients — expand reach, not just filter for higher-quality leads. The site should still explain price drivers and turnaround up front (removing friction that would otherwise lose an inquiry), but the goal is more clients, not fewer-but-better ones. Note: this is the opposite of what an earlier project memory recorded ("cíl webu je filtrovat, ne expandovat") — that memory is now superseded by this confirmed answer and should inform, not block, future copy/CTA decisions aimed at conversion volume.

## Positioning

The one artifact that exists only in this profession — the round court-interpreter's stamp (kulaté razítko) — is the site's signature motif and its truthful claim: a document processed here carries a legal seal no generic translation agency can offer. Positioning is built on personal accountability (she personally translates, stamps, and signs — "mluvíte přímo s tím, kdo váš dokument překládá"), not on scale, speed marketing, or a sales team ("nikdy náš tým").

## Operating Context

- Visitor typically arrives via search while already holding a specific document (birth/marriage certificate, criminal-record extract, diploma, contract, power of attorney, court judgment) and needing to know fast: what it costs, how long it takes, and whether this person can be trusted.
- Two output formats with equal legal validity, always presented as two distinct, equal options: **listinný** (bound paper original with cord, seal, wet signature — delivered in person in Prague or by registered mail) and **digitální** (PDF with qualified electronic signature and timestamp — delivered by email).
- Pricing is never quoted as a price list; every job is quoted individually after the client sends a scan/photo of the document, via "Nezávazné nacenění (zdarma)" (never called "Konzultace"). This is deliberate client policy, not a missing feature.
- Interpreting is delivered in person: weddings, notary appointments, hearings, and court proceedings, nationwide in Czechia.
- Two domains point at the same site: soudni-anglictina.cz and czech-translator.eu.
- Currently Czech-only; an English mutation is planned with identical structure/components (not a shortened version) via `content/home.en.ts` and `app/[locale]/page.tsx`.

## Capabilities and Constraints

- Document types translated: birth/marriage certificates, criminal-record extracts, diplomas (incl. nostrification), contracts, powers of attorney, commercial-register extracts, court judgments, medical reports, and other official documents.
- Solo practice — one person does the translating, stamping, and signing; no team, no outsourcing.
- Turnaround language must stay generic ("termín potvrdím předem" / confirmed per job) — no specific day-count promise on the site until the client explicitly approves one; existing draft copy has `[doplnit]` placeholders for this that must not ship unresolved.
- Never states JTP (Jednota tlumočníků a překladatelů) membership — she is no longer a member. Only: "soudní tlumočnice jmenovaná soudem" and "členka Komory soudních tlumočníků ČR."
- Never offers book/literary translation (past service, discontinued).
- No price list or "prices from…" language anywhere on the site — explicit, confirmed client decision.
- Forbidden vocabulary (brief-mandated): "komplexní řešení", "individuální přístup", "tým profesionálů", "kvalita je naše priorita", "těšíme se na spolupráci."
- Voice: formal "vykání," first-person singular ("překládám", "ověřuji" — never "náš tým"), short sentences, concrete numbers/dates over adjectives, no legal jargon, no apologizing or overselling.
- Contact form has no working submit yet (`type="button"`); service subpages don't exist yet (header/card links go to anchors, not `/sluzby/...`); site is currently `noindex` until launch-ready.

## Brand Commitments

- Name: Překlady Vránová (Mgr. Daniela Vránová). Domains: soudni-anglictina.cz, czech-translator.eu.
- Fonts: Playfair Display (display, weight 400 only, 500 on navy, never below 20px, never 600+) + DM Sans (everything else). Exactly two fonts — no third.
- One action color `#0B57D0`; navy `#0B1F3A` appears at most twice per page (currently hero + footer); sky `#29ABE2` capped at ~5% of area, never on text/buttons.
- Signature element: a crow (vrána), used in exactly three places (section divider, seal/logo, hero drawing) — a fourth use is decoration and gets removed. Current logo silhouette is a gull, not a crow, and is explicitly a working placeholder pending client sign-off on a redesigned direction (crow inside a circular stamp motif).
- Full detail lives in `STYLEGUIDE_soudni-anglictina.md` (v1.2) — the binding visual/design authority for this project; this PRODUCT.md does not duplicate it.

## Evidence on Hand

- Real, named testimonials already written into `content/home.ts`: JUDr. A. van der Weerden (advokát), Petr Doleží (HEDO Praha s.r.o.), Miroslav Svozílek (HAYS Czech Republic), Martin Buršík (Buršík Capital s.r.o.), Šárka Kratochvílová (Grada Publishing). Consent-to-publish for these has not been separately confirmed in this session — verify before launch.
- One usable photo: `public/foto/daniela-vranova.png` (dark background, alpha channel — works for hero and the 4:5 About portrait). All other supplied photos show wedding guests' faces and are excluded by the image policy (no third-party faces).
- Missing: documentary detail shots (stamp, signature, bound/corded translation, paper, hands) — `MediaPlaceholder` component marks where these go (`[data-placeholder]` in DevTools).
- Hero background is a placeholder navy gradient; real video clips exist in `daniela vranova images/background video/` but are 7–106MB and need trimming/compression before they can ship without breaking the <2s load target.
- Delivery-time commitment is not yet confirmed by the client — draft copy has `[doplnit]` placeholders that must not go live unresolved.
- Domain access (soudni-anglictina.cz via FORPSI) is not yet transferred/shared through a secure channel.

## Product Principles

1. Answer price and turnaround logic before the visitor reaches the contact form — the form is not a substitute for information the site should already give.
2. Every claim of authority must be true and checkable: court-appointed status, chamber membership, years of practice (computed from the appointment year, never hand-typed) — nothing overstated, nothing apologized for.
3. Listinný and digitální are always presented as two equal, clearly separated options — never one framed as the "real" one and the other as a shortcut.
4. Personal, solo accountability is the differentiator — the site speaks in the first person as the one person doing the work, not as an agency or team.
5. Individuals in a stressful one-off moment are who the site is written for; business/repeat clients are welcome and evidenced via testimonials, but don't take over the voice or structure.

## Accessibility & Inclusion

Responsive down to 360px, visible focus on every interactive element, full keyboard operability, WCAG AA contrast (4.5:1 minimum) on all text — including text over hero video/photo, which always sits on a navy gradient overlay to guarantee it. `prefers-reduced-motion` replaces the hero video with its poster frame and disables scroll-reveal animation.
