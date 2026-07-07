"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { track } from "@vercel/analytics";

const CALENDLY = "https://calendly.com/hierso-boris/echange";

const LINKS = [
  { href: "/#aider", label: "Offres" },
  { href: "/#preuves", label: "Preuves" },
  { href: "/#ressources", label: "Ressources" },
  { href: "/art-slash", label: "Art Slash" },
  { href: "/#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-bg/90 backdrop-blur-md border-b hairline"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-content mx-auto w-full px-6 h-16 md:h-20 flex items-center justify-between">
        <Link
          href="/"
          className={`serif text-lg md:text-xl tracking-tight transition-colors ${
            solid ? "text-ink" : "text-cream"
          }`}
        >
          Boris Hierso Alphandéry
        </Link>

        <nav
          className={`hidden md:flex items-center gap-8 text-sm transition-colors ${
            solid ? "text-muted" : "text-cream/75"
          }`}
        >
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`transition ${
                solid ? "hover:text-ink" : "hover:text-cream"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={CALENDLY}
            onClick={() => track("cta_calendly", { loc: "header" })}
            className="inline-flex items-center gap-2 bg-bordeaux text-cream px-4 py-2 rounded-full text-sm font-medium hover:bg-bordeaux-soft transition"
          >
            <span className="hidden sm:inline">Prendre 30 minutes</span>
            <span className="sm:hidden">Échange</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            className={`md:hidden p-2 -mr-2 transition-colors ${
              solid ? "text-ink" : "text-cream"
            }`}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 top-16 bg-bg z-40 px-6 py-8">
          <nav className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="serif text-3xl text-ink py-3 border-b hairline"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={CALENDLY}
              onClick={() => {
                track("cta_calendly", { loc: "mobile-menu" });
                setOpen(false);
              }}
              className="mt-8 inline-flex items-center justify-center gap-2 bg-bordeaux text-cream px-6 py-4 rounded-full text-base font-medium"
            >
              Prendre 30 minutes
              <ArrowRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
