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
 * - Surface: Pure #FFFFFF crisp key appearance with single clean edge (no blue tint or highlights).
 *   - Edge: 1px solid rgba(16,41,75,0.14) uniform edge all around.
 *   - Inset shadows: inset 0 1px 0 rgba(255,255,255,1) (top highlight only).
 * - Arrow chip: Circle on right, 36px ("lg") or 32px ("md"), vertically centred.
 *   - Lucide ArrowUpRight at 18px ("lg") or 16px ("md"), stroke width 2, navy #10294B.
 *   - Chip surface: Pure #FFFFFF, 1px border rgba(16,41,75,0.12), shadow 0 1px 2px rgba(16,41,75,0.06).
 *   - Edge: 1px border rgba(16,41,75,0.12).
 * - Hover: Pure #FFFFFF (border slightly enhances), chip stays pure #FFFFFF (border rgba(16,41,75,0.22)).
 *   - Absolutely NO blue highlight, NO color inversion, arrow stays navy #10294B.
 * - Active (pressed): Bottom band becomes inset 0 1px 3px rgba(16,41,75,0.16), chip #DCE3ED, no blue.
 * - Focus-visible: Clean focus ring for keyboard navigation only.
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
