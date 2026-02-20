"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type IconCircleProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "accent" | "neutral";
  icon: "check" | "shield" | "tag";
  color?: "violet" | "teal" | "amber";
};

const colorClasses = {
  violet: "bg-violet-50 text-violet-700 ring-violet-200",
  teal: "bg-teal-50 text-teal-700 ring-teal-200",
  amber: "bg-amber-50 text-amber-700 ring-amber-200",
};

export function IconCircle({
  className,
  variant = "neutral",
  icon,
  color = "violet",
  ...props
}: IconCircleProps) {
  return (
    <span
      className={cn(
        "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl ring-1 shadow-sm transition-transform duration-300 hover:scale-105",
        variant === "accent" && colorClasses[color ?? "violet"],
        variant === "neutral" && "bg-white text-slate-700 ring-slate-200",
        className
      )}
      {...props}
    >
      {icon === "check" && (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      )}
      {icon === "shield" && (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2 20 6v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4Z" />
        </svg>
      )}
      {icon === "tag" && (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 13l-7 7-11-11V2h7l11 11Z" />
          <path d="M7 7h.01" />
        </svg>
      )}
    </span>
  );
}
