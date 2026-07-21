import { KIT_URL } from "./livre-blanc";

const FROM = "Boris Hierso Alphandéry <kit@mail.hiersoboris.fr>";
const REPLY_TO = "hierso.boris@gmail.com";

type Destinataire = {
  prenom: string;
  email: string;
  telephone: string;
  contact: boolean;
};

function mentionsDonnees(d: Destinataire) {
  const collectees = ["ton prénom", "ton nom", "ton adresse mail"];
  if (d.telephone) collectees.push("ton numéro de téléphone");
  return `Tu reçois ce message parce que tu as demandé le kit sur hiersoboris.fr/alternance. Je conserve ${collectees.join(", ")} pour t'envoyer ce kit${
    d.contact ? " et te recontacter au sujet des offres d'alternance" : ""
  }. Ces informations ne sont ni revendues ni transmises à un tiers, et sont supprimées au bout de 3 ans sans contact. Pour y accéder, les corriger ou demander leur suppression : réponds simplement à ce message.`;
}

/**
 * Envoie l'email de confirmation. Ne fait jamais échouer la demande :
 * la personne a déjà le kit à l'écran, un mail perdu ne doit pas bloquer.
 */
export async function envoyerKit(d: Destinataire) {
  const cle = process.env.RESEND_API_KEY;
  if (!cle) {
    console.warn("RESEND_API_KEY absente : email de confirmation non envoyé.");
    return;
  }

  const rgpd = mentionsDonnees(d);
  const bonjour = d.prenom ? `Hello ${d.prenom},` : "Hello,";

  const texte = `${bonjour}

Voici ton kit pour décrocher ton alternance :
${KIT_URL}

Tu y trouveras les 8 réponses d'entretien à préparer, la méthode des 3 KPIs par expérience, les deux versions de CV (ATS et visuel), un mini-CRM de candidatures et de quoi optimiser ton LinkedIn.

Un conseil : ne lis pas tout d'un coup. Prépare d'abord tes 8 réponses, le reste servira au fil de ta recherche.

Les offres que je sélectionne à la source sont ici : https://hiersoboris.fr/alternance
Si l'une d'elles te parle, réponds-moi avec sa référence.

Bien à toi,
Boris

---
${rgpd}`;

  const html = `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:16px;line-height:1.6;color:#1F1B17;max-width:560px">
<p>${bonjour}</p>
<p>Voici ton kit pour décrocher ton alternance :</p>
<p><a href="${KIT_URL}" style="display:inline-block;background:#7C2A38;color:#F4EFE6;text-decoration:none;padding:14px 28px;border-radius:999px;font-weight:500">Ouvrir le kit</a></p>
<p>Tu y trouveras les 8 réponses d'entretien à préparer, la méthode des 3 KPIs par expérience, les deux versions de CV (ATS et visuel), un mini-CRM de candidatures et de quoi optimiser ton LinkedIn.</p>
<p>Un conseil : ne lis pas tout d'un coup. Prépare d'abord tes 8 réponses, le reste servira au fil de ta recherche.</p>
<p>Les offres que je sélectionne à la source sont <a href="https://hiersoboris.fr/alternance" style="color:#7C2A38">sur cette page</a>. Si l'une d'elles te parle, réponds-moi avec sa référence.</p>
<p>Bien à toi,<br>Boris</p>
<hr style="border:none;border-top:1px solid #E7E1D7;margin:28px 0">
<p style="font-size:13px;color:#6B6055;line-height:1.5">${rgpd}</p>
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
        subject: "Ton kit : décroche ton alternance",
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
