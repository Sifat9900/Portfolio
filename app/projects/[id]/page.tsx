import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FooterBar } from "@/components/Footer";
import { Icon } from "@/components/Icon";
import { Navbar } from "@/components/Navbar";
import { ProjectArt } from "@/components/ProjectArt";
import { Gallery } from "@/components/case/Gallery";
import { getProject, projects, type Project } from "@/data/projects";
import { site } from "@/data/site";

type Params = { id: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ id: p.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { id } = await params;
  const p = getProject(id);
  if (!p) return {};
  return {
    title: p.name,
    description: p.summary,
    openGraph: { title: p.title, description: p.summary, images: [p.img] },
  };
}

const STEPS = [
  ["Empathize", "Research, interviews, empathy map", "#FFE4EC", "#B0234F"],
  ["Define", "Personas, journeys, goal statement", "#FFE8D2", "#A9470C"],
  ["Ideate", "Card sorting, IA, paper wireframes", "#FFF1B8", "#7A5600"],
  ["Design", "Wireframes, system, visual design", "#E9E4FF", "#4B2FD6"],
  ["Test", "Usability checks and improvements", "#D9F4E3", "#136B3B"],
] as const;

const sectionTitle = "h2 text-[38px] max-md:text-[30px]";

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { id } = await params;
  const idx = projects.findIndex((x) => x.id === id);
  if (idx < 0) notFound();
  const p = projects[idx];

  const next = projects[(idx + 1) % projects.length];
  const related = [2, 3, 4].map((k) => projects[(idx + k) % projects.length]);
  const meta = [
    { label: "Industry", value: p.industry },
    { label: "Service", value: p.service },
    { label: "Platform", value: p.platform },
    { label: "Location", value: p.where },
  ];

  return (
    <div className="min-h-screen bg-paper">
      <span id="top" />
      <Navbar active="projects" />

      <main>
        {/* Hero */}
        <section className="animate-fade-up pt-14 pb-10">
          <div className="wrap flex flex-col gap-7">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-muted">
              <Link href="/" className="text-muted no-underline hover:text-accent">Home</Link>
              <span aria-hidden>›</span>
              <Link href="/projects" className="text-muted no-underline hover:text-accent">Projects</Link>
              <span aria-hidden>›</span>
              <span className="font-semibold text-ink">{p.name}</span>
            </nav>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="flex max-w-[820px] flex-col gap-4">
                <span className="inline-flex items-center gap-2 self-start rounded-full bg-accent/10 px-3.5 py-[7px] text-[13px] font-bold text-accent">{p.kind}</span>
                <h1 className="m-0 font-display text-[60px] leading-[1.05] font-extrabold tracking-[-0.035em] max-md:text-[38px]">{p.title}</h1>
                <p className="m-0 text-[19px] leading-[1.6] text-body">{p.summary}</p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {p.url && (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="press inline-flex h-[52px] items-center gap-2 rounded-full bg-accent px-6 text-base font-semibold text-white no-underline hover:text-white">
                    Visit live site <Icon name="arrowUpRight" size={18} />
                  </a>
                )}
                <Link href="/projects" className="press inline-flex h-[52px] items-center gap-2 rounded-full border border-[#DCDCE2] bg-white px-[22px] text-base font-semibold text-ink no-underline">
                  <Icon name="arrowLeft" size={18} /> All projects
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3 max-lg:grid-cols-2">
              {meta.map((m) => (
                <div key={m.label} className="rounded-[18px] border border-line bg-white px-5 py-[18px]">
                  <div className="text-xs font-semibold tracking-[0.08em] text-muted uppercase">{m.label}</div>
                  <div className="mt-1.5 text-base font-semibold">{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hero image */}
        <section aria-label="Project preview">
          <div className="wrap">
            <div className="overflow-hidden rounded-[32px] shadow-[0_40px_80px_-50px_rgba(20,20,40,0.6)]">
              <ProjectArt p={p} ratio="16 / 8" sizes="(max-width: 1200px) 100vw, 1136px" priority />
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="pt-24 pb-[72px] max-md:py-16">
          <div className="wrap grid grid-cols-[0.7fr_1.3fr] gap-12 max-lg:grid-cols-1">
            <div>
              <div className="eyebrow mb-3">Overview</div>
              <h2 className={sectionTitle}>Project description</h2>
            </div>
            <p className="m-0 text-[19px] leading-[1.75] text-soft">{p.overview}</p>
          </div>
        </section>

        {/* Problem / solution */}
        <section className="pt-6 pb-24 max-md:pb-16">
          <div className="wrap relative grid grid-cols-2 gap-6 max-md:grid-cols-1">
            <span aria-hidden className="absolute top-1/2 left-1/2 z-[2] flex size-[52px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-white shadow-[0_0_0_8px_#FAFAF7] max-lg:hidden">
              <Icon name="arrowRight" strokeWidth={2.2} />
            </span>
            <div className="flex flex-col gap-[22px] rounded-[28px] border border-line bg-white p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-11 items-center justify-center rounded-[14px] bg-[#FDECEC] text-[#B42318]"><Icon name="alert" size={22} /></span>
                <h3 className="m-0 font-display text-[26px] font-extrabold italic">The problem</h3>
              </div>
              <PointList items={p.problems} />
            </div>
            <div className="flex flex-col gap-[22px] rounded-[28px] p-8 text-white" style={{ background: p.bg }}>
              <div className="flex items-center gap-3">
                <span className="inline-flex size-11 items-center justify-center rounded-[14px] text-ink" style={{ background: p.accent }}><Icon name="check" size={22} strokeWidth={2.2} /></span>
                <h3 className="m-0 font-display text-[26px] font-extrabold italic">The solution</h3>
              </div>
              <PointList items={p.solutions} dark />
            </div>
          </div>
        </section>

        {/* Design process */}
        <section className="border-y border-line bg-white py-24 max-md:py-16">
          <div className="wrap flex flex-col gap-8">
            <div className="max-w-[640px]">
              <div className="eyebrow mb-3">Design process</div>
              <h2 className={sectionTitle}>How this project came together</h2>
            </div>
            <div className="grid grid-cols-5 gap-3 max-lg:grid-cols-[repeat(5,minmax(140px,1fr))] max-lg:overflow-x-auto">
              {STEPS.map(([title, items, bg, ink], i) => (
                <div key={title} className="flex flex-col gap-2.5 rounded-[22px] p-5" style={{ background: bg }}>
                  <span className="font-display text-sm font-extrabold" style={{ color: ink }}>0{i + 1}</span>
                  <span className="font-display text-[19px] font-extrabold">{title}</span>
                  <span className="text-sm leading-normal text-soft">{items}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Style guide */}
        {p.palette.length > 0 && (
          <section className="pt-24 max-md:pt-16">
            <div className="wrap flex flex-col gap-7">
              <div>
                <div className="eyebrow mb-3">Style guide</div>
                <h2 className={sectionTitle}>Colour &amp; typography</h2>
              </div>
              <div className="grid grid-cols-[1.2fr_1fr] gap-6 max-lg:grid-cols-1">
                <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-4">
                  {p.palette.map((c) => (
                    <div key={c.hex + c.name} className="overflow-hidden rounded-3xl border border-line bg-white">
                      <div className="h-40" style={{ background: c.hex }} />
                      <div className="px-[18px] py-4">
                        <div className="font-bold">{c.name}</div>
                        <div className="mt-0.5 text-sm text-muted">{c.hex}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col justify-center gap-3.5 rounded-3xl border border-line bg-white p-7">
                  <span className="font-display text-[88px] leading-none font-extrabold tracking-[-0.04em]" style={{ color: p.primary }}>Aa</span>
                  <span className="text-lg font-bold">{p.fonts}</span>
                  <span className="text-[15px] leading-[1.6] text-body">{p.styleNote}</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Gallery + page tour, or placeholder screens */}
        {p.gallery.length > 0 ? <Gallery p={p} /> : <KeyScreens p={p} />}

        {/* Result */}
        <section className="pt-24 pb-24 max-md:py-16">
          <div className="wrap">
            <div className="flex flex-wrap items-center justify-between gap-7 rounded-[32px] border border-line bg-white p-12 max-md:p-7">
              <div className="max-w-[680px]">
                <div className="eyebrow mb-3">The result</div>
                <p className="m-0 font-display text-[26px] leading-[1.4] font-bold tracking-[-0.015em] max-md:text-[21px]">{p.result}</p>
              </div>
              {p.url && (
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="press inline-flex h-[52px] items-center gap-2 rounded-full bg-ink px-6 font-semibold text-white no-underline hover:text-white">
                  See it live <Icon name="arrowUpRight" size={18} />
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="border-t border-line bg-white py-24 max-md:py-16">
          <div className="wrap flex flex-col gap-7">
            <div className="flex items-end justify-between gap-4">
              <h2 className={sectionTitle}>Related projects</h2>
              <Link href="/projects" className="text-[15px] font-semibold text-ink hover:text-accent">See all</Link>
            </div>
            <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
              {related.map((r) => (
                <Link key={r.id} href={`/projects/${r.id}`} className="card flex flex-col rounded-[26px] border border-line bg-paper p-2.5 text-left text-ink no-underline hover:text-ink">
                  <div className="w-full overflow-hidden rounded-[18px]">
                    <div className="zoom"><ProjectArt p={r} ratio="16 / 11" sizes="(max-width: 720px) 100vw, 380px" /></div>
                  </div>
                  <span className="flex flex-col gap-1 px-2 pt-4 pb-2">
                    <span className="text-xs font-semibold tracking-[0.06em] text-muted uppercase">{r.kind}</span>
                    <span className="font-display text-xl font-extrabold">{r.name}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Next project */}
        <section>
          <Link href={`/projects/${next.id}`} className="next-banner block w-full py-[72px] text-left text-white no-underline hover:text-white" style={{ background: next.bg }}>
            <span className="wrap flex items-center justify-between gap-6">
              <span className="flex flex-col gap-2.5">
                <span className="text-[13px] font-semibold tracking-[0.1em] text-white/75 uppercase">Next project</span>
                <span className="font-display text-[52px] leading-[1.05] font-extrabold tracking-[-0.03em] max-md:text-[30px]">{next.name}</span>
              </span>
              <span className="arrow inline-flex size-[72px] flex-none items-center justify-center rounded-full text-ink" style={{ background: next.accent }}>
                <Icon name="arrowRight" size={28} strokeWidth={2.2} />
              </span>
            </span>
          </Link>
        </section>

        {/* CTA */}
        <section id="contact" className="bg-ink py-24 text-white max-md:py-16">
          <div className="wrap flex flex-wrap items-center justify-between gap-7">
            <div className="max-w-[640px]">
              <h2 className="h2 leading-[1.08]">Have a project like this in mind?</h2>
              <p className="mt-3.5 mb-0 text-[17px] leading-[1.6] text-[#C9C9D2]">Tell me what you’re building and I’ll reply with questions and next steps.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/#contact" className="press inline-flex h-[52px] items-center rounded-full bg-accent px-6 font-semibold text-white no-underline hover:text-white">Start a project</Link>
              <a href={`mailto:${site.email}`} className="press inline-flex h-[52px] items-center rounded-full border border-white/30 px-6 font-semibold text-white no-underline hover:text-white">{site.email}</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-mist pt-10 pb-7">
        <div className="wrap"><FooterBar /></div>
      </footer>
    </div>
  );
}

function PointList({ items, dark = false }: { items: Project["problems"]; dark?: boolean }) {
  return (
    <>
      {items.map((x, i) => (
        <div key={x.t} className="flex gap-4">
          <span className={`inline-flex size-8 flex-none items-center justify-center rounded-[10px] text-sm font-bold ${dark ? "bg-white/15" : "bg-[#F4F4F6] text-soft"}`}>0{i + 1}</span>
          <div>
            <div className="text-[17px] font-bold">{x.t}</div>
            <div className={`mt-1 text-[15px] leading-[1.6] ${dark ? "text-white/80" : "text-body"}`}>{x.d}</div>
          </div>
        </div>
      ))}
    </>
  );
}

/** Placeholder phone screens for projects without real images yet. */
function KeyScreens({ p }: { p: Project }) {
  const frames = [
    { rot: -4, h: 420, kind: "hero" },
    { rot: 0, h: 460, kind: "list" },
    { rot: 4, h: 420, kind: "form" },
  ] as const;
  return (
    <section className="py-24 max-md:py-16">
      <div className="wrap flex flex-col gap-7">
        <div>
          <div className="eyebrow mb-3">Wireframe &amp; UI design</div>
          <h2 className={sectionTitle}>Key screens</h2>
        </div>
        <div className="flex items-end justify-center gap-7 overflow-hidden rounded-[32px] px-6 py-14 max-md:gap-3" style={{ background: p.bg }}>
          {frames.map((f) => (
            <div key={f.kind} aria-hidden className="w-[210px] flex-none rounded-[34px] bg-[#0B0B10] p-2 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)]" style={{ height: f.h, transform: `rotate(${f.rot}deg)` }}>
              <div className="flex h-full w-full flex-col gap-2.5 overflow-hidden rounded-[26px] bg-white px-3.5 pb-3.5">
                <span className="h-3.5 w-16 self-center rounded-b-[10px] bg-[#0B0B10]" />
                <div className="flex items-center justify-between">
                  <span className="size-[22px] rounded-[7px]" style={{ background: p.primary }} />
                  <span className="h-[7px] w-14 rounded bg-[#E2E2E8]" />
                </div>
                {f.kind === "hero" && (
                  <div className="flex flex-col gap-2.5 rounded-2xl px-3.5 py-[18px]" style={{ background: p.primary }}>
                    <span className="font-display text-[15px] leading-[1.15] font-extrabold text-white">{p.headline}</span>
                    <span className="h-[22px] w-[70px] rounded-[20px]" style={{ background: p.accent }} />
                  </div>
                )}
                {f.kind === "list" && (
                  <div className="grid grid-cols-2 gap-2">
                    {[p.primary, "#F2F2F5", "#F2F2F5", p.accent].map((c, i) => <span key={i} className="h-16 rounded-xl" style={{ background: c }} />)}
                  </div>
                )}
                {f.kind === "form" && (
                  <div className="flex flex-col gap-2">
                    <span className="h-2.5 w-[70%] rounded-[5px] bg-ink" />
                    <span className="h-9 rounded-[10px] border-[1.5px] border-[#E2E2E8]" />
                    <span className="h-9 rounded-[10px] border-[1.5px] border-[#E2E2E8]" />
                    <span className="h-9 rounded-[10px] border-[1.5px]" style={{ borderColor: p.primary }} />
                  </div>
                )}
                <span className="h-[50px] rounded-xl bg-[#F4F4F7]" />
                <span className="h-[50px] rounded-xl bg-[#F4F4F7]" />
                <span className="mt-auto h-9 rounded-[20px]" style={{ background: p.primary }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
