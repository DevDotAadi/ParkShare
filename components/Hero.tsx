"use client";

import React from "react";
import Image from "next/image";
import Header from "./Header";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      aria-label="ParkShare hero"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#1a86f8] from-50% via-[#1a86f8] via-70% to-white flex flex-col min-h-[100svh] min-h-[700px] max-h-[1080px] h-[100svh]"
    >
      {/* Navbar positioned inside Hero at the top */}
      <Header />

      {/* Background image layer anchored at bottom */}
      <div
        className="absolute inset-x-0 bottom-0 w-full pointer-events-none select-none z-0 hero-image-blend"
        style={{ height: "calc(100% - 90px)" }}
        aria-hidden="true"
      >
        <Image
          src="/hero-street.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover object-bottom max-[899px]:object-[38%_bottom]"
        />
      </div>

      {/* Readability Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#10294B]/[0.32] via-[#10294B]/[0.16] to-transparent pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* Smooth bottom blend into the section below */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 sm:h-44 lg:h-56 pointer-events-none z-10 hero-bottom-blend"
        aria-hidden="true"
      />

      {/* Hero Content Block: Centered perfectly both horizontally and vertically */}
      <div className="wrap relative z-20 w-full flex-1 flex flex-col items-center justify-center text-center pt-[80px] pb-[80px]">
        <div className="w-full flex flex-col items-center justify-center animate-hero-block">
          {/* Headline (h1): Single line, descriptive (6-8 words) */}
          <h1
            className="text-white text-center font-medium whitespace-nowrap"
            style={{
              fontSize: "clamp(22px, min(3.8vw, 6.2svh), 56px)",
              lineHeight: 1.1,
              letterSpacing: "-0.035em",
            }}
          >
            Book nearby parking or share your space.
          </h1>

          {/* Subheading: Single connected descriptive line */}
          <p className="mt-5 sm:mt-6 text-white text-center font-normal text-[15px] sm:text-[17px] md:text-[19px] leading-[1.45] max-w-none mx-auto text-white/95 sm:whitespace-nowrap">
            Book a nearby driveway, basement or office lot in minutes, or earn from the space you&apos;re not using.
          </p>

          {/* Buttons: Two skeuomorphic white buttons, 52px tall (size="lg"), 12px gap */}
          <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
            <Button
              href="#owners"
              size="lg"
              className="w-full sm:w-auto max-w-[320px] sm:max-w-none justify-between sm:justify-center"
            >
              List a spot
            </Button>
            <Button
              href="#how"
              size="lg"
              className="w-full sm:w-auto max-w-[320px] sm:max-w-none justify-between sm:justify-center"
            >
              See how it works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
