# Tala Design System — Claude Code Reference

## Overview

Tala is a marketing AI product. The website is a React + Vite + Tailwind + shadcn/ui application.
The design system lives in `src/components/tala/` and is documented at `/style-guide`.

## Tech Stack
- **React 18** with TypeScript
- **Vite** for build
- **Tailwind CSS 3** with custom design tokens
- **shadcn/ui** (Radix-based) for low-level primitives (Dialog, Select, etc.)
- **Tala components** (`@/components/tala`) for product-specific UI
- **React Router 6** for routing
- **CVA** (class-variance-authority) for component variants

## Design Tokens

### Colors (HSL CSS variables in `src/index.css`)
The Tala color scale goes from 0 (white) to 100 (near-black). Use `tala-{n}` in Tailwind.

| Token | Hex | Usage |
|---|---|---|
| `tala-0` | #FFFFFF | Card backgrounds, white surfaces |
| `tala-10` | #ECEBF1 | Page background, secondary surfaces, hover states |
| `tala-20` | #C3C4CE | Borders, dividers |
| `tala-30` | #A9AAB6 | Hover borders |
| `tala-40` | #91929F | Placeholder text, footer section titles |
| `tala-50` | #7B7C88 | Secondary/muted text, labels |
| `tala-60` | #666772 | Tertiary text |
| `tala-70` | #52535D | Body text (alternative) |
| `tala-80` | #40414A | Body text (primary for long-form content) |
| `tala-90` | #2F3037 | Dark text, nav items |
| `tala-100` | #1F2026 | Headings, buttons, darkest surfaces |
| `tala-brand` | #6851FF | Brand purple — used for hover accents on stats |
| `tala-red` | #D6232E | Error states, destructive actions |

### Typography
Two font families:
- **Headlines:** `font-headline` → Nohemi (Bold 700, Medium 500)
- **Body:** `font-body` → Helvetica (Regular 400)

Type scale (use Tailwind `text-{size}`):

| Token | Size | Line Height | Letter Spacing | Font |
|---|---|---|---|---|
| `text-h1` | 96px | 90px | -1px | Nohemi Bold |
| `text-h2` | 72px | 68px | 0 | Nohemi Bold |
| `text-h3` | 56px | 54px | 0 | Nohemi Bold |
| `text-h4` | 42px | 40px | 0 | Nohemi Bold |
| `text-h5` | 28px | 26px | 0 | Nohemi Medium |
| `text-h6` | 24px | 26px | 0 | Nohemi Medium |
| `text-body-xl` | 24px | 28px | 0 | Helvetica |
| `text-body-l` | 20px | 24px | 0 | Helvetica |
| `text-body-m` | 18px | 20px | -0.18px | Helvetica |
| `text-body-s` | 16px | 18px | 0 | Helvetica |
| `text-body-xs` | 14px | 16px | -0.5px | Helvetica |

### Border Radius
| Token | Value | Usage |
|---|---|---|
| `rounded-pill` | 100px | Buttons, tags, badges, navbar |
| `rounded-4xl` | 60px | Footer, large sections, person cards |
| `rounded-3xl` | 40px | Cards, modals, FAQ items |
| `rounded-2xl` | 20px | Inputs, impact badges, inner containers |
| `rounded-lg` | 8px | Small elements |

### Shadows
- `shadow-tala-m` → Navbar shadow: subtle double drop-shadow

## Component Library

All Tala components are in `src/components/tala/`. Import via barrel:
```tsx
import { TalaButton, TalaTag, TalaInput } from "@/components/tala";
```

### Primitive Components

| Component | Purpose | Key Props |
|---|---|---|
| `TalaButton` | All action buttons | `color`, `size` (L/M/S), `icon`, `iconOnly` |
| `TalaTag` | Labels, categories, badges | `color` (light-grey/black), `size` (S/XS) |
| `TalaInput` | Form text inputs | `label`, `required`, `error`, `showIcon` |
| `TalaCheckbox` | Round checkbox | `checked`, `onChange` |
| `TalaPersonBadge` | Avatar + name + role | `name`, `role`, `image` |

### Composed Components

| Component | Purpose | Key Props |
|---|---|---|
| `TalaNavbar` | Top navigation bar | `logo`, `items[]`, `ctaLabel` |
| `TalaFooter` | Dark footer with CTA | `logo`, `linkColumns[]`, `ctaHeading` |
| `TalaFaq` / `TalaFaqGroup` | Accordion FAQ | `question`, `answer`, `defaultOpen` |
| `TalaStatCard` | Big number stat card | `stat`, `label`, `description`, `logo` |
| `TalaCaseCard` | Case study preview | `logo`, `tags[]`, `statValue`, `description` |
| `TalaTestimonialCard` | Customer quote | `variant` (quote-block/carousel-card), `quote`, `authorName` |
| `TalaStepCard` | Process step with bullets | `step`, `title`, `bullets[]`, `impact` |
| `TalaSelectionCard` | Multi-select card | `title`, `subtitle`, `selected`, `size` (s/xs) |
| `TalaProcessStep` | How-it-works step tile | `step`, `heading`, `description`, `icons` |
| `TalaCaseCover` | Case study title header | `logo`, `tags[]`, `title` |
| `TalaCaseSidebar` | Case study info sidebar | `title`, `description`, `bullets[]`, `metadata[]` |
| `TalaArticleCard` | Blog article preview | `type` (small/big/hero), `tags[]`, `title` |

## Page Assembly Rules

When building a new Tala page:

1. **Page wrapper:** `min-h-screen bg-background`
2. **Content container:** `max-w-[1360px] mx-auto px-10`
3. **Section spacing:** `py-20` (80px) between major sections
4. **Section headers:** `font-headline font-bold text-h4 text-tala-60` — always muted, never black
5. **All white cards:** `bg-tala-0 rounded-3xl p-10` — 40px padding, 40px radius
6. **Card grids:** Use `gap-1` (4px) for tight grids, `gap-5` (20px) for loose
7. **Navbar:** Sticky at top, `z-50`, floating pill with shadow
8. **Footer:** Full-width dark bar with CTA card

## Common Patterns

### Hero Section
```
[Navbar - floating pill]
[Hero content - Nohemi Bold h3 or larger]
[CTA row - TalaButton + optional subtitle]
```

### Case Study Grid
```
[TalaCaseCover - full width]
[TalaCaseSidebar (left, 430px) + Content blocks (right, flex-1)]
[TalaTestimonialCard - full width]
```

### Stats Row
```
flex gap-1 items-start
[TalaStatCard] [TalaStatCard] [TalaStatCard]
```

### Blog Listing
```
[TalaArticleCard type="hero" - full width]
[TalaArticleCard type="big"] - 2 per row
[TalaArticleCard type="small"] - 3 per row
```

## Do NOT

- Use raw hex colors — always use `tala-{n}` tokens
- Use custom border-radius values — stick to the scale (pill, 4xl, 3xl, 2xl)
- Mix shadcn Button with TalaButton — use TalaButton for all visible actions
- Apply shadows other than `shadow-tala-m` — the design is intentionally flat
- Use serif fonts — Nohemi (headlines) and Helvetica (body) only
- Add dark mode overrides — Tala is light-mode only for now
