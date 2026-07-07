/* eslint-disable @next/next/no-img-element */
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ArrowUp } from "lucide-react";

type Toile = { src: string; title: string; w?: number; h?: number };
type Serie = {
  slug: string;
  title: string;
  meta?: string;
  credit?: string;
  images: string[];
};
type Data = {
  toiles: Toile[];
  pro: Serie[];
  test: Serie[];
  performance: Serie | null;
};
type Item = { src: string; caption: string };

const GRID_SIZES =
  "(min-width:1024px) 22vw, (min-width:640px) 33vw, 50vw";

export default function Gallery({ data }: { data: Data }) {
  const [box, setBox] = useState<{ items: Item[]; i: number } | null>(null);
  const [showNav, setShowNav] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);

  const open = useCallback((items: Item[], i: number) => setBox({ items, i }), []);
  const close = useCallback(() => setBox(null), []);
  const move = useCallback(
    (d: number) =>
      setBox((b) =>
        b ? { ...b, i: (b.i + d + b.items.length) % b.items.length } : b
      ),
    []
  );

  useEffect(() => {
    const onScroll = () => setShowNav(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!box) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") move(1);
      else if (e.key === "ArrowLeft") move(-1);
      else if (e.key === "Tab") {
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [box, close, move]);

  const proItems = (s: Serie): Item[] => {
    const cap = [s.title, s.meta, s.credit].filter(Boolean).join(" · ");
    return s.images.map((src) => ({ src, caption: cap }));
  };
  const toileItems: Item[] = data.toiles.map((t) => ({
    src: t.src,
    caption: t.title,
  }));

  return (
    <>
      {/* Entrée deux univers */}
      <section className="max-w-content mx-auto px-6 grid md:grid-cols-2 gap-4 md:gap-6">
        <a
          href="#body"
          className="group relative block overflow-hidden rounded-md aspect-[4/3] md:aspect-[5/4]"
        >
          <Image
            src={data.pro[0]?.images[0]}
            alt="Body painting"
            fill
            sizes="(min-width:768px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night via-night/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-7">
            <div className="serif text-sm text-bordeaux-soft mb-1">01</div>
            <div className="serif text-4xl md:text-5xl text-cream">
              Body Painting
            </div>
            <div className="text-sm text-cream/70 mt-1">
              {data.pro.length} séries · {data.test.length} essais
            </div>
          </div>
        </a>
        <a
          href="#peinture"
          className="group relative block overflow-hidden rounded-md aspect-[4/3] md:aspect-[5/4]"
        >
          <Image
            src={data.toiles[0]?.src}
            alt="Peinture"
            fill
            sizes="(min-width:768px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night via-night/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-7">
            <div className="serif text-sm text-bordeaux-soft mb-1">02</div>
            <div className="serif text-4xl md:text-5xl text-cream">Peinture</div>
            <div className="text-sm text-cream/70 mt-1">
              {data.toiles.length} toiles · action painting
            </div>
          </div>
        </a>
      </section>

      {/* BODY PAINTING */}
      <section id="body" className="scroll-mt-24 mt-20 md:mt-28">
        <div className="max-w-content mx-auto px-6">
          <div className="flex items-baseline justify-between border-b border-cream/10 pb-5 mb-4">
            <h2 className="serif text-4xl md:text-6xl tracking-tight">
              Body Painting
            </h2>
            <span className="text-xs uppercase tracking-[0.2em] text-bordeaux-soft">
              Séries pro
            </span>
          </div>
          <p className="text-sm text-cream/40 mb-14">
            Clique une image pour l&apos;agrandir.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {data.pro.map((s) => (
            <Chapter key={s.slug} serie={s} onOpen={() => open(proItems(s), 0)}>
              {s.images.map((src, i) => (
                <Cell
                  key={src}
                  src={src}
                  alt={`${s.title} ${i + 1}`}
                  onClick={() => open(proItems(s), i)}
                />
              ))}
            </Chapter>
          ))}
          {data.performance && (
            <Chapter
              serie={data.performance}
              kicker="Performance live"
              onOpen={() => open(proItems(data.performance!), 0)}
            >
              {data.performance.images.map((src, i) => (
                <Cell
                  key={src}
                  src={src}
                  alt={`Les Muses ${i + 1}`}
                  onClick={() => open(proItems(data.performance!), i)}
                />
              ))}
            </Chapter>
          )}
        </div>

        {/* Essais */}
        <div className="max-w-content mx-auto px-6 mt-28 md:mt-36">
          <div className="flex items-baseline justify-between border-b border-cream/10 pb-5 mb-12">
            <h3 className="serif text-2xl md:text-4xl tracking-tight text-cream/80">
              Essais & recherches
            </h3>
            <span className="text-xs uppercase tracking-[0.2em] text-cream/35">
              Planches d&apos;atelier
            </span>
          </div>
          <div className="space-y-12">
            {data.test.map((s) => {
              const items: Item[] = s.images.map((src) => ({
                src,
                caption: s.title,
              }));
              return (
                <div key={s.slug}>
                  <div className="serif text-lg text-cream/70 mb-3">
                    {s.title}
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
                    {s.images.map((src, i) => (
                      <button
                        key={src}
                        onClick={() => open(items, i)}
                        className="group relative block overflow-hidden rounded-sm bg-white/5 aspect-square"
                      >
                        <Image
                          src={src}
                          alt={`${s.title}, essai ${i + 1}`}
                          fill
                          sizes="(min-width:1024px) 12vw, 33vw"
                          className="object-cover opacity-80 transition duration-500 group-hover:opacity-100 group-hover:scale-105"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PEINTURE */}
      <section id="peinture" className="scroll-mt-24 mt-28 md:mt-40">
        <div className="max-w-content mx-auto px-6">
          <div className="flex items-baseline justify-between border-b border-cream/10 pb-5 mb-14">
            <h2 className="serif text-4xl md:text-6xl tracking-tight">Peinture</h2>
            <span className="text-xs uppercase tracking-[0.2em] text-bordeaux-soft">
              Toiles · action painting
            </span>
          </div>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
            {data.toiles.map((t, i) => (
              <button
                key={t.src}
                onClick={() => open(toileItems, i)}
                className="mb-4 block w-full break-inside-avoid group text-left"
              >
                <div className="overflow-hidden rounded-sm bg-white/5">
                  <Image
                    src={t.src}
                    alt={t.title}
                    width={t.w || 1000}
                    height={t.h || 1200}
                    sizes={GRID_SIZES}
                    className="w-full h-auto object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="serif text-sm text-cream/65 mt-2 group-hover:text-cream transition">
                  {t.title}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Mini-nav flottante */}
      <div
        className={`fixed bottom-5 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1 rounded-full border border-cream/15 bg-night-soft/90 backdrop-blur px-2 py-1 text-sm transition-opacity duration-300 ${
          showNav ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <a
          href="#body"
          className="px-3 py-1.5 rounded-full text-cream/80 hover:bg-cream/10 hover:text-cream transition"
        >
          Body
        </a>
        <a
          href="#peinture"
          className="px-3 py-1.5 rounded-full text-cream/80 hover:bg-cream/10 hover:text-cream transition"
        >
          Peinture
        </a>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Revenir en haut"
          className="px-3 py-1.5 rounded-full text-cream/80 hover:bg-cream/10 hover:text-cream transition"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      {/* Lightbox */}
      {box && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={box.items[box.i].caption || "Image"}
          tabIndex={-1}
          className="fixed inset-0 z-50 bg-night/95 flex items-center justify-center outline-none"
          onClick={close}
          onTouchStart={(e) => {
            touchX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) move(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <button
            onClick={close}
            aria-label="Fermer"
            className="absolute top-4 right-4 text-cream/70 hover:text-cream p-2"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              move(-1);
            }}
            aria-label="Précédent"
            className="absolute left-2 md:left-6 text-cream/60 hover:text-cream p-2"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <figure
            className="max-w-[92vw] max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={box.items[box.i].src}
              alt={box.items[box.i].caption}
              className="max-h-[82vh] max-w-full object-contain rounded-sm"
            />
            <figcaption className="mt-3 text-center text-sm text-cream/60 max-w-2xl px-4">
              {box.items[box.i].caption}
              <span className="text-cream/35 ml-2">
                {box.i + 1} / {box.items.length}
              </span>
            </figcaption>
          </figure>
          <button
            onClick={(e) => {
              e.stopPropagation();
              move(1);
            }}
            aria-label="Suivant"
            className="absolute right-2 md:right-6 text-cream/60 hover:text-cream p-2"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </>
  );
}

function Chapter({
  serie,
  kicker = "Série pro",
  onOpen,
  children,
}: {
  serie: Serie;
  kicker?: string;
  onOpen: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-content mx-auto px-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 mb-7">
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-bordeaux-soft mb-2">
            {kicker}
          </div>
          <h3 className="serif text-3xl md:text-5xl tracking-tight">
            {serie.title}
            {serie.meta && (
              <span className="text-cream/40 text-xl md:text-2xl ml-3 italic">
                {serie.meta}
              </span>
            )}
          </h3>
        </div>
        {serie.credit && (
          <button
            onClick={onOpen}
            className="text-sm text-cream/55 hover:text-cream transition text-left md:text-right max-w-xs"
          >
            {serie.credit}
          </button>
        )}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {children}
      </div>
    </div>
  );
}

function Cell({
  src,
  alt,
  onClick,
}: {
  src: string;
  alt: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group relative block overflow-hidden rounded-md bg-white/5 aspect-[3/4]"
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width:1024px) 22vw, (min-width:640px) 33vw, 50vw"
        className="object-cover transition duration-700 group-hover:scale-[1.03]"
      />
    </button>
  );
}
