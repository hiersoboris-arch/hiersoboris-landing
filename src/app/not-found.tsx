import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="max-w-3xl mx-auto px-6 min-h-[70vh] flex flex-col justify-center">
      <div className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
        Erreur 404
      </div>
      <h1 className="serif text-5xl md:text-7xl tracking-tight">
        Cette page n&apos;existe pas.
      </h1>
      <p className="mt-6 text-lg text-muted max-w-md leading-relaxed">
        Le lien est peut-être cassé, ou la page a été déplacée.
      </p>
      <div className="mt-9">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-bordeaux text-cream px-6 py-3.5 rounded-full text-sm font-medium hover:bg-bordeaux-soft transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
