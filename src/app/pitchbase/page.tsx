import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SITE_URL } from "@/lib/site-url";
import SiteHeader from "../SiteHeader";

// Source : skill pitchbase (deck de référence du 26/10/2026). Règles : Boris =
// « cofondateur et Head of Sales », Briac = « cofondateur et CTO ». Jamais
// Président, DG ni la répartition du capital. Jamais réduire Pitchbase au cold
// call ni l'évaluation à « une note ». Chiffre public unique : plus de 700 clients.

export const metadata: Metadata = {
  title: "Pitchbase : ma vision",
  description:
    "Pourquoi Boris Hierso Alphandéry a cofondé Pitchbase, le simulateur de vente par IA vocale : s'entraîner sur tout le cycle de vente sans brûler un seul vrai prospect.",
  alternates: { canonical: "/pitchbase" },
};

const GO = "/go/pitchbase";

const CYCLE = [
  { t: "Acquisition", d: "Cold call, discovery call, démo, closing." },
  { t: "Account management", d: "Débrief client, QBR, upsell et cross-sell, réactivation." },
];

const POINTS = [
  { e: "🎭", t: "Une IA qui joue le jeu", d: "Elle objecte, coupe la parole, sort « je vais réfléchir », change d'humeur, peut raccrocher. Un ou plusieurs interlocuteurs en face, partage d'écran possible." },
  { e: "🧪", t: "Un persona en 30 secondes", d: "Secteur, poste, niveau de résistance de 1 à 5 : tu t'entraînes sur le client que tu vas vraiment appeler." },
  { e: "📋", t: "Un débrief qui sert", d: "Chaque appel est évalué selon le framework de son étape (BANT, MEDDIC, SPIN), avec ce qu'il faut retravailler et des reformulations prêtes à l'emploi." },
  { e: "⏱️", t: "Quand tu veux", d: "Dans le navigateur, en asynchrone : 10 minutes entre deux rendez-vous suffisent." },
];

export default function Pitchbase() {
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
              { "@type": "ListItem", position: 2, name: "Pitchbase", item: `${SITE_URL}/pitchbase` },
            ],
          }),
        }}
      />
      <SiteHeader solidFromTop />
      <main id="contenu" className="pt-24 md:pt-28">
        <section className="max-w-content mx-auto px-6 pb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition mb-10 min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l&apos;accueil
          </Link>
          <div className="max-w-3xl">
            <div className="kicker md:text-sm text-bordeaux mb-6">Cofondateur et Head of Sales</div>
            <h1 className="serif text-4xl md:text-6xl leading-[1.02] tracking-tight">
              La vente est un sport.
              <br />
              <span className="text-muted">Pitchbase, c&apos;est le terrain d&apos;entraînement.</span>
            </h1>
            <p className="mt-7 text-lg text-muted leading-relaxed max-w-2xl">
              Pitchbase est un simulateur de vente par IA vocale. Tu appelles, une IA joue ton
              interlocuteur en temps réel, puis tu sais exactement quoi retravailler. Plus de 700
              clients l&apos;utilisent déjà : indépendants, étudiants, équipes commerciales.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={GO}
                className="inline-flex items-center gap-2 bg-bordeaux text-cream px-6 py-3.5 rounded-full text-sm font-medium hover:bg-bordeaux-soft transition"
              >
                Essayer Pitchbase : 5 simulations offertes
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="border-t hairline grain">
          <div className="max-w-content mx-auto px-6 py-16 md:py-20 grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <div className="kicker text-muted mb-4"><span className="dot" />Pourquoi je l&apos;ai cofondé</div>
              <h2 className="serif text-3xl md:text-4xl leading-tight tracking-tight">
                Un commercial progresse en répétant. Pas en brûlant ses prospects.
              </h2>
            </div>
            <div className="md:col-span-7 space-y-5 text-muted leading-relaxed">
              <p>
                Dix ans de vente B2B, et des centaines de commerciaux formés en entreprise et en
                école : la méthode s&apos;apprend en une journée, le geste se muscle par la
                répétition. Un sportif ne découvre pas son geste le jour du match. Un commercial,
                si : il s&apos;entraîne sur ses vrais prospects, et chaque appel raté est un compte
                perdu.
              </p>
              <p>
                Pitchbase met ce terrain d&apos;entraînement à portée de n&apos;importe qui, sur tout
                le cycle de vente, de la prospection à l&apos;account management. C&apos;est aussi le
                prolongement naturel de mes formations : on apprend la méthode ensemble, puis
                chacun s&apos;entraîne seul, autant qu&apos;il veut, avant de décrocher pour de vrai.
              </p>
              <p>
                Je porte le commercial, les écoles, les entreprises et le réseau. Briac Roudaut,
                cofondateur et CTO, porte le produit. Les données sont hébergées dans l&apos;Union
                européenne.
              </p>
            </div>
          </div>
        </section>

        {/* Ce que fait Pitchbase */}
        <section className="border-t hairline">
          <div className="max-w-content mx-auto px-6 py-16 md:py-20">
            <div className="kicker text-muted mb-4"><span className="dot" />Tout le cycle, pas seulement le cold call</div>
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {CYCLE.map((c) => (
                <div key={c.t} className="bg-card border hairline rounded-2xl p-6">
                  <div className="serif text-2xl">{c.t}</div>
                  <p className="mt-2 text-muted">{c.d}</p>
                </div>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {POINTS.map((p) => (
                <div key={p.t} className="lift bg-card border hairline rounded-2xl p-6">
                  <div className="text-2xl" aria-hidden="true">{p.e}</div>
                  <div className="serif text-lg mt-3">{p.t}</div>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t hairline">
          <div className="max-w-content mx-auto px-6 py-16">
            <div className="bg-night text-cream rounded-2xl p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="serif text-3xl">Pour une équipe, une école, un organisme de formation ?</div>
                <p className="mt-3 text-cream/75">
                  On monte une offre sur mesure, avec ou sans formation autour.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={GO}
                  className="inline-flex items-center gap-2 bg-cream text-ink px-6 py-3.5 rounded-full text-sm font-medium hover:bg-bg transition"
                >
                  Aller sur pitchbase.app
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/formations"
                  className="inline-flex items-center gap-2 border border-cream/40 text-cream px-6 py-3.5 rounded-full text-sm font-medium hover:bg-cream/10 transition"
                >
                  Voir les formations
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
