"use client";

import * as React from "react";
import { STEPS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

const STEP_META: Array<{
  icon: React.ReactNode;
  gradient: string;
  borderClass: string;
  Diagram: React.ComponentType<{ className?: string }>;
}> = [
  {
    gradient: "from-violet-500 to-violet-600",
    borderClass: "border-violet-200/70 hover:shadow-violet-200/30",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
    Diagram: ({ className }) => (
      <div className={cn("flex items-center justify-center gap-2", className)} aria-hidden>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-violet-200 bg-violet-50 text-violet-600">
          <span className="text-xs font-bold">You</span>
        </div>
        <svg className="h-5 w-5 shrink-0 text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-violet-300 bg-violet-100 text-violet-700">
          <span className="text-xs font-bold">OK</span>
        </div>
      </div>
    ),
  },
  {
    gradient: "from-teal-500 to-teal-600",
    borderClass: "border-teal-200/70 hover:shadow-teal-200/30",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
    Diagram: ({ className }) => (
      <div className={cn("flex items-center justify-center gap-1", className)} aria-hidden>
        <div className="h-9 w-9 rounded-full border-2 border-teal-200 bg-teal-50" />
        <div className="h-0.5 w-4 rounded bg-teal-300" />
        <div className="h-9 w-9 rounded-full border-2 border-teal-300 bg-teal-100" />
        <div className="h-0.5 w-4 rounded bg-teal-300" />
        <div className="h-9 w-9 rounded-full border-2 border-teal-300 bg-teal-100" />
      </div>
    ),
  },
  {
    gradient: "from-amber-500 to-amber-600",
    borderClass: "border-amber-200/70 hover:shadow-amber-200/30",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3v18h18" />
        <path d="M18 17V9" />
        <path d="M13 17V5" />
        <path d="M8 17v-3" />
      </svg>
    ),
    Diagram: ({ className }) => (
      <div className={cn("relative flex items-end justify-center gap-0.5", className)} aria-hidden>
        {[4, 7, 5, 9, 6].map((h, i) => (
          <div
            key={i}
            className="w-2 rounded-t bg-amber-400/80"
            style={{ height: `${h * 4}px` }}
          />
        ))}
        <span className="absolute -right-0.5 top-0 text-[10px] leading-none text-amber-600" aria-hidden>🔔</span>
      </div>
    ),
  },
  {
    gradient: "from-fuchsia-500 to-fuchsia-600",
    borderClass: "border-fuchsia-200/70 hover:shadow-fuchsia-200/30",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    ),
    Diagram: ({ className }) => (
      <div className={cn("flex items-center justify-center gap-2", className)} aria-hidden>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-fuchsia-200 bg-fuchsia-50 text-fuchsia-600">
          <span className="text-[10px] font-bold">Job</span>
        </div>
        <svg className="h-5 w-5 text-fuchsia-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 6 9 17l-5-5" />
        </svg>
        <span className="text-xs font-medium text-slate-600">Apply</span>
      </div>
    ),
  },
];

