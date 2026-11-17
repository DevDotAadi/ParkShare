/**
 * Standard Agent & Developer State Definitions for ParkShare
 *
 * Exposes explicit data-state attributes for deterministic agent querying,
 * automated testing (E2E), and design system state styling.
 */

export type DataState = "active" | "inactive" | "open" | "closed" | "playing" | "paused";

export type PlaybackStatus = "playing" | "paused-hover" | "paused-focus" | "paused-visibility" | "paused-reduced-motion" | "manual";

export type PerspectiveMode = "drivers" | "owners";

export type HeaderVisibility = "at-top" | "scrolled-away";

export type ModalState = "closed" | "open";
