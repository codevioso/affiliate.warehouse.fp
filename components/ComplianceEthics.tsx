"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

const PRINCIPLES = [
  {
    title: "Procurement support and price-monitoring service",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3v18h18" />
        <path d="M18 17V9" />
        <path d="M13 17V5" />
        <path d="M8 17v-3" />
      </svg>
    ),
    accent: "violet",
  },
  {
    title: "No resale of goods",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 18 18 6M6 6l12 12" />
      </svg>
    ),
    accent: "teal",
  },
  {
    title: "No alteration of wholesaler terms",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
    accent: "amber",
  },
  {
    title: "Voluntary participation",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    accent: "emerald",
  },
  {
    title: "Transparent comparison encouraged",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    accent: "slate",
  },
] as const;

export function ComplianceEthics({ overlay }: { overlay?: boolean }) {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.15, once: true });

  return (
    <section
      id="compliance-ethics"
      ref={ref}
      className={cn(
        "relative min-w-0 w-full overflow-hidden py-16 sm:py-20",
        overlay
          ? "border-0 bg-transparent"
          : "border-y border-slate-200/60 bg-gradient-to-b from-white via-slate-50/80 to-violet-50/40"
      )}
    >
      {!overlay && (
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)`,
            backgroundSize: "28px 28px",
          }}
          aria-hidden
        />
      )}
      <div className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="space-y-10 sm:space-y-12">
          {/* Headline */}
          <div
            className={cn(
              "text-center transition-all duration-600",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <span className="inline-block rounded-full border border-slate-200 bg-white/90 px-4 py-1.5 text-sm font-semibold text-slate-700 shadow-sm">
              Compliance & ethics
            </span>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Clear positioning
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-base text-slate-600">
              We operate as a procurement support and price-monitoring service—no resale, no alteration of wholesaler terms, voluntary participation, and transparent comparison.
            </p>
          </div>

          {/* Principles grid */}
          <div
            className={cn(
              "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "100ms", transitionDuration: "500ms" }}
          >
            {PRINCIPLES.map((item, idx) => (
              <div
                key={item.title}
                className={cn(
                  "flex items-start gap-4 rounded-xl border-2 bg-white p-5 shadow-md transition-all duration-300 hover:shadow-lg",
                  item.accent === "violet" && "border-violet-200/80 hover:border-violet-300/80",
                  item.accent === "teal" && "border-teal-200/80 hover:border-teal-300/80",
                  item.accent === "amber" && "border-amber-200/80 hover:border-amber-300/80",
                  item.accent === "emerald" && "border-emerald-200/80 hover:border-emerald-300/80",
                  item.accent === "slate" && "border-slate-200/80 hover:border-slate-300/80"
                )}
              >
                <span
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                    item.accent === "violet" && "bg-violet-100 text-violet-600",
                    item.accent === "teal" && "bg-teal-100 text-teal-600",
                    item.accent === "amber" && "bg-amber-100 text-amber-600",
                    item.accent === "emerald" && "bg-emerald-100 text-emerald-600",
                    item.accent === "slate" && "bg-slate-100 text-slate-600"
                  )}
                  aria-hidden
                >
                  {item.icon}
                </span>
                <p className="pt-1 text-sm font-semibold leading-snug text-slate-800">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          {/* Full-width principle (5th spans on lg if 2+3 layout) - actually we have 5 items, 2+2+1 on sm, or 3+2 on lg. So one card will be alone on second row. That's fine. */}
        </div>
      </div>
    </section>
  );
}
