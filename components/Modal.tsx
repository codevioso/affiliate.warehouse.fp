"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type ModalProps = {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
};

export function Modal({ open, title, onClose, children, className }: ModalProps) {
  React.useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center px-4 py-6 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <button
        type="button"
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
        aria-label="Close modal"
        onClick={onClose}
      />

      <div
        className={cn(
          "relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl shadow-violet-500/10 ring-1 ring-violet-200/30",
          "aw-modal-in",
          className
        )}
      >
        <div className="flex items-start justify-between gap-4 border-b border-violet-200/40 bg-violet-50/30 px-6 py-5">
          <div>
            <h2 className="text-base font-bold tracking-tight text-slate-900">
              {title}
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Conservative, wholesaler-safe onboarding. No lock-ins or obligations.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-2 text-slate-500 transition hover:bg-violet-100 hover:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <div className="px-6 py-6">{children}</div>
      </div>
    </div>
  );
}

