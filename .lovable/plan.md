

## Fix Build Error and Get All Pages Loading

### Problem
The TypeScript build fails because `TalaTag.tsx` has a type conflict: `HTMLAttributes<HTMLSpanElement>` defines `color` as `string`, but the CVA variant defines `color` as `"light-grey" | "black"`. These can't be simultaneously extended.

### Fix
**File: `src/components/tala/TalaTag.tsx`** — Change the interface to omit `color` from `HTMLAttributes` before extending with CVA variants:

```tsx
interface TalaTagProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color">,
    VariantProps<typeof tagVariants> {}
```

This is a one-line change that resolves the type conflict. No other files need modification — all pages and routes are already correctly configured in `App.tsx`.

