import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const footerLinks = [
    { label: "Spaces", href: "#spaces" },
    { label: "How it works", href: "#how" },
    { label: "Pricing", href: "#pricing" },
    { label: "Safety", href: "#trust" },
  ];

  return (
    <footer className="w-full bg-[#F5F3ED] pt-12 pb-8 sm:pt-16 sm:pb-10">
      <div className="wrap flex flex-col">
        {/* Layout: Single row on desktop with justify-between & items-start; single column on mobile */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-12 w-full">
          {/* Left: Navy logo (44px tall, links to #top) + tagline (16px gap) */}
          <div className="flex flex-col items-start gap-4 max-w-[22em]">
            <Link
              href="#top"
              className="inline-block transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-cobalt focus-visible:outline-offset-2 rounded"
              aria-label="ParkShare home"
            >
              <Image
                src="/logo-mark-navy.png"
                alt="ParkShare"
                width={160}
                height={44}
                className="h-[44px] w-auto object-contain block"
              />
            </Link>
            <p className="text-[16px] leading-[1.5] text-[#566070] font-normal">
              Parking shared between neighbours, homes and businesses.
            </p>
          </div>

          {/* Right: One list of four links in a single column, left-aligned, 12px gap, no heading */}
          <nav aria-label="Footer" className="flex flex-col gap-3">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="min-h-[44px] inline-flex items-center text-[16px] font-medium text-[#1D2430] hover:text-cobalt transition-colors duration-150 no-underline focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-cobalt focus-visible:outline-offset-2 rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* 1px Hairline (line token: rgba(16, 41, 75, 0.14)) */}
        <div
          className="w-full mt-12 border-t border-[#10294B]/[0.14]"
          aria-hidden="true"
        />

        {/* TODO before launch: add Privacy Policy and Terms pages and link them here, and add real contact and social links when they exist. */}
        <div className="pt-6">
          <p className="text-[14px] text-[#566070] font-normal">
            &copy; 2026 ParkShare
          </p>
        </div>
      </div>
    </footer>
  );
}
