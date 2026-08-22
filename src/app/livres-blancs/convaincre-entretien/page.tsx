import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { LIVRETS } from "@/lib/livre-blanc";
import { SITE_URL } from "@/lib/site-url";
import SiteHeader from "../../SiteHeader";
import LivreBlancForm from "../../alternance/LivreBlancForm";

const LIVRET = LIVRETS["convaincre-entretien"];

export const metadata: Metadata = {
  title: "Convaincre en entretien : questions, cas pratiques et mises en situation",
  description:
    "Le guide gratuit de l'entretien commercial : la fiche entreprise en 8 blocs, la méthode STAR, les 20 questions classiques et costaud, le business case avec sa grille de notation, et les questions à poser.",
  alternates: { canonical: "/livres-blancs/convaincre-entretien" },
  openGraph: {
    type: "website",
    title: "Convaincre en entretien · Livre blanc",
    description:
      "Un entretien n'est pas un interrogatoire, c'est une vente. La préparation, les questions, le business case et sa grille de notation.",
  },
};

const CHIFFRES = [
  { value: "70/30", caption: "la règle de rythme d'un bon entretien : l'autre parle 70 % du temps, toi 30 %" },
  { value: "6", caption: "histoires STAR à préparer, pas vingt réponses : elles couvrent 80 % des questions comportementales" },
  { value: "20", caption: "questions classiques décodées, plus les questions costaud qui déstabilisent" },
  { value: "45 000 €", caption: "l'amende encourue pour enregistrer un entretien sans consentement (code pénal, art. 226-1)" },
];

export default function ConvaincreEntretienLivreBlanc() {
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
                name: "Convaincre en entretien",
                item: `${SITE_URL}/livres-blancs/convaincre-entretien`,
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
              Un entretien n&apos;est pas
              <br />
              <span className="italic text-bordeaux">un interrogatoire, c&apos;est une vente.</span>
            </h1>
            <p className="mt-7 text-lg text-muted max-w-2xl leading-relaxed">
              La plupart des candidats subissent l&apos;entretien : ils attendent les questions,
              ils répondent, ils espèrent. Un commercial ne fait pas ça. Il prépare, il fait
              parler l&apos;autre, il comprend le besoin avant de proposer, et il repart avec une
              prochaine étape datée. Ce guide couvre tout ce qui se joue avant, pendant et après.
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
                  Une affirmation, un exemple, un chiffre.
                </h2>
                <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl">
                  Tout ce que tu affirmes doit être suivi d&apos;un exemple vécu et d&apos;un
                  chiffre. « Je suis persévérant » ne vaut rien. « Sur ce compte, j&apos;ai
                  relancé sept fois en trois mois, on a signé 18 K€ » vaut tout. Ce guide te
                  prépare exactement à ça.
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
                <LivreBlancForm livret="convaincre-entretien" masquerProfil />
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
                dirigeants que je connais. Une fois l&apos;entretien décroché, ce guide te
                prépare à le transformer en proposition.
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
