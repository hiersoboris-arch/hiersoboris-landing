import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SITE_URL } from "@/lib/site-url";
import { CALENDLY } from "@/lib/contact";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";

export const metadata: Metadata = {
  title: "Formations vente B2B et IA, coaching individuel",
  description:
    "Formations de Boris Hierso Alphandéry : IA appliquée à la vente, relation client et account management, prospection, négociation. En entreprise (présentiel ou visio, d'une journée à plusieurs semaines), en ateliers courts, en coaching individuel et en école. Plus de 145 cours et modules prêts. Finançables par ton OPCO via des organismes certifiés Qualiopi.",
  alternates: { canonical: "/formations" },
  openGraph: {
    type: "website",
    title: "Formations & coaching · Boris Hierso Alphandéry",
    description:
      "IA appliquée à la vente, relation client, prospection, négociation : en entreprise, en visio, en coaching individuel et en école.",
  },
};

// Source de vérité : hub Notion « Formation Boris H.A » (espaces Pro, Étudiant,
// Carrière) et hub Akimbo (socle IA Perf Sales, parcours de coaching modèle).
// Règles : jamais le nom d'un client final ni d'un coaché, jamais de montant,
// jamais « certifié Qualiopi » (pas encore : on passe par des OF certifiés).

const FORMATS = [
  {
    titre: "En entreprise, en présentiel",
    duree: "De 1 à 20 jours",
    desc: "Une session intra, dans tes locaux, partout en France, pour ton équipe seulement. 2 jours pour démarrer, 3, 5, 10 ou 20 jours pour aller au fond. Tout se joue sur vos outils, vos comptes et vos vrais mails.",
  },
  {
    titre: "En visio",
    duree: "D'une heure à plusieurs semaines",
    desc: "Pour une seule entreprise ou en inter-entreprises. Mêmes programmes, mêmes livrables, rythmés pour la visio : jeux et quiz toutes les 20 minutes.",
  },
  {
    titre: "En coaching individuel",
    duree: "Au rythme de tes deals",
    desc: "En tête-à-tête, pour un commercial, un fondateur ou un indépendant qui vend. Des séances courtes sur ton vrai pipeline, un livrable concret à chaque étape, des simulations d'appel sur Pitchbase. Aussi pour les profils en reconversion vers la vente.",
  },
];

const AUTOUR = [
  "Un questionnaire et 45 minutes de préparation avant la session, pour partir de ton terrain",
  "Une heure après la formation, puis un point à 30 jours sur le plan d'action",
  "Une évaluation par livrables, pas par une note : chacun repart avec ses prompts, ses routines et son plan",
  "Je me déplace dans toute la France. Formations 100 % en français, pour des équipes francophones",
];

const IA_PERF = [
  "Situer son niveau et choisir où l'IA paie vraiment",
  "Cibler et scorer ses comptes",
  "Écrire des messages qui se lisent",
  "Automatiser avec des routines",
  "Préparer, capter et exploiter un rendez-vous",
  "Piloter son activité avec ses chiffres",
  "Tenir le compte après la signature",
  "Construire son plan d'action à 30 jours",
  "Rester dans le cadre légal, parler de l'empreinte de l'IA",
];

const THEMES = [
  "IA appliquée à la vente",
  "Relation client au quotidien",
  "Account management et grands comptes",
  "Prospection de nouveaux clients",
  "Stratégie commerciale",
  "Storytelling commercial",
  "Professionnaliser sa démarche commerciale",
  "Management commercial",
  "Webmarketing",
];

