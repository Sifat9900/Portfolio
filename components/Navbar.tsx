"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "./Icon";

type NavKey = "home" | "projects" | "services" | "about";

/**
 * Floating pill navbar. On the home page links scroll to sections;
 * on inner pages they point back to the home page sections.
 */
export function Navbar({ onHome = false, active }: { onHome?: boolean; active?: NavKey }) {
  const [open, setOpen] = useState(false);
  const base = onHome ? "" : "/";

  const items: { key: NavKey; label: string; href: string }[] = [
    { key: "home", label: "Home", href: onHome ? "#top" : "/" },
    { key: "projects", label: "Projects", href: onHome ? "#projects" : "/projects" },
    { key: "services", label: "Services", href: `${base}#services` },
    { key: "about", label: "About", href: `${base}#about` },
  ];
  const contact = `${base}#contact`;

  return (
    <header className="sticky top-4 z-20 px-4">
      <div className="mx-auto flex h-[60px] max-w-[780px] items-center justify-between gap-4 rounded-2xl border border-[#EDEDEF] bg-white/95 pr-2 pl-3.5 shadow-[0_1px_2px_rgba(20,20,40,0.04),0_10px_30px_-18px_rgba(20,20,40,0.25)] backdrop-blur-md">
        <Link href={onHome ? "#top" : "/"} aria-label="Mohammed Sifat, home" className="flex items-center gap-0.5 text-ink no-underline">
          <span className="inline-flex size-[26px] items-center justify-center rounded-[7px] bg-ink font-display text-base font-extrabold text-white">S</span>
          <span className="font-display text-lg font-semibold tracking-[-0.01em]">ifat</span>
        </Link>

        <div className="flex items-center gap-3">
          <nav aria-label="Main" className="flex items-center gap-0.5 max-md:hidden">
            {items.map((n) => (
              <Link
                key={n.key}
                href={n.href}
                aria-current={active === n.key ? "page" : undefined}
                className={`p-2.5 text-base no-underline hover:text-accent ${active === n.key ? "font-bold text-ink" : "font-medium text-[#4A4A55]"}`}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <Link
            href={contact}
            className="press inline-flex h-11 items-center rounded-xl border border-line-2 bg-white px-5 text-base font-semibold text-ink no-underline shadow-[inset_0_-2px_0_#EEEEF1,0_1px_2px_rgba(20,20,40,0.06)] max-md:hidden"
          >
            Contact
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="press hidden size-11 items-center justify-center rounded-xl border border-line-2 bg-white text-ink max-md:inline-flex"
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="mx-auto mt-2 flex max-w-[780px] animate-fade-up flex-col rounded-2xl border border-[#EDEDEF] bg-white px-4 pt-2 pb-4 shadow-[0_20px_40px_-24px_rgba(20,20,40,0.35)] md:hidden"
        >
          {items.map((n) => (
            <Link key={n.key} href={n.href} onClick={() => setOpen(false)} className="border-b border-line px-1 py-3.5 text-[17px] font-semibold text-ink no-underline">
              {n.label}
            </Link>
          ))}
          <Link href={contact} onClick={() => setOpen(false)} className="mt-3.5 flex h-12 items-center justify-center rounded-full bg-accent font-semibold text-white no-underline">
            Let’s talk
          </Link>
        </nav>
      )}
    </header>
  );
}
