"use client";

import React, { useState } from "react";
import SegmentedToggle from "@/components/ui/SegmentedToggle";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

interface StepItem {
  number: string;
  title: string;
  description: string;
}

const driverSteps: StepItem[] = [
  {
    number: "01",
    title: "Search",
    description:
      "Enter where you're headed and when. Available spaces nearby show up on the map.",
  },
  {
    number: "02",
    title: "Book",
    description:
      "Pick the space that suits you, check the details and pay securely in the app.",
  },
  {
    number: "03",
    title: "Park",
    description:
      "Follow the host's access instructions, park, and get on with your day.",
  },
];

const ownerSteps: StepItem[] = [
  {
    number: "01",
    title: "List your space",
    description:
      "Add a few photos, the vehicle size it fits and clear directions for getting in.",
  },
  {
    number: "02",
    title: "Set your hours and price",
    description:
      "Choose when your space is free and what you charge. Change it whenever you like.",
  },
  {
    number: "03",
    title: "Get paid",
    description:
      "Earnings from each booking are paid out to your bank account.",
  },
];

export default function HowSteps() {
  const [activeTab, setActiveTab] = useState<"drivers" | "owners">("drivers");
  const isReducedMotion = useReducedMotion();

  const renderStepsList = (steps: StepItem[]) => (
    <div className="w-full divide-y divide-[#10294B]/[0.1] border-y border-[#10294B]/[0.1]">
      {steps.map((step) => (
        <div
          key={step.number}
          className="w-full py-6 sm:py-7 lg:py-8 flex items-center gap-5 sm:gap-8 lg:gap-11"
        >
          {/* 1. Step Number (01, 02, 03) */}
          <div className="shrink-0 flex items-center justify-start min-w-[52px] sm:min-w-[66px] lg:min-w-[76px]">
            <span className="font-normal text-[44px] sm:text-[56px] lg:text-[66px] leading-none tabular-nums tracking-tight text-navy select-none">
              {step.number}
            </span>
          </div>

          {/* 2. Solid Gray Vertical Divider Line */}
          <div
            className="shrink-0 w-[1.5px] sm:w-[2px] h-[50px] sm:h-[60px] bg-[#10294B]/[0.15] rounded-full"
            aria-hidden="true"
          />

          {/* 3. Text Content: Title + Description */}
          <div className="flex-1 flex flex-col justify-center min-w-0">
            <h3 className="text-[20px] sm:text-[23px] lg:text-[25px] font-medium leading-[1.25] tracking-[-0.015em] text-navy">
              {step.title}
            </h3>
            <p className="mt-1.5 sm:mt-2 text-[15px] sm:text-[16px] lg:text-[16.5px] leading-[1.55] text-muted max-w-[42em]">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full flex flex-col items-center">
      {/* 1. HEADER (Center-aligned, single line headline) */}
      <div className="w-full flex flex-col items-center text-center">
        <p className="text-cobalt text-[20px] sm:text-[22px] font-medium leading-[1.2] tracking-normal normal-case text-center">
          How it works
        </p>
        <h2 className="mt-3.5 sm:mt-4 font-medium text-navy text-[clamp(24px,3.6vw,50px)] leading-[1.15] tracking-[-0.025em] text-center [text-wrap:balance] min-[540px]:whitespace-nowrap">
          Three steps, whichever side you&apos;re on.
        </h2>
      </div>

      {/* 2. PILL TOGGLE (Snug under the header line) */}
      <SegmentedToggle<"drivers" | "owners">
        ariaLabel="Who are you"
        className="mt-6 sm:mt-7 mx-auto"
        value={activeTab}
        onChange={setActiveTab}
        options={[
          {
            value: "drivers",
            label: "For drivers",
            id: "how-tab-drivers",
            controls: "how-panel-drivers",
          },
          {
            value: "owners",
            label: "For space owners",
            id: "how-tab-owners",
            controls: "how-panel-owners",
          },
        ]}
      />

      {/* 3. FLAT STEPS ON WHITE BACKGROUND */}
      <div
        data-perspective={activeTab}
        className="mt-9 sm:mt-11 w-full grid grid-cols-1 grid-rows-1 relative"
      >
        {/* PANEL 1: FOR DRIVERS */}
        <div
          id="how-panel-drivers"
          role="tabpanel"
          aria-labelledby="how-tab-drivers"
          data-state={activeTab === "drivers" ? "active" : "inactive"}
          className={`col-start-1 row-start-1 w-full transition-opacity ease-in-out ${
            activeTab === "drivers"
              ? "opacity-100 visible z-10"
              : "opacity-0 invisible pointer-events-none z-0"
          }`}
          style={{
            transitionDuration: isReducedMotion ? "0ms" : "200ms",
          }}
          aria-hidden={activeTab !== "drivers"}
        >
          {renderStepsList(driverSteps)}
        </div>

        {/* PANEL 2: FOR SPACE OWNERS */}
        <div
          id="how-panel-owners"
          role="tabpanel"
          aria-labelledby="how-tab-owners"
          data-state={activeTab === "owners" ? "active" : "inactive"}
          className={`col-start-1 row-start-1 w-full transition-opacity ease-in-out ${
            activeTab === "owners"
              ? "opacity-100 visible z-10"
              : "opacity-0 invisible pointer-events-none z-0"
          }`}
          style={{
            transitionDuration: isReducedMotion ? "0ms" : "200ms",
          }}
          aria-hidden={activeTab !== "owners"}
        >
          {renderStepsList(ownerSteps)}
        </div>
      </div>
    </div>
  );
}
