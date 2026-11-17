# ParkShare Design & Development Rules

## Shared Button System Rules (PART A)

Every call-to-action button across the ParkShare application must use the shared skeuomorphic white button component (`components/ui/Button.tsx`).

### Rules:
1. **Single Visual Variant**:
   - There is exactly ONE visual CTA variant across the entire site: white skeuomorphic with an arrow chip containing Lucide `ArrowUpRight`.
   - All other CTA variants (cobalt solid, navy solid, transparent outline, ghost, split-arrow circle) are strictly deprecated/deleted.
   - The segmented toggle pill in "How it works" is a state selector, not a CTA, and remains unchanged.

2. **Button Anatomy**:
   - Layout: `[label] [arrow chip]` laid out in a single horizontal row with a `12px` (`gap-3`) spacing.
   - Body: Fully rounded pill (`rounded-full`), font Helvetica `16px`, weight 500 (`font-medium`), colour navy `#10294B`.
   - Label wrapping: `whitespace-nowrap`, never wrap the label.
   - Sizing:
     - **Size "lg" (52px tall)**: Height 52px, padding-left 24px (`pl-6`), padding-right 8px (`pr-2`). Used for Hero, Owners, and Final CTA sections.
     - **Size "md" (44px tall)**: Height 44px, padding-left 20px (`pl-5`), padding-right 6px (`pr-1.5`). Used for Navbar and mobile menu drawer.

3. **Surface & Physical Depth (Inner Lighting Only)**:
   - Background: Pure `#FFFFFF` (crisp white appearance, single clean edge, no blue tint).
   - Edge: `1px solid rgba(16, 41, 75, 0.14)` uniform all around.
   - Inset box-shadow: `inset 0 1px 0 rgba(255, 255, 255, 1)` (top highlight only; no inner rim or bottom shade bands).
   - Must work as a raised physical white key on all backgrounds through inner lighting and clean outline alone.

4. **Arrow Chip**:
   - Shape: Circle on the right, vertically centered.
   - Dimensions: `36px` diameter for size "lg", `32px` diameter for size "md".
   - Icon: Lucide `ArrowUpRight` (`18px` for "lg", `16px` for "md"), stroke width `2`, navy `#10294B`.
   - Chip surface: Pure `#FFFFFF`, `border: 1px solid rgba(16, 41, 75, 0.12)`, `shadow: 0 1px 2px rgba(16, 41, 75, 0.06)`. No blue tint or blue highlights.
   - Chip edge: `1px solid rgba(16, 41, 75, 0.12)`.

5. **Interaction States**:
   - **Hover**:
     - Body background-color stays `#FFFFFF` (border-color enhances slightly to `rgba(16, 41, 75, 0.24)`).
     - Arrow chip stays pure `#FFFFFF` with border `rgba(16, 41, 75, 0.22)`, arrow stays navy `#10294B`.
     - Absolutely NO blue highlight, NO cobalt chip, NO color inversion.
     - Transition only `background-color`, `color`, `border-color`, and `box-shadow` over `150ms ease-in-out`.
     - Pointer cursor is active.
   - **Active (pressed)**:
     - Body shifts subtly to `#F8F9FA`, shadow `inset 0 1px 2px rgba(16, 41, 75, 0.12)`.
     - Chip becomes `#F5F5F5` with `inset 0 1px 2px rgba(16, 41, 75, 0.12)`. No blue.
   - **Focus-Visible**:
     - Clean focus ring added to the existing shadow stack only during keyboard navigation.

6. **Responsive Stacking**:
   - Under `480px`, groups of two buttons stack vertically at full width (`w-full max-w-[320px]`) with a `12px` gap.
   - The label stays left-aligned and the chip is pushed to the far right (`justify-between`).

---

## Safety & Trust Section Rules (PART B)

- Section container: `id="trust"`, background pure white (`#FFFFFF`), standard padding `py-[clamp(72px,9vw,128px)]`, standard container `.wrap`, `scroll-mt-[96px]`.

---

## Background & Spacing Rules

- The global background of the application body and all daytime content sections (Hero blend, Pricing, How it works, Safety) must be **pure white (`#FFFFFF`)**.
- The beige/grey paper color (`#F5F3ED`) is completely forbidden across the entire site. All gaps and spacers between sections must show clean pure white.
- Header: Centered label `"Safety and trust"` (`#2864E8`, 20px/22px, font-medium), `h2` `"Built for trust on both sides of the gate."` (navy `#10294B`, font-medium, `clamp(24px, 3.6vw, 50px)`, text-wrap balance). No sub-paragraph.
- Framed Panel: Margin top matching above sections rhythm (`mt-9 sm:mt-11`). Outer frame `rounded-[24px]` (mobile `20px`), padding `10px` (mobile `8px`), background `#EEF3FB`, 1px border `rgba(16,41,75,0.08)`, shadow `0 1px 2px rgba(16,41,75,0.05)`.
- Inside: ONE white card (`rounded-[14px]`, mobile `12px`, overflow hidden, no shadow), containing a 6-cell grid:
  - Desktop (≥900px): 3 columns x 2 rows
  - Tablet (600px - 899px): 2 columns x 3 rows
  - Mobile (<600px): 1 column x 6 rows
  - Separated by 1px hairlines (`#10294B]/[0.08]`) between cells only, with no missing or doubled borders at any breakpoint.
  - Cells in order: Verified members, Secure payments, Clear access details, Ratings both ways, Hourly, daily or monthly, In-app messaging.
  - Cell padding `32px` (mobile `24px`), static, no motion/lift.
