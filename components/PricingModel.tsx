"use client";

import * as React from "react";
import { CTAButton } from "@/components/CTAButton";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

type PricingModelProps = {
  onRequestAccess: () => void;
};

const TRUST_POINTS = [
  {
    title: "Side-by-side comparison",
    body: "As a preferred contractor you can simply do Side-by-side comparison with your existing trade accounts.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="18" rx="1" />
        <rect x="14" y="3" width="7" height="18" rx="1" />
      </svg>
    ),
    accent: "violet",
  },
  {
    title: "Same products, same suppliers",
    body: "Same products, same suppliers, group leverage.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    accent: "teal",
  },
  {
    title: "No obligation",
    body: "No obligation to use Affiliate Warehouse pricing if it's not better.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    ),
    accent: "amber",
  },
];

export function PricingModel({ onRequestAccess }: PricingModelProps) {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.06, once: true });

  return (
    <section
      id="pricing"
      ref={ref}
      className="relative overflow-hidden border-t border-slate-200/60 bg-gradient-to-b from-slate-50 via-white to-violet-50/30 py-16 sm:py-20"
    >
      <div className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <div
          className={cn(
            "text-center transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <span className="inline-block rounded-full border border-violet-200 bg-violet-100/80 px-4 py-1.5 text-sm font-semibold text-violet-800">
            Trust
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Pricing transparency{" "}
            <span className="bg-gradient-to-r from-violet-600 via-teal-600 to-amber-500 bg-clip-text text-transparent">
              & comparison
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600 sm:text-lg">
            See how preferred contractor access compares to your current trade accounts—no obligation to switch.
          </p>
        </div>

        {/* Side-by-side comparison visual */}
        <div
          className={cn(
            "mx-auto mt-10 max-w-3xl transition-all duration-700 sm:mt-14",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
          style={{ transitionDelay: "80ms" }}
        >
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-slate-500">
            Compare anytime
          </p>
          <div className="grid grid-cols-2 gap-4 rounded-2xl border-2 border-slate-200/80 bg-white p-4 shadow-lg shadow-slate-200/50 sm:gap-6 sm:p-6">
            <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-4 text-center sm:p-5">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Your trade account</div>
              <div className="mt-2 text-sm font-medium text-slate-700">Existing wholesaler pricing</div>
              <div className="mt-1 text-xs text-slate-500">Same products, same suppliers</div>
            </div>
            <div className="rounded-xl border-2 border-violet-200/80 bg-violet-50/50 p-4 text-center sm:p-5">
              <div className="text-xs font-bold uppercase tracking-wider text-violet-700">Preferred contractor view</div>
              <div className="mt-2 text-sm font-medium text-slate-800">Side-by-side with group leverage</div>
              <div className="mt-1 text-xs text-violet-600">Use only when it’s better</div>
            </div>
          </div>
        </div>

        {/* Three trust points (client must-include) */}
        <div className="mt-10 grid gap-6 sm:mt-14 lg:grid-cols-3">
          {TRUST_POINTS.map((point, idx) => (
            <div
              key={point.title}
              className={cn(
                "rounded-2xl border-2 bg-white p-6 shadow-md transition-all duration-500 hover:shadow-lg",
                point.accent === "violet" && "border-violet-200/70 hover:shadow-violet-200/30",
                point.accent === "teal" && "border-teal-200/70 hover:shadow-teal-200/30",
                point.accent === "amber" && "border-amber-200/70 hover:shadow-amber-200/30",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: `${120 + idx * 80}ms` }}
            >
              <span
                className={cn(
                  "inline-flex h-10 w-10 items-center justify-center rounded-xl",
                  point.accent === "violet" && "bg-violet-100 text-violet-600",
                  point.accent === "teal" && "bg-teal-100 text-teal-600",
                  point.accent === "amber" && "bg-amber-100 text-amber-600"
                )}
                aria-hidden
              >
                {point.icon}
              </span>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{point.body}</p>
            </div>
          ))}
        </div>

        {/* Performance fee + CTA */}
        <div
          className={cn(
            "mt-10 rounded-2xl border-2 border-violet-200/60 bg-white p-6 shadow-lg sm:mt-14 sm:p-8",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Simple performance-fee model</h3>
              <p className="mt-2 text-sm text-slate-600">
                No lock-ins · No discount = no charge. Fee applies only when savings are verified. Designed to align
                incentives and keep adoption low-friction.
              </p>
            </div>
            <div className="shrink-0">
              <CTAButton variant="orange" onClick={onRequestAccess}>
                Apply to Become a Preferred Contractor
              </CTAButton>
            </div>
          </div>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {[
              "Keep your current wholesalers and account relationships.",
              "Use improved pricing only when it helps on live jobs.",
              "Optional price-change alerts for tracked lines.",
              "Conservative compliance and eligibility review.",
            ].map((line) => (
              <li key={line} className="flex gap-2 text-sm text-slate-600">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" aria-hidden />
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
