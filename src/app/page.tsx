import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

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

const CALENDLY = "https://calendly.com/hierso-boris/echange";
const LINKEDIN = "https://www.linkedin.com/in/boris-hierso-alphandery";
const EMAIL = "hierso.boris@gmail.com";

const COMPANIES: { name: string; logo?: string }[] = [
  { name: "Exoteach", logo: "/logos/exoteach.png" },
  { name: "Avelor", logo: "/logos/avelor.png" },
  { name: "Euridis", logo: "/logos/euridis.png" },
  { name: "Les Négociales", logo: "/logos/negociales.png" },
  { name: "NanoBacterie", logo: "/logos/nanobacterie.png" },
  { name: "Ellipse Bike", logo: "/logos/ellipsebike.png" },
  { name: "ValueCo", logo: "/logos/valueco.png" },
  { name: "HappyPal", logo: "/logos/happypal.png" },
  { name: "Growth & Scale Factory", logo: "/logos/gsf.png" },
  { name: "Bouygues Télécom", logo: "/logos/bouygues.png" },
  { name: "Deliche", logo: "/logos/deliche.png" },
  { name: "Sindup", logo: "/logos/sindup.png" },
  { name: "BETC Digital", logo: "/logos/betc.png" },
  { name: "Valeurs Vertes", logo: "/logos/valeursvertes.png" },
  { name: "Rampazzo Associés", logo: "/logos/rampazzo.png" },
  { name: "Sidiese", logo: "/logos/sidiese.png" },
  { name: "Orée", logo: "/logos/oree.png" },
];

