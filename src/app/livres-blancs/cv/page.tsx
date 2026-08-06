import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { LIVRETS } from "@/lib/livre-blanc";
import { SITE_URL } from "@/lib/site-url";
import SiteHeader from "../../SiteHeader";
import LivreBlancForm from "../../alternance/LivreBlancForm";

const LIVRET = LIVRETS["cv"];

export const metadata: Metadata = {
  title: "Rends ton CV impossible à rejeter",
  description:
    "La méthode gratuite pour un CV qui passe la machine puis l'humain : les deux routes (ATS et approche directe), le tableau des KPIs commerciaux, les verbes à bannir, un CV par poste visé et 3 prompts IA pour le tester face à une offre.",
  alternates: { canonical: "/livres-blancs/cv" },
  openGraph: {
    type: "website",
    title: "Rends ton CV impossible à rejeter · Livre blanc",
    description:
      "Deux routes, deux CV : ATS pour les grands groupes, visuel pour l'approche directe. Plus le tableau des KPIs commerciaux et 3 prompts IA.",
  },
};

const CHIFFRES = [
  {
    value: "7,4 s",
    caption:
      "le temps qu'un recruteur passe sur ton CV avant de décider s'il mérite un vrai examen",
  },
  {
    value: "95 %",
    caption:
      "des grandes entreprises filtrent les CV par un logiciel avant tout regard humain",
  },
  {
    value: "84 %",
    caption:
      "des recruteurs attendent que tu quantifies tes réalisations, pas que tu les décrives",
  },
  {
    value: "2 versions",
    caption:
      "une par route : ATS pour les candidatures en ligne, visuelle pour l'approche directe",
  },
];

export default function CvLivreBlanc() {
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
                name: "Rends ton CV impossible à rejeter",
                item: `${SITE_URL}/livres-blancs/cv`,
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
              Rends ton CV
              <br />
              <span className="italic text-bordeaux">impossible à rejeter.</span>
            </h1>
            <p className="mt-7 text-lg text-muted max-w-2xl leading-relaxed">
              Un CV ne se juge pas dans l&apos;absolu : il se juge face à une offre, et
              par celui qui le lit en premier. Dans un grand groupe, c&apos;est un
              logiciel. Dans une start-up, une PME ou en approche directe, c&apos;est un
              humain, seul, pendant 7 secondes. Ce sont deux CV différents, et il
              t&apos;en faut un par type de poste que tu vises. Cette méthode compile ce
              que disent les recruteurs et les coachs carrière, mes dix ans à trier des
              candidatures de commerciaux, et mes trois CV réels en exemple.
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
                  Deux routes, deux CV, un par poste visé.
                </h2>
                <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl">
                  L&apos;erreur la plus coûteuse n&apos;est pas d&apos;avoir un CV moyen :
                  c&apos;est d&apos;envoyer le mauvais des deux. Un CV visuel déposé sur
                  le portail d&apos;un grand groupe se fait déchiqueter par l&apos;ATS. Un
                  CV austère envoyé en direct à un fondateur ne provoque rien : il
                  n&apos;y avait pas de machine à passer, juste un humain à accrocher.
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
                <LivreBlancForm livret="cv" masquerProfil />
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
                des dirigeants que je connais. Un bon CV te fait passer la porte, les
                offres sont de l&apos;autre côté.
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
