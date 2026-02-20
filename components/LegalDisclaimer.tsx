"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

const DISCLAIMER_ITEMS = [
  {
    text: "Pricing and discounts set by wholesalers and subject to change.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    accent: "slate",
  },
  {
    text: "No guaranteed savings on all products.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    accent: "amber",
  },
  {
    text: "Larger or high-volume items typically see stronger results.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    accent: "teal",
  },
  {
    text: "Savings vary by product, supplier, and market conditions.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4v16a2 2 0 002 2h12a2 2 0 002-2V4" />
      </svg>
    ),
    accent: "violet",
  },
  {
    text: "Fees only apply where verifiable savings occur.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    accent: "emerald",
  },
  {
    text: "Non-exclusive and voluntary participation.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    accent: "slate",
  },
] as const;

export function LegalDisclaimer({ overlay }: { overlay?: boolean }) {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.15, once: true });

  return (
    <section
      id="disclaimer"
      ref={ref}
      className={cn(
        "relative min-w-0 w-full overflow-hidden py-16 sm:py-20",
        overlay
          ? "border-0 bg-transparent"
          : "border-t border-slate-200/60 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60"
      )}
    >
      <div className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="space-y-10 sm:space-y-12">
          {/* Headline – same structure as ComplianceEthics */}
          <div
            className={cn(
              "text-center transition-all duration-600",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <span className="inline-block rounded-full border border-slate-200 bg-white/90 px-4 py-1.5 text-sm font-semibold text-slate-700 shadow-sm">
              Important information
            </span>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Short legal disclaimer
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-base text-slate-600">
              Pricing, savings, and participation terms you should know before using our service.
            </p>
          </div>

          {/* Disclaimer items grid – card layout like ComplianceEthics */}
          <div
            className={cn(
              "grid gap-4 grid-cols-1 sm:grid-cols-2",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "100ms", transitionDuration: "500ms" }}
          >
            {DISCLAIMER_ITEMS.map((item) => (
              <div
                key={item.text}
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
                <p className="pt-1 text-sm font-medium leading-snug text-slate-700">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
