/**
 * Navbar and mobile menu show only Find parking. Hero, final call to action and other sections show both, Find parking first, then List a spot.
 */

import React from "react";
import Button from "@/components/ui/Button";
import { findParking, listSpot } from "@/lib/cta";

export interface CtaPairProps {
  size?: "md" | "lg";
  align?: "start" | "center" | "end";
  stackBelow?: number; // Breakpoint in px below which buttons stack vertically at full width (default 480)
  gap?: 8 | 12; // Gap in px between buttons (default 12)
  onItemClick?: () => void;
  className?: string;
  forceStacked?: boolean; // When true, always stacks vertically (e.g., mobile menu drawer)
}

export default function CtaPair({
  size = "lg",
  align = "center",
  stackBelow = 480,
  gap = 12,
  onItemClick,
  className = "",
  forceStacked = false,
}: CtaPairProps) {
  // Alignment classes for horizontal layout
  const alignClass =
    align === "start"
      ? "justify-start"
      : align === "end"
      ? "justify-end"
      : "justify-center";

  // Gap classes
  const gapClass = gap === 8 ? "gap-2" : "gap-3";

  if (forceStacked) {
    return (
      <div className={`flex flex-col items-center gap-3 w-full ${className}`}>
        <Button
          href={findParking.href}
          size={size}
          className="w-full max-w-[320px] justify-between"
          onClick={onItemClick}
        >
          {findParking.label}
        </Button>
        <Button
          href={listSpot.href}
          size={size}
          className="w-full max-w-[320px] justify-between"
          onClick={onItemClick}
        >
          {listSpot.label}
        </Button>
      </div>
    );
  }

  // Handle standard stacking under stackBelow (default 480px)
  const is480 = stackBelow === 480;

  const containerClasses = is480
    ? `flex flex-col min-[480px]:flex-row items-center ${alignClass} ${gapClass} ${className}`
    : `flex flex-row items-center ${alignClass} ${gapClass} ${className}`;

  const button1Classes = is480
    ? "w-full min-[480px]:w-auto max-w-[320px] min-[480px]:max-w-none justify-between min-[480px]:justify-center"
    : "justify-center";

  const button2Classes = is480
    ? "w-full min-[480px]:w-auto max-w-[320px] min-[480px]:max-w-none justify-between min-[480px]:justify-center"
    : "justify-center";

  return (
    <div className={containerClasses}>
      <Button
        href={findParking.href}
        size={size}
        className={button1Classes}
        onClick={onItemClick}
      >
        {findParking.label}
      </Button>

      <Button
        href={listSpot.href}
        size={size}
        className={button2Classes}
        onClick={onItemClick}
      >
        {listSpot.label}
      </Button>
    </div>
  );
}
