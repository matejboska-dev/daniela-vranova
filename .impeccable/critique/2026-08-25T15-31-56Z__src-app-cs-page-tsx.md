---
target: homepage (src/app/(cs)/page.tsx)
total_score: 22
max_score: 36
na_heuristics: 7
p0_count: 2
p1_count: 2
timestamp: 2026-08-25T15-31-56Z
slug: src-app-cs-page-tsx
---
Method: dual-agent (A: a3bc3d9a0dab28e34 · B: aa72be6155f17f4ac)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Contact form gives no signal anywhere that submission isn't wired up — a stressed visitor gets silent failure. |
| 2 | Match System / Real World | 4 | "Normostrana," "listinný/elektronický," "nezávazné nacenění" match how Czech institutions and this profession actually talk. |
| 3 | User Control and Freedom | 3 | FAQ accordion, locale switch, marquee pause-on-hover/focus all give control; mobile menu scroll-lock/focus-return is well engineered. |
| 4 | Consistency and Standards | 2 | Copy is internally consistent, but the visual system is inconsistent with the project's own binding styleguide (navy cap, single-accent rule, crow placement count). |
| 5 | Error Prevention | 1 | Contact form has no visible client-side validation and a submit button that cannot error or succeed. |
| 6 | Recognition Rather Than Recall | 3 | Pricing factors and the NS definition are re-surfaced near where they're needed; FAQ is mostly self-contained. |
| 7 | Flexibility and Efficiency | n/a | Single-session marketing page for one-time visitors — no power-user path to accelerate. |
| 8 | Aesthetic and Minimalist Design | 2 | Individual components are disciplined, but the "one navy moment" device has been spent until it has no contrast left. |
| 9 | Error Recovery | 1 | No error states for the contact form; nothing tells the visitor about upload-size limits, etc. |
| 10 | Help and Documentation | 4 | The 13-question FAQ functionally is the help documentation, and it's genuinely specific to real edge cases. |
| **Total** | | **22/36** | **Acceptable (61%)** |

Heuristic 7 scored n/a (Persuade-mode, single-session marketing page); total renormalized to /36.

## Design Specificity Verdict

**LLM assessment**: Partially authored, but drifting from its own brief. The copy layer is genuinely bespoke — the listinný/digitální duality, the normostrana pricing logic, the five-step process, and a real factual correction in `home.ts` ("Spolupracovala jsem s...") where the team caught and fixed a claim that misrepresented who the client interpreted *for* vs. *at*. That is not template copy.

But the two visual devices meant to carry the specificity are both compromised in the shipped build. The logo is confirmed by the code's own comments to be the client's original gull silhouette — explicitly not the crow-in-seal direction the styleguide calls "where all the design's courage is spent." The crow motif (`Crow.tsx`) is implemented with real craft (`CrowDivider`, `CrowSeal`, `CrowDrawing`), but only 1 of its 3 mandated placements is actually mounted on the page (a micro-seal inside `Badge.tsx`); the section-divider and hero-drawing uses are coded but never invoked. A 4th, unplanned crow use appears in the "Kulaté razítko" diagram (`Anatomy.tsx:204-212`) — which the styleguide's own rule says should be the one to remove once a 4th use exists, not the two canonical ones that are missing.

**Deterministic scan**: The CLI scan of `src/` (exit code 2, 2 findings) flagged a `bounce-easing` curve (`globals.css:447`, `cubic-bezier(0.34, 1.56, 0.64, 1)`) and a `broken-image` placeholder `<img>` in `HeroSection.tsx:151` — both worth a look, neither caught by the manual review. The browser-injected detector found 136 anti-patterns on desktop / 135 on mobile, overwhelmingly (~100+) `ai-color-palette` hits ("cyan gradient background," "cyan neon text on dark background") spread across many SVG icon primitives and text nodes. This strongly corroborates the LLM review's independently-reached finding of a third, off-palette blue (`--color-brand`/`--color-brand-soft`, the client's pre-styleguide logo color) now occupying the role the styleguide reserves for Sky, including on running caption text where the styleguide explicitly forbids it. Agreement between the two methods here is strong evidence, not coincidence.

