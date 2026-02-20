"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

type Row = {
  sku: string;
  item: string;
  supplier: string;
  current: string;
  last: string;
  change: string;
  changeDir: "down" | "up" | "same";
  changeNum: number;
};

const rows: Row[] = [
  {
    sku: "ELEC-THHN-500",
    item: "THHN Copper (500ft)",
    supplier: "Primary supplier",
    current: "$238.40",
    last: "$246.30",
    change: "−3.2%",
    changeDir: "down",
    changeNum: -3.2,
  },
  {
    sku: "HVAC-REF-25",
    item: "Refrigerant (25lb)",
    supplier: "Secondary supplier",
    current: "$318.00",
    last: "$318.00",
    change: "0.0%",
    changeDir: "same",
    changeNum: 0,
  },
  {
    sku: "SOLAR-MC4-100",
    item: "MC4 connectors (100)",
    supplier: "Primary supplier",
    current: "$41.10",
    last: "$38.90",
    change: "+5.7%",
    changeDir: "up",
    changeNum: 5.7,
  },
];

// Mock trend: last 4 periods for THHN (aligns with table last → current)
const TREND_POINTS = [248, 246.3, 245, 238.4];
const TREND_LABELS = ["3mo", "2mo", "1mo", "Now"];

const BADGES = [
  { label: "Quoting", color: "violet" },
  { label: "Audits", color: "teal" },
  { label: "Margin review", color: "amber" },
];

function ChangeBarChart({ inView }: { inView: boolean }) {
  const min = -5;
  const max = 8;
  const total = max - min;
  const scale = (v: number) => ((v - min) / total) * 100;
  const zeroPct = scale(0);
  return (
    <div className="space-y-3">
      {rows.map((r) => (
        <div key={r.sku} className="flex items-center gap-2">
          <span className="w-24 shrink-0 truncate text-xs text-slate-400 sm:w-28">
            {r.item.split(" ")[0]}
          </span>
          <div className="relative h-6 flex-1 overflow-hidden rounded-md bg-slate-700/80">
            {/* Zero line */}
            <div
              className="absolute top-0 h-full w-px bg-slate-500"
              style={{ left: `${zeroPct}%` }}
              aria-hidden
            />
            {/* Bar: from value to zero */}
            {r.changeNum !== 0 && (
              <div
                className={cn(
                  "absolute top-0.5 h-5 rounded transition-all duration-700",
                  r.changeDir === "down" && "bg-emerald-500/70",
                  r.changeDir === "up" && "bg-rose-500/70",
                  r.changeDir === "same" && "bg-slate-500/60"
                )}
                style={{
                  left: r.changeNum < 0 ? `${scale(r.changeNum)}%` : `${zeroPct}%`,
                  width: `${(Math.abs(r.changeNum) / total) * 100}%`,
                }}
              />
            )}
          </div>
          <span
            className={cn(
              "w-12 shrink-0 text-right text-xs font-semibold",
              r.changeDir === "down" && "text-emerald-400",
              r.changeDir === "up" && "text-rose-400",
              r.changeDir === "same" && "text-slate-400"
            )}
          >
            {r.change}
          </span>
        </div>
      ))}
      <div className="flex justify-between px-1 text-[10px] text-slate-500">
        <span>−5%</span>
        <span>0</span>
        <span>+8%</span>
      </div>
    </div>
  );
}

