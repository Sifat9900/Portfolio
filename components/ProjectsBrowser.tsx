"use client";

import { useState } from "react";
import { orderedProjects } from "@/data/projects";
import { FilterTabs, type Filter } from "./FilterTabs";
import { Icon } from "./Icon";
import { ProjectCard } from "./ProjectCard";

export function ProjectsBrowser() {
  const [filter, setFilter] = useState<Filter>("all");
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();

  const list = orderedProjects
    .filter((p) => filter === "all" || p.cat === filter)
    .filter((p) => !query || `${p.name} ${p.kind} ${p.cardSummary} ${p.tags.join(" ")}`.toLowerCase().includes(query));

  return (
    <>
      <section className="pb-8">
        <div className="wrap flex flex-wrap items-center justify-between gap-4">
          <FilterTabs value={filter} onChange={setFilter} items={orderedProjects} rounded="xl" />
          <label className="flex h-[46px] min-w-[260px] items-center gap-2.5 rounded-xl border border-line-2 bg-white px-4 max-xs:w-full max-xs:min-w-0">
            <Icon name="search" size={18} className="text-muted" />
            <span className="sr-only">Search projects</span>
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search projects or industries"
              className="min-w-0 flex-1 border-0 bg-transparent text-[15px] text-ink outline-none"
            />
          </label>
        </div>
      </section>

      <section className="pb-24">
        <div className="wrap flex flex-col gap-5">
          <span className="text-sm text-muted" aria-live="polite">Showing {list.length} of {orderedProjects.length} projects</span>
          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
            {list.map((p) => (
              <ProjectCard key={p.id} p={p} size="md" />
            ))}
          </div>
          {list.length === 0 && (
            <div className="flex flex-col items-center gap-3 rounded-3xl border border-dashed border-[#D6D6DE] bg-white px-6 py-14 text-center">
              <span className="font-display text-[22px] font-extrabold">No projects match “{q}”</span>
              <span className="text-[15px] text-muted">Try another word, or clear the search to see everything.</span>
              <button
                type="button"
                onClick={() => { setQ(""); setFilter("all"); }}
                className="press h-11 rounded-xl border border-line-2 bg-white px-5 font-semibold"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
