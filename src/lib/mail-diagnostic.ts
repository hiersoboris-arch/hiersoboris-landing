import { CALENDLY } from "./contact";
import { QUESTIONS, SCORE_MAX, type Niveau } from "./diagnostic";

const FROM = "Boris Hierso Alphandéry <kit@mail.hiersoboris.fr>";
const REPLY_TO = "hierso.boris@gmail.com";

type Destinataire = {
  prenom: string;
  email: string;
  telephone: string;
  contact: boolean;
  newsletter: boolean;
};

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/**
 * Envoie le résultat détaillé du diagnostic. Ne fait jamais échouer la
 * demande : le niveau est déjà affiché à l'écran, un mail perdu ne doit pas
 * bloquer.
 */
export async function envoyerDiagnostic(
  d: Destinataire,
  score: number,
  niveau: Niveau,
  reponses: number[],
) {
  const cle = process.env.RESEND_API_KEY;
  if (!cle) {
    console.warn("RESEND_API_KEY absente : email de diagnostic non envoyé.");
    return;
  }

  const bonjour = d.prenom ? `Hello ${d.prenom},` : "Hello,";
  const collectees = ["ton prénom", "ton adresse mail", "tes réponses au diagnostic"];
  if (d.telephone) collectees.push("ton numéro de téléphone");
  const rgpd = `Tu reçois ce message parce que tu as fait le diagnostic sur hiersoboris.fr/diagnostic. Je conserve ${collectees.join(", ")} pour t'envoyer ce résultat${
    d.contact ? ", te recontacter à ta demande" : ""
  }${
    d.newsletter
      ? ", et t'envoyer chaque nouveau livre blanc à sa sortie (désinscription en un clic dans chaque email)"
      : ""
  }. Ces informations ne sont ni revendues ni transmises à un tiers, et sont supprimées au bout de 3 ans sans contact. Pour y accéder, les corriger ou demander leur suppression : réponds simplement à ce message.`;

  const detail = QUESTIONS.map(
    (q, i) => `${i + 1}. ${q.q}\n   → ${q.options[reponses[i]]} (${reponses[i]}/2)`,
  ).join("\n");

  const texte = `${bonjour}

Ton diagnostic : ${score}/${SCORE_MAX} · ${niveau.titre}

${niveau.texte}

Les 3 priorités que je te conseille :
1. ${niveau.recos[0]}
2. ${niveau.recos[1]}
3. ${niveau.recos[2]}

Le détail de tes réponses :
${detail}

Si tu veux qu'on regarde ta situation ensemble, 30 minutes suffisent pour identifier le levier n°1 : ${CALENDLY}

Bien à toi,
Boris

---
${rgpd}`;

  const recosHtml = niveau.recos
    .map((r) => `<li style="margin-bottom:6px">${escapeHtml(r)}</li>`)
    .join("");
  const detailHtml = QUESTIONS.map(
    (q, i) =>
      `<p style="margin:0 0 10px"><strong>${i + 1}. ${escapeHtml(q.q)}</strong><br>→ ${escapeHtml(q.options[reponses[i]])} <span style="color:#6B6055">(${reponses[i]}/2)</span></p>`,
  ).join("");

  const html = `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:16px;line-height:1.6;color:#1F1B17;max-width:560px">
<p>${escapeHtml(bonjour)}</p>
<p style="font-size:20px"><strong>Ton diagnostic : ${score}/${SCORE_MAX} · ${escapeHtml(niveau.titre)}</strong></p>
<p>${escapeHtml(niveau.texte)}</p>
<p><strong>Les 3 priorités que je te conseille :</strong></p>
<ol>${recosHtml}</ol>
<hr style="border:none;border-top:1px solid #E7E1D7;margin:20px 0">
<p><strong>Le détail de tes réponses</strong></p>
${detailHtml}
<p><a href="${CALENDLY}" style="display:inline-block;background:#7C2A38;color:#F4EFE6;text-decoration:none;padding:14px 28px;border-radius:999px;font-weight:500">Identifier le levier n°1 en 30 minutes</a></p>
<p>Bien à toi,<br>Boris</p>
<hr style="border:none;border-top:1px solid #E7E1D7;margin:28px 0">
<p style="font-size:13px;color:#6B6055;line-height:1.5">${escapeHtml(rgpd)}</p>
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
        subject: `Ton diagnostic commercial : ${score}/${SCORE_MAX} · ${niveau.titre}`,
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
