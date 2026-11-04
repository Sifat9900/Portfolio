"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/data/projects";
import { Icon } from "../Icon";

const pad = (n: number) => (n < 10 ? "0" : "") + n;

/** "Inside the design" full-page gallery plus the interactive page tour. */
export function Gallery({ p }: { p: Project }) {
  const gal = p.gallery;
  const [gi, setGi] = useState(0);
  const tourRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (viewRef.current) viewRef.current.scrollTop = 0;
  }, [gi]);

  const cur = gal[gi];
  const host = p.url ? p.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "") : p.name;
  const cols = Math.min(gal.length, 3);
  const colClass = cols === 1 ? "columns-1 mx-auto w-full max-w-[820px]" : cols === 2 ? "columns-2 max-sm:columns-1" : "columns-3 max-lg:columns-2 max-sm:columns-1";

  const zoom = (i: number) => {
    setGi(i);
    tourRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="pt-24 max-md:pt-16">
      <div className="wrap flex flex-col gap-7">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="eyebrow mb-3">Project images</div>
            <h2 className="h2 text-[38px] max-md:text-[30px]">Inside the design</h2>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-line-2 bg-white px-3.5 py-2 text-sm font-semibold">
            <Icon name="image" size={16} />
            {gal.length} screens
          </span>
        </div>

        {/* full-page gallery */}
        <div className={`${colClass} gap-6`}>
          {gal.map((g, i) => (
            <figure key={g.src} className="group m-0 mb-6 break-inside-avoid overflow-hidden rounded-[22px] border border-line bg-white shadow-[0_30px_60px_-40px_rgba(20,20,40,0.45)]">
              <div className="flex items-center justify-between gap-2.5 border-b border-line px-4 py-3">
                <span className="inline-flex min-w-0 items-center gap-2.5">
                  <span className="inline-flex size-[26px] flex-none items-center justify-center rounded-lg text-[11px] font-extrabold text-white" style={{ background: p.bg }}>{pad(i + 1)}</span>
                  <span className="text-[15px] font-bold">{g.label}</span>
                </span>
                <button
                  type="button"
                  onClick={() => zoom(i)}
                  aria-label={`Open ${g.label} in the page tour`}
                  className="press h-8 flex-none rounded-full border border-line-2 bg-white px-3 text-[13px] font-semibold text-ink"
                >
                  View larger
                </button>
              </div>
              <div className="overflow-hidden">
                <Image
                  src={g.src}
                  alt={g.alt}
                  width={g.w}
                  height={g.h}
                  sizes={cols === 1 ? "(max-width: 860px) 100vw, 820px" : "(max-width: 620px) 100vw, (max-width: 980px) 50vw, 400px"}
                  className="block h-auto w-full transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.04]"
                />
              </div>
            </figure>
          ))}
        </div>

        {/* page tour */}
        <div ref={tourRef} className="relative scroll-mt-24 overflow-hidden rounded-[32px] p-7 text-white max-md:p-4" style={{ background: p.bg }}>
          <div aria-hidden className="absolute -top-40 -right-40 size-[480px] rounded-full opacity-35" style={{ background: `radial-gradient(closest-side, ${p.primary}, transparent)` }} />
          <div className="relative grid grid-cols-[320px_minmax(0,1fr)] items-start gap-7 max-lg:grid-cols-1">
            <div className="flex min-w-0 flex-col gap-3.5">
              <div>
                <div className="text-xs font-bold tracking-[0.1em] text-white/70 uppercase">Page tour</div>
                <div className="mt-1.5 font-display text-2xl font-extrabold">Click a page, then scroll the preview</div>
              </div>
              <div role="tablist" aria-label="Project pages" className="flex flex-col gap-2 max-lg:flex-row max-lg:overflow-x-auto max-lg:pb-1.5">
                {gal.map((g, i) => {
                  const a = i === gi;
                  return (
                    <button
                      key={g.src}
                      type="button"
                      role="tab"
                      aria-selected={a}
                      onClick={() => setGi(i)}
                      className={`flex flex-none items-start gap-3 rounded-2xl border px-3.5 py-3 text-left transition-colors ${a ? "border-white bg-white text-ink" : "border-white/10 bg-white/5 text-white"}`}
                    >
                      <span
                        className="inline-flex size-[30px] flex-none items-center justify-center rounded-[10px] text-xs font-extrabold text-white"
                        style={{ background: a ? p.primary : "rgba(255,255,255,0.12)" }}
                      >
                        {pad(i + 1)}
                      </span>
                      <span className="flex min-w-0 flex-col gap-0.5 text-left">
                        <span className="text-[15px] font-bold">{g.label}</span>
                        <span className="text-[13px] leading-[1.4] opacity-75 max-lg:hidden">{g.desc || g.alt}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex min-w-0 flex-col gap-3">
              <div className="overflow-hidden rounded-[20px] bg-white shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)]">
                <div className="flex items-center gap-2 bg-[#F2F2F5] px-4 py-3 text-muted">
                  <span className="size-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="size-2.5 rounded-full bg-[#28C840]" />
                  <span className="ml-2.5 flex h-7 flex-1 items-center overflow-hidden rounded-lg bg-white px-3 text-[13px] whitespace-nowrap">
                    {host} · {cur.label}
                  </span>
                </div>
                <div ref={viewRef} className="h-[640px] overflow-y-auto scroll-smooth bg-white max-md:h-[460px]">
                  <Image
                    key={cur.src}
                    src={cur.src}
                    alt={cur.alt}
                    width={cur.w}
                    height={cur.h}
                    sizes="(max-width: 980px) 100vw, 800px"
                    className="block h-auto w-full animate-fade-up"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 text-[13px] text-white/75">
                  <Icon name="arrowDown" size={16} />
                  {gi + 1} of {gal.length} · scroll inside the preview to see the full page
                </span>
                <span className="flex gap-2">
                  <button
                    type="button"
                    aria-label="Previous page"
                    onClick={() => setGi((gi - 1 + gal.length) % gal.length)}
                    className="press inline-flex size-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white"
                  >
                    <Icon name="chevronLeft" size={18} strokeWidth={2.2} />
                  </button>
                  <button
                    type="button"
                    aria-label="Next page"
                    onClick={() => setGi((gi + 1) % gal.length)}
                    className="press inline-flex size-11 items-center justify-center rounded-full border-0 text-white"
                    style={{ background: p.primary }}
                  >
                    <Icon name="chevronRight" size={18} strokeWidth={2.2} />
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
