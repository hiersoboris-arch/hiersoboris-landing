import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FAQ } from "@/lib/faq";
import { CALENDLY, LINKEDIN, EMAIL } from "@/lib/contact";
import SiteHeader from "./SiteHeader";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

const COMPANIES: { name: string; logo: string; url?: string }[] = [
  { name: "Exoteach", logo: "/logos/logo-l-exoteach.png", url: "https://www.exoteach.com" },
  { name: "Avelor Spirits", logo: "/logos/logo-l-avelor.png", url: "https://avelorspirits.com" },
  { name: "HappyPal", logo: "/logos/logo-l-happypal.png", url: "https://www.happypal.fr" },
  { name: "Euridis Business School", logo: "/logos/logo-l-euridis.png", url: "https://www.euridis-ecole.com" },
  { name: "Akimbo", logo: "/logos/logo-l-akimbo.png", url: "https://www.akimbo.eu" },
  { name: "Les Négociales", logo: "/logos/logo-l-negociales.png", url: "https://www.lesnegociales.com" },
  { name: "ValueCo", logo: "/logos/logo-l-valueco.png", url: "https://www.valuecometrics.com" },
  { name: "WoMa", logo: "/logos/logo-l-woma.png", url: "https://woma.fr" },
  { name: "Bouygues Télécom", logo: "/logos/logo-l-bouygues.png", url: "https://www.bouyguestelecom.fr" },
  { name: "BETC Fullsix", logo: "/logos/logo-l-betc.png", url: "https://betcfullsix.com" },
  { name: "Growth & Scale Factory", logo: "/logos/logo-l-gsf.png", url: "https://gsf.digital" },
  { name: "NanoBacterie", logo: "/logos/logo-l-nanobacterie.png", url: "https://alphaonco.fr" },
  { name: "Ellipse Bike", logo: "/logos/logo-l-ellipsebike.png", url: "https://ellipsebikes.com" },
  { name: "Deliche", logo: "/logos/logo-l-deliche.png" },
  { name: "Sindup", logo: "/logos/logo-l-sindup.png", url: "https://fr.sindup.com" },
  { name: "Sidiese", logo: "/logos/logo-l-sidiese.png", url: "https://www.sidiese.com" },
  { name: "Rampazzo Associés", logo: "/logos/logo-l-rampazzo.png", url: "https://rampazzo.com" },
  { name: "Orée", logo: "/logos/logo-l-oree.png", url: "https://www.oree.org" },
  { name: "Parrains Par Mille", logo: "/logos/logo-l-parrainsparmille.png", url: "https://ppm-asso.org" },
  { name: "Centre des Professions Financières", logo: "/logos/logo-l-cpf.png", url: "https://professionsfinancieres.com" },
  { name: "Azimuto", logo: "/logos/logo-l-azimuto.png", url: "https://azimuto.org" },
];

const OFFERS = [
  {
    title: "Structurer & piloter la vente",
    audience: "Dirigeants · startups · associations",
    desc: "Je prends la direction commerciale, en mission ou en conseil : go-to-market, pipeline, process, outils, équipe. De 0 à 1, puis le passage à l'échelle.",
  },
  {
    title: "Former & coacher les équipes",
    audience: "Managers Sales · écoles · étudiants",
    desc: "Montée en compétences des commerciaux, coaching terrain, interventions. Méthode concrète et mises en situation réelles, jamais de théorie hors-sol.",
  },
  {
    title: "Intervenir & prendre la parole",
    audience: "CCI · conférences · tables rondes · événements",
    desc: "Talks et ateliers sur l'IA appliquée à la vente, la prospection, la négociation et la structuration commerciale. Format court, concret, sans bullshit.",
  },
  {
    title: "Outiller la vente",
    audience: "Équipes qui veulent automatiser",
    desc: "Outils IA et automation sur mesure (n8n, Claude), CRM, sales ops. Quand l'outil n'existe pas pour le bon usage, je le code.",
  },
];

