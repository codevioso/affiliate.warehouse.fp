"use client";

import * as React from "react";
import { Section } from "@/components/Section";
import { FAQS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIdx, setOpenIdx] = React.useState<number | null>(0);

  return (
    <Section id="faq">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            FAQ
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            Clear answers, conservative language, and contractor-first expectations.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="divide-y divide-slate-200/70 overflow-hidden rounded-2xl border border-violet-200/40 bg-white shadow-lg">
            {FAQS.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={item.question} className="px-5 py-4 sm:px-6">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIdx((v) => (v === idx ? null : idx))}
                  >
                    <span className="text-sm font-semibold text-slate-900 sm:text-base">
                      {item.question}
                    </span>
                    <span
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-xl ring-1 transition",
                        isOpen ? "bg-violet-100 text-violet-700 ring-violet-200" : "bg-white text-slate-600 ring-slate-200"
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
                      <p className="mt-3 text-sm leading-6 text-slate-600">{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}

