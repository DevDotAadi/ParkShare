"use client";

import React, { useState } from "react";
import { calculateEarnings, formatHour, calculateWindow } from "@/lib/estimate";

export default function EarningsEstimator() {
  const [rate, setRate] = useState<number>(50);
  const [hrs, setHrs] = useState<number>(8);
  const [days, setDays] = useState<number>(20);

  const { startHour, rangeText } = calculateWindow(hrs);
  const totalEarnings = calculateEarnings(rate, hrs, days);

  // Exact thumb centre offset calculations for CSS --fill
  const ratePercent = (rate - 10) / (500 - 10);
  const hrsPercent = (hrs - 1) / (24 - 1);
  const daysPercent = (days - 1) / (31 - 1);

  return (
    <div
      className="w-full rounded-[20px] min-[900px]:rounded-[24px] p-2 min-[900px]:p-[10px] bg-white/[0.08] border border-white/[0.14] shadow-none"
      role="group"
      aria-labelledby="estH"
    >
      {/* Inner white card */}
      <div className="w-full bg-white rounded-[12px] min-[900px]:rounded-[14px] p-6 sm:p-8 border-0 shadow-none">
        {/* Title */}
        <h3
          id="estH"
          className="text-navy text-[26px] font-medium leading-[1.2] tracking-[-0.01em]"
        >
          Estimate your earnings
        </h3>

        {/* 3 Slider Rows: Margin-top 32px, 28px gap */}
        <div className="mt-8 flex flex-col gap-7">
          {/* Row 1: Hourly Rate */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="rate"
                className="text-ink text-[16px] font-medium leading-none"
              >
                Your hourly rate
              </label>
              <output
                htmlFor="rate"
                className="text-navy text-[20px] font-bold tabular-nums leading-none"
              >
                ₹{rate.toLocaleString("en-IN")}
              </output>
            </div>
            <input
              id="rate"
              type="range"
              min={10}
              max={500}
              step={10}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="parkshare-slider"
              style={
                {
                  "--fill": `calc(${ratePercent * 100}% + ${(0.5 - ratePercent) * 24}px)`,
                } as React.CSSProperties
              }
            />
          </div>

          {/* Row 2: Hours Free per Day */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="hrs"
                className="text-ink text-[16px] font-medium leading-none"
              >
                Hours free per day
              </label>
              <output
                htmlFor="hrs"
                className="text-navy text-[20px] font-bold tabular-nums leading-none"
              >
                {hrs} {hrs === 1 ? "hr" : "hrs"}
              </output>
            </div>
            <input
              id="hrs"
              type="range"
              min={1}
              max={24}
              step={1}
              value={hrs}
              onChange={(e) => setHrs(Number(e.target.value))}
              className="parkshare-slider"
              style={
                {
                  "--fill": `calc(${hrsPercent * 100}% + ${(0.5 - hrsPercent) * 24}px)`,
                } as React.CSSProperties
              }
            />
          </div>

          {/* Row 3: Days Free per Month */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="days"
                className="text-ink text-[16px] font-medium leading-none"
              >
                Days free per month
              </label>
              <output
                htmlFor="days"
                className="text-navy text-[20px] font-bold tabular-nums leading-none"
              >
                {days} {days === 1 ? "day" : "days"}
              </output>
            </div>
            <input
              id="days"
              type="range"
              min={1}
              max={31}
              step={1}
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="parkshare-slider"
              style={
                {
                  "--fill": `calc(${daysPercent * 100}% + ${(0.5 - daysPercent) * 24}px)`,
                } as React.CSSProperties
              }
            />
          </div>
        </div>

        {/* Availability Block: Margin-top 36px */}
        <div className="mt-9">
          <div className="flex items-center justify-between text-[15px]">
            <span className="text-muted font-medium">When your space is free</span>
            <span className="font-bold text-navy tabular-nums">{rangeText}</span>
          </div>

          {/* 24-hour bar strip */}
          <div
            className="grid grid-cols-24 gap-[3px] mt-2 h-8"
            aria-hidden="true"
          >
            {Array.from({ length: 24 }).map((_, i) => {
              const isOn = hrs >= 24 || (i >= startHour && i < startHour + hrs);
              return (
                <div
                  key={i}
                  className={`h-full rounded-[4px] transition-colors duration-150 ${
                    isOn ? "bg-cobalt" : "bg-[#E1E6EE]"
                  }`}
                />
              );
            })}
          </div>

          {/* Timeline axis labels */}
          <div
            className="flex justify-between text-[12px] text-muted font-medium mt-2"
            aria-hidden="true"
          >
            <span>12 am</span>
            <span>6 am</span>
            <span>12 pm</span>
            <span>6 pm</span>
            <span>12 am</span>
          </div>
        </div>

        {/* Result Area: Margin-top 32px, 1px hairline, padding-top 28px */}
        <div className="mt-8 border-t border-line pt-7">
          <span className="block text-[15px] font-medium text-muted">
            Estimated per month
          </span>
          <output
            className="block font-bold text-navy text-[clamp(48px,5.5vw,68px)] leading-[1.05] tracking-[-0.03em] tabular-nums mt-2"
            aria-live="polite"
          >
            ₹{totalEarnings.toLocaleString("en-IN")}
          </output>
          <p className="mt-4 text-[14px] leading-[1.5] text-muted">
            An estimate if every available hour is booked at the rate you set.
            Actual earnings depend on demand in your area and any service fees.
          </p>
        </div>
      </div>
    </div>
  );
}
