import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Gallery from "./Gallery";
import data from "./gallery-data.json";

export const metadata: Metadata = {
  title: "Art Slash · Galerie",
  description:
    "Art Slash, le travail artistique de Boris Hierso Alphandéry (2014-2018) : toiles d'action painting, body painting et performances. Archive, plus en activité.",
  alternates: { canonical: "/art-slash" },
  openGraph: {
    type: "website",
    title: "Art Slash · Boris Hierso Alphandéry",
    description: "Action painting, body painting et performances (2014-2018).",
  },
  twitter: {
    card: "summary_large_image",
    title: "Art Slash · Boris Hierso Alphandéry",
    description: "Action painting, body painting et performances (2014-2018).",
  },
};

const IG = "https://www.instagram.com/borishierso/";

export default function ArtSlashPage() {
  return (
    <main className="bg-night text-cream">
      {/* Bandeau immersif */}
      <header className="relative isolate">
        <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
          <Image
            src="/hero/portrait-dark.jpg"
            alt="Boris Hierso Alphandéry, body painting"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_32%]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-night/50"
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 top-0 z-10 max-w-content mx-auto w-full px-6 h-20 flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-cream/75 hover:text-cream transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au site
            </Link>
            <a
              href={IG}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-cream/75 hover:text-cream transition"
            >
              Instagram
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <div className="absolute inset-x-0 bottom-0 z-10 max-w-content mx-auto w-full px-6 pb-10 md:pb-14">
            <div className="text-xs uppercase tracking-[0.24em] text-bordeaux-soft mb-4">
              2014 - 2018 · archive
            </div>
            <h1 className="serif text-6xl md:text-9xl leading-[0.9] tracking-tight">
              Art Slash
            </h1>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section className="max-w-content mx-auto px-6 py-14 md:py-20">
        <p className="serif text-2xl md:text-3xl leading-snug max-w-3xl text-cream">
          Avant la vente, dix ans de peinture.
        </p>
        <p className="mt-6 text-lg text-cream/65 leading-relaxed max-w-2xl">
          Art Slash, c&apos;est le nom de ma technique : la projection, le
          geste, la matière. Sur toile d&apos;abord, puis sur les corps, en
          friches urbaines et en festival. Je ne peins plus depuis 2018. Cette
          page est une archive, pour celles et ceux qui veulent voir le travail.
        </p>
      </section>

      <Gallery data={data} />

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
                Boris Hierso Alphandéry. Toiles, body painting et performances,
                2014-2018.
              </p>
            </div>
            <div>
              <div className="text-cream/45 mb-2">Photographes</div>
              <p className="text-cream">
                Tristan Dudot · Clément Ouvrard · Sami Eddine · Alexia Vermiglio
                · Jean-Yves Dana · Picovore · Pictural1.
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
          <p className="mt-12 text-cream/45 text-sm max-w-2xl">
            Les crédits sont reconstitués à partir de mes archives Instagram. Si
            vous figurez sur une image et souhaitez un crédit, une correction ou
            un retrait, écrivez-moi : hierso.boris@gmail.com.
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
