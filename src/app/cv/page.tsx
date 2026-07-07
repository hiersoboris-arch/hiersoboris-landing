import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, ArrowUpRight } from "lucide-react";
import { CALENDLY, LINKEDIN, EMAIL } from "@/lib/contact";

const CV_PDF = "/CV-Boris-Hierso-Alphandery.pdf";

export const metadata: Metadata = {
  title: "CV",
  description:
    "CV de Boris Hierso Alphandéry, Head of Sales freelance : 10 ans de vente B2B, résultats chiffrés, missions Exoteach, Avelor, HappyPal, ValueCo. Disponible, basé à Paris.",
  alternates: { canonical: "/cv" },
  openGraph: {
    type: "profile",
    title: "CV · Boris Hierso Alphandéry",
    description:
      "Head of Sales freelance, 10 ans de vente B2B. Résultats chiffrés et parcours complet.",
  },
};

const SKILLS = [
  ["Structuration commerciale", "Go-to-market, pipeline, prévisibilité, de 0 à 1 et passage à l'échelle."],
  ["Closing", "Cycles longs et multi-interlocuteurs (C-level, DAF, DRH, DSI), grands comptes, négociation."],
  ["Prospection", "Multicanale (cold call, social selling, email), outbound à fort volume, signaux d'intention."],
  ["Vente full cycle", "De la prospection au closing. SaaS B2B, EdTech, spiritueux (CHR, retail, export)."],
  ["Sales Ops / RevOps", "Reporting, structuration de la data, MEDDIC, prévisibilité du revenu."],
  ["Outils & IA", "CRM (HubSpot, Notion, Folk, Pipedrive), automation (n8n, Make, Claude), IA appliquée à la vente."],
  ["Coaching & formation", "Montée en compétences d'équipes Sales, mises en situation réelles, interventions."],
  ["Recrutement & management", "Constitution et pilotage d'équipes (alternants, freelances, apporteurs d'affaires)."],
];

const EXPERIENCES = [
  {
    company: "Exoteach",
    role: "Head of Sales freelance",
    period: "Déc. 2025 → en cours",
    context: "EdTech, SaaS B2B IA-first",
    points: [
      "290k€ de pipe qualifié construit de zéro, 73 RDV commerciaux menés, 91% de taux d'avancement.",
      "150 calls par semaine, écosystème de 5 apporteurs d'affaires structuré.",
      "Déploiement d'outils IA et d'automation. Objectif 500k€ d'ARR d'ici fin 2026. 15 000 étudiants utilisent la solution.",
    ],
  },
  {
    company: "Avelor Spirits",
    role: "Head of Sales freelance",
    period: "Janv. 2026 → en cours",
    context: "Groupe de spiritueux premium",
    points: [
      "450k€ générés, objectif 1,5M€ d'ici fin 2026.",
      "Management de 6 freelances et 8 apporteurs internationaux.",
      "Déploiement multi-marchés : CHR, cavistes, hôtels et palaces, export.",
    ],
  },
  {
    company: "WoMa (Fabrique de quartier)",
    role: "Mission conseil Head of Sales",
    period: "Avr. 2026 → en cours",
    context: "Association, fab lab + coworking, Paris 19e",
    points: [
      "Diagnostic commercial et structuration de zéro : pipeline, offre, tarifaire, prospection.",
      "Construction d'un dashboard de pilotage (CA attendu, marges, priorités).",
      "Coaching terrain de l'équipe (scripts, séquences, relances) pour la rendre autonome.",
    ],
  },
  {
    company: "Euridis Business School",
    role: "Intervenant",
    period: "Oct. 2025 → en cours",
    context: "École de commerce spécialisée vente",
    points: [
      "9 classes accompagnées, ~225 étudiants, 14,2/20 de moyenne sur les interventions.",
      "Prospection & cold calling, social selling, IA copywriting, IA sales automation.",
    ],
  },
  {
    company: "Les Négociales 2026",
    role: "Coach principal Paris, juré et acheteur",
    period: "2026",
    context: "Plus grand concours de négociation commerciale francophone",
    points: ["40h de coaching, près de 50 étudiants accompagnés."],
  },
  {
    company: "ValueCo",
    role: "First Sales puis Team Lead Sales freelance",
    period: "Mars 2025 → mars 2026",
    context: "Finance durable / ESG",
    points: [
      "301 entreprises cotées rencontrées sur le marché francophone.",
      "8 000 calls, 140 rendez-vous physiques, 70 events en 8 mois.",
      "8 deals ouverts à +150k€ (logique d'exploration de marché).",
    ],
  },
  {
    company: "HappyPal",
    role: "SDR puis BDR Senior puis AE Full Cycle",
    period: "Juil. 2021 → mars 2025 · CDI",
    context: "Scale-up RH / CSE, SaaS B2B",
    points: [
      "1,7M€ d'ARR généré en prospection (SDR & BDR) sur cycles longs.",
      "Jusqu'à 317% d'atteinte d'objectif en prospection.",
      "En AE Full Cycle : 100 deals signés, 452k€ d'ARR, 116% du quota annuel.",
      "Cycles longs et multi-interlocuteurs (DAF, DRH, DSI, élus syndicaux), grands comptes.",
    ],
  },
  {
    company: "Avant 2021",
    role: "Entrepreneur",
    period: "",
    context: "",
    points: [
      "Création de plusieurs structures et accompagnement de start-ups et d'associations dans leur structuration commerciale.",
    ],
  },
];

