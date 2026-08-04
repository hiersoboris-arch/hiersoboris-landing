import type { Livret } from "./livre-blanc";

const FROM = "Boris Hierso Alphandéry <kit@mail.hiersoboris.fr>";
const REPLY_TO = "hierso.boris@gmail.com";

type Destinataire = {
  prenom: string;
  email: string;
  telephone: string;
  contact: boolean;
  newsletter: boolean;
};

type Message = { objet: string; corps: string[]; rgpd: string };

// Un gabarit d'email par livret : le registre (tu/vous) et le contenu diffèrent
// trop pour être factorisés proprement.
function composer(d: Destinataire, livret: Livret): Message {
  if (livret.slug === "cout-alternant") {
    const collectees = ["votre prénom", "votre nom", "votre adresse mail"];
    if (d.telephone) collectees.push("votre numéro de téléphone");
    return {
      objet: "Votre guide : combien coûte vraiment un alternant en 2026",
      corps: [
        d.prenom ? `Bonjour ${d.prenom},` : "Bonjour,",
        "Voici votre guide sur le coût réel d'un alternant en 2026 :",
        livret.url,
        "Vous y trouverez les grilles de rémunération 2026, le détail des aides de l'État et de l'Agefiph, trois exemples chiffrés aides déduites, le cas des profils de plus de 30 ans et vos démarches dans l'ordre. La page est mise à jour à chaque changement réglementaire : gardez le lien.",
        "Si vous cherchez un alternant Sales, je pré-qualifie les profils avant de vous les présenter. Les postes ouverts sont sur https://hiersoboris.fr/alternance, et vous pouvez répondre directement à ce message.",
        "Bien à vous,\nBoris",
      ],
      rgpd: `Vous recevez ce message parce que vous avez demandé le guide sur hiersoboris.fr. Je conserve ${collectees.join(", ")} pour vous envoyer ce guide${
        d.contact ? ", vous recontacter au sujet du recrutement d'un alternant" : ""
      }${
        d.newsletter
          ? ", et vous envoyer chaque nouveau livre blanc à sa sortie (désinscription en un clic dans chaque email)"
          : ""
      }. Ces informations ne sont ni revendues ni transmises à un tiers, et sont supprimées au bout de 3 ans sans contact. Pour y accéder, les corriger ou demander leur suppression : répondez simplement à ce message.`,
    };
  }

  const collectees = ["ton prénom", "ton nom", "ton adresse mail"];
  if (d.telephone) collectees.push("ton numéro de téléphone");
  return {
    objet: "Ton kit : décroche ton alternance",
    corps: [
      d.prenom ? `Hello ${d.prenom},` : "Hello,",
      "Voici ton kit pour décrocher ton alternance :",
      livret.url,
      "Tu y trouveras les 8 réponses d'entretien à préparer, la méthode des 3 KPIs par expérience, les deux versions de CV (ATS et visuel), un mini-CRM de candidatures et de quoi optimiser ton LinkedIn.",
      "Un conseil : ne lis pas tout d'un coup. Prépare d'abord tes 8 réponses, le reste servira au fil de ta recherche.",
      "Les offres que je sélectionne à la source sont ici : https://hiersoboris.fr/alternance\nSi l'une d'elles te parle, réponds-moi avec sa référence.",
      "Bien à toi,\nBoris",
    ],
    rgpd: `Tu reçois ce message parce que tu as demandé le kit sur hiersoboris.fr/alternance. Je conserve ${collectees.join(", ")} pour t'envoyer ce kit${
      d.contact ? ", te recontacter au sujet des offres d'alternance" : ""
    }${
      d.newsletter
        ? ", et t'envoyer chaque nouveau livre blanc à sa sortie (désinscription en un clic dans chaque email)"
        : ""
    }. Ces informations ne sont ni revendues ni transmises à un tiers, et sont supprimées au bout de 3 ans sans contact. Pour y accéder, les corriger ou demander leur suppression : réponds simplement à ce message.`,
  };
}

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function paragrapheHtml(bloc: string, livret: Livret) {
  if (bloc === livret.url) {
    return `<p><a href="${livret.url}" style="display:inline-block;background:#7C2A38;color:#F4EFE6;text-decoration:none;padding:14px 28px;border-radius:999px;font-weight:500">${escapeHtml(livret.ui.ouvrir)}</a></p>`;
  }
  const contenu = escapeHtml(bloc)
    .replace(/https:\/\/hiersoboris\.fr\/alternance/g, '<a href="https://hiersoboris.fr/alternance" style="color:#7C2A38">hiersoboris.fr/alternance</a>')
    .replace(/\n/g, "<br>");
  return `<p>${contenu}</p>`;
}

/**
 * Envoie l'email de confirmation avec le lien du livret. Ne fait jamais échouer
 * la demande : la personne a déjà le livret à l'écran, un mail perdu ne doit pas
 * bloquer.
 */
export async function envoyerLivret(d: Destinataire, livret: Livret) {
  const cle = process.env.RESEND_API_KEY;
  if (!cle) {
    console.warn("RESEND_API_KEY absente : email de confirmation non envoyé.");
    return;
  }

  const message = composer(d, livret);
  const texte = `${message.corps.join("\n\n")}\n\n---\n${message.rgpd}`;
  const html = `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:16px;line-height:1.6;color:#1F1B17;max-width:560px">
${message.corps.map((bloc) => paragrapheHtml(bloc, livret)).join("\n")}
<hr style="border:none;border-top:1px solid #E7E1D7;margin:28px 0">
<p style="font-size:13px;color:#6B6055;line-height:1.5">${escapeHtml(message.rgpd)}</p>
</div>`;

  try {
    const reponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cle}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [d.email],
        reply_to: REPLY_TO,
        subject: message.objet,
        text: texte,
        html,
      }),
    });

    if (!reponse.ok) {
      console.error("Resend a refusé l'envoi :", reponse.status, await reponse.text());
    }
  } catch (erreur) {
    console.error("Appel Resend impossible :", erreur);
  }
}
