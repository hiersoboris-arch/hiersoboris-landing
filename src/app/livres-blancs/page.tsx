import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SITE_URL } from "@/lib/site-url";
import { LINKEDIN } from "@/lib/contact";
import SiteHeader from "../SiteHeader";

export const metadata: Metadata = {
  title: "Livres blancs : alternance, recrutement, vente",
  description:
    "Les livres blancs gratuits de Boris Hierso Alphandéry : décrocher son alternance côté étudiant, et le coût réel d'un alternant en 2026 côté entreprise.",
  alternates: { canonical: "/livres-blancs" },
  openGraph: {
    type: "website",
    title: "Livres blancs · Boris Hierso Alphandéry",
    description:
      "Des guides pratiques et gratuits : alternance côté étudiant, coût d'un alternant côté entreprise.",
  },
};

const LIVRETS_HUB = [
  {
    tag: "Entreprises & écoles",
    title: "Combien coûte vraiment un alternant en 2026",
    desc: "Le coût réel d'un alternant, aides déduites : grilles de rémunération 2026, aides de l'État et de l'Agefiph, trois exemples chiffrés, démarches dans l'ordre. Vérifié aux sources officielles (Légifrance, service-public.fr, URSSAF, BOSS).",
    href: "/livres-blancs/cout-alternant",
    cta: "Recevoir le guide",
  },
  {
    tag: "Étudiants",
    title: "Décroche ton alternance",
    desc: "Tout ce que je donne à mes étudiants avant un entretien, réuni sur une page : les 8 réponses à préparer, le CV en deux versions (ATS et visuel), la méthode des 3 KPIs, un mini-CRM de candidatures et un LinkedIn optimisé.",
    href: "/alternance#livre-blanc",
    cta: "Recevoir le kit",
  },
];

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
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition mb-10"
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
              Des guides pratiques, tirés du terrain : mes cours en école de commerce et
              le placement d&apos;alternants chez des dirigeants que je connais. Chaque
              guide est gratuit, délivré contre un email, et mis à jour régulièrement.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {LIVRETS_HUB.map((l) => (
              <article
                key={l.href}
                className="lift bg-card border hairline rounded-2xl p-8 md:p-10 flex flex-col"
              >
                <div className="text-xs uppercase tracking-[0.18em] text-accent mb-4">
                  {l.tag}
                </div>
                <h2 className="serif text-2xl md:text-3xl leading-snug">{l.title}</h2>
                <p className="mt-4 text-muted leading-relaxed flex-1">{l.desc}</p>
                <Link
                  href={l.href}
                  className="mt-7 inline-flex items-center gap-2 text-bordeaux font-medium hover:gap-3 transition-all"
                >
                  {l.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>

          <p className="mt-10 text-sm text-muted max-w-2xl leading-relaxed">
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
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-ink">Accueil</Link>
            <Link href="/alternance" className="hover:text-ink">Alternance</Link>
            <Link href="/mentions-legales" className="hover:text-ink">Mentions légales</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
