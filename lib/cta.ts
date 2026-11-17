/**
 * SINGLE SOURCE OF TRUTH FOR PARKSHARE CALL-TO-ACTIONS
 *
 * The site has exactly two primary actions:
 * 1. Drivers: "Find parking"
 * 2. Owners:  "List a spot"
 *
 * Whenever both appear together, the order is always "Find parking" first,
 * then "List a spot".
 */

// TODO: Replace href with the real app or signup URL; changing it here updates every button on the site.
export const findParking = {
  label: "Find parking",
  href: "#spaces",
} as const;

// TODO: Replace href with the real app or signup URL; changing it here updates every button on the site.
export const listSpot = {
  label: "List a spot",
  href: "#owners",
} as const;