const RESULTS = [
  {
    company: "Exoteach",
    role: "Head of Sales freelance · EdTech SaaS B2B (en cours)",
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
      "6 freelances et 8 apporteurs internationaux managés",
      "Déploiement multi-marchés : CHR, cavistes, hôtels et palaces, export",
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
    company: "HappyPal",
    role: "SDR → BDR → AE Full Cycle · scale-up RH / CSE (4 ans)",
    figures: [
      "1,7M€ d'ARR généré en prospection (SDR & BDR)",
      "Jusqu'à 317% d'atteinte en prospection",
      "100 deals signés en AE Full Cycle, 116% du quota annuel",
      "452k€ d'ARR signé en propre, cycles longs multi-interlocuteurs",
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
    company: "Euridis & Les Négociales",
    role: "Intervenant et coach · la transmission (en cours)",
    figures: [
      "Euridis : 9 classes, ~225 étudiants, 14,2/20 de moyenne",
      "Les Négociales 2026 : coach principal Paris et juré, 40h de coaching",
      "Prospection, social selling et IA appliquée à la vente",
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
      {/* Top bar */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-bg/80 border-b hairline">
        <div className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="serif text-xl font-semibold tracking-tight">
            Boris Hierso Alphandéry
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted">
            <a href="#approche" className="hover:text-ink transition">Approche</a>
            <a href="#preuves" className="hover:text-ink transition">Preuves</a>
            <a href="#contact" className="hover:text-ink transition">Contact</a>
          </nav>
          <a
            href={CALENDLY}
            className="inline-flex items-center gap-2 bg-ink text-bg px-4 py-2 rounded-full text-sm font-medium hover:bg-accent transition"
          >
            <span className="hidden sm:inline">Prendre 30 minutes</span>
            <span className="sm:hidden">Échange</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b hairline grain">
        <div className="max-w-content mx-auto px-6 py-16 md:py-24 grid md:grid-cols-12 gap-12 md:gap-8 items-center">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2.5 rounded-full border hairline bg-card px-3.5 py-1.5 text-sm text-ink mb-8">
              <span className="live-dot" />
              <span>
                Disponible dès maintenant
              </span>
            </div>
            <h1 className="serif text-5xl md:text-[5.25rem] leading-[0.98] tracking-tight">
              Vendre. Structurer.
              <br />
              <span className="relative inline-block text-accent">
                Transmettre.
                <Squiggle />
              </span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted max-w-xl leading-relaxed">
              Head of Sales, coach en négociation et créateur d&apos;outils. Je fais vendre, et je transmets ce qui marche.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={CALENDLY}
                className="inline-flex items-center gap-2 bg-ink text-bg px-6 py-3.5 rounded-full text-sm font-medium hover:bg-accent transition"
              >
                Prendre 30 minutes
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#approche"
                className="inline-flex items-center gap-2 text-ink px-6 py-3.5 rounded-full text-sm font-medium border hairline hover:bg-accent-tint transition"
              >
                Découvrir mon approche
              </a>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative w-[280px] md:w-[340px]">
              <div className="absolute -inset-5 bg-accent-tint blobby-2" aria-hidden="true" />
              <div className="relative blobby overflow-hidden shadow-warm">
                <Image
                  src="/portrait.jpg"
                  alt="Portrait de Boris Hierso Alphandéry"
                  width={1000}
                  height={1000}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -left-3 md:-left-6 bg-card border hairline rounded-2xl px-4 py-3 shadow-warm">
                <div className="serif text-2xl leading-none">10 ans</div>
                <div className="text-xs text-muted mt-1">en vente B2B</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip (marquee) */}
      <section id="confiance" className="border-b hairline py-10 overflow-hidden">
        <div className="max-w-content mx-auto px-6 mb-6">
          <div className="text-xs uppercase tracking-[0.18em] text-muted">
            <span className="dot" />
            Ils m&apos;ont fait confiance
          </div>
        </div>
        <div className="marquee">
          <div className="marquee__track">
            {[...COMPANIES, ...COMPANIES].map((c, i) => (
              <CompanyPill key={i} name={c.name} logo={c.logo} />
            ))}
          </div>
        </div>
      </section>

      {/* Approche / Ce que je fais */}
      <section id="approche" className="border-b hairline">
        <div className="max-w-content mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-[0.18em] text-muted mb-4">
              <span className="dot" />
              Ce que je fais
            </div>
            <h2 className="serif text-3xl md:text-5xl leading-[1.05] tracking-tight">
              Quatre métiers, une obsession :{" "}
              <span className="text-muted">faire que ça vende vraiment.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <RoleCard
              index="01"
              title="Head of Sales freelance"
              status="transmission"
              statusLabel="Exoteach, Avelor · en transmission"
              desc="Je prends la direction commerciale d'une boîte en croissance : pipeline, équipe, process, outillage. Full cycle, de la prospection au closing, outbound automatisé + terrain."
            />
            <RoleCard
              index="02"
              title="Coach en négociation"
              status="actif"
              statusLabel="En cours"
              desc="Méthode Besoin → 3C → ROI → 70/30. J'entraîne des étudiants en compétition (Les Négociales) et des commerciaux en poste qui veulent durcir leur entonnoir."
            />
            <RoleCard
              index="03"
              title="Intervenant à Euridis Business School"
              status="actif"
              statusLabel="En cours · années à venir"
              desc="Prospection, automatisation, IA appliquée à la vente, social selling. Des cours pour des étudiants qui veulent un métier, pas un titre. Mises en situation réelles."
            />
            <RoleCard
              index="04"
              title="Créateur d'outils IA"
              status="actif"
              statusLabel="Actif"
              desc="Quand l'outil n'existe pas, je le code. Next.js, Supabase, Vercel, Gemini. Petits outils, vrais usages : coaching.hiersoboris.fr, toolsbox.hiersoboris.fr."
            />
          </div>

          <p className="mt-8 text-muted leading-relaxed max-w-2xl">
            J&apos;accompagne aussi des startups et des associations dans leur structuration commerciale et des phases de coaching.
          </p>

          {/* Disponibilité */}
          <div className="mt-12 rounded-2xl border hairline bg-accent-tint p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="live-dot" />
                <span className="text-sm font-medium text-ink">Disponible maintenant en freelance</span>
              </div>
              <p className="serif text-xl md:text-2xl leading-snug">
                Je prends de nouvelles missions freelance dès maintenant. Et à partir de juillet 2026, le temps de transmettre mes missions actuelles, je suis ouvert à un poste de Head of Sales en CDI.
              </p>
            </div>
            <a
              href={CALENDLY}
              className="inline-flex items-center gap-2 bg-ink text-bg px-6 py-3.5 rounded-full text-sm font-medium hover:bg-accent transition whitespace-nowrap self-start md:self-auto"
            >
              En parler
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Méthode (bande) */}
      <section className="border-b hairline grain">
        <div className="max-w-content mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-[0.18em] text-muted mb-4">
              <span className="dot" />
              La méthode
            </div>
            <h2 className="serif text-3xl md:text-5xl leading-[1.05] tracking-tight">
              Quatre principes,{" "}
              <span className="text-muted">que je transmets à tout le monde.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border hairline">
            <Principle token="Besoin" line="Toute boîte est une solution à un problème. Tant que je n'ai pas le problème, je ne propose rien." />
            <Principle token="3C" line="Comprendre. Creuser. Conclure. Pas de pitch avant d'avoir compris, pas de closing avant d'avoir creusé." />
            <Principle token="ROI" line="Ce que le client gagne sur ce qu'il dépense. Sans ce chiffre, on ne vend pas, on espère." />
            <Principle token={<>70<span className="text-accent-soft text-2xl align-top">/30</span></>} line="Le client parle 70%, toi 30%. Si tu parles plus, tu vends moins." />
          </div>
        </div>
      </section>

      {/* Preuves : stats + projets */}
      <section id="preuves" className="border-b hairline">
        <div className="max-w-content mx-auto px-6 py-20 md:py-28">
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
                Aujourd&apos;hui, Head of Sales en mission chez <strong className="text-ink">Exoteach</strong> et <strong className="text-ink">Avelor Spirits</strong>. Avant : 10 ans de terrain B2B, dont 4 ans chez <strong className="text-ink">HappyPal</strong> (de SDR au management de l&apos;équipe Sales) et une mission chez <strong className="text-ink">ValueCo</strong> en 2025.
              </p>
            </div>
            <div className="md:col-span-7 grid grid-cols-2 gap-px bg-border border hairline rounded-2xl overflow-hidden">
              <Stat value="1,7M€" caption="d'ARR généré en prospection (HappyPal)." />
              <Stat value="317%" caption="d'atteinte max en prospection." />
              <Stat value="100" caption="deals signés en AE Full Cycle." />
              <Stat value="~225" caption="étudiants formés à Euridis (14,2/20)." />
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

          <div className="grid md:grid-cols-3 gap-6">
            <ProjectCard
              href="https://coaching.hiersoboris.fr"
              tag="App · Production"
              title="Coaching Alternance"
              desc="L'app qui aide les étudiants en alternance à structurer leur recherche d'entreprise. Magic link, suivi candidatures, relances IA."
              footer="coaching.hiersoboris.fr"
            />
            <ProjectCard
              href="https://toolsbox.hiersoboris.fr"
              tag="App · Production"
              title="The Tools Box"
              desc="L'annuaire des outils que j'utilise en sales, sales ops et build : prospection, enrichissement, automatisation, IA. Filtrable."
              footer="toolsbox.hiersoboris.fr"
            />
            <ProjectCard
              href="https://formation-boris-ha.notion.site/les-n-gociales"
              tag="Ressource · Public"
              title="Préparer Les Négociales"
              desc="Méthode complète + cas pratiques tirés des éditions passées. Mise à jour à chaque édition."
              footer="formation-boris-ha.notion.site"
            />
          </div>
        </div>
      </section>

      {/* Recommandations */}
      <section id="recommandations" className="border-b hairline grain">
        <div className="max-w-content mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-[0.18em] text-muted mb-4">
              <span className="dot" />
              Recommandations
            </div>
            <h2 className="serif text-3xl md:text-5xl leading-[1.05] tracking-tight">
              Ce qu&apos;ils en disent,{" "}
              <span className="text-muted">de Exoteach à Euridis.</span>
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

      {/* Contact */}
      <section id="contact" className="grain">
        <div className="max-w-content mx-auto px-6 py-24 md:py-32">
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
                  width={420}
                  height={145}
                  className="sig h-16 w-auto"
                />
              </div>
            </div>

            <div className="md:col-span-5 space-y-3">
              <ContactCard href={CALENDLY} tag="Calendly" label="Prendre 30 minutes" primary />
              <ContactCard href={LINKEDIN} tag="LinkedIn" label="Suivre · échanger" icon />
              <ContactCard href={`mailto:${EMAIL}`} tag="Email" label={EMAIL} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t hairline">
        <div className="max-w-content mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-muted">
          <div className="serif">
            Boris Hierso Alphandéry · {new Date().getFullYear()}
          </div>
          <div className="flex items-center gap-6">
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

function Squiggle() {
  return (
    <svg
      className="absolute left-0 -bottom-2 w-full"
      height="12"
      viewBox="0 0 200 12"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 8C40 3 70 3 100 6C130 9 160 9 198 4"
        stroke="#A8442C"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
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
    <figure className="bg-card border hairline rounded-2xl p-8 flex flex-col">
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

function CompanyPill({ name, logo }: { name: string; logo?: string }) {
  return (
    <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border hairline bg-card mx-2 shrink-0">
      {logo && (
        <Image
          src={logo}
          alt=""
          width={20}
          height={20}
          aria-hidden="true"
          loading="eager"
          unoptimized
          className="w-5 h-5 object-contain grayscale opacity-80"
        />
      )}
      <span className="serif text-base text-ink whitespace-nowrap">{name}</span>
    </span>
  );
}

function RoleCard({
  index,
  title,
  desc,
  status,
  statusLabel,
}: {
  index: string;
  title: string;
  desc: string;
  status: "transmission" | "actif";
  statusLabel: string;
}) {
  return (
    <article className="bg-card border hairline rounded-2xl p-8 md:p-10 hover:border-accent transition">
      <div className="flex items-center justify-between mb-4">
        <span className="serif text-sm text-accent">{index}</span>
        <span className="inline-flex items-center gap-2 text-xs text-muted">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: status === "actif" ? "#1F9D55" : "#C56A4F" }}
          />
          {statusLabel}
        </span>
      </div>
      <h3 className="serif text-2xl mb-3">{title}</h3>
      <p className="text-muted leading-relaxed">{desc}</p>
    </article>
  );
}

function Principle({
  token,
  line,
}: {
  token: React.ReactNode;
  line: string;
}) {
  return (
    <div className="bg-card p-8 md:p-10">
      <div className="serif text-5xl text-accent leading-none mb-4">{token}</div>
      <p className="text-muted text-sm leading-relaxed">{line}</p>
    </div>
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
      className="group bg-card border hairline rounded-2xl p-8 hover:border-accent transition"
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
}: {
  href: string;
  tag: string;
  label: string;
  primary?: boolean;
  icon?: boolean;
}) {
  return (
    <a
      href={href}
      className={
        primary
          ? "flex items-center justify-between bg-ink text-bg px-6 py-5 rounded-2xl hover:bg-accent transition"
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
