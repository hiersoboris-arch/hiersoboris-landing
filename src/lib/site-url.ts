// Source unique de vérité pour l'URL publique de la landing.
//
// Priorité :
//   1. NEXT_PUBLIC_APP_URL configuré dans Vercel / .env.local
//   2. https://hiersoboris.fr (fallback canonique, apex nu)
//
// Utiliser SITE_URL pour : metadataBase, OpenGraph URL, sitemap, robots,
// canonical. Ne jamais hardcoder une URL en dur dans une page.

const FALLBACK = "https://hiersoboris.fr";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_APP_URL && process.env.NEXT_PUBLIC_APP_URL.startsWith("http")
    ? process.env.NEXT_PUBLIC_APP_URL
    : FALLBACK
).replace(/\/+$/, "");

export const SITE_HOSTNAME = (() => {
  try {
    return new URL(SITE_URL).host;
  } catch {
    return "hiersoboris.fr";
  }
})();
