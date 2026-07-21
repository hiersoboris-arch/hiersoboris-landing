import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin, CalendarDays, Laptop, BookOpen, Check } from "lucide-react";
import { CALENDLY, LINKEDIN } from "@/lib/contact";
import { KIT_CONTENU } from "@/lib/livre-blanc";
import { SITE_URL } from "@/lib/site-url";
import SiteHeader from "../SiteHeader";
import LivreBlancForm from "./LivreBlancForm";

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
      "Bac+3 à master · bilingue français-anglais (espagnol ou italien apprécié) · profil analytique et sociable · pas besoin de background immobilier.",
  },
  {
    code: "ALT-06",
    badge: "Industrie · SaaS de gestion de l'obsolescence",
    role: "Alternant·e Business Developer · grands comptes industriels",
    contexte:
      "Société qui sécurise la production industrielle en gérant l'obsolescence des pièces détachées critiques : quand une pièce introuvable arrête une ligne de production, elle la retrouve, avec un gain moyen de 45%. Elle industrialise cette expertise dans un SaaS qui score le risque d'obsolescence de tout un parc machines. Tu rejoins directement l'équipe commerciale, avec une évolution possible vers un poste de Business Developer confirmé en CDI.",
    lieu: "La Défense / Courbevoie (92), déplacements ponctuels sur les sites industriels",
    rythme: "Présentiel · alternance de 12 à 24 mois",
    demarrage: "Septembre ou octobre 2026 (pré-alternance possible en amont)",
    missions: [
      "Ciblage des groupes industriels multi-sites, en approche corporate plutôt que site par site",
      "Prospection téléphone, email et LinkedIn (stack semi-automatisée et IA déjà en place)",
      "Qualification des interlocuteurs : maintenance, production, achats MRO, direction financière",
      "Rendez-vous de qualification courts, scorés, puis transmis à l'expert avec une fiche détaillée",
      "Structuration du CRM et contribution au discours commercial",
    ],
    profil:
      "Pas un profil débutant : une première expérience de prospection ou de vente fait la différence · français parfait (anglais un plus) · à l'aise au téléphone, résilient face au rejet, curieux d'industrie et de tech · basé à Paris ou à proximité de La Défense.",
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
      "Bac+3 à Bac+5 · autonome, à l'aise pour construire sans process existant · appétence pour la data et les systèmes d'information.",
  },
  {
    code: "ALT-08",
    badge: "IA · agents autonomes open source",
    role: "Alternant·e Sales · premier renfort commercial",
    contexte:
      "Éditeur open source d'agents IA, des collaborateurs digitaux qui ont chacun un rôle et des KPI comme un humain. Leur agent commercial vient de sortir et l'argument porte : il démarre à quelques centaines d'euros par mois quand un profil junior en coûte plusieurs milliers, et l'actif reste chez le client. Le fondateur fait encore la prospection lui-même. Tu serais son premier renfort commercial, sur un produit neuf et un marché à créer.",
    lieu: "Paris, télétravail large",
    rythme: "À définir avec l'entreprise",
    demarrage: "Septembre 2026",
    missions: [
      "Prospection des PME et scale-ups qui veulent industrialiser leur outbound sans recruter",
      "Démos du produit et accompagnement des pilotes de 30 jours",
      "Qualification des besoins, puis passage de relais au fondateur pour le closing",
      "Animation de la communauté open source, qui est leur premier canal d'acquisition",
      "Structuration du discours commercial et des séquences, tout est à construire",
    ],
    profil:
      "Bac+3 à Bac+5 · forte appétence IA et outils, c'est le cœur du produit et de ta crédibilité face aux prospects · à l'aise avec un produit technique sans être développeur · anglais utile, la documentation et la communauté sont en anglais.",
  },
  {
    code: "JOB-01",
    badge: "IA · mission courte en freelance",
    role: "Mission freelance junior · implémentation d'agents IA",
    contexte:
      "Même éditeur que l'offre ALT-08. Leurs clients installent l'agent mais ne savent pas le configurer : il faut quelqu'un pour poser les cibles, les listes et les routines. C'est une mission courte, à la prestation, pas une alternance.",
    lieu: "À distance",
    rythme: "Mission courte, volume rythmé par les onboardings clients",
    demarrage: "À discuter",
    missions: [
      "Onboarding des nouveaux clients sur la plateforme",
      "Paramétrage de l'agent commercial : cible, listes, séquences email et LinkedIn, copy",
      "Mise en place de l'infrastructure d'envoi : domaines dédiés, boîtes mail, chauffe",
      "Branchement des intégrations selon la stack du client (CRM, LinkedIn, messagerie, agenda)",
      "Calibration sur les premières semaines, puis passation et documentation",
    ],
    profil:
      "Junior sales ops, growth ou SDR outillé, 1 à 3 ans d'expérience ou très bon alternant sortant · à l'aise avec les outils d'outbound et les intégrations sans être développeur · rigoureux sur la donnée · autonome et pédagogue, tu es en contact direct avec leurs clients.",
  },
  {
    code: "ALT-09",
    badge: "SaaS B2B · agent IA pour la prospection",
    role: "Alternant·e Business Developer · poste très téléphone",
    contexte:
      "Éditeur d'une plateforme de prospection tout-en-un avec un agent IA embarqué, vendue à des entreprises B2B déjà structurées. Tu rejoins une équipe commerciale de cinq personnes et tu serais leur troisième alternant : le poste est rodé, pas à défricher. Tu ne pars jamais d'une page blanche, l'agent sort les listes et les signaux d'achat, toi tu décroches. La culture commerciale est forte en interne, plusieurs associés viennent eux-mêmes de la vente.",
    lieu: "Paris 2e, présentiel",
    rythme: "À définir avec l'entreprise",
    demarrage: "Rentrée 2026",
    missions: [
      "Appels sortants sur des comptes pré-qualifiés par l'agent, à partir de signaux d'achat réels",
      "Prospection multicanale email et LinkedIn depuis la plateforme maison",
      "Qualification des interlocuteurs et prise de rendez-vous pour les Account Executives",
      "Travail sur des cibles B2B de 50 à 300 salariés, avec des équipes commerciales déjà en place",
      "Contribution au discours commercial et aux séquences",
    ],
    profil:
      "Bac+3 à bac+5 · bilingue français-anglais, une partie des clients est à l'international · au moins un stage ou une alternance déjà faits · à l'aise au téléphone, tu as déjà décroché et ça ne te fait pas peur · l'envie et la vitesse d'apprentissage comptent plus que la technique, elle s'apprend sur place.",
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

            <a
              href="#livre-blanc"
              className="mt-8 inline-flex items-center gap-3 border hairline bg-card pl-5 pr-4 py-3.5 rounded-full hover:border-accent transition group"
            >
              <BookOpen className="w-4 h-4 text-bordeaux" />
              <span className="text-sm">
                <span className="text-muted">Kit gratuit : </span>
                <span className="text-ink font-medium">Décroche ton alternance</span>
              </span>
              <ArrowRight className="w-4 h-4 text-muted group-hover:translate-x-0.5 transition" />
            </a>
          </div>

          {/* 3 audiences */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <AudienceCard
              tag="Étudiants"
              title="Tu cherches ton alternance ?"
              desc="Repère les postes qui te parlent, puis écris-moi sur LinkedIn avec la référence (ALT-01, ALT-02...) ou réserve 15 minutes. Je te présente l'entreprise et je t'aide à préparer l'entretien."
              ctaHref="#livre-blanc"
              ctaLabel="Recevoir le kit gratuit"
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

        {/* Livre blanc */}
        <section id="livre-blanc" className="border-t hairline grain scroll-mt-28">
          <div className="max-w-content mx-auto px-6 py-16 md:py-24">
            <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="md:col-span-6">
                <div className="text-xs uppercase tracking-[0.18em] text-muted mb-5">
                  <span className="dot" />
                  Kit gratuit
                </div>
                <h2 className="serif text-3xl md:text-5xl leading-[1.05] tracking-tight">
                  Décroche ton alternance.
                </h2>
                <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl">
                  Tout ce que je donne à mes étudiants avant un entretien, réuni sur une
                  page. Rien de théorique : ce sont les mêmes réponses et les mêmes
                  méthodes que celles que je fais travailler en cours.
                </p>

                <ul className="mt-8 space-y-3.5">
                  {KIT_CONTENU.map((item) => (
                    <li key={item} className="flex gap-3 text-muted leading-relaxed">
                      <Check className="w-4 h-4 text-bordeaux shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-6">
                <LivreBlancForm />
              </div>
            </div>
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
  ctaHref,
  ctaLabel,
}: {
  tag: string;
  title: string;
  desc: string;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <article className="lift bg-card border hairline rounded-2xl p-8 flex flex-col">
      <div className="text-xs uppercase tracking-[0.18em] text-accent mb-3">{tag}</div>
      <h2 className="serif text-2xl mb-3">{title}</h2>
      <p className="text-muted leading-relaxed">{desc}</p>
      {ctaHref && ctaLabel && (
        <a
          href={ctaHref}
          className="mt-5 inline-flex items-center gap-2 text-sm text-bordeaux font-medium hover:gap-3 transition-all"
        >
          {ctaLabel}
          <ArrowRight className="w-4 h-4" />
        </a>
      )}
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
