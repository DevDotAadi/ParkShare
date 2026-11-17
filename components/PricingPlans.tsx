"use client";

import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import SegmentedToggle from "@/components/ui/SegmentedToggle";
import { findParking, listSpot } from "@/lib/cta";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

// CONFIRM WITH CLIENT BEFORE LAUNCH: from ₹40/hr, ₹2,499/month, about ₹125/day, 10% host fee (90% payout), pause/roll-over policy.
export const PRICING_DATA = {
  driverPayAsYouGo: {
    title: "Pay as you go",
    descriptor: "For quick errands, shopping and meetings.",
    fromPrefix: "From",
    price: "₹40",
    unit: "/ hr",
    explanation: "Pay only for the time you park. Each host sets their own rate.",
    features: [
      "Find a space on the map and book instantly",
      "Extend or end your booking in the app",
      "Access directions for every space",
      "No commitment",
    ],
    ctaText: findParking.label,
    ctaHref: findParking.href,
  },
  driverMonthlyPass: {
    title: "Monthly pass",
    descriptor: "For daily commutes and regular parking.",
    price: "₹2,499",
    unit: "/ month",
    explanation: "A reserved spot every weekday, about ₹125 a day.",
    features: [
      "A dedicated spot reserved for you every weekday",
      "Pause or roll over unused days",
      "Pay securely in the app",
      "Message your host in the app",
    ],
    ctaText: "Get monthly pass",
    ctaHref: findParking.href, // TODO: Connect monthly pass checkout link
  },
  ownerListing: {
    title: "List your space",
    descriptor: "For driveways, society slots and commercial lots.",
    price: "Free",
    unit: "to list",
    explanation: "ParkShare keeps 10% of each booking. You keep 90.",
    example: "Example: on a ₹100 booking, you receive ₹90.",
    features: [
      "Set your own hours and price",
      "Pause or edit your listing any time",
      "Payouts straight to your bank account",
      "Drivers are verified before they book",
    ],
    ctaText: listSpot.label,
    ctaHref: listSpot.href,
  },
} as const;

