"use client";

import * as React from "react";
import { CTAButton } from "@/components/CTAButton";
import { Badge } from "@/components/ui/Badge";
import { MiniTable, type MiniTableRow } from "@/components/ui/MiniTable";
import { StatCard } from "@/components/ui/StatCard";
import { cn } from "@/lib/utils";

type HeroProps = {
  onRequestAccess: () => void;
};

const STAGGER = 80;

export function Hero({ onRequestAccess }: HeroProps) {
  const rows: MiniTableRow[] = [
    {
      item: "Cable 2.5mm (100m)",
      supplier: "TradeZone",
      last: "$212",
      current: "$198",
      trend: "down",
    },
    {
      item: "RCBO 20A",
      supplier: "Ideal Electrical",
      last: "$38",
      current: "$41",
      trend: "up",
    },
    {
      item: "Conduit 25mm",
      supplier: "Voltex",
      last: "$11",
      current: "$11",
      trend: "flat",
    },
  ];

  return (
    <section id="top" className="relative min-h-screen min-h-[100dvh] w-full overflow-hidden border-b border-slate-200/40">
      {/* Full-width background: base + geometric blur shapes */}
      <div className="absolute inset-0 aw-hero-bg" aria-hidden />
      <div className="aw-hero-shape aw-hero-shape-1" aria-hidden />
      <div className="aw-hero-shape aw-hero-shape-2" aria-hidden />
      <div className="aw-hero-shape aw-hero-shape-3" aria-hidden />
      <div className="aw-hero-shape aw-hero-shape-4" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-transparent to-slate-900/60"
        aria-hidden
      />

      {/* Content: centered in viewport, clear and animated */}
      <div className="relative flex min-h-screen min-h-[100dvh] w-full items-center">
        <div className="mx-auto w-full max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Left: copy */}
            <div className="space-y-6">
              <h1
                className="aw-hero-animate text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl"
                style={{ animationDelay: `${STAGGER}ms` }}
              >
                <span className="text-white">We Help Our preferred contractors Access Better Pricing</span>
                <br />
                <em className="font-bold not-italic text-amber-300 text-2xl sm:text-3xl lg:text-4xl">
                  — Transparently
                </em>
              </h1>

              <p
                className="aw-hero-animate max-w-xl text-base leading-7 text-slate-200 sm:text-lg"
                style={{ animationDelay: `${STAGGER * 2}ms` }}
              >
                <strong className="font-semibold text-white">Collective buying power</strong>, price
                tracking, and corporate-level trade accounts —{" "}
                <em className="text-slate-300">without lock-ins or obligations.</em>
              </p>

              <div
                className="aw-hero-animate flex flex-col gap-3 sm:flex-row sm:items-center"
                style={{ animationDelay: `${STAGGER * 3}ms` }}
              >
                <CTAButton
                  variant="orange"
                  onClick={onRequestAccess}
                  className="text-center"
                >
                  Apply to Become a Preferred Contractor
                </CTAButton>
                <CTAButton
                  variant="secondary"
                  onClick={() => {
                    document
                      .querySelector("#how-it-works")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="border-slate-500/50 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                >
                  See how it works
                </CTAButton>
              </div>

              <div
                className="aw-hero-animate flex flex-col gap-2 border-l-2 border-slate-500/50 pl-4"
                style={{ animationDelay: `${STAGGER * 4}ms` }}
              >
                <span className="flex items-center gap-2 text-sm text-slate-200">
                  <span className="text-emerald-400" aria-hidden>
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                  <span className="font-semibold text-white">No lock-ins</span>
                </span>
                <span className="flex items-center gap-2 text-sm text-slate-200">
                  <span className="text-amber-400" aria-hidden>
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </span>
                  <span className="font-semibold text-white">No discount = no charge</span>
                </span>
                <span className="flex items-center gap-2 text-sm text-slate-200">
                  <span className="text-violet-400" aria-hidden>
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                  </span>
                  <span className="text-slate-300">Optional price-change alerts</span>
                </span>
              </div>

              <div
                className="aw-hero-animate flex flex-col gap-3 pt-2 sm:flex-row sm:items-center"
                style={{ animationDelay: `${STAGGER * 5}ms` }}
              >
                <span className="text-sm font-bold uppercase tracking-wide text-slate-400">
                  Built for:
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Electrical", className: "bg-violet-500/90 text-white ring-violet-400/60" },
                    { label: "HVAC", className: "bg-teal-500/90 text-white ring-teal-400/60" },
                    { label: "Solar", className: "bg-amber-500/90 text-slate-900 ring-amber-400/60 font-semibold" },
                    { label: "Trade Maintenance", className: "bg-slate-500/90 text-white ring-slate-400/60" },
                  ].map(({ label, className: pillClass }) => (
                    <span
                      key={label}
                      className={cn(
                        "inline-flex items-center rounded-full px-3 py-1.5 text-xs font-semibold ring-1",
                        pillClass
                      )}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: dashboard preview (dark boxes, no infinite animation) */}
            <div
              className="aw-hero-animate lg:pl-4"
              style={{ animationDelay: `${STAGGER * 4}ms` }}
            >
              <div className="rounded-2xl border border-slate-600/60 bg-slate-800/95 p-5 shadow-2xl shadow-black/30 transition-all duration-500 hover:border-amber-500/40 hover:shadow-amber-500/15 sm:p-6">
                <div className="flex items-center justify-between gap-4 border-b border-slate-600/60 pb-4">
                  <div className="min-w-0">
                    <div className="truncate text-sm font-bold text-white">
                      Affiliate Warehouse Portal
                    </div>
                    <div className="mt-1 text-xs text-slate-400">
                      Procurement and price-tracking view (sample)
                    </div>
                  </div>
                  <Badge
                    variant="neutral"
                    className="shrink-0 border border-amber-400/50 bg-amber-500/25 text-amber-200 ring-amber-400/40"
                  >
                    Live preview
                  </Badge>
                </div>

                <div className="mt-5 space-y-5">
                  <div>
                    <div className="mb-3 text-xs font-bold uppercase tracking-wide text-amber-300">
                      Pricing access status
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <StatCard
                        label="Corporate pricing tier"
                        value="Enabled"
                        note="Subject to supplier approval"
                        accent="violet"
                        dark
                      />
                      <StatCard
                        label="Preferred contractor"
                        value="Eligible"
                        note="Application required"
                        accent="teal"
                        dark
                      />
                    </div>
                  </div>

                  <div>
                    <div className="mb-3 text-xs font-bold uppercase tracking-wide text-amber-300">
                      Repeat purchase tracker
                    </div>
                    <MiniTable rows={rows} compact dark />
                  </div>

                  <div className="rounded-2xl border border-slate-600/60 bg-slate-700/80 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-bold text-white">Verified savings</span>
                      <span className="h-2 w-2 rounded-full bg-amber-400" aria-hidden />
                    </div>
                    <div className="mt-4 space-y-2 text-sm">
                      <LineItem label="Savings identified" value="$1,420" strong dark />
                      <LineItem label="Affiliate Warehouse fee (1.1%)" value="$15.62" dark />
                      <LineItem label="Contractor keeps" value="$1,404.38" strong dark />
                    </div>
                    <p className="mt-4 text-xs leading-5 text-slate-400">
                      Example only — pricing set by wholesalers; savings vary.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LineItem({
  label,
  value,
  strong,
  dark,
}: {
  label: string;
  value: string;
  strong?: boolean;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className={dark ? "text-slate-400" : "text-slate-600"}>{label}</span>
      <span
        className={
          strong ? "font-bold text-white" : dark ? "font-medium text-slate-300" : "font-medium text-slate-700"
        }
      >
        {value}
      </span>
    </div>
  );
}
