/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Art Slash · Galerie",
  description:
    "Art Slash, la technique et le travail artistique de Boris Hierso Alphandéry (2014-2018) : toiles d'action painting et body painting. Archive, plus en activité.",
  alternates: { canonical: "/art-slash" },
  openGraph: {
    type: "website",
    title: "Art Slash · Boris Hierso Alphandéry",
    description:
      "Action painting et body painting (2014-2018). Une archive.",
  },
};

const IG = "https://www.instagram.com/borishierso/";

const TOILES: { slug: string; title: string; dims: string }[] = [
  { slug: "etoiles", title: "Étoiles électrique", dims: "130 x 160 cm" },
  { slug: "dragon", title: "La naissance du dragon", dims: "100 x 73 cm" },
  { slug: "soleil", title: "Le soleil de l'ombre", dims: "91 x 64 cm" },
  { slug: "si-jetais", title: "Si j'étais...", dims: "92 x 65 cm" },
  { slug: "petit-bourgeois", title: "Le petit bourgeois", dims: "98 x 70 cm" },
  { slug: "dune", title: "Dune d'or", dims: "80 x 100 cm" },
  { slug: "carnaval", title: "Carnaval", dims: "60 x 60 cm" },
  { slug: "cometes", title: "Comètes", dims: "60 x 60 cm" },
  { slug: "pensee", title: "La pensée d'un Homme", dims: "50 x 75 cm" },
  { slug: "arctique", title: "Arctique", dims: "55 x 45 cm" },
  { slug: "autoportrait", title: "Autoportrait", dims: "50 x 30 cm" },
  { slug: "incomprehension", title: "Incompréhension", dims: "37 x 28 cm" },
  { slug: "street-pop", title: "Street pop", dims: "20 x 15 cm" },
  { slug: "pluie-argent", title: "Pluie d'argent", dims: "20 x 15 cm" },
  { slug: "massacre", title: "Un massacre terrestre", dims: "10 x 15 cm" },
];

const SERIES: {
  slug: string;
  title: string;
  meta: string;
  credit: string;
  count: number;
}[] = [
  {
    slug: "destruction",
    title: "Destruction",
    meta: "Body painting · visage",
    credit: "Body painting Boris Hierso · Photo Pictural1",
    count: 5,
  },
  {
    slug: "dark-angel",
    title: "Dark Angel",
    meta: "09/05/18",
    credit: "Modèle Pauline Ortega · Photo Tristan Dudot",
    count: 4,
  },
  {
    slug: "luxe-trash",
    title: "Luxe & Trash",
    meta: "27/05/18",
    credit:
      "Modèles Mickaël Bokis & Pierre Roumegas · Photo Tristan Dudot · Scénographie Élodie",
    count: 4,
  },
  {
    slug: "intimite",
    title: "Intimité contrastée",
    meta: "03/05/18",
    credit: "Modèle Joséphine Cordesse · Photo Sami Eddine",
    count: 4,
  },
  {
    slug: "une-nuit-ouest",
    title: "Une Nuit à l'Ouest",
    meta: "30/06/18 · Festival des Sables Blancs, Douarnenez",
    credit: "Modèle Naphyg · Photo Tristan Dudot · Passage France 3",
    count: 1,
  },
  {
    slug: "art-fact",
    title: "Art Fact",
    meta: "25/05/19",
    credit: "Body painting Boris Hierso",
    count: 4,
  },
];

