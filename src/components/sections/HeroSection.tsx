import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { Button } from "@/components/ui/Button";
import { hero } from "@/content/home";

/**
 * HERO — první obrazovka
 * Navy plocha s video smyčkou na pozadí a fotografií klientky vpředu (dle
 * reference kolarova.legal), vlevo nadpis a dvě CTA.
 *
 * Text přes obraz vždy leží na overlay `--media-overlay`, tedy navy gradient
 * 0,78 nahoře → 0,55 dole. Poster snímek je nejsvětlejší záběr celé smyčky
 * (bílý stůl v protisvětle) a bez téhle hodnoty by nadpis neprošel kontrastem.
 */
export function HeroSection() {
  return (
    <section
      id="uvod"
      aria-labelledby="hero-title"
      className="on-deep relative isolate flex min-h-[560px] lg:min-h-screen lg:h-screen items-center overflow-hidden bg-deep pb-16 pt-[calc(var(--header-h)+2rem)]"
    >
      <HeroBackdrop />
      <HeroPortrait />

      <Container className="relative z-10">
        <div className="max-w-[640px] lg:max-w-[600px]">
          <SectionLabel>{hero.eyebrow}</SectionLabel>

          <h1 id="hero-title" className="mt-5 text-display text-on-deep">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-lead text-body-l text-on-deep-2">
            {hero.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="outline">
              {hero.secondaryCta.label}
            </Button>
          </div>

          {/*
           * Jediná věta, která na webu nahrazuje chybějící ceník. Proto stojí
           * hned pod tlačítky a nad ohybem, ne až v sekci Kontakt.
           */}
          <p className="mt-5 text-small text-on-deep-2">{hero.assurance}</p>
        </div>
      </Container>
    </section>
  );
}

/**
 * Video se servíruje z jsDelivr (CDN zrcadlo GitHub repa), ne z /public —
 * jsDelivr sedí na Cloudflare edge síti, takže se soubor stahuje z uzlu
 * blízko návštěvníka místo z jednoho originu. Pro 14MB soubor to citelně
 * zkracuje čas do prvního přehrání oproti servírování z vlastního serveru.
 */
const HERO_VIDEO_URL =
  "https://cdn.jsdelivr.net/gh/matejboska-dev/daniela-vranova-background-video/vranova%20background%20video.webm";

/** První snímek smyčky, vytažený z videa. Zároveň fallback pod 768 px. */
const HERO_POSTER = "/foto/hero-poster.jpg";

/**
 * Pozadí hero sekce.
 *
 * `<source media="...">` stahuje video jen na displeji od 768 px a jen když
 * uživatel nežádá omezení pohybu. Pod tou hranicí a při prefers-reduced-motion
 * se video vůbec nestáhne a zůstane statický poster — čistě přes atribut
 * media na zdroji, bez JavaScriptu (revize bod 29).
 *
 * Vrstvy zdola nahoru:
 *   1. video / poster, desaturované na 45 % sytosti (obrazový jazyk §7)
 *   2. navy gradient 0,78 → 0,55, drží kontrast textu
 *   3. jemný Sky nádech vpravo nahoře — jediné místo na celém webu, kde se
 *      Sky #29ABE2 objevuje (revize bod 2)
 */
function HeroBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="hero-backdrop absolute inset-0 -z-10 bg-deep"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={HERO_POSTER}
        aria-hidden="true"
        className="slow-zoom absolute inset-0 h-full w-full object-cover [filter:saturate(0.45)_contrast(1.05)]"
      >
        <source
          src={HERO_VIDEO_URL}
          type="video/webm"
          media="(min-width: 768px) and (prefers-reduced-motion: no-preference)"
        />
      </video>

      <div className="absolute inset-0 bg-[image:var(--media-overlay)]" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_78%_18%,rgba(41,171,226,0.20)_0%,rgba(11,31,58,0)_58%)]" />

      {/*
       * Spodní dofade do plné navy. Bez něj video/poster jede až na hranici
       * sekce jen s overlay 0,55 (viz --media-overlay výš) a naráží tvrdě do
       * plné `--color-deep` plochy TrustBaru pod ním — vidět jako ostrá čára.
       */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-deep md:h-44 lg:h-56" />
    </div>
  );
}

/**
 * Fotografie klientky vpředu. Výřez s průhledným pozadím, ukotvený ke spodní
 * a pravé hraně sekce. Pod 1024 px se skrývá — na mobilu by text zatlačila
 * pod ohyb (revize bod 29).
 *
 * Zdrojový výřez má napravo tvrdou hranu (rameno doříznuté rovnou čarou). Levý
 * okraj masky ji schová: plocha se zleva zprůhlední do navy pozadí, takže
 * fotka do sekce "vplouvá" místo aby v ní ležela jako nalepený obdélník.
 *
 * Desaturace jede přes sdílenou třídu `.photo-mono`, shodnou se sekcí O mně.
 * Dvě různé hodnoty grayscale na jedné stránce se bijí (revize bod 1).
 */
function HeroPortrait() {
  return (
    <div
      aria-hidden="true"
      style={{
        WebkitMaskImage: "linear-gradient(to right, transparent, black 18%)",
        maskImage: "linear-gradient(to right, transparent, black 18%)",
      }}
      className="hero-photo-in pointer-events-none absolute bottom-0 right-0 hidden h-[86%] w-[42%] max-w-[520px] lg:block"
    >
      <Image
        src="/foto/daniela-vranova.png"
        alt=""
        fill
        priority
        sizes="520px"
        /*
         * object-right-bottom, ne jen object-bottom: "contain" jinak obrázek
         * vodorovně centruje uvnitř wrapperu, takže by od pravé hrany zůstala
         * mezera i přesto, že wrapper sám je zarovnaný na okraj sekce.
         */
        className="photo-mono object-contain object-right-bottom"
      />
    </div>
  );
}
