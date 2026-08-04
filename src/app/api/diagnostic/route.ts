import { NextResponse } from "next/server";
import { QUESTIONS, SCORE_MAX, calculerScore, niveauPour } from "@/lib/diagnostic";
import { envoyerDiagnostic } from "@/lib/mail-diagnostic";

// Diagnostic commercial : le lead part dans la même base Notion que les
// livres blancs (select "Livre blanc" = "Diagnostic commercial"), avec le
// score en propriété et le détail des réponses dans le corps de la page.
const NOTION_DB_ID = "18e885807cab4ac784eb25c5dbc61db1";
const NOTION_VERSION = "2022-06-28";

type Payload = {
  reponses?: unknown;
  prenom?: string;
  nom?: string;
  email?: string;
  telephone?: string;
  contact?: boolean;
  newsletter?: boolean;
  source?: string;
  // Champ piège : rempli uniquement par les bots, jamais affiché.
  site?: string;
};

function clean(value: unknown, max = 200) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  if (clean(body.site)) return NextResponse.json({ ok: true });

  const reponses = Array.isArray(body.reponses)
    ? body.reponses.filter((r): r is number => typeof r === "number")
    : [];
  const score = calculerScore(reponses);
  if (score === null) {
    return NextResponse.json(
      { error: "Réponds aux 10 questions avant d'envoyer." },
      { status: 400 },
    );
  }

  const prenom = clean(body.prenom, 120);
  const nom = clean(body.nom, 120);
  const email = clean(body.email, 200);
  const telephone = clean(body.telephone, 40);
  const source = clean(body.source, 120) || "hiersoboris.fr/diagnostic";
  const veutContact = body.contact === true;
  const veutNewsletter = body.newsletter === true;

  const champs: Record<string, string> = {};
  if (!prenom) champs.prenom = "Indique ton prénom.";
  if (!email) champs.email = "Indique ton adresse mail.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
    champs.email = "Cette adresse mail ne semble pas valide.";
  if (veutContact) {
    const chiffres = telephone.replace(/\D/g, "");
    if (!telephone)
      champs.telephone = "Ajoute ton numéro : c'est par téléphone que je rappelle.";
    else if (chiffres.length < 9) champs.telephone = "Ce numéro ne semble pas complet.";
  }
  if (Object.keys(champs).length > 0) {
    return NextResponse.json({ champs }, { status: 400 });
  }

  const niveau = niveauPour(score);

  const token = process.env.NOTION_TOKEN;
  if (!token) {
    console.error("NOTION_TOKEN absent : le diagnostic ne peut pas être enregistré.");
    return NextResponse.json(
      { error: "Le diagnostic est indisponible pour le moment." },
      { status: 503 },
    );
  }

  try {
    const detail = QUESTIONS.map(
      (q, i) => `${i + 1}. ${q.q} → ${q.options[reponses[i]]} (${reponses[i]}/2)`,
    );
    const reponse = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Notion-Version": NOTION_VERSION,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        parent: { database_id: NOTION_DB_ID },
        properties: {
          Nom: { title: [{ text: { content: nom || prenom } }] },
          Prénom: { rich_text: [{ text: { content: prenom } }] },
          Email: { email },
          Téléphone: telephone ? { phone_number: telephone } : { phone_number: null },
          "Souhaite être recontacté": { checkbox: veutContact },
          Newsletter: { checkbox: veutNewsletter },
          "Livre blanc": { select: { name: "Diagnostic commercial" } },
          "Score diagnostic": { number: score },
          Profil: { select: { name: "Entreprise" } },
          Source: { rich_text: [{ text: { content: source } }] },
        },
        children: [
          {
            object: "block",
            type: "paragraph",
            paragraph: {
              rich_text: [
                {
                  text: {
                    content: `Résultat : ${score}/${SCORE_MAX} · ${niveau.titre}`,
                  },
                },
              ],
            },
          },
          ...detail.map((ligne) => ({
            object: "block" as const,
            type: "bulleted_list_item" as const,
            bulleted_list_item: { rich_text: [{ text: { content: ligne } }] },
          })),
        ],
      }),
    });

    if (!reponse.ok) {
      console.error("Notion a refusé le diagnostic :", reponse.status, await reponse.text());
      return NextResponse.json(
        { error: "L'envoi a échoué. Réessaie dans un instant." },
        { status: 502 },
      );
    }
  } catch (erreur) {
    console.error("Appel Notion impossible :", erreur);
    return NextResponse.json(
      { error: "L'envoi a échoué. Réessaie dans un instant." },
      { status: 502 },
    );
  }

  // Le lead est sauvegardé : l'email ne doit plus rien faire échouer.
  await envoyerDiagnostic(
    { prenom, email, telephone, contact: veutContact, newsletter: veutNewsletter },
    score,
    niveau,
    reponses,
  );

  return NextResponse.json({
    ok: true,
    score,
    max: SCORE_MAX,
    titre: niveau.titre,
    texte: niveau.texte,
    recos: niveau.recos,
  });
}
