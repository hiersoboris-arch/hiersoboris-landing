/* eslint-disable @next/next/no-img-element */
"use client";

import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Toile = { src: string; title: string };
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

export default function Gallery({ data }: { data: Data }) {
  const [box, setBox] = useState<{ list: string[]; i: number } | null>(null);

  const open = useCallback((list: string[], i: number) => setBox({ list, i }), []);
  const close = useCallback(() => setBox(null), []);
  const move = useCallback(
    (d: number) =>
      setBox((b) =>
        b ? { ...b, i: (b.i + d + b.list.length) % b.list.length } : b
      ),
    []
  );

  useEffect(() => {
    if (!box) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [box, close, move]);

  return (
    <>
      {/* Entrée deux univers */}
      <section className="max-w-content mx-auto px-6 grid md:grid-cols-2 gap-4 md:gap-6">
        <a
          href="#body"
          className="group relative block overflow-hidden rounded-md aspect-[4/3] md:aspect-[5/4]"
        >
          <img
            src={data.pro[0]?.images[0]}
            alt="Body painting"
            className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
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
          <img
            src={data.toiles[0]?.src}
            alt="Peinture"
            className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
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
      <section id="body" className="scroll-mt-6 mt-20 md:mt-28">
        <div className="max-w-content mx-auto px-6">
          <div className="flex items-baseline justify-between border-b border-cream/10 pb-5 mb-14">
            <h2 className="serif text-4xl md:text-6xl tracking-tight">
              Body Painting
            </h2>
            <span className="text-xs uppercase tracking-[0.2em] text-bordeaux-soft">
              Séries pro
            </span>
          </div>
        </div>

        <div className="space-y-24 md:space-y-32">
          {data.pro.map((s, idx) => (
            <Chapter key={s.slug} serie={s} index={idx} onOpen={open} />
          ))}
          {data.performance && (
            <Chapter
              serie={data.performance}
              index={data.pro.length}
              onOpen={open}
              kicker="Performance live"
            />
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
            {data.test.map((s) => (
              <div key={s.slug}>
                <div className="serif text-lg text-cream/70 mb-3">{s.title}</div>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
                  {s.images.map((src, i) => (
                    <button
                      key={src}
                      onClick={() => open(s.images, i)}
                      className="group block overflow-hidden rounded-sm bg-white/5 aspect-square"
                    >
                      <img
                        src={src}
                        alt={`${s.title}, essai`}
                        loading="lazy"
                        className="w-full h-full object-cover opacity-80 transition duration-500 group-hover:opacity-100 group-hover:scale-105"
                      />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PEINTURE */}
      <section id="peinture" className="scroll-mt-6 mt-28 md:mt-40">
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
                onClick={() =>
                  open(
                    data.toiles.map((x) => x.src),
                    i
                  )
                }
                className="mb-4 block w-full break-inside-avoid group text-left"
              >
                <div className="overflow-hidden rounded-sm bg-white/5">
                  <img
                    src={t.src}
                    alt={t.title}
                    loading="lazy"
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

      {/* Lightbox */}
      {box && (
        <div
          className="fixed inset-0 z-50 bg-night/95 flex items-center justify-center"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Fermer"
            className="absolute top-5 right-5 text-cream/70 hover:text-cream p-2"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              move(-1);
            }}
            aria-label="Précédent"
            className="absolute left-3 md:left-6 text-cream/60 hover:text-cream p-2"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <img
            src={box.list[box.i]}
            alt=""
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] max-w-[92vw] object-contain rounded-sm"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              move(1);
            }}
            aria-label="Suivant"
            className="absolute right-3 md:right-6 text-cream/60 hover:text-cream p-2"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          <div className="absolute bottom-5 text-cream/50 text-sm">
            {box.i + 1} / {box.list.length}
          </div>
        </div>
      )}
    </>
  );
}

function Chapter({
  serie,
  index,
  onOpen,
  kicker = "Série pro",
}: {
  serie: Serie;
  index: number;
  onOpen: (list: string[], i: number) => void;
  kicker?: string;
}) {
  const flip = index % 2 === 1;
  const [lead, ...rest] = serie.images;
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
          <p className="text-sm text-cream/55 max-w-xs md:text-right">
            {serie.credit}
          </p>
        )}
      </div>

      <div
        className={`grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 ${
          flip ? "lg:[direction:rtl]" : ""
        }`}
      >
        <button
          onClick={() => onOpen(serie.images, 0)}
          className="group col-span-2 lg:row-span-2 block overflow-hidden rounded-md bg-white/5 [direction:ltr]"
        >
          <img
            src={lead}
            alt={serie.title}
            loading="lazy"
            className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto lg:min-h-[480px] transition duration-700 group-hover:scale-[1.03]"
          />
        </button>
        {rest.slice(0, 4).map((src, i) => (
          <button
            key={src}
            onClick={() => onOpen(serie.images, i + 1)}
            className="group block overflow-hidden rounded-md bg-white/5 [direction:ltr]"
          >
            <img
              src={src}
              alt={`${serie.title} ${i + 2}`}
              loading="lazy"
              className="w-full h-full object-cover aspect-[3/4] transition duration-700 group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {rest.length > 4 && (
        <button
          onClick={() => onOpen(serie.images, 0)}
          className="mt-3 text-sm text-cream/50 hover:text-cream transition"
        >
          + {rest.length - 4} autres
        </button>
      )}
    </div>
  );
}
