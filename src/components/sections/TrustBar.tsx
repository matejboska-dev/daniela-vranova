import { Section } from "@/components/layout/Section";
import { trust } from "@/content/home";

/**
 * KVALIFIKACE POD HERO — velký textový řádek
 *
 * Bez eyebrow štítku, bez ikon. Čtyři tvrzení jedou rovnou ve velikosti H3,
 * černě, oddělená tečkou jako v masthead řádku novin. Animace `.trust-item-in`
 * / `.trust-dot-in` je čisté CSS (viz globals.css) spouštěné při načtení, ne
 * přes scroll — sekce leží hned pod hero, takže sdílený scroll-reveal by na
 * ni nikdy nenajel, dokud by uživatel neposunul stránku. Tečka před každým
 * dalším tvrzením naskočí těsně před ním, aby řádek působil jako psaný text,
 * ne jako čtyři nezávislé bloky. Hover na textu je jediný náznak interakce,
 * jinak je lišta statická.
 */
export function TrustBar() {
  return (
    <Section
      id="kvalifikace"
      tone="deep"
      spacing="band"
      labelledBy="trust-label"
      className="relative isolate overflow-hidden py-10 md:py-14"
    >
      <TrustBarBackdrop />

      <h2 id="trust-label" className="sr-only">
        {trust.label}
      </h2>

      <div className="mx-auto max-w-fit rounded-2xl border border-white/15 bg-white/[0.07] px-5 py-3.5 backdrop-blur-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.25)] sm:px-7 sm:py-4 lg:px-7 lg:py-4 xl:rounded-full">
        {/*
         * Velikost textu a mezer se zastaví na `lg` a dál neroste (dřív
         * skákala ještě na `xl` a `2xl` — nad kontejnerovým stropem 1240 px se
         * obsah přestal vejít a `overflow-hidden` na sekci ho uřízl, u 2xl přes
         * 100 px). Vynucení jednoho řádku (`flex-nowrap` + `rounded-full`)
         * navíc čeká až na `xl`: přesně na hranici `lg` (1024 px) má stránka
         * ještě jen 64px okraj a čtyři položky s tečkami se do jednoho řádku
         * o pár desítek px nevejdou. Mezi 1024–1279 px proto pilulka radši
         * zalomí na dva řádky (zaoblení `rounded-2xl`, ne `rounded-full`,
         * aby dva řádky nevytvořily podlouhlý stadion) — nikdy nic neuřízne.
         */}
        <ul className="flex flex-wrap items-center justify-center gap-x-3.5 gap-y-2.5 lg:gap-x-4 xl:flex-nowrap">
          {trust.items.map((item, i) => (
            <li key={item.id} className="flex items-center gap-x-3.5 lg:gap-x-4">
              {i > 0 ? (
                <span
                  aria-hidden="true"
                  className="trust-dot-in hidden text-sm sm:text-base lg:inline-block lg:text-[1.05rem] text-on-deep-accent font-semibold"
                  style={{ animationDelay: `${i * 140 - 60}ms` }}
                >
                  ·
                </span>
              ) : null}
              <span
                className="trust-item-in text-sm sm:text-base lg:text-[1.05rem] whitespace-nowrap text-on-deep font-medium tracking-tight drop-shadow-sm"
                style={{ animationDelay: `${i * 140}ms` }}
              >
                {item.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/**
 * Pozadí sekce — sytá tmavá navy plocha s radial gradientem pro tekutý "navy liquid glassy" efekt.
 */
function TrustBarBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 bg-deep">
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_20%,rgba(11,31,58,0.75)_0%,rgba(11,31,58,0.92)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_0%,rgba(41,171,226,0.12)_0%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0b1f3a] via-[#0b1f3a]/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0b1f3a] via-[#0b1f3a]/80 to-transparent" />
    </div>
  );
}
