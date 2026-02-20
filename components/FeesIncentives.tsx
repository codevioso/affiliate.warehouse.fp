"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

export function FeesIncentives() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.06, once: true });

  return (
    <section
      id="fees"
      ref={ref}
      className="relative min-h-screen min-h-[100dvh] overflow-hidden bg-slate-700"
    >
      {/* Dark animated background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900"
        aria-hidden="true"
      />
      <div
        className="aw-tracking-orb absolute -right-[12%] top-[10%] h-[min(50vw,320px)] w-[min(50vw,320px)] rounded-full bg-violet-500/30 blur-[90px]"
        aria-hidden="true"
      />
      <div
        className="aw-tracking-orb-2 absolute -left-[10%] bottom-[15%] h-[min(48vw,300px)] w-[min(48vw,300px)] rounded-full bg-amber-500/25 blur-[80px]"
        aria-hidden="true"
      />
      <div
        className="aw-tracking-orb-3 absolute left-1/2 top-1/2 h-[min(40vw,260px)] w-[min(40vw,260px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/20 blur-[70px]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)`,
          backgroundSize: "36px 36px",
        }}
        aria-hidden="true"
      />

      <div className="relative flex min-h-screen min-h-[100dvh] flex-col justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto w-full max-w-[1100px] space-y-10 sm:space-y-14">
          {/* Headline */}
          <div
            className={cn(
              "text-center transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <span className="inline-block rounded-full border border-amber-400/40 bg-amber-500/20 px-4 py-1.5 text-sm font-semibold text-amber-300">
              Transparent fees
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Fees &{" "}
              <span className="bg-gradient-to-r from-violet-400 via-amber-400 to-emerald-400 bg-clip-text text-transparent">
                aligned incentives
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-400 sm:text-lg">
              You pay only when you save. Our fee is a small share of verified savings—nothing upfront, no lock-ins.
            </p>
          </div>

          {/* No discount → no charge */}
          <div
            className={cn(
              "rounded-2xl border-2 border-emerald-500/40 bg-slate-800/90 p-6 shadow-xl backdrop-blur-sm sm:p-8",
              "transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-center">
              <span className="rounded-xl bg-emerald-500/20 px-4 py-2 text-lg font-bold text-emerald-300">
                No discount
              </span>
              <svg
                className="h-8 w-8 shrink-0 text-emerald-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <span className="rounded-xl bg-emerald-500/20 px-4 py-2 text-lg font-bold text-emerald-300">
                No charge
              </span>
            </div>
            <p className="mt-4 text-center text-sm text-slate-400">
              If there’s no discount on a purchase, Affiliate Warehouse does not charge you. Zero fee when there’s no verified savings.
            </p>
          </div>

          {/* When discount achieved: 1.1% AW / Contractor remainder */}
          <div
            className={cn(
              "grid gap-6 transition-all duration-700 sm:grid-cols-2 lg:grid-cols-3",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="rounded-2xl border border-slate-600/60 bg-slate-800/90 p-6 shadow-xl backdrop-blur-sm sm:p-8">
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  When a discount is achieved
                </p>
                <p className="mt-3 text-base text-slate-300">
                  Verified savings are split fairly and transparently.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border-2 border-violet-400/50 bg-violet-500/10 p-6 shadow-xl backdrop-blur-sm sm:p-8">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl font-extrabold text-violet-300 sm:text-4xl">1.1%</span>
                <p className="mt-2 text-sm font-semibold text-violet-200">Affiliate Warehouse retains</p>
                <p className="mt-1 text-xs text-slate-400">Of verified savings</p>
              </div>
            </div>
            <div className="rounded-2xl border-2 border-amber-400/50 bg-amber-500/10 p-6 shadow-xl backdrop-blur-sm sm:p-8 sm:col-span-2 lg:col-span-1">
              <div className="flex flex-col items-center text-center">
                <span className="text-2xl font-extrabold text-amber-300 sm:text-3xl">Remainder</span>
                <p className="mt-2 text-sm font-semibold text-amber-200">Contractor keeps</p>
                <p className="mt-1 text-xs text-slate-400">The rest of the savings</p>
              </div>
            </div>
          </div>

          {/* Monthly billing on verified savings */}
          <div
            className={cn(
              "rounded-2xl border border-slate-600/60 bg-slate-800/90 p-6 shadow-xl backdrop-blur-sm sm:p-8",
              "transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
            style={{ transitionDelay: "320ms" }}
          >
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <span className="inline-flex items-center gap-2 rounded-xl border border-teal-400/40 bg-teal-500/20 px-4 py-2.5 text-sm font-bold text-teal-300">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                Fees billed monthly
              </span>
              <span className="text-slate-500">only on</span>
              <span className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-500/20 px-4 py-2.5 text-sm font-bold text-emerald-300">
                verified savings
              </span>
            </div>
            <p className="mt-4 text-center text-sm text-slate-400">
              Invoicing is monthly and based only on savings we’ve verified—no guesswork, no minimums.
            </p>
          </div>

          {/* Summary line */}
          <div
            className={cn(
              "text-center transition-opacity duration-600",
              inView ? "opacity-100" : "opacity-0"
            )}
            style={{ transitionDelay: "440ms" }}
          >
            <p className="text-sm font-medium text-slate-500">
              No discount = no charge · 1.1% of verified savings · You keep the remainder · Billed monthly only
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
