"use client";

import { useState } from "react";
import { faqs } from "@/data/home";
import { Icon } from "../Icon";

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="sec py-28 max-md:py-[72px]">
      <div className="wrap flex max-w-[860px] flex-col gap-8">
        <div className="text-center">
          <div className="eyebrow mb-3">05 · FAQ</div>
          <h2 className="h2">Questions, answered</h2>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`rounded-[20px] border bg-white transition-colors ${isOpen ? "border-accent" : "border-line"}`}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 border-0 bg-transparent px-6 py-[22px] text-left font-display text-lg font-bold text-ink"
                >
                  {f.q}
                  <span
                    className={`inline-flex size-9 flex-none items-center justify-center rounded-full transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-accent/10 text-accent" : "bg-[#F2F2F5] text-ink"
                    }`}
                  >
                    <Icon name="chevronDown" size={18} />
                  </span>
                </button>
                {isOpen && <p className="m-0 animate-fade-up px-6 pb-[22px] text-base leading-[1.65] text-body">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
