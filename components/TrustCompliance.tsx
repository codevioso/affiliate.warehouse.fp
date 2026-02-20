"use client";

import { Section } from "@/components/Section";

export function TrustCompliance() {
  const bullets = [
    {
      title: "Wholesaler-safe positioning",
      description:
        "Designed to work with existing supplier relationships—no required switching and no disruption-first workflow.",
    },
    {
      title: "Conservative eligibility review",
      description:
        "We verify basic business details to keep access aligned with standard trade account practices.",
    },
    {
      title: "No diversion, no noise",
      description:
        "We avoid public discount claims and keep operations focused on compliant trade access and tracking.",
    },
    {
      title: "Data minimized",
      description:
        "Only collect what’s needed to onboard and support price tracking; contractors control what they share.",
    },
  ];

  return (
    <Section id="trust" className="bg-gradient-to-b from-violet-50/40 to-white">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Trust, compliance, and wholesaler-safe operation
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            Affiliate Warehouse is built to be conservative in language and execution.
          </p>

          <div className="mt-6 rounded-2xl border border-violet-200/40 bg-white p-6 shadow-md">
            <div className="text-sm font-semibold text-slate-900">What we are</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-500" />
                Procurement visibility and corporate-level access where available
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-500" />
                A contractor-focused onboarding process
              </li>
            </ul>

            <div className="mt-5 text-sm font-semibold text-slate-900">What we are not</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-300" />
                A forced wholesaler replacement program
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-300" />
                A public discount marketplace
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2">
            {bullets.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-violet-200/40"
              >
                <div className="text-base font-semibold text-slate-900">{b.title}</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

