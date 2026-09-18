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

  const languages = {
    cs: absoluteUrl("/"),
    en: absoluteUrl("/en"),
    "x-default": absoluteUrl("/"),
  };
  const privacyLanguages = {
    cs: absoluteUrl("/ochrana-osobnich-udaju"),
    en: absoluteUrl("/en/privacy-policy"),
    "x-default": absoluteUrl("/ochrana-osobnich-udaju"),
  };
  const termsLanguages = {
    cs: absoluteUrl("/obchodni-podminky"),
    en: absoluteUrl("/en/terms-and-conditions"),
    "x-default": absoluteUrl("/obchodni-podminky"),
  };
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
    /* Právní podstránky v české i anglické mutaci. */
    {
      url: absoluteUrl("/ochrana-osobnich-udaju"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: { languages: privacyLanguages },
    },
    {
      url: absoluteUrl("/obchodni-podminky"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: { languages: termsLanguages },
    },
    {
      url: absoluteUrl("/en/privacy-policy"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: { languages: privacyLanguages },
    },
    {
      url: absoluteUrl("/en/terms-and-conditions"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: { languages: termsLanguages },
    },
  ];
}
