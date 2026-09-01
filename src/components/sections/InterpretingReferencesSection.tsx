import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { SocialIconLink } from "@/components/ui/SocialIconLink";
import { ReviewLinks } from "@/components/ui/ReviewLinks";
import { cn } from "@/lib/cn";
import { getContent, type Locale } from "@/content";

/**
 * LOGA KLIENTŮ, které dodala klientka (`vranova loga klientu/webp`,
 * 26. 8. 2026) — po výměně seznamu (revize 3. kolo, e-mail 29. 8. 2026) má
 * 10 ze 17 jmen v `interpreting.references.items` reálné logo, zbytek ne.
 * Bez loga jedou dál jako prostý text pod marquee, ne mlčky ven ze stránky —
 * jsou to skutečná jména spoluprací, jen bez grafiky. Loga `fsv-uk.webp`
 * a `immigreat.webp` po výměně zůstala nepoužitá (jména ze seznamu vypadla).
 *
 * `alt` je pár `{cs, en}`, ne jeden řetězec: firemní jména se mezi mutacemi
 * částečně liší ("AK Legato" vs. "Legato law firm", viz `home.ts`/`home.en.ts`),
 * takže srovnání "má tohle jméno logo?" musí běžet v jazyce aktuální mutace,
 * jinak by anglická verze žádné jméno nespárovala a vypsala by je znovu jako
 * text pod už zobrazeným logem.
 */
type ClientLogo = {
  readonly id: string;
  readonly src: string;
  readonly alt: { readonly cs: string; readonly en: string };
  readonly className?: string;
};

const CLIENT_LOGOS: readonly ClientLogo[] = [
  { id: "unyp", src: "/logos/unyp.webp", alt: { cs: "UNYP", en: "UNYP" } },
  { id: "act-legal", src: "/logos/act-legal.webp", alt: { cs: "Act legal", en: "Act legal" } },
  {
    id: "pbis",
    src: "/logos/pbis.webp",
    alt: { cs: "PBIS", en: "Prague British International School" },
  },
  {
    id: "sos",
    src: "/logos/sos-detske-vesnicky.webp",
    alt: { cs: "SOS Dětské vesničky", en: "SOS Children's Villages" },
    className: "scale-75",
  },
  { id: "ciee", src: "/logos/ciee.webp", alt: { cs: "CIEE", en: "CIEE" } },
  { id: "ak-legato", src: "/logos/ak-legato.webp", alt: { cs: "AK Legato", en: "Legato law firm" } },
  {
    id: "broz-sedlaty",
    src: "/logos/broz-sedlaty.webp",
    alt: { cs: "Advokátní kancelář Brož, Sedlatý s.r.o.", en: "Brož, Sedlatý law firm" },
  },
  {
    id: "elektrarny-opatovice",
    src: "/logos/elektrarny-opatovice.webp",
    alt: { cs: "Elektrárny Opatovice", en: "Elektrárny Opatovice" },
  },
  { id: "grada", src: "/logos/grada.webp", alt: { cs: "Grada", en: "Grada" } },
  {
    id: "malajsie",
    src: "/logos/malajsie.webp",
    alt: { cs: "Velvyslanectví Malajsie", en: "Embassy of Malaysia" },
  },
] as const;

/** Sudé indexy jedou nahoru, liché dolů — dvě řady po šesti, ne jedna dlouhá. */
const LOGO_COLUMN_A = CLIENT_LOGOS.filter((_, i) => i % 2 === 0);
const LOGO_COLUMN_B = CLIENT_LOGOS.filter((_, i) => i % 2 === 1);

/**
 * S KÝM JSEM SPOLUPRACOVALA — samostatná sekce, ne blok uvnitř Tlumočení.
 *
 * Revize (zpětná vazba, 26. 8. 2026): dřív to byl poslední blok uvnitř
 * `InterpretingSection`, na téže navy ploše jako karty tlumočení nad ním, bez
 * vlastního pozadí a bez mezery — splývalo to s okolím a nebylo jasné, kde
 * jedna myšlenka končí a druhá začíná. Vlastní `<Section>` dala mezeru
 * z `--section-y` nahoře i dole.
 *
 * Barva pozadí (revize, tentýž den): první verze zkusila světlou plochu
 * (`tone="alt"`, bílá/šedomodrá), ale klientka chtěla zůstat v navy rodině —
 * jen o odstín světlejší, ať je předěl mezi sekcemi vidět bez skoku na bílou.
 * `tone="deep-light"` (`--color-deep-light` v `globals.css`) je přesně to:
 * stejný hue jako `--color-deep`, jen světlejší. Proto tu zůstávají `on-deep`
 * třídy (`text-on-deep*`, `border-on-deep-line`, `bg-white/…`) jako ve zbytku
 * stránky, ne světlé (`text-ink*`, `border-line`) z první verze.
 *
 * Přechod mezi tóny (revize, tentýž den): "smooth, fade jako ostatní" — ostré
 * hranici mezi `--color-deep` a `--color-deep-light` nahradil `ReferencesBackdrop`
 * stejnou technikou jako u ostatních sekcí (gradient nahoře/dole, `section-glow`),
 * jen místo blednutí do stejné barvy (jak to dělají ostatní sekce, aby splynuly
 * se stránkou pod `--color-deep`) tenhle gradient blendne z `--color-deep`
 * (barva sousedních sekcí) do `--color-deep-light` (vlastní barva) — hranice tak
 * není řez, ale plynulý přechod. `.section-veil` se tu nepoužívá schválně: má
 * `--color-deep` napevno v definici, takže by světlejší tón zase stahovala zpět
 * k tmavému.
 */
