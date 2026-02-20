"use client";

import * as React from "react";
import { FEATURES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

const FEATURE_META: Array<{
  icon: React.ReactNode;
  accent: string;
  borderGlow: string;
  tag: string;
}> = [
  {
    tag: "Access",
    accent: "violet",
    borderGlow: "border-violet-400/50 shadow-violet-500/20",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 15v2m-6 4h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2zm10-10V7a4 4 0 0 0-8 0v4h8z" />
      </svg>
    ),
  },
  {
    tag: "Tracking",
    accent: "teal",
    borderGlow: "border-teal-400/50 shadow-teal-500/20",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M15 3v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V3" />
        <path d="M9 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <path d="M21 13v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2" />
        <path d="M3 9h4l2 4 4-8h4" />
      </svg>
    ),
  },
  {
    tag: "Procurement",
    accent: "amber",
    borderGlow: "border-amber-400/50 shadow-amber-500/20",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
      </svg>
    ),
  },
  {
    tag: "Onboarding",
    accent: "fuchsia",
    borderGlow: "border-fuchsia-400/50 shadow-fuchsia-500/20",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const iconBg: Record<string, string> = {
  violet: "bg-violet-500/90 text-white",
  teal: "bg-teal-500/90 text-white",
  amber: "bg-amber-500/90 text-white",
  fuchsia: "bg-fuchsia-500/90 text-white",
};

export function Features() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.06, once: true });

  return (
    <section
      id="features"
      ref={ref}
      className="relative scroll-mt-24 min-h-screen min-h-[100dvh] overflow-hidden bg-slate-900"
    >
      {/* Animated dark background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950"
        aria-hidden="true"
      />
      <div
        className="aw-features-orb absolute -left-[15%] top-[10%] h-[min(60vw,380px)] w-[min(60vw,380px)] rounded-full bg-violet-600/40 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="aw-features-orb-2 absolute -right-[10%] bottom-[15%] h-[min(55vw,340px)] w-[min(55vw,340px)] rounded-full bg-teal-500/35 blur-[90px]"
        aria-hidden="true"
      />
      <div
        className="aw-features-orb-3 absolute left-1/2 top-1/2 h-[min(45vw,280px)] w-[min(45vw,280px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/25 blur-[80px]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="relative flex min-h-screen min-h-[100dvh] flex-col justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto w-full max-w-[1200px]">
          {/* Headline */}
          <div
            className={cn(
              "text-center transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <span className="inline-block rounded-full border border-violet-400/40 bg-violet-500/20 px-4 py-1.5 text-sm font-semibold text-violet-300">
              Practical tools
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Price, tracking & access —{" "}
              <span className="bg-gradient-to-r from-violet-400 via-teal-400 to-amber-400 bg-clip-text text-transparent">
                without disruption
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-400 sm:text-lg">
              Designed for conservative deployment: improve what you can, where it helps.
            </p>
          </div>

          {/* Feature cards */}
          <div className="mt-10 grid gap-6 sm:gap-8 sm:mt-14 lg:grid-cols-2">
            {FEATURES.map((feature, idx) => {
              const meta = FEATURE_META[idx];
              return (
                <div
                  key={feature.title}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border bg-slate-800/80 p-6 shadow-xl backdrop-blur-sm transition-all duration-500 sm:p-8",
                    "hover:-translate-y-1 hover:shadow-2xl",
                    meta.borderGlow,
                    "will-change-transform",
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  )}
                  style={{ transitionDelay: `${100 + idx * 80}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative flex items-start gap-4 sm:gap-5">
                    <span
                      className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14",
                        iconBg[meta.accent]
                      )}
                      aria-hidden="true"
                    >
                      {meta.icon}
                    </span>
                    <div className="min-w-0 flex-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        {meta.tag}
                      </span>
                      <h3 className="mt-1 text-lg font-bold text-white sm:text-xl">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom tagline */}
          <div
            className={cn(
              "mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center sm:mt-14",
              inView ? "opacity-100" : "opacity-0"
            )}
            style={{ transition: "opacity 0.6s ease 0.45s" }}
          >
            <span className="text-sm text-slate-500">Wholesaler-safe</span>
            <span className="text-slate-600">·</span>
            <span className="text-sm text-slate-500">No operational change required</span>
            <span className="text-slate-600">·</span>
            <span className="text-sm text-slate-500">Optional alerts</span>
          </div>
        </div>
      </div>
    </section>
  );
}
