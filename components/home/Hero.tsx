import { clients } from "@/data/home";
import { Icon, type IconName } from "../Icon";

function StatCard({ icon, value, label, bg, ink, className, r }: { icon: IconName; value: string; label: string; bg: string; ink: string; className: string; r: string }) {
  return (
    <div
      className={`absolute z-[1] flex items-center gap-3 rounded-[20px] border border-[#EDEDEF] bg-white/85 px-[18px] py-4 shadow-[0_24px_50px_-28px_rgba(20,20,40,0.35)] backdrop-blur-md max-xl:hidden ${className}`}
      style={{ ["--r" as string]: r }}
    >
      <span className="ficon" style={{ background: bg, color: ink }}><Icon name={icon} /></span>
      <span className="text-left">
        <span className="block font-display text-2xl leading-none font-extrabold">{value}</span>
        <span className="mt-1 block text-[13px] text-muted">{label}</span>
      </span>
    </div>
  );
}

function Chip({ icon, label, bg, ink, className, r }: { icon: IconName; label: string; bg: string; ink: string; className: string; r: string }) {
  return (
    <div
      className={`absolute z-[1] flex items-center gap-2.5 rounded-full border border-[#EDEDEF] bg-white py-2.5 pr-4 pl-2.5 text-sm font-semibold shadow-[0_18px_40px_-24px_rgba(20,20,40,0.35)] max-xl:hidden ${className}`}
      style={{ ["--r" as string]: r }}
    >
      <span className="inline-flex size-[30px] items-center justify-center rounded-full" style={{ background: bg, color: ink }}><Icon name={icon} size={15} strokeWidth={2.2} /></span>
      {label}
    </div>
  );
}

export function Hero() {
  const marquee = [...clients, ...clients];
  return (
    <section id="top" className="sec relative -mt-[60px] overflow-hidden pt-[116px] pb-16">
      <div aria-hidden className="hero-grid absolute inset-0" />
      <div aria-hidden className="absolute -top-[260px] left-1/2 h-[620px] w-[980px] -translate-x-1/2 rounded-full" style={{ background: "radial-gradient(closest-side, #5B3DF533, transparent)" }} />

      <StatCard icon="clock" value="5+" label="Years of experience" bg="#E9E4FF" ink="#4B2FD6" r="-6deg" className="top-[250px] left-[max(24px,calc(50%-640px))] animate-floaty" />
      <StatCard icon="layers" value="50+" label="Projects delivered" bg="#FFE4EC" ink="#B0234F" r="6deg" className="top-[210px] right-[max(24px,calc(50%-640px))] animate-floaty2" />
      <Chip icon="pen" label="Figma-first" bg="#16161D" ink="#FFFFFF" r="4deg" className="top-[470px] left-[max(60px,calc(50%-560px))] animate-floaty2" />
      <Chip icon="globe" label="10+ industries" bg="#D9F4E3" ink="#136B3B" r="-4deg" className="top-[440px] right-[max(60px,calc(50%-560px))] animate-floaty" />

      <div className="wrap relative z-[2] flex max-w-[920px] flex-col items-center gap-7 text-center">
        <div className="inline-flex items-center gap-3.5 rounded-[20px] border border-[#EDEDEF] bg-white py-2 pr-[18px] pl-2 text-left shadow-[0_1px_2px_rgba(20,20,40,0.04),0_16px_32px_-20px_rgba(20,20,40,0.3)]">
          <span className="relative inline-flex size-[52px] items-center justify-center rounded-[14px] bg-accent font-display text-[17px] font-extrabold text-white">
            MS
            <span className="absolute -right-[3px] -bottom-[3px] size-3.5 animate-pulse-dot rounded-full border-[3px] border-white bg-live" />
          </span>
          <span>
            <span className="block font-display text-[17px] font-bold tracking-[-0.01em]">Mohammed Sifat</span>
            <span className="mt-0.5 block text-[15px] text-muted">UI/UX Designer · Open to new projects</span>
          </span>
        </div>

        <h1 className="m-0 font-display text-[80px] leading-[1.02] font-extrabold tracking-[-0.05em] text-[#141418] max-md:text-[44px]">
          Crafting Digital Experiences <span className="text-[#A1A1AA]">People Love and Brands Trust</span>
        </h1>

        <p className="m-0 max-w-[620px] text-[19px] leading-[1.6] text-muted">
          With 5+ years and 50+ projects behind me, I take products from research and wireframes to polished UI and design systems that work for users and for business.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#contact"
            className="press inline-flex h-[52px] items-center gap-3.5 rounded-[14px] bg-[linear-gradient(180deg,#2A2A31_0%,#0B0B0F_100%)] pr-2 pl-[22px] text-[17px] font-semibold text-white no-underline shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_16px_32px_-14px_rgba(0,0,0,0.6)] hover:text-white"
          >
            Book a Free Call
            <span className="inline-flex size-9 items-center justify-center rounded-[10px] border border-white/20 bg-white/10"><Icon name="arrowRight" size={16} /></span>
          </a>
          <a
            href="#projects"
            className="press inline-flex h-[52px] items-center rounded-[14px] border border-line-2 bg-white px-[22px] text-[17px] font-semibold text-ink no-underline shadow-[inset_0_-2px_0_#EEEEF1,0_1px_2px_rgba(20,20,40,0.06)]"
          >
            View projects
          </a>
        </div>

        <div className="mt-9 flex w-full max-w-[760px] flex-col items-center gap-4 rounded-3xl border border-[#EDEDEF] bg-white/70 px-6 py-[22px] backdrop-blur-md">
          <span className="text-[13px] font-semibold tracking-[0.1em] text-[#6B6B76] uppercase">Proudly worked with</span>
          <div className="mask-fade-x w-full overflow-hidden">
            <div className="marquee flex w-max animate-marquee gap-12">
              {marquee.map((c, i) => (
                <span key={i} aria-hidden={i >= clients.length} className="font-display text-xl font-extrabold tracking-[-0.02em] whitespace-nowrap text-[#6B6B76]">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
