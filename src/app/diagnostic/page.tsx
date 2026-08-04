import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SITE_URL } from "@/lib/site-url";
import SiteHeader from "../SiteHeader";
import DiagnosticForm from "./DiagnosticForm";

export const metadata: Metadata = {
  title: "Diagnostic : où en est ta machine commerciale ?",
  description:
    "10 questions, 3 minutes : évalue la solidité de ta machine commerciale (prospection, pipeline, process, IA) et reçois tes 3 priorités par email. Gratuit.",
  alternates: { canonical: "/diagnostic" },
  openGraph: {
    type: "website",
    title: "Diagnostic commercial en 10 questions · Boris Hierso Alphandéry",
    description:
      "Évalue ta machine commerciale en 3 minutes et reçois tes 3 priorités. Gratuit.",
  },
};

export default function Diagnostic() {
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
              {
                "@type": "ListItem",
                position: 2,
                name: "Diagnostic commercial",
                item: `${SITE_URL}/diagnostic`,
              },
            ],
          }),
        }}
      />
      <SiteHeader solidFromTop />
      <main id="contenu" className="pt-24 md:pt-28">
        <section className="max-w-content mx-auto px-6 pb-16 md:pb-24">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition mb-10 min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l&apos;accueil
          </Link>
          <div className="max-w-3xl">
            <div className="text-xs md:text-sm tracking-[0.2em] uppercase text-bordeaux mb-6">
              Diagnostic gratuit · 3 minutes
            </div>
            <h1 className="serif text-4xl md:text-6xl leading-[1.02] tracking-tight">
              Où en est
              <br />
              <span className="italic text-bordeaux">ta machine commerciale ?</span>
            </h1>
            <p className="mt-7 text-lg text-muted max-w-2xl leading-relaxed">
              10 questions, celles que je pose à chaque dirigeant avant une mission.
              À la fin : ton score sur 20, ton niveau, et les 3 priorités que je te
              conseille, envoyées par mail. Sans bla-bla, sans engagement.
            </p>
          </div>

          <div className="mt-12">
            <DiagnosticForm />
          </div>
        </section>
      </main>

      <footer className="border-t hairline">
        <div className="max-w-content mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-muted">
          <div className="serif">Boris Hierso Alphandéry</div>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/" className="hover:text-ink">Accueil</Link>
            <Link href="/livres-blancs" className="hover:text-ink">Livres blancs</Link>
            <Link href="/mentions-legales" className="hover:text-ink">Mentions légales</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
