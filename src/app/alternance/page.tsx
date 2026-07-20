import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin, CalendarDays, Laptop } from "lucide-react";
import { CALENDLY, LINKEDIN } from "@/lib/contact";
import { SITE_URL } from "@/lib/site-url";
import SiteHeader from "../SiteHeader";

export const metadata: Metadata = {
  title: "Alternance Sales : les opportunités du moment",
  description:
    "Des postes d'alternance Sales sélectionnés à la source par Boris Hierso Alphandéry, intervenant en école de commerce. Pour les étudiants, les écoles et les entreprises qui recrutent.",
  alternates: { canonical: "/alternance" },
  openGraph: {
    type: "website",
    title: "Alternance Sales · Boris Hierso Alphandéry",
    description:
      "Des alternances Sales sélectionnées à la source : étudiants, écoles, entreprises.",
  },
};

type Opportunite = {
  code: string;
  badge: string;
  role: string;
  contexte: string;
  lieu: string;
  rythme: string;
  demarrage: string;
  missions: string[];
  profil: string;
};

// Les entreprises sont volontairement anonymisées : le nom est donné de vive voix
// aux candidats et aux écoles, jamais publié.
const OPPORTUNITES: Opportunite[] = [
  {
    code: "ALT-01",
    badge: "SaaS B2B · IA pour la maintenance",
    role: "Alternant·e Sales · cycle complet (prospection → closing)",
    contexte:
      "Scale-up française qui développe un assistant IA pour la maintenance d'infrastructures (bornes de recharge aujourd'hui, facility management et industrie demain). Tu seras la première personne dédiée au Sales, en direct avec le fondateur.",
    lieu: "Ouest parisien (78) + Paris 13e",
    rythme: "Beaucoup de télétravail, présentiel ponctuel selon les RDV",
    demarrage: "Dès maintenant",
    missions: [
      "Prospection des opérateurs de bornes de recharge et de leurs équipes ops / maintenance",
      "Qualification des besoins et démos avec le CEO",
      "Cycle complet : ouverture, discovery, pilote 30 jours, closing",
      "Ouverture de marchés voisins (Belgique, Pays-Bas, Allemagne) en anglais",
    ],
    profil:
      "Dernière année / MBA · bilingue français-anglais · autonome, à l'aise sur des cycles B2B techniques.",
  },
  {
    code: "ALT-02",
    badge: "Conseil tech haut de gamme",
    role: "Alternant·e Sales · prospection nouveaux comptes",
    contexte:
      "Boutique de conseil tech (refonte logicielle, développement sur-mesure, IA, formations certifiées) qui travaille pour de grands comptes industriels et medtech. Poste à créer, en binôme direct avec le président.",
    lieu: "Issy-les-Moulineaux (92)",
    rythme: "3 jours bureau / 2 jours télétravail",
    demarrage: "Septembre 2026",
    missions: [
      "Prospection de nouveaux comptes (ETI et grands comptes industriels et tech)",
      "Diversification de la base clients",
      "Qualification puis transmission des leads aux experts pour la phase technique",
      "Construction du process commercial avec le dirigeant",
    ],
    profil:
      "4e ou 5e année · bilingue français-anglais · autonome · gros plus si bagage tech (école d'ingénieurs, ex-dev, BTS info).",
  },
  {
    code: "ALT-03",
    badge: "Healthtech / RH",
    role: "Alternant·e Sales · terrain pharmacies + cycle long entreprises",
    contexte:
      "Scale-up française qui aide les 11 millions d'aidants familiaux à concilier vie pro et accompagnement d'un proche (app + experts médico-sociaux). Distribution via les entreprises (RH / QVT) et via les pharmacies.",
    lieu: "Saint-Denis (93), proche ligne 13",
    rythme: "Présentiel apprécié, télétravail possible",
    demarrage: "Dès maintenant",
    missions: [
      "Prospection terrain auprès des pharmacies : partenariats d'affiliation, 3 à 5 visites par jour",
      "Cycles longs B2B auprès des RH / DRH d'entreprises",
      "Cible secondaire : groupements de pharmacies, plateformes de distribution",
      "Reporting hebdo en direct avec le CEO",
    ],
    profil:
      "Bac+3 à master · à l'aise au téléphone et en porte-à-porte · permis B · sensibilité santé / social appréciée.",
  },
  {
    code: "ALT-05",
    badge: "Real estate · colliving premium",
    role: "Alternant·e Sales B2B · cycle complet (prospection → closing)",
    contexte:
      "Scale-up européenne de colliving premium, présente dans 9 grandes villes en Europe et aux États-Unis. Elle lance son département B2B (logement des salariés en mobilité) : tu le montes aux côtés du top management.",
    lieu: "Paris, déplacements ponctuels possibles",
    rythme: "Hybride, présentiel majoritaire (1 à 2 jours de télétravail)",
    demarrage: "Rentrée 2026 (septembre ou octobre)",
    missions: [
      "Premier point de contact des prospects B2B (RH, mobilité, talent acquisition)",
      "Suivi rigoureux du pipeline jusqu'à la signature des contrats",
      "Analyse des métriques (taux d'occupation, churn) avec le Sales Team Lead et la VP Sales",
      "Organisation d'événements pour fidéliser les clients corporate",
    ],
    profil:
      "Bac+3 à master · bilingue français-anglais (espagnol ou italien apprécié) · profil analytique et sociable · pas besoin de background immo : je coache la dimension Sales B2B.",
  },
  {
    code: "ALT-06",
    badge: "Industrie · SaaS de gestion de l'obsolescence",
    role: "Alternant·e Business Developer · grands comptes industriels",
    contexte:
      "Société qui sécurise la production industrielle en gérant l'obsolescence des pièces détachées critiques : quand une pièce introuvable arrête une ligne de production, elle la retrouve, avec un gain moyen de 45%. Elle industrialise cette expertise dans un SaaS qui score le risque d'obsolescence de tout un parc machines. Tu rejoins directement l'équipe commerciale, avec une évolution possible vers un poste de Business Developer confirmé en CDI.",
    lieu: "La Défense / Courbevoie (92), déplacements ponctuels sur les sites industriels",
    rythme: "Présentiel · alternance de 12 à 24 mois (stage de 4 à 6 mois possible)",
    demarrage: "Septembre ou octobre 2026 (pré-alternance possible en amont)",
    missions: [
      "Ciblage des groupes industriels multi-sites, en approche corporate plutôt que site par site",
      "Prospection téléphone, email et LinkedIn (stack semi-automatisée et IA déjà en place)",
      "Qualification des interlocuteurs : maintenance, production, achats MRO, direction financière",
      "Rendez-vous de qualification courts, scorés, puis transmis à l'expert avec une fiche détaillée",
      "Structuration du CRM et contribution au discours commercial",
    ],
    profil:
      "Pas un profil débutant : une première expérience de prospection ou de vente fait la différence · français parfait (anglais un plus) · à l'aise au téléphone, résilient face au rejet, curieux d'industrie et de tech · basé en région parisienne.",
  },
  {
    code: "ALT-07",
    badge: "Conseil · flux de données et systèmes d'information",
    role: "Alternant·e commercial·e · premier profil Sales de la structure",
    contexte:
      "Jeune société de conseil en flux de données et systèmes d'information, fondée par des ingénieurs et en cours de structuration. L'équipe sait délivrer mais n'a personne au commercial : tu serais le tout premier profil Sales, en direct avec le fondateur. Je t'accompagne gratuitement les premières semaines sur le cadrage et la méthode.",
    lieu: "Île-de-France, organisation décentralisée (pas de bureau fixe)",
    rythme: "3 semaines entreprise / 1 semaine école",
    demarrage: "Rentrée 2026, à confirmer",
    missions: [
      "Prospection des comptes cibles et prise de rendez-vous",
      "Qualification des besoins en amont des experts techniques",
      "Construction du process commercial de zéro, avec le fondateur",
      "Montée en puissance progressive sur des deals de plus gros volume",
    ],
    profil:
      "Master 1 ou Master 2 · autonome, à l'aise pour construire sans process existant · appétence pour la data et les systèmes d'information.",
  },
];