export default function CVPage() {
  return (
    <main id="contenu" className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      {/* Retour + télécharger */}
      <div className="flex items-center justify-between mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour au site
        </Link>
        <a
          href={CV_PDF}
          download
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 bg-bordeaux text-cream px-4 py-2 rounded-full text-sm font-medium hover:bg-bordeaux-soft transition"
        >
          <Download className="w-3.5 h-3.5" />
          Télécharger en PDF
        </a>
      </div>

      {/* En-tête */}
      <header className="mb-12">
        <h1 className="serif text-4xl md:text-5xl tracking-tight">
          Boris Hierso Alphandéry
        </h1>
        <p className="mt-3 text-lg text-muted">
          Head of Sales freelance · Coach en négociation · Intervenant
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <span className="inline-flex items-center gap-2">
            <span className="live-dot" />
            Disponible (freelance maintenant · CDI juillet 2026)
          </span>
          <span className="text-muted">Paris · remote</span>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <a href={`mailto:${EMAIL}`} className="text-ink hover:text-accent underline decoration-accent underline-offset-4">
            {EMAIL}
          </a>
          <a href={LINKEDIN} className="inline-flex items-center gap-1.5 text-ink hover:text-accent">
            LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a href={CALENDLY} className="inline-flex items-center gap-1.5 text-ink hover:text-accent">
            Réserver un échange <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Profil */}
      <section className="mb-12">
        <p className="serif text-xl md:text-2xl leading-snug">
          Head of Sales, 10 ans de vente B2B. J&apos;aime structurer, transmettre et faire performer des équipes commerciales, avec énergie et impact. De la prospection au closing, sur cycles longs et grands comptes.
        </p>
      </section>

      {/* Compétences */}
      <section className="mb-14">
        <h2 className="text-xs uppercase tracking-[0.18em] text-muted mb-6">
          <span className="dot" />
          Ce que je sais faire
        </h2>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
          {SKILLS.map(([title, desc]) => (
            <div key={title}>
              <div className="serif text-lg">{title}</div>
              <p className="text-sm text-muted leading-relaxed mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Expériences */}
      <section className="mb-14">
        <h2 className="text-xs uppercase tracking-[0.18em] text-muted mb-8">
          <span className="dot" />
          Expériences
        </h2>
        <div className="space-y-10">
          {EXPERIENCES.map((e) => (
            <article key={e.company}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="serif text-2xl">{e.company}</h3>
                {e.period && <span className="text-sm text-muted">{e.period}</span>}
              </div>
              <div className="text-ink font-medium mt-1">{e.role}</div>
              {e.context && <div className="text-sm text-muted">{e.context}</div>}
              <ul className="mt-4 space-y-2.5">
                {e.points.map((p, i) => (
                  <li key={i} className="flex gap-3 text-ink leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* CTA bas */}
      <section className="border-t hairline pt-10 flex flex-wrap items-center gap-4">
        <a
          href={CALENDLY}
          className="inline-flex items-center gap-2 bg-bordeaux text-cream px-6 py-3.5 rounded-full text-sm font-medium hover:bg-bordeaux-soft transition"
        >
          Prendre 30 minutes
          <ArrowUpRight className="w-4 h-4" />
        </a>
        <a
          href={CV_PDF}
          download
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 text-ink px-6 py-3.5 rounded-full text-sm font-medium border hairline hover:bg-accent-tint transition"
        >
          <Download className="w-4 h-4" />
          Télécharger en PDF
        </a>
      </section>
    </main>
  );
}
