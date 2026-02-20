"use client";

import * as React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { TrackingPreview } from "@/components/TrackingPreview";
import { PricingModel } from "@/components/PricingModel";
import { FAQ } from "@/components/FAQ";
import { PreferredContractorAccessForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";
import { Modal } from "@/components/Modal";
import { CTAButton } from "@/components/CTAButton";

export default function Home() {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header onRequestAccess={() => setModalOpen(true)} />

      <main className="relative pt-16 pb-24 sm:pb-0">
        <div className="pointer-events-none fixed inset-0 aw-gradient-mesh aw-gradient-mesh-animated" aria-hidden />
        <Hero onRequestAccess={() => setModalOpen(true)} />
        <HowItWorks />
        <TrackingPreview />
        <PricingModel onRequestAccess={() => setModalOpen(true)} />
        <FAQ />
      </main>

      <Footer />

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-violet-200/50 bg-white/90 backdrop-blur-md shadow-[0_-4px_24px_-4px_rgba(124,58,237,0.08)] sm:hidden">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-3 px-4 py-3">
          <div className="min-w-0">
            <div className="truncate text-xs font-semibold text-slate-900">
              Corporate pricing access
            </div>
            <div className="truncate text-xs text-slate-600">No lock-ins • No discount = no charge</div>
          </div>
          <CTAButton onClick={() => setModalOpen(true)} className="shrink-0">
            Request Preferred Contractor Access
          </CTAButton>
        </div>
      </div>

      <Modal
        open={modalOpen}
        title="Request Preferred Contractor Access"
        onClose={() => setModalOpen(false)}
      >
        <PreferredContractorAccessForm variant="modal" />
      </Modal>
    </div>
  );
}
