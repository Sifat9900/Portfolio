import { site } from "@/data/site";
import { Icon } from "./Icon";

/** Bottom row: values, copyright and back-to-top. */
export function FooterBar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-5">
      <div className="flex flex-wrap gap-x-[26px] gap-y-2.5 text-[15px] text-[#4A4A55]">
        <span className="inline-flex items-center gap-2"><Icon name="focus" size={16} />Designed with Purpose</span>
        <span className="inline-flex items-center gap-2"><Icon name="pin" size={16} />Based in Bangladesh</span>
        <span className="inline-flex items-center gap-2"><Icon name="bolt" size={16} />Focused on Impact</span>
      </div>
      <span className="inline-flex items-center gap-[18px] text-sm text-muted">
        © 2026 {site.name}
        <a href="#top" className="font-semibold text-ink no-underline hover:text-accent">Back to top ↑</a>
      </span>
    </div>
  );
}

/** Full footer with the email call to action (home and All projects pages). */
export function Footer({ tone = "mist" }: { tone?: "mist" | "white" }) {
  const chip = tone === "mist" ? "bg-white" : "bg-mist";
  const social = `press inline-flex size-12 items-center justify-center rounded-[14px] border border-line-2 ${chip} font-display text-base font-extrabold text-ink no-underline`;

  return (
    <footer id="contact" className={`sec border-t border-line pt-24 pb-7 ${tone === "mist" ? "bg-mist" : "bg-white"}`}>
      <div className="wrap flex flex-col gap-16">
        <div className="flex flex-col items-center gap-[22px] text-center">
          <span className="inline-flex size-14 rounded-[14px] border border-[#E6E6EA] bg-white p-1 shadow-[0_6px_16px_-8px_rgba(20,20,40,0.3)]">
            <span className="inline-flex flex-1 items-center justify-center rounded-[10px] bg-accent font-display text-[17px] font-extrabold text-white">MS</span>
          </span>
          <h2 className="m-0 max-w-[760px] font-display text-[56px] leading-[1.06] font-extrabold tracking-[-0.04em] text-[#1A1A1F] max-md:text-[32px]">
            Your Next Great Product Starts Here
          </h2>
          <p className="m-0 text-lg text-muted">Drop me an email and let’s turn your idea into something people love to use.</p>
          <a
            href={`mailto:${site.email}`}
            className="press inline-flex h-12 items-center gap-3.5 rounded-xl bg-[#0B0B0F] pr-2 pl-5 text-[17px] font-semibold text-white no-underline shadow-[0_14px_28px_-12px_rgba(0,0,0,0.55)] hover:text-white max-xs:text-[15px]"
          >
            {site.email}
            <span className="inline-flex size-8 items-center justify-center rounded-lg border border-white/30"><Icon name="arrowRight" size={16} /></span>
          </a>
          <span className="inline-flex items-center gap-2 text-sm text-muted">
            <span className="size-2 animate-pulse-dot rounded-full bg-live" />
            Open to new projects
          </span>
          <div className="mt-1 flex gap-2.5">
            <a className={social} href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
            <a className={social} href={site.socials.behance} target="_blank" rel="noopener noreferrer" aria-label="Behance">Bē</a>
            <a className={social} href={site.socials.dribbble} target="_blank" rel="noopener noreferrer" aria-label="Dribbble"><Icon name="dribbble" /></a>
          </div>
        </div>
        <div className="border-t border-line-2 pt-7">
          <FooterBar />
        </div>
      </div>
    </footer>
  );
}
