"use client";

import * as React from "react";
import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import { cn } from "@/lib/utils";

export type PreferredContractorFormValues = {
  businessName: string;
  contactName: string;
  mobile: string;
  email: string;
};

type PreferredContractorAccessFormProps = {
  variant?: "modal" | "embedded";
  onSubmitted?: () => void;
  className?: string;
};

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_PREFERRED_CONTRACTOR_URL ?? "";

export function PreferredContractorAccessForm({
  variant = "embedded",
  onSubmitted,
  className,
}: PreferredContractorAccessFormProps) {
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [values, setValues] = React.useState<PreferredContractorFormValues>({
    businessName: "",
    contactName: "",
    mobile: "",
    email: "",
  });

  const update = (field: keyof PreferredContractorFormValues) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
      setError(null);
    };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/submit-preferred-contractor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message ?? "Something went wrong.");
      }
      setSubmitted(true);
      onSubmitted?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again or contact us.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        className={cn(
          "rounded-xl border-2 border-green-500 bg-green-50 p-5 shadow-sm",
          className
        )}
        role="status"
        aria-live="polite"
      >
        <div className="flex gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500 text-white" aria-hidden>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <div className="min-w-0">
            <p className="font-semibold text-green-800">Success</p>
            <p className="mt-1 text-sm leading-6 text-green-900">
              Thanks — your details have been received. We&apos;ll review your application and call you at your scheduled time to walk through the Affiliate Warehouse onboarding process and answer any questions.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("space-y-5", className)}>
      <p className="text-sm text-slate-600">
        Fill in your details to become a Preferred Contractor.
      </p>
      <form onSubmit={onSubmit} className="space-y-4">
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
        </div>

        {CALENDLY_URL && (
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-600">
              Schedule your onboarding call
            </p>
            <div className="h-[360px] w-full min-h-[320px] overflow-hidden rounded-lg">
              <iframe
                title="Schedule onboarding call"
                src={CALENDLY_URL}
                className="h-full w-full"
                frameBorder="0"
              />
            </div>
          </div>
        )}

        <div className="space-y-3">
          <p className="text-xs leading-5 text-slate-600">
            &quot;No discount, no charge.&quot;
          </p>
          <p className="text-xs leading-5 text-slate-600">
            Compare pricing with your existing accounts anytime.
          </p>
        </div>

        {error && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-slate-600">
            By submitting, you confirm you&apos;re requesting contractor access for your business.
          </p>
          <CTAButton type="submit" disabled={submitting}>
            {submitting ? "Sending…" : "Submit Request"}
          </CTAButton>
        </div>
      </form>
    </div>
  );
}

export function LeadForm() {
  return (
    <Section id="contact" className="bg-gradient-to-b from-white to-violet-50/40">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Preferred Contractor Application
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            Fill in your details to become a Preferred Contractor.
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