export default function PricingPlans() {
  const [activeTab, setActiveTab] = useState<"drivers" | "owners">("drivers");
  const isReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === "#owners") {
        setActiveTab("owners");
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const { driverPayAsYouGo, driverMonthlyPass, ownerListing } = PRICING_DATA;

  return (
    <div className="w-full flex flex-col items-center">
      {/* Centered Segmented Toggle: matching 'How it works' 1:1 */}
      <SegmentedToggle<"drivers" | "owners">
        ariaLabel="Pricing plan audience"
        className="mt-6 sm:mt-7 mx-auto"
        value={activeTab}
        onChange={setActiveTab}
        options={[
          {
            value: "drivers",
            label: "For drivers",
            id: "pricing-tab-drivers",
            controls: "pricing-panel-drivers",
          },
          {
            value: "owners",
            label: "For space owners",
            id: "pricing-tab-owners",
            controls: "pricing-panel-owners",
          },
        ]}
      />

      {/* Outer Panel: margin-top matching 'How it works' (mt-9 sm:mt-11) */}
      <div
        data-perspective={activeTab}
        className="mt-9 sm:mt-11 w-full rounded-[20px] min-[640px]:rounded-[24px] p-2 min-[640px]:p-[10px] bg-[var(--panel)] border border-[#10294B]/[0.08] shadow-[0_1px_2px_rgba(16,41,75,0.05)]"
      >
        {/* ============================================================== */}
        {/* VIEW 1: DRIVERS VIEW (Two white cards, 10px gap, equal height)  */}
        {/* ============================================================== */}
        {activeTab === "drivers" && (
          <div
            id="pricing-panel-drivers"
            role="tabpanel"
            aria-labelledby="pricing-tab-drivers"
            data-state="active"
            className="w-full grid grid-cols-1 min-[900px]:grid-cols-2 gap-2.5 items-stretch animate-hero-block"
          >
            {/* Card 1: Pay as you go (Solid White Card) */}
            <div
              className="w-full rounded-[12px] min-[640px]:rounded-[14px] bg-white border border-[#10294B]/10 p-6 min-[640px]:p-8 flex flex-col justify-between"
              style={{
                boxShadow:
                  "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(16, 41, 75, 0.06), 0 8px 16px -12px rgba(16, 41, 75, 0.18)",
              }}
            >
              <div className="flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-[24px] font-medium leading-[1.2] tracking-[-0.01em] text-navy">
                  {driverPayAsYouGo.title}
                </h3>
                {/* Descriptor */}
                <p className="mt-2 text-[16px] leading-[1.45] text-muted line-clamp-2">
                  {driverPayAsYouGo.descriptor}
                </p>

                {/* Price block */}
                <div className="mt-6 flex flex-col items-start">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[16px] font-normal text-muted leading-none">
                      {driverPayAsYouGo.fromPrefix}
                    </span>
                    <span className="font-bold text-[56px] leading-none tracking-[-0.03em] tabular-nums text-navy">
                      {driverPayAsYouGo.price}
                    </span>
                    <span className="text-[18px] font-normal text-muted leading-none">
                      {driverPayAsYouGo.unit}
                    </span>
                  </div>
                  <p className="mt-2 text-[16px] leading-[1.45] text-muted">
                    {driverPayAsYouGo.explanation}
                  </p>
                </div>

                {/* Engraved hairline divider */}
                <div className="w-full my-6 flex flex-col" aria-hidden="true">
                  <div className="w-full h-px bg-[#10294B]/[0.12]" />
                  <div className="w-full h-px bg-white/[0.9]" />
                </div>

                {/* Features (4 rows max, 12px gap between rows, 12px gap between icon and text) */}
                <ul className="flex flex-col gap-3 list-none p-0 m-0">
                  {driverPayAsYouGo.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-[16px] leading-[1.5] text-navy font-normal"
                    >
                      <Check
                        size={18}
                        strokeWidth={2}
                        className="text-cobalt shrink-0 mt-1"
                        aria-hidden="true"
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pinned Button */}
              <div className="mt-8 pt-2">
                <Button
                  href={driverPayAsYouGo.ctaHref}
                  size="lg"
                  className="w-full justify-between"
                >
                  {driverPayAsYouGo.ctaText}
                </Button>
              </div>
            </div>

            {/* Card 2: Monthly pass (Solid White Card - NOT blue) */}
            <div
              className="w-full rounded-[12px] min-[640px]:rounded-[14px] bg-white border border-[#10294B]/10 p-6 min-[640px]:p-8 flex flex-col justify-between"
              style={{
                boxShadow:
                  "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(16, 41, 75, 0.06), 0 8px 16px -12px rgba(16, 41, 75, 0.18)",
              }}
            >
              <div className="flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-[24px] font-medium leading-[1.2] tracking-[-0.01em] text-navy">
                  {driverMonthlyPass.title}
                </h3>
                {/* Descriptor */}
                <p className="mt-2 text-[16px] leading-[1.45] text-muted line-clamp-2">
                  {driverMonthlyPass.descriptor}
                </p>

                {/* Price block */}
                <div className="mt-6 flex flex-col items-start">
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold text-[56px] leading-none tracking-[-0.03em] tabular-nums text-navy">
                      {driverMonthlyPass.price}
                    </span>
                    <span className="text-[18px] font-normal text-muted leading-none">
                      {driverMonthlyPass.unit}
                    </span>
                  </div>
                  <p className="mt-2 text-[16px] leading-[1.45] text-muted">
                    {driverMonthlyPass.explanation}
                  </p>
                </div>

                {/* Engraved hairline divider */}
                <div className="w-full my-6 flex flex-col" aria-hidden="true">
                  <div className="w-full h-px bg-[#10294B]/[0.12]" />
                  <div className="w-full h-px bg-white/[0.9]" />
                </div>

                {/* Features (4 rows max, 12px gap between rows, 12px gap between icon and text) */}
                <ul className="flex flex-col gap-3 list-none p-0 m-0">
                  {driverMonthlyPass.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-[16px] leading-[1.5] text-navy font-normal"
                    >
                      <Check
                        size={18}
                        strokeWidth={2}
                        className="text-cobalt shrink-0 mt-1"
                        aria-hidden="true"
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pinned Button */}
              <div className="mt-8 pt-2">
                <Button
                  href={driverMonthlyPass.ctaHref}
                  size="lg"
                  className="w-full justify-between"
                >
                  {driverMonthlyPass.ctaText}
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 2: OWNERS VIEW (Cleanly fitted card, zero empty gap)       */}
        {/* ============================================================== */}
        {activeTab === "owners" && (
          <div
            id="pricing-panel-owners"
            role="tabpanel"
            aria-labelledby="pricing-tab-owners"
            data-state="active"
            className="w-full animate-hero-block"
          >
            <div
              className="w-full rounded-[12px] min-[640px]:rounded-[14px] bg-white border border-[#10294B]/10 p-6 min-[640px]:p-8 min-[900px]:p-10"
              style={{
                boxShadow:
                  "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(16, 41, 75, 0.06), 0 8px 16px -12px rgba(16, 41, 75, 0.18)",
              }}
            >
              {/* Desktop: 2-column layout with vertical engraved hairline */}
              <div className="grid grid-cols-1 min-[900px]:grid-cols-[1.15fr_auto_1fr] min-[900px]:gap-12 items-center">
                {/* Left Column: Title, Price, Explanations & Button */}
                <div className="flex flex-col items-start text-left">
                  <h3 className="text-[24px] font-medium leading-[1.2] tracking-[-0.01em] text-navy">
                    {ownerListing.title}
                  </h3>
                  <p className="mt-2 text-[16px] leading-[1.45] text-muted max-w-[28em]">
                    {ownerListing.descriptor}
                  </p>

                  {/* Price block */}
                  <div className="mt-6 flex flex-col items-start">
                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-[56px] leading-none tracking-[-0.03em] tabular-nums text-navy">
                        {ownerListing.price}
                      </span>
                      <span className="text-[18px] font-normal text-muted leading-none">
                        {ownerListing.unit}
                      </span>
                    </div>
                    <p className="mt-2 text-[16px] leading-[1.45] text-muted">
                      {ownerListing.explanation}
                    </p>
                    <p className="mt-4 text-[15px] leading-[1.45] text-muted/90 font-normal">
                      {ownerListing.example}
                    </p>
                  </div>

                  {/* Left Column Button */}
                  <div className="mt-7 w-full min-[900px]:w-auto">
                    <Button
                      href={ownerListing.ctaHref}
                      size="lg"
                      className="w-full min-[900px]:w-auto justify-between min-[900px]:justify-center min-[900px]:px-8"
                    >
                      {ownerListing.ctaText}
                    </Button>
                  </div>
                </div>

                {/* Vertical Engraved Hairline on desktop (≥900px) */}
                <div
                  className="hidden min-[900px]:flex self-stretch flex-row"
                  aria-hidden="true"
                >
                  <div className="h-full w-px bg-[#10294B]/[0.12]" />
                  <div className="h-full w-px bg-white/[0.9]" />
                </div>

                {/* Horizontal Engraved Hairline on mobile (<900px) */}
                <div
                  className="min-[900px]:hidden w-full my-6 flex flex-col"
                  aria-hidden="true"
                >
                  <div className="w-full h-px bg-[#10294B]/[0.12]" />
                  <div className="w-full h-px bg-white/[0.9]" />
                </div>

                {/* Right Column: Four Feature Rows */}
                <div className="flex flex-col justify-center">
                  <ul className="flex flex-col gap-4 list-none p-0 m-0">
                    {ownerListing.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3.5 text-[16px] leading-[1.5] text-navy font-normal"
                      >
                        <Check
                          size={18}
                          strokeWidth={2}
                          className="text-cobalt shrink-0 mt-1"
                          aria-hidden="true"
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
