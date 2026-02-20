"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

export function ProblemStrip() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.08, once: true });

  return (
    <section
      id="problem"
      ref={ref}
      className="relative min-h-screen min-h-[100dvh] overflow-hidden"
    >
      {/* Animated background */}
      <div
        className="aw-problem-bg-shine absolute inset-0 bg-gradient-to-br from-violet-100/90 via-teal-50/80 to-amber-50/90"
        aria-hidden="true"
      />
      <div
        className="aw-problem-orb absolute -left-[20%] top-[15%] h-[min(70vw,420px)] w-[min(70vw,420px)] rounded-full bg-gradient-to-br from-violet-400/40 to-fuchsia-400/30 blur-[80px]"
        aria-hidden="true"
      />
      <div
        className="aw-problem-orb-2 absolute -right-[15%] bottom-[20%] h-[min(60vw,380px)] w-[min(60vw,380px)] rounded-full bg-gradient-to-br from-amber-300/50 to-orange-400/40 blur-[70px]"
        aria-hidden="true"
      />
      <div
        className="aw-problem-orb-3 absolute left-1/2 top-1/2 h-[min(50vw,320px)] w-[min(50vw,320px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-teal-400/35 to-emerald-400/30 blur-[60px]"
        aria-hidden="true"
      />
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="relative flex min-h-screen min-h-[100dvh] flex-col justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto w-full max-w-[1200px]">
          {/* Headline block */}
          <div
            className={cn(
              "text-center transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <span className="inline-block rounded-full border border-violet-300/60 bg-violet-100/80 px-4 py-1.5 text-sm font-semibold text-violet-800 shadow-sm">
              The challenges
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Independent contractors face{" "}
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-amber-500 bg-clip-text text-transparent">
                real friction
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600 sm:text-lg">
              Repeat purchasing works against you when visibility and leverage are missing.
            </p>
          </div>

          {/* Main problem cards */}
          <div className="mt-10 grid gap-6 sm:gap-8 lg:grid-cols-3 lg:mt-14">
            {CARDS.map((card, idx) => (
              <div
                key={card.title}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border-2 p-6 shadow-xl transition-all duration-500 sm:p-8",
                  "hover:-translate-y-2 hover:shadow-2xl",
                  "will-change-transform",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                  card.className
                )}
                style={{ transitionDelay: `${120 + idx * 80}ms` }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:bg-gradient-to-br group-hover:from-white/20 group-hover:to-transparent" />
                <div className="relative">
                  <span
                    className={cn(
                      "inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16",
                      card.iconBg
                    )}
                    aria-hidden="true"
                  >
                    {card.icon}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-slate-900 sm:text-2xl">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {card.desc}
                  </p>
                  {card.detail && (
                    <p className="mt-3 text-xs font-medium text-slate-500 sm:text-sm">
                      {card.detail}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Impact bullets */}
          <div
            className={cn(
              "mt-10 flex flex-wrap justify-center gap-4 sm:mt-14 sm:gap-6",
              inView ? "opacity-100" : "opacity-0"
            )}
            style={{ transition: "opacity 0.6s ease 0.4s" }}
          >
            {IMPACT_ITEMS.map((item, i) => (
              <div
                key={item.label}
                className="flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white/80 px-4 py-2.5 shadow-md backdrop-blur-sm"
              >
                <span className="text-lg" aria-hidden="true">
                  {item.emoji}
                </span>
                <span className="text-sm font-semibold text-slate-700">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Outcome CTA block */}
          <div
            className={cn(
              "mt-10 rounded-2xl border-2 border-violet-200/60 bg-white/90 p-6 text-center shadow-xl backdrop-blur-sm sm:mt-14 sm:p-8",
              "transition-all duration-600",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
            style={{ transitionDelay: "500ms" }}
          >
            <p className="text-lg font-bold text-slate-900 sm:text-xl lg:text-2xl">
              Affiliate Warehouse turns repeat purchasing into{" "}
              <span className="text-violet-600">leverage</span> — without disrupting wholesaler
              systems.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              All pricing and availability are set by wholesalers. Participation is voluntary and
              non-exclusive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const IMPACT_ITEMS = [
  { label: "Visibility", emoji: "👁️" },
  { label: "Leverage", emoji: "⚡" },
  { label: "No lock-in", emoji: "🔓" },
  { label: "Job-coded", emoji: "📋" },
];

const CARDS: Array<{
  title: string;
  desc: string;
  detail?: string;
  icon: React.ReactNode;
  iconBg: string;
  className: string;
}> = [
  {
    title: "Prices shift quietly",
    desc: "Repeat purchases can drift up over time without clear visibility. You only notice when margins shrink.",
    detail: "No single view of what you paid last time vs. now.",
    iconBg: "bg-violet-500 text-white",
    className:
      "border-violet-200/70 bg-gradient-to-br from-violet-50 to-white shadow-violet-200/40",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 sm:h-7 sm:w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 8v4l3 2" />
        <path d="M21 12a9 9 0 1 1-3-6.7" />
        <path d="M21 3v6h-6" />
      </svg>
    ),
  },
  {
    title: "Negotiation power is limited",
    desc: "Independent contractors often miss the tiers and terms available to larger operators.",
    detail: "Volume discounts and rebates stay out of reach.",
    iconBg: "bg-teal-500 text-white",
    className: "border-teal-200/70 bg-gradient-to-br from-teal-50 to-white shadow-teal-200/40",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 sm:h-7 sm:w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 20V10" />
        <path d="M8 20V4" />
        <path d="M16 20v-8" />
        <path d="M4 20h16" />
      </svg>
    ),
  },
  {
    title: "Quoting becomes harder",
    desc: "Without tracking, margins get squeezed between quotes and re-orders. Profit leaks away quietly.",
    detail: "Reconciling job costs becomes guesswork.",
    iconBg: "bg-amber-500 text-white",
    className:
      "border-amber-200/70 bg-gradient-to-br from-amber-50 to-white shadow-amber-200/40",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 sm:h-7 sm:w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M7 7h10" />
        <path d="M7 11h10" />
        <path d="M7 15h6" />
        <path d="M6 3h9l3 3v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      </svg>
    ),
  },
];
