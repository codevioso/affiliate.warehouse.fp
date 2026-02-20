"use client";

import * as React from "react";
import { CTAButton } from "@/components/CTAButton";
import { cn } from "@/lib/utils";

export type WholesalerExpressionFormValues = {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  message: string;
};

type WholesalerExpressionFormProps = {
  variant?: "modal" | "embedded";
  onSubmitted?: () => void;
  className?: string;
};

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_WHOLESALER_URL ??
  process.env.NEXT_PUBLIC_CALENDLY_CALLBACK_URL ??
  process.env.NEXT_PUBLIC_CALENDLY_PREFERRED_CONTRACTOR_URL ??
  "";

export function WholesalerExpressionForm({
  variant = "embedded",
  onSubmitted,
  className,
}: WholesalerExpressionFormProps) {
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [values, setValues] = React.useState<WholesalerExpressionFormValues>({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    message: "",
  });

  const update = (field: keyof WholesalerExpressionFormValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
      setError(null);
    };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 600));
      setSubmitted(true);
      onSubmitted?.();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again or contact us."
      );
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
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500 text-white"
            aria-hidden
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <div className="min-w-0">
            <p className="font-semibold text-green-800">Success</p>
            <p className="mt-1 text-sm leading-6 text-green-900">
              Thanks — we&apos;ve received your details. We&apos;ll review the information provided and call you at your scheduled time to discuss the Affiliate Warehouse model and next steps.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("space-y-5", className)}>
      <p className="text-sm text-slate-600">
        Open compliant, relationship-led dialogue.
      </p>
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Company name" required>
            <input
              value={values.companyName}
              onChange={update("companyName")}
              className={inputClass}
              name="companyName"
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
          <Field label="Phone" required>
            <input
              value={values.phone}
              onChange={update("phone")}
              className={inputClass}
              name="phone"
              type="tel"
              autoComplete="tel"
              required
            />
          </Field>
        </div>

        <Field label="Optional message" className="sm:col-span-2">
          <textarea
            value={values.message}
            onChange={update("message")}
            className={cn(inputClass, "min-h-[80px] resize-y py-2.5")}
            name="message"
            rows={variant === "modal" ? 3 : 4}
            placeholder="Anything you’d like to share (optional)"
          />
        </Field>

        {CALENDLY_URL && (
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-600">
              Schedule your call
            </p>
            <div className="h-[360px] w-full min-h-[320px] overflow-hidden rounded-lg">
              <iframe
                title="Schedule call"
                src={CALENDLY_URL}
                className="h-full w-full"
                frameBorder="0"
              />
            </div>
          </div>
        )}

        {error && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <CTAButton type="submit" disabled={submitting}>
            {submitting ? "Sending…" : "Submit"}
          </CTAButton>
        </div>
      </form>
    </div>
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