function PriceTrendChart({ inView }: { inView: boolean }) {
  const pts = TREND_POINTS;
  const min = Math.min(...pts);
  const max = Math.max(...pts);
  const range = max - min || 1;
  const w = 160;
  const h = 56;
  const pad = 4;
  const x = (i: number) => pad + (i / (pts.length - 1)) * (w - 2 * pad);
  const y = (v: number) => h - pad - ((v - min) / range) * (h - 2 * pad);
  return (
    <div className="flex flex-col items-center">
      <svg viewBox={`0 0 ${w} ${h}`} className="h-14 w-full max-w-[200px]" aria-hidden>
        <polyline
          fill="none"
          stroke="url(#trackTrendGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={pts.map((v, i) => `${x(i)},${y(v)}`).join(" ")}
        />
        <defs>
          <linearGradient id="trackTrendGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgb(139 92 246)" />
            <stop offset="100%" stopColor="rgb(245 158 11)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="mt-1 flex w-full max-w-[200px] justify-between text-[10px] text-slate-500">
        {TREND_LABELS.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
      <p className="mt-2 text-center text-xs text-slate-500">
        Sample: THHN 500ft price trend
      </p>
    </div>
  );
}

export function TrackingPreview() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.06, once: true });

  const downCount = rows.filter((r) => r.changeDir === "down").length;
  const upCount = rows.filter((r) => r.changeDir === "up").length;
  const sameCount = rows.filter((r) => r.changeDir === "same").length;

  return (
    <section
      id="tracking"
      ref={ref}
      className="relative scroll-mt-24 min-h-screen min-h-[100dvh] overflow-hidden bg-slate-700"
    >
      {/* Ash/dark animated background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-700 via-slate-700/98 to-slate-800"
        aria-hidden="true"
      />
      <div
        className="aw-tracking-orb absolute -right-[12%] top-[8%] h-[min(55vw,340px)] w-[min(55vw,340px)] rounded-full bg-violet-500/25 blur-[90px]"
        aria-hidden="true"
      />
      <div
        className="aw-tracking-orb-2 absolute -left-[10%] bottom-[12%] h-[min(50vw,300px)] w-[min(50vw,300px)] rounded-full bg-teal-500/20 blur-[80px]"
        aria-hidden="true"
      />
      <div
        className="aw-tracking-orb-3 absolute left-1/2 top-1/2 h-[min(42vw,260px)] w-[min(42vw,260px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/15 blur-[70px]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)`,
          backgroundSize: "36px 36px",
        }}
        aria-hidden="true"
      />

      <div className="relative flex min-h-screen min-h-[100dvh] flex-col justify-center px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
        <div className="mx-auto w-full max-w-[1100px] space-y-8 sm:space-y-10">
          {/* Headline */}
          <div
            className={cn(
              "text-center transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <span className="inline-block rounded-full border border-violet-400/40 bg-violet-500/20 px-4 py-1.5 text-sm font-semibold text-violet-300">
              Preview
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              A clean view of{" "}
              <span className="bg-gradient-to-r from-violet-400 via-teal-400 to-amber-400 bg-clip-text text-transparent">
                tracked pricing
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-400 sm:text-lg">
              Table-style visibility for common lines—built for quoting, audits, and margin review.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {BADGES.map((b) => (
                <span
                  key={b.label}
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-semibold",
                    b.color === "violet" && "bg-violet-500/30 text-violet-200",
                    b.color === "teal" && "bg-teal-500/30 text-teal-200",
                    b.color === "amber" && "bg-amber-500/30 text-amber-200"
                  )}
                >
                  {b.label}
                </span>
              ))}
            </div>
          </div>

          {/* Summary stats */}
          <div
            className={cn(
              "flex flex-wrap justify-center gap-4 transition-all duration-600",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="rounded-xl border border-slate-600/60 bg-slate-800/80 px-4 py-2.5">
              <span className="text-2xl font-bold text-white">{rows.length}</span>
              <span className="ml-2 text-sm text-slate-400">lines tracked</span>
            </div>
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5">
              <span className="text-lg font-bold text-emerald-400">{downCount}</span>
              <span className="ml-2 text-sm text-slate-400">down</span>
            </div>
            <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-2.5">
              <span className="text-lg font-bold text-rose-400">{upCount}</span>
              <span className="ml-2 text-sm text-slate-400">up</span>
            </div>
            <div className="rounded-xl border border-slate-500/40 bg-slate-500/10 px-4 py-2.5">
              <span className="text-lg font-bold text-slate-400">{sameCount}</span>
              <span className="ml-2 text-sm text-slate-400">unchanged</span>
            </div>
          </div>

          {/* Table + Charts row */}
          <div
            className={cn(
              "grid gap-6 transition-all duration-700 lg:grid-cols-1",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
            style={{ transitionDelay: "180ms" }}
          >
            {/* Table card */}
            <div className="overflow-hidden rounded-2xl border border-slate-600/60 bg-slate-800/90 shadow-2xl backdrop-blur-sm">
              <div className="grid grid-cols-12 gap-2 border-b border-slate-600/60 bg-slate-700/80 px-4 py-3.5 text-xs font-semibold sm:gap-3 sm:px-5">
                <div className="col-span-3 text-violet-300">SKU</div>
                <div className="col-span-4 text-teal-300">Item</div>
                <div className="col-span-2 text-slate-400">Supplier</div>
                <div className="col-span-1 text-right text-amber-300">Current</div>
                <div className="col-span-1 text-right text-slate-400">Last</div>
                <div className="col-span-1 text-right text-slate-400">Δ</div>
              </div>
              <div className="divide-y divide-slate-600/50">
                {rows.map((r) => (
                  <div
                    key={r.sku}
                    className="grid grid-cols-12 gap-2 px-4 py-3.5 text-sm sm:gap-3 sm:px-5 sm:py-4"
                  >
                    <div className="col-span-12 sm:col-span-3">
                      <span className="font-mono text-xs text-slate-400">{r.sku}</span>
                    </div>
                    <div className="col-span-12 sm:col-span-4">
                      <span className="font-semibold text-slate-100">{r.item}</span>
                    </div>
                    <div className="col-span-6 sm:col-span-2">
                      <span className="text-slate-500">{r.supplier}</span>
                    </div>
                    <div className="col-span-2 sm:col-span-1 text-right font-semibold text-amber-300">
                      {r.current}
                    </div>
                    <div className="col-span-2 sm:col-span-1 text-right text-slate-500">
                      {r.last}
                    </div>
                    <div className="col-span-2 sm:col-span-1 text-right">
                      <span
                        className={cn(
                          "inline-block rounded px-1.5 py-0.5 font-semibold",
                          r.changeDir === "down" && "bg-emerald-500/25 text-emerald-300",
                          r.changeDir === "up" && "bg-rose-500/25 text-rose-300",
                          r.changeDir === "same" && "bg-slate-500/25 text-slate-400"
                        )}
                      >
                        {r.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-slate-600/50 bg-slate-700/60 px-4 py-3.5 text-sm text-slate-400 sm:px-5 sm:py-4">
                Optional alerts can flag changes for tracked lines without creating supplier disruption.
              </div>
            </div>

            {/* Charts row: Change overview + Price trend */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-600/60 bg-slate-800/90 p-5 shadow-xl backdrop-blur-sm">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Change overview
                </h3>
                <ChangeBarChart inView={inView} />
              </div>
              <div className="rounded-2xl border border-slate-600/60 bg-slate-800/90 p-5 shadow-xl backdrop-blur-sm">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Price trend (sample)
                </h3>
                <PriceTrendChart inView={inView} />
              </div>
            </div>
          </div>

          {/* Footer line */}
          <div
            className={cn(
              "text-center transition-opacity duration-600",
              inView ? "opacity-100" : "opacity-0"
            )}
            style={{ transitionDelay: "380ms" }}
          >
            <p className="text-sm text-slate-500">
              All pricing from wholesalers · Job-coded for traceability
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
