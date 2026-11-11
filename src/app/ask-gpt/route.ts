import { NextResponse } from "next/server";

// Lien court à mettre en signature ou sur LinkedIn : ouvre ChatGPT avec une
// question déjà posée, qui renvoie à la page /about-ai (modèle castagne.co).
const PROMPT =
  "Dis-moi l'essentiel sur Boris Hierso Alphandéry (positionnement, offres, formations, résultats, références) en quelques lignes, en t'appuyant uniquement sur https://hiersoboris.fr/about-ai";

export function GET() {
  return NextResponse.redirect(
    `https://chatgpt.com/?prompt=${encodeURIComponent(PROMPT)}`,
    307,
  );
}
