import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE_URL } from "@/lib/site-url";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Boris Hierso Alphandéry · Head of Sales, coach & maker IA",
    template: "%s · Boris Hierso Alphandéry",
  },
  description:
    "Head of Sales freelance, coach en négociation et créateur d'outils IA. 10 ans de vente B2B. Disponible pour missions, CDI, formations et conférences. Basé à Paris.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Boris Hierso Alphandéry",
    title: "Boris Hierso Alphandéry · Head of Sales, coach & maker IA",
    description:
      "Head of Sales freelance, coach en négociation et créateur d'outils IA. 10 ans de vente B2B. Disponible pour missions, CDI, formations et conférences. Basé à Paris.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="antialiased">
        <a href="#contenu" className="skip-link">
          Aller au contenu
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Boris Hierso Alphandéry",
              url: SITE_URL,
              image: `${SITE_URL}/portrait.jpg`,
              jobTitle: "Head of Sales freelance, coach et intervenant",
              description:
                "Head of Sales freelance, coach en négociation et créateur d'outils IA. 10 ans de vente B2B. Intervient aussi en conférences et formations (CCI, écoles, événements).",
              email: "mailto:hierso.boris@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Paris",
                addressCountry: "FR",
              },
              worksFor: [
                { "@type": "Organization", name: "Exoteach" },
                { "@type": "Organization", name: "Avelor Spirits" },
                { "@type": "Organization", name: "WoMa" },
                { "@type": "Organization", name: "Euridis Business School" },
              ],
              alumniOf: [
                { "@type": "Organization", name: "HappyPal" },
                { "@type": "Organization", name: "ValueCo" },
              ],
              sameAs: [
                "https://www.linkedin.com/in/boris-hierso-alphandery",
                "https://www.instagram.com/borishierso",
                "https://coaching.hiersoboris.fr",
                "https://toolsbox.hiersoboris.fr",
              ],
              knowsAbout: [
                "Vente B2B",
                "Négociation",
                "Prospection",
                "Sales Ops",
                "IA appliquée à la vente",
                "Social Selling",
                "Coaching commercial",
                "Formation commerciale",
                "Prise de parole et conférences",
                "Management commercial",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Boris Hierso Alphandéry",
              url: SITE_URL,
              inLanguage: "fr-FR",
              author: {
                "@type": "Person",
                name: "Boris Hierso Alphandéry",
              },
            }),
          }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
