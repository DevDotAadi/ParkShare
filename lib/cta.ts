/**
 * SINGLE SOURCE OF TRUTH FOR PARKSHARE CALL-TO-ACTIONS
 *
 * Navbar and mobile menu show only Find parking. Hero, final call to action and other sections show both, Find parking first, then List a spot.
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
