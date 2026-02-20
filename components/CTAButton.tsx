"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type CTAButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "orange";
};

export function CTAButton({
  variant = "primary",
  className,
  type = "button",
  ...props
}: CTAButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
        "disabled:opacity-50 disabled:pointer-events-none",
        "active:scale-[0.98]",
        variant === "primary" &&
          "bg-violet-600 text-white shadow-lg shadow-violet-500/25 hover:bg-violet-700 hover:shadow-violet-500/30 hover:-translate-y-0.5 focus-visible:ring-violet-500",
        variant === "secondary" &&
          "bg-white text-slate-900 shadow-sm ring-1 ring-slate-200 hover:bg-violet-50 hover:ring-violet-200 hover:text-violet-800 focus-visible:ring-violet-500",
        variant === "ghost" &&
          "bg-transparent text-slate-900 hover:bg-slate-100 hover:text-violet-700 focus-visible:ring-violet-500",
        variant === "orange" &&
          "bg-orange-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:bg-orange-600 hover:shadow-[0_0_24px_rgba(249,115,22,0.5)] hover:-translate-y-0.5 focus-visible:ring-orange-400",
        className
      )}
      {...props}
    />
  );
}
