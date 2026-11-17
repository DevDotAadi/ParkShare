"use client";

import React, { useRef, useEffect, useState } from "react";

export interface ToggleOption<T extends string = string> {
  value: T;
  label: string;
  id?: string;
  controls?: string;
}

export interface SegmentedToggleProps<T extends string = string> {
  options: [ToggleOption<T>, ToggleOption<T>];
  value: T;
  onChange: (value: T) => void;
  ariaLabel?: string;
  className?: string;
}

export default function SegmentedToggle<T extends string = string>({
  options,
  value,
  onChange,
  ariaLabel = "View selector",
  className = "",
}: SegmentedToggleProps<T>) {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const tab0Ref = useRef<HTMLButtonElement>(null);
  const tab1Ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const activeIndex = options[0].value === value ? 0 : 1;

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = (index + 1) % 2;
      onChange(options[nextIndex].value);
      if (nextIndex === 0) tab0Ref.current?.focus();
      else tab1Ref.current?.focus();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = (index - 1 + 2) % 2;
      onChange(options[prevIndex].value);
      if (prevIndex === 0) tab0Ref.current?.focus();
      else tab1Ref.current?.focus();
    }
  };

  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className={`relative p-1 rounded-full border border-line bg-white inline-grid grid-cols-2 w-full min-[480px]:w-auto shrink-0 select-none ${className}`}
    >
      {/* Sliding Navy Thumb */}
      <div
        className="absolute top-1 bottom-1 rounded-full bg-navy pointer-events-none"
        style={{
          width: "calc(50% - 4px)",
          left: "4px",
          transform: activeIndex === 0 ? "translateX(0)" : "translateX(100%)",
          transition: isReducedMotion ? "none" : "transform 250ms ease-in-out",
        }}
        aria-hidden="true"
      />

      {/* Button 0 */}
      <button
        ref={tab0Ref}
        id={options[0].id}
        type="button"
        role="tab"
        aria-selected={activeIndex === 0}
        aria-controls={options[0].controls}
        tabIndex={activeIndex === 0 ? 0 : -1}
        onClick={() => onChange(options[0].value)}
        onKeyDown={(e) => handleKeyDown(e, 0)}
        className="relative z-10 h-[44px] px-3.5 min-[380px]:px-6 rounded-full text-[14px] min-[380px]:text-[15px] font-medium transition-colors duration-150 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy/20 focus-visible:outline-offset-1 flex items-center justify-center whitespace-nowrap min-w-[130px] min-[380px]:min-w-[150px] sm:min-w-[172px] bg-transparent border-none"
      >
        <span
          className={`transition-colors duration-150 ${
            activeIndex === 0 ? "text-white" : "text-navy"
          }`}
        >
          {options[0].label}
        </span>
      </button>

      {/* Button 1 */}
      <button
        ref={tab1Ref}
        id={options[1].id}
        type="button"
        role="tab"
        aria-selected={activeIndex === 1}
        aria-controls={options[1].controls}
        tabIndex={activeIndex === 1 ? 0 : -1}
        onClick={() => onChange(options[1].value)}
        onKeyDown={(e) => handleKeyDown(e, 1)}
        className="relative z-10 h-[44px] px-3.5 min-[380px]:px-6 rounded-full text-[14px] min-[380px]:text-[15px] font-medium transition-colors duration-150 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy/20 focus-visible:outline-offset-1 flex items-center justify-center whitespace-nowrap min-w-[130px] min-[380px]:min-w-[150px] sm:min-w-[172px] bg-transparent border-none"
      >
        <span
          className={`transition-colors duration-150 ${
            activeIndex === 1 ? "text-white" : "text-navy"
          }`}
        >
          {options[1].label}
        </span>
      </button>
    </div>
  );
}
