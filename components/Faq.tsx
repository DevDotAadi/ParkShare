"use client";

import React from "react";
import { Plus, X } from "lucide-react";
import { useAccordionMachine } from "@/lib/state/useAccordionMachine";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

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
  const isReducedMotion = useReducedMotion();
  const { isOpen, toggle, triggerRefs, handleKeyDown } = useAccordionMachine({
    totalItems: FAQ_ITEMS.length,
    defaultOpenIndex: 0,
    allowMultiple: false,
  });

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

        {/* Skeuomorphic Accordion Stack (webild.io style: full wrap width, physical depth) */}
        <div className="mt-9 sm:mt-11 w-full flex flex-col gap-3 sm:gap-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const itemOpen = isOpen(idx);

            return (
              <div
                key={idx}
                data-state={itemOpen ? "open" : "closed"}
                className={`w-full rounded-[16px] sm:rounded-[20px] bg-white border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  itemOpen
                    ? "border-[#10294B]/[0.14] shadow-[inset_0_1px_0_#FFFFFF,0_2px_6px_rgba(16,41,75,0.05)]"
                    : "border-[#10294B]/[0.10] shadow-[inset_0_1px_0_#FFFFFF,0_1px_3px_rgba(16,41,75,0.03)] hover:border-[#10294B]/[0.16]"
                }`}
              >
                {/* Accordion Trigger Button */}
                <button
                  ref={(el) => {
                    triggerRefs.current[idx] = el;
                  }}
                  id={`faq-trigger-${idx}`}
                  type="button"
                  onClick={() => toggle(idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  aria-expanded={itemOpen}
                  aria-controls={`faq-panel-${idx}`}
                  data-state={itemOpen ? "open" : "closed"}
                  className="w-full px-5 py-4 sm:px-7 sm:py-5 flex items-center justify-between text-left gap-3.5 sm:gap-4 cursor-pointer select-none rounded-[16px] sm:rounded-[20px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy/20 focus-visible:outline-offset-2"
                >
                  <span className="text-[16px] sm:text-[19px] font-medium text-navy leading-[1.35]">
                    {item.question}
                  </span>

                  {/* Skeuomorphic Circular Indicator Chip (webild.io style: physical lighting, continuous icon, no gap) */}
                  <span
                    data-state={itemOpen ? "open" : "closed"}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ease-out ${
                      itemOpen
                        ? "bg-gradient-to-b from-[#F2F5F9] to-[#FFFFFF] border-[#10294B]/[0.15] shadow-[inset_0_1px_2px_rgba(16,41,75,0.08),0_1px_0_#FFFFFF]"
                        : "bg-gradient-to-b from-[#FFFFFF] to-[#F2F5F9] border-[#10294B]/[0.12] shadow-[inset_0_1px_0_#FFFFFF,0_1px_2px_rgba(16,41,75,0.06)] hover:border-[#10294B]/[0.20]"
                    }`}
                    aria-hidden="true"
                  >
                    {itemOpen ? (
                      <X
                        size={17}
                        strokeWidth={2.4}
                        className="text-navy"
                      />
                    ) : (
                      <Plus
                        size={17}
                        strokeWidth={2.4}
                        className="text-navy"
                      />
                    )}
                  </span>
                </button>

                {/* Accordion Body with Smooth Webild.io Fall Transition */}
                <div
                  id={`faq-panel-${idx}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${idx}`}
                  data-state={itemOpen ? "open" : "closed"}
                  className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden"
                  style={{
                    gridTemplateRows: itemOpen ? "1fr" : "0fr",
                    transitionDuration: isReducedMotion ? "0ms" : undefined,
                  }}
                >
                  <div className="overflow-hidden">
                    <p
                      className={`px-5 pb-5 pt-0 sm:px-7 sm:pb-6 text-[14.5px] sm:text-[16px] leading-[1.65] text-[#566070] font-normal transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        itemOpen
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                      style={{
                        transitionDuration: isReducedMotion ? "0ms" : undefined,
                      }}
                    >
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
