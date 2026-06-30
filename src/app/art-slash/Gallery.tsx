/* eslint-disable @next/next/no-img-element */
"use client";

import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Toile = { src: string; title: string | null; dims: string | null };
type Serie = {
  slug: string;
  title: string;
  meta: string;
  credit: string;
  images: string[];
};
type Data = { toiles: Toile[]; series: Serie[]; perf: Serie[] };

type Flat = { src: string; title: string; sub: string };

export default function Gallery({ data }: { data: Data }) {
  const flat: Flat[] = [];
  const toiles = data.toiles.map((t) => {
    const i = flat.length;
    flat.push({
      src: t.src,
      title: t.title ?? "Sans titre",
      sub: t.dims ?? "Toile",
    });
    return { ...t, i };
  });
  const mapSerie = (s: Serie) => ({
    ...s,
    items: s.images.map((src) => {
      const i = flat.length;
      flat.push({ src, title: s.title, sub: s.credit });
      return { src, i };
    }),
  });
  const series = data.series.map(mapSerie);
  const perf = data.perf.map(mapSerie);

  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const go = useCallback(
    (d: number) =>
      setOpen((o) => (o === null ? o : (o + d + flat.length) % flat.length)),
    [flat.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, go]);

  const Thumb = ({ src, i, ratio }: { src: string; i: number; ratio?: boolean }) => (
    <button
      onClick={() => setOpen(i)}
      className="group block w-full overflow-hidden rounded-sm bg-night-soft cursor-zoom-in"
      aria-label="Agrandir l'image"
    >
      <img
        src={src}
        alt={`${flat[i].title}, Boris Hierso Alphandéry`}
        loading="lazy"
        className={`w-full ${
          ratio ? "h-full object-cover aspect-[3/4]" : "h-auto"
        } transition duration-700 ease-out group-hover:scale-[1.04] group-hover:opacity-95`}
      />
    </button>
  );

  return (
    <>
      {/* Toiles : masonry */}
      <section className="border-t border-cream/10">
        <div className="max-w-content mx-auto px-6 py-16 md:py-24">
          <div className="text-xs uppercase tracking-[0.2em] text-bordeaux-soft mb-10">
            Toiles · action painting
          </div>
          <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]">
            {toiles.map((t) => (
              <figure key={t.src} className="mb-4 break-inside-avoid">
                <Thumb src={t.src} i={t.i} />
                {t.title && (
                  <figcaption className="mt-2 flex items-baseline justify-between gap-3">
                    <span className="serif text-sm md:text-base text-cream">
                      {t.title}
                    </span>
                    <span className="text-xs text-cream/40 shrink-0">
                      {t.dims}
                    </span>
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Body painting : chapitres */}
      <section className="border-t border-cream/10">
        <div className="max-w-content mx-auto px-6 py-16 md:py-24">
          <div className="text-xs uppercase tracking-[0.2em] text-bordeaux-soft mb-3">
            Body painting
          </div>
          <h2 className="serif text-3xl md:text-5xl tracking-tight mb-16 max-w-2xl">
            La peinture sur les corps, en friches et en public.
          </h2>
          <div className="space-y-20 md:space-y-28">
            {series.map((s) => (
              <article key={s.slug}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1.5 mb-7 border-b border-cream/10 pb-4">
                  <h3 className="serif text-2xl md:text-4xl text-cream">
                    {s.title}
                    <span className="text-cream/35 text-base md:text-xl ml-3 font-sans">
                      {s.meta}
                    </span>
                  </h3>
                  <p className="text-sm text-cream/55">{s.credit}</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {s.items.map((it) => (
                    <Thumb key={it.src} src={it.src} i={it.i} ratio />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Performances & expos */}
      {perf.length > 0 && (
        <section className="border-t border-cream/10">
          <div className="max-w-content mx-auto px-6 py-16 md:py-24">
            <div className="text-xs uppercase tracking-[0.2em] text-bordeaux-soft mb-16">
              Performances & expositions
            </div>
            <div className="space-y-20 md:space-y-28">
              {perf.map((s) => (
                <article key={s.slug}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1.5 mb-7 border-b border-cream/10 pb-4">
                    <h3 className="serif text-2xl md:text-4xl text-cream">
                      {s.title}
                      <span className="text-cream/35 text-base md:text-xl ml-3 font-sans">
                        {s.meta}
                      </span>
                    </h3>
                    <p className="text-sm text-cream/55">{s.credit}</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {s.items.map((it) => (
                      <Thumb key={it.src} src={it.src} i={it.i} ratio />
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      {open !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Fermer"
            className="absolute top-5 right-5 text-cream/70 hover:text-cream transition p-2"
          >
            <X className="w-7 h-7" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            aria-label="Précédent"
            className="absolute left-3 md:left-6 text-cream/60 hover:text-cream transition p-2"
          >
            <ChevronLeft className="w-9 h-9" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            aria-label="Suivant"
            className="absolute right-3 md:right-6 text-cream/60 hover:text-cream transition p-2"
          >
            <ChevronRight className="w-9 h-9" />
          </button>
          <figure
            className="max-w-[92vw] max-h-[88vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={flat[open].src}
              alt={`${flat[open].title}, Boris Hierso Alphandéry`}
              className="max-w-[92vw] max-h-[80vh] w-auto h-auto object-contain rounded-sm"
            />
            <figcaption className="mt-4 text-center">
              <span className="serif text-cream text-lg">
                {flat[open].title}
              </span>
              <span className="block text-xs text-cream/50 mt-1">
                {flat[open].sub} · {open + 1} / {flat.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
