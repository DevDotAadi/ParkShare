import React from "react";
import PricingPlans from "./PricingPlans";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="w-full bg-white scroll-mt-[96px]"
    >
      {/* Anchor for backward compatibility with #owners links */}
      <span
        id="owners"
        className="block -mt-[96px] pt-[96px] invisible pointer-events-none"
      />

      <div className="wrap flex flex-col items-center">
        {/* Centered Header (matching "How it works" 1:1) */}
        <div className="w-full flex flex-col items-center text-center">
          <p className="text-cobalt text-[20px] sm:text-[22px] font-medium leading-[1.2] tracking-normal normal-case text-center">
            Pricing
          </p>
          <h2 className="mt-3.5 sm:mt-4 font-medium text-navy text-[clamp(24px,3.6vw,50px)] leading-[1.15] tracking-[-0.025em] text-center [text-wrap:balance]">
            Simple pricing for drivers and space owners.
          </h2>
        </div>

        {/* Client component containing centered toggle and views */}
        <PricingPlans />
      </div>
    </section>
  );
}
