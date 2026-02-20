"use client";

import * as React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { TrackingPreview } from "@/components/TrackingPreview";
import { PricingModel } from "@/components/PricingModel";
import { FeesIncentives } from "@/components/FeesIncentives";
import { NoLockIns } from "@/components/NoLockIns";
import { FAQ } from "@/components/FAQ";
import { ComplianceEthics } from "@/components/ComplianceEthics";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import { PreferredContractorAccessForm } from "@/components/LeadForm";
import { CallBackLeadForm } from "@/components/CallBackLeadForm";
import { WholesalerExpressionForm } from "@/components/WholesalerExpressionForm";
import { Footer } from "@/components/Footer";
import { Modal } from "@/components/Modal";
import { CTAButton } from "@/components/CTAButton";

export default function Home() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [callbackModalOpen, setCallbackModalOpen] = React.useState(false);
  const [wholesalerModalOpen, setWholesalerModalOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header
        onRequestAccess={() => setModalOpen(true)}
        onRequestCallback={() => setCallbackModalOpen(true)}
      />

      <main className="relative pt-16 pb-24 sm:pb-0">
        <div className="pointer-events-none fixed inset-0 aw-gradient-mesh aw-gradient-mesh-animated" aria-hidden />
        <Hero
          onRequestAccess={() => setModalOpen(true)}
          onRequestWholesaler={() => setWholesalerModalOpen(true)}
        />
        <HowItWorks />
        <TrackingPreview />
        <PricingModel onRequestAccess={() => setModalOpen(true)} />
        <FeesIncentives />
        <NoLockIns />
        <FAQ />
        <div className="grid w-full grid-cols-1 items-stretch lg:grid-cols-2">
          {/* Left: 50% – Compliance & Ethics with background + content over */}
          <div className="relative min-h-[420px] min-w-0 lg:min-h-0 lg:border-r lg:border-slate-300/80">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(248,250,252,0.88) 50%, rgba(238,242,255,0.9) 100%), url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
              aria-hidden
            />
            <div className="relative z-10 h-full">
              <ComplianceEthics overlay />
            </div>
          </div>
          {/* Right: 50% – Legal Disclaimer with background + content over */}
          <div className="relative min-h-[420px] min-w-0 lg:min-h-0">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(248,250,252,0.94) 0%, rgba(255,255,255,0.9) 50%, rgba(241,245,249,0.92) 100%), url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2364748b' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20v20zm40-20V0H20L0 20h20l20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
              aria-hidden
            />
            <div className="relative z-10 h-full">
              <LegalDisclaimer overlay />
            </div>
          </div>
        </div>
      </main>

      <Footer
        onRequestCallback={() => setCallbackModalOpen(true)}
        onRequestWholesaler={() => setWholesalerModalOpen(true)}
      />

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
        title="Preferred Contractor Application"
        onClose={() => setModalOpen(false)}
      >
        <PreferredContractorAccessForm variant="modal" />
      </Modal>

      <Modal
        open={callbackModalOpen}
        title="Request a call back"
        onClose={() => setCallbackModalOpen(false)}
      >
        <CallBackLeadForm variant="modal" />
      </Modal>

      <Modal
        open={wholesalerModalOpen}
        title="Wholesaler expression of interest"
        onClose={() => setWholesalerModalOpen(false)}
      >
        <WholesalerExpressionForm variant="modal" />
      </Modal>
    </div>
  );
}
