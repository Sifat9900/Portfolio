"use client";

import { useState } from "react";
import { services } from "@/data/home";
import { Icon } from "../Icon";

export function Services() {
  const [open, setOpen] = useState(0);
  return (
    <section id="services" className="sec border-y border-line bg-white py-28 max-md:py-[72px]">
      <div className="wrap grid grid-cols-2 gap-14 max-lg:grid-cols-1">
        <div className="flex flex-col gap-[18px]">
          <div className="eyebrow">02 · Services</div>
          <h2 className="h2">How I can help your team</h2>
          <p className="m-0 max-w-[440px] text-[17px] leading-[1.65] text-body">
            From a new brand to a complex dashboard, I design the whole journey and hand over Figma files your developers can build from.
          </p>
          <a href="#contact" className="press mt-2 inline-flex h-12 items-center self-start rounded-full bg-ink px-[22px] text-[15px] font-semibold text-white no-underline hover:text-white">
            Discuss a project
          </a>
        </div>
        <div className="flex flex-col border-t border-line-2">
          {services.map((sv, i) => {
            const isOpen = open === i;
            return (
              <div key={sv.title} className="border-b border-line-2">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center gap-[18px] border-0 bg-transparent py-6 text-left text-ink"
                >
                  <span className="w-7 text-sm font-semibold text-muted">0{i + 1}</span>
                  <span className="flex-1 font-display text-[22px] font-bold tracking-[-0.015em]">{sv.title}</span>
                  <span
                    className={`inline-flex size-10 flex-none items-center justify-center rounded-full transition-[transform,background-color] duration-300 ${
                      isOpen ? "rotate-45 bg-accent text-white" : "bg-[#F2F2F5] text-ink"
                    }`}
                  >
                    <Icon name="plus" size={18} />
                  </span>
                </button>
                {isOpen && (
                  <div className="flex animate-fade-up flex-col gap-3.5 pb-[26px] pl-[46px]">
                    <p className="m-0 text-base leading-[1.6] text-body">{sv.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {sv.items.map((it) => (
                        <span key={it} className="rounded-full bg-accent/10 px-3 py-1.5 text-[13px] font-semibold text-accent">{it}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
