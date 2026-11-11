import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SITE_URL } from "@/lib/site-url";
import { CALENDLY } from "@/lib/contact";
import SiteHeader from "../SiteHeader";

export const metadata: Metadata = {
  title: "Formations vente B2B et IA, coaching individuel",
  description:
    "Formations de Boris Hierso Alphandéry : IA appliquée à la vente, relation client et account management, prospection, négociation. En entreprise (présentiel ou visio, 2 jours), en ateliers courts, en coaching individuel sur 6 semaines et en école. Finançables par ton OPCO via des organismes certifiés Qualiopi.",
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
    duree: "2 jours · 14 heures",
    desc: "Une session intra, dans tes locaux, partout en France, pour ton équipe seulement. Tout se joue sur vos outils, vos comptes et vos vrais mails.",
  },
  {
    titre: "En visio",
    duree: "2 jours · 14 heures",
    desc: "Pour une seule entreprise ou en inter-entreprises. Même programme, mêmes livrables, rythmé pour la visio : jeux et quiz toutes les 20 minutes.",
  },
  {
    titre: "En coaching individuel",
    duree: "6 semaines · kick-off + 12 séances",
    desc: "Un kick-off d'1 heure, puis 2 séances de 45 minutes par semaine et un livrable par semaine, sur le vrai pipeline du commercial ou du dirigeant.",
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
  { t: "IA appliquée à la vente", fait: true },
  { t: "Relation client au quotidien", fait: true },
  { t: "Account management et grands comptes", fait: true },
  { t: "Prospection de nouveaux clients", fait: false },
  { t: "Stratégie commerciale", fait: false },
  { t: "Storytelling commercial", fait: false },
  { t: "Professionnaliser sa démarche commerciale", fait: false },
  { t: "Management commercial", fait: false },
  { t: "Webmarketing", fait: false },
];

const ATELIERS = [
  { t: "Le commercial en 1 heure", d: "1 heure", s: "Tout le cycle de vente, pour les non-commerciaux qui vendent sans le dire" },
  { t: "Les 4 IA du commercial : par où commencer", d: "2 heures", s: "4 tours de 20 minutes de méthode et 10 minutes de jeu, 8 routines à copier" },
  { t: "Claude de A à Z : l'IA qui travaille pendant que tu vends", d: "1 heure", s: "8 routines prêtes à copier, 2 mises en situation sur ton vrai travail" },
  { t: "CRM : un pipeline qui se tient à jour tout seul", d: "7 heures", s: "Tu sors avec 5 contacts, 3 affaires et 1 routine dans ton CRM" },
  { t: "Le radar commercial : savoir qui bouge, et où le croiser", d: "7 heures", s: "Signaux d'achat sur sources publiques : tu sors avec 5 signaux, 3 événements et 1 routine" },
  { t: "Les cas extrêmement difficiles", d: "1 heure", s: "Clients agressifs, impasses, conflits : les méthodes pour garder la main" },
];