export default function ArtSlashPage() {
  return (
    <main className="bg-night text-cream min-h-screen">
      <div className="max-w-content mx-auto px-6">
        {/* Top bar */}
        <div className="h-20 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-cream/70 hover:text-cream transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au site
          </Link>
          <a
            href={IG}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-cream/70 hover:text-cream transition"
          >
            Instagram
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Intro */}
        <header className="py-16 md:py-24 max-w-3xl">
          <div className="text-xs uppercase tracking-[0.22em] text-bordeaux-soft mb-6">
            2014 - 2018 · archive
          </div>
          <h1 className="serif text-6xl md:text-8xl leading-[0.95] tracking-tight">
            Art Slash
          </h1>
          <p className="mt-8 text-lg md:text-xl text-cream/70 leading-relaxed">
            Avant la vente, dix ans de peinture. Art Slash, c&apos;est le nom de
            ma technique : la projection, le geste, la matière. Sur toile, puis
            sur les corps. Je ne peins plus depuis 2018 : cette page est une
            archive, pour celles et ceux qui veulent voir le travail.
          </p>
        </header>
      </div>

      {/* Toiles */}
      <section className="border-t border-cream/10">
        <div className="max-w-content mx-auto px-6 py-16 md:py-24">
          <div className="text-xs uppercase tracking-[0.2em] text-bordeaux-soft mb-10">
            Toiles · action painting
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {TOILES.map((t) => (
              <figure key={t.slug} className="mb-5 break-inside-avoid group">
                <div className="overflow-hidden rounded-sm bg-night-soft">
                  <img
                    src={`/art-slash/toiles/${t.slug}.jpg`}
                    alt={`${t.title}, toile de Boris Hierso Alphandéry`}
                    loading="lazy"
                    className="w-full h-auto object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <figcaption className="mt-2.5 flex items-baseline justify-between gap-3">
                  <span className="serif text-base text-cream">{t.title}</span>
                  <span className="text-xs text-cream/45 shrink-0">{t.dims}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Body painting */}
      <section className="border-t border-cream/10">
        <div className="max-w-content mx-auto px-6 py-16 md:py-24">
          <div className="text-xs uppercase tracking-[0.2em] text-bordeaux-soft mb-3">
            Body painting & performances
          </div>
          <h2 className="serif text-3xl md:text-5xl tracking-tight mb-14 max-w-2xl">
            La peinture sur les corps, en lieux et en public.
          </h2>

          <div className="space-y-20">
            {SERIES.map((s) => (
              <div key={s.slug}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 mb-6 border-b border-cream/10 pb-4">
                  <h3 className="serif text-2xl md:text-3xl text-cream">
                    {s.title}
                    <span className="text-cream/40 text-lg md:text-xl ml-3">
                      {s.meta}
                    </span>
                  </h3>
                  <p className="text-sm text-cream/55">{s.credit}</p>
                </div>
                <div
                  className={`grid gap-4 ${
                    s.count === 1
                      ? "grid-cols-1 md:grid-cols-2"
                      : "grid-cols-2 lg:grid-cols-4"
                  }`}
                >
                  {Array.from({ length: s.count }, (_, i) => (
                    <div
                      key={i}
                      className="overflow-hidden rounded-sm bg-night-soft group"
                    >
                      <img
                        src={`/art-slash/${s.slug}/${String(i + 1).padStart(
                          2,
                          "0"
                        )}.jpg`}
                        alt={`${s.title}, body painting de Boris Hierso Alphandéry`}
                        loading="lazy"
                        className="w-full h-full object-cover aspect-[3/4] transition duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Les Muses */}
      <section className="border-t border-cream/10">
        <div className="max-w-content mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 mb-6 border-b border-cream/10 pb-4">
            <h3 className="serif text-2xl md:text-3xl text-cream">
              Les Muses
              <span className="text-cream/40 text-lg md:text-xl ml-3">
                Performance · 10/03/18
              </span>
            </h3>
            <p className="text-sm text-cream/55">
              Performance live de body painting
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="overflow-hidden rounded-sm bg-night-soft group"
              >
                <img
                  src={`/art-slash/les-muses/${String(i).padStart(2, "0")}.jpg`}
                  alt="Performance Les Muses, Boris Hierso Alphandéry"
                  loading="lazy"
                  className="w-full h-full object-cover aspect-[3/4] transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Colophon */}
      <section className="border-t border-cream/10">
        <div className="max-w-content mx-auto px-6 py-16 md:py-24">
          <div className="text-xs uppercase tracking-[0.2em] text-bordeaux-soft mb-8">
            Crédits
          </div>
          <div className="grid md:grid-cols-3 gap-10 text-sm leading-relaxed">
            <div>
              <div className="text-cream/45 mb-2">Artiste</div>
              <p className="text-cream">
                Boris Hierso Alphandéry. Toiles et body painting, 2014-2018.
              </p>
            </div>
            <div>
              <div className="text-cream/45 mb-2">Photographes</div>
              <p className="text-cream">
                Tristan Dudot · Clément Ouvrard · Sami Eddine · Pictural1.
              </p>
            </div>
            <div>
              <div className="text-cream/45 mb-2">Modèles & collaborateurs</div>
              <p className="text-cream">
                Pauline Ortega · Joséphine Cordesse · Naphyg · Mickaël Bokis ·
                Pierre Roumegas · Arnaud Gagnoud · Mary DMN · Isabelle Treiber ·
                Eleonora Grotto · Élodie. Co-body paint : Espion Graff.
              </p>
            </div>
          </div>
          <p className="mt-12 text-cream/45 text-sm">
            Si vous figurez sur une image et souhaitez un crédit ou un retrait,
            écrivez-moi : hierso.boris@gmail.com.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cream/10">
        <div className="max-w-content mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-cream/55">
          <div className="serif text-cream">
            Art Slash · Boris Hierso Alphandéry
          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-cream">
              Accueil
            </Link>
            <a
              href={IG}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream inline-flex items-center gap-1.5"
            >
              Instagram
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
