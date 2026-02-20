"use client";

import * as React from "react";
import { IconCircle } from "@/components/ui/IconCircle";
import { cn } from "@/lib/utils";

const ITEMS = [
  { icon: "shield" as const, text: "Uses existing wholesaler systems (no bypassing)", color: "violet" as const },
  { icon: "check" as const, text: "Job-coded and traceable purchasing", color: "teal" as const },
  { icon: "tag" as const, text: "Fees apply only on verified savings", color: "amber" as const },
  { icon: "shield" as const, text: "Wholesaler-safe · No lock-in", color: "violet" as const },
  { icon: "check" as const, text: "Optional price-change alerts", color: "teal" as const },
  { icon: "tag" as const, text: "Corporate-level access where available", color: "amber" as const },
] as const;

function MarqueeContent({ prefix }: { prefix: string }) {
  return (
    <>
      {ITEMS.map((item, i) => (
        <div
          key={`${prefix}-${i}`}
          className="flex shrink-0 items-center gap-2.5 rounded-full border border-slate-200/80 bg-white/95 px-4 py-2 shadow-sm backdrop-blur-sm"
        >
          <IconCircle icon={item.icon} variant="accent" color={item.color} className="h-8 w-8 rounded-xl" />
          <span className="whitespace-nowrap text-sm font-medium text-slate-800">{item.text}</span>
        </div>
      ))}
    </>
  );
}

export function TrustStrip() {
  return (
    <section
      id="trust-points"
      className="scroll-mt-24 border-y border-slate-200/60 bg-gradient-to-r from-slate-50 via-white to-slate-50 py-4 sm:py-5"
    >
      <div className="relative overflow-hidden">
        <div
          className={cn(
            "flex w-max gap-4 will-change-transform",
            "aw-trust-marquee"
          )}
          aria-hidden="true"
        >
          <MarqueeContent prefix="a" />
          <MarqueeContent prefix="b" />
        </div>
      </div>
      {/* Screen reader: single static list */}
      <div className="sr-only" aria-hidden="false">
        <ul className="mx-auto max-w-[1200px] list-none px-4">
          {ITEMS.filter((item, i, arr) => arr.findIndex((x) => x.text === item.text) === i).map((item) => (
            <li key={item.text} className="flex items-center gap-2 py-1">
              <IconCircle icon={item.icon} variant="accent" color={item.color} />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
