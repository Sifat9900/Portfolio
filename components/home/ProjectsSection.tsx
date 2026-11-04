"use client";

import Link from "next/link";
import { useState } from "react";
import { orderedProjects } from "@/data/projects";
import { FilterTabs, type Filter } from "../FilterTabs";
import { Icon } from "../Icon";
import { ProjectCard } from "../ProjectCard";

const LIMIT = 6;

export function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>("all");
  const filtered = orderedProjects.filter((p) => filter === "all" || p.cat === filter);
  const shown = filtered.slice(0, LIMIT);

  return (
    <section id="projects" className="sec py-28 max-md:py-[72px]">
      <div className="wrap flex flex-col gap-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[620px]">
            <div className="eyebrow mb-3">01 · Projects</div>
            <h2 className="h2">Projects I’ve designed</h2>
            <p className="mt-3.5 mb-0 text-[17px] leading-[1.6] text-body">Live websites, mobile apps and SaaS products. Open any project for the full case study.</p>
          </div>
          <FilterTabs value={filter} onChange={setFilter} items={orderedProjects} />
        </div>

        <div className="grid grid-cols-2 gap-7 max-md:grid-cols-1">
          {shown.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>

        <div className="mt-2 flex flex-col items-center gap-3">
          <Link href="/projects" className="press inline-flex h-14 items-center gap-3.5 rounded-full bg-ink pr-2.5 pl-7 text-base font-semibold text-white no-underline hover:text-white">
            View more projects
            <span className="inline-flex size-[38px] items-center justify-center rounded-full bg-accent"><Icon name="arrowRight" size={18} strokeWidth={2.2} /></span>
          </Link>
          <span className="text-sm text-muted">Showing {shown.length} of {filtered.length} projects</span>
        </div>
      </div>
    </section>
  );
}
