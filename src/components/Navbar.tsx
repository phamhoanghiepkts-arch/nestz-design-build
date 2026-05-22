"use client";

import { useState } from "react";
import { NestzLogo } from "@/components/NestzLogo";
import { siteContent } from "@/data/siteContent";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { hero, navigation } = siteContent;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-900/10 bg-paper/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#top" aria-label="NESTZ home">
          <NestzLogo />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-stone-700 transition hover:text-charcoal"
            >
              {item.label}
            </a>
          ))}
          <a
            href={hero.cta.href}
            className="border border-charcoal bg-charcoal px-5 py-2.5 text-sm font-bold text-paper transition hover:border-clay hover:bg-clay"
          >
            {hero.cta.label}
          </a>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center border border-stone-400 text-charcoal md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="h-0.5 w-5 bg-current shadow-[0_7px_0_current,0_-7px_0_current]" />
        </button>
      </nav>

      {open ? (
        <div className="border-t border-stone-900/10 bg-paper px-5 pb-5 md:hidden">
          <div className="flex flex-col gap-1 pt-3">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-3 text-base font-medium text-charcoal"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={hero.cta.href}
              className="mt-2 border border-charcoal bg-charcoal px-4 py-3 text-center text-sm font-bold text-paper"
              onClick={() => setOpen(false)}
            >
              {hero.cta.label}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
