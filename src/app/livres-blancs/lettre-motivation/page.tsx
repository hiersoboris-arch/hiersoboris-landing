import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { LIVRETS } from "@/lib/livre-blanc";
import { SITE_URL } from "@/lib/site-url";
import SiteHeader from "../../SiteHeader";
import LivreBlancForm from "../../alternance/LivreBlancForm";

const LIVRET = LIVRETS["lettre-motivation"];

export const metadata: Metadata = {
  title: "La lettre de motivation qu'on lit jusqu'au bout",
  description:
    "L'atelier gratuit pour écrire une lettre de motivation qui sort du lot : structure AIDA, 6 leviers d'une lettre vivante, la chasse aux formules carpette, le format mail, et le bon usage de l'IA. Synthèse de dizaines de recruteurs et coachs carrière.",
  alternates: { canonical: "/livres-blancs/lettre-motivation" },
  openGraph: {
    type: "website",
    title: "La lettre de motivation qu'on lit jusqu'au bout · Livre blanc",
    description:
      "Structure AIDA, 6 leviers, liste noire des formules qui grillent : la méthode pour une lettre qu'on ne peut recycler nulle part ailleurs.",
  },
};

const CHIFFRES = [
  { value: "90 %", caption: "des lettres finissent à la corbeille, faute d'être vraiment personnalisées" },
  { value: "146 mots", caption: "peuvent suffire : une lettre courte et vivante bat une page générique" },
  { value: "6 leviers", caption: "pour rendre une lettre vivante, plus la méthode AIDA posée sur vous, nous, moi" },
  { value: "3 filtres", caption: "avant d'envoyer : le recyclage, les formules carpette, le test de l'oral" },
];

export default function LettreMotivation() {
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
                name: "La lettre de motivation qu'on lit jusqu'au bout",
                item: `${SITE_URL}/livres-blancs/lettre-motivation`,
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
              La lettre de motivation
              <br />
              <span className="italic text-bordeaux">qu&apos;on lit jusqu&apos;au bout.</span>
            </h1>
            <p className="mt-7 text-lg text-muted max-w-2xl leading-relaxed">
              Je n&apos;ai jamais aimé les lettres de motivation, ni comme recruteur, ni
              comme Head of Sales. Mais elles reviennent, et des boîtes que
              j&apos;accompagne m&apos;en redemandent. Alors quitte à en écrire une,
              autant qu&apos;elle change tout. Cet atelier synthétise une vingtaine
              d&apos;articles de recruteurs et de coachs carrière, plus mes dix ans à
              lire (et trier) des candidatures.
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
                  Une méthode, pas des modèles à recopier.
                </h2>
                <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl">
                  Le principe tient en une phrase : le lecteur ne s&apos;intéresse
                  qu&apos;à lui. Tout part de là. Tu apprends à parler d&apos;eux
                  d&apos;abord, à tenir une seule histoire concrète, et à supprimer tout
                  ce qui pourrait marcher pour n&apos;importe quelle autre entreprise.
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
                <LivreBlancForm livret="lettre-motivation" masquerProfil />
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
                des dirigeants que je connais. La lettre ouvre la porte, l&apos;offre est
                de l&apos;autre côté.
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