export function InterpretingReferencesSection({ locale }: { locale: Locale }) {
  const { brand, interpreting } = getContent(locale);

  return (
    <Section
      id="spoluprace"
      tone="deep-light"
      labelledBy="interpreting-references-label"
      className="relative isolate overflow-hidden"
    >
      <ReferencesBackdrop />

      <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-5">
          <div
            className="relative overflow-hidden rounded-[28px] border border-white/15 shadow-[0_25px_70px_-20px_rgba(0,0,0,0.55),inset_0_1px_0_0_rgba(255,255,255,0.25)]"
            style={{ aspectRatio: "4 / 5" }}
          >
            <Image
              src="/foto/o2-arena-kabina.webp"
              alt={interpreting.photoAlt}
              fill
              sizes="(min-width: 1024px) 420px, 100vw"
              className="photo-mono object-cover object-[50%_35%]"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <p id="interpreting-references-label" className="text-body-l text-on-deep">
            {interpreting.references.intro}
          </p>

          {/*
           * Revize (klientčin materiál "vranova loga klientu", 26. 8. 2026):
           * pilulky se seznamem jmen nahradily dva svislé marquee sloupce se
           * skutečnými logy — jeden jede nahoru, druhý dolů, oba se nahoře
           * i dole rozpouštějí do pozadí (`mask-image`), žádný ostrý řez.
           */}
          <div
            className="logo-marquee mt-5 grid grid-cols-2 gap-3"
            style={{
              height: "min(52vh, 380px)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
            }}
          >
            <LogoColumn logos={LOGO_COLUMN_A} locale={locale} direction="up" />
            <LogoColumn logos={LOGO_COLUMN_B} locale={locale} direction="down" />
          </div>

          {interpreting.references.items.length > 0 ? (
            <p className="mt-5 text-small leading-relaxed text-on-deep-2">
              <span className="font-medium text-on-deep">
                {interpreting.references.logolessIntro}
              </span>{" "}
              {interpreting.references.items.map((name, i) => (
                <span key={name}>
                  <span>{name}</span>
                  {i < interpreting.references.items.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="select-none text-on-deep-accent/60"
                    >
                      {"\u00A0· "}
                    </span>
                  ) : (
                    "."
                  )}
                </span>
              ))}
            </p>
          ) : null}

          <p className="mt-4 text-small text-on-deep-2">
            {interpreting.references.reviewsIntro}{" "}
            <ReviewLinks locale={locale} />
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href={interpreting.cta.href}>{interpreting.cta.label}</Button>

            <SocialIconLink icon="instagram" {...brand.social.instagram} />
            <SocialIconLink icon="linkedin" {...brand.social.linkedin} />
          </div>
        </div>
      </div>
    </Section>
  );
}

/**
 * Pozadí sekce — plynulý přechod z `--color-deep` (sousední sekce) do
 * `--color-deep-light` (vlastní barva), ne ostrý řez. Základ je `deep-light`
 * (`bg-deep-light`), gradienty nahoře a dole ho nahoře/dole překryjí barvou
 * `deep`, která směrem ke středu sekce doblendne do průhledné — přesně tak,
 * jak ostatní sekce blednou na okrajích do barvy pod sebou.
 */
function ReferencesBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 bg-deep-light">
      <div className="absolute inset-0 section-glow" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-deep via-deep/50 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deep via-deep/50 to-transparent" />
    </div>
  );
}

/**
 * Jeden svislý marquee sloupec. Seznam log jede v DOM dvakrát za sebou
 * (`[...logos, ...logos]`) a `.logo-column-track` ho posune o −50 % své
 * výšky — smyčka je bezešvá jen proto, že druhá polovina je bit po bitu
 * shodná s první. Klon nese `aria-hidden`, aby čtečka neslyšela každé
 * jméno dvakrát.
 *
 * `direction="down"` nepřidává druhou sadu keyframes, jen pustí tutéž
 * animaci pozpátku (`.logo-column-track--reverse`, `globals.css`).
 */
function LogoColumn({
  logos,
  locale,
  direction,
}: {
  logos: readonly ClientLogo[];
  locale: Locale;
  direction: "up" | "down";
}) {
  const doubled = [...logos, ...logos];

  return (
    <div className="h-full overflow-hidden">
      <ul
        className={cn(
          "logo-column-track",
          direction === "down" && "logo-column-track--reverse",
        )}
      >
        {doubled.map((logo, i) => (
          <li
            key={`${logo.id}-${i}`}
            className="mb-3 shrink-0"
            aria-hidden={i >= logos.length || undefined}
          >
            {/*
             * Bílá karta pod každým logem: zdrojové soubory mají různé
             * (většinou bílé, u Elektráren Opatovice tmavě vínové) pozadí.
             * Bez sjednocující karty by loga na navy ploše působila jako
             * náhodně rozhozené bílé obdélníky. S ní čte celý sloupec jako
             * jeden systém — logo samo si nese svou vlastní barvu.
             */}
            <div className="flex h-20 items-center justify-center rounded-xl bg-white px-5 py-3 shadow-[0_8px_20px_-8px_rgba(0,0,0,0.35)]">
              <div className="relative h-full w-full">
                <Image
                  src={logo.src}
                  alt={logo.alt[locale]}
                  fill
                  sizes="160px"
                  className={cn("object-contain", logo.className)}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
