"use client";

import * as React from "react";
import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import { cn } from "@/lib/utils";

const TRADE_TYPES = ["Electrical", "HVAC", "Solar", "Other"] as const;
const MONTHLY_SPEND = ["Under $10k", "$10k–$30k", "$30k–$80k", "$80k+"] as const;

export type PreferredContractorFormValues = {
  businessName: string;
  tradeType: (typeof TRADE_TYPES)[number] | "";
  monthlySpendRange: (typeof MONTHLY_SPEND)[number] | "";
  primarySuppliers: string;
  contactName: string;
  email: string;
  mobile: string;
  message: string;
};

type PreferredContractorAccessFormProps = {
  variant?: "modal" | "embedded";
  onSubmitted?: () => void;
  className?: string;
};

export function PreferredContractorAccessForm({
  variant = "embedded",
  onSubmitted,
  className,
}: PreferredContractorAccessFormProps) {
  const [submitted, setSubmitted] = React.useState(false);
  const [values, setValues] = React.useState<PreferredContractorFormValues>({
    businessName: "",
    tradeType: "",
    monthlySpendRange: "",
    primarySuppliers: "",
    contactName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const update = (field: keyof PreferredContractorFormValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
    };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onSubmitted?.();
  };

  if (submitted) {
    return (
      <div
        className={cn(
          "rounded-2xl border border-violet-200/40 bg-violet-50/50 p-6 text-sm leading-6 text-slate-700",
          className
        )}
        role="status"
      >
        <p className="text-sm leading-6 text-slate-700">
          Thanks — your details have been received. We’ll review your application and follow up
          to walk you through onboarding and answer any questions.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn("space-y-4", className)}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Business name" required>
          <input
            value={values.businessName}
            onChange={update("businessName")}
            className={inputClass}
            name="businessName"
            autoComplete="organization"
            required
          />
        </Field>

        <Field label="Trade type" required>
          <select
            value={values.tradeType}
            onChange={update("tradeType")}
            className={inputClass}
            name="tradeType"
            required
          >
            <option value="" disabled>
              Select…
            </option>
            {TRADE_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Monthly spend range" required>
          <select
            value={values.monthlySpendRange}
            onChange={update("monthlySpendRange")}
            className={inputClass}
            name="monthlySpendRange"
            required
          >
            <option value="" disabled>
              Select…
            </option>
            {MONTHLY_SPEND.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Primary supplier(s)" required>
          <input
            value={values.primarySuppliers}
            onChange={update("primarySuppliers")}
            className={inputClass}
            name="primarySuppliers"
            placeholder="e.g., Rexel, Graybar, Ferguson"
            required
          />
        </Field>

        <Field label="Contact name" required>
          <input
            value={values.contactName}
            onChange={update("contactName")}
            className={inputClass}
            name="contactName"
            autoComplete="name"
            required
          />
        </Field>

        <Field label="Email" required>
          <input
            value={values.email}
            onChange={update("email")}
            className={inputClass}
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </Field>

        <Field label="Mobile" required>
          <input
            value={values.mobile}
            onChange={update("mobile")}
            className={inputClass}
            name="mobile"
            type="tel"
            autoComplete="tel"
            required
          />
        </Field>

        <Field label="Optional message" className="sm:col-span-2">
          <textarea
            value={values.message}
            onChange={update("message")}
            className={cn(inputClass, "min-h-[44px] resize-y py-2.5")}
            name="message"
            rows={variant === "modal" ? 3 : 4}
            placeholder="Anything we should know (optional)"
          />
        </Field>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-slate-600">
          By submitting, you confirm you’re requesting contractor access for your business.
        </p>
        <CTAButton type="submit">Submit Request</CTAButton>
      </div>
    </form>
  );
}

export function LeadForm() {
  return (
    <Section id="contact" className="bg-gradient-to-b from-white to-violet-50/40">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Request preferred contractor access
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            Tell us a bit about your business. We’ll review your application and follow up with
            next steps.
          </p>
          <div className="mt-6 rounded-2xl border border-violet-200/40 bg-white p-6 shadow-md">
            <div className="text-sm font-semibold text-slate-900">What to expect</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-500" />
                Conservative eligibility review
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-500" />
                Onboarding walk-through and Q&A
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-500" />
                Optional tracking + price-change alerts
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-violet-200/40 bg-white p-6 shadow-lg sm:p-8">
            <PreferredContractorAccessForm />
          </div>
        </div>
      </div>
    </Section>
  );
}

function Field({
  label,
  required,
  children,
  className,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <div className="mb-1.5 flex items-center gap-2 text-xs font-semibold text-slate-700">
        <span>{label}</span>
        {required && <span className="text-slate-400">(required)</span>}
      </div>
      {children}
    </label>
  );
}

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-200";

