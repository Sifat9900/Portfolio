"use client";

import { useEffect, useState } from "react";
import { processSteps } from "@/data/home";
import { Icon, PauseIcon, PlayIcon } from "../Icon";

const ROT = [-3, 2.5, -2, 3, -1.5];
const N = processSteps.length;

export function Process() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => setStep((s) => (s + 1) % N), 2200);
    return () => clearInterval(t);
  }, [playing]);

  const pick = (i: number) => {
    setPlaying(false);
    setStep(i);
  };
  const go = (d: number) => pick((step + d + N) % N);
  const togglePlay = () => {
    if (!playing) setStep((s) => (s + 1) % N);
    setPlaying((p) => !p);
  };

  const sd = processSteps[step];

  return (
    <section id="process" className="sec relative overflow-hidden bg-[#F6F3FF] py-28 max-md:py-[72px]">
      <svg className="absolute top-[60px] -left-[30px] animate-spin-slow opacity-90" aria-hidden width="140" height="140" viewBox="0 0 100 100">
        <path d="M50 4l9 28 29-6-20 22 20 22-29-6-9 28-9-28-29 6 20-22-20-22 29 6z" fill="#FFD84D" />
      </svg>
      <svg className="absolute top-[70px] right-[6%] animate-floaty" aria-hidden width="90" height="90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="#FF8FB1" strokeWidth="10" strokeDasharray="14 12" />
      </svg>
      <svg className="absolute right-[12%] bottom-[60px] animate-floaty2" aria-hidden width="160" height="60" viewBox="0 0 160 60">
        <path d="M4 30c16-24 32-24 48 0s32 24 48 0 32-24 48 0" fill="none" stroke="#7CD8A6" strokeWidth="8" strokeLinecap="round" />
      </svg>

      <div className="wrap relative flex flex-col gap-11">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[640px]">
            <div className="eyebrow mb-3">03 · Process</div>
            <h2 className="h2">
              From messy problem to{" "}
              <span className="inline-block -rotate-2 rounded-xl bg-sun px-2.5">delightful</span> product
            </h2>
            <p className="mt-3.5 mb-0 text-[17px] leading-[1.65] text-body">My five-step design thinking process, kept lean. Tap a step, or take the quick tour.</p>
          </div>
          <button
            type="button"
            onClick={togglePlay}
            aria-pressed={playing}
            className="press inline-flex h-[52px] items-center gap-2.5 rounded-full border-2 border-ink bg-white pr-[22px] pl-2 text-[15px] font-bold text-ink shadow-[4px_4px_0_#16161D]"
          >
            <span className="inline-flex size-[38px] items-center justify-center rounded-full bg-accent text-white">{playing ? <PauseIcon /> : <PlayIcon />}</span>
            {playing ? "Pause tour" : "Play the tour"}
          </button>
        </div>

        <div role="tablist" aria-label="Process steps" className="relative grid grid-cols-5 gap-[18px] max-lg:grid-cols-[repeat(5,minmax(170px,1fr))] max-lg:overflow-x-auto max-lg:px-1 max-lg:pt-3 max-lg:pb-[18px]">
          <svg aria-hidden viewBox="0 0 1000 120" preserveAspectRatio="none" className="pointer-events-none absolute top-[70px] left-[4%] h-[120px] w-[92%] max-lg:hidden">
            <path d="M0 40 C 100 0, 150 110, 250 80 S 400 0, 500 40 S 650 120, 750 80 S 900 10, 1000 40" fill="none" stroke="#16161D" strokeWidth="2.5" strokeDasharray="8 10" opacity="0.35" />
          </svg>
          {processSteps.map((st, i) => {
            const a = step === i;
            return (
              <button
                key={st.title}
                type="button"
                role="tab"
                aria-selected={a}
                onClick={() => pick(i)}
                className={`tilt relative z-[1] flex flex-col gap-3.5 rounded-[28px] border-2 p-[22px] text-left text-ink ${i % 2 === 1 ? "mt-9 max-lg:mt-0" : ""}`}
                style={{
                  background: st.bg,
                  borderColor: a ? "#16161D" : "transparent",
                  transform: `rotate(${a ? 0 : ROT[i]}deg) scale(${a ? 1.04 : 1})`,
                  boxShadow: a ? "6px 6px 0 #16161D" : "0 10px 24px -18px rgba(20,20,40,0.5)",
                }}
              >
                <span className="flex items-start justify-between">
                  <span className="blob inline-flex size-16 items-center justify-center text-white" style={{ background: st.ink }}>
                    <Icon name={st.icon} size={30} />
                  </span>
                  <span className="font-display text-[30px] leading-none font-extrabold opacity-35" style={{ color: st.ink }}>0{i + 1}</span>
                </span>
                <span className="font-display text-[22px] font-extrabold tracking-[-0.015em] text-ink">{st.title}</span>
                <span className="text-sm font-medium text-soft">{st.tag}</span>
              </button>
            );
          })}
        </div>

        <div
          key={step}
          className="grid animate-fade-up grid-cols-[0.8fr_1.2fr] items-center gap-9 rounded-[32px] border-2 border-ink bg-white p-7 max-lg:grid-cols-1"
          style={{ boxShadow: `8px 8px 0 ${sd.ink}` }}
        >
          <div className="relative flex h-[260px] items-center justify-center overflow-hidden rounded-[26px]" style={{ background: sd.bg }}>
            <svg className="absolute animate-spin-slow" aria-hidden width="230" height="230" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="46" fill="none" stroke={sd.ink} strokeWidth="1.5" strokeDasharray="4 6" opacity="0.5" />
            </svg>
            <span aria-hidden className="absolute top-[20%] left-[18%] size-[18px] animate-floaty rounded-full bg-sun" />
            <span aria-hidden className="absolute right-[16%] bottom-[22%] size-[26px] animate-floaty2 rounded-lg bg-white" style={{ ["--r" as string]: "18deg" }} />
            <span aria-hidden className="absolute top-[16%] right-[22%] size-3 animate-floaty2 rounded-full" style={{ background: sd.ink }} />
            <span className="blob inline-flex size-32 animate-floaty items-center justify-center text-white shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)]" style={{ background: sd.ink }}>
              <Icon name={sd.icon} size={60} strokeWidth={1.8} />
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="self-start rounded-full px-3 py-1.5 text-[13px] font-bold" style={{ background: sd.bg, color: sd.ink }}>Step 0{step + 1} of 05</span>
            <div className="font-display text-4xl font-extrabold tracking-[-0.025em]">{sd.title}</div>
            <p className="m-0 text-base leading-[1.65] text-body">{sd.desc}</p>
            <div className="flex flex-wrap gap-2">
              {sd.items.map((si) => (
                <span key={si} className="inline-flex items-center gap-2 rounded-[14px] border-[1.5px] border-ink bg-white px-3.5 py-[9px] text-sm font-semibold text-ink">
                  <Icon name="check" size={16} strokeWidth={2.6} style={{ color: sd.ink }} />
                  {si}
                </span>
              ))}
            </div>
            <div className="mt-2 flex items-center justify-between gap-4">
              <div className="flex gap-1.5" aria-hidden>
                {processSteps.map((d, i) => (
                  <span key={d.title} className="h-2 rounded transition-[width] duration-300" style={{ width: step === i ? 28 : 8, background: step === i ? "#16161D" : "#D6D6DE" }} />
                ))}
              </div>
              <div className="flex gap-2">
                <button type="button" aria-label="Previous step" onClick={() => go(-1)} className="press inline-flex size-[46px] items-center justify-center rounded-full border-2 border-ink bg-white text-ink">
                  <Icon name="chevronLeft" size={18} strokeWidth={2.2} />
                </button>
                <button type="button" aria-label="Next step" onClick={() => go(1)} className="press inline-flex size-[46px] items-center justify-center rounded-full border-2 border-ink bg-ink text-white">
                  <Icon name="chevronRight" size={18} strokeWidth={2.2} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
