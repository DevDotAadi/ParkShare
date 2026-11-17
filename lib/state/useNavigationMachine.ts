"use client";

import { useState, useEffect, useCallback } from "react";

export function useNavigationMachine() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll threshold listener
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock with auto-cleanup on desktop resize or unmount
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const handleResize = () => {
        if (window.innerWidth >= 900) {
          setMobileMenuOpen(false);
        }
      };

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setMobileMenuOpen(false);
        }
      };

      window.addEventListener("resize", handleResize);
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const openMobileMenu = useCallback(() => setMobileMenuOpen(true), []);
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);
  const toggleMobileMenu = useCallback(
    () => setMobileMenuOpen((prev) => !prev),
    []
  );

  return {
    isAtTop,
    mobileMenuOpen,
    openMobileMenu,
    closeMobileMenu,
    toggleMobileMenu,
    headerAttributes: {
      "data-state": isAtTop ? "at-top" : "scrolled",
      "data-menu-state": mobileMenuOpen ? "open" : "closed",
    },
    menuButtonAttributes: {
      "aria-expanded": mobileMenuOpen,
      "aria-controls": "mobile-nav-dialog",
      "data-state": mobileMenuOpen ? "open" : "closed",
    },
  };
}
