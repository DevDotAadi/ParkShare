"use client";

import React, { useRef, useState, useEffect } from "react";
import { Plus } from "lucide-react";
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

interface FaqAccordionItemProps {
  item: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
  onKeyDown: (e: React.KeyboardEvent, index: number) => void;
  setTriggerRef: (el: HTMLButtonElement | null) => void;
  isReducedMotion: boolean;
}

function FaqAccordionItem({
  item,
  index,
  isOpen,
  onToggle,
  onKeyDown,
  setTriggerRef,
  isReducedMotion,
}: FaqAccordionItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<string>("0px");

  useEffect(() => {
    if (isReducedMotion) {
      setMaxHeight(isOpen ? "none" : "0px");
      return;
    }

    if (isOpen) {
      setMaxHeight(`${contentRef.current?.scrollHeight || 0}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen, isReducedMotion]);

  // Dynamically update max-height if viewport resizes while panel is open
  useEffect(() => {
    if (!isOpen || isReducedMotion) return;
    const handleResize = () => {
      if (contentRef.current) {
        setMaxHeight(`${contentRef.current.scrollHeight}px`);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen, isReducedMotion]);

  return (
    <div
      role="button"
      tabIndex={0}
      id={`faq-trigger-${index}`}
      aria-expanded={isOpen}
      aria-controls={`faq-panel-${index}`}
      onClick={() => onToggle(index)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle(index);
        } else {
          onKeyDown(e, index);
        }
      }}
      ref={(el) => setTriggerRef(el as unknown as HTMLButtonElement)}
      className="relative p-4 md:p-5 rounded-[13px] cursor-pointer flex flex-col items-center justify-between transition-all duration-500 select-none group text-navy bg-white border border-[#10294B]/[0.10] shadow-[0_2px_5px_rgba(16,41,75,0.03),inset_0_1px_0_#FFFFFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy/20"
    >
      {/* Question Header Row */}
      <div className="flex flex-row items-center justify-between w-full">
        <h3 className="text-base md:text-xl font-medium text-navy text-left pr-4 leading-snug">
          {item.question}
        </h3>

        {/* Skeuomorphic Pure White Circular Indicator Chip */}
        <div
          className="relative h-8 w-8 aspect-square flex items-center justify-center rounded-full shrink-0 transition-all duration-300 bg-white border border-[#10294B]/[0.12] shadow-[0_1px_2px_rgba(16,41,75,0.06),inset_0_1px_0_#FFFFFF]"
          aria-hidden="true"
        >
          <Plus
            className={`w-4 h-4 text-navy transition-transform duration-500 ${
              isOpen ? "rotate-45" : "rotate-0"
            }`}
            strokeWidth={2}
          />
        </div>
      </div>

      {/* Accordion Body: 1:1 Webild.io scrollHeight max-height Fall Transition */}
      <div
        id={`faq-panel-${index}`}
        role="region"
        aria-labelledby={`faq-trigger-${index}`}
        ref={contentRef}
        style={{
          maxHeight,
          transitionDuration: isReducedMotion ? "0ms" : "500ms",
        }}
        className="overflow-hidden transition-[max-height] duration-500 w-full flex flex-col"
      >
        <div className="text-base text-[#566070] pt-2 leading-relaxed">
          {item.answer}
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const isReducedMotion = useReducedMotion();
  const { isOpen, toggle, triggerRefs, handleKeyDown } = useAccordionMachine({
    totalItems: FAQ_ITEMS.length,
    defaultOpenIndex: null,
    allowMultiple: false,
  });

  return (
    <section
      id="faq"
      className="w-full bg-white scroll-mt-[96px]"
      aria-label="FAQ section"
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

        {/* 1:1 Webild.io Accordion Stack */}
        <div className="mt-9 sm:mt-11 w-full flex flex-col gap-5">
          {FAQ_ITEMS.map((item, idx) => (
            <FaqAccordionItem
              key={idx}
              item={item}
              index={idx}
              isOpen={isOpen(idx)}
              onToggle={toggle}
              onKeyDown={handleKeyDown}
              setTriggerRef={(el) => {
                triggerRefs.current[idx] = el;
              }}
              isReducedMotion={isReducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
