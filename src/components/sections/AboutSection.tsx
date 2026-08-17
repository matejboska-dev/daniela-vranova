import Image from "next/image";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { about } from "@/content/home";

/**
 * O MNĚ
 *
 * Fotka jede přes celou sekci, ne v ořezaném boxu vlevo — dokumentární záběr
 * z tlumočení na svatbě (obrazový jazyk §7 to žádá výslovně: „razítko,
 * podpis, svázaný překlad, papír, ruce", a tlumočení na obřadu je stejná
 * kategorie: klientka při práci, ne pózovaný portrét). Text sedí vpravo, kde
 * na fotce je prázdná stěna se závěsem, takže overlay tam nemusí být těžký.
 *
 * Section komponentu tu záměrně nepoužívám — potřebuje se sem dostat
 * full-bleed obrázek mimo odsazení stránky, přesně jako u HeroSection.
 *
 * Kvůli fotce sekce vizuálně čte jako navy (podobně jako hero), ale
 * `--color-deep` tu není plocha, je to jen barva přechodu přes světlou
 * fotku — nepočítá se do pravidla „navy nejvýš dvakrát" ze styleguidu §3,
 * které mluví o plných barevných blocích (hero a patička).
 *
 * VÝŠKA NA LAPTOPU, TABLETU A DESKTOPU (od `lg`, tedy 1024 px a víc): sekce
 * se drží na jedné obrazovce stejnou technikou jako hero —
 * `min-height: clamp(podlaha, 100svh, strop)` + svislé centrování obsahu,
 * místo pevného `py-28`, které dřív přidávalo dalších ~220 px NAD obsah bez
 * ohledu na výšku okna. Výsledkem byla sekce o 900 px viewport vysoká 1122 px,
 * tedy o čtvrtinu přes obrazovku.
 *
 * `min-height` je podlaha, ne strop — pokud by obsah i po zúžení rozestupů
 * nevešel (extrémně nízké okno, velké přiblížení), sekce prostě povyroste
 * a stránka se o pár desítek pixelů posune, nikdy nic neořízne. To je zásadní
 * rozdíl proti `overflow: hidden` na pevné výšce, které by text potichu
 * useklo — na řádcích o osudu dokumentu je useknutá věta nepřijatelná.
 *
 * Pod `lg` (mobil a tablet na výšku) se výška neřeší — layout jede v běžném
 * toku stránky, takže srovnávat s výškou obrazovky nemá smysl. Tablet na
 * šířku spadá do stejné větve jako laptop, protože 1024 px širokou plochu
 * i přes menší úhlopříčku layoutuje stejně.
 *
 * Pod `lg` foto NENÍ podklad za textem (`AboutBackdrop` se tam vůbec
 * nevykreslí, viz `hidden lg:block`) — sekce má tam vlastní plnou `bg-deep`
 * plochu, na ní text, a až pod ním samostatný ořízlý portrét
 * (`AboutMobilePhoto`). Foto za textem na úzké obrazovce dělalo problém
 * s kontrastem (`--on-deep-2` na fotce vycházel různě čitelný podle toho,
 * jak světlý byl zrovna podklad pod gradientem) — samostatná navy plocha
 * pro text ho odstraňuje úplně, bez ohledu na to, co je na fotce pod ní.
 */
