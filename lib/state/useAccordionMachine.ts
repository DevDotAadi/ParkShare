"use client";

import { useState, useCallback, useRef } from "react";

export interface AccordionMachineOptions {
  totalItems: number;
  defaultOpenIndex?: number | null;
  allowMultiple?: boolean;
}

export function useAccordionMachine({
  totalItems,
  defaultOpenIndex = 0,
  allowMultiple = false,
}: AccordionMachineOptions) {
  const [openIndices, setOpenIndices] = useState<number[]>(
    defaultOpenIndex !== null && defaultOpenIndex !== undefined ? [defaultOpenIndex] : []
  );

  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const isOpen = useCallback(
    (index: number) => openIndices.includes(index),
    [openIndices]
  );

  const toggle = useCallback(
    (index: number) => {
      setOpenIndices((prev) => {
        if (prev.includes(index)) {
          return prev.filter((i) => i !== index);
        } else {
          return allowMultiple ? [...prev, index] : [index];
        }
      });
    },
    [allowMultiple]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      let targetIndex = -1;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        targetIndex = (index + 1) % totalItems;
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        targetIndex = (index - 1 + totalItems) % totalItems;
      } else if (e.key === "Home") {
        e.preventDefault();
        targetIndex = 0;
      } else if (e.key === "End") {
        e.preventDefault();
        targetIndex = totalItems - 1;
      }

      if (targetIndex !== -1 && triggerRefs.current[targetIndex]) {
        triggerRefs.current[targetIndex]?.focus();
      }
    },
    [totalItems]
  );

  return {
    isOpen,
    toggle,
    openIndices,
    triggerRefs,
    handleKeyDown,
  };
}
