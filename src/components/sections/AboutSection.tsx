import { Container } from "@/components/layout/Container";
import { AboutVideo } from "@/components/sections/AboutVideo";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { getContent, type Locale } from "@/content";

/**
 * O MNĚ
 *
 * Dvousloupcová sekce od `lg`: video vlevo, text vpravo (`grid-cols-2`).
 * Bez full-bleed fotky na pozadí (klientčin brief, 25. 8. 2026) — plochu
 * drží jen `bg-deep`, vizuální váhu nese samotné video.
 *
 * VÝŠKA NA LAPTOPU, TABLETU A DESKTOPU (od `lg`, tedy 1024 px a víc): sekce
 * se drží na jedné obrazovce stejnou technikou jako hero —
 * `min-height: clamp(podlaha, 100svh, strop)` + svislé centrování obsahu,
 * místo pevného `py-28`, které dřív přidávalo dalších ~220 px NAD obsah bez
 * ohledu na výšku okna.
 *
 * `min-height` je podlaha, ne strop — pokud by obsah i po zúžení rozestupů
 * nevešel (extrémně nízké okno, velké přiblížení), sekce prostě povyroste
 * a stránka se o pár desítek pixelů posune, nikdy nic neořízne.
 *
 * Pod `lg` (mobil a tablet na výšku) se výška neřeší, layout jede v běžném
 * toku stránky a sloupce se zalomí pod sebe (`order-1`/`order-2`): nejdřív
 * text (s `AboutMobilePhoto` pod ním), pak video.
 */
export function AboutSection({ locale }: { locale: Locale }) {
  const { about } = getContent(locale);

  return (
    <section
      id="o-mne"
      aria-labelledby="about-title"
      className="on-deep bg-deep scroll-mt-[var(--header-h)]"
    >
      <div className="py-16 lg:flex lg:min-h-[clamp(580px,100svh,950px)] lg:items-center lg:py-12">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-14 xl:gap-16">
            <div className="reveal order-2 flex justify-center lg:order-1 lg:col-span-5 lg:justify-start">
              <AboutVideo copy={about.video} />
            </div>

            <div className="reveal order-1 w-full max-w-[620px] lg:order-2 lg:col-span-7">
              <SectionLabel>{about.label}</SectionLabel>

              <h2 id="about-title" className="mt-6 text-h2 text-on-deep">
                {about.title}
              </h2>

              <div className="mt-5 max-w-measure space-y-3 text-body text-on-deep-2">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {/*
               * Jediná kurzíva na stránce.
               */}
              <blockquote className="mt-5 border-l border-brand py-1 pl-6">
                <p className="pullquote text-on-deep">{about.pullquote}</p>

                <p className="mt-2 text-body text-on-deep-2">
                  {about.pullquoteNote}
                </p>
              </blockquote>

              {/*
               * Kvalifikace (odkazy na veřejný zdroj) a statistiky v jednom
               * řádku, ne pod sebou. Revize (/impeccable adapt, 26. 8. 2026):
               * sekce má zůstat na jedné obrazovce od `lg`, ale s novým
               * úvodním odstavcem (historie jmenování) přestal obsah pravého
               * sloupce vejít i na běžný notebookový výškový výřez (978 px
               * obsahu do 900 px okna).
               *
               * `compact` na obou badgích (viz `Badge.tsx`): ve verzálkové
               * sazbě s širokým prostrkáním byla každá pilulka přes 340 px —
               * "Jmenovaná Ministerstvem spravedlnosti" a "Členka Komory
               * soudních tlumočníků ČR" jsou celé věty, ne krátké štítky.
               * V kompaktní sazbě se obě vejdou vedle sebe na jeden řádek
               * (dohromady ~590 px do 620px sloupce), takže badge pilulky
               * a statistiky pod nimi zaberou dohromady jen dva nízké řádky
               * místo tří.
               */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-on-deep-line pt-5">
                <ul className="flex flex-wrap gap-2">
                  {about.badges.map((badge) => (
                    <li key={badge.label}>
                      <Badge compact verified href={badge.href}>
                        {badge.label}
                      </Badge>
                    </li>
                  ))}
                </ul>

                <AboutStats locale={locale} />
              </div>

              {/* Jedno primární CTA na sekci; telefon vedle je jeho sekundární cesta. */}
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Button href={about.cta.href}>{about.cta.label}</Button>

                <Button href={about.phoneCta.href} variant="outline">
                  {about.phoneCta.label}
                </Button>
              </div>

              <p className="mt-3 max-w-lead text-small text-on-deep-2">
                {about.ctaNote}
              </p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

/**
 * Statistiky — vodorovný řádek. Rámeček i odsazení drží teď obalový `div`
 * v `AboutSection` společně s badge pilulkami (revize, viz komentář tam).
 */
function AboutStats({ locale }: { locale: Locale }) {
  const { about } = getContent(locale);

  return (
    <dl className="flex flex-wrap gap-6">
      {about.stats.map((stat) => (
        <div key={stat.id}>
          <dt className="sr-only">{stat.label}</dt>

          <dd>
            <p className="font-display text-2xl font-medium leading-none tracking-[-0.02em] text-on-deep">
              <span className="sr-only">
                {stat.value}
                {stat.suffix}
              </span>

              <span aria-hidden="true">
                <CountUp value={stat.value} />
                {stat.suffix}
              </span>
            </p>

            <p className="util mt-2 text-on-deep-2">{stat.label}</p>
          </dd>
        </div>
      ))}
    </dl>
  );
}
