"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { track } from "@vercel/analytics";

/**
 * Inscription seule à la série des livres blancs : un email, rien d'autre.
 * Le lead part dans la base Notion (Newsletter cochée) via /api/newsletter.
 */
export default function NewsletterForm({ source }: { source: string }) {
  const [email, setEmail] = useState("");
  const [envoi, setEnvoi] = useState(false);
  const [envoye, setEnvoye] = useState(false);
  const [erreur, setErreur] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (envoi) return;
    setErreur("");
    setEnvoi(true);
    try {
      const data = new FormData(event.currentTarget);
      const reponse = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source,
          site: String(data.get("site") || ""),
        }),
      });
      const resultat = await reponse.json().catch(() => ({}));
      if (!reponse.ok) {
        setErreur(resultat.error || "L'envoi a échoué. Réessaie dans un instant.");
        return;
      }
      track("newsletter_submit", { source });
      setEnvoye(true);
    } catch {
      setErreur("Connexion impossible. Réessaie dans un instant.");
    } finally {
      setEnvoi(false);
    }
  }

  if (envoye) {
    return (
      <div
        role="status"
        className="border hairline bg-card rounded-2xl px-6 py-5 flex items-center gap-3"
      >
        <span className="w-8 h-8 shrink-0 rounded-full bg-bordeaux text-cream grid place-items-center">
          <Check className="w-4 h-4" />
        </span>
        <p className="text-sm text-muted leading-relaxed">
          C&apos;est noté. Tu recevras chaque nouveau livre blanc par email dès sa
          sortie, avec un lien de désinscription dans chaque envoi.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="border hairline bg-card rounded-2xl p-6">
      <label htmlFor="nl-email" className="block text-sm font-medium text-ink">
        Recevoir chaque nouveau livre blanc par email
      </label>
      <div className="mt-3 flex flex-col sm:flex-row gap-3">
        <input
          id="nl-email"
          name="email"
          type="email"
          inputMode="email"
          required
          autoComplete="email"
          placeholder="ton@email.fr"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={Boolean(erreur)}
          className="flex-1 min-h-[44px] rounded-full border hairline bg-bg px-5 text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-bordeaux focus:border-bordeaux transition"
        />
        <button
          type="submit"
          disabled={envoi}
          className="min-h-[44px] inline-flex items-center justify-center gap-2 bg-bordeaux text-cream px-6 rounded-full text-sm font-medium hover:bg-bordeaux-soft transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {envoi ? <Loader2 className="w-4 h-4 animate-spin" /> : "M'inscrire"}
        </button>
      </div>
      {/* Champ piège anti-bot : jamais visible, jamais rempli par un humain. */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="nl-site">Ne pas remplir</label>
        <input id="nl-site" name="site" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      {erreur && (
        <p role="alert" className="mt-3 text-sm text-bordeaux">
          {erreur}
        </p>
      )}
      <p className="mt-3 text-xs text-muted leading-relaxed">
        Un email par nouveau guide, jusqu&apos;à un par jour en août. Désinscription en
        un clic dans chaque email, données jamais revendues.
      </p>
    </form>
  );
}