Other detector findings not raised by the manual review: `all-caps-body` (3 hits), `cramped-padding` (4 hits, all on `<a>` elements with `target`/`download` attributes and 0px vertical padding), `clipped-overflow-container` (2 hits), `icon-tile-stack` (4 hits, on the pricing section's four factor tiles), `text-overflow` (2 hits, underlined links overflowing their box by 32–41px), `nested-cards` (3 hits), and `layout-transition` (1 hit, a height transition). One mobile-only finding, `body-text-viewport-edge` (2 hits), was traced by Assessment B to the testimonials marquee — items are deliberately positioned off-screen for the scrolling effect, `document.documentElement.scrollWidth` matched the viewport exactly, and 97 similarly-flagged elements all belonged to the same pattern. **This is a confirmed false positive**, not a layout bug.

**Visual overlays**: Injection succeeded and the console-reported counts above are real, but Assessment B's tab was closed after gathering evidence per protocol, so there is no overlay left open in a `[Human]` tab for you to look at right now. Ask if you'd like a follow-up pass that keeps the tab open for live visual inspection.

## Overall Impression

The copy and information architecture are written by someone who actually knows this client's business and has caught real factual errors before shipping — that's rare and worth protecting. But the visual system has drifted from the styleguide that's supposed to govern it: navy has lost its role as a signature accent by appearing on every single section, a second unauthorized blue has crept in and is now more visually present than the sanctioned accent, and the crow/stamp motif — explicitly called out as "where all the design's courage is spent" — barely appears. On top of that, the site's single conversion mechanism, the contact form, cannot currently submit. The single biggest opportunity: restore color discipline and finish wiring the one interaction that turns a visit into an inquiry, before any further visual polish.

## What's Working

1. **Pricing/FAQ cost-anxiety design** (`content/home.ts`) — normostrana is explained with concrete document examples (birth certificate ≈ 1 NS, contract 5–15 NS), answering "how much will this cost me" with numbers instead of adjectives, exactly per the product's own principle of resolving price/turnaround logic before the contact form.
2. **Testimonials marquee accessibility** (`TestimonialsSection.tsx`) — pause on hover *and* focus-within, `aria-hidden` on the duplicated loop half, full `prefers-reduced-motion` fallback to a native scroll. Careful, non-obvious work most marquees get wrong.
3. **Factual-integrity correction in copy** (`home.ts`) — the "Spolupracovala jsem s" rewrite catching a misrepresentation of who the client interpreted for vs. at is exactly the "every claim must be true and checkable" principle in practice, not just on paper.

## Priority Issues

**[P0] Contact form cannot submit.** `ContactSection.tsx:145` renders the submit control as `type="button"` with no handler. This is the site's only conversion mechanism, and the confirmed success metric is growing total inquiries — every section on the page exists to walk a stressed visitor to this exact button, and it currently does nothing when pressed. **Fix**: wire a working POST endpoint (or at minimum a `mailto:`-triggering fallback) before any further visual polish; a page that converts at zero regardless of design quality is the actual blocker. **Suggested command**: `/impeccable harden` (production-readiness, real submit handling, error states).

**[P0] Navy appears on every section, violating the project's own styleguide and flattening hierarchy.** Verified live: all 13 sections including the footer compute to `#0B1F3A`, against the styleguide's documented rule of "navy at most twice, including the footer, or it loses its weight." This isn't cosmetic — it's the mechanism meant to make hero, the most-important section, and footer read as distinct weighted moments. With everything identical, pricing (the highest-friction-removal section) gets no more visual priority than testimonials. **Fix**: restore lighter sections for Services, Process, and FAQ per the original rhythm, reserving navy for hero, the highest-priority section, and footer. **Suggested command**: `/impeccable layout`.

**[P1] Crow/stamp motif — the site's stated signature device — barely ships, and the logo is still the unrebranded placeholder.** Of 3 mandated placements, only 1 is mounted (a micro-seal badge); the section-divider and hero-drawing crow components exist in code but are never used. A 4th, non-canonical crow appears in the "Kulaté razítko" diagram — the one the styleguide's own rule would cut once a 4th use exists, while the two canonical ones are the ones missing. **Fix**: mount `CrowDivider` at 1–2 section boundaries and `CrowDrawing` in the hero as originally speced; treat the anatomy-diagram stamp icon as the "4th use" to remove. **Suggested command**: `/impeccable delight` (signature-element restoration) or `/impeccable bolder`.

**[P1] A third, off-palette blue competes with the single mandated accent — confirmed independently by manual review and the detector.** `--color-brand`/`--color-brand-soft` (the client's pre-styleguide logo blue) is used as default bullets, hover states, and even running caption text (`PricingSection.tsx:96`), occupying the role the styleguide reserves for Sky and explicitly bans from text. The browser detector's dominant finding (~100+ of 136 total hits, "cyan gradient/neon" color usage) lines up with this same color family across icons and text. **Fix**: fold `brand`/`brand-soft` into the existing `sky`/`accent-soft` tokens rather than maintaining a second, unauthorized accent family; cap its footprint per the original ~5% rule. **Suggested command**: `/impeccable colorize` or `/impeccable polish`.

**[P2] The FAQ's densest answer front-loads all complexity at the exact moment a first-time visitor is least equipped for it.** "V jakém formátu dostanu ověřený překlad?" expands into 4 parallel, legalistic sub-paragraphs at once, inside an already-long 13-item accordion — the single densest text block on the site, for the persona the whole site is written for (someone who "doesn't know the rules"). Related: the pricing section's four factor tiles (`icon-tile-stack`, 4 detector hits) sit in the same information-density neighborhood. **Fix**: let the visitor pick their scenario (has original / has copy / needs it fast) and show only that branch. **Suggested command**: `/impeccable clarify`.

## Persona Red Flags

**Jordan (first-timer, doesn't know the domain vocabulary)**: Hits the FAQ's format question and is handed 4 parallel paths with no default recommendation — the exact phone-call complexity the site exists to move online, relocated rather than simplified. Reaches "Nezávazné nacenění (zdarma)" three times (hero, header, sticky bar) before the form; if any of those raises an expectation of *completing* something, the dead submit button breaks a promise made three times over.

**Riley (stress-tester, presses on trust signals)**: Tests the contact form first and finds `type="button"` doing nothing — precisely the persona most likely to find this fastest. Would also notice, on inspecting colors, that a site whose entire positioning is "precision, one signature system, dokument projde napoprvé" doesn't itself hold to its own one-accent-color discipline — a credibility gap between the claim and the shipped execution.

**Casey (distracted, mobile)**: The sticky mobile bar (persistent call + form CTA) is well-built for this persona, but scrolling past the FAQ's 4-part format answer hands them the single longest unbroken text block on the site with no visual break. Separately, the CS/EN locale-switch links measure roughly 18×16px — below common touch-target guidance for a secondary but still-tappable control.

## Minor Observations

- `HeroSection.tsx:151` — detector-flagged broken/placeholder `<img>`; verify before launch.
- `globals.css:447` — a bounce/elastic easing curve (`cubic-bezier(0.34, 1.56, 0.64, 1)`) on the hero, worth a deliberate look against the site's otherwise restrained motion language.
- 4 links with `target`/`download` attributes render with 0px vertical padding at ~14–15px text (cramped tap area).
- 2 sections use `overflow-hidden` in a way that clips a positioned child element.
- 2 underlined links overflow their containing box by 32–41px.
- 3 instances of "card inside card" nesting.
- Footer and header "Ochrana osobních údajů" both link to `#gdpr`, an anchor with no corresponding section.
- Hero background video is served from an external jsDelivr/GitHub mirror rather than self-hosted — a single external dependency for the highest-priority above-the-fold asset, on a site whose own styleguide argues for self-hosting assets for speed.
- Pricing section's opening line ("Ceník tady nenajdete, protože by lhal") is a strong, specific line, but leads with absence before value at the page's highest-anxiety (money) moment.
- `CountUp.tsx`'s animated stat counter is a documented, deliberate exception to the styleguide's "no counters" rule, executed well (respects `prefers-reduced-motion`, no layout shift, `sr-only` final value) — noted only because it's a rule-break, not because it's poorly built.

## Questions to Consider

1. If the styleguide's central bet is that "all the design's courage is spent" on the stamp/crow, and the shipped page spends none of it there — what would the homepage look like if the engineering effort already sunk into `Crow.tsx` were spent mounting it, instead of adding a second color system to make the page feel less flat?
2. The page's whole positioning is "precision — dokument projde napoprvé" — proven with a contact form that can't submit and a styleguide violated on every section. If a skeptical visitor opened devtools, what would that gap between claimed and shipped precision cost the positioning?
3. Given the confirmed goal is inquiry volume, not filtering — is a 13-question FAQ with a 4-branch legal sub-answer actually reducing friction, or does it now front-load enough complexity that a first-timer bounces before reaching the form?