export function AboutSection() {
  return (
    <section
      id="o-mne"
      aria-labelledby="about-title"
      className={
        /*
         * `bg-deep` je tu jen mobilní/tabletní pojistka: pod `lg` už foto
         * neleží jako podklad za textem (viz `AboutBackdrop`), takže text
         * potřebuje vlastní plnou navy plochu, aby `--on-deep`/`--on-deep-2`
         * pár vždy držel zaručený kontrast ze styleguide §3 a ne kontrast
         * proměnlivý podle toho, jak světlá zrovna byla fotka pod gradientem.
         * Od `lg` plochu překryje `AboutBackdrop`, takže se barva neuplatní.
         */
        "on-deep relative isolate overflow-hidden bg-deep py-16 " +
        "lg:flex lg:min-h-[clamp(560px,100svh,900px)] lg:items-center lg:py-[min(3.5vh,2rem)]"
      }
    >
      <AboutBackdrop />

      <div className="relative z-10 w-full px-[var(--page-x)]">
        <div className="flex justify-center lg:justify-end">
          <div className="reveal w-full max-w-[600px] lg:max-w-[640px]">
            <SectionLabel>{about.label}</SectionLabel>

            <h2 id="about-title" className="mt-6 text-h2 text-on-deep lg:mt-[min(1.5vh,1.25rem)]">
              {about.title}
            </h2>

            <div className="mt-8 max-w-measure space-y-5 text-body text-on-deep-2 lg:mt-[min(1.5vh,1.25rem)] lg:space-y-[min(1vh,1rem)]">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {/*
             * Jediná kurzíva na stránce. Na navy pozadí drží text vyšší
             * kontrast (`--on-deep-2` místo `--ink-2`), linka v `--on-deep-accent`.
             */}
            <blockquote className="mt-10 border-l border-on-deep-accent py-1 pl-6 lg:mt-[min(2vh,1.5rem)]">
              <p className="pullquote text-on-deep">{about.pullquote}</p>
            </blockquote>

            <ul className="mt-10 flex flex-wrap gap-3 lg:mt-[min(2vh,1.25rem)]">
              {about.badges.map((badge) => (
                <li key={badge}>
                  <Badge verified>{badge}</Badge>
                </li>
              ))}
            </ul>

            <AboutStats />

            {/* Jedno primární CTA na sekci; telefon vedle je jeho sekundární cesta. */}
            <div className="mt-10 flex flex-wrap items-center gap-4 lg:mt-[min(2vh,1.25rem)]">
              <Button href={about.cta.href}>{about.cta.label}</Button>

              <Button href={about.phoneCta.href} variant="outline">
                {about.phoneCta.label}
              </Button>
            </div>

            <p className="mt-5 max-w-lead text-small text-on-deep-2 lg:mt-[min(1vh,0.75rem)]">
              {about.ctaNote}
            </p>

            <AboutMobilePhoto />
          </div>
        </div>
      </div>
    </section>
  );
}

/*
 * Portrét pod textem — jen pod `lg`. Od `lg` dělá tuhle práci `AboutBackdrop`
 * (foto přes celou sekci), tady je to samostatný, ořízlý obrázek 4:5 podle
 * obrazového jazyka (styleguide §7), stejné černobílé/navy tónování
 * (`photo-mono`) jako všude jinde na webu.
 *
 * Vlastní zdrojová fotka (portrét, ne záběr z tlumočení) místo `about-me-2`
 * použité v `AboutBackdrop` — na malém ořízlém formátu 4:5 potřebuje obličej
 * blíž kameře, ne širší dokumentární záběr. Ohnisko `22 %` shora nechává nad
 * hlavou minimální okraj a ořezává hlavně dolní část (rameno, oblečení),
 * protože zdrojová fotka je užší (2:3) než cílový 4:5 rámeček a `object-cover`
 * tak ořezává hlavně na výšku.
 */
function AboutMobilePhoto() {
  return (
    <div
      className="relative mt-10 overflow-hidden rounded-lg lg:hidden"
      style={{ aspectRatio: "4 / 5" }}
    >
      <Image
        src="/foto/about-me-mobile.webp"
        alt={about.photoAlt}
        fill
        sizes="(min-width: 640px) 600px, 100vw"
        className="photo-mono object-cover object-[50%_22%]"
      />
    </div>
  );
}

