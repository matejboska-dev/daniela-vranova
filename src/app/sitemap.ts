import type { MetadataRoute } from "next";
import { SITE_LAUNCHED, absoluteUrl } from "@/lib/site";

/**
 * sitemap.xml (Next konvence `app/sitemap.ts`).
 *
 * Dvě URL: česká mutace na kořeni, anglická pod `/en`. `alternates.languages`
 * říká vyhledávači, že jde o překlady téže stránky (hreflang v sitemapě).
 *
 * Dokud web běží jako náhled, vrací prázdno – nemá smysl nabízet crawlerům
 * mapu webu, který je celý za `disallow`.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE_LAUNCHED) return [];

  const languages = { cs: absoluteUrl("/"), en: absoluteUrl("/en") };
  const lastModified = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages },
    },
    {
      url: absoluteUrl("/en"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages },
    },
    /* Právní podstránky – jen v české mutaci, viz `footer.terms`/`footer.privacy`. */
    {
      url: absoluteUrl("/ochrana-osobnich-udaju"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: absoluteUrl("/obchodni-podminky"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
