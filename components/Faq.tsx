"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How does booking a parking spot work?",
    answer:
      "Search by destination or browse our live map to see available home driveways, covered basement spots, and commercial lots. Select your arrival and departure times, confirm with secure in-app payment, and you'll receive precise turn-by-turn access directions immediately.",
  },
  {
    question: "How much does parking cost on ParkShare?",
    answer:
      "Hourly parking starts from ₹40/hr, while monthly passes start from ₹2,499/month (about ₹125/day for a guaranteed weekday bay). Every space owner sets their own transparent rate with no hidden fees or surge pricing.",
  },
  {
    question: "How do I list my space and earn money?",
    answer:
      "Listing your driveway, garage, or office bay takes under 5 minutes. Set your address, upload a photo, specify availability (e.g. weekdays 9am–6pm, weekends, or 24/7), and choose your hourly or monthly rate. You keep 90% of every booking with direct bank payouts.",
  },
  {
    question: "Is ParkShare safe and secure for hosts and drivers?",
    answer:
      "Yes. Every member confirms their verified identity before their first booking. Both drivers and hosts review and rate each other after each reservation, and all messaging happens securely inside the app without sharing personal phone numbers.",
  },
  {
    question: "Can I extend or cancel my booking?",
    answer:
      "You can easily extend an ongoing session from your active booking screen in the app as long as the space is available. If your plans change, cancellations made before your booking start time are eligible for a full refund.",
  },
  {
    question: "What types of parking spaces can be listed?",
    answer:
      "Any legal, off-street parking spot can be shared! This includes residential driveways, gated society basements, private garages, open carports, and office or retail lot bays outside business hours.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      className="w-full bg-white scroll-mt-[96px]"
    >
      <div className="wrap">
        {/* Centered Section Header */}
        <div className="w-full flex flex-col items-center text-center">
          <p className="text-cobalt text-[20px] sm:text-[22px] font-medium leading-[1.2] tracking-normal normal-case text-center">
            FAQ
          </p>
          <h2 className="mt-3.5 sm:mt-4 font-medium text-navy text-[clamp(24px,3.6vw,50px)] leading-[1.15] tracking-[-0.025em] text-center [text-wrap:balance] max-w-[18em]">
            Frequently asked questions.
          </h2>
        </div>

        {/* Skeuomorphic Accordion Stack (webild.io style) */}
        <div className="mt-12 sm:mt-14 max-w-[840px] mx-auto flex flex-col gap-3 sm:gap-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`w-full rounded-[16px] sm:rounded-[20px] bg-white border transition-all duration-200 ${
                  isOpen
                    ? "border-[#10294B]/[0.16] shadow-[0_4px_16px_-4px_rgba(16,41,75,0.06),inset_0_1px_0_#FFFFFF]"
                    : "border-[#10294B]/[0.08] shadow-[0_1px_3px_rgba(16,41,75,0.03),inset_0_1px_0_#FFFFFF] hover:border-[#10294B]/[0.14]"
                }`}
              >
                {/* Accordion Trigger Button */}
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 sm:px-7 sm:py-5 flex items-center justify-between text-left gap-4 cursor-pointer select-none rounded-[16px] sm:rounded-[20px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy/20 focus-visible:outline-offset-2"
                  aria-expanded={isOpen}
                >
                  <span className="text-[17px] sm:text-[19px] font-medium text-navy leading-[1.35]">
                    {item.question}
                  </span>

                  {/* Pure White Circular Indicator Chip: Plus that rotates 45deg into a Cross */}
                  <span
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 border bg-white transition-all duration-200 ${
                      isOpen
                        ? "border-[#10294B]/[0.18] shadow-[0_1px_2px_rgba(16,41,75,0.06)]"
                        : "border-[#10294B]/[0.10] shadow-[0_1px_2px_rgba(16,41,75,0.04)] hover:border-[#10294B]/[0.16]"
                    }`}
                    aria-hidden="true"
                  >
                    <Plus
                      size={18}
                      strokeWidth={2}
                      className={`text-navy transition-transform duration-200 ease-in-out ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    />
                  </span>
                </button>

                {/* Accordion Body with Smooth CSS Grid Transition */}
                <div
                  className={`grid transition-[grid-template-rows] duration-250 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 pt-0 sm:px-7 sm:pb-6 text-[15px] sm:text-[16px] leading-[1.6] text-[#566070] font-normal">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
