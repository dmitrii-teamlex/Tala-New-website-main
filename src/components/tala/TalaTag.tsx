import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

/**
 * TalaTag (Chip/Badge)
 *
 * Small label used for categorization across cases, blog, filters.
 *
 * Variants:
 * - color: light-grey (bordered, muted text), black (filled, light text)
 * - size: S (16px padding), XS (12px padding)
 *
 * Usage:
 *   <TalaTag>AI</TalaTag>
 *   <TalaTag color="black" size="S">Free</TalaTag>
 */

const tagVariants = cva(
  "inline-flex items-center rounded-pill font-body text-body-xs whitespace-nowrap",
  {
    variants: {
      color: {
        "light-grey": "bg-tala-0 border border-tala-20 text-tala-50",
        black: "bg-tala-100 text-tala-10",
      },
      size: {
        S: "px-4 py-2",
        XS: "px-3 py-2",
      },
    },
    defaultVariants: {
      color: "light-grey",
      size: "XS",
    },
  }
);

interface TalaTagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {}

function TalaTag({ className, color, size, children, ...props }: TalaTagProps) {
  return (
    <span className={cn(tagVariants({ color, size, className }))} {...props}>
      {children}
    </span>
  );
}

export { TalaTag, tagVariants };
