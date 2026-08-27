"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { getContent, type Locale } from "@/content";
import { cn } from "@/lib/cn";

/**
 * MOBILNÍ STICKY LIŠTA (revize bod 30)
 *
 * Telefon vlevo, formulář vpravo.
 * V hero sekci je lišta skrytá, aby nezakrývala fotografii a obsah hero.
 * Jakmile uživatel odscroluje z hero sekce dolů, lišta plynule vyjede.
 *
 * Jen pod 768 px (`md:hidden`). Na desktopu se nepoužívá.
 */
export function StickyCallBar({ locale }: { locale: Locale }) {
  const { stickyBar } = getContent(locale);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("uvod");
    if (!hero) {
      const onScroll = () => setVisible(window.scrollY > 350);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Když je hero vidět ve viewportu, lišta je schovaná
        setVisible(!entry.isIntersecting);
      },
      {
        threshold: 0.05,
      },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={cn(
        "on-deep fixed inset-x-0 bottom-0 z-header border-t border-on-deep-line bg-deep/90 backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 ease-micro md:hidden",
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0 pointer-events-none",
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2">
        <a
          href={stickyBar.call.href}
          tabIndex={visible ? 0 : -1}
          className="flex h-14 items-center justify-center gap-2 text-small font-medium text-on-deep"
        >
          <Icon name="phone" className="size-4 text-brand-soft" />
          {stickyBar.call.label}
        </a>

        <a
          href={stickyBar.form.href}
          tabIndex={visible ? 0 : -1}
          className="flex h-14 items-center justify-center gap-2 bg-accent text-small font-medium text-white"
        >
          {stickyBar.form.label}
        </a>
      </div>
    </div>
  );
}
