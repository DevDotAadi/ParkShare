"use client";

import React, { useState } from "react";

interface Spot {
  id: string;
  x: number;
  y: number;
  title: string;
  meta: string;
  route: string;
}

const spotsData: Record<string, Spot> = {
  a: {
    id: "a",
    x: 398,
    y: 96,
    title: "Covered driveway",
    meta: "4 min walk · Fits an SUV · Available now",
    route: "M62 236H318V96H398",
  },
  b: {
    id: "b",
    x: 226,
    y: 96,
    title: "Society basement",
    meta: "6 min walk · Covered · Until 8 pm",
    route: "M62 236H132V96H226",
  },
  c: {
    id: "c",
    x: 470,
    y: 196,
    title: "Office lot",
    meta: "3 min walk · Evenings and weekends · From 6 pm",
    route: "M62 236H470V196",
  },
  d: {
    id: "d",
    x: 132,
    y: 160,
    title: "Gated driveway",
    meta: "5 min walk · Fits a hatchback · Available now",
    route: "M62 236H132V160",
  },
  e: {
    id: "e",
    x: 254,
    y: 236,
    title: "Open lot by the market",
    meta: "2 min walk · Hourly · Available now",
    route: "M62 236H254",
  },
};

export default function SpotMap({
  activeLocationLabel = "Select a pin to explore",
}: {
  activeLocationLabel?: string;
}) {
  const [selectedSpotKey, setSelectedSpotKey] = useState<string>("a");
  const selectedSpot = spotsData[selectedSpotKey] || spotsData.a;

  return (
    <div
      className="relative bg-navy rounded-[20px] overflow-hidden shadow-2xl w-full"
      aria-label="Map of nearby spaces"
    >
      <div className="absolute left-4 top-4 font-body font-medium text-[13px] text-white bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-lg z-10 shadow-sm pointer-events-none">
        {activeLocationLabel}
      </div>

      <svg
        viewBox="0 0 560 420"
        className="w-full h-auto block select-none"
        role="group"
        aria-label="Nearby parking spaces. Select a pin to see details."
      >
        <rect width="560" height="420" fill="#10294B" />

        {/* Building Blocks */}
        <g fill="#183560">
          <rect x="20" y="20" width="96" height="62" rx="6" />
          <rect x="148" y="20" width="154" height="62" rx="6" />
          <rect x="334" y="20" width="120" height="62" rx="6" />
          <rect x="486" y="20" width="60" height="62" rx="6" />
          <rect x="20" y="110" width="96" height="112" rx="6" />
          <rect x="148" y="110" width="154" height="112" rx="6" />
          <rect x="334" y="110" width="120" height="112" rx="6" />
          <rect x="486" y="110" width="60" height="112" rx="6" />
          <rect x="20" y="250" width="96" height="60" rx="6" />
          <rect x="148" y="250" width="154" height="60" rx="6" />
          <rect x="334" y="250" width="120" height="60" rx="6" />
          <rect x="486" y="250" width="60" height="60" rx="6" />
        </g>

        {/* Street Lines */}
        <g
          stroke="#1F4175"
          strokeWidth="2"
          fill="none"
          strokeDasharray="8 12"
        >
          <path d="M0 96H560M0 236H560M132 0V330M318 0V330M470 0V330" />
        </g>

        {/* Active Route */}
        <path
          d={selectedSpot.route}
          fill="none"
          stroke="#2864E8"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-all duration-300"
        />

        {/* Start Point */}
        <circle
          cx="62"
          cy="236"
          r="8"
          fill="#FFFFFF"
          stroke="#2864E8"
          strokeWidth="4"
        />

        {/* Pins */}
        <g id="pins">
          {Object.entries(spotsData).map(([key, spot]) => {
            const isSelected = key === selectedSpotKey;
            return (
              <g
                key={key}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                aria-label={`${spot.title}, ${spot.meta}`}
                className="cursor-pointer focus:outline-none transition-transform duration-200"
                transform={`translate(${spot.x} ${spot.y}) scale(${isSelected ? 1.2 : 1})`}
                onClick={() => setSelectedSpotKey(key)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedSpotKey(key);
                  }
                }}
              >
                <path
                  d="M0 0C-12-12-18-20-18-30a18 18 0 0 1 36 0C18-20 12-12 0 0Z"
                  fill={isSelected ? "#FFB84D" : "#2864E8"}
                  className="transition-colors duration-200"
                />
                <text
                  y="-24"
                  textAnchor="middle"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                  fontWeight="800"
                  fontSize="16"
                  fill={isSelected ? "#10294B" : "#FFFFFF"}
                >
                  P
                </text>
              </g>
            );
          })}
        </g>
      </svg>

      {/* Detail Card Overlay */}
      <div className="absolute left-3.5 right-3.5 bottom-3.5 bg-white rounded-2xl p-3.5 flex items-center gap-3.5 shadow-lg text-navy z-10">
        <div
          className="flex-none w-11 h-11 rounded-xl bg-ice flex items-center justify-center font-medium text-xl text-navy"
          aria-hidden="true"
        >
          P
        </div>
        <div className="min-w-0 flex-1">
          <b className="block font-medium text-base leading-tight truncate">
            {selectedSpot.title}
          </b>
          <small className="block text-xs text-muted truncate mt-0.5">
            {selectedSpot.meta}
          </small>
        </div>
        <a
          href="#cta"
          className="ml-auto inline-flex items-center justify-center h-10 px-5 rounded-lg bg-cobalt hover:bg-cobalt-dark text-white font-medium text-sm transition-colors"
        >
          Book
        </a>
      </div>
    </div>
  );
}
