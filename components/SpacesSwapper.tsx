"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

export interface SpaceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const spacesItems: SpaceItem[] = [
  {
    id: "home-driveway",
    title: "Home driveways",
    description: "Free while you're at work or away.",
    image: "/spaces/home-driveway.webp",
    alt: "Empty driveway beside a cream stucco house with a parking sign on the gatepost",
  },
  {
    id: "apartment-basement",
    title: "Apartment & society parking",
    description: "Allotted spots that sit empty through the day.",
    image: "/spaces/apartment-basement.webp",
    alt: "Four-storey residential apartment block with an open basement parking garage entrance",
  },
  {
    id: "office-lot",
    title: "Office & commercial lots",
    description: "Empty in the evenings and at weekends.",
    image: "/spaces/office-lot.webp",
    alt: "Glass commercial office building with a surface parking lot in late-afternoon light",
  },
  {
    id: "event-day",
    title: "Event-day spaces",
    description: "Spots near venues and markets on event days.",
    image: "/spaces/event-day.webp",
    alt: "Market stalls and pedestrian crowds arriving at a modern sports stadium with parking",
  },
];

export default function SpacesSwapper() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [epoch, setEpoch] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const isPausedRef = useRef(isPaused);
  isPausedRef.current = isPaused;

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Listen to visibility change to pause when tab is hidden
  useEffect(() => {
    const handleVisibility = () => {
      setIsPaused(document.visibilityState === "hidden");
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  const handleSelectTab = useCallback((index: number) => {
    setActiveIndex(index);
    setEpoch((prev) => prev + 1);
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % spacesItems.length);
    setEpoch((prev) => prev + 1);
  }, []);

  // Guaranteed 6000ms auto-advance cycle
  useEffect(() => {
    if (isReducedMotion) return;

    const timer = setInterval(() => {
      if (!isPausedRef.current) {
        handleNext();
      }
    }, 6000);

    return () => clearInterval(timer);
  }, [handleNext, epoch, isReducedMotion]);

  // Keyboard navigation for WAI-ARIA tablist
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let targetIndex = -1;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      targetIndex = (index + 1) % spacesItems.length;
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      targetIndex = (index - 1 + spacesItems.length) % spacesItems.length;
    } else if (e.key === "Home") {
      e.preventDefault();
      targetIndex = 0;
    } else if (e.key === "End") {
      e.preventDefault();
      targetIndex = spacesItems.length - 1;
    }

    if (targetIndex !== -1) {
      handleSelectTab(targetIndex);
      tabRefs.current[targetIndex]?.focus();
    }
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-14 items-stretch">
      {/* 1. Left Column: Header + Accordion Tabs (sized 1:1 like Webild) */}
      <div className="flex flex-col justify-between gap-8 md:gap-12 w-full">
        {/* Section Header */}
        <div>
          <p className="text-cobalt text-[17px] sm:text-[19px] font-medium leading-[1.2] tracking-normal normal-case">
            Types of spaces
          </p>
          <h2 className="mt-3 sm:mt-3.5 font-medium text-navy text-[clamp(30px,3.6vw,46px)] leading-[1.12] tracking-[-0.025em] max-w-[12.5em] text-left [text-wrap:balance]">
            Every empty spot is a space someone needs.
          </h2>
        </div>

        {/* Accordion Tabs */}
        <div
          role="tablist"
          aria-label="Parking space categories"
          aria-orientation="vertical"
          className="flex flex-col w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
        >
          {spacesItems.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <div key={item.id} className="relative w-full">
                {/* Hairline + animated progress line */}
                <div className="relative h-px w-full bg-[#10294B]/[0.15]">
                  {isActive && (
                    <div
                      key={`progress-${activeIndex}-${epoch}`}
                      className="absolute inset-y-0 left-0 w-full bg-[#10294B] spaces-progress-bar origin-left pointer-events-none"
                      style={{
                        animationPlayState: isPaused ? "paused" : "running",
                      }}
                      aria-hidden="true"
                    />
                  )}
                </div>

                {/* Tab Button */}
                <button
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  id={`spaces-tab-${item.id}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="spaces-tabpanel"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => handleSelectTab(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-full text-left bg-transparent border-none p-0 cursor-pointer focus-visible:outline focus-visible:outline-[2px] focus-visible:outline-navy/20 focus-visible:outline-offset-4 block select-none"
                >
                  <div
                    className={`flex items-center justify-between gap-4 pt-4 transition-[padding] duration-300 ease-out ${
                      isActive ? "pb-2" : "pb-4"
                    }`}
                  >
                    <h3
                      className={`text-[19px] sm:text-[21px] lg:text-[23px] font-medium transition-colors duration-300 leading-snug ${
                        isActive
                          ? "text-[#10294B]"
                          : "text-[#10294B]/50 hover:text-[#10294B]"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Description Expansion */}
                  <div
                    className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] overflow-hidden"
                    style={{
                      gridTemplateRows: isActive ? "1fr" : "0fr",
                    }}
                    aria-hidden={!isActive}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[14.5px] sm:text-[15.5px] text-muted leading-relaxed pb-4 pt-0.5 max-w-[28em]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Right Column: Framed Image Panel (scaled 1:1 to match left column height, like Webild) */}
      <div
        id="spaces-tabpanel"
        role="tabpanel"
        aria-labelledby={`spaces-tab-${spacesItems[activeIndex].id}`}
        className="w-full rounded-[20px] md:rounded-[24px] p-2.5 bg-[var(--panel)] border border-[#10294B]/[0.08] shadow-[0_1px_2px_rgba(16,41,75,0.05)] overflow-hidden aspect-square md:aspect-auto md:h-full flex items-center justify-center"
      >
        <div className="relative w-full h-full min-h-[340px] md:min-h-0 rounded-[12px] md:rounded-[14px] overflow-hidden bg-ice">
          {spacesItems.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={item.id}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  isActive
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0 pointer-events-none"
                }`}
                style={{
                  transitionProperty: isReducedMotion ? "none" : "opacity",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  priority={index === 0}
                  loading={index === 0 ? undefined : "eager"}
                  sizes="(min-width: 900px) 50vw, 100vw"
                  unoptimized
                  className="object-cover object-center"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
