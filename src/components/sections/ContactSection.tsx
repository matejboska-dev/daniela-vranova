import { Section } from "@/components/layout/Section";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { TextLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { getContent, type Locale } from "@/content";
import { ContactForm } from "./ContactForm";

/**
 * KONTAKT — formulář pro nezávaznou poptávku
 * Rozdělení 5/7: vlevo nadpis, popis a přímé kontakty, vpravo formulář.
 *
 * Revize bod 15: přibyl výběr typu dokumentu, požadovaný termín a drop zóna
 * pro sken. Není to zdobení formuláře — jsou to přesně ty tři věci, na které
 * se klientka musí doptávat e-mailem, když je poptávka neobsahuje. Každá
 * ušetřená otázka je jedna zpráva navíc, kterou nemusí psát.
 *
 * Revize bod 16: v poli jména bylo jako placeholder vymyšlené jméno.
 * Nahrazeno neutrálním popisem pole.
 *
 * Formulář odesílá přes Web3Forms (bez vlastního backendu, viz
 * ContactForm.tsx) na e-mail navázaný na NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.
 *
 * Sekce jede na tmavě modré ploše (tone="navy"). Pole formuláře zůstávají
 * bílá bez ohledu na tón — jen jejich popisky (`FieldShell` v TextField.tsx)
 * a nadpisy mimo pole mají vlastní `[.on-deep_&]:` variantu.
 *
 * Rám formuláře nese liquid glass efekt (backdrop-blur + poloprůhledné bílé
 * pozadí + jemný highlight nahoře) — vědomá výjimka ze styleguide §9 bodu 12
 * ("žádné glassmorphism panely"), zadaná explicitně a zapsaná tam jako
 * schválená výjimka. Nerozšiřovat na další prvky webu bez stejně explicitního
 * zadání.
 */
export function ContactSection({ locale }: { locale: Locale }) {
  const { brand, contact } = getContent(locale);

  return (
    <Section
      id="kontakt"
      tone="deep"
      labelledBy="contact-title"
      className="relative isolate overflow-hidden"
    >
      <ContactBackdrop />
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionLabel>{contact.label}</SectionLabel>

          <h2
            id="contact-title"
            className="mt-6 text-h2 text-ink [.on-deep_&]:text-on-deep"
          >
            {contact.title}
          </h2>

          <p className="mt-6 max-w-lead text-body-l">{contact.description}</p>

          <ul className="mt-10 space-y-4">
            <li className="flex items-center gap-3">
              <Icon
                name="phone"
                className="size-5 shrink-0 text-accent [.on-deep_&]:text-on-deep-accent"
              />
              <TextLink href={brand.phone.href}>{brand.phone.label}</TextLink>
            </li>
            <li className="flex items-center gap-3">
              <Icon
                name="mail"
                className="size-5 shrink-0 text-accent [.on-deep_&]:text-on-deep-accent"
              />
              <TextLink href={brand.email.href} className="break-all">
                {brand.email.label}
              </TextLink>
            </li>
          </ul>
        </div>

        <ContactForm contact={contact} />
      </div>
    </Section>
  );
}

/**
 * Pozadí sekce — sytá tmavá navy plocha s radial gradientem pro tekutý "navy liquid glassy" efekt.
 */
function ContactBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 bg-deep">
      <div className="absolute inset-0 section-veil" />
      <div className="absolute inset-0 section-glow" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-deep via-deep/80 to-transparent" />
    </div>
  );
}
