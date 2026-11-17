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

3. **Surface & Physical Depth**:
   - Background: `#FFFFFF` with a subtle vertical gradient: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(16, 41, 75, 0.05) 100%)`.
   - Edge: `1px solid rgba(16, 41, 75, 0.14)`.
   - Layered shadow stack:
     ```css
     box-shadow:
       inset 0 1px 0 #FFFFFF,
       inset 0 -1px 0 rgba(16, 41, 75, 0.08),
       0 1px 1px rgba(16, 41, 75, 0.10),
       0 6px 12px -4px rgba(16, 41, 75, 0.28);
     ```
   - Must work as a raised physical white key on all backgrounds: sky-blue photo background, navy band background, paper surface, and pure white background.

4. **Arrow Chip**:
   - Shape: Circle on the right, vertically centered.
   - Dimensions: `36px` diameter for size "lg", `32px` diameter for size "md".
   - Icon: Lucide `ArrowUpRight` (`18px` for "lg", `16px` for "md"), stroke width `2`, navy `#10294B` (`aria-hidden="true"`).
   - Chip surface: `background-color: #EEF2F7`, solid, evenly filling the entire bubble with no bottom white line/gap.
   - Chip shadows: `inset 0 1px 2px rgba(16, 41, 75, 0.10)`.
   - Chip edge: `1px solid rgba(16, 41, 75, 0.08)`. Reads as slightly pressed into the button.

5. **Interaction States**:
   - **Hover**:
     - Body background-color remains `#FFFFFF` (border-color enhances slightly to `rgba(16, 41, 75, 0.22)`). No blue highlight.
     - Arrow chip background shifts to subtle complementing cool grey `#E2E8F0` (border `rgba(16, 41, 75, 0.14)`).
     - Arrow icon remains navy `#10294B` (no high-contrast color inversion).
     - Full bubble is evenly filled edge-to-edge with no bottom gap or crescent.
     - Transition only `background-color`, `color`, `border-color`, and `box-shadow` over `150ms ease-in-out`.
     - Pointer cursor is active.
   - **Active (pressed)**:
     - Shadows: Inset top/bottom stay, main drop shadow replaced by `inset 0 1px 3px rgba(16, 41, 75, 0.22)`.
     - Body background shifts to `#F5F7FA`. Chip shifts to `#DCE3ED`. Still no movement.
   - **Focus-Visible**:
     - Two-tone ring: `0 0 0 3px #FFFFFF, 0 0 0 6px #2864E8` added to the existing shadow stack.

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
- Framed Panel: Margin top 56px (`mt-14`). Outer frame `rounded-[24px]` (mobile `20px`), padding `10px` (mobile `8px`), background `#EEF3FB`, 1px border `rgba(16,41,75,0.08)`, shadow `0 1px 2px rgba(16,41,75,0.05)`.
- Inside: ONE white card (`rounded-[14px]`, mobile `12px`, overflow hidden, no shadow), containing a 6-cell grid:
  - Desktop (≥900px): 3 columns x 2 rows
  - Tablet (600px - 899px): 2 columns x 3 rows
  - Mobile (<600px): 1 column x 6 rows
  - Separated by 1px hairlines (`#10294B]/[0.08]`) between cells only, with no missing or doubled borders at any breakpoint.
  - Cells in order: Verified members, Secure payments, Clear access details, Ratings both ways, Hourly, daily or monthly, In-app messaging.
  - Cell padding `32px` (mobile `24px`), static, no motion/lift.
