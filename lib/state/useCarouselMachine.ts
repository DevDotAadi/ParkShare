"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export interface CarouselMachineOptions {
  totalItems: number;
  intervalMs?: number;
}

export interface CarouselMachineReturn {
  activeIndex: number;
  epoch: number;
  isPlaying: boolean;
  isPaused: boolean;
  select: (index: number) => void;
  next: () => void;
  prev: () => void;
  handlers: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onFocusCapture: () => void;
    onBlurCapture: () => void;
    onTouchStart: (e: React.TouchEvent) => void;
    onTouchEnd: (e: React.TouchEvent) => void;
  };
  attributes: {
    "data-state": "playing" | "paused";
    "data-active-index": number;
    "data-total-items": number;
  };
}

export function useCarouselMachine({
  totalItems,
  intervalMs = 6000,
}: CarouselMachineOptions): CarouselMachineReturn {
  const isReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [epoch, setEpoch] = useState(0);

  // Discrete pause sources tracked explicitly
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isTabHidden, setIsTabHidden] = useState(false);
  const [isTouching, setIsTouching] = useState(false);

  const touchStartXRef = useRef<number | null>(null);

  // Tab visibility listener
  useEffect(() => {
    const handleVisibility = () => {
      setIsTabHidden(document.visibilityState === "hidden");
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  const isPaused = isHovered || isFocused || isTabHidden || isTouching || isReducedMotion;
  const isPlaying = !isPaused;

  const isPausedRef = useRef(isPaused);
  isPausedRef.current = isPaused;

  const select = useCallback(
    (index: number) => {
      setActiveIndex((index + totalItems) % totalItems);
      setEpoch((prev) => prev + 1);
    },
    [totalItems]
  );

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalItems);
    setEpoch((prev) => prev + 1);
  }, [totalItems]);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
    setEpoch((prev) => prev + 1);
  }, [totalItems]);

  // Guaranteed interval auto-advance cycle
  useEffect(() => {
    if (isReducedMotion) return;

    const timer = setInterval(() => {
      if (!isPausedRef.current) {
        next();
      }
    }, intervalMs);

    return () => clearInterval(timer);
  }, [next, epoch, isReducedMotion, intervalMs]);

  // Touch swipe and touch pause handling
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    setIsTouching(true);
    touchStartXRef.current = e.touches[0].clientX;
  }, []);

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      setIsTouching(false);
      if (touchStartXRef.current === null) return;

      const touchEndX = e.changedTouches[0].clientX;
      const deltaX = touchEndX - touchStartXRef.current;
      touchStartXRef.current = null;

      // 50px threshold for swipe detection
      if (deltaX < -50) {
        next();
      } else if (deltaX > 50) {
        prev();
      }
    },
    [next, prev]
  );

  return {
    activeIndex,
    epoch,
    isPlaying,
    isPaused,
    select,
    next,
    prev,
    handlers: {
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      onFocusCapture: () => setIsFocused(true),
      onBlurCapture: () => setIsFocused(false),
      onTouchStart,
      onTouchEnd,
    },
    attributes: {
      "data-state": isPlaying ? "playing" : "paused",
      "data-active-index": activeIndex,
      "data-total-items": totalItems,
    },
  };
}
