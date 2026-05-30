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
    default: "Boris Hierso Alphandéry · Head of Sales, coach négo, créateur d'outils IA",
    template: "%s · Boris Hierso Alphandéry",
  },
  description:
    "Sales depuis 10 ans. Head of Sales freelance chez Exoteach et Avelor Spirits, intervenant à Euridis Business School, créateur d'outils IA pour équipes commerciales.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Boris Hierso Alphandéry",
    title: "Boris Hierso Alphandéry · Head of Sales, coach négo, créateur d'outils IA",
    description:
      "Sales depuis 10 ans. Head of Sales freelance, coach négociation à Euridis Business School, créateur d'outils IA pour équipes commerciales.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boris Hierso Alphandéry",
    description:
      "Head of Sales freelance, coach négo, créateur d'outils IA pour équipes commerciales.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Boris Hierso Alphandéry",
              url: SITE_URL,
              jobTitle: "Head of Sales & Intervenant",
              worksFor: [
                { "@type": "Organization", name: "Exoteach" },
                { "@type": "Organization", name: "Avelor Spirits" },
                { "@type": "Organization", name: "Euridis Business School" },
              ],
              sameAs: [
                "https://www.linkedin.com/in/boris-hierso-alphandery",
                "https://coaching.hiersoboris.fr",
                "https://toolsbox.hiersoboris.fr",
              ],
              knowsAbout: [
                "B2B Sales",
                "Négociation",
                "Prospection",
                "Sales Ops",
                "IA appliquée à la vente",
                "Social Selling",
                "Coaching commercial",
              ],
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
