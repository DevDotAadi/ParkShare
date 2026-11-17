"use client";

import React from "react";
import {
  ShieldCheck,
  CreditCard,
  MapPin,
  Star,
  CalendarClock,
  MessageCircle,
} from "lucide-react";

interface SafetyFeature {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  title: string;
  description: string;
  hairlineClass: string;
}

const features: SafetyFeature[] = [
  {
    icon: ShieldCheck,
    title: "Verified members",
    description: "Drivers and hosts confirm their details before their first booking.",
    hairlineClass: "border-b border-[#10294B]/[0.08] min-[600px]:border-r",
  },
  {
    icon: CreditCard,
    title: "Secure payments",
    description: "Pay and get paid in the app. No cash and no awkward conversations.",
    hairlineClass:
      "border-b border-[#10294B]/[0.08] min-[600px]:border-r-0 min-[900px]:border-r",
  },
  {
    icon: MapPin,
    title: "Clear access details",
    description: "Every listing shows exactly where the space is and how to get in.",
    hairlineClass:
      "border-b border-[#10294B]/[0.08] min-[600px]:border-r min-[900px]:border-r-0",
  },
  {
    icon: Star,
    title: "Ratings both ways",
    description: "Drivers rate spaces and hosts rate drivers, so good behaviour shows.",
    hairlineClass:
      "border-b border-[#10294B]/[0.08] min-[600px]:border-r-0 min-[900px]:border-r min-[900px]:border-b-0",
  },
  {
    icon: CalendarClock,
    title: "Hourly, daily or monthly",
    description: "Book for a quick errand, a full workday or your monthly commute.",
    hairlineClass:
      "border-b border-[#10294B]/[0.08] min-[600px]:border-r min-[600px]:border-b-0 min-[900px]:border-r min-[900px]:border-b-0",
  },
  {
    icon: MessageCircle,
    title: "In-app messaging",
    description: "Talk to your host or driver without sharing your phone number.",
    hairlineClass: "",
  },
];

export default function Safety() {
  return (
    <section
      id="trust"
      className="w-full bg-white scroll-mt-[96px]"
    >
      <div className="wrap">
        {/* Centered Header */}
        <div className="w-full flex flex-col items-center text-center">
          <p className="text-cobalt text-[20px] sm:text-[22px] font-medium leading-[1.2] tracking-normal normal-case text-center">
            Safety and trust
          </p>
          <h2 className="mt-3.5 sm:mt-4 font-medium text-navy text-[clamp(24px,3.6vw,50px)] leading-[1.15] tracking-[-0.025em] text-center [text-wrap:balance] max-w-[18em]">
            Built for trust on both sides of the gate.
          </h2>
        </div>

        {/* Framed Panel (copies framed-panel language from How it works) */}
        <div className="mt-14 w-full rounded-[20px] min-[600px]:rounded-[24px] p-2 min-[600px]:p-[10px] bg-[var(--panel)] border border-[#10294B]/[0.08] shadow-[0_1px_2px_rgba(16,41,75,0.05)]">
          {/* Inside: ONE white card containing the 6-cell grid */}
          <div className="w-full rounded-[12px] min-[600px]:rounded-[14px] bg-white overflow-hidden">
            <div className="w-full grid grid-cols-1 min-[600px]:grid-cols-2 min-[900px]:grid-cols-3">
              {features.map((feature, idx) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={idx}
                    className={`p-6 min-[600px]:p-8 flex flex-col items-start text-left ${feature.hairlineClass}`}
                  >
                    {/* (1) 44px square icon box: pure white, clean outline */}
                    <div className="w-11 h-11 rounded-[12px] bg-white border border-[#10294B]/[0.10] shadow-[0_1px_2px_rgba(16,41,75,0.04)] flex items-center justify-center text-navy shrink-0">
                      <Icon size={22} strokeWidth={1.5} className="text-navy" />
                    </div>

                    {/* (2) 28px gap */}
                    {/* (3) Title as h3: Helvetica 22px weight 500, leading 1.25, tracking -0.01em */}
                    <h3 className="mt-7 text-[22px] font-medium leading-[1.25] tracking-[-0.01em] text-navy">
                      {feature.title}
                    </h3>

                    {/* (4) 8px gap */}
                    {/* (5) Description: 16px, line-height 1.5, contrast >= 4.5:1 on white */}
                    <p className="mt-2 text-[16px] leading-[1.5] text-[#556987] max-w-[24em]">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
