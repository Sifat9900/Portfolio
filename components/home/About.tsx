import { countries, facts, glance, principles, skills, tools } from "@/data/home";
import { site } from "@/data/site";
import { Icon } from "../Icon";
import { Journey } from "./Journey";

const outline = "press inline-flex h-11 items-center rounded-full border border-[#DCDCE2] px-[18px] text-sm font-semibold text-ink no-underline";

export function About() {
  return (
    <section id="about" className="sec border-b border-line bg-white py-28 max-md:py-[72px]">
      <div className="wrap flex flex-col gap-10">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-[640px]">
            <div className="eyebrow mb-3">04 · About me</div>
            <h2 className="h2">A designer with an engineer’s mind</h2>
          </div>
          <p className="m-0 max-w-[420px] text-base leading-[1.6] text-body">Here’s the breakdown: who I am, what I’ve built, where I’ve worked and how I work.</p>
        </div>

        <div className="grid grid-cols-12 gap-5 max-md:gap-3.5">
          {/* Who I am */}
          <div className="col-span-7 flex flex-col gap-5 rounded-[28px] border border-line bg-paper p-8 max-lg:col-span-12">
            <span className="flex items-center gap-3">
              <span className="ficon bg-ink text-white"><Icon name="user" /></span>
              <span className="font-display text-[22px] font-extrabold">Who I am</span>
            </span>
            <p className="m-0 font-display text-2xl leading-[1.4] font-bold tracking-[-0.015em]">
              I create digital experiences that blend clarity with purpose, guiding you from the initial idea to a beautifully crafted, fully functional interface.
            </p>
            <p className="m-0 text-base leading-[1.7] text-body">
              With a degree in Computer Science and Engineering, I’ve delivered 50+ projects with education groups and software companies in the UK, UAE and Bangladesh. I enjoy the research as much as the pixels.
            </p>
            <div className="mt-auto grid grid-cols-2 gap-3 max-xs:grid-cols-1">
              {facts.map((f) => (
                <div key={f.label} className="flex items-center gap-3 rounded-2xl border border-line bg-white p-3.5">
                  <span className="ficon bg-accent/10 text-accent"><Icon name={f.icon} /></span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted">{f.label}</span>
                    <span className="mt-0.5 block text-[15px] font-semibold">{f.value}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Portrait */}
          <div className="relative col-span-5 flex min-h-[460px] items-center justify-center overflow-hidden rounded-[28px] bg-accent max-lg:col-span-12">
            <svg className="absolute animate-spin-slow opacity-35" aria-hidden width="420" height="420" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="none" stroke="#FFFFFF" strokeWidth="0.4" strokeDasharray="2 3" />
              <circle cx="50" cy="50" r="34" fill="none" stroke="#FFFFFF" strokeWidth="0.4" />
            </svg>
            <div aria-hidden className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.16)_1px,transparent_1.4px)] bg-[length:22px_22px]" />
            <div className="relative flex size-[220px] items-center justify-center rounded-full border border-white/35 bg-white/15 font-display text-[92px] font-extrabold tracking-[-0.04em] text-white">MS</div>
            <span className="absolute top-8 left-6 inline-flex animate-floaty items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-ink shadow-[0_10px_24px_-12px_rgba(0,0,0,0.4)]" style={{ ["--r" as string]: "-6deg" }}>
              <Icon name="clock" size={16} strokeWidth={2.2} className="text-accent" />5+ years in UI/UX
            </span>
            <span className="absolute top-[42%] right-[22px] inline-flex animate-floaty2 items-center gap-2 rounded-full bg-sun px-4 py-2.5 text-sm font-bold text-ink shadow-[0_10px_24px_-12px_rgba(0,0,0,0.4)]" style={{ ["--r" as string]: "5deg" }}>
              <Icon name="pin" size={16} strokeWidth={2.2} />Chittagong, BD
            </span>
            <span className="absolute bottom-[120px] left-10 inline-flex animate-floaty items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-bold text-white" style={{ ["--r" as string]: "-3deg" }}>
              <Icon name="pen" size={16} strokeWidth={2.2} />Figma-first
            </span>
            <div className="absolute right-5 bottom-5 left-5 flex items-center gap-3 rounded-[20px] border border-white/30 bg-white/15 px-[18px] py-4 text-white backdrop-blur-md">
              <span className="size-2.5 flex-none animate-pulse-dot rounded-full bg-[#4ADE80]" />
              <span className="text-sm leading-[1.4]"><strong>Currently</strong> designing at Planet Education System, London</span>
            </div>
          </div>

          {/* At a glance */}
          {glance.map((g) => (
            <div key={g.label} className="tilt col-span-3 flex min-h-[190px] flex-col justify-end gap-1.5 rounded-3xl p-6 max-lg:col-span-6" style={{ background: g.bg }}>
              <span className="ficon mb-auto bg-white" style={{ color: g.ink }}><Icon name={g.icon} /></span>
              <span className="font-display text-5xl leading-none font-extrabold tracking-[-0.03em]" style={{ color: g.ink }}>{g.value}</span>
              <span className="text-[15px] font-semibold text-ink">{g.label}</span>
              <span className="text-[13px] text-body">{g.note}</span>
            </div>
          ))}

          {/* Countries */}
          <div className="col-span-12 flex flex-col gap-5 rounded-[28px] border border-line bg-paper p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="flex items-center gap-3">
                <span className="ficon bg-accent/10 text-accent"><Icon name="globe" /></span>
                <span className="font-display text-[22px] font-extrabold">Countries I’ve worked with</span>
              </span>
              <span className="text-sm text-muted">Clients and teams across {countries.length} countries</span>
            </div>
            <div className="grid grid-cols-6 gap-3 max-lg:grid-cols-3 max-xs:grid-cols-2">
              {countries.map((c) => (
                <div key={c.code} className="tilt flex flex-col gap-2.5 rounded-[18px] border border-line bg-white p-4">
                  <span className="flex items-center justify-between">
                    <span className="inline-flex size-11 items-center justify-center rounded-[14px] font-display text-sm font-extrabold" style={{ background: c.bg, color: c.ink }}>{c.code}</span>
                    <Icon name="pin" size={16} className="text-[#8A8A94]" />
                  </span>
                  <span className="font-display text-[17px] font-extrabold">{c.name}</span>
                  <span className="text-[13px] leading-[1.45] text-muted">{c.note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Journey */}
          <Journey />

          {/* Toolbox + skills */}
          <div className="col-span-12 flex flex-col gap-[22px] rounded-[28px] border border-line bg-paper p-7">
            <span className="flex items-center gap-3">
              <span className="ficon bg-[#FFE8D2] text-[#A9470C]"><Icon name="wrench" /></span>
              <span className="font-display text-[22px] font-extrabold">Toolbox</span>
            </span>
            <div className="grid grid-cols-6 gap-3 max-lg:grid-cols-3 max-xs:grid-cols-2">
              {tools.map((t) => (
                <div key={t.name} className="tilt flex flex-col gap-3 rounded-[18px] border border-line bg-white p-[18px]">
                  <span className="inline-flex size-12 items-center justify-center rounded-[14px]" style={{ background: t.bg, color: t.ink }}>
                    <Icon name={t.icon} size={24} strokeWidth={t.icon === "asterisk" ? 2.2 : 2} />
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className="text-[15px] font-bold">{t.name}</span>
                    <span className="text-[13px] text-muted">{t.use}</span>
                  </span>
                </div>
              ))}
            </div>
            <span className="mt-1 flex items-center gap-3">
              <span className="ficon bg-[#FFF1B8] text-[#7A5600]"><Icon name="sparkle" /></span>
              <span className="font-display text-[22px] font-extrabold">Skills</span>
            </span>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="rounded-full border border-line-2 bg-white px-3.5 py-2 text-sm font-medium text-[#2A2A33]">{s}</span>
              ))}
            </div>
          </div>

          {/* How I work */}
          {principles.map((pr) => (
            <div key={pr.num} className="tilt col-span-4 flex flex-col gap-2.5 rounded-3xl p-[26px] max-lg:col-span-12" style={{ background: pr.bg }}>
              <span className="flex items-center justify-between">
                <span className="ficon bg-white" style={{ color: pr.ink }}><Icon name={pr.icon} /></span>
                <span className="font-display text-sm font-extrabold" style={{ color: pr.ink }}>{pr.num}</span>
              </span>
              <span className="font-display text-[21px] font-extrabold tracking-[-0.015em]">{pr.title}</span>
              <span className="text-[15px] leading-[1.55] text-soft">{pr.desc}</span>
            </div>
          ))}

          {/* See more */}
          <div className="col-span-12 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-line px-7 py-[22px]">
            <span className="flex items-center gap-3">
              <span className="ficon bg-accent/10 text-accent"><Icon name="link" /></span>
              <span className="font-display text-xl font-extrabold">See more of my work</span>
            </span>
            <div className="flex flex-wrap gap-2.5">
              <a className="press inline-flex h-11 items-center rounded-full bg-ink px-[18px] text-sm font-semibold text-white no-underline hover:text-white" href={site.socials.behance} target="_blank" rel="noopener noreferrer">Behance</a>
              <a className={outline} href={site.socials.dribbble} target="_blank" rel="noopener noreferrer">Dribbble</a>
              <a className={outline} href={site.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="press inline-flex h-11 items-center rounded-full bg-accent px-[18px] text-sm font-semibold text-white no-underline hover:text-white" href={`mailto:${site.email}`}>Email me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
