import { NextResponse } from "next/server";
import { getLivret } from "@/lib/livre-blanc";
import { envoyerLivret } from "@/lib/mail-kit";

// Base Notion "Leads · Livre blanc" (hub Placement).
const NOTION_DB_ID = "18e885807cab4ac784eb25c5dbc61db1";
const NOTION_VERSION = "2022-06-28";

const PROFILS = ["Étudiant", "École", "Entreprise"] as const;

type Payload = {
  nom?: string;
  prenom?: string;
  email?: string;
  organisation?: string;
  telephone?: string;
  contact?: boolean;
  profil?: string;
  source?: string;
  livret?: string;
  // Champ piège : rempli uniquement par les bots, jamais affiché.
  site?: string;
};

function clean(value: unknown, max = 200) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function texte(value: string) {
  return value ? { rich_text: [{ text: { content: value } }] } : { rich_text: [] };
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

  // Un slug inconnu retombe sur le kit historique (anciens clients sans champ livret).
  const livret = getLivret(clean(body.livret, 60));

  const nom = clean(body.nom, 120);
  const email = clean(body.email, 200);
  const prenom = clean(body.prenom, 120);
  const organisation = clean(body.organisation, 200);
  const telephone = clean(body.telephone, 40);
  const source = clean(body.source, 120) || livret.sourceDefaut;
  const profil = PROFILS.includes(body.profil as (typeof PROFILS)[number])
    ? (body.profil as string)
    : "Non précisé";

  const veutContact = body.contact === true;

  const champs: Record<string, string> = {};
  if (!prenom) champs.prenom = livret.erreurs.prenom;
  if (!nom) champs.nom = livret.erreurs.nom;
  if (!email) champs.email = livret.erreurs.email;
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
    champs.email = livret.erreurs.emailInvalide;

  // Le téléphone n'est exigé que si la personne demande à être rappelée :
  // sans numéro, il n'y a pas de rappel possible.
  if (veutContact) {
    const chiffres = telephone.replace(/\D/g, "");
    if (!telephone) champs.telephone = livret.erreurs.telManquant;
    else if (chiffres.length < 9) champs.telephone = livret.erreurs.telIncomplet;
  }

  if (Object.keys(champs).length > 0) {
    return NextResponse.json({ champs }, { status: 400 });
  }

  const token = process.env.NOTION_TOKEN;
  if (!token) {
    console.error("NOTION_TOKEN absent : le lead ne peut pas être enregistré.");
    return NextResponse.json(
      { error: "Le formulaire est indisponible pour le moment." },
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
          Nom: { title: [{ text: { content: nom } }] },
          Prénom: texte(prenom),
          Email: { email },
          "École / Entreprise": texte(organisation),
          Téléphone: telephone ? { phone_number: telephone } : { phone_number: null },
          "Souhaite être recontacté": { checkbox: veutContact },
          Profil: { select: { name: profil } },
          "Livre blanc": { select: { name: livret.notionSelect } },
          Source: texte(source),
        },
      }),
    });

    if (!reponse.ok) {
      const detail = await reponse.text();
      console.error("Notion a refusé le lead :", reponse.status, detail);
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
  await envoyerLivret({ prenom, email, telephone, contact: veutContact }, livret);

  return NextResponse.json({ ok: true });
}
