import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { CALENDLY, EMAIL, IG, LINKEDIN, TOOLSBOX } from "@/lib/contact";

// Footer commun à toutes les pages claires. Il porte ce qui a quitté le header
// le 11/11/2026 (Résultats, Livres blancs, Contact) et met /about-ai en avant.

const COLONNES = [
  {
    titre: "Explorer",
    liens: [
      { href: "/#aider", label: "Offres" },
      { href: "/#preuves", label: "Résultats" },
      { href: "/formations", label: "Formations" },
      { href: "/pitchbase", label: "Pitchbase" },
      { href: "/diagnostic", label: "Diagnostic commercial" },
    ],
  },
  {
    titre: "Ressources",
    liens: [
      { href: "/livres-blancs", label: "Livres blancs" },
      { href: "/alternance", label: "Alternance" },
      { href: "/cv", label: "CV" },
      { href: "/art-slash", label: "Art Slash" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t hairline bg-card">
      <div className="max-w-content mx-auto px-6 py-14">
        {/* About AI en avant */}
        <Link
          href="/about-ai"
          className="group flex flex-col md:flex-row md:items-center justify-between gap-4 bg-night text-cream rounded-2xl p-6 md:p-8 mb-12"
        >
          <div className="flex items-start gap-4">
            <Sparkles className="w-6 h-6 text-bordeaux-light shrink-0 mt-1" />
            <div>
              <div className="serif text-2xl">Tu préfères demander à ton IA ?</div>
              <div className="mt-1 text-sm text-cream/75">
                Ma page pour ChatGPT, Claude et Perplexity : tout ce que je fais, en une question.
              </div>
            </div>
          </div>
          <span className="inline-flex items-center gap-2 bg-cream text-ink px-5 py-3 rounded-full text-sm font-medium self-start md:self-auto group-hover:gap-3 transition-all">
            Voir la page pour les IA
            <ArrowRight className="w-4 h-4" />
          </span>
        </Link>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">
          {COLONNES.map((c) => (
            <div key={c.titre}>
              <div className="kicker text-muted mb-4">{c.titre}</div>
              <ul className="space-y-3">
                {c.liens.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-ink hover:text-bordeaux transition">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div className="kicker text-muted mb-4">Contact</div>
            <ul className="space-y-3">
              <li>
                <a href={CALENDLY} className="text-ink hover:text-bordeaux transition">
                  Prendre 30 minutes
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="text-ink hover:text-bordeaux transition break-all">
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-ink hover:text-bordeaux transition">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={IG} target="_blank" rel="noopener noreferrer" className="text-ink hover:text-bordeaux transition">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="kicker text-muted mb-4">Outils et légal</div>
            <ul className="space-y-3">
              <li>
                <Link href="/about-ai" className="text-ink hover:text-bordeaux transition">
                  Pour les IA
                </Link>
              </li>
              <li>
                <a
                  href={TOOLSBOX}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-bordeaux transition inline-flex items-center gap-1.5"
                >
                  <Image src="/logos/toolsbox.png" alt="" width={14} height={14} className="rounded-[4px]" />
                  The Tools Box
                </a>
              </li>
              <li>
                <Link href="/mentions-legales" className="text-ink hover:text-bordeaux transition">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/rgpd" className="text-ink hover:text-bordeaux transition">
                  RGPD
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t hairline text-sm text-muted serif">
          Boris Hierso Alphandéry · {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
