import Image from "next/image";
import type { CSSProperties } from "react";
import type { Project } from "@/data/projects";

type ArtProject = Pick<Project, "name" | "kind" | "headline" | "domain" | "bg" | "primary" | "accent" | "img">;

/**
 * Project thumbnail. Shows the real image when there is one; otherwise draws
 * a branded browser + phone mock-up (websites) or two phones (apps).
 * All mock-up sizes use container-query units so it scales with the card.
 */
export function ProjectArt({
  p,
  ratio = "16 / 10",
  sizes = "(max-width: 720px) 100vw, 50vw",
  priority = false,
}: {
  p: ArtProject;
  ratio?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const isWeb = !!p.domain;
  const pill = (w: string, bg: string, extra: CSSProperties = {}): CSSProperties => ({ width: w, height: "0.6cqw", borderRadius: "1cqw", background: bg, ...extra });

  return (
    <div
      role="img"
      aria-label={`${p.name} — project preview`}
      className="relative w-full overflow-hidden font-display text-ink"
      style={{ aspectRatio: ratio, background: p.bg, containerType: "inline-size" }}
    >
      <div aria-hidden className="absolute rounded-full opacity-45" style={{ width: "62cqw", height: "62cqw", right: "-16cqw", top: "-26cqw", background: `radial-gradient(circle, ${p.accent} 0%, transparent 62%)` }} />
      <div aria-hidden className="absolute rounded-full opacity-55" style={{ width: "70cqw", height: "70cqw", left: "-24cqw", bottom: "-40cqw", background: `radial-gradient(circle, ${p.primary} 0%, transparent 60%)` }} />

      {p.img ? (
        <Image src={p.img} alt="" fill sizes={sizes} priority={priority} className="object-cover object-center" />
      ) : isWeb ? (
        <>
          <div aria-hidden className="absolute overflow-hidden bg-white" style={{ left: "7cqw", top: "9cqw", width: "66cqw", borderRadius: "1.4cqw", boxShadow: "0 3cqw 7cqw -2cqw rgba(0,0,0,.6)" }}>
            <div className="flex items-center bg-[#F2F2F5]" style={{ height: "3.4cqw", gap: "0.7cqw", padding: "0 1.4cqw" }}>
              {["#FF6159", "#FFBD2E", "#28C941"].map((c) => <span key={c} className="rounded-full" style={{ width: "0.9cqw", height: "0.9cqw", background: c }} />)}
              <span className="flex items-center bg-white font-sans text-muted" style={{ marginLeft: "2cqw", height: "1.9cqw", padding: "0 1.2cqw", borderRadius: "1cqw", fontSize: "1.05cqw" }}>{p.domain}</span>
            </div>
            <div className="flex items-center justify-between" style={{ padding: "1.6cqw 2.4cqw" }}>
              <div className="flex items-center" style={{ gap: "0.8cqw" }}>
                <span style={{ width: "2.2cqw", height: "2.2cqw", borderRadius: "0.6cqw", background: p.primary }} />
                <span className="font-extrabold" style={{ fontSize: "1.35cqw" }}>{p.name}</span>
              </div>
              <div className="flex items-center" style={{ gap: "1.4cqw" }}>
                {[0, 1, 2].map((i) => <span key={i} style={pill("3.6cqw", "#D9D9E0")} />)}
                <span style={{ width: "7cqw", height: "2.4cqw", borderRadius: "2cqw", background: p.primary }} />
              </div>
            </div>
            <div className="relative overflow-hidden" style={{ margin: "0 2.4cqw", borderRadius: "1.2cqw", background: p.primary, padding: "3.6cqw 3cqw" }}>
              <span className="absolute rounded-full opacity-35" style={{ right: "-4cqw", top: "-5cqw", width: "18cqw", height: "18cqw", background: p.accent }} />
              <div className="relative font-extrabold text-white" style={{ fontSize: "3.1cqw", lineHeight: 1.1, maxWidth: "36cqw", letterSpacing: "-0.02em" }}>{p.headline}</div>
              <div className="relative" style={pill("24cqw", "rgba(255,255,255,.5)", { height: "0.7cqw", marginTop: "1.8cqw" })} />
              <div className="relative flex" style={{ gap: "1cqw", marginTop: "2.2cqw" }}>
                <span style={{ width: "9cqw", height: "2.8cqw", borderRadius: "2cqw", background: p.accent }} />
                <span style={{ width: "8cqw", height: "2.8cqw", borderRadius: "2cqw", border: "0.2cqw solid rgba(255,255,255,.7)" }} />
              </div>
            </div>
            <div className="grid grid-cols-3" style={{ gap: "1.4cqw", padding: "2cqw 2.4cqw 2.6cqw" }}>
              {[p.accent, p.primary, p.accent].map((c, i) => (
                <div key={i} className="bg-[#F4F4F7]" style={{ height: "8cqw", borderRadius: "1cqw", padding: "1.2cqw" }}>
                  <span className="block" style={{ width: "2.4cqw", height: "2.4cqw", borderRadius: "0.6cqw", background: c }} />
                  <span className="block" style={pill("70%", "#D9D9E0", { marginTop: "1.6cqw" })} />
                </div>
              ))}
            </div>
          </div>
          <Phone p={p} style={{ right: "6cqw", top: "19cqw", width: "21cqw" }} />
        </>
      ) : (
        <>
          <Phone p={p} style={{ left: "21cqw", top: "8cqw", width: "25cqw", transform: "rotate(-7deg)" }} />
          <Phone p={p} alt style={{ left: "53cqw", top: "15cqw", width: "25cqw", transform: "rotate(6deg)" }} />
        </>
      )}

      <div
        aria-hidden
        className="absolute flex items-center border border-white/20 bg-white/15 font-sans font-semibold text-white backdrop-blur-sm"
        style={{ left: "3.4cqw", bottom: "3.4cqw", gap: "0.9cqw", padding: "0.9cqw 1.6cqw", borderRadius: "3cqw", fontSize: "1.35cqw" }}
      >
        <span className="rounded-full" style={{ width: "1cqw", height: "1cqw", background: p.accent }} />
        {p.kind}
      </div>
    </div>
  );
}

function Phone({ p, style, alt = false }: { p: ArtProject; style: CSSProperties; alt?: boolean }) {
  return (
    <div aria-hidden className="absolute bg-[#0B0B10]" style={{ aspectRatio: "9 / 19", borderRadius: "3.4cqw", padding: "0.9cqw", boxShadow: "0 3cqw 7cqw -2cqw rgba(0,0,0,.7)", ...style }}>
      <div className={`flex h-full w-full flex-col overflow-hidden ${alt ? "bg-[#F7F7FA]" : "bg-white"}`} style={{ borderRadius: "2.6cqw", gap: "1cqw", padding: "0 1.2cqw 1.2cqw" }}>
        <span className="self-center bg-[#0B0B10]" style={{ width: "6cqw", height: "1.3cqw", borderRadius: "0 0 1cqw 1cqw" }} />
        {alt ? (
          <div className="grid grid-cols-2" style={{ gap: "1.2cqw" }}>
            {[p.primary, "#FFFFFF", "#FFFFFF", p.accent].map((c, i) => <span key={i} style={{ height: "8cqw", borderRadius: "1.4cqw", background: c }} />)}
          </div>
        ) : (
          <div className="flex flex-col" style={{ borderRadius: "1.4cqw", background: p.primary, padding: "2.2cqw 1.6cqw", gap: "1.2cqw" }}>
            <span className="font-extrabold text-white" style={{ fontSize: "1.75cqw", lineHeight: 1.12 }}>{p.headline}</span>
            <span style={{ width: "7cqw", height: "2cqw", borderRadius: "2cqw", background: p.accent }} />
          </div>
        )}
        <div className="bg-[#F4F4F7]" style={{ height: "5.4cqw", borderRadius: "1cqw" }} />
        <span className="mt-auto" style={{ height: "3.2cqw", borderRadius: "2cqw", background: alt ? "#16161D" : p.primary }} />
      </div>
    </div>
  );
}
