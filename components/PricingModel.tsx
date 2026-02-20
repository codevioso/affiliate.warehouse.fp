"use client";

import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";

type PricingModelProps = {
  onRequestAccess: () => void;
};

export function PricingModel({ onRequestAccess }: PricingModelProps) {
  return (
    <Section id="pricing" className="bg-white">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            A simple performance-fee model
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            Designed to align incentives and keep adoption low-friction for contractors.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-violet-200/40 bg-white p-6 shadow-lg shadow-violet-500/5 transition-all duration-300 hover:shadow-violet-500/10 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-900">
                  Performance fee (when savings apply)
                </div>
                <div className="mt-2 text-sm leading-6 text-slate-600">
                  No lock-ins • No discount = no charge
                </div>
              </div>
              <div className="rounded-2xl bg-violet-50 px-4 py-3 ring-1 ring-violet-200/60">
                <div className="text-xs font-semibold text-violet-600">Typical outcome</div>
                <div className="mt-1 text-lg font-bold tracking-tight text-slate-900">
                  Lower landed cost
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "You keep your current wholesalers and account relationships.",
                "Use improved pricing access only when it helps on live jobs.",
                "Optional price-change alerts for tracked lines and categories.",
                "Conservative compliance posture and eligibility review.",
              ].map((line) => (
                <div key={line} className="flex gap-3 rounded-2xl bg-slate-50/80 p-4 transition-colors hover:bg-violet-50/50">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-violet-500" />
                  <p className="text-sm leading-6 text-slate-700">{line}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-slate-600">
                Share a few details and we’ll confirm fit before onboarding.
              </div>
              <CTAButton onClick={onRequestAccess}>
                Request Preferred Contractor Access
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

