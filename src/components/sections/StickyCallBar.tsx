import { Icon } from "@/components/ui/Icon";
import { stickyBar } from "@/content/home";

/**
 * MOBILNÍ STICKY LIŠTA (revize bod 30)
 *
 * Telefon vlevo, formulář vpravo. Na mobilu je hero CTA po pár palcích scrollu
 * pryč a člověk, který se rozhodne uprostřed FAQ, nemá kam kliknout.
 *
 * Jen pod 768 px. Na desktopu je v hlavičce sticky CTA, druhá lišta by byla
 * dvě primární akce na obrazovce.
 *
 * Výška lišty se propisuje do `--sticky-bar-h` v globals.css, kde ji `body`
 * přičítá ke spodnímu odsazení — jinak by lišta trvale zakrývala poslední
 * řádek patičky.
 */
export function StickyCallBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-header border-t border-line bg-surface md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2">
        <a
          href={stickyBar.call.href}
          className="flex h-14 items-center justify-center gap-2 text-small font-medium text-ink"
        >
          <Icon name="phone" className="size-4 text-accent" />
          {stickyBar.call.label}
        </a>

        <a
          href={stickyBar.form.href}
          className="flex h-14 items-center justify-center gap-2 bg-accent text-small font-medium text-white"
        >
          {stickyBar.form.label}
        </a>
      </div>
    </div>
  );
}
