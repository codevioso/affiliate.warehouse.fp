"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

const POINTS = [
  {
    label: "No contracts",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
    accent: "violet",
  },
  {
    label: "No minimum spend",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    accent: "teal",
  },
  {
    label: "No exclusivity",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    accent: "amber",
  },
  {
    label: "Stop using at any time",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M15 9l-6 6M9 9l6 6" />
      </svg>
    ),
    accent: "emerald",
  },
] as const;

export function NoLockIns() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.2, once: true });

  return (
    <section
      id="no-lock-ins"
      ref={ref}
      className="relative overflow-hidden border-y border-slate-200/60 bg-gradient-to-b from-white via-violet-50/30 to-slate-50 py-12 sm:py-14"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)", backgroundSize: "24px 24px" }} aria-hidden />
      <div className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "text-center transition-all duration-600",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <span className="inline-block rounded-full border border-violet-200 bg-violet-100/80 px-3 py-1 text-sm font-semibold text-violet-800">
            No lock-ins
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Complete flexibility
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600">
            Participate on your terms—no contracts, no minimums, no exclusivity. Stop using at any time.
          </p>
        </div>
        <div
          className={cn(
            "mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: "100ms", transitionDuration: "500ms" }}
        >
          {POINTS.map((point, idx) => (
            <div
              key={point.label}
              className={cn(
                "flex items-center gap-4 rounded-xl border-2 bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:p-5",
                point.accent === "violet" && "border-violet-200/80 hover:shadow-violet-200/30",
                point.accent === "teal" && "border-teal-200/80 hover:shadow-teal-200/30",
                point.accent === "amber" && "border-amber-200/80 hover:shadow-amber-200/30",
                point.accent === "emerald" && "border-emerald-200/80 hover:shadow-emerald-200/30"
              )}
            >
              <span
                className={cn(
                  "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                  point.accent === "violet" && "bg-violet-100 text-violet-600",
                  point.accent === "teal" && "bg-teal-100 text-teal-600",
                  point.accent === "amber" && "bg-amber-100 text-amber-600",
                  point.accent === "emerald" && "bg-emerald-100 text-emerald-600"
                )}
                aria-hidden
              >
                {point.icon}
              </span>
              <span className="text-base font-bold text-slate-800">{point.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
