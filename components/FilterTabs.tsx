"use client";

import { categories, type Category, type Project } from "@/data/projects";

export type Filter = "all" | Category;

export function FilterTabs({
  value,
  onChange,
  items,
  rounded = "full",
}: {
  value: Filter;
  onChange: (f: Filter) => void;
  items: Project[];
  rounded?: "full" | "xl";
}) {
  return (
    <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-2">
      {categories.map((c) => {
        const active = value === c.id;
        const count = c.id === "all" ? items.length : items.filter((p) => p.cat === c.id).length;
        return (
          <button
            key={c.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(c.id)}
            className={`press h-11 border px-[18px] text-[15px] font-semibold ${rounded === "full" ? "rounded-full" : "rounded-xl"} ${
              active ? "border-ink bg-ink text-white" : "border-line-2 bg-white text-[#2A2A33]"
            }`}
          >
            {c.label} <span className="ml-1 opacity-60">{count}</span>
          </button>
        );
      })}
    </div>
  );
}
