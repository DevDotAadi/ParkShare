"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/**
 * PARKSHARE SHARED SKEUOMORPHIC BUTTON SYSTEM
 *
 * Rules:
 * - Exactly ONE visual variant site-wide: white skeuomorphic with an arrow chip.
 * - Body: Fully rounded pill, Helvetica 16px weight 500, navy #10294B.
 *   - Size "lg": height 52px, padding-left 24px, padding-right 8px (hero, Owners, final CTA).
 *   - Size "md": height 44px, padding-left 20px, padding-right 6px (navbar, mobile menu).
 * - Surface: #FFFFFF + vertical gradient to rgba(16,41,75,0.05). Edge: 1px solid rgba(16,41,75,0.14).
 *   - Layered shadow: inset 0 1px 0 #FFFFFF (top highlight), inset 0 -1px 0 rgba(16,41,75,0.08)
 *     (bottom inner edge), 0 1px 1px rgba(16,41,75,0.10), 0 6px 12px -4px rgba(16,41,75,0.28).
 *   - Works on sky-blue photo background, navy band, paper surface, and white background.
 * - Arrow chip: Circle on right, 36px ("lg") or 32px ("md"), vertically centred.
 *   - Lucide ArrowUpRight at 18px ("lg") or 16px ("md"), stroke width 2, navy #10294B.
 *   - Chip surface: #EEF2F7, solid, evenly filling the bubble with no bottom white line/gap.
 *   - Inset shadows: inset 0 1px 2px rgba(16,41,75,0.10).
 *   - Edge: 1px border rgba(16,41,75,0.08). Icon is aria-hidden.
 * - Hover: Body stays #FFFFFF (border-color darkens slightly), chip transitions subtly to cool grey #E2E8F0 (border-color rgba(16,41,75,0.14)), arrow stays navy #10294B.
 *   - No color inversion, no blue highlight, no bottom gap or crescent.
 *   - Transition ONLY background-color, color, border-color, and box-shadow over 150ms ease-in-out.
 *   - No translate, no scale, no shadow growth, no movement.
 * - Active (pressed): Shadows stay as they are except drop shadow becomes inset 0 1px 3px rgba(16,41,75,0.22).
 *   - Body background-color #F5F7FA. No movement.
 * - Focus-visible: Two-tone ring: 0 0 0 3px #FFFFFF, 0 0 0 6px #2864E8.
 * - Label: white-space nowrap, never wraps.
 * - Under 480px: Groups stack vertically full width (max 320px) with 12px gap, label left-aligned
 *   and chip pushed to far right (justify-content space-between).
 */

export interface ButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  size?: "md" | "lg";
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  href,
  size = "lg",
  children,
  className = "",
  onClick,
  type = "button",
  ...rest
}: ButtonProps) {
  const isLg = size === "lg";

  // Base sizing and layout
  const sizeClasses = isLg
    ? "h-[52px] pl-6 pr-2 gap-3"
    : "h-[44px] pl-5 pr-1.5 gap-3";

  const chipSizeClasses = isLg ? "w-[36px] h-[36px]" : "w-[32px] h-[32px]";

  const arrowIconSize = isLg ? 18 : 16;

  const combinedClasses = `btn-skeuo group ${sizeClasses} ${className}`;

  const content = (
    <>
      <span className="whitespace-nowrap tracking-normal leading-none font-medium">
        {children}
      </span>
      <span
        className={`btn-skeuo-chip ${chipSizeClasses}`}
        aria-hidden="true"
      >
        <ArrowUpRight
          size={arrowIconSize}
          strokeWidth={2}
          className="transition-colors duration-150 ease-in-out"
          aria-hidden="true"
        />
      </span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClasses}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        {...rest}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
