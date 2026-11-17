"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-white border-t border-[#10294B]/[0.08] pt-16 pb-12 sm:pt-20 sm:pb-16 text-navy relative overflow-hidden">
      <div className="wrap flex flex-col relative z-10">
        {/* Top Area: Brand & Newsletter + Link Columns */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16 w-full">
          {/* Brand & Newsletter Column */}
          <div className="flex flex-col items-start gap-6 max-w-sm w-full">
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

            <p className="text-[15px] leading-relaxed text-[#566070] font-normal max-w-xs">
              Parking shared between neighbours, homes and businesses.
            </p>

            {/* Glassmorphic Newsletter Pill Input */}
            <form onSubmit={handleSubmit} className="w-full max-w-[340px]">
              <div className="flex items-center p-1.5 pl-4 rounded-full bg-[#F4F7FB]/80 backdrop-blur-md border border-[#10294B]/[0.10] shadow-[inset_0_1px_2px_rgba(16,41,75,0.05),0_1px_0_#FFFFFF] focus-within:border-cobalt/40 focus-within:bg-white transition-all w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={subscribed ? "Thank you!" : "Your email"}
                  required
                  className="bg-transparent outline-none text-[14px] text-navy placeholder-[#566070]/60 flex-1 min-w-0 pr-2 font-normal"
                />
                <button
                  type="submit"
                  className="h-[36px] px-5 rounded-full bg-navy text-white text-[13px] font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.3),0_2px_4px_rgba(16,41,75,0.18)] transition-all hover:bg-navy/90 active:scale-[0.98] cursor-pointer shrink-0"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 w-full lg:w-auto">
            {/* Column 1: Product */}
            <div className="flex flex-col items-start gap-3">
              <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#566070] mb-1">
                Product
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
                Pricing
              </a>
              <a
                href="#how"
                className="text-[15px] text-navy/75 hover:text-navy transition-colors duration-150"
              >
                How it works
              </a>
              <a
                href="#pricing"
                className="text-[15px] text-navy/75 hover:text-navy transition-colors duration-150"
              >
                List a spot
              </a>
            </div>

            {/* Column 2: Company */}
            <div className="flex flex-col items-start gap-3">
              <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#566070] mb-1">
                Company
              </span>
              <a
                href="#pricing"
                className="text-[15px] text-navy/75 hover:text-navy transition-colors duration-150"
              >
                For space owners
              </a>
              <a
                href="#pricing"
                className="text-[15px] text-navy/75 hover:text-navy transition-colors duration-150"
              >
                Earnings calculator
              </a>
              <a
                href="#trust"
                className="text-[15px] text-navy/75 hover:text-navy transition-colors duration-150"
              >
                Safety &amp; trust
              </a>
              <a
                href="#cta"
                className="text-[15px] text-navy/75 hover:text-navy transition-colors duration-150"
              >
                Get started
              </a>
            </div>

            {/* Column 3: Safety */}
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
                In-app messaging
              </a>
              <a
                href="#trust"
                className="text-[15px] text-navy/75 hover:text-navy transition-colors duration-150"
              >
                Help &amp; FAQs
              </a>
            </div>
          </div>
        </div>

        {/* Full-width Engraved Glass Divider */}
        <div className="w-full my-10 sm:my-12 flex flex-col" aria-hidden="true">
          <div className="w-full h-px bg-[#10294B]/[0.08]" />
          <div className="w-full h-px bg-white" />
        </div>

        {/* Bottom Bar: Copyright + Glassmorphic Social Buttons */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-6 w-full">
          <p className="text-[14px] text-[#566070] font-normal text-center sm:text-left">
            &copy; 2026 ParkShare. All rights reserved.
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
              href="mailto:contact@parkshare.com"
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
