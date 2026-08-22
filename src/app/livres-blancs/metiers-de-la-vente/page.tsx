import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { LIVRETS } from "@/lib/livre-blanc";
import { SITE_URL } from "@/lib/site-url";
import SiteHeader from "../../SiteHeader";
import LivreBlancForm from "../../alternance/LivreBlancForm";

const LIVRET = LIVRETS["metiers-de-la-vente"];

export const metadata: Metadata = {
  title: "Les métiers de la vente décodés (et les vraies fourchettes 2026)",
  description:
    "Le décodeur gratuit des métiers de la vente : BDR, SDR, Account Executive, Account Manager, Sales Ops, Head of Sales... les équivalences français/start-up, les fourchettes réelles 2026 et les chemins d'évolution.",
  alternates: { canonical: "/livres-blancs/metiers-de-la-vente" },
  openGraph: {
    type: "website",
    title: "Les métiers de la vente décodés · Livre blanc",
    description:
      "Le même métier porte dix noms différents. La carte complète, les fourchettes 2026 et les 6 pièges de lecture d'une offre.",
  },
};

const CHIFFRES = [
  { value: "60-320 K€", caption: "l'écart de package entre un BDR junior et un Head of Sales senior en tech, à Paris, en 2026" },
  { value: "74 %", caption: "des meilleurs commerciaux ne répondent jamais aux annonces : ils sont en poste, il faut les approcher" },
  { value: "2,9 ans", caption: "le temps avant qu'un salaire commercial plafonne dans un même poste (HEC Paris, 2023)" },
  { value: "6", caption: "métiers sur la même chaîne de valeur, du BDR au CRO, pour ne plus jamais te tromper de titre" },
];

export default function MetiersDeLaVenteLivreBlanc() {
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
                name: "Les métiers de la vente décodés",
                item: `${SITE_URL}/livres-blancs/metiers-de-la-vente`,
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
              Les métiers de la vente
              <br />
              <span className="italic text-bordeaux">décodés, enfin.</span>
            </h1>
            <p className="mt-7 text-lg text-muted max-w-2xl leading-relaxed">
              Un jour tu lis « Ingénieur commercial », le lendemain « Account Executive
              Mid-Market ». Parfois c&apos;est le même poste, parfois pas du tout, et la
              différence peut représenter 30 000 € par an. Ce guide te donne la carte complète
              des métiers de la vente et les vraies fourchettes de rémunération 2026.
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
                  Lis le rôle, pas le titre.
                </h2>
                <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl">
                  Ne lis jamais l&apos;intitulé d&apos;un poste, lis ce qu&apos;il fait dans le
                  cycle de vente : générer, closer, développer, faire réussir, outiller ou
                  piloter. C&apos;est ça qui détermine ton métier, ta rémunération et ta suite de
                  carrière. Le titre, lui, dépend surtout de la mode et de la taille de la boîte.
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
                <LivreBlancForm livret="metiers-de-la-vente" masquerProfil />
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
                Je sélectionne des postes Sales à la source et je place mes profils chez des
                dirigeants que je connais. Une fois que tu sais ce que vaut le poste, reste à
                trouver le bon.
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
