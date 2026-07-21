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
    <main id="contenu" className="max-w-3xl mx-auto px-6 py-16 md:py-24">
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
            <strong className="text-ink">BORIS HIERSO ALPHANDERY</strong>, entrepreneur
            individuel (catégorie juridique 1000), exerçant sous le nom commercial BHA
            Consulting.
            <br />
            Siège social : 47 rue Brancion, 75015 Paris, France.
            <br />
            SIREN : 837 786 565 · SIRET du siège : 837 786 565 00023.
            <br />
            Numéro de TVA intracommunautaire : FR79837786565.
            <br />
            Code APE : 70.22Z, conseil pour les affaires et autres conseils de gestion.
            <br />
            Déclaration d&apos;activité de formation enregistrée sous le numéro
            11 75 74446 75 auprès du préfet de région d&apos;Île-de-France. Cet
            enregistrement ne vaut pas agrément de l&apos;État.
          </p>
          <p className="text-muted mt-3">
            Contact : hierso.boris@gmail.com · +33 6 72 40 27 98
            <br />
            Directeur de la publication : Boris Hierso Alphandéry.
          </p>
        </section>

        <section>
          <h2 className="serif text-xl mb-2">Hébergement</h2>
          <p className="text-muted">
            Le site est hébergé par <strong className="text-ink">Vercel Inc.</strong>, 340
            S Lemon Ave #4133, Walnut, CA 91789, États-Unis (vercel.com).
          </p>
          <p className="text-muted mt-3">
            Le nom de domaine, la zone DNS et la messagerie sont gérés par{" "}
            <strong className="text-ink">OVH SAS</strong>, 2 rue Kellermann, 59100
            Roubaix, France (ovhcloud.com).
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
