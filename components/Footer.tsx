"use client";

import { NAV_ITEMS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-900 text-slate-300">
      {/* Animated geometric blur shapes (background) */}
      <div className="aw-footer-shape aw-footer-shape-1" aria-hidden />
      <div className="aw-footer-shape aw-footer-shape-2" aria-hidden />
      <div className="aw-footer-shape aw-footer-shape-3" aria-hidden />
      <div className="aw-footer-shape aw-footer-shape-4" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          {/* Logo + short details */}
          <div className="max-w-sm">
            <a
              href="#top"
              className="group inline-flex items-center gap-2 rounded-xl px-1 py-0.5 transition hover:opacity-90"
              aria-label="Affiliate Warehouse – back to top"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-orange-600 shadow-lg shadow-orange-500/25 transition group-hover:shadow-orange-500/35">
                <span className="h-2 w-2 rounded-full bg-white" />
              </span>
              <span className="text-lg font-bold tracking-tight">
                <span className="text-white">Affiliate</span>
                <span className="text-amber-400"> Warehouse</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Corporate pricing access and tracking for preferred contractors—wholesaler-safe,
              low-friction, no lock-ins.
            </p>
            <p className="mt-2 text-xs text-slate-500">
              No discount, no charge. Fees only where verifiable savings occur.
            </p>
          </div>

          {/* Links: navigation + legal */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-12">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Navigate
              </h3>
              <ul className="mt-3 space-y-2.5">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className="text-sm text-slate-400 transition hover:text-amber-400 focus:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Legal
              </h3>
              <ul className="mt-3 space-y-2.5">
                <li>
                  <a
                    href="#compliance-ethics"
                    className="text-sm text-slate-400 transition hover:text-amber-400 focus:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                  >
                    Compliance & ethics
                  </a>
                </li>
                <li>
                  <a
                    href="#disclaimer"
                    className="text-sm text-slate-400 transition hover:text-amber-400 focus:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                  >
                    Legal disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {year} Affiliate Warehouse. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Wholesaler-safe positioning · Non-exclusive · Voluntary participation
          </p>
        </div>
      </div>
    </footer>
  );
}
