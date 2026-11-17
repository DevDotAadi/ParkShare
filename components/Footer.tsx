"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#10294B]/[0.08] pt-16 pb-12 sm:pt-20 sm:pb-16 text-navy relative overflow-hidden">
      <div className="wrap flex flex-col relative z-10">
        {/* Top Area: Brand & Categorized Links */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16 w-full">
          {/* Brand Column */}
          <div className="flex flex-col items-start gap-4 max-w-xs w-full shrink-0">
            <Link
              href="#top"
              className="inline-block transition-opacity hover:opacity-85"
              aria-label="ParkShare home"
            >
              <Image
                src="/logo-text-navy.png"
                alt="ParkShare"
                width={160}
                height={28}
                className="h-7 w-auto object-contain block"
              />
            </Link>

            <p className="text-[15px] leading-relaxed text-[#566070] font-normal">
              Parking shared between neighbours, homes and businesses.
            </p>
          </div>

          {/* Categorized Link Columns */}
          <nav aria-label="Footer navigation" className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 w-full lg:w-auto">
            {/* Category 1: Explore */}
            <div className="flex flex-col items-start gap-3">
              <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#566070] mb-1">
                Explore
              </span>
              <a
                href="#spaces"
                className="text-[15px] text-navy/75 hover:text-navy transition-colors duration-150"
              >
                Spaces
              </a>
              <a
                href="#how"
                className="text-[15px] text-navy/75 hover:text-navy transition-colors duration-150"
              >
                Working
              </a>
              <a
                href="#pricing"
                className="text-[15px] text-navy/75 hover:text-navy transition-colors duration-150"
              >
                Pricing
              </a>
              <a
                href="#trust"
                className="text-[15px] text-navy/75 hover:text-navy transition-colors duration-150"
              >
                Safety
              </a>
              <a
                href="#faq"
                className="text-[15px] text-navy/75 hover:text-navy transition-colors duration-150"
              >
                FAQ
              </a>
            </div>

            {/* Category 2: Drivers */}
            <div className="flex flex-col items-start gap-3">
              <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#566070] mb-1">
                Drivers
              </span>
              <a
                href="#spaces"
                className="text-[15px] text-navy/75 hover:text-navy transition-colors duration-150"
              >
                Find parking
              </a>
              <a
                href="#pricing"
                className="text-[15px] text-navy/75 hover:text-navy transition-colors duration-150"
              >
                Hourly rates
              </a>
              <a
                href="#pricing"
                className="text-[15px] text-navy/75 hover:text-navy transition-colors duration-150"
              >
                Monthly pass
              </a>
            </div>

            {/* Category 3: Space Owners */}
            <div className="flex flex-col items-start gap-3">
              <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#566070] mb-1">
                Owners
              </span>
              <a
                href="#pricing"
                className="text-[15px] text-navy/75 hover:text-navy transition-colors duration-150"
              >
                List a spot
              </a>
              <a
                href="#pricing"
                className="text-[15px] text-navy/75 hover:text-navy transition-colors duration-150"
              >
                Host earnings
              </a>
              <a
                href="#how"
                className="text-[15px] text-navy/75 hover:text-navy transition-colors duration-150"
              >
                Hosting guide
              </a>
            </div>

            {/* Category 4: Safety & Trust */}
            <div className="flex flex-col items-start gap-3">
              <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#566070] mb-1">
                Safety
              </span>
              <a
                href="#trust"
                className="text-[15px] text-navy/75 hover:text-navy transition-colors duration-150"
              >
                Verified members
              </a>
              <a
                href="#trust"
                className="text-[15px] text-navy/75 hover:text-navy transition-colors duration-150"
              >
                Secure payments
              </a>
              <a
                href="#trust"
                className="text-[15px] text-navy/75 hover:text-navy transition-colors duration-150"
              >
                In-app chat
              </a>
            </div>
          </nav>
        </div>

        {/* Full-width Engraved Glass Divider */}
        <div className="w-full my-10 sm:my-12 flex flex-col" aria-hidden="true">
          <div className="w-full h-px bg-[#10294B]/[0.08]" />
          <div className="w-full h-px bg-white" />
        </div>

        {/* TODO before launch: add Privacy Policy and Terms pages and link them here, and add real contact and social links when they exist. */}
        {/* Bottom Bar: Copyright + Glassmorphic Social Buttons */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-6 w-full">
          <p className="text-[14px] text-[#566070] font-normal text-center sm:text-left">
            &copy; 2026 ParkShare
          </p>

          {/* Glassmorphic Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-10 h-10 rounded-full bg-[#F4F7FB]/80 backdrop-blur-sm border border-[#10294B]/[0.08] shadow-[inset_0_1px_1px_#FFFFFF,0_1px_2px_rgba(16,41,75,0.05)] flex items-center justify-center text-navy hover:bg-white hover:border-[#10294B]/20 hover:shadow-[0_2px_4px_rgba(16,41,75,0.08)] transition-all duration-150"
            >
              <Twitter className="w-4 h-4 stroke-[1.8]" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-[#F4F7FB]/80 backdrop-blur-sm border border-[#10294B]/[0.08] shadow-[inset_0_1px_1px_#FFFFFF,0_1px_2px_rgba(16,41,75,0.05)] flex items-center justify-center text-navy hover:bg-white hover:border-[#10294B]/20 hover:shadow-[0_2px_4px_rgba(16,41,75,0.08)] transition-all duration-150"
            >
              <Instagram className="w-4 h-4 stroke-[1.8]" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-[#F4F7FB]/80 backdrop-blur-sm border border-[#10294B]/[0.08] shadow-[inset_0_1px_1px_#FFFFFF,0_1px_2px_rgba(16,41,75,0.05)] flex items-center justify-center text-navy hover:bg-white hover:border-[#10294B]/20 hover:shadow-[0_2px_4px_rgba(16,41,75,0.08)] transition-all duration-150"
            >
              <Linkedin className="w-4 h-4 stroke-[1.8]" />
            </a>
            <a
              href="#top"
              aria-label="Email"
              className="w-10 h-10 rounded-full bg-[#F4F7FB]/80 backdrop-blur-sm border border-[#10294B]/[0.08] shadow-[inset_0_1px_1px_#FFFFFF,0_1px_2px_rgba(16,41,75,0.05)] flex items-center justify-center text-navy hover:bg-white hover:border-[#10294B]/20 hover:shadow-[0_2px_4px_rgba(16,41,75,0.08)] transition-all duration-150"
            >
              <Mail className="w-4 h-4 stroke-[1.8]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
