"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

function StarRating({ value, max = 5 }: { value: number; max?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${value} out of ${max} stars`}>
      {Array.from({ length: max }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={cn(
            "h-5 w-5 shrink-0",
            i < value ? "text-amber-400" : "text-slate-300"
          )}
          fill="currentColor"
          aria-hidden
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const PLACEHOLDER_TESTIMONIALS = [
  {
    name: "Placeholder Name",
    role: "Trade contractor",
    company: "— Company name",
    rating: 5,
    quote:
      "Placeholder testimonial. Real content to be supplied later. Describes how Affiliate Warehouse helped compare pricing and save time.",
  },
  {
    name: "Placeholder Name",
    role: "Preferred contractor",
    company: "— Business name",
    rating: 5,
    quote:
      "Placeholder quote. Real content to be supplied later. Focus on transparency, no lock-in, or side-by-side comparison.",
  },
  {
    name: "Placeholder Name",
    role: "Contractor",
    company: "— Company name",
    rating: 5,
    quote:
      "Placeholder testimonial. Real content to be supplied later. Can mention wholesaler-safe approach or fee-only-on-savings.",
  },
];

export function Reviews() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.06, once: true });

  return (
    <section
      id="reviews"
      ref={ref}
      className="relative overflow-hidden border-t border-slate-200/60 bg-white py-16 sm:py-20"
    >
      <div className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <div
          className={cn(
            "text-center transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <span className="inline-block rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-sm font-semibold text-amber-800">
            Reviews & Social Proof
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            What contractors{" "}
            <span className="bg-gradient-to-r from-amber-600 via-violet-600 to-teal-600 bg-clip-text text-transparent">
              say about us
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600 sm:text-lg">
            Placeholder testimonials — real content to be supplied later.
          </p>
          {/* Aggregate rating */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <StarRating value={5} />
            <span className="text-lg font-semibold text-slate-700">5.0</span>
            <span className="text-slate-500">out of 5</span>
          </div>
        </div>

        {/* Testimonial cards */}
        <div
          className={cn(
            "mt-12 grid gap-6 transition-all duration-700 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
          style={{ transitionDelay: "100ms" }}
        >
          {PLACEHOLDER_TESTIMONIALS.map((t, i) => (
            <article
              key={i}
              className="flex flex-col rounded-2xl border border-slate-200/80 bg-slate-50/80 p-6 shadow-sm backdrop-blur-sm"
            >
              <StarRating value={t.rating} />
              <blockquote className="mt-4 flex-1 text-slate-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <footer className="mt-4 border-t border-slate-200/60 pt-4">
                <cite className="not-italic">
                  <span className="font-semibold text-slate-900">{t.name}</span>
                  <span className="text-slate-600">
                    {" "}
                    — {t.role}
                    {t.company}
                  </span>
                </cite>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
