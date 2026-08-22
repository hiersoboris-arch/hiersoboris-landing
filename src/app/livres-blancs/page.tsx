import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { LIVRETS } from "@/lib/livre-blanc";
import { SITE_URL } from "@/lib/site-url";
import { LINKEDIN } from "@/lib/contact";
import SiteHeader from "../SiteHeader";
import NewsletterForm from "../NewsletterForm";

export const metadata: Metadata = {
  title: "Livres blancs : vente B2B, IA, alternance",
  description:
    "Les livres blancs gratuits de Boris Hierso Alphandéry : vente B2B, prospection, IA appliquée à la vente, alternance et recrutement. De nouveaux guides tout au long du mois.",
  alternates: { canonical: "/livres-blancs" },
  openGraph: {
    type: "website",
    title: "Livres blancs · Boris Hierso Alphandéry",
    description:
      "Des guides pratiques et gratuits : vente B2B, IA appliquée à la vente, alternance, recrutement.",
  },
};

// Le hub liste les livrets du catalogue + leur page cible. Le plus récent
// (date `publie` du catalogue) porte le badge Nouveau, calculé au build :
// le site est redéployé à chaque nouveau livret, donc le badge suit.
const CARTES = [
  {
    livret: LIVRETS["histoire-alternance"],
    tag: "Étudiants & curieux",
    desc: "On croit que Charlemagne a inventé l'école et que l'alternance est une invention récente. Les deux sont faux. Le récit de mille ans d'histoire de l'éducation, du chef-d'œuvre médiéval à la loi Astier de 1919, jusqu'au tour du monde de l'alternance aujourd'hui.",
    href: "/livres-blancs/histoire-alternance",
    cta: "Recevoir le récit",
    couleur: "bg-night",
  },
  {
    livret: LIVRETS["fiche-de-poste"],
    tag: "Entreprises & écoles",
    desc: "La trame que j'utilise pour mes propres recrutements et ceux de mes clients : les 12 blocs dans l'ordre, la vraie fenêtre de démarrage d'une alternance, l'effet de l'affichage du salaire, et un exemple complet à copier.",
    href: "/livres-blancs/fiche-de-poste",
    cta: "Recevoir la trame",
    couleur: "bg-bordeaux",
  },
  {
    livret: LIVRETS["convaincre-entretien"],
    tag: "Étudiants, candidats & commerciaux",
    desc: "Un entretien n'est pas un interrogatoire, c'est une vente. La fiche entreprise en 8 blocs, la méthode STAR sans la réciter, les 20 questions classiques et costaud, et le business case avec sa grille de notation.",
    href: "/livres-blancs/convaincre-entretien",
    cta: "Recevoir le guide",
    couleur: "bg-night",
  },
  {
    livret: LIVRETS["metiers-de-la-vente"],
    tag: "Étudiants, candidats & commerciaux",
    desc: "Le même métier porte dix noms différents. Le décodeur français/start-up (BDR, SDR, Account Executive, Head of Sales...), les fourchettes réelles 2026 et les 6 pièges de lecture d'une offre.",
    href: "/livres-blancs/metiers-de-la-vente",
    cta: "Recevoir le décodeur",
    couleur: "bg-bordeaux",
  },
  {
    livret: LIVRETS["trouve-les-offres"],
    tag: "Étudiants, candidats & commerciaux",
    desc: "Chercher un job, c'est de la prospection commerciale. Le vrai poids du marché caché, les 6 canaux, ta liste de 50 entreprises, ton mini-CRM, et l'automatisation sans jamais devenir un robot qui postule à tout.",
    href: "/livres-blancs/trouve-les-offres",
    cta: "Recevoir le guide",
    couleur: "bg-night",
  },
  {
    livret: LIVRETS["negociation-salaire"],
    tag: "Étudiants, candidats & commerciaux",
    desc: "Parler d'argent est une compétence, pas un trait de caractère : le vocabulaire du package (fixe, variable, OTE, BSPCE), ta fourchette en trois chiffres, le script en quatre temps, les 8 objections et leurs réponses, les 12 questions à poser sur un variable, et le chapitre alternants : lâche le fixe, va chercher le variable.",
    href: "/livres-blancs/negociation-salaire",
    cta: "Recevoir le guide",
    couleur: "bg-bordeaux",
  },
  {
    livret: LIVRETS["page-reference"],
    tag: "Étudiants & candidats",
    desc: "Le modèle de la fiche de carrière que tu ne montreras jamais à personne : tous tes chiffres, tes preuves par expérience et tes formulations verrouillées sur une seule page. C'est elle qui alimente ton CV, ta lettre, ton LinkedIn et tes entretiens, et qui empêche l'IA d'inventer un chiffre à ta place. Avec le tableau de traduction pour les parcours qui semblent vides.",
    href: "/livres-blancs/page-reference",
    cta: "Recevoir le modèle",
    couleur: "bg-night",
  },
  {
    livret: LIVRETS["cv"],
    tag: "Étudiants & candidats",
    desc: "La méthode pour un CV qui passe la machine puis l'humain : les deux routes (ATS des grands groupes, approche directe en start-up), le tableau des KPIs commerciaux à aller chercher, les verbes qui te cachent, un CV par poste visé illustré par mes trois CV réels, et 3 prompts IA pour le tester face à une offre.",
    href: "/livres-blancs/cv",
    cta: "Recevoir la méthode",
    couleur: "bg-bordeaux",
  },
  {
    livret: LIVRETS["lettre-motivation"],
    tag: "Étudiants & candidats",
    desc: "La méthode pour écrire une lettre qu'on ne peut recycler nulle part ailleurs : structure AIDA, 6 leviers d'une lettre vivante, la liste noire des formules qui grillent, le format mail en 10 phrases et le bon usage de l'IA. Synthèse de dizaines de recruteurs et coachs carrière.",
    href: "/livres-blancs/lettre-motivation",
    cta: "Recevoir l'atelier",
    couleur: "bg-night",
  },
  {
    livret: LIVRETS["cout-alternant"],
    tag: "Entreprises & écoles",
    desc: "Le coût réel d'un alternant, aides déduites : grilles de rémunération 2026, aides de l'État et de l'Agefiph, trois exemples chiffrés, démarches dans l'ordre. Vérifié aux sources officielles (Légifrance, service-public.fr, URSSAF, BOSS).",
    href: "/livres-blancs/cout-alternant",
    cta: "Recevoir le guide",
    couleur: "bg-night",
  },
  {
    livret: LIVRETS["kit-alternance"],
    tag: "Étudiants",
    desc: "Tout ce que je donne à mes étudiants avant un entretien, réuni sur une page : les 8 réponses à préparer, le CV en deux versions (ATS et visuel), la méthode des 3 KPIs, un mini-CRM de candidatures et un LinkedIn optimisé.",
    href: "/alternance#livre-blanc",
    cta: "Recevoir le kit",
    couleur: "bg-bordeaux",
  },
];

