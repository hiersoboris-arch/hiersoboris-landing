import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Données personnelles & RGPD",
  description: "Politique de confidentialité et de gestion des données du site hiersoboris.fr.",
  alternates: { canonical: "/rgpd" },
  robots: { index: false, follow: true },
};

export default function Rgpd() {
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
        Données personnelles
      </h1>

      <div className="space-y-8 text-ink leading-relaxed">
        <section>
          <h2 className="serif text-xl mb-2">Ce que ce site collecte</h2>
          <p className="text-muted">
            Ce site est une vitrine. Il ne contient aucun formulaire, aucune
            création de compte et ne collecte aucune donnée personnelle vous
            concernant. Aucun cookie publicitaire ou de traçage n&apos;est
            déposé.
          </p>
        </section>

        <section>
          <h2 className="serif text-xl mb-2">Mesure d&apos;audience</h2>
          <p className="text-muted">
            La fréquentation est mesurée avec Vercel Analytics, une solution
            respectueuse de la vie privée qui n&apos;utilise pas de cookies et
            ne collecte pas de données permettant de vous identifier
            (statistiques agrégées et anonymes uniquement).
          </p>
        </section>

        <section>
          <h2 className="serif text-xl mb-2">Prise de contact</h2>
          <p className="text-muted">
            Si vous me contactez par email (hierso.boris@gmail.com) ou réservez
            un échange via Calendly, les données que vous transmettez servent
            uniquement à traiter votre demande et ne sont ni revendues ni
            partagées. Calendly applique sa propre politique de confidentialité.
          </p>
        </section>

        <section>
          <h2 className="serif text-xl mb-2">Vos droits</h2>
          <p className="text-muted">
            Conformément au RGPD, vous pouvez demander l&apos;accès, la
            rectification ou la suppression des données vous concernant en
            écrivant à hierso.boris@gmail.com. Cela vaut aussi pour toute
            personne figurant sur une photographie de la page Art Slash
            souhaitant un retrait.
          </p>
        </section>
      </div>
    </main>
  );
}
