import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { LIVRETS } from "@/lib/livre-blanc";
import { SITE_URL } from "@/lib/site-url";
import SiteHeader from "../../SiteHeader";
import LivreBlancForm from "../../alternance/LivreBlancForm";

const LIVRET = LIVRETS["negociation-salaire"];

export const metadata: Metadata = {
  title: "Négocie ton salaire sans te saborder",
  description:
    "Le guide gratuit de la négociation salariale : vocabulaire du package (fixe, variable, OTE, BSPCE), la fourchette en trois chiffres, le script en quatre temps, les 8 objections et leurs réponses, les 12 questions à poser sur un variable, et le chapitre alternants.",
  alternates: { canonical: "/livres-blancs/negociation-salaire" },
  openGraph: {
    type: "website",
    title: "Négocie ton salaire sans te saborder · Livre blanc",
    description:
      "Parler d'argent est une compétence, pas un trait de caractère : fourchette sourcée, script d'annonce, objections, variable et BSPCE. Exercice guidé en 45 minutes.",
  },
};

const CHIFFRES = [
  {
    value: "65 %",
    caption:
      "des cadres qui négocient à l'embauche obtiennent le salaire demandé ou davantage (Apec)",
  },
  {
    value: "91 %",
    caption:
      "des entreprises demandent leurs prétentions aux candidats : la question arrive, prépare la réponse",
  },
  {
    value: "3 chiffres",
    caption:
      "à écrire avant tout entretien : ton plancher dur, ta cible, ton ancrage, chacun avec sa source",
  },
  {
    value: "12 questions",
    caption:
      "à poser sur un variable avant de signer : seuils, plafond, paiement, clawback, ramp-up",
  },
];

export default function NegociationSalaireLivreBlanc() {
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
                name: "Négocie ton salaire sans te saborder",
                item: `${SITE_URL}/livres-blancs/negociation-salaire`,
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
              Livre blanc · Étudiants, candidats &amp; commerciaux
            </div>
            <h1 className="serif text-4xl md:text-6xl leading-[1.02] tracking-tight">
              Négocie ton salaire
              <br />
              <span className="italic text-bordeaux">sans te saborder.</span>
            </h1>
            <p className="mt-7 text-lg text-muted max-w-2xl leading-relaxed">
              On te répète qu&apos;il faut « oser demander ». C&apos;est faux comme
              conseil : ce n&apos;est pas une question de courage, c&apos;est une
              question de préparation. Ceux qui obtiennent plus ne sont pas plus
              culottés, ils arrivent avec une fourchette sourcée, un chiffre justifié
              et une réponse prête à chaque objection. Ce guide couvre les quatre
              moments où l&apos;argent se joue : l&apos;annonce de tes prétentions, la
              négociation à l&apos;entrée, la construction de ton variable, et la
              réévaluation une fois en poste.
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
                  Ce que tu y trouveras
                </div>
                <h2 className="serif text-3xl md:text-5xl leading-[1.05] tracking-tight">
                  Jamais un chiffre sans raison.
                </h2>
                <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl">
                  Un chiffre sorti de nulle part se négocie toujours à la baisse. Un
                  chiffre appuyé sur trois sources concordantes devient une position.
                  Ce guide t&apos;apprend à construire ta fourchette, à l&apos;annoncer
                  sans t&apos;excuser, et à te taire au bon moment. Avec un focus
                  commercial, parce que c&apos;est le seul métier où ta rémunération
                  est censée être la conséquence directe de ce que tu produis.
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
                <LivreBlancForm livret="negociation-salaire" masquerProfil />
              </div>
            </div>
          </div>
        </section>

        {/* Renvoi alternance */}
        <section className="border-t hairline">
          <div className="max-w-content mx-auto px-6 py-14 md:py-20">
            <div className="max-w-3xl">
              <h2 className="serif text-2xl md:text-4xl leading-snug tracking-tight">
                Tu cherches ton alternance ?
              </h2>
              <p className="mt-4 text-muted leading-relaxed max-w-2xl">
                Je sélectionne des postes Sales à la source et je place mes profils chez
                des dirigeants que je connais. Et sur le salaire, tu sauras exactement
                quoi demander : le guide contient un chapitre entier pour les alternants.
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