/**
 * Fotka přes celou sekci + navy overlay soustředěný tam, kde leží text.
 * Jen od `lg` (`hidden lg:block` na kořenovém divu) — pod `lg` nahrazuje foto
 * za textem samostatný portrét `AboutMobilePhoto`, viz komentář u `bg-deep`
 * u `<section>`. Interní mobilní/tabletní varianta overlaye z dřívějška
 * (kdy foto leželo za textem na všech šířkách) proto odpadla, je od téhle
 * změny nedosažitelná.
 *
 * Revize (klientčin brief, 14. 8. 2026): dřívější fotka z tlumočení byla
 * podle klientky "fakt nutné vyměnit". Nahrazena svatební fotkou bez
 * vodoznaku (`foto-svatba-horizontal-2.jpg` z podkladů, přejmenováno na
 * `about-svatba.jpg`) – klientka tlumočila přímo na obřadu, takže záběr
 * sedí do stejné kategorie "dokumentární, ne pózovaný portrét" jako předtím.
 *
 * `-scale-x-100`: na zdrojové fotce stojí Daniela vpravo, novomanželé
 * a hosté vlevo. Gradient níž ale ztmavuje PRAVOU polovinu (tam sedí text)
 * a nechává levou čitelnou – beze zrcadlení by tak byla klientka schovaná
 * pod nejtmavší částí přechodu a viditelní by zůstali jen hosté. Vodorovné
 * zrcadlení přes CSS (ne úprava zdrojového souboru) ji přesune do klidné
 * levé třetiny, přesně tam, kde ji drželo `object-position` u staré fotky.
 * Scéna nemá čitelný text ani asymetrické prvky, které by zrcadlením
 * vypadaly špatně (žádné cedule, hodinky na "špatné" ruce apod.).
 *
 * Ohnisko `object-position` drží Danielu v levé třetině zrcadleného výřezu,
 * takže napravo od ní zůstává klidná plocha zeleně a dřevěné pergoly – přesně
 * tam, kde je overlay nejtmavší a kde sedí text.
 *
 * Gradient vede zleva doprava, ne shora dolů jako u hero – tady se overlay
 * soustředí na pravou polovinu, kde je textový sloupec, a nechává levou
 * stranu fotky čitelnou.
 */
function AboutBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 hidden bg-deep lg:block">
      {/*
       * Bez `priority`: sekce leží pod ohybem a pod `lg` se vůbec nevykresluje.
       * Preload by na mobilu stahoval obrázek, který nikdo neuvidí, a na
       * desktopu by soutěžil s portrétem v hero, který LCP skutečně drží.
       */}
      <Image
        src="/foto/about-svatba.jpg"
        alt=""
        fill
        sizes="(min-width: 1024px) 100vw, 0px"
        className="photo-mono -scale-x-100 object-cover object-[30%_20%]"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-deep/10 from-25% via-deep/80 via-55% to-deep to-78%" />

      {/*
       * Horní dofade do plné navy, nezávislý na obou gradientech výš. Foto
       * jede až k horní hraně sekce, zatímco TrustBar nad ní je plná
       * `--color-deep` plocha — bez tohohle pásu vzniká přesně na švu tvrdá
       * čára (revize „seamless přechody mezi sekcemi").
       */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-deep to-transparent md:h-44 lg:h-56" />

      {/*
       * Spodní dofade do plné navy. Mobilní/tabletní gradient výš už je u
       * spodní hrany plný deep, ale desktopní gradient jede jen zleva doprava
       * (bez svislé složky) — vlevo dole tak foto zůstává jen slabě
       * ztlumené a naráží do plné `--color-deep` plochy Služeb pod ním.
       */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-deep to-transparent md:h-44 lg:h-56" />
    </div>
  );
}

/**
 * Statistiky. Dřív stály jako samostatný panel přes spodek ořezané fotky –
 * teď je fotka full-bleed a panel by na ní vypadal jako nalepený box, tak
 * čísla jedou v řadě uvnitř textového sloupce, mezi badge a tlačítky.
 *
 * Dvě dlaždice, ne tři – třetí ("24 h / Na nacenění zdarma") padla se
 * zbytkem časových slibů na webu, `grid-cols-2` proto místo `grid-cols-3`.
 */
function AboutStats() {
  return (
    <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-on-deep-line pt-8 lg:mt-[min(2vh,1.25rem)] lg:gap-4 lg:pt-[min(1.5vh,1.25rem)]">
      {about.stats.map((stat) => (
        <div key={stat.id}>
          <dt className="sr-only">{stat.label}</dt>

          <dd>
            <p className="font-display text-[clamp(1.75rem,2.4vw,2.25rem)] font-medium leading-none tracking-[-0.02em] text-on-deep">
              {/* Čtečka slyší hotové číslo, ne každý mezikrok odpočtu. */}
              <span className="sr-only">
                {stat.value}
                {stat.suffix}
              </span>

              <span aria-hidden="true">
                <CountUp value={stat.value} />
                {stat.suffix}
              </span>
            </p>

            <p className="mt-2 text-small leading-snug text-on-deep-2">
              {stat.label}
            </p>
          </dd>
        </div>
      ))}
    </dl>
  );
}
