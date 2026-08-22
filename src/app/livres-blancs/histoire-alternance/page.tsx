import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { LIVRETS } from "@/lib/livre-blanc";
import { SITE_URL } from "@/lib/site-url";
import SiteHeader from "../../SiteHeader";
import LivreBlancForm from "../../alternance/LivreBlancForm";

const LIVRET = LIVRETS["histoire-alternance"];

export const metadata: Metadata = {
  title: "D'où vient l'alternance : mille ans d'histoire de l'éducation",
  description:
    "Le récit gratuit de mille ans d'histoire de l'alternance et de l'école : le mythe Charlemagne démonté, les 5 lois qui construisent l'école française, l'apprentissage supprimé puis reconstruit, et un tour du monde en 6 régions.",
  alternates: { canonical: "/livres-blancs/histoire-alternance" },
  openGraph: {
    type: "website",
    title: "D'où vient l'alternance · Livre blanc",
    description:
      "Apprendre en travaillant est la plus vieille méthode du monde. L'école pour tous, elle, a moins de 150 ans.",
  },
};

const CHIFFRES = [
  { value: "1000 ans", caption: "d'histoire de l'apprentissage, contre moins de 150 ans pour l'école obligatoire en France" },
  { value: "1919", caption: "la loi Astier, qui invente le principe d'une formation financée et rémunérée pendant le travail" },
  { value: "1987", caption: "l'année où l'apprentissage s'ouvre enfin au bac+5, jusque-là réservé aux qualifications ouvrières" },
  { value: "1 014 500", caption: "apprentis en France au 31 décembre 2023, un record historique après la réforme de 2018" },
];

export default function HistoireAlternanceLivreBlanc() {
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
                name: "D'où vient l'alternance",
                item: `${SITE_URL}/livres-blancs/histoire-alternance`,
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
              Livre blanc · Étudiants, candidats &amp; curieux
            </div>
            <h1 className="serif text-4xl md:text-6xl leading-[1.02] tracking-tight">
              D&apos;où vient
              <br />
              <span className="italic text-bordeaux">l&apos;alternance, vraiment.</span>
            </h1>
            <p className="mt-7 text-lg text-muted max-w-2xl leading-relaxed">
              On croit souvent deux choses fausses : que Charlemagne a inventé l&apos;école, et
              que l&apos;alternance serait une invention récente pour occuper les jeunes qui ne
              réussissent pas ailleurs. La vérité est à l&apos;opposé. Apprendre en travaillant
              est la plus vieille méthode du monde, et c&apos;est l&apos;école pour tous qui est
              récente : elle a moins de 150 ans en France.
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
                  Chaque droit a une date.
                </h2>
                <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl">
                  Tout ce dont tu bénéficies aujourd&apos;hui (école gratuite, formation payée
                  par l&apos;entreprise, salaire pendant tes études, diplôme reconnu par
                  l&apos;État) a été obtenu par des lois précises, datées, souvent arrachées
                  après des décennies de débat. Aucun de ces droits n&apos;est naturel, et aucun
                  n&apos;est définitif.
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
                <LivreBlancForm livret="histoire-alternance" masquerProfil />
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
                dirigeants que je connais. Ton contrat s&apos;inscrit dans mille ans
                d&apos;histoire : autant bien le choisir.
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
