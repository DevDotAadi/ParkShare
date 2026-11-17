"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import CtaPair from "@/components/CtaPair";

export default function Header() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Navbar is only visible when scrolled all the way back to the top (<= 20px)
      setIsAtTop(window.scrollY <= 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Spaces", href: "#spaces" },
    { label: "How it works", href: "#how" },
    { label: "Pricing", href: "#pricing" },
    { label: "Safety", href: "#trust" },
  ];

  return (
    <header
      className={`h-[80px] w-full z-50 absolute top-0 left-0 right-0 bg-transparent transition-all duration-300 ease-in-out ${isAtTop
        ? "opacity-100 visible pointer-events-auto translate-y-0"
        : "opacity-0 invisible pointer-events-none -translate-y-4"
        }`}
    >
      {/* 3-Column Grid Container: 1fr auto 1fr mathematically centres the centre column */}
      <div className="wrap h-full grid grid-cols-[1fr_auto_1fr] items-center">
        {/* Left Column: Left-aligned Logo */}
        <div className="flex items-center justify-start">
          <Link
            href="#top"
            className="flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
            aria-label="ParkShare home"
          >
            <Image
              src="/logo-text-white.png"
              alt="ParkShare"
              width={160}
              height={28}
              className="h-[28px] w-auto object-contain block"
              priority
            />
          </Link>
        </div>

        {/* Centre Column: 4 Links (Helvetica 15px, weight 500, 40px tall, 16px px, 0 gap) */}
        <nav
          aria-label="Main"
          className="hidden min-[900px]:flex items-center gap-0 justify-center"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="h-[40px] px-4 inline-flex items-center justify-center text-[15px] font-medium transition-opacity duration-150 hover:opacity-80 no-underline text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Column: Right-aligned CtaPair size "md", align end, 8px gap */}
        <div className="flex items-center justify-end">
          {/* Desktop: CtaPair size "md", align end, 8px gap. Between 900px and 1100px shows only "Find parking" */}
          <div className="hidden min-[900px]:block">
            <CtaPair
              size="md"
              align="end"
              gap={8}
              hideSecondaryBelow1100={true}
              stackBelow={0}
            />
          </div>

          {/* Under 900px: 44px solid circular menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            className="min-[900px]:hidden inline-flex items-center justify-center w-[44px] h-[44px] rounded-full bg-white text-[#10294B] hover:bg-white/90 transition-colors duration-200"
          >
            <Menu className="w-5 h-5 stroke-[2.2]" />
          </button>
        </div>
      </div>

      {/* Full-screen Mobile Menu (under 900px) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-[#10294B] text-white z-50 flex flex-col p-6 min-[900px]:hidden overflow-y-auto animate-hero-block"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <Link
              href="#top"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center"
            >
              <Image
                src="/logo-text-white.png"
                alt="ParkShare"
                width={150}
                height={28}
                className="h-[28px] w-auto object-contain"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation menu"
              className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5 stroke-[2.2]" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 py-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-medium text-white/90 hover:text-white transition-opacity"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-white/10 w-full">
            <CtaPair
              size="md"
              forceStacked={true}
              onItemClick={() => setMobileMenuOpen(false)}
            />
          </div>
        </div>
      )}
    </header>
  );
}
