import { NextResponse } from "next/server";

// Inscription seule à la série des livres blancs : une ligne dans la base
// Notion "Leads · Livre blanc" avec Newsletter cochée, sans livret associé.
const NOTION_DB_ID = "18e885807cab4ac784eb25c5dbc61db1";
const NOTION_VERSION = "2022-06-28";

type Payload = {
  email?: string;
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

  // Bot : on répond 200 sans rien enregistrer, pour ne pas lui signaler le piège.
  if (clean(body.site)) return NextResponse.json({ ok: true });

  const email = clean(body.email, 200);
  const source = clean(body.source, 120) || "hiersoboris.fr/livres-blancs";

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json(
      { error: "Cette adresse mail ne semble pas valide." },
      { status: 400 },
    );
  }

  const token = process.env.NOTION_TOKEN;
  if (!token) {
    console.error("NOTION_TOKEN absent : l'inscription ne peut pas être enregistrée.");
    return NextResponse.json(
      { error: "L'inscription est indisponible pour le moment." },
      { status: 503 },
    );
  }

  try {
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
          Nom: { title: [{ text: { content: email } }] },
          Email: { email },
          Newsletter: { checkbox: true },
          Source: { rich_text: [{ text: { content: source } }] },
        },
      }),
    });

    if (!reponse.ok) {
      console.error("Notion a refusé l'inscription :", reponse.status, await reponse.text());
      return NextResponse.json(
        { error: "L'inscription a échoué. Réessaie dans un instant." },
        { status: 502 },
      );
    }
  } catch (erreur) {
    console.error("Appel Notion impossible :", erreur);
    return NextResponse.json(
      { error: "L'inscription a échoué. Réessaie dans un instant." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
