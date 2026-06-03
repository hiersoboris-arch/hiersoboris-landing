import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FAQ } from "@/lib/faq";

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
    desc: "Outils IA et automation sur mesure (n8n, Make, Claude), CRM, sales ops. Quand l'outil n'existe pas pour le bon usage, je le code.",
  },
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
            <a href="#aider" className="hover:text-ink transition">Aider</a>
            <a href="#preuves" className="hover:text-ink transition">Preuves</a>
            <a href="#ressources" className="hover:text-ink transition">Ressources</a>
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
                href="#preuves"
                className="inline-flex items-center gap-2 text-ink px-6 py-3.5 rounded-full text-sm font-medium border hairline hover:bg-accent-tint transition"
              >
                Voir mes résultats
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

      {/* Comment je peux aider */}
      <section id="aider" className="border-b hairline">
        <div className="max-w-content mx-auto px-6 py-20 md:py-28">
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

      {/* Ressources & transmission */}
      <section id="ressources" className="border-b hairline">
        <div className="max-w-content mx-auto px-6 py-20 md:py-28">
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
              href="https://coaching.hiersoboris.fr"
              tag="App · En ligne"
              title="Coaching Alternance"
              desc="L'app que j'ai codée pour aider les étudiants en alternance à structurer leur recherche d'entreprise. Suivi, relances IA."
              footer="coaching.hiersoboris.fr"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-b hairline">
        <div className="max-w-content mx-auto px-6 py-20 md:py-28 grid md:grid-cols-12 gap-12">
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
              <ContactCard href="/cv" tag="Recruteurs" label="Voir mon CV" />
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
    <article className="bg-card border hairline rounded-2xl p-8 md:p-10 hover:border-accent transition">
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