const SEANCES = [
  { t: "Kick-off", s: "Ton terrain, tes chiffres, ce qui bloque, et 3 objectifs à 6 semaines" },
  { t: "Go-to-market", s: "Dire en 30 secondes quel problème tu résous, pour qui, et où trouver tes contacts" },
  { t: "Choisir sa cible", s: "Moins de 250 comptes, pourquoi maintenant, et 10 comptes à appeler" },
  { t: "Écrire pour être lu", s: "Un mail de prospection qui obtient une réponse, organisé en séquence" },
  { t: "Le bon signal", s: "Le bon prospect, au bon moment, et une séquence pilotée" },
  { t: "Décrocher le rendez-vous", s: "Passer le barrage, ouvrir en 20 secondes, raccrocher avec une date" },
  { t: "L'appel qui convertit", s: "Un script réécrit avec les données, un entraînement sans brûler ses prospects" },
  { t: "La découverte complète", s: "Faire parler, tout couvrir, finir sur une prochaine étape datée" },
  { t: "Qualifier et raconter", s: "Faire chiffrer le coût du statu quo et trouver la raison d'agir maintenant" },
  { t: "Démo, objections et prix", s: "Une démo qui suit la découverte, un prix annoncé sans trembler" },
  { t: "Grands comptes et valeur", s: "Cartographier un compte, qualifier un deal complexe, chiffrer sa valeur" },
  { t: "Négocier sans brader", s: "Tenir sa marge face à un acheteur, et sortir avec une date" },
  { t: "Après la signature", s: "Garder et faire grandir un client signé" },
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
    format: "Coaching individuel · 6 semaines",
    qui: "Cabinet de conseil et d'intégration CRM",
    detail: "PME de 6 à 9 salariés, partenaire de 2 éditeurs (CRM et service client). Réactivation de la base clients et chasse de nouveaux comptes.",
  },
  {
    format: "Coaching individuel · 6 semaines",
    qui: "Agence digitale web et IA, à Paris",
    detail: "PME de 6 à 9 salariés. Ciblage par verticale, séquences de prospection et pipeline qui se tient à jour tout seul.",
  },
  {
    format: "Coaching individuel · 6 semaines",
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
                Déjà animée en entreprise (études de marché, intégration de logiciels) et en
                inter-entreprises, bientôt dans le paiement en ligne.
              </p>
            </div>
            <div className="md:col-span-5">
              <Kicker>9 thèmes de formation</Kicker>
              <p className="text-muted leading-relaxed mb-6">
                Même format de 2 jours, sur l&apos;un de ces thèmes. Ceux marqués d&apos;un point
                bordeaux sont ceux que j&apos;anime le plus souvent.
              </p>
              <p className="text-sm text-muted leading-relaxed mb-6">
                Relation client au quotidien : un plan de relation client au jour 1, un plan de
                fidélisation à 30 jours au jour 2, 2 cas clients joués en face à face, 7 jeux.
                J&apos;ai porté le programme de 7 à 14 chapitres.
              </p>
              <ul className="space-y-3">
                {THEMES.map((t) => (
                  <li
                    key={t.t}
                    className="flex items-center gap-3 bg-card border hairline rounded-xl px-4 py-3 text-sm text-ink"
                  >
                    <span
                      className={`w-2 h-2 rounded-full shrink-0 ${t.fait ? "bg-bordeaux" : "bg-border"}`}
                      aria-hidden="true"
                    />
                    {t.t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Ateliers courts */}
        <section className="border-t hairline">
          <div className="max-w-content mx-auto px-6 py-16 md:py-20">
            <Kicker>Ateliers courts · 1 à 7 heures</Kicker>
            <h2 className="serif text-3xl md:text-4xl leading-tight tracking-tight mb-4">
              Un sujet, d&apos;une heure à une journée.
            </h2>
            <p className="text-muted leading-relaxed max-w-2xl mb-10">
              Pour une équipe qui veut avancer sur un point précis, en ouverture d&apos;un séminaire
              ou en complément d&apos;une formation longue.
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

        {/* Coaching individuel */}
        <section className="border-t hairline grain">
          <div className="max-w-content mx-auto px-6 py-16 md:py-20">
            <Kicker>Coaching individuel · 6 semaines</Kicker>
            <h2 className="serif text-3xl md:text-4xl leading-tight tracking-tight mb-4">
              De la cible au client signé, en 13 séances.
            </h2>
            <p className="text-muted leading-relaxed max-w-2xl mb-10">
              Pour un commercial, un fondateur ou un indépendant qui vend. Chaque séance de 45
              minutes : 15 minutes de méthode, 10 minutes de quiz et de questions sur ton cas, 20
              minutes de mise en situation ou d&apos;atelier avec ton IA. En direct ou via les
              organismes de formation avec lesquels je travaille.
            </p>
            <p className="text-muted leading-relaxed max-w-2xl mb-10 -mt-6">
              Avant la première séance, tu reçois une étude de ton entreprise et de ton marché.
              Ensuite, un espace personnel avec tes séances, tes prompts, tes comptes cibles et ta
              to-do, et des simulations d&apos;appel sur{" "}
              <a href="https://pitchbase.app" className="underline">Pitchbase</a>. Pour des
              dirigeants de PME comme pour des professionnels en reconversion vers la vente.
            </p>
            <div className="grid md:grid-cols-2 gap-x-10">
              {SEANCES.map((s, i) => (
                <div key={s.t} className="flex gap-4 border-b hairline py-4">
                  <span className="serif text-bordeaux w-6 shrink-0">{i}</span>
                  <div>
                    <div className="text-ink font-medium">{s.t}</div>
                    <div className="text-sm text-muted leading-relaxed">{s.s}</div>
                  </div>
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
                Professeur intervenant à Euridis Business School depuis octobre 2025 : 9 classes
                accompagnées, environ 225 étudiants, 14,2/20 de moyenne sur mes interventions.
                Coach principal des étudiants d&apos;Euridis Paris pour Les Négociales 2026, juré de
                soutenances. Du Bachelor au MBA : jeux notés, simulations d&apos;appel sur Pitchbase, épreuves blanches de certification RNCP. Aussi des ateliers de prospection pour aider les étudiants à décrocher leur alternance, et des jurys (soutenances, concours start-up).
              </p>
              <Link
                href="/alternance"
                className="mt-6 inline-flex items-center gap-2 text-bordeaux font-medium hover:gap-3 transition-all min-h-[44px]"
              >
                Écoles : je place aussi des alternants
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
                  Je suis déclaré organisme de formation. Ma certification Qualiopi est en
                  préparation : d&apos;ici là, les formations finançables passent par des organismes
                  de formation certifiés Qualiopi avec lesquels je travaille, choisis selon ton
                  besoin et ton OPCO. Dis-moi à quel OPCO tu es rattaché, je te dis comment on
                  monte le dossier.
                </p>
                <p className="mt-4 text-xs text-cream/60">
                  Déclaration d&apos;activité n° 11 75 74446 75 auprès du préfet de région
                  Île-de-France. Cet enregistrement ne vaut pas agrément de l&apos;État.
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

      <footer className="border-t hairline">
        <div className="max-w-content mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-muted">
          <div className="serif">Boris Hierso Alphandéry</div>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/" className="hover:text-ink">Accueil</Link>
            <Link href="/livres-blancs" className="hover:text-ink">Livres blancs</Link>
            <Link href="/alternance" className="hover:text-ink">Alternance</Link>
            <Link href="/mentions-legales" className="hover:text-ink">Mentions légales</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
