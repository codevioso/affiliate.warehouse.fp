"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

type StatCardProps = {
  label: string;
  value: string;
  note: string;
  accent?: "violet" | "teal";
  /** Dark theme for use on dark backgrounds (e.g. Hero) */
  dark?: boolean;
  className?: string;
};

const accentClasses = {
  violet: "border-l-violet-500 bg-violet-50/30",
  teal: "border-l-teal-500 bg-teal-50/30",
};

const accentClassesDark = {
  violet: "border-l-violet-400 bg-violet-500/20",
  teal: "border-l-teal-400 bg-teal-500/20",
};

export function StatCard({ label, value, note, accent, dark, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md",
        !dark && "border-slate-200/70 bg-white",
        !dark && accent && "border-l-4 border-slate-200/70",
        !dark && accent && accentClasses[accent],
        dark && "border-slate-600/60 bg-slate-800/90",
        dark && accent && "border-l-4 border-slate-600/60",
        dark && accent && accentClassesDark[accent],
        className
      )}
    >
      <div className={cn("text-xs font-semibold", dark ? "text-slate-400" : "text-slate-500")}>{label}</div>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <div className={cn("text-sm font-semibold", dark ? "text-white" : "text-slate-900")}>{value}</div>
      </div>
      <Badge
        variant="neutral"
        className={dark ? "bg-slate-700/80 text-slate-300 ring-slate-600" : "bg-white/80 text-slate-600 ring-slate-200"}
      >
        {note}
      </Badge>
    </div>
  );
}
