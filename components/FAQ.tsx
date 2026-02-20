"use client";

import * as React from "react";
import { FAQS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

export function FAQ() {
  const [openIdx, setOpenIdx] = React.useState<number | null>(0);
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.06, once: true });

  return (
    <section
      id="faq"
      ref={ref}
      className="relative overflow-hidden bg-slate-700"
    >
      {/* Dark animated background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900"
        aria-hidden="true"
      />
      <div
        className="aw-tracking-orb absolute -right-[12%] top-[8%] h-[min(50vw,320px)] w-[min(50vw,320px)] rounded-full bg-violet-500/25 blur-[90px]"
        aria-hidden="true"
      />
      <div
        className="aw-tracking-orb-2 absolute -left-[10%] bottom-[20%] h-[min(48vw,300px)] w-[min(48vw,300px)] rounded-full bg-teal-500/20 blur-[80px]"
        aria-hidden="true"
      />
      <div
        className="aw-tracking-orb-3 absolute left-1/2 top-1/2 h-[min(40vw,260px)] w-[min(40vw,260px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/15 blur-[70px]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)`,
          backgroundSize: "36px 36px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="space-y-10 sm:space-y-14">
          {/* Headline */}
          <div
            className={cn(
              "text-center transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <span className="inline-block rounded-full border border-violet-400/40 bg-violet-500/20 px-4 py-1.5 text-sm font-semibold text-violet-300">
              Mandatory questions
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Frequently asked{" "}
              <span className="bg-gradient-to-r from-violet-400 via-teal-400 to-amber-400 bg-clip-text text-transparent">
                questions
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-400 sm:text-lg">
              Clear answers, conservative language, and contractor-first expectations.
            </p>
          </div>

          {/* Accordion */}
          <div
            className={cn(
              "overflow-hidden rounded-2xl border border-slate-600/60 bg-slate-800/90 shadow-2xl backdrop-blur-sm transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
            style={{ transitionDelay: "80ms" }}
          >
            {FAQS.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={item.question}
                  className={cn(
                    "border-b border-slate-600/50 last:border-b-0",
                    isOpen && "bg-slate-700/50"
                  )}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIdx((v) => (v === idx ? null : idx))}
                  >
                    <span className="text-sm font-semibold text-slate-100 sm:text-base">
                      {item.question}
                    </span>
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition",
                        isOpen ? "bg-violet-500/30 text-violet-200" : "bg-slate-600/60 text-slate-400"
                      )}
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className={cn("h-5 w-5 transition-transform", isOpen && "rotate-180")}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-slate-600/50 p-5 text-base leading-7 text-slate-400 sm:p-6">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Wholesaler Alignment & Industry-Safe block */}
          <div
            className={cn(
              "rounded-2xl border-2 border-teal-400/30 bg-slate-800/90 p-6 shadow-xl backdrop-blur-sm sm:p-8",
              "transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
            style={{ transitionDelay: "180ms" }}
          >
            <h3 className="text-center text-lg font-bold text-white sm:text-xl">
              Wholesaler alignment & industry-safe positioning
            </h3>
            <p className="mt-4 text-center text-sm leading-relaxed text-slate-400">
              Affiliate Warehouse operates within existing wholesaler systems and terms. Pricing and availability are set solely by wholesalers. There is no reselling or alteration of supplier terms. All purchases remain job-coded, fully traceable, and processed through normal wholesaler channels. Participation is voluntary and non-exclusive.
            </p>
            <p className="mt-4 text-center text-sm font-semibold text-teal-300">
              This is collaboration and efficiency — not disruption.
            </p>
            <p className="mt-2 text-center text-xs text-slate-500">
              For wholesalers: this improves efficiency and volume without undermining our systems.
            </p>
          </div>

          {/* Collective Buying Explained block */}
          <div
            className={cn(
              "rounded-2xl border-2 border-violet-400/30 bg-slate-800/90 p-6 shadow-xl backdrop-blur-sm sm:p-8",
              "transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
            style={{ transitionDelay: "260ms" }}
          >
            <h3 className="text-center text-lg font-bold text-white sm:text-xl">
              Collective buying explained
            </h3>
            <p className="mt-4 text-center text-sm leading-relaxed text-slate-400">
              Independent preferred contractors choose to buy together. That supports improved efficiency and visibility, and access to pricing tiers via volume and consistency—within existing wholesaler systems. The approach benefits both contractors and suppliers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
