# Design Guidelines: Vestibular Grade Calculator

## Design Approach: Utility-First Design System

**Selected Framework:** Material Design principles with educational focus
**Rationale:** This is a utility-focused calculator requiring clarity, efficiency, and trust. Students need to quickly input grades and understand results without visual distractions.

---

## Core Design Elements

### A. Color Palette

**Light Mode (Primary):**
- Primary: 220 90% 56% (Professional blue - trust and education)
- Primary Hover: 220 90% 48%
- Background: 210 20% 98% (Soft neutral)
- Surface: 0 0% 100% (Pure white cards)
- Text Primary: 220 20% 20%
- Text Secondary: 220 15% 45%
- Border: 220 15% 88%
- Success: 142 76% 36% (Result display)
- Input Background: 220 15% 96%

**Dark Mode:**
- Primary: 220 90% 60%
- Background: 220 20% 10%
- Surface: 220 18% 14%
- Text Primary: 210 20% 98%
- Text Secondary: 220 15% 70%
- Border: 220 15% 25%
- Input Background: 220 18% 18%

### B. Typography

**Font Stack:**
- Primary: 'Inter' via Google Fonts CDN
- Fallback: system-ui, -apple-system, sans-serif

**Scale:**
- Page Title (h1): text-2xl md:text-3xl font-bold
- Section Headers: text-xl font-semibold
- Labels: text-sm font-medium
- Body/Input: text-base
- Result Display: text-xl md:text-2xl font-bold
- Helper Text: text-xs

### C. Layout System

**Spacing Primitives:** Use Tailwind units of 2, 4, 6, 8, 12, 16
- Component padding: p-6 md:p-8
- Input spacing: space-y-4
- Section gaps: gap-6
- Container max-width: max-w-2xl

**Grid Structure:**
- Single column form layout (utility focus)
- Responsive: Full width mobile, centered card on desktop
- Form inputs: w-full with consistent spacing

### D. Component Library

**Form Elements:**
- Select Dropdown:
  - Full rounded corners (rounded-lg)
  - Clear border with focus ring (ring-2 ring-primary)
  - 48px minimum touch target height
  - Chevron icon indicator (Heroicons)
  
- Number Inputs:
  - Grouped by subject with clear labels above
  - Min/max validation indicators (0-100)
  - Placeholder text showing range
  - Focus state with blue ring
  - Error state with red border for invalid values
  
- Primary Button:
  - Full width on mobile, auto on desktop
  - Substantial padding (px-8 py-3)
  - Rounded (rounded-lg)
  - Strong primary color with hover lift effect
  - Clear "Calcular Nota Final" text

**Cards & Containers:**
- Main Calculator Card:
  - White background with subtle shadow (shadow-lg)
  - Rounded corners (rounded-xl)
  - Generous padding for breathing room
  - Centered on viewport with max-width constraint

**Result Display:**
- Prominent typography (text-2xl font-bold)
- Success color for final score
- Contained in subtle background panel
- Clear visual separation from input area
- Format: "Nota Final: XX.XX / 100"

**Dynamic Content:**
- Smooth transitions when switching groups (transition-all duration-200)
- Fade-in animation for new form fields
- Subject count badge on group selector

### E. Interaction Patterns

**Form Behavior:**
- Real-time validation on blur
- Clear focus indicators on all inputs
- Disabled state for calculate button until all fields filled
- Loading state during calculation (if async)

**Group Switching:**
- Instant field update with smooth transition
- Preserve entered values if returning to same group
- Visual feedback showing active group

**Result Display:**
- Slide-in animation from bottom
- Prominent display with clear typography
- Option to recalculate with one-click clear

---

## Visual Hierarchy

1. **Primary Focus:** Group selector (immediately visible)
2. **Secondary:** Form inputs (clear, organized vertical stack)
3. **Tertiary:** Calculate button (strong CTA)
4. **Result:** Final score (bold, celebratory display)

---

## Responsive Behavior

- **Mobile (< 768px):** Single column, full-width inputs, stacked layout
- **Desktop (≥ 768px):** Centered card (max-w-2xl), comfortable white space
- Touch targets minimum 44px for mobile usability

---

## Accessibility Considerations

- High contrast text (WCAG AA minimum)
- Form labels properly associated with inputs
- Error messages read by screen readers
- Keyboard navigation fully supported
- Focus visible on all interactive elements
- Portuguese language attribute (lang="pt-BR")

---

## Images

**No images required.** This is a utility calculator where visual clarity and functional efficiency take precedence over decorative imagery. The design relies on typography, spacing, and color to create a professional, trustworthy interface.