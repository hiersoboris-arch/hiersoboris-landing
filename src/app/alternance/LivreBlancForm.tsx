"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";
import { track } from "@vercel/analytics";
import { LIVRETS, type LivretSlug } from "@/lib/livre-blanc";

// Mémorise les UTM du premier chargement pour attribuer le lead à la bonne
// campagne (posts LinkedIn quotidiens), même après navigation interne.
function utmCourante(): string {
  try {
    const p = new URLSearchParams(window.location.search);
    const utm = ["utm_source", "utm_medium", "utm_campaign"]
      .map((k) => p.get(k))
      .filter(Boolean)
      .join("/");
    if (utm) sessionStorage.setItem("bha-utm", utm);
    return utm || sessionStorage.getItem("bha-utm") || "";
  } catch {
    return "";
  }
}

const PROFILS = ["Étudiant", "École", "Entreprise"] as const;
type Profil = (typeof PROFILS)[number];

const LABEL_ORGANISATION: Record<Profil, string> = {
  Étudiant: "Ton école",
  École: "Votre école",
  Entreprise: "Votre entreprise",
};

const champBase =
  "w-full min-h-[44px] rounded-xl border hairline bg-bg px-4 py-3 text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-bordeaux focus:border-bordeaux transition";

export default function LivreBlancForm({
  livret = "kit-alternance",
  source,
  masquerProfil = false,
}: {
  livret?: LivretSlug;
  source?: string;
  // Sur une landing mono-audience, le choix de profil est du bruit : on le
  // masque et le profil par défaut du livret est envoyé tel quel.
  masquerProfil?: boolean;
}) {
  const L = LIVRETS[livret];

  useEffect(() => {
    utmCourante();
  }, []);
  const [profil, setProfil] = useState<Profil>(L.profilDefaut);
  const [newsletter, setNewsletter] = useState(false);
  const [contact, setContact] = useState(false);
  const [envoi, setEnvoi] = useState(false);
  const [envoye, setEnvoye] = useState(false);
  const [champs, setChamps] = useState<Record<string, string>>({});
  const [erreur, setErreur] = useState("");

  const prenomRef = useRef<HTMLInputElement>(null);
  const nomRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const telRef = useRef<HTMLInputElement>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (envoi) return;

    const data = new FormData(event.currentTarget);
    const utm = utmCourante();
    const payload = {
      nom: String(data.get("nom") || ""),
      prenom: String(data.get("prenom") || ""),
      email: String(data.get("email") || ""),
      organisation: String(data.get("organisation") || ""),
      telephone: String(data.get("telephone") || ""),
      contact,
      newsletter,
      site: String(data.get("site") || ""),
      profil,
      livret: L.slug,
      source: (source || L.sourceDefaut) + (utm ? ` · utm:${utm}` : ""),
    };

    setChamps({});
    setErreur("");
    setEnvoi(true);

    try {
      const reponse = await fetch("/api/livre-blanc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const resultat = await reponse.json().catch(() => ({}));

      if (!reponse.ok) {
        if (resultat.champs) {
          setChamps(resultat.champs);
          if (resultat.champs.prenom) prenomRef.current?.focus();
          else if (resultat.champs.nom) nomRef.current?.focus();
          else if (resultat.champs.email) emailRef.current?.focus();
          else if (resultat.champs.telephone) telRef.current?.focus();
        } else {
          setErreur(
            resultat.error ||
              (L.registre === "tu"
                ? "L'envoi a échoué. Réessaie dans un instant."
                : "L'envoi a échoué. Réessayez dans un instant."),
          );
        }
        return;
      }

      track("livret_submit", { livret: L.slug, newsletter });
      setEnvoye(true);
    } catch {
      setErreur(
        L.registre === "tu"
          ? "Connexion impossible. Vérifie ta connexion et réessaie."
          : "Connexion impossible. Vérifiez votre connexion et réessayez.",
      );
    } finally {
      setEnvoi(false);
    }
  }

  if (envoye) {
    return (
      <div
        role="status"
        className="border hairline bg-card rounded-2xl p-8 md:p-10 text-center"
      >
        <div className="w-12 h-12 rounded-full bg-bordeaux text-cream grid place-items-center mx-auto">
          <Check className="w-6 h-6" />
        </div>
        <h3 className="serif text-2xl md:text-3xl mt-6">{L.ui.succesTitre}</h3>
        <p className="mt-3 text-muted leading-relaxed max-w-md mx-auto">{L.ui.succes}</p>
        <a
          href={L.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-2 bg-bordeaux text-cream px-7 py-4 rounded-full font-medium hover:bg-bordeaux-soft transition"
        >
          {L.ui.ouvrir}
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="border hairline bg-card rounded-2xl p-6 md:p-8"
    >
      <fieldset className={masquerProfil ? "hidden" : undefined}>
        <legend className="text-sm font-medium text-ink mb-3">
          {L.registre === "tu" ? "Tu es" : "Vous êtes"}
        </legend>
        <div className="flex flex-wrap gap-2">
          {PROFILS.map((p) => (
            <label
              key={p}
              className={`min-h-[44px] px-5 flex items-center rounded-full border cursor-pointer transition text-sm ${
                profil === p
                  ? "bg-bordeaux text-cream border-bordeaux"
                  : "hairline bg-bg text-muted hover:text-ink"
              }`}
            >
              <input
                type="radio"
                name="profil"
                value={p}
                checked={profil === p}
                onChange={() => setProfil(p)}
                className="sr-only"
              />
              {p}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="lb-prenom" className="block text-sm font-medium text-ink mb-2">
            Prénom <span className="text-bordeaux">*</span>
          </label>
          <input
            ref={prenomRef}
            id="lb-prenom"
            name="prenom"
            type="text"
            required
            autoComplete="given-name"
            aria-invalid={Boolean(champs.prenom)}
            aria-describedby={champs.prenom ? "lb-prenom-erreur" : undefined}
            className={champBase}
          />
          {champs.prenom && (
            <p id="lb-prenom-erreur" role="alert" className="mt-2 text-sm text-bordeaux">
              {champs.prenom}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="lb-nom" className="block text-sm font-medium text-ink mb-2">
            Nom <span className="text-bordeaux">*</span>
          </label>
          <input
            ref={nomRef}
            id="lb-nom"
            name="nom"
            type="text"
            required
            autoComplete="family-name"
            aria-invalid={Boolean(champs.nom)}
            aria-describedby={champs.nom ? "lb-nom-erreur" : undefined}
            className={champBase}
          />
          {champs.nom && (
            <p id="lb-nom-erreur" role="alert" className="mt-2 text-sm text-bordeaux">
              {champs.nom}
            </p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="lb-email" className="block text-sm font-medium text-ink mb-2">
          Adresse mail <span className="text-bordeaux">*</span>
        </label>
        <input
          ref={emailRef}
          id="lb-email"
          name="email"
          type="email"
          inputMode="email"
          required
          autoComplete="email"
          aria-invalid={Boolean(champs.email)}
          aria-describedby={champs.email ? "lb-email-erreur" : "lb-email-aide"}
          className={champBase}
        />
        {champs.email ? (
          <p id="lb-email-erreur" role="alert" className="mt-2 text-sm text-bordeaux">
            {champs.email}
          </p>
        ) : (
          <p id="lb-email-aide" className="mt-2 text-sm text-muted">
            {L.ui.aideEmail}
          </p>
        )}
      </div>

      <div className="mt-4 grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="lb-organisation"
            className="block text-sm font-medium text-ink mb-2"
          >
            {LABEL_ORGANISATION[profil]}
          </label>
          <input
            id="lb-organisation"
            name="organisation"
            type="text"
            autoComplete="organization"
            className={champBase}
          />
        </div>
        <div>
          <label htmlFor="lb-tel" className="block text-sm font-medium text-ink mb-2">
            Téléphone {contact && <span className="text-bordeaux">*</span>}
          </label>
          <input
            ref={telRef}
            id="lb-tel"
            name="telephone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required={contact}
            aria-invalid={Boolean(champs.telephone)}
            aria-describedby={champs.telephone ? "lb-tel-erreur" : undefined}
            className={champBase}
          />
          {champs.telephone && (
            <p id="lb-tel-erreur" role="alert" className="mt-2 text-sm text-bordeaux">
              {champs.telephone}
            </p>
          )}
        </div>
      </div>

      <label className="mt-5 flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          name="newsletter"
          checked={newsletter}
          onChange={(e) => setNewsletter(e.target.checked)}
          className="mt-1 w-5 h-5 rounded border-border text-bordeaux focus:ring-2 focus:ring-bordeaux"
        />
        <span className="text-sm text-muted leading-relaxed">{L.ui.labelNewsletter}</span>
      </label>

      <label className="mt-3.5 flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          name="contact"
          checked={contact}
          onChange={(e) => setContact(e.target.checked)}
          className="mt-1 w-5 h-5 rounded border-border text-bordeaux focus:ring-2 focus:ring-bordeaux"
        />
        <span className="text-sm text-muted leading-relaxed">{L.ui.labelContact}</span>
      </label>

      {contact && (
        <p className="mt-2.5 ml-8 text-sm text-muted leading-relaxed">{L.ui.noteTel}</p>
      )}

      {/* Champ piège anti-bot : jamais visible, jamais rempli par un humain. */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="lb-site">Ne pas remplir</label>
        <input id="lb-site" name="site" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {erreur && (
        <p role="alert" className="mt-5 text-sm text-bordeaux">
          {erreur}
        </p>
      )}

      <button
        type="submit"
        disabled={envoi}
        className="mt-6 w-full min-h-[52px] inline-flex items-center justify-center gap-2 bg-bordeaux text-cream px-7 rounded-full font-medium hover:bg-bordeaux-soft transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {envoi ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Envoi
          </>
        ) : (
          L.ui.cta
        )}
      </button>

      <details className="mt-4 text-xs text-muted leading-relaxed">
        <summary className="cursor-pointer underline decoration-dotted hover:text-ink">
          {L.registre === "tu"
            ? "Gratuit, accès immédiat. Ce que deviennent tes données"
            : "Gratuit, accès immédiat. Ce que deviennent vos données"}
        </summary>
        <p className="mt-2">
          {L.ui.consentement}{" "}
          <a href="mailto:hierso.boris@gmail.com" className="underline hover:text-ink">
            hierso.boris@gmail.com
          </a>
          . Détail et voies de recours sur la page{" "}
          <Link href="/rgpd" className="underline hover:text-ink">
            Données personnelles
          </Link>
          .
        </p>
      </details>
    </form>
  );
}
