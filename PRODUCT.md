# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: individuals in a stressful, unfamiliar administrative moment — marrying a foreigner, having a foreign diploma recognized, applying for residency, or involved in a court matter — who need a certified translation an institution will accept on the first try and don't know the rules (what "listinný" vs. "elektronický" means, what it costs, how long it takes).

Secondary: businesses and professionals with recurring translation needs (law firms, companies needing contracts/registry extracts translated, HR/recruitment agencies, a publisher). Real, named testimonials in `content/home.ts` are from this group (a law firm partner, HEDO Praha, HAYS Czech Republic, Buršík Capital, Grada Publishing) — they are evidence of trust, not the primary voice the site writes to.

## Product Purpose

Certified (soudní/ověřený) English↔Czech translation and interpreting by Mgr. Daniela Vránová, a court-appointed judicial interpreter in Prague, practicing since 2004. The product is not "a translation" — it's certainty that the resulting document will be accepted by the institution the visitor is dealing with, on the first submission.

**Success metric (confirmed, overrides an earlier internal assumption):** grow the total number of inquiries/clients — expand reach, not just filter for higher-quality leads. The site should still explain price drivers and turnaround up front (removing friction that would otherwise lose an inquiry), but the goal is more clients, not fewer-but-better ones. Note: this is the opposite of what an earlier project memory recorded ("cíl webu je filtrovat, ne expandovat") — that memory is now superseded by this confirmed answer and should inform, not block, future copy/CTA decisions aimed at conversion volume.

## Positioning

The one artifact that exists only in this profession — the round court-interpreter's stamp (kulaté razítko) — is the site's signature motif and its truthful claim: a document processed here carries a legal seal no generic translation agency can offer. Positioning is built on personal accountability (she personally translates, stamps, and signs — "mluvíte přímo s tím, kdo váš dokument překládá"), not on scale, speed marketing, or a sales team ("nikdy náš tým").

## Operating Context

