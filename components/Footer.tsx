"use client";

import { NAV_ITEMS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-violet-200/40 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto w-full max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-violet-600 shadow-md">
                <span className="h-2 w-2 rounded-full bg-white" />
              </span>
              Affiliate Warehouse
            </div>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
              Corporate pricing access and tracking for trade contractors—built to be conservative,
              wholesaler-safe, and low-friction.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-violet-600"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200/60 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Affiliate Warehouse. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <span>Wholesaler-safe positioning</span>
            <span aria-hidden="true">•</span>
            <span>No lock-ins</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

