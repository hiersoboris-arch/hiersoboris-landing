import { NextResponse } from "next/server";

// Lien redirecteur vers le site de Pitchbase, avec la source pour les stats.
export function GET() {
  return NextResponse.redirect(
    "https://pitchbase.app/?utm_source=hiersoboris&utm_medium=site&utm_campaign=boris",
    307,
  );
}
