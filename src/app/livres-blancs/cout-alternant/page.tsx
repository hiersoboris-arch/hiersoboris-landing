import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { LIVRETS } from "@/lib/livre-blanc";
import { SITE_URL } from "@/lib/site-url";
import SiteHeader from "../../SiteHeader";
import LivreBlancForm from "../../alternance/LivreBlancForm";

const LIVRET = LIVRETS["cout-alternant"];

export const metadata: Metadata = {
  title: "Combien coûte vraiment un alternant en 2026",
  description:
    "Le guide gratuit du financement de l'alternance côté entreprise : grilles de rémunération 2026, aides de l'État et de l'Agefiph, exemples chiffrés aides déduites, démarches dans l'ordre.",
  alternates: { canonical: "/livres-blancs/cout-alternant" },
  openGraph: {
    type: "website",
    title: "Combien coûte vraiment un alternant en 2026 · Livre blanc",
    description:
      "Grilles 2026, aides de l'État, exemples chiffrés : le coût réel d'un alternant, vérifié aux sources officielles.",
  },
};

const CHIFFRES = [
  { value: "430 à 885 €", caption: "le coût net mensuel d'un alternant la 1re année, aides déduites" },
  { value: "5 000 €", caption: "l'aide maximale de l'État, versée chaque mois avant la paie" },
  { value: "3", caption: "exemples chiffrés : BTS, Master 1re année, Master 2e année" },
  { value: "3 168 €", caption: "le surcoût annuel si vous ratez le salaire conventionnel de votre branche" },
];

export default function CoutAlternant() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
              {
                "@type": "ListItem",
                position: 2,
                name: "Livres blancs",
                item: `${SITE_URL}/livres-blancs`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Combien coûte vraiment un alternant en 2026",
                item: `${SITE_URL}/livres-blancs/cout-alternant`,
              },
            ],
          }),
        }}
      />
      <SiteHeader solidFromTop />
      <main id="contenu" className="pt-24 md:pt-28">
        {/* Hero */}
        <section className="max-w-content mx-auto px-6 pb-14 md:pb-20">
          <Link
            href="/livres-blancs"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Tous les livres blancs
          </Link>
          <div className="max-w-3xl">
            <div className="text-xs md:text-sm tracking-[0.2em] uppercase text-bordeaux mb-6">
              Livre blanc · Entreprises &amp; écoles
            </div>
            <h1 className="serif text-4xl md:text-6xl leading-[1.02] tracking-tight">
              Combien coûte vraiment
              <br />
              <span className="italic text-bordeaux">un alternant en 2026.</span>
            </h1>
            <p className="mt-7 text-lg text-muted max-w-2xl leading-relaxed">
              Le guide du financement de l&apos;alternance et des stages, côté
              entreprise. À jour du décret de mars 2026 et du SMIC de juin 2026,
              vérifié aux sources officielles : Légifrance, service-public.fr, URSSAF,
              BOSS. Les règles ont changé trois fois en un an, ce guide suit.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border hairline rounded-2xl overflow-hidden">
            {CHIFFRES.map((c) => (
              <div key={c.caption} className="bg-card p-6 md:p-8">
                <div className="serif text-3xl md:text-4xl mb-2">{c.value}</div>
                <div className="text-sm text-muted leading-relaxed">{c.caption}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Contenu + formulaire */}
        <section className="border-t hairline grain">
          <div className="max-w-content mx-auto px-6 py-16 md:py-24">
            <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="md:col-span-6">
                <div className="text-xs uppercase tracking-[0.18em] text-muted mb-5">
                  <span className="dot" />
                  Ce que vous y trouverez
                </div>
                <h2 className="serif text-3xl md:text-5xl leading-[1.05] tracking-tight">
                  Le vrai chiffrage, pas la plaquette.
                </h2>
                <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl">
                  Ce sont les réponses que je donne aux dirigeants avant même de leur
                  présenter un profil : ce que l&apos;alternant coûte, ce que
                  l&apos;État verse, où sont les pièges, et dans quel ordre faire les
                  démarches.
                </p>

                <ul className="mt-8 space-y-3.5">
                  {LIVRET.contenu.map((item) => (
                    <li key={item} className="flex gap-3 text-muted leading-relaxed">
                      <Check className="w-4 h-4 text-bordeaux shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-6">
                <LivreBlancForm livret="cout-alternant" masquerProfil />
              </div>
            </div>
          </div>
        </section>

        {/* Renvoi placement */}
        <section className="border-t hairline">
          <div className="max-w-content mx-auto px-6 py-14 md:py-20">
            <div className="max-w-3xl">
              <h2 className="serif text-2xl md:text-4xl leading-snug tracking-tight">
                Vous cherchez un alternant Sales ?
              </h2>
              <p className="mt-4 text-muted leading-relaxed max-w-2xl">
                Je suis intervenant en école de commerce : je vois des centaines
                d&apos;étudiants Sales par an et je pré-qualifie les profils avant de
                vous les présenter. Vous voyez 3 bons candidats au lieu de 300 CV.
              </p>
              <Link
                href="/alternance"
                className="mt-6 inline-flex items-center gap-2 bg-bordeaux text-cream px-7 py-4 rounded-full font-medium hover:bg-bordeaux-soft transition"
              >
                Voir les postes ouverts
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t hairline">
        <div className="max-w-content mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-muted">
          <div className="serif">Boris Hierso Alphandéry</div>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-ink">Accueil</Link>
            <Link href="/livres-blancs" className="hover:text-ink">Livres blancs</Link>
            <Link href="/mentions-legales" className="hover:text-ink">Mentions légales</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
