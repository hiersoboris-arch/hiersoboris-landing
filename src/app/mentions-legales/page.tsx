import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site hiersoboris.fr.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

export default function MentionsLegales() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition mb-12"
      >
        <ArrowLeft className="w-4 h-4" />
        Retour au site
      </Link>
      <h1 className="serif text-4xl md:text-5xl tracking-tight mb-10">
        Mentions légales
      </h1>

      <div className="space-y-8 text-ink leading-relaxed">
        <section>
          <h2 className="serif text-xl mb-2">Éditeur du site</h2>
          <p className="text-muted">
            Boris Hierso Alphandéry, entrepreneur individuel.
            <br />
            Contact : hierso.boris@gmail.com
            <br />
            Directeur de la publication : Boris Hierso Alphandéry.
          </p>
        </section>

        <section>
          <h2 className="serif text-xl mb-2">Hébergement</h2>
          <p className="text-muted">
            Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
            <br />
            vercel.com
          </p>
        </section>

        <section>
          <h2 className="serif text-xl mb-2">Propriété intellectuelle</h2>
          <p className="text-muted">
            L&apos;ensemble des contenus de ce site (textes, images, toiles,
            photographies de body painting, marque Art Slash) est la propriété
            de Boris Hierso Alphandéry ou de leurs auteurs respectifs (voir les
            crédits sur la page Art Slash). Toute reproduction sans autorisation
            est interdite. Les logos des tiers appartiennent à leurs détenteurs
            et sont affichés à titre de référence.
          </p>
        </section>

        <section>
          <h2 className="serif text-xl mb-2">Crédits photographiques</h2>
          <p className="text-muted">
            Les photographies de la page Art Slash sont créditées à leurs
            auteurs sur la page. Pour toute demande de crédit, correction ou
            retrait : hierso.boris@gmail.com.
          </p>
        </section>
      </div>
    </main>
  );
}