const datePlusRecente = CARTES.map((c) => c.livret.publie).sort().reverse()[0];

function dateFr(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function LivresBlancs() {
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
            ],
          }),
        }}
      />
      <SiteHeader solidFromTop />
      <main id="contenu" className="pt-24 md:pt-28">
        <section className="max-w-content mx-auto px-6 pb-16 md:pb-24">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition mb-10 min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l&apos;accueil
          </Link>
          <div className="max-w-3xl">
            <div className="text-xs md:text-sm tracking-[0.2em] uppercase text-bordeaux mb-6">
              Ressources gratuites
            </div>
            <h1 className="serif text-4xl md:text-6xl leading-[1.02] tracking-tight">
              Les livres blancs.
            </h1>
            <p className="mt-7 text-lg text-muted max-w-2xl leading-relaxed">
              Des guides pratiques, tirés de mes missions et de mes cours : vente B2B,
              prospection, IA appliquée à la vente, alternance et recrutement. Chaque
              guide est gratuit, délivré contre un email, et mis à jour régulièrement.
              De nouveaux guides sortent tout au long du mois.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {CARTES.map((c) => (
              <article
                key={c.href}
                className="lift bg-card border hairline rounded-2xl p-7 md:p-8 flex gap-6"
              >
                {/* Couverture stylisée : matérialise le "livre" sans asset à produire */}
                <Link
                  href={c.href}
                  aria-hidden="true"
                  tabIndex={-1}
                  className={`${c.couleur} hidden sm:flex shrink-0 w-28 md:w-32 aspect-[3/4] rounded-lg shadow-warm p-3 flex-col justify-between`}
                >
                  <span className="serif text-cream text-sm leading-snug">
                    {c.livret.titre}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.18em] text-cream/70">
                    Boris Hierso A.
                  </span>
                </Link>
                <div className="flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs uppercase tracking-[0.18em] text-accent">
                      {c.tag}
                    </span>
                    {c.livret.publie === datePlusRecente && (
                      <span className="text-[10px] uppercase tracking-[0.14em] bg-bordeaux text-cream rounded-full px-2.5 py-0.5">
                        Nouveau
                      </span>
                    )}
                  </div>
                  <h2 className="serif text-2xl md:text-[1.7rem] leading-snug">
                    {c.livret.titre}
                  </h2>
                  <p className="mt-3 text-sm text-muted leading-relaxed flex-1">{c.desc}</p>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <Link
                      href={c.href}
                      className="inline-flex items-center gap-2 text-bordeaux font-medium hover:gap-3 transition-all min-h-[44px]"
                    >
                      {c.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <span className="text-xs text-muted">{dateFr(c.livret.publie)}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 max-w-2xl">
            <NewsletterForm source="hiersoboris.fr/livres-blancs" />
          </div>

          <p className="mt-8 text-sm text-muted max-w-2xl leading-relaxed">
            Dirigeant ? Le plus court chemin reste le{" "}
            <Link href="/diagnostic" className="underline hover:text-ink">
              diagnostic de ta machine commerciale
            </Link>{" "}
            : 10 questions, tes 3 priorités par mail.
          </p>

          <p className="mt-8 text-sm text-muted max-w-2xl leading-relaxed">
            Une question sur un des guides, ou un sujet que je devrais couvrir ?
            Écris-moi sur{" "}
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-ink"
            >
              LinkedIn
            </a>
            .
          </p>
        </section>
      </main>

      <footer className="border-t hairline">
        <div className="max-w-content mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-muted">
          <div className="serif">Boris Hierso Alphandéry</div>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/" className="hover:text-ink">Accueil</Link>
            <Link href="/alternance" className="hover:text-ink">Alternance</Link>
            <Link href="/mentions-legales" className="hover:text-ink">Mentions légales</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
