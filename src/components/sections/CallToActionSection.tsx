import { Section } from "@/components/layout/Section";
import { Button, TextLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { brand, callToAction } from "@/content/home";

/**
 * VÝZVA K AKCI — pás mezi procesem a fakty
 * Jedno primární CTA a vedle něj dvě přímé cesty ke kontaktu. Kdo nechce
 * vyplňovat formulář, zavolá; kdo chce poslat dokument, napíše.
 *
 * Sekce jede na tmavě modré ploše (tone="deep"), stejně jako zbytek stránky
 * od Variant dál — sjednocený navy liquid glass rytmus.
 */
export function CallToActionSection() {
  return (
    <Section
      id="poptavka"
      tone="deep"
      spacing="band"
      labelledBy="cta-title"
      className="relative isolate overflow-hidden"
    >
      <CallToActionBackdrop />
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <h2 id="cta-title" className="text-h2 text-ink [.on-deep_&]:text-on-deep">
            {callToAction.title}
          </h2>

          <p className="mt-6 max-w-lead text-body-l [.on-deep_&]:text-on-deep-2">
            {callToAction.description}
          </p>

          <Button href={callToAction.cta.href} className="mt-10">
            {callToAction.cta.label}
          </Button>
        </div>

        <Card className="lg:col-span-5">
          <p className="util text-ink-muted [.on-deep_&]:text-on-deep-2">
            {callToAction.contactLabel}
          </p>

          <ul className="mt-6 space-y-4">
            <li className="flex items-center gap-3">
              <Icon
                name="phone"
                className="size-5 shrink-0 text-accent [.on-deep_&]:text-on-deep-accent"
              />
              <TextLink href={brand.phone.href} className="text-body">
                {brand.phone.label}
              </TextLink>
            </li>
            <li className="flex items-center gap-3">
              <Icon
                name="mail"
                className="size-5 shrink-0 text-accent [.on-deep_&]:text-on-deep-accent"
              />
              <TextLink href={brand.email.href} className="break-all text-body">
                {brand.email.label}
              </TextLink>
            </li>
          </ul>
        </Card>
      </div>
    </Section>
  );
}

/**
 * Pozadí sekce — sytá tmavá navy plocha s radial gradientem pro tekutý "navy liquid glassy" efekt.
 */
function CallToActionBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 bg-deep">
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_20%,rgba(11,31,58,0.75)_0%,rgba(11,31,58,0.92)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_0%,rgba(41,171,226,0.12)_0%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0b1f3a] via-[#0b1f3a]/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b1f3a] via-[#0b1f3a]/80 to-transparent" />
    </div>
  );
}
