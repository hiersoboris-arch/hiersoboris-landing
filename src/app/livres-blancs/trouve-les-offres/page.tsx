import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { LIVRETS } from "@/lib/livre-blanc";
import { SITE_URL } from "@/lib/site-url";
import SiteHeader from "../../SiteHeader";
import LivreBlancForm from "../../alternance/LivreBlancForm";

const LIVRET = LIVRETS["trouve-les-offres"];

export const metadata: Metadata = {
  title: "Trouve les offres : cherche un job comme un commercial prospecte",
  description:
    "Le guide gratuit pour chercher un emploi ou une alternance Sales comme un commercial prospecte : le marché caché démonté, les 6 canaux, la liste de 50 entreprises, le mini-CRM et l'automatisation sans robot.",
  alternates: { canonical: "/livres-blancs/trouve-les-offres" },
  openGraph: {
    type: "website",
    title: "Trouve les offres comme un commercial prospecte · Livre blanc",
    description:
      "Cible, liste, canaux, CRM, automatisation : la méthode commerciale appliquée à ta recherche d'emploi.",
  },
};

const CHIFFRES = [
  { value: "84 %", caption: "des recrutements de cadres passent par une offre publiée (Apec), mais ce n'est presque jamais le seul canal" },
  { value: "600 000", caption: "changements d'emploi observés dans l'étude Science de 2022, sur 20 millions de personnes suivies cinq ans" },
  { value: "50", caption: "entreprises nommées à cibler, classées en 3 groupes, avant d'envoyer la moindre candidature" },
  { value: "20 jours", caption: "le délai moyen d'embauche d'un candidat coopté, contre 60 jours sur les autres canaux (Hellowork)" },
];

export default function TrouveLesOffresLivreBlanc() {
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
                name: "Trouve les offres",
                item: `${SITE_URL}/livres-blancs/trouve-les-offres`,
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
              Cherche un job
              <br />
              <span className="italic text-bordeaux">comme un commercial prospecte.</span>
            </h1>
            <p className="mt-7 text-lg text-muted max-w-2xl leading-relaxed">
              La plupart des gens cherchent un emploi comme on achète en supermarché : deux
              sites, une candidature à ce qui est en rayon, puis l&apos;attente. Un commercial ne
              fait pas ça. Il cible, il construit une liste, il ouvre plusieurs canaux, il suit
              chaque contact dans un CRM et il relance. Ce guide applique exactement cette
              méthode à ta recherche.
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
                  Une candidature, une personne.
                </h2>
                <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl">
                  Une candidature envoyée à quelqu&apos;un que tu as identifié par son nom vaut
                  trente candidatures déposées sur un formulaire. Ce guide te donne où sont
                  vraiment les offres, ce que vaut chaque canal, comment t&apos;organiser pour ne
                  rien perdre, et ce que tu peux automatiser sans devenir un robot qui postule à
                  tout.
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
                <LivreBlancForm livret="trouve-les-offres" masquerProfil />
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
                dirigeants que je connais. Applique la méthode de ce guide, et commence par la
                liste que je publie ici.
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