const RESULTS = [
  {
    company: "Exoteach",
    role: "Head of Sales freelance puis consultant apporteur d'affaires · EdTech SaaS B2B (en cours)",
    figures: [
      "290k€ de pipe qualifié construit de zéro",
      "73 RDV commerciaux menés, 91% de taux d'avancement",
      "150 calls par semaine, 5 apporteurs d'affaires pilotés",
      "Objectif 500k€ d'ARR d'ici fin 2026 · 15 000 étudiants utilisent la solution",
    ],
  },
  {
    company: "Avelor Spirits",
    role: "Head of Sales freelance · spiritueux premium (en cours)",
    figures: [
      "450k€ générés, objectif 1,5M€ d'ici fin 2026",
      "Task force commerciale recrutée et animée : commerciaux terrain et apporteurs d'affaires",
      "Déploiement multi-marchés : CHR, cavistes, hôtels et palaces, export",
    ],
  },
  {
    company: "Euridis, Akimbo & Les Négociales",
    role: "Intervenant, sales coach et coach de concours · la transmission (en cours)",
    figures: [
      "Euridis : 9 classes, ~225 étudiants, 14,2/20 de moyenne",
      "Akimbo : sales coach du pool de formateurs, module IA et performance commerciale",
      "Les Négociales 2026 : coach principal Paris et juré, 40h de coaching",
      "Prospection, social selling et IA appliquée à la vente",
    ],
  },
  {
    company: "WoMa",
    role: "Mission conseil Head of Sales freelance · association, Paris 19e (en cours)",
    figures: [
      "Diagnostic commercial et structuration de zéro : pipeline, offre, tarifaire",
      "Dashboard de pilotage construit (CA attendu, marges, priorités)",
      "Coaching terrain de l'équipe : scripts, séquences, relances",
    ],
  },
  {
    company: "ValueCo",
    role: "First Sales → Team Lead freelance · finance durable / ESG",
    figures: [
      "301 entreprises cotées rencontrées sur le marché francophone",
      "8 000 calls, 140 rendez-vous physiques, 70 events en 8 mois",
      "8 deals ouverts à +150k€",
    ],
  },
  {
    company: "HappyPal",
    role: "SDR → BDR → AE Full Cycle · scale-up RH / CSE (4 ans)",
    figures: [
      "1,7M€ d'ARR généré en prospection (SDR & BDR)",
      "Jusqu'à 317% d'atteinte en prospection",
      "100 deals signés en AE Full Cycle, 116% du quota annuel",
      "452k€ d'ARR signé en propre, cycles longs multi-interlocuteurs",
    ],
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Il a posé les bases de toute notre approche commerciale, de la définition des cibles jusqu'au closing. Je le recommande sans hésiter à toute structure qui veut structurer son commerce.",
    name: "Sylvain Petit",
    role: "CTO et cofondateur, Exoteach",
  },
  {
    quote:
      "Un de ces profils rares capables d'une vision globale tout en gardant une rigueur d'exécution irréprochable. Son implication dans le développement d'Avelor a été précieuse.",
    name: "Valentin Haeck",
    role: "Fondateur, Avelor Spirits Group",
  },
  {
    quote:
      "Un sales enthousiaste et chevronné, qui a su bâtir une stratégie de prospection très structurée. Ses qualités humaines feront de lui un leader apprécié.",
    name: "Aude Debard",
    role: "Chief Growth Officer, ex-BNP Paribas CIB",
  },
  {
    quote:
      "Un intervenant qui transforme la pédagogie en véritable levier de performance.",
    name: "Christelle Roy",
    role: "MBA Ingénieur d'Affaires, Euridis",
  },
  {
    quote:
      "Son soutien est un véritable accélérateur. Ses conseils structurants et son expérience terrain m'aident à monter en puissance.",
    name: "Lesly Lobal",
    role: "Sales Engineer, accompagnée par Boris",
  },
  {
    quote:
      "Boris est ce genre de collègue qu'on n'oublie pas. Si vous avez l'opportunité de bosser avec lui, foncez.",
    name: "Yohann Simeau",
    role: "Ancien responsable, HappyPal",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <SiteHeader />
      <main id="contenu">
      {/* Bandeau dark (handoff) : yeux peints */}
      <section className="relative isolate bg-night text-cream">
        <div className="relative h-[44vh] min-h-[320px] md:h-[54vh] w-full overflow-hidden">
          <Image
            src="/hero/destruction.jpg"
            alt="Boris Hierso Alphandéry, visage en body-painting (Destruction), fond noir"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/15 to-night/40"
            aria-hidden="true"
          />
          {/* Label bas de bandeau */}
          <div className="absolute inset-x-0 bottom-0 z-10 max-w-content mx-auto w-full px-6 pb-6">
            <div className="text-xs md:text-sm tracking-[0.22em] uppercase text-cream/85">
              Head of Sales · Coach · Créateur d&apos;outils
            </div>
          </div>
        </div>
      </section>

      {/* Hero clair */}
      <section className="relative max-w-content mx-auto px-6 pt-14 md:pt-20 pb-14 md:pb-20">
        <div className="max-w-3xl">
          <div className="rise rise-1 inline-flex items-center gap-2.5 text-xs md:text-sm tracking-[0.2em] uppercase text-bordeaux mb-6">
            <span className="live-dot" />
            <span>Disponible dès maintenant</span>
          </div>
          <h1 className="rise rise-2 serif text-5xl md:text-[5.25rem] leading-[0.98] tracking-tight">
            Vendre. Structurer.
            <br />
            <span className="italic text-bordeaux">Transmettre.</span>
          </h1>
          <p className="rise rise-3 mt-7 text-lg md:text-xl text-muted max-w-xl leading-relaxed">
            Head of Sales, coach en négociation et créateur d&apos;outils. Je fais vendre, et je transmets ce qui marche.
          </p>
          <div className="rise rise-4 mt-9 flex flex-wrap items-center gap-4">
            <a
              href={CALENDLY}
              className="inline-flex items-center gap-2 bg-bordeaux text-cream px-6 py-3.5 rounded-full text-sm font-medium hover:bg-bordeaux-soft transition"
            >
              Prendre 30 minutes
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#preuves"
              className="inline-flex items-center gap-2 text-ink px-6 py-3.5 rounded-full text-sm font-medium border hairline hover:bg-accent-tint transition"
            >
              Voir mes résultats
            </a>
          </div>
          <p className="rise rise-4 mt-4 text-sm text-muted">
            30 minutes, en visio, sans engagement.
          </p>
          <div className="rise rise-5 mt-12 flex flex-wrap gap-x-12 gap-y-6">
            <HeroStat value="3,8M€" label="ARR généré, 10 ans" accent />
            <HeroStat value="387" label="deals signés" />
            <HeroStat value="400" label="formés, étudiants et pros" />
          </div>
        </div>
      </section>

      {/* Trust strip (marquee) */}
      <section id="confiance" className="border-b hairline py-10 overflow-hidden">
        <div className="max-w-content mx-auto px-6 mb-6">
          <div className="text-xs uppercase tracking-[0.18em] text-muted">
            <span className="dot" />
            Ils m&apos;ont fait confiance, et me font encore confiance
          </div>
        </div>
        <div className="marquee">
          <div className="marquee__track">
            {[...COMPANIES, ...COMPANIES].map((c, i) => (
              <CompanyPill key={i} name={c.name} logo={c.logo} url={c.url} />
            ))}
          </div>
        </div>
      </section>

      {/* Comment je peux aider */}
      <section id="aider" className="border-b hairline">
        <div className="reveal max-w-content mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-[0.18em] text-muted mb-4">
              <span className="dot" />
              Travailler ensemble
            </div>
            <h2 className="serif text-3xl md:text-5xl leading-[1.05] tracking-tight">
              Comment je peux{" "}
              <span className="text-muted">aider.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {OFFERS.map((o) => (
              <OfferCard key={o.title} {...o} />
            ))}
          </div>
        </div>
      </section>

      {/* Preuves : portfolio par mission */}
      <section id="preuves" className="border-b hairline">
        <div className="reveal max-w-content mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-5">
              <div className="text-xs uppercase tracking-[0.18em] text-muted mb-4">
                <span className="dot" />
                Preuves
              </div>
              <h2 className="serif text-3xl md:text-5xl leading-[1.05] tracking-tight mb-6">
                Des chiffres,
                <br />
                <span className="text-muted">et des choses qui tournent.</span>
              </h2>
              <p className="text-muted leading-relaxed">
                Aujourd&apos;hui, Head of Sales en mission chez <strong className="text-ink">Exoteach</strong> et <strong className="text-ink">Avelor Spirits</strong>. 10 ans de terrain B2B au total, dont 4 ans chez <strong className="text-ink">HappyPal</strong> (de SDR au management de l&apos;équipe Sales) et une mission chez <strong className="text-ink">ValueCo</strong> en 2025.
              </p>
            </div>
            <div className="md:col-span-7 grid grid-cols-2 gap-px bg-border border hairline rounded-2xl overflow-hidden">
              <Stat value="3,8M€" caption="d'ARR généré en 10 ans de Sales." />
              <Stat value="387" caption="deals signés." />
              <Stat value="400" caption="étudiants et pros formés." />
              <Stat value="350 calls" caption="par semaine pour 9,5 RDV won, 0,3% de no-show par mois." />
            </div>
          </div>

          {/* Détail par mission */}
          <div className="mb-16">
            <div className="text-xs uppercase tracking-[0.18em] text-muted mb-6">
              Le détail, par mission
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {RESULTS.map((r) => (
                <ResultCard key={r.company} {...r} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intervenant & formateur */}
      <section id="intervenant" className="border-b hairline">
        <div className="reveal max-w-content mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-12 mb-14">
            <div className="md:col-span-6">
              <div className="text-xs uppercase tracking-[0.18em] text-muted mb-4">
                <span className="dot" />
                Intervenant &amp; formateur
              </div>
              <h2 className="serif text-3xl md:text-5xl leading-[1.05] tracking-tight mb-6">
                Transmettre,
                <br />
                <span className="text-muted">en école comme en entreprise.</span>
              </h2>
              <p className="text-muted leading-relaxed">
                Professeur intervenant en école de commerce (vente B2B, prospection, social selling, IA appliquée à la vente), sales coach pour un organisme de formation commerciale (<strong className="text-ink">Akimbo</strong>), coach principal Paris du concours <strong className="text-ink">Les Négociales</strong>, juré de soutenances et formateur d&apos;équipes commerciales. Des cours conçus de zéro, ancrés dans le terrain : ce que j&apos;enseigne le matin, je le pratique l&apos;après-midi en mission.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={CALENDLY}
                  className="inline-flex items-center gap-2 bg-bordeaux text-cream px-6 py-3.5 rounded-full text-sm font-medium hover:bg-bordeaux-soft transition"
                >
                  Faire intervenir Boris
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/alternance"
                  className="inline-flex items-center gap-2 text-ink px-6 py-3.5 rounded-full text-sm font-medium border hairline hover:bg-accent-tint transition"
                >
                  Écoles : je place aussi des alternants
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="md:col-span-6 grid grid-cols-2 gap-px bg-border border hairline rounded-2xl overflow-hidden">
              <Stat value="400" caption="étudiants et pros formés au total." />
              <Stat value="14,2/20" caption="de moyenne sur mes interventions (9 classes, ~225 étudiants)." />
              <Stat value="40h" caption="de coaching Les Négociales 2026, coach principal Paris, juré et acheteur." />
              <Stat value="100%" caption="terrain : cours, ateliers, business games et jurys, jamais de théorie hors-sol." />
            </div>
          </div>

          <div className="text-xs uppercase tracking-[0.18em] text-muted mb-5">
            Mes sujets d&apos;intervention
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "Prospection, cold call & social selling",
              "IA & automatisation commerciale",
              "Négociation & closing",
              "Stratégie commerciale & plans d'actions",
              "Sales Ops / RevOps & CRM",
              "Growth B2B & ABM",
              "Entrepreneuriat & IA",
            ].map((s) => (
              <span
                key={s}
                className="border hairline bg-card rounded-full px-4 py-2 text-sm text-ink"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Recommandations */}
      <section id="recommandations" className="border-b hairline grain">
        <div className="reveal max-w-content mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-[0.18em] text-muted mb-4">
              <span className="dot" />
              Recommandations
            </div>
            <h2 className="serif text-3xl md:text-5xl leading-[1.05] tracking-tight">
              Ce qu&apos;ils en disent,{" "}
              <span className="text-muted">de Exoteach à HappyPal.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>

          <a
            href="https://www.linkedin.com/in/boris-hierso-alphandery/details/recommendations/"
            className="mt-10 inline-flex items-center gap-3 text-ink font-medium hover:text-accent transition"
          >
            <LinkedinIcon className="w-4 h-4" />
            Voir toutes les recommandations
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Ressources & transmission */}
      <section id="ressources" className="border-b hairline">
        <div className="reveal max-w-content mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-[0.18em] text-muted mb-4">
              <span className="dot" />
              Ressources &amp; transmission
            </div>
            <h2 className="serif text-3xl md:text-5xl leading-[1.05] tracking-tight">
              En accès libre,{" "}
              <span className="text-muted">pour celles et ceux qui apprennent.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ProjectCard
              href="https://formation-boris-ha.notion.site/les-n-gociales"
              tag="Guide · Public"
              title="Préparer Les Négociales"
              desc="Ma méthode complète de négociation + des cas pratiques tirés des éditions passées. Pour les étudiants qui préparent le concours."
              footer="formation-boris-ha.notion.site"
            />
            <ProjectCard
              href="https://toolsbox.hiersoboris.fr"
              tag="Outil · En ligne"
              title="The Tools Box"
              desc="L'annuaire des outils que j'utilise en sales, sales ops et build : prospection, enrichissement, automatisation, IA. Filtrable."
              footer="toolsbox.hiersoboris.fr"
            />
            <ProjectCard
              href="https://formation-boris-ha.notion.site/39c28a764b9780d591f9e6f12df1fb9f"
              tag="Guide · Public"
              title="Décroche ton alternance"
              desc="Le kit complet pour les étudiants : pitch d'entretien, CV ATS et visuel, objections, salaire, mini-CRM à dupliquer. Tout est gratuit."
              footer="formation-boris-ha.notion.site"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-b hairline">
        <div className="reveal max-w-content mx-auto px-6 py-20 md:py-28 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.18em] text-muted mb-4">
              <span className="dot" />
              Questions fréquentes
            </div>
            <h2 className="serif text-3xl md:text-5xl leading-[1.05] tracking-tight">
              En bref.
            </h2>
          </div>
          <div className="md:col-span-8 divide-y divide-border border-t hairline">
            {FAQ.map((f) => (
              <div key={f.q} className="py-6">
                <h3 className="serif text-xl mb-2">{f.q}</h3>
                <p className="text-muted leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden grain">
        <div className="glow w-[460px] h-[460px] -bottom-40 -right-32 bg-accent/12" aria-hidden="true" />
        <div className="reveal relative z-10 max-w-content mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-7">
              <div className="text-xs uppercase tracking-[0.18em] text-muted mb-4">
                <span className="dot" />
                Parlons
              </div>
              <h2 className="serif text-4xl md:text-6xl leading-[1.02] tracking-tight">
                Un sujet commercial,
                <br />
                de coaching, ou{" "}
                <span className="text-accent">un poste à pourvoir ?</span>
              </h2>
              <p className="mt-8 text-lg text-muted max-w-xl leading-relaxed">
                Clients : je prends de nouvelles missions freelance dès maintenant. Recruteurs : je suis ouvert à un poste de Head of Sales en CDI à partir de juillet 2026. Le plus simple reste 30 minutes en visio.
              </p>
              <div className="mt-10">
                <Image
                  src="/signature.png"
                  alt="Signature de Boris Hierso Alphandéry"
                  width={2770}
                  height={764}
                  className="h-16 w-auto opacity-80"
                />
              </div>
            </div>

            <div className="md:col-span-5 space-y-3">
              <ContactCard href={CALENDLY} tag="Calendly" label="Prendre 30 minutes" primary />
              <ContactCard href={LINKEDIN} tag="LinkedIn" label="Suivre · échanger" icon />
              <ContactCard href={`mailto:${EMAIL}`} tag="Email" label={EMAIL} />
              <ContactCard href="/cv" tag="Recruteurs" label="Voir mon CV" />
            </div>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="border-t hairline">
        <div className="max-w-content mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-muted">
          <div className="serif">
            Boris Hierso Alphandéry · {new Date().getFullYear()}
          </div>
          <div className="flex items-center gap-6">
            <Link href="/cv" className="hover:text-ink">CV</Link>
            <Link href="/mentions-legales" className="hover:text-ink">Mentions légales</Link>
            <Link href="/rgpd" className="hover:text-ink">RGPD</Link>
            <a href={LINKEDIN} className="hover:text-ink inline-flex items-center gap-1.5">
              <LinkedinIcon className="w-3.5 h-3.5" />
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

function HeroStat({
  value,
  label,
  accent,
}: {
  value: string;
  label: string;
  accent?: boolean;
}) {
  return (
    <div>
      <div
        className={`serif text-3xl md:text-4xl leading-none ${
          accent ? "text-bordeaux" : "text-ink"
        }`}
      >
        {value}
      </div>
      <div className="mt-1.5 text-xs uppercase tracking-[0.12em] text-muted">
        {label}
      </div>
    </div>
  );
}

function OfferCard({
  title,
  audience,
  desc,
}: {
  title: string;
  audience: string;
  desc: string;
}) {
  return (
    <article className="lift bg-card border hairline rounded-2xl p-8 md:p-10 hover:border-accent transition">
      <div className="text-xs uppercase tracking-[0.18em] text-accent mb-3">{audience}</div>
      <h3 className="serif text-2xl mb-3">{title}</h3>
      <p className="text-muted leading-relaxed">{desc}</p>
    </article>
  );
}

function ResultCard({
  company,
  role,
  figures,
}: {
  company: string;
  role: string;
  figures: string[];
}) {
  return (
    <article className="bg-card border hairline rounded-2xl p-8 md:p-10">
      <h3 className="serif text-2xl">{company}</h3>
      <div className="text-sm text-muted mb-6">{role}</div>
      <ul className="space-y-3">
        {figures.map((f, i) => (
          <li key={i} className="flex gap-3 text-ink leading-relaxed">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <figure className="lift bg-card border hairline rounded-2xl p-8 flex flex-col">
      <blockquote className="text-ink leading-relaxed mb-6">
        &laquo; {quote} &raquo;
      </blockquote>
      <figcaption className="mt-auto pt-2">
        <div className="serif text-lg">{name}</div>
        <div className="text-sm text-muted">{role}</div>
      </figcaption>
    </figure>
  );
}

function CompanyPill({
  name,
  logo,
  url,
}: {
  name: string;
  logo: string;
  url?: string;
}) {
  const img = (
    <Image
      src={logo}
      alt={name}
      width={400}
      height={200}
      loading="eager"
      unoptimized
      className="h-8 md:h-10 w-auto object-contain grayscale opacity-60 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
    />
  );
  if (!url) {
    return <span className="group mx-6 shrink-0 flex items-center py-2">{img}</span>;
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visiter le site de ${name}`}
      className="group mx-6 shrink-0 flex items-center py-2 transition hover:-translate-y-0.5"
    >
      {img}
    </a>
  );
}

function ProjectCard({
  href,
  tag,
  title,
  desc,
  footer,
}: {
  href: string;
  tag: string;
  title: string;
  desc: string;
  footer: string;
}) {
  return (
    <a
      href={href}
      className="lift group bg-card border hairline rounded-2xl p-8 hover:border-accent transition"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="text-xs uppercase tracking-[0.18em] text-accent">{tag}</div>
        <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-accent transition" />
      </div>
      <h3 className="serif text-2xl mb-2">{title}</h3>
      <p className="text-muted leading-relaxed mb-6">{desc}</p>
      <div className="text-sm text-ink">{footer}</div>
    </a>
  );
}

function Stat({
  value,
  caption,
}: {
  value: React.ReactNode;
  caption: string;
}) {
  return (
    <div className="bg-card p-8">
      <div className="serif text-5xl mb-2">{value}</div>
      <div className="text-sm text-muted">{caption}</div>
    </div>
  );
}

function ContactCard({
  href,
  tag,
  label,
  primary,
  icon,
  download,
}: {
  href: string;
  tag: string;
  label: string;
  primary?: boolean;
  icon?: boolean;
  download?: boolean;
}) {
  return (
    <a
      href={href}
      {...(download ? { download: true, target: "_blank", rel: "noopener" } : {})}
      className={
        primary
          ? "flex items-center justify-between bg-bordeaux text-cream px-6 py-5 rounded-2xl hover:bg-bordeaux-soft transition"
          : "flex items-center justify-between border hairline bg-card px-6 py-5 rounded-2xl hover:border-accent transition"
      }
    >
      <span>
        <div
          className={
            primary
              ? "text-xs uppercase tracking-[0.18em] opacity-70"
              : "text-xs uppercase tracking-[0.18em] text-muted"
          }
        >
          {tag}
        </div>
        <div className="serif text-lg mt-1 inline-flex items-center gap-2">
          {icon && <LinkedinIcon className="w-4 h-4" />}
          {label}
        </div>
      </span>
      <ArrowUpRight className={primary ? "w-5 h-5" : "w-5 h-5 text-muted"} />
    </a>
  );
}
