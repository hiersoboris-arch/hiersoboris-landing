import Link from "next/link";
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

export default function Home() {
  return (
    <>
      {/* Top bar */}
      <header className="border-b hairline">
        <div className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="serif text-xl font-semibold tracking-tight">
              Boris Hierso Alphandéry
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted">
            <a href="#methode" className="hover:text-ink transition">Méthode</a>
            <a href="#projets" className="hover:text-ink transition">Projets</a>
            <a href="#linkedin" className="hover:text-ink transition">LinkedIn</a>
            <a href="#contact" className="hover:text-ink transition">Contact</a>
          </nav>
          <a
            href={CALENDLY}
            className="inline-flex items-center gap-2 bg-ink text-bg px-4 py-2 rounded-full text-sm font-medium hover:bg-accent transition"
          >
            <span className="hidden sm:inline">Réserver un échange</span>
            <span className="sm:hidden">Échange</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b hairline">
        <div className="max-w-content mx-auto px-6 py-24 md:py-32 grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-8">
            <h1 className="serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Vendre. Former.
              <br />
              Et coder
              <br />
              <span className="text-accent">ce qui manque</span> entre les deux.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted max-w-xl leading-relaxed">
              Sales depuis 10 ans. Head of Sales freelance chez Exoteach et Avelor Spirits, intervenant à Euridis Business School, et créateur d&apos;outils IA pour les équipes qui veulent vendre mieux et transmettre ce qui marche.
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
                href="#projets"
                className="inline-flex items-center gap-2 text-ink px-6 py-3.5 rounded-full text-sm font-medium border hairline hover:bg-accent-tint transition"
              >
                Voir mes projets
              </a>
            </div>
          </div>
          <aside className="md:col-span-4 md:pt-4">
            <div className="rounded-2xl border hairline bg-card p-6">
              <div className="text-xs uppercase tracking-[0.18em] text-muted mb-4">
                En ce moment
              </div>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <span className="serif text-accent font-semibold w-5">01</span>
                  <span>
                    Head of Sales freelance chez <strong>Exoteach</strong> et{" "}
                    <strong>Avelor Spirits</strong>.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="serif text-accent font-semibold w-5">02</span>
                  <span>
                    Coach principal Paris pour <strong>Les Négociales 2026</strong>.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="serif text-accent font-semibold w-5">03</span>
                  <span>
                    Cours prospection · IA · social selling à{" "}
                    <strong>Euridis Business School</strong>.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="serif text-accent font-semibold w-5">04</span>
                  <span>
                    Je build{" "}
                    <a
                      href="https://coaching.hiersoboris.fr"
                      className="underline decoration-accent underline-offset-4"
                    >
                      coaching.hiersoboris.fr
                    </a>
                    ,{" "}
                    <a
                      href="https://toolsbox.hiersoboris.fr"
                      className="underline decoration-accent underline-offset-4"
                    >
                      toolsbox.hiersoboris.fr
                    </a>{" "}
                    et d&apos;autres outils.
                  </span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Casquettes */}
      <section id="casquettes" className="border-b hairline">
        <div className="max-w-content mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-4">
              <div className="text-xs uppercase tracking-[0.18em] text-muted mb-3">
                <span className="dot" />
                Ce que je fais
              </div>
            </div>
            <div className="md:col-span-8">
              <h2 className="serif text-3xl md:text-5xl leading-[1.05] tracking-tight">
                Quatre métiers, une obsession :
                <br />
                <span className="text-muted">faire que ça vende vraiment.</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border hairline">
            <article className="bg-card p-8 md:p-10">
              <div className="serif text-accent text-sm mb-3">01 · Direction commerciale</div>
              <h3 className="serif text-2xl mb-3">Head of Sales freelance</h3>
              <p className="text-muted leading-relaxed mb-5">
                Je prends la fonction commerciale d&apos;une PME ou d&apos;une boîte en croissance : pipeline, équipe, process, outillage. Full cycle (prospection -&gt; closing), combinaison de l&apos;outbound automatisé et du terrain.
              </p>
              <div className="text-sm text-ink">
                Actuels : Exoteach (EdTech SaaS B2B) · Avelor Spirits (spiritueux premium).
              </div>
            </article>
            <article className="bg-card p-8 md:p-10">
              <div className="serif text-accent text-sm mb-3">02 · Coaching négociation</div>
              <h3 className="serif text-2xl mb-3">Coach pour étudiants et commerciaux</h3>
              <p className="text-muted leading-relaxed mb-5">
                Méthode Besoin -&gt; 3C -&gt; ROI -&gt; 70/30. Je coache des étudiants en compétitions de négo (Négociales) et des commerciaux en poste qui veulent durcir leur entonnoir.
              </p>
              <div className="text-sm text-ink">
                Négociales 2026 : coach principal Paris, juré qualif + quarts. 40h de coaching · ~50 étudiants sur la saison.
              </div>
            </article>
            <article className="bg-card p-8 md:p-10">
              <div className="serif text-accent text-sm mb-3">03 · Intervenant école</div>
              <h3 className="serif text-2xl mb-3">Cours à Euridis Business School</h3>
              <p className="text-muted leading-relaxed mb-5">
                Prospection, automatisation, IA appliquée à la vente, social selling. Cours pensés pour des étudiants qui veulent un métier, pas un titre. Mises en situation réelles : pitch, closing, prospection.
              </p>
              <div className="text-sm text-ink">
                9 classes accompagnées · ~225 étudiants · 14,2/20 de moyenne sur les interventions.
              </div>
            </article>
            <article className="bg-card p-8 md:p-10">
              <div className="serif text-accent text-sm mb-3">04 · Maker IA</div>
              <h3 className="serif text-2xl mb-3">J&apos;écris les outils qui manquent</h3>
              <p className="text-muted leading-relaxed mb-5">
                Quand un client a besoin d&apos;un outil qu&apos;aucun SaaS ne fait correctement, je le code. Stack : Next.js, Supabase, Vercel, Gemini. Petits outils, vrais usages.
              </p>
              <div className="text-sm text-ink">
                coaching.hiersoboris.fr · toolsbox.hiersoboris.fr · linkedin-optimizer · à venir.
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Méthode */}
      <section id="methode" className="border-b hairline grain">
        <div className="max-w-content mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-4">
              <div className="text-xs uppercase tracking-[0.18em] text-muted mb-3">
                <span className="dot" />
                La méthode
              </div>
            </div>
            <div className="md:col-span-8">
              <h2 className="serif text-3xl md:text-5xl leading-[1.05] tracking-tight">
                Quatre principes que je transmets
                <br />
                <span className="text-muted">à tous mes clients et étudiants.</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border hairline rounded-2xl p-8">
              <div className="serif text-5xl text-accent mb-4 leading-none">Le besoin</div>
              <h3 className="serif text-xl mb-3">
                Toute entreprise est une solution à un problème.
              </h3>
              <p className="text-muted leading-relaxed">
                Tant que je n&apos;ai pas identifié le problème, je ne propose rien. Idem pour un étudiant qui cherche une alternance : il est lui-même la réponse à un besoin, encore faut-il savoir lequel. C&apos;est là que tout commence.
              </p>
            </div>
            <div className="bg-card border hairline rounded-2xl p-8">
              <div className="serif text-7xl text-accent mb-4 leading-none">3C</div>
              <h3 className="serif text-xl mb-3">Comprendre. Creuser. Conclure.</h3>
              <p className="text-muted leading-relaxed">
                Le cycle de toute conversation de vente. Pas de pitch avant d&apos;avoir compris. Pas de closing avant d&apos;avoir creusé.
              </p>
            </div>
            <div className="bg-card border hairline rounded-2xl p-8">
              <div className="serif text-7xl text-accent mb-4 leading-none">ROI</div>
              <h3 className="serif text-xl mb-3">
                Ce que le client gagne sur ce qu&apos;il dépense.
              </h3>
              <p className="text-muted leading-relaxed">
                Tant qu&apos;on ne sait pas chiffrer ça, on ne vend pas, on espère. La méthode commence par l&apos;arithmétique.
              </p>
            </div>
            <div className="bg-card border hairline rounded-2xl p-8">
              <div className="serif text-7xl text-accent mb-4 leading-none">
                70<span className="text-accent-soft text-4xl align-top">/30</span>
              </div>
              <h3 className="serif text-xl mb-3">Le client parle 70%. Toi, 30%.</h3>
              <p className="text-muted leading-relaxed">
                Si tu parles plus, tu vends moins. La règle qui sauve les commerciaux qui pitchent trop tôt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projets */}
      <section id="projets" className="border-b hairline">
        <div className="max-w-content mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-4">
              <div className="text-xs uppercase tracking-[0.18em] text-muted mb-3">
                <span className="dot" />
                Projets
              </div>
            </div>
            <div className="md:col-span-8">
              <h2 className="serif text-3xl md:text-5xl leading-[1.05] tracking-tight">
                Ce que je livre,
                <br />
                <span className="text-muted">en clair.</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ProjectCard
              href="https://coaching.hiersoboris.fr"
              tag="App · Production"
              title="Coaching Alternance"
              desc="App web qui aide les étudiants en alternance à structurer leur recherche d'entreprise. Magic link Supabase, suivi candidatures, relances IA."
              footer="coaching.hiersoboris.fr"
            />
            <ProjectCard
              href="https://toolsbox.hiersoboris.fr"
              tag="App · Production"
              title="The Tools Box"
              desc="Annuaire d'outils que j'utilise au quotidien en sales, sales ops et build : prospection, enrichissement, automatisation, IA. Filtrable, mis à jour en continu."
              footer="toolsbox.hiersoboris.fr"
            />
            <ProjectCard
              href="https://formation-boris-ha.notion.site/les-n-gociales"
              tag="Ressource · Public"
              title="Préparer Les Négociales"
              desc="Méthode complète + 30 cas pratiques tirés des éditions passées. Page Notion publique, mise à jour à chaque édition."
              footer="formation-boris-ha.notion.site"
            />
            <ProjectCard
              href={CALENDLY}
              tag="Mission · Head of Sales freelance"
              title="Exoteach"
              desc="Plateforme EdTech SaaS B2B (LMS, IA, adaptive learning). Pilotage full cycle, scaling de l'équipe (1 -> 4 + apporteurs + freelances), écosystème commercial hybride."
              footer="Dec 2025 · 90k€ ARR · objectif 500k€ d'ici fin 2026"
            />
            <ProjectCard
              href={CALENDLY}
              tag="Mission · Head of Sales freelance"
              title="Avelor Spirits"
              desc="Groupe de spiritueux premium (création -> distribution). Stratégie commerciale, réseau de freelances et apporteurs, déploiement multi-marchés : CHR, cavistes, hôtels/palaces, export."
              footer="Janv 2026 · 450k€ générés · objectif 1,5M€"
            />
            <a
              href={CALENDLY}
              className="group bg-accent-tint border-2 border-dashed border-accent-soft rounded-2xl p-8 hover:bg-accent hover:text-bg transition"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="text-xs uppercase tracking-[0.18em] text-accent group-hover:text-bg">
                  Ton projet ?
                </div>
                <ArrowRight className="w-5 h-5 text-accent group-hover:text-bg transition" />
              </div>
              <h3 className="serif text-2xl mb-2">Le prochain peut être le tien.</h3>
              <p className="text-muted group-hover:text-bg/80 leading-relaxed mb-6">
                DC freelance, coaching d&apos;équipe, formation, ou un outil sur mesure. Si ça a du sens, on en parle 30 minutes.
              </p>
              <div className="text-sm font-medium">Réserver un échange -&gt;</div>
            </a>
          </div>
        </div>
      </section>

      {/* Parcours */}
      <section className="border-b hairline">
        <div className="max-w-content mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <div className="text-xs uppercase tracking-[0.18em] text-muted mb-3">
                <span className="dot" />
                Parcours
              </div>
              <h2 className="serif text-3xl md:text-5xl leading-[1.05] tracking-tight mb-6">
                10 ans en sales.
                <br />4 ans en SaaS B2B hypercroissance.
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                SDR puis BDR puis AE Full Cycle et Sales Ops chez{" "}
                <strong className="text-ink">HappyPal</strong> (2021-2025). Team Lead Sales freelance chez{" "}
                <strong className="text-ink">ValueCo</strong> depuis avril 2025. Co-fondateur de{" "}
                <strong className="text-ink">Growth Factory</strong> début 2021.
              </p>
              <p className="text-muted leading-relaxed">
                Aujourd&apos;hui : Head of Sales freelance chez{" "}
                <strong className="text-ink">Exoteach</strong> et{" "}
                <strong className="text-ink">Avelor Spirits</strong>, intervenant à{" "}
                <strong className="text-ink">Euridis Business School</strong>. Je remets ce que j&apos;ai appris dans les mains des autres : DC freelance, coach, intervenant.
              </p>
            </div>
            <div className="md:col-span-7 grid grid-cols-2 gap-px bg-border border hairline rounded-2xl overflow-hidden">
              <Stat value="10 ans" caption="en vente B2B." />
              <Stat value="1,7M€" caption="ARR généré chez HappyPal (SDR + BDR)." />
              <Stat value="~225" caption="étudiants accompagnés à Euridis." />
              <Stat
                value={
                  <>
                    14,2<span className="text-2xl text-muted">/20</span>
                  </>
                }
                caption="note moyenne sur les interventions."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sur LinkedIn */}
      <section id="linkedin" className="border-b hairline">
        <div className="max-w-content mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-4">
              <div className="text-xs uppercase tracking-[0.18em] text-muted mb-3">
                <span className="dot" />
                Sur LinkedIn
              </div>
            </div>
            <div className="md:col-span-8">
              <h2 className="serif text-3xl md:text-5xl leading-[1.05] tracking-tight">
                Ce que je raconte
                <br />
                <span className="text-muted">en public.</span>
              </h2>
              <p className="text-muted text-lg mt-6 max-w-2xl leading-relaxed">
                Tout est sur LinkedIn, mis à jour en temps réel : posts, prises de parole, retours d&apos;expérience sur la vente, la négo, l&apos;IA appliquée au commercial.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <LinkedInCard
              tag="Post · 20 mai 2026"
              title="Ce que j'ai appris à coacher 50 étudiants pour Les Négociales 2026."
              desc="Retour sur la méthode 3C, le ROI, la règle 70/30, et pourquoi le carcan « 10 minutes » est une fausse contrainte. 200 entreprises, 7 000 candidats, 2 finalistes Euridis."
              href="https://www.linkedin.com/posts/boris-hierso-alphandery_n%C3%A9gociales-savoir-n%C3%A9gocier-ugcPost-7462752165711867904-WwM9"
              cta="Lire le post"
            />
            <LinkedInCard
              tag="Ressource · 2026"
              title="Préparer Les Négociales : méthode + 30 cas pratiques."
              desc="Page Notion publique, structurée en 2 parties (la méthode pour toute négociation · préparer Les Négociales). Mise à jour à chaque édition."
              href="https://formation-boris-ha.notion.site/les-n-gociales"
              cta="Voir le guide"
            />
            <LinkedInCard
              tag="Profil · Mai 2026"
              title="Profil LinkedIn refait : positionnement Head of Sales + coach + maker."
              desc="Bandeau, à propos, services, recommandations. Refonte complète pour clarifier le triple positionnement vente, formation, outils IA."
              href={LINKEDIN}
              cta="Voir le profil"
            />
          </div>

          <a
            href={LINKEDIN}
            className="inline-flex items-center gap-3 bg-ink text-bg px-6 py-4 rounded-full text-sm font-medium hover:bg-accent transition"
          >
            <LinkedinIcon className="w-4 h-4" />
            Tout suivre sur LinkedIn
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="max-w-content mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-8">
              <div className="text-xs uppercase tracking-[0.18em] text-muted mb-3">
                <span className="dot" />
                Parlons
              </div>
              <h2 className="serif text-4xl md:text-6xl leading-[1.05] tracking-tight">
                Tu as un sujet commercial,
                <br />
                de coaching, ou tu veux
                <br />
                <span className="text-accent">qu&apos;on build un truc ensemble ?</span>
              </h2>
            </div>
            <div className="md:col-span-4 space-y-3">
              <ContactCard href={CALENDLY} tag="Calendly" label="Prendre 30 minutes" primary />
              <ContactCard href={LINKEDIN} tag="LinkedIn" label="in/boris-hierso-alphandery" />
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
            <Link href="/mentions-legales" className="hover:text-ink">
              Mentions légales
            </Link>
            <Link href="/rgpd" className="hover:text-ink">
              RGPD
            </Link>
            <a href={LINKEDIN} className="hover:text-ink">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
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

function LinkedInCard({
  tag,
  title,
  desc,
  href,
  cta,
}: {
  tag: string;
  title: string;
  desc: string;
  href: string;
  cta: string;
}) {
  return (
    <article className="bg-card border hairline rounded-2xl p-8">
      <div className="text-xs uppercase tracking-[0.18em] text-accent mb-4">{tag}</div>
      <h3 className="serif text-xl mb-3">{title}</h3>
      <p className="text-muted text-sm leading-relaxed mb-6">{desc}</p>
      <a href={href} className="text-sm text-ink font-medium hover:text-accent">
        {cta} -&gt;
      </a>
    </article>
  );
}

function ContactCard({
  href,
  tag,
  label,
  primary,
}: {
  href: string;
  tag: string;
  label: string;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      className={
        primary
          ? "flex items-center justify-between bg-ink text-bg px-6 py-5 rounded-2xl hover:bg-accent transition group"
          : "flex items-center justify-between border hairline px-6 py-5 rounded-2xl hover:border-accent transition"
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
        <div className="serif text-lg mt-1">{label}</div>
      </span>
      <ArrowUpRight className={primary ? "w-5 h-5" : "w-5 h-5 text-muted"} />
    </a>
  );
}
