"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "neutral" | "accent" | "up" | "down" | "flat" | "violet" | "teal" | "amber" | "slate";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

export function Badge({ className, variant = "neutral", ...props }: BadgeProps) {
  const styles: Record<BadgeVariant, string> = {
    accent: "bg-violet-50 text-violet-700 ring-violet-200",
    violet: "bg-violet-50 text-violet-700 ring-violet-200",
    teal: "bg-teal-50 text-teal-700 ring-teal-200",
    amber: "bg-amber-50 text-amber-700 ring-amber-200",
    slate: "bg-slate-100 text-slate-700 ring-slate-200",
    up: "bg-slate-50 text-slate-900 ring-slate-200",
    down: "bg-slate-50 text-slate-900 ring-slate-200",
    flat: "bg-white text-slate-700 ring-slate-200",
    neutral: "bg-white text-slate-700 ring-slate-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ring-1 transition-colors",
        styles[variant],
        className
      )}
      {...props}
    />
  );
}