export function HowItWorks() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.04, once: true });

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="relative scroll-mt-24 min-h-screen min-h-[100dvh] overflow-hidden"
    >
      {/* Light animated background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-white via-violet-50/40 to-teal-50/30"
        aria-hidden="true"
      />
      <div
        className="aw-how-orb absolute -right-[10%] top-[5%] h-[min(50vw,320px)] w-[min(50vw,320px)] rounded-full bg-violet-300/50 blur-[90px]"
        aria-hidden="true"
      />
      <div
        className="aw-how-orb-2 absolute -left-[8%] bottom-[10%] h-[min(45vw,280px)] w-[min(45vw,280px)] rounded-full bg-teal-300/45 blur-[80px]"
        aria-hidden="true"
      />
      <div
        className="aw-how-orb-3 absolute left-1/2 top-1/2 h-[min(40vw,240px)] w-[min(40vw,240px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-200/50 blur-[70px]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="relative flex min-h-screen min-h-[100dvh] flex-col justify-center px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto w-full max-w-[1200px] space-y-12 sm:space-y-16">
          {/* Headline */}
          <div
            className={cn(
              "text-center transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <span className="inline-block rounded-full border border-violet-200 bg-violet-100/80 px-4 py-1.5 text-sm font-semibold text-violet-800">
              Simple process
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              How it{" "}
              <span className="bg-gradient-to-r from-violet-600 via-teal-600 to-amber-500 bg-clip-text text-transparent">
                works
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600 sm:text-lg">
              Our Independent preferred contractors choose to participate together. No disruption to existing wholesaler relationships.
            </p>
          </div>

          {/* Process flow diagram */}
          <div
            className={cn(
              "transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
            style={{ transitionDelay: "80ms" }}
          >
            <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-slate-500">
              Process flow
            </p>
            <div className="flex flex-wrap items-stretch justify-center gap-2 sm:gap-3">
              {STEPS.map((step, idx) => (
                <React.Fragment key={step.title}>
                  <div
                    className={cn(
                      "flex min-w-[140px] flex-1 flex-col items-center rounded-xl border-2 bg-white/95 px-3 py-4 shadow-md sm:min-w-0 sm:max-w-[200px] sm:px-4 sm:py-5",
                      STEP_META[idx].borderClass
                    )}
                  >
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-600">
                      {idx + 1}
                    </span>
                    <span className="mt-2 text-center text-sm font-bold text-slate-800 sm:text-base">
                      {step.title}
                    </span>
                  </div>
                  {idx < STEPS.length - 1 && (
                    <div className="hidden flex-shrink-0 items-center sm:flex" aria-hidden>
                      <svg className="h-6 w-6 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 8l4 4-4 4" />
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Step cards with explanation diagrams */}
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 xl:grid-cols-4">
            {STEPS.map((step, idx) => {
              const meta = STEP_META[idx];
              const Diagram = meta.Diagram;
              return (
                <div
                  key={step.title}
                  className={cn(
                    "group relative flex flex-col rounded-2xl border-2 bg-white/90 p-6 shadow-lg shadow-slate-200/50 backdrop-blur-sm transition-all duration-500 sm:p-6",
                    "hover:-translate-y-2 hover:shadow-xl",
                    meta.borderClass,
                    "will-change-transform",
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  )}
                  style={{ transitionDelay: `${160 + idx * 90}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg transition-transform duration-300 group-hover:scale-110",
                        meta.gradient
                      )}
                      aria-hidden="true"
                    >
                      {meta.icon}
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-bold text-slate-600">
                      Step {idx + 1}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-slate-900 sm:text-xl">
                    {step.title}
                  </h3>
                  {/* Inline explanation diagram */}
                  <div className="relative my-4 flex min-h-[52px] items-center justify-center rounded-xl bg-slate-50/80 p-3">
                    <Diagram className="relative" />
                  </div>
                  <p className="mt-0 flex-1 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* System overview explanation diagram */}
          <div
            className={cn(
              "transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
            style={{ transitionDelay: "520ms" }}
          >
            <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-slate-500">
              How the system fits in
            </p>
            <div className="mx-auto max-w-3xl rounded-2xl border-2 border-slate-200/80 bg-white/95 p-6 shadow-lg sm:p-8">
              <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:gap-4">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-slate-200 bg-slate-50 text-slate-700">
                    <span className="text-xs font-bold">You</span>
                  </div>
                  <span className="mt-2 text-sm font-semibold text-slate-800">Contractor</span>
                </div>
                <div className="flex flex-col items-center">
                  <svg className="h-8 w-8 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  <span className="mt-1 text-xs text-slate-500">Job-coded orders</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-violet-200 bg-violet-50 text-violet-700">
                    <span className="text-xs font-bold">AW</span>
                  </div>
                  <span className="mt-2 text-sm font-semibold text-slate-800">Affiliate Warehouse</span>
                  <span className="mt-0.5 text-xs text-slate-500">Tracking & access</span>
                </div>
                <div className="flex flex-col items-center">
                  <svg className="h-8 w-8 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  <span className="mt-1 text-xs text-slate-500">No bypass</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-teal-200 bg-teal-50 text-teal-700">
                    <span className="text-xs font-bold">W</span>
                  </div>
                  <span className="mt-2 text-sm font-semibold text-slate-800">Wholesaler</span>
                  <span className="mt-0.5 text-xs text-slate-500">Existing systems</span>
                </div>
              </div>
              <p className="mt-6 text-center text-sm leading-relaxed text-slate-600">
                Orders go through your existing wholesaler. Affiliate Warehouse adds visibility and corporate-level access where available — it does not replace or bypass wholesaler systems.
              </p>
            </div>
          </div>

          {/* Bottom line */}
          <div
            className={cn(
              "text-center transition-opacity duration-600",
              inView ? "opacity-100" : "opacity-0"
            )}
            style={{ transitionDelay: "620ms" }}
          >
            <p className="text-sm font-medium text-slate-600">
              No lock-ins · No obligations · Use improved pricing where it helps
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
