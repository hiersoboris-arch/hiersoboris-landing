"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { track } from "@vercel/analytics";
import { QUESTIONS, SCORE_MAX } from "@/lib/diagnostic";

// Même mémorisation d'UTM que le formulaire des livres blancs.
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

type Resultat = {
  score: number;
  max: number;
  titre: string;
  texte: string;
  recos: string[];
};

const champBase =
  "w-full min-h-[44px] rounded-xl border hairline bg-bg px-4 py-3 text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-bordeaux focus:border-bordeaux transition";

export default function DiagnosticForm() {
  const [reponses, setReponses] = useState<(number | null)[]>(
    Array(QUESTIONS.length).fill(null),
  );
  const [newsletter, setNewsletter] = useState(false);
  const [contact, setContact] = useState(false);
  const [envoi, setEnvoi] = useState(false);
  const [resultat, setResultat] = useState<Resultat | null>(null);
  const [champs, setChamps] = useState<Record<string, string>>({});
  const [erreur, setErreur] = useState("");
  const identiteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    utmCourante();
  }, []);

  const repondues = reponses.filter((r) => r !== null).length;
  const toutesRepondues = repondues === QUESTIONS.length;

  function choisir(qi: number, oi: number) {
    setReponses((prev) => {
      const suiv = [...prev];
      suiv[qi] = oi;
      return suiv;
    });
    // Dernière réponse : on amène le formulaire d'identité à l'écran.
    if (qi === QUESTIONS.length - 1) {
      setTimeout(() => identiteRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 150);
    }
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (envoi) return;
    if (!toutesRepondues) {
      setErreur("Réponds aux 10 questions avant d'envoyer.");
      return;
    }
    const data = new FormData(event.currentTarget);
    const utm = utmCourante();
    setChamps({});
    setErreur("");
    setEnvoi(true);
    try {
      const reponse = await fetch("/api/diagnostic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reponses,
          prenom: String(data.get("prenom") || ""),
          nom: String(data.get("nom") || ""),
          email: String(data.get("email") || ""),
          telephone: String(data.get("telephone") || ""),
          linkedin: String(data.get("linkedin") || ""),
          contact,
          newsletter,
          site: String(data.get("site") || ""),
          source: "hiersoboris.fr/diagnostic" + (utm ? ` · utm:${utm}` : ""),
        }),
      });
      const res = await reponse.json().catch(() => ({}));
      if (!reponse.ok) {
        if (res.champs) setChamps(res.champs);
        else setErreur(res.error || "L'envoi a échoué. Réessaie dans un instant.");
        return;
      }
      track("diagnostic_submit", { score: res.score, newsletter });
      setResultat(res);
    } catch {
      setErreur("Connexion impossible. Vérifie ta connexion et réessaie.");
    } finally {
      setEnvoi(false);
    }
  }

  if (resultat) {
    return (
      <div role="status" className="border hairline bg-card rounded-2xl p-8 md:p-10">
        <div className="w-12 h-12 rounded-full bg-bordeaux text-cream grid place-items-center">
          <Check className="w-6 h-6" />
        </div>
        <div className="mt-6 text-xs uppercase tracking-[0.18em] text-muted">
          Ton résultat
        </div>
        <h2 className="serif text-3xl md:text-4xl mt-2">
          {resultat.score}/{resultat.max} · {resultat.titre}
        </h2>
        <p className="mt-4 text-muted leading-relaxed">{resultat.texte}</p>
        <div className="mt-6 text-sm font-medium text-ink">
          Tes 3 priorités (le détail est parti par mail) :
        </div>
        <ul className="mt-3 space-y-2.5">
          {resultat.recos.map((r) => (
            <li key={r} className="flex gap-3 text-muted leading-relaxed">
              <Check className="w-4 h-4 text-bordeaux shrink-0 mt-1.5" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
        <a
          href="https://calendly.com/hierso-boris/echange"
          className="mt-8 inline-flex items-center gap-2 bg-bordeaux text-cream px-7 py-4 rounded-full font-medium hover:bg-bordeaux-soft transition"
        >
          Identifier le levier n°1 en 30 minutes
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      {/* Progression */}
      <div className="sticky top-16 md:top-20 z-10 -mx-6 px-6 py-3 bg-[#FAF7F2]/95 backdrop-blur-sm border-b hairline mb-8">
        <div className="max-w-3xl flex items-center gap-4">
          <div className="flex-1 h-1.5 rounded-full bg-border overflow-hidden">
            <div
              className="h-full bg-bordeaux transition-all duration-300"
              style={{ width: `${(repondues / QUESTIONS.length) * 100}%` }}
            />
          </div>
          <span className="text-sm text-muted tabular-nums shrink-0">
            {repondues}/{QUESTIONS.length}
          </span>
        </div>
      </div>

      <ol className="space-y-10 max-w-3xl">
        {QUESTIONS.map((q, qi) => (
          <li key={q.q}>
            <fieldset>
              <legend className="serif text-xl md:text-2xl leading-snug">
                <span className="text-bordeaux mr-2">{qi + 1}.</span>
                {q.q}
              </legend>
              <div className="mt-4 grid gap-2.5">
                {q.options.map((opt, oi) => (
                  <label
                    key={opt}
                    className={`min-h-[48px] px-5 py-3 flex items-center rounded-xl border cursor-pointer transition text-sm leading-snug ${
                      reponses[qi] === oi
                        ? "bg-bordeaux text-cream border-bordeaux"
                        : "hairline bg-card text-ink hover:border-accent"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`q-${qi}`}
                      checked={reponses[qi] === oi}
                      onChange={() => choisir(qi, oi)}
                      className="sr-only"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </fieldset>
          </li>
        ))}
      </ol>

      {/* Identité + envoi */}
      <div
        ref={identiteRef}
        className="mt-12 max-w-3xl border hairline bg-card rounded-2xl p-6 md:p-8"
      >
        <h2 className="serif text-2xl">Ton résultat détaillé, par mail.</h2>
        <p className="mt-2 text-sm text-muted leading-relaxed">
          Score sur {SCORE_MAX}, ton niveau, et les 3 priorités que je te conseille.
        </p>

        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="dg-prenom" className="block text-sm font-medium text-ink mb-2">
              Prénom <span className="text-bordeaux">*</span>
            </label>
            <input
              id="dg-prenom"
              name="prenom"
              type="text"
              required
              autoComplete="given-name"
              aria-invalid={Boolean(champs.prenom)}
              className={champBase}
            />
            {champs.prenom && (
              <p role="alert" className="mt-2 text-sm text-bordeaux">{champs.prenom}</p>
            )}
          </div>
          <div>
            <label htmlFor="dg-nom" className="block text-sm font-medium text-ink mb-2">
              Nom
            </label>
            <input id="dg-nom" name="nom" type="text" autoComplete="family-name" className={champBase} />
          </div>
        </div>

        <div className="mt-4 grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="dg-email" className="block text-sm font-medium text-ink mb-2">
              Adresse mail <span className="text-bordeaux">*</span>
            </label>
            <input
              id="dg-email"
              name="email"
              type="email"
              inputMode="email"
              required
              autoComplete="email"
              aria-invalid={Boolean(champs.email)}
              className={champBase}
            />
            {champs.email && (
              <p role="alert" className="mt-2 text-sm text-bordeaux">{champs.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="dg-tel" className="block text-sm font-medium text-ink mb-2">
              Téléphone {contact && <span className="text-bordeaux">*</span>}
            </label>
            <input
              id="dg-tel"
              name="telephone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              required={contact}
              aria-invalid={Boolean(champs.telephone)}
              className={champBase}
            />
            {champs.telephone && (
              <p role="alert" className="mt-2 text-sm text-bordeaux">{champs.telephone}</p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="dg-linkedin" className="block text-sm font-medium text-ink mb-2">
            Profil LinkedIn
          </label>
          <input
            id="dg-linkedin"
            name="linkedin"
            type="url"
            inputMode="url"
            autoComplete="url"
            placeholder="linkedin.com/in/..."
            className={champBase}
          />
        </div>

        <label className="mt-5 flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={newsletter}
            onChange={(e) => setNewsletter(e.target.checked)}
            className="mt-1 w-5 h-5 rounded border-border text-bordeaux focus:ring-2 focus:ring-bordeaux"
          />
          <span className="text-sm text-muted leading-relaxed">
            Je veux recevoir les prochains livres blancs par email dès leur sortie. En
            août, ça peut aller jusqu&apos;à un par jour ; désinscription en un clic.
          </span>
        </label>

        <label className="mt-3.5 flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={contact}
            onChange={(e) => setContact(e.target.checked)}
            className="mt-1 w-5 h-5 rounded border-border text-bordeaux focus:ring-2 focus:ring-bordeaux"
          />
          <span className="text-sm text-muted leading-relaxed">
            Je souhaite que Boris me rappelle pour débriefer mon diagnostic.
          </span>
        </label>

        {/* Champ piège anti-bot : jamais visible, jamais rempli par un humain. */}
        <div aria-hidden="true" className="hidden">
          <label htmlFor="dg-site">Ne pas remplir</label>
          <input id="dg-site" name="site" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        {erreur && (
          <p role="alert" className="mt-5 text-sm text-bordeaux">{erreur}</p>
        )}

        <button
          type="submit"
          disabled={envoi}
          className="mt-6 w-full min-h-[52px] inline-flex items-center justify-center gap-2 bg-bordeaux text-cream px-7 rounded-full font-medium hover:bg-bordeaux-soft transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {envoi ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Calcul en cours
            </>
          ) : (
            "Voir mon résultat"
          )}
        </button>

        <details className="mt-4 text-xs text-muted leading-relaxed">
          <summary className="cursor-pointer underline decoration-dotted hover:text-ink">
            Gratuit, résultat immédiat. Ce que deviennent tes données
          </summary>
          <p className="mt-2">
            En cliquant sur « Voir mon résultat », tu acceptes que Boris Hierso
            Alphandéry conserve ton prénom, ton email, tes réponses et, si tu les as
            fournis, ton nom et ton téléphone, pour t&apos;envoyer ton résultat et, si
            tu l&apos;as demandé, te recontacter. Données ni revendues ni transmises,
            supprimées après 3 ans sans contact. Accès, correction ou suppression à
            tout moment :{" "}
            <a href="mailto:hierso.boris@gmail.com" className="underline hover:text-ink">
              hierso.boris@gmail.com
            </a>
            . Détail sur la page{" "}
            <Link href="/rgpd" className="underline hover:text-ink">
              Données personnelles
            </Link>
            .
          </p>
        </details>
      </div>
    </form>
  );
}