- Visitor typically arrives via search while already holding a specific document (birth/marriage certificate, criminal-record extract, diploma, contract, power of attorney, court judgment) and needing to know fast: what it costs, how long it takes, and whether this person can be trusted.
- Two output formats with equal legal validity, always presented as two distinct, equal options: **listinný** (bound paper original with cord, seal, wet signature — delivered in person in Prague or by registered mail) and **elektronický** (PDF with qualified electronic signature and timestamp — delivered by email). The word "digitální" is not used anywhere on the site (revize 2. kolo) — only "elektronický".
- Pricing is never quoted as a price list; every job is quoted individually after the client sends a scan/photo of the document, via "Nezávazné nacenění (zdarma)" (never called "Konzultace"). This is deliberate client policy, not a missing feature. Interpreting has its own pricing model (per-act for registry-office ceremonies, base rate + hourly surcharge elsewhere, half-day/full-day for corporate) — added from the client's own wording, no figures on the site yet.
- Interpreting is delivered in person: weddings, notary appointments, hearings, court proceedings, conferences, business meetings, and driving-school exams — in Prague and across Bohemia (not "nationwide"). It has its own homepage section and its own nav item, equal to translations (client: interpreting is the larger part of her work).
- Domains (client's email signature): soudni-anglictina.cz, preklady-vranova.com, czech-translator.eu. Primary domain for launch is not yet confirmed — tracked as a single placeholder in `src/lib/site.ts`.
- CS is the active surface; the EN mutation (`content/home.en.ts`, route group `app/(en)/en/`) has identical structure and is **kept structurally in sync** — `content/index.ts` enforces key + tuple-length parity, so every content change lands in both files. EN copy polish is deferred until the CS design is signed off (confirmed 2026-08-25), but the scaffold is no longer "untouched".

## Capabilities and Constraints

- Document types translated: birth/marriage certificates, criminal-record extracts, diplomas (incl. nostrification), contracts, powers of attorney, commercial-register extracts, court judgments, medical reports, and other official documents.
- Solo practice — one person does the translating, stamping, and signing; no team, no outsourcing.
- Turnaround: the client confirmed a figure — "3 pracovní dny u dokumentů do 5 stran", plus express for short documents, "termín potvrdím vždy předem" (in the FAQ). The old `[doplnit]` placeholders are resolved. Don't add a tighter blanket promise (e.g. "do 24 hodin") — that was explicitly removed.
- Never states JTP (Jednota tlumočníků a překladatelů) membership — she is no longer a member. Only: "soudní tlumočnice jmenovaná soudem" and "členka Komory soudních tlumočníků ČR."
- Never offers book/literary translation (past service, discontinued).
- No price list or "prices from…" language anywhere on the site — explicit, confirmed client decision.
- Forbidden vocabulary (brief-mandated): "komplexní řešení", "individuální přístup", "tým profesionálů", "kvalita je naše priorita", "těšíme se na spolupráci."
- Voice: formal "vykání," first-person singular ("překládám", "ověřuji" — never "náš tým"), short sentences, concrete numbers/dates over adjectives, no legal jargon, no apologizing or overselling.
- Contact form has no working submit yet (`type="button"`) — server action + email notification + antispam still to build. Service subpages don't exist (header/card links go to anchors, not `/sluzby/...`). Indexation is gated by `SITE_LAUNCHED` in `src/lib/site.ts` (currently `false` → `robots.ts` disallows all, both layouts `noindex`, empty sitemap); flip it + confirm the domain at launch.

## Brand Commitments

- Name: Překlady Vránová (Mgr. Daniela Vránová). Domains: soudni-anglictina.cz, preklady-vranova.com, czech-translator.eu.
- Fonts: Playfair Display (display, weight 400 only, 500 on navy, never below 20px, never 600+) + DM Sans (everything else). Exactly two fonts — no third. Display font is now heading-only: statistical numbers (About stats, the NS metric) were moved to DM Sans + `tabular-nums` (revize: client "fonty se tu melou"). Process step numbers stay in Playfair (they're display, not data).
- One action color `#0B57D0`. Navy `#0B1F3A` is the whole page — sections alternate `--color-deep` / `--color-deep-light` on a navy liquid-glass rhythm (confirmed direction; the old "navy at most twice per page" cap from the deleted styleguide does not apply). Sky `#29ABE2` stays a faint accent (`section-glow`, one hero radial), never on text/buttons; the `brand`/`brand-soft` blue is kept alongside it as an intentional second blue.
- Signature element: a crow (vrána), used in exactly three places (section divider, seal/logo, hero drawing) — a fourth use is decoration and gets removed. Current logo silhouette is a gull, not a crow, and is explicitly a working placeholder pending client sign-off on a redesigned direction (crow inside a circular stamp motif).
- `STYLEGUIDE_soudni-anglictina.md` (v1.2) has been deleted and is no longer authoritative (confirmed 2026-08-25) — its navy/single-accent-color caps and other visual rules do not apply. The current implementation (`src/app/globals.css` tokens, e.g. all-navy sections and the `brand`/`brand-soft` blue kept alongside `sky`) is the confirmed direction. No replacement design doc exists yet; treat the live code as the visual source of truth until one is written.

## Evidence on Hand

- Real, named testimonials in `content/home.ts` (5): JUDr. A. van der Weerden (advokát), Petr Doleží (HEDO Praha s.r.o.), Miroslav Svozílek (HAYS Czech Republic), Martin Buršík (Buršík Capital s.r.o.), Šárka Kratochvílová (Grada Publishing). All translation-focused — no interpreting testimonial yet. Consent-to-publish still not separately confirmed — verify before launch.
- Client references (interpreting), swapped in from her 29. 8. 2026 email: 17 names in `interpreting.references.items`, 10 with real logos in the marquee (`public/logos/`), 7 as a text line. Unused logos after the swap: `fsv-uk.webp`, `immigreat.webp`.
- Photos in use: `public/foto/hero-portret.webp` (hero + mobile portrait), `o2-arena-kabina.webp` (interpreting references), `pricing.webp` (pricing backdrop). All `.photo-mono` (one desaturation filter site-wide). Source material sits in `daniela vranova images/` (not web-served). The client said she'll supply a better About-section photo.
- Hero and About-section videos are real, served from jsDelivr mirroring a personal GitHub repo (`matejboska-dev/daniela-vranova-background-video`). Before launch: move to a client-owned / dedicated repo, and run a Lighthouse pass (hero clip is ~14MB — check the <2s target).
- Some service-grid icons are still Lucide placeholders (`drawn: false`, 5 of them) — find via `[data-todo]` in DevTools.
- OG preview images are static PNGs (`app/(cs)/opengraph-image.png`, `app/(en)/en/opengraph-image.png`); favicon `app/icon.svg`; apple-touch icon `app/apple-icon.png`.
- Domain access (via FORPSI) not yet transferred/shared through a secure channel.

## Product Principles

1. Answer price and turnaround logic before the visitor reaches the contact form — the form is not a substitute for information the site should already give.
2. Every claim of authority must be true and checkable: court-appointed status, chamber membership, years of practice (computed from the appointment year, never hand-typed) — nothing overstated, nothing apologized for.
3. Listinný and elektronický are always presented as two equal, clearly separated options — never one framed as the "real" one and the other as a shortcut.
4. Personal, solo accountability is the differentiator — the site speaks in the first person as the one person doing the work, not as an agency or team.
5. Individuals in a stressful one-off moment are who the site is written for; business/repeat clients are welcome and evidenced via testimonials, but don't take over the voice or structure.

## Accessibility & Inclusion

Responsive down to 360px, visible focus on every interactive element, full keyboard operability, WCAG AA contrast (4.5:1 minimum) on all text — including text over hero video/photo, which always sits on a navy gradient overlay to guarantee it. `prefers-reduced-motion` replaces the hero video with its poster frame and disables scroll-reveal animation.