const ATELIERS = [
  { t: "Le commercial en 1 heure", d: "1 heure", s: "Tout le cycle de vente, pour les non-commerciaux qui vendent sans le dire" },
  { t: "Les 4 IA du commercial : par où commencer", d: "2 heures", s: "4 tours de 20 minutes de méthode et 10 minutes de jeu, 8 routines à copier" },
  { t: "Claude de A à Z : l'IA qui travaille pendant que tu vends", d: "1 heure", s: "8 routines prêtes à copier, 2 mises en situation sur ton vrai travail" },
  { t: "CRM : un pipeline qui se tient à jour tout seul", d: "7 heures", s: "Tu sors avec 5 contacts, 3 affaires et 1 routine dans ton CRM" },
  { t: "Le radar commercial : savoir qui bouge, et où le croiser", d: "7 heures", s: "Signaux d'achat sur sources publiques : tu sors avec 5 signaux, 3 événements et 1 routine" },
  { t: "Les cas extrêmement difficiles", d: "1 heure", s: "Clients agressifs, impasses, conflits : les méthodes pour garder la main" },
];

const ECOLE = [
  "L'entreprise et son écosystème tech",
  "Analyser son écosystème technologique",
  "Prospection & cold calling",
  "Social selling & IA copywriting",
  "Stratégies d'acquisition B2B",
  "Digital Smart Selling",
  "IA Sales Automation",
  "Choisir son IA, construire sa stack",
];

// Noms autorisés par Boris le 11/11/2026. Clients des formations et coachings
// en entreprise : JAMAIS nommés (NDA), seulement secteur et taille (sources :
// études Notion du hub Akimbo, Pappers et rapports publics).
const NOMMES = [
  "Euridis Business School",
  "Exoteach",
  "WoMa",
  "ValueCo",
  "Sindup",
  "Like Ton Job",
  "Azimuto",
];

const NDA = [
  {
    format: "Direction commerciale externalisée · coaching · recrutement",
    qui: "Éditeur SaaS industriel (maintenance et obsolescence)",
    detail: "Une dizaine de personnes. Audit commercial, pricing et supports alignés, CRM nettoyé, playbook commercial, ICP et cadence posés, coaching de la commerciale, entretiens de recrutement d'alternants Business Developer menés avec les fondateurs, 5 candidats présentés, onboarding et formation terrain des nouvelles recrues.",
  },
  {
    format: "Accompagnement commercial · apport d'affaires",
    qui: "Structure d'accompagnement de startups (pre-seed, seed)",
    detail: "Lecture critique du modèle économique et de l'offre, sourcing de startups clientes et ouverture de prescripteurs.",
  },
  {
    format: "Formation intra · 2 jours, présentiel",
    qui: "Études de marché et panels de grande consommation",
    detail: "Filiale française d'un groupe international, 250 à 499 salariés, siège à La Défense. 12 commerciaux seniors, sans CRM, sur Microsoft Copilot : programme recalé sur leur configuration réelle, puis note de recommandation à la direction.",
  },
  {
    format: "Formation intra · 2 jours, visio",
    qui: "Intégrateur de logiciels de conception (CAO, BIM)",
    detail: "5 implantations en France, siège à Lyon. Point de suivi à une semaine, calculateur de ROI remis à la direction, et une 2e session programmée pour d'autres agences.",
  },
  {
    format: "Formation intra · 2 jours, présentiel (à venir)",
    qui: "Prestataire de paiement en ligne coté en Bourse",
    detail: "Environ 220 salariés, siège en Île-de-France. Équipe commerciale sur Claude, Gemini, Dust et HubSpot, avec un business case pour la direction financière.",
  },
  {
    format: "Coaching individuel",
    qui: "Cabinet de conseil et d'intégration CRM",
    detail: "PME de 6 à 9 salariés, partenaire de 2 éditeurs (CRM et service client). Réactivation de la base clients et chasse de nouveaux comptes.",
  },
  {
    format: "Coaching individuel",
    qui: "Agence digitale web et IA, à Paris",
    detail: "PME de 6 à 9 salariés. Ciblage par verticale, séquences de prospection et pipeline qui se tient à jour tout seul.",
  },
  {
    format: "Coaching individuel",
    qui: "Analyste senior en études de marché",
    detail: "Secteur luxe et beauté, en reconversion vers l'account management.",
  },
  {
    format: "Formations inter-entreprises · 2 jours, visio",
    qui: "Commerciaux de plusieurs entreprises",
    detail: "Relation client au quotidien, puis IA au service de la performance commerciale : un programme ajusté au niveau de chacun, du premier pas commercial au compte stratégique.",
  },
];

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="kicker text-muted mb-4">
      <span className="dot" />
      {children}
    </div>
  );
}

