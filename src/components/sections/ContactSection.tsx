import { Section } from "@/components/layout/Section";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { Button, TextLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import {
  DropZone,
  SelectField,
  TextAreaField,
  TextField,
} from "@/components/ui/TextField";
import { cn } from "@/lib/cn";
import { brand, contact } from "@/content/home";

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
 * Formulář zatím nikam neodesílá. Napojení (server action + notifikace
 * na e-mail + antispam dle nabídky CN-2026-014) přijde ve fázi vývoje.
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
export function ContactSection() {
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

        <form
          className={cn(
            "space-y-6 rounded-[32px] border border-white/15 bg-white/[0.07] p-6",
            "shadow-[0_25px_70px_-20px_rgba(0,0,0,0.55),inset_0_1px_0_0_rgba(255,255,255,0.25)]",
            "backdrop-blur-2xl sm:p-8 md:p-10 lg:col-span-7",
          )}
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <TextField
              id="contact-name"
              name="name"
              label={contact.fields.name.label}
              placeholder={contact.fields.name.placeholder}
              autoComplete="name"
            />
            <TextField
              id="contact-email"
              name="email"
              type="email"
              label={contact.fields.email.label}
              placeholder={contact.fields.email.placeholder}
              autoComplete="email"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <SelectField
              id="contact-document"
              name="typ-dokumentu"
              label={contact.fields.documentType.label}
              placeholder={contact.fields.documentType.placeholder}
              options={contact.fields.documentType.options}
            />
            {/*
             * type="date" otevře nativní kalendář na mobilu i na desktopu.
             * Vlastní datepicker by přidal knihovnu kvůli jednomu poli.
             */}
            <TextField
              id="contact-deadline"
              name="termin"
              type="date"
              label={contact.fields.deadline.label}
              hint={contact.fields.deadline.hint}
            />
          </div>

          <TextAreaField
            id="contact-message"
            name="message"
            label={contact.fields.message.label}
            placeholder={contact.fields.message.placeholder}
          />

          <DropZone
            id="contact-upload"
            label={contact.upload.label}
            dropText={contact.upload.dropText}
            hint={contact.upload.hint}
          />

          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
            {/* type="button" dokud není napojené odesílání — zatím nic neposílá. */}
            <Button type="button" className="w-full sm:w-auto">
              {contact.submitLabel}
            </Button>

            {/* Stejný důvod jako v sekci O mně: muted na `--bg-alt` je 4,21 : 1. */}
            <p className="max-w-[38ch] text-small text-ink-2 [.on-deep_&]:text-on-deep-2">
              {contact.privacyNote}
            </p>
          </div>
        </form>
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
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_20%,rgba(11,31,58,0.75)_0%,rgba(11,31,58,0.92)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_0%,rgba(41,171,226,0.12)_0%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0b1f3a] via-[#0b1f3a]/80 to-transparent" />
    </div>
  );
}