export default function Alternance() {
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
              { "@type": "ListItem", position: 2, name: "Alternance", item: `${SITE_URL}/alternance` },
            ],
          }),
        }}
      />
      <SiteHeader solidFromTop />
      <main id="contenu" className="pt-24 md:pt-28">
        {/* Hero */}
        <section className="max-w-content mx-auto px-6 pb-14 md:pb-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l&apos;accueil
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 text-xs md:text-sm tracking-[0.2em] uppercase text-bordeaux mb-6">
              <span className="live-dot" />
              <span>{OPPORTUNITES.length} postes ouverts</span>
            </div>
            <h1 className="serif text-4xl md:text-6xl leading-[1.02] tracking-tight">
              Des alternances Sales,
              <br />
              <span className="italic text-bordeaux">sélectionnées à la source.</span>
            </h1>
            <p className="mt-7 text-lg text-muted max-w-2xl leading-relaxed">
              Je suis intervenant en école de commerce et Head of Sales. Ces postes viennent
              de dirigeants que je connais personnellement : j&apos;ai échangé avec chacun d&apos;eux
              sur le poste, l&apos;équipe et le contexte. Les noms d&apos;entreprises sont
              volontairement masqués : je les donne de vive voix.
            </p>
          </div>

          {/* 3 audiences */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <AudienceCard
              tag="Étudiants"
              title="Tu cherches ton alternance ?"
              desc="Repère les postes qui te parlent, puis écris-moi sur LinkedIn avec la référence (ALT-01, ALT-02...) ou réserve 15 minutes. Je te présente l'entreprise et je t'aide à préparer l'entretien."
            />
            <AudienceCard
              tag="Écoles"
              title="Vous placez des étudiants ?"
              desc="Responsables relations entreprises : ces postes sont ouverts à vos candidats. Parlons profils et volumes, je fais l'intermédiaire avec les dirigeants."
            />
            <AudienceCard
              tag="Entreprises"
              title="Vous cherchez un alternant ?"
              desc="Je vous accompagne dans le placement : je suis intervenant en école de commerce, je connais les réseaux d'écoles et je pré-qualifie les profils Sales avant de vous les présenter."
            />
          </div>
        </section>

        {/* Offres */}
        <section id="offres" className="border-t hairline">
          <div className="max-w-content mx-auto px-6 py-16 md:py-24">
            <div className="text-xs uppercase tracking-[0.18em] text-muted mb-8">
              <span className="dot" />
              Les postes du moment
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {OPPORTUNITES.map((o) => (
                <OppCard key={o.code} {...o} />
              ))}
            </div>
            <p className="mt-8 text-sm text-muted max-w-2xl leading-relaxed">
              Un poste t&apos;intéresse ? Mentionne sa référence dans ton message. Aucune
              candidature ne part sans un échange préalable : c&apos;est ce qui fait que les
              dirigeants me font confiance, et que ta candidature arrive au bon endroit.
            </p>
          </div>
        </section>

        {/* CTA entreprises */}
        <section className="border-t hairline grain">
          <div className="max-w-content mx-auto px-6 py-16 md:py-24">
            <div className="grid md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-7">
                <h2 className="serif text-3xl md:text-5xl leading-[1.05] tracking-tight">
                  Vous recrutez un alternant Sales ?{" "}
                  <span className="text-muted">Gagnez des mois.</span>
                </h2>
                <p className="mt-6 text-lg text-muted max-w-xl leading-relaxed">
                  J&apos;interviens en école de commerce auprès de centaines d&apos;étudiants
                  Sales, je connais les responsables de placement des écoles, et je
                  pré-qualifie les profils avant de vous les présenter. Vous voyez 3 bons
                  candidats au lieu de 300 CV.
                </p>
              </div>
              <div className="md:col-span-5 space-y-3">
                <a
                  href={CALENDLY}
                  className="flex items-center justify-between bg-bordeaux text-cream px-6 py-5 rounded-2xl hover:bg-bordeaux-soft transition"
                >
                  <span>
                    <span className="block text-xs uppercase tracking-[0.18em] opacity-70">
                      Calendly
                    </span>
                    <span className="serif text-lg mt-1 block">Prendre 15 minutes</span>
                  </span>
                  <ArrowUpRight className="w-5 h-5" />
                </a>
                <a
                  href={LINKEDIN}
                  className="flex items-center justify-between border hairline bg-card px-6 py-5 rounded-2xl hover:border-accent transition"
                >
                  <span>
                    <span className="block text-xs uppercase tracking-[0.18em] text-muted">
                      LinkedIn
                    </span>
                    <span className="serif text-lg mt-1 block">M&apos;écrire directement</span>
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-muted" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t hairline">
        <div className="max-w-content mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-muted">
          <div className="serif">Boris Hierso Alphandéry</div>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-ink">Accueil</Link>
            <Link href="/cv" className="hover:text-ink">CV</Link>
            <Link href="/mentions-legales" className="hover:text-ink">Mentions légales</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

function AudienceCard({
  tag,
  title,
  desc,
}: {
  tag: string;
  title: string;
  desc: string;
}) {
  return (
    <article className="lift bg-card border hairline rounded-2xl p-8">
      <div className="text-xs uppercase tracking-[0.18em] text-accent mb-3">{tag}</div>
      <h2 className="serif text-2xl mb-3">{title}</h2>
      <p className="text-muted leading-relaxed">{desc}</p>
    </article>
  );
}

function OppCard({
  code,
  badge,
  role,
  contexte,
  lieu,
  rythme,
  demarrage,
  missions,
  profil,
}: Opportunite) {
  return (
    <article className="bg-card border hairline rounded-2xl p-8 md:p-10 flex flex-col">
      <div className="flex items-center justify-between gap-3 mb-4">
        <span className="text-xs uppercase tracking-[0.18em] text-accent">{badge}</span>
        <span className="text-xs text-muted border hairline rounded-full px-3 py-1">
          Réf. {code}
        </span>
      </div>
      <h3 className="serif text-2xl leading-snug">{role}</h3>
      <p className="mt-3 text-muted leading-relaxed">{contexte}</p>

      <div className="mt-5 space-y-1.5 text-sm text-ink">
        <div className="flex items-center gap-2.5">
          <MapPin className="w-4 h-4 text-accent shrink-0" />
          {lieu}
        </div>
        <div className="flex items-center gap-2.5">
          <Laptop className="w-4 h-4 text-accent shrink-0" />
          {rythme}
        </div>
        <div className="flex items-center gap-2.5">
          <CalendarDays className="w-4 h-4 text-accent shrink-0" />
          Démarrage : {demarrage}
        </div>
      </div>

      <div className="mt-6">
        <div className="text-xs uppercase tracking-[0.18em] text-muted mb-2">Missions</div>
        <ul className="space-y-2">
          {missions.map((m, i) => (
            <li key={i} className="flex gap-3 leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              <span>{m}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <div className="text-xs uppercase tracking-[0.18em] text-muted mb-2">Profil</div>
        <p className="leading-relaxed">{profil}</p>
      </div>

      <div className="mt-8 pt-2">
        <a
          href={CALENDLY}
          className="inline-flex items-center gap-2 bg-bordeaux text-cream px-5 py-3 rounded-full text-sm font-medium hover:bg-bordeaux-soft transition"
        >
          Ce poste m&apos;intéresse
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </article>
  );
}
