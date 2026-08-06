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
    <main id="contenu" className="max-w-3xl mx-auto px-6 py-16 md:py-24">
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
          <h2 className="serif text-xl mb-2">Responsable du traitement</h2>
          <p className="text-muted">
            Boris Hierso Alphandéry, entrepreneur individuel, éditeur du site
            hiersoboris.fr. Pour toute question ou demande relative à vos données :
            hierso.boris@gmail.com.
          </p>
        </section>

        <section>
          <h2 className="serif text-xl mb-2">Ce que ce site collecte</h2>
          <p className="text-muted">
            Le site est une vitrine. Il ne crée aucun compte, ne dépose aucun cookie
            publicitaire ou de traçage. Les seuls formulaires présents sont ceux des
            livres blancs (pages Alternance et Livres blancs), l&apos;inscription à la
            série des livres blancs, et le diagnostic commercial (page Diagnostic).
            En dehors de ces formulaires, aucune donnée personnelle n&apos;est
            collectée.
          </p>
        </section>

        <section>
          <h2 className="serif text-xl mb-2">Les formulaires de livres blancs</h2>
          <p className="text-muted">
            <strong className="text-ink">Données collectées</strong> : prénom, nom et
            adresse mail (obligatoires), le livre blanc demandé, votre choix de
            recevoir ou non les prochains livres blancs, profil (étudiant, école ou
            entreprise), école ou entreprise, numéro de téléphone et profil LinkedIn
            (facultatifs, le numéro devenant nécessaire si vous demandez à être
            recontacté).
          </p>
          <p className="text-muted mt-3">
            <strong className="text-ink">Finalités</strong> : vous envoyer le livre
            blanc demandé et le lien de confirmation, puis, selon votre profil, vous
            proposer des offres d&apos;alternance ou vous recontacter au sujet du
            recrutement d&apos;un alternant. Aucune autre utilisation, aucune revente,
            aucune inscription à une newsletter sans case cochée.
          </p>
          <p className="text-muted mt-3">
            <strong className="text-ink">Le diagnostic commercial</strong> : le
            formulaire de la page Diagnostic collecte en plus vos réponses aux 10
            questions et votre score, uniquement pour calculer et vous envoyer votre
            résultat, puis, si vous avez coché la case dédiée, pour vous rappeler.
            Mêmes règles de conservation et de droits que ci-dessus.
          </p>
          <p className="text-muted mt-3">
            <strong className="text-ink">Envoi des nouveaux livres blancs</strong> :
            si vous cochez la case dédiée (jamais pré-cochée), votre adresse sert
            aussi à vous envoyer chaque nouveau livre blanc à sa sortie, ce qui peut
            représenter jusqu&apos;à un email par jour en période de publication. Cette
            liste est gérée via Resend et chaque email contient un lien de
            désinscription immédiate, en un clic. Vous pouvez aussi demander votre
            retrait par simple réponse ou par email. Un formulaire d&apos;inscription
            seule (adresse mail uniquement) existe également sur la page Livres
            blancs : les mêmes règles s&apos;y appliquent.
          </p>
          <p className="text-muted mt-3">
            <strong className="text-ink">Base légale</strong> : votre consentement, donné
            en soumettant le formulaire après avoir pris connaissance de la mention
            affichée à côté du bouton. La case « je souhaite être recontacté » fait
            l&apos;objet d&apos;un consentement distinct et facultatif. Vous pouvez
            retirer votre consentement à tout moment, sans que cela remette en cause les
            envois déjà effectués.
          </p>
          <p className="text-muted mt-3">
            <strong className="text-ink">Durée de conservation</strong> : 3 ans à compter
            du dernier contact, conformément à la recommandation de la CNIL en matière de
            prospection. Passé ce délai, les données sont supprimées.
          </p>
        </section>

        <section>
          <h2 className="serif text-xl mb-2">Qui héberge ces données</h2>
          <p className="text-muted">
            Les demandes reçues via le formulaire sont enregistrées dans{" "}
            <strong className="text-ink">Notion</strong> (Notion Labs Inc., États-Unis,
            transferts encadrés par les clauses contractuelles types de la Commission
            européenne) et l&apos;email de confirmation est envoyé via{" "}
            <strong className="text-ink">Resend</strong> (serveurs situés dans
            l&apos;Union européenne). Le site est hébergé par{" "}
            <strong className="text-ink">Vercel</strong>, et le nom de domaine, la zone
            DNS ainsi que la messagerie sont gérés par{" "}
            <strong className="text-ink">OVH</strong> (France). Ces prestataires agissent
            comme sous-traitants et n&apos;utilisent pas ces données pour leur propre
            compte.
          </p>
        </section>

        <section>
          <h2 className="serif text-xl mb-2">Mesure d&apos;audience</h2>
          <p className="text-muted">
            La fréquentation est mesurée avec Vercel Analytics, une solution respectueuse
            de la vie privée qui n&apos;utilise pas de cookies et ne collecte pas de
            données permettant de vous identifier (statistiques agrégées et anonymes
            uniquement).
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
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
            rectification, d&apos;effacement, de portabilité, de limitation et
            d&apos;opposition sur les données vous concernant, ainsi que du droit de
            retirer votre consentement à tout moment.
          </p>
          <p className="text-muted mt-3">
            Pour exercer ces droits, écrivez à hierso.boris@gmail.com. Une réponse vous
            sera apportée dans un délai maximum d&apos;un mois. Cela vaut aussi pour
            toute personne figurant sur une photographie de la page Art Slash souhaitant
            un retrait.
          </p>
          <p className="text-muted mt-3">
            Si vous estimez, après m&apos;avoir contacté, que vos droits ne sont pas
            respectés, vous pouvez introduire une réclamation auprès de la CNIL :{" "}
            <a
              href="https://www.cnil.fr/fr/plaintes"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-ink"
            >
              cnil.fr/fr/plaintes
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="serif text-xl mb-2">Mise à jour</h2>
          <p className="text-muted">
            Cette page a été mise à jour le 6 août 2026, à l&apos;occasion de
            l&apos;ajout des livres blancs « La lettre de motivation qu&apos;on lit
            jusqu&apos;au bout » et « Rends ton CV impossible à rejeter ». La
            collecte et la durée de conservation sont identiques pour tous les
            livres blancs.
          </p>
        </section>
      </div>
    </main>
  );
}
