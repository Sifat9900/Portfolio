"use client";

import { useState } from "react";
import { education, experience } from "@/data/home";
import { Icon } from "../Icon";

export function Journey() {
  const [tab, setTab] = useState<"exp" | "edu">("exp");
  const list = tab === "exp" ? experience : education;

  return (
    <div className="col-span-12 flex flex-col gap-[22px] rounded-[28px] border border-line bg-paper p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="flex items-center gap-3">
          <span className="ficon bg-[#D9F4E3] text-[#136B3B]"><Icon name="briefcase" /></span>
          <span className="font-display text-[22px] font-extrabold">My journey</span>
        </span>
        <div role="tablist" aria-label="Background" className="inline-flex rounded-full bg-[#EDEDF1] p-1">
          {(["exp", "edu"] as const).map((id) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={tab === id}
              onClick={() => setTab(id)}
              className={`h-[38px] rounded-full border-0 px-4 text-sm font-semibold ${tab === id ? "bg-white text-ink shadow-[0_2px_8px_rgba(20,20,40,0.08)]" : "bg-transparent text-body"}`}
            >
              {id === "exp" ? "Experience" : "Education"}
            </button>
          ))}
        </div>
      </div>

      <ol key={tab} className="relative m-0 flex animate-fade-up list-none flex-col gap-[22px] p-0 pl-1">
        <span aria-hidden className="absolute top-2 bottom-2 left-[11px] w-0.5 bg-line-2" />
        {list.map((t) => {
          const live = t.now && tab === "exp";
          return (
            <li key={t.org} className="relative flex flex-col gap-1 pl-9">
              <span
                className={`absolute top-[5px] left-1 size-4 rounded-full border-[3px] ${live ? "animate-pulse-dot" : ""} ${t.now ? "border-white" : "border-[#C9C9D2] bg-white"}`}
                style={t.now ? { background: tab === "exp" ? "#16A34A" : "var(--color-accent)" } : undefined}
              />
              <div className="flex flex-wrap justify-between gap-2">
                <span className="font-display text-[17px] font-bold">{t.org}</span>
                <span className={`rounded-full px-2.5 py-1 text-[13px] font-semibold ${live ? "bg-[#E8F9ED] text-[#15803D]" : "bg-[#EDEDF1] text-soft"}`}>{t.date}</span>
              </div>
              <span className="text-sm text-muted">{t.role} · {t.place}</span>
              <span className="mt-0.5 text-[15px] leading-[1.55] text-soft">{t.desc}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
