import Link from "next/link";
import type { Project } from "@/data/projects";
import { Icon } from "./Icon";
import { ProjectArt } from "./ProjectArt";

/** Large card on the home page, compact card on the All projects page. */
export function ProjectCard({ p, size = "lg" }: { p: Project; size?: "lg" | "md" }) {
  const lg = size === "lg";
  return (
    <Link
      href={`/projects/${p.id}`}
      aria-label={`Open the ${p.name} case study`}
      className={`card flex animate-fade-up flex-col border border-line bg-white text-ink no-underline hover:text-ink ${lg ? "rounded-[30px] p-3" : "rounded-[26px] p-2.5"}`}
    >
      <div className={`overflow-hidden ${lg ? "rounded-[22px]" : "rounded-[18px]"}`}>
        <div className="zoom">
          <ProjectArt p={p} ratio={lg ? "16 / 10" : "16 / 11"} sizes={lg ? "(max-width: 720px) 100vw, 600px" : "(max-width: 720px) 100vw, (max-width: 980px) 50vw, 400px"} />
        </div>
      </div>
      <div className={`flex items-start justify-between ${lg ? "gap-4 px-3 pt-[22px] pb-3" : "gap-3 px-2.5 pt-[18px] pb-2.5"}`}>
        <div className={`flex min-w-0 flex-col ${lg ? "gap-2" : "gap-1.5"}`}>
          <span className="text-xs font-semibold tracking-[0.08em] text-muted uppercase">{p.kind}</span>
          <span className={`font-display font-extrabold ${lg ? "text-2xl tracking-[-0.02em]" : "text-xl tracking-[-0.015em]"}`}>{p.name}</span>
          <span className={`text-body ${lg ? "text-[15px] leading-[1.55]" : "text-sm leading-normal"}`}>{p.cardSummary}</span>
          <span className={`flex flex-wrap gap-1.5 ${lg ? "mt-1.5" : "mt-1"}`}>
            {p.tags.map((t) => (
              <span key={t} className={`rounded-full bg-[#F4F4F6] text-xs font-semibold text-soft ${lg ? "px-[11px] py-[5px]" : "px-2.5 py-1"}`}>{t}</span>
            ))}
          </span>
        </div>
        <span className={`go inline-flex flex-none items-center justify-center rounded-full text-white ${lg ? "size-12 bg-accent" : "size-10 bg-ink"}`}>
          <Icon name="arrowUpRight" size={lg ? 20 : 18} />
        </span>
      </div>
    </Link>
  );
}
