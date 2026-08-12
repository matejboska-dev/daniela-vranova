"use client";

import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { header } from "@/content/home";

/**
 * HLAVIČKA
 * Vždy v inverzní (on-deep) barevné sadě — bílý text na tmavé navy ploše,
 * nikdy se nepřepíná na bílé pozadí s tmavým textem. Nad hero je zcela
 * průhledná. Po odscrollování 40 px se pod textem objeví tmavě navy sklo
 * (poloprůhledné pozadí + blur, "liquid glass") a zároveň se sníží z 80 na
 * 64 px. Barva pozadí je dost sytá (80 % krytí), aby text prošel kontrastem
 * nad libovolným obsahem, který pod ní zrovna projíždí.
 *
 * MOBILNÍ MENU je samostatný `<MobileMenu>` vedle `<header>`, ne uvnitř něj
 * (viz komentář dole u JSX). Skutečný zdroj dřívější "nespolehlivosti" byl
 * strukturní: menu bylo vnořené v `<header>`, takže jeho vlastní `z-index`
 * platil jen uvnitř hlavičkina stacking contextu (ten sám sedí na `z-header`).
 * `StickyCallBar` (lišta Zavolat / Nacenění zdarma) běží na stejném
 * `z-header`, ale vykresluje se v DOM až za patičkou, tedy později — při
 * shodném z-indexu vyhrává pozdější element, takže lišta ležela NAD celým
 * fullscreen menu a přebírala kliknutí na spodní položky. Menu jako sibling
 * s vlastním vyšším `z-overlay` tohle obchází úplně.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /*
   * Zámek scrollu pod otevřeným menu. `overflow: hidden` na body v Safari na
   * iOS nespolehlivě drží — stránka pod menu se přesto dá "rubber-band"
   * odtáhnout. Zafixování body na aktuální scroll pozici je jediný způsob,
   * který drží ve všech mobilních prohlížečích; po zavření se scroll vrátí
   * přesně tam, kde byl.
   */
  useEffect(() => {
    if (!menuOpen) return;

    const scrollY = window.scrollY;
    const { body } = document;
    const previous = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
    };

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      body.style.position = previous.position;
      body.style.top = previous.top;
      body.style.left = previous.left;
      body.style.right = previous.right;
      body.style.width = previous.width;
      window.scrollTo(0, scrollY);
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  /* Zavřením menu se fokus vrací na tlačítko, které ho otevřelo. */
  useEffect(() => {
    if (!menuOpen) triggerRef.current?.focus();
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-header on-deep transition-all duration-300 ease-micro",
          scrolled || menuOpen
            ? "border-b border-on-deep-line bg-deep/80 shadow-lg backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <Container>
          {/*
            Mřížka 1fr auto 1fr, ne flex s justify-between: menu tak leží přesně
            na ose kontejneru bez ohledu na to, jak široké je logo a pravá
            skupina. Kdyby se navigace roztáhla podle obsahu, ujelo by
            vycentrování při každé změně délky položek nebo textu CTA.

            `invisible` při otevřeném menu: obsah je stejně schovaný pod
            neprůhledným fullscreen panelem, ale bez tohohle by na něj šel
            doskočit Tab a čtečka by ho pořád viděla — `invisible` element
            vyřadí z klávesové i asistivní navigace úplně.
          */}
          <div
            className={cn(
              "grid grid-cols-[1fr_auto_1fr] items-center gap-6 transition-[height] duration-300 ease-micro",
              scrolled || menuOpen
                ? "h-[var(--header-h-scrolled)]"
                : "h-[var(--header-h)]",
              menuOpen && "invisible",
            )}
          >
            {/*
              Sloupce se přiřazují natvrdo. Skrytá navigace vypadne z mřížky
              úplně a bez toho by se pravá skupina automaticky umístila do
              druhého sloupce místo třetího — na mobilu by nedosedla na okraj.
            */}
            <Logo className="col-start-1 justify-self-start" />

            <nav
              aria-label="Hlavní navigace"
              className="col-start-2 hidden justify-self-center lg:block"
            >
              <ul className="flex items-center gap-8">
                {header.nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={cn(
                        "text-small transition-colors duration-150",
                        "text-ink-2 hover:text-accent",
                        "[.on-deep_&]:text-white/75 [.on-deep_&]:hover:text-white",
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="col-start-3 flex items-center gap-4 justify-self-end">
              <LocaleSwitch />

              <div className="hidden sm:block">
                <Button href={header.cta.href} size="sm">
                  {header.cta.label}
                </Button>
              </div>

              <button
                ref={triggerRef}
                type="button"
                aria-expanded={menuOpen}
                aria-controls="mobilni-menu"
                aria-label="Otevřít menu"
                tabIndex={menuOpen ? -1 : 0}
                onClick={() => setMenuOpen(true)}
                className={cn(
                  "flex size-10 items-center justify-center rounded-md",
                  "border border-line-strong text-ink lg:hidden",
                  "[.on-deep_&]:border-white/30 [.on-deep_&]:text-white",
                )}
              >
                <MenuIcon open={false} />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/*
       * Sibling `<header>`, ne potomek — viz komentář nahoře u komponenty.
       * Vždy v DOM (kvůli GSAP exit animaci při zavírání), viditelnost a
       * interaktivitu řídí `open` prop uvnitř `MobileMenu`.
       */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

/** Přepínač jazyka. Druhá mutace je připravená, zatím vede na kotvu. */
function LocaleSwitch() {
  return (
    <ul className="util flex items-center gap-2">
      {header.locales.map((locale) => (
        <li key={locale.code}>
          <a
            href={locale.href}
            aria-current={locale.current ? "true" : undefined}
            className={cn(
              "transition-colors duration-150",
              locale.current
                ? "text-ink [.on-deep_&]:text-white"
                : "text-ink-muted hover:text-accent [.on-deep_&]:text-white/50 [.on-deep_&]:hover:text-white",
            )}
          >
            {locale.code}
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Kdy po otevření panelu naskočí první položka menu. */
const ITEM_BASE_DELAY_S = 0.16;
/** Rozestup mezi položkami. */
const ITEM_STAGGER_S = 0.06;
/** CTA jde jako poslední, s malým překryvem přes konec položek. */
const CTA_DELAY_S = 0.6;

/**
 * Fullscreen mobilní menu. Drží se v DOM pořád (nikdy `menuOpen ? … : null`),
 * viditelnost a interaktivitu řídí atribut `data-open` a CSS přechody
 * (`.menu-panel` / `.menu-item` v globals.css).
 *
 * Dřív to skládal GSAP timeline. Kvůli němu se knihovna dynamicky importovala
 * při každém načtení stránky — i na desktopu, kde je panel `lg:hidden` a nikdy
 * se nezobrazí. Přechody to zvládnou stejně: panel jemně najede, položky se
 * vysypou zdola se stagerem a jako poslední CTA. Zavírání jede na ~65 % času,
 * tedy hbitěji než otevírání, přesně jako původní `timeScale(1 / 0.65)`.
 *
 * `visibility` se přepíná spolu s opacitou (ekvivalent GSAP `autoAlpha`), takže
 * zavřený panel vypadne z Tab pořadí i ze čtečky sám od sebe.
 *
 * Panel má vlastní horní řádek (logo + zavřít) ve stejné výšce, jako má
 * hlavička po scrollu — vizuálně to plynule navazuje na tlačítko, které menu
 * otevřelo, i když je to technicky jiný, samostatný ovládací prvek nad
 * neprůhledným panelem.
 */
function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) closeButtonRef.current?.focus();
  }, [open]);

  return (
    <div
      id="mobilni-menu"
      data-open={open}
      aria-hidden={!open}
      aria-label="Mobilní menu"
      role="dialog"
      aria-modal="true"
      /*
       * Stejný "liquid glass" materiál jako hlavička po scrollu
       * (`bg-deep/80 backdrop-blur-xl backdrop-saturate-150`) — panel má
       * působit jako přímé pokračování hlavičky, ne jako jiná plocha webu.
       * `on-deep` na kořeni aktivuje bílou textovou sadu pro potomky.
       */
      className="menu-panel on-deep fixed inset-0 z-overlay flex flex-col overflow-y-auto bg-deep/80 backdrop-blur-xl backdrop-saturate-150 lg:hidden"
      style={{
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <div className="flex h-[var(--header-h-scrolled)] shrink-0 items-center border-b border-on-deep-line">
        <Container className="flex items-center justify-between">
          <Logo onClick={onClose} />

          <button
            ref={closeButtonRef}
            type="button"
            tabIndex={open ? 0 : -1}
            aria-label="Zavřít menu"
            onClick={onClose}
            className="flex size-10 items-center justify-center rounded-md border border-white/30 text-white"
          >
            <MenuIcon open />
          </button>
        </Container>
      </div>

      <Container className="flex min-h-0 flex-1 flex-col justify-between py-10">
        <nav aria-label="Hlavní navigace">
          <ul className="flex flex-col gap-6">
            {header.nav.map((item, i) => (
              <li
                key={item.href}
                className="menu-item"
                style={
                  {
                    "--item-delay": `${ITEM_BASE_DELAY_S + i * ITEM_STAGGER_S}s`,
                  } as React.CSSProperties
                }
              >
                <a
                  href={item.href}
                  tabIndex={open ? 0 : -1}
                  onClick={onClose}
                  /*
                   * `font-medium` (500): styleguide §4 žádá na navy pozadí
                   * u Playfairu váhu 500 místo 400, jinak vlasové tahy
                   * zmizí — automatické pravidlo v globals.css to hlídá
                   * jen u `h1`/`h2`, tady je to `<a>`, proto natvrdo.
                   */
                  className="font-display text-[28px] font-medium leading-tight text-on-deep transition-colors duration-150 hover:text-on-deep-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className="menu-item mt-12"
          style={{ "--item-delay": `${CTA_DELAY_S}s` } as React.CSSProperties}
        >
          <Button
            href={header.cta.href}
            onClick={onClose}
            tabIndex={open ? 0 : -1}
            className="w-full"
          >
            {header.cta.label}
          </Button>
        </div>
      </Container>
    </div>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      aria-hidden="true"
      className="size-5"
    >
      {open ? (
        <>
          <path d="m6 6 12 12" />
          <path d="m18 6-12 12" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  );
}