export default function Formations() {
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
              { "@type": "ListItem", position: 2, name: "Formations", item: `${SITE_URL}/formations` },
            ],
          }),
        }}
      />
      <SiteHeader solidFromTop />
      <main id="contenu" className="pt-24 md:pt-28">
        {/* Hero */}
        <section className="max-w-content mx-auto px-6 pb-16 md:pb-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition mb-10 min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l&apos;accueil
          </Link>
          <div className="max-w-3xl">
            <div className="kicker md:text-sm text-bordeaux mb-6">Formations &amp; coaching</div>
            <h1 className="serif text-4xl md:text-6xl leading-[1.02] tracking-tight">
              Former des commerciaux
              <br />
              <span className="text-muted">qui vendent mieux, avec l&apos;IA.</span>
            </h1>
            <p className="mt-7 text-lg text-muted max-w-2xl leading-relaxed">
              Des formations que je conçois et que j&apos;anime moi-même : IA appliquée à la vente,
              relation client, prospection, négociation. En entreprise, en visio, en coaching
              individuel et en école. Toujours sur les cas réels des participants, jamais sur un cas
              générique : ce que j&apos;enseigne le matin, je le pratique l&apos;après-midi en mission.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={CALENDLY}
                className="inline-flex items-center gap-2 bg-bordeaux text-cream px-6 py-3.5 rounded-full text-sm font-medium hover:bg-bordeaux-soft transition"
              >
                Parler de ta formation
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#opco"
                className="inline-flex items-center gap-2 text-ink px-6 py-3.5 rounded-full text-sm font-medium border hairline hover:bg-accent-tint transition"
              >
                Financement par ton OPCO
              </a>
            </div>
          </div>
        </section>

        {/* Formats */}
        <section className="border-t hairline">
          <div className="max-w-content mx-auto px-6 py-16 md:py-20">
            <Kicker>3 formats</Kicker>
            <h2 className="serif text-3xl md:text-4xl leading-tight tracking-tight mb-10">
              En groupe ou en tête-à-tête.
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {FORMATS.map((f) => (
                <article key={f.titre} className="bg-card border hairline rounded-2xl p-7">
                  <div className="kicker text-accent mb-3">{f.duree}</div>
                  <h3 className="serif text-2xl leading-snug">{f.titre}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{f.desc}</p>
                </article>
              ))}
            </div>
            <ul className="mt-10 grid md:grid-cols-2 gap-4 text-sm text-ink">
              {AUTOUR.map((a) => (
                <li key={a} className="flex gap-3">
                  <span className="text-bordeaux">→</span>
                  <span className="leading-relaxed">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Formations longues */}
        <section className="border-t hairline grain">
          <div className="max-w-content mx-auto px-6 py-16 md:py-20 grid md:grid-cols-12 gap-12">
            <div className="md:col-span-7">
              <Kicker>La formation phare · 2 jours</Kicker>
              <h2 className="serif text-3xl md:text-4xl leading-tight tracking-tight">
                L&apos;IA au service de la performance commerciale.
              </h2>
              <p className="mt-5 text-muted leading-relaxed">
                Deux jours pour que chaque commercial reparte avec une IA qui travaille pour lui :
                veille et ciblage de comptes, messages, préparation et compte rendu de rendez-vous,
                pilotage, suivi client. La formation s&apos;adapte à l&apos;outil de l&apos;équipe :
                Microsoft Copilot (même sans CRM), ChatGPT et Gemini, ou Claude branché au CRM.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                17 ateliers et mises en situation, 12 livrables par participant. Tu viens avec ton
                compte IA, ton fichier de prospects, un mail resté sans réponse et ton prochain
                rendez-vous : on travaille dessus. La version 100 % Microsoft 365 tourne sur
                Outlook, Teams, Excel, Power BI et Power Automate.
              </p>
              <ol className="mt-8 space-y-3">
                {IA_PERF.map((c, i) => (
                  <li key={c} className="flex gap-4 border-b hairline pb-3">
                    <span className="serif text-bordeaux w-6 shrink-0">{i + 1}</span>
                    <span className="text-ink">{c}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-8 bg-card border hairline rounded-2xl p-6">
                <div className="font-medium text-ink mb-2">Après la formation, pour la direction</div>
                <p className="text-sm text-muted leading-relaxed">
                  Un calculateur de retour sur investissement, une checklist sécurité en 23 points
                  pour connecter une IA au CRM et à la messagerie, une charte IA prête à remplir,
                  et si besoin une note de recommandation sur l&apos;outillage de l&apos;équipe.
                </p>
              </div>
              <p className="mt-6 text-sm text-muted leading-relaxed">
                Déjà animée en entreprise et en inter-entreprises. 2 jours pour le format de base,
                et autant de jours que tu veux pour aller plus loin.
              </p>
            </div>
            <div className="md:col-span-5">
              <Kicker>Les grands thèmes</Kicker>
              <p className="text-muted leading-relaxed mb-6">
                Chaque thème se monte sur la durée qui te va, d&apos;une journée à plusieurs
                semaines, et se combine avec les autres.
              </p>
              <ul className="space-y-3">
                {THEMES.map((t) => (
                  <li
                    key={t}
                    className="bg-card border hairline rounded-xl px-4 py-3 text-sm text-ink"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Ateliers courts */}
        <section className="border-t hairline">
          <div className="max-w-content mx-auto px-6 py-16 md:py-20">
            <Kicker>Plus de 145 cours et modules prêts</Kicker>
            <h2 className="serif text-3xl md:text-4xl leading-tight tracking-tight mb-4">
              Un sujet, d&apos;une heure à une journée.
            </h2>
            <p className="text-muted leading-relaxed max-w-2xl mb-10">
              Plus de 145 cours et modules déjà préparés, de 60 minutes à la journée entière :
              prospection, cold call, social selling, négociation, closing, account management,
              CRM, IA, automatisation, management, recrutement. Ils se prennent seuls ou
              s&apos;assemblent en formation sur mesure. Quelques exemples :
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {ATELIERS.map((a) => (
                <div key={a.t} className="bg-card border hairline rounded-2xl p-6">
                  <div className="kicker text-accent mb-2">{a.d}</div>
                  <div className="serif text-lg leading-snug">{a.t}</div>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{a.s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* En école */}
        <section className="border-t hairline">
          <div className="max-w-content mx-auto px-6 py-16 md:py-20 grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <Kicker>En école</Kicker>
              <h2 className="serif text-3xl md:text-4xl leading-tight tracking-tight">
                Des cours conçus de zéro.
              </h2>
              <p className="mt-5 text-muted leading-relaxed">
                Professeur intervenant à Euridis Business School : une douzaine de promos
                d&apos;une trentaine d&apos;étudiants, environ 350 étudiants, 14,3/20 de moyenne sur
                mes interventions. Coach des étudiants d&apos;Euridis Paris pour Les Négociales 2026
                et 2027, juré de soutenances. Du Bachelor au MBA : jeux notés, simulations d&apos;appel sur Pitchbase, épreuves blanches de certification RNCP. Aussi des ateliers de prospection pour aider les étudiants à décrocher leur alternance, et des jurys (soutenances, concours start-up).
              </p>
              <Link
                href="/alternance"
                className="mt-6 inline-flex items-center gap-2 text-bordeaux font-medium hover:gap-3 transition-all min-h-[44px]"
              >
                Écoles : je présente aussi des alternants
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="md:col-span-7 grid sm:grid-cols-2 gap-3">
              {ECOLE.map((c) => (
                <div key={c} className="bg-card border hairline rounded-xl px-4 py-3 text-sm text-ink">
                  {c}
                </div>
              ))}
              <div className="bg-card border hairline rounded-xl px-4 py-3 text-sm text-ink">
                Préparation aux Négociales
              </div>
              <div className="bg-card border hairline rounded-xl px-4 py-3 text-sm text-ink">
                RGPD &amp; empreinte numérique
              </div>
            </div>
          </div>
        </section>

        {/* Références */}
        <section className="border-t hairline grain">
          <div className="max-w-content mx-auto px-6 py-16 md:py-20">
            <Kicker>Ils m&apos;ont confié leurs équipes</Kicker>
            <h2 className="serif text-3xl md:text-4xl leading-tight tracking-tight mb-8">
              Entreprises, écoles et associations.
            </h2>
            <div className="flex flex-wrap gap-3 mb-12">
              {NOMMES.map((n) => (
                <span key={n} className="border hairline bg-card rounded-full px-4 py-2 text-sm text-ink">
                  {n}
                </span>
              ))}
            </div>
            <p className="text-muted leading-relaxed max-w-2xl mb-6">
              Depuis septembre 2026 : 4 formations de 2 jours animées, 2 autres programmées en
              novembre, 3 coachings individuels en cours. Ces missions sont sous accord de
              confidentialité : je ne cite pas le nom des clients. Voici qui ils sont.
            </p>
            <blockquote className="mb-8 border-l-2 border-bordeaux pl-5 serif text-xl text-ink">
              « C&apos;est factuel, c&apos;est concret. »
              <span className="block mt-1 text-sm text-muted not-italic font-sans">Participant d&apos;une formation intra</span>
            </blockquote>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {NDA.map((c) => (
                <article key={c.qui} className="bg-card border hairline rounded-2xl p-6">
                  <div className="kicker text-accent mb-2">{c.format}</div>
                  <h3 className="serif text-lg leading-snug">{c.qui}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{c.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* OPCO */}
        <section id="opco" className="border-t hairline">
          <div className="max-w-content mx-auto px-6 py-16 md:py-20">
            <div className="bg-night text-cream rounded-2xl p-8 md:p-12 grid md:grid-cols-12 gap-8">
              <div className="md:col-span-7">
                <div className="kicker text-bordeaux-light mb-4">Financement</div>
                <h2 className="serif text-3xl md:text-4xl leading-tight tracking-tight">
                  Finançable par ton OPCO.
                </h2>
                <p className="mt-5 text-cream/80 leading-relaxed">
                  Je passe par des organismes de formation certifiés Qualiopi avec lesquels je
                  travaille, choisis selon ton besoin et ton OPCO : ce sont eux qui portent le
                  dossier de prise en charge, moi qui conçois et anime. Dis-moi à quel OPCO tu es
                  rattaché, je te dis par qui on passe.
                </p>
              </div>
              <div className="md:col-span-5 flex md:justify-end items-end">
                <a
                  href={CALENDLY}
                  className="inline-flex items-center gap-2 bg-cream text-ink px-6 py-3.5 rounded-full text-sm font-medium hover:bg-bg transition"
                >
                  Réserver 30 minutes
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <p className="mt-8 text-sm text-muted max-w-2xl leading-relaxed">
              Tu cherches plutôt des ressources gratuites (CV, entretien, négociation de salaire,
              coût d&apos;un alternant) ? Elles sont dans les{" "}
              <Link href="/livres-blancs" className="underline hover:text-ink">
                livres blancs
              </Link>
              .
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
