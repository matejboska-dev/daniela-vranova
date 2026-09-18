import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/layout/Container";
import { SocialIconLink } from "@/components/ui/SocialIconLink";
import { getContent, localeHome, type Locale } from "@/content";

/**
 * PATIČKA
 * Navy plocha, čtyři sloupce: značka s kontakty, služby, informace,
 * kvalifikace. Nad spodním řádkem stojí právní identifikace (jméno, IČO,
 * sídlo dle ARES) – povinný údaj, ne kosmetika. Spodní řádek nese copyright,
 * obě domény a odkazy na Ochranu osobních údajů a Obchodní podmínky
 * (samostatné podstránky, `/ochrana-osobnich-udaju` a `/obchodni-podminky`).
 *
 * KONTROLA OBSAHU: v patičce ani nikde jinde na stránce se neuvádí členství
 * v JTP — klientka už členkou není. Kvalifikace se uvádí výhradně jako
 * "soudní tlumočnice jmenovaná soudem" a "členka Komory soudních tlumočníků
 * ČR". Zdroj těchto řádků je `footer.qualifications` v obsahovém souboru,
 * takže je to na jednom místě a nedá se to omylem rozejít.
 */
export function SiteFooter({ locale }: { locale: Locale }) {
  const { brand, footer, legal } = getContent(locale);

  return (
    <footer className="on-deep bg-deep py-20 text-on-deep-2">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Logo href={localeHome[locale]} size="lg" locale={locale} />

            <p className="mt-6 text-small">{footer.position}</p>

            <ul className="mt-4 space-y-1 text-small">
              <li>
                <a href={brand.phone.href} className="transition-colors duration-150 hover:text-brand-soft">
                  {brand.phone.label}
                </a>
              </li>
              <li>
                <a href={brand.email.href} className="transition-colors duration-150 hover:text-brand-soft">
                  {brand.email.label}
                </a>
              </li>
            </ul>

            {/*
             * Revize (klientčin brief, bod 6 + zpětná vazba 17. 8. 2026):
             * ikonová tlačítka, ne malé ikonky bez kontextu ani text. Klientka
             * aktivně plní Instagram Stories obsahem z akcí
             * (@certified_interpreter), proto stojí hned vedle kontaktu, ne
             * až za dalšími sloupci.
             */}
            <div className="mt-4 flex gap-3">
              <SocialIconLink icon="instagram" {...brand.social.instagram} />
              <SocialIconLink icon="linkedin" {...brand.social.linkedin} />
            </div>
          </div>

          {footer.columns.map((column) => (
            <div key={column.id}>
              <h2 className="util font-sans text-on-deep">{column.title}</h2>

              <ul className="mt-5 space-y-3 text-small">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition-colors duration-150 hover:text-brand-soft">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="util font-sans text-on-deep">
              {footer.qualifications.title}
            </h2>

            {/*
             * Revize 2. kolo, body 3.3 a 3.4: text "jmenovaná soudem"
             * nahrazen "jmenovaná Ministerstvem spravedlnosti" a obě tvrzení
             * vedou na veřejný zdroj, kde si je návštěvník ověří. Odkazy jsou
             * bez podtržení, aby sloupec kvalifikací dál četl jako výčet
             * faktů, ne jako druhé menu vedle sousedních sloupců.
             */}
            <ul className="mt-5 space-y-3 text-small">
              {footer.qualifications.items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-150 hover:text-brand-soft"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/*
         * Právní řádek (klientčin brief): plné jméno, IČO a sídlo dle ARES,
         * jediný zdroj je `legal` v obsahovém souboru. Stojí nad kontaktním
         * řádkem samostatně, ne vmáčknuté mezi copyright a odkazy – je to
         * identifikační údaj, ne další prvek téhož seznamu.
         */}
        <div className="mt-16 border-t border-on-deep-line pt-8">
          <p className="text-small text-on-deep-2">
            {legal.name} · {legal.icoLabel} {legal.ico} · {legal.address}
          </p>

          <div className="mt-4 flex flex-col gap-4 text-small md:flex-row md:items-center md:justify-between">
            <p>{footer.copyright}</p>

            <p>{footer.domains.join(" · ")}</p>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a href={footer.privacy.href} className="transition-colors duration-150 hover:text-brand-soft">
                {footer.privacy.label}
              </a>

              <a href={footer.terms.href} className="transition-colors duration-150 hover:text-brand-soft">
                {footer.terms.label}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
