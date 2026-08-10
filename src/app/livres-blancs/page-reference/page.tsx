import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { LIVRETS } from "@/lib/livre-blanc";
import { SITE_URL } from "@/lib/site-url";
import SiteHeader from "../../SiteHeader";
import LivreBlancForm from "../../alternance/LivreBlancForm";

const LIVRET = LIVRETS["page-reference"];

export const metadata: Metadata = {
  title: "Ta page de référence : ton autobiographie en KPIs",
  description:
    "Le modèle gratuit de la fiche de carrière qui ne se partage jamais : tes chiffres exacts, tes preuves par expérience et tes formulations verrouillées, réunis sur une page. Elle alimente ton CV, ta lettre, ton LinkedIn et tes entretiens, et empêche l'IA d'inventer un chiffre à ta place.",
  alternates: { canonical: "/livres-blancs/page-reference" },
  openGraph: {
    type: "website",
    title: "Ta page de référence : ton autobiographie en KPIs · Livre blanc",
    description:
      "Une page privée qui contient tous tes chiffres. Le CV, la lettre et l'entretien en sont extraits. Modèle à dupliquer + exercice guidé en 45 minutes.",
  },
};

const CHIFFRES = [
  {
    value: "70 %",
    caption:
      "de la population a déjà éprouvé un sentiment d'imposture, et banalise donc ses propres réussites",
  },
  {
    value: "76 %",
    caption:
      "des salariés placent la reconnaissance en tête de leurs attentes, 84 % chez les jeunes diplômés",
  },
  {
    value: "45 min",
    caption:
      "pour construire ta page, puis 2 minutes à chaque nouvelle victoire pour la garder vivante",
  },
  {
    value: "12 sources",
    caption:
      "HBR, MIT Sloan, France Travail, Apec, Michael Page : le sujet est balisé, pas une opinion de coach",
  },
];

export default function PageReferenceLivreBlanc() {
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
                name: "Ta page de référence : ton autobiographie en KPIs",
                item: `${SITE_URL}/livres-blancs/page-reference`,
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
              Livre blanc · Étudiants &amp; candidats
            </div>
            <h1 className="serif text-4xl md:text-6xl leading-[1.02] tracking-tight">
              Ta page de référence,
              <br />
              <span className="italic text-bordeaux">ton autobiographie en KPIs.</span>
            </h1>
            <p className="mt-7 text-lg text-muted max-w-2xl leading-relaxed">
              Demande à quelqu&apos;un ce qu&apos;il a accompli il y a huit mois. Il te
              sortira deux choses vagues et un « enfin bon, c&apos;était l&apos;équipe
              surtout ». Ce n&apos;est pas de la modestie : tu oublies tes résultats, et
              tu ranges les autres au rayon des choses qui ne comptent pas. Cette page
              est le remède, et c&apos;est la seule de la série que tu ne montreras
              jamais à personne. C&apos;est ta fiche de carrière : tout le reste, CV,
              lettre, LinkedIn, entretien, en est extrait.
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
                  Un modèle à dupliquer, pas un article à lire.
                </h2>
                <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl">
                  C&apos;est parce qu&apos;elle est privée qu&apos;elle est utile. Une page
                  que tu prévois de montrer, tu l&apos;auto-censures : tu enjolives, tu
                  tais ce qui s&apos;est mal passé, tu arrondis. Une page que personne ne
                  verra, tu l&apos;écris honnêtement. Et c&apos;est cette honnêteté qui te
                  permet, le jour J, de choisir quoi montrer en connaissance de cause.
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
                <LivreBlancForm livret="page-reference" masquerProfil />
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
                des dirigeants que je connais. Une fois ta page remplie, tu candidates en
                dix minutes au lieu d&apos;une soirée.
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
