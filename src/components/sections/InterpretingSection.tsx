import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Icon, type IconName } from "@/components/ui/Icon";
import { SocialIconLink } from "@/components/ui/SocialIconLink";
import { brand, interpreting } from "@/content/home";

/*
 * Web je teď jen český, EN mutace teprve přijde (`content/home.en.ts` +
 * `app/[locale]/page.tsx`, viz PRODUCT.md → Operating Context). Funkce místo
 * natvrdo napsaného literálu `"cs"` je záměrná: TypeScript by jinak zúžil typ
 * konstanty na samotné `"cs"` a porovnání s `"en"` níž by nahlásil jako
 * nedosažitelné, přestože typ `locale` je oficiálně `"cs" | "en"`.
 */
function getLocale(): "cs" | "en" {
  return "cs";
}

/**
 * TLUMOČENÍ — vlastní sekce, ne karta v mřížce dokumentů (Služby).
 *
 * Revize (klientčin brief, 14. 8. 2026): tlumočení dřív bylo neviditelné pro
 * polovinu poptávky, protože šlo najít jen jako jednu z osmi karet uvnitř
 * Služeb. Sekce teď stojí samostatně hned za Službami, s vlastní položkou
 * v hlavní navigaci ("Tlumočení" vedle "Překlady", `content/home.ts`), a
 * rozpadá nabídku na tři jasně odlišené situace místo jedné karty.
 *
 * Sekce jede na stejné tmavě modré ploše (`tone="deep"`) jako zbytek
 * stránky — sjednocený navy liquid glass rytmus z `page.tsx`.
 */
export function InterpretingSection() {
  /*
   * Web je teď jen český, EN mutace teprve přijde (viz PRODUCT.md →
   * Operating Context). "Tlumočení pro autoškoly" dává podle klientky smysl
   * jen pro cizince skládající zkoušky v ČR, tedy jen v anglické verzi —
   * na téhle (CS) stránce se proto nevykresluje. Až vznikne `home.en.ts`
   * a `app/[locale]/page.tsx`, stačí sem přivést skutečnou locale místo
   * natvrdo zapsané "cs".
   */
  const locale = getLocale();
  const categories = interpreting.categories.filter(
    (category) => !("enOnly" in category && category.enOnly) || locale === "en",
  );

  return (
    <Section
      id="tlumoceni"
      tone="deep"
      labelledBy="interpreting-title"
      className="relative isolate overflow-hidden"
    >
      <InterpretingBackdrop />

      <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionLabel>{interpreting.label}</SectionLabel>

          <h2
            id="interpreting-title"
            className="mt-6 text-h2 text-on-deep"
          >
            {interpreting.title}
          </h2>
        </div>

        <p className="max-w-lead text-body-l lg:col-span-7 lg:pt-2 text-on-deep-2">
          {interpreting.description}
        </p>
      </div>

      <ul
        className={
          "mt-16 grid gap-6 " +
          (categories.length === 3
            ? "sm:grid-cols-2 lg:grid-cols-3"
            : "sm:grid-cols-2")
        }
      >
        {categories.map((category) => (
          <li key={category.id} className="reveal">
            <Card className="flex h-full flex-col">
              <Icon
                name={category.icon as IconName}
                className="size-7 text-on-deep-accent"
              />

              <h3 className="mt-6 text-h3 text-on-deep">{category.title}</h3>

              <p className="mt-3 text-body">{category.description}</p>
            </Card>
          </li>
        ))}
      </ul>

      <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-5">
          <div
            className="relative overflow-hidden rounded-[28px] border border-white/15 shadow-[0_25px_70px_-20px_rgba(0,0,0,0.55),inset_0_1px_0_0_rgba(255,255,255,0.25)]"
            style={{ aspectRatio: "4 / 5" }}
          >
            <Image
              src="/foto/o2-arena-kabina.jpg"
              alt={interpreting.photoAlt}
              fill
              sizes="(min-width: 1024px) 420px, 100vw"
              className="photo-mono object-cover object-[50%_35%]"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="text-body-l text-on-deep">
            {interpreting.references.intro}
          </p>

          <ul className="mt-4 flex flex-col gap-y-2.5">
            {interpreting.references.items.map((item) => (
              <li key={item} className="flex items-center gap-x-3">
                <span aria-hidden="true" className="text-on-deep-accent">
                  ·
                </span>
                <span className="text-h3 text-on-deep">{item}</span>
              </li>
            ))}
          </ul>

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
 * Pozadí sekce — sytá tmavá navy plocha s radial gradientem pro tekutý "navy liquid glassy" efekt.
 */
function InterpretingBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 bg-deep">
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_20%,rgba(11,31,58,0.75)_0%,rgba(11,31,58,0.92)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_0%,rgba(41,171,226,0.12)_0%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0b1f3a] via-[#0b1f3a]/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b1f3a] via-[#0b1f3a]/80 to-transparent" />
    </div>
  );
}
